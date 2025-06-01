function sayHello() {
        console.log("Hello, JavaScript!");

};

sayHello()

function multiply(numOne, numTwo) {
        let product = numOne * numTwo;
        return product;
};

console.log(multiply(7, 8));

let person1 = {
                name: "Oyakilhome",
              age: 28,
              city: "New York",
              welcome: function(){console.log("Hi ")},
              goodbye: () => {console.log("Hello")},
              };

          
let person2 = {name: "Justine", age: 27, city: "Los Angeles"};

for (let key in person2){
        console.log(person2[key]);
       console.log(key);
}

        console.log(person2);