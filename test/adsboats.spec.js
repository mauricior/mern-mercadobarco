const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;

const mongoose = require("mongoose");
require("sinon-mongoose");

// Importing our user model for our unit testing.
var AdBoat = require("../models/AdBoat");

describe('Testing API adsboats route', () => {
  describe('Get adsboats', () => {
    it('should return the adsboats', (done) => {
      var AdBoatMock = sinon.mock(AdBoat);
      var expectedResult = {status: true, adboat: []};
      AdBoatMock.expects('find').yields(null, expectedResult);
      AdBoat.find((err, result) => {
        AdBoatMock.verify();
        AdBoatMock.restore();
        expect(result.status).to.be.true;
        done();
      });
    });

    it('should return error', (done) => {
      var AdBoatMock = sinon.mock(AdBoat);
      var expectedResult = {status: false, error: "Something went wrong"};
      AdBoatMock.expects('find').yields(expectedResult, null);
      AdBoat.find((err, result) => {
        AdBoatMock.verify();
        AdBoatMock.restore();
        expect(err.status).to.not.be.true;
        done();
      });
    });
  });

  describe('Post a new adboat', () => {
    it('should create new adboat', (done) => {
      var AdBoatMock = sinon.mock(new AdBoat({ adboat: 'Save new adboat from mock'}));
      var adboat = AdBoatMock.object;
      var expectedResult = { status: true };
      AdBoatMock.expects('save').yields(null, expectedResult);
      adboat.save((err, result) => {
        AdBoatMock.verify();
        AdBoatMock.restore();
        expect(result.status).to.be.true;
        done();
      });
    });

    it('should return error', (done) => {
      var AdBoatMock = sinon.mock(new AdBoat({ adboat: 'Save new adboat from mock'}));
      var adboat = AdBoatMock.object;
      var expectedResult = { status: false };
      AdBoatMock.expects('save').yields(expectedResult, null);
      adboat.save((err, result) => {
        AdBoatMock.verify();
        AdBoatMock.restore();
        expect(err.status).to.not.be.true;
        done();
      });
    });
  });

  describe('Update an adboat', () => {
    it('should update an adboat by id', (done) => {
      var AdBoatMock = sinon.mock(new AdBoat({ adboat: 'Update an adboat from mock'}));
      var adboat = AdBoatMock.object;
      var expectedResult = { success: true };
      AdBoatMock.expects('save').withArgs({_id: 12345}).yields(null, expectedResult);
      adboat.save((err,result) => {
        AdBoatMock.verify();
        AdBoatMock.restore();
        expect(result.status).to.be.true;
        done();
      });
    });

    it('should return error if update action is failed', (done) => {
      var AdBoatMock = sinon.mock(new AdBoat({ adboat: 'Update an adboat from mock'}));
      var adboat = AdBoatMock.object;
      var expectedResult = { success: false };
      AdBoatMock.expects('save').withArgs({_id: 12345}).yields(expectedResult, null);
      adboat.save((err, result) => {
        AdBoatMock.verify();
        AdBoatMock.restore();
        expect(err.status).to.not.be.true;
        done();
      });
    });
  });

  describe('Delete an adboat', () => {
    it('should delete an adboat by id', (done) => {
      var AdBoatMock = sinon.mock(AdBoat);
      var expectedResult = { status: true};
      AdBoatMock.expects('remove').withArgs({_id: 12345}).yields(null, expectedResult);
      AdBoat.remove({_id: 12345}, (err, result) => {
        AdBoatMock.verify();
        AdBoatMock.restore();
        expect(result.status).to.be.true;
        done();
      })
    });

    it('should return if delete action is failed', (done) => {
      var AdBoatMock = sinon.mock(AdBoat);
      var expectedResult = { status: false };
      AdBoatMock.expects('remove').withArgs({_id: 12345}).yields(expectedResult, null);
      AdBoat.remove({_id: 12345}, (err, result) => {
        AdBoatMock.verify();
        AdBoatMock.restore();
        expect(err.status).to.not.be.true;
        done();
      });
    });
  });
});
