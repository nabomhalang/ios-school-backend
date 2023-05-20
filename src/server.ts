

import express, { Application, Router } from "express";
import fs from "fs";
import RouterBase from "./model/RouterBase";


export class Server {
    public server: Application;

    /**
     * 
     * @param port Port Application listens on
     * @param middleware Array of middleware to be applied to server 
     * @param routes Array of express.Router objects for application routes
     * @param apiPath path to api routes
     * @param staticPath path to folder for public files express will make available
     */
    constructor(
        private port: number | string,
        middlewares: Array<any>,
        routers: Array<Router> = fs.readdirSync("src/routes").map((route: string) => { return (require(`./routes/${route}`)).default as Router }),
        private staticPath: string = "public",
        private apiPath: string = "/api"
    ) {
        this.server = express();
        this.middlewares(middlewares);
        this.router(routers);
        this.static();
    }

    private middlewares(middlewares: Array<any>): void {
        middlewares.forEach(middleware => {
            this.server.use(middleware);
        });
    }

    public addMiddlewares(middlewares: Array<any>): void {
        this.server.use(middlewares);
    }

    private router(routers: Array<Router>): void {
        routers.forEach((controller: Router) => {
            this.server.use(this.apiPath, controller);
        });
    }

    private static(): void {
        this.server.use(express.static(this.staticPath));
    }

    public listen(): void {
        this.server.listen(this.port, () => {
            console.log(`server listening on the port ${this.port}`);
        });
    }
}