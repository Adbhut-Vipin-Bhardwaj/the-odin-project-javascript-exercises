const sumAll = function(bnd_1, bnd_2) {
    if (bnd_1 < 0 || bnd_2 < 0){
        return "ERROR";
    }
    if (typeof bnd_1 != 'number' || typeof bnd_2 != 'number'){
        return "ERROR";
    }
    let lwr_bnd = bnd_1 < bnd_2 ? bnd_1 : bnd_2;
    let upr_bnd = bnd_1 + bnd_2 - lwr_bnd;
    
    let sum = 0;
    for (let i=lwr_bnd; i<=upr_bnd; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
