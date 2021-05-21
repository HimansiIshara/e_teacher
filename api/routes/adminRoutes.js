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
    app.get("/view-lesson/:id",adminController.viewLesson);
    app.patch("/delete-lesson/:id",adminController.deleteLesson);




    

} 