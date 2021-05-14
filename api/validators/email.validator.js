const validator = require('email-validator');
const DB = require('../DB/db');

const validate = function({ email, id }) {

  if (!validator.validate(email)) {
    return `Email '${email}' does not have a valid format`;
  }

  const isNewUser = id === undefined || id === null;
  const isEmailAlreadyUsed = !!DB.users.get().find(user => {
    const hasSameEmail = user.email === email;
    const isUpdatingSameUser = user.id === id;
    return hasSameEmail && (isNewUser || !isUpdatingSameUser);
  });
  if (isEmailAlreadyUsed) {
    return `Email '${email}' is been used by another user`;
  }

  return null;
}

const EmailValidator = { validate };

module.exports = EmailValidator;
