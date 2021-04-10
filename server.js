
/* TODO:
-Add page components for routers
-Setup database connections with registration
-Add stock analyzation
*/

const express = require('express');
const cors = require('cors');
const yahooStockPrices = require('yahoo-finance');
const {json} = require('body-parser');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(json());

//Gets the input from the searchbar and returns requested Stock Ticker info
app.post('/search', async(req, res) => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let day = today.getDate() - 1;
  console.log(year, month, day);
  let stock = await yahooStockPrices.quote({
    symbol: req.body.input,
    modules: ['price', 'summaryDetail']
  });

  if (res.err) {console.log('error');}
  else {res.json(stock)}
});

//User login information
app.post('/login', async(req, res) => {
  const username = req.body.username
  const pass = req.body.password
  
});

// app.post('/register', async(req, res) => {
//   const connection = mysql.createConnection({
//     host: 'https://penguin.cairn.edu/phpMyAdmin/index.php',
//     user: 'km651',
//     password: 'KennethMiller',
//     database: 'Stockaid'
//   });

//   connection.query(  'SELECT * FROM `people` WHERE `userName` = ' + {req.body.username},
//   (err, results, fields) => {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//     if (results == 0) {
//       connection.query( 'INSERT INTO people (userName, userPass, email, first_name, last_name)\
//       VALUES ('+ {req.body.username}, {req.body.password}, {req.body.email}, {req.body.first_name}, {req.body.last_name} + ')',
//        (err) => {console.log(err);})
//     } else {
//       res.json('Username already taken.')
//     }
//   });
  
// });

// app.get('/login', (req, res) => {
//   res.send(<Login />);
// });

// app.get('/home', (req, res) => {
//   res.send(<Home />);
// });

// app.get('/register', (req, res) => {
//   res.send(<Register />);
// });

// app.get('/analyze', (req, res) => {
//   res.send(<Analyze />);
// });


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);