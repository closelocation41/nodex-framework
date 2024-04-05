const APP = {
    NAME:'Node APP',
    PREFIX:'NODE_APP',
    PATH :"/",
    PORT: 3000
}

const AUTH = {
    KEY:`${APP.PREFIX}_JWT_AUTH_KEY`,
    TIMEOUT : '1h'
}



module.exports = {APP,AUTH}