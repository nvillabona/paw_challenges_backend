const express = require('express');
const bodyParser = require('body-parser');
const { dbConnection } = require('./database/config');
const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/', require('./routes'));

// Database connection
dbConnection();

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
