
const x = 100;
let result;
if (x < 1000){
    result = " nhỏ hơn 1000";
} else {
    result =" lớn hơn 1000";
};

// const x = 100;
// const result = (x<1000) ? "nhor hơn 1000" : "lớn hơn hoặc bằng 1000";

//Shorthand Evaaluated
let variable2;
if ( variable1 !== null || variable1 !== underfines || variable1 !==''){
    variable2 = variable1;
} else{
    variable2 = "";
}

//Variable declarration - if Comparison
let x;
let y;
let z =3;
-->  let x, y, z=3;

if (isTurnOn === true)
---> if(isTurnOn)

//For loop - For lôp with decimal base
for(let i = 0; i< sampleArr.lenght; i++)
--> for(let item in amleArr)


for(let i =0; i<100000; i++){}
--> for(let i =0; i < 1e5; i++){}
# giá trị biểu thức sau đều là true
1e0 === 1;
1e1 === 10;
1e2 === 100;
1e3 === 1000;
1e4 === 10000;

//Object property - ES6 cung cấp cho ta khả năn gán property cho object dẽ dàng hơn. Nếu tên key trùng luôn với tên biến
const x =1 , y =2;
const obj ={ x: x. y: y};
--> const x =1, y =2;
    const obj ={ x, y};

// Rút gợn định nghĩa function ( sử dụng arrow function)

function sayHello(name){
    console.log('Hello', name);
}
setTimeout(function(){
    console.log('Loaded')
},2000);
FileList.forEach(function(item){
    console.log(item);
});
--> sayHello = name => console.log('Hello', name);
    setTimeout(() => console.log('Loaded'), 2000);
    FileList.forEach(item => console.log(item));
// Implicit (ẩn đi bằng arrow function)
function getValue(ratio){
    return ratio= 6.9;
}
--> getValue = ratio => ratio *6.9

//Set defalt value for parameter in function
function getValue(a, b, c){
    if( a=== underfined)
    a=3;
if (b === undefined)
b = 4;
return a *b +c;
}
--> getValue = (a, b =3, c=4) => (a*b+c);

//Template list
const welcome = 'you have logged in as' + first + ' '+last + '.'
--> const welcome ='you have logged in as ${first} ${last} .';


const lorem = 'Lorem ipsum dolor it amet , consectetur\n\t'
+'adipisicing elit, sed do eiusmod tempor incididunt\n\t'
+ 'ut labore et dolore magna aliqua. Ut enim ad minim\n\t'
+'nisi ut aliquip ex ea comodo consequat. Duis aute\n\t'
+'irure dolor in reprehenderit in voluptate velit esse.\n\t'

--> const lorem = 'Lorem ipsum dolor it amet , consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim nisi ut aliquip ex ea comodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.'

//Destructuring Asignment

const action = require('lib/action')
const service = require('lib/service')
const form = this.props.form;
const errors = this.props.errors;
const entity = this.props.entity;
const controller = this.props.controller;
const component = this.props.component;
 --> import{ action, service} from 'lib';
 const { form , erors , entity, controller, component}= this.props;

 //Spead operator
 //joining arrays
 const odd =[1,3,5];
 const nums = [ 2, 4,6].concat(odd);
 --> const old =[1,3,5 ];
 const nums = [2,4,6, ...odd];

 //cloning arrays 
 const arr =[ 1,2,3,4];
 const arr2 = arr.slice()
 --> const arr = [1,2,3,4];
 const arr2 =[...arr];

 --> const old =[1,3,5];
 const =[2, ...odd, 4, 6];

 //Constraint Param
 function sample(param1){
    if(param1 === underfined){
        throw new Error('Thiếu tham số!');  
      } 
      return param1;
 }
 -->mandatory =() => {throw new Error('Thiếu tham số !');}
    sample =(param1 = mandatory())=> param1

//Find() in arrays
const employees =[
    {name: ' Emp A', age: 25},
    {name: ' Emp B', age: 28},
    {name: ' Emp C', age: 35}
]


 function findEmp(name){
    for(let i=0; i<employees.lenght; i++){
        if(employees[i].name === name){
            return employees[i];
        }
    }
 }
 const name ='Emp A'
 emp = findEmp(name)

 --> const name ='Emp A'
 emp =employees.find(item => item.name === name)

 //Object Key :Để get property của object trong JS ngoài cách Obj.prop, còn có thể viết Obj['prop']. Nhìn qua thì dùng cả 2 cách đều cho kết quả như nhau. Tuy nhiên để viết được những đoạn code có thể tái sử dụng, thì cần sử dụng cách thứ 2 

function validate(fullName){
    if(!fullName.firstName)
    return false;
    if(!fullName.lastName)
    return false;
return true;
}
console.log(validate({firstName:'Hang', lastName:'Loren'}))://true

const rule={
    firstName:{
        required: true
    },
    lastName:{
        required:true
    }
}

const validate =(rule, values)=>{
    for(prop in rule){
        if(rule[prop].required){
            if(!values[prop]){
                return false;
            }
        }
    }
    return true;
}
console.log(validate(rule, {firstName:'Hang'})); //false
onsole.log(validate(rule, {firstName:'Hang', lastName:'Loren'})); //true

//Bitwwisse NOT double
Math.floor(6.9) === 6 //true
--> ~~6.9 ===6//true