// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types


function findShort(s){
    s = s.split(' ')
    let shortWord = s[0]
    s.forEach(word => {
        shortWord.length >= word.length ? shortWord = word : null
    })
    return shortWord.length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 'Answer: 3');
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 'Answer: 3'); 
console.log(findShort("Let's travel abroad shall we"), 'Answer: 2');
console.log(findShort("lets talk about javascript the best language"), ' Answer: 3'); 
console.log(findShort("i want to travel the world writing code one day"), ' Answer: 1'); 
console.log(findShort("Lets all go on holiday somewhere very cold"), ' Answer: 2'); 
console.log(findShort("Test where final word shortest see"), ' Answer: 3'); 