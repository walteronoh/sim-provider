const fs = require("fs");
const path = require("path");

const countries = fs.readdirSync(path.join(__dirname, 'src','countries'));

const output = path.join(__dirname, 'dist/countries.bundle.json');

(() => {
    const json = [];
    
    countries.forEach((file) => {
        const filePath = path.join(__dirname, 'src', `countries/${file}`);
        const content = fs.readFileSync(filePath, "utf8");
        const object = JSON.parse(content);
        json.push(object);
    });

    fs.writeFileSync(output, JSON.stringify(json));
})()