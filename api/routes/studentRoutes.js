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
} 