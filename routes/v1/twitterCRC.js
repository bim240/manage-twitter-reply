var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  console.log("inside getcrc");
  var crc_token = request.query.crc_token;

  if (crc_token) {
    var hash = security.get_challenge_response(
      crc_token,
      process.env.TWITTER_CONSUMER_SECRET
    );

    response.status(200);
    response.send({
      response_token: "sha256=" + hash,
    });
  } else {
    response.status(400);
    response.send("Error: crc_token missing from request.");
  }
});
router.post("/", (req, res, next) => {
  console.log("inside getcrc");
  console.log(request.body);

  // socket.io.emit(socket.activity_event, {
  //   internal_id: uuid(),
  //   event: request.body
  // })

  response.send("200 OK");
});

module.exports = router;
