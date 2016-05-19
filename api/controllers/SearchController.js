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

		var query = {
			$text: {
			  $search: searchQuery
			}
		};

		var options = {
			score: {
				$meta: 'textScore'
			}
		}

		Video.native(function(err, collection){
			if (err){return res.negotiate(err);}

			collection
			.find(query, options)
			.sort(options)
			.skip(parseInt(skip))
			.limit(parseInt(limit))
			.toArray(function(err,result){
				if (err){
					return res.negotiate(err);
				}
				return res.json(result);
			});
			
		});
	},
};