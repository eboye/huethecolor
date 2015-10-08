/**
 * Created by PC on 3/31/2015.
 */

$(".button-collapse").sideNav({menuWidth: 240, activationWidth: 70});

darkOrLight = function(color){

    var colorCheck = tinycolor(color).darken(20);

    if (colorCheck.isDark()){
        return '#fff'
    } else {
        return '#222'
    }
};

colorize = function(value){
    var c50 = 'hsla(' + value + ', 32%, 93%, 1.0)',
        hc50 = tinycolor(c50).toHexString(),
        c100 = 'hsla(' + value + ', 40%, 85%, 1.0)',
        hc100 = tinycolor(c100).toHexString(),
        c200 = 'hsla(' + value + ', 46%, 73%, 1.0)',
        hc200 = tinycolor(c200).toHexString(),
        c300 = 'hsla(' + value + ', 45%, 64%, 1.0)',
        hc300 = tinycolor(c300).toHexString(),
        c400 = 'hsla(' + value + ', 43%, 56%, 1.0)',
        hc400 = tinycolor(c400).toHexString(),
        c500 = 'hsla(' + value + ', 54%, 45%, 1.0)',
        hc500 = tinycolor(c500).toHexString(),
        c600 = 'hsla(' + value + ', 48%, 44%, 1.0)',
        hc600 = tinycolor(c600).toHexString(),
        c700 = 'hsla(' + value + ', 54%, 42%, 1.0)',
        hc700 = tinycolor(c700).toHexString(),
        c800 = 'hsla(' + value + ', 60%, 38%, 1.0)',
        hc800 = tinycolor(c800).toHexString(),
        c900 = 'hsla(' + value + ', 67%, 30%, 1.0)',
        hc900 = tinycolor(c900).toHexString(),
        a100 = 'hsla(' + value + ', 100%, 78%, 1.0)',
        ha100 = tinycolor(a100).toHexString(),
        a200 = 'hsla(' + value + ', 97%, 65%, 1.0)',
        ha200 = tinycolor(a200).toHexString(),
        a400 = 'hsla(' + value + ', 97%, 62%, 1.0)',
        ha400 = tinycolor(a400).toHexString(),
        a700 = 'hsla(' + value + ', 97%, 58%, 1.0)',
        ha700 = tinycolor(a700).toHexString();

    /* Now the colors */
    $('.c50').css({
        'background': hc50,
        'color': darkOrLight(hc50)
    }).find('span').text(hc50);

    $('.c100').css({
        'background': hc100,
        'color': darkOrLight(hc100)
    }).find('span').text(hc100);

    $('.c200').css({
        'background': hc200,
        'color': darkOrLight(hc200)
    }).find('span').text(hc200);

    $('.c300').css({
        'background': hc300,
        'color': darkOrLight(hc300)
    }).find('span').text(hc300);

    $('.c400').css({
        'background': hc400,
        'color': darkOrLight(hc400)
    }).find('span').text(hc400);

    $('.c500').css({
        'background': hc500,
        'color': darkOrLight(hc500)
    }).find('span').text(hc500);

    $('.c600').css({
        'background': hc600,
        'color': darkOrLight(hc600)
    }).find('span').text(hc600);

    $('.c700').css({
        'background': hc700,
        'color': darkOrLight(hc700)
    }).find('span').text(hc700);

    $('.c800').css({
        'background': hc800,
        'color': darkOrLight(hc800)
    }).find('span').text(hc800);

    $('.c900').css({
        'background': hc900,
        'color': darkOrLight(hc900)
    }).find('span').text(hc900);

    $('.a100').css({
        'background': ha100,
        'color': darkOrLight(ha100)
    }).find('span').text(ha100);

    $('.a200').css({
        'background': ha200,
        'color': darkOrLight(ha100)
    }).find('span').text(ha200);

    $('.a400').css({
        'background': ha400,
        'color': darkOrLight(ha100)
    }).find('span').text(ha400);

    $('.a700').css({
        'background': ha700,
        'color': darkOrLight(ha100)
    }).find('span').text(ha700);

    $('.range-field .thumb').css({
        'background': hc500,
        'color': darkOrLight(hc500)
    });
};

function copyToClipboard(text) {
    window.prompt("Copy " + text + " to clipboard: Ctrl+C, Enter", text);
}

colorize('163');

$('#colorpicker').on('input change', function(){
    var value = $(this).val();
    colorize(value);
});

$('.collection-item').click(function(){
    copyToClipboard($(this).find('.badge').text());
});