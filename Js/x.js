// const name = 'Dilan';
// const age = 23 ;
// console.log(`My name is ${name} and I am ${age} `)
// console.log('My name is '+ name +' and I am '+ age )
//  const fruits=['apple','grape','strawberry']
// fruits[1]='orange';
// fruits.push('mango')
// fruits.unshift('pears')

//  console.log(fruits)

// const person ={
//     firstName:'Dilan',
//     lastName:'Mazlum',
//     age: 23 ,
//     address:{
//         street:'mimar sinan',
//         city:'Adıyaman'
//     },
//     hobbies:['music','movies']
// }
//  console.log(person)
// const X =13;
// if (X===23){
//     console.log('X is 23')

// } else if (X>23){
//     console.log('X  is greater than 23')
// }
// else if (X<23){
//     console.log('X  is less than 23 ')
// }
// else {
//     console.log('X is not 23')
// }

// function addNums(num1,num2){
//     console.log(num1*num2)
// }
// addNums(12,18);

function person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob= dob;
    this.getFullName= function(){
        return `${this.firstName} ${this.lastName}`;
    }

}
const person1 = new person('Dilan','Mazlum','21-03-2001');
console.log(person1.dob);
console.log(person1.getFullName());