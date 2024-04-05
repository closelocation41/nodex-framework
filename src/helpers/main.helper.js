const showError = (error)=>{
    if(error?.errorCode){
        return error; 
    }else if(error.message){
        return {
            errorCode:500,
            status:"Failed",
            message:error.toString()
        }
    }
    return ERROR.INTERNAL;
}

module.exports = {showError}