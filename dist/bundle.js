'use strict';

const countries = require("../dist/countries.bundle.json");

const getProviderName = (phonenumber) => {
    let provider;

    countries.forEach((country) => {
        country.simProviders
            .filter((provider) => new RegExp(provider.regex).test(phonenumber))
            .map((value) => provider = value);
    });

    if (typeof provider == "undefined") {
        return { message: "It seems like we cannot find the provider name of the provided phone number!" }
    }

    return provider;
};

const getCountryProviderData = (country) => {
    let providerData;

    const object = countries.find((value) => value.country.toUpperCase() == country.toUpperCase());
    if (typeof object == "object") {
        providerData = object;
        return providerData;
    }
    return { message: "It seems like the provided country is not currently added!" }
};

const validateCountrySimProvider = (country, phonenumber) => {
    let isValid;

    const object = countries.filter((value) => value.country.toUpperCase() == country.toUpperCase());

    if (object.length == 0) {
        return { message: "It seems like the provided country is not currently added!" }
    }

    object.map((ctry) => {
        isValid = new RegExp(ctry.simRegex).test(phonenumber) ? true : false;
    });
    return isValid;
};

const validateSimProvider = (country, providerName, phonenumber) => {
    let isValid;

    const countryData = countries.find((value) => value.country.toUpperCase() == country.toUpperCase());

    if (typeof countryData == "object") {
        const providerData = countryData.simProviders.find((value) => value.name.toUpperCase() == providerName.toUpperCase());

        if (typeof providerData == "object") {
            isValid = new RegExp(providerData.regex).test(phonenumber) ? true : false;
            return isValid;
        }

        return { message: "It seems like the sim provider is not currently added!" }
    }

    return { message: "It seems like the provided country is not currently added!" }
};

module.exports = { getProviderName, getCountryProviderData, validateCountrySimProvider, validateSimProvider };
