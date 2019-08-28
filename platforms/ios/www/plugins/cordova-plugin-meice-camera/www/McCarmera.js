cordova.define("cordova-plugin-meice-camera.MCCameraSwiftPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

var MCCameraSwiftPlugin = {

    shoot: function (isProd,deviceNumber,customer,onSuccess, onError) {
        exec(onSuccess, onError, "MCCameraSwiftPlugin", "shoot", [isProd,deviceNumber,customer]);
    },
};
module.exports = MCCameraSwiftPlugin;
});
