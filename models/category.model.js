const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {}
  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },

      category_id: {
        type: DataTypes.STRING,
      },
      service_name: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
      },
      price_options: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "category_name",
    }
  );
  // sequelize
  //   .sync({ alter: true })
  //   .then(() => {
  //     console.log("category table created successfully!");
  //   })
  //   .catch((error) => {
  //     console.error("Unable to create table : ", error);
  //   });

  return Category;
};
