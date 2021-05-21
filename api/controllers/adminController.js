const {Admin} = require('../models/adminModel')
const {Student} = require('../models/studentModel')
const {Teacher} = require('../models/teacherModel')
const {Lesson} = require('../models/lessonModel')

exports.viewMyProfile = async(req,res)=>{
    const {id} = req.params
    try {
        const admin = await Admin.findById(id)
        if(!admin){
            res.status(404).send('user not found')
        }
        res.status(200).send({admin})
    } catch (error) {
                res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.viewStudentProfile = async(req,res)=>{
    const {id} = req.params
    try {
        const student = await Student.findById(id)
        if(!student){
            res.status(404).send('user not found')
        }
        res.status(200).send({student})
    } catch (error) {
                res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.viewTeacherProfile = async(req,res)=>{
    const {id} = req.params
    try {
        const teacher = await Teacher.findById(id)
        if(!teacher){
            res.status(404).send('user not found')
        }
        res.status(200).send({teacher})
    } catch (error) {
            res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.updateAdminProfile = async(req,res)=>{
    const {id} = req.params
    const data = req.body
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(id, {...data}, {new:true})
        res.status(200).send({updatedAdmin})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})
    }
}

exports.deleteAdmin = async(req,res)=>{
    const {id} = req.params
    try {
        const deletedAdmin = await Admin.findByIdAndDelete(id)
        res.status(200).send({deletedAdmin})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})
    }
}

exports.deleteTeacher = async(req,res)=>{
    const {id} = req.params
    try {
        const deletedTeacher = await Teacher.findByIdAndDelete(id)
        res.status(200).send({deletedTeacher})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})
    }
}

exports.deleteStudent = async(req,res)=>{
    const {id} = req.params
    try {
        const deletedStudent = await Student.findByIdAndDelete(id)
        res.status(200).send({deletedStudent})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})
    }
}

exports.approveOrRejectLesson = async(req,res)=>{
    const {id} = req.params
    const {approveStatus} = req.body
    try {
        const lesson = await Lesson.findByIdAndUpdate(id, {approveStatus}, {new:true})
        res.status(200).send({lesson})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})
        
    }
}

exports.viewLesson = async(req,res)=>{
    const {id} = req.params
    try {
        const lesson = await Lesson.findById(id)
        if(!lesson){
            res.status(404).send({error:'Lesson is not found'})
        }
        res.status(200).send({lesson})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})
        
    }
}

exports.deleteLesson = async(req,res)=>{
    const {id} = req.params
    try {
        const deletedLesson = await Lesson.findByIdAndDelete(id)
        res.status(200).send({deletedLesson})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})
        
    }
}