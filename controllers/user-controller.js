const User = require("../models/user");
const { handleError } = require("../helper")

const createUser = async (req, res) => {
    // console.log(req.body)
    const user = new User(req.body);
    // console.log(visit)
    await user
        .save()
        .then((result) => {
            // console.log(result)
            res
                .status(201)
                .json(result)

        })
        .catch((err) => handleError(res, err));
};

const login = async (req, res, next) => {
    // console.log(req.body)
    try{
        
    }catch(err){

    }
  
};

const logout = async (req, res, next) => {
    // console.log(req.body)
    try{
        
    }catch(err){
        
    }
  
};

const activate = async (req, res, next) => {
    // console.log(req.body)
    try{
        
    }catch(err){
        
    }
  
};
const refresh = async (req, res, next) => {
    // console.log(req.body)
    try{
        
    }catch(err){
        
    }
  
};
const getUsers = async (req, res, next) => {
    // console.log(req.body)
    try{
        res.json(["123","456"])
    }catch(err){
        
    }
  
};



module.exports = { createUser, login, logout, activate, refresh , getUsers};