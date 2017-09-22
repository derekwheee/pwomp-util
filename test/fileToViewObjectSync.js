const test = require('ava');
const fileToViewObjectSync = require('../lib/fileToViewObjectSync');

require('./common/bootstrap');

test('file to view', t => {

    const view = fileToViewObjectSync('./src/views/test.hbs');

    t.true('name' in view);
    t.is(view.name, 'test');
    t.is(view.type, 'view');

});