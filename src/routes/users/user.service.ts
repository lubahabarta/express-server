import User, { UserModel } from './user.model'

const userService = {
    createUser: async (firstName: string, lastName: string, email: string, hash: string, salt: string) => {
        try {
            return await User.create({
                firstName,
                lastName,
                email,
                hash,
                salt,
            })
        } catch {
            console.log('⚡️[database]: Unable to create user!')
        }
    },
    findUserByEmail: async (email: string) => {
        try {
            return await User.findOne({ where: { email } })
        } catch {
            console.log('⚡️[database]: Unable to find user!')
        }
    },
    setUser: async (user: UserModel, { ...values }) => {
        try {
            user.set(values)
            await user.save()

            return true
        } catch {
            return false
        }
    },
}

export default userService
