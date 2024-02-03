import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
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

  getCollection(item: string, targetArray: any[]) {
    const collectionReference = collection(this.fs, item);
    onSnapshot(collectionReference, (querySnapshot) => {
      targetArray.length = 0;
      querySnapshot.forEach((doc) => {
        let docData = doc.data();
        docData['id'] = doc.id;
        targetArray.push(docData);
      });
      console.log(targetArray); // Hier wird das Array mit den aktualisierten Daten ausgegeben
    });
  }

  async editUserData(userId: string, userData: any) {
    try {
      const userDocRef = doc(this.fs, 'users', userId);
      await updateDoc(userDocRef, userData);
      console.log('Benutzerdaten erfolgreich aktualisiert');
    } catch (error) {
      console.error('Fehler beim Aktualisieren der Benutzerdaten', error);
      throw error;
    }
  }
}
