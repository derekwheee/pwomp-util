const getLayout = require('./getLayout');

module.exports = function(content, forceLayout) {
    if (!content) return {};

    const meta = content[0].replace(/---/g, '').trim();
    const matches = meta.match(/.*\s?:\s?.*\s?/g);
    const data = {};
    
    matches.forEach((match) => {
        const parts = match.split(/:(.+)/, 2);
        data[parts[0].trim()] = parts[1].trim();
    });

    if (forceLayout) {
        data.layout = getLayout(data);
    }

    return data;
}