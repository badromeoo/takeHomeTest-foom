import { Sequelize } from "sequelize";
const sequelize = new Sequelize( {
  host: './database/database.sqlite',
  dialect: "sqlite",
  logging:false,
});

export default sequelize;