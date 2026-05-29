import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.json({
      msg: "login first",
    });
  }

  try {
    let verify = jwt.verify(token, "secret");

    req.user = verify;

    next();
  } catch {
    res.json({
      msg: "invalid token",
    });
  }
};

export default auth;
