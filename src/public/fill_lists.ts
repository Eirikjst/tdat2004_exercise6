/**
 * @class fill_lists
 */
class fill_lists{
    public static fill_latest_news(data): void {
        let list: HTMLElement = document.getElementById("latestNews");
        for (let i = 0; i < data.length; i++) {
            $(list).append( "<div class='item news' id='itemlatest" + data[i].article_id + "'>" +
                                "<div class='content ui grid container'>" +
                                    "<div class='eight wide column item'>" +
                                        "<div class='content'>" +
                                            "<a class='header'>" + data[i].headline + "</a>" +
                                            "<div class='description'>" + data[i].article_cat +
                                            "</div>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div class='four wide column item'>" +
                                        "<p> Date published: "+ data[i].date_created +"</p>"+
                                    "</div>"+
                                "</div>" +
                            "</div>");
        }
    }
    
    public static fill_popular_news(data): void {
        let list: HTMLElement = document.getElementById("popularNews");
        for (let i = 0; i < data.length; i++) {
            $(list).append( "<div class='item news' id='itemnewest" + data[i].article_id + "'>" +
                                "<div class='content ui grid container'>" +
                                    "<div class='twelve wide column item'>" +
                                        "<div class='content'>" +
                                            "<a class='header'>" + data[i].headline + "</a>" +
                                            "<div class='description'>" + data[i].article_cat +
                                            "</div>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div class='four wide column item'>" +
                                        "<p> L: "+ data[i].likes +", D: " + data[i].dislikes + "</p>"+
                                    "</div>"+
                                "</div>" +
                            "</div>");
        }
    }
}