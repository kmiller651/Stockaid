import Login from './client/src/components/login';
import Register from './client/src/components/register';
import Analyze from './client/src/components/analyze';
import axios from 'axios';
const express = require('express');
const cors = require('cors');
const yahooStockPrices = require('yahoo-stock-prices');
const {json} = require('body-parser');

const app = express();

app.use(cors());
app.use(json());

app.post('/search', async(req, res) => {
  console.log(req.body);
  let stockData = await yahooStockPrices.getCurrentData(req.body);
  let stockPrice = await yahooStockPrices.getCurrentPrice(req.body);
  let stock = [
    {ticker: req.body, data: stockData, price: stockPrice}
  ];

  if (res.err) {console.log('error');}
  else {res.send(stock)};
});

app.post('/login', async(req, res) => {
  const username = req.body.username
  const pass = req.body.password
  
});

app.get('/login', (req, res) => {
  res.send(Login);
});

app.get('/home', (req, res) => {
  res.send(Home);
});

app.get('/register', (req, res) => {
  res.send(Register);
});

app.get('/analyze', (req, res) => {
  res.send(Analyze);
});


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);