import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './src/common/router'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use('/', router())

app.listen(port, () => {
    console.log(`⚡️[server]: Server is listening at port ${port}!`)
})
