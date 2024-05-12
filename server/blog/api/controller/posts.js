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
    mediaDescription: `$mediaDescription.${selectedLang}`,
    postscripts: `$postscripts.${selectedLang}`,
    link: `$link.${selectedLang}`,
  };
};

exports.post_list = function (req, res, next) {
  Post.find({
    visible: true,
    ...req.query,
  })
    .select(getFieldsByLanguage(req.headers["accept-language"]))
    .then((posts) => res.send(posts))
    .catch((err) => next(err));
};

exports.post_details = function (req, res, next) {
  Post.findById(req.params.id)
    .select(getFieldsByLanguage(req.headers["accept-language"]))
    .then((post) => res.send(post))
    .catch((err) => next(err));
};

exports.post_update = async (req, res, next) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });

    if (req.body.content) {
      post.content[req.headers["accept-language"]] = req.body.content;
    }

    if (req.body.comment) {
      const secret_key = process.env.CAPTCHA_SECRET_KEY;
      const token = req.body.token;
      const verifyCaptcha = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;
      const result = await axios.post(verifyCaptcha);

      if (result.data.success) {
        post.comments.push(req.body.comment);
      } else {
        throw "Captcha is not valid";
      }
    }

    await post.save();
    res.send(post);
  } catch (e) {
    res.status(404);
    res.send({ error: e });
  }
};
