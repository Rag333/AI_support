import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {  //Middleware functions in Express run before the actual route handler, so this checks if the request is authenticated.
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Access Denied. No token found." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};