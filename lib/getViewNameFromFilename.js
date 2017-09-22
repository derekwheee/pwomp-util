const settings = require('./settings');

module.exports = function(filename) {
    return filename.replace(settings.getPath('viewsDir'), '').replace(/^[\\\/]/, '').replace(/\.\w{1,10}$/, '');
};