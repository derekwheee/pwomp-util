/**
 * Generates a URL from view data.
 * @param {object} view - A Pwomp view object.
 */
module.exports = function(view) {

    return view.name === 'index' ? '/' : `/${view.name.replace(/\\/g, '/')}`;

};