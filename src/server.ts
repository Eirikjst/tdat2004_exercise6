import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import * as errorHandler from "errorhandler";
import * as mysql from "mysql";
import {IndexRoute} from "./routes/index";
import {dropdownRoute} from "./routes/dropdownRoutes";

/**
 * The server.
 *
 * @class Server
 */
export class Server {

    public app: express.Application;

    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    public static bootstrap(): Server {
        return new Server();
    }

    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    constructor() {
        //create expressjs application
        this.app = express();

        //configure application
        this.config();

        //add routes
        this.routes();

        //add api
        this.api();
    }

    /**
     * Create REST API routes
     *
     * @class Server
     * @method api
     */
    public api() {
        let pool = mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
            user: '',
            password: '',
            database: 'tdat2004_exercise6',
            debug: false
        });
        pool.getConnection(function(err: mysql.MysqlError, conn: mysql.Connection){
            if (err) throw err;
            else console.log("connection to db ok");
        });
        require("./routes/homeRoutes")(this.app, pool);
        require("./routes/economyRoutes")(this.app, pool);
        require("./routes/politicsRoutes")(this.app, pool);
        require("./routes/scienceRoutes")(this.app, pool);
        require("./routes/technologyRoutes")(this.app, pool);
        require("./routes/utilRoutes")(this.app, pool);
    }

    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    public config() {
        //js
        this.app.use(express.static(path.join(__dirname, "public")));

        //css
        this.app.set("stylesheet", path.join(__dirname, "stylesheet"));

        //views
        this.app.set("views", path.join(__dirname, "views"));

        //Logger
        this.app.use(logger("dev"))

        //Body-parser
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));

        this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
            err.status = 404;
            next(err);
        });
      
        //error handling
        this.app.use(errorHandler());
    }

    /**
     * Create router
     *
     * @class Server
     * @method api
     */
    public routes() {
        let router: express.Router;
        let router2: express.Router;

        router = express.Router();
        router2 = express.Router();
        //IndexRoute
        IndexRoute.create(router);
        //dropdownRoute
        dropdownRoute.create(router2);

        this.app.use(router);
        this.app.use(router2);
    }
}