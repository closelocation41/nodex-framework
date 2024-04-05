const router =  require('express').Router();
const userController =  require('../../controllers/user.view.controller')


router.get('/',
  userController.home
);

router.get('/home',
  userController.home
);

router.get('/login',
  userController.login
);

router.get('/register',
  userController.register
);

module.exports = router