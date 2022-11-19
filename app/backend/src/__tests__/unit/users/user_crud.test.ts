import chai from 'chai';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import server from '../../../api/app';
import { createdUser } from '../__mocks__/usersMock';
import Users from '../../../database/models/User';

chai.use(chaiHttp);
const { expect } = chai;

describe('User route tests', () => {
  beforeEach(() => {
    sinon.stub(Users, 'findOne' as never).resolves(createdUser);
    sinon.stub(Users, 'update' as never).resolves(createdUser);
    sinon.stub(Users, 'destroy' as never).resolves();
  });

  afterEach(() => sinon.restore());

  it('Get user by id', async () => {
    await chai.request(server.app)
      .get('/user/1')
      .set('Authorization', createdUser.token)
      .then(({ status, body }) => {
        expect(status).to.be.eq(200);
        expect(body).to.be.deep.eq(createdUser);
      });
  });

  it('Update user', async () => {
    await chai.request(server.app)
      .put('/user/1')
      .set('Authorization', createdUser.token)
      .send({ username: "Update", password: 'newPass123' })
      .then(({ status }) => {
        expect(status).to.be.eq(200);
      });
  });

  it('Delete user', async () => {
    await chai.request(server.app)
      .delete('/user/1')
      .set('Authorization', createdUser.token)
      .then(({ status }) => {
        expect(status).to.be.eq(204);
      });
  });
});
