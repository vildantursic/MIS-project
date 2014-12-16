jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

/* Main page */
var navbarHeight = $('.navbar').height(); 

$(window).scroll(function() {
  var navbarColor = "62,195,246";//color attr for rgba
  var smallLogoHeight = $('.small-logo').height();
  var bigLogoHeight = $('.big-logo').height();
  
  
  var smallLogoEndPos = 0;
  var smallSpeed = (smallLogoHeight / bigLogoHeight);
  
  var ySmall = ($(window).scrollTop() * smallSpeed); 
  
  var smallPadding = navbarHeight - ySmall;
  if (smallPadding > navbarHeight) { smallPadding = navbarHeight; }
  if (smallPadding < smallLogoEndPos) { smallPadding = smallLogoEndPos; }
  if (smallPadding < 0) { smallPadding = 0; }
  
  $('.small-logo-container ').css({ "padding-top": smallPadding});
  
  var navOpacity = ySmall / smallLogoHeight; 
  if  (navOpacity > 1) { navOpacity = 1; }
  if (navOpacity < 0 ) { navOpacity = 0; }
  var navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';
  $('.navbar').css({"background-color": navBackColor});
  
  var shadowOpacity = navOpacity * 0.4;
  if ( ySmall > 1) {
    $('.navbar').css({"box-shadow": "0 2px 3px rgba(0,0,0," + shadowOpacity + ")"});
  } else {
    $('.navbar').css({"box-shadow": "none"});
  }
});

//LOGIN
$('#toggle-login').click(function(){
  $('#login').toggle();
});


/* Categories */
$(document).ready(function() {
    $('.item').click(function(evt) {
        evt.stopPropagation();
    })
    $('.category').click(function() {
        var e = $(this)
        if (!e.hasClass("expanded")) {
            e.addClass("expanded")
            e.find("i").attr("class", "fa fa-minus-circle")
            e.children('.item').slideDown()
        } else {
            e.removeClass("expanded")
            e.find("i").attr("class", "fa fa-plus-circle")
            e.children('.item').slideUp()
        }
    });
    firstLoad();
});

function getLocaleFromHash(url) {
    var match = url.match(/\/.*#(.+)/);
    return (match ? match[1] : "");
}

function firstLoad() {
    $('#accordion-ul').children('.category').each(function() {
        $(this).children('a').append("<i class=\"fa fa-plus-circle\"></i>")
    });
    var hash = getLocaleFromHash(location.href);
    if (hash) {
        var e = $("#" + hash)
        if (e.hasClass("item")) {
            e.addClass("active")
            e.parent().click()
        } else if (e.hasClass("category")) {
            e.click()
        }
    }
}
