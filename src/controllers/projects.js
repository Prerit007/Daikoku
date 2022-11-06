const Project = require('../models/project');

// exports.getProjects = (req, res, next) => {
//     Project.find()
//     .then(projects => {
//         res.render('projects', {
//             projs: projects,
//             path: '/projects'
//         });
//     })
//     .catch(err => {
//         console.log(err);
//     });
// };

// exports.getProject = (req, res, next) => {
//     const projId = req.params.projectId;
// };

exports.postEnrollment = (req, res, next) => {
    const projId = req.body.projectId;
    Project.findById(projId)
    .then(project => {
        return req.student.EnrollToProject(project);
    })
    .then(result => {
        res.redirect('/projects');
    });
};