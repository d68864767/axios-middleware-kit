# axios-middleware-kit

A middleware kit for Axios. This package provides a set of middleware functions to enhance your experience with Axios. It includes features like logging request details, handling errors, adding custom headers, and handling responses.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install axios-middleware-kit.

```bash
npm install axios-middleware-kit
```

## Usage

```javascript
const axiosMiddlewareKit = require('axios-middleware-kit');

// Use the middleware functions
app.use(axiosMiddlewareKit.logRequestDetails);
app.use(axiosMiddlewareKit.handleError);
app.use(axiosMiddlewareKit.addCustomHeaders);
app.use(axiosMiddlewareKit.handleResponse);
```

## Middleware Functions

- `logRequestDetails(req, res, next)`: Logs the details of the request including URL, method, and headers.
- `handleError(err, req, res, next)`: Handles any errors that occur during the request.
- `addCustomHeaders(req, res, next)`: Adds custom headers to the request.
- `handleResponse(req, res, next)`: Handles the response, logging the status and headers.

## Running Tests

To run tests, use the following command:

```bash
npm test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
