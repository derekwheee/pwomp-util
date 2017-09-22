const path = require('path');
const test = require('ava');
const settings = require('../lib/settings');

require('./common/bootstrap');

test('get path', t => {

    const p = settings.getPath('viewsDir');

    t.is(p, path.resolve(settings.srcDir, settings.viewsDir));

});