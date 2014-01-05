var assert = require('assert');

suite('Streams', function() {
  test('in the server', function(done, server) {
    server.eval(function() {
      Streams.insert({title: 'hello title'});
      var docs = Streams.find().fetch();
      emit('docs', docs);
    });

    server.once('docs', function(docs) {
      assert.equal(docs.length, 1);
      done();
    });
  });
});