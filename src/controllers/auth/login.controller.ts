// Path : /api/auth/login

import ControllerClass from "../../interfaces/controller.interface";
import { object, string } from "yup";


export default new ControllerClass({
  path: "login",
  scheme: object().shape({
    user: string().required(),
    pass: string().min(8).required()
  }),
  post: async (req, res, next) => {
    return res.status(200).json({
      c: 200,
      d: null,
      m: "Login Success"
    });
  }
})