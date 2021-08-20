import Bio from "../../models/bio";

exports.bio_list = function (req, res) {
    Bio.find({}, function (err, bio) {
        if (err) return next(err);
        res.send(bio);
    })
};

exports.bio_create = function (req, res) {
    var bio = new Bio(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    bio.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Bio Created successfully')
    })
};

exports.bio_details = function (req, res) {
    Bio.findById(req.params.id, function (err, bio) {
        if (err) return next(err);
        res.send(bio);
    })
};

exports.bio_update = function (req, res) {
    Bio.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, bio) {
        if (err) return next(err);
        res.send('Bio udpated successfully');
    });
};

exports.bio_delete = function (req, res) {
    Bio.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Bio Deleted successfully!');
    })
};