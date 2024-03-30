"use strict";
var _a;
var age1 = 10;
console.log(age1);
var age2 = 20;
if (age2 < 50) {
    age2 += 10;
}
console.log(age2);
let sales = 123456789;
let isPublished = true;
let level;
let array1 = [3, 2, 1];
let tuple1 = ['goal?', true];
const small = 1;
const medium = 2;
const large = 3;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return (income * 1.2).toString();
    }
    else {
        return (income * 1.3).toString();
    }
}
let employee1 = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
let employee2 = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(20);
kgToLbs('30');
let textbox = {
    drag: () => { },
    resize: () => { }
};
let person1 = 'Female';
let length1 = 100;
function testHeight(height) {
    if (typeof (height) === 'number') {
        return 'number detected';
    }
    else if (height === null) {
        return 'u entered null val';
    }
    else {
        return 'u entered undefined val';
    }
}
;
console.log(testHeight(10));
console.log(testHeight(null));
console.log(testHeight(undefined));
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
;
let customer1 = getCustomer(0);
console.log(customer1 === null || customer1 === void 0 ? void 0 : customer1.birthday);
console.log((_a = customer1 === null || customer1 === void 0 ? void 0 : customer1.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map