const path = require('path');
const test = require('ava');
const getViewNameFromFilename = require('../lib/getViewNameFromFilename');

require('./common/bootstrap');

test('get view name', t => {

    const name = getViewNameFromFilename(path.resolve('./src/views/test.hbs'));

    t.is(name, 'test');

})