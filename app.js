(function (){
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.message = "";

    $scope.check = function() {
      var lunch = $scope.lunchItems;
      if (lunch=="") {
        $scope.message = "Please enter data first";
      } else {
        $scope.message = messageDisplay(lunch);
        }
      };

    function messageDisplay(lunch){
      var separator = ",";
      var stringOfItems = lunch.split(separator);
      var realLength = stringOfItems.length;
      for (var i = 0; i < stringOfItems.length; i++) {
        if (stringOfItems[i].trim() == "" ){
          realLength--;
        }
      };

      if (realLength <= 3) {
        return "Enjoy!";
      } else {
        return "Too much!";
      }
    };

  };
})();
