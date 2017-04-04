/*var map = new google.maps.Map(document.getElementById('map'), {
 zoom: 13,
 center: new google.maps.LatLng(49.5558900, 25.6055600),
 mapTypeId: google.maps.MapTypeId.ROADMAP
 });

 var xhr = new XMLHttpRequest();
 xhr.open("GET", "/api/objects/addresses");
 xhr.responseType = "json";
 xhr.send(null);
 xhr.onreadystatechange = function () {
 if (this.readyState !== 4) {
 return;
 }
 var data = this.response.data;
 var companies = [];
 var geocoder = new google.maps.Geocoder();
 for (var i = 0; i < data.length; i++) {
 mapCode = new google.maps.LatLng(data[i].geocode.latitude, data[i].geocode.longitude),
 companies[i] = [data[i].id, data[i].status, data[i].logoSrc, mapCode, data[i].name];
 }
 var images = [
 {url: '/images/in-progress-map-marker-small.png'},
 {url: '/images/done-building-map-marker-small.png'}
 ];
 var markers = [];
 var infoWindows = [];
 var infoModel = [];
 var urlFormat = decodeURIComponent('/Object/%40objectId');
 for (var i = 0; i < companies.length; i++) {
 marker = new google.maps.Marker({
 position: companies[i][3],
 icon: images[companies[i][1]],
 map: map,
 title: data[i][4]
 });
 var content = '<div class="marker-dis">' +
 '<a href = "' + urlFormat.replace("@objectId", companies[i][0]) +
 '" class="filtered-objects-list__link clearfix">' +
 '<div class="tite-for-mark"><h3>' +
 data[i][4] +
 '</h3></div>' +
 '<img src="' +
 companies[i][2] +
 '" class="img-for-mark" style="width: 300px; height: 300px;"> ' +
 '</a></div>';

 var infowindow = new google.maps.InfoWindow();

 google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
 return function () {
 infowindow.setContent(content);
 infowindow.open(map, marker);
 };
 })(marker, content, infowindow));

 infoModel[i] = [marker, infowindow];
 }
 };*/

function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(49.5512725, 25.6156704);
    var mapOptions = {center: myCenter, zoom: 17};
    var map = new google.maps.Map(mapCanvas, mapOptions, {
        scrollwheel: false,
    });
    var marker = new google.maps.Marker({
        position: myCenter,
        animation: google.maps.Animation.BOUNCE
    });
    google.maps.event.addListener(map, 'mouseout', function(){
        this.setOptions({scrollwheel:false});
    });
    map.addListener('click', function() {
        map.set('scrollwheel', true);
    });
    marker.setMap(map);
}

$(document).ready(function () {
    var slider = $('.bxslider').bxSlider({
        maxSlides: 1,
        pagerCustom: '#bx-pager',
        controls: false,
        auto: true,
        autoHover: true
    });
    $('.checked-objects-box').bxSlider({
        maxSlides: 1,
        pagerCustom: '.checked-objects-pager-box',
        controls: false
    });
    $('.promotion-slider').bxSlider({
        maxSlides: 1,
        pagerCustom: '.promotions-pager-box',
        controls: false
    });
    $('#gallery').bxSlider({
        maxSlides: 4,
        minSlides: 1,
        slideMargin: 20,
        pager: false,
        controls: true,
        auto: true,
        autoHover: true,
        prevSelector: '#gallery-control__prev',
        nextSelector: '#gallery-control__next',
        moveSlides: 1,
        slideWidth: 165,
        prevText: '',
        nextText: ''
    });
    $('.plan-department__gallery').bxSlider({
        maxSlides: 1,
        pagerCustom: '.separate-objects-galleries__plan-pager-box',
        controls: false
    });
    $('.stage-department__gallery').bxSlider({
        maxSlides: 1,
        pagerCustom: '.separate-objects-galleries__stage-pager-box',
        controls: false
    });
    $('.top-news-gallery__slideshow').bxSlider({
        maxSlides: 5,
        minSlides: 1,
        slideMargin: 20,
        pager: false,
        auto: true,
        autoHover: true,
        moveSlides: 1,
        slideWidth: 165,
        captions: true,
        prevSelector: '#gallery-control__prev',
        nextSelector: '#gallery-control__next',
        prevText: '',
        nextText: ''
    });
    $('.slider-news__article-wrapper').mouseover(
        function () {
            var links = [].slice.apply(document.querySelectorAll(".slider-news__article-wrapper"));
            var index = links.indexOf(this);
            slider.goToSlide(index);
        }
    );

    $('.slider-news_shares, .publication__share-btn, .top5__share-btn, .new__share-btn').mouseover(
        function () {
            $(this).find('.sharebtns--top')
                .css({
                    'opacity': '1',
                    'visibility': 'visible',
                    'transition': '0.5s opacity'
                });
        }
    );
    $('.slider-news_shares, .publication__share-btn, .top5__share-btn, .new__share-btn').mouseout(
        function () {
            $(this).find('.sharebtns--top')
                .css({
                    'opacity': '0',
                    'visibility': 'hidden',
                    'transition': '0.5s opacity'
                });
        }
    );
    $('.filter-objects-form__expand-btn').click(function(e){
        e.preventDefault();
        $('.filter-objects-form__fieldsets-container').toggle();
    });
    $(function () {
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: 'Вверх', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
    });
    //question
    $('.pagination').rPage();
    $('#input-id').rating();
});
