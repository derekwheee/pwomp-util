require('./common/bootstrap');

const path = require('path');
const test = require('ava');
const getViewTypeFromName = require('../lib/getViewTypeFromName');

test('get view type', t => {

    t.is(getViewTypeFromName(path.normalize('layouts/main')), 'layout');
    t.is(getViewTypeFromName(path.normalize('partials/main')), 'partial');
    t.is(getViewTypeFromName('main'), 'view');

})