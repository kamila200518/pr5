'use strict';
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum);




let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric() {
    menu.width  *= 2;
    menu.height *=2;

}
multiplyNumeric();
console.log(menu);



const calculator = {
   
    read() {
      this.a = +prompt("Первое число:");
      this.b = +prompt("Второе число:");
    },
  
  
    sum() {
      return this.a + this.b;
    },
  
  
    mul() {
      return this.a * this.b;
    }
  };

calculator.read();
alert( calculator.sum());
alert( calculator.mul()) ;




let str = "$120";

function extractCurrencyValue(str) {
    return +str.slice(1);
}
alert( extractCurrencyValue(str));
  



let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);

alert( names ); 

 



function getAverageAge(users) {
    let totalAge = 0;
  
    for (const user of users) {
      totalAge += user.age;
    }
  let kk =  totalAge / users.length
    alert(kk)
  }

  getAverageAge(users)