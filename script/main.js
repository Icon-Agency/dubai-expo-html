$(function() {
	$.scrollify({
		section: ".panel",
		sectionName: false,
		interstitialSection: ".extra, .footer",
		easing: "easeOutExpo",
		scrollSpeed: 1100,
		offset: 0,
		scrollbars: true,
		standardScrollElements: "",
		setHeights: false,
		overflowScroll: true,
		updateHash: true,
		touchScroll: true,
		before: function(i, panels) {
			var active = $(".slide.active");
			var ref = panels[i].attr("data-section-name");
			$(".pagination a").css("display", "block");

			$(".pagination .active").removeClass("active");
			$(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
			active.addClass("remove");

			//setTimeout(function() {
			$("[data-slide=" + i + "]").addClass("active");
			active.removeClass("remove active");
			//},300);

			// $('".' + ref+'"').addClass("actived");
		},
		after: function() {
			
		},
		afterResize: function() {
			
		},
		afterRender: function() {
			$(".pagination a").on("click",$.scrollify.move);
		}
	});
});


//Preload images first
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
var images = Array("./img/banner_hp1.jpg",
    "./img/banner_hp2.jpg");
$([images[0],images[1]]).preload();
// Usage:
var currimg = 0;
$(document).ready(function(){
    function loading(){
        $('#background').animate({ opacity: 1 }, 1000,function(){
            //finished animating, minifade out and fade new back in
            $('#background').animate({ opacity: 0.7 }, 1000,function(){
                currimg++;
                if(currimg > images.length-1){
                    currimg=0;
                }
                var newimage = images[currimg];
                //swap out bg src
                $('#background').css("background-image", "url("+newimage+")");
                //animate fully back in
                $('#background').animate({ opacity: 1 }, 1000,function(){
                    //set timer for next
                    setTimeout(loading,5000);
                });
            });
        });
    }
    setTimeout(loading,5000);
});