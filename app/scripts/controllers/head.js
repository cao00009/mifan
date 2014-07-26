// Generated by CoffeeScript 1.7.1
"use strict";
Mifan.controller("headCtrl", function($scope) {
  $scope.dropdownOpen = false;
  $scope.toggleDropdown = function() {
    return $scope.dropdownOpen = !$scope.dropdownOpen;
  };
  $scope.support = function() {
    return alert(1);
  };
  $scope.arrowNav = {};
  $scope.$watch("currentPage", function() {
    switch ($scope.currentPage) {
      case "home":
        return $scope.arrowNav = {
          left: 20,
          hide: false
        };
      case "msg":
        return $scope.arrowNav = {
          left: 90,
          hide: false
        };
      case "me":
        return $scope.arrowNav = {
          left: 176,
          hide: false
        };
      case "friend":
        return $scope.arrowNav = {
          left: 260,
          hide: false
        };
      default:
        return $scope.arrowNav = {
          left: 0,
          hide: true
        };
    }
  });
  return false;
});