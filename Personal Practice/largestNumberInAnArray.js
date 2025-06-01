function largestNumber(arrays){
        largestNumber = arrays[0];
        for (let numbers in arrays) {
                if (arrays[numbers] > largestNumber) {
                        largestNumber = arrays[numbers];
                        }
                }
        return largestNumber;
}

//Driver class
const array = [10, 5, 20, 8];
result = largestNumber(array);
console.log("The largest number in the array is: ", result);