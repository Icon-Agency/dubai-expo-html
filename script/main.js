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
/*$.fn.preload = function() {
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
});*/

$(function(t, i) {
    var s = {
        duration: 3e3,
        delay: 12e3,
        init: function() {
            var i = (t(".banner-block-content"), this);
            this.banner = t(".banner-block-content"), this.rows = t(".field-collection-container .field-collection-view", this.banner), this.total = this.rows.length, this.start = 0, this.bootstrap = "col-sm-6 col-sm-offset-6", this.rows.each(function(s, n) {
                var e = t("div.img", t(this));
                t(this).wrapInner('<div class="inner"></div>'), t(this).wrapInner('<div class="' + i.bootstrap + '"></div>'), e.attr("data-banner-index", s).appendTo(t(".images", i.banner)), t(this).attr("data-banner-index", s).attr("class", "text").appendTo(t(".texts .text-container", i.banner))
            }), t(".field-collection-container", this.banner).remove(), this.imgDivs = t(".images .img", this.banner), this.txtDivs = t(".texts .text", this.banner), this.imgDivs.eq(this.start).css("background-image", "url(" + this.imgDivs.eq(this.start).data("img-src") + ")"), this.imgDivs.eq(this.start).addClass("current").show(), this.txtDivs.eq(this.start).addClass("current").fadeIn(this.duration), this.txtDivs.find(".inner").on("mouseenter", function() {
                t(".shape", this.banner).addClass("hover")
            }).on("mouseleave", function() {
                t(".shape", this.banner).removeClass("hover")
            }), this.txtDivs.on("click", function(i) {
                i.stopPropagation();
                var s = t("a:first", t(this));
                s.length && (window.location = s.attr("href"))
            }), this.reIndex()
        },
        reIndex: function() {
            this.imgDivs.not(".current").css("z-index", 8), this.imgDivs.filter(".current").css("z-index", 9)
        },
        showImage: function(i) {
            var s = this.imgDivs.eq(i),
                n = this.txtDivs.eq(i),
                e = this;
            this.reIndex(), s.hide(), s.css("background-image", "url(" + s.data("img-src") + ")").waitForImages(function() {
                e.imgDivs.removeClass("current"), e.txtDivs.removeClass("current").fadeOut(e.duration), s.css("z-index", 10).fadeIn(e.duration).addClass("current"), n.hide().fadeIn(e.duration).addClass("current"), t(window).width() > 768 && t("body").trigger("change-shapes"), e.startTimer()
            }, t.noop, !0)
        },
        startTimer: function() {
            var t = this;
            setTimeout(function() {
                t.rotate(t)
            }, t.delay)
        },
        rotate: function() {
            1 != this.total && (this.start++, this.start >= this.total && (this.start = 0), this.showImage(this.start))
        }
    };
    t(function() {
        var t = s;
        t.init(), setTimeout(function() {
            t.rotate()
        }, t.delay - t.duration)
    })
})


$(function(e, t) {
    var s = {
        init: function() {
            var t = this,
                s = e(".shape svg polygon");
            this.steps = e("animate", s), this.currentShape = 0, this.steps.eq(0).attr("to", s.attr("points")), e("body").on("change-shapes", function() {
                t.changeShapes()
            }), e(".shape").fadeIn(500, function() {
                e(this).addClass("hover-ready")
            })
        },
        resizeSvg: function() {
            var t = e("#block-bean-homepage-banner").height(),
                s = parseInt(e("#home-banner-shapes").css("margin-top"), 10) + parseInt(e("#home-banner-shapes").css("margin-bottom"), 10);
            e("#home-banner-shapes").css("height", t - s)
        },
        changeShapes: function() {
            this.currentShape++, this.currentShape >= this.steps.length && (this.currentShape = 0);
            var e = this.steps.eq(this.currentShape).get(0);
            try {
                e.beginElement()
            } catch (t) {}
        }
    };
    e(function() {
        s.init()//, (e(window).resize(e.debounce(25, !1, s.resizeSvg)), s.resizeSvg())
    })
})