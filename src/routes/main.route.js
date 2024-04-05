const express = require('express')

module.exports = ( ()=>{
const router  = express.Router();

router.use("/", 
require("./web/home.route")
)

router.use("/api/users", 
require("./api/user.route")
)



return router;
})();