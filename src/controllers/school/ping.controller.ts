// Path : /api/school/ping

import ControllerClass from "../../interfaces/controller.interface";


export default new ControllerClass({
  path: "ping",
  post: async (req, res, next) => {
    return res.status(200).json({
      c: 200,
      d: null,
      m: "POST Method Ping!!"
    });
  },
  get: async (req, res, next) => {
    return res.status(200).json({
      c: 200,
      d: null,
      m: "GET Method Ping!!"
    });
  },
  put: async (req, res, next) => {
    return res.status(200).json({
      c: 200,
      d: null,
      m: "PUT Method Ping!!"
    });
  },
  delete: async (req, res, next) => {
    return res.status(200).json({
      c: 200,
      d: null,
      m: "DELETE Method Ping!!"
    });
  }

})
