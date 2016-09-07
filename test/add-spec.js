const chai = require('chai');
//below we use .should();
const supertest = require('supertest')
//app.js is our API, you'll notice at the bottom of the file there is a line
// that says: module.exports = app;
const app = require('../app.js')
//there are 3 main modules that we can bring in and use for testing
//Brooks favorite is called supertest
const should = chai.should();
//below we bring in our testing modele that was installed w command
//$ npm install --save-dev supertest
const api = supertest(app);

//after bringing in supertest module we write our describes

describe('Sending a POST to /api/add', () => {
  describe('should succeed', () => {
    it('in adding two numbers together', (done) => {
//remember that AJAX calls are asynchronous, that is why we add the parameter (done) above
      api.post('/api/add')
    //the below code is not needed if above we have:
    // api.post('api/add/5/2')
      .send({
        num1: 5,
        num2: 2,
      })
      .expect(200)
      //above is HTTP status code
      .end((err, res) => {
        if(err) return done(err);

        res.body.result.should.be.equal(7);

        done();
        // since we are in a asynchronous environment we have to call done() to indicate we are finished
      });
    });
  });

    describe('should fail', () => {
      it('when nothing is sent in', (done) => {
        api.post('/api/add')
        .expect(432)
        //https error code 432
        .end((err, res) => {
          if(err) return done(err)

          res.body.message.should.be.equal('No Data Fool')
          done();
        })
      })
    })
})
