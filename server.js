const express = require('express');

const mongoose = require('mongoose');
const PORT = 5000 || process.env.PORT
const app =express();
const URL ='mongodb+srv://archie23sinha:bKE8HghaUOCKcnea@first.ed2irjj.mongodb.net/students-database';
const connectToDB = async()=>
{
  try 
  {
    await mongoose.connect(URL);
    console.log('connected to database');
  }
  catch (error)
  {
    console.log(error);
    }
};
//call 
connectToDB();

//DESIGN SCHEMA

const UserProfileSchema = new mongoose.Schema({
  username : String ,
  age : Number ,
  birthday : Date ,
  isActive : Boolean , 
  hobbies : [String] , //Array of strings
  objectId : mongoose.Schema.Types.ObjectId ,
  address : {
    street : String ,
    city : String ,
    postCode : Number ,
  },
  //EMBED 
  customData : mongoose.Schema.Types.Mixed ,
});

//COMPILE THE SHEMA TO FORM THE MODEL

const User = mongoose.model ('User' , UserProfileSchema);

//CRUD OPERATIONS

//CREATE A DOC - .save()

const newUser = new User ({
  username : 'Archie' ,
  age : 23 ,
  birthday : new Date ('2000-10-23') ,
  isActive : true ,
  hobbies : ['travelling' , 'music' , 'coding'] ,
  objectId : new mongoose.Types.ObjectId() ,
  address : {
    street : 'Saheban Hata' ,
    city : 'Purnia' ,
    postCode : 854301 ,
    },
    customData : {
      country  : 'India' ,
      
      },
      });
//       newUser.save().then((data)=>
//       {
// console.log(data);
//       }) 
//       .catch((e) => console.log(e));

//CREATE

User.create({
  username : 'Vansh' ,
  age : 23 ,
  birthday : new Date ('2000-10-23') ,
  isActive : true ,
  hobbies : ['travelling' , 'music' , 'coding'] ,
  objectId : new mongoose.Types.ObjectId() ,
  address : {
    street : 'Saheban Hata' ,
    city : 'Purnia' ,
    postCode : 854301 ,
    },
    customData : {
      country  : 'India' ,
      
      },
      })
      .then((data)=>
      {
console.log(data);
      }) 
      .catch((e) => console.log(e));




app.listen(PORT,console.log(`Server is running at port ${PORT}`));