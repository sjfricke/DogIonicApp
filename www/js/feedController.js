mainModule.controller('feedController', function($scope, $firebaseArray) {
    
    var syncArray = $firebaseArray(ref.child("images"));
    $scope.images = syncArray;

});
