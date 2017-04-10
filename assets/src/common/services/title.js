angular.module('services.title', [])
.factory('titleService',['$document', '$window', function($document, $window) {
  var title;
  return {
    setTitle: function(t) {
      title = t;
      $document.prop('title', title);
      $window.document.getElementsByName('twitter:title')[0].content = title;
    },
    getTitle: function() {
      return $document.prop('title');
    }
  };
}]);