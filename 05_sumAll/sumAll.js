const sumAll = function(int1, int2) {
    finalSum = 0;

    if(!Number.isInteger(int1) || !Number.isInteger(int2)){
        return 'ERROR';
    }
    else if (int1 < 0 || int2 < 0){
        return 'ERROR'
    }
    else if (int1 > int2) {
        let temp = int1;
        int1 = int2;
        int2 = temp;
    }

    for (let i = int1; i <= int2; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
