const {User} = require("../models/userModel");
const {Student} = require('../models/studentModel')
const {Admin} = require('../models/adminModel')
const {Teacher} = require('../models/teacherModel')


exports.registerUser = async(req, res)=>{
    
    try {
        const user = await User.create({...req.body});
        let {role} = req.body
            if(role == 'ADMIN'){
                await Admin.create({ user_id:user._id, ...req.body})
            }
            if(role == 'STUDENT'){
                await Student.create({ user_id:user._id, ...req.body})
            }
            if(role == 'TEACHER'){
                await Teacher.create({ user_id:user._id, ...req.body})
            }
            return res.status(200).json({
                success: true,
                message: "successfully registered!",
                
            }); 
        
    } catch (err) {
        res.status(422).json({
            success: false,
            message: "registration faild. try again..!",
            data: err
        });
    }

    

    
}

exports.loginUser = (req, res)=>{
    User.findOne({email : req.body.email}, (err,user) => {
        if(!user){
            return res.status(404).json({
                success: false,
                message: "user email not found!"
            });
        }

        user.comparePassword(req.body.password, (err,isMatch) => {
            if(!isMatch){
                return res.status(400).json({
                    success: false,
                    message: "password is incorrect!"
                }); 
            }

            user.generateToken((err,token)=>{
                if(err){
                    return res.status(400).json({
                        success: false,
                        message: "unable to generate jwt key!",
                        data : err
                    }); 
                }

                return res.status(200).json({
                    success: true,
                    message: "successfuly loged in!",
                    data : {
                        "token" : token
                    }
                });
            });
            
        });
    });
    
}

exports.getUserDetails = (req , res)=> {
    return res.status(200).json({
        success: true,
        message: "user received!",
        data : req.user
    });

}

