
//ts vs js 
//destructuring is used to extract values from arrays or prop from diff objects into var
//rest operator is used to gather remaining elements into a single array/object

//ts is used to mitigate shortcomings of js
//most impt feature is ts is static-type while js is dynamic-type
//ts is javascript but with type checking (aka what static-type does)

/*
statically-typed means once u declare the type of var u can't change it anymore
dynamically-typed means once u declare u can change later
*/

var age1: number = 10 //when u do this u r fixing age to be an number type (useful when udw to accidentally change it's type)
//age = 'a' 
console.log(age1)

//so later when u try to change it to another type, ts will throw an error on the spot 
//(cuz ts is a compiler so it'll check 4 errors b4 running) whereas if u do that for js it won't show an error

//downside of ts is that most browsers still rely on js, so u need to compile from ts to js first 
//aka (process of converting 1 high-end lang to another which is called transpilation)

//ts normally use for medium to large scale projects as got many diff ppl working on it so u need ts which is more strict to make things
//more standardized for everyone, use js for personal projects

//tsc stands for typescript compiler, u need it to convert to js
//type tsc index.ts in terminal to compile into an ES5 js file by default
//to convert to ES6 js fi>le, type tsc --init

//after u config the tsc --init file, when u compile u just need to type tsc istd of tsc filename

//add breakpoint on LHS of line of code to tell debugger to stop @ that line of code
var age2 : number = 20;
if (age2<50){
    age2+=10; //if there's stuff u dun see in the variables tab then use the watch tab
} //once u reach the end of the prog here u notice that age2: not ava cuz u reach the end of the prog
//so u need to add another line of code below
console.log(age2);

let sales = 123_456_789; //if no is too long u can use _ in btwn
let isPublished:Boolean = true; //act dunnid :data type eg :Boolean cuz ts can auto detect based off 
//the val that u assign the var to, just hover over the var name to check

let level; //if u dun assign the var a value ts assumes it's of the type 'any' (any type of val)
//but try to avoid this, cuz even tho this allows u to change the var type, it defeats the purpose of ts

//if u rlly wanna use the any type try to specify eg level:any

//for arrays
let array1 : number[] = [3,2,1]; //use number[] to mean u wan elements inside to be no. only
//if u wan to use tuples (try to use it for key-val pairs)
let tuple1 : [string,boolean] = ['goal?',true]

//enums r a ez way to represent a bunch of constants
const small = 1;
const medium = 2;
const large = 3;

//by default 1st parameter is 0 and it increments by 1 and so on
//enums r not objects they r just a way to easily represent constants 
const enum Size {Small=1,Medium,Large} //if u declare enum as const the compiler will gen more precise code
let mySize:Size = Size.Medium
console.log(mySize);

//JS fn returns undefined by default
//always declare parameter types and return types 
//always enable noUnusedLocals - to ensure all fn var r used
//always enable noUnusedParameters
//always enable noImplicitReturns - to ensure u dun return undefined by default

//means taxYear is 2022 by default
//:string to declare that u wan the return val to be a String
function calculateTax(income:number,taxYear:number = 2022):string{
    if (taxYear<2022){
        return (income*1.2).toString()
    }
    else{
        return (income*1.3).toString()
    }
}


//objects, rmb to declare the datatype of the object's properties
let employee1: {
    readonly id:number, //use readonly if udw to change the property val afterwards
    name:string,
    retire:(date:Date) => void //function w parameter date that is of type Date, return val is void 
} = {
    id:1,
    name:'' ,
    retire:(date:Date)=>{
        console.log(date)
    }
}//'' by default, u can't set it to Null or undefined by default 

//but now, if u wan to create another employee object, u need to declare the datatypes of the prop again
//to avoid that, use a type alias

type Employee = {
    readonly id:number, //use readonly if udw to change the property val afterwards
    name:string,
    retire:(date:Date) => void //function w parameter date that is of type Date, return val is void 
}

//now it's more neat
let employee2:Employee = {
    id:1,
    name:'' ,
    retire:(date:Date)=>{
        console.log(date)
    }
}


//if u wan ur var or fn parameter to be >1 type, use union types
//use just a single | to represent union type
//but after u tsc and view the js file the | will disappear cuz | is for ts only
function kgToLbs(weight:number | string):number{
    if (typeof weight==='number'){
        return weight*2.2;
    }
    else{
        //parseInt converts str to no. 
        return parseInt(weight)*2.2;
    }
}
kgToLbs(20)
kgToLbs('30')

//intersection type aka & is when u wan a var to be both types
type Draggable = {
    drag: () => void
};

type Resizeable = {
    resize: () => void
}

type UIWidget = Draggable & Resizeable
let textbox:UIWidget = {
    drag:() => {},
    resize:() => {}
}

//if u wan to limit the val u set to a var, use literal types
type Gender = 'Male'|'Female'; //string literal
let person1: Gender = 'Female';

type Length = 50|100;
let length1: Length = 100;


//if u wan to pass in null type/undefined as a parameter in ts, go tsconfig and set strictNullChecks to false
//and then use union operator | to include null and undefined 
function testHeight(height:number|null|undefined):string{
    if (typeof(height)==='number'){
        return 'number detected'
    }
    else if (height === null) {
        return 'u entered null val'
    }
    else {
        return 'u entered undefined val'
    }
};

console.log(testHeight(10))
console.log(testHeight(null))
console.log(testHeight(undefined))

//optional chaining, used when u wan to check if var is undefined or null
type Customer = {
    birthday?:Date
}

function getCustomer(id:number):Customer|null|undefined{
    // conditional ternary operator cond ? valIfTrue:valIfFalse
    // i.e ? doesn't mean optional it's part of the ternary operator cond
    // i.e if id is 0 it'll return null, if false it'll return birthday
    return id === 0 ? null:{birthday:new Date()}; 
}; 

let customer1 = getCustomer(0);
//console.log(customer1.birthday) //u get the error that customer1 is possibly null
//so u use the optional property access operator
//adding ?. checks if the customer is null/undefined, if it's neither then u proceed 
console.log(customer1?.birthday) 

//now let's say u amend the above and make birthday optional, so u afterwards u need to check if
// .birthday is null or undefined so u add ?. operator again
console.log(customer1?.birthday?.getFullYear());



//when u r dealing w arrays, can use optional element access operator 
let testArray = [1,2,3]
console.log(testArray?.[0]) //only log out if index 0 isn't null or undefined

//when logging out stuff, can use optional call operator
let testA:any = 'null'
console?.log(testA) //only log if testA isn't null or undefined 