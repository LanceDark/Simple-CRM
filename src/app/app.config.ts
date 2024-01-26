import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimations(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-679ea","appId":"1:1007445618409:web:2fecb8aac3895696ce4a78","storageBucket":"simple-crm-679ea.appspot.com","apiKey":"AIzaSyCTEGRdV2N4sQVofiAnAzLnqTiUmfXroM4","authDomain":"simple-crm-679ea.firebaseapp.com","messagingSenderId":"1007445618409","measurementId":"G-8MPMJP7W68"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideStorage(() => getStorage()))]
};
