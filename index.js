const express = require('express');
const app = express();

app.use(express.static('public'));

// Home Page
app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html')
});

// About Page
app.get('/about', (req, res) => {
  res.sendFile(process.cwd() + '/views/about.html')
});

// Projects Page
app.get('/projects', (req, res) => {
  res.sendFile(process.cwd() + '/views/projects.html')
});

app.use(function (req, res, next) {
  res.status(404).sendFile(process.cwd() + '/views/error.html')
});

// Listen & Start Server
app.listen(3000, () => console.log('Server has started...'));