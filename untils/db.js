// const Sequelize = require("sequelize");
// const sequelize = new Sequelize(
//  'azuki',
//  'root',
//  'ahmad327',
//   {
//     host: 'localhost',
//     port:'3306',
//     dialect: 'mysql'
    
//   }
// );
// sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
//  }).catch((error) => {
//     console.error('Unable to connect to the database: ', error);
//  });
// module.exports=sequelize;
const Mongoose=require('mongoose');
// Db Connection
Mongoose.set("strictQuery", false);
const mongoose=Mongoose.connect('mongodb+srv://xovotechnologies:Xovotech@cluster0.vkq7lgt.mongodb.net/azuki',{
    useNewUrlParser: true,
    
});
module.exports=mongoose;