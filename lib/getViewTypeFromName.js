const path = require('path');
const settings = require('./settings');

const layoutPrefix = path.normalize(`${settings.getPath('layoutsDir').replace(settings.getPath('viewsDir'), '').replace(/^[\\\/]/, '')}/`)
const partialPrefix = path.normalize(`${settings.getPath('partialsDir').replace(settings.getPath('viewsDir'), '').replace(/^[\\\/]/, '')}/`)

module.exports = function(name) {
    if (name.startsWith(layoutPrefix)) return 'layout';
    if (name.startsWith(partialPrefix)) return 'partial';
    return 'view';
};