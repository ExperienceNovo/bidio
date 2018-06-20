/**
 * Authentication Controller
 *
 * This is merely meant as an example of how your Authentication controller
 * should look. It currently includes the minimum amount of functionality for
 * the basics of Passport.js to work.
 */
var AuthController = {

  login: function (req, res) {
    var strategies = sails.config.passport
      , providers  = {};
    // Get a list of available providers for use in your templates.
    Object.keys(strategies).forEach(function (key) {
      if (key === 'local') return;
      providers[key] = {
        name : strategies[key].name
      , slug : key
      };
    });
    // Render the `auth/login.ext` view
    res.view({
      providers : providers
    , errors    : req.flash('error')
    });
  },

  logout: function (req, res) {
    req.logout();
    res.redirect('/');
  },

  register: function (req, res) {
    res.view({errors: req.flash('error')});
  },

  provider: function (req, res) {
    passport.endpoint(req, res);
  },

  callback: function (req, res) {
    action = req.param('action');
    passport.callback(req, res, function (err, user) {
      req.login(user, function (err) {
        // If an error was thrown, redirect the user to the login which should
        // take care of rendering the error messages.
        if (err) {
          res.redirect(action === 'register' ? '/register' : '/login');
        }
        // Upon successful login, send the user to the homepage were req.user
        // will available.
        else {res.redirect('/dashboard');}
      });
    });
  }
};

module.exports = AuthController;
