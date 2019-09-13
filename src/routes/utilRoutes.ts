import * as express from "express";
import * as mysql from "mysql";

module.exports = function (app: express.Application, pool: mysql.Pool) {
    app.post("/like_article", function (req: express.Request, res: express.Response) {
        const { article_id } = req.body;
        pool.getConnection(function (err: mysql.MysqlError, conn) {
            let query_str: string = "UPDATE articles SET likes = likes + 1 WHERE article_id=" + article_id + ";";
            conn.query(query_str, function (err: mysql.MysqlError, result: mysql.queryCallback) {
                conn.release();
                if (err) {
                    console.error(err);
                    res.send(false);
                } else {
                    res.send(true);
                }
            });
        });
    });

    app.post("/dislike_article", function (req: express.Request, res: express.Response) {
        const { article_id } = req.body;
        pool.getConnection(function (err: mysql.MysqlError, conn) {
            let query_str: string = "UPDATE articles SET dislikes = dislikes + 1 WHERE article_id=" + article_id + ";";
            conn.query(query_str, function (err: mysql.MysqlError, result: mysql.queryCallback) {
                conn.release();
                if (err) {
                    console.error(err);
                    res.send(false);
                } else {
                    res.send(true);
                }
            });
        });
    });

    app.post("/view_article", function (req: express.Request, res: express.Response){
        const { article_id } = req.body;
        pool.getConnection(function (err: mysql.MysqlError, conn){
            let query_str: string = "SELECT article_text, headline FROM articles WHERE article_id=" + article_id + ";";
            conn.query(query_str, function (err: mysql.MysqlError, result: mysql.queryCallback){
                conn.release();
                if (err) {
                    console.error(err);
                    res.send(false);
                } else {
                    res.send(result);
                }
            });
        });
    });

    app.post("/view_comments", function (req: express.Request, res: express.Response){
        const {article_id} = req.body;
        pool.getConnection(function(err: mysql.MysqlError, conn){
            let query_str: string = "SELECT comment_text FROM comments WHERE article_id=" + article_id + ";";
            conn.query(query_str, function (err: mysql.MysqlError, result: mysql.queryCallback){
                conn.release();
                if (err){
                    console.error(err)
                    res.send(false);
                } else {
                    res.send(result);
                }
            });
        });
    });

    app.post("/post_comment", function (req: express.Request, res: express.Response){
        const {article_id, comment_text} = req.body;
        pool.getConnection(function(err: mysql.MysqlError, conn){
            let query_str: string = "INSERT INTO comments (article_id, comment_text) VALUES(" + [article_id] + ", '" + [comment_text] + "');";
            conn.query(query_str, function (err: mysql.MysqlError, result: mysql.queryCallback){
                conn.release();
                if (err){
                    console.error(err)
                    res.send(false);
                } else {
                    res.send(true);
                }
            });
        });
    });


    //sql inject: sqlinject', NULL, (SELECT version()));# in textfield
    app.post("/post_article", function (req: express.Request, res: express.Response){
        let article_cat = req.body.article_cat;
        let article_text = req.body.article_text;
        let date_created = req.body.date_created;
        let headline = req.body.headline;
        pool.getConnection(function(err: mysql.MysqlError, conn){
            //let query_str: string = "INSERT INTO articles (article_cat, article_text, date_created, headline) VALUES('"+article_cat+"', '"+article_text+"', '"+date_created+"', '"+headline+"');";
            let query_str: string = "INSERT INTO articles (article_cat, article_text, date_created, headline) VALUES('"+article_cat+"', '"+article_text+"', '"+date_created+"', '"+headline+"');";
            console.log(query_str);
            conn.query(query_str, function (err: mysql.MysqlError, result: mysql.queryCallback){
                conn.release();
                if (err){
                    console.error(err);
                    res.send(false);
                } else {
                    res.send(true);
                }
            });
        });
    });
}