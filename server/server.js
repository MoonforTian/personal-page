const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

// connect to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // database password
    password: 'Mysql123@', 
    database: 'liuyan'
});

// connect database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        return;
    }
    console.log('Connected to database');
});

// receive request from POST ，store the message to comment form
app.post('/message', (req, res) => {
    let post = { name: req.body.username, message: req.body.message };
    let sql = 'INSERT INTO comment SET ?';
    db.query(sql, post, (err, result) => {
        if (err) {
            console.error('Error during the query:', err);
            res.status(500).send('Error inserting message');
        } else {
            console.log('Insert result:', result);
            res.send('Message added successfully');
        }
    });
});

// set the listen port for server
const PORT = process.env.PORT || 3309;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
