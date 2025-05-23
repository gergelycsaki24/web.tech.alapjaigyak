console.log("Hello World");
let variable=15;
variable='str';
variable=false;

const constant= 15;

const randomNum= Math.random();

const userName = null;

if(userName){
    console.log('Felhasználónév:', userName)
}
else{
    console.log('Nincs felhasználónév')
}


const values= ['red', 'blue', false, 13]

for (let i = 0;  i< values.length; i++) {
        console.log(values[i])
    
}

for (const index in values) {
    if (index%2==1){ 
        console.log(values[index])
    }
}

for (const value of values) {
    console.log(value)
}
const exchangerates= [243,45645,4565,456,2244,765,345];

const euros= exchangerates.map((rate)=> 1500/rate);

console.log(euros);


const below400 = exchangerates.filter((rate)=> rate<400);
console.log(below400);



function greet(name){
    console.log('Hello', name)

}
greet('Gergő');


function square(num){
    return num *num;
}
console.log(square(2));


const person={
    name: 'John',
    age:22,
    active:true,
    dogs : ['Morzsi','Feri' ],
    greet: function(){
        console.log('Hello', this.name);
    }

}