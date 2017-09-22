const path = require('path');
const glob = require('glob');

module.exports = function(filepath) {
    filepath = path.resolve(filepath);
    return glob.sync(`${filepath}/*.hbs`);
};