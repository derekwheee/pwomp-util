require('./common/bootstrap');

const test = require('ava');
const getLayout = require('../lib/getLayout');

test('get layout', t => {

    t.is(getLayout({}), 'main');
    t.is(getLayout({ layout : 'test' }), 'test');

});