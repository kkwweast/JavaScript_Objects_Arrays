
 //Sum of Array
 console.log("Exercise 1:\n")
 const testArr = [2, 22, 12, 17, 18, 39, 129] ;


 function arraySum(numbers){ 
    let sum = 0;
 }
    //Normal for loop
   // for (let i = 0; i < number.length; i++)
// sum += number
//return sum;
//for each Method
numbers.ForEach(function(number) {
  sum += number;
});

return sum;



// Exercise 2 Section
console.log("Exercise 2:\n")

var Book =  {};
     book.title = "Dracula";
     book.author = "Bram Stoker"
     book.pages = 230;
     book.readCount = 15;
     Book.info = function () { 
    return `  ${this. title} ,${this.pages} pages, read ${this.readCount} times`; 
         
    }
    console.log(book.info);

    //Exercise 3:
    let sentence = "The quick brown fox jumps over the lazy dog"; //string
    //method Chaining Example
    sentence.split("").map((element, index, arr) => {
      return element.split("").reverse().join("");
    }).join("");
    // string => array (split method)
    const words = sentence.split("");
    console.log(words);

    //Loop (array)
    for(let i = 0; i < words.length; i++) {
//Each element in the array
const letters = words[i].split("");
console.log(letters);
    //Array => array
    //updates the array dirctly.No need to store into a new variable
    letters.reverse();
    const reversedLetters = letters.joim("");
    words[i] = reversedLetters;
}
console.log(words);
    //array => string
    const result = words.join("");
    console.log(result);

    //Exercise 4:
    let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

    //2.
    const rows = csvData.split("\n");
    const headers = rows[0].split(",");
    for(let i = 1; i < rows.length; i++){
      const pairs = rows[i].split(",");
       let hobbit = {};
       hobbit.name = pairs[0];
       hobbit.age = pairs[1];
      //storage step
      listofHobbits.push(hobbit);
       finalResult.push(hobbit);
    }

    



 











}




