# D3-TO-IMAGE
This library is exclusive dedicated to D3 implemented in AngularJS. So, it will be useful to `D3` manually added over AngularJS, `NVD3` and `angularjs-nvd3`

> Let's improve this doc in a future.

## How to implement it in AngularJS
Here you have some help to implement it in AngularJS.

* In `bower.json`, add: `"d3-to-image": "^1.0.0",`.
* In your `index.html` add `<script src="[path]/d3-to-image/lib/d3-to-image-ngDirective.min.js"></script>`.
* Add ngD3ToImage as dependency in your App, doing:
```js
angular
  .module('yourAwesomeApp', [
      'ngRoute',
      // ...
      'ngD3ToImage' // <<< Add this!
  ])
```
* Then, for example, add a button that will call a `exportPNG` function to "run the export process", doing:
```html
  <a ng-click="exportPNG()">Export SVG to PNG</a>
```
* Then, define your callback function that will be called when the image finished to be created:
```js
$scope.d3ToImageCallback = function(imageFormats) {
    // Let's use FileSave library to download the image
    saveAs(imageFormats.blob, 'myChart.png');
};
```
* Now, wrap your SVG with your new directive, doing:
```hmtl
<d3-to-image data-try-to-fix="true"
             callback="d3ToImageCallback"
             export="exportPNG">
    <svg...></svg> <!-- Here you can have D3, NVD3, or whatever. -->
</d3-to-image>
```

> The `try-to-fix` is passed to the `svg-2-iamge` library to force to improve cross browser compatibility
