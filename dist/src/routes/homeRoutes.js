"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (app, pool) {
    app.get("/latestNews_home", function (req, res) {
        pool.getConnection(function (err, conn) {
            var query_str = 'SELECT * FROM tdat2004_exercise6.articles order by date_created DESC limit 8;';
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
    app.get("/popularNews_home", function (req, res) {
        pool.getConnection(function (err, conn) {
            var query_str = "SELECT * FROM tdat2004_exercise6.articles order by likes DESC limit 8;";
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
