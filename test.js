// Import the necessary modules
const axios = require('axios');
const axiosMiddlewareKit = require('./axios-middleware-kit');
const assert = require('assert');

// Define a mock request and response object
const mockRequest = {
  url: 'http://localhost:3000',
  method: 'GET',
  headers: {}
};

const mockResponse = {
  status(code) {
    this.statusCode = code;
    return this;
  },
  send(message) {
    this.message = message;
    return this;
  },
  getHeaders() {
    return this.headers;
  },
  on(event, callback) {
    if (event === 'finish') {
      callback();
    }
  },
  headers: {}
};

// Define a mock next function
const next = () => {};

// Test the logRequestDetails middleware
axiosMiddlewareKit.logRequestDetails(mockRequest, mockResponse, next);
assert.strictEqual(mockRequest.url, 'http://localhost:3000');
assert.strictEqual(mockRequest.method, 'GET');

// Test the handleError middleware
const error = new Error('Test error');
axiosMiddlewareKit.handleError(error, mockRequest, mockResponse, next);
assert.strictEqual(mockResponse.statusCode, 500);
assert.strictEqual(mockResponse.message, 'An error occurred');

// Test the addCustomHeaders middleware
axiosMiddlewareKit.addCustomHeaders(mockRequest, mockResponse, next);
assert.strictEqual(mockRequest.headers['Custom-Header'], 'Custom Value');

// Test the handleResponse middleware
axiosMiddlewareKit.handleResponse(mockRequest, mockResponse, next);
assert.strictEqual(mockResponse.statusCode, undefined);
