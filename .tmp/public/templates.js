angular.module('templates-app', ['about/index.tpl.html', 'account/index.tpl.html', 'contest/index.tpl.html', 'contests/index.tpl.html', 'creators/index.tpl.html', 'dashboard/index.tpl.html', 'home/index.tpl.html', 'intro/index.tpl.html', 'login/index.tpl.html', 'nav/index.tpl.html', 'register/index.tpl.html', 'seach/index.tpl.html', 'sponsors/index.tpl.html', 'upload/index.tpl.html', 'video/index.tpl.html']);

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
    "\n" +
    "	<!--<h3>My Contests</h3>-->\n" +
    "	\n" +
    "	<form ng-submit=\"createContest(newContest)\">\n" +
    "		<p>title</p>\n" +
    "		<input type='text' ng-model=\"newContest.title\"></input>\n" +
    "		<p>contest Content</p>\n" +
    "		<input type='text' ng-model=\"newContest.contestContent\"></input>\n" +
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
    "<div class=\"surface-container home-pad\">\n" +
    "	<h1>creators</h1>\n" +
    "\n" +
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
    "</div>");
}]);

angular.module("dashboard/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dashboard/index.tpl.html",
    "<div class=\"surface-container home-pad\">\n" +
    "	<h1>Dashboard</h1>\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<div class=\"surface-container-home\">\n" +
    "    <div ng-include=\"'intro/index.tpl.html'\"></div>\n" +
    "    <div style=\"margin-left:10%\">\n" +
    "        <a href=\"/creators\">creators</a>\n" +
    "        <a href=\"/sponsors\">sponsors</a>\n" +
    "        <h3>join the creative revolution</h3>\n" +
    "        <h3>truly native content sponsorship</h3>\n" +
    "        <p>Our unique influencer marketing platform hosts content for creators who want to get support from sponsors without giving up creative control. Unlike other digital media networks and exchanges, we only take 8% of our users’ hard-earned advertising revenue.</p>\n" +
    "    	<p>Establish your maximum budget, CPC and creative parameters, then let our users produce videos for your consideration. If you choose to sponsor any entries, the original creator will receive incremental payments each time an audience member clicks through to your landing page.</p>\n" +
    "        <h2>Advertising Sponsors</h2>\n" +
    "        <p>Attach your brand to viral user-generated content, and simply pay per click</p>\n" +
    "        <h2>Content Creators</h2>\n" +
    "        <p>Earn 92 percent of advertising revenue generated by your media productions.</p>\n" +
    "        <h2>Web Surfers</h2>\n" +
    "        <p>Watch cool videos created by everyday bidio users, and share what you like</p>\n" +
    "        <h2>trending</h2>\n" +
    "        <div ng-repeat=\"video in trendingVideos\">\n" +
    "        	<a href=\"video/{{video.id}}\">{{video.title}}</a>\n" +
    "    	</div>\n" +
    "        <div style=\"height:800px;\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("intro/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("intro/index.tpl.html",
    "<!--<div class=\"intro-container\">\n" +
    "    <img src=\"/images/intro.jpg\" style=\"height:100%;width:100%;\">\n" +
    "</div>\n" +
    "<h1>connecting creators with sponsors</h1>-->\n" +
    "\n" +
    "<div class=\"intro\">\n" +
    "    <div class=\"intro-container\">\n" +
    "      <img class=\"intro-logo\" src=\"/images/intro logo.png\">\n" +
    "      <svg class=\"svg-defs\" viewBox=\"0 0 1920 1080\" viewPort=\"0 0 1920 1080\" preserveAspectRatio=\"xMidYMid slice\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "        <symbol id=\"intro-desktop-text\">\n" +
    "          <text text-anchor=\"middle\"\n" +
    "                x=\"960\"  \n" +
    "                y=\"570\"\n" +
    "                dy=\".35em\"\n" +
    "                class=\"medium-text\"\n" +
    "                >\n" +
    "            Connecting creators with sponsors. Get paid to create. \n" +
    "          </text>    \n" +
    "        </symbol>\n" +
    "        <mask id=\"intro-desktop-mask\"\n" +
    "              maskunits=\"userSpaceOnUse\"\n" +
    "              maskcontentunits=\"userSpaceOnUse\">\n" +
    "          <rect\n" +
    "                width=\"100%\"\n" +
    "                height=\"100%\"\n" +
    "                class=\"mask__shape\">\n" +
    "          </rect>\n" +
    "          <use xlink:href=\"#intro-desktop-text\"\n" +
    "               class=\"mask__text\"\n" +
    "               ></use>\n" +
    "          <use xlink:href=\"#intro-desktop-novo\" />\n" +
    "        </mask>\n" +
    "      </svg>\n" +
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
    "<!--login-->\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <h3>Login</h3>\n" +
    "        <form class=\"form-horizontal\" role=\"form\" action=\"/auth/local\" method=\"post\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputUsername3\" class=\"col-sm-2 control-label\">Username</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" id=\"inputUsername3\" name=\"identifier\" placeholder=\"Username\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" name=\"password\" placeholder=\"Password\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("nav/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("nav/index.tpl.html",
    "<style>\n" +
    "\n" +
    ".navbar-inverse{background-color:rgba(36,36,46,1);}\n" +
    "\n" +
    "</style>\n" +
    "\n" +
    "<div ng-controller=\"NavCtrl\">\n" +
    "    <div class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <a class=\"navbar-brand\" href=\"/\" style=\"color: #fff;letter-spacing: 1px\"><img src=\"/images/bidio_logo.png\" style=\"max-height:20px;float:left\">\n" +
    "            <span style=\"margin-left:10px\">bidio</span>\n" +
    "          </a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\">\n" +
    "          <ul class=\"nav navbar-nav pull-right\">\n" +
    "            <li><a class=\"bidio-nav\" href=\"/about\">About</a></li>\n" +
    "            <li><a class=\"bidio-nav\" href=\"/creators\">Creators</a></li>\n" +
    "            <li><a class=\"bidio-nav\" href=\"/sponsors\">Sponsors</a></li>\n" +
    "            <!--<li><a href=\"/contests\">Contests</a></li>\n" +
    "            <li><a href=\"/search\">Search</a></li>-->\n" +
    "            <li ng-show=\"currentUser\"><a href=\"/dashboard\">Dashboard</a></li>\n" +
    "            <li ng-show=\"currentUser\"><a href=\"/account\">Account</a></li>\n" +
    "            <li ng-show=\"currentUser\"><a href=\"/logout\">Signout</a></li>\n" +
    "            <li ng-show=\"!currentUser\"><a href=\"/login\">Login</a></li>\n" +
    "            <li ng-show=\"!currentUser\"><a href=\"/register\">Register</a></li>\n" +
    "          </ul>\n" +
    "        </div><!--/.nav-collapse -->\n" +
    "      </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("register/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("register/index.tpl.html",
    "<!--register-->\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "        <h3>Create an Account</h3>\n" +
    "        <form class=\"form-horizontal\" role=\"form\" action=\"/auth/local/register\" method=\"post\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputUsername3\" class=\"col-sm-2 control-label\">Username</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" id=\"inputUsername3\" name=\"username\" placeholder=\"Username\" value=\"\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" name=\"password\" placeholder=\"Password\" value=\"\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" name=\"email\" placeholder=\"Email\" value=\"\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"inputFirstName3\" class=\"col-sm-2 control-label\">First Name</label>\n" +
    "                <div class=\"col-sm-10\">\n" +
    "                    <input type=\"text\" class=\"form-control\" id=\"inputFirstName3\" name=\"first_name\" placeholder=\"First Name\" value=\"\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                    <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<a href=\"/login\">already have an account?</a>");
}]);

angular.module("seach/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("seach/index.tpl.html",
    "<div class=\"surface-container home-pad\">\n" +
    "	<h1>search</h1>\n" +
    "\n" +
    "</div>");
}]);

angular.module("sponsors/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sponsors/index.tpl.html",
    "<div class=\"surface-container home-pad\">\n" +
    "	<h1>sponsors</h1>\n" +
    "\n" +
    "	<h3>Sponsor Video Contests</h3>\n" +
    "	<p>Establish your maximum budget, CPC and creative parameters, then let our users produce videos for your consideration. If you choose to sponsor any entries, the original creator will receive incremental payments each time an audience member clicks through to your landing page.</p>\n" +
    "\n" +
    "	<h3>Customize Your Channel</h3>\n" +
    "	<p>Control the aesthetic of your sponsored content’s surroundings, and rest assured, your logo will follow it across platforms and devices. You can even produce and upload your own video to accompany your branded bidio channel and profile.</p>\n" +
    "\n" +
    "	<h3>Only Pay For Results</h3>\n" +
    "	<p>Using our unique pay-per-click model, your organization can confidently invest in user-generated content marketing. Giving up creative influence will help motivate creators and regain consumer trust online. Plus our dashboard makes it easier to measure performance and maximize ROI.</p>\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("upload/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("upload/index.tpl.html",
    "<div class=\"surface-container home-pad\">\n" +
    "	<div ng-show=\"!currentUser\">\n" +
    "		<a href=\"/login\">login</a> or <a href=\"/register\">register</a> to upload\n" +
    "	</div>\n" +
    "	<div ng-show=\"currentUser\">\n" +
    "		<h1>upload</h1>\n" +
    "		<p>video description</p>\n" +
    "		<form ng-submit=\"createVideo(newVideo)\">\n" +
    "			<p>Title</p>\n" +
    "			<input type=\"text\" ng-model=\"newVideo.title\"/>\n" +
    "			<p>Amazon URL</p>\n" +
    "			<input type=\"text\" ng-model=\"newVideo.amazonUrl\"/>\n" +
    "			<p>Description</p>\n" +
    "			<input type=\"text\" ng-model=\"newVideo.description\"/>\n" +
    "			<button type=\"submit\">Upload Video</button>\n" +
    "		</form>\n" +
    "	</div>\n" +
    "\n" +
    "\n" +
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
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("video/index.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("video/index.tpl.html",
    "<div class=\"surface-container home-pad\">\n" +
    "	<h1>{{video.title}}</h1>\n" +
    "  	<link href=\"http://vjs.zencdn.net/5.8.0/video-js.css\" rel=\"stylesheet\">\n" +
    "	<video class=\"video-js vjs-default-skin\" controls preload=\"auto\" width=\"640\" height=\"264\" poster=\"poster.jpg\" vjs-video>\n" +
    " 		<source src=\"videos/video.mp4\" type=\"video/mp4\">\n" +
    "	</video>\n" +
    "\n" +
    "	<p>{{video.description}}</p>\n" +
    "	<p>view count</p>\n" +
    "	\n" +
    "	{{video.title}}\n" +
    "\n" +
    "	<p>current sponsors</p>\n" +
    "	<p>current $bid/view</p>\n" +
    "	\n" +
    "\n" +
    "	\n" +
    "\n" +
    "</div>");
}]);
