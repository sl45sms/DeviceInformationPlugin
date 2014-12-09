    var exec = require("cordova/exec");
    
    function DeviceInformation () {}
        
    DeviceInformation.prototype.get = function (successFunc, failFunc) {
        exec(successFunc, failFunc, "DeviceInformation","get",[]);
    };
    
    var deviceInformation = new DeviceInformation();
    module.exports = deviceInformation;



