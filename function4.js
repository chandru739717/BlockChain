const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'mysecretkey';

app.get('/login', (req, res) => {
  // Assuming authentication is successful
  const user = { id: 1, username: 'john_doe' };
  const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
  res.json({ token });
});

app.get('/protected-route', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid Token' });
    }

    res.json({ message: 'Welcome to the protected route', user: decoded });
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
