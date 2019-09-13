"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var logger = require("morgan");
var path = require("path");
var errorHandler = require("errorhandler");
var mysql = require("mysql");
var index_1 = require("./routes/index");
var dropdownRoutes_1 = require("./routes/dropdownRoutes");
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
        this.api();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.api = function () {
        var pool = mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
            user: '',
            password: '',
            database: 'tdat2004_exercise6',
            debug: false
        });
        pool.getConnection(function (err, conn) {
            if (err)
                throw err;
            else
                console.log("connection to db ok");
        });
        require("./routes/homeRoutes")(this.app, pool);
        require("./routes/economyRoutes")(this.app, pool);
        require("./routes/politicsRoutes")(this.app, pool);
        require("./routes/scienceRoutes")(this.app, pool);
        require("./routes/technologyRoutes")(this.app, pool);
        require("./routes/utilRoutes")(this.app, pool);
    };
    Server.prototype.config = function () {
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.set("stylesheet", path.join(__dirname, "stylesheet"));
        this.app.set("views", path.join(__dirname, "views"));
        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        this.app.use(errorHandler());
    };
    Server.prototype.routes = function () {
        var router;
        var router2;
        router = express.Router();
        router2 = express.Router();
        index_1.IndexRoute.create(router);
        dropdownRoutes_1.dropdownRoute.create(router2);
        this.app.use(router);
        this.app.use(router2);
    };
    return Server;
}());
exports.Server = Server;
