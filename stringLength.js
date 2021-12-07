function stringLength(str) {
    if(str.length < 1 ) throw new Error('MIN_LENGTH_ERROR: The length of the string should be greater than 1.');
    if(str.length > 10 ) throw new Error('MAX_LENGTH_ERROR: The length of the string should not greater than 10');
    return(str.length);
}

module.exports = stringLength;