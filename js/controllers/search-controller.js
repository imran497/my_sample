angular.module("flight")
.controller("search-controller", ["$scope","$http","fetchDataService","$interval", function($scope, $http, fetchDataService, $interval){

  /* TO FETCH DATA FROM API */
  var fetchDataPromise = $http.get("http://starlord.hackerearth.com/movieslisting").success(function(data, status){
    return data;
  }).error(function(data, status){
    return status;
  });

  fetchDataPromise.then(function(response){
    $scope.movieContent = response.data;
    for(var i = 0, len = $scope.movieContent.length; i < len; i++){
      $scope.movieContent[i].imageUrl = "images/movie/"+(Math.floor(Math.random()*10) + Math.floor(Math.random()*10)) +".jpg";
    }
  });

  // TO SHOW THE SINGLE MOVIE DETAILS IN MODAL
  $scope.showDetails = function(data){
    $scope.singleMovieData = data;
  }




    /*window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

    if (!window.indexedDB) {
       window.alert("Your browser doesn't support a stable version of IndexedDB.")
    }


    var db;
    var request = window.indexedDB.open("movieDatabase", 17);
    request.onerror = function(event) {
      alert(event.target.error);
    };
    request.onsuccess = function(event) {
      db = event.target.result;
      indexedDbCreate();
    };
    request.onupgradeneeded  = function(event) {
      db = event.target.result;
      var objectStore = db.createObjectStore("movies13", { keyPath: "movie_title"});
      objectStore.createIndex("movie_title", "movie_title", { unique: false });
    };



    function indexedDbCreate(){
        var fetchDataPromise = $http.get("http://starlord.hackerearth.com/movieslisting").success(function(data, status){
          return data;
        }).error(function(data, status){
          return status;
        });

        fetchDataPromise.then(function(response){
          var customerObjectStore = db.transaction(["movies13"], "readwrite").objectStore("movies13");
          for (var i = 0, len = response.data.length; i < len; i++) {
            customerObjectStore.put(response.data[i])
            .error = function(e){
              console.log(e.target.error);
            };
          }
          readAll();
        });
    }

    var readAll = function(){
      $scope.movieContent = new Array();
      var objectStore = db.transaction(["movies13"], "readwrite").objectStore("movies13");
      objectStore.openCursor().onsuccess = function(event) {
         var cursor = event.target.result;
         if (cursor) {
           $scope.movieContent.push(cursor.value);
           cursor.continue();
         }
      };
    }*/
}]);
