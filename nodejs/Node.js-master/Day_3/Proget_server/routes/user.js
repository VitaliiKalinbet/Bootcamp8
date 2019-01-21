const express = require('express');
const router = express.Router();
const ctrlUsers = require('../controllers/user');

router.get('/', (req,res) => res.send("Hello! from API") );

router.get('/:id', ctrlUsers.getUser);

router.post('/', ctrlUsers.addUser);

module.exports = router;