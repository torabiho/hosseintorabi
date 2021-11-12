import Post from "../../models/post";

const getFieldsByLanguage = (language) => {
  const selectedLang = language === "fa" ? "fa" : "en";
  return {
    _id: 1,
    postDate: 1,
    title: `$title.${selectedLang}`,
    subtitle: `$subtitle.${selectedLang}`,
    content: {
      $map: {
        input: "$content",
        as: "sec",
        in: {
          paragraph: `$$sec.${selectedLang}`,
          media: "$$sec.media",
        },
      },
    },
  };
};

exports.post_list = function (req, res, next) {
  Post.find(
    { visible: true },
    getFieldsByLanguage(req.headers["accept-language"]),
    function (err, posts) {
      if (err) return next(err);
      res.send(posts);
    }
  );
};

exports.post_details = function (req, res, next) {
  Post.findById(
    req.params.id,
    getFieldsByLanguage(req.headers["accept-language"]),
    function (err, post) {
      if (err) return next(err);
      res.send(post);
    }
  );
};
