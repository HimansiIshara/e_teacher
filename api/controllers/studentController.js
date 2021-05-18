const {Paper} = require('../models/paperModel')
const {PAnswer} = require('../models/pAnswerModel')
const {Student} = require('../models/studentModel')
const {Teacher} = require('../models/teacherModel')
const {QGrade} = require('../models/qGradeModel')
const {Question} = require('../models/questionModel')

exports.searchLesson = async(req,res)=>{
    const {subjectId} = req.query
    try {
        const lesson = await Paper.find({subject_id:subjectId})
        res.status(200).send({lesson: lesson})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})
    }
}

exports.getQuizes = async(req,res)=>{
    try {
        const quizes = await Question.find()
        res.status(200).send({quizes: quizes})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})
    }
}

exports.getPastpapers = async(req,res)=>{
    try {
        const papers = await Paper.find()
        res.status(200).send({papers})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})
    }
}

exports.getAnswers = async(req,res)=>{
    const {paperId} = req.params
    try {
        const answers = await PAnswer.find({p_question_id:paperId})
        res.status(200).send({answers})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.viewStudentProfile = async(req,res)=>{
    const {studentId} = req.query
    try {
        const student = await Student.find({user_id:studentId})
        res.status(200).send({student})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.viewTutroProfile = async(req,res)=>{
    const {tutorId} = req.query
    try {
        const tutor = await Teacher.find({user_id:tutorId})
        res.status(200).send({tutor})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.viewMarks = async(req,res)=>{
    const {studentId,lessonId} = req.query
    try {
        const marks = await QGrade.find({student_id:studentId, lesson_id:lessonId})
        res.status(200).send({marks})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}


exports.postQuestions = async(req,res)=>{
    const data = req.body
    try {
        const question = await Question.create({...data})
        res.status(200).send({question})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.postAnswers = async(req,res)=>{
    const data = req.body
    try {
        const answer = await PAnswer.create({...data})
        res.status(200).send({answer: answer})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}

