var parser = require("regex-parser");

const validateRegExp = (regExp) => {
    try {
        parser(regExp);
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

module.exports = { validateRegExp };