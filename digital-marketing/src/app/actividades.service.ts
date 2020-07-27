import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {


  constructor() { }
  getActividades(){
    return [                {'id':1 ,'name' : 'Trail','picture':'../assets/trail.jpg'}, 
                            {'id':2 ,'name':'Free diving','picture':'../assets/freediving.jpg'},
                            {'id':3 ,'name' : 'Hikking','picture':'../assets/climing.jpg'} ];
  }
}
