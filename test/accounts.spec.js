const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;

const mongoose = require("mongoose");
require("sinon-mongoose");

// Importing our user model for our unit testing.
var User = require("../models/User");

describe('Testing API accounts route', () => {
  describe('Get users by fields', () => {
    // Test will pass if we get user by the username
    it('should return the users ', (done) => {
      var UserMock = sinon.mock(User);
      var expectedResult = {status: true, user: []};
      UserMock.expects('find').yields(null, expectedResult);
      User.find((err, result) => {
        UserMock.verify();
        UserMock.restore();
        expect(result.status).to.be.true;
        done();
      });
    });

    // Test will pass if we fail to get a user
    it("should return error", (done) => {
      var UserMock = sinon.mock(User);
      var expectedResult = {status: false, error: "Something went wrong"};
      UserMock.expects('find').yields(expectedResult, null);
      User.find((err, result) => {
        UserMock.verify();
        UserMock.restore();
        expect(err.status).to.not.be.true;
        done();
      })
    });
  });

  describe('Post a new User', () => {
    // Test will pass if the User is saved
    it("should create new user", (done) => {
      var UserMock = sinon.mock(new User({ user: 'Save new user from mock'}));
      var user = UserMock.object;
      var expectedResult = { status: true };
      UserMock.expects('save').yields(null, expectedResult);
      user.save((err, result) => {
        UserMock.verify();
        UserMock.restore();
        expect(result.status).to.be.true;
        done();
      });
    });

    // Test will pass if the User is not saved
    it("should return error, if user not saved", (done) => {
      var UserMock = sinon.mock(new User({ user: 'Save new todo from mock'}));
      var user = UserMock.object;
      var expectedResult = { status: false };
      UserMock.expects('save').yields(expectedResult, null);
      user.save((err, result) => {
        UserMock.verify();
        UserMock.restore();
        expect(err.status).to.not.be.true;
        done();
      });
    });
  });
});
