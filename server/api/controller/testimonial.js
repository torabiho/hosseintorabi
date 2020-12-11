import Testimonial from "../../models/testimonial";

exports.testimonial_list = function (req, res) {
    Testimonial.find({}, function (err, testimonial) {
        if (err) return next(err);
        res.send(testimonial);
    })
};

exports.testimonial_create = function (req, res) {
    var testimonial = new Testimonial(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    testimonial.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Testimonial Created successfully')
    })
};

exports.testimonial_details = function (req, res) {
    Testimonial.findById(req.params.id, function (err, testimonial) {
        if (err) return next(err);
        res.send(testimonial);
    })
};

exports.testimonial_update = function (req, res) {
    Testimonial.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, testimonial) {
        if (err) return next(err);
        res.send('Testimonial udpated successfully');
    });
};

exports.testimonial_delete = function (req, res) {
    Testimonial.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Testimonial Deleted successfully!');
    })
};