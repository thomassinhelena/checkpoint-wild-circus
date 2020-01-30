const express = require('express')
const connection = require('../conf');

const router = express.Router();
router.get('/', (req, res) => {
  connection.query('SELECT * FROM advert', (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(400).send('Erreur lors de la récupération des annonces');
      throw err;
    } else {
      res.send(results);
    }
  });
});