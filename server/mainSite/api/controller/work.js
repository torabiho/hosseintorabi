import Work from "../../models/work";

exports.work_list = function (req, res) {
    Work.find({}, function (err, work) {
        if (err) return next(err);
        res.send(work);
    })
};

exports.work_create = function (req, res) {
    var work = new Work(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    work.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Work Created successfully')
    })
};

exports.work_details = function (req, res) {
    Work.findById(req.params.id, function (err, work) {
        if (err) return next(err);
        res.send(work);
    })
};

exports.work_update = function (req, res) {
    Work.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, work) {
        if (err) return next(err);
        res.send('Work udpated successfully');
    });
};

exports.work_delete = function (req, res) {
    Work.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Work Deleted successfully!');
    })
};