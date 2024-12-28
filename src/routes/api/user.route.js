const router =  require('express').Router();
const userController =  require('../../controllers/user.controller');
const { createToken, verifyToken } = require('../../middlewares/auth.middleware');
const {validateAddUser,validateUpdateUser,validateDeleteUser} = require("../../validators/user.validator")

router.get('/list',  userController.getUsers);

router.post('/login',
  createToken
);

router.post('/create',
  verifyToken,
  validateAddUser,
  userController.createUser 
);
router.patch('/update/:id',
  verifyToken,
  validateUpdateUser,
  userController.updateUser
);
router.delete('/delete/',
  verifyToken,
  validateDeleteUser,
  userController.deleteUser
);

module.exports = router