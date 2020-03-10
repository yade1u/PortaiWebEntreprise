import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AuthentificationService } from './authentification.service';
import { Actualite } from '../interfaces/Actualite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecupeNewsService {

  private itemsCollection: AngularFirestoreCollection<Actualite>;
  actualites: Actualite[];

  constructor(private afs: AngularFirestore, private auth: AuthentificationService) {
    this.itemsCollection = afs.collection<Actualite>('actualites');
  }

  public getAllActualites(): Observable<Actualite[]> {
    return this.itemsCollection.valueChanges();
  }

  public ajouterActualite(actualite: Actualite) {
    const id = this.afs.createId();
    this.itemsCollection.doc(id).set(actualite);
  }

}
