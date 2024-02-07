//use ctrl alt N to run code 

// console.log("Hello World") //this is a comment

// /*this is a 
// multi
// line 
// comment*/

// //have the habit of adding a ; to the end of each line to indicate it's the end of the line

// var myName = 'Howard'; //var means u can do it throughout 

// //let myName = 'Jason'; //only can be used within the scope where u declared it 

// const pi = 3.14; //const means constant, value can't be changed, if u do you'll get an error

// var alpha; //u r declaring the var named 'alpha' (aka saying that it exists)
// alpha = 7;//u r now assiging a value to it
// //or u can do var alpha = 7

// alpha = alpha + 1; //use alpha++; it does the same thing
// alpha = alpha - 1; //use alpha--; it does the same thing 

// var myStr = "I am a \"double quoted\" string" //use \" if udw to treat it as a string but text istd
// console.log(myStr)

// //length of string
// console.log(myStr.length) //i.e dunnid () for length as length is a property not a method in JS, for js when u wan to use () think as if u r doing an action eg .push()

// //strings are immutable in javascript, in the sense that u can't modify individual characters of the string
// //avoid naming variables as 'name' as in js, 'name' alr has another value in other code
// var testname = 'john'
// testname = 'smurf'

// //negative indexing doesn't exist in js strings, so do the below 
// console.log(testname[testname.length-1])

// //for arrays, they are muttable so u can change each individual element 
// var myarray = [1,2,3]
// myarray[0] = 5
// console.log(myarray)

// //to insert elements into end of array, use push
// myarray.push('john')
// console.log(myarray)

// //to remove last elemenet from array, use pop, pop returns the removed element
// console.log('the popped value is :', myarray.pop())
// console.log(myarray)

// //to remove first element from array, use shift, it's like pop just that it removes the first element
// console.log('the shifted value is :',myarray.shift())
// console.log(myarray)

// //unshift is to push elements at the start of the array
// myarray.unshift('ben')
// console.log(myarray)

// //for functions in JS dunnid 'def' and ':', use {} istd
// function myfunction() {
//     console.log('how are you doing?');
// }
// myfunction()

// //for fn w args
// function fn2(a,b){
//     var sum = a+b
//     return sum
// }
// console.log(fn2(5,10))

// //global scope var r var that can be used thruout the prog e.g not limited to a certain fn
// //e.g var myGlobal = 10
// //local scope var r var that can only be used within the fn that it's declared in

// function fn3(){
//     team = 'Chelsea' //when u declare a variable without using var it becomes a global var
//     //if u want to delcare global var outside fn dunnid var also but have the good practice of typing var, let, const to avoid 
//     //accidental global variables
// }

// fn3() //call the fn first to assign a value to team
// console.log(team)

// store = 'adidas'
// console.log(store)


//insert missing code here

// console.log('Hello World');
// //basically use {} instead of : like u would in python
// //for func declare function first then followed by {}, store contents of func within {}
// function addfive(number) {
//     sum = number+5;
//     //for if statements use if followed by (), store cond inside () and actions within {} after
//     if (sum > 10) {
//         return 'sum is greater than 10'
//     }
//     return sum;
// }
// console.log(addfive(10))

// // '===' is strict equality operator, doesn't disregard data type
// // '!==' is strict inequality operator
// if (10==='10'==false){
//     console.log('not equal')
// }
// // '==' is equality operator that assumes all same data type
// else if (10=='10'){
//     console.log('equal')
// }
// else {
//     console.log('not equal')
// }

// //and operator use '&&', OR operator use '||'
// if (10>5 && 10>3){
//     console.log('yay')
// }

//switch() is used when u want to execute an action depending on the value of the variable. Often used when u have a value and u wan
//to perform diff actions based off its value 
//swtich() uses the === operator

// function testswitch() {
//     var answer = ''
//     const testvalue = 8
//     switch(testvalue){
//         case 3: //if testvalue === 3
//             answer = 'the value is 5 ';
//             break; // break is used to exit the switch statement, if u dun use it it'll continue to the rest of the case statements
//             //if u dun use break, fall-through will occur where it'll proceed to case 3 and not even check if testvalue equals 3 and just
//             //basically it carries on with the actions and disregards whether the condition is true or false
//         case 5: 
//             answer = 'the value is 5 ';
//             break;
        
//         case 7: //do this if u wan multiple options to have the same output then u dunnid copy paste so much
//         case 8:
//         case 9:
//             answer = 'the value is either 7,8,9'
//             break;

//         default: //acts as an else statment
//             answer = "value doesn't exist within the func"
//     }
//     return answer;
// }
// console.log(testswitch())

// function testoperator() {
//     console.log(5<10) //all arithmetic comparisons return a boolean val 
//     console.log('yay'==='yay') //logic operators too
// }
// //testoperator()

// //objects are different from arrays
// //for objects we access data via their properties, for arrays we use index
// //objects r variables with {}
// var personA = {
//     //key value pair so use :
//     //value can be any data type but key has to be a string
//     //js auto converts key to string if it's not a symbol
//     name:'john',
//     'age':20,
//     'my hobbies':['swimming','cycling']
// }

// //2 ways to access objects, via dot notation or bracket notation, bracket notation is more versatile
// console.log(personA.name); //dot notation
// console.log(personA['my hobbies']); //use bracket notation when there are spacings/symbols/starts with a no. in the i.e key

// personA.name = 'happy john'; //to modify object properties
// console.log(personA.name)


// //add new properties to object
// personA.gender = 'Male'
// console.log(personA.gender)
// personA['fav food'] = 'Pasta'
// console.log(personA['fav food'])

// //to delete properties from object
// delete personA.gender
// delete personA['fav food']

// //can use objects when u wan to lookup a certain val instead of switch/if statements
// function lookupval(val){
//     var answer = ''
//     var values = {
//         'a':'alpha',
//         'b':'beta',
//         'c':'charlie'
//     }
//     return answer = values[val]
// }
// //console.log(lookupval('b'))

// //to check if a certain property/key exists in an object, use the mtd hasOwnProperty()
// //Js is case senstiive eg for hasOwnProperty must use camelcase as the func is in camelcase
// // if (personA.hasOwnProperty('age')){
// //     console.log(personA['age']);
// // }

// //if u wan to store multiple objects within an array, use this
// var listofobjects = [
//     {
//         'personB':'alex'
//     },

//     {
//         'personC':'Morgan'
//     }
// ]


// var storage = {
//         'car':{'inside': {
//             'box':'maps',
//             'boot':'tyre'
//         }
//     }
// };

// // console.log(listofobjects[0]['personB'])
// // console.log(storage.car)
// // console.log(storage.car.inside['boot']) //if u wan to access nested objects i.e {'inside': {}} is another object

// //while loop
// function testwhile(){
//     i = 5
//     while (i>0){
//         i--;
//     }
//     console.log(i)
// }
// //testwhile()

// //for loop
// //first parameter is initialising variables, 2nd is cond, 3rd is what u do at the end of each loop
// for (var a=1; a<3; a++){
//     console.log('val of a is ',a);
// }

// //for loop to add up numbers in an array
// function addnumbers(){
//     var samplearray = [1,2,3,4,5]
//     var total = 0
//     for (var i = 0; i < samplearray.length;i++){
//         total+=samplearray[i]
//     }
//     console.log(total)
// }
// //console.log(addnumbers())

// //nested for loop to multiply all numbers of an array tgt

// function multiplynumbers() {
//     var arr = [[1,2],[3,4,5]]
//     var answer = 1

//     for (var i =0;i<arr.length;i++) {
//         for (var j=0;j<arr[i].length;j++){
//             answer = answer * arr[i][j]
//         }
//     }
//     return answer
// }
// //console.log(multiplynumbers())

// //do while loop vs while loop
// //do while loop will always do at least once b4 checking cond, while loop will always check first b4 doing

// function testwhile(){
//     i = 5;
//     while(i>5){
//         return ('hihi');
//     }
//     do {
//         return ('baibai')
//     } while (i>5)
// }
// //console.log(testwhile())

// //Math.random returns no btwn 0<=x<1 and floor rounds down
// //console.log(Math.floor(Math.random()*10))

// //function to convert from string to integer, normally has 2 parameters and default 2nd parameter is base 10
// function testparseInt(){
//     console.log(parseInt('10'))
//     console.log(parseInt('1000',2))
//     console.log(parseInt('A',16)) //returns hexadecimal value of A, which is 10
//     //if u want to return ASCII value of A, use
//     console.log('A'.charCodeAt(0))//i.e 0 means 1st character of the sting 
// }
// //testparseInt()

// //tenary operators 

// function playtenary(){
//     var a = 10;
//     var b = 20;
//     return a<b ? 'a<b':'b>=a' //? means if so // followed by (val if true):(val if false)
// }
// //console.log(playtenary())

// function nestedtenary(){
//     var c = 10;
//     var d = 10
//     return c<d ? 'c<d' : (c>d ? 'c>d':'c==d') //not a must to include () but i do to show that it's a nested tenary
// }
// //console.log(nestedtenary())

// //using 'let' doesn't let u declare the same var twice, that's y a lot of ppl just use let and const instead of var
// // let age1 = '10'
// // let age1 = '20' //doing this gives u an error
// //u still can change the value of age1 just remove the let after the 1st let

// function teststrict(){
//     "use strict"; //ensures that whenever u declare new var u use either var/let/const, normally used in functions or at the top of the file
//     //nonstrictval = 10 //uncomment this line to test it out
// }

// //teststrict()

// function testyet(){
//     if (true){
//         var testyetval = 'block scope'; //yet is also limited by the block (aka curly brackets{}) it's within 
//         console.log('value of testyetval: ',testyetval);
//     }
//     console.log('final value of testyetval: ',testyetval); //doing this throws u an error as testyetval is limited within the above {}
//     //if use var instead of let there won't be error
// }
// //testyet()

// //const has the function of yet but u can't change the val it's read only
// function testconst(){
//     const CHEER = 'yippee' //standard practice to fully caps the const as well
//     CHEER = 'hooray' //this will throw u an error
// }
// //testconst()

// function mutateconst(){
//     //const value can't be changed for everything except for arrays/objects
//     //as in u can never reassign a value to const but u can change the content within it (i.e arrays/objects)
//     const TESTARR = [1,2,3]
//     TESTARR[0] = 4
//     console.log(TESTARR)
// }
// //mutateconst()

// //Object.freeze() is used when u dw to mutate the contents of a const arr/object

// function testfreeze(){
//     "use strict";
//     const math_constraint = {
//         PI:3.14 //rmb PI is treated as a str
//     };
//     Object.freeze(math_constraint); //including this will give u an error when u try to modify the contents of the obj math_constraint

//     try {
//         math_constraint.PI = 3.141512; 
//     }   catch( ex ) {
//         console.log(ex);
//     }
//     console.log(math_constraint['PI']) //rmb need to include '' since PI is auto set as a str
// }

// //testfreeze()

// //anonymous functions (functions without a name) r often used when u wan to assign a func to a variable  
// //or pass it as an argument to another func

// var longarr = function (arr1,arr2){ 
//     return arr1.concat(arr2);
// };
// //console.log(longarr([1,2,3],[4,5]))

// //to use arrow func => (=> means return)
// //normally used to make anonymous function code shorter
// var longerarr = (arr1,arr2) => arr1.concat(arr2)
// //console.log(longerarr([1,2,3],[4,5,6]))

// //default parameters

// const increment = (function() {
//     return function increment(number, value = 1){
//         return number + value;
//     }
// })() // need to use () when u want to return an inner func to an outer func
// //() is a pattern known as Invoked Function Expression (IIFE), where u cause the outer func to be run

// console.log(increment(5,2))
// console.log(increment(5))

// //if u want to pass in a varying number of arguments, use the rest operator (...var name)

// const sum = (function(){
//     return function sum (x,y,z) { //u r returning the return value of the func sum
//         const args = [x,y,z];
//         return args.reduce((a,b) => a+b,0); //a is the accumulator, b is the input that u pass in 
//         //i.e it's 0 at the start, and 1 element is passed in at a time
//         //so first iteration is a=0,b=x, 2nd interation a is now 0+x, b is y and so on 
//     };
// })();
// //console.log('sum is: ',sum(1,2,3))

// //now if we want to use the rest operator 

// const sum2 = (function(){
//     return function sum2 (...args) { //it'll convert everything that's passed into 1 array and the array is called args
//         //const args = [x,y,z];
//         return args.reduce((a,b) => a+b,0); //a is the accumulator, b is the input that u pass in 
//         //i.e it's 0 at the start, and 1 element is passed in at a time
//         //so first iteration is a=0,b=x, 2nd interation a is now 0+x, b is y and so on 
//     };
// })();
// console.log('sum is: ',sum2(1,2,3,4)) //now u can modify the no. of arguments accordingly 

// //the spread operator is also ..., but it expands an alr existing array into its individual parts
// //useful when u want to make a copy of sth 
// const arr1 = [1,2,3,4,5]
// let arr2;
// (function() {
//     arr2 = [...arr1] //makes a copy without assigning to the same address
//     arr1[0] = 'potato'
// })(); //rmb include ()

// console.log(arr2)

// //destructuring is used when u wan to obtain property values from objects/arrays quickly

// var testy = {
//     name :'john',
//     age : 10,
//     height : '1.7m'
// }

// //wo destructuring
// // var n = testy.name
// // var a = testy.age
// // var h = testy.height
// // console.log(n,a,h)

// //w destructuring for objects, use {}

// const { name : NAME, age : AGE, height: HEIGHT} = testy //u r accessing the obj testy and assigning the value of name to NAME etc
// //console.log(NAME, AGE, HEIGHT)

// //for nested destructuring

// const local_forecast = {
//     today : {min: 30, max: 40},
//     tmr: {min: 50, max: 60}
// };

// function getmaxoftmr(forecast){
//     const {tmr:{max:maxoftmr}} = forecast;
//     return maxoftmr;
// }

// console.log(getmaxoftmr(local_forecast))

//for destructuring into arrays, u cannot specify which index of the array u want to be assigned to the var, it goes in order
//while for obj u can via properties
//for destructuring of arrays, use []

//var [x,y] = [1,2,3,4] //i.e u use [] to declare var
var [x,,y] = [1,2,3,4] //use this if u wan u to be 3
console.log('val of x:y is: ',x,y)

var x,y //whenever u got undef error just declare the var b4hand
[x,y] = [y,x] //if u wan to swap places //debug this line (see ans @ line above)
console.log(x,y)

//using destructuring w rest operator
function desarr (){
    desarr1 = [1,2,3,4,5];
    const [,,...desarr2] = desarr1; //skip the first 2 elements and put the rest into the arr2 var
    //const [a,b,...desarr2] = desarr1 //doing this stores 1,2 into a,b and the rest into desarr2
    //console.log(a,b)
    console.log(desarr2)
}
desarr()

//using destructuring when passing in an object as a fn parameters (can simplify it)

const grades = {
    avg: 75,
    max:100,
    min:0
};

const half = (function (){ //iife since it includes () around function, meaning u execute the fn immediately

    // return function findhalf(grades){
    //     return (grades['max']+grades['min'])/2
    // }
    return function findhalf({max,min}){ //this uses destructuring 
        return (max+min)/2;
    }
})();

console.log(half(grades)) //passes in grades into findhalf which returns the val of 50 into the
//outer anonymous fn 

const test1 = (function (){
    return "Hello from the half function!";
})();

//console.log(test1()); // This will execute the function and print its return value if u dun use () 
//around function

console.log(test1); // This will print the return val of the fn as test1 is assigned the return val of the fn

//tempalte literals invovle the use of backtick ` 
const personD = {
    name:'john',
    age: 20
};
//using ` allows u to write multi line strings, include '' inside a string, insert var inside it
//use ${} to declare whatever is inside {} is js
console.log(`Hello my 'name is ${personD.name}' 
and my age is ${personD['age']}`) //this is a template literal

const studentdetails = {
    studentA:['alpha','20 yrs','1.7m'],
    studentB:['beta','10yrs','1.6m'],
    studentC:['charlie','30yrs','1.8m']
};

function makelist(arr){
    const result = [];
    for (let i=0; i<arr.length;i++){
        result.push(`data: ${arr[i]}`)
    }
    return result
}
console.log(makelist(studentdetails.studentB))

//rmb object literals r basically objects in js context

// var createPerson = (name,age,gender) => {
//     return {
//         name:name,
//         age:age,
//         gender:gender,
//     }
// }
//if let's say u know that it's liddat above then u can do this istd
var createPerson = (name,age,gender) => ({name,age,gender}); //creates object with name age gender
console.log(createPerson('john',10,'Male'))

//writing concise delcarative functions when u put a fn within an object

const bicycle = {
    gear:2,
    setgear(newgear){ //istd of setgear:function(newgear), basically dunnid :function
        'use strict';
        this.gear = newgear;
    }
};
bicycle.setgear(3)
console.log(bicycle.gear)

//a constructor fn is a type of fn used to create and initalise obj, basically creating instances

// function Person(name,age){ //Person is the name of the constructor fn
//     this.name = name; //this refers to the new obj that the constructor will create
//     this.age = age;
//     this.greet = function (){
//         return `hello my name is ${this.name} and my age is ${this.age}`
//     }
// }
// const john = new Person('john','30') //use new followed by the constrcutor fn to create an instance
// console.log(john.name)
// console.log(john.greet())

//the class syntax replaces the constructor fn 

class Person {
    constructor(name,age){ //constructor is aka 'init' in python
        this.name = name, //'this' is aka 'self' in python
        this.age = age,
        this.greet = function (){
            return `hello my name is ${this.name} and my age is ${this.age}`
        }
    }
}
const john = new Person('john','30') //use new followed by the class to create an instance
console.log(john.name)
console.log(john.greet())

class Thermostatobj {
    constructor(temp){
        this._temp = (5/9)*(temp-32);
    }
    get temperature(){
        return this._temp
    }
    set temperature(newtemp){
        this._temp = newtemp;
    }
}

const thermostat1 = new Thermostatobj(75)
console.log(thermostat1.temperature)

// import { capitaliseString } from "./capitalise.js" //assumes it's js file, ./ means same directory 
// console.log(capitaliseString('jason'))

//if u wan to import the whole file, u can but it'll be stored as an obj, i.e testimport
// import * as testimport from "./capitalise.js" 

//if u wan to import a default export
//import subtract from 'capitalise.js'; //basically u dun include {} like u would for non-deafult imports





