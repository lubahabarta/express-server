import express from 'express'
import { getAllUsers, getUserById } from './user.controller'

const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', getUserById)

export default () => router
