require('./common/bootstrap');

const test = require('ava');
const getViewsSync = require('../lib/getViewsSync');

test('get views', t => {

    const files = getViewsSync('./src/views');
    const noFiles = getViewsSync('./');

    t.is(files.length, 2);
    t.is(noFiles.length, 0);

});