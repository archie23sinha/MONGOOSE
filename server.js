const express = require('express');

const mongoose = require('mongoose');
const PORT = 5000 || process.env.PORT
const app =express();
const URL ='mongodb://localhost:27017/students-database';
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
//CREATE A NEW USER


app.listen(PORT,console.log(`Server is running at port ${PORT}`));