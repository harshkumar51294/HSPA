import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  addUser(user:User){

    let users : Array<any>=[];
    if (localStorage.getItem('Users')){
        users =  JSON.parse(localStorage.getItem('Users') || '{}')
         users = [user , ...users]
       // var result = this.extractValue(users[0], 'value');
        //users.push(user)
      }
      else{
        users = [user];

      }

  //localStorage.setItem('Users',JSON.stringify('users'))
  //var result = this.extractValue(users[0], 'value');
       localStorage.setItem('Users', JSON.stringify (users,this.getCircularReplacer()));
    }

     extractValue(arr: any[], prop: string) {

      // extract value from property
      let extractedValue = arr.map(item => item[prop]);

      return extractedValue;

  }
   getCircularReplacer = () => {
    const seen = new WeakSet();
    return (_key: any, value: object | null) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
}
