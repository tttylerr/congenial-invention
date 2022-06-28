const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.get('/docs', (req, res) => {
    res.sendFile(path.resolve('pages/docs.html'));
});
  
app.get('/projects', (req, res) => {
    res.sendFile(path.resolve('pages/projects.html'));
});
  
app.get('/about', (req, res) => {
    res.sendFile(path.resolve('pages/about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve('pages/contact.html'));
});

app.get('/issue', (req, res) => {
    res.sendFile(path.resolve('pages/report.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`);
});