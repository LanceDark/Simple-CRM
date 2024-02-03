import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseServiceService {
  constructor(private fs: Firestore) {}
  getData(item: string) {
    let notesCollection = collection(this.fs, item);
    return collectionData(notesCollection, { idField: 'id' });
  }

  addUser(desc: string) {
    let data = { description: desc };
    let notesCollection = collection(this.fs, 'users');
    return addDoc(notesCollection, data);
  }

  deleteUser(id: string) {
    let docRef = doc(this.fs, 'users/' + id);
    return deleteDoc(docRef);
  }
}
