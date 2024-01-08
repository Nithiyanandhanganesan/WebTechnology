
//Variables:
//==============
//Variables declared by let are only available inside the block where they're defined.
//Variables declared by var are available throughout the function in which they're declared
console.log("==============VARIABLES==============")
var x=1
var xx=5, yy=6
let y="test"
x=2
console.log(x)

//If variable declared as const, we cannot change the value of variable
const name="test"




//###################################################################
//###################################################################


//DATA TYPES:
//============

console.log("==============DATA TYPES==============")
let data = 8
let user = "anand"
let decimalVar = 6.5

console.log(typeof data)
console.log(typeof user)
console.log(typeof decimalVar)

//String concat & Template literal
let fname = "nithiy"
let lname = "anand"
let res = fname + lname
console.log(`The addition of ${fname} and ${lname} is ${res}`) //template literal

//Declare variable without assign value
let testVar
console.log(typeof testVar)

//Declare with DataType
let num = String("123")
console.log(typeof num)

let intNum = Number("123")
console.log(typeof intNum)


//OPERATORS:
//===========

console.log("==============OPERATORS=============")

var num1 = true
var num2 = true
let result = num1 + num2 + 3
console.log(result)
console.log(++result)

let result1 = Math.pow(4,3)
console.log(result1)

var num3 = 7 >= 6
console.log(num3)

var num4 = 5===5
console.log(num4)

let result2 = 6<7 && 7<6
console.log(result2)

let result3 = 6<7 || 7<6
console.log(result3)

//SWITCH STATEMENT
let day ="Monday"

switch(day){
  case 'Monday':
    console.log("its monday")
    break;
  case 'Tuesday':
    console.log("its tuesday")
    break;
  default:
    console.log("no day")
    break;
}


//LOOP
//===========

console.log("==============LOOPS=============")

let i=1;
while (i<=5){
  console.log("WHILE LOOP")
  i++;
}


for(let i=1;i<=5;i++){
  console.log("FOR LOOP")
}


let obj22 = {
  name: "nithiy",
  age:30
}
for(let key in obj22){
  console.log(key, obj22[key])
}


//OBJECTS
//===========

console.log("==============OBJECTS=============")

let obj1 = {}
console.log(typeof obj1)

//create object
let obj2 = {
  name: "nithiy",
  age:30
}
console.log(obj2)
console.log(obj2.name)

//create complex object & Retrieve the value
let obj3 = {
   name : "nithiy",
   age: 30,
   work: {
     company:"xxx",
     salary : 10
   }
}
console.log(obj3)
console.log(obj3.work)
console.log(obj3.work.company)


//FUNCTIONS
//===========

console.log("==============FUNCTIONS=============")

function greet(user){
  return `hello ${user}!!`
}

let funRes1 = greet("Anand")
console.log(funRes1)



let laptop = {
  cpu: "i9",
  ram: 16,

  getConfig : function(){
     console.log(this.cpu)
  }
}

laptop.getConfig();

//Constructor method
function Employer(name, age){
  this.name = name;
  this.age  = age;
}

let emp = new Employer("Anand",30)
console.log(emp)


//COLLECTIONS
//===========

console.log("==============COLLECTIONS=============")
console.log("==============ARRAY=============")
//Array
let colVal1 = [1,2,3]
let colVal2 = []
colVal2.push(5)

console.log(colVal1[1])
console.log(colVal2)

for(let n of colVal1){
  console.log(n)
}

for(let n in colVal1){
  console.log(colVal1[n])
}

colVal1.forEach(n => {
  console.log(n)
})

console.log("==============SET=============")

let colVal3 = new Set("bookkeeeper")
console.log(colVal3)

let colVal4 = new Set()
colVal4.add(3)
colVal4.add(3)
colVal4.add(4)
console.log(colVal4)

console.log("==============MAP=============")

let colVal5 = new Map()
colVal5.set("anand","computerengg")
colVal5.set("nithiy","cse")

console.log(colVal5.keys())

for (let [k,v] of colVal5react){
  console.log(k , v)
}


