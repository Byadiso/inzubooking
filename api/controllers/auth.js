import User from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    const savedUser = newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    next(error);
  }
};


export const login = async (req, res, next) => {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
  
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
      });
      const savedUser = newUser.save();
      res.status(200).json(savedUser);
    } catch (error) {
      next(error);
    }
  };