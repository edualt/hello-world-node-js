const express = require('express');
const app = express();
const request = require('supertest');

app.get('/api/v1/welcome', (req, res) => {
  res.send('Hello, World3!');
});

describe('GET /api/v1/welcome', () => {
  it('respond with Hello, World3!', (done) => {
    request(app)
      .get('/api/v1/welcome')
      .expect('Hello, World3!', done);
  });
});


