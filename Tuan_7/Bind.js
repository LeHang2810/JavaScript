//Define the orignal function.
var checkNumericRange = function (value){
    if(typeof value !== 'number')
    return false;
else
return value >=this.minimum && value<=this.maximum;
}
// the range object will become the this value in the callback function
var range ={ minimum: 10, maximum:20};

//Bin the checknumerciRange function
var boundCheckNumericRange = checkNumericRange.bind(range);

//use the neww function to check whether 12 is thr numeric range.
var result = boundCheckNumericRange(12);
console.log(result);

//op: true