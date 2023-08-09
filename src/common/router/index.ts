import express from 'express'
import auth from '../middlewares/auth'
import userRouter from '../../routes/users/router'
import postRouter from '../../routes/posts/router'

const router = express.Router()

// auth middleware
router.use(auth)

// routes
router.use('/user', userRouter())
router.use('/post', postRouter())

export default () => router
