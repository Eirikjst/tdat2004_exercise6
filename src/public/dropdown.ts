import dropdown = require('semantic-ui-dropdown');

$("#categoryField").dropdown({allowTab: false, selectOnKeydown: true,});
$("#newarticle_category").dropdown({allowTab: false, selectOnKeydown: true,});

$("#categoryField").dropdown('setting', 'onChange', function(val){
    switch(val){
        case "economy":
            redirect_economy();
            break;
        case "home":
            redirect_home();
            break;
        case "politics":
            redirect_politics();
            break;
        case "science":
            redirect_science();
            break;
        case "technology":
            redirect_technology();
            break;
    }
});

function redirect_economy(){
    $.ajax({
        url: '/economy',
        type: 'GET',
        contentType: 'application/json',
        success: function () {
            location.href = "/economy";
        },
        error: function (textStatus, err) {
            console.error('text status ' + textStatus + ', err ' + err);
        }
    });
}

function redirect_home(){
    $.ajax({
        url: '/',
        type: 'GET',
        contentType: 'application/json',
        success: function () {
            location.href = "/";
        },
        error: function (textStatus, err) {
            console.error('text status ' + textStatus + ', err ' + err);
        }
    });
}

function redirect_politics(){
    $.ajax({
        url: '/politics',
        type: 'GET',
        contentType: 'application/json',
        success: function () {
            location.href = "/politics";
        },
        error: function (textStatus, err) {
            console.error('text status ' + textStatus + ', err ' + err);
        }
    });
}

function redirect_science(){
    $.ajax({
        url: '/science',
        type: 'GET',
        contentType: 'application/json',
        success: function () {
            location.href = "/science";
        },
        error: function (textStatus, err) {
            console.error('text status ' + textStatus + ', err ' + err);
        }
    });
}

function redirect_technology(){
    $.ajax({
        url: '/technology',
        type: 'GET',
        contentType: 'application/json',
        success: function () {
            location.href = "/technology";
        },
        error: function (textStatus, err) {
            console.error('text status ' + textStatus + ', err ' + err);
        }
    });
}