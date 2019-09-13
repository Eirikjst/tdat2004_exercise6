"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (app, pool) {
    app.get("/latestNews_science", function (req, res) {
        pool.getConnection(function (err, conn) {
            var query_str = "SELECT * FROM tdat2004_exercise6.articles where article_cat='science' order by date_created DESC;";
            conn.query(query_str, function (err, result) {
                conn.release();
                if (err) {
                    console.error(err);
                    res.send(false);
                }
                else {
                    res.send(result);
                }
            });
        });
    });
    app.get("/popularNews_science", function (req, res) {
        pool.getConnection(function (err, conn) {
            var query_str = "SELECT * FROM tdat2004_exercise6.articles WHERE article_cat='science' order by likes DESC;";
            conn.query(query_str, function (err, result) {
                conn.release();
                if (err) {
                    console.error(err);
                    res.send(false);
                }
                else {
                    res.send(result);
                }
            });
        });
    });
};
