const path = require('path');
const test = require('ava');
const getViewTypeFromName = require('../lib/getViewTypeFromName');

require('./common/bootstrap');

test('get view type', t => {

    t.is(getViewTypeFromName(path.normalize('layouts/main')), 'layout');
    t.is(getViewTypeFromName(path.normalize('partials/main')), 'partial');
    t.is(getViewTypeFromName('main'), 'view');

})