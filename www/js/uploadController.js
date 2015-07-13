mainModule.controller('uploadController', function($scope, $firebaseArray, $cordovaCamera) {
    
    var syncArray = $firebaseArray(ref.child("images"));
    $scope.images = syncArray;
  

    $scope.upload = function() {
        var options = {
            quality : 80,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : false,
            encodingType: Camera.EncodingType.JPEG,
            popoverOptions: CameraPopoverOptions,
            targetWidth: 1920,
            targetHeight: 2560,
            saveToPhotoAlbum: true
        };
        $cordovaCamera.getPicture(options).then(function(imageData) {
            syncArray.$add({image: imageData}).then(function() {
                alert("Image has been uploaded");
            });
        }, function(error) {
            console.error(error);
        });
    }

     $scope.uploadLibrary = function() {
        var options = {
            quality : 80,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit : false,
            encodingType: Camera.EncodingType.JPEG,
            popoverOptions: CameraPopoverOptions,
            targetWidth: 1920,
            targetHeight: 2560,
            saveToPhotoAlbum: true
        };
        $cordovaCamera.getPicture(options).then(function(imageData) {
            syncArray.$add({image: imageData}).then(function() {
                alert("Image has been uploaded");
            });
        }, function(error) {
            console.error(error);
        });
    }
});