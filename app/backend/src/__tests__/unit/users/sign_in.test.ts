import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import server from '../../../api/app';
import Users from '../../../database/models/User';
import {
  userLogin,
  wrongUserLogin,
  createdUser,
} from '../__mocks__/usersMock';

chai.use(chaiHttp);
const { expect } = chai;

describe('Sign in route tests', () => {
  afterEach(() => sinon.restore());

  it('On success', async () => {
    sinon.stub(Users, 'findOne' as never).resolves(createdUser);
    await chai.request(server.app)
      .post('/sign_in')
      .send(userLogin)
      .then(({ status, body }) => {
        expect(status).to.be.eq(200);
        expect(body).to.haveOwnProperty("token");
        expect(body).to.be.deep.eq({ ...userLogin, id: 1, token: body.token });
      });
  });

  it('When username does not exist on db', async () => {
    sinon.stub(Users, 'findOne').resolves();
    await chai.request(server.app)
      .post('/sign_in')
      .send(wrongUserLogin)
      .then(({ status, body }) => {
        expect(status).to.be.eq(404);
        expect(body.message).to.be.eq("User Not found");
      });
  });

  it('When invalid password', async () => {
    sinon.stub(Users, 'findOne' as never).resolves(createdUser);
    await chai.request(server.app)
      .post('/sign_in')
      .send(wrongUserLogin)
      .then(({ status, body }) => {
        expect(status).to.be.eq(401);
        expect(body.message).to.be.eq("Wrong Password");
      });
  });

  it('When nothing is sent by frontend', async () => {
    sinon.stub(Users, 'findOne' as never).resolves(createdUser);
    await chai.request(server.app)
      .post('/sign_in')
      .then(({ status, body }) => {
        expect(status).to.be.eq(500);
        expect(body.message).to.be.eq("Internal Error");
      });
  });
});
