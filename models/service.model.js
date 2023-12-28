const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {}
  Service.init(
    {
      id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
      },
      service_id: {
        type: DataTypes.STRING,
      },
      duration: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: "service",
    }
  );
    // sequelize.sync()
    // .then(()=>{
    //     console.log('Service table created ...')
    // }).catch((err)=>{
    //     console.log('service created failed', err)
    // })
    
  return Service;
};
