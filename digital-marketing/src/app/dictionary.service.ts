import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() { }

   getLanguages(){
    return [                {'id':1 , 'lang': 'PT'}, 
                            {'id':2 , 'lang': 'ENG'},
                            {'id':3 , 'lang': 'FR'} ];
   }

    getDictionary(){
    return [                {'id':1 ,'PT' : 'Pagina Inicial'}, 
                            {'id':2 ,'PT':'Contactos:'},
                            {'id':3 ,'PT' : 'Sobre Nós'},
                            {'id':4 ,'PT' : 'Procura'} ];
  }
}
