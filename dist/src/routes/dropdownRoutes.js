"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require("./route");
var dropdownRoute = (function (_super) {
    __extends(dropdownRoute, _super);
    function dropdownRoute() {
        return _super.call(this) || this;
    }
    dropdownRoute.create = function (router) {
        console.log("[dropdownRoute::create] Creating routes.");
        router.get("/economy", function (req, res, next) {
            res.sendFile('economy.html', { root: './views/' });
        });
        router.get("/politics", function (req, res, next) {
            res.sendFile('politics.html', { root: './views/' });
        });
        router.get("/science", function (req, res, next) {
            res.sendFile('science.html', { root: './views/' });
        });
        router.get("/technology", function (req, res, next) {
            res.sendFile('technology.html', { root: './views/' });
        });
    };
    return dropdownRoute;
}(route_1.BaseRoute));
exports.dropdownRoute = dropdownRoute;
