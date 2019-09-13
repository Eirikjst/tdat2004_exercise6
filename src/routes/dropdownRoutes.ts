import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";


/**
 * / route
 *
 * @class dropdownRoute
 */
export class dropdownRoute extends BaseRoute {

    /**
     * Create the routes.
     *
     * @class dropdownRoute
     * @method create
     * @static
     */
    public static create(router: Router) {
        //log
        console.log("[dropdownRoute::create] Creating routes.");

        router.get("/economy", (req: Request, res: Response, next: NextFunction) => {
            res.sendFile('economy.html', { root: './views/' });
        });

        router.get("/politics", (req: Request, res: Response, next: NextFunction) => {
            res.sendFile('politics.html', { root: './views/' });
        });

        router.get("/science", (req: Request, res: Response, next: NextFunction) => {
            res.sendFile('science.html', { root: './views/' });
        });

        router.get("/technology", (req: Request, res: Response, next: NextFunction) => {
            res.sendFile('technology.html', { root: './views/' });
        });
    }

    /**
     * Constructor
     *
     * @class dropdownRoute
     * @constructor
     */
    constructor() {
        super();
    }
}