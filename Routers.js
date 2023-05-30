const express=require("express");
const Router=express.Router()
const Controller=require("./Controller.js");
const { verfyToken } = require('./jwt')


// 1. first routes for Create User.
Router.post('/Create',Controller.UserCreate);

// 2. second route for Read User.
Router.get('/Read',verfyToken,Controller.UserRead);

// 3. Third route for Update.
Router.patch('/Update',verfyToken,Controller.UserUpdate);

// 4.four route for Delete.
Router.delete('/Delete',verfyToken,Controller.UserDelete);

// 5.fifth router for Login.
Router.get("/Login",Controller.LoginUser);






module.exports = Router