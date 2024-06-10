$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("header").addClass("darkHeader");
        $(".logo").addClass("logo-show");
    } else {
        $("header").removeClass("darkHeader");
        $(".logo").removeClass("logo-show");
    }
});
$(document).ready(function () {
    $('.scrolllink').not('[href="#"]').not('[href="#0"]').click(function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });
    $('.hamburger').click(function () {
        $(".menu").toggleClass("open-menu");
    });
    $('.down-arrow a').click(function () {
        $(".language-dropdown").toggle();
    });
    $('.icon-menu').click(function () {
        $(".icon-menu").toggleClass("change");
    });

    $('#slider_home').owlCarousel({
        loop: false,
        nav: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 5000,
        autoplaySpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $(".open-search").click(function () {
        $(".search-overlay").addClass("search-overlay-active");
    });
    $(".close-search").click(function () {
        $(".search-overlay").removeClass("search-overlay-active");
    });
    $('.toggle').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        $('.toggle').not(this).removeClass('active')
        $(this).toggleClass('active')
        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('.acc_card .inner').removeClass('show');
            $this.parent().parent().find('.acc_card .inner').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });
    $('.toggle-main').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        $('.toggle-main').not(this).removeClass('active')
        $(this).toggleClass('active')
        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('.acc_card .inner').removeClass('show');
            $this.parent().parent().find('.acc_card .inner').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });
    $('.video-popup').each(function () {
        var src = $(this).find('iframe').attr('src');
        $(this).on('click', function () {
            $(this).find('iframe').attr('src', '');
            $(this).find('iframe').attr('src', src);
        });
    });
    $(".open-popup").click(function () {
        var link = "https://www.youtube.com/embed/";
        var dataid = $(this).attr('data-value');
        var mainurl = link + dataid;
        $(".video-popup").addClass("popup-active");
        $('.video-popup iframe').attr('src', mainurl);
    });
    $('.video-popup').each(function () {
        var srchindi = $(this).find('source').attr('src');
        $(this).on('click', function () {
            $(this).find('source').attr('src', '');
            $(this).find('source').attr('src', srchindi);
        });
    });
    $(".open-popup-hindi").click(function () {
        var linkhindi = "media/";
        var dataidhindi = $(this).attr('data-value');
        var mainurlhindi = linkhindi + dataidhindi;
        $(".video-popup").addClass("popup-active");
        var vidHtml = '<video id="videoElement" controls="" playsinline=""><source src = "' + mainurlhindi + '" type = "video/mp4" ></video>';
        $(".video-div-section").html(vidHtml);
    });
    $(".close-popup").click(function () {
        $(".video-popup").removeClass("popup-active");
    });
    $(".footer-icon a").each(function (a, n) {
        window.location.pathname.indexOf($(n).attr("href")) > 0 && $(n).addClass("active")
    })
    if (window.innerWidth < 767) {
        
        // english show
        $('.english-language #rao-tvs-btn').click(function () {
            $('.rao-tvs').toggle("show");
            if ($('#rao-tvs-btn').text() == "Show more") {
                $(this).text("Show less")
            } else {
                $(this).text("Show more")
            }
        });
        $('.english-language #safely-use-upi-btn').click(function () {
            $('.safely-use-upi').toggle("show");
            if ($('#safely-use-upi-btn').text() == "Show more") {
                $(this).text("Show less")
            } else {
                $(this).text("Show more")
            }
        });

        // bengali show
        $('.bengali-language #rao-tvs-btn').click(function () {
            $('.rao-tvs').toggle("show");
            if ($('#rao-tvs-btn').text() == "আরো দেখান") {
                $(this).text("কম দেখান")
            } else {
                $(this).text("আরো দেখান")
            }
        });
        $('.bengali-language #safely-use-upi-btn').click(function () {
            $('.safely-use-upi').toggle("show");
            if ($('#safely-use-upi-btn').text() == "আরো দেখান") {
                $(this).text("কম দেখান")
            } else {
                $(this).text("আরো দেখান")
            }
        });

        // hindi show
        $('.hindi-language #rao-tvs-btn').click(function () {
            $('.rao-tvs').toggle("show");
            if ($('#rao-tvs-btn').text() == "और दिखाइए") {
                $(this).text("कम दिखाओ")
            } else {
                $(this).text("और दिखाइए")
            }
        });
        $('.hindi-language #safely-use-upi-btn').click(function () {
            $('.safely-use-upi').toggle("show");
            if ($('#safely-use-upi-btn').text() == "और दिखाइए") {
                $(this).text("कम दिखाओ")
            } else {
                $(this).text("और दिखाइए")
            }
        });

        // kannad show
        $('.kannad-language #rao-tvs-btn').click(function () {
            $('.rao-tvs').toggle("show");
            if ($('#rao-tvs-btn').text() == "ಹೆಚ್ಚು ತೋರಿಸಿ") {
                $(this).text("ಕಡಿಮೆ ತೋರಿಸಿ")
            } else {
                $(this).text("ಹೆಚ್ಚು ತೋರಿಸಿ")
            }
        });
        $('.kannad-language #safely-use-upi-btn').click(function () {
            $('.safely-use-upi').toggle("show");
            if ($('#safely-use-upi-btn').text() == "ಹೆಚ್ಚು ತೋರಿಸಿ") {
                $(this).text("ಕಡಿಮೆ ತೋರಿಸಿ")
            } else {
                $(this).text("ಹೆಚ್ಚು ತೋರಿಸಿ")
            }
        });

        // marathi show
        $('.marathi-language #rao-tvs-btn').click(function () {
            $('.rao-tvs').toggle("show");
            if ($('#rao-tvs-btn').text() == "अजून दाखवा") {
                $(this).text("कमी दाखवा")
            } else {
                $(this).text("अजून दाखवा")
            }
        });
        $('.marathi-language #safely-use-upi-btn').click(function () {
            $('.safely-use-upi').toggle("show");
            if ($('#safely-use-upi-btn').text() == "अजून दाखवा") {
                $(this).text("कमी दाखवा")
            } else {
                $(this).text("अजून दाखवा")
            }
        });

        // tamil show
        $('.tamil-language #rao-tvs-btn').click(function () {
            $('.rao-tvs').toggle("show");
            if ($('#rao-tvs-btn').text() == "அதிகம் காட்டவும்") {
                $(this).text("குறைவாகக் காட்டவும்")
            } else {
                $(this).text("அதிகம் காட்டவும்")
            }
        });
        $('.tamil-language #safely-use-upi-btn').click(function () {
            $('.safely-use-upi').toggle("show");
            if ($('#safely-use-upi-btn').text() == "அதிகம் காட்டவும்") {
                $(this).text("குறைவாகக் காட்டவும்")
            } else {
                $(this).text("அதிகம் காட்டவும்")
            }
        });

        // telugu show
        $('.telugu-language #rao-tvs-btn').click(function () {
            $('.rao-tvs').toggle("show");
            if ($('#rao-tvs-btn').text() == "ఎక్కువ వాటిని చూపండి") {
                $(this).text("తక్కువ వాటిని చూపండి")
            } else {
                $(this).text("ఎక్కువ వాటిని చూపండి")
            }
        });
        $('.telugu-language #safely-use-upi-btn').click(function () {
            $('.safely-use-upi').toggle("show");
            if ($('#safely-use-upi-btn').text() == "ఎక్కువ వాటిని చూపండి") {
                $(this).text("తక్కువ వాటిని చూపండి")
            } else {
                $(this).text("ఎక్కువ వాటిని చూపండి")
            }
        });

    }
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        $("#axis-bank").attr('href', 'https://play.google.com/store/apps/details?id=com.axis.mobile&hl=en');
        $("#google-pay").attr('href', 'https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user&hl=en');
        $("#hdfc-bank").attr('href', 'https://play.google.com/store/apps/details?id=com.snapwork.hdfc&hl=en');
        $("#icici-bank").attr('href', 'https://play.google.com/store/apps/details?id=com.csam.icici.bank.imobile');
        $("#paytm-bank").attr('href', 'https://play.google.com/store/apps/details?id=net.one97.paytm&hl=en_IN');
        $("#phonepe").attr('href', 'https://play.google.com/store/apps/details?id=com.phonepe.app&hl=en');
        $("#sbi").attr('href', 'https://upz5v.app.goo.gl/UPIChalega');
        $("#bharat-pay").attr('href', 'https://play.google.com/store/apps/details?id=com.bharatpe.app');
        $("#airtel-payments-bank").attr('href', 'https://play.google.com/store/apps/details?id=com.myairtelapp&hl=en_IN');
        $("#amazon-pay").attr('href', 'https://play.google.com/store/apps/details?id=in.amazon.mShop.android.shopping&hl=en');
        $("#andhra-bank").attr('href', 'https://play.google.com/store/apps/details?id=com.olive.andhra.upi&hl=en_IN');
        $("#bob").attr('href', 'https://play.google.com/store/apps/details?id=com.bankofbaroda.upi');
        $("#canara-bank").attr('href', 'https://play.google.com/store/apps/details?id=com.canarabank.mobility');
        $("#central-bank").attr('href', 'https://play.google.com/store/apps/details?id=com.infrasofttech.centralbankupi');
        $("#kotak-mahindra").attr('href', 'https://play.google.com/store/apps/details?id=com.msf.kbank.mobile&hl=en');
        $("#pnb-bank").attr('href', 'https://play.google.com/store/apps/details?id=com.fss.pnbpsp&hl=en_IN');
        $("#uco-bank").attr('href', 'https://play.google.com/store/apps/details?id=com.lcode.ucoupi');
        $("#union-bank").attr('href', 'https://play.google.com/store/apps/details?id=com.infrasoft.uboi&hl=en');
        $("#federal-bank").attr('href', 'https://play.google.com/store/apps/details?id=com.fedmobile&hl=en');
        $("#hsbc-bank").attr('href', '#');
        $("#induslnd-bank").attr('href', 'https://play.google.com/store/apps/details?id=com.mgs.induspsp');
        $("#rbl-bank").attr('href', '#');
        $("#saraswat-bank").attr('href', 'https://play.google.com/store/apps/details?id=com.saraswat.mobilebankingv2&hl=en');
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        $("#axis-bank").attr('href', 'https://itunes.apple.com/us/app/axis-bank-mobile-banking/id699582556?ign-mpt=uo');
        $("#google-pay").attr('href', 'https://itunes.apple.com/us/app/google-pay-for-india-tez/id1193357041?ign-mpt=uo');
        $("#hdfc-bank").attr('href', 'https://itunes.apple.com/us/app/hdfc-bank-mobilebanking/id515891771?ign-mpt=uo');
        $("#icici-bank").attr('href', 'https://itunes.apple.com/us/app/imobile-by-icici-bank/id375276006?ign-mpt=uo');
        $("#paytm-bank").attr('href', 'https://itunes.apple.com/us/app/paytm-payments-bank-account/id473941634?ign-mpt=uo');
        $("#phonepe").attr('href', 'https://itunes.apple.com/us/app/phonepe-indias-payments-app/id1170055821?ign-mpt=uo');
        $("#sbi").attr('href', 'https://upz5v.app.goo.gl/UPIChalega');
        $("#bharat-pay").attr('href', 'https://itunes.apple.com/us/app/bharatpe/id1329385873?ign-mpt=uo');
        $("#airtel-payments-bank").attr('href', 'https://itunes.apple.com/us/app/airtel-thanks-recharge-bank/id543184334?ign-mpt=uo');
        $("#amazon-pay").attr('href', 'https://itunes.apple.com/us/app/amazon-shopping-made-easy/id297606951?ign-mpt=uo');
        $("#andhra-bank").attr('href', 'https://itunes.apple.com/us/app/andhra-bank-one-upi-app/id1262294784?ign-mpt=uo');
        $("#bob").attr('href', 'https://itunes.apple.com/us/app/bhim-baroda-pay/id1359652055?ign-mpt=uo');
        $("#canara-bank").attr('href', 'https://itunes.apple.com/us/app/canara-bank-mobile-banking/id1408607550?ign-mpt=uo');
        $("#central-bank").attr('href', 'https://itunes.apple.com/us/app/bhim-cent-upi/id1282995874?ign-mpt=uo');
        $("#kotak-mahindra").attr('href', 'https://itunes.apple.com/us/app/kotak-811-mobile-banking/id622363400?ign-mpt=uo');
        $("#pnb-bank").attr('href', '#');
        $("#uco-bank").attr('href', 'https://itunes.apple.com/us/app/bhim-uco-upi/id1452986347?ign-mpt=uo');
        $("#union-bank").attr('href', 'https://itunes.apple.com/us/app/u-mobile/id1446060299?ign-mpt=uo');
        $("#federal-bank").attr('href', 'https://itunes.apple.com/us/app/fedmobile/id1027354100?ign-mpt=uo');
        $("#hsbc-bank").attr('href', '#');
        $("#induslnd-bank").attr('href', '#');
        $("#rbl-bank").attr('href', '#');
        $("#saraswat-bank").attr('href', 'https://itunes.apple.com/us/app/saraswat-bank-mobile-banking/id1188236676?ign-mpt=uo');
    }
});