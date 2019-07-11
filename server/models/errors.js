export class ApplicationError extends Error {
  constructor(message = 'Something went wrong. Please try again.') {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.message = message;
    this.status = 'error';
  };
}
