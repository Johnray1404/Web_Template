const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/router');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', router);
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
