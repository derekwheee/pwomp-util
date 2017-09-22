const parseMetadata = require('./parseMetadata');

module.exports = function(view) {
    view.data = parseMetadata(view.template.match(/^---[\s\S]*---/));
    view.template = view.template.replace(/^---[\s\S]*---/, '').trim();

    return view;
};