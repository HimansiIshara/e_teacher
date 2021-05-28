module.exports = function(app){
    const teacherController = require("../controllers/teacherController");

    app.get("/view-my-teacher-profile/:id",teacherController.viewMyProfile);
    app.patch("/update-teacher-profile/:id",teacherController.updateProfile);
    app.delete("/delete-teacher-profile/:id", teacherController.deleteProfile);
    app.view("/view-student-profile/:id", teacherController.viewStudentProfile);
    app.delete("/search-lesson/:id", teacherController.searchLesson);

    // 28th may
    app.get("/view-lesson/:id", teacherController.viewLesson);
    app.post("/post-lesson", teacherController.uploadLesson);
    app.patch("/update-own-lesson/:id/:user_id", teacherController.updateOwnLesson);
    app.delete("/delete-own-lesson/:id/:user_id", teacherController.deleteOwnLesson);
    
    // forum question
    app.get("/view-forum-question/:id", teacherController.viewForumQuestion);
    app.post("/post-forum-question", teacherController.postForumQuesion);
    app.delete("/delete-forum-question/:id", teacherController.deleteForumQuestion);
    
    // forum answers
    app.get("/view-forum-answer/:id", teacherController.viewForumAnswer);
    app.post("/post-forum-answer", teacherController.postForumAnswer);
    app.delete("/delete-forum-answer/:id", teacherController.deleteForumAnswer);




} 