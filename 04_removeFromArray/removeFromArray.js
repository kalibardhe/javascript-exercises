const removeFromArray = function(array, values) {
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        const index = array.indexOf(value);
        if (index !== -1) {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
