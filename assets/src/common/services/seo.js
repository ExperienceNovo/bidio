angular.module('services.seo', [])
.factory('seoService',['$window', function($window) {
  var description;
  var keywords;
  return {
    setDescription: function(description) {
      $window.document.getElementsByName('description')[0].content = description;
      $window.document.getElementsByName('twitter:description')[0].content = description;
    },
    setKeywords: function(keywords) {
      return $window.document.getElementsByName('keywords')[0].content = keywords;
    },
    setPlayer: function(videoModel) {
      $window.document.getElementsByName('twitter:player')[0].content = videoModel.bidioUrl;
      $window.document.getElementsByName('twitter:stream')[0].content = videoModel.amazonUrl;
      $window.document.getElementsByName('twitter:image')[0].content = videoModel.imageUrl;
    }
  };
}]);