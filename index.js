const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html')
});

app.listen(3000, () => console.log('server started'));