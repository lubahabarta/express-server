import { Request, Response } from 'express'
import { createUser } from './user.service'

export const createUserController = (req: Request, res: Response) => {
    createUser()
}

export const getAllUsersController = (req: Request, res: Response) => {
    
}

export const getUserByIdController = (req: Request, res: Response) => {
    
}
