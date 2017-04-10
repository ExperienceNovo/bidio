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
      $window.document.getElementsByName('keywords')[0].content = keywords;
    }
  };
}]);