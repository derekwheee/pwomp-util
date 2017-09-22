const fs = require('fs-extra');
const getViewNameFromFilename = require('./getViewNameFromFilename');
const getViewTypeFromName = require('./getViewTypeFromName');
const normalizePath = require('./normalizePath');
const parseView = require('./parseView');

module.exports = async function(filename, forceLayout) {
    const filepath = normalizePath(filename);
    const content = await fs.readFile(filepath, 'utf-8');
    const name = getViewNameFromFilename(filepath);
    return parseView({
        name,
        template : content,
        type : getViewTypeFromName(name),
    }, forceLayout);
};