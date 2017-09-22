/**
 * Generates a URL from view data.
 * @param {object} view - An Exemplar view object.
 */
module.exports = function(view) {

    return view.name === 'index' ? '/' : `/${view.name}`;

};