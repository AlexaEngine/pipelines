import chai from 'chai';
import chaiHttp from 'chai-http';

const { expect } = chai;
chai.use(chaiHttp);

const app = require('../index'); 

describe('GET /', () => {
  it('should return "Hello World"', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello World');
        done();
      });
  });
});
