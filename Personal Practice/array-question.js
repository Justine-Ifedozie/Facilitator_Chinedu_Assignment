function SumArray(array1) {
let sum = 0;
for(let index in array){
        sum += array[index]
};
        return sum;
}



let array = [1, 2, 3, 4];
let sum = SumArray(array);
console.log(sum);