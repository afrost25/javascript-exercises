const removeFromArray = function(arr, ...rem) 
{
    return arr.filter(e => rem.includes(e) == false);
};

// Do not edit below this line
module.exports = removeFromArray;
