cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-meice-camera.MCCameraSwiftPlugin",
    "file": "plugins/cordova-plugin-meice-camera/www/McCarmera.js",
    "pluginId": "cordova-plugin-meice-camera",
    "clobbers": [
      "window.MCCamera"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.4",
  "cordova-plugin-add-swift-support": "2.0.2",
  "cordova-plugin-meice-camera": "1.1.0"
};
// BOTTOM OF METADATA
});