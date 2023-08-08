import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './src/common/router'
import db from './src/common/database/db.connect'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use('/', router())

// db connect
db.authenticate()
    .then(() => console.log(`⚡️[database]: Connection has been established successfully!`))
    .catch((error) => console.log(`⚡️[database]: Unable to connect to the database: ${error}!`))

db.sync({ force: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`⚡️[server]: Server is listening at port ${port}!`)
        })
    })
    .catch((error) => console.log(`⚡️[database]: Unable to sync database: ${error}!`))
