import Post from "../../models/post";

exports.post_list = function (req, res, next) {
    Post.find({ visible: true }, {visible: 0}, function (err, posts) {
        if (err) return next(err);
        res.send(posts);
    })
};

exports.post_details = function (req, res, next) {
    Post.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.send(post);
    })
};