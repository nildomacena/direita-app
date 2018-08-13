import { Injectable } from '@angular/core';
import { AngularFireDatabase, DatabaseSnapshot, AngularFireAction } from 'angularfire2/database';
import 'rxjs/add/operator/first';


@Injectable()
export class FireProvider {

  constructor(public db: AngularFireDatabase)  {
    console.log('Hello FireProvider Provider');
  }

  getNoticias(numeroNoticias: number):Promise<any>{
    return this.db.list('noticias', ref => ref.orderByChild('timestampInvertido').limitToFirst(numeroNoticias)).snapshotChanges().first().toPromise()
      .then(snap => {
        return Promise.resolve(this.snapshotParaValue(snap));
      })
  }

  snapshotParaValue(lista: AngularFireAction<DatabaseSnapshot>[]){
    let novaLista = [];
    lista.map(objeto => {
      let novoObjeto = {};
      novoObjeto['key'] = objeto.key;
      let val = objeto.payload.val();
      Object.keys(val).map(key => {
        novoObjeto[key] = val[key]
      });
      novaLista.push(novoObjeto);
    });
    return novaLista;
  }
}
 