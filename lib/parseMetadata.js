module.exports = function(content) {
    if (!content) return {};

    const meta = content[0].replace(/---/g, '').trim();
    const matches = meta.match(/.*\s?:\s?.*\s?/g);
    const data = {};
    
    matches.forEach((match) => {
        const parts = match.split(/:(.+)/, 2);
        data[parts[0].trim()] = parts[1].trim();
    });

    return data;
}