function PassGen(options) {
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()-_=+';

  const chars = [
    options.lowercase ? lowercaseChars : '',
    options.uppercase ? uppercaseChars : '',
    options.numbers ? numbers : '',
    options.specialChars ? specialChars : ''
  ].join('');

  let password = '';

  const length = Number(options.length) > 0 && Number.isInteger(Number(options.length)) ? Number(options.length) : 8;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

export default PassGen;
