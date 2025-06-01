const countVowels =(wording) => {
words = wording.toLowerCase();
let count = 0;
char aaa = 'a';
char bbb = 'e';
char ccc = 'i';
char add = 'o';
char aee = 'u';
 //for(let index = 0; index < word.length; index++) {
//        console.log(words[index]);

//}
for (let char of words){
if (char == a || char == e || char == i || char == o || char == u ) {
count++;
}
//console.log(char);
}
return count;
};







let word = "Hello World";
countVowels(word);