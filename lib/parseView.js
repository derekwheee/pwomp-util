const parseMetadata = require('./parseMetadata');

module.exports = function(view, forceLayout) {
    view.data = parseMetadata(view.template.match(/^---[\s\S]*---/), forceLayout);
    view.template = view.template.replace(/^---[\s\S]*---/, '').trim();

    return view;
};