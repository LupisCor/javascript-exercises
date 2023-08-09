const reverseString = function(str) {
    let strReverse = "";
    let strTemp = "";
    for (let i = 0; i < str.length; i++){
        strTemp = str.charAt(i);
        strReverse = strTemp.concat('',strReverse);
    }
    return strReverse;
};

// Do not edit below this line
module.exports = reverseString;
