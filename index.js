const express = require('express');
const app = express();

app.use(express.static('public'));

// Set up Rate Limiter: Maximum of five requests per minute
var RateLimit = require('express-rate-limit');
var limiter = new RateLimit({
  windowMs: 1*60*1000, // 1 minute
  max: 5
});

// Apply Rate Limiter to all Requests
app.use(limiter);

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

// Gallery Page
app.get('/gallery', (req, res) => {
  res.sendFile(process.cwd() + '/views/gallery.html')
});

// Listen & Start Server
app.listen(3000, () => console.log('Server has started...'));