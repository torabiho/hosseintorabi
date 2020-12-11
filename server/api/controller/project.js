import Project from "../../models/project";

exports.project_list = function (req, res) {
    Project.find({}, function (err, project) {
        if (err) return next(err);
        res.send(project);
    })
};

exports.project_create = function (req, res) {
    var project = new Project(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    project.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Project Created successfully')
    })
};

exports.project_details = function (req, res) {
    Project.findById(req.params.id, function (err, project) {
        if (err) return next(err);
        res.send(project);
    })
};

exports.project_update = function (req, res) {
    Project.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, project) {
        if (err) return next(err);
        res.send('Project udpated successfully');
    });
};

exports.project_delete = function (req, res) {
    Project.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Project Deleted successfully!');
    })
};