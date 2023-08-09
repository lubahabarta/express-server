import express from 'express'
import userController from './user.controller'

const router = express.Router()

router.get('/', userController.getAllUsers)
router.get('/:email', userController.getUserByEmail)

export default () => router
