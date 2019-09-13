var article_id;
init();
function init() {
    $(document).on('click', '.item.news', function () {
        article_id = Number($(this).attr('id').replace(/^\D*/, ''));
        $('news').css('background-color', '');
        $(this).css('background-color', 'menu');
        $('#likeArticle').prop('disabled', false);
        $('#dislikeArticle').prop('disabled', false);
        $('#viewArticle').prop('disabled', false);
        $('#viewComments').prop("disabled", false);
        $('#newComments').prop("disabled", false);
        $('#newArticle').prop("disabled", false);
    });
}
$("#close_modal_article").click(function () {
    $('.ui.modal').hide();
    window.location.href = window.location.href;
});
function display_article_modal(data) {
    $('#read_article_header').append(data[0].headline);
    $('#read_article_text').append(data[0].article_text);
    $('.ui.modal.article').show();
}
function display_comments_modal(data) {
    var list = document.getElementById("comment_list");
    for (var i = 0; i < data.length; i++) {
        $(list).append("<div class='item news' id='itemnewest" + data[i].article_id + "'>" +
            "<div class='content ui grid container'>" +
            "<div class='twelve wide column item'>" +
            "<p>" + data[i].comment_text + "</p>" +
            "</div>" +
            "</div>" +
            "</div>");
    }
    $('.ui.modal.comments').show();
}
$('#newArticle').click(function () {
    $('.ui.modal.newarticle').show();
    $("#save_new_article").click(function () {
        var article_cat = $("#newarticle_category").dropdown('get value');
        var article_text = $("#article_text").val().toString();
        var headline = $("#new_article_headline").val().toString();
        if ((headline.length !== 0) && (article_text.length !== 0) && (article_cat.length !== 0)) {
            post_new_article(article_cat, article_text, headline);
        }
    });
});
$("#cancel_new_article").click(function () {
    $('.ui.modal.newarticle').hide();
    window.location.href = window.location.href;
});
$("#newComments").click(function () {
    $('.ui.modal.newcomment').show();
    $("#save_new_comment").click(function () {
        var temp = $("#new_comment_text").val().toString();
        if (temp.length != 0) {
            post_new_comment(temp);
        }
    });
});
$('#dislikeArticle').click(function () {
    $.ajax({
        url: '/dislike_article',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            article_id: article_id
        }),
        success: function () {
            window.location.href = window.location.href;
        },
        error: function (textStatus, err) {
            console.log('text status ' + textStatus + ', err ' + err);
        }
    });
});
$('#likeArticle').click(function () {
    $.ajax({
        url: '/like_article',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            article_id: article_id
        }),
        success: function () {
            window.location.href = window.location.href;
        },
        error: function (textStatus, err) {
            console.log('text status ' + textStatus + ', err ' + err);
        }
    });
});
$('#viewArticle').click(function () {
    $.ajax({
        url: '/view_article',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            article_id: article_id
        }),
        success: function (data) {
            display_article_modal(data);
        },
        error: function (textStatus, err) {
            console.log('text status ' + textStatus + ', err ' + err);
        }
    });
});
$('#viewComments').click(function () {
    $.ajax({
        url: '/view_comments',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            article_id: article_id
        }),
        success: function (data) {
            display_comments_modal(data);
        },
        error: function (textStatus, err) {
            console.log('text status ' + textStatus + ', err ' + err);
        }
    });
});
function post_new_comment(comment_text) {
    $.ajax({
        url: '/post_comment',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            article_id: article_id,
            comment_text: comment_text
        }),
        success: function () {
            alert("Comment commited");
            window.location.href = window.location.href;
        },
        error: function (textStatus, err) {
            console.log('text status ' + textStatus + ', err ' + err);
        }
    });
}
function post_new_article(article_cat, article_text, headline) {
    var date_created = new Date().toISOString().slice(0, 19).replace('T', ' ');
    $.ajax({
        url: '/post_article',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            article_cat: article_cat,
            article_text: article_text,
            date_created: date_created,
            headline: headline
        }),
        success: function () {
            alert("Article commited");
            window.location.href = window.location.href;
        },
        error: function (textStatus, err) {
            console.log('text status ' + textStatus + ', err ' + err);
        }
    });
}
