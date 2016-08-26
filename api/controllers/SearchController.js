/**
 * ViewController
 *
 * @description :: Server-side logic for managing views
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	search: function (req, res) {
		var searchQuery = req.param('searchQuery');
		var limit = req.param('limit');
		var skip = req.param('skip');
		Video.find()
		.limit(limit)
		.skip(skip)
		.where({
			or: [
				{title: {contains: searchQuery}},
				{urlTitle: {contains: searchQuery}},
			]
		})
		.then(function(models) {
			Video.watch(req);
			Video.subscribe(req, models);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},
};