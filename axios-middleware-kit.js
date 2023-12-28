// Import axios from dependencies
const axios = require('axios');

// Define the middleware kit
const axiosMiddlewareKit = {};

// Middleware function to log request details
axiosMiddlewareKit.logRequestDetails = function (req, res, next) {
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Method: ${req.method}`);
  console.log(`Request Headers: ${JSON.stringify(req.headers)}`);
  next();
};

// Middleware function to handle errors
axiosMiddlewareKit.handleError = function (err, req, res, next) {
  console.error(`Error Message: ${err.message}`);
  res.status(500).send('An error occurred');
};

// Middleware function to add custom headers
axiosMiddlewareKit.addCustomHeaders = function (req, res, next) {
  req.headers['Custom-Header'] = 'Custom Value';
  next();
};

// Middleware function to handle response
axiosMiddlewareKit.handleResponse = function (req, res, next) {
  res.on('finish', () => {
    console.log(`Response Status: ${res.statusCode}`);
    console.log(`Response Headers: ${JSON.stringify(res.getHeaders())}`);
  });
  next();
};

// Export the middleware kit
module.exports = axiosMiddlewareKit;
