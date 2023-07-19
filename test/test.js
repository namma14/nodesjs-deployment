var request = require('supertest');
var app = require('../index');
describe('GET/will', function(){
    it('respond with Hello from will page Nachiketa', function(done){
        request(app).get('/will').expect('{"response":"Hello from will page Nachiketa"}', done);
    });
});