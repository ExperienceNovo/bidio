angular.module('templates-app', ['admin/index.tpl.html', 'admin/templates/bids.tpl.html', 'admin/templates/contests.tpl.html', 'admin/templates/main.tpl.html', 'admin/templates/users.tpl.html', 'admin/templates/videos.tpl.html', 'blog/index.tpl.html', 'blogPost/index.tpl.html', 'campaign/index.tpl.html', 'campaign/templates/about.tpl.html', 'campaign/templates/main.tpl.html', 'campaign/templates/submitModal.tpl.html', 'campaigns/index.tpl.html', 'creators/index.tpl.html', 'dashboard/index.tpl.html', 'dashboard/templates/addBannerPhoto.tpl.html', 'dashboard/templates/addCampaignPhoto.tpl.html', 'dashboard/templates/addProfilePic.tpl.html', 'dashboard/templates/addVideo.tpl.html', 'dashboard/templates/analytics.tpl.html', 'dashboard/templates/campaign.tpl.html', 'dashboard/templates/campaigns.tpl.html', 'dashboard/templates/createCampaign.tpl.html', 'dashboard/templates/createVideo.tpl.html', 'dashboard/templates/home.tpl.html', 'dashboard/templates/importVideo.tpl.html', 'dashboard/templates/profile.tpl.html', 'dashboard/templates/profileEdit.tpl.html', 'dashboard/templates/video.tpl.html', 'dashboard/templates/videos.tpl.html', 'dashboard/templates/viewModal.tpl.html', 'discover/index.tpl.html', 'footer/index.tpl.html', 'forgot/index.tpl.html', 'forgot/success/index.tpl.html', 'home/index.tpl.html', 'login/index.tpl.html', 'market/index.tpl.html', 'market/templates/bid.tpl.html', 'markets/index.tpl.html', 'markets/templates/bid.tpl.html', 'member/index.tpl.html', 'nav/index.tpl.html', 'privacy/index.tpl.html', 'register/index.tpl.html', 'reset/index.tpl.html', 'reset/success/index.tpl.html', 'search/index.tpl.html', 'sponsors/index.tpl.html', 'token/index.tpl.html', 'token/paper.tpl.html', 'video/index.tpl.html', 'video/templates/bid.tpl.html', 'video/templates/shareDialog.tpl.html', 'videoEmbed/v/index.tpl.html']);

angular.module("admin/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("admin/index.tpl.html",
    "<div layout=\"row\">\n" +
    "	<md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"true\">\n" +
    "	  <md-toolbar class=\"md-primary md-hue-2\">\n" +
    "	    <h1 class=\"md-toolbar-tools\">Admin dashboard</h1>\n" +
    "	  </md-toolbar>\n" +
    "	  <md-content>\n" +
    "	    <md-list>\n" +
    "	    <md-list-item ui-sref-active=\"active\" class=\"menu-select md-3-line\" md-ink-ripple=\"#101010\">\n" +
    "	        <div class=\"md-list-item-text\" layout=\"column\">\n" +
    "	          <h3><a ui-sref=\"admin.main\"><i class=\"fa fa-home\"></i><span class=\"badge pull-right\"></span>&nbsp;Home</a></h3>\n" +
    "	        </div>\n" +
    "	      </md-list-item>\n" +
    "	      <md-divider ></md-divider>\n" +
    "	      <md-list-item ui-sref-active=\"active\" class=\"menu-select md-3-line\" md-ink-ripple=\"#101010\">\n" +
    "	        <div class=\"md-list-item-text\" layout=\"column\">\n" +
    "	          <h3><a ui-sref=\"admin.users\"><i class=\"fa fa-users\"></i><span class=\"badge pull-right\"></span>&nbsp;Users</a></h3>\n" +
    "	        </div>\n" +
    "	      </md-list-item>\n" +
    "	      <md-divider ></md-divider>\n" +
    "	      <md-list-item ui-sref-active=\"active\" class=\"menu-select md-3-line\" md-ink-ripple=\"#101010\">\n" +
    "	        <div class=\"md-list-item-text\" layout=\"column\">\n" +
    "	          <h3><a ui-sref=\"admin.videos\"><i class=\"fa fa-video-camera\"></i><span class=\"badge pull-right\"></span>&nbsp;Videos</a></h3>\n" +
    "	        </div>\n" +
    "	      </md-list-item>\n" +
    "	      <md-divider ></md-divider>\n" +
    "	      <md-list-item ui-sref-active=\"active\" class=\"menu-select md-3-line\" md-ink-ripple=\"#101010\">\n" +
    "	        <div class=\"md-list-item-text\" layout=\"column\">\n" +
    "	          <h3><a ui-sref=\"admin.campaigns\"><i class=\"fa fa-trophy\"></i><span class=\"badge pull-right\"></span>&nbsp;Campaigns</a></h3>\n" +
    "	        </div>\n" +
    "	      </md-list-item>\n" +
    "	      <md-divider ></md-divider>\n" +
    "	      <md-list-item ui-sref-active=\"active\" class=\"menu-select md-3-line\" md-ink-ripple=\"#101010\">\n" +
    "	        <div class=\"md-list-item-text\" layout=\"column\">\n" +
    "	          <h3><a ui-sref=\"admin.bids\"><i class=\"fa fa-dollar\"></i><span class=\"badge pull-right\"></span>&nbsp;Bids</a></h3>\n" +
    "	        </div>\n" +
    "	      </md-list-item>\n" +
    "	    </md-list>\n" +
    "	</md-sidenav>\n" +
    "\n" +
    "	<div class=\"admin-page-wrapper\" layout-fill>\n" +
    "		<div ui-view></div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("admin/templates/bids.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("admin/templates/bids.tpl.html",
    "<ol style=\"margin-bottom:0\" class=\"breadcrumb\">\n" +
    "	<li>\n" +
    "		<a href=\"/admin\">Admin Panel</a>\n" +
    "	</li>\n" +
    "	<li class=\"active\">Bids</li>\n" +
    "</ol>\n" +
    "\n" +
    "<div class=\"admin-content-wrapper\" layout-padding>\n" +
    "	<div class=\"admin-content\">\n" +
    "		<h1>Bids</h1>\n" +
    "		<div class=\"admin-panels\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-md-6 col-sm-6 margin-bottom-30\">\n" +
    "					<div class=\"panel panel-default\">\n" +
    "						<div class=\"panel-heading\">\n" +
    "							Data Visualization -- Phase 2\n" +
    "						</div>\n" +
    "						<canvas height=\"120\" id=\"admin-line-chart\" width=\"500\"></canvas>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("admin/templates/contests.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("admin/templates/contests.tpl.html",
    "<ol style=\"margin-bottom:0\" class=\"breadcrumb\">\n" +
    "	<li>\n" +
    "		<a href=\"/admin\">Admin Panel</a>\n" +
    "	</li>\n" +
    "	<li class=\"active\">Campaigns</li>\n" +
    "</ol>\n" +
    "\n" +
    "<div class=\"admin-content-wrapper\" layout-padding>\n" +
    "	<div class=\"admin-content\">\n" +
    "		<h1>Campaigns</h1>\n" +
    "		<div class=\"admin-panels\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-md-6 col-sm-6 margin-bottom-30\">\n" +
    "					<div class=\"panel panel-default\">\n" +
    "						<div class=\"panel-heading\">\n" +
    "							Data Visualization -- Phase 2\n" +
    "						</div>\n" +
    "						<canvas height=\"120\" id=\"admin-line-chart\" width=\"500\"></canvas>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("admin/templates/main.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("admin/templates/main.tpl.html",
    "<div class=\"admin-content-wrapper\" layout-padding>\n" +
    "	<div class=\"admin-content\">\n" +
    "		<h1>What are we putting here?! - TS</h1>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("admin/templates/users.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("admin/templates/users.tpl.html",
    "<ol style=\"margin-bottom:0\" class=\"breadcrumb\">\n" +
    "	<li>\n" +
    "		<a href=\"/admin\">Admin Panel</a>\n" +
    "	</li>\n" +
    "	<li class=\"active\">Users</li>\n" +
    "</ol>\n" +
    "\n" +
    "<div class=\"admin-content-wrapper\" layout-padding>\n" +
    "	<div class=\"admin-content\">\n" +
    "		<h1>Users</h1>\n" +
    "		<br><br>\n" +
    "\n" +
    "		<p style=\"text-align:center;\">\n" +
    "			<md-button ng-disabled=\"page == 0 || isLoading\" class=\"md-icon-button\" ng-click=\"pageDown()\"><md-icon>chevron_left</md-icon></md-button>\n" +
    "			Page&nbsp;{{page + 1}}&nbsp;<i class=\"fa fa-spinner fa-spin\" ng-show=\"isLoading\"></i>\n" +
    "			<md-button ng-disabled=\"isMax || isLoading\" class=\"md-icon-button\" ng-click=\"pageUp()\"><md-icon>chevron_right</md-icon></md-button>\n" +
    "		</p>\n" +
    "\n" +
    "		<md-list style=\"text-align:left\">\n" +
    "			<md-list-item layout=\"row\">\n" +
    "				<div flex=\"20\">ID</div>\n" +
    "				<div flex=\"30\">username</div>\n" +
    "				<div flex=\"30\">email</div>\n" +
    "				<div flex=\"10\">admin</div>\n" +
    "				<div flex=\"10\">delete</div>\n" +
    "			</md-list-item>\n" +
    "			<div ng-repeat=\"user in users\">\n" +
    "				<md-divider/>\n" +
    "				<md-list-item layout=\"row\">\n" +
    "					<div flex=\"20\">{{user.id}}</div>\n" +
    "					<div flex=\"30\">{{user.username}}</div>\n" +
    "					<div flex=\"30\">{{user.email}}</div>\n" +
    "					<div flex=\"10\"><md-switch ng-model=\"user.isAdmin\" ng-change=\"update(user)\" aria-label=\"admin\"/></div>\n" +
    "					<div flex=\"10\"><md-button class=\"md-icon-button\" ng-click=\"delete(user.id)\"><md-icon>delete</md-icon></md-button></div>\n" +
    "				</md-list-item>\n" +
    "			</div>\n" +
    "\n" +
    "		</md-list>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("admin/templates/videos.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("admin/templates/videos.tpl.html",
    "<ol style=\"margin-bottom:0\" class=\"breadcrumb\">\n" +
    "	<li>\n" +
    "		<a href=\"/admin\">Admin Panel</a>\n" +
    "	</li>\n" +
    "	<li class=\"active\">Videos</li>\n" +
    "</ol>\n" +
    "\n" +
    "<div class=\"admin-content-wrapper\" layout-padding>\n" +
    "	<div class=\"admin-content\">\n" +
    "		<h1>Videos</h1>\n" +
    "		<div class=\"admin-panels\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-md-6 col-sm-6 margin-bottom-30\">\n" +
    "					<div class=\"panel panel-default\">\n" +
    "						<div class=\"panel-heading\">\n" +
    "							Data Visualization -- Phase 2\n" +
    "						</div>\n" +
    "						<canvas height=\"120\" id=\"admin-line-chart\" width=\"500\"></canvas>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("blog/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("blog/index.tpl.html",
    "<div class=\"container blog-container\">\n" +
    "  <div class=\"spacing-50\"></div>\n" +
    "  <div class=\"blog-head\"><span class=\"bidio-orange\">Bidio</span> <b>Blog</b></div>\n" +
    "  <div class=\"spacing-25\"></div>\n" +
    "	<div ng-repeat=\"post in posts\">\n" +
    "    	<div class=\"spacing-5\"></div>\n" +
    "		<h2 class=\"posted-title\"><a href=\"blog/{{post.urlTitle}}\"><div ng-bind-html=\"renderHtml(post.title)\"></div></a></h2>\n" +
    "		<hr>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("blogPost/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("blogPost/index.tpl.html",
    "<div class=\"container blog-container\" style=\"height:100%;\">\n" +
    "	<div class=\"spacing-50\"></div>\n" +
    "	<h2 class=\"section-title\" style=\"text-align: left;\"><div ng-bind-html=\"renderHtml(post.title)\"></div><hr></h2>\n" +
    "    <br>\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div ng-bind-html=\"renderHtml(post.postContent)\"></div>\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("campaign/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("campaign/index.tpl.html",
    "<div ui-view style=\"height: 100%;\"></div>\n" +
    "");
}]);

angular.module("campaign/templates/about.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("campaign/templates/about.tpl.html",
    "<div class=\"spacing-15\"></div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<uib-tabset active=\"active\" class=\"campaign-tabs\" style=\"text-align:left\">\n" +
    "			<li ui-sref-active=\"active\">\n" +
    "				<a ui-sref=\"campaign.about({path: campaign.urlTitle})\">Campaign</a>\n" +
    "			</li>\n" +
    "			<li ui-sref-active=\"active\">\n" +
    "				<a ui-sref=\"campaign.main({path: campaign.urlTitle})\">Sponsor</a>\n" +
    "			</li>\n" +
    "		</uib-tabset>\n" +
    "	</div>\n" +
    "	<div class=\"campaignsTitleContainer row\">\n" +
    "		<h2 class=\"contentTitleLetters\">{{campaign.title}}</h2>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"row\" ng-show=\"campaign.videoUrl != '/videos/video.mp4'\">\n" +
    "		<div class=\"\">\n" +
    "			<video \n" +
    "				class=\"video-js vjs-default-skin\"\n" +
    "				controls preload=\"auto\" \n" +
    "				width=\"640\" \n" +
    "				height=\"264\" \n" +
    "				fluid=\"true\"\n" +
    "				vjs-video\n" +
    "				poster=\"{{campaign.thumbnailUrl}}\" \n" +
    "				vjs-media=\"campaign.media\"\n" +
    "				vjs-ratio=\"16:9\">\n" +
    "			</video>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"sponsoredByContainer col-md-4\">\n" +
    "			<h3 style=\"font-weight: 500;font-size: 25px;color: #555555;\">Sponsored By</h3>\n" +
    "			<div class=\"spacing-10\"></div>\n" +
    "			<a href=\"/member/{{campaign.user.username}}\"><img class=\"sponsorPicLarge\" src=\"{{campaign.user.profile.picture}}\"></a>\n" +
    "			<br>\n" +
    "			<a href=\"/member/{{campaign.user.username}}\"><h2>{{campaign.user.username}}<h2></a>\n" +
    "		</div>\n" +
    "		<div class=\"aboutTxt editCampaignContainer col-md-8\">\n" +
    "			<p>{{campaign.intro}}</p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<hr>\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-6\" style=\"text-align:left;\">\n" +
    "			<div class=\"campaign-submit\" style=\"margin-top:10px;\"><a class=\"btn anim-button fl-l\" ng-click=\"apply()\">Submit A Video</a></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\" ng-repeat=\"bid in campaign.bids\">\n" +
    "\n" +
    "			<!--\n" +
    "			<a ui-sref=\"video({id: video.id})\">\n" +
    "				<h2 class=\"discover-title\" style=\"text-align:left\">\n" +
    "					{{video.title}}\n" +
    "				</h2>\n" +
    "				<video \n" +
    "					class=\"video-js vjs-default-skin\"\n" +
    "					preload=\"true\" \n" +
    "					width=\"640\" \n" +
    "					height=\"264\" \n" +
    "					fluid=\"true\"\n" +
    "					poster=\"{{video.media.poster}}\"\n" +
    "					vjs-video\n" +
    "					vjs-media=\"video.media\"\n" +
    "					vjs-ratio=\"16:9\">\n" +
    "				</video>\n" +
    "			</a>\n" +
    "			-->\n" +
    "\n" +
    "			<h2 style=\"text-align:left;font-size: 2.5em;margin-bottom: 15px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;\"><a ui-sref=\"video({id: bid.video.id})\">{{bid.video.title}}</a></h2>\n" +
    "			<h3 style=\"text-align:left;\">by <b><a href=\"/member/{{bid.video.user.username}}\">{{bid.video.user.username}}</a></b></h3>\n" +
    "			<br>\n" +
    "			<video \n" +
    "				vjs-video\n" +
    "				vjs-media=\"bid.media\"\n" +
    "				class=\"video-js vjs-default-skin\"\n" +
    "				controls preload=\"auto\" \n" +
    "				width=\"640\" \n" +
    "				height=\"264\" \n" +
    "				fluid=\"true\"\n" +
    "				poster=\"{{bid.video.thumbnailUrl}}\" \n" +
    "				vjs-ratio=\"16:9\">\n" +
    "			</video>\n" +
    "			<a href=\"campaign/{{campaign.urlTitle}}\" ng-show=\"campaign.campaignImageUrl\" class=\"vid-clickthrough\"><img src=\"{{campaign.campaignImageUrl}}\"></a>\n" +
    "\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-25\"></div>");
}]);

angular.module("campaign/templates/main.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("campaign/templates/main.tpl.html",
    "<uib-tabset active=\"active\" class=\"campaign-tabs\">\n" +
    "	<li ui-sref-active=\"active\">\n" +
    "		<a ui-sref=\"campaign.about({path: campaign.urlTitle})\">Campaign</a>\n" +
    "	</li>\n" +
    "	<li ui-sref-active=\"active\">\n" +
    "		<a ui-sref=\"campaign.main({path: campaign.urlTitle})\">Sponsor</a>\n" +
    "	</li>\n" +
    "</uib-tabset>\n" +
    "<div ng-bind-html=\"campaignContent\"></div>");
}]);

angular.module("campaign/templates/submitModal.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("campaign/templates/submitModal.tpl.html",
    "<div class=\"container\" style=\"padding:50px;\">\n" +
    "	<div ng-hide=\"videoSelecting && !finished\" class=\"row\">\n" +
    "		<div ng-show=\"!currentUser\">\n" +
    "			<div class=\"login-popup\">\n" +
    "				<p class=\"text-center bidio-orange\"><b>You will need to log in to proceed.</b></p>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "				<div class=\"col-md-6\">\n" +
    "					<p>If you already have an account:</p>\n" +
    "					<p class=\"clearfix\"><a class=\"btn anim-button fl-l btn-default\" ng-click=\"cancel()\" ui-sref=\"login\">Login</a></p>\n" +
    "				</div>\n" +
    "				<div class=\"col-md-6\">\n" +
    "					<p>If you are new to bidio:</p>\n" +
    "					<p class=\"clearfix\"><a class=\"btn anim-button fl-l btn-default\" ng-click=\"cancel()\" ui-sref=\"register\">Register</a></p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div ng-show=\"currentUser && !finished\" style=\"display:inline-block;width:100%;\">\n" +
    "				\n" +
    "				<div class=\"col-xs-12\">\n" +
    "					<form class=\"text-left\" action=\"\" method=\"POST\" role=\"form\">\n" +
    "\n" +
    "						<legend class=\"text-center\"><h2>Post a video</h2></legend><br>\n" +
    "					\n" +
    "						<div class=\"form-group\">\n" +
    "							<input ng-model=\"video.title\" type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Title\">\n" +
    "						</div>\n" +
    "\n" +
    "						<div class=\"form-group\">\n" +
    "							<textarea ng-model=\"video.description\" name=\"description\" id=\"description\" class=\"form-control\" rows=\"3\" placeholder=\"Description\"></textarea>\n" +
    "						</div>\n" +
    "\n" +
    "						<div ng-hide=\"video.amazonUrl || videoLoading\" style=\"width:100%;\" ngf-accept=\"'video/*'\" ngf-drop ngf-select=\"upload($file)\" ng-model=\"file\" class=\"drop-box\" ngf-drag-over-class=\"dragover\" ngf-allow-dir=\"true\">\n" +
    "					    <div>Drag videos or click here to upload.</div>\n" +
    "					    <div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>  \n" +
    "					  </div>\n" +
    "\n" +
    "					  <p ng-show=\"videoLoading\" style=\"text-align:center\"><i class=\"fa fa-spin fa-spinner\"></i>&nbsp;{{pp}}%</p>\n" +
    "\n" +
    "					  <div ng-show=\"videoLoading\" class=\"progress\">\n" +
    "					    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{pp}}%;\">\n" +
    "					    </div>\n" +
    "					  </div>\n" +
    "\n" +
    "					  <div ng-show=\"error\">\n" +
    "					  	<p class=\"text-center\"><b>{{error}}</b></p>\n" +
    "					  </div>\n" +
    "\n" +
    "					  <div class=\"clearfix\" ng-show=\"video.amazonUrl\">\n" +
    "					  	<i ng-click=\"clear()\" class=\"delete-btn pull-left fa fa-times fa-2x\"></i>\n" +
    "					  	<p class=\"pull-right\"><b>{{fileName}}</b></p>\n" +
    "					  </div>\n" +
    "					  	<div class=\"container\">\n" +
    "					  		<div class=\"row\" style=\"text-align: right;\">\n" +
    "					  			<div style=\"display:inline-block;margin-bottom:15px;margin-top:25px;\">\n" +
    "						  			<a type=\"button\" class=\"btn anim-button fl-l\" ng-click=\"videoSelect()\">Select existing video</a>\n" +
    "						  		</div>\n" +
    "							</div>\n" +
    "							<div class=\"row\" style=\"text-align: right;\">\n" +
    "								<div style=\"display: inline-block;\">\n" +
    "									<a ng-disabled=\"videoLoading || loading || !video.amazonUrl\" ng-click=\"submit(video)\" type=\"button\" class=\"btn anim-button fl-l btn-primary\">\n" +
    "										Submit&nbsp;<i ng-show=\"loading\" class=\"fa fa-spin fa-spinner\"></i>\n" +
    "									</a>\n" +
    "									<a ng-click=\"cancel()\" type=\"button\" class=\"btn anim-button fl-l btn-primary\">Cancel</a>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</form>\n" +
    "\n" +
    "				</div>\n" +
    "		</div>\n" +
    "		<div ng-show=\"finished\">\n" +
    "			<div class=\"col-xs-12 col-sm-8 col-sm-push-2\" style=\"padding:50px 0\">\n" +
    "				<h2>Submission completed!</h2>\n" +
    "				<p>You will be notified when {{campaign.user.username}} decides to accept or decline your submission.</p>\n" +
    "				<a ng-click=\"cancel()\" type=\"button\" class=\"btn anim-button fl-l btn-primary\">Dismiss</a>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div ng-show=\"videoSelecting && !viewing && !finished\" class=\"row\">\n" +
    "		<div class=\"col-xs-12\">\n" +
    "\n" +
    "			<div class=\"clearfix\" style=\"padding-bottom:25px;\">\n" +
    "				<a class=\"btn anim-button fl-l pull-left\" ng-click=\"videoSelectToggle()\"><i class=\"fa fa-caret-left\"></i>&nbsp;Back</a>\n" +
    "				<a class=\"btn anim-button fl-l pull-right\" ng-click=\"submitPrev(selectedVideo.video)\" ng-disabled=\"!selectedVideo.video\">\n" +
    "					<span ng-show=\"prevLoading\"><i class=\"fa fa-spin fa-spinner\"></i>&nbsp;</span>\n" +
    "					<i class=\"fa fa-check\"></i>&nbsp;Submit\n" +
    "				</a>\n" +
    "			</div>\n" +
    "\n" +
    "			<table class=\"table\">\n" +
    "			  <thead>\n" +
    "			    <tr>\n" +
    "			      <th>Title</th>\n" +
    "			      <th>Description</th>\n" +
    "			      <th>View</th>\n" +
    "			      <th>Select</th>\n" +
    "			    </tr>\n" +
    "			  </thead>\n" +
    "			  <tbody>\n" +
    "			    <tr ng-repeat=\"video in videos\">\n" +
    "			      <td>{{video.title}}</th>\n" +
    "			      <td>{{video.description}}</td>\n" +
    "			      <td><i ng-click=\"view(video)\" class=\"fa fa-play\"></i></td>\n" +
    "			      <td><input ng-disabled=\"video.disabled\" ng-model=\"selectedVideo.video\" ng-value=\"video.id\" type=\"radio\"></td>\n" +
    "			    </tr>\n" +
    "			  </tbody>\n" +
    "			</table>\n" +
    "\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div ng-if=\"viewing\" class=\"row\">\n" +
    "		<div class=\"col-xs-12\">\n" +
    "			<h2>{{viewingVideo.title}}</h2>\n" +
    "		  <div class=\"video-container\">\n" +
    "		    <video \n" +
    "		      ng-src=\"{{viewingVideo.amazonUrl}}\"\n" +
    "		      class=\"video-js vjs-default-skin\"\n" +
    "		      controls preload=\"auto\" \n" +
    "		      width=\"640\" \n" +
    "		      height=\"264\" \n" +
    "		      fluid=\"true\"\n" +
    "		      poster=\"images/bidio_logo.png\" \n" +
    "		      vjs-video\n" +
    "		      vjs-media=\"media\"\n" +
    "		      vjs-setup=\"options\"\n" +
    "		      vjs-ratio=\"16:9\">\n" +
    "		    </video>\n" +
    "		    <p class=\"text-center\"><b>About</b></p>\n" +
    "		    <p>{{viewingVideo.description}}</p>\n" +
    "		    <a class=\"btn anim-button fl-l\" ng-click=\"dismissView()\"><i class=\"fa fa-caret-left\"></i>&nbsp;Back to videos</a>\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("campaigns/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("campaigns/index.tpl.html",
    "<div style=\"height: 100%;\">\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"col-md-6\">\n" +
    "	    	<h2 class=\"section-title dec-title\"><strong  style=\"color:#FE9A2E\">Campaigns</strong></h2>\n" +
    "		</div>\n" +
    "	    <div class=\"col-md-6\">\n" +
    "			<a ng-show=\"currentUser\" style=\"margin-top:10px;\" ui-sref=\"dashboard.campaigns\" class=\"text-center btn anim-button fl-l\"><span class=\"network-name\">Create Campaign</span><i class=\"fa fa-long-arrow-right fa-fw\"></i></a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "\n" +
    "	<div class=\"container\">			\n" +
    "		<div class=\"col-md-6\" ng-repeat=\"campaign in campaigns\" style=\"text-align:left;margin-bottom:50px;\">\n" +
    "			<h2 style=\"font-size:2em\">\n" +
    "				<a href=\"/campaign/{{campaign.urlTitle}}/about\">\n" +
    "					<img style=\"height:50px;max-width:100%\" ng-src=\"{{campaign.campaignImageUrl}}\">\n" +
    "					<span style=\"margin-left:15px\">{{campaign.title}}</span>	\n" +
    "				</a>\n" +
    "			</h2>	\n" +
    "			<br>\n" +
    "			<h3>Sponsored by <span style=\"font-weight: bold;\"><a href=\"/member/{{campaign.user.username}}\">{{campaign.user.username}}</a></span></h3>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>\n" +
    "<div class=\"spacing-25\"></div>\n" +
    "");
}]);

angular.module("creators/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("creators/index.tpl.html",
    "<input type=\"radio\" class=\"radio\" name=\"pages\" id=\"exit\" checked />\n" +
    "<div class=\"page\">\n" +
    "  <input type=\"radio\" class=\"radio\" name=\"pages\" id=\"page_1\" />\n" +
    "  <section class=\"section-container section-onesec-creators\">\n" +
    "    <label for=\"page_1\" class=\"page-label check-label\">\n" +
    "      <div class=\"home-content\">\n" +
    "        <h2>\n" +
    "            <!--Upload your videos and get <span class=\"boldio\">sponsored.</span>-->\n" +
    "            Upload original content and get <span class=\"boldio\">sponsored.</span>\n" +
    "        </h2>\n" +
    "      </div>\n" +
    "    </label>\n" +
    "    <div class=\"section-info\">\n" +
    "      <div class=\"section-content\">\n" +
    "        <label for=\"exit\" class=\"check-label exit-label\">\n" +
    "          X\n" +
    "        </label>\n" +
    "        <!--\n" +
    "        <p>\n" +
    "          Using Bidio, sponsors pay creators like you based on verified results. Our unique \"prize-per-click\" system helps brands design engaging campaigns, for which users submit content. These truly native advertisers have given up the notion of mind control. Modern digital marketers rely on the crowd to generate positive influence for products and services.\n" +
    "        </p>\n" +
    "        -->\n" +
    "        <p>\n" +
    "          Using Bidio, advertisers compete for exclusive logo placements in the corner of select videos. Our cost-effective bidding system helps brands design truly engaging campaigns, featuring quality user-generated content.\n" +
    "        </p>\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <input type=\"radio\" class=\"radio\" name=\"pages\" id=\"page_2\" />\n" +
    "  <section class=\"section-container section-twosec-creators\">\n" +
    "    <label for=\"page_2\" class=\"page-label check-label\">\n" +
    "      <div class=\"home-content\">\n" +
    "        <h2>\n" +
    "            <!--Earn a fair share of your sponsorship <span class=\"boldio\">revenue.</span>-->\n" +
    "            Get 100 percent of your <span class=\"boldio\">ad revenue.</span>\n" +
    "        </h2>\n" +
    "      </div>\n" +
    "    </label>\n" +
    "    <div class=\"section-info\">\n" +
    "      <div class=\"section-content\">\n" +
    "        <label for=\"exit\" class=\"check-label exit-label\">\n" +
    "              X\n" +
    "        </label>\n" +
    "        <p>\n" +
    "          What is your <span class=\"boldio\">monetization</span> strategy?\n" +
    "          <br><br>\n" +
    "          <!--At this point, it's common knowledge that both YouTube and Facebook take huge percentages of advertising revenue. We only take 8% of ad revenue. BIDIO doesn't believe providing a platform for creation warrants such astronomical fees. Get paid based on your traffic.-->\n" +
    "          How do you monetize original videos? Both YouTube and Facebook take 45 percent of publishers’ advertising revenue.\n" +
    "          <br><br>\n" +
    "          Bidio does not take a cut. It's as simple as that.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <input type=\"radio\" class=\"radio\" name=\"pages\" id=\"page_3\" />\n" +
    "  <section class=\"section-container section-threesec-creators\">\n" +
    "    <label for=\"page_3\" class=\"page-label check-label\">\n" +
    "      <div class=\"home-content\">\n" +
    "        <h2>\n" +
    "            Never worry about interrupting your <span class=\"boldio\">viewers.</span>\n" +
    "        </h2>\n" +
    "      </div>\n" +
    "    </label>\n" +
    "    <div class=\"section-info\">\n" +
    "      <div class=\"section-content\">\n" +
    "        <label for=\"exit\" class=\"check-label exit-label\">\n" +
    "              X\n" +
    "        </label>\n" +
    "        <!--\n" +
    "        <p>\n" +
    "          Sponsors simply upload their logos and indicate where they hope to redirect traffic. We’re focused on supporting authentic creators, while protecting consumer choice and privacy. We’ll never bother viewers by forcing impressions. That’s a promise!\n" +
    "        </p>\n" +
    "        -->\n" +
    "        <p>\n" +
    "          Our clickable ad overlays indicate sponsorship, while protecting consumer choice and privacy. Sponsors attach semi-transparent logo watermarks to select videos, linking to their campaign landing page. Bidio will never annoy viewers by forcing impressions or selling user data. That’s a promise!\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <input type=\"radio\" class=\"radio\" name=\"pages\" id=\"page_4\" />\n" +
    "  <section class=\"section-container section-foursec-creators\">\n" +
    "    <label for=\"page_4\" class=\"page-label check-label\">\n" +
    "      <div class=\"home-content\">\n" +
    "        <h2>\n" +
    "            <!--Maintain complete creative <span class=\"boldio\">control.</span>-->\n" +
    "            Maintain the <span class=\"boldio\">integrity</span> of your creative work.\n" +
    "        </h2>\n" +
    "      </div>\n" +
    "    </label>\n" +
    "    <div class=\"section-info\">\n" +
    "      <div class=\"section-content\">\n" +
    "        <label for=\"exit\" class=\"check-label exit-label\">\n" +
    "              X\n" +
    "        </label>\n" +
    "        <!--\n" +
    "        <p>\n" +
    "          Bidio protects authenticity, while helping creators monetize their content. Using our platform, brands can’t tell you what to make. We’re gamifying the discovery of viral videos by facilitating competition for sponsorship rights. Top bidders earn logo placement on endcards, which link to campaign landing pages.\n" +
    "        </p>\n" +
    "        -->\n" +
    "        <p>\n" +
    "          Bidio protects authenticity, while helping creators monetize their content. Using our platform, advertisers can support genuine storytellers without controlling their creative process.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dashboard/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/index.tpl.html",
    "<style>\n" +
    "	.dashboard-page-wrapper-mobile{display:none;}\n" +
    "	@media (max-width: 1080px) {\n" +
    "		.dashboard-page-wrapper{display:none;}\n" +
    "		.dashboard-page-wrapper-mobile{display:block;}\n" +
    "	}\n" +
    "	.dashboard-page-wrapper{\n" +
    "		min-height: 100%;\n" +
    "	}\n" +
    "	.dashboard-page-wrapper-mobile{\n" +
    "		min-height: 100%;\n" +
    "	}\n" +
    "	.video-footer {\n" +
    "		width: 100%;\n" +
    "		height: 150px;\n" +
    "		background: #101010;\n" +
    "		border-top: 5px solid #FE9A2E;\n" +
    "	}\n" +
    "</style>\n" +
    "\n" +
    "<!--mobile-->\n" +
    "<div class=\"dashboard-page-wrapper-mobile\">\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "	<ul class=\"nav nav-tabs\" style=\"width:100%;text-align:center;background:#fff\">\n" +
    "		<li ui-sref-active=\"active\" class=\"ng-scope active\" style=\"float:none;display:inline-block;\">\n" +
    "			<a ui-sref=\"dashboard.videos\" href=\"/dashboard/videos\">Content</a>\n" +
    "		</li>		\n" +
    "		<li ui-sref-active=\"active\" class=\"ng-scope\" style=\"float:none;display:inline-block;\">\n" +
    "			<a ui-sref=\"dashboard.profileMain\" href=\"/dashboard/profile\">Profile</a>\n" +
    "		</li>		\n" +
    "		<li ui-sref-active=\"active\" class=\"ng-scope\" style=\"float:none;display:inline-block;\">\n" +
    "			<a ui-sref=\"dashboard.campaigns\" href=\"/dashboard/campaigns\">Campaigns</a>\n" +
    "		</li>\n" +
    "		<li ui-sref-active=\"active\" class=\"ng-scope\" style=\"float:none;display:inline-block;\">\n" +
    "			<a ui-sref=\"dashboard.analytics\" href=\"/dashboard/analytics\">Analytics</a>\n" +
    "		</li>\n" +
    "	</ul>	\n" +
    "	<div class=\"dashboard-page-wrapper-mobile\" layout-fill>\n" +
    "		<div ui-view></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<!--desktop-->\n" +
    "<div layout=\"row\" class=\"dashboard-page-wrapper\" style=\"min-height:100vh\">\n" +
    "	<md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"true\" style=\"min-width: 200px;\">\n" +
    "	  <md-toolbar class=\"md-primary md-hue-2\">\n" +
    "	    <h1 style=\"color:white\" class=\"md-toolbar-tools bidio-orange\">Dashboard</h1>\n" +
    "	  </md-toolbar>\n" +
    "	  <md-content>\n" +
    "	    <md-list>\n" +
    "	      <md-list-item ui-sref-active=\"active\" class=\"menu-select md-3-line\" md-ink-ripple=\"#101010\" ng-click=\"changePath('/profile')\">\n" +
    "	        <div class=\"md-list-item-text\" layout=\"column\">\n" +
    "	          <h3><a ui-sref=\"dashboard.profileMain\"><span class=\"pull-left\">Profile</span><md-icon class=\"pull-right\">person</md-icon></a></h3>\n" +
    "	        </div>\n" +
    "	      </md-list-item>\n" +
    "	      <md-divider ></md-divider>\n" +
    "	      <md-list-item ui-sref-active=\"active\" class=\"menu-select md-3-line\" md-ink-ripple=\"#101010\" ng-click=\"changePath('/videos')\">\n" +
    "	        <div class=\"md-list-item-text\" layout=\"column\">\n" +
    "	          <h3><a ui-sref=\"dashboard.videos\"><span class=\"pull-left\">Content</span><md-icon class=\"pull-right\">videocam</md-icon></a></h3>\n" +
    "	        </div>\n" +
    "	      </md-list-item>\n" +
    "	      <md-divider ></md-divider>\n" +
    "	      <md-list-item ui-sref-active=\"active\" class=\"menu-select md-3-line\" md-ink-ripple=\"#101010\" ng-click=\"changePath('/campaigns')\">\n" +
    "	        <div class=\"md-list-item-text\" layout=\"column\">\n" +
    "	          <h3><a ui-sref=\"dashboard.campaigns\"><span class=\"pull-left\">Campaigns</span><md-icon class=\"pull-right\">trending_up</md-icon></a></h3>\n" +
    "	        </div>\n" +
    "	      </md-list-item>\n" +
    "	      <md-divider ></md-divider>\n" +
    "	      <md-list-item ui-sref-active=\"active\" class=\"menu-select md-3-line\" md-ink-ripple=\"#101010\" ng-click=\"changePath('/analytics')\">\n" +
    "	        <div class=\"md-list-item-text\" layout=\"column\">\n" +
    "	          <h3><a ui-sref=\"dashboard.analytics\"><span class=\"pull-left\">Analytics</span><md-icon class=\"pull-right\">insert_chart</md-icon></a></h3>\n" +
    "	        </div>\n" +
    "	      </md-list-item>\n" +
    "	    </md-list>\n" +
    "	</md-sidenav>\n" +
    "	<div class=\"dashboard-page-wrapper\" layout-fill>\n" +
    "		<div ui-view></div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("dashboard/templates/addBannerPhoto.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/templates/addBannerPhoto.tpl.html",
    "<md-content layout-padding style=\"width:500px\">\n" +
    "	<h3>Update photo</h3>\n" +
    "  <div ng-hide=\"bannerUrl\" style=\"width:100%;\" ngf-accept=\"'image/*'\" ngf-drop ngf-select=\"upload($file)\" ng-model=\"file\" class=\"drop-box\" ngf-drag-over-class=\"dragover\" ngf-allow-dir=\"true\">\n" +
    "    <div>Drag photos or click here to upload.</div>\n" +
    "    <div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>  \n" +
    "  </div>\n" +
    "  <p ng-show=\"photoLoading\" style=\"text-align:center\"><i class=\"fa fa-spin fa-spinner\"></i>&nbsp;{{pp}}%</p>\n" +
    "  <div ng-show=\"photoLoading\" class=\"progress\">\n" +
    "    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{pp}}%;\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng-show=\"error\">\n" +
    "    <p style=\"text-align:center;color:#ff664c;font-weight:700;\">{{error}}</p>\n" +
    "  </div>\n" +
    "  <md-button class=\"md-raised md-accent\" ng-disabled=\"!bannerUrl\" ng-click=\"submit(video)\">Submit</md-button>\n" +
    "  <md-button class=\"md-raised md-warn\" ng-click=\"cancel()\">Cancel</md-button>\n" +
    "</md-content>");
}]);

angular.module("dashboard/templates/addCampaignPhoto.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/templates/addCampaignPhoto.tpl.html",
    "<md-content layout-padding style=\"width:500px\">\n" +
    "	<h3>Update photo</h3>\n" +
    "  <div ng-hide=\"campaignImageUrl\" style=\"width:100%;\" ngf-accept=\"'image/*'\" ngf-drop ngf-select=\"upload($file)\" ng-model=\"file\" class=\"drop-box\" ngf-drag-over-class=\"dragover\" ngf-allow-dir=\"true\">\n" +
    "    <div>Drag photos or click here to upload.</div>\n" +
    "    <div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>  \n" +
    "  </div>\n" +
    "  <p ng-show=\"photoLoading\" style=\"text-align:center\"><i class=\"fa fa-spin fa-spinner\"></i>&nbsp;{{pp}}%</p>\n" +
    "  <div ng-show=\"photoLoading\" class=\"progress\">\n" +
    "    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{pp}}%;\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng-show=\"error\">\n" +
    "    <p style=\"text-align:center;color:#ff664c;font-weight:700;\">{{error}}</p>\n" +
    "  </div>\n" +
    "  <md-button class=\"md-raised md-accent\" ng-disabled=\"!campaignImageUrl\" ng-click=\"submit(video)\">Submit</md-button>\n" +
    "  <md-button class=\"md-raised md-warn\" ng-click=\"cancel()\">Cancel</md-button>\n" +
    "</md-content>");
}]);

angular.module("dashboard/templates/addProfilePic.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/templates/addProfilePic.tpl.html",
    "<md-content layout-padding style=\"width:500px\">\n" +
    "	<h3>Update profile pic</h3>\n" +
    "  <div ng-hide=\"profilePicUrl || photoLoading\" style=\"width:100%;\" ngf-accept=\"'image/*'\" ngf-drop ngf-select=\"upload($file)\" ng-model=\"file\" class=\"drop-box\" ngf-drag-over-class=\"dragover\" ngf-allow-dir=\"true\">\n" +
    "    <div>Drag photos or click here to upload.</div>\n" +
    "    <div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>  \n" +
    "  </div>\n" +
    "  <p ng-show=\"photoLoading\" style=\"text-align:center\"><i class=\"fa fa-spin fa-spinner\"></i>&nbsp;{{pp}}%</p>\n" +
    "  <div ng-show=\"photoLoading\" class=\"progress\">\n" +
    "    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{pp}}%;\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng-show=\"error\">\n" +
    "    <p style=\"text-align:center;color:#ff664c;font-weight:700;\">{{error}}</p>\n" +
    "  </div>\n" +
    "  <md-button class=\"md-raised md-accent\" ng-disabled=\"!profilePicUrl\" ng-click=\"submit()\">Submit</md-button>\n" +
    "  <md-button class=\"md-raised md-warn\" ng-click=\"cancel()\">Cancel</md-button>\n" +
    "</md-content>");
}]);

angular.module("dashboard/templates/addVideo.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/templates/addVideo.tpl.html",
    "<md-content ng-hide=\"videoSelecting\" layout-padding style=\"width:500px\">\n" +
    "  <h3>Update video</h3>\n" +
    "  <div ng-hide=\"videoUrl\" style=\"width:100%;\" ngf-accept=\"'video/*'\" ngf-drop ngf-select=\"upload($file)\" ng-model=\"file\" class=\"drop-box\" ngf-drag-over-class=\"dragover\" ngf-allow-dir=\"true\">\n" +
    "    <div>Drag videos or click here to upload.</div>\n" +
    "    <div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>  \n" +
    "  </div>\n" +
    "  <p class=\"text-center\"><b>Or</b></p>\n" +
    "  <md-button ng-click=\"videoSelect()\">Select existing video</md-button><br>\n" +
    "  <p ng-show=\"videoLoading\" style=\"text-align:center\"><i class=\"fa fa-spin fa-spinner\"></i>&nbsp;{{pp}}%</p>\n" +
    "  <div ng-show=\"videoLoading\" class=\"progress\">\n" +
    "    <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{pp}}%;\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div ng-show=\"error\">\n" +
    "    <p style=\"text-align:center;color:#ff664c;font-weight:700;\">{{error}}</p>\n" +
    "  </div>\n" +
    "  <md-button class=\"md-raised md-accent\" ng-disabled=\"!videoUrl\" ng-click=\"submit(video)\">Submit</md-button>\n" +
    "  <md-button class=\"md-raised md-warn\" ng-click=\"cancel()\">Cancel</md-button> \n" +
    "</md-content>\n" +
    "<md-content ng-show=\"videoSelecting && !viewing\" layout-padding style=\"width:500px;min-height:350px\">\n" +
    "  <md-button ng-click=\"videoSelectToggle()\"><md-icon>chevron_left</md-icon>Back to upload</md-button>\n" +
    "  <md-button ng-disabled=\"!videoUrl\" ng-click=\"submit()\"><md-icon>check</md-icon>Submit</md-button>\n" +
    "  <md-list>\n" +
    "    <md-list-item layout=\"row\">\n" +
    "      <div flex=\"20\"><p><b>Title</b></p></div>\n" +
    "      <div flex=\"50\"><p><b>Description</b></p></div>\n" +
    "      <div flex=\"15\"><p><b>View</b></p></div>\n" +
    "      <div flex=\"15\"><p><b>Select</b></p></div>\n" +
    "    </md-list-item>\n" +
    "    <md-radio-group ng-model=\"videoUrl\">\n" +
    "    <div ng-repeat=\"video in videos\">\n" +
    "      <md-divider></md-divider>\n" +
    "      <md-list-item class=\"md-no-proxy\" layout=\"row\">\n" +
    "        <div flex=\"20\"><p style=\"height:1.4em;overflow-y:hidden;\">{{video.title}}</p></div>\n" +
    "        <div flex=\"50\"><p style=\"height:1.4em;overflow-y:hidden;\">{{video.description}}</p></div>\n" +
    "        <div flex=\"15\">\n" +
    "          <md-button class=\"md-icon-button\" ng-click=\"view(video)\">\n" +
    "            <md-progress-circular ng-show=\"viewLoading\" md-mode=\"indeterminate\"></md-progress-circular>\n" +
    "            <md-icon ng-show=\"!viewLoading\">play_arrow</md-icon>\n" +
    "          </md-button>\n" +
    "        </div>\n" +
    "        <div flex=\"15\">\n" +
    "            <md-radio-button style=\"margin-bottom:0\" ng-value=\"video.amazonUrl\" aria-label=\"Select video\">\n" +
    "            </md-radio-button>\n" +
    "        </div>\n" +
    "      </md-list-item>\n" +
    "    </div>\n" +
    "    </md-radio-group>\n" +
    "  </md-list>\n" +
    "</md-content>\n" +
    "<md-content layout-padding style=\"width:500px;min-height:350px\" ng-if=\"viewing\">\n" +
    "  <h2>{{viewingVideo.title}}</h2>\n" +
    "  <div class=\"video-container\">\n" +
    "    <video \n" +
    "      ng-src=\"{{viewingVideo.amazonUrl}}\"\n" +
    "      class=\"video-js vjs-default-skin\"\n" +
    "      controls preload=\"auto\" \n" +
    "      width=\"640\" \n" +
    "      height=\"264\" \n" +
    "      fluid=\"true\"\n" +
    "      poster=\"images/bidio_logo.png\" \n" +
    "      vjs-video\n" +
    "      vjs-media=\"media\"\n" +
    "      vjs-setup=\"options\"\n" +
    "      vjs-ratio=\"16:9\">\n" +
    "    </video>\n" +
    "    <p class=\"text-center\"><b>About</b></p>\n" +
    "    <p>{{viewingVideo.description}}</p>\n" +
    "    <md-button ng-click=\"dismissView()\"><md-icon>chevron_left</md-icon>Back to videos</md-button>\n" +
    "  </div>\n" +
    "</md-content>");
}]);

angular.module("dashboard/templates/analytics.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/templates/analytics.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"spacing-25\"></div>\n" +
    "	<h2 style=\"margin:10px;font-weight:bold;text-align:left\">Analytics</h2>\n" +
    "</div>\n" +
    "<div class=\"spacing-15\"></div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-12\">\n" +
    "			<div id=\"campaign-graph-filter\" style=\"text-align:left\">\n" +
    "		        <md-datepicker ng-model=\"startDate\" md-placeholder=\"Start date\" md-min-date=\"startDateMin\" md-max-date=\"endDateMax\"></md-datepicker>\n" +
    "		        <md-datepicker ng-model=\"endDate\" md-placeholder=\"End date\" md-min-date=\"startDateMin\" md-max-date=\"endDateMax\"></md-datepicker>\n" +
    "		    </div>\n" +
    "		    <div class=\"spacing-15\"></div>\n" +
    "			<canvas id=\"line\" class=\"chart chart-line\" style=\"padding:15px\" chart-data=\"videoData\"\n" +
    "			    chart-labels=\"videoLabels\" chart-legend=\"true\" chart-series=\"videoSeries\"\n" +
    "			    chart-click=\"onClick\">\n" +
    "			</canvas> \n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-6\">\n" +
    "			<md-card>\n" +
    "				<md-card-content>\n" +
    "				  <p><b>Videos</b></p>\n" +
    "				  <div class=\"spacing-15\"></div>\n" +
    "				  <md-content layout=\"row\" layout-fill>\n" +
    "				  	<div flex=\"60\"><p><b>Name</b></p></div>\n" +
    "				  	<div flex=\"20\"><p><md-icon>remove_red_eye</md-icon></p></div>\n" +
    "				  	<div flex=\"20\"><p><md-icon>mouse</md-icon></p></div>\n" +
    "				  </md-content>\n" +
    "				  <md-divider></md-divider>\n" +
    "				  <md-content ng-repeat=\"video in videos\" layout=\"row\" layout-fill>\n" +
    "					<div flex=\"60\"><a href=\"dashboard/video/{{video.id}}\">{{video.title}}</a></div>\n" +
    "				  	<div flex=\"20\"><p>{{video.views.length}}</p></div>\n" +
    "				  	<div flex=\"20\"><p>{{video.clicks.length}}</p></div>\n" +
    "				  </md-content>\n" +
    "				</md-card-content>\n" +
    "			</md-card>\n" +
    "		</div>\n" +
    "		<div class=\"col-md-6\">\n" +
    "			<md-card>\n" +
    "				<md-card-content>\n" +
    "					<p><b>Active Campaigns</b></p>\n" +
    "					<div class=\"spacing-15\"></div>\n" +
    "					<md-content layout=\"row\" layout-fill>\n" +
    "				  	<div flex=\"60\"><p><b>Name</b></p></div>\n" +
    "				  	<div flex=\"20\"><p><md-icon>remove_red_eye</md-icon></p></div>\n" +
    "				  	<div flex=\"20\"><p><md-icon>mouse</md-icon></p></div>\n" +
    "				  </md-content>\n" +
    "				  <md-divider></md-divider>\n" +
    "				  <md-content ng-repeat=\"campaign in campaigns\" layout=\"row\" layout-fill>\n" +
    "					<div flex=\"60\"><a href=\"dashboard/campaign/{{campaign.id}}\">{{campaign.title}}</a></div>\n" +
    "				  	<div flex=\"20\"><p>0</p></div>\n" +
    "				  	<div flex=\"20\"><p>0</p></div>\n" +
    "				  </md-content>\n" +
    "				</md-card-content>\n" +
    "			</md-card>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<!--\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-md-12\">\n" +
    "			<md-card>\n" +
    "				<md-card-content>\n" +
    "					<p><b>Weekly Statistics</b></p>\n" +
    "					<div class=\"spacing-15\"></div>\n" +
    "					<p><b>Clicks</b><span class=\"pull-right\">12345</span></p>\n" +
    "					<md-divider></md-divider>\n" +
    "					<p><b>Click-Through Rate</b><span class=\"pull-right\">0.321</span></p>\n" +
    "					<md-divider></md-divider>\n" +
    "					<p><b>Expenditure</b><span class=\"pull-right\">5$</span></p>\n" +
    "					<md-divider></md-divider>\n" +
    "					<p><b>Top campaign</b></p>\n" +
    "				</md-card-content>\n" +
    "			</md-card>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<div class=\"row\">	\n" +
    "		<div class=\"col-md-12\">\n" +
    "			<md-card>\n" +
    "				<md-card-content>\n" +
    "					<p><b>Cumulative Statistics</b></p>\n" +
    "	    			<div class=\"spacing-15\"></div>\n" +
    "					<p><b>Views</b><span class=\"pull-right\">1234</span></p>\n" +
    "					<md-divider></md-divider>\n" +
    "					<p><b>Clicks</b><span class=\"pull-right\">431</span></p>\n" +
    "					<md-divider></md-divider>\n" +
    "					<p><b>Click-Through Rate</b><span class=\"pull-right\">5</span></p>\n" +
    "					<md-divider></md-divider>\n" +
    "					<p><b>Expenditure</b><span class=\"pull-right\">6</span></p>\n" +
    "					<md-divider></md-divider>\n" +
    "					<p><b>Campaigns</b><span class=\"pull-right\">8</span></p>\n" +
    "				</md-card-content>\n" +
    "			</md-card>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	-->\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "</div>");
}]);

angular.module("dashboard/templates/campaign.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/templates/campaign.tpl.html",
    "<style type=\"text/css\">\n" +
    "\n" +
    "	.edit-btn{\n" +
    "		position: absolute;\n" +
    "		left: 15px;\n" +
    "		opacity: 0;\n" +
    "		transition: opacity 0.3s;\n" +
    "	}\n" +
    "\n" +
    "	.edit-container:hover .edit-btn{\n" +
    "		opacity: 1.0;\n" +
    "	}\n" +
    "\n" +
    "	.edit-container{\n" +
    "		position: relative;\n" +
    "	}\n" +
    "\n" +
    "	.dash-title-sm{text-align:left;}\n" +
    "\n" +
    "</style>\n" +
    "<div class=\"container\">\n" +
    "	<md-content layout-padding>\n" +
    "		<div class=\"dashboard-title\">\n" +
    "\n" +
    "			<div ng-hide=\"editingTitle\" class=\"edit-container\">\n" +
    "	    		<div class=\"edit-btn\"><md-button  ng-click=\"editTitleToggle()\" class=\"md-fab md-mini\"><md-icon>edit</md-icon></md-button></div>\n" +
    "				<h2 style=\"font-weight: bold;text-align:left\"><a href=\"/campaign/{{campaign.urlTitle}}/about\">{{campaign.title}}</a></h2>\n" +
    "	    	</div>\n" +
    "\n" +
    "	    	<div ng-show=\"editingTitle\">\n" +
    "	    		<md-input-container layout-fill>\n" +
    "	    			<textarea aria-label=\"Edit Intro\" ng-model=\"campaign.title\" rows=\"5\" md-rows=\"5\"></textarea>\n" +
    "	    		</md-input-container>\n" +
    "	    		<md-progress-circular ng-show=\"infoSaving\" md-mode=\"indeterminate\"></md-progress-circular>\n" +
    "	    		<md-button ng-disabled=\"infoSaving\" ng-click=\"titleSave()\">Save</md-button>\n" +
    "	    		<md-button ng-disabled=\"infoSaving\" ng-click=\"titleUndo()\">Undo</md-button>\n" +
    "	    	</div>\n" +
    "\n" +
    "\n" +
    "		</div>\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "		<md-tabs md-dynamic-height md-border-bottom md-selected=\"selectedIndex\">\n" +
    "			<md-tab ng-if=\"campaign.published\" label=\"Overview\">\n" +
    "				<div class=\"spacing-25\"></div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-12\">\n" +
    "\n" +
    "				      <div id=\"campaign-graph-filter\" style=\"text-align:left\">\n" +
    "				        <h2 style=\"text-align:left\">Campaign Activity</h2>\n" +
    "				        <div class=\"spacing-15\"></div>\n" +
    "				        <md-datepicker ng-model=\"startDate\" md-placeholder=\"Start date\" md-min-date=\"startDate\" md-max-date=\"endDate\"></md-datepicker>\n" +
    "				        <md-datepicker ng-model=\"endDate\" md-placeholder=\"End date\" md-min-date=\"startDate\" md-max-date=\"endDate\"></md-datepicker>\n" +
    "				      </div>\n" +
    "\n" +
    "				      <div class=\"spacing-25\"></div>\n" +
    "				  		<canvas id=\"line\" class=\"chart chart-line\" style=\"padding:15px\" chart-data=\"data\"\n" +
    "						    chart-labels=\"labels\" chart-legend=\"true\" chart-series=\"series\"\n" +
    "						    chart-click=\"onClick\">\n" +
    "						</canvas>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"spacing-25\"></div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"spacing-25\"></div>\n" +
    "					<div class=\"col-md-6\" style=\"margin-top:25px\">\n" +
    "			  		<h2 style=\"font-weight:bold;color:#FAA93F;text-align:left;\">Finance</h2>\n" +
    "				  	<hr>\n" +
    "				  	<p><b>Price per click</b>&nbsp;${{ campaign.price | number: 2 }}</p>\n" +
    "				  	<p><b>Total clicks</b>&nbsp;{{ totalClicks }}</p>\n" +
    "						<p><b>Total payment</b>&nbsp;${{ totalClicks * campaign.price | number: 2 }}</p>\n" +
    "						<p ng-show=\"campaign.maxContributionPerVideo\"><b>Max Contribution per Video</b>&nbsp;${{ campaign.maxContributionPerVideo | number : 2 }}</p>\n" +
    "						<p ng-show=\"campaign.contributionGoal\"><b>Max Contribution per Video</b>&nbsp;${{ campaign.contributionGoal | number: 2 }}</p>\n" +
    "					</div>\n" +
    "					<div class=\"col-md-6\" style=\"margin-top:25px\">\n" +
    "				  	<h2 style=\"font-weight:bold;color:#FAA93F;text-align:left;\">Performance</h2>\n" +
    "						<hr>\n" +
    "						<p><b>Top video (by clicks)</b>&nbsp;{{ topClicks.title }}&nbsp;({{ topClicks.clickCount }} clicks)<br></p>\n" +
    "						<p><b>Top video (by views)</b>&nbsp;{{ topViews.title }}&nbsp;({{ topClicks.clickCount }} views)<br></p>\n" +
    "						<p><b>Top video (by conversion ratio)</b>&nbsp;{{ topConversion.title }}&nbsp;({{ (topConversion.clickCount / topConversion.viewCount) * 100 | number : 2 }}&nbsp;%)</p>\n" +
    "						<p><b>Total clicks</b>&nbsp;{{ totalClicks }}<br></p>\n" +
    "						<p><b>Total views</b>&nbsp;{{ totalViews }}<br></p>\n" +
    "						<p><b>Average conversion ratio</b>&nbsp;{{ (totalClicks / totalViews) * 100 | number : 2 }}&nbsp;%<br></p>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"spacing-25\"></div>\n" +
    "			</md-tab>\n" +
    "			<md-tab label=\"About\">\n" +
    "								\n" +
    "				<div class=\"spacing-25\"></div>\n" +
    "				<div class=\"row\">	\n" +
    "					<div class=\"col-md-6\">\n" +
    "				    	<p class=\"dash-title-sm\"><b>Campaign Image</b></p>\n" +
    "						<div class=\"edit-container\" style=\"text-align:left\">\n" +
    "							<div class=\"edit-btn\"><md-button ng-click=\"getCampaignImage()\" class=\"md-fab md-mini\"><md-icon>edit</md-icon></md-button></div>\n" +
    "							<img style=\"max-width:100%\" ng-src=\"{{campaign.campaignImageUrl}}\">\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col-md-6\" style=\"text-align:left\">\n" +
    "			    		<p class=\"dash-title-sm\"><b>Click-Through Prompt</b></p>\n" +
    "			    		<md-input-container layout-fill>\n" +
    "			    			<textarea aria-label=\"Campaign prompt\" rows=\"10\" ng-model=\"campaign.prompt\"></textarea>\n" +
    "			    		</md-input-container>\n" +
    "			    		<p class=\"dash-title-sm\"><b>Price per click</b></p>\n" +
    "						<md-input-container style=\"width:100%\">\n" +
    "							<md-icon>attach_money</md-icon>\n" +
    "							<input type=\"text\" ng-model=\"campaign.price\">\n" +
    "						</md-input-container>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"row\">	\n" +
    "					<div class=\"col-md-12\">\n" +
    "					    <p class=\"dash-title-sm\"><b>Campaign Options</b></p>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"row\">	\n" +
    "					<div class=\"col-md-4\" style=\"text-align:left\">\n" +
    "						<md-checkbox ng-model=\"setBudget\" aria-label=\"Set budget\">\n" +
    "							Set a Campaign Budget?\n" +
    "						</md-checkbox>\n" +
    "						<br>\n" +
    "						<md-input-container layout-fill>\n" +
    "							<md-icon>attach_money</md-icon>\n" +
    "							<input type=\"text\" ng-model=\"campaign.contributionGoal\" ng-disabled=\"!setBudget\" style=\"width:100%\">\n" +
    "						</md-input-container>\n" +
    "					</div>\n" +
    "					<div class=\"col-md-4\" style=\"text-align:left\">\n" +
    "						<md-checkbox ng-model=\"setVideoBudget\" aria-label=\"Set video budget\">\n" +
    "							Set a Per-Video Budget?\n" +
    "						</md-checkbox>\n" +
    "						<br>\n" +
    "						<md-input-container layout-fill>\n" +
    "							<md-icon>attach_money</md-icon>\n" +
    "							<input type=\"text\" ng-model=\"campaign.maxContributionPerVideo\" ng-disabled=\"!setVideoBudget\">\n" +
    "						</md-input-container>\n" +
    "					</div>\n" +
    "					<div class=\"col-md-4\" style=\"text-align:left\">\n" +
    "						<md-checkbox ng-model=\"setEndDate\" aria-label=\"Set end\">\n" +
    "							Set an End-Date?\n" +
    "						</md-checkbox>\n" +
    "						<br>\n" +
    "						<md-datepicker layout-fill ng-model=\"endDate\" ng-disabled=\"!setEndDate\" md-placeholder=\"End Date\"></md-datepicker>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"row\">	\n" +
    "					<div class=\"col-md-12\">\n" +
    "						<p class=\"dash-title-sm\"><b>Description</b></p>\n" +
    "			    		<md-input-container layout-fill>\n" +
    "			    			<textarea aria-label=\"Edit Intro\" ng-model=\"campaign.intro\" rows=\"5\" md-rows=\"5\"></textarea>\n" +
    "			    		</md-input-container>\n" +
    "					</div>	\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"row\">	\n" +
    "					<div class=\"col-md-6\">\n" +
    "				    	<p class=\"dash-title-sm\"><b>Campaign Video</b></p>\n" +
    "				    	<div class=\"video-container edit-container\" style=\"width:100%\">\n" +
    "				    		<div class=\"edit-btn\"><md-button  ng-click=\"getVideo()\" class=\"md-fab md-mini\"><md-icon>edit</md-icon></md-button></div>\n" +
    "							<video \n" +
    "								ng-src=\"{{campaign.videoUrl}}\"\n" +
    "								class=\"video-js vjs-default-skin\"\n" +
    "								controls preload=\"auto\" \n" +
    "								width=\"640\" \n" +
    "								height=\"264\" \n" +
    "								fluid=\"true\"\n" +
    "								poster=\"images/bidio_logo.png\" \n" +
    "								vjs-video\n" +
    "								vjs-media=\"media\"\n" +
    "								vjs-setup=\"options\"\n" +
    "								vjs-ratio=\"16:9\">\n" +
    "							</video>\n" +
    "						</div>\n" +
    "					</div>	\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"spacing-25\"></div>\n" +
    "\n" +
    "		      	<div class=\"row\" style=\"padding:15px\">\n" +
    "			        <div class=\"col-xs-12\" style=\"padding:0px\">\n" +
    "						<div class=\"editview\" style=\"padding:0px\">\n" +
    "							<a ng-click=\"saveCampaign()\" class=\"btn anim-button fl-l home-buttons\"><i class=\"fa fa-pencil\"></i> <span>Save</span></a>\n" +
    "						</div>          \n" +
    "			        </div>\n" +
    "			        <!--\n" +
    "			        <div class=\"col-xs-6\" style=\"padding:0px\">\n" +
    "						<div class=\"editview\" style=\"padding:0px\">\n" +
    "							<a ng-click=\"nextTab()\" class=\"btn anim-button fl-l home-buttons\"><i class=\"fa fa-eye\"></i> <span>Next Page</span></a>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					-->\n" +
    "      			</div>\n" +
    "\n" +
    "			</md-tab>\n" +
    "		    <md-tab label=\"Landing Page\">\n" +
    "\n" +
    "				<div class=\"spacing-25\"></div>\n" +
    "			  	<div class=\"row\">	\n" +
    "					<div class=\"col-md-12\">\n" +
    "				    	<div ng-show=\"!editingLanding\" class=\"edit-container\">\n" +
    "				    		<div class=\"edit-btn\"><md-button ng-click=\"editLandingToggle()\" class=\"md-fab md-mini\"><md-icon>edit</md-icon></md-button></div>\n" +
    "				    		<div ng-bind-html=\"campaignContent\"></div>\n" +
    "				    	</div>\n" +
    "				    	<div ng-show=\"editingLanding\">\n" +
    "\n" +
    "				    		<text-angular ta-unsafe-sanitizer ng-model=\"campaign.campaignContent\" ta-toolbar=\"[['h1','h2','h3', 'p'],['bold','italics','justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent', 'insertImage', 'html']]\" placeholder=\"Campaign Content\"></text-angular>\n" +
    "\n" +
    "				    	</div>\n" +
    "					</div>	\n" +
    "			    </div>\n" +
    "\n" +
    "				<div class=\"spacing-25\"></div>\n" +
    "\n" +
    "				<div class=\"row\">\n" +
    "			  		<div class=\"col-md-12\" style=\"text-align:left\">\n" +
    "			    		<md-input-container>\n" +
    "			    			<md-switch ng-model=\"campaign.doesRedirect\" aria-label=\"3rd party landing page switch\">\n" +
    "			    			  <h3 class=\"bidio-orange\" style=\"font-weight:bold;font-size:14px;\">Redirect to 3rd-Party Landing Page</h3>\n" +
    "			    			</md-switch>\n" +
    "			    		</md-input-container>\n" +
    "			    		<md-input-container layout-fill>\n" +
    "			    			<label>Redirect URL</label>\n" +
    "			    			<input ng-disabled=\"!campaign.doesRedirect\" type=\"text\" ng-model=\"campaign.redirectUrl\">\n" +
    "			    		</md-input-container>\n" +
    "			    	</div>    \n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"spacing-25\"></div>\n" +
    "\n" +
    "				<div class=\"row\" style=\"padding:15px;\">\n" +
    "			        <div class=\"col-xs-12\" style=\"padding:0px\">\n" +
    "						<div class=\"editview\" style=\"padding:0px\">\n" +
    "							<a ng-click=\"saveCampaign()\" class=\"btn anim-button fl-l home-buttons\"><i class=\"fa fa-pencil\"></i> <span>Save</span></a>\n" +
    "						</div>          \n" +
    "			        </div>\n" +
    "      			</div>\n" +
    "\n" +
    "\n" +
    "		  	</md-tab>\n" +
    "\n" +
    "\n" +
    "			<md-tab ng-if=\"campaign.published\" label=\"Videos\">\n" +
    "				<div class=\"spacing-25\"></div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-12\">\n" +
    "						<md-toolbar>\n" +
    "							<div class=\"md-toolbar-tools\">\n" +
    "								<md-button ng-disabled=\"refreshing\" class=\"md-icon-button\" ng-click=\"refresh()\">\n" +
    "									<md-icon ng-hide=\"refreshing\">refresh</md-icon><md-progress-circular md-mode=\"indeterminate\" ng-show=\"refreshing\"></md-progress-circular>\n" +
    "								</md-button>\n" +
    "								<md-input-container>\n" +
    "									<md-select aria-label=\"Submussion selector\" ng-model=\"selection.type\">\n" +
    "									  <md-option value=\"new\">New Bids</md-option>\n" +
    "									  <md-option value=\"approved\">Approved Bids</md-option>\n" +
    "									  <md-option value=\"unapproved\">Unapproved Bids</md-option>\n" +
    "									  <md-option value=\"old\">Old Bids</md-option>\n" +
    "									</md-select>\n" +
    "								</md-input-container>\n" +
    "							</div>\n" +
    "					  </md-toolbar>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "				<div class=\"row\">\n" +
    "					<div class=\"col-md-12\">\n" +
    "						<md-button ng-click=\"saveVideo()\" ng-disabled=\"clean == true || saving\">\n" +
    "					    	<md-icon>save</md-icon>\n" +
    "					    	&nbsp;Save\n" +
    "					    	<span ng-show=\"saving\">&nbsp;<i class=\"fa fa-spin fa-spinner\"></i></span>\n" +
    "					    </md-button>\n" +
    "\n" +
    "					    <md-button ng-click=\"undoVideo()\" ng-disabled=\"clean == true || saving\">\n" +
    "					    	<md-icon>undo</md-icon>\n" +
    "					    	&nbsp;Undo\n" +
    "					    </md-button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"spacing-25\"></div>\n" +
    "				<div class=\"container\">\n" +
    "					<div class=\"row\">\n" +
    "\n" +
    "\n" +
    "				    	<div class=\"dashboardVideos col-xs-12 col-sm-12 col-md-6 col-lg-6\" ng-repeat=\"bid in selectedBids\">\n" +
    "\n" +
    "							<div class=\"spacing-25\"></div>\n" +
    "					    	<a href=\"video/{{bid.video.id}}\">\n" +
    "								<h2 class=\"discover-title\" style=\"text-align:left\">\n" +
    "									{{bid.video.title}}\n" +
    "								</h2>\n" +
    "								<video \n" +
    "									class=\"video-js vjs-default-skin\"\n" +
    "									preload=\"true\" \n" +
    "									width=\"640\" \n" +
    "									height=\"264\" \n" +
    "									fluid=\"true\"\n" +
    "									poster=\"{{bid.video.media.poster}}\"\n" +
    "									vjs-video\n" +
    "									vjs-media=\"bid.video.media\"\n" +
    "									vjs-ratio=\"16:9\">\n" +
    "								</video>\n" +
    "							</a>\n" +
    "\n" +
    "					    	<h2 class=\"discover-title\" style=\"text-align:left\"><a href=\"#\">{{bid.video.user}}</a></h2>\n" +
    "							<!--{{bid.video.user.username}}-->\n" +
    "					    	<h2 class=\"discover-title\" style=\"text-align:left\">Approved? <md-checkbox style=\"display:inline-block;padding:5px;margin-left:5px\" ng-disabled=\"selection.type == 'old'\" ng-click=\"dirty(bid)\" ng-model=\"bid.isAccepted\" aria-label=\"Approved\"></md-checkbox></h2>\n" +
    "					      	<div class=\"spacing-15\"></div>\n" +
    "\n" +
    "					  	</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "					    <!--<div ng-repeat=\"bid in selectedBids\" style=\"font-size:18px;text-align: left;padding: 5px;\">\n" +
    "\n" +
    "					    	<div class=\"row\">\n" +
    "								<h3 style=\"font-weight: bold;\">Title</h3>\n" +
    "					    		{{bid.video.title}}\n" +
    "					    	</div>	\n" +
    "							<div class=\"spacing-15\"></div>\n" +
    "					    	<div class=\"row\">\n" +
    "								<h3 style=\"font-weight: bold;\">User</h3>\n" +
    "					    		{{bid.video.user}}\n" +
    "					    	</div>\n" +
    "					    	<div class=\"spacing-15\"></div>	    	\n" +
    "					    	<div class=\"row\">\n" +
    "									<h3 style=\"font-weight: bold;\">Description</h3>\n" +
    "									<p>{{bid.video.description}}</p>\n" +
    "					    	</div>\n" +
    "							<div class=\"spacing-15\"></div>\n" +
    "					    	<div class=\"row\">\n" +
    "									<h3 style=\"font-weight: bold;\">Play Video <md-button style=\"display:inline-block;padding:5px;font-size:18px;margin-left:0;\" ng-click=\"view($event, bid.video)\" class=\"md-icon-button\"><md-icon>play_arrow</md-icon></md-button>	</h3>		    	\n" +
    "								</div>		\n" +
    "								<div class=\"spacing-15\"></div>	    	\n" +
    "								<div class=\"row\">\n" +
    "									<h3 style=\"font-weight: bold;\">Approved? <md-checkbox style=\"display:inline-block;padding:5px;margin-left:5px\" ng-disabled=\"selection.type == 'old'\" ng-click=\"dirty(bid)\" ng-model=\"bid.isAccepted\" aria-label=\"Approved\"></md-checkbox></h3>\n" +
    "								</div>\n" +
    "								<md-divider></md-divider>\n" +
    "					    	<div class=\"spacing-25\"></div>\n" +
    "\n" +
    "					    </div>-->\n" +
    "\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</md-tab>\n" +
    "			<div class=\"spacing-25\"></div>\n" +
    "		  	<md-tab ng-if=\"!campaign.published\" label=\"Publish\">\n" +
    "		  		<div class=\"spacing-25\"></div>\n" +
    "				<md-content layout-padding>\n" +
    "					<md-button class=\"md-raised md-accent\" ng-click=\"publish()\">Publish Live Campaign?</md-button>\n" +
    "				</md-content>\n" +
    "			</md-tab>\n" +
    "	  	<div class=\"spacing-25\"></div>\n" +
    "		</md-tabs>\n" +
    "	</md-content>\n" +
    "</div>");
}]);

angular.module("dashboard/templates/campaigns.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/templates/campaigns.tpl.html",
    "<div class=\"spacing-15\"></div>\n" +
    "<div class=\"container\">		\n" +
    "	<ul class=\"list-inline intro-social-buttons\" style=\"position:relative;top:25px;text-align:left\">\n" +
    "		<li>\n" +
    "		 	<a class=\"btn anim-button fl-l home-buttons\" ng-click=\"addCampaign()\"><i class=\"fa fa-video-camera fa-fw\"></i> <span class=\"network-name\">Create Campaign</span></a>\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">			\n" +
    "	<div class=\"col-md-6\" ng-repeat=\"campaign in campaigns\" style=\"text-align:left;margin-bottom:50px;\">\n" +
    "		<h2 style=\"font-size:2em\">\n" +
    "			<a href=\"dashboard/campaign/{{campaign.id}}\">\n" +
    "				<img style=\"height:50px;max-width:100%\" ng-src=\"{{campaign.campaignImageUrl}}\">\n" +
    "				<span style=\"margin-left:15px\">{{campaign.title}}</span>	\n" +
    "			</a>\n" +
    "		</h2>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<!--<div ng-repeat=\"campaign in campaigns\" style=\"text-align:left;\">\n" +
    "	<div class=\"col-md-6\">	\n" +
    "			<div class=\"spacing-15\"></div>	\n" +
    "			<div class=\"col-xs-3\">	\n" +
    "				<img style=\"height:50px;\" src=\"{{campaign.campaignImageUrl}}\">\n" +
    "			</div>\n" +
    "			<div class=\"col-xs-9\">			\n" +
    "				<a ui-sref=\"dashboard.campaign({id: campaign.id})\" class=\"md-primary\"\n" +
    "				style=\"	width: 100%;\n" +
    "					    float: none;\n" +
    "					    display: block;\n" +
    "					    font-weight: bold;\n" +
    "					    font-size: 20px;\" \n" +
    "				>{{campaign.title}}</a>\n" +
    "				<div class=\"spacing-15\"></div>\n" +
    "			</div>\n" +
    "			<div class=\"spacing-15\"></div>	\n" +
    "		<hr>\n" +
    "	</div>\n" +
    "</div>-->\n" +
    "");
}]);

angular.module("dashboard/templates/createCampaign.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/templates/createCampaign.tpl.html",
    "<md-content layout-padding>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"container create-modal\">\n" +
    "        <h2 class=\"create-modal\">Create Campaign</h2>\n" +
    "        <hr>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <md-input-container style=\"width:100%\">\n" +
    "            <label class=\"modal-label\" flex=\"100\">Title</label>\n" +
    "            <input ng-model=\"campaign.title\" type=\"text\">\n" +
    "        </md-input-container>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div ng-show=\"error\">\n" +
    "            <p class=\"errorTxt\">{{error}}</p>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <md-button class=\"md-raised md-accent\" ng-click=\"submit(campaign)\">Submit</md-button>\n" +
    "        <md-button class=\"md-raised\" ng-click=\"cancel()\">Cancel</md-button>\n" +
    "        <div style=\"width:500px;max-width:100%\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "</md-content>");
}]);

angular.module("dashboard/templates/createVideo.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/templates/createVideo.tpl.html",
    "<md-content layout-padding>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"container create-modal\">\n" +
    "        <h2>Add Video</h2>\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <md-input-container layout-fill>\n" +
    "            <label>Title</label>\n" +
    "            <input ng-model=\"video.title\" type=\"text\">\n" +
    "        </md-input-container>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <md-input-container layout-fill>\n" +
    "            <label>Description</label>\n" +
    "            <textarea ng-model=\"video.description\" rows=\"4\"></textarea>\n" +
    "        </md-input-container>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div layout=\"row\">\n" +
    "            <div class=\"text-left\" flex=\"100\">\n" +
    "                <md-checkbox ng-model=\"setMinimum\" aria-label=\"Set budget\">\n" +
    "                    <label class=\"label-small\">Set a minimum price per click?</label>\n" +
    "                </md-checkbox>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div layout=\"row\">\n" +
    "            <div flex=\"100\">\n" +
    "                <md-input-container layout-fill>\n" +
    "                    <label class=\"label-small\">Minimum price per click</label> \n" +
    "                    <md-icon>attach_money</md-icon>\n" +
    "                    <input type=\"text\" ng-model=\"minimumPrice\" ng-disabled=\"!setMinimum\">\n" +
    "                </md-input-container>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div ng-hide=\"video.amazonUrl || videoLoading\" style=\"max-width: 100%;width: 500px;\" ngf-accept=\"'video/*,audio/*'\" ngf-drop ngf-select=\"upload($file)\" ng-model=\"file\" class=\"drop-box\" ngf-drag-over-class=\"dragover\" ngf-allow-dir=\"true\">\n" +
    "            <div>Drag videos or click here to upload.</div>\n" +
    "            <div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div>  \n" +
    "        </div>\n" +
    "\n" +
    "        <p ng-show=\"videoLoading\" style=\"text-align:center\"><i class=\"fa fa-spin fa-spinner\"></i>&nbsp;{{pp}}%</p>\n" +
    "        <div ng-show=\"videoLoading\" class=\"progress\">\n" +
    "            <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{pp}}%;\"></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"clearfix\" ng-show=\"video.amazonUrl\" id=\"videoUploadThumbnail\">\n" +
    "\n" +
    "\n" +
    "            <i ng-click=\"clear()\" class=\"delete-btn pull-left fa fa-times fa-2x\"></i>\n" +
    "            <p class=\"pull-left\"><b>{{fileName}}</b></p>\n" +
    "            <br><br>\n" +
    "            <!--<thumbnail file-type=\"video\" source=\"{{video.amazonUrl}}\" max-height=\"250\" max-width=\"250\"></thumbnail>-->\n" +
    "            <br>\n" +
    "\n" +
    "            <video \n" +
    "                class=\"video-js vjs-default-skin\"\n" +
    "                controls preload=\"auto\" \n" +
    "                width=\"640\" \n" +
    "                height=\"264\" \n" +
    "                fluid=\"true\"\n" +
    "                poster=\"{{video.media.poster}}\" \n" +
    "                vjs-media=\"media\"\n" +
    "                vjs-ratio=\"16:9\"\n" +
    "                vjs-video\n" +
    "                playsinline>\n" +
    "            </video>\n" +
    "            <md-button class=\"md-raised pull-left\" ng-click=\"captureThumbnail()\">select thumbnail</md-button>\n" +
    "            <canvas style=\"width:100%\" id=\"canvas\"></canvas>\n" +
    "            <!--<p>upload thumbnail..</p>-->\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div ng-show=\"error\">\n" +
    "            <p style=\"text-align:center;color:#ff664c;font-weight:700;\">{{error}}</p>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <md-button class=\"md-raised md-accent\" ng-disabled=\"!video.amazonUrl\" ng-click=\"submit(video)\">Submit</md-button>\n" +
    "        <md-button class=\"md-raised\" ng-click=\"cancel()\">Cancel</md-button>\n" +
    "        <div style=\"width:500px;max-width:100%\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "</md-content>");
}]);

angular.module("dashboard/templates/home.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/templates/home.tpl.html",
    "<div id=\"main-container\">\n" +
    "    <div class=\"surface-container home-pad\">\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "        <h2 class=\"section-title dec-title\" style=\"text-align: center;padding-bottom: 25px;\"><strong style=\"color:#FE9A2E\">Your Dashboard</strong></h2>\n" +
    "        <hr style=\"width: 170px;margin: 0 auto;margin-top: 25px;\">\n" +
    "        <h2 class=\"section-title dec-title\" style=\"text-align: center;padding-bottom: 25px;\"></h2>\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "            	<div class=\"col-md-4\">\n" +
    "	                <div class=\"metro-big metro-dash\">\n" +
    "	                    <a href=\"/dashboard/videos\" ui-sref=\"dashboard.videos\">\n" +
    "	                    	<i class=\"fa fa-credit-card logout-icon\"></i> <span class=\"logout\">Home</span>\n" +
    "	                    </a>\n" +
    "	                </div>\n" +
    "            	</div>\n" +
    "            	<div class=\"col-md-4\">\n" +
    "	                <div class=\"metro-big metro-dash\">\n" +
    "	                    <a href=\"/dashboard/analytics\" ui-sref=\"dashboard.analytics\">\n" +
    "	                    	<i class=\"fa fa-credit-card logout-icon\"></i> <span class=\"logout\">Earnings</span></a>\n" +
    "	                </div>\n" +
    "            	</div>\n" +
    "            	<div class=\"col-md-4\">\n" +
    "	                <div class=\"metro-big metro-dash\">\n" +
    "	                    <a href=\"/dashboard/videos\" ui-sref=\"dashboard.videos\">\n" +
    "		                    <i class=\"fa fa-play-circle-o logout-icon\"></i> <span class=\"logout\">Upload</span>\n" +
    "	                    </a>\n" +
    "	                </div>	\n" +
    "            	</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-75\"></div>\n" +
    "        <h2 class=\"section-title dec-title\" style=\"text-align: center;padding-bottom: 25px;\"><strong style=\"color:#FE9A2E\">Featured Campaign</strong></h2>\n" +
    "        <hr style=\"width: 170px;margin: 0 auto;margin-top: 25px;\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-25\"></div>\n" +
    "            <div class=\"clr\" id=\"content-slider\">\n" +
    "                <div class=\"wrap-slider clr\">\n" +
    "                    <input id=\"a-1\" name=\"a\" type=\"radio\">\n" +
    "                    <nav id=\"main-feat\">\n" +
    "                        <label class=\"first\" for=\"a-1\"></label>\n" +
    "                    </nav>\n" +
    "                    <nav id=\"control\">\n" +
    "                        <label for=\"a-1\"></label>\n" +
    "                    </nav>\n" +
    "                    <div class=\"slider\" ng-repeat=\"featuredCampaign in featuredCampaigns\">\n" +
    "                        <div class=\"inset\" style=\"padding:0!important\">\n" +
    "                            <figure>\n" +
    "                                <figcaption class=\"title-1\">\n" +
    "                                    <h1>{{featuredCampaign.title}}</h1><a href=\"/campaign/{{featuredCampaign.urlTitle}}\">read more...</a>\n" +
    "                                </figcaption><img alt=\"\" class=\"f\" id=\"i-1\" src=\"{{featuredCampaign.bannerUrl}}\">\n" +
    "                            </figure>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-75\"></div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("dashboard/templates/importVideo.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/templates/importVideo.tpl.html",
    "<md-content layout-padding>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"container create-modal\">\n" +
    "        <h2>Import Videos</h2><hr>\n" +
    " \n" +
    "        <p>Import your hard-earned production value and empower your creativity.</p>\n" +
    "        <p>You are not beholden to YouTube or any service provider.</p>\n" +
    "        <p>Imagine your video everywhere. Unleash your potential.</p>\n" +
    "        <p>Get paid for doing what you love. Make authentic sponsorship deals.</p>\n" +
    "        <br><br>\n" +
    "\n" +
    "        <md-button style=\"width:100%\" class=\"md-raised md-accent\" ng-click=\"youtube()\">Take command of your creative work</md-button>\n" +
    "        <p class=\"grey\">import from youtube</p>\n" +
    "\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <div ng-repeat=\"video in videos\">\n" +
    "          <h3 style=\"text-align:left\">{{video}}</h3>\n" +
    "          <md-switch ng-model=\"true\" aria-label=\"Switch 1\"></md-switch>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <md-button style=\"width:100%\" class=\"md-raised md-accent\" ng-disabled=\"!video.amazonUrl\" ng-click=\"submit(video)\">Submit</md-button>\n" +
    "        <md-button style=\"width:100%\" class=\"md-raised\" ng-click=\"cancel()\">Cancel</md-button>\n" +
    "        <div style=\"width:500px;max-width:100%\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "</md-content>");
}]);

angular.module("dashboard/templates/profile.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/templates/profile.tpl.html",
    "<div id=\"main-container\">\n" +
    "  <div style=\"min-height:500px\" layout=\"column\" layout-padding>\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"spacing-15\"></div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-6\" style=\"padding:0px\">\n" +
    "          <div class=\"editview\" style=\"padding:0px\">\n" +
    "            <a ui-sref=\"dashboard.profileEdit\" class=\"btn anim-button fl-l home-buttons\"><i class=\"fa fa-pencil\"></i> <span>Edit</span></a>\n" +
    "          </div>          \n" +
    "        </div>\n" +
    "        <div class=\"col-xs-6\" style=\"padding:0px\">\n" +
    "          <div class=\"editview\" style=\"padding:0px\">\n" +
    "            <a ui-sref=\"member({path: username})\" class=\"btn anim-button fl-l home-buttons\"><i class=\"fa fa-eye\"></i> <span>View</span></a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"spacing-15\"></div>\n" +
    "      <div class=\"bidio-profile\">\n" +
    "          <img align=\"left\" class=\"bidio-image-lg\" src=\"{{profile.bannerUrl}}\" alt=\"Profile Banner\"/>\n" +
    "      </div>\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "          <div style=\"text-align: left;\">\n" +
    "            <div class=\"bidio-image-profile\">\n" +
    "              <img style=\"max-width: 100%;padding:10px\" class=\"thumbnail\" src=\"{{profile.pictureUrl}}\" alt=\"Profile Pic\"/>  \n" +
    "            </div>\n" +
    "            <div class=\"prof-desc\">   \n" +
    "              <h2>{{user.username}}</h2>\n" +
    "              <hr>\n" +
    "              <div class=\"desc-inner\">\n" +
    "                <p ng-if=\"profile.firstName && profile.lastName\"><b>Name:</b></p> <p ng-if=\"profile.firstName\">{{profile.firstName}}</p> <p ng-if=\"profile.lastName\">{{profile.lastName}}</p>\n" +
    "                <br>\n" +
    "                <p ng-if=\"profile.companyName && profile.companyUrl\"><b>Company:</b> <a target=\"_blank\" href=\"{{profile.companyUrl}}\">{{profile.companyName}}</a></p>\n" +
    "                <br>\n" +
    "                <p>{{profile.description}}</p>\n" +
    "                <br>\n" +
    "                <p>${{user.creditSum | number: 2}}</p>\n" +
    "                <br>\n" +
    "                <p><b>wallet address:</b> {{user.walletAddress}}</p><br>\n" +
    "                <p><b>wallet secret:</b> <a href=\"#\">click</a></p><br>\n" +
    "                <p><b>cre8coin:</b> {{balance.cre8coinBalance/1000000000000000000}}</p><br>\n" +
    "                <p><b>viewToken:</b> {{balance.viewTokenBalance/1000}}</p>\n" +
    "                <br><br>\n" +
    "                <a ui-sref=\"dashboard.profileEdit\" class=\"btn anim-button fl-l home-buttons\"><i class=\"fa fa-usd\"></i> purchase coin</a>\n" +
    "              </div>\n" +
    "            </div>          \n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("dashboard/templates/profileEdit.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/templates/profileEdit.tpl.html",
    "<style type=\"text/css\">\n" +
    "	.edit-btn{\n" +
    "		position: absolute;\n" +
    "		left: 15px;\n" +
    "	}\n" +
    "	.edit-container{\n" +
    "		position: relative;\n" +
    "	}\n" +
    "</style>\n" +
    "<div id=\"main-container\">\n" +
    "	<div style=\"min-height:500px\" layout=\"column\" layout-padding>\n" +
    "		<div class=\"container\">\n" +
    "		  <div class=\"row\">\n" +
    "		    <div class=\"col-md-6\">\n" +
    "		      <div class=\"editview\">\n" +
    "		        <a ui-sref=\"dashboard.profileMain\" class=\"btn anim-button fl-l home-buttons\"><i class=\"fa fa-chevron-left\"></i> <span>Cancel</span></a>\n" +
    "		      </div>          \n" +
    "		    </div>\n" +
    "		    <div class=\"col-md-6\">\n" +
    "		      <div class=\"editview\">\n" +
    "		        <a ng-click=\"submit(profile)\" class=\"btn anim-button fl-l home-buttons\"><i class=\"fa fa-floppy-o\"></i> <span>Save Changes</span></a>\n" +
    "		      </div>\n" +
    "		    </div>\n" +
    "		  </div>\n" +
    "		  <div class=\"spacing-15\"></div>\n" +
    "		  <div class=\"bidio-profile\">\n" +
    "		  		<div class=\"edit-btn\"><md-button ng-click=\"addBannerPic($event)\" class=\"md-fab md-mini\"><md-icon>edit</md-icon></md-button></div>\n" +
    "		        <img align=\"left\" class=\"bidio-image-lg\" src=\"{{profile.bannerUrl}}\" alt=\"Profile Banner\"/>\n" +
    "		  </div>\n" +
    "		  <div class=\"row\">\n" +
    "		    <div class=\"col-xs-12\">\n" +
    "		      <div style=\"text-align: left;\">\n" +
    "		     	<div class=\"bidio-image-profile\">\n" +
    "		          	<div class=\"edit-btn\"><md-button ng-click=\"addProfilePic($event)\" class=\"md-fab md-mini\"><md-icon>edit</md-icon></md-button></div>\n" +
    "		            <img style=\"max-width: 100%;padding:10px\" class=\"thumbnail\" src=\"{{profile.pictureUrl}}\" alt=\"Profile Pic\"/>  \n" +
    "		    	</div>\n" +
    "		        <div class=\"prof-desc\">   \n" +
    "		          <div class=\"desc-inner\">\n" +
    "			  			  <md-input-container layout-fill>\n" +
    "		              	<p><b>First Name:</b></p> <input aria-label=\"Profile First Name\" type=\"text\" ng-model=\"profile.firstName\">\n" +
    "					  </md-input-container>\n" +
    "		              <br>\n" +
    "			  			  <md-input-container layout-fill>\n" +
    "		              	<p><b>Last Name:</b></p> <input aria-label=\"Profile Last Name\" type=\"text\" ng-model=\"profile.lastName\">\n" +
    "					  </md-input-container>\n" +
    "					  <br>\n" +
    "			  			  <md-input-container layout-fill>\n" +
    "		              	<p><b>Company:</b></p> <input aria-label=\"Profile Company Name\" type=\"text\" ng-model=\"profile.companyName\">\n" +
    "					  </md-input-container>\n" +
    "		              <br>\n" +
    "		  			  <md-input-container layout-fill>\n" +
    "				  		<p><b>Company URL:</b></p> <input aria-label=\"Profile Company Url\" type=\"text\" ng-model=\"profile.companyUrl\">\n" +
    "					  </md-input-container>\n" +
    "					  <br>\n" +
    "		  			  <md-input-container layout-fill>\n" +
    "				  		<p><b>Description</b></p>\n" +
    "				  		<br>\n" +
    "				  		<p style=\"width: 100%;\"><textarea aria-label=\"Profile Description\" rows=\"5\" ng-model=\"profile.description\" style=\"overflow-y:scroll;width: 100%;\"></textarea></p>\n" +
    "					  </md-input-container>\n" +
    "\n" +
    "\n" +
    "\n" +
    "						<div class=\"spacing-15\"></div>\n" +
    "				 		<p class=\"bidio-orange\"><b>Credit and Payment Info</b></p>\n" +
    "				 		<br>\n" +
    "				  		<p><b>{{user.creditSum | number: 2}} credits</b></p><br>\n" +
    "			      		<md-button class=\"btn anim-button fl-l home-buttons\" ng-click=\"toggleAddCredit()\"><i class=\"fa fa-long-arrow-right fa-fw\"></i>Add Credit</md-button>\n" +
    "			      		<md-button ng-show=\"user.creditSum > 0\" class=\"btn anim-button fl-l home-buttons\" ng-click=\"toggleCheckout()\"><i class=\"fa fa-long-arrow-right fa-fw\"></i>Cash Out</md-button>\n" +
    "			      		<!--toggle if user has credit-->\n" +
    "			      		<!--check if stripeId\"-->\n" +
    "\n" +
    "\n" +
    "\n" +
    "						<div class=\"spacing-25\"></div>\n" +
    "						<div ng-show=\"addCredit\">\n" +
    "							<form stripe:form=\"getToken\">\n" +
    "								<md-input-container>\n" +
    "					        		<p><b>Credit Card Number:</b></p> <input aria-label=\"Credit Card Number\" type=\"text\" data-stripe=\"number\">\n" +
    "								</md-input-container>\n" +
    "								<md-input-container>\n" +
    "					        		<p><b>CVC:</b></p> <input aria-label=\"CVC\" type=\"text\" data-stripe=\"cvc\">\n" +
    "								</md-input-container>\n" +
    "								<md-input-container>\n" +
    "					        		<p><b>Expiration Month</b></p> <input aria-label=\"Expiration Month\" type=\"text\" data-stripe=\"exp-month\">\n" +
    "								</md-input-container>\n" +
    "								<md-input-container>\n" +
    "					        		<p><b>Expiration Year</b></p> <input aria-label=\"Expiration Year\" type=\"text\" data-stripe=\"exp-year\">\n" +
    "								</md-input-container>\n" +
    "								<md-input-container>\n" +
    "					        		<p><b>Credit Amount</b></p> <input aria-label=\"Credit Amount\" type=\"text\" ng-model=\"newCredit.amount\">\n" +
    "								</md-input-container>\n" +
    "								<md-input-container>\n" +
    "							    	<md-button style=\"width:100%\" class=\"btn anim-button\" type=\"submit\">Submit</md-button>\n" +
    "								</md-input-container>\n" +
    "						    </form>\n" +
    "						    <p style=\"color:rgb(225,225,225)\">* Bidio takes 12% of your credit purchase.</p>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "						</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "						<div ng-show=\"checkOut\">\n" +
    "							<h1>checkout form</h1>\n" +
    "						</div>\n" +
    "						<div class=\"spacing-25\"></div>\n" +
    "\n" +
    "					    <!--<form action=\"#\"\n" +
    "					      name=\"cardForm\"\n" +
    "					      data-card\n" +
    "					      data-width=\"500\"\n" +
    "					      data-card-container=\"#card-container\"\n" +
    "					      data-placeholders=\"cardPlaceholders\"\n" +
    "					      data-options=\"cardOptions\"\n" +
    "					      data-messages=\"cardMessages\"\n" +
    "					      >\n" +
    "					      <div>\n" +
    "					          <input placeholder=\"Card number\" type=\"text\" name=\"CardNumber\" card-number data-ng-model=\"card.number\" />\n" +
    "\n" +
    "					          <input placeholder=\"Full name\" type=\"text\" name=\"CardName\" card-name data-ng-model=\"card.name\" />\n" +
    "					      </div>\n" +
    "					      <div>\n" +
    "					          <input placeholder=\"MM / YYYY\" type=\"text\" name=\"CardExpiry\" card-expiry data-ng-model=\"card.expiry\" />\n" +
    "\n" +
    "					          <input placeholder=\"CVC\" type=\"text\" name=\"CardCvc\" card-cvc data-ng-model=\"card.cvc\" />\n" +
    "					      </div>\n" +
    "					    </form>\n" +
    "					    <br><br>\n" +
    "					    <div id=\"card-container\"></div>-->\n" +
    "\n" +
    "				  		<p class=\"bidio-orange\"><b>Connect Social Accounts</b></p>\n" +
    "				  		<div class=\"spacing-15\"></div>\n" +
    "				  		<ul>\n" +
    "				  			<li style=\"display: inline-block;\">\n" +
    "								<!-- case 1: call to activate -->\n" +
    "								<md-button class=\"primary md-raised\" style=\"background-color:#3b5998;color: #fff;padding: 0 10px;\" ng-click=\"go('/auth/facebook')\" ng-if=\"!passportRegistered('facebook')\"><i class=\"fa fa-facebook\"></i> connect</md-button>\n" +
    "								<!-- case 2: activated, show profile and remove button -->\n" +
    "								<span ng-if=\"passportRegistered('facebook')\">\n" +
    "									<md-button class='primary md-raised' ng-click=\"removePassport('facebook')\" ng-disabled=\"hasSinglePassport()\">remove</md-button>\n" +
    "									<a href=\"{{user.socialAccounts.facebook.profileUrl}}\" style=\"\">\n" +
    "										<img style=\"border-radius:50%\" ng-src=\"{{user.socialAccounts.facebook.profilePic}}\">\n" +
    "										{{user.socialAccounts.facebook.displayName}}\n" +
    "									</a>\n" +
    "								</span>\n" +
    "				  			</li>\n" +
    "				  			<li style=\"display: inline-block;\">\n" +
    "								<!-- case 1: call to activate -->\n" +
    "								<md-button class=\"primary md-raised\" style=\"background-color:#dd4b39;color: #fff;padding: 0 10px;\" ng-click=\"go('/auth/google')\" ng-if=\"!passportRegistered('google')\"><i class=\"fa fa-google-plus\"></i> connect</md-button>\n" +
    "								<!-- case 2: activated, show profile and remove button -->\n" +
    "								<span ng-if=\"passportRegistered('google')\">\n" +
    "									<md-button class='primary md-raised' ng-click=\"removePassport('google')\" ng-disabled=\"hasSinglePassport()\">remove</md-button>\n" +
    "									<a href=\"{{user.socialAccounts.google.profileUrl}}\" style=\"\">\n" +
    "										<img style=\"border-radius:50%\" ng-src=\"{{user.socialAccounts.google.profilePic}}\">\n" +
    "										{{user.socialAccounts.google.displayName}}\n" +
    "									</a>\n" +
    "								</span>\n" +
    "				  			</li>\n" +
    "				  			<li style=\"display: inline-block;\">\n" +
    "								<!-- case 1: call to activate -->\n" +
    "								<md-button class=\"primary md-raised\" style=\"background-color:#55acee;color: #fff;padding: 0 10px;\" ng-click=\"go('/auth/twitter')\" ng-if=\"!passportRegistered('twitter')\"><i class=\"fa fa-twitter\"></i> connect</md-button>\n" +
    "								<!-- case 2: activated, show profile and remove button -->\n" +
    "								<span ng-if=\"passportRegistered('twitter')\">\n" +
    "									<md-button class='primary md-raised' ng-click=\"removePassport('twitter')\" ng-disabled=\"hasSinglePassport()\">remove</md-button>\n" +
    "									<a href=\"{{user.socialAccounts.twitter.profileUrl}}\" style=\"\">\n" +
    "										<img style=\"border-radius:50%\" ng-src=\"{{user.socialAccounts.twitter.profilePic}}\">\n" +
    "										{{user.socialAccounts.twitter.displayName}}\n" +
    "									</a>\n" +
    "								</span>\n" +
    "				  			</li>\n" +
    "				  		</ul>\n" +
    "		          </div>\n" +
    "		        </div>  \n" +
    "		      </div>\n" +
    "		    </div>\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("dashboard/templates/video.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/templates/video.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"spacing-15\"></div>\n" +
    "  <div class=\"\" style=\"text-align:left\">\n" +
    "    <h2><a ui-sref=\"video({id: video.id})\">{{video.title}}</a></h2>\n" +
    "  </div>\n" +
    "  <div class=\"spacing-15\"></div>\n" +
    "  <div style=\"\">\n" +
    "    <video \n" +
    "      class=\"video-js vjs-default-skin\"\n" +
    "      controls preload=\"auto\" \n" +
    "      width=\"640\" \n" +
    "      height=\"264\" \n" +
    "      fluid=\"true\"\n" +
    "      poster=\"{{video.media.poster}}\" \n" +
    "      vjs-media=\"media\"\n" +
    "      vjs-ratio=\"16:9\"\n" +
    "      vjs-video\n" +
    "      playsinline\n" +
    "      >\n" +
    "    </video>\n" +
    "    <!--<a ng-show=\"video.campaign.campaignImageUrl\" class=\"vid-clickthrough\" ng-click=\"clickThrough()\"><img src=\"{{video.campaign.campaignImageUrl}}\"></a>-->\n" +
    "  </div>\n" +
    "  <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "  <md-tabs md-dynamic-height md-border-bottom>\n" +
    "    <md-tab label=\"Overview\">\n" +
    "      <div class=\"spacing-15\"></div>\n" +
    "\n" +
    "      <div id=\"video-graph-filter\" style=\"text-align:left\">\n" +
    "        <h2>Performance</h2>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <md-datepicker ng-model=\"startDate\" md-placeholder=\"Start date\" md-min-date=\"startDateMin\" md-max-date=\"endDateMax\"></md-datepicker>\n" +
    "        <md-datepicker ng-model=\"endDate\" md-placeholder=\"End date\" md-min-date=\"startDateMin\" md-max-date=\"endDateMax\"></md-datepicker>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"spacing-25\"></div>\n" +
    "      <canvas id=\"line\" class=\"chart chart-line\" chart-data=\"videoData\"\n" +
    "            chart-labels=\"videoLabels\" chart-legend=\"true\" chart-series=\"videoSeries\"\n" +
    "            chart-click=\"onClick\">\n" +
    "      </canvas> \n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div class=\"col-md-6\" style=\"margin-top:25px\">\n" +
    "          <h2 style=\"font-weight:bold;color:#FAA93F;text-align:left;\">Finance</h2>\n" +
    "          <hr>\n" +
    "          <p><b>Campaign</b>: <a href=\"/campaign/{{video.campaign.urlTitle}}\">{{video.campaign.title}}</a></p>\n" +
    "          <p><b>Views</b>: {{video.viewCount}}</p>\n" +
    "          <p><b>Clicks</b>: {{video.clickCount}}</p>\n" +
    "          <p><b>Price per click</b>: ${{video.campaign.price | number: 2}}</p>\n" +
    "          <p><b>Total payment</b>: ${{video.clickCount * video.campaign.price | number: 2}}</p>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"col-md-6\" style=\"margin-top:25px\">\n" +
    "          <h2 style=\"font-weight:bold;color:#FAA93F;text-align:left;\">Performance</h2>\n" +
    "          <hr>\n" +
    "          <p><b>Average conversion ratio</b>: {{(video.clickCount / video.viewCount) * 100 | number : 2}}%<br></p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"spacing-25\"></div>\n" +
    "    </md-tab>\n" +
    "    <md-tab label=\"About\">\n" +
    "      <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "      <!--\n" +
    "      <div class=\"row\">    \n" +
    "        <div class=\"col-md-6\">\n" +
    "          <div ng-hide=\"editingInfo\" class=\"edit-container\" style=\"padding:30px;\">\n" +
    "            <p class=\"dash-title-sm\"><b>{{video.title}}</b></p>\n" +
    "            <p class=\"\" style=\"text-align:center\"><b>{{video.description}}</b></p>\n" +
    "            <md-button ng-click=\"editInfoToggle()\">Edit</md-button>\n" +
    "          </div>\n" +
    "          <div ng-show=\"editingInfo\">\n" +
    "            <md-input-container layout-fill>\n" +
    "              <input ng-model=\"video.title\" type=\"text\">\n" +
    "            </md-input-container>\n" +
    "            <md-input-container layout-fill>\n" +
    "              <textarea aria-label=\"Edit Description\" ng-model=\"video.description\" rows=\"5\" md-rows=\"5\"></textarea>\n" +
    "            </md-input-container>\n" +
    "            <md-progress-circular ng-show=\"infoSaving\" md-mode=\"indeterminate\"></md-progress-circular>\n" +
    "            <md-button ng-disabled=\"infoSaving\" ng-click=\"infoSave()\">Save</md-button>\n" +
    "            <md-button ng-disabled=\"infoSaving\" ng-click=\"infoUndo()\">Undo</md-button>\n" +
    "            <md-button ng-click=\"videoDelete()\">Delete</md-button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    -->\n" +
    "\n" +
    "\n" +
    "      <div class=\"row\"> \n" +
    "        <div class=\"col-md-12\">\n" +
    "          <p class=\"dash-title-sm\" style=\"text-align:left\"><b>Video Title</b></p>\n" +
    "            <md-input-container layout-fill>\n" +
    "              <textarea aria-label=\"Edit Title\" ng-model=\"video.title\" rows=\"5\" md-rows=\"5\"></textarea>\n" +
    "            </md-input-container>\n" +
    "        </div>  \n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"row\"> \n" +
    "        <div class=\"col-md-12\">\n" +
    "          <p class=\"dash-title-sm\" style=\"text-align:left\"><b>Video Description</b></p>\n" +
    "            <md-input-container layout-fill>\n" +
    "              <textarea aria-label=\"Edit Description\" ng-model=\"video.description\" rows=\"5\" md-rows=\"5\"></textarea>\n" +
    "            </md-input-container>\n" +
    "        </div>  \n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "      <div class=\"row\" style=\"padding:15px\">\n" +
    "        <div class=\"col-xs-10\" style=\"padding:0px\">\n" +
    "          <div class=\"editview\" style=\"padding:0px\">\n" +
    "            <a ng-click=\"infoSave()\" class=\"btn anim-button fl-l home-buttons\"><i class=\"fa fa-pencil\"></i> <span>Save Changes</span></a>\n" +
    "          </div>          \n" +
    "        </div>\n" +
    "        <div class=\"col-xs-2\" style=\"padding:0px\">\n" +
    "          <div class=\"editview\" style=\"padding:0px\">\n" +
    "            <a ng-click=\"videoDelete()\" class=\"btn anim-button fl-l home-buttons\"><i class=\"fa fa-trash\"></i> <span>Delete Video</span></a>\n" +
    "          </div>          \n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </md-tab>\n" +
    "\n" +
    "    <md-tab label=\"Bids\">\n" +
    "\n" +
    "      <h1>bids here</h1>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </md-tab>\n" +
    "\n" +
    "  </md-tabs>\n" +
    "</div>");
}]);

angular.module("dashboard/templates/videos.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/templates/videos.tpl.html",
    "<div class=\"spacing-15\"></div>\n" +
    "<div class=\"container\">\n" +
    "  <ul class=\"list-inline intro-social-buttons\" style=\"position:relative;top:25px;text-align:left\">\n" +
    "      <li>\n" +
    "          <a class=\"btn anim-button fl-l home-buttons\" ng-click=\"addVideo($event)\"><i class=\"fa fa-file-video-o fa-fw\"></i> <span class=\"network-name\">Upload</span></a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "          <a class=\"btn anim-button fl-l home-buttons\" ng-click=\"importVideo($event)\"><i class=\"fa fa-cloud-download fa-fw\"></i> <span class=\"network-name\">Import</span></a>\n" +
    "      </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"dashboardVideos col-xs-12 col-sm-12 col-md-6 col-lg-6\" ng-repeat=\"video in videos\" style=\"margin-top: 25px;margin-bottom:25px;\">\n" +
    "      <a href=\"dashboard/video/{{video.id}}\">\n" +
    "        <video \n" +
    "          class=\"video-js vjs-default-skin\"\n" +
    "          preload=\"true\" \n" +
    "          width=\"640\" \n" +
    "          height=\"264\" \n" +
    "          fluid=\"true\"\n" +
    "          poster=\"{{video.media.poster}}\"\n" +
    "          vjs-video\n" +
    "          vjs-media=\"video.media\"\n" +
    "          vjs-ratio=\"16:9\">\n" +
    "        </video>\n" +
    "        <h2 class=\"discover-title\" style=\"margin-top:10px; text-align:left;margin-bottom:5px;\">\n" +
    "          {{video.title}}\n" +
    "        </h2>\n" +
    "        <p style=\"padding-bottom:5px;line-height:0;font-size:12px;\"><b><a style=\"text-align:left\" href=\"member/{{video.user.username}}\">{{video.user.username}}</a></b></p>\n" +
    "        <p style=\"font-size:12px;color:grey\">{{video.viewCount}} views - <span am-time-ago=\"video.createdAt\"></span></p>\n" +
    "      </a>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"spacing-25\"></div>\n" +
    "");
}]);

angular.module("dashboard/templates/viewModal.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("dashboard/templates/viewModal.tpl.html",
    "<md-content layout-padding style=\"padding-top: 50px\">\n" +
    "\n" +
    "	<link href=\"http://vjs.zencdn.net/5.8.0/video-js.css\" rel=\"stylesheet\">\n" +
    "\n" +
    "	<div id=\"video-container\">\n" +
    "		<video style=\"display:inline-block;\" class=\"video-js vjs-default-skin\" src={{video.amazonUrl}} controls preload=\"none\" width=\"640\" height=\"264\" poster=\"poster.jpg\" vjs-video>\n" +
    "	  </video>\n" +
    "	</div>\n" +
    "\n" +
    "	<div id=\"video-details\" class=\"container\" style=\"padding-top:25px\"> \n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-xs-12\">\n" +
    "				<b>About</b>\n" +
    "				<p>{{video.description}}</p>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<md-checkbox ng-model=\"video.approved\" aria-label=\"Approved\">Approved</md-checkbox><br>\n" +
    "\n" +
    "	<md-button ng-click=\"dismiss()\">Dismiss</md-button>\n" +
    "\n" +
    "\n" +
    "\n" +
    "</md-content>");
}]);

angular.module("discover/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("discover/index.tpl.html",
    "<div style=\"height:100%\">\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"col-md-4\">\n" +
    "    		<h2 class=\"section-title dec-title\"><strong  style=\"color:#FE9A2E\">Discover</strong>\n" +
    "    	</div>\n" +
    "    	<div class=\"col-md-8\">\n" +
    "		    <div class=\"discover-search\">\n" +
    "		        <div class=\"input-group\">\n" +
    "					<input ng-keydown=\"$event.keyCode === 13 && keyPress(searchValue)\" class=\"search-query form-control\" ng-model=\"searchValue\" id=\"search-link\" size=\"40\" type=\"text\" placeholder=\"Search\">\n" +
    "		            <span class=\"input-group-btn\">\n" +
    "		                <button class=\"btn\" type=\"button\">\n" +
    "		                    <span class=\"fa fa-search\"></span>\n" +
    "		                </button>\n" +
    "		            </span>\n" +
    "		        </div>\n" +
    "		    </div>\n" +
    "    	</div>\n" +
    "    </div>\n" +
    "    <div style=\"margin-top: 25px;\" ng-show=\"videos.length == 0\">\n" +
    "    	<h2 style=\"text-align:center\">zero results</h2>\n" +
    "    		<div class=\"spacing-15\"></div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "    	<div class=\"row\">\n" +
    "			<div class=\"spacing-15\"></div>\n" +
    "	        <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\" ng-repeat=\"video in videos\" style=\"margin-top: 25px;\">\n" +
    "	            <div class=\"videoCard\">\n" +
    "	                <a ui-sref=\"video({id: video.id})\">\n" +
    "	                    <video\n" +
    "	                        class=\"video-js vjs-default-skin\"\n" +
    "	                        preload=\"true\"\n" +
    "	                        width=\"640\"\n" +
    "	                        height=\"264\"\n" +
    "	                        fluid=\"true\"\n" +
    "	                        poster=\"{{video.media.poster}}\"\n" +
    "	                        vjs-video\n" +
    "	                        vjs-media=\"video.media\"\n" +
    "	                        vjs-ratio=\"16:9\">\n" +
    "	                    </video>\n" +
    "	                    <h2 class=\"discover-title\" style=\"margin-top:10px;margin-left:10px; text-align:left;margin-bottom:5px;\">\n" +
    "	                        {{video.title}}\n" +
    "	                    </h2>\n" +
    "	                </a>\n" +
    "	                <p style=\"margin-left:10px;padding-bottom:5px;line-height:0;font-size:12px;\"><b><a style=\"text-align:left\" href=\"member/{{video.user.username}}\">{{video.user.username}}</a></b></p>\n" +
    "	                <p style=\"margin-left:10px;font-size:12px;color:grey\">{{video.viewCount}} views - <span am-time-ago=\"video.createdAt\"></span></p>\n" +
    "	                <!--<p ng-show=\"video.liveViewCount > 0\">{{video.liveViewCount}} live views</p>-->\n" +
    "	            </div>\n" +
    "	        </div>\n" +
    "    	</div>\n" +
    "		<div class=\"row\" ng-hide=\"videos.length == 0\">\n" +
    "        	<div class=\"spacing-15\"></div>\n" +
    "			<div class=\"col-xs-12\" ng-click=\"loadMore()\"><button class=\"btn-6 btn-full\" style=\"background:transparent;\">LOAD MORE</button></div>\n" +
    "			<!--<div class=\"btn btn-default col-xs-12\" ng-click=\"loadMore()\" ng-hide=\"videos.length < 50\">load more</div>-->\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"spacing-25\"></div>\n" +
    "</div>");
}]);

angular.module("footer/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("footer/index.tpl.html",
    "<style>\n" +
    "	.footer{\n" +
    "	    padding: 50px;\n" +
    "	    font-family: sans-serif;\n" +
    "	    right: 0;\n" +
    "	    bottom: 0;\n" +
    "	    left: 0;\n" +
    "	}\n" +
    "	.footer-left {\n" +
    "	    text-align: left;\n" +
    "	    padding: 10px;\n" +
    "	}\n" +
    "	.footer-right {\n" +
    "	    text-align: right;\n" +
    "	    padding: 10px;\n" +
    "	}\n" +
    "	.footer-right a{\n" +
    "	    text-align: right;\n" +
    "	    padding: 10px;\n" +
    "	    color: #fff!important;\n" +
    "    	font-weight: 700;\n" +
    "    	text-transform: uppercase;\n" +
    "	}\n" +
    "</style>\n" +
    "<div class=\"footer\" ng-controller=\"FooterCtrl\">\n" +
    "	<div class=\"container\">\n" +
    "		<div class=\"spacing-5\"></div>\n" +
    "		<div class=\"col-md-6 col-sm-6 col-xs-12\">\n" +
    "			<p class=\"footer-p\" style=\"margin:2% .8%;text-align:left\"><i class=\"fa fa-copyright\"></i> {{date | date:'yyyy'}} <a class=\"bidio-orange\" href=\"/\">bidio, inc</a></p>\n" +
    "		</div>\n" +
    "		<div class=\"footer-right col-md-6 col-sm-6 col-xs-12\">\n" +
    "			<a target=\"_blank\" href=\"/discover\">discover</a>\n" +
    "			<a target=\"_blank\" href=\"https://www.medium.com/bidio\">blog</a>\n" +
    "			<a target=\"_blank\" href=\"/privacy\">privacy</a>\n" +
    "			<a target=\"_blank\" href=\"https://www.twitter.com/cre8bidio\"><i class=\"fa fa-twitter\"></i></a>\n" +
    "			<!--<a href=\"https://www.facebook.com/cre8bidio\"><i class=\"fa fa-facebook\"></i></a>-->\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("forgot/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("forgot/index.tpl.html",
    "<div style=\"height:50px\"></div>\n" +
    "<div class=\"row\" style=\"text-align:center;\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <h2 class=\"section-heading\">Forgot your password?</h2>\n" +
    "        <div class=\"underbox-parent\">\n" +
    "            <div class=\"underbox-outter2\">\n" +
    "                <span class=\"underbox\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"alert alert-danger\" ng-if=\"globalErr\">{{ globalErr }}</div>\n" +
    "        <form action=\"/api/user/forgot\" id=\"msform\" method=\"post\" name=\"msform\" style=\"height:350px; margin-bottom:15px\" class=\"form ng-pristine ng-valid\">\n" +
    "            <fieldset style=\"height:300px; margin-top: 100px;\">\n" +
    "                <p style=\"text-align:center\">Let us know the email address for your account and we will send you instructions resetting your password (valid for one hour).</p>\n" +
    "                <input name=\"email\" placeholder=\"Email\" style=\"margin-top:2.5%\" type=\"text\">\n" +
    "                <button class=\"next action-button\" style=\"margin-top: 30px;\" type=\"submit\">Send</button>\n" +
    "            </fieldset>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("forgot/success/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("forgot/success/index.tpl.html",
    "<div class=\"row\" style=\"text-align:center;\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <h2 class=\"section-heading\" style=\"margin-top:200px\">Email has been sent</h2>\n" +
    "        <p style=\"text-align:center;\">check your email for further informations</p>\n" +
    "        <br>\n" +
    "        <div class=\"underbox-parent\">\n" +
    "            <div class=\"underbox-outter2\">\n" +
    "                <span class=\"underbox\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"alert alert-danger\" ng-if=\"globalErr\">{{ globalErr }}</div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("home/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("home/index.tpl.html",
    "<div class=\"content intro-sec\" ng-show=\"!currentUser\">\n" +
    "    <div class=\"hero-wrap\">\n" +
    "        <div style=\"background:black\" class=\"media-container\" data-bottom-top=\"transform: translateY(-300px);\" data-top-bottom=\"transform: translateY(300px);\">\n" +
    "            <div class=\"video-mask\"></div>\n" +
    "            <div class=\"video-holder\">\n" +
    "                <div class=\"background-vimeo\">\n" +
    "                    <!--https://vimeo.com/98732317-->\n" +
    "                    <!--https://vimeo.com/31976384-->\n" +
    "                    <!--https://vimeo.com/169725763-->\n" +
    "                    <video class=\"desktop-video\" style=\"max-width:100%\" autoplay=\"\" class=\"intro-video\" loop=\"\" muted=\"\" src=\"{{video}}\"></video>\n" +
    "                    <video class=\"mobile-video\" autoplay=\"\" class=\"intro-video\" loop=\"\" muted=\"\" src=\"{{video}}\"></video>\n" +
    "                </div>\n" +
    "                <!--reset.css/* max-width: 100%, @media only screen and (max-width: 1024px) intro.css: -->\n" +
    "                <!--<div class=\"intro-mobile bg\"></div>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"overlay\"></div>\n" +
    "        <div class=\"container\" style=\"min-height:80vh\">\n" +
    "            <div class=\"box on\" ng-animate=\"'box'\" ng-show=\"toggle\" style=\"padding-bottom:100px;\">\n" +
    "                <div class=\"mobile-intro\">\n" +
    "                    <section class=\"rw-wrapper\" style=\"margin-top:21vh\">\n" +
    "                        <h2 class=\"rw-sentence\" style=\"color:#fff;text-transform:uppercase\">Energy is the <span style=\"color:#FE9A2E\">Imaginary Now</span></h2>\n" +
    "                    </section>\n" +
    "                </div>\n" +
    "                <div class=\"spacing-25\"></div>\n" +
    "                <a href=\"#learn\" du-smooth-scroll><button class=\"btn-5 btn-intro\" style=\"background:transparent;\">Learn More</button></a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"content\" ng-show=\"!currentUser\"  id=\"learn\">\n" +
    "\n" +
    "    <div class=\"spacing-100\"></div> \n" +
    "\n" +
    "    <section style=\"padding:0px;\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-4\">\n" +
    "                  <!--<img style=\"height:200px\" src=\"images/bidio_logo.png\">-->\n" +
    "                  <div class=\"block\">\n" +
    "                    <div class=\"shape\">\n" +
    "                      <div class=\"cube outer\">\n" +
    "                        <div class=\"side-black left\"></div>\n" +
    "                        <div class=\"side-black right\"></div>\n" +
    "                        <div class=\"side-black top\"></div>\n" +
    "                        <div class=\"side-black bottom\"></div>\n" +
    "                        <div class=\"side-black front\"></div>\n" +
    "                        <div class=\"side-black back\"></div>\n" +
    "                        <div class=\"cube\">\n" +
    "                          <div class=\"side-black left\"></div>\n" +
    "                          <div class=\"side-black right\"></div>\n" +
    "                          <div class=\"side-black top\"></div>\n" +
    "                          <div class=\"side-black bottom\"></div>\n" +
    "                          <div class=\"side-black front\"></div>\n" +
    "                          <div class=\"side-black back\"></div>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                  </div>                  \n" +
    "                  <div class=\"spacing-50\"></div> \n" +
    "                </div>\n" +
    "                <div class=\"col-md-1\"></div>\n" +
    "                <div class=\"col-md-7 home-desc\">\n" +
    "                    <h2 class=\"section-title\">create the <strong style=\"color:#FE9A2E\">next wave</strong></h2>\n" +
    "                    <!--<h2 class=\"section-title\">Energy is the <strong style=\"color:#FE9A2E\">Imaginary Now</strong></h2>-->\n" +
    "\n" +
    "                    <p>Pay attention to watch and support original content. The decentralized cre8coin protocol empowers, and monetizes, creation and viewership<!--content consumption-->. Through Multidimensional Tokenization, attention generated by each channel and piece of unique content has market liquidity.</p>\n" +
    "                    <!--unique attention is a market liquid crypto-asset.-->\n" +
    "                    <!--Through Multidimensional Tokenization, attention generated by each channel and piece of unique content is a market liquid crypto-asset.</p>-->\n" +
    "                    <!--Through Multidimensional Tokenization, attention is a market liquid crypto-asset.-->\n" +
    "                    <!--Utilitizing Multidimensional Tokenization, attention generated by each channel and piece of unique content has market liqidity.</p>-->\n" +
    "\n" +
    "                    <!--is a market liquid crypto-asset-->\n" +
    "                    <!--is a tradable crypto assest with market liqidity.</p>-->\n" +
    "\n" +
    "                    <a target=\"_blank\" href=\"/register\"><button class=\"btn-6 btn-full\" style=\"background:transparent;\">Sign up!</button></a>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <div class=\"spacing-100\"></div> \n" +
    "\n" +
    "    <section style=\"padding:0px;background:black\">\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"spacing-50\"></div> \n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <h2 class=\"section-title\"><span style=\"color:#fff\">Support the </span> <strong style=\"color:#FE9A2E\">Creative Revolution</strong></h2>\n" +
    "                    <!--<h2 class=\"section-title\"><span style=\"color:#fff\">support the token sale</h2>-->\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-md-12\">\n" +
    "                    <a href=\"/token\"><button class=\"btn-5 btn-full\" style=\"background:transparent;\">TOKEN SALE</button></a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"spacing-50\"></div> \n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"content\">\n" +
    "    <section id=\"sec2\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div class=\"container\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-6\">\n" +
    "                    <h2 class=\"section-title algn-left dec-title\"><span><a href=\"/discover\">discover</a></span></h2>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-6\"><br>\n" +
    "                    <div class=\"dropdown sort-dropdown noselect\" style=\"text-align:right\">\n" +
    "                        <a class=\"dropdown-toggle noselect\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "                            <h2 class=\"noselect\" style=\"font-size:2.2em\">{{sortText[sort]}}<span class=\"caret\"></span></h2>\n" +
    "                        </a>\n" +
    "                        <ul class=\"dropdown-menu\" style=\"text-align:right\">\n" +
    "                            <li style=\"text-align:right\"><a class=\"sort-a\" ng-click=\"selectSort('trendingScore DESC')\"><h3>Trending</h3></a></li>\n" +
    "                            <hr class=\"sort-hr\">\n" +
    "                            <li style=\"text-align:right\"><a class=\"sort-a\" ng-click=\"selectSort('viewCount DESC')\"><h3>View Count</h3></a></li>\n" +
    "                            <hr class=\"sort-hr\">\n" +
    "                            <li style=\"text-align:right\"><a class=\"sort-a\" ng-click=\"selectSort('createdAt DESC')\"><h3>Date Created</h3></a></li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4\" ng-repeat=\"video in videos\" style=\"margin-top: 25px;\">\n" +
    "                    <div class=\"videoCard\">\n" +
    "                        <a ui-sref=\"video({id: video.id})\">\n" +
    "                            <video\n" +
    "                                class=\"video-js vjs-default-skin\"\n" +
    "                                preload=\"true\"\n" +
    "                                width=\"640\"\n" +
    "                                height=\"264\"\n" +
    "                                fluid=\"true\"\n" +
    "                                poster=\"{{video.media.poster}}\"\n" +
    "                                vjs-video\n" +
    "                                vjs-media=\"video.media\"\n" +
    "                                vjs-ratio=\"16:9\">\n" +
    "                            </video>\n" +
    "                            <h2 class=\"discover-title\" style=\"margin-top:10px;margin-left:10px; text-align:left;margin-bottom:5px;\">\n" +
    "                                {{video.title}}\n" +
    "                            </h2>\n" +
    "                        </a>\n" +
    "                        <p style=\"margin-left:10px;padding-bottom:5px;line-height:0;font-size:12px;\"><b><a style=\"text-align:left\" href=\"member/{{video.user.username}}\">{{video.user.username}}</a></b></p>\n" +
    "                        <p style=\"margin-left:10px;font-size:12px;color:grey\">{{video.viewCount}} views - <span am-time-ago=\"video.createdAt\"></span></p>\n" +
    "                        <!--<p ng-show=\"video.liveViewCount > 0\">{{video.liveViewCount}} live views</p>-->\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <div class=\"col-xs-12\" ng-click=\"loadMore()\"><button class=\"btn-6 btn-full\" style=\"background:transparent;\">LOAD MORE</button></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("login/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("login/index.tpl.html",
    "<div class=\"row\" style=\"height: 100vh;\">\n" +
    "    <div class=\"form-wrapper\">\n" +
    "        <div class=\"form-container\">\n" +
    "            <h2 style=\"font-weight: bold;\">Welcome Back!</h2>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <form class=\"form ng-pristine ng-valid\" role=\"form\" action=\"/auth/local\" method=\"post\" _lpchecked=\"1\">\n" +
    "                <label for=\"inputUsername3\" class=\"col-sm-2 control-label\"></label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"inputUsername3\" name=\"identifier\" placeholder=\"Username\">\n" +
    "\n" +
    "                <label for=\"inputPassword3\" class=\"col-sm-2 control-label\"></label>\n" +
    "                <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" name=\"password\" placeholder=\"Password\">\n" +
    "\n" +
    "                <button type=\"submit\" id=\"login-button\">Login</button>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <ul class=\"social-icons icon-rotate list-unstyled\" style=\"bottom:15px\">\n" +
    "                    <li style=\"display:inline-block;padding:10px;font-size:20px\">\n" +
    "                        <i ng-click=\"go('/auth/facebook')\" class=\"fa fa-facebook\"></i>\n" +
    "                    </li>\n" +
    "                    <li style=\"display:inline-block;padding:10px;font-size:20px\">\n" +
    "                        <i ng-click=\"go('/auth/google')\" class=\"fa fa-google-plus\"></i>\n" +
    "                    </li>\n" +
    "                    <li style=\"display:inline-block;padding:10px;font-size:20px\">\n" +
    "                        <i ng-click=\"go('/auth/twitter')\" class=\"fa fa-twitter\"></i>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </form>\n" +
    "            <a href=\"/register\" style=\"font-size:15px\"><h3>Don't have an account?</h3></a>\n" +
    "            <br>\n" +
    "            <a href=\"/forgot\" style=\"font-size:15px\"><h3>Forgot your password?</h3></a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "</div>");
}]);

angular.module("market/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("market/index.tpl.html",
    "<div class=\"container\" style=\"text-align:left\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <h1>{{stateParams.id}} market</h1>\n" +
    "        </div>\n" +
    "        <!--\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <div class=\"discover-search\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input class=\"search-query form-control\" ng-model=\"newLookup.tokenIdentifier\" id=\"search-link\" size=\"40\" type=\"text\" placeholder=\"Token\">\n" +
    "                    <span class=\"input-group-btn\">\n" +
    "                        <button class=\"btn\" type=\"button\" ng-click=\"tokenLookup()\">\n" +
    "                            <span class=\"fa fa-search\"></span>\n" +
    "                        </button>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        -->\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <h2 ng-click=\"bid()\">+ bid</h2>\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "    <table class=\"table table-striped table-hover\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th>member</th>\n" +
    "                <th>asset set 1</th>\n" +
    "                <th>asset set 2</th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"post in ['0x2b9b6e08595642F0D932287eebCE2C6efAbd6bFB',2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]\">\n" +
    "                <td><a href=\"member/admin\">member</a> {{post}}</td>\n" +
    "                <td>1 <a href=\"market/{{post}}\">token[{{post}}]</a></td>\n" +
    "                <td>{{(1/post).toFixed(2)}} <a href=\"market/cre8\">cre8coin</a></td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</div>");
}]);

angular.module("market/templates/bid.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("market/templates/bid.tpl.html",
    "<md-content layout-padding>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"container create-modal\">\n" +
    "        <h2><span class=\"bidio-orange\">new bid</h2>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <md-input-container layout-fill>\n" +
    "            <label>Token</label>\n" +
    "            <input ng-model=\"bid.value\" type=\"text\">\n" +
    "        </md-input-container>\n" +
    "        <md-input-container layout-fill>\n" +
    "            <label>Amount</label>\n" +
    "            <input ng-model=\"bid.attention\" type=\"text\">\n" +
    "        </md-input-container>\n" +
    "         <md-input-container layout-fill>\n" +
    "            <label>Token</label>\n" +
    "            <input ng-model=\"bid.value\" type=\"text\">\n" +
    "        </md-input-container>\n" +
    "         <md-input-container layout-fill>\n" +
    "            <label>Amount</label>\n" +
    "            <input ng-model=\"bid.value\" type=\"text\">\n" +
    "        </md-input-container>\n" +
    "        <!--WILL BUY/SELL UP TO THIS AMOUNT AT THIS PRICE - GRANUAR FUILFILLMENT-->\n" +
    "\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <md-button class=\"md-raised md-accent\" ng-disabled=\"bid.value <= highestBid.value || !bid.campaign\" ng-click=\"createBid(bid)\">Submit</md-button>\n" +
    "        <md-button class=\"md-raised\" ng-click=\"cancel()\">Cancel</md-button>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "</md-content>");
}]);

angular.module("markets/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("markets/index.tpl.html",
    "<div class=\"container\" style=\"text-align:left\">\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-4\">\n" +
    "            <h1>market</h1>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-8\">\n" +
    "            <div class=\"discover-search\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input class=\"search-query form-control\" ng-model=\"newLookup.tokenIdentifier\" id=\"search-link\" size=\"40\" type=\"text\" placeholder=\"Token\">\n" +
    "                    <span class=\"input-group-btn\">\n" +
    "                        <button class=\"btn\" type=\"button\" ng-click=\"tokenLookup()\">\n" +
    "                            <span class=\"fa fa-search\"></span>\n" +
    "                        </button>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <h2 ng-click=\"bid()\">+ bid</h2>\n" +
    "    <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "    <table class=\"table table-striped table-hover\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th>member</th>\n" +
    "                <th>asset set 1</th>\n" +
    "                <th>asset set 2</th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"post in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]\">\n" +
    "                <td><a href=\"member/admin\">member</a> {{post}}</td>\n" +
    "                <td>1 <a href=\"market/{{post}}\">token[{{post}}]</a></td>\n" +
    "                <td>{{(1/post).toFixed(2)}} <a href=\"market/cre8\">cre8coin</a></td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</div>");
}]);

angular.module("markets/templates/bid.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("markets/templates/bid.tpl.html",
    "<md-content layout-padding>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"container create-modal\">\n" +
    "        <h2><span class=\"bidio-orange\">new bid</h2>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <md-input-container layout-fill>\n" +
    "            <label>Token</label>\n" +
    "            <input ng-model=\"bid.token1\" type=\"text\">\n" +
    "        </md-input-container>\n" +
    "        <md-input-container layout-fill>\n" +
    "            <label>Amount</label>\n" +
    "            <input ng-model=\"bid.amount1\" type=\"text\">\n" +
    "        </md-input-container>\n" +
    "         <md-input-container layout-fill>\n" +
    "            <label>Token</label>\n" +
    "            <input ng-model=\"bid.token2\" type=\"text\">\n" +
    "        </md-input-container>\n" +
    "         <md-input-container layout-fill>\n" +
    "            <label>Amount</label>\n" +
    "            <input ng-model=\"bid.amount2\" type=\"text\">\n" +
    "        </md-input-container>\n" +
    "        <!--WILL BUY/SELL UP TO THIS AMOUNT AT THIS PRICE - GRANUAR FUILFILLMENT-->\n" +
    "\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <md-button class=\"md-raised md-accent\" ng-disabled=\"bid.value <= highestBid.value || !bid.campaign\" ng-click=\"createBid(bid)\">Submit</md-button>\n" +
    "        <md-button class=\"md-raised\" ng-click=\"cancel()\">Cancel</md-button>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "</md-content>");
}]);

angular.module("member/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("member/index.tpl.html",
    "<div class=\"container\">\n" +
    "	<div class=\"spacing-15\"></div>\n" +
    "	<div class=\"bidio-profile\">\n" +
    "	    <img align=\"left\" class=\"bidio-image-lg\" ng-src=\"{{profile.bannerUrl}}\" alt=\"Profile Banner\"/>\n" +
    "	</div>\n" +
    "  	<div class=\"row\">\n" +
    "  		<div class=\"col-xs-12\">\n" +
    "  			<div style=\"text-align: left;margin-top:-7%\">\n" +
    "		        <div class=\"bidio-image-profile\">\n" +
    "	    			<img style=\"max-width: 100%;padding:10px\" class=\"thumbnail\" ng-src=\"{{profile.pictureUrl}}\" alt=\"Profile Pic\"/>	\n" +
    "	    		</div>\n" +
    "	    		<div class=\"prof-desc\" style=\"padding-top:8%\">		\n" +
    "	    			<h2>{{member.username}}</h2>\n" +
    "	    			<hr>\n" +
    "	    			<div class=\"desc-inner\">\n" +
    "						<p ng-if=\"profile.firstName && profile.lastName\"><b>Name:</b></p> <p ng-if=\"profile.firstName\">{{profile.firstName}}</p> <p ng-if=\"profile.lastName\">{{profile.lastName}}</p>\n" +
    "						<br>\n" +
    "						<p ng-if=\"profile.companyName && profile.companyUrl\"><b>Company:</b> <a target=\"_blank\" href=\"{{profile.companyUrl}}\">{{profile.companyName}}</a></p>\n" +
    "						<br>\n" +
    "						<p>{{profile.description}}</p>\n" +
    "						<ul>\n" +
    "							<li ng-if=\"member.socialAccounts.facebook.profileUrl\">\n" +
    "								<a href=\"{{member.socialAccounts.facebook.profileUrl}}\">\n" +
    "									<div class=\"md-whiteframe-4dp\" style=\"background-color: #3b5998; text-align:left; padding:5px; font-size:20px; color: #fff\">\n" +
    "										<i class=\"fa fa-facebook\"></i>\n" +
    "										<img style=\"border-radius:50%\" ng-src=\"{{member.socialAccounts.facebook.profilePic}}\">\n" +
    "										{{member.socialAccounts.facebook.displayName}}\n" +
    "									</div>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<br>\n" +
    "							<li ng-if=\"member.socialAccounts.google.profileUrl\">\n" +
    "								<a href=\"{{member.socialAccounts.google.profileUrl}}\">\n" +
    "									<div class=\"md-whiteframe-4dp\" style=\"background-color:#dd4b39; text-align:left; padding:5px; font-size:20px; color: #fff\">\n" +
    "										<i class=\"fa fa-google-plus\"></i>\n" +
    "										<img style=\"border-radius:50%\" ng-src=\"{{member.socialAccounts.google.profilePic}}\">\n" +
    "										{{member.socialAccounts.google.displayName}}\n" +
    "									</div>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "							<br>\n" +
    "							<li ng-if=\"member.socialAccounts.twitter.profileUrl\">\n" +
    "								<a href=\"{{member.socialAccounts.twitter.profileUrl}}\">\n" +
    "									<div class=\"md-whiteframe-4dp\" style=\"background-color: #55acee; text-align:left; padding:5px; font-size:20px; color: #f5f8fa\">\n" +
    "										<i class=\"fa fa-twitter\"></i>\n" +
    "										<img style=\"border-radius:50%\" ng-src=\"{{member.socialAccounts.twitter.profilePic}}\">\n" +
    "										{{member.socialAccounts.twitter.displayName}}\n" +
    "									</div>\n" +
    "								</a>\n" +
    "							</li>\n" +
    "		  				</ul>\n" +
    "					</div>\n" +
    "	    		</div>        	\n" +
    "	  		</div>\n" +
    "  		</div>\n" +
    "  	</div>\n" +
    "	<uib-tabset>\n" +
    "		<uib-tab heading=\"Content\" active=\"active\">\n" +
    "			<div class=\"spacing-25\"></div>\n" +
    "			<div ng-show=\"currentUser.id == member.id\">\n" +
    "				<ul class=\"list-inline intro-social-buttons\" style=\"position:relative;top:25px;text-align:left\">\n" +
    "					<li>\n" +
    "						<a class=\"btn anim-button fl-l home-buttons\" ui-sref=\"dashboard.videos\"><i class=\"fa fa-file-video-o fa-fw\"></i> <span class=\"network-name\">Upload Video</span></a>\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "\n" +
    "			<div ng-show=\"videos.length == 0\" style=\"font-size:22px;text-align:left;\">\n" +
    "				{{member.username}} has not uploaded any videos\n" +
    "			</div>\n" +
    "			<div class=\"dashboardVideos col-xs-12 col-sm-12 col-md-6 col-lg-6\" ng-repeat=\"video in videos\" style=\"margin-top: 25px;\">\n" +
    "				<a ui-sref=\"video({id: video.id})\">\n" +
    "			    	<video \n" +
    "						class=\"video-js vjs-default-skin\"\n" +
    "						preload=\"true\" \n" +
    "						width=\"640\" \n" +
    "						height=\"264\" \n" +
    "						fluid=\"true\"\n" +
    "						poster=\"{{video.media.poster}}\"\n" +
    "						vjs-video\n" +
    "						vjs-media=\"video.media\"\n" +
    "						vjs-ratio=\"16:9\">\n" +
    "					</video>\n" +
    "					<h2 style=\"margin-top:10px;text-align:left\"class=\"prof-vid\" style=\"text-align:left\">{{video.title}}</h2>\n" +
    "					<p style=\"font-size:12px;color:grey\">{{video.viewCount}} views - <span am-time-ago=\"video.createdAt\"></span></p>\n" +
    "				</a>\n" +
    "\n" +
    "		  	</div>\n" +
    "		</uib-tab>\n" +
    "		<uib-tab ng-show=\"campaigns.length != 0\" heading=\"Campaigns\">\n" +
    "			<div class=\"spacing-25\"></div>\n" +
    "			<div ng-show=\"currentUser.id == member.id\">\n" +
    "				<ul class=\"list-inline intro-social-buttons\" style=\"position:relative;top:25px;text-align:left\">\n" +
    "					<li>\n" +
    "						<a class=\"btn anim-button fl-l home-buttons\" ui-sref=\"dashboard.campaigns\"><i class=\"fa fa-video-camera fa-fw\"></i> <span class=\"network-name\">Create Campaign</span></a>\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "			<div ng-show=\"campaigns.length == 0\" style=\"font-size:22px;text-align:left;\">\n" +
    "				{{member.username}} has not created any campaigns\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"col-md-6\" ng-repeat=\"campaign in campaigns\" style=\"text-align:left;margin-bottom:50px;\">\n" +
    "				<h2 style=\"font-size:2em\">\n" +
    "					<a href=\"/campaign/{{campaign.urlTitle}}/about\">\n" +
    "						<img style=\"height:50px;max-width:100%\" ng-src=\"{{campaign.campaignImageUrl}}\">\n" +
    "						<span style=\"margin-left:15px\">{{campaign.title}}</span>	\n" +
    "					</a>\n" +
    "				</h2>	\n" +
    "			</div>\n" +
    "\n" +
    "		</uib-tab>\n" +
    "		<uib-tab heading=\"Wallet\">\n" +
    "			<div style=\"text-align:left\">\n" +
    "				<div class=\"spacing-25\"></div>\n" +
    "				<p style=\"font-size:22px;text-align:left;\">{{member.walletAddress}}</p>\n" +
    "\n" +
    "				<img src=\"https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl={{member.walletAddress}}\">\n" +
    "\n" +
    "				<!--<p>Send cre8</p>\n" +
    "				<form>\n" +
    "					<input style=\"width:25%\" type=\"text\" placeholder=\"amount\" class=\"form-control\">\n" +
    "					<input style=\"width:25%\" type=\"text\" placeholder=\"Token\" class=\"form-control\">\n" +
    "				</form>-->\n" +
    "\n" +
    "				<h3 style=\"font-size:22px\">cre8 Balance: {{balance.cre8coinBalance / 1000000000000000000}}</h3>\n" +
    "				<h3 style=\"font-size:22px\">Time Balance: {{balance.viewTokenBalance / 1000}} seconds</h3>\n" +
    "				<h3 style=\"font-size:22px\">MultiDimensional Token Balance: {{multiDemsionalBalance / 1000}} seconds</h2>\n" +
    "				<br>\n" +
    "				<form>\n" +
    "					<input style=\"float:left;width:25%\" type=\"text\" placeholder=\"Token\" class=\"form-control\" ng-model=\"newLookup.tokenIdentifier\">\n" +
    "					<button class=\"float:left\" ng-click=\"tokenLookup()\"><span class=\"fa fa-search\"></span></button>\n" +
    "				</form>\n" +
    "\n" +
    "				<div class=\"spacing-25\"></div>\n" +
    "\n" +
    "				<h2>Transaction History</h2>\n" +
    "\n" +
    "				<div class=\"spacing-25\"></div>\n" +
    "\n" +
    "				<!--<h2>total views? {{balance.events.length}}</h2>-->\n" +
    "\n" +
    "				<table class=\"table table-striped table-hover\">\n" +
    "				    <thead>\n" +
    "						<tr>\n" +
    "							<th>Address</th>\n" +
    "							<th>Token</th>\n" +
    "							<th>Time</th>\n" +
    "						</tr>\n" +
    "				    </thead>\n" +
    "				    <tbody>\n" +
    "						<tr ng-repeat=\"event in balance.events\">\n" +
    "							<td><a href=\"/member/{{event.returnValues._to}}\">{{event.returnValues._to}}</a></td>\n" +
    "							<td>{{event.returnValues._id}}</td>\n" +
    "							<td>{{event.returnValues._time/1000}}</td>\n" +
    "						</tr>\n" +
    "				    </tbody>\n" +
    "				</table>\n" +
    "\n" +
    "				<!--websocket-->\n" +
    "				<!--{{pendingTransactions}}\n" +
    "				<div ng-repeat=\"transaction in pendingTransactionsList\">\n" +
    "					{{transaction}}\n" +
    "				</div>-->\n" +
    "\n" +
    "			</div>\n" +
    "		</uib-tab>\n" +
    "\n" +
    "	</uib-tabset>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "<div style=\"clear:both\"></div>\n" +
    "<div class=\"spacing-50\"></div>");
}]);

angular.module("nav/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("nav/index.tpl.html",
    "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\" ng-controller=\"NavCtrl\" style=\"background:#101010\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "      <div class=\"navbar-header\">\n" +
    "        <button class=\"navbar-toggle\" ng-click=\"isCollapsed = !isCollapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n" +
    "          <span class=\"sr-only\">Toggle navigation</span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "        </button>\n" +
    "        <a class=\"navbar-brand\" href=\"/\"></a>    \n" +
    "      </div>\n" +
    "      <div class=\"collapse navbar-collapse\" nav-collapse=\"\">\n" +
    "          <ul class=\"nav navbar-nav nav-float\">\n" +
    "          <!--<li><a href=\"/search\">Search</a></li>-->\n" +
    "          <li ng-class=\"{ active: isActive('/dashboard/videos')}\" ng-show=\"currentUser\"><a href=\"/dashboard/videos\">Upload</a></li>\n" +
    "          <li ng-class=\"{ active: isActive('/discover')}\"><a href=\"/discover\">Discover</a></li>\n" +
    "          <li ng-class=\"{ active: isActive('/market')}\"><a href=\"/market\">Market</a></li>\n" +
    "          <li ng-class=\"{ active: isActive('/campaigns')}\" ng-show=\"currentUser\"><a href=\"/campaigns\">Campaigns</a></li>\n" +
    "          <li ng-class=\"{ active: isActive('/dashboard')}\" ng-show=\"currentUser\"><a href=\"/dashboard\">Dashboard</a></li>\n" +
    "          <li ng-show=\"currentUser\"><a href=\"/logout\">Logout</a></li>\n" +
    "          <!--<li ng-class=\"{ active: isActive('/creators')}\" ng-show=\"!currentUser\"><a class=\"bidio-nav\" href=\"/creators\">Creators</a></li>\n" +
    "          <li ng-class=\"{ active: isActive('/sponsors')}\" ng-show=\"!currentUser\"><a class=\"bidio-nav\" href=\"/sponsors\">Sponsors</a></li>-->\n" +
    "          <li ng-class=\"{ active: isActive('/login')}\" ng-show=\"!currentUser\"><a href=\"/login\">Login</a></li>\n" +
    "          <li ng-class=\"{ active: isActive('/register')}\" ng-show=\"!currentUser\"><a href=\"/register\">Register</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <md-progress-linear ng-if=\"stateIsLoading\" md-mode=\"indeterminate\"></md-progress-linear>\n" +
    "</nav>");
}]);

angular.module("privacy/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("privacy/index.tpl.html",
    "<div class=\"container\" style=\"text-align: left;\">\n" +
    "    <div class=\"spacing-50\"></div>\n" +
    "    <h2><b>PRIVACY POLICY</b></h2>\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "    <p>Bidio is proudly committed to consumer choice and privacy. We firmly believe people don’t need help choosing what to watch or buy! Our ads are completely non-invasive, your data is always anonymous, and we never sell information to third-parties. Furthermore, our platform enables automatic disclosure of content sponsorship.</p>\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <h2>What information does Bidio collect?</h2>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <p>In order to compensate creators based on their content’s performance, we have to measure click-throughs. We also collect anonymous viewing behavior and sharing activity, but only for internal purposes. Finally, our system stores any information you provide, such as your username, email address, phone number and other profile content.</p>\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <h2>How do we use this information?</h2>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <p>Bidio collects data to provide services and improve the platform. We send you marketing communications and respond when you contact us. Bidio notifies users before we make changes to our policies and terms. However, your data will always remain anonymous by default.</p>\n" +
    "    <div class=\"spacing-5\"></div>\n" +
    "    <p>We also use data to verify accounts and activity, so we can promote safety and security on and off the platform. Our team routinely investigates violations of our terms or policies, along with any suspicious activity. Bidio works hard to protect your account using teams of engineers, automated systems, and advanced technology.</p>\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "    <h2>DISCLAIMER</h2>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <p>At this point, Bidio does not use your information to serve relevant, or “recommended” content. However, we are testing algorithms that fairly distribute impressions according to social relevance and overall engagement.</p>\n" +
    "    <div class=\"spacing-25\"></div>\n" +
    "</div>");
}]);

angular.module("register/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("register/index.tpl.html",
    "<div class=\"row\" style=\"height:100vh\">\n" +
    "    <div class=\"form-wrapper\">\n" +
    "        <div class=\"form-container\">\n" +
    "            <h2 style=\"font-weight: bold;\">Welcome to Bidio!</h2>\n" +
    "            <div class=\"spacing-15\"></div>\n" +
    "            <form class=\"form ng-pristine ng-valid\" role=\"form\" action=\"/auth/local/register\" method=\"post\" _lpchecked=\"1\">\n" +
    "                <label for=\"inputEmail3\" class=\"col-sm-2 control-label\"></label>\n" +
    "                <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" name=\"email\" placeholder=\"Email\" value=\"\">\n" +
    "                <label for=\"inputUsername3\" class=\"col-sm-2 control-label\"></label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"inputUsername3\" name=\"username\" placeholder=\"Username\" value=\"\">\n" +
    "                <label for=\"inputPassword3\" class=\"col-sm-2 control-label\"></label>\n" +
    "                <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" name=\"password\" placeholder=\"Password\" value=\"\">\n" +
    "                <button type=\"submit\" id=\"login-button\">Sign Up</button>\n" +
    "                <div class=\"spacing-15\"></div>\n" +
    "                <ul class=\"social-icons icon-rotate list-unstyled\" style=\"bottom:15px\">\n" +
    "                    <li style=\"display:inline-block;padding:10px;font-size:20px\">\n" +
    "                        <i ng-click=\"go('/auth/facebook')\" class=\"fa fa-facebook\"></i>\n" +
    "                    </li>\n" +
    "                    <li style=\"display:inline-block;padding:10px;font-size:20px\">\n" +
    "                        <i ng-click=\"go('/auth/google')\" class=\"fa fa-google-plus\"></i>\n" +
    "                    </li>\n" +
    "                    <li style=\"display:inline-block;padding:10px;font-size:20px\">\n" +
    "                        <i ng-click=\"go('/auth/twitter')\" class=\"fa fa-twitter\"></i>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </form>\n" +
    "            <a href=\"/login\" style=\"font-size:15px\"><h3>Already have an account?</h3></a>\n" +
    "        </div>\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("reset/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("reset/index.tpl.html",
    "<div class=\"row\" style=\"text-align:center;\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        <h2 class=\"section-heading\">Reset your password?</h2>\n" +
    "        <div class=\"underbox-parent\">\n" +
    "            <div class=\"underbox-outter2\">\n" +
    "                <span class=\"underbox\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        \n" +
    "        <div class=\"alert alert-danger\" ng-if=\"globalErr\">{{ globalErr }}</div>\n" +
    "\n" +
    "        <form action=\"{{ actionUrl }}\" id=\"msform\" method=\"post\" name=\"msform\" style=\"height:350px; margin-bottom:15px\" class=\"form ng-pristine ng-valid\">\n" +
    "            <fieldset style=\"height:350px;\">\n" +
    "                <p style=\"text-align:center\">Type in your new password here</p>\n" +
    "                <input name=\"password\" placeholder=\"Password\" style=\"margin-top:2.5%\" type=\"password\">\n" +
    "                <input name=\"confirmation\" placeholder=\"Confirm Password\" style=\"margin-top:2.5%\" type=\"password\">\n" +
    "                <button class=\"next action-button\" style=\"margin-top: 30px;\" type=\"submit\">Send</button>\n" +
    "            </fieldset>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("reset/success/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("reset/success/index.tpl.html",
    "<div class=\"row\" style=\"text-align:center;\">\n" +
    "    <div class=\"col-md-12\">\n" +
    "        \n" +
    "        <div class=\"alert alert-danger\" ng-if=\"globalErr\">{{ globalErr }}</div>\n" +
    "\n" +
    "        <h2 class=\"section-heading\" style=\"margin-top:200px;\">Password successfully reset</h2>\n" +
    "        <a style=\"text-align:center\" href=\"/login\">go to login</a>\n" +
    "        <br><br>\n" +
    "        <div class=\"underbox-parent\">\n" +
    "            <div class=\"underbox-outter2\">\n" +
    "                <span class=\"underbox\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("search/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("search/index.tpl.html",
    "<div class=\"surface-container home-pad\">\n" +
    "	<h1>search</h1>\n" +
    "</div>");
}]);

angular.module("sponsors/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("sponsors/index.tpl.html",
    "<input type=\"radio\" class=\"radio\" name=\"pages\" id=\"exit\" checked />\n" +
    "<div class=\"page\">\n" +
    "  <input type=\"radio\" class=\"radio\" name=\"pages\" id=\"page_1\" />\n" +
    "  <section class=\"section-container section-one\" style=\"padding-top:0px\">\n" +
    "    <label for=\"page_1\" class=\"page-label check-label\">\n" +
    "      <div class=\"home-content\">\n" +
    "        <h2>\n" +
    "            <!--\n" +
    "            Crowd sourced content marketing\n" +
    "            <br>\n" +
    "            that is perfectly <span class=\"boldio\">cost-effective.</span>\n" +
    "            -->\n" +
    "            <span class=\"boldio\">Cost-effective</span> brand recognition and engagement.\n" +
    "        </h2>\n" +
    "      </div>\n" +
    "    </label>\n" +
    "    <div class=\"section-info\">\n" +
    "      <div class=\"section-content\">\n" +
    "        <label for=\"exit\" class=\"check-label exit-label\">\n" +
    "          X\n" +
    "        </label>\n" +
    "        <p>\n" +
    "          Create unique brand campaigns fueled by the power of virality.\n" +
    "          <br>\n" +
    "          <br>\n" +
    "          <!--Using our unique pay-per-click model, brands confidently invest in user-generated content marketing. Steer away from traditional hit-or-miss techniques of closed-door focus groups and out-of-touch marketing departments seeking the engagement of emerging generations. Handing creative control to the same people your brand is trying to reach will usher in a new era of digital marketing.-->\n" +
    "          Using our cost-effective bidding system, advertisers can generate awareness by attaching their brands to authentic user-generated content. Our sponsors only pay for verified results, when real people choose to engage.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <input type=\"radio\" class=\"radio\" name=\"pages\" id=\"page_2\" />\n" +
    "  <section class=\"section-container section-two\" style=\"padding-top:0px\">\n" +
    "    <label for=\"page_2\" class=\"page-label check-label\">\n" +
    "      <div class=\"home-content\">\n" +
    "        <h2>\n" +
    "            <!--Stop paying YouTube and Facebook so much <span class=\"boldio\">money.</span>-->\n" +
    "            Sponsored videos that people watch on <span class=\"boldio\">purpose.</span>\n" +
    "        </h2>\n" +
    "      </div>\n" +
    "    </label>\n" +
    "    <div class=\"section-info\">\n" +
    "      <div class=\"section-content\">\n" +
    "        <label for=\"exit\" class=\"check-label exit-label\">\n" +
    "              X\n" +
    "        </label>\n" +
    "        <!--\n" +
    "        <p>\n" +
    "          People despise pre-roll and mid-roll ads, so why pay to force impressions? YouTube wants to be television on the internet, but since there are infinite channels, viewers are less tolerant of interruptions. Facebook disguises ads (a.k.a. boosted posts) by placing them in a dynamic newsfeed, but their algorithms shouldn’t control what people see. As an alternative, Bidio refuses to interrupt viewers, while protecting authenticity, consumer choice and privacy.\n" +
    "        </p>\n" +
    "        -->\n" +
    "        <p>\n" +
    "          Start your campaign by setting a budget, call to action, landing page and cost per click. If sponsors are bidding on a video, the original creator will receive incremental payments when unique viewers click through.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <input type=\"radio\" class=\"radio\" name=\"pages\" id=\"page_3\" />\n" +
    "  <section class=\"section-container section-three\" style=\"padding-top:0px\">\n" +
    "    <label for=\"page_3\" class=\"page-label check-label\">\n" +
    "      <div class=\"home-content\">\n" +
    "        <h2>\n" +
    "            <!--\n" +
    "            Ad-Blocking technology\n" +
    "            <br>\n" +
    "            doesn't effect content people view by <span class=\"boldio\">choice.</span> \n" +
    "            -->\n" +
    "            Focus on <span class=\"boldio\">quality</span>, rather than quantity.\n" +
    "\n" +
    "        </h2>\n" +
    "      </div>\n" +
    "    </label>\n" +
    "    <div class=\"section-info\">\n" +
    "      <div class=\"section-content\">\n" +
    "        <label for=\"exit\" class=\"check-label exit-label\">\n" +
    "              X\n" +
    "        </label>\n" +
    "        <p>\n" +
    "          <!--When people choose to support creators they are annoyed. why do add blockers exist?-->\n" +
    "          <!--Ad blockers help prevent third parties from serving content that interrupts viewers. However, Bidio isn’t affected by these firewalls because our system never calls ad servers. Sponsors simply upload their logo and indicate the URL of each campaign landing page. Establish your maximum budget, cost-per-click, and expectations, then let our members produce videos for your consideration. If you choose to sponsor any entries, the original creator will receive incremental payments when unique viewers click-through.-->\n" +
    "\n" +
    "          Most people hate ads, so why pay to force impressions? Bidio refuses to interrupt viewers, while protecting their privacy. Our sponsors only pay for unique click-throughs (guaranteed ROI), so they can take risks on authentic productions.\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "  <input type=\"radio\" class=\"radio\" name=\"pages\" id=\"page_4\" />\n" +
    "  <section class=\"section-container section-four\" style=\"padding-top:0px\">\n" +
    "    <label for=\"page_4\" class=\"page-label check-label\">\n" +
    "      <div class=\"home-content\">\n" +
    "        <h2>\n" +
    "            Support a new generation of independent <span class=\"boldio\">creators.</span>\n" +
    "        </h2>\n" +
    "      </div>\n" +
    "    </label>\n" +
    "    <div class=\"section-info\">\n" +
    "      <div class=\"section-content\">\n" +
    "        <label for=\"exit\" class=\"check-label exit-label\">\n" +
    "              X\n" +
    "        </label>\n" +
    "        <!--\n" +
    "        <p>\n" +
    "          Successful influencer marketing relies on trust, but creators work on both sides of the digital media industry. The lucky ones produce content for publishers, but others work for advertisers. Some attempt to self-publish, although it’s difficult to make money that way. Certain platforms have taken advantage of all the noise by squeezing out as much money as possible. Naturally, creators are seeking alternatives.\n" +
    "          <br>\n" +
    "          <br>\n" +
    "          BIDIO is that alternative.\n" +
    "        </p>\n" +
    "        -->\n" +
    "        <p>\n" +
    "          Influencer marketing helps advertisers borrow trust from genuine creators. However, paid testimonials are usually ineffective. Why not gain recognition through sponsored authenticity?\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </section>\n" +
    "</div>");
}]);

angular.module("token/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("token/index.tpl.html",
    "<style>\n" +
    "  .header { background:#000; }\n" +
    "</style>\n" +
    "<div class=\"header\">\n" +
    "  <div class=\"spacing-100\"></div>\n" +
    "  <div class=\"block\">\n" +
    "    <div class=\"shape\">\n" +
    "      <div class=\"cube outer\">\n" +
    "        <div class=\"side left\"></div>\n" +
    "        <div class=\"side right\"></div>\n" +
    "        <div class=\"side top\"></div>\n" +
    "        <div class=\"side bottom\"></div>\n" +
    "        <div class=\"side front\"></div>\n" +
    "        <div class=\"side back\"></div>\n" +
    "        <div class=\"cube\">\n" +
    "          <div class=\"side left\"></div>\n" +
    "          <div class=\"side right\"></div>\n" +
    "          <div class=\"side top\"></div>\n" +
    "          <div class=\"side bottom\"></div>\n" +
    "          <div class=\"side front\"></div>\n" +
    "          <div class=\"side back\"></div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"spacing-20\"></div>\n" +
    "  <p style=\"color:white;text-align:center;font-size:30px\">\n" +
    "    ENERGY IS THE IMAGINARY NOW\n" +
    "  </p>\n" +
    "  <div class=\"spacing-100\"></div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <div class=\"spacing-50\"></div>\n" +
    "      <h2 class=\"section-title\">create the next wave</h2>\n" +
    "      <p style=\"font-size:20px\">Universal Income</p>\n" +
    "      <p style=\"font-size:20px\">ERC-88 Standard</p>\n" +
    "      <p style=\"font-size:20px\">A MULTIDIMENSIONAL attention-backed asset class</p>\n" +
    "      <a href=\"#paper\" du-smooth-scroll><button class=\"btn-6 btn-full\" style=\"background:transparent;\">White Paper</button></a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "      <div class=\"spacing-50\"></div>\n" +
    "      <img style=\"height:100px;\" src=\"https://wikimedia.org/api/rest_v1/media/math/render/svg/327546c3f8bd78d7d533c5c04f7602086862dfd4\">\n" +
    "      <div class=\"spacing-50\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12\" style=\"text-align:right\">\n" +
    "      <iframe width='560' height='315' src='https://www.bidio.co/v/57954ce9dea046030031007a' frameborder='0' allowfullscreen></iframe>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <!--<iframe width='560' height='315' src='https://www.bidio.co/v/57958aa3a1ad8f030032230c' frameborder='0' allowfullscreen></iframe>-->\n" +
    "  <!--<p>road map</p>-->  \n" +
    "  <!--<div class=\"row\">\n" +
    "    <a class=\"col-xs-6\" target=\"_blank\" href=\"https://docs.google.com/document/d/1WJPTpY6vdcu-olyttI1WDFTT5NZGRm2T3OK6IqML3CA/edit\"><button class=\"btn-6 btn-full\" style=\"background:transparent;\">White Paper</button></a>\n" +
    "    <a class=\"col-xs-6\" target=\"_blank\" href=\"https://www.medium.com/bidio\"><button class=\"btn-6 btn-full\" style=\"background:transparent;\">Blog</button></a>\n" +
    "  </div>-->\n" +
    "</div>\n" +
    "<div class=\"spacing-50\"></div>\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "  <div class=\"\">\n" +
    "    <h2 class=\"section-title\" style=\"word-wrap:break-word;\">contract address: 0x35F8e9dFc3f97fa18CEf166a6099074B5340e843</h2>\n" +
    "    <p style=\"font-size:20px\">{{totalEth}} ETH recieved, {{totalToken}} CRE8 Tokens distributed</p>\n" +
    "    <p style=\"font-size:20px\">100 Tokens = {{tokenPrice}} ETH</p><br>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "      <!--exchanges link, use decentralized exchanges-->\n" +
    "      <a class=\"col-xs-12\" href=\"#paper\" du-smooth-scroll><button class=\"btn-6 btn-full\" style=\"background:transparent;\">Purchase</button></a>\n" +
    "    </div>\n" +
    "\n" +
    "    <p style=\"font-size:12px\">CRE8 STG1 Tokens are fund raising tokens and therefore do not have any rights, uses, purpose, attributes, functionalities or features, express or implied, including, without limitation, any uses, purpose, attributes, functionalities or features on the CRE8 Platform. They are a permant record on the ETH blockchain of a show of support for the attention based CRE8 protocol.</p>\n" +
    "    <!--<a style=\"text-align:left\" href=\"https://saftproject.com/#saft-whitepaper\">terms</a>-->\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"spacing-50\"></div>\n" +
    "\n" +
    "  <div class=\"text-align:left\">\n" +
    "    <h2 class=\"section-title\">The Team</h2>\n" +
    "    <a class=\"projectLink\" href=\"https://www.experiencenovo.io\">\n" +
    "      <img src=\"https://www.experiencenovo.io/images/novo/logo.png\" style=\"max-width:100%\">\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "  <div id=\"paper\" class=\"spacing-50\"></div>\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "    <a target=\"_blank\" class=\"col-xs-12\" href=\"https://docs.google.com/document/d/1WJPTpY6vdcu-olyttI1WDFTT5NZGRm2T3OK6IqML3CA/edit\"><button class=\"btn-6 btn-full\" style=\"background:transparent;\">White Paper</button></a>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"spacing-25\"></div>\n" +
    "\n" +
    "<div ng-include=\"'token/paper.tpl.html'\"></div>\n" +
    "<div class=\"spacing-100\"></div>\n" +
    "\n" +
    "<a href=\"https://rebelai.com\"><img src=\"https://rebelai.com/wp-content/uploads/2017/01/MobileLogo-01.png\" style=\"max-width:100%;max-height:100px;padding:10px;max-width:150px;\"></a>\n" +
    "<a href=\"https://www.experiencenovo.io\"><img src=\"https://www.experiencenovo.io/images/novo/logo.png\" style=\"max-width:100%;max-height:100px;padding:10px;max-width:150px;\"></a>\n" +
    "<a href=\"https://www.ethereum.org\"><img src=\"https://www.ethereum.org/images/logos/ETHEREUM-LOGO_PORTRAIT_Black_small.png\" style=\"max-width:100%;max-height:100px;padding:10px;max-width:150px;\"></a>\n" +
    "<a href=\"#\"><img src=\"https://steemitimages.com/DQmP64m1oDQQtgjsdqjcTHGXzi93sxPH6FRyTVTz8CYYKjf/Bitfinex%20Logo.png\" style=\"max-width:100%;max-height:100px;padding:10px;max-width:150px;\"></a>\n" +
    "<a href=\"https://poloniex.com\"><img src=\"https://poloniex.com/images/media_kit/Poloniex-logo-800px.png\" style=\"max-width:100%;max-height:100px;padding:10px;max-width:150px;\"></a>\n" +
    "<a href=\"https://www.experiencenovo.io\"><img src=\"images/tesseract.png\" style=\"max-width:100%;max-height:100px;padding:10px;max-width:150px;\"></a>\n" +
    "<a href=\"https://www.hyperledger.org\"><img src=\"https://www.hyperledger.org/wp-content/uploads/2016/09/logo_hl_new.png\" style=\"max-width:100%;max-height:100px;padding:10px;max-width:150px;\"></a>\n" +
    "<a href=\"#\"><img src=\"https://kryptomoney.com/wp-content/uploads/2017/10/KryptoMoney.com-ConsenSys.jpg\" style=\"max-width:100%;max-height:100px;padding:10px;max-width:150px;\"></a>\n" +
    "\n" +
    "\n" +
    "<div class=\"spacing-100\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("token/paper.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("token/paper.tpl.html",
    "<style>\n" +
    "\n" +
    ".introduction{min-height:50vh;text-align:left;}\n" +
    ".attentionExchanges{min-height:50vh;text-align:left}\n" +
    ".incentivizingPositivity{min-height:50vh;text-align:left}\n" +
    ".multidimensionalTokenStandard{min-height:50vh;text-align:left}\n" +
    ".viewTokenProtocol{min-height:50vh;text-align:left}\n" +
    ".cre8coinGovernance{min-height:50vh;text-align:left}\n" +
    ".hyperledgerSawtoothEthereum{min-height:50vh;text-align:left}\n" +
    ".conclusion{min-height:50vh;text-align:left}\n" +
    "\n" +
    "</style>\n" +
    "<div class=\"container\">\n" +
    "\n" +
    "    <section class=\"introduction\">\n" +
    "        <h2 class=\"section-title\">Value Proposition</h2>\n" +
    "        <img style=\"100px\" src=\"https://wikimedia.org/api/rest_v1/media/math/render/svg/327546c3f8bd78d7d533c5c04f7602086862dfd4\">\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "        <p>Energy is the imaginary now.</p>\n" +
    "        <p>It is in the moment, in this quantifiable property of the imagined observer, energy flows and is transformed.</p>\n" +
    "\n" +
    "        <!--<p>This moment is energy. This moment is valuable.</p>-->\n" +
    "        <p>Imagination is energy. Imagination is valuable.</p>\n" +
    "        <!--<p>imagination is energy</p>-->\n" +
    "\n" +
    "        <!--\n" +
    "        <p>In defining a crypto ecosystem, we are able to</p>\n" +
    "            quantify valuable dimensional attention\n" +
    "            create crypto-asset streams as a public ledger of our attention.\n" +
    "            create direct attention markets and exchange potential\n" +
    "            //We define attention as valuable through a crypto asset \n" +
    "            Multidimensional Tokenization\n" +
    "        -->\n" +
    "\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <!--<p>We define a multidimensional crypto-system which aligns the incentives of creators, viewers and sponsors.</p>-->\n" +
    "\n" +
    "        <!-- introduce cre8coin, attentionToken / viewToken protocol, introduce utlility - and distributed governance (over YT/goog) -->\n" +
    "        <!-- inrocdue the value of choice in how you spend your attention(Token) --> \n" +
    "        <p>CRE8coin and the attentionToken protocol introduce utlility and distributed governance though the value of choice in how you spend your attention(Token).</p>\n" +
    "        <!--<p>The goal is to create value according to the attentionToken protocol and cre8coin governance.</p>-->\n" +
    "        <p>valuable attention exchanges, and a thriving dapp ecosystem is emergent</p>\n" +
    "        <p>the protocol creates valuable attention exchanges.</p>\n" +
    "        <p>a protocol for programmatic, valuable attention exchanges</p>\n" +
    "\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "        <!-- ethos: the why-->\n" +
    "        <p>When one consumes content valuable attention exchanges occur.</p>\n" +
    "        <p>Utilizing the Bidio dapp, advertisers place buy-orders for dimensions of viewer actions. This preserves integrity of the digital media ecosystem. We believe truly native advertising matches the purpose of intentionally sponsored creators.</p>\n" +
    "        <p>If a creator accepts a bid, the sponsor will get any tokens minted when the audience chooses to engage.</p>\n" +
    "        <p>Though the open-source bidding mechanism tokenized viewer actions becomes market liquid.</p>\n" +
    "\n" +
    "\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "        <!-- introduce technecalities - programatic problems to solve, ERC-88 standard, link in gist etc. -->\n" +
    "        <p>cre8coin’s network creates an intelligently designed system: one viewToken minted per second of watch time.</p>\n" +
    "        <p>ERC88, a new token standard, enables us to design a unique set of mechanisms by which multidimensional viewTokens are distributed to maximize general utility.</p>\n" +
    "\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <!--what are the consequences of a qauntized attention based crypto ecosystem -->\n" +
    "        <p>This cryptosystem optimizes for desired outcomes though rewarding creativity and purposeful sponsorship/investment.</p>\n" +
    "        <!--In auctions one looks for rational mechanisms that maximize projected and realized utility. There is an equitable distribution of value based on attention-generated, token-curated awards.</p>-->\n" +
    "\n" +
    "\n" +
    "        <!-- alligning of value; these value exchanges are implicit; we are making it explicit-->\n" +
    "        <p>The attentionToken protocol empowers any genuine storyteller to monetize the intrinsic value of their original content by selling derivative crypto value created when viewers pay attention.</p>\n" +
    "        <p>This implicit value exchange is ongoing, and when quantized becomes explicit - on the ledger.</p>\n" +
    "\n" +
    "        <!-- important section -->\n" +
    "        <!-- expaning on the idea of a crypto unility and the overall goals-->\n" +
    "        <p>Ultimately, our team is developing a self-sustaining public utility for direct attention exchanges. Our mission is to incentivize universal support of creativity to drive progress throughout digital media networks and society generally.</p>\n" +
    "        <!--<p>Ultimately, though expanding on the idea of a generalized crypto utilities, our team is developing a self-sustaining public utility for direct attention exchanges. Our mission is to incentivize universal support of creativity to drive progress throughout digital media networks and society generally.</p>-->\n" +
    "\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section class=\"attentionExchanges\">\n" +
    "        <h2 class=\"section-title\">Attention Exchanges</h2>\n" +
    "\n" +
    "        <p>Game theoretic models of attention networks involve three participants, which do not know each other’s utility function. Bayes-Nash equilibrium (against a common prior) is the ideal outcome in such games of incomplete information. Within the information economy, there should be three primary unknowns – one for each group involved:</p>\n" +
    "\n" +
    "        <p>Participants / Players / Associated Unknowns</p>\n" +
    "        <p>Social Decisions</p>\n" +
    "        <p>Energy is the imaginary now</p>\n" +
    "\n" +
    "        <ul>\n" +
    "            <li>A) Creators: Why do I create?</li>\n" +
    "            <li>B) Viewers: How do I spend my attention?</li>\n" +
    "            <li>C) Sponsors: How do I reach my audience?</li>\n" +
    "        </ul>\n" +
    "\n" +
    "        <!--\n" +
    "        Time ~ paying attention\n" +
    "        Money ~ sponsorship and/or patronage/subscription\n" +
    "        Private Information:\n" +
    "        signals/types\n" +
    "        represent preferences\n" +
    "        any information really (i.e. knowledge of quality or validity)-->\n" +
    "\n" +
    "        <p>Motivation Sets</p>\n" +
    "        <!--<style>tr{padding:10px;}</style>-->\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "        <table class=\"table table-striped table-hover\">\n" +
    "            <thead class=\"thead-inverse\">\n" +
    "                <tr>\n" +
    "                    <td></td>\n" +
    "                    <td><b>Sponsor</b></td>\n" +
    "                    <td><b>Creator</b></td>\n" +
    "                    <td><b>Viewer</b></td>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr>\n" +
    "                    <td><b>Motive</b></td>\n" +
    "                    <td>Attention</td>\n" +
    "                    <td>Purpose</td>\n" +
    "                    <td>Expectations</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td><b>Rewards</b></td>\n" +
    "                    <td>Influencing Consumer Behavior</td>\n" +
    "                    <td>Patronage\n" +
    "                    and Sponsorship</td>\n" +
    "                    <td>High-Quality Experience</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td><b>Costs</b></td>\n" +
    "                    <td>Money</td>\n" +
    "                    <td>Energy</td>\n" +
    "                    <td>Time</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td><b>Utility</b></td>\n" +
    "                    <td>Brand / Sales Lift</td>\n" +
    "                    <td>Self-Actualization</td>\n" +
    "                    <td>Satisfaction</td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <td><b>Strategy</b></td>\n" +
    "                    <td>Bidding for Value</td>\n" +
    "                    <td>Imagination\n" +
    "                    and Integrity</td>\n" +
    "                    <td>Evaluation and Intention</td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "        <!--WIP-->\n" +
    "        <p>Bayesian probability</p>\n" +
    "        <p>Extension of propositional logic that enables reasoning with hypotheses, i.e. the propositions whose truth or falsity is uncertain. Instead of frequency or propensity of some phenomenon, probability is interpreted as reasonable expectation, representing a state of knowledge (objectivist justified by Cox’s Theorem), or as quantification of a personal belief (subjectivist justified by requirements of rationality and coherence following the Dutch book argument or decision theory and de Finetti’s Theorem). Prior vs. Posterior.</p>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        <p>adding a mechanism turns a Bayesian setting into “game form”</p>\n" +
    "        <p>deterministic: always outputting the same decision and payouts for a given setting</p>\n" +
    "        <p>probabilistic/randomized according to some rule</p>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        <p>Common Prior: probability distribution over types - anyone and everyone can be a creator, viewer and sponsor!</p>\n" +
    "        <p>Decision Rule: maps types to social decisions ~ paying attention</p>\n" +
    "        <p>Viewers: watching, engaging and sharing</p>\n" +
    "        <p>Creators: producing content and sharing revenue</p>\n" +
    "        <p>Sponsors: bidding for tokenized information</p>\n" +
    "        <p>Experience is identical to a conceptual structure in global maximum of intrinsic powers. Consciousness is not just functional. Subjective meaning is derived from</p>\n" +
    "\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section class=\"incentivizingPositivity\">\n" +
    "        <h2 class=\"section-title\">Incentivizing Positivity</h2>\n" +
    "        <!--CREATING REAL VALUE-->\n" +
    "        <p>Multidimensionality engenders exchange value to align with personal value - our valuable attention - and it's exchange</p>\n" +
    "        <a href=\"https://sites.duke.edu/niou/files/2014/06/Arrow-Social-Choice-And-Individual-Values.pdf\">Social Choice Functions</a>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        <p>General distribution of viewToken provides a universal floor, allowing creators to earn and share the value of their viewers’ attention and engagement. When sponsors want to get attention from a specific audience, they can buy the rights to any tokens minted in real time (with strings attached). Net bid value is the full bid amount minus the market value of general attentionToken.</p>\n" +
    "        <p>Overall, the goal is to incentivize progress.</p>\n" +
    "        <p>Generally, participants will support high-quality content which adds extrinsic value. Here is what each type is now incentivized to do.</p>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        <p>viewers: watch - pay attention - improved accountability</p>\n" +
    "        <p>creators: create - adding extrinsic value</p>\n" +
    "        <p>sponsors: bid - contextual targeting rewards quality</p>\n" +
    "        <p>all dimensions are publicly available</p>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        <p>economic market mechanism</p>\n" +
    "        <p>Supply side - Continuous attentionToken model</p>\n" +
    "        <p>Demand side - Bidding</p>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        <p>Mechanisms of Coordination</p>\n" +
    "        <p>Bidding: assigning liquid values to multidimensional viewer actions | stake or trust pooling around high-quality content</p>\n" +
    "        <p>Watching: token-curated award system | creating supply to reward creators who add extrinsic value</p>\n" +
    "        <p>Creating: releasing energy through self-expression | offering rewards to patrons and sponsors</p>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "\n" +
    "        <p>generalized utility governance</p>\n" +
    "        <p>complete transparency and control</p>\n" +
    "\n" +
    "\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section class=\"multidimensionalTokenStandard\">\n" +
    "        <h2 class=\"section-title\">Multidimensional Token Standard</h2>\n" +
    "        <p>ERC-88</p>\n" +
    "       \n" +
    "        <!--\n" +
    "        participants: creators, viewers and sponsors.\n" +
    "        Revelation Principle ~ any social choice function that can be implemented by any arbitrary mechanism, can also be implemented by a truthful, direct-revelation mechanism with the same equilibrium outcome.\n" +
    "        -->\n" +
    "\n" +
    "        <p>Multidimensional viewToken Structure: [address][_id][_value]</p>\n" +
    "        <p>Mapping (address => mapping (string => uint)) balances; <a href=\"https://gist.github.com/troverman/809dba32d8510e7713aaa5c869e607ae\">[gist]</a></p>\n" +
    "        <p>N-dimensional balances or string based tokens - ex: token per address [address][‘address’][balance]</p>\n" +
    "        <p><a href=\"/market\">Multidimensional Token Market</a></p>\n" +
    "        <pre style=\"text-align:left;font-family:monospace;white-space:pre-wrap;\">\n" +
    "        contract MultidimensionalToken {\n" +
    "            mapping (address => mapping (string => uint)) balances;\n" +
    "            event Transfer(address indexed _from, address indexed _to, string _id, uint256 _value);\n" +
    "            \n" +
    "            function balanceOf(address _owner, string _id) constant returns (uint256 balance) {\n" +
    "                return balances[_owner][_id];\n" +
    "            }\n" +
    "\n" +
    "            function transfer(address _to, string _id, uint256 _value) returns (bool success) {\n" +
    "                if (balances[msg.sender][_id] >= _value && _value > 0) {\n" +
    "                    balances[msg.sender][_id] -= _value;\n" +
    "                    balances[_to][_id] += _value;\n" +
    "                    Transfer(msg.sender, _to, _id, _value);\n" +
    "                    return true;\n" +
    "                } \n" +
    "                else {return false;}\n" +
    "            }\n" +
    "        }</pre>\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section class=\"viewTokenProtocol\">\n" +
    "        <h2 class=\"section-title\">viewToken Protocol</h2>\n" +
    "        <!--<h2 class=\"section-title\">attentionToken Protocol</h2>-->\n" +
    "        <p>Mechanism Design</p>\n" +
    "        <p>(vT)</p>\n" +
    "        <p>Three Dimensions</p>\n" +
    "        <p>general vT</p>\n" +
    "        <p>user-based viewToken</p>\n" +
    "        <p>content-based viewToken</p>\n" +
    "        <p>ERC-88 Multidimensional standard</p>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        <!--below this is what-->\n" +
    "        <!--talk about smart contract ecosystem with respect to viewtoken-->\n" +
    "        <!--token market & liquidity-->\n" +
    "\n" +
    "        <p>Incentive compatibility</p>\n" +
    "        <p>between bonded node incentives and protocol security guarantees.</p>\n" +
    "        <p>minting logic</p>\n" +
    "        <p>Strategy-proof</p>\n" +
    "        <p>Direct-revelation mechanism: agents declare their types to the mechanism, leading to a decision and set of transfers</p>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "\n" +
    "        <p>Our central task is to specify a mechanism that incentivizes rational agents to behave in a mannor, based on their private information, that lead to socially desired outcomes.</p>\n" +
    "        <p>Implementation Theory ~ in equilibrium, the mapping from types to outcomes is the same as the mapping that would be chosen by the social choice function. Such intentional structure is required in dominant strategies or Bayes-Nash equilibrium.</p>\n" +
    "        <p>adding a mechanism turns a Bayesian setting into “game form”</p>\n" +
    "        <p>Mechanism: a pair of strategy spaces and a function which maps any strategy to resulting social decisions and transfers.</p>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        <p>AttentionTokens are continuously minted based on viewer actions.</p>\n" +
    "        <p>Desired Outcomes: Creators will produce high-quality content, which drives progress with energy and information. Bidders will reward creators who add extrinsic value to unified groups coordinating around shared goal(s). Viewers will be more accountable for what they watch because they want their own attention to be more valuable. Overall, cre8coin optimizes for individual belief systems by gamifying the discovery of qualitative schelling points. For Bidio participants, utility means fulfillment of purpose with guaranteed authenticity.</p>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        <p>Individuals’ utilities are a function of their type, and the output of their decisions.</p>\n" +
    "        <p>Designers control the choices of their mechanisms, but not the players or their types.</p>\n" +
    "        <p>There is no loss in generality by just focusing on truthful, direct-revelation mechanisms</p>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        <!--what: way too much -->\n" +
    "        <p>When the contour lines of two functions f and g are tangent, their gradient vectors are parallel and proportional. Don’t forget corner solutions!</p>\n" +
    "        <p>Lagrange multiplier technique lets you find the maximum or minimum of a multivariable function f (x,y,…) when there is some constraint on the input values you are allowed to use.</p>\n" +
    "        <p>L(x, y, λ) = R(x, y) - λ(B(x, y) - b)</p>\n" +
    "        <p>Set gradient of L = 0 (direction of steepest ascent)</p>\n" +
    "        <p>From constrained optimization to unconstrained optimization:</p>\n" +
    "        <p>▽R = λ▽B</p>\n" +
    "        <p>λ* = dM* / db*</p>\n" +
    "        <p>Constraint functions with same input space must be some constant C</p>\n" +
    "        <p>Asymmetric information interferes with operation of markets</p>\n" +
    "        <p>Hidden information</p>\n" +
    "        <p>Compatibility between the bonded nodes’ incentives and protocol security guarantees -- contract based minting of ERC88</p>\n" +
    "        <p>Individual Rationality</p>\n" +
    "        <p>weak budget balance (also referred to as feasibility) requires that the mechanism not pay out more than it receives</p>\n" +
    "        <p>Vickrey-Clarke Groves mechanisms are highly susceptible to collusion. They allow bad actors to add arbitrary terms to the payout that individual participants can’t influence without changing the underlying incentives.</p>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        <!--AD TECH PROB-->\n" +
    "        <p>For years in the ad-tech industry, waterfall auction dynamics have provided unfair advantages to advertisers and their media buying agencies. However, publishers recently gained the power to sell ‘programmatic guaranteed’ inventory. \n" +
    "        <p>Bidio’s direct bidding mechanism enables brands to buy exclusive rights to specific tokens, which are continuously minted as viewers pay attention.</p>\n" +
    "\n" +
    "        <p>Bidio’s continuous auction mechanism runs without any input from the creator, and it proposes outcomes that would maximize utility of sponsors. Utilizing the multidimensional viewToken protocol, creators know which brands are willing to pay and how much per token.</p>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        <p>Complete Transparency and Control</p>\n" +
    "        <p>At any given time, individual creators have the choice to approve a number of sponsor(s) per video. Since the creator has no way of affecting who will pay the most, she is effectively trying to maximize the sum of her and her viewers’ utility.</p>\n" +
    "         \n" +
    "\n" +
    "\n" +
    "        <!--\n" +
    "        For every individual, we run the mechanism without her and choose the outcome that maximizes the utility of all other players given their reported types. Then we include the individual and run the mechanism again. The latter is the outcome chosen. Each player pays (or collects) the difference between the sum of utilities for the other players in the two cases. Effectively, this payment is equivalent to the individual’s social cost or benefit. Since the individual has no way of affecting the sum of utilities that occurs without her, she is effectively trying to maximize the sum of her own and everyone else’s utility. But this is exactly the same as maximizing total social utility!\n" +
    "        Aligning everyone’s incentives not only ensures incentive-compatibility, but also guarantees efficiency. It is easy to find ex-post individually rational and weakly budget balanced versions of this mechanism with some pretty mild additional assumptions. We can also add arbitrary terms to the payout that the individual can’t influence (such as giving each individual some constant amount regardless of the outcome), without changing the underlying incentives. \n" +
    "        Which sponsor aligns with the creative purpose?!\n" +
    "        Algorithmic Game Theory ~ Tim Roughgarden\n" +
    "        Lecture 1: https://www.youtube.com/watch?v=TM_QFmQU_VA\n" +
    "        Lecture 2: https://www.youtube.com/watch?v=z1QZqYuiGa8\n" +
    "        Lecture 3: https://www.youtube.com/watch?v=9qZwchMuslk\n" +
    "        Lecture 4: https://www.youtube.com/watch?v=BMoSLmuJsak\n" +
    "        Lecture 5: https://www.youtube.com/watch?v=jQsAoMcxlIo\n" +
    "        Revenue Maximization\n" +
    "        What if we don’t know v? How should we set r?\n" +
    "        Not even clear it’s a well-defined, meaningful mathematical question. Revelation principle boils down to figuring out the last price you’re willing to offer… Truthfully, in terms of revenue, unlike social surplus, different auctions do better with different inputs.\n" +
    "        Average Case Analysis ~ posit a distribution over inputs (private valuations) and seek to do as well as possible on expectation with respect to a distribution F\n" +
    "        F = d(z)\n" +
    "        probability that the realization is at most z ~ range is [0, 1]\n" +
    "        Fi with density fi on { 0, vmax }\n" +
    "        mechanism designers know the independent distributions, but not the actual realization\n" +
    "        Some introductory concepts…\n" +
    "        Quasi-linear model of utility\n" +
    "        Braess Paradox\n" +
    "        Intractability Critique of Nash Equilibrium\n" +
    "        Price of Anarchy\n" +
    "        Complexity ~ theoretical frameworks used for modeling complex systems:\n" +
    "        self-organization\n" +
    "        nonlinear systems\n" +
    "        network theory\n" +
    "        adaptive systems\n" +
    "        Our mechanism was designed for single-item auctions: exchanging multidimensional attentionTokens, which represent viewer actions.\n" +
    "        Three Orthogonal Properties of Ideal Auctions\n" +
    "        Strong incentive guarantees\n" +
    "        DSIC mechanism (dominant-strategy incentive-compatible)\n" +
    "        Truthful bidding maximizes utility and guarantees non-negative utility\n" +
    "        Maximizes the social surplus\n" +
    "        ∑ vi xi\n" +
    "        Runs in polynomial (or linear) time\n" +
    "        Computational efficiency\n" +
    "        As a participant, it’s easy to figure out what to do.\n" +
    "        As the designer, it’s easy to predict what will happen...\n" +
    "        Example: Google ~ sponsored search auctions </ol>\n" +
    "\n" +
    "        http://campuspress.yale.edu/dirkbergemann/files/2012/04/lecture22auction.pdf\n" +
    "        Understanding the design space:\n" +
    "        single-parameter environments\n" +
    "        n bidders\n" +
    "        i has a private valuation vi\n" +
    "        feasible allocations\n" +
    "        X = { (x1 , ... xn ) }\n" +
    "        For sealed bids:\n" +
    "        1st-price auction ~ if you bid your value, you are guaranteed zero utility.\n" +
    "        How much less? Depends on what you think other people are bidding.\n" +
    "        2nd-price (Vickrey) auction - do not have to reason about competitors\n" +
    "        Problem: collusion\n" +
    "        For sealed bid auctions:\n" +
    "        Step 1: Collect bids\n" +
    "        b = ( b1 , … bn )\n" +
    "        Step 2: Allocation Rule ~ deciding who is the winner as a function of the available bids\n" +
    "        Choose x(b) ∈ X ∈ ℝn\n" +
    "        Step 3: Payment rule ~ who pays what (how much)\n" +
    "        Choose p(b) ∈ ℝn\n" +
    "        ^ are these rules coupled in the right way?\n" +
    "        i’s utility on bid profile b\n" +
    "        vi * xi(b) - pi(b)\n" +
    "        “sellers won’t pay bidders”\n" +
    "        pi(b) ∈ [ 0, bi * xi(b) ]\n" +
    "        ^ guarantees non-negative utility\n" +
    "        Defining key properties of allocation rules:\n" +
    "        implementable: there is a payment rule P such that (x, p) is DSIC\n" +
    "        monotone: amount of stuff can only go up\n" +
    "        Intuitively a much more operational condition\n" +
    "        If ∀i, ∀b-i \n" +
    "        xi ( z, b-i ) is nondecreasing in its bid z\n" +
    "        Instantiating Myerson’s Lemma\n" +
    "        Checking if ‘implementable’ reduces to checking if ‘monotone’\n" +
    "        Design space is trivial for payment rules\n" +
    "        There is a unique payment rule P such that (x, p) is DSIC\n" +
    "        P is given by an explicit formula\n" +
    "        If (x, p) is DSIC, what does P have to look like?\n" +
    "        Fix i, b-i , write x(z), p(z) for xi (z, b-i) & pi (z, b-i)\n" +
    "        Piecewise Constant Allocation Rules\n" +
    "\n" +
    "        Swapping trick:\n" +
    "        If (x, p) is DSIC, then 0 < z < y\n" +
    "        “Payment Difference Sandwich”\n" +
    "        z(x(y) - x(z)) < p(y) - p(z) < y(x(y) - x(z))\n" +
    "        Implies that if x is not monotone, then x is not implementable\n" +
    "        Revenue-Maximizing Auctions\n" +
    "        With one bidder, “take it or leave it”\n" +
    "        Expected revenue of posted price r = r * (1 - F(r))\n" +
    "        F is the distribution (probability that v is at least r)\n" +
    "        Any single parameter environment with any distribution, characterize the ‘optimal auction’\n" +
    "        Regular (means virtual value function = strictly increasing) vs. irregular\n" +
    "        Figure out the auction which maximizes expected revenue with respect to distributions F1-N\n" +
    "        revelation principle ~ you give me any auction with guaranteed dominant strategies, there is an equivalent auction in terms of revenue, so that truth-telling is a dominant strategy.\n" +
    "        b = v\n" +
    "        allocation rule(s): monotone and bounded\n" +
    "        Payment rule(s):\n" +
    "\n" +
    "        Someone doesn’t always win… Creators will often set reserve prices, or simply choose to promote their own brand.\n" +
    "        Virtual value: in auction theory, particularly Bayesian-optimal mechanism design, a virtual valuation of an agent is a function that measures the surplus that can be extracted from that agent. Typical application is a seller who wants to sell an item to a potential buyer and wants to decide on the optimal price. Independently and identically distributed bidders\n" +
    "        General (Multi-Parameter) Mechanism Design\n" +
    "        N bidders\n" +
    "        Finite set of outcomes\n" +
    "        i has private valuation vi for each set of outcomes\n" +
    "        VCG Mechanism\n" +
    "        Theorem: in every environment, there is a DSIC surplus-maximizing mechanism\n" +
    "        Problem with polynomial time\n" +
    "        Why not?\n" +
    "        Elicitation\n" +
    "        2m private parameters per bidder\n" +
    "        Gathering data is not feasible\n" +
    "        https://theory.stanford.edu/~tim/f13/l/l3.pdf\n" +
    "        http://users.eecs.northwestern.edu/~hartline/amd03.pdf\n" +
    "        Dimensionality Reduction: http://theory.stanford.edu/~tim/s17/l/l4.pdf\n" +
    "        Creating Decentralized Governance\n" +
    "        Gibbard (1973) and Satterthwaite (1975) give an impossibility result similar in spirit to Arrow's impossibility theorem. For a very general class of games, only \"dictatorial\" social choice functions can be implemented.\n" +
    "        A social choice function f () is dictatorial if one agent always receives his most-favored goods allocation, for f (𝜭), ∃i ϵI ui(x, 𝜭i) > ui(x’, 𝜭i) ∀x’ ϵ X\n" +
    "        The theorem states that under general conditions any truthfully implementable social choice function must be dictatorial,\n" +
    "        X is finite and contains at least three elements\n" +
    "        Preferences are rational\n" +
    "        f (𝜭) = X\n" +
    "        It states that for every voting rule, one of the following three things must hold:\n" +
    "        The rule is dictatorial\n" +
    "        The rule limits the possible outcomes to two alternatives only; or\n" +
    "        The rule is susceptible to tactical voting: in certain conditions some voter's sincere ballot may not defend their opinion best.\n" +
    "        Benchmark Model (vs. Game-Theoretic)\n" +
    "        All of the bidders are risk-neutral.\n" +
    "        Each bidder has a private valuation for the item independently drawn from some probability distribution.\n" +
    "        The bidders possess symmetric information.\n" +
    "        The payment is represented as a function of only the bids.\n" +
    "        Private vs. Common Value\n" +
    "        Revenue Equivalence ~ concept in auction theory that states that given certain conditions, any mechanism that results in the same outcomes (i.e. allocates items to the same bidders) also has the same expected revenue ( max bj ).\n" +
    "        Simple Auctions:\n" +
    "        The Price of Anarchy and Equilibrium Welfare Guarantees\n" +
    "        Communication Complexity and Impossibility Results\n" +
    "        Complexity Theory and Algorithmic Game Theory: Some New Connections\n" +
    "        Complexity governs the answer to these basic economic questions:\n" +
    "        Why Prices Need Algorithms:\n" +
    "            Walrasian Equilibria ~ indivisible goods\n" +
    "        Every bidder gets favorite bundle\n" +
    "        The market should clear\n" +
    "        V is the set of all monotone, sub-modular functions OR single-minded “and” bidders\n" +
    "        Suppose that, for a class V of valuations, “welfare maximization” doesn’t reduce to “utility maximization” (polynomial Turing reductions), there are markets with valuations in V without Walrasian equilibria. This forges a link between a purely economic question and complexity theory as we know it.\n" +
    "        Welfare-maximization should be no harder than utility-maximization.\n" +
    "        Barriers to Near-Optimal Equilibria: “The Borders of Border’s Theorem”\n" +
    "        specifying the model of user utilities and deriving clear design objectives; maximizing the amount to be redistributed can become a non-trivial component of their utility\n" +
    "        sponsor strategy ~ adding extrinsic value through bidding (staking)\n" +
    "\n" +
    "        -->\n" +
    "\n" +
    "\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section class=\"cre8coinGovernance\">\n" +
    "        <h2 class=\"section-title\">cre8coin: Governance</h2>\n" +
    "\n" +
    "        <p>Democratically elected NGOs</p>\n" +
    "        <p>Generalized crypto-utility governance</p>\n" +
    "        <p>Master account governance - price setting, budgeting, smart contact implementation</p>\n" +
    "        <p>Mechanisms of Coordination</p>\n" +
    "\n" +
    "        <!--<a href=\"https://medium.com/@DimitriDeJonghe/curated-governance-with-stake-machines\">curanted gov</a>\n" +
    "        <a href=\"https://medium.com/@Vlad_Zamfir/against-on-chain-governance-a4ceacd040ca\">against on-chain gov</a>\n" +
    "        <a href=\"http://vitalik.ca/general/2017/12/17/voting.html\">voting</a>-->\n" +
    "\n" +
    "\n" +
    "        <!--\n" +
    "        incentives // tokens\n" +
    "        cre8coin\n" +
    "        How should the network reward miners?\n" +
    "        viewToken\n" +
    "        clickToken\n" +
    "        embedToken\n" +
    "         \n" +
    "        Requirements:\n" +
    "        ex-ante Individual Rationality\n" +
    "        Weak Balanced Budget\n" +
    "        Nash equilibrium Incentive compatibility\n" +
    "        ex-post Pareto efficiency\n" +
    "\n" +
    "        one coin, one vote\n" +
    "        problem: plutarchy\n" +
    "        one person, one vote\n" +
    "        problem: sybil attacks\n" +
    "\n" +
    "        paradox of voting ~ for a rational, self-interested voter, the costs of voting will normally exceed the expected benefits\n" +
    "\n" +
    "        Arrow’s Impossibility Theorem\n" +
    "\n" +
    "        Slashing conditions:\n" +
    "        Copyright infringement\n" +
    "        Voting for low-quality content?\n" +
    "\n" +
    "\n" +
    "        Delphi\n" +
    "        -->\n" +
    "\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section class=\"hyperledgerSawtoothEthereum\">\n" +
    "        <h2 class=\"section-title\"><a href=\"https://www.hyperledger.org/blog/2017/08/22/hello-world-meet-seth-sawtooth-ethereum\">Hyperledger Sawtooth Ethereum</a></h2>\n" +
    "        <p>peers and mining, Proof of Elapsed Time (PoET), browser mining</p>\n" +
    "        <p>unification of machine and human attention</p>\n" +
    "        \n" +
    "        <!--https://jsecoin.com-->\n" +
    "\n" +
    "\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "    </section>\n" +
    "    \n" +
    "    <section class=\"conclusion\">\n" +
    "        <h2 class=\"section-title\">Conclusion</h2>\n" +
    "\n" +
    "        <p>cre8, authentic, universal income</p>\n" +
    "\n" +
    "        <p>Information will be tokenized, including various metrics for attention.</p>\n" +
    "        <p>Through a commitment to innovation around governance, performance and scalability..</p>\n" +
    "        <div class=\"spacing-25\"></div>\n" +
    "\n" +
    "\n" +
    "        <!-- Initially, we’re making the viewToken protocol available to all creators within cre8coin’s network. The Bidio platform is already up and running, and we’re committed to innovation around governance, performance and scalability. This powerful cryptosystem mints fractalized networks of multidimensional viewTokens. \n" +
    "\n" +
    "        Anyone can register and purchase cre8coin with Stripe. Our existing platform stores value in wallets attached to each user’s account - you can see an example on this profile. Art, journalism and entertainment must evolve with support from the digital advertising industry. Let’s create communities around the monetization of high-quality content.\n" +
    "\n" +
    "        Never stop creating! Sign up to start earning viewToken and cre8coin today.-->\n" +
    "\n" +
    "        <!--\n" +
    "        Information will eventually be tokenized, including various metrics for attention. Initially, we’re making the viewToken protocol available to all creators within cre8coin’s network. The Bidio platform is already up and running, and we’re committed to innovation around governance, performance and scalability. This powerful cryptosystem mints fractalized networks of multidimensional viewTokens. Soon, Bidio and cre8coin will release the official roadmap.\n" +
    "\n" +
    "        Anyone can register and purchase cre8coin with Stripe. Our existing platform stores value in wallets attached to each user’s account - you can see an example on this profile. Soon, Bidio will announce the pre-sale of cre8coin to develop a truly decentralized YouTube for the sake of creativity. Art, journalism, entertainment and general viewership must evolve with support from the digital advertising industry. Let’s create valuable communities around quality content.\n" +
    "\n" +
    "        Never stop creating! Sign up to start earning viewToken and cre8coin today.\n" +
    "\n" +
    "        Continuous English Auction ~ problem of monotonicity\n" +
    "\n" +
    "        Allocation Rule: creator (seller) decides who is currently winning the auction\n" +
    "        Payment Rule: reserve price set by creator\n" +
    "\n" +
    "        http://www.cramton.umd.edu/papers2000-2004/cramton-simultaneous-ascending-auction.pdf\n" +
    "\n" +
    "        Myerson–Satterthwaite Theorem ~ important result in mechanism design and the economics of asymmetric information, which says there is no efficient way for two parties to trade a good when they each have secret, probabilistically different valuations for it, without the risk of forcing one party to trade at a loss. \n" +
    "        -->\n" +
    "\n" +
    "        <h3 style=\"font-size:26px\">RESOURCES</h3><br><br>\n" +
    "        <a href=\"https://people.cs.uchicago.edu/~teutsch/papers/ico.pdf\">[1] ICO</a><br>\n" +
    "        <a href=\"http://vitalik.ca/general/2017/06/09/sales.html\">[2] SALES</a><br>\n" +
    "        <a href=\"https://medium.com/@Vlad_Zamfir/a-safe-token-sale-mechanism-8d73c430ddd1\">[3] SALE MECHANISMS</a><br>\n" +
    "        <a href=\"http://continuations.com/post/161776542685/optimal-token-sales\">[4] OPTIMAL SALES</a><br>\n" +
    "        <a href=\"SAFTproject.com\">[5] SAFT PROJECT</a><br>\n" +
    "        <a href=\"https://www.sec.gov/news/public-statement/statement-clayton-2017-12-11#_ftn1\">[6] SEC STATEMENT</a><br>\n" +
    "        <a href=\"https://web.stanford.edu/~jacksonm/mechtheo.pdf\">[7] MECH DESIGN</a><br>\n" +
    "        <a href=\"https://users.cs.duke.edu/~conitzer/thesis_ch4.pdf\">[8] THESIS</a><br>\n" +
    "        <a href=\"http://www.eecs.harvard.edu/~parkes/cs286r/spring07/papers/myerson.pdf\">[9] MYERSON</a><br>\n" +
    "        <a href=\"http://mason.gmu.edu/~rhanson/futarchy.html\">[10] FUTARCHY</a><br>\n" +
    "        <a href=\"https://pdfs.semanticscholar.org/54aa/bd54018e9b9750bc0c1f749f58e5a9f2efa4.pdf\">[11] THESIS</a><br>\n" +
    "        <a href=\"https://en.wikipedia.org/wiki/Myerson%E2%80%93Satterthwaite_theorem\">[12] SATTERTHWAITE THEOREM</a><br>\n" +
    "        <a href=\"https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem\">[13] ARROWS IMPOSSIBILY THEOREM</a><br>\n" +
    "        <a href=\"https://people.csail.mit.edu/costis/thesis.pdf\">[14] THESIS</a><br>\n" +
    "        <a href=\"https://coincenter.org/entry/what-are-decentralized-markets\">[15] DECENTRALIZED MARKETS</a><br>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <div class=\"spacing-50\"></div>\n" +
    "    </section>\n" +
    "\n" +
    "    <!--<section class=\"roadMap\">\n" +
    "        <h2 class=\"section-title\">Road Map</h2>\n" +
    "    </section>-->\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("video/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("video/index.tpl.html",
    "<div style=\"height:100%\">\n" +
    "	<div style=\"background:#000;width:100%;border-bottom: 3px solid #FE9A2E;\">\n" +
    "		<div class=\"spacing-25\"></div>\n" +
    "		<div class=\"container\">\n" +
    "			<video \n" +
    "				class=\"video-js vjs-default-skin\"\n" +
    "				controls preload=\"auto\" \n" +
    "				width=\"640\" \n" +
    "				height=\"264\" \n" +
    "				fluid=\"true\"\n" +
    "				poster=\"{{video.media.poster}}\" \n" +
    "				vjs-media=\"media\"\n" +
    "				vjs-ratio=\"16:9\"\n" +
    "				vjs-video\n" +
    "				playsinline\n" +
    "				>\n" +
    "			</video>\n" +
    "			<a ng-show=\"video.campaign.campaignImageUrl\" class=\"vid-clickthrough\" ng-click=\"clickThrough()\"><img src=\"{{video.campaign.campaignImageUrl}}\"></a>\n" +
    "			<div class=\"spacing-15\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"container\" style=\"text-align:left; min-height:350px\">\n" +
    "		<div>\n" +
    "			<div class=\"spacing-15\"></div>\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-md-6\">\n" +
    "					<h2>{{video.title}}</h2> \n" +
    "				</div>\n" +
    "				<div class=\"col-md-6\" style=\"text-align:right\">\n" +
    "					<h3 style=\"display:inline;margin:10px\"><i class=\"fa fa-play\"></i> {{video.viewCount}}</h3>\n" +
    "					<h3 style=\"display:inline;margin:10px\"><i class=\"fa fa-play\"></i> {{video.liveViewCount}}</h3>\n" +
    "					<h3 style=\"display:inline;margin:10px\"><i class=\"fa fa-hand-pointer-o\"></i> {{video.clickCount}}</h3>\n" +
    "					<h3 style=\"display:inline;margin:10px\"><i class=\"fa fa-money\"></i> {{highestBid.value}}</h3>\n" +
    "					<h3 style=\"display:inline;margin:10px\" class=\"\" ng-click=\"share()\"><a><i class=\"fa fa-share\"></i>  Share</a></h3>\n" +
    "					<h3 style=\"display:inline;margin:10px\" class=\"\" ng-click=\"bid()\" ng-hide=\"!currentUser\"><a><i class=\"fa fa-bar-chart\"></i> Bid</a></h3>\n" +
    "					<h3 style=\"display:inline;margin:10px\" class=\"\" ng-click=\"clickThrough()\"><a><img style=\"height:24px\" src=\"{{video.campaign.campaignImageUrl}}\"> {{video.campaign.prompt}}</a></h3>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"spacing-5\"></div>\n" +
    "\n" +
    "			<hr>\n" +
    "\n" +
    "			<h2><a href=\"/member/{{video.user.username}}\"><img src=\"{{video.user.profile.avatarUrl}}\">{{video.user.username}}</a></h2>\n" +
    "			<div class=\"spacing-15\"></div>\n" +
    "\n" +
    "			<p>{{video.description}}</p>\n" +
    "\n" +
    "			<div class=\"spacing-25\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("video/templates/bid.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("video/templates/bid.tpl.html",
    "<md-content layout-padding>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"container create-modal\">\n" +
    "        <h2><span class=\"bidio-orange\">Bid on </span>{{video.title}}</h2>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <p style=\"font-weight:bold\">Price per click: ${{highestBid.value | number : 2}}</p>\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <md-input-container layout-fill>\n" +
    "            <label>Price per Click</label>\n" +
    "            <input ng-model=\"bid.value\" type=\"text\">\n" +
    "        </md-input-container>\n" +
    "        <md-input-container layout-fill>\n" +
    "            <label>Price per Second </label>\n" +
    "            <input ng-model=\"bid.attention\" type=\"text\">\n" +
    "        </md-input-container>\n" +
    "        <div class=\"spacing-10\"></div>\n" +
    "\n" +
    "        <md-input-container layout-fill>\n" +
    "            <a style=\"width:100%\" ui-sref=\"dashboard.campaigns\" class=\"text-center btn anim-button fl-l\"><span class=\"network-name\">Create Campaign</span><i class=\"fa fa-long-arrow-right fa-fw\"></i></a>\n" +
    "        </md-input-container>\n" +
    "\n" +
    "        <div class=\"spacing-5\"></div>\n" +
    "\n" +
    "        <div layout=\"row\">\n" +
    "            <div class=\"text-left\" flex=\"100\" ng-show=\"campaigns.length>0\">\n" +
    "				<select name=\"bid-campaign\" ng-model=\"bid.campaign\" id=\"bid-campaign\" class=\"form-control\" required=\"required\">\n" +
    "					<option value=\"\">Select Campaign</option>\n" +
    "					<option ng-repeat=\"campaign in campaigns\" ng-value=\"campaign.id\"><!--<img ng-src=\"{{campaign.campaignImageUrl}}\">--> {{campaign.title}}</option>\n" +
    "				</select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "        <div class=\"spacing-15\"></div>\n" +
    "        <md-button class=\"md-raised md-accent\" ng-disabled=\"bid.value <= highestBid.value || !bid.campaign\" ng-click=\"createBid(bid)\">Submit</md-button>\n" +
    "        <md-button class=\"md-raised\" ng-click=\"cancel()\">Cancel</md-button>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "</md-content>");
}]);

angular.module("video/templates/shareDialog.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("video/templates/shareDialog.tpl.html",
    "<md-content layout-padding>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "    <div class=\"container create-modal\">\n" +
    "      <form name=\"shareForm\" novalidate>       \n" +
    "        <h2 class=\"create-modal\">Share!</h2>\n" +
    "        <md-button style=\"position:absolute;top:0;right:0;\" ng-click=\"cancel()\" aria-label=\"Close dialog\">\n" +
    "          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n" +
    "        </md-button>\n" +
    "        <hr>\n" +
    "        <div ng-show=\"!shareComplete\" class=\"md-dialog-content\">\n" +
    "          <md-input-container ng-show=\"tweeting\" class=\"md-block\">\n" +
    "              <label>Personalize!</label>\n" +
    "              <textarea name=\"composition\" ng-model=\"share.composition\" md-maxlength=\"{{140 - tweetCompPadding}}\" rows=\"3\" md-select-on-focus md-autofocus></textarea>\n" +
    "          </md-input-container>\n" +
    "          <md-dialog-actions class=\"share-dialog-action-buttons\" layout=\"row\" layout-align=\"center\">\n" +
    "            <md-button class=\"primary md-raised\" style=\"background-color:#3b5998;color: #fff;padding: 0 10px;\" ng-show=\"!tweeting\" ng-click='shareFacebook()'><i class=\"fa fa-facebook\"></i></md-button>\n" +
    "            <md-button class=\"primary md-raised\" style=\"background-color:#55acee;color: #fff;padding: 0 10px;\" ng-show=\"!shareWorking\" ng-disabled=\"shareForm.$invalid\" ng-click='shareTwitter()'><i class=\"fa fa-twitter\"></i></md-button>\n" +
    "            <!-- Loading spinner? -->\n" +
    "            <md-progress-circular ng-show=\"shareWorking\" md-mode=\"indeterminate\"></md-progress-circular>\n" +
    "          </md-dialog-actions>\n" +
    "\n" +
    "          <div class=\"spacing-15\"></div>\n" +
    "          <div class=\"col-md-6\">\n" +
    "            <form>\n" +
    "              <label for=\"link\">Link</label><br>\n" +
    "              <input name=\"link\" value=\"https://www.bidio.co/video/{{video.id}}\" disabled>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-6\">\n" +
    "            <form>\n" +
    "              <label for=\"embed\">Embed</label><br>\n" +
    "              <input name=\"embed\" value=\"<iframe width='560' height='315' src='https://www.bidio.co/v/{{video.id}}' frameborder='0' allowfullscreen></iframe>\" disabled>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div ng-show=\"shareComplete\" class=\"md-dialog-content\">\n" +
    "\n" +
    "          <div ng-show=\"shareSuccess\">\n" +
    "            <h2 class=\"md-headline\">\n" +
    "              Thanks for sharing!\n" +
    "            </h2>\n" +
    "            <div ng-show=\"sharedInHouse\">\n" +
    "              <a href=\"#\" ng-click=\"viewTweet()\">\n" +
    "                View tweet!\n" +
    "              </a>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div ng-show=\"shareFailed\" class=\"md-dialog-content\">\n" +
    "            <h2 class=\"md-headline\">\n" +
    "              Error posting tweet... Try again later.\n" +
    "            </h2>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </form>\n" +
    "      <div style=\"width:500px;max-width:100%\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"spacing-15\"></div>\n" +
    "</md-content>");
}]);

angular.module("videoEmbed/v/index.tpl.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("videoEmbed/v/index.tpl.html",
    "<style>\n" +
    "	video{background-color:black;}\n" +
    "</style>\n" +
    "<div style=\"width:100%;height:100%;\">\n" +
    "	<video \n" +
    "		class=\"video-js vjs-default-skin\"\n" +
    "		controls preload=\"auto\" \n" +
    "		width=\"640\" \n" +
    "		height=\"264\" \n" +
    "		fluid=\"true\"\n" +
    "		poster=\"{{video.thumbnailUrl}}\" \n" +
    "		vjs-media=\"media\"\n" +
    "		vjs-ratio=\"16:9\"\n" +
    "		vjs-video\n" +
    "		playsinline\n" +
    "		webkit-playsinline\n" +
    "		>\n" +
    "	</video>\n" +
    "	<a ng-show=\"video.campaign.campaignImageUrl\" class=\"vid-clickthrough\" ng-click=\"clickThrough()\"><img src=\"{{video.campaign.campaignImageUrl}}\"></a>\n" +
    "</div>");
}]);
