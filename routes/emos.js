const express = require('express');
const router = express.Router();
const emosCtrl = require('../controllers/emos');


router.get('/', emosCtrl.index);
router.get('/new', emosCtrl.newEmo);
router.post('/', emosCtrl.create);
router.get('/show', emosCtrl.show);
router.delete('/:id', emosCtrl.remove);
router.get('/:id/edit', emosCtrl.editPage);
router.put('/:id', emosCtrl.editEmo);
// router.get('/', emosCtrl.showAbout);

module.exports = router;