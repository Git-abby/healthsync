import jwt from "jsonwebtoken";

// Admin Authentication Middleware

const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;

    if (!atoken) {
      return res.json({
        success: false,
        message: "Not authrized, login again",
      });
    }
    const decode = jwt.verify(atoken, process.env.SecretKey);

    if (decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "Not authrized, login again",
      });
    }

    next();
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      message: "Not Authorized! login and try again",
    });
  }
};

export default authAdmin;
