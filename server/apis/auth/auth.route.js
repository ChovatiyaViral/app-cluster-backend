const express = require("express");
const RegistrationCtrl = require('./auth.controller')

const router = express.Router();

router.route('/login')
    .post(RegistrationCtrl.userLogin);

router.route('/registration')
    .post(RegistrationCtrl.create)
    .get(RegistrationCtrl.getAllRegistrationData);


module.exports = router