import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class FireProvider {

  constructor(public http: HttpClient, public rtdb: AngularFireDatabase)  {
    console.log('Hello FireProvider Provider');
  }

  getNoticias(){
    return this.rtdb.list('noticias')
  }
}
 