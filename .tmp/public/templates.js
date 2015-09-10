angular.module('templates-app', ['about/index.tpl.html', 'home/index.tpl.html', 'intro/index.tpl.html', 'sidebar/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<div class=\"surface-container home-pad\">\n" +
    "\n" +
    "\n" +
    "	<p>this is the about page</p>\n" +
    "	<p>this is the about page</p>\n" +
    "	<p>this is the about page</p>\n" +
    "	<p>this is the about page</p>\n" +
    "	<p>this is the about page</p>\n" +
    "	<p>this is the about page</p>\n" +
    "	<p>this is the about page</p>\n" +
    "	<p>this is the about page</p>\n" +
    "	<p>this is the about page</p>\n" +
    "	<p>this is the about page</p>\n" +
    "	<p>this is the about page</p>\n" +
    "	<p>this is the about page</p>\n" +
    "	<p>this is the about page</p>\n" +
    "	<p>this is the about page</p>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<div class=\"surface-container-home\">\n" +
    "    <div ng-include=\"'intro/index.tpl.html'\"></div>\n" +
    "    CONTENT<br>\n" +
    "    CONTENT<br>\n" +
    "    CONTENT<br>\n" +
    "    CONTENT<br>\n" +
    "    CONTENT<br>\n" +
    "    CONTENT<br>\n" +
    "    CONTENT<br>\n" +
    "    CONTENT<br>\n" +
    "    CONTENT<br>\n" +
    "    CONTENT<br>\n" +
    "    CONTENT<br>\n" +
    "    CONTENT<br>\n" +
    "    CONTENT<br>\n" +
    "    <div style=\"height:2000px;\"></div>\n" +
    "    \n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("intro/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("intro/index.tpl.html",
    "<div class=\"intro-container\">\n" +
    "    <img src=\"/images/intro.jpg\" style=\"height:100%;width:100%;\">\n" +
    "</div>\n" +
    "\n" +
    "<h1>bidio</h1>\n" +
    "<h1>bidio-slogan</h1>");
}]);

angular.module("sidebar/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sidebar/index.tpl.html",
    "<div ng-controller=\"SidebarCtrl\">\n" +
    "    <div class=\"page-nav-zone\">\n" +
    "        <div class=\"flex-item-top\"></div>\n" +
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-small-list\">\n" +
    "                        <img style=\"max-width: 50%;\" src=\"/images/logo.png\"/>\n" +
    "                    </div>\n" +
    "                    <div class=\"nav-large-list\">Home</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"item-container\">\n" +
    "            <a href=\"/about/\">\n" +
    "                <div class=\"list-item\">\n" +
    "                    <div class=\"nav-small-list\"><i class=\"fa fa-info\"></i></div>\n" +
    "                    <div class=\"nav-large-list\">About</div>\n" +
    "                </div>\n" +
    "            </a>\n" +
    "        </div>\n" +
    "        <div class=\"flex-item-bottom\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
