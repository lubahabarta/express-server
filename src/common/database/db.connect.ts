import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('test', 'root', 'Vision', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
})

export default sequelize
