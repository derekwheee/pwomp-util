require('./common/bootstrap');

const path = require('path');
const test = require('ava');
const normalizePath = require('../lib/normalizePath');

test('normalize path', t => {

    const p = normalizePath('./');

    t.is(p, path.resolve('./'));

});