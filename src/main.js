"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCountryProvider = exports.getCountryProviderData = exports.getProviderName = void 0;
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
var getCountryProviderData = function (country) {
    var countries = fs.readdirSync("countries/");
    var providerData;
    countries.filter(function (countryName) { return countryName == country; }).map(function (ctry) {
        var file = fs.readdirSync("countries/".concat(ctry, "/"));
        var content = fs.readFileSync("countries/".concat(ctry, "/").concat(file), "utf8");
        try {
            var obj = JSON.parse(content);
            providerData = obj.simProviders;
        }
        catch (error) {
            throw error;
        }
    });
    return providerData;
};
exports.getCountryProviderData = getCountryProviderData;
var validateCountryProvider = function (country, phonenumber) {
    var countries = fs.readdirSync("countries/");
    var isValidated;
    countries.filter(function (countryName) { return countryName == country; }).map(function (ctry) {
        var file = fs.readdirSync("countries/".concat(ctry, "/"));
        var content = fs.readFileSync("countries/".concat(ctry, "/").concat(file), "utf8");
        try {
            var obj = JSON.parse(content);
            isValidated = new RegExp(obj.simRegex).test(phonenumber) ? true : false;
        }
        catch (error) {
            throw error;
        }
    });
    return isValidated;
};
exports.validateCountryProvider = validateCountryProvider;
