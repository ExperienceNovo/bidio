var youtubedl = require('youtube-dl');
var AWS = require('aws-sdk');
AWS.config.update({accessKeyId: 'AKIAJ6LR6NCGXZNH4QJQ', secretAccessKey: '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'});
var zlib = require('zlib');
var s3Stream = require('s3-upload-stream')(new AWS.S3());
var stream = require('stream');


function youtubeToS3(youtubeUrl, user){

	var video = youtubedl(youtubeUrl,
		['--format=18'],
		{maxBuffer: Infinity}
	);

	video.on('info', function(info) {
		console.log(info.title);
		console.log(info.size);

		var guid = utilsService.guid()
		var params = {Bucket: 'bidio8', Key: guid + '.mp4'};
		var upload = s3Stream.upload(params);

		upload.on('error', function (error) {
			console.log(error);
		});

		upload.on('part', function (details) {
			console.log(details);
		});

		upload.on('uploaded', function (details) {

			var videoModel = {
				title: info.title, 
				urlTitle: 'youtube-s3', 
				description: info.description, 
				user: user.id,
				amazonUrl: details.Location,
				thumbnailUrl: info.thumbnails[0].url,
			};

			Video.create(videoModel).then(function(model){
				console.log(model)
			});

		});

		video.pipe(upload);

	});

};

module.exports.intervalService = function(){
	//youtubeToS3('https://www.youtube.com/watch?v=aC_GVz5mPA0', {id:'59893fbe6e71920400938c75'});
};