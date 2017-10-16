function StatusError(msg, status) {
    const err = Error.call(this, msg);
    err.status = status;
    err.name = 'StatusError';
    return err;
}

StatusError.prototype = Object.create(Error.prototype, {
  constructor: { value: StatusError }
});

module.exports = StatusError;
