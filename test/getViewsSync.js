const test = require('ava');
const getViewsSync = require('../lib/getViewsSync');

test('get views', t => {

    const files = getViewsSync('./test/assets');
    const noFiles = getViewsSync('./test');

    t.is(files.length, 1);
    t.is(noFiles.length, 0);

});