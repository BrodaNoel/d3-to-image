import svg2Image from 'svg-2-image';

(function(svg2Image) {
  angular.module('ngD3ToImage', [])
    .directive('d3ToImage', function() {

      const link = function($scope, element) {
        $scope.export = function() {
          svg2Image({
            svg: element.find('svg').first()[0],
            tryToFix: $scope.tryToFix,
            callback: $scope.callback
          });
        };
      };

      return {
        restrict: 'E',
        link: link,
        scope: {
          export: '=',
          tryToFix: '=',
          callback: '='
        }
      };
    });
})(svg2Image);
