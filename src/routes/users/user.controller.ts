import { Request, Response } from 'express'
import { ILoginReqBody, IRegisterReqBody } from '../../common/interfaces/users/auth.interface'
import userService from './user.service'
import { authentication, random } from '../../common/helpers'
import jwt from 'jsonwebtoken'

const userController = {
    register: async (req: Request<any, any, IRegisterReqBody>, res: Response) => {
        try {
            const { firstName, lastName, email, password } = req.body

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

            return res.status(200).json({
                message: 'success',
            })
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

        const expectedHash = authentication(user.salt, password)
        if (expectedHash !== user.hash) {
            return res.sendStatus(403)
        }

        const salt = random()
        const hash = authentication(salt, password)
        const accessToken = jwt.sign({ ...user.toJSON(), accessToken: null }, process.env.SECRET_ACCESS_KEY as string)

        if (!(await userService.setUser(user, { salt, hash, accessToken }))) {
            res.sendStatus(400)
        }

        res.status(200).json({
            accessToken,
        })
    },
    getAllUsers: (req: Request, res: Response) => {},
    getUserByEmail: (req: Request, res: Response) => {},
}

export default userController
