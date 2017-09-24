require('./common/bootstrap');

const fs = require('fs-extra');
const test = require('ava');
const getViewsSync = require('../lib/getViewsSync');
const parseView = require('../lib/parseView');

test('get views', t => {

    const file = getViewsSync('./src/views')[0];
    const content = fs.readFileSync(file, 'utf-8');
    const view = parseView({ template : content });

    t.true('template' in view);
    t.is(view.template, 'This is test 1');
    t.true('data' in view);
    t.is(view.data.title, 'Test 1');

});

test('bad view', t => {
    t.throws(() => {
		parseView('');
	});
})