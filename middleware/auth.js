import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ succes: false, message: "Not Authorized Login Again" });
  }
  // console.log({ token });

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ succes: false, message: "Errors" });
  }
};

export default authMiddleware;
