import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import server from '../../../api/app';
import Accounts from '../../../database/models/Accounts';
import { createdUser } from '../__mocks__/usersMock';
import { createdAccount } from '../__mocks__/accountsMock';

chai.use(chaiHttp);
const { expect } = chai;

describe('Accounts route tests', () => {
  beforeEach(() => {
    sinon.stub(Accounts, 'create' as never).resolves(createdAccount);
    sinon.stub(Accounts, 'findOne' as never).resolves(createdAccount);
    sinon.stub(Accounts, 'update' as never).resolves();
  });

  afterEach(() => sinon.restore());

  it('Get account by id', async () => {
    await chai.request(server.app)
      .get('/account/1')
      .set('Authorization', createdUser.token)
      .then(({ status, body }) => {
        expect(status).to.be.eq(200);
        expect(body).to.be.deep.eq(createdAccount);
      });
  });

  it('Creates an account', async () => {
    await chai.request(server.app)
      .post('/account')
      .send(createdAccount)
      .then(({ status, body }) => {
        expect(status).to.be.eq(201);
        expect(body).to.be.deep.eq(createdAccount);
      });
  });

  it('Updates an account balance', async () => {
    await chai.request(server.app)
      .put('/account/1')
      .set('Authorization', createdUser.token)
      .send({ balance: 150 })
      .then(({ status }) => {
        expect(status).to.be.eq(200);
      });
  });
});
