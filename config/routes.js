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
  'get /contests': 'HomeController.index',
  'get /contest/:path': 'HomeController.index',
  'get /contest/:path/:path': 'HomeController.index',
  'get /creators': 'HomeController.index',
  'get /creator/:path': 'HomeController.index',
  'get /dashboard': 'HomeController.index',
  'get /dashboard/:path': 'HomeController.index',
  'get /discover': 'HomeController.index',
  'get /login': 'HomeController.index',
  'get /logout': 'AuthController.logout',
  'get /member/:path': 'HomeController.index',
  'get /register': 'HomeController.index',
  'get /search': 'HomeController.index',
  'get /search/:path': 'HomeController.index',
  'get /sponsors': 'HomeController.index',
  'get /upload': 'HomeController.index',
  'get /video/:id': 'HomeController.index',

  'post /auth/local': 'AuthController.callback',
  'post /auth/local/:action': 'AuthController.callback',

  /**
   * User routes
   */
  'get /api/user': 'UserController.getAll',
  'get /api/user/username/:path': 'UserController.getByUsername',
  'get /api/user/:id': 'UserController.getOne',
  'post /api/user': 'UserController.create',
  'post /api/user/:id': 'UserController.update',
  'delete /api/user/:id': 'UserController.destroy',

  /**
   * Post routes
   */
  'get /api/post': 'PostController.getAll',
  'get /api/post/:id': 'PostController.getOne',
  'get /api/post/url/:path': 'PostController.getByUrlTitle',
  'post /api/post': 'PostController.create',
  'delete /api/post/:id': 'PostController.destroy',


  /**
   * Bid routes
   */
  'get /api/bid/:id': 'BidController.getOne',
  'get /api/bid/me': 'BidController.getMine',
  'get /api/bid/member/:id': 'BidController.getByMember',
  'get /api/bid/video/:id': 'BidController.getByVideo',
  'post /api/bid': 'BidController.create',
  'delete /api/bid/:id': 'BidController.destroy',


  /**
  *	Contest Routes
  */
  'get /api/contest': 'ContestController.getAll',
  'get /api/contest/me': 'ContestController.getMine',
  'get /api/contest/:id': 'ContestController.getOne',
  'get /api/contest/member/:id': 'ContestController.getByMember',
  'get /api/contest/url/:path': 'ContestController.getByUrlTitle',
  // 'get /api/contest/:id': 'ContestController.getSubmittedVideos',
  'post /api/contest': 'ContestController.create',
  'post /api/contest/:id': 'ContestController.update',
  'delete /api/contest/:id': 'ContestController.destroy',

  /**
  *	Video Routes
  */
  'get /api/video': 'VideoController.getAll',
  'get /api/video/me': 'VideoController.getMine',
  'get /api/video/:id': 'VideoController.getOne',
  'get /api/video/member/:id': 'VideoController.getByMember',
  //'get /api/video/url/:path': 'VideoController.getByUrlTitle',
  'post /api/video/upload': 'VideoController.upload',
  'post /api/video': 'VideoController.create',
  'post /api/video/:id': 'VideoController.update',
  'delete /api/video/:id': 'VideoController.destroy',
  'get /videos/:path': 'VideoController.download',


  // If a request to a URL doesn't match any of the custom routes above, it is matched
  // against Sails route blueprints.  See `config/blueprints.js` for configuration options
  // and examples.

};
