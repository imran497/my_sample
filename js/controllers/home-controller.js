angular.module("flight")
.controller("home-controller", ["$scope", function($scope){
  var initiateDimensions = function(){
    // VIEWPORT HEIGHT FOR SAFARI ALTERNATIVE
    var dimensions = new Object();
    dimensions.width = jQuery(window).width();
    dimensions.height = jQuery(window).height();

    // ASSIGNING VIEWPORT HEIGHT TO SLIDER DIV
    jQuery("#slider-images, #text-content-div").css("height", dimensions.height+"px");
    jQuery("#slider-images, #text-content-div").css("width", dimensions.width+"px");
  }

  initiateDimensions();
  jQuery(window).resize(initiateDimensions);


  // SLICK TO INITIATE THE SLIDER
  jQuery("#slider-images").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 2000
  });

  jQuery("#slider-text").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 2000
  });
}]);
