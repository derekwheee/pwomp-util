const path = require('path');
const test = require('ava');
const normalizePath = require('../lib/normalizePath');

require('./common/bootstrap');

test('normalize path', t => {

    const p = normalizePath('./');

    t.is(p, path.resolve('./'));

});