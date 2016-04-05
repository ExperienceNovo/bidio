var expect = require("chai").expect;
var fs = require("fs");

describe("utilsService", function(){
	describe("randomVid", function(){

		it("returns a random video", function(done){

			this.timeout(30000);

			var vidsArray;

			utilsService.promisify(fs.readdir)
				.then(function(fileNames){
					return Promise.all(
						fileNames.map(function(fileName){
							return utilsService.promisify(fs.readFile, fileName)
						})
					)
				})
				.then(function(files){
					vidsArray = files;
					console.log(files);
					return utilsService.randomVid()
				})
				.then(function(video){
					console.log(video,vidsArray);
					expect(vidsArray).to.deep.contain(video)
				})
				.then(done)

		})

	})
})