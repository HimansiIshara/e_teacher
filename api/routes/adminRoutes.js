module.exports = function(app){
    const {Auth} = require('../middlewares/auth');

    const adminController = require("../controllers/adminController");

    app.get("/view-profile/:id",adminController.viewMyProfile);
    app.get("/view-student-profile/:id",adminController.viewStudentProfile);
    app.get("/view-teacher-profile/:id",adminController.viewTeacherProfile);

    app.patch("/update-admin-profile/:id",adminController.updateAdminProfile);
    app.delete("/delete-admin-profile/:id",adminController.deleteAdmin);
    app.delete("/delete-student/:id",adminController.deleteStudent);
    app.delete("/delete-teacher/:id",adminController.deleteAdmin);

    app.patch("/approve-reject-lesson/:id",adminController.approveOrRejectLesson);
    
    
    // question Answers
    app.patch("/update-qanswer/:id",adminController.updateQuestionAnswer);
    app.delete("/delete-qanswer/:id",adminController.deleteQuestionAnswer);
    
    // ELibrary
    app.patch("/update-elibraryy/:id",adminController.updateELibrary);
    app.delete("/delete-elibraryy/:id",adminController.deleteELibrary);
    
    // forum
    app.delete("/delete-forum-question/:id",adminController.deleteForumQuestion);
    app.delete("/delete-forum-answer/:id",adminController.deleteForumAnswer);
    app.get("/view-forum-answer/:id",adminController.viewForumAnswers);
    app.get("/view-forum-question/:id",adminController.viewForumQuestion);
    
    // lesson
    app.get("/view-lesson/:id",adminController.viewLesson);
    app.delete("/delete-lesson/:id",adminController.deleteLesson);
    app.patch("/update-lesson/:id",adminController.updateLesson);


    

} 