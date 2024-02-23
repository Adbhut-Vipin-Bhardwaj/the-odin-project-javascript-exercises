const reverseString = function(input_str) {
    let output_str = '';
    for (let i=0; i<input_str.length; i++){
        output_str += input_str[input_str.length - 1 - i];
    }
    return output_str;
};

// Do not edit below this line
module.exports = reverseString;
