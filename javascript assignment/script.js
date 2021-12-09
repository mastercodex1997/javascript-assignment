
//1. Given a string of characters as input, write a function that returns it with the characters reversed.
e.g "hello world" => "dlrow olleh"//
 // ans//

 "this is a test string".split("").reverse().join("");



const reverse = str => [...str].reverse().join('');


const reverse = str => str.split('').reduce((rev, char)=> `${char}${rev}`, '');


const reverse = str => (str === '') ? '' : `${reverse(str.substr(1))}${str.charAt(0)}`;


reverse('hello world');     'dlrow olleh'
console.log ('dlrow olleh');

 //*3. Given a string of characters, write a function that returns the character that appears the most often. e,g "Hello World!" => "l"//*
  //ans//
  var exp = '3553853335' ;
var expCounts = {};
var maxKey = '';
for(var i = 0; i < exp.length; i++)
{
    var key = exp[i];
    if(!expCounts[key]){
     expCounts[key] = 0;
    }
    expCounts[key]++;
    if(maxKey == '' || expCounts[key] > expCounts[maxKey]){
        maxKey = key;
    }
}

console.debug(maxKey + ":" + expCounts[maxKey]);

//*4 write a function that checks the number of consonants and vowels in a given string. if number of consonants is greater than the number of vowels return "consonants win", if number of vowels is greater than the number of consonants return "vowels win", if the number of consonants and vowels are the same, return "draw"//

//ans//


function vowelsVsConsonant(str) {
    var knownVowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var vowels = 0;
    var consonants = 0;
    for (var i = 0; i < str.length; i++) {
        if (knownVowels.includes(str[i])) {
            vowels += 1;
        } else {
            consonants += 1;
        }
    }
    if (vowels > consonants) {
        return 'vowels win';
    } else if (consonants > vowels) {
        return 'consonants win';
    } else {
        return 'draw';
    }
}

5