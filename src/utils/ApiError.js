class ApiError extends Error {
  constructor(message, statusCode,errors = [],stack = "") {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode 
    this.errors = errors
    this.data = null
    thisk.message = message
    if (stack) {
      Error.captureStackTrace(this, this.constructor);
    }
}
}

export default ApiError;