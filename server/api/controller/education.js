import Education from "../../models/education";

exports.education_list = function (req, res) {
    Education.find({}, function (err, education) {
        if (err) return next(err);
        res.send(education);
    })
};

exports.education_create = function (req, res) {
    var education = new Education(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    education.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Education Created successfully')
    })
};

exports.education_details = function (req, res) {
    Education.findById(req.params.id, function (err, education) {
        if (err) return next(err);
        res.send(education);
    })
};

exports.education_update = function (req, res) {
    Education.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, education) {
        if (err) return next(err);
        res.send('Education udpated successfully');
    });
};

exports.education_delete = function (req, res) {
    Education.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Education Deleted successfully!');
    })
};