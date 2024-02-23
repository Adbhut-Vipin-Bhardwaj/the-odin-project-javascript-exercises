const repeatString = function(input_str, num_repetition) {
    if (num_repetition < 0){
        return 'ERROR';
    }
    let output_str = '';
    for (let i=0; i<num_repetition; i++){
        output_str += input_str;
    }
    return output_str;
};

// Do not edit below this line
module.exports = repeatString;
