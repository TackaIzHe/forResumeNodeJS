const ApiError = require('../../error/ApiError')

module.exports = (err, req, res, next)=>{
    if(err instanceof ApiError){
        return res.status(err.status).json({message: err.mess})
    }
    return res.status(500).json({message:"Непредвиденая ошибка"})
}