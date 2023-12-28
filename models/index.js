const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('cms_db',"root","V!vEk@321@123",{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
.then(()=>{
console.log('Database connected  ... ')
}).catch((err)=>{
    console.log("Database connection failed ... ", err)
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Category = require('./category.model')(sequelize, Sequelize);
db.Service = require('./service.model')(sequelize, Sequelize)
module.exports = db;