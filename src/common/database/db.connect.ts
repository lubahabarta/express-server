import { Sequelize } from "sequelize"

const sequelize = new Sequelize('test', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
})

export default sequelize
