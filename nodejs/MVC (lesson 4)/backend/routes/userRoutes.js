const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/userControllers');

router.get('/', ctrlUser.getAllUsers);

router.post('/', ctrlUser.postUser)

router.get('/:username', ctrlUser.getUserByUsername);

router.delete('/:id', ctrlUser.deleteUser)

router.put('/:_id', ctrlUser.updateUser)

module.exports = router;