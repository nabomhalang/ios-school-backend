

import { Router } from "express";


/**
 * RouterBase.ts
 */
export default abstract class RouterBase {
    public router: Router;

    constructor(private path: string) {
        this.router = Router();
        this.path = path;
    }

    public abstract routing(): void;
}