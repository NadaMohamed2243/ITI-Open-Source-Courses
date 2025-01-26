// task2

// Task2.1: Count Vowels 
// Description: Write a function that takes a string as input and returns the number of vowels (a,    
// e, i, o, u) in the string. 


// let word = new String(prompt("pleace enter the input : "));

// const countVowels = function(word){
//     let Vowelcounter=0;
//     for(let i=0 ; i<word.length ; i++)
//     {
           // if user input a or A and so on --> count process done 
//         if(word[i].toLowerCase()=='a' || word[i].toLowerCase()=='e' || word[i].toLowerCase()=='i' || word[i].toLowerCase()=='o' || word[i].toLowerCase()=='u')
//         {
//             Vowelcounter++;
//         }
//     }
//     return Vowelcounter;
    
// }

// console.log(`Vowel counter : ${countVowels(word)}`);

//-----------------------------------------------------
// Task2.2: Capitalize Words 
// Description: Write a function that takes a string as input and returns a new string where the 
// first letter of each word is capitalized. 


// let sentence = new String(prompt("pleace enter the sentence : "));

// const capitalizeWords = function(sentence){

//     let newSentence = sentence[0].toUpperCase();
//       //we already take the first char so the loop start from 1
//     for(let i=1 ; i<sentence.length ; i++)
//     {
//         //if before me a space so i am a new word 
//         if(sentence[i-1]==' ')
//         {
//             newSentence+=sentence[i].toUpperCase();
//         }
//         else
//         {
//             newSentence+=sentence[i];
//         }
//     }
//     return newSentence;
    
// }

// console.log(`capitalize Words : ${capitalizeWords(sentence)}`);



//--------------------------------------------------
// Task2.3: Count Character Occurrences 
// Description: Write a function that takes a string and a character as input and returns the 
// number of occurrences of that character in the string. 

// let inputString = new String(prompt("enter the string : "));
// let inputChar = new String(prompt("enter the character : "));


// const CountCharOccurrences = function(inputString,inputChar)
// {
//     let charcounter=0;
//     if(inputString.includes(inputChar))
//     {
//         for(let i=0 ; i< inputString.length ; i++)
//         {
//              if(inputString[i]==inputChar)
//             {
//                 charcounter++;
//             }
//         }
       
//     }
//     return charcounter;
// }

// console.log(`the number of char ${inputChar} in ${inputString} is ${CountCharOccurrences(inputString,inputChar)}`);



//-----------------------------------------------------
// Task2.4: Count Words 
// Description: Write a function that takes a string as input and returns the number of words in 
// the string.



let sentence = new String(prompt("pleace enter the sentence : "));

const countWords = function(sentence)
{
     // {  nada } --> to remove start and end spaces
    sentenceWithoutBandEspace=sentence.trim();
    let wordcounter = 1;

    for(let i=0 ; i< sentenceWithoutBandEspace.length ; i++)
    {
            //if the letter between me is not a space and i not a space (if {nada  mohamed} there is more tan one space} 
            if(sentenceWithoutBandEspace[i+1]==' ' && sentenceWithoutBandEspace[i]!=' ')
            {
                wordcounter++;
            }
    }
    return wordcounter;
}

console.log(`the number of words in sentence is ${countWords(sentence)}`);

