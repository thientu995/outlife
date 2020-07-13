app.controller("albumController", ['$rootScope', '$scope', '$http', '$interval', function ($rootScope, $scope, $http, $interval) {
    $scope.getData({ collection: 'album' }, function (value) {
        $scope.dateListAlbum = value.data.sort((a, b) => {
            return b.date.seconds - a.date.seconds
        });
        $rootScope.isViewLoading = false;
    });

    $scope.initThumbnail = function () {
        elasticsliderThumbnail();
        return true;
    }

    $scope.selectItem = function (item) {
        $scope.itemSelected = item;
    }

    $scope.elasticSliderLoad = function () {
        new ElasticSlider('.listSlider', {
            maxStretch: 100,
            bezierLen: 80
        });
        new SimpleBar(document.querySelector('.modalElasticslider'), {
            autoHide: false
        });
        return true;
    };

    $scope.getStyleItem = function (id) {
        if ($scope.urlImgCurentSlider == null) {
            return {};
        }
        return {
            "background-image": "url(" + $(".elastic-slider .current img").attr('src') + ")",
            "background-repeat": "no-repeat",
            "background-size": "cover",
            "background-position": "center",
            "background-attachment": "fixed",
            "filter": "blur(15px) grayscale(100%)",
            "-webkit-filter": "blur(15px) grayscale(10  0%)",
            "top": "-50%",
            "width": "100vw",
            "height": "calc(100vh + 50%)",
            "position": "absolute",
        }
    }

    $interval(function () {
        $scope.urlImgCurentSlider = $('.elastic-slider .current img').attr('src')
    });
}]);