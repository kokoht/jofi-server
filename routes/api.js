var express = require('express')
var router = express.Router();
var controller = require('../controllers/locationControllers')

router.get('/', controller.findJobJakarta)
router.get('/selatan', controller.findJobJakartaSelatan)
router.get('/expert', controller.findJobExpert)
router.get('/el', controller.findJobExpertLocation)


module.exports = router
