import { Request, Response } from 'express'
import { ILoginReqBody, IRegisterReqBody } from '../../common/interfaces/users/auth.interface';
import userService from './user.service';
import { authentication, random } from '../../common/helpers';
import { Model } from 'sequelize';

const userController = {
    register: async (req: Request<any, any, IRegisterReqBody>, res: Response) => {
        try {
            const { firstName, lastName, email, password } = req.body;

            if (!firstName || !lastName || !email || !password) {
                return res.sendStatus(400)
            }

            const existingUser = await userService.findUserByEmail(email)

            if (existingUser) {
                return res.sendStatus(400)
            }

            const salt = random()
            const hash = authentication(salt, password)
            const user = await userService.createUser(firstName, lastName, email, hash, salt)
            if (!user) {
                return res.sendStatus(400)
            }

            return res.status(200).json(user)
        } catch (error) {
            console.log(`⚡️[server]: Unable to register: ${error}!`)
            return res.sendStatus(400)
        }
    },
    login: async (req: Request<{}, {}, ILoginReqBody>, res: Response) => {
        const { email, password } = req.body

        if (!email || !password) {
            return res.sendStatus(400)
        }

        const user = await userService.findUserByEmail(email)
        if (!user) {
            return res.sendStatus(400)
        }
    },
    getAllUsers: (req: Request, res: Response) => {

    },
    getUserByEmail: (req: Request, res: Response) => {

    }
}

export default userController;