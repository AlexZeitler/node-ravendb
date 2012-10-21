(function() {
  var Datastore, ravendb;

  Datastore = require('./datastore');

  ravendb = function(datastoreUrl, databaseName) {
    var ds;
    if (databaseName == null) databaseName = 'Default';
    ds = new Datastore(datastoreUrl);
    return ds.useDatabase(databaseName);
  };

  ravendb.Datastore = Datastore;

  ravendb.Database = require('./database');

  module.exports = ravendb;

}).call(this);
