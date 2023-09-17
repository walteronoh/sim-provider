const terser = require('@rollup/plugin-terser');
const resolve = require('@rollup/plugin-node-resolve');
const json = require('@rollup/plugin-json')

module.exports = {
    input: 'src/main.js',
    output: [
        {
            file: './dist/bundle.js',
            format: 'cjs'
        },
        {
            file: './dist/bundle.min.js',
            format: 'iife',
            name: 'version',
            plugins: [terser()]
        }
    ],
    plugins: [json(),resolve()]
}