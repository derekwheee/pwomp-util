require('./common/bootstrap');

const test = require('ava');
const fileToViewObject = require('../lib/fileToViewObject');
const getViewUrl = require('../lib/getViewUrl');

test('get url', async t => {

    const index = await fileToViewObject('./src/views/index.hbs');
    const indexUrl = getViewUrl(index);

    t.is(indexUrl, '/');

    const test = await fileToViewObject('./src/views/test.hbs');
    const testUrl = getViewUrl(test);

    t.is(testUrl, '/test');

});