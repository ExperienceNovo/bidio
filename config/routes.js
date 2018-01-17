/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/


  'get /': 'HomeController.index',
  'get /about': 'HomeController.index',
  'get /admin': 'HomeController.index',
  'get /admin/:path': 'HomeController.index',
  'get /account': 'HomeController.index',
  'get /blog': 'HomeController.index',
  'get /blog/:path': 'HomeController.index',
  'get /campaigns': 'HomeController.index',
  'get /campaign/:path': 'HomeController.index',
  'get /campaign/:path/:path': 'HomeController.index',
  'get /creators': 'HomeController.index',
  'get /creator/:path': 'HomeController.index',
  'get /dashboard': 'HomeController.index',
  'get /dashboard/:path': 'HomeController.index',
  'get /dashboard/:path/:path': 'HomeController.index',
  'get /discover': 'HomeController.index',
  'get /forgot': 'HomeController.index',
  'get /forgot/success': 'HomeController.index',
  'get /login': 'HomeController.index',
  'get /logout': 'AuthController.logout',
  'get /market': 'HomeController.index',
  'get /market/:path': 'HomeController.index',
  'get /member/:path': 'HomeController.index',
  'get /privacy': 'HomeController.index',
  'get /register': 'HomeController.index',
  'get /reset/:token': 'HomeController.index',
  'get /reset-success': 'HomeController.index',
  'get /search': 'HomeController.index',
  'get /search/:path': 'HomeController.index',
  'get /token': 'HomeController.index',
  'get /sponsors': 'HomeController.index',
  'get /upload': 'HomeController.index',
  'get /video/:id': 'HomeController.index',

  'get /zaxbys': 'HomeController.index',

  'get /v/:id': {controller:'EmbedController', action:'index', view:'embed/index', locals: {layout: 'embed/embed'}},

  'post /auth/local': 'AuthController.callback',
  'post /auth/local/:action': 'AuthController.callback',
  'get /auth/providers': 'UserController.getPassports',
  'get /auth/:provider': 'AuthController.provider',
  'get /auth/:provider/callback': 'AuthController.callback',
  'delete /auth/providers/:provider': 'UserController.removePassport',

  /**
   * Bid routes
   */
  'get /api/bid/:id': 'BidController.getOne',
  'get /api/bid/me': 'BidController.getMine',
  'get /api/bid/member/:id': 'BidController.getByMember',
  'get /api/bid/video/:id': 'BidController.getByVideo',
  'post /api/bid': 'BidController.create',
  'post /api/bid/:id': 'BidController.update',
  'delete /api/bid/:id': 'BidController.destroy',

  /**
  *	Campaign Routes
  */
  'get /api/campaign': 'CampaignController.getAll',
  'get /api/campaign/me': 'CampaignController.getMine',
  'get /api/campaign/featured': 'CampaignController.getFeatured',
  'get /api/campaign/:id': 'CampaignController.getOne',
  'get /api/campaign/member/:id': 'CampaignController.getByMember',
  'get /api/campaign/url/:path': 'CampaignController.getByUrlTitle',
  'post /api/campaign': 'CampaignController.create',
  'post /api/campaign/check': 'CampaignController.check',
  'post /api/campaign/:id': 'CampaignController.update',
  'delete /api/campaign/:id': 'CampaignController.destroy',


  /**
   * Click routes
   */
  'get /api/click/video/:id': 'ClickController.getByVideo',
  'post /api/click': 'ClickController.create',

  /**
   * Credit routes
   */
  'get /api/credit/me': 'CreditController.getMine',
  'post /api/credit': 'CreditController.stripe',

  /**
   * Order routes
   */
  'post /api/order': 'OrderController.create',


  /**
   * Post routes
   */
  'get /api/post': 'PostController.getAll',
  'get /api/post/url/:path': 'PostController.getByUrlTitle',

  /**
   * Profile routes
   */
  'post /api/profile/:id': 'ProfileController.update',

  /**
   * Search routes
   */
  'get /api/search/:searchQuery/:limit/:skip': 'SearchController.search',

  /**
   * Share routes
   */
  'post /api/share/twitter/:composition/:shareUrl': 'ShareController.shareTwitter',

  /**
   * User routes
   */
  'get /api/user': 'UserController.getAll',
  'get /api/user/me': 'UserController.getMine',
  'get /api/user/username/:path': 'UserController.getByUsername',
  'get /api/user/:id': 'UserController.getOne',
  'post /api/user': 'UserController.create',
  'post /api/user/forgot': 'UserController.forgot',
  'post /api/user/reset/:token': 'UserController.reset',
  'post /api/user/:id': 'UserController.update',
  'delete /api/user/:id': 'UserController.destroy',
  
  'get /api/wallet/:address': 'UserController.getBalance',

  'get /api/token': 'UserController.getTokenBalance',


  /**
  *	Video Routes
  */
  'get /api/video': 'VideoController.getSome',
  'get /api/video/me': 'VideoController.getMine',
  'get /api/video/:id': 'VideoController.getOne',
  //'get /api/video/:limit/:skip': 'VideoController.getSome',
  'get /api/video/member/:id': 'VideoController.getByMember',
  //'get /api/video/url/:path': 'VideoController.getByUrlTitle',
  'post /api/video/upload': 'VideoController.upload',
  'post /api/video': 'VideoController.create',
  'post /api/video/:id': 'VideoController.update',
  'delete /api/video/:id': 'VideoController.destroy',

   /**
   * View routes
   */
  'get /api/view/video/:id': 'ViewController.getByVideo',

  'get /api/pendingTransactions': 'ViewController.blockchainSocket',

  'post /api/view': 'ViewController.create',

  '/.well-known/acme-challenge/ojGqIlbsHofqbR-HmgJVdoOyqjtbq16YbIljFBkJ2WA': 'HomeController.ssl',
  '/.well-known/acme-challenge/Wd3QJxLaf73zK9F9-46blrISyzuic3-p2Q8VHeOLzBc': 'HomeController.ssl2',


  // If a request to a URL doesn't match any of the custom routes above, it is matched
  // against Sails route blueprints.  See `config/blueprints.js` for configuration options
  // and examples.

};
