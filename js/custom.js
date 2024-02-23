function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

jQuery(document).ready(function(){
    jQuery(".search-close").click(function(){
      jQuery(".mob-search-box").hide();
    });
    jQuery(".mob-search").click(function(){
      jQuery(".mob-search-box").show();
    });


    jQuery('.header-searchBtn').click(function () { // on a click on botton
  jQuery('.searchresults').show(); // show the div with the search results
});


  jQuery(".btc-click").click(function(){
    jQuery(".btcSidebar").toggleClass("btc-open");
  });

   jQuery(".btc-closebtn").click(function(){
    jQuery(".btcSidebar").removeClass("btc-open");
  });


	jQuery('#popular_carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplayHoverPause:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed: 3000,
    slideTransition: 'linear',
    navContainer:false,
    navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1.5
        },
        1000:{
            items:2.5
        }
    }
});


jQuery('#homAuto_carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplayHoverPause:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed: 4000,
    slideTransition: 'linear',
    navContainer:false,
    // navText: ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1.5
        }
    }
});

jQuery('#homSuccess_carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplayHoverPause:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed: 6000,
    slideTransition: 'linear',
    responsive:{
        0:{
            items:1,
            nav:false
        },
        400:{
            items:1.1
        }
    }
})

  });