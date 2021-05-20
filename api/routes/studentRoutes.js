module.exports = function(app){
    const {Auth} = require('../middlewares/auth');

    const studentController = require("../controllers/studentController");

    app.get("/search-lesson",studentController.searchLesson);
    app.get("/get-quizes",studentController.getQuizes);
    app.get("/get-pastpapers",studentController.getPastpapers);
    app.get("/get-Answers/:paperId", studentController.getAnswers);
    app.get("/view-student-profile", studentController.viewStudentProfile);
    app.get("/view-tutor-profile", studentController.viewTutroProfile);
    app.get("/view-marks", studentController.viewMarks);
    app.post("/post-questions", studentController.postQuestions);
    app.post("/post-answers", studentController.postAnswers);

    //second
    app.patch("/update-student-profile/:id", studentController.updateStudentProfile);
    app.delete("/delete-student-profile/:id", studentController.deleteStudentProfile);
    app.get("/view-feedback/:studentId", studentController.viewFeedBack);
    app.post("/post-forum-question", studentController.postForumQuestions);
    app.delete("/delete-forum-question/:id", studentController.deleteForumQuestion);
    app.post("/answer-forum-question/:id", studentController.answerForumQuestion);
    app.get("/view-forum-question/:id", studentController.viewForumQuestion);
    app.get("/view-lesson/:id", studentController.viewLesson);
    app.get("/access-library/:subjectId", studentController.accessLibrary);

} 