'use strict';

require('./support/globals');

var grunt = require('grunt');
var Mocha = require('mocha');

var mocha = new Mocha({ reporter: 'mochawesome', ui: 'bdd'});

function run(cb) {
  var files = grunt.file.expand('test/backend/**/*.spec.js');

  files.forEach(function (file) {
    mocha.addFile(file);
  });

  cb();
}

run(function (err) {
  if (err) { throw err; }
  mocha.run(function (failures) {
    process.exit(failures);
  });
});
