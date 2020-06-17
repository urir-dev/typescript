// Import stylesheets
import './style.css';

interface IUserBus{

  money: number;

  ravKav: any;

}


class BaseObj {

  id:number;
  name: string;

}


class Address{

  city: string;

  street: string;

  house: string;

}

class User extends BaseObj implements IUserBus {

  age: number;

  address: Address;

  money: number;

  ravKav: any;

  private _email: string;

  constructor(

    name: string, age: number){

      super()

    }

public get email(): string{

  return this._email;

}

public set email(value: string){
  
  if (value.includes('@')){

    this._email = value;
  }

}
   
public get fullname() {

  return this.name + ' ' + this.age;

}

isAllowedDrinking(){

  return this.age > 18;


}













}


class Car extends BaseObj {

  engine: any;

}

class Robot extends BaseObj {

  money: number;
  
  ravKav:any;

}


let user= new User();
let user2 = new User;
const car = new Car;
let robocop  = new Robot;
user.name = 'uri';
user2.name = 'izik';
car.name = 'Audi'
console.log(user);
console.log(user2);
console.log(car);

const bus: IUserBus[] = [];

bus.push(user);
bus.push(robocop);








