import { Injectable } from '@angular/core';
import { child, Database, DataSnapshot, get, objectVal, push, ref, set } from '@angular/fire/database';
import { Person } from '../models/person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  
  private COLLECTION_NAME="persons"

  constructor(private database: Database) { }

  /**
    * Crea una nueva persona
    * @param person reserva a guardar o editar
    */
  savePerson(person:Person){
    //Creamos la referencia de la persona que deseamos guardar en firebase database
    let personRef = ref(this.database,`/${this.COLLECTION_NAME}/${person.uid}`);

    //Crear nueva reserva
    return set(personRef,person) as Promise<void>
  }
  
  getUserByUid(uid:string):Observable<Person>{
  
      const usersRef = ref(this.database,this.COLLECTION_NAME);
      const userRef = child(usersRef,uid);
  
      return objectVal(userRef) as Observable<Person>
  }
  
}
