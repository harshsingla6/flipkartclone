const express = require("express");
const router = express.Router();
const { signup, signin , requireSignin } = require('../controller/auth')
const { validateSignupRequest,validateSigninRequest , isRequestValidated } = require('../validators/auth');
const { route } = require("./category");




router.post('/signup', validateSignupRequest, isRequestValidated ,signup);

router.post('/signin', validateSigninRequest, isRequestValidated , signin)


module.exports = router;