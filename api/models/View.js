/**
* View.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
        viewCount: {
            type: 'integer'
        },
		date: {
            type: 'string'
        },
        video: {
            model: 'video'
        },
        user: {
            model: 'user'
        }
    }
};

 