import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import server from '../../../api/app';
import Transactions from '../../../database/models/Transaction';
import { createdUser } from '../__mocks__/usersMock';
import {
  transactionData,
  createdTransaction,
} from '../__mocks__/transactionsMock';

chai.use(chaiHttp);
const { expect } = chai;

describe('Transactions route tests', () => {
  beforeEach(() => {
    sinon.stub(Transactions, 'findAll' as never).resolves([createdTransaction]);
    sinon.stub(Transactions, 'create' as never).resolves(createdTransaction);
    sinon.stub(Transactions, 'findOne' as never).resolves(createdTransaction);
    sinon.stub(Transactions, 'update' as never).resolves();
  });

  afterEach(() => sinon.restore());

  it('Get all transactions', async () => {
    await chai.request(server.app)
      .get('/transaction')
      .set('Authorization', createdUser.token)
      .then(({ status, body }) => {
        expect(status).to.be.eq(200);
        expect(body).to.be.an('array');
        expect(body).to.be.deep.eq([createdTransaction]);
      });
  });

  it('Get transactions by id', async () => {
    await chai.request(server.app)
      .get('/transaction/1')
      .set('Authorization', createdUser.token)
      .then(({ status, body }) => {
        expect(status).to.be.eq(200);
        expect(body).to.be.deep.eq(createdTransaction);
      });
  });

  it('Creates an transactions', async () => {
    await chai.request(server.app)
      .post('/transaction')
      .set('Authorization', createdUser.token)
      .send(transactionData)
      .then(({ status, body }) => {
        expect(status).to.be.eq(201);
        expect(body).to.be.deep.eq(createdTransaction);
      });
  });

  it('Updates an transactions value', async () => {
    await chai.request(server.app)
      .put('/transaction/1')
      .set('Authorization', createdUser.token)
      .send({ ...transactionData, value: 50 })
      .then(({ status }) => {
        expect(status).to.be.eq(200);
      });
  });
});
