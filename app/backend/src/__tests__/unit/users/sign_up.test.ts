import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import server from '../../../api/app';
import Users from '../../../database/models/Users';
import {
  userLogin,
  wrongUserLogin,
  createdUser,
  userAndAccount,
  signUpErrorMessages,
} from '../__mocks__/usersMock';

chai.use(chaiHttp);
const { expect } = chai;

describe('Sign up route tests', () => {
  beforeEach(() => {
    sinon.stub(Users, 'create' as never).resolves(createdUser);
  });

  afterEach(() => sinon.restore());

  it('On success', async () => {
    sinon.stub(Users, 'findOne').resolves();
    await chai.request(server.app)
      .post('/sign_up')
      .send(userAndAccount)
      .then(({ status, body }) => {
        expect(status).to.be.eq(201);
        expect(body).to.haveOwnProperty("token");
        expect(body).to.be.deep.eq(
          { ...userLogin, id: createdUser.id, token: body.token },
        );
      });
  });

  it('When user exists', async () => {
    sinon.stub(Users, 'findOne' as never).resolves(userAndAccount);
    await chai.request(server.app)
      .post('/sign_up')
      .send(userAndAccount)
      .then(({ status, body }) => {
        expect(status).to.be.eq(409);
        expect(body.message).to.be.eq("User Already Exists");
      });
  });

  it('When invalid data', async () => {
    sinon.stub(Users, 'findOne' as never).resolves();
    await chai.request(server.app)
      .post('/sign_up')
      .send(wrongUserLogin)
      .then(({ status, body }) => {
        expect(status).to.be.eq(400);
        body.message.map((err: string) => {
          expect(signUpErrorMessages.includes(err)).to.be.true;
        });
      });
  });
});
