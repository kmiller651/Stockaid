/* TODO:
-Setup database connections with registration
-Add stock analyzation graphics
*/

const express = require('express');
const cors = require('cors');
const yahooStockPrices = require('yahoo-finance');
const {json} = require('body-parser');
const mysql = require('mysql2');
// const db = require('sqlconnect');

const app = express();

app.use(cors());
app.use(json());

//Gets the input from the searchbar and returns requested Stock Ticker info
app.post('/search', async(req, res) => {
  try {
    let stock = await yahooStockPrices.quote({
      symbol: req.body.input,
      modules: ['price', 'summaryDetail', 'recommendationTrend', 'defaultKeyStatistics', 'financialData']
    });
    res.json(stock);
  } catch(err) {
    res.json('Error');
  }
  
});

//User login information
// app.post('/login', async(req, res) => {
//   const connection = db.connect();
//   const username = req.body.username
//   const pass = req.body.password
//   connection.query('SELECT * FROM people WHERE userName = ? AND userPass = ?'),
//   (err, results, fields) => {
//     console.log(results);
//     console.log(fields);
//     if (results == 0) {
//       res.json('Username or Password not valid.')
//     } else {
//       res.json('Logged in successfully!')
//     }
//   }
  
// });

// app.post('/register', async(req, res) => {
//   const connection = db.connect();

//   connection.query(  'SELECT * FROM `people` WHERE `userName` = ?'),
//   (err, results, fields) => {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//     if (results == 0) {
//       connection.query( 'INSERT INTO people (userName, userPass, email, first_name, last_name)\
//       VALUES (?, ?, ?, ?, ?)',
//        (err) => {console.log(err);})
//     } else {
//       res.json('Username already taken.')
//     }
//   });
  
// });


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);