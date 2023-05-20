import { object, string } from "yup";
import HandlersClass from "../../model/HandlerBase";

export default new HandlersClass({
    path: "/login",
    scheme: object({
        user: string().required(),
        pass: string().min(8).required(),
    }),
    async post(req, res, next) {
        return res?.status(200).json({
            c: 200,
            d: null,
            m: "Login Success",
        });
    },
})