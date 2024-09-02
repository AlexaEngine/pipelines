import request from 'supertest';
import app from '../index.js';

let server;  // Define a variable to hold the server instance

beforeAll((done) => {
  server = app.listen(4000, () => { // Start the server on a different port for testing
    console.log('Server started for testing');
    done();  // Signal Jest that setup is complete
  });
});

afterAll((done) => {
  server.close(() => {  // Close the server after tests
    console.log('Server closed after testing');
    done();  // Signal Jest that teardown is complete
  });
});

describe('GET /', () => {
  it('should return "Hello World"', async () => {
    const res = await request(server).get('/');  // Use server instance here
    expect(res.statusCode).toBe(200);  // Expect HTTP status 200
    expect(res.text).toBe('Hello World');  // Expect response text
  }, 10000);  // Increase timeout to 10 seconds for this test
});
