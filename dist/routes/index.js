"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
class IndexRoute extends route_1.BaseRoute {
    static create(router) {
        console.log("[IndexRoute::create] Creating index route.");
        router.get("/", (req, res, next) => {
            res.sendFile('index.html', { root: './views/' });
        });
    }
    constructor() {
        super();
    }
}
exports.IndexRoute = IndexRoute;
