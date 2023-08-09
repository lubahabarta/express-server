import User from "./user.model"

const userService = {
    createUser: async (firstName: string, lastName: string, email: string, hash: string, salt: string) => {
        try {
            return await User.create({
                firstName,
                lastName,
                email,
                hash,
                salt
            })
        } catch {
            console.log('⚡️[database]: Unable to create user!')
        }
    },
    findUserByEmail: async (email: string) => {
        try {
            return await User.findOne({ where: { email }})
        } catch {
            console.log('⚡️[database]: Unable to find user!')
        }
    }
};

export default userService
