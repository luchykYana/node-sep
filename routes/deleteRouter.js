const router = require('express').Router();

const {deleteController} = require('../сontrollers');

router.post('/:userEmail', deleteController.deleteUser);

module.exports = router;
