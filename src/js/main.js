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
    var myCenter = new google.maps.LatLng(49.5512725,25.6156704);
    var mapOptions = {center: myCenter, zoom: 17};
    var map = new google.maps.Map(mapCanvas,mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter,
        animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);
}

$(document).ready(function () {
    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager',
        controls: false,
        auto: true,
        autoHover: true
    });
});

$(document).ready(function () {
    $('.slider-news_shares, .publication__share-btn').mouseover(
        function () {
            $('.sharebtns--top').css('transition', 'opacity', '0.5s')
        },
        function () {
            $('.sharebtns--top').css('opacity', '1')
        },
        function () {
            $('.sharebtns--top').css('visibility', 'visible')
        });
    $('.slider-news_shares, .publication__share-btn').mouseout(
        function () {
            $('.sharebtns--top').css('transition', 'opacity', '0.5s')
        },
        function () {
            $('.sharebtns--top').css('opacity', '0')
        },
        function () {
            $('.sharebtns--top').css('visibility', 'hidden')
        })
});