const {Student} = require('../models/studentModel')
const {Teacher} = require('../models/teacherModel')
const {Lesson} = require('../models/lessonModel')
const {Forum} = require('../models/forumModel')



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

exports.viewLesson = async(req,res)=>{
    const {id} = req.params
    try {
        const lesson = await Lesson.find(id)
        res.status(200).send({lesson})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})
    }
}

exports.uploadLesson = async(req,res)=>{

    const data = req.body

    try {
        const lesson = await Lesson.create({...data})
        res.status(200).send({lesson})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})
    }
}

exports.updateOwnLesson = async(req,res)=>{

    const data = req.body
    const {id, user_id} = req.params

    try {
        const updatedLesson = await Lesson.findOneAndUpdate({_id:id, user_id}, {...data}, {new:true})

        res.status(200).send({updatedLesson})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})
    }
}


exports.deleteOwnLesson = async(req,res)=>{

    const {id, user_id} = req.params

    try {
        const deleted = await Lesson.findOneAndDelete({_id:id, user_id})
        res.status(200).send({deleted})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})
    }
}

exports.viewForumQuestion = async()=>{
    const {id} = req.params
    try {
        
        const findQuestion = await Forum.findById(id)
        const question = findQuestion['forum_question']
        res.status(200).send({question})

    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.viewForumAnswer = async()=>{
    const {id} = req.params
    try {
        
        const findQuestion = await Forum.findById(id)
        const answers = findQuestion['forum_answer']
        res.status(200).send({answers})

    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.postForumQuesion = async()=>{
    const data = req.body
    try {
        
        const question = await Forum.create({...data})

        res.status(200).send({question})

    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.postForumAnswer = async()=>{
    const data = req.body
    const {id} = req.params
    try {
        
        const answer = await Forum.findByIdAndUpdate(id, {forum_answer:data.forum_answer}, {new:true})
        res.status(200).send({answer})

    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.deleteForumQuestion = async()=>{
    const {id} = req.params
    try {
        
        const deleted = await Forum.findByIdAndDelete(id)
                res.status(200).send({deleted})

    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.deleteForumAnswer = async()=>{
    const {id} = req.params
    try {
        
    const deleted = await Forum.findByIdAndUpdate(id, {forum_answer:null}, {new:true})
    res.status(200).send({deleted})
    
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}