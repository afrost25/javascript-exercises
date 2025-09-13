const sumAll = function(firstArg, secondArg) {

    if(!Number.isInteger(firstArg))
    {
        return 'ERROR';
    }

    if(!Number.isInteger(secondArg))
    {
        return 'ERROR';
    }

    if(firstArg < 0)
    {
        return 'ERROR';
    }

    if(secondArg < 0)
    {
        return 'ERROR';
    }

    let result = 0;
    let start = Math.min(firstArg, secondArg);
    let end = Math.max(firstArg, secondArg);

    for(let i = start; i <= end; i++)
    {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
