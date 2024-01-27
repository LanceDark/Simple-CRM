import { Injectable, inject } from '@angular/core';
import { User } from '../models/user.class';
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  where,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  firestore: Firestore = inject(Firestore);
  allDataUsers: any[] = [];
  sortOrder: any[] = ['firstName', 'email', 'phone', 'city'];
  sortDirection: string = 'asc';
  isLoggedIn = '';
  constructor() {}

  save(user: User) {
    return addDoc(collection(this.firestore, 'users'), user.toJSON());
  }

  saveAccount(acc: User) {
    return addDoc(collection(this.firestore, 'accounts'), acc.toJSON());
  }

  async saveOrder() {
    await setDoc(doc(this.firestore, 'sorting', 'sortDirection'), {
      direction: this.sortDirection,
    });

    await setDoc(doc(this.firestore, 'sorting', 'sortOrder'), {
      order: this.sortOrder,
    });
  }

  async update(id: string, user: User) {
    await setDoc(doc(this.getQueryRef('users'), id), user.toJSON());
    const index = this.allDataUsers.findIndex((obj) => obj.id === id);
    if (index !== -1) this.allDataUsers[index] = user;
  }

  async delete(id: string) {
    await deleteDoc(doc(this.firestore, 'users', id));
  }

  load() {
    onSnapshot(this.getQueryRef('users'), (querySnapshot) => {
      this.allDataUsers = [];
      querySnapshot.forEach((doc) => {
        this.allDataUsers.push({ id: doc.id, ...doc.data() });
      });
    });
  }

  getQueryRef(ref: string) {
    return collection(this.firestore, ref);
  }

  async getUser(userId: string) {
    const userDoc = doc(this.getQueryRef('users'), userId);
    const userSnap = await getDoc(userDoc);
    return userSnap.data();
  }

}
