class ApiError extends Error{
    constructor(status,mess){
        super()
        this.status = status
        this.mess = mess
    }
    static badData(){
        return new ApiError(404, "Некоректные данные")
    }
    static badRequest(mess){
        return new ApiError(404,mess)
    }
    static forbidden(){
        return new ApiError(403,mess)
    }
}
module.exports = ApiError