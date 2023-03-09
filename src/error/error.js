// @Handle errors
// @desc  handles all errors

class CustomError extends Error {
  constructor(message, status_code) {
    super(message)
    this.statusCode = status_code;
  }
}

const CreateError = (message, status_code) => {
 return new CustomError(message, status_code);
}

module.exports = {
  CustomError,
  CreateError
}