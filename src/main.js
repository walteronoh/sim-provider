const fs = require("fs");

const path = __dirname;

const getProviderName = (phonenumber) => {
    const countries = fs.readdirSync(`${path}/countries/`);
    let provider;
    countries.forEach((country) => {
        const file = fs.readdirSync(`${path}/countries/${country}/`);
        if (file.length > 0) {
            const content = fs.readFileSync(`${path}/countries/${country}/${file}`, "utf8");
            try {
                const obj = JSON.parse(content);
                obj.simProviders
                    .filter((provider) => new RegExp(provider.regex).test(phonenumber))
                    .map((value) => provider = value);
            } catch (error) {
                throw error;
            }
        }
    });
    return provider;
};

const getCountryProviderData = (country) => {
    const countries = fs.readdirSync(`${path}/countries/`);
    let providerData;
    countries.filter((countryName) => countryName == country).map((ctry) => {
        const file = fs.readdirSync(`${path}/countries/${ctry}/`);
        const content = fs.readFileSync(`${path}/countries/${ctry}/${file}`, "utf8");
        try {
            const obj = JSON.parse(content);
            providerData = obj.simProviders;
        } catch (error) {
            throw error;
        }
    })
    return providerData;
};

const validateCountryProvider = (country, phonenumber) => {
    const countries = fs.readdirSync(`${path}/countries/`);
    let isValidated;
    countries.filter((countryName) => countryName == country).map((ctry) => {
        const file = fs.readdirSync(`${path}/countries/${ctry}/`);
        const content = fs.readFileSync(`${path}/countries/${ctry}/${file}`, "utf8");
        try {
            const obj = JSON.parse(content);
            isValidated = new RegExp(obj.simRegex).test(phonenumber) ? true : false
        } catch (error) {
            throw error;
        }
    })
    return isValidated;
};

module.exports = { getProviderName, getCountryProviderData, validateCountryProvider };