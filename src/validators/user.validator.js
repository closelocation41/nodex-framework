const { query,param, body, check } = require("express-validator");
const { VALIDATOR } = require("../config/error.config");

const validateAddUser = [
    body().isLength({min:1,max:1}),
    body("username").exists().notEmpty().withMessage(VALIDATOR.REQUIRED).bail()
    .isString().withMessage(VALIDATOR.INVALID),
    body("email").exists().notEmpty().withMessage(VALIDATOR.REQUIRED).bail()
    .isString().withMessage(VALIDATOR.INVALID),
    body("password").exists().notEmpty().withMessage(VALIDATOR.REQUIRED).bail()
    .isString().withMessage(VALIDATOR.INVALID),
] 

const validateUpdateUser = [
    body().isLength({min:1,max:1}),
    body("username").optional().notEmpty().withMessage(VALIDATOR.INVALID).bail()
    .isString().withMessage(VALIDATOR.INVALID),
    body("email").optional().notEmpty().withMessage(VALIDATOR.INVALID).bail()
    .isString().withMessage(VALIDATOR.INVALID),
    param("userId").exists().notEmpty().withMessage(VALIDATOR.REQUIRED).bail()
    .isString().withMessage(VALIDATOR.INVALID)
    
] 
const validateDeleteUser = [
    body().isLength({min:1,max:1}),
    body("ids").exists().notEmpty().withMessage(VALIDATOR.REQUIRED).bail()
    .isArray().withMessage(VALIDATOR.INVALID),
] 

module.exports = {validateAddUser,validateUpdateUser,validateDeleteUser}