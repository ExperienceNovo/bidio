angular.module( 'services.config', ['lodash'])
.service('config',['lodash', function(lodash) {
	return {
		siteName: 'bidio',
		siteUrl: '/',
		apiUrl: '/api',
		currentUser: false
	};
}]);