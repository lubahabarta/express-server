import express from 'express'
import { createUserController, getAllUsersController, getUserByIdController } from './user.controller'

const router = express.Router()

router.get('/', getAllUsersController)
router.get('/:id', getUserByIdController)

router.post('/create', createUserController)

export default () => router
