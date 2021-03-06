// Generated by CoffeeScript 1.4.0
(function() {
  var Datastore, assert, createDefaultDatabase, datastoreOperations, helpers, testino;

  Datastore = require('../datastore');

  testino = require('testino');

  assert = require('assert');

  helpers = require('./helpers');

  module.exports = datastoreOperations = testino.createFixture('Datastore Operations');

  createDefaultDatabase = function(datastore) {};

  datastoreOperations.tests = {
    'should be able to delete a database tenant': function() {
      var ds;
      ds = new Datastore();
      helpers.mockApiCalls(ds.defaultDatabase, 204);
      return ds.deleteDatabase('Foobar', function(error, result) {
        result = JSON.parse(result);
        assert.equal(result.url, 'http://localhost:8080/docs/Raven/Databases/Foobar');
        return assert.equal(result.verb, 'delete');
      });
    }
  };

  if (require.main === module) {
    console.log(module.exports.run());
  }

}).call(this);
