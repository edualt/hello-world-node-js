const express = require('express');
const app = express();
const request = require('supertest');

app.get('/api/v1/welcome', (req, res) => {
  res.send('Hello, World!');
});

describe('GET /api/v1/welcome', () => {
  it('respond with Hello, World!', (done) => {
    request(app)
      .get('/api/v1/welcome')
      .expect('Hello, World!', done);
  });
});


