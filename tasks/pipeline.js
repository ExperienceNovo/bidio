/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 */

// CSS files to inject in order
var cssFilesToInject = [
  'styles/**/*.css',
  'bower_components/angular-material/angular-material.css',
  'bower_components/video.js/dist/video-js.css',

];

var embedCssFilesToInject = [
  'bower_components/video.js/dist/video-js.css',
];

// Client-side javascript files to inject in order
var jsFilesToInject = [

  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/angular/angular.js',
  'bower_components/bootstrap/dist/js/bootstrap.min.js',
  'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
  'bower_components/angular-ui-router/release/angular-ui-router.js',
  'bower_components/sails.io.js/dist/sails.io.js',
  'bower_components/angularSails/dist/ngsails.io.js',
  'bower_components/lodash/lodash.js',
  'bower_components/moment/moment.js',
  'bower_components/angular-moment/angular-moment.js',
  'bower_components/angular-google-maps/dist/angular-google-maps.js',
  'bower_components/angular-scroll/angular-scroll.js',
  'bower_components/ng-file-upload/ng-file-upload.js',
  'bower_components/video.js/dist/video.min.js',
  'bower_components/vjs-video/dist/vjs-video.js',
  'bower_components/Chart.js/Chart.min.js',
  'bower_components/angular-chart.js/dist/angular-chart.js',
  'bower_components/angular-animate/angular-animate.min.js',
  'bower_components/angular-aria/angular-aria.min.js',
  'bower_components/angular-messages/angular-messages.min.js',
  'bower_components/angular-material/angular-material.js',
  'bower_components/angular-local-storage/dist/angular-local-storage.js',
  'bower_components/angular-off-click/offClick.js',
  'bower_components/angular-easyfb/build/angular-easyfb.min.js',
  'bower_components/stripe-angular/stripe-angular.js',
  'bower_components/card/lib/js/card.js',
  'bower_components/angular-card/src/card-angular.js',
  'bower_components/textAngular/dist/textAngular-rangy.min.js',
  'bower_components/textAngular/dist/textAngular-sanitize.min.js',
  'bower_components/textAngular/dist/textAngular.min.js',

  // All of the rest of your app scripts
  'src/**/*.js',

];

var embedJsFilesToInject = [
  'src/app/videoEmbed/app.js',
  'src/app/videoEmbed/v/index.js',
];


module.exports.jsFilesToInjectNoPathChange = jsFilesToInject;


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  // 'templates/**/*.html'
  'src/**/*.tpl.html',
  'src/app/videoEmbed/v/index.tpl.html',

];

var embedTemplateFilesToInject = [
  'src/app/videoEmbed/v/index.tpl.html',
];


// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
