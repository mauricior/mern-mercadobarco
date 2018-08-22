const should = require("should");
const request = require("request");
const chai = require("chai");
const expect = chai.expect;
const accounts = require('../routes/api/accounts');
const urlBase = "https://localhost:5000/api/";

describe('Testing API accounts route', () => {
  it('should return the users by username, if arent any return a empty list [] ', () => {
    request.get(
      {
        url: urlBase + "accounts/users/testing"
      },
      function(error, response, body) {
        // convert the return to a json object
        var _body = {};
        try {
          _body = JSON.parse(body);
        }
        catch(e) {
          _body ={};
        }

        // Verify if the result called was successfully
        expect(response.statusCode).to.equal(200);

        // Verify if return the correct properties
        if(_body.should.be.a.List()) {
          done();
        }
      }
    );
  });

  it('should return the users by email', () => {

  });

  it('should register a new user', () => {

  });

});
