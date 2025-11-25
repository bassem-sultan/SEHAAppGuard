var exec = require("cordova/exec");

exports.checkSecurity = function (success, error) {
  cordova.exec(success, error, "SEHAAppGuard", "checkSecurity", []);
};
