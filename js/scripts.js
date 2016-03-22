$(window).load(function() {
    "use strict";
    $(".loader").fadeOut(500, function() {
        $("#main").animate({
            opacity: "1"
        },function(){contanimshow();});
    });
});
function initMonolit() {
    "use strict";
	// Owl carousel ------------------
    var ss = $(".single-slider"), dlt2 = ss.data("loppsli");
    ss.owlCarousel({
        margin: 0,
        items: 1,
        smartSpeed: 1300,
        loop: dlt2,
        nav: false,
        autoHeight: true
    });
    $(".single-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".single-slider-holder").find(ss).trigger("next.owl.carousel");
		return false;
    });
    $(".single-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".single-slider-holder").find(ss).trigger("prev.owl.carousel");
		return false;
    });
    var sync1 = $(".hero-wrap-image-slider"), sync2 = $(".hero-wrap-text-slider"), flag = false, duration = 1300, rtlt = eval($(this).data("rtlt"));
    sync1.owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        smartSpeed: 1200
    }).on("changed.owl.carousel", function(a) {
        if (!flag) {
            flag = true;
            sync2.trigger("to.owl.carousel", [ a.item.index, duration, true ]);
            flag = false;
        }
    });
    sync2.owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false
    }).on("changed.owl.carousel", function(a) {
        if (!flag) {
            flag = true;
            sync1.trigger("to.owl.carousel", [ a.item.index, duration, true ]);
            flag = false;
        }
    });
    $(".hero-wrap-text-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".hero-wrap-text-slider-holder").find(sync2).trigger("next.owl.carousel");
        return false;
    });
    $(".hero-wrap-text-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".hero-wrap-text-slider-holder").find(sync2).trigger("prev.owl.carousel");
        return false;
    });
    var gR = $(".gallery_horizontal"), w = $(window), cf = $(".gallery_horizontal").data("cen");
    function initGalleryhorizontal() {
        var a = $(window).height(), b = $("header").outerHeight(), c = $(".gallery_horizontal"), d = $(".control-panel").outerHeight();
        c.find("img").css({
            height: a - b - d - 20
        });
        if (gR.find(".owl-stage-outer").length) {
            gR.trigger("destroy.owl.carousel");
            gR.find(".horizontal_item").unwrap();
        }
        if (w.width() > 1036) gR.owlCarousel({
            autoWidth: true,
            margin: 10,
            items: 3,
            smartSpeed: 1300,
            loop: true,
            center: cf,
            nav: false,
            thumbs: true,
            thumbImage: true,
            thumbContainerClass: "owl-thumbs",
            thumbItemClass: "owl-thumb-item",
            onInitialized: function() {
                gR.find(".owl-stage").css({
                    height: a - b - d,
                    overflow: "hidden"
                });
                var c = $(".owl-carousel").find(".active").find(".horizontal_item");
                var e = c.data("phdesc");
                var f = c.data("phname");
                if (e) $(".caption").html("<h4>" + f + "</h4><p>" + e + "</p>");
            }
        });
    }
    if (gR.length) {
        initGalleryhorizontal();
        w.on("resize.destroyhorizontal", function() {
            setTimeout(initGalleryhorizontal, 150);
        });
    }
    gR.on("mousewheel", ".owl-stage", function(a) {
        if (a.deltaY < 0) gR.trigger("next.owl"); else gR.trigger("prev.owl");
        a.preventDefault();
    });
    gR.on("translated.owl.carousel", function(a) {
        var b = $(this).find(".active").find(".horizontal_item").data("phdesc");
        var c = $(this).find(".active").find(".horizontal_item").data("phname");
        if (b) $(".caption").html("<h4>" + c + "</h4><p>" + b + "</p>");
    });
    $(".resize-carousel-holder a.next-slide").on("click", function() {
        $(this).closest(".resize-carousel-holder").find(gR).trigger("next.owl.carousel");
		return false;
    });
    $(".resize-carousel-holder a.prev-slide").on("click", function() {
        $(this).closest(".resize-carousel-holder").find(gR).trigger("prev.owl.carousel");
		return false;
    });
    var gf = $(".full-screen-gallery"), w2 = $(window);
    function initGalleryFullscreen() {
        var a = $(window).height(), b = $(".full-screen-gallery"), c = $(".control-panel").outerHeight(), d = $(".resize-carousel-holder").outerHeight(), e = $(".full-screen-gallery .full-screen-item");
        b.css({
            height: d - c
        });
        e.css({
            height: d
        });
        gf.owlCarousel({
            margin: 0,
            items: 1,
            smartSpeed: 1300,
            loop: false,
            nav: false
        });
    }
    if (gf.length) {
        initGalleryFullscreen();
        w2.on("resize.destroyhorizontal", function() {
            setTimeout(initGalleryFullscreen, 150);
        });
    }
    gf.on("mousewheel", ".owl-stage", function(a) {
        if (a.deltaY < 0) gf.trigger("next.owl"); else gf.trigger("prev.owl");
        a.preventDefault();
    });
    $(".single-popup-image").lightGallery({
        selector: "this",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        counter: false
    });
    var $lg = $(".lightgallery"), dlt = $lg.data("looped");
    $lg.lightGallery({
        selector: ".lightgallery a.popup-image",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        loop: dlt
    });
    $(".lightgallery").on("onBeforeNextSlide.lg", function(a) {
        gR.trigger("next.owl.carousel");
        gf.trigger("next.owl.carousel");
        ss.trigger("next.owl.carousel");
    });
    $(".lightgallery").on("onBeforePrevSlide.lg", function(a) {
        gR.trigger("prev.owl.carousel");
        gf.trigger("prev.owl.carousel");
        ss.trigger("prev.owl.carousel");
    });
    var slsl = $(".slideshow-item");
    slsl.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: true,
        autoplayTimeout: 4100,
        autoplayHoverPause: false,
        autoplaySpeed: 3600
    });
    var tsh = $(".testimon-slider");
    tsh.owlCarousel({
        margin: 0,
        items: 1,
        smartSpeed: 1300,
        loop: true,
        nav: false,
        autoHeight: true,
        dots: false
    });
    $(".testimon-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".testimon-slider-holder").find(tsh).trigger("next.owl.carousel");
    });
    $(".testimon-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".testimon-slider-holder").find(tsh).trigger("prev.owl.carousel");
    });
    var ts = $(".show-thumbs").data("textshow");
    var th = $(".show-thumbs").data("texthide");
    $(".show-thumbs").text(ts);
    function showThumbs() {
        $(".show-thumbs").removeClass("vis-t");
        $(".owl-thumbs").addClass("vis-thumbs");
        $(".show-thumbs").text(th);
        setTimeout(function() {
            $(".owl-thumb-item").addClass("himask");
        }, 650);
    }
    function hideThumbs() {
        $(".show-thumbs").text(ts);
        $(".show-thumbs").addClass("vis-t");
        $(".owl-thumbs").removeClass("vis-thumbs");
        $(".owl-thumb-item").removeClass("himask");
    }
    $(".show-thumbs").on("click", function() {
        if ($(this).hasClass("vis-t")) showThumbs(); else hideThumbs();
		return false;
    });
    $(document).on("click", ".owl-thumb-item", function() {
        hideThumbs();
		return false;
    });
	// css functionts------------------
    function a() {
        $(".hero-wrap-image-slider .item").css({
            height: $(".hero-wrap-image-slider").outerHeight(true)
        });
        $(".hero-wrap-text-slider .item").css({
            height: $(".hero-wrap-text-slider").outerHeight(true)
        });
        $(".slideshow-item .item").css({
            height: $(".slideshow-item ").outerHeight(true)
        });
        $(".height-emulator").css({
            height: $(".content-footer").outerHeight(true)
        });
        $(".team-social").css({
            "margin-top": -1 * $(".team-social").height() / 2 + "px"
        });
        var a = $(window).height(), b = $("header").outerHeight(), c = $(".p_horizontal_wrap");
        c.css("height", a - b - 30);
        var d = $(window).width();
        if (d < 768) c.css("height", a - b - 60);
        $(" #portfolio_horizontal_container .portfolio_item img  ").css({
            height: $(".portfolio_item").outerHeight(true)
        });
    }
    a();
    $(window).resize(function() {
        a();
    });
	// scroll animation ------------------
    var i = 1;
    $(document.body).on("appear", ".stats", function(a) {
        if (1 === i) k(2600);
        i++;
    });
    function number(a, b, c, d) {
        if (d) {
            var e = 0;
            var f = parseInt(d / a);
            var g = setInterval(function() {
                if (e - 1 < a) c.html(e); else {
                    c.html(b);
                    clearInterval(g);
                }
                e++;
            }, f);
        } else c.html(b);
    }
    function k(a) {
        $(".stats .num").each(function() {
            var b = $(this);
            var c = b.attr("data-num");
            var d = b.attr("data-content");
            number(c, d, b, a);
        });
    }
    $(".animaper").appear();
    $(document.body).on("appear", ".piechart-holder", function() {
        $(this).find(".chart").each(function() {
            var a = $(".piechart-holder").data("skcolor");
            $(".chart").easyPieChart({
                barColor: a,
                trackColor: "transparent",
                scaleColor: "transparent",
                size: "150",
                lineWidth: "30",
                lineCap: "butt",
                onStep: function(a, b, c) {
                    $(this.el).find(".percent").text(Math.round(c));
                }
            });
        });
    });
    $(document.body).on("appear", ".skillbar-box", function() {
        $(this).find("div.skillbar-bg").each(function() {
            $(this).find(".custom-skillbar").delay(600).animate({
                width: $(this).attr("data-percent")
            }, 1500);
        });
    });
	// Background video ------------------
    var l = $(".background-youtube").data("vid");
    var m = $(".background-youtube").data("mv");
    $(".background-youtube").YTPlayer({
        fitToBackground: true,
        videoId: l,
        pauseOnScroll: true,
        mute: m,
        callback: function() {
            var a = $(".background-video").data("ytPlayer").player;
        }
    });
    var vid = $(".background-vimeo").data("vim");
    $(".background-vimeo").append('<iframe src="//player.vimeo.com/video/' + vid + '?background=1"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>');
    $(".video-holder").height($(".media-container").height());
    if ($(window).width() > 1024) {
        if ($(".video-holder").size() > 0) if ($(".media-container").height() / 9 * 16 > $(".media-container").width()) {
            $(".background-vimeo iframe ").height($(".media-container").height()).width($(".media-container").height() / 9 * 16);
            $(".background-vimeo iframe ").css({
                "margin-left": -1 * $("iframe").width() / 2 + "px",
                top: "-75px",
                "margin-top": "0px"
            });
        } else {

            $(".background-vimeo iframe ").width($(window).width()).height($(window).width() / 16 * 9);
            $(".background-vimeo iframe ").css({
                "margin-left": -1 * $("iframe").width() / 2 + "px",
                "margin-top": -1 * $("iframe").height() / 2 + "px",
                top: "50%"
            });
        }
    } else if ($(window).width() < 760) {
        $(".video-holder").height($(".media-container").height());
        $(".background-vimeo iframe ").height($(".media-container").height());
    } else {
        $(".video-holder").height($(".media-container").height());
        $(".background-vimeo iframe ").height($(".media-container").height());
    }
	// Isotope ------------------
    function n() {
        if ($(".gallery-items").length) {
            var a = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three",
                transformsEnabled: true,
                transitionDuration: "700ms",
                resizable: true
            });
            a.imagesLoaded(function() {
                a.isotope("layout");
            });
            $(".gallery-filters").on("click", "a.gallery-filter", function(b) {
                b.preventDefault();
                var c = $(this).attr("data-filter");
                a.isotope({
                    filter: c
                });
                $(".gallery-filters a.gallery-filter").removeClass("gallery-filter-active");
                $(this).addClass("gallery-filter-active");
                return false;
            });
            a.isotope("on", "layoutComplete", function(a, b) {
                var b = a.length;
                $(".num-album").html(b);
            });
        }
        var b = {
            touchbehavior: true,
            cursoropacitymax: 1,
            cursorborderradius: "0",
            background: "transparent",
            cursorwidth: "4px",
            cursorborder: "0px",
            cursorcolor: "transparent",
            autohidemode: true,
            bouncescroll: false,
            scrollspeed: 120,
            mousescrollstep: 90,
            grabcursorenabled: true,
            horizrailenabled: false,
            preservenativescrolling: true,
            cursordragontouch: true
        };
        $(".hid-sidebar").niceScroll(b);
        var c = {
            touchbehavior: true,
            cursoropacitymax: 1,
            cursorborderradius: "0",
            background: "transparent",
            cursorwidth: "10px",
            cursorborder: "0px",
            cursorcolor: "#191919",
            autohidemode: false,
            bouncescroll: false,
            scrollspeed: 120,
            mousescrollstep: 90,
            grabcursorenabled: true,
            horizrailenabled: true,
            preservenativescrolling: true,
            cursordragontouch: false,
            railpadding: {
                top: -10,
                right: 0,
                left: 0,
                bottom: 0
            }
        };
        $(".p_horizontal_wrap").niceScroll(c);
        var d = $("#portfolio_horizontal_container");
        d.imagesLoaded(function(a, b, e) {
            var f = {
                itemSelector: ".portfolio_item",
                layoutMode: "packery",
                packery: {
                    isHorizontal: true,
                    gutter: 0
                },
                resizable: true,
                transformsEnabled: true,
                transitionDuration: "700ms"
            };
            var g = {
                itemSelector: ".portfolio_item",
                layoutMode: "packery",
                packery: {
                    isHorizontal: false,
                    gutter: 0
                },
                resizable: true,
                transformsEnabled: true,
                transitionDuration: "700ms"
            };
            if ($(window).width() < 768) {
                d.isotope(g);
                d.isotope("layout");
                if ($(".p_horizontal_wrap").getNiceScroll()) $(".p_horizontal_wrap").getNiceScroll().remove();
            } else {
                d.isotope(f);
                d.isotope("layout");
                $(".p_horizontal_wrap").niceScroll(c);
            }
            $(".gallery-filters").on("click", "a", function(a) {
                a.preventDefault();
                var b = $(this).attr("data-filter");
                d.isotope({
                    filter: b
                });
                $(".gallery-filters a").removeClass("gallery-filter_active");
                $(this).addClass("gallery-filter_active");
            });
            d.isotope("on", "layoutComplete", function(a, b) {
                var b = a.length;
                $(".num-album").html(b);
            });
        });
    }
    $(".grid-item a").on("click", function() {
        var a = $(this).attr("href");
        window.location.href = a;
        return false;
    });
    var j = $(".portfolio_item , .gallery-item").length;
    $(".all-album , .num-album").html(j);
    n();
    $(window).load(function() {
        n();
    });
	$(".filter-button").addClass("act-filter");
    $(".filter-button").on("click", function() {
		if ($(this).hasClass("act-filter")){
			showfilter();
		}
		else {
			hidefilter();
		}
		return false;
    });
    function showfilter() {
		$(".filter-button").removeClass("act-filter");
        $(".hid-filter").slideDown(500);
        $(".resize-carousel-holder").addClass("visfilb");
    }
    function hidefilter() {
		$(".filter-button").addClass("act-filter");
        $(".hid-filter").slideUp(500);
        $(".resize-carousel-holder").removeClass("visfilb");
    }
	// Team hover  ------------------
    $(".team-box").hover(function() {
        $(this).find("ul.team-social").fadeIn();
        $(this).find(".team-social a").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                b.animate({
                    opacity: 1,
                    top: "0"
                }, 400);
            }, 150 * a);
        });
    }, function() {
        $(this).find(".team-social a").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                b.animate({
                    opacity: 0,
                    top: "50px"
                }, 400);
            }, 150 * a);
        });
        setTimeout(function() {
            $(this).find("ul.team-social").fadeOut();
        }, 150);
    });
	// Scroll window ------------------
    $(".to-top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
		return false;
    });
    $(document).on("click", ".serv-item", function(a) {
        var b = $(this);
        a.preventDefault();
        $(".serv-item").removeClass("act-ser");
        b.addClass("act-ser");
        $("html, body").animate({
            scrollTop: $(".serv-post").offset().top - 120
        }, {
            queue: false,
            duration: 1200,
            easing: "easeInOutExpo"
        });
        $(".serv-details").stop(true, true).css("display", "none");
        $(b.attr("href")).stop(true, true).fadeIn(500);
    });
    $(".to-top").hover(function() {
        $(this).shuffleLetters({});
        $(".footer-wrap").addClass("tth");
    }, function() {
        $(".footer-wrap").removeClass("tth");
    });
    $(".scroll-nav  ul").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 70,
        threshold: 120,
        speed: 1200,
        currentClass: "act-link",
        onComplete: function() {
            if ($(".scroll-nav  a").hasClass("act-link")) $(".scroll-nav  a.act-link").each(function() {
                var a = $(this).data("bgtex");
                $(".footer-title h2").html(a).shuffleLetters({});
            });
        }
    });
    $(".custom-scroll-link").on("click", function() {
        var a = 80;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1600,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 50) $(".particular").fadeIn(1); else $(".particular").fadeOut(1);
    });
    $(".particular").constellation({
        star: {
            width: 1
        },
        line: {
            color: "rgba(255, 255, 255, .5)"
        },
        radius: 350
    });
	// Other functions  ------------------
    $.fn.duplicate = function(a, b) {
        var c = [];
        for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
        return this.pushStack(c);
    };
    $("<div class='scale-callback'></div>").duplicate(12).appendTo(".sb-bg");
    $(".show-hid-sidebar").on("click", function(a) {
        a.preventDefault();
        $(".hid-sidebar").addClass("vissb");
        setTimeout(function() {
            $(".scale-callback").addClass("scale-bg5");
        }, 450);
        setTimeout(function() {
            $(".sb-inner").addClass("sb-innervis");
        }, 800);
        $(".sb-overlay").addClass("vis-overlay");
		return false;
    });
    $(".close-sidebar , .sb-overlay").on("click", function() {
        $(".hid-sidebar").removeClass("vissb");
        $(".sb-inner").removeClass("sb-innervis");
        $(".scale-callback").removeClass("scale-bg5");
        $(".sb-overlay").removeClass("vis-overlay");
		return false;
    });
    var bgImage = $(".bg");
    bgImage.each(function(a) {
        if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
    });
	// Contact form  ------------------
    $("#contactform").submit(function() {
        var a = $(this).attr("action");
        $("#message").slideUp(750, function() {
            $("#message").hide();
            $("#submit").attr("disabled", "disabled");
            $.post(a, {
                name: $("#name").val(),
                email: $("#email").val(),
                comments: $("#comments").val()
            }, function(a) {
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit").removeAttr("disabled");
                if (null != a.match("success")) $("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactform input, #contactform textarea").keyup(function() {
        $("#message").slideUp(1500);
    });
    if ($(".content").hasClass("hor-content")) {
        $("header").addClass("fw-head");
        $(".share-inner").addClass("hor-inner");
    }
	// Share   ------------------
    var shs = eval($(".share-container").attr("data-share"));
    $(".share-container").share({
        networks: shs
    });
    function hideShare() {
        $(".share-inner").removeClass("visshare");
        $(".show-share").addClass("isShare");
        $(".share-container ").removeClass("vissc");
        $("header").removeClass("vis-header-b");
    }
    function showShare() {
        $(".share-inner").addClass("visshare");
        $(".show-share").removeClass("isShare");
        setTimeout(function() {
            $("header").addClass("vis-header-b");
            $(".share-container ").addClass("vissc");
        }, 400);
    }
    $(".show-share").on("click", function(a) {
        a.preventDefault();
        if ($(".show-share").hasClass("isShare")) showShare(); else hideShare();
    });
	// Mobile bavigation   ------------------
	var nb = $(".nav-button"), nh = $(".nav-holder");
	function showMenu() {
		nb.removeClass("vis-m");
		nh.slideDown(500);
	}
	function hideMenu() {
		nb.addClass("vis-m");
		nh.slideUp(500);
	}
	nb.on("click", function() {
		if ($(this).hasClass("vis-m")) showMenu(); else hideMenu();
	});
var mobileHover = function () {
    $('.grid-item-holder , nav li').on('touchstart', function () {
        $(this).trigger('hover');
    }).on('touchend', function () {
        $(this).trigger('hover');
    });
};

mobileHover();
}
function contanimshow() {
	var a = window.location.href;
	var b = $(".dynamic-title").text();
	$(".footer-title a").attr("href", a);
	$(".footer-title a").html(b);
	$(".footer-title a").shuffleLetters({});
}
// remove parallax and video on mobile   ------------------
function initparallax() {
    var a = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
        }
    };
    trueMobile = a.any();
    if (null == trueMobile) {
        var b = $("#main");
        b.find("[data-top-bottom]").length > 0 && b.waitForImages(function() {
            s = skrollr.init();
            s.destroy();
            $(window).resize(function() {
                var a = $(window).width();
                if (a < 1036) s.destroy(); else skrollr.init({
                    forceHeight: !1,
                    easing: "easeInOutElastic",
                    mobileCheck: function() {
                        return !1;
                    }
                });
            });
            skrollr.init({
                forceHeight: !1,
                easing: "easeInOutElastic",
                mobileCheck: function() {
                    return !1;
                }
            });
        });
        var c = $(window).width();
        if (c < 1036) {
            s = skrollr.init();
            s.destroy();
        }
    }
    if (trueMobile) $(".background-youtube , .background-vimeo").remove();
}

$(document).ready(function() {
    initMonolit();
    initparallax();
});