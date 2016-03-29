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
    "	\n" +
    "	<div ng-show=\"!currentUser\">\n" +
    "		<a href=\"/login\">login</a> or <a href=\"/register\">register</a> to upload\n" +
    "	</div>\n" +
    "	<div ng-show=\"currentUser\">\n" +
    "		{{currentUser}}\n" +
    "		\n" +
    "		\n" +
    "		<h1>upload</h1>\n" +
    "		\n" +
    "		<form ng-submit=\"update(updatedUser)\">\n" +
    "			<p>Username : {{currentUser.username}}</p>\n" +
    "			\n" +
    "			<input class=\"accountInput\" type=\"text\" ng-model=\"updatedUser.username\" value=\"{{currentUser.username}}\"/>\n" +
    "			\n" +
    "			<p>Email: {{currentUser.email}}</p>\n" +
    "			<input class=\"accountInput\" type=\"text\" ng-model=\"updatedUser.email\" value=\"{{currentUser.email}}\"/>\n" +
    "			\n" +
    "			<button type=\"submit\">Update Profile</button>\n" +
    "		</form>\n" +
    "		<form ng-submit=\"upload(file)\">\n" +
    "			<br>\n" +
    "\n" +
    "			<div id=\"upload-container\">\n" +
    "				<div style=\"width:100%;\" ngf-drop ngf-select=\"upload($file)\" ng-model=\"file\" class=\"drop-box\" ngf-drag-over-class=\"dragover\" ngf-allow-dir=\"true\">\n" +
    "					<div>Drag pictures or click here to upload Avatar.</div>\n" +
    "					<div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>	\n" +
    "				</div>\n" +
    "				<p>{{fileName}}</p>\n" +
    "			    Upload Progress:\n" +
    "				<div class=\"progress\">\n" +
    "					<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{pp}}%;\">\n" +
    "						{{pp}}%\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<button type=\"submit\">Update Avatar</button>\n" +
    "		</form>\n" +
    "	\n" +
    "	</div>\n" +
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
    "<div class=\"surface-container\" style=\"text-align:center;padding-top:50px\">\n" +
    "    <div class=\"row\">\n" +
    "    	<div class=\"col-md-12\" style=\"margin-top:5%;margin-bottom:75px\">\n" +
    "    		<h1>Did you know Facebook and YouTube take<br>45% of advertising revenue?</h1>\n" +
    "    	</div>\n" +
    "        <div class=\"col-sm-4 service-desc\">\n" +
    "            <img class=\"img-responsive img-center\" src=\"/images/play.png\" alt=\"\">\n" +
    "            <br><br>\n" +
    "            <h2>Upload Your Videos</h2>\n" +
    "            <p>Our unique influencer marketing platform hosts content for creators who want to get support from sponsors without giving up creative control. Unlike other digital media networks and exchanges, we only take 8% of our users’ hard-earned advertising revenue.</p>\n" +
    "            <br><br>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4 service-desc\">\n" +
    "            <img class=\"img-responsive img-center\" src=\"/images/cup.png\" alt=\"\">\n" +
    "            <br><br>\n" +
    "            <h2>Enter Sponsored Contests</h2>\n" +
    "            <p>Explore our active sponsors and discover video contests involving branded content. Simply follow the contest guidelines and submit uploads for the chance to get paid! If a brand likes your video, you’ll receive incremental payments based on your content’s performance.</p>\n" +
    "            <br><br>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4 service-desc\">\n" +
    "            <img class=\"img-responsive img-center\" src=\"/images/business.png\" alt=\"\">\n" +
    "            <br><br>\n" +
    "            <h2>Get Paid Based on Virality</h2>\n" +
    "            <p>Bidio’s auction system enables perfectly cost-effective content sponsorship, which helps any creator earn money by doing what they love. Share your sponsored content and capitalize that influence on the word wide web. Using our platform, the audience is anywhere and everywhere.</p>\n" +
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
    "<div id=\"main\">\n" +
    "    <div id=\"wrapper\" ng-show=\"currentUser\">\n" +
    "        <div class=\"content-holder\">\n" +
    "            <h1>Logged in User</h1>\n" +
    "            <h1>Logged in User</h1>\n" +
    "            <h1>Logged in User</h1>\n" +
    "            <h1>Logged in User</h1>\n" +
    "            <div ng-repeat=\"video in trendingVideos\">\n" +
    "              {{video}}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div id=\"wrapper\" ng-show=\"!currentUser\">\n" +
    "        <div class=\"content-holder\">\n" +
    "            <div class=\"content intro-sec\">\n" +
    "                <div class=\"hero-wrap\">\n" +
    "                    <div class=\"media-container\" data-top-bottom=\"transform: translateY(300px);\" data-bottom-top=\"transform: translateY(-300px);\">\n" +
    "                        <div class=\"video-mask\"></div>\n" +
    "                        <div class=\"video-holder\">\n" +
    "                            <div class=\"background-vimeo\"> \n" +
    "                            <video src=\"/videos/video.mp4\" autoplay loop muted></video>\n" +
    "                            </div>\n" +
    "                            <div class=\"intro-mobile bg\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"overlay\"></div>\n" +
    "                    <div class=\"hero-wrap-item center-item\" style=\"top:25%;\">\n" +
    "                        <img class=\"intro-logo\" src=\"/images/intro logo.png\">\n" +
    "                        <div class='transition-content' style=\"text-transform: uppercase;\">\n" +
    "                          <div class='transition-visible'>\n" +
    "                            <p class=\"transition-p\">\n" +
    "                              Connecting\n" +
    "                            </p>\n" +
    "                            <ul class=\"transition-ul\">\n" +
    "                              <li class=\"transition-li\">creators!</li>\n" +
    "                              <li class=\"transition-li\">sponsors!</li>\n" +
    "                              <li class=\"transition-li\">viewers!</li>\n" +
    "                              <li class=\"transition-li\">communities!</li>\n" +
    "                            </ul>\n" +
    "                          </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"content\">\n" +
    "                <section id=\"sec1\">\n" +
    "                    <div class=\"sect-subtitle right-align-dec\" data-top-bottom=\"transform: translateY(200px);\" data-bottom-top=\"transform: translateY(-200px);\">\n" +
    "                        <span>01</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"container\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-4 col-md-pull-1\">\n" +
    "                              <div class=\"container service-graphic sg2\">\n" +
    "                                <div class=\"screen monitor\">\n" +
    "                                  <div class=\"content\">\n" +
    "                                    <div class=\"browser\">\n" +
    "                                      <ul class=\"btns\">\n" +
    "                                        <li></li>\n" +
    "                                        <li></li>\n" +
    "                                        <li></li>\n" +
    "                                      </ul>\n" +
    "                                      <div class=\"browser-content\">\n" +
    "                                        <ul class=\"txt\">\n" +
    "                                          <li></li>\n" +
    "                                          <li class=\"big\"></li>\n" +
    "                                          <li class=\"third\"></li>\n" +
    "                                          <li class=\"third\"></li>\n" +
    "                                          <li class=\"third\"></li>\n" +
    "                                          <li></li>\n" +
    "                                          <li></li>\n" +
    "                                          <li class=\"third\"></li>\n" +
    "                                          <li class=\"third\"></li>\n" +
    "                                          <li class=\"third\"></li>\n" +
    "                                          <li class=\"third\"></li>\n" +
    "                                          <li class=\"third\"></li>\n" +
    "                                          <li class=\"third\"></li>\n" +
    "                                          <li></li>\n" +
    "                                          <li class=\"big\"></li>\n" +
    "                                          <li class=\"third\"></li>\n" +
    "                                          <li class=\"third\"></li>\n" +
    "                                          <li class=\"third\"></li>\n" +
    "                                          <li class=\"third\"></li>\n" +
    "                                          <li class=\"third\"></li>\n" +
    "                                          <li class=\"third\"></li>\n" +
    "                                        </ul>\n" +
    "                                      </div>\n" +
    "                                    </div>\n" +
    "                                  </div>\n" +
    "                                  <div class=\"base\">\n" +
    "                                    <div class=\"grey-shadow\"></div>\n" +
    "                                    <div class=\"foot top\"></div>\n" +
    "                                    <div class=\"foot bottom\"></div>\n" +
    "                                  </div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"laptop\">\n" +
    "                                  <div class=\"screen\">\n" +
    "                                    <ul class=\"txt\">\n" +
    "                                      <li></li>\n" +
    "                                      <li class=\"big\"></li>\n" +
    "                                      <li class=\"third\"></li>\n" +
    "                                      <li class=\"third\"></li>\n" +
    "                                      <li class=\"third\"></li>\n" +
    "                                      <li></li>\n" +
    "                                      <li></li>\n" +
    "                                      <li class=\"third\"></li>\n" +
    "                                      <li class=\"third\"></li>\n" +
    "                                      <li class=\"third\"></li>\n" +
    "                                      <li class=\"third\"></li>\n" +
    "                                      <li class=\"third\"></li>\n" +
    "                                      <li class=\"third\"></li>\n" +
    "                                      <li></li>\n" +
    "                                      <li class=\"big\"></li>\n" +
    "                                      <li class=\"third\"></li>\n" +
    "                                      <li class=\"third\"></li>\n" +
    "                                      <li class=\"third\"></li>\n" +
    "                                      <li class=\"third\"></li>\n" +
    "                                      <li class=\"third\"></li>\n" +
    "                                      <li class=\"third\"></li>\n" +
    "                                    </ul>\n" +
    "                                  </div>\n" +
    "                                  <div class=\"btm\"></div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"phone\">\n" +
    "                                  <div class=\"screen\">\n" +
    "                                    <ul class=\"txt\">\n" +
    "                                      <li></li>\n" +
    "                                      <li></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li></li>\n" +
    "                                      <li></li>\n" +
    "                                      <li></li>\n" +
    "                                      <li></li>\n" +
    "                                      <li></li>\n" +
    "                                      <li></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li></li>\n" +
    "                                      <li></li>\n" +
    "                                    </ul>\n" +
    "                                  </div>\n" +
    "                                  <div class=\"shadow\"></div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"ipad\" style=\"z-index: 999;\">\n" +
    "                                  <div class=\"screen\">\n" +
    "                                    <ul class=\"txt\">\n" +
    "                                      <li></li>\n" +
    "                                      <li class=\"big\"></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li></li>\n" +
    "                                      <li></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li class=\"txt-half\"></li>\n" +
    "                                      <li></li>\n" +
    "                                    </ul>\n" +
    "                                  </div>\n" +
    "                                </div>\n" +
    "                              </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-8\">\n" +
    "                                <h2 class=\"section-title\">Say Hello to <strong style=\"color:#FE9A2E\"> bidio</strong></h2>\n" +
    "                                <p>Donec ac elementum metus. Nulla facilisi. Nulla gravida nec augue ac ornare. Phasellus posuere velit id mauris auctor, ac convallis ante rutrum. Suspendisse potenti. Maecenas laoreet id orci quis rutrum. In elementum risus at eros cursus bibendum.</p>\n" +
    "                                <p>Pellentesque fringilla scelerisque turpis a facilisis. Pellentesque sollicitudin, neque a dapibus condimentum, sem justo finibus dui, non dignissim augue mi in massa. Aenean in malesuada magna, a varius nisi. Donec pharetra porttitor elit, tristique facilisis mi ullamcorper vitae.</p>\n" +
    "                                <div class=\"process-box\">\n" +
    "                                    <h3>Let's Get Started</h3>\n" +
    "                                   <ul class=\"list-inline intro-social-buttons\" style=\"text-align: left;\">\n" +
    "                                      <li>\n" +
    "                                          <a href=\"/creators\" class=\"btn anim-button fl-l\"><i class=\"fa fa-long-arrow-left fa-fw\"></i> <span class=\"network-name\">Video Producers</span></a>\n" +
    "                                      </li>\n" +
    "                                      <li>\n" +
    "                                          <a href=\"/sponsors\" class=\"btn anim-button fl-l\"><span class=\"network-name\">Digital Marketers</span> <i class=\"fa fa-long-arrow-right fa-fw\"></i></a>\n" +
    "                                      </li>\n" +
    "                                    </ul>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </section>\n" +
    "            </div>\n" +
    "            <div class=\"content dark-bg\">\n" +
    "                <div class=\"sect-subtitle left-align-dec\" data-top-bottom=\"transform: translateY(-200px);\" data-bottom-top=\"transform: translateY(200px);\">\n" +
    "                    <span>02</span>\n" +
    "                </div>                    \n" +
    "                <div class=\"parallax-inner\">\n" +
    "                    <div class=\"bg\" data-bg=\"images/bg/1.jpg\" data-top-bottom=\"transform: translateY(300px);\" data-bottom-top=\"transform: translateY(-300px);\"></div>\n" +
    "                    <div class=\"overlay\"></div>\n" +
    "                </div>\n" +
    "                <section>\n" +
    "                    <div class=\"container\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-4\">\n" +
    "                                <h2 class=\"section-title\">The Numbers <strong> Don't Lie</strong></h2>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-8\">\n" +
    "                                <p>Pellentesque fringilla scelerisque turpis a facilisis. Pellentesque sollicitudin, neque a dapibus condimentum, sem justo finibus dui, non dignissim augue mi in massa. Aenean in malesuada magna, a varius nisi. Donec pharetra porttitor elit, tristique facilisis mi ullamcorper vitae.</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-4\"></div>\n" +
    "                            <div class=\"col-md-8\">\n" +
    "                                <div class=\"inline-facts-holder row\">\n" +
    "                                    <div class=\"inline-facts col-md-4 \">\n" +
    "                                        <div class=\"milestone-counter\">\n" +
    "                                            <div class=\"stats animaper\">\n" +
    "                                                <div class=\"num\" data-content=\"888\" data-num=\"888\">0</div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <h6>relevant stat</h6>\n" +
    "                                    </div>\n" +
    "                                    <!-- 3 -->\n" +
    "                                    <div class=\"inline-facts col-md-4\">\n" +
    "                                        <div class=\"milestone-counter\">\n" +
    "                                            <div class=\"stats animaper\">\n" +
    "                                                <div class=\"num\" data-content=\"88\" data-num=\"88\">0</div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <h6>relevant stat</h6>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"inline-facts col-md-4\">\n" +
    "                                        <div class=\"milestone-counter\">\n" +
    "                                            <div class=\"stats animaper\">\n" +
    "                                                <div class=\"num\" data-content=\"8\" data-num=\"8\">0</div>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <h6>relevant stat</h6>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </section>\n" +
    "            </div>      \n" +
    "            <div class=\"content\">\n" +
    "                <section>\n" +
    "                    <div class=\"sect-subtitle right-align-dec\" data-top-bottom=\"transform: translateY(200px);\" data-bottom-top=\"transform: translateY(-200px);\">\n" +
    "                        <span>03</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"container\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-12\">\n" +
    "                                <h2 class=\"section-title algn-right dec-title\"><span>featured  <strong  style=\"color:#FE9A2E\"> Contest</strong></span></h2>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-7\">\n" +
    "                                <div class=\"parallax-item left-direction\">\n" +
    "                                    <div class=\"paralax-media\">\n" +
    "                                        <ul class=\"creat-list\">\n" +
    "                                            <li><a href=\"#\">Animation</a></li>\n" +
    "                                            <li><a href=\"#\">Design</a></li>\n" +
    "                                            <li><a href=\"#\">Art</a></li>\n" +
    "                                        </ul>\n" +
    "                                        <div class=\"paralax-wrap\">\n" +
    "                                            <img src=\"images/folio/thumbs/1.jpg\" class=\"respimg\" alt=\"\">\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"parallax-deck\" data-top-bottom=\"transform: translateY(-200px);\" data-bottom-top=\"transform: translateY(200px);\">\n" +
    "                                        <div class=\"parallax-deck-item\">\n" +
    "                                            <h3>Sed ut perspiciatis <strong>unde this</strong></h3>\n" +
    "                                            <a href=\"portfolio-single.html\" class=\"btn anim-button fl-l\"><span>Watch Now</span><i class=\"fa fa-long-arrow-right\"></i></a>                                                                \n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-5\"></div>\n" +
    "                        </div>\n" +
    "                    <!--<div class=\"row\">\n" +
    "                            <div class=\"col-md-5\"></div>\n" +
    "                            <div class=\"col-md-7\">\n" +
    "                                <div class=\"parallax-item right-direction\">\n" +
    "                                    <div class=\"paralax-media\">\n" +
    "                                        <ul class=\"creat-list\">\n" +
    "                                            <li><a href=\"#\">Tutorials</a></li>\n" +
    "                                            <li><a href=\"#\">Code</a></li>\n" +
    "                                            <li><a href=\"#\">Technology</a></li>\n" +
    "                                        </ul>\n" +
    "                                        <div class=\"paralax-wrap\">  \n" +
    "                                            <img src=\"images/folio/thumbs/1.jpg\" class=\"respimg\" alt=\"\">\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"parallax-deck\" data-top-bottom=\"transform: translateY(-200px);\" data-bottom-top=\"transform: translateY(200px);\">\n" +
    "                                        <div class=\"parallax-deck-item\">\n" +
    "                                            <h3>Sed ut perspiciatis <strong>unde this</strong></h3>\n" +
    "                                            <a href=\"portfolio-single.html\" class=\"btn anim-button fl-l\"><span>Watch Now</span><i class=\"fa fa-long-arrow-right\"></i></a>                                                                \n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-md-7\">\n" +
    "                                <div class=\"parallax-item left-direction\">\n" +
    "                                    <div class=\"paralax-media\">\n" +
    "                                        <ul class=\"creat-list\">\n" +
    "                                            <li><a href=\"#\">Humor</a></li>\n" +
    "                                            <li><a href=\"#\">Stand-up</a></li>\n" +
    "                                            <li><a href=\"#\">NYC</a></li>\n" +
    "                                        </ul>\n" +
    "                                        <div class=\"paralax-wrap\"> \n" +
    "                                            <img src=\"images/folio/thumbs/1.jpg\" class=\"respimg\" alt=\"\">\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"parallax-deck\" data-top-bottom=\"transform: translateY(-200px);\" data-bottom-top=\"transform: translateY(200px);\">\n" +
    "                                        <div class=\"parallax-deck-item\">\n" +
    "                                            <h3>Sed ut perspiciatis <strong>unde this</strong></h3>\n" +
    "                                            <a href=\"portfolio-single.html\" class=\"btn anim-button fl-l\"><span>Watch Now</span><i class=\"fa fa-long-arrow-right\"></i></a>                                                                \n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-md-5\"></div>\n" +
    "                        </div>-->\n" +
    "                        <div class=\"custom-link-holder\">\n" +
    "                            <a href=\"portfolio.html\" class=\"btn anim-button\"  data-top-bottom=\"transform: translateY(-50px);\" data-bottom-top=\"transform: translateY(50px);\"><span>Learn More</span><i class=\"fa fa-long-arrow-right\"></i></a>   \n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </section>\n" +
    "            </div>\n" +
    "            <div class=\"height-emulator\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
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
    "                <label for=\"inputUsername3\" class=\"col-sm-2 control-label\"></label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"inputUsername3\" name=\"username\" placeholder=\"Username\" value=\"\">\n" +
    "\n" +
    "                <label for=\"inputPassword3\" class=\"col-sm-2 control-label\"></label>\n" +
    "                <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" name=\"password\" placeholder=\"Password\" value=\"\">\n" +
    "\n" +
    "                <button type=\"submit\" id=\"login-button\">Login</button>\n" +
    "            </form>\n" +
    "            <a href=\"/register\"><h3>Don't have an account?</h3></a>\n" +
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
    "          <!--<li><a class=\"bidio-nav\" href=\"/about\">About</a></li>-->\n" +
    "          <!--<li><a href=\"/contests\">Contests</a></li>\n" +
    "          <li><a href=\"/search\">Search</a></li>-->\n" +
    "          <li ng-show=\"currentUser\"><a href=\"/dashboard\">Dashboard</a></li>\n" +
    "          <li ng-show=\"currentUser\"><a href=\"/upload\">Upload</a></li>\n" +
    "          <li ng-show=\"currentUser\"><a href=\"/account\">Account</a></li>\n" +
    "          <li ng-show=\"currentUser\"><a href=\"/logout\">Signout</a></li>\n" +
    "          <li ng-show=\"!currentUser\"><a class=\"bidio-nav\" href=\"/creators\">Creators</a></li>\n" +
    "          <li ng-show=\"!currentUser\"><a class=\"bidio-nav\" href=\"/sponsors\">Sponsors</a></li>\n" +
    "          <li ng-show=\"!currentUser\"><a href=\"/login\">Login</a></li>\n" +
    "          <li ng-show=\"!currentUser\"><a href=\"/register\">Register</a></li>\n" +
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
    "                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\"></label>\n" +
    "                <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" name=\"email\" placeholder=\"Email\" value=\"\">\n" +
    "                <label for=\"inputUsername3\" class=\"col-sm-2 control-label\"></label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"inputUsername3\" name=\"username\" placeholder=\"Username\" value=\"\">\n" +
    "                <label for=\"inputPassword3\" class=\"col-sm-2 control-label\"></label>\n" +
    "                <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" name=\"password\" placeholder=\"Password\" value=\"\">\n" +
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
    "<div class=\"surface-container\" style=\"text-align:center;padding-top:50px\">\n" +
    "    <div class=\"row\">\n" +
    "    	<div class=\"col-md-12\" style=\"margin-top:5%;margin-bottom:75px\">\n" +
    "    		<h1>Perfectly Cost-Effective,<br>Crowdsourced Content Marketing</h1>\n" +
    "    	</div>\n" +
    "        <div class=\"col-sm-4 service-desc\">\n" +
    "            <img class=\"img-responsive img-center\" src=\"/images/business.png\" alt=\"\">\n" +
    "            <br><br>\n" +
    "            <h2>Sponsor Video Contests</h2>\n" +
    "            <p>Establish your maximum budget, CPC and creative parameters, then let our users produce videos for your consideration. If you choose to sponsor any entries, the original creator will receive incremental payments each time an audience member clicks through to your landing page.</p>\n" +
    "            <br><br>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4 service-desc\">\n" +
    "            <img class=\"img-responsive img-center\" src=\"/images/paint.png\" alt=\"\">\n" +
    "            <br><br>\n" +
    "            <h2>Customize Your Channel</h2>\n" +
    "            <p>Control the aesthetic of your sponsored content’s surroundings, and rest assured, your logo will follow it across platforms and devices. You can even produce and upload your own video to accompany your branded bidio channel and profile.</p>\n" +
    "            <br><br>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-4 service-desc\">\n" +
    "            <img class=\"img-responsive img-center\" src=\"/images/arrow.png\" alt=\"\">\n" +
    "            <br><br>\n" +
    "            <h2>Only Pay For Results</h2>\n" +
    "            <p>Using our unique pay-per-click model, your organization can confidently invest in user-generated content marketing. Giving up creative influence will help motivate creators and regain consumer trust online. Plus our dashboard makes it easier to measure performance and maximize ROI.</p>\n" +
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
    "<div style=\"margin-left:10%;margin-right:10%\">\n" +
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
    "\n" +
    "			<div id=\"upload-container\">\n" +
    "				<div style=\"width:100%;\" ngf-drop ngf-select=\"upload($file)\" ng-model=\"file\" class=\"drop-box\" ngf-drag-over-class=\"dragover\" ngf-allow-dir=\"true\">\n" +
    "					<div>Drag videos or click here to upload.</div>\n" +
    "					<div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>	\n" +
    "				</div>\n" +
    "			    Upload Progress:\n" +
    "				<div class=\"progress\">\n" +
    "					<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{pp}}%;\">\n" +
    "						{{pp}}%\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<button type=\"submit\">Upload Video</button>\n" +
    "		</form>\n" +
    "	\n" +
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
