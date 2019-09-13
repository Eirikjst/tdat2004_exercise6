"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (app, pool) {
    app.post("/like_article", function (req, res) {
        var article_id = req.body.article_id;
        pool.getConnection(function (err, conn) {
            var query_str = "UPDATE articles SET likes = likes + 1 WHERE article_id=" + article_id + ";";
            conn.query(query_str, function (err, result) {
                conn.release();
                if (err) {
                    console.error(err);
                    res.send(false);
                }
                else {
                    res.send(true);
                }
            });
        });
    });
    app.post("/dislike_article", function (req, res) {
        var article_id = req.body.article_id;
        pool.getConnection(function (err, conn) {
            var query_str = "UPDATE articles SET dislikes = dislikes + 1 WHERE article_id=" + article_id + ";";
            conn.query(query_str, function (err, result) {
                conn.release();
                if (err) {
                    console.error(err);
                    res.send(false);
                }
                else {
                    res.send(true);
                }
            });
        });
    });
    app.post("/view_article", function (req, res) {
        var article_id = req.body.article_id;
        pool.getConnection(function (err, conn) {
            var query_str = "SELECT article_text, headline FROM articles WHERE article_id=" + article_id + ";";
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
    app.post("/view_comments", function (req, res) {
        var article_id = req.body.article_id;
        pool.getConnection(function (err, conn) {
            var query_str = "SELECT comment_text FROM comments WHERE article_id=" + article_id + ";";
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
    app.post("/post_comment", function (req, res) {
        var _a = req.body, article_id = _a.article_id, comment_text = _a.comment_text;
        pool.getConnection(function (err, conn) {
            var query_str = "INSERT INTO comments (article_id, comment_text) VALUES(" + [article_id] + ", '" + [comment_text] + "');";
            conn.query(query_str, function (err, result) {
                conn.release();
                if (err) {
                    console.error(err);
                    res.send(false);
                }
                else {
                    res.send(true);
                }
            });
        });
    });
    app.post("/post_article", function (req, res) {
        var article_cat = req.body.article_cat;
        var article_text = req.body.article_text;
        var date_created = req.body.date_created;
        var headline = req.body.headline;
        pool.getConnection(function (err, conn) {
            var query_str = "INSERT INTO articles (article_cat, article_text, date_created, headline) VALUES('" + article_cat + "', '" + article_text + "', '" + date_created + "', '" + headline + "');";
            console.log(query_str);
            conn.query(query_str, function (err, result) {
                conn.release();
                if (err) {
                    console.error(err);
                    res.send(false);
                }
                else {
                    res.send(true);
                }
            });
        });
    });
};
