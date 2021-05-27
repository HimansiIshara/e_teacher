const {Student} = require('../models/studentModel')
const {Teacher} = require('../models/teacherModel')
const {Lesson} = require('../models/lessonModel')



exports.viewMyProfile = async(req,res)=>{
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

exports.updateProfile = async(req,res)=>{
    const {id} = req.params
    const data = req.body
    try {
        const teacher = await Teacher.findByIdAndUpdate(id, {...data}, {new:true})
        
        res.status(200).send({teacher})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.deleteProfile = async(req,res)=>{
    const {id} = req.params
    try {
        const deleted = await Teacher.findByIdAndDelete(id)
        
        res.status(200).send({deleted})
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

exports.searchLesson = async(req,res)=>{
    const {id} = req.params
    try {
        const lesson = await Lesson.find(id)
        res.status(200).send({lesson})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})
    }
}
