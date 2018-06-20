/**
 * SearchController
 *
 * @description :: Server-side logic for managing views
 *
 */

module.exports = {
	search: function (req, res) {
		//TODO: REFACTOR INTO API FRIENDLY REQ.QUERY
		var searchQuery = req.param('searchQuery');
		var limit = req.param('limit');
		var skip = req.param('skip');
		//TODO: MULTIMODEL SEARCH | MORE COMPLEX EVM LOGGING LOGIC..
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
		});
	},
};