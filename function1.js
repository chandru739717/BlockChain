const jwt = require('jsonwebtoken');

const secretKey = 'mysecretkey';

const user = {
  id: 1,
  username: 'john_doe',
};

const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

console.log('Generated Token:', token);

jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error('JWT Verification Failed:', err.message);
  } else {
    console.log('Decoded Token:', decoded);
  }
});
