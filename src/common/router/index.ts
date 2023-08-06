import express from 'express'
import userRouter from '../../routes/users/index'
import auth from '../middleware/auth'

const router = express.Router()

// auth middleware
router.use(auth)

// routes
router.use('/users', userRouter())

export default () => router
