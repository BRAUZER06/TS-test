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




class User {
 public name:string;
 private age: number;
 protected nickName: string;
 readonly pass:number;

  constructor(name:string, age:number,nickName:string, pass:number){
    this.name = name;
    this.age = age;
    this.nickName = nickName
    this.pass = pass

  }
}

let userr = new User('вася', 31, 'webDev', 123 )

userr.name      //по умолчанию
userr.age       //не может быьт получен за пределы класса
userr.nickName  //могут получить только наследнкии  
userr.pass      //доступен для чтения 



// также в классах можно задавать дефолтные значение элементов ПРИМЕР
//ПРИМЕР 
class Userr{
  name:string
  age: number=12
  nickName: string= 'webDev'
  
  constructor(name:string){
    this.name = name 
  }
}

let us = new Userr('NIKITA')

us // {name: 'NIKITA', age:12, nickName:'webDev'}



//КАК НЕ ПСИАТЬ ПРИСВОЕНИЕ THIS >

class G {
  public name :string
  public age: number
  public nickName:string

  constructor(name:string, age:number, nickName:string){
    this.age= age,
    this.name= name,
    this.nickName= nickName
  }
}

//>>>>>>>>>>>>>>>>> СКОРАЩЕННАЯ ФОРМА ЗАПИСИ 
class GG {
  constructor(
    public name:string,
    public age:number,
    public nickName: string,

  ){}
}

//что такое аксессеры (речть идет о getttarah и settorah)
//служат либо для чтения либо для устанвоки значения в него 

// https://youtu.be/OruUd2HULaI?list=PLNkWIWHIRwMEm1FgiLjHqSky27x5rXvQa&t=286 время указано 

// тему пропустил 
// тему пропустил 
// тему пропустил 
class GGg {
  private age:number = 20;

  constructor(public name:string){}

    setAge(age:number){
      this.age = age
    }
    set myAge(age:number){
      this.age = age
    }

}

const fff= new GGg('Yauhen')
fff.setAge(39)
fff.myAge = 31
// тему пропустил 
// тему пропустил 
// тему пропустил 































// class Tasks{
//   constructor(){
//     this.title = 
//   }
// }








// function qwerty(a, b ){

//  return `Меня зовут${a}, мне ${b}лет `
// }

// function qwertyy(a:string, b:number ){

//   return `Меня зовут${a}, мне ${b}лет `
//  }
 
//  class Tasks{
  //   constructor(title ='', isCompleted= false){
  //     this.title = 'Learn Es6'
  //     this.isCompleted= isCompleted
  //     Task.counter +=1
  //   }
  //   completed(){
  //     this.isCompleted = false
  //   }
  // }
  // Task.counter = 0
  
  
  // let tasks = new Tasks('Learn ES6',true)
  // let  tasks2 = new Tasks('Taskas 2 ', false)
  // console.log(tasks.isCompleted); 
  // console.log(tasks2.title);
  
  // tasks.completed()
  // console.log(Task.counter);



  // function Car (brand, color ){


  //   this.brand = brand,
  //   this.color = color
  // }
  // Car.prototype.start = function(){
  //   console.log(`${this.brand} - start`);
  // }
  // const tesla = new Car('tesla', 'silver')
  // console.log(tesla);
  
  



export default Test_Test;
