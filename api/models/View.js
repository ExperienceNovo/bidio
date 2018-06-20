/**
* View.js
*
* @description :: View Model..
*/

module.exports = {
	attributes: {
        video: {
            model: 'video',
            required: true
		},
        user: {model: 'user'},
        bid: {model: 'bid'}
    }
};

 