import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import passport from 'passport'
require('dotenv').config()
import routes from './src/index'
import configPassport from './src/auth/passport'

const app = express();
const PORT = process.env.PORT || 7000
const HOST = process.env.HOST || 'localhost'

configPassport(passport)
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(passport.initialize())

routes(app)

console.log(`mongodb://${process.env.MONGO_ID}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}`)

mongoose.connect(`mongodb://${process.env.MONGO_ID}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}`)

app.listen(PORT, HOST, ()=> {
    console.log(`O servidor está rodando em ${HOST}:${PORT}`)
    console.log('Para parar, pressione CTRL + C')

})