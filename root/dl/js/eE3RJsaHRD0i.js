try{
jQuery(document).ready(function(){var backToTop=jQuery('#mobile-back-to-top');jQuery(window).on('scroll',function(){var scrollTop=jQuery(window).scrollTop();if(scrollTop>300){backToTop.addClass('in')}else{backToTop.removeClass('in')}});backToTop.on('click',function(event){event.preventDefault();jQuery('html, body').animate({scrollTop:0},500)})})
}catch(e){console.error("An error has occurred. [ File: https://www.scaramoucherestaurant.com/wp-content/plugins/fusion-extension-menu-mobile-footer/includes/js/fusion-extension-menu-mobile-footer.js?ver=1.0.0 ] [ "+e.stack+" ]");}