var fill_lists = (function () {
    function fill_lists() {
    }
    fill_lists.fill_latest_news = function (data) {
        var list = document.getElementById("latestNews");
        for (var i = 0; i < data.length; i++) {
            $(list).append("<div class='item news' id='itemlatest" + data[i].article_id + "'>" +
                "<div class='content ui grid container'>" +
                "<div class='eight wide column item'>" +
                "<div class='content'>" +
                "<a class='header'>" + data[i].headline + "</a>" +
                "<div class='description'>" + data[i].article_cat +
                "</div>" +
                "</div>" +
                "</div>" +
                "<div class='four wide column item'>" +
                "<p> Date published: " + data[i].date_created + "</p>" +
                "</div>" +
                "</div>" +
                "</div>");
        }
    };
    fill_lists.fill_popular_news = function (data) {
        var list = document.getElementById("popularNews");
        for (var i = 0; i < data.length; i++) {
            $(list).append("<div class='item news' id='itemnewest" + data[i].article_id + "'>" +
                "<div class='content ui grid container'>" +
                "<div class='twelve wide column item'>" +
                "<div class='content'>" +
                "<a class='header'>" + data[i].headline + "</a>" +
                "<div class='description'>" + data[i].article_cat +
                "</div>" +
                "</div>" +
                "</div>" +
                "<div class='four wide column item'>" +
                "<p> L: " + data[i].likes + ", D: " + data[i].dislikes + "</p>" +
                "</div>" +
                "</div>" +
                "</div>");
        }
    };
    return fill_lists;
}());
