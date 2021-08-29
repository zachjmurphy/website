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

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html')
});

app.listen(3000, () => console.log('Server has started...'));
