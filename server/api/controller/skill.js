import Skill from "../../models/skill";

exports.skill_list = function (req, res) {
    Skill.find({}, function (err, skill) {
        if (err) return next(err);
        res.send(skill);
    })
};

exports.skill_create = function (req, res) {
    var skill = new Skill(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    skill.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Skill Created successfully')
    })
};

exports.skill_details = function (req, res) {
    Skill.findById(req.params.id, function (err, skill) {
        if (err) return next(err);
        res.send(skill);
    })
};

exports.skill_update = function (req, res) {
    Skill.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, skill) {
        if (err) return next(err);
        res.send('Skill udpated successfully');
    });
};

exports.skill_delete = function (req, res) {
    Skill.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Skill Deleted successfully!');
    })
};