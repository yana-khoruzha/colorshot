const express = require('express');
const app = express();
const PORT = 4000;
const { userValidator } = require('./services/validators');
const { create } = require('./controllers/users-controller');

app.use(express.json());

app.get(
  '/',
  (req, res, next) => {
    console.log('step1');
    next();
  },
  (req, res, next) => {
    console.log('step2');
    res.send('fff');
  }
);

app.post('/api/signup', userValidator, create);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
