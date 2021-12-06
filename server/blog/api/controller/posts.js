import axios from "axios";
import Post from "../../models/post";

const getFieldsByLanguage = (language) => {
  const selectedLang = language === "fa" ? "fa" : "en";
  return {
    _id: 1,
    postDate: 1,
    headerImage: 1,
    title: `$title.${selectedLang}`,
    subtitle: `$subtitle.${selectedLang}`,
    comments: 1,
    content: `$content.${selectedLang}`,
    postscripts: {
      $map: {
        input: "$postscripts",
        as: "sec",
        in: {
          postscript: `$$sec.${selectedLang}`,
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

exports.post_update = async (req, res, next) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });

    const secret_key = process.env.CAPTCHA_SECRET_KEY;
    const token = req.body.token;
    const verifyCaptcha = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;
    const result = await axios.post(verifyCaptcha);

    if (result.data.success && req.body.comment) {
      post.comments.push(req.body.comment);
    } else {
      throw "Captcha is not valid";
    }

    await post.save();
    res.send(post);
  } catch (e) {
    res.status(404);
    res.send({ error: e });
  }
};
