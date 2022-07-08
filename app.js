const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.listen(port, () => {
  console.log(`Server runs on port ${port}`);
});
