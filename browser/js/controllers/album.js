app.controller('AlbumCtrl', function ($scope,/* $rootScope,*/ PlayerFactory, AlbumFactory, $stateParams) {

	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.album.songs);
	};
	AlbumFactory.fetchById($stateParams.albumID)
		.then(function(album) {
				$scope.album = album;
		}).then(null, console.error);
/*
	$rootScope.$on('changeView', function (evt, data) {
		console.log($stateParams:albumID);
		if (data.name == 'oneAlbum') {
			$scope.showMe = true;
			AlbumFactory.fetchById(data.id)
			.then(function (album) {
				$scope.album = album;
			});
		} else {
			$scope.showMe = false;
		}
	});
*/
});
