import * as express from "express";
import * as mysql from "mysql";

module.exports = function(app: express.Application, pool: mysql.Pool){
    app.get("/latestNews_technology", function(req: express.Request, res: express.Response){
        pool.getConnection(function(err: mysql.MysqlError, conn){
            let query_str: string = "SELECT * FROM tdat2004_exercise6.articles where article_cat='technology' order by date_created DESC;";
            conn.query(query_str, function(err: mysql.MysqlError, result: mysql.queryCallback){
                conn.release();
                if (err){
                    console.error(err);
                    res.send(false);
                } else {
                    res.send(result);
                }
            });
        });
    });

    app.get("/popularNews_technology", function(req: express.Request, res: express.Response){
        pool.getConnection(function(err: mysql.MysqlError, conn){
            let query_str: string = "SELECT * FROM tdat2004_exercise6.articles WHERE article_cat='technology' order by likes DESC;";
            conn.query(query_str, function(err: mysql.MysqlError, result:mysql.queryCallback){
                conn.release();
                if (err){
                    console.error(err);
                    res.send(false);
                } else {
                    res.send(result);
                }
            });
        });
    });
}