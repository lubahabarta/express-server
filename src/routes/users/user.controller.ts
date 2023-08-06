import { Request, Response } from 'express'

export const getAllUsers = (req: Request, res: Response) => {
    res.json({
        users: ['all users'],
    })
}

export const getUserById = (req: Request, res: Response) => {
    const { id } = req.params
    console.log(id)

    res.json({
        user: {
            id,
        },
    })
}
