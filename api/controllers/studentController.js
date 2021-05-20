const {Paper} = require('../models/paperModel')
const {PAnswer} = require('../models/pAnswerModel')
const {Student} = require('../models/studentModel')
const {Teacher} = require('../models/teacherModel')
const {QGrade} = require('../models/qGradeModel')
const {Question} = require('../models/questionModel')
const {Feedback} = require('../models/feedbackModel')
const {Forum} = require('../models/forumModel')
const {Lesson} = require('../models/lessonModel')

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
        res.status(201).send({question})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.postAnswers = async(req,res)=>{
    const data = req.body
    try {
        const answer = await PAnswer.create({...data})
        res.status(201).send({answer: answer})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.updateStudentProfile = async(req,res)=>{
    const {id} = req.params
    const data = req.body
    try {
        const profile = await Student.findByIdAndUpdate(id, {...data}, {new:true, runValidators:true})
        res.status(200).send({profile})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.deleteStudentProfile = async(req,res)=>{
    const {id} = req.params
    try {
        const profile = await Student.findByIdAndDelete(id)
        res.status(200).send({profile})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}


exports.viewFeedBack = async(req,res)=>{
    const {studentId} = req.params
    try {
        const feedback = await Feedback.find({student_id:studentId})
        res.status(200).send({feedback})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.postForumQuestions = async(req,res)=>{
    const data = req.body
    try {
        const forumQuestion = await Forum.create({...data})
        res.status(200).send({forumQuestion})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}


exports.deleteForumQuestion = async(req,res)=>{
    const {id} = req.params
    try {
        const deletedForumQuestion = await Forum.findByIdAndDelete(id)
        res.status(200).send({deletedForumQuestion})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.answerForumQuestion = async(req,res)=>{
    const {questionId, answer} = req.body
    try {
        const answeredQuestion = await Forum.findByIdAndUpdate(questionId, {answer}, {new:true})
        res.status(200).send({answeredQuestion})
    } catch (error) {
        res.status(500).send({error:error.message || 'something went wrong'})

    }
}

exports.viewForumQuestion = async(req,res)=>{
    const {id} = req.params
    try {
        const question = await Forum.find(id)
        res.status(200).send({question})
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
