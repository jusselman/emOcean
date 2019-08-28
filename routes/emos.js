const express = require('express');
const router = express.Router();
const emosCtrl = require('../controllers/emos');


router.get('/', emosCtrl.index);
router.get('/new', emosCtrl.newEmo);
router.post('/', emosCtrl.create);
router.get('/show', emosCtrl.show);

module.exports = router;