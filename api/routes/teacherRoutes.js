module.exports = function(app){
    const teacherController = require("../controllers/teacherController");

    app.get("/view-my-teacher-profile/:id",teacherController.viewMyProfile);
    app.patch("/update-teacher-profile/:id",teacherController.updateProfile);
    app.delete("/delete-teacher-profile/:id", teacherController.deleteProfile);
    app.view("/view-student-profile/:id", teacherController.viewStudentProfile);
    app.delete("/search-lesson/:id", teacherController.searchLesson);
} 