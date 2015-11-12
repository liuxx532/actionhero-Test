var should = require('should');
var actionheroPrototype = require('actionhero').actionheroPrototype;
var actionhero = new actionheroPrototype();
var api, firstNumber;

describe('Action: RandomNumber', function(){

  before(function(done){
    actionhero.start(function(err, a){
      api = a;
      done();
    })
  });

  after(function(done){
    actionhero.stop(function(){
      done();
    });
  });

  it('generates random numbers', function(done){
    api.specHelper.runAction('randomNumber', function(response){
      response.randomNumber.should.be.a.Number;
      response.randomNumber.should.be.within(0,1);
      firstNumber = response.randomNumber;
      done();
    });
  });

  it('is unique / random', function(done){
    api.specHelper.runAction('randomNumber', function(response){
      response.randomNumber.should.be.a.Number;
      response.randomNumber.should.not.equal(firstNumber);
      done();
    });
  });

});
