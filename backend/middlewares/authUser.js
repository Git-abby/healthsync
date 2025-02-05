import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized, Login Again",
      });
    }

    const decode_token = jwt.verify(token, process.env.SecretKey);
    req.body.id = decode_token.id;
    next();
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      message: "Not Authorized! login and try again",
    });
  }
};

export default authUser;
