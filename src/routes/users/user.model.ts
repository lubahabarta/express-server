import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize'
import db from '../../common/database/db.connect'

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    id: CreationOptional<number>
    firstName: string
    lastName: string
    email: string
    hash: string
    salt: string
    accessToken?: string
}

const User = db.define<UserModel>('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    hash: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    salt: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    accessToken: {
        type: DataTypes.CHAR(1024),
        unique: true,
    },
})

export default User
