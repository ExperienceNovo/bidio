angular.module( 'bidio.home', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		},
		resolve: {
			trendingVideos: function(VideoModel){
				return VideoModel.getAll();
			},
			contest: function(ContestModel){
				//return ContestModel.getByUrl("zaxbys");
				return {
					title: "<img class='sponsorPic' src='/images/zaxbys2.png'/> Sponsors Railhawks Tryouts",
					intro: "Zaxby's invites kids (ages 7-15) to submit video auditions for the Carolina RailHawks' summer camps! Each time a person viewing your video clicks on the contest link, we put $0.50 towards the cost for you to attend summer camp. Each video submission may recieve up to $199, and we have pledged to contribute up to $7,000 in total. Come and show your passion for Soccer!",
					contestContent: "<link href='http://boxoffice.etix.com/ticket/exportEvent/defaultExport.css' type='text/css' rel='stylesheet' />" +
					"<img src='https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Carolina_RailHawks.svg/737px-Carolina_RailHawks.svg.png' style='height:250px' />" +
					'<div id="events"><div id="etix_export_events"><div class="cell"><div class="imgHolder"><img src="http://boxoffice.etix.com/ticket/json/files/get?file=c94f7aa4-cfc0-400f-8182-4cb1d334560d&amp;alt=150w"></div><span class="eventName">Carolina RailHawks vs. Ottawa Fury FC<br></span><span class="cityStateCountry">CARY, NC, UNITED STATES<br></span><span class="eventTime">Saturday, April 16, 2016  7:30 PM<br></span><span class="eventPrice">Price: $12.00 - $77.00<br></span><span><a href="http://boxoffice.etix.com/ticket/p/5135613" target="_blank">Order Tickets Now</a><br></span><span class="status"></span><div class="clear"></div></div><div class="cell"><div class="imgHolder"><img src="http://boxoffice.etix.com/ticket/json/files/get?file=43c90559-ee27-4133-8a03-171aca61bdff&amp;alt=150w"></div><span class="eventName">Carolina RailHawks vs. Fort Lauderdale Strikers <br></span><span class="cityStateCountry">CARY, NC, UNITED STATES<br></span><span class="eventTime">Saturday, May 7, 2016  7:30 PM<br></span><span class="eventPrice">Price: $12.00 - $77.00<br></span><span><a href="http://boxoffice.etix.com/ticket/p/7671760" target="_blank">Order Tickets Now</a><br></span><span class="status"></span><div class="clear"></div></div><div class="cell"><div class="imgHolder"><img src="http://boxoffice.etix.com/ticket/json/files/get?file=59cd3bda-3db8-4e42-84a9-5f625ac0deed&amp;alt=150w"></div><span class="eventName">Carolina RailHawks vs. Miami FC <br></span><span class="cityStateCountry">CARY, NC, UNITED STATES<br></span><span class="eventTime">Saturday, May 14, 2016  7:30 PM<br></span><span class="eventPrice">Price: $6.00 - $77.00<br></span><span><a href="http://boxoffice.etix.com/ticket/p/6609842" target="_blank">Order Tickets Now</a><br></span><span class="status"></span><div class="clear"></div></div><div class="cell"><div class="imgHolder"><img src="http://boxoffice.etix.com/ticket/json/files/get?file=f64e83c8-3e85-48eb-b061-6f37b80801fb&amp;alt=150w"></div><span class="eventName">Carolina RailHawks vs. Jacksonville Armada <br></span><span class="cityStateCountry">CARY, NC, UNITED STATES<br></span><span class="eventTime">Saturday, June 4, 2016  7:30 PM<br></span><span class="eventPrice">Price: $12.00 - $75.00<br></span><span><a href="http://boxoffice.etix.com/ticket/p/8856763" target="_blank">Order Tickets Now</a><br></span><span class="status"></span><div class="clear"></div></div><div class="cell"><div class="imgHolder"><img src="http://boxoffice.etix.com/ticket/json/files/get?file=28424cb9-fa2e-459f-adaa-2f71f7771eee&amp;alt=150w"></div><span class="eventName">Carolina RailHawks vs. Tampa Bay Rowdies<br></span><span class="cityStateCountry">CARY, NC, UNITED STATES<br></span><span class="eventTime">Saturday, July 9, 2016  7:30 PM<br></span><span class="eventPrice">Price: $12.00 - $77.00<br></span><span><a href="http://boxoffice.etix.com/ticket/p/5791110" target="_blank">Order Tickets Now</a><br></span><span class="status"></span><div class="clear"></div></div><div class="cell"><div class="imgHolder"><img src="http://boxoffice.etix.com/ticket/json/files/get?file=5f113641-1a26-4658-870d-21871ad89fa6&amp;alt=150w"></div><span class="eventName">Carolina RailHawks vs. Miami FC <br></span><span class="cityStateCountry">CARY, NC, UNITED STATES<br></span><span class="eventTime">Friday, July 22, 2016  7:30 PM<br></span><span class="eventPrice">Price: $12.00 - $77.00<br></span><span><a href="http://boxoffice.etix.com/ticket/p/2717351" target="_blank">Order Tickets Now</a><br></span><span class="status"></span><div class="clear"></div></div><div class="cell"><div class="imgHolder"><img src="http://boxoffice.etix.com/ticket/json/files/get?file=f59300b0-9987-45c9-88eb-55c16139ca9e&amp;alt=150w"></div><span class="eventName">Carolina RailHawks vs. Puerto Rico FC<br></span><span class="cityStateCountry">CARY, NC, UNITED STATES<br></span><span class="eventTime">Saturday, August 13, 2016  7:30 PM<br></span><span class="eventPrice">Price: $12.00 - $77.00<br></span><span><a href="http://boxoffice.etix.com/ticket/p/5123036" target="_blank">Order Tickets Now</a><br></span><span class="status"></span><div class="clear"></div></div><div class="cell"><div class="imgHolder"><img src="http://boxoffice.etix.com/ticket/json/files/get?file=254d01cb-89cd-4523-8e51-0b19f43e819e&amp;alt=150w"></div><span class="eventName">Carolina RailHawks vs. Indy Eleven<br></span><span class="cityStateCountry">CARY, NC, UNITED STATES<br></span><span class="eventTime">Saturday, August 20, 2016  7:30 PM<br></span><span class="eventPrice">Price: $12.00 - $77.00<br></span><span><a href="http://boxoffice.etix.com/ticket/p/8299959" target="_blank">Order Tickets Now</a><br></span><span class="status"></span><div class="clear"></div></div><div class="cell"><div class="imgHolder"><img src="http://boxoffice.etix.com/ticket/json/files/get?file=f9deefd4-d733-4038-8065-4d436ac1f3e5&amp;alt=150w"></div><span class="eventName">Carolina RailHawks vs. Jacksonville Armada <br></span><span class="cityStateCountry">CARY, NC, UNITED STATES<br></span><span class="eventTime">Saturday, September 3, 2016  7:30 PM<br></span><span class="eventPrice">Price: $12.00 - $77.00<br></span><span><a href="http://boxoffice.etix.com/ticket/p/6902539" target="_blank">Order Tickets Now</a><br></span><span class="status"></span><div class="clear"></div></div><div class="cell"><div class="imgHolder"><img src="http://boxoffice.etix.com/ticket/json/files/get?file=07d4bc09-65b9-4fd8-b175-81ecf700c450&amp;alt=150w"></div><span class="eventName">Carolina RailHawks vs. Ottawa Fury FC<br></span><span class="cityStateCountry">CARY, NC, UNITED STATES<br></span><span class="eventTime">Saturday, September 10, 2016  7:30 PM<br></span><span class="eventPrice">Price: $12.00 - $77.00<br></span><span><a href="http://boxoffice.etix.com/ticket/p/5246654" target="_blank">Order Tickets Now</a><br></span><span class="status"></span><div class="clear"></div></div><div class="cell"><div class="imgHolder"><img src="http://boxoffice.etix.com/ticket/json/files/get?file=47012e36-b487-433a-9c10-ecc8e3e863ce&amp;alt=150w"></div><span class="eventName">Carolina RailHawks vs. FC Edmonton<br></span><span class="cityStateCountry">CARY, NC, UNITED STATES<br></span><span class="eventTime">Saturday, September 24, 2016  7:30 PM<br></span><span class="eventPrice">Price: $12.00 - $77.00<br></span><span><a href="http://boxoffice.etix.com/ticket/p/8292434" target="_blank">Order Tickets Now</a><br></span><span class="status"></span><div class="clear"></div></div><div class="cell"><div class="imgHolder"><img src="http://boxoffice.etix.com/ticket/json/files/get?file=7fb65744-550d-4433-8fcc-2f9a29dcbca5&amp;alt=150w"></div><span class="eventName">Carolina RailHawks vs. New York Cosmos<br></span><span class="cityStateCountry">CARY, NC, UNITED STATES<br></span><span class="eventTime">Wednesday, September 28, 2016  7:30 PM<br></span><span class="eventPrice">Price: $11.99 - $77.00<br></span><span><a href="http://boxoffice.etix.com/ticket/p/2311164" target="_blank">Order Tickets Now</a><br></span><span class="status"></span><div class="clear"></div></div><div class="cell"><div class="imgHolder"><img src="http://boxoffice.etix.com/ticket/json/files/get?file=15346184-cf01-4f2d-911d-9fc9e9b175b7&amp;alt=150w"></div><span class="eventName">Carolina RailHawks vs. Fort Lauderdale Strikers <br></span><span class="cityStateCountry">CARY, NC, UNITED STATES<br></span><span class="eventTime">Saturday, October 8, 2016  7:30 PM<br></span><span class="eventPrice">Price: $12.00 - $77.00<br></span><span><a href="http://boxoffice.etix.com/ticket/p/5426302" target="_blank">Order Tickets Now</a><br></span><span class="status"></span><div class="clear"></div></div><div class="cell"><div class="imgHolder"><img src="http://boxoffice.etix.com/ticket/json/files/get?file=84f8abbc-cccb-457f-87b8-add0bf3d1d7e&amp;alt=150w"></div><span class="eventName">Carolina RailHawks vs. Rayo OKC<br></span><span class="cityStateCountry">CARY, NC, UNITED STATES<br></span><span class="eventTime">Wednesday, October 12, 2016  7:30 PM<br></span><span class="eventPrice">Price: $12.00 - $77.00<br></span><span><a href="http://boxoffice.etix.com/ticket/p/4400091" target="_blank">Order Tickets Now</a><br></span><span class="status"></span><div class="clear"></div></div><div class="cell"><div class="imgHolder"><img src="http://boxoffice.etix.com/ticket/json/files/get?file=1acc7840-09d3-4947-a2b7-25c19297a18e&amp;alt=150w"></div><span class="eventName">Carolina RailHawks vs. Minnesota United FC<br></span><span class="cityStateCountry">CARY, NC, UNITED STATES<br></span><span class="eventTime">Saturday, October 22, 2016  7:30 PM<br></span><span class="eventPrice">Price: $12.00 - $77.00<br></span><span><a href="http://boxoffice.etix.com/ticket/p/5508413" target="_blank">Order Tickets Now</a><br></span><span class="status"></span><div class="clear"></div></div></div></div>',
					urlTitle: "zaxbys-railhawks",
					prompt: "Buy tickets to support future champions",
					user: {
						id: 1,
						username: "Zaxby's",
						profile: {
							picture: "images/zaxbys.png"
						}
					},
					price: "0.50",
					videos: [{
						title: "Michael's soccer tryout",
						urlTitle: "michaels-soccer-tryout",
						amazonUrl: "/videos/" + "michaels-soccer-tryout",
						description: "Checkout my vid",
						user: {
							id: 2,
							username: "Michael",
							profile: {
								picture: "/images/silhouette_orange.jpg"
							}
						}
					},
					{
						title: "Jacob's soccer tryout",
						urlTitle: "michaels-soccer-tryout",
						amazonUrl: "/videos/" + "jacob-soccer-tryout",
						description: "Checkout my vid",
						user: {
							id: 2,
							username: "Jacob",
							profile: {
								picture: "/images/silhouette_orange.jpg"
							}
						}
					},
					{
						title: "Elise's soccer tryout",
						urlTitle: "michaels-soccer-tryout",
						amazonUrl: "/videos/" + "elise-soccer-tryout",
						description: "Checkout my vid",
						user: {
							id: 2,
							username: "Elise",
							profile: {
								picture: "/images/silhouette_orange.jpg"
							}
						}
					}]
				}
			}
		}
	});
})

.controller( 'HomeCtrl', function HomeController( $scope, titleService, config, trendingVideos, contest, $sce ) {
	titleService.setTitle('bidio');
	$scope.currentUser = config.currentUser;
	$scope.trendingVideos = trendingVideos;
	contest.title = $sce.trustAsHtml(contest.title)
	$scope.contest = contest;

});
