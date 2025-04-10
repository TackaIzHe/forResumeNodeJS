require('dotenv').config()
const sequelize = require('./db')
const models = require('./models/userModel')
const express = require('express')
const Router = require('./routers/index')
const app = express()
const cors = require('cors')
const port = process.env.PORT;
const error = require('./middleware/error/Error')

app.use(cors())
app.use(express.json())

app.use('/api', Router)

app.use(error)

const start = async ()=>{
    try{

        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port,()=>{
            console.log(`server started ${port}`);
        })
    }
    catch(error){
        console.log(error)
    }
}
start()