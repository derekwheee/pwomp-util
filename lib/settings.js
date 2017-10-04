const path = require('path');
const normalizePath = require('./normalizePath');

const settings = require('rc')('pwomp', {
    srcDir : './src/',
    viewsDir : 'views/',
    layoutsDir : 'views/layouts/',
    partialsDir : 'views/partials/',
    helpersDir : 'views/helpers/',
    sassDir : 'scss/',
    scriptsDir : 'js/',
    iconDir : 'icons/',
    outputDir : './dist/',
    defaultLayout : 'main',
    layoutReplacer : '{{{body}}}',
    viewExtension : 'hbs',
    minifyOptions : {
        collapseWhitespace : true,
    },
    server : {
        port : 3000,
        useSSL : true,
    },
    getPath(dest) {
        return normalizePath(path.join(process.cwd(), settings.srcDir, settings[dest]));
    },
});

module.exports = settings;