const EmailValidator = require('../validators/email.validator');
const users = require('../DB/users.db');
const DB = require('../DB/db');

describe('EmailValidator', () => {

  it('should determine that an email is valid', () => {
    const email = 'a-valid@email.com';
    const user = { email };
    spyOn(DB.users, 'get').and.returnValue(users);
    expect(EmailValidator.validate(user)).toBe(null);
  });

  it('should return an error when an email does not have a valid format', () => {
    const email = 'not-a-valid-email';
    const user = { email };
    spyOn(DB.users, 'get').and.returnValue(users);
    expect(EmailValidator.validate(user)).toBe(`Email '${email}' does not have a valid format`);
  });

  it('should return an error when an email is already used by another user during creation', () => {
    const email = users[10].email;  // Existing username in users.js
    const id = undefined;
    const user = { email, id };
    spyOn(DB.users, 'get').and.returnValue(users);
    expect(EmailValidator.validate(user)).toBe(`Email '${email}' is been used by another user`);
  });

  it('should return an error when an email is already used by another user during a update', () => {
    const email = users[10].email;  // Existing username in users.js
    const id = users[10].id + 1;   // Simulate that we update a user other than the 10th one
    spyOn(DB.users, 'get').and.returnValue(users);
    expect(EmailValidator.validate({ email, id })).toBe(`Email '${email}' is been used by another user`);
  });
});
