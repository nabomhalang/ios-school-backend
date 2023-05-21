

import express, { Application, NextFunction, Request, Response, Router } from "express";


export class Server {
    public server: Application;

    constructor(
        private port: number,
        middlewares: Array<any>,
        routers: Router = require("./routes").default,
        private staticPath: string = "public",
        private apiPath: string = "/api"
    ) {
        this.server = express();
        this.middlewares(middlewares);
        this.router(routers);
        this.static();
        this.defaultRoute();
    }

    private middlewares(middlewares: Array<any>): void {
        middlewares.forEach(middleware => {
            this.server.use(middleware);
        });
    }

    public addMiddlewares(middlewares: Array<any>): void {
        this.server.use(middlewares);
    }

    private router(router: Router): void {
        this.server.use(this.apiPath, router);
    }

    private static(): void {
        this.server.use(express.static(this.staticPath));
    }

    public async listen(): Promise<void> {
        this.server.listen(this.port, () => {
            console.log(`server listening on the port ${this.port}`);
        });
    }

    private defaultRoute(): void {
        this.server.use((req: Request, res: Response, next: NextFunction) => {
            res.status(404).json({
                c: 404,
                d: null,
                m: "Not found"
            })
        });

        this.server.use((err: any, req: Request, res: Response, next: NextFunction) => {
            if (err) console.log(err);
            res.status(500).json({
                c: 500,
                d: null,
                m: "Internal server error"
            });
        });
    }
}