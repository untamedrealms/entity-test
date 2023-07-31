```javascript
const jwt = require('jsonwebtoken');

const authenticate = async (request) => {
  const { headers } = request;
  const token = headers.get('Authorization').split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (err) {
    return null;
  }
};

module.exports = {
  authenticate,
};
```