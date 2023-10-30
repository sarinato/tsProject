const express = require('express');
const cors = require('cors')
const app = express();
const fo = 'fofo'
app.use(cors());

app.use('/register', (req, res) => {
  res.send({
    token: 'test12345'
  });
});

app.use('/exit', (req, res) => {
  res.send({
    token: 'test12345'
  });
});



app.use('/login', (req, res) => {
  res.send({
    token: 'test12345'
  });
});


app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
