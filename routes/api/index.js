// importing libraries and controllers
const express=require('express');
const router=express.Router();


// this urls will use other files for routs  
router.use('/doctors',require('./doctors'));
router.use('/patients',require('./patients'));

//reports route
router.use("/reports", require("./reports"));

module.exports = router;