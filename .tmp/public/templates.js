angular.module('templates-app', ['about/index.tpl.html', 'account/index.tpl.html', 'contest/index.tpl.html', 'contests/index.tpl.html', 'creators/index.tpl.html', 'dashboard/analytics.tpl.html', 'dashboard/home.tpl.html', 'dashboard/index.tpl.html', 'dashboard/videos.tpl.html', 'home/index.tpl.html', 'intro/index.tpl.html', 'login/index.tpl.html', 'nav/index.tpl.html', 'register/index.tpl.html', 'search/index.tpl.html', 'sponsors/index.tpl.html', 'upload/index.tpl.html', 'video/index.tpl.html']);

angular.module("about/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/index.tpl.html",
    "<div class=\"surface-container home-pad\">\n" +
    "\n" +
    "	<h1>creators</h1>\n" +
    "	<h3>Upload Your Videos</h3>\n" +
    "	<p>Our unique influencer marketing platform hosts content for creators who want to get support from sponsors without giving up creative control. Unlike other digital media networks and exchanges, we only take 8% of our users’ hard-earned advertising revenue.</p>\n" +
    "\n" +
    "	<h3>Enter Sponsored Contests</h3>\n" +
    "	<p>Explore our active sponsors and discover video contests involving branded content. Simply follow the contest guidelines and submit uploads for the chance to get paid! If a brand likes your video, you’ll receive incremental payments based on your content’s performance.</p>\n" +
    "\n" +
    "	<h3>Get Paid Based on Virality</h3>\n" +
    "	<p>Bidio’s auction system enables perfectly cost-effective content sponsorship, which helps any creator earn money by doing what they love. Share your sponsored content and capitalize that influence on the word wide web. Using our platform, the audience is anywhere and everywhere.</p>\n" +
    "\n" +
    "\n" +
    "	<h1>sponsors</h1>\n" +
    "	<h3>Sponsor Video Contests</h3>\n" +
    "	<p>Establish your maximum budget, CPC and creative parameters, then let our users produce videos for your consideration. If you choose to sponsor any entries, the original creator will receive incremental payments each time an audience member clicks through to your landing page.</p>\n" +
    "\n" +
    "	<h3>Customize Your Channel</h3>\n" +
    "	<p>Control the aesthetic of your sponsored content’s surroundings, and rest assured, your logo will follow it across platforms and devices. You can even produce and upload your own video to accompany your branded bidio channel and profile.</p>\n" +
    "\n" +
    "	<h3>Only Pay For Results</h3>\n" +
    "	<p>Using our unique pay-per-click model, your organization can confidently invest in user-generated content marketing. Giving up creative influence will help motivate creators and regain consumer trust online. Plus our dashboard makes it easier to measure performance and maximize ROI.</p>\n" +
    "\n" +
    "</div>");
}]);

angular.module("account/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("account/index.tpl.html",
    "<div class=\"surface-container home-pad\">\n" +
    "\n" +
    "\n" +
    "	<p>this is the account page</p>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("contest/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contest/index.tpl.html",
    "<link href=\"http://vjs.zencdn.net/5.8.0/video-js.css\" rel=\"stylesheet\">\n" +
    "<div class=\"surface-container home-pad\" style=\"margin-left:10%\">\n" +
    "	<h1>{{contest.title}}</h1>\n" +
    "	\n" +
    "	<p>sponsored by</p>\n" +
    "	{{contest.user.username}}\n" +
    "	\n" +
    "	<h3>edit contest</h3>\n" +
    "	<form ng-submit=\"updateContest(contest)\">\n" +
    "		<p>Update Title</p>\n" +
    "		<input type=\"text\" ng-model=\"contest.title\"/>\n" +
    "		<p>Update Content</p>\n" +
    "		<input type=\"text\" ng-model=\"contest.contestContent\"/>\n" +
    "		<button type=\"submit\">Update Contest</button>\n" +
    "	</form>\n" +
    "\n" +
    "	<h3>contest submissions</h3>\n" +
    "	<div class=\"contestVideos\" ng-repeat=\"vidoe in videos\">\n" +
    "		<h1>{{video}}</h1>\n" +
    "		<video class=\"video-js vjs-default-skin\" controls preload=\"auto\" width=\"640\" height=\"264\" poster=\"poster.jpg\" vjs-video>\n" +
    "	 		<source src=\"videos/video.mp4\" type=\"video/mp4\">\n" +
    "		</video>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("contests/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contests/index.tpl.html",
    "<div class=\"surface-container home-pad\" style=\"margin-left:10%\">\n" +
    "	<h1>contests</h1>\n" +
    "	<!--<h3>My Contests</h3>-->\n" +
    "	<form ng-submit=\"createContest(newContest)\">\n" +
    "		<p>title</p>\n" +
    "		<input type='text' ng-model=\"newContest.title\"></input>\n" +
    "		<p>contest Content</p>\n" +
    "		<textarea ng-model=\"newContest.contestContent\"></textarea>\n" +
    "		<p>URL</p>\n" +
    "		<input type='text' ng-model=\"newContest.urlTitle\"></input><br>\n" +
    "		<button type='submit'>Submit Contest</button>\n" +
    "	</form>\n" +
    "	<br><br>\n" +
    "\n" +
    "	<div ng-repeat=\"contest in contests\">\n" +
    "		<h3><a href=\"/contest/{{contest.urlTitle}}\">{{contest.title}}</a></h3>\n" +
    "		<p>sponsered by</p>\n" +
    "		<p>{{contest.user.username}}</p>\n" +
    "		\n" +
    "	</div>\n" +
    "		\n" +
    "</div>");
}]);

angular.module("creators/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("creators/index.tpl.html",
    "<div class=\"surface-container home-pad\" style=\"text-align:center;padding-top:50px\">\n" +
    "    <div class=\"row\">\n" +
    "    	<div class=\"col-md-12\" style=\"margin-top:5%;margin-bottom:75px\">\n" +
    "    		<h1>Did you know Facebook and YouTube take<br>45% of advertising revenue? We take 8%.</h1>\n" +
    "    	</div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "            <img style=\"height:200px;margin:0 auto\" class=\"img-responsive img-center\" src=\"/images/play.png\" alt=\"\">\n" +
    "            <br><br>\n" +
    "            <h2 style=\"color:#FE9A2E\">Upload Your Videos</h2>\n" +
    "            <p style=\"padding:25px;font-size:18px;color:#555;\">Our unique influencer marketing platform hosts content for creators who want to get support from sponsors without giving up creative control. Unlike other digital media networks and exchanges, we only take 8% of our users’ hard-earned advertising revenue.</p>\n" +
    "            <br><br>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "            <img style=\"height:200px;margin:0 auto\" class=\"img-responsive img-center\" src=\"/images/cup.png\" alt=\"\">\n" +
    "            <br><br>\n" +
    "            <h2 style=\"color:#FE9A2E\">Enter Sponsored Contests</h2>\n" +
    "            <p style=\"padding:25px;font-size:18px;color:#555;\">Explore our active sponsors and discover video contests involving branded content. Simply follow the contest guidelines and submit uploads for the chance to get paid! If a brand likes your video, you’ll receive incremental payments based on your content’s performance.</p>\n" +
    "            <br><br>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "            <img style=\"height:200px;margin:0 auto\" class=\"img-responsive img-center\" src=\"/images/business.png\" alt=\"\">\n" +
    "            <br><br>\n" +
    "            <h2 style=\"color:#FE9A2E\">Get Paid Based on Virality</h2>\n" +
    "            <p style=\"padding:25px;font-size:18px;color:#555;\">Bidio’s auction system enables perfectly cost-effective content sponsorship, which helps any creator earn money by doing what they love. Share your sponsored content and capitalize that influence on the word wide web. Using our platform, the audience is anywhere and everywhere.</p>\n" +
    "            <br><br>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-12\">\n" +
    "	        <ul class=\"list-inline intro-social-buttons\">\n" +
    "	          <li>\n" +
    "	              <a href=\"/register\" class=\"btn btn-default btn-lg btn-reg\"><span class=\"network-name\">Get Started - For FREE!</span></a>\n" +
    "	          </li>\n" +
    "	        </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("dashboard/analytics.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/analytics.tpl.html",
    "<div id=\"sidebar-wrapper\">\n" +
    "  <ul class=\"sidebar-nav\">\n" +
    "    <br>\n" +
    "    <li><a style=\"font-weight:bold\" href=\"/dashboard\">dashboard</a></li>\n" +
    "    <hr>\n" +
    "    <li><a href=\"dashboard/analytics\">analytics</a></li>\n" +
    "    <li><a href=\"dashboard/videos\">videos</a></li>\n" +
    "    <li><a href=\"dashboard/analytics\">balance</a></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<div id=\"main-container\">\n" +
    "  <div class=\"dashboard-title\">\n" +
    "    <h1>Dashboard Analytics</h1>\n" +
    "  </div>\n" +
    "	<canvas id=\"line\" class=\"chart chart-line\" chart-data=\"data\"\n" +
    "		chart-labels=\"labels\" chart-legend=\"true\" chart-series=\"series\"\n" +
    "		chart-click=\"onClick\" >\n" +
    "	</canvas> \n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/home.tpl.html",
    "<div id=\"sidebar-wrapper\">\n" +
    "  <ul class=\"sidebar-nav\">\n" +
    "    <br>\n" +
    "    <li><a style=\"font-weight:bold\" href=\"/dashboard\">dashboard</a></li>\n" +
    "    <hr>\n" +
    "    <li><a href=\"dashboard/analytics\">analytics</a></li>\n" +
    "    <li><a href=\"dashboard/videos\">videos</a></li>\n" +
    "    <li><a href=\"dashboard/analytics\">balance</a></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<div id=\"main-container\">\n" +
    "  <div class=\"dashboard-title\">\n" +
    "    <h1>Dashboard Home</h1>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/index.tpl.html",
    "<link rel=\"stylesheet\" href=\"bower_components/angular-chart.js/dist/angular-chart.css\">\n" +
    "<link href=\"http://vjs.zencdn.net/5.8.0/video-js.css\" rel=\"stylesheet\">\n" +
    "<div ui-view=\"home\"></div>\n" +
    "<div ui-view=\"analytics\"></div>\n" +
    "<div ui-view=\"videos\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("dashboard/videos.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/videos.tpl.html",
    "<div id=\"sidebar-wrapper\">\n" +
    "  <ul class=\"sidebar-nav\">\n" +
    "    <br>\n" +
    "    <li><a style=\"font-weight:bold\" href=\"/dashboard\">dashboard</a></li>\n" +
    "    <hr>\n" +
    "    <li><a href=\"dashboard/analytics\">analytics</a></li>\n" +
    "    <li><a href=\"dashboard/vidoes\">videos</a></li>\n" +
    "    <li><a href=\"dashboard/analytics\">balance</a></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<div id=\"main-container\">\n" +
    "  <div class=\"dashboard-title\">\n" +
    "    <h1>Dashboard Videos</h1>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"dashboardVideos\" ng-repeat=\"vidoe in videos\">\n" +
    "    <h1>{{video}}</h1>\n" +
    "    <video class=\"video-js vjs-default-skin\" controls preload=\"auto\" width=\"640\" height=\"264\" poster=\"poster.jpg\" vjs-video>\n" +
    "      <source src=\"videos/video.mp4\" type=\"video/mp4\">\n" +
    "    </video>\n" +
    "  </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<div class=\"surface-container-home\">\n" +
    "    <div ng-include=\"'intro/index.tpl.html'\"></div>\n" +
    "        <div class=\"content-section-a\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-5 col-sm-6\">\n" +
    "                    <hr class=\"section-heading-spacer\">\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                    <h2 class=\"section-heading\">Truly Native Campaigns and Creative Contests</h2>\n" +
    "                    <p class=\"lead\">Our unique influencer marketing platform hosts content for creators who want to get support from sponsors without giving up creative control.</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-5 col-lg-offset-2 col-sm-6\" style=\"text-align:center;\">\n" +
    "                   <i class=\"fa fa-video-camera img-responsive\" style=\"font-size:125px;text-align:center;line-height:250px;\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"content-section-b\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6\">\n" +
    "                    <hr class=\"section-heading-spacer\">\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                    <h2 class=\"section-heading\">Discover Interesting User-Generated Content</h2>\n" +
    "                    <p class=\"lead\">Find cool videos created by everyday bidio users. Watch what you like, when you like - all while supporting the creative community!</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-5 col-sm-pull-6 col-sm-6\" style=\"text-align:center;\">\n" +
    "                    <i class=\"fa fa-play-circle img-responsive\" style=\"font-size:125px;text-align:center;line-height:250px;\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"content-section-a\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-lg-5 col-sm-6\">\n" +
    "                    <hr class=\"section-heading-spacer\">\n" +
    "                    <div class=\"clearfix\"></div>\n" +
    "                    <h2 class=\"section-heading\">Digital Creators Get Paid What They Deserve</h2>\n" +
    "                    <p class=\"lead\">Unlike other digital media networks and exchanges, bidio members keep 92% of their hard-earned advertising revenue - no strings attached.</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-lg-5 col-lg-offset-2 col-sm-6\" style=\"text-align:center;\">\n" +
    "                   <i class=\"fa fa-usd img-responsive\" style=\"font-size:125px;text-align:center;line-height:250px;\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("intro/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("intro/index.tpl.html",
    "<div class=\"intro\">\n" +
    "    <div class=\"intro-container\">\n" +
    "      <div class=\"container\" style=\"position: absolute;width: 100%;top: 49%;\">\n" +
    "        <img class=\"intro-logo\" src=\"/images/intro logo.png\">\n" +
    "        <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "          <symbol id=\"intro-desktop-text\">\n" +
    "            <text text-anchor=\"middle\"\n" +
    "                  x=\"960\"  \n" +
    "                  y=\"570\"\n" +
    "                  dy=\".35em\"\n" +
    "                  class=\"medium-text\"\n" +
    "                  >\n" +
    "              Connecting creators with sponsors.\n" +
    "            </text>    \n" +
    "          </symbol>\n" +
    "          <mask id=\"intro-desktop-mask\"\n" +
    "                maskunits=\"userSpaceOnUse\"\n" +
    "                maskcontentunits=\"userSpaceOnUse\">\n" +
    "            <rect\n" +
    "                  width=\"100%\"\n" +
    "                  height=\"100%\"\n" +
    "                  class=\"mask__shape\">\n" +
    "            </rect>\n" +
    "            <use xlink:href=\"#intro-desktop-text\"\n" +
    "                 class=\"mask__text\"\n" +
    "                 ></use>\n" +
    "            <use xlink:href=\"#intro-desktop-novo\" />\n" +
    "          </mask>\n" +
    "        </svg>\n" +
    "        <ul class=\"list-inline intro-social-buttons\">\n" +
    "          <li>\n" +
    "              <a href=\"/creators\" class=\"btn btn-default btn-lg\"><i class=\"fa fa-angle-left fa-fw\"></i> <span class=\"network-name\">Video Producers</span></a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "              <a href=\"/sponsors\" class=\"btn btn-default btn-lg\"><span class=\"network-name\">Digital Marketers</span> <i class=\"fa fa-angle-right fa-fw\"></i></a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <div class=\"box-with-text\">\n" +
    "        <div class=\"text-fill\">\n" +
    "          <video itemscope itemtype=\"VideoObject\"\n" +
    "              class=\"video\" \n" +
    "              src=\"videos/video.mp4\"\n" +
    "              preload=\"auto\" \n" +
    "              autoplay=\"autoplay\" \n" +
    "              loop=\"loop\" \n" +
    "              muted=\"muted\">\n" +
    "          </video>\n" +
    "        </div>\n" +
    "        <svg class=\"svg-inverted-mask\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" \n" +
    "             preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "          <rect\n" +
    "            width=\"100%\"\n" +
    "            height=\"100%\"\n" +
    "            mask=\"url(#intro-desktop-mask)\"\n" +
    "            class=\"shape--fill\"/>\n" +
    "          <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-text\" class=\"text--transparent\"></use>\n" +
    "          <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#intro-desktop-novo\" class=\"text--transparent\"></use>\n" +
    "        </svg> \n" +
    "      </div>\n" +
    "    </div>\n" +
    "  <div class=\"intro-mobile\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("login/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/index.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"form-wrapper\">\n" +
    "        <div class=\"form-container\">\n" +
    "            <h1>Welcome Back!</h1>\n" +
    "            <form class=\"form ng-pristine ng-valid\" role=\"form\" action=\"/auth/local\" method=\"post\" _lpchecked=\"1\">\n" +
    "                <label for=\"inputUsername3\"></label>\n" +
    "                <input type=\"text\" placeholder=\"Username\" id=\"inputUsername3\" name=\"identifier\">\n" +
    "                <label for=\"inputPassword3\"></label>\n" +
    "                <input type=\"password\" placeholder=\"Password\" id=\"inputPassword3\" name=\"password\">\n" +
    "                <button type=\"submit\" id=\"login-button\">Login</button>\n" +
    "            </form>\n" +
    "            <a href=\"/register\"><h3>Sign Up</h3></a>\n" +
    "            <!--<a href=\"/forgot\"><h3>forgot your password</h3></a>-->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("nav/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/index.tpl.html",
    "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\" ng-controller=\"NavCtrl\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "      <div class=\"navbar-header\">\n" +
    "        <button class=\"navbar-toggle\" type=\"button\" ng-click=\"isCollapsed = !isCollapsed\">\n" +
    "          <span class=\"sr-only\">Toggle navigation</span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "        </button>\n" +
    "        <a class=\"navbar-brand\" href=\"/\" style=\"color: #fff;letter-spacing: 1px\"><img src=\"/images/bidio_logo.png\" style=\"max-height:20px;float:left\">\n" +
    "          <span style=\"margin-left:10px\">bidio</span>\n" +
    "        </a>    \n" +
    "      </div>\n" +
    "      <div collapse=\"isCollapsed\" class=\"navbar-collapse bs-js-navbar-collapse\">\n" +
    "        <ul class=\"nav navbar-nav nav-float\">\n" +
    "      <!--<li><a class=\"bidio-nav\" href=\"/about\">About</a></li>-->\n" +
    "          <li class=\"dropdown\" ng-show=\"!currentUser\"><a class=\"bidio-nav\" href=\"/creators\">Creators</a></li>\n" +
    "          <li class=\"dropdown\" ng-show=\"!currentUser\"><a class=\"bidio-nav\" href=\"/sponsors\">Sponsors</a></li>\n" +
    "      <!--<li><a href=\"/contests\">Contests</a></li>\n" +
    "          <li><a href=\"/search\">Search</a></li>-->\n" +
    "          <li class=\"dropdown\" ng-show=\"currentUser\"><a href=\"/dashboard\">Dashboard</a></li>\n" +
    "          <li class=\"dropdown\" ng-show=\"currentUser\"><a href=\"/upload\">Upload</a></li>\n" +
    "          <li class=\"dropdown\" ng-show=\"currentUser\"><a href=\"/account\">Account</a></li>\n" +
    "          <li class=\"dropdown\" ng-show=\"currentUser\"><a href=\"/logout\">Signout</a></li>\n" +
    "          <li class=\"dropdown\" ng-show=\"!currentUser\"><a href=\"/login\">Login</a></li>\n" +
    "          <li class=\"dropdown\" ng-show=\"!currentUser\"><a href=\"/register\">Register</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</nav>\n" +
    "\n" +
    "");
}]);

angular.module("register/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("register/index.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"form-wrapper\">\n" +
    "        <div class=\"form-container\">\n" +
    "            <h1>Welcome to Bidio!</h1>\n" +
    "            <form class=\"form ng-pristine ng-valid\" role=\"form\" action=\"/auth/local/register\" method=\"post\" _lpchecked=\"1\">\n" +
    "                <label for=\"inputUsername3\" class=\"col-sm-2 control-label\"></label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"inputUsername3\" name=\"username\" placeholder=\"Username\" value=\"\">\n" +
    "\n" +
    "                <label for=\"inputPassword3\" class=\"col-sm-2 control-label\"></label>\n" +
    "                <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" name=\"password\" placeholder=\"Password\" value=\"\">\n" +
    "\n" +
    "                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\"></label>\n" +
    "                <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" name=\"email\" placeholder=\"Email\" value=\"\">\n" +
    "\n" +
    "                <label for=\"inputFirstName3\" class=\"col-sm-2 control-label\"></label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"inputFirstName3\" name=\"first_name\" placeholder=\"First Name\" value=\"\">\n" +
    "\n" +
    "                <button type=\"submit\" id=\"login-button\">Sign Up</button>\n" +
    "            </form>\n" +
    "            <a href=\"/login\"><h3>Already Have An Account?</h3></a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("search/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/index.tpl.html",
    "<div class=\"surface-container home-pad\">\n" +
    "	<h1>search</h1>\n" +
    "\n" +
    "</div>");
}]);

angular.module("sponsors/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sponsors/index.tpl.html",
    "<div class=\"surface-container home-pad\" style=\"text-align:center;padding-top:50px\">\n" +
    "    <div class=\"row\">\n" +
    "    	<div class=\"col-md-12\" style=\"margin-top:5%;margin-bottom:75px\">\n" +
    "    		<h1>Perfectly Cost-Effective,<br>Crowdsourced Content Marketing</h1>\n" +
    "    	</div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "            <img style=\"height:200px;margin:0 auto\" class=\"img-responsive img-center\" src=\"/images/business.png\" alt=\"\">\n" +
    "            <br><br>\n" +
    "            <h2 style=\"color:#FE9A2E\">Sponsor Video Contests</h2>\n" +
    "            <p style=\"padding:25px;font-size:18px;color:#555;\">Establish your maximum budget, CPC and creative parameters, then let our users produce videos for your consideration. If you choose to sponsor any entries, the original creator will receive incremental payments each time an audience member clicks through to your landing page.</p>\n" +
    "            <br><br>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "            <img style=\"height:200px;margin:0 auto\" class=\"img-responsive img-center\" src=\"/images/paint.png\" alt=\"\">\n" +
    "            <br><br>\n" +
    "            <h2 style=\"color:#FE9A2E\">Customize Your Channel</h2>\n" +
    "            <p style=\"padding:25px;font-size:18px;color:#555;\">Control the aesthetic of your sponsored content’s surroundings, and rest assured, your logo will follow it across platforms and devices. You can even produce and upload your own video to accompany your branded bidio channel and profile.</p>\n" +
    "            <br><br>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4\">\n" +
    "            <img style=\"height:200px;margin:0 auto\" class=\"img-responsive img-center\" src=\"/images/arrow.png\" alt=\"\">\n" +
    "            <br><br>\n" +
    "            <h2 style=\"color:#FE9A2E\">Only Pay For Results</h2>\n" +
    "            <p style=\"padding:25px;font-size:18px;color:#555;\">Using our unique pay-per-click model, your organization can confidently invest in user-generated content marketing. Giving up creative influence will help motivate creators and regain consumer trust online. Plus our dashboard makes it easier to measure performance and maximize ROI.</p>\n" +
    "            <br><br>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-12\">\n" +
    "	        <ul class=\"list-inline intro-social-buttons\">\n" +
    "	          <li>\n" +
    "	              <a href=\"/register\" class=\"btn btn-default btn-lg btn-reg\"><span class=\"network-name\">Get Started - For FREE!</span></a>\n" +
    "	          </li>\n" +
    "	        </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("upload/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("upload/index.tpl.html",
    "<div style=\"margin-left:10%\">\n" +
    "	<div ng-show=\"!currentUser\">\n" +
    "		<a href=\"/login\">login</a> or <a href=\"/register\">register</a> to upload\n" +
    "	</div>\n" +
    "	<div ng-show=\"currentUser\">\n" +
    "		<h1>upload</h1>\n" +
    "		<form ng-submit=\"createVideo(newVideo)\">\n" +
    "			<p>Title</p>\n" +
    "			<input type=\"text\" ng-model=\"newVideo.title\"/>\n" +
    "			<p>Amazon URL</p>\n" +
    "			<input type=\"text\" ng-model=\"newVideo.amazonUrl\"/>\n" +
    "			<p>Description</p>\n" +
    "			<textarea ng-model=\"newVideo.description\"></textarea>\n" +
    "			<br>\n" +
    "			<button type=\"submit\">Upload Video</button>\n" +
    "		</form>\n" +
    "\n" +
    "\n" +
    "	    <div class=\"button\" ngf-select=\"upload($files)\" ngf-multiple=\"true\">Select File</div>\n" +
    "	    Drop File:\n" +
    "	    <div ngf-drop ngf-select ng-model=\"files\" class=\"drop-box\" \n" +
    "	        ngf-drag-over-class=\"'dragover'\" ngf-multiple=\"true\" ngf-allow-dir=\"true\">Drag and drop</div>\n" +
    "	    <div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>\n" +
    "	    Files:\n" +
    "	    <ul>\n" +
    "	        <li ng-repeat=\"f in files\" style=\"font:smaller\">{{f.name}} {{f.$error}} {{f.$errorParam}}</li>\n" +
    "	    </ul>\n" +
    "	    Upload Log:\n" +
    "	    <pre>{{log}}</pre>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("video/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("video/index.tpl.html",
    "<div style=\"margin-left:10%\">\n" +
    "	<h1>{{video.title}}</h1>\n" +
    "  	<link href=\"http://vjs.zencdn.net/5.8.0/video-js.css\" rel=\"stylesheet\">\n" +
    "	<video class=\"video-js vjs-default-skin\" controls preload=\"auto\" width=\"640\" height=\"264\" poster=\"poster.jpg\" vjs-video>\n" +
    " 		<source src=\"videos/video.mp4\" type=\"video/mp4\">\n" +
    "	</video>\n" +
    "	<p><a href=\"#\">user</a></p>\n" +
    "\n" +
    "	<p>{{video.description}}</p>\n" +
    "	<p>view count</p>\n" +
    "	\n" +
    "	<!--<p>current sponsors</p>\n" +
    "	<p>current $bid/view</p>-->\n" +
    "	\n" +
    "\n" +
    "	\n" +
    "\n" +
    "</div>");
}]);
