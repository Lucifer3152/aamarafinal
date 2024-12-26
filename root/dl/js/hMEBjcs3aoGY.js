try{
jQuery(document).ready(function(){jQuery('.instagram-gallery-layout img').on('error',function(){parentSlide=jQuery(this).closest('.slide');parentGallery=parentSlide.closest('.flexslider').data('flexslider');if(parentGallery!=undefined){parentGallery.removeSlide(parentSlide)}else{parentSlide.remove()}});jQuery('.instagram-gallery-mobile-layout img').on('error',function(){mobileParentSlide=jQuery(this).closest('.slide');mobileParentGallery=mobileParentSlide.closest('.instagram-gallery-mobile-layout').data('flexslider');if(parentGallery!=undefined){mobileParentGallery.removeSlide(mobileParentSlide)}else{mobileParentSlide.remove()}})});function fsnInstagramGalleryInit(gallery,desktopCardData,mobileCardData){var carousels=gallery.find('.instagram-gallery-layout.flexslider');carousels.each(function(){var carousel=jQuery(this);var carouselID=carousel.attr('data-gallery-id');var itemsPerPage=parseInt(carousel.attr('data-pager'));var carouselControlNav=!1;var carouselDirectionNav=!0;if(carousel.parents('.tab-pane').not(':visible').length>0){var slideWidth=carousel.closest('.tab-content').width()/itemsPerPage}else{var slideWidth=carousel.closest('.instagram-content').width()/itemsPerPage}
carousel.flexslider({animation:'slide',animationLoop:!0,multipleKeyboard:!0,itemWidth:slideWidth,itemMargin:0,minItems:2,maxItems:itemsPerPage,move:2,slideshow:!1,controlsContainer:'.controls-'+carouselID,directionNav:carouselDirectionNav,controlNav:carouselControlNav,start:function(slider){slider.resize();slider.find('.instagram-image').height(slider.itemW)},removed:function(slider){if(slider.count==0){jQuery(slider.container).closest('.fsn-instagram-gallery').remove()}}})});var mobileCarousels=gallery.find('.instagram-gallery-mobile-layout.flexslider');mobileCarousels.each(function(){var mobileCarousel=jQuery(this);var carouselControls=mobileCarousel.attr('data-controls');var carouselControlNav=!1;var carouselDirectionNav=!0;var slideWidth=Math.floor((mobileCarousel.closest('.row').width()*0.8290598291)/3);mobileCarousel.flexslider({animation:'slide',animationLoop:!1,multipleKeyboard:!0,itemWidth:slideWidth,itemMargin:0,maxItems:3,move:1,slideshow:!1,directionNav:carouselDirectionNav,controlNav:carouselControlNav,start:function(slider){slider.resize();slider.find('.instagram-image').height(slider.itemW)}})});var desktopGrids=gallery.find('.instagram-gallery-layout.grid');desktopGrids.each(function(){var grid=jQuery(this);var itemWidth=grid.find('li.slide').first().width();var images=grid.find('.instagram-image');images.height(itemWidth)});var mobileGrids=gallery.find('.instagram-gallery-mobile-layout.grid');mobileGrids.each(function(){var grid=jQuery(this);var itemWidth=grid.find('li.slide').first().width();var images=grid.find('.instagram-image');images.height(itemWidth)});var desktopCards=gallery.find('.instagram-gallery-layout.card');desktopCards.each(function(){var card=jQuery(this);var imagesLength=desktopCardData.images.length;if(imagesLength>=6){var card_template=wp.template('fsn-instagram-card-desktop-6')}else if(imagesLength>=3){var card_template=wp.template('fsn-instagram-card-desktop-3')}else if(imagesLength>=2){var card_template=wp.template('fsn-instagram-card-desktop-2')}else{return!1}
var template_html=card_template(desktopCardData);template_html=template_html.replace('/*<![CDATA[*/','');template_html=template_html.replace('/*]]>*/','');card.append(template_html);var items=card.find('.instagram-item');items.each(function(){var item=jQuery(this);var itemWidth=item.width();var image=item.find('.instagram-image');image.height(itemWidth)})});var mobileCards=gallery.find('.instagram-gallery-mobile-layout.card');mobileCards.each(function(){var card=jQuery(this);var imagesLength=mobileCardData.images.length;if(imagesLength>=2){var card_template=wp.template('fsn-instagram-card-mobile')}else{return!1}
var template_html=card_template(mobileCardData);template_html=template_html.replace('/*<![CDATA[*/','');template_html=template_html.replace('/*]]>*/','');card.append(template_html);var items=card.find('.instagram-item');items.each(function(){var item=jQuery(this);var itemWidth=item.width();var image=item.find('.instagram-image');image.height(itemWidth)})});jQuery(window).resize(function(){var desktopGalleries=gallery.find('.instagram-gallery-layout');var mobileGalleries=gallery.find('.instagram-gallery-mobile-layout');var windowWidth=jQuery(window).width();if(windowWidth>=768){desktopGalleries.each(function(){var desktopGallery=jQuery(this);if(desktopGallery.hasClass('card')){var items=desktopGallery.find('.instagram-item');items.each(function(){var item=jQuery(this);var itemWidth=item.width();var image=item.find('.instagram-image');image.height(itemWidth)})}else{if(desktopGallery.data('flexslider')!==undefined){var itemsPerPage=parseInt(desktopGallery.attr('data-pager'));if(desktopGallery.parents('.tab-pane').not(':visible').length>0){var itemWidth=desktopGallery.closest('.tab-content').width()/itemsPerPage}else{var itemWidth=desktopGallery.closest('.instagram-content').width()/itemsPerPage}
var slides=desktopGallery.find('.slide');var images=desktopGallery.find('.instagram-image');slides.width(itemWidth)
images.height(itemWidth)}else{var itemWidth=desktopGallery.find('li.slide').first().width();var images=desktopGallery.find('.instagram-image');images.height(itemWidth)}}})}else{mobileGalleries.each(function(){var mobileGallery=jQuery(this);if(mobileGallery.hasClass('card')){var items=mobileGallery.find('.instagram-item');items.each(function(){var item=jQuery(this);var itemWidth=item.width();var image=item.find('.instagram-image');image.height(itemWidth)})}else{var itemWidth=mobileGallery.find('li.slide').first().width();var images=mobileGallery.find('.instagram-image');images.height(itemWidth)}})}})}
function fsnInstagramGalleryLoad(gallery,instagramGallerySlides,instagramCardComponentContent,contentType,instagramUsername){var desktopLayout=gallery.find('.instagram-gallery-layout');var mobileLayout=gallery.find('.instagram-gallery-mobile-layout');if(desktopLayout.hasClass('card')||mobileLayout.hasClass('card')){if(desktopLayout.hasClass('card')){var desktopCardData={images:[]};if(instagramCardComponentContent){desktopCardData.component_content=instagramCardComponentContent}}
if(mobileLayout.hasClass('card')){var mobileCardData={images:[]};if(instagramCardComponentContent){mobileCardData.component_content=instagramCardComponentContent}}}
if(contentType=='userfeed'&&instagramUsername!==''){var data={action:'fsn_instagram_userfeed_get_data',username:instagramUsername,security:fsnInstagramExtAjax.fsnInstagramUserfeedNonce};var instagramUserfeedGetData=jQuery.post(fsnInstagramExtAjax.ajaxurl,data,function(response){if(response=='-1'){console.log(fsnInstagramExtAjax.fsnInteractiveInstagramUserfeedError);return!1}
if(response==''){return!1}
for(i=0;i<response.length;i++){instagramGallerySlides[i].url='https://www.instagram.com/p/'+response[i]+'/'}
fsnInstagramGalleryLoadItems(gallery,instagramGallerySlides,instagramCardComponentContent,desktopLayout,mobileLayout,desktopCardData,mobileCardData)},'json')}else{fsnInstagramGalleryLoadItems(gallery,instagramGallerySlides,instagramCardComponentContent,desktopLayout,mobileLayout,desktopCardData,mobileCardData)}}
function fsnInstagramGalleryLoadItems(gallery,instagramGallerySlides,instagramCardComponentContent,desktopLayout,mobileLayout,desktopCardData,mobileCardData){var loadedCount=0;var loadTimer;var instagramGallerySlidesLength=instagramGallerySlides.length;for(i=0;i<instagramGallerySlidesLength;i++){var data={action:'fsn_instagram_get_post',url:instagramGallerySlides[i].url,description:instagramGallerySlides[i].description,security:fsnInstagramExtAjax.fsnInstagramGetPostNonce};var instagramGetPostData=jQuery.post(fsnInstagramExtAjax.ajaxurl,data,function(response){if(response=='-1'){return!1}
var instagram_url='https://www.instagram.com/p/'+response.shortcode+'/';var thumbnail_url=response.image_url;var description=fsnExtInstagramL10n.view_image;if(response.accessibility_caption!==null){if(response.accessibility_caption!==''){description=response.accessibility_caption}}
loadedCount++;if(desktopLayout.hasClass('card')){var desktopCardImage={url:thumbnail_url,instagram_url:instagram_url,description:description,id:response.shortcode};desktopCardData.images.push(desktopCardImage)}else{jQuery(gallery).find('.instagram-gallery-layout .slides').append('<li class="slide"><div class="instagram-item" data-feed-index="'+response.shortcode+'"><a href="'+instagram_url+'" class="instagram-image" style="background-image:url('+thumbnail_url+');" target="_blank" rel="noopener"><span class="sr-only">'+description+'</span></a></div></li>')}
if(mobileLayout.hasClass('card')){var mobileCardImage={url:thumbnail_url,instagram_url:instagram_url,description:description,id:response.shortcode};mobileCardData.images.push(mobileCardImage)}else{jQuery(gallery).find('.instagram-gallery-mobile-layout .slides').append('<li class="slide"><div class="instagram-item" data-feed-index="'+response.shortcode+'"><a href="'+instagram_url+'" class="instagram-image" style="background-image:url('+thumbnail_url+');" target="_blank" rel="noopener"><span class="sr-only">'+description+'</span></a></div></li>')}
if(loadedCount>=instagramGallerySlidesLength){clearTimeout(loadTimer);fsnInstagramGalleryInit(gallery,desktopCardData,mobileCardData)}else{clearTimeout(loadTimer);loadTimer=setTimeout(function(){fsnInstagramGalleryInit(gallery,desktopCardData,mobileCardData)},3000)}},'json')}}
}catch(e){console.error("An error has occurred. [ File: https://www.scaramoucherestaurant.com/wp-content/plugins/fusion-extension-instagram/includes/js/fusion-extension-instagram.js?ver=0.1 ] [ "+e.stack+" ]");}