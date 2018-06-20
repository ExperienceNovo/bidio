/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
  //sails.config.secret = process.env.SECRET;
  intervalService.intervalService();
  sails.services.passport.loadStrategies();
  sails.services.emailservice.loadTemplates().then(function(){
  	cb();
  })
  .catch(function(err){
  	console.log("EMAIL TEMPLATE COMPILATION FAILED", err);
  });
};
