
var Browser = require('zombie');
var assert = require('assert');
var expect = require('chai').expect;
var http = require('http'); 
var request = require('superagent');

function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

 before(function() {
    this.server = http.createServer(handleRequest).listen(3000);
    // initialize the browser using the same port as the test application
    this.browser = new Browser({ site: 'http://localhost:3000' });
  });

  // load the index page
  before(function(done) {
    this.browser.visit('/', done);
  });
  
  after(function(done) {
    this.server.close(done);
  });
  
 
describe('cake enquiry page', function() {
  it('should show cake enquiry form', function() {
    assert.ok(this.browser.success);
    assert.equal(this.browser.text('form label'), 'Name:');
  });
});

