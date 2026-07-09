import { Model, DataTypes } from "sequelize";
import type{InferAttributes, InferCreationAttributes, CreationOptional} from "sequelize"
import  sequelize  from "../utils/db.ts";
export default class Todo extends Model<InferAttributes<Todo>, InferCreationAttributes<Todo>> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare description:string | null;
  declare completed: CreationOptional<boolean>;
}

Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:true
      } 
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: "test-foam",
    timestamps: true,
  }
);