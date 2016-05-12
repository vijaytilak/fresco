angular.module('app.controllers', [])

  .controller('appsCtrl', function ($scope) {

  })

  .controller('siteSurveyCtrl', function ($scope) {

  })

  .controller('surveyCategoryCtrl', function ($scope) {

  })

  .controller('c1Q1Ctrl', function ($scope) {

  })

  .controller('diagramCtrl', function ($scope) {

    var width = document.getElementById('canvasContainer').offsetWidth; // width of canvas
    var height = document.getElementById('canvasContainer').offsetHeight; // height of canvas

    var canvas = new fabric.Canvas('c',{
      backgroundColor: 'rgb(100,100,200)',
      selectionColor: 'blue',
      selectionLineWidth: 2,
      stroke : 'black',
      strokeWidth : 10
    });

    // sets canvas height and width
    canvas.setHeight(height);
    canvas.setWidth(width);

    // Monkey patch in support for ID parameter
    fabric.Object.prototype.toObject = (function (toObject) {
      return function () {
        return fabric.util.object.extend(toObject.call(this), {
          id: this.id
        });
      };
    })(fabric.Object.prototype.toObject);

  })

  .controller('updatesCtrl', function ($scope) {

  })

  .controller('officeCtrl', function ($scope) {

  })
