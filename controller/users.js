var User = require("../models/user");
const request = require("request-promise");

var request_options = {
  url:
    "https://api.twitter.com/1.1/account_activity/all/dev/webhooks.json?url=https%3A%2F%2Flocalhost%2Fwebhook%2Ftwitter",
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  token: process.env.TWITTER_ACCESS_TOKEN,
  token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
};

getUserDetails = async (req, res, next) => {
  try {
    var user = await User.findOne({ twitterUserId: req.twitterUserId });
    // let response = await request.get(request_options);
    // console.log(response, "response");

    if (!user) {
      res.status(404).json({ message: "user not found" });
    }
    res.status(200).json({ user, message: "success" });
  } catch (error) {
    console.log(error);
  }
};

createUser = async (user, category) => {
  var findUser = await User.findOne({ twitterUserId: user.id_str });
  if (!findUser) {
    var userBody = {
      name: user.name,
      handle: user.screen_name,
      image: user.profile_image_url_https,
      bannerImage: user.profile_banner_url,
      twitterUserId: user.id_str,
    };
    var user = await new User(userBody);
    user.categories.push(category);
    await user.save();

    return user;
  } else if (!findUser.categories.includes(category)) {
    findUser.categories.push(category);
    findUser = await findUser.save();
  }
  return findUser;
};

module.exports = { getUserDetails, createUser };
