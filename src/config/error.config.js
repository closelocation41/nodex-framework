const ERROR  = {
    INTERNAL: {
        errorCode:500,
        status:"Failed",
        message:"Internal Error!",
    },
    NOT_FOUND: {
        errorCode:404,
        status:"Failed",
        message:"No Result Found!",
    },
    INVALID: {
        errorCode:400,
        status:"Failed",
        message:"Invalid Data!",
    },
    AUTH: {
        errorCode:401,
        status:"Failed",
        message:"Invalid Auth!",
    },
    EXIST: {
        errorCode:403,
        status:"Failed",
        message:"Reacord Existing!",
    }
}

const SUCCESS  = {
    CREATE: {
        statusCode:201,
        status:"Success",
        message:"Create Successfully!"
    },
    UPDATE: {
        statusCode:201,
        status:"Success",
        message:"Update Successfully!"
    },
    READ: {
        statusCode:200,
        status:"Success",
        message:"Fetch Result Successfully!",
        data : (result)=>{
         return result;
        }
    },
    DELETE: {
        statusCode:200,
        status:"Success",
        message:"Record Removed Successfully!"
    },

}
const VALIDATOR  = {
    INVALID: {
        errorCode: 1000,
        status:"Failed",
        message:"Invalid Value!"
    },
    EMPTY: {
        errorCode: 1001,
        status:"Failed",
        message:"Empty value!"
    },
    REQUIRED: {
        errorCode: 1002,
        status:"Failed",
        message:"Missing required value!"
    }
 
}

module.exports = {ERROR,SUCCESS,VALIDATOR}