const User = require('../models/user1');
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

exports.signup = (req,res) =>{

    // const errors = validationResult(req);
    // return res.status(400).json({errors: errors.array()})

    User.findOne({email: req.body.email})
    .exec((error,user)=>{
        if(user) return res.status(400).json({
            message:'user already registered'
        });
        
    const {
        firstName,
        LastName,
        email,
        password,
    } = req.body;

    const _user = new User({
        firstName,
        LastName,
        email,
        password,
        username: Math.random().toString()
    })
    
    _user.save((error ,data) => {
        if(error){
            return res.status(400).json({
                message: 'something went wrong'
            })
        }
        
        if(data){
            return res.status(200).json({
                message : 'user created successful'
            })
        }
    })
    
})

}

exports.signin = ((req,res) =>{

User.findOne({email: req.body.email})
.exec((error,user)=>{
    if(error) return res.status(400).json({error})
       if(user){
           if(user.authenticate(req.body.password)){
            const token = jwt.sign({_id: user_id},MERNSERCRET,{expiresIn :"1h"})
            const {_id ,firstName , lastName, email, role, fullName } = user;
            res.status(200).json({
                token,
                user:{
                    _id ,firstName, lastName , email , role , fullName

                }
            })
           }else{
               return res.status(400).json({
                   message: 'invalid password'
               })
           }
       }else{
            return res.status(400).json({
            message: 'something went wrong'
        })
       }
    })
})

exports.requireSignin = (req, res , next) => {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token ,MERNSECRET);
    req.user = user
    next();
}
