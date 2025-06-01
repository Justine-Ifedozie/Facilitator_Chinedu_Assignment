//Function
function largestNumber(arrays){
        largestNumber = arrays[0];
        secondlargestNumber = 0;
        for (let numbers in arrays) {
                if (arrays[numbers] > largestNumber) {
                         secondlargestNumber = largestNumber;
                        largestNumber = arrays[numbers];
                        }
                 else if (arrays[numbers] > secondlargestNumber && arrays[numbers] != largestNumber){
                 secondlargestNumber = arrays[numbers];
                 }
                 
                }
        return [secondlargestNumber, largestNumber];
};

//Driver class
const array = [10, 15, 20, 8];
result = largestNumber(array);
console.log("The second largest number and largest number in the array is: ", result);
