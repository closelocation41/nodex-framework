const {ERROR,SUCCESS} = require('../config/error.config')
const userService = require('../services/user.service')
const mainHelper = require('../helpers/main.helper')

const login = async (req, res)=>{
    res.render('users/login', {
        mascots: "Hi",
        tagline: "Welcome"
      });
}

const register = async (req, res)=>{
    res.render('users/register', {
        mascots: "Hi",
        tagline: "Welcome"
      });
}

const home =  (req, res)=>{
    res.render('index', {
        mascots: "Hi",
        tagline: "Welcome"
      });
}



module.exports =  {login,register,home}