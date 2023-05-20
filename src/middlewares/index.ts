import express, { Request, Response, NextFunction } from 'express';

const middleware = [
    express.json(),
    function (req: Request, res: Response, next: NextFunction) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "*");
        res.setHeader("Access-Control-Allow-Headers", "*");

        if (req.method === "OPTIONS") {
            return res.send(null);
        }

        next();
    },

    function (_req: Request, res: Response, _next: NextFunction) {
        return res.status(404).json({
            c: 404,
            d: "Not Found",
        });
    },

    function (err: Error, _req: Request, res: Response, _next: NextFunction) {
        console.log(`err: ${err}`)
        if (!res.headersSent) {
            return res.status(500).json({
                c: 500,
                d: "Internal Server Error",
            })
        }
    },
];

export { middleware };