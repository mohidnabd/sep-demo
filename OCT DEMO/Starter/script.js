// let name = "Mohideen";
// let age = "26";
// let desgn = "Civil Engineer";
// console.log("My name is "+name+
//  ". Im "+age+
//  " years old. Working as a "+desgn )

//  Template literals
//  console.log(`My name is ${name}.
// Im ${age} years old.
// Working as a ${desgn}.`)

// Control Statements
// for
// var sum = 0;
// for(i=0; i<=10; i++)
// {
//     sum=sum+i;
//     console.log(`Iterate value : ${sum}`);
// }
// console.log(`Sum is ${sum}`);

// var j =0;
// while(j<=10)
// {
//     j++;
//     console.log(j)
// }

// var k = 0;
// do{
//     k++;
// }while(k<=10);
// console.log(k);

// Switch case
// var l = 2;
// switch(l){
//     case 1:
//         console.log("First");
//         break;
//     case 2:
//         console.log("Second");
//         break;
//     default:
//         console.log("Neither");
// }

// Type conversion
// let a = 55;
// let b= "77";
// console.log(a+b);
// console.log(a+Number(b));

// let c = true;
// let d = "23";
// console.log(Number(c)+Number(d));
// console.log(Number(c)+d);

// let e = false;
// let f = "6";
// console.log(Number(e)+ f);

// Type Coersion
// console.log("33"-"23");
// console.log("22"*"33");
// console.log("33"/"3");
// console.log("35"%"3");
// console.log("22"+"33");

// Truthy and falsy values

// var e=0;
// if(e)
// {
//     console.log("True");
// }else{
//     console.log("False");
// }

// var a=``;
// if(a)
// {
//     console.log("True");
// }else{
//     console.log("False");
// }

// var b;
// if(b)
// {
//     console.log("True");
// }else{
//     console.log("False");
// }

// var c=null;
// if(c)
// {
//     console.log("True");
// }else{
//     console.log("False");
// }

// var str = "Mohideen";
// var n = Number(str);
// console.log(n)
// if(n)
// {
//     console.log("True");
// }else{
//     console.log("False");
// }

//  let input = prompt("Enter your Id :");
//  console.log(input);
//  console.log(typeof input)

// let input = prompt("Enter your Id :");
// let m = Number(input)
// console.log(m);
// console.log(typeof m);

// Ternary Operators

// var x = 22;
// let eligible = x>=18 ? "eligible" : "Not eligible"
// console.log(eligible);

// var m = prompt("Enter your age : ")

//  var age =20;
//  a = age>=18? "eligible ": "non eligible";
//  console.log(a)

//  let b = prompt("enter your age")
//  let a = Number(b);
//  let age = (a>=18)? "YOU ARE ELIGIBLE":"YOU ARE NOT ELIGIBLE"
//

// prompt("hello");
// prompt("hi");
// let b = prompt("Enter your age");
// let c = prompt("Enter your years of experience")

// function package(){
//     return c*2;
// }
// function isEligible(){
//     let d = package(c);
//     let a = `Since your age is ${b} and you have ${c} years of experience.
// So you are eligible to apply for this job of ${d} lakh Rs salary.`
//      return a;
// }
// console.log(isEligible());
// let birthYear = prompt("Enter your year of birth : ")
// const currentYear = 2022;
// function calculateMyAge(){
//     let age = currentYear-birthYear;
//     console.log("Your age is " , age);
// }
// calculateMyAge(birthYear);

// function calculateMyAge(){
//     var age = currentYear- birthYear;
//     return age;
// }
// console.log(`Your age is : ${calculateMyAge()}`)
// let age = calculateMyAge()
// console.log("Your age is :" , age);

// let birthYear = prompt("Enter your birth year : ");
// const currentYear = 2022;
// let calculateMyAge = function() {
//     return  currentYear-birthYear;
// }

// console.log(`Your age is : ${calculateMyAge()}`);

// const currentYear = 2022;
// let calculateMyAge= (year) => currentYear- year;
// console.log(`Your age is  ${calculateMyAge(1996)}`);

// const currentYear = 2022;
// let calculateMyAge = birthYear => {
//     return currentYear- birthYear;
// }
// let age = calculateMyAge(1996);
// console.log(`Your age is ${age}`);

// console.log("welcome")
// console.log(123456)
// console.log(123456)
//  console.log(typeof NaN)

// console.log([12,23,34,45,]);

// let a = 10;

// let b   = 20;
// console.log(a)

// let arr = [10,20,30,40,50];
// console.log(arr , arr.length)

// for(let i=0; i<arr.length;i++)
// { console.log(`Index = ${i} , Value = ${arr[i]}`) }

// let arrlen = arr.push(60);
// console.log("push " ,arr , arrlen)

// let popdElmnt = arr.pop();
// console.log("pop " ,arr , popdElmnt)

// let unshftdlen = arr.unshift(5);
// console.log("unshift ", arr , unshftdlen);

// let shftdval = arr.shift();
// console.log("shift ", arr , shftdval);

// console.log("indexOf " , "30 -->",arr.indexOf(30),
// "60-->", arr.indexOf(60))

// console.log("includes " , arr.includes(40), arr.includes(5));

// let bikes1 = ["Suzuki", "Yamaha" , "Hero" , "Honda" , "Bajaj"];
// let fav = bikes1.slice(1,3);
// console.log(bikes1, fav) ;

// let bikes2 = ["Suzuki", "Yamaha" , "Hero" , "Honda" , "Bajaj"];
// let dltdlog = bikes2.splice(2,2, "TVS", "Jawa", "Rajdoot");
// console.log(bikes2,dltdlog)

// let arr1 = [1,2,3,4,5,6]
// console.log(arr1.reverse());

// let arr2 = [2,3,4,5,6];
// let arr3 = [ 3,4,5,6,7];
// let arr4 = arr2.concat(arr3);
// console.log("concat ",arr4)

// console.log(arr4.join(' $ '))

// let currentYear= 2022;
// let details = {
//     fname : "Mohideen",
//     id : 123 ,
//     email : "mohideensalam96@gmail.com" ,
//     mobile: 8489984545 ,
//     birthYear : 1996 ,
//     hobbies : ["Origami" , "Skateboarding" , "Training"],
//     getAge : function(){
//         return currentYear-this.birthYear;
//     }

// }
// console.log(details)
// console.log(details.email);
// console.log(details['mobile'])

// let input = prompt("Enter the parameter to get value: ");
// if(details[input]){
//     console.log(details[input]);
// }else{console.log("Wrong input")}

// console.log( "Age : ", details.getAge());

// let currentYear= 2022;
// let details = {
//     fname : "Mohideen",
//     id : 123 ,
//     email : "mohideensalam96@gmail.com" ,
//     mobile: 8489984545 ,
//     birthYear : prompt("Enter your Year of birth : ") ,
//     hobbies : ["Origami" , "Skateboarding" , "Training"],
//     getAge : function(){
//         return currentYear-this.birthYear;
//     }
// }
// let condition = details.getAge()>18? "eligible" : "not eligible" ;
// console.log(`Mohideen is ${details.getAge()} years old and
// he is ${condition} for voting.` )

// let text = "mohideenabdulsalam";
// let c = text.substring(4,6)
// console.log(c)

// a= "Im from Tirunelveli"
// console.log(a)
// c = a.replace("Tirunelveli", "chennai")
// console.table(c)

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// let sqr = numbers.map((value)=> {
//     return value*value;
// })
// console.table(sqr)

// var str = "Welcome to Javascript";
// let a = str.split(" ");
// let w1 = a[0];
// let w2 = a[1];
// let w3 = a[2];
// console.log(w1,w2,w3)

// let rev1 ="";
// for(var i =w1.length-1; i>=0; i--){
//     rev1 = rev1 + w1[i]
// }
// let rev2 ="";
// for(var i =w2.length-1; i>=0; i--){
//     rev2 = rev2 + w2[i]
// }
// let rev3 ="";
// for(var i =w3.length-1; i>=0; i--){
//     rev3 = rev3 + w3[i]
// }

// console.log(rev1,rev2,rev3)

// let a = str.split(" ");
// let w1 = a[0];
// let w2 = a[1];
// let w3 = a[2];
// console.log(w1,w2,w3)

// let u1= w1.split("");
// let u2= w2.split("");
// let u3= w3.split("");

// let v1 = u1.reverse().join('')
// console.log(v1)
// let v2 = u2.reverse().join('')
// console.log(v2)
// let v3 = u3.reverse().join('')
// console.log(v3)

// console.log(v1,v2,v3)
// var str = "Welcome to Javascript";
// function reverse(){
//     return str.split("").reverse().join("").split(" ").reverse().join(" ")
// }

// console.log(reverse(str))

// const details = {
//     fname : "Mohideen",
//     getAge : function(age) {
//         return `${this.fname}'s age is ${age}`
//     }
// }
// console.log(details.getAge(26));

// const student1 = {
//     firstName: "Mohideen" ,
//     lastName : "Salam",
//     fullName : function(city="Banglore", state ="Karnataka"){
//         return this.firstName+" "+this.lastName+" "+city+" "+state;
//     }
// }
// console.log(student1.fullName())

// const student2 = {
//     firstName: "Abdul",
//     lastName: "Salam",
//     }
//     //call() and default parameters
//     console.log(student1.fullName.call(student2, "Tirunelveli", "TamilNadu"))
//     //apply() and default parameters
//     console.log(student1.fullName.apply(student2,["Udupi"]))
//     //bind()
//      let newFunction = student1.fullName.bind(student2)
//      console.log(newFunction());

// var numberOne = 50;
// var numberTwo = numberOne;
// var numberThree = 100;
// var numberTwo = numberThree;
// var numberThree = 150;
// console.log(numberOne)
// console.log(numberTwo)
// console.log(numberThree)

// let object1 = {
//     name: "Mohideen",
//     age: 26,
// }
// let object2 = object1;
// object1.age= 30;

// console.log(object1)
// console.log(object2)

//To check if a number is an integer

// var number = "55";
// if(number===parseInt(number)){
//     console.log("the number is an integer")
// }else{
//     console.log("the number is not an integer")
// }

// //To empty an array

// let arr = ["apple", "mango", "orange", "banana", "grapes", "papaya"]
// arr.splice(0,6);
// console.log(arr);

// var arr = [23,34,45,56,67]
// function findAverage(n1=0,n2=0,n3=0,n4=0,n5=0,n6=0,n7=0){
//     var sum = n1 + n2 + n3 + n4 + n5 + n6 + n7 ;
//     var avg = sum/arr.length;
//     console.log(avg);
// }
// findAverage(...arr);

// const part1 = ["Shoulder", "knees"]
// const part2 = ["head", "hand", ...part1, "toes"]
// console.log(part2)

// arr1 = [0,1,2]
// arr2 = [3,4,5]
// arr2 = [...arr1,...arr2]
// console.log(arr2)

// var a,b;
// [a,b] = [10,20];
// console.log(a,b)

// var[b,a] = [a,b];
// console.log(a,b);

// var firstName,lastName;
// [firstName,lastName]= ["alpha","beta","gamma","delta", "geta"]
// console.log(firstName)
// console.log(lastName)

// var[firstName,...lastName] = ["alpha","beta","gamma","delta", "geta"]
// console.log(firstName)
// console.log(lastName)

// var[firstName,,...lastName] = ["alpha","beta","gamma","delta", "geta"]
// console.log(firstName)
// console.log(lastName)

// var Markheight,Markweight,Johnheight,Johnweight;
// Markheight=1.95;
// Markweight=78;
// Johnheight=1.76
// Johnweight=92;

// var bmijohn,bmimark;
// function calculateBMIMark (weight, height) {
//        var bmimark = Number(weight/(height*height));
//       console.log(bmimark)
// }
// function calculateBMIJohn (weight, height) {
//       var bmijohn = Number(weight/(height*height));
//     console.log(bmijohn);
// }
// let result = bmimark>bmijohn? true:false;
// if(result==true){
//     console.log("Mark has a higher Bmi")
// }else{
//     console.log("John has a Higher Bmi")
// }
// calculateBMIMark(Markweight,Markheight);
// calculateBMIJohn(Johnweight,Johnheight)

//  const dol = [96,108,89,200,116]
//  const kol = [88,91,110,150,197]
//  var avg1,avg2;

//  function getAverage1(a1=0,a2=0,a3=0,a4=0,a5=0,a6=0,a7=0,a8=0,a9=0){
//      var sum = a1+ a2 +a3 +a4 +a5;
//      var avg1 = sum/dol.length;
//      console.log(avg1)
//      }

//      function getAverage2(a1=0,a2=0,a3=0,a4=0,a5=0,a6=0,a7=0,a8=0,a9=0){
//         var sum = a1+ a2 +a3 +a4 +a5;
//         var avg2 = sum/kol.length;
//     console.log(avg2)
//     }

//     var if100above = getAverage1>100 && getAverage2>100 ? true:false;
//      if(true){
//         if(avg1>avg2){
//             console.log("Dolphins is the winner")
//         }else if(avg1=avg2){
//             console.log("The match is draw")
//         }else{
//             console.log("Koala is the winner")
//         }
//      }else {
//         console.log("Average is below 100")
//      }
//     getAverage1(...dol)
//   getAverage2(...kol)

// var temps = [3, -2, -6, -1, 9, 18, 21, 9, 15, 5]

// var largest,smallest;

// function ltemp() {
//     var largest = 0;
//     for (var i = 0; i < ltemp.length; i++) {
//         if (ltemp[i] > largest) {
//              cd largest = ltemp[i];
//         }
//     }
// }
// function stemp() {
//     var smallest = 0;
//     for (var i = 0; i < stemp.length; i++) {
//         if (stemp[i] < smallest) {
//             var smallest = stemp[i];
//         }
//     }
// }
// var amplitude = largest - smallest;
// console.log("Amplitude : ", amplitude)

// ltemp(...temps);
// stemp(...temps);

// function tofindamplitude() {
//   var temps = [3, -2, -6, -1, 9, "error", 18, 21, 9, 15, 5];
//   var largest = 0;
//   for (var i = 0; i < 10; i++) {
//     if (temps[i] > largest) {
//       var largest = temps[i];
//     }
//   }
//   console.log(largest);

//   var smallest = 0;
//   for (var i = 0; i < 10; i++) {
//     if (temps[i] < smallest) {
//       var smallest = temps[i];
//     }
//   }
//   console.log(smallest);

//   var amplitude = largest - smallest;
//   return amplitude;
// }
// var amp = tofindamplitude();
// console.log("Amplitude : ", amp);

//-------------------------------------------------------------------------------------

var Markheight, Markweight, Johnheight, Johnweight;
Markheight = 1.95;
Markweight = 78;
Johnheight = 1.76;
Johnweight = 92;

var bmijohn, bmimark;
function calculateBMIMark(weight, height) {
  bmimark = Number(weight / (height * height));
  console.log(bmimark);
}
function calculateBMIJohn(weight, height) {
  bmijohn = Number(weight / (height * height));
  console.log(bmijohn);
}
let result =
  bmimark > bmijohn
    ? console.log("Mark has a higher Bmi")
    : console.log("John has a Higher Bmi");

calculateBMIMark(Markweight, Markheight);
calculateBMIJohn(Johnweight, Johnheight);







// const dol = [96, 108, 89, 200, 116];
// const kol = [88, 91, 110, 150, 197];  //
// var d_avg, k_avg;

// function getAverage1() {
//   var dsum = 0;
//   for (let i = 0; i < dol.length; i++) {
//     dsum = dsum + dol[i];
//   }
//   d_avg = dsum / dol.length;
//   console.log("Dolphin's avg score : ",d_avg);
// }

// function getAverage2() {
//   var ksum = 0;
//   for (let i = 0; i < kol.length; i++) {
//     ksum = ksum + kol[i];
//   }
//   k_avg = ksum / kol.length;
//   console.log("Koala's avg score : " ,k_avg);
// }
// getAverage1(...dol);
// getAverage2(...kol);

//   if (d_avg>k_avg) {
//     console.log("Dolphins is the winner");
//   } else if (d_avg==k_avg) {
//     console.log("The match is draw");
//   } else {
//     console.log("Koala is the winner");
//   }

// const dol = [88, 91, 110, 150, 197];
// const kol = [88, 91, 110, 150, 197];  //96, 108, 89, 200, 116
// var avg;

// function getAverage() {
//   var sum = 0;
//   for (let i = 0; i < getAverage.length; i++) {
//     sum = sum + getAverage[i];
//   }
//   avg = sum / getAverage.length;
//   console.log(avg)
//   return avg

// }
// let dolavg = getAverage(...dol);
// let kolavg = getAverage(...kol);

// console.log(dolavg)

// if (d_avg>k_avg) {
//   console.log("Dolphins is the winner");
// } else if (d_avg==k_avg) {
//   console.log("The match is draw");
// } else {
//   console.log("Koala is the winner");
// }

// const arr = [88, 91, 110, 150, 197];
// const average = arr.reduce((a, b) => a + b) / arr.length;
// console.log(average);

// var temps = [3, -2, -6, -1, 9, "error", 18, 21, 9, 15, 5];

// temps = temps.filter(Number.isInteger);
// console.log(temps);

// var largest = temps[0];
// for (var i = 0; i < 10; i++) {
//   if (temps[i] > largest) {
//     var largest = temps[i];
//   }
// }
// console.log(largest);

// var smallest = temps[0];
// for (var i = 0; i < 10; i++) {
//   if (temps[i] < smallest) {
//     var smallest = temps[i];
//   }
// }
// console.log(smallest);

// var amplitude = largest - smallest;
// console.log(amplitude);
