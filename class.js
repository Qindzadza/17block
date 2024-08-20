// const fruit= {
//     name: "apple",
//     sayhiFunction: function(){
//         console.log(`Hi, I am an ${this.name}`)
//     }
// }
// fruit.sayhiFunction();
// Class
// class Fruit {
//     constructor(name){
//         this.name= name;
//     }
//     sayhifunction(){
//         console.log('hi i am a ' + this.name)
//     }
// };
// const banana=new Fruit("banana")
// banana.sayhifunction();


class  Sentence{
    // Add a constructor that takes a parameter named data, which sets the this.data property for an instance of a sentence.
    constructor (data){
        this.data=data;
    }

    // Add a method to the Sentence class that counts the number of words in your sentence.
    wordcount() {
        return userdata.split(" ");
    }
    // Add a method to the Sentence class called hasLetter, which takes a letter and returns true or false if the letter is in your sentence.

    hasletter(letter){
        return this.data.indexOf(letter)!== -1;
    }
    // Add a method to the Sentence class that takes a letter and returns the number of times that letter is in the sentence
    number (letter){
        let count=0;
        for(let i=0;i<this.data.length;i++){
            if(this.data[i]===letter){
             count++;
            }
        }
        return count;
    }
    // Add a method to the Sentence class called stats. It will return an object with a key for each word in your sentence and a value for how many times the word appears. Example: For 'foo bar bar' it would return an object with keys, 'foo' and 'bar' with values 1 and 2 respectively.

    stats(){
        const obj={};
        const words=this.data.split(" ");
        words.forEach(word=>{
        //    obj[word]=obj[word] ? obj[word]+1 : 1;
            if(obj[word]===undefined){
                obj[word]=1;
            }else{
                obj[word]++;
            }
        })
        return obj;
    }

}
// Use the window.prompt to get some data that you can use to create a sentence

const userdata=prompt("write your sentence");
const user= new Sentence(userdata);
console.log(user);
console.log(user.wordcount());
console.log(user.hasletter("z"));
console.log(user.hasletter("g"))
console.log(user.number("z"));

console.log(user.stats())