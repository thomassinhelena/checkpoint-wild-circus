const express = require('express');
const connection = require('../conf');
const router = express.Router();

router.get('/', (req, res) => {
	connection.query('SELECT * FROM list', (err, result) => {
		if(err) {res;sendStatus(400)};
		res.send(result);
});
});

router.get('/:id', (req, res) => {
	connection.query(`SELECT * FROM list 
		Where id=${req.params.id}`, (err, result) => {
		if(err) {res.sendStatus(400)};
		res.send(result);
	});
});

router.put('/:id', (req, res) => {
	connection.query(`UPDATE list SET name = '${req.body.name}', latitude = ${req.body.latitude}, longitude = ${req.body.longitude}, location = '${req.body.location}' 
	WHERE id=${req.params.id}`, (err, result) => {
		if(err) {res.sendStatus(400)};
		res.sendStatus(200);
	});
});

router.post('/', (req, res) => {
	console.log(req.body)
	connection.query(`INSERT INTO list (name, latitude, longitude, location)
	VALUES ('${req.body.name}', '${req.body.latitude}', '${req.body.longitude}', '${req.body.location}')`, (err, result) => {
		if(err) {res.sendStatus(400)};
		res.send(result);
	});
});

router.delete('/:id', (req, res) => {
  connection.query(`DELETE FROM list 
  WHERE id=${req.params.id}`, (err, result) => {
		if(err){res.sendStatus(400)};
		res.sendStatus(200);
	});
});

module.exports = router;