
// takes in a parameter called str and returns it as fully capitalised
export const capitaliseString = str => str.toUpperCase(); //indicate export to say u wan to use it 
//in another file

//if u wan to be more explicit in what u export then u add export to certain stuff within this file
export {capitaliseString}; //if use this then can remove the word export from the code above
var a = 1
export var b = 2

//if u only wan to export 1 thing from a file aka export fallback
//export default function subtract(x,y){return x-y;}