import React from "react";

const Test_Test = () => {
  return <div></div>;
};

//
//







//FUCTION
//FUCTION
//FUCTION

const createPassword = (name: string='Max', aga: number | string=20) => `${name} ${aga}`;
createPassword("jack", 31);




// ? считает как необязательные 
const createPassword1 = (name: string='Max', aga?: number ) => `${name} ${aga}`;
createPassword1("jack", 31);




const reateSkills = (name, ...skils)=> `${name} у меня такие вот скили ${skils.join()}`
const createSkils = (name:string, ...skils: Array<string>)=>`${name}у меня вот такие вот скилы ${skils.join()}`
const createeSkils = (name:string|number, ...skils:number[])=>`${name}у него такие вот скилы ${skils.join()}`

//


const createSSkils = (name:string, age:string|number):string => `${name},${age}`
const  createSkilsss = (name:number, age:number):number => name+age

//void если ничего не возрващает 
const createEmptyObjc =():object|void=>{} //это не возвращает значение 
const createEmerer =():object =>({})      // это возвращает значение 
const greetUser=():void=>{
  alert('hello, nice to see you')
}

//never если выполняется всегда или возвращает ошибку то это NEVER (never)
const msg ='hello'
const error = (msg:string):never=>{
  throw new Error(msg)
}
const infiniteLoop = ():never=>{
  while(true){   
  }
}



//OBJECTS
//OBJECTS
//OBJECTS



let user= {
  name:'yaung',
  age: 21
};

let use1r:any={
  name: 'yefe',
  age:12
}

let list :Array<number>=[1,3,4]
let list1 :number[]=[123123]

let users:{name:string, aga:number}={
  name: '123',
  aga:123
}

//и переаписать эту переменную нельзя, так как она вызывает ошибку
// ошибка =>   users = 'test' 
// он получил жесткую типизацию свебя и своих свойств 

let ff :{name:string, age?:number}={
  name: '123',
  age: 123

  // если мы попытаемся добавиьт тут новый ключ с значением,
  //то мы получим ошибку

  // ошибка => nickNAME: 123
}

//вот как можноэто испарвить
let fefe: {name:string, age:number, nickName?:string}={
  name:'123',
  age:123,
  
}
fefe.nickName ='123123'

//--------------------------------------------------
//--------------------------------------------------

//если вдруг у нас повторяю.тся типа = name: string, age:number, nickName:string
// то можно сделать следующее 


// пользовательский тип 
type Person = {name:string, age:number, nickName:string}

let userrr:Person ={
  name:'123',
  age:123,
  nickName:"123"
}
//ЕСЛИ ЕСТЬ НЕОБЯЗАТЕЛЬНЫЕ ЗНАЧЕНИЕ ТО МОЖНО СДЕЛАТЬ ВОТ ТАК 

type Person1= {
  name:string,
  age:number,
  nickName?: string,
  getPass?: ()=>string,
}

//--------------------------------------------------
//--------------------------------------------------





//classes
//classes
//classes

























































function qwerty(a, b ){

 return `Меня зовут${a}, мне ${b}лет `
}

function qwertyy(a:string, b:number ){

  return `Меня зовут${a}, мне ${b}лет `
 }
 








export default Test_Test;
