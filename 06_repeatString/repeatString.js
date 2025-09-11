const repeatString = function(str, numTimes) {
    let res = '';

    for(let i = 0; i < numTimes; i++)
    {
        res += str;
    }

    if(numTimes < 0)
    {
        res = 'ERROR'
    }

    return res
};

// Do not edit below this line
module.exports = repeatString;
