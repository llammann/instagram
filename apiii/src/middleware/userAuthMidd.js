const jwt = require("jsonwebtoken");
const { refTokens } = require("./../controllers/UserController");

const userAuthMid = (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  const refToken = req?.headers?.refreshtoken?.split(" ")[1];
  console.log("refToken", refToken);
  console.log("token", token);
  console.log("AUTHtokenss", refTokens);

  jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
    console.log(err);

    if (err) {
      if (refTokens.includes(refToken)) {
        console.log("there is");

        jwt.verify(refToken, process.env.REFRESH_TOKEN, (err, user) => {
          if (err) {
            return res.status(400).send("no refresh token");
          }
          // access token
          const token = jwt.sign(
            { username: user.username, password: user.password },
            process.env.SECRET_TOKEN,
            {
              expiresIn: "10s",
            }
          );

          req.user = user;

          next();
        });
      } else {
        console.log("there is not");
        res.status(403).send();
      }

      // checking refresh token
      // jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
      //   console.log(err);

      //   req.user = user;

      //   next();
      // });
    }

    req.user = user;
    next();
  });

  // const authHeader = req.headers['authorization']
  // const token = authHeader && authHeader.split(' ')[1]

  // if (token == null) return res.sendStatus(401)
};

module.exports = userAuthMid;
