import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  //properties : any ;

  constructor(private http :HttpClient) {}

    // getAllProperties():Observable<IProperty[]>{

    //   return this.http.get('data/properties.json').pipe(
    //     map(data =>{
    //       const propertiesArray :Array<IProperty> =[];
    //       for (const id in data){
    //         if(data.hasOwnProperty(id)){
    //           propertiesArray.push(data[id]);
    //         }

    //     )
    //       }
    //   }
    // }

    getAllproperties(SellRent :number):Observable<IProperty[]> {
      const propertiesArray : Array<IProperty> =[];
      const a  : Array<any> =[]
       return this.http.get('data/properties.json').pipe(
        map(data =>{

            console.log(data)
            let my_object : Array<any>=[];
            my_object = Object.entries(data)
            console.log(my_object)
            let b =  1
            for (var i = 0 ; i <my_object.length ; i++){
              if(my_object?.[i]?.[b].SellRent === SellRent){
                a.push(my_object?.[i]?.[b])
              }

            }
            for (var i = 0 ; i < a.length ; i++){
              propertiesArray.push(a[i])
            }
            return propertiesArray;
          // for ( const Id in my_object ){

          //   if(data.hasOwnProperty(Id) && data[Id].SellRent === SellRent){
          //     propertiesArray.push(data[Id]);
          //   }
          // }

        })
      )

    }
  }
