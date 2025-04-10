const {user} = require('../models/userModel')
const ApiError = require("../error/ApiError");

class userController{

    static getAll = async(req,res)=>{
       try{
            const users = await user.findAll();
            return res.json(users);
        }   
        catch(error){
            console.log(error)
        }
    }

    static getUser = async(req,res, next)=>{
        try{
            const {id} = req.params;
            if(!id || typeof id !== 'number' ){
                return next(ApiError.badData())
            }
            const findUser = await user.findOne({where:{id:id}})

            if(!findUser){
                return next(ApiError.badRequest("Пользователь не найден"))
            }
            return res.status(200).json(findUser);
        }
        catch(error){
            console.log(error)
        }
    }

    static postUser = async(req, res, next)=>{
        try{
            const{name} = req.body;
            if(!name || typeof name !=="string"){
                return next(ApiError.badData())
            }
            const newUser = await user.create({name:name})
            return res.json(newUser);
        }
        catch(error){
            console.log(error)
        }
    }

    static putUser = async(req, res, next)=>{
        try{
            const {id, name} = req.body
            if(!id || typeof id !== "number" || !name || typeof name !== "string"){
                return next(ApiError.badData())
            }
            const findUser = await user.findOne({where:{id:id}})
            if(!findUser){
                return next(ApiError.badRequest("Пользователь не найден"))
            }
            const updateUser = await user.update({name:name},{where:{id:id},returning:true})
            return res.json(updateUser);
        }
        catch(error){
            console.log(error)
        }
    }

    static deleteUser = async(req, res, next)=>{
        try{
            const {id} = req.params;
            if(!id || typeof id !== "number"){
                return next(ApiError.badData())
            }
            const findUser = await user.findOne({where:{id:id}})
            if(!findUser){
                return next(ApiError.badRequest("Пользователь не найден"))
            }
            const delUser = await user.destroy({where:{id:id}})
            return res.json(delUser);
        }
        catch(error){
            console.log(error)
        }
    }
}

module.exports = userController