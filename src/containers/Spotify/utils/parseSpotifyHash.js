export default (queryString) => {
    const pairs = (queryString[0] === '#' ? queryString.substr(1) : queryString).split('&');
    const object = {};
    pairs.forEach(pair => {
        pair = pair.split('=');
        object[pair[0]] = pair[1];
    });
    return object;
};