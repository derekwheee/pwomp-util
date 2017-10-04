const settings = require('./settings');

module.exports = function(data) {
    if ('layout' in data) {
        return data.layout;
    }
    return settings.defaultLayout;
};