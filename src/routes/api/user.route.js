const router =  require('express').Router();
const userController =  require('../../controllers/user.controller')
const {validateAddUser,validateUpdateUser,validateDeleteUser} = require("../../validators/user.validator")

router.get('/list',  userController.getUsers);

router.post('/create',
  validateAddUser,
  userController.createUser 
);
router.patch('/update/:id',
  validateUpdateUser,
  userController.updateUser
);
router.delete('/delete/',
  validateDeleteUser,
  userController.deleteUser
);

module.exports = router