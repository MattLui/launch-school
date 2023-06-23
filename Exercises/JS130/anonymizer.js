const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateRandomString(length) {
  let result = '';
  for (let index = 0; index < length; index += 1) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

let Account = function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function _validatePassword(password) {
    return password === userPassword;
  }

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = generateRandomString(16);
      return this;
    },
    reanonymize(password) {
      if (_validatePassword(password)) {
        this.displayName = generateRandomString(16);
        return true;
      } else {
        return 'Invalid Password';
      }
    },
    resetPassword (oldPassword, newPassword) {
      if (_validatePassword(oldPassword)) {
        userPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },
    firstName(password) {
      if (_validatePassword(password)) {
        return userFirstName;
      } else {
        return 'Invalid Password';
      }
    },
    lastName(password) {
      if (_validatePassword(password)) {
        return userLastName;
      } else {
        return 'Invalid Password';
      }
    },
    email(password) {
      if (_validatePassword(password)) {
        return userEmail;
      } else {
        return 'Invalid Password';
      }
    },
    displayName() {
      return this.displayName;
    }
  };
}();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));   // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc'));// logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
console.log(fooBar);