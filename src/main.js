"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProviderName = void 0;
var fs = require("fs");
var getProviderName = function (phonenumber) {
    var countries = fs.readdirSync("countries/");
    var provider;
    countries.forEach(function (country) {
        var file = fs.readdirSync("countries/".concat(country, "/"));
        if (file.length > 0) {
            var content = fs.readFileSync("countries/".concat(country, "/").concat(file), "utf8");
            try {
                var obj = JSON.parse(content);
                obj.simProviders
                    .filter(function (provider) { return new RegExp(provider.regex).test(phonenumber); })
                    .map(function (value) { return provider = value; });
            }
            catch (error) {
                throw error;
            }
        }
    });
    return provider;
};
exports.getProviderName = getProviderName;
