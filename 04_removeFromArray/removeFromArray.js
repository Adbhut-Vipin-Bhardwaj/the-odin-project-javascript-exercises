const removeFromArray = function(input_arr, ...to_be_removed) {
    return input_arr.filter(
        x => !to_be_removed.includes(x)
    );
};

// Do not edit below this line
module.exports = removeFromArray;
