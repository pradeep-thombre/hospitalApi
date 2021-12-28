// importing libraries and controllers
const express=require('express');
const router=express.Router();
const controller=require('../controllers/reports_controller')
// this urls will use other files for routs  
router.use('/api',require('./api'));
router.use('/',controller.home);
module.exports = router;

