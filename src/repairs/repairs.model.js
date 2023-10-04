import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";

const Repairs = sequelize.define("repairs", {
   id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      field: "repairs_id",
   },
   date: {
      type: DataTypes.DATE,
      allowNull: false,
   },
   status: {
      type: DataTypes.ENUM("pending", "completed", "cancelled"),
      defaultValue: "pending",
   },
   userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
   },
});
export default Repairs;
