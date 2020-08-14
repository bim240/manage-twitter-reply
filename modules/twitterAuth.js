var passport = require("passport");
var TwitterStrategy = require("passport-twitter").Strategy;
var User = require("../models/user");

const twitterWebhooks = require("twitter-webhooks");

// const userActivityWebhook = twitterWebhooks.userActivity({
//   serverUrl: "https://localhost:3000",
//   route: "/api/v1/users", //default : '/'
//   consumerKey: process.env.TWITTER_CONSUMER_KEY,
//   consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
//   accessToken: process.env.TWITTER_ACCESS_TOKEN,
//   accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
//   environment: "dev", //default : 'env-beta'
// });

// //Register your webhook url - just needed once per URL

// console.log(userActivityWebhook.register(), "hello");

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: "https://localhost/api/v1/users/auth/twitter/callback",
    },
    function (token, tokenSecret, profile, cb) {
      var details = profile._json;
      User.findOne({ twitterUserId: details.id_str }, (error, user) => {
        if (user) {
          return cb(error, user);
        } else {
          var user = {
            name: details.name,
            handle: details.screen_name,
            twitterUserId: details.id_str,
            image: details.profile_image_url_https,
            bannerImage: details.profile_banner_url,
            accessToken: token,
            accessTokenSecret: tokenSecret,
          };
          User.create(user, (err, user) => {
            return cb(error, user);
          });
        }
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
