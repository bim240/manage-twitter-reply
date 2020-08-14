var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    name: String,
    handle: String,
    image: String,
    bannerImage: String,
    twitterUserId: String,
    accessToken: String,
    accessTokenSecret: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
