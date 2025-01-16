import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"angular-proyect-a99c9","appId":"1:49556754999:web:1315064af6e52b21bb25b2","databaseURL":"https://angular-proyect-a99c9-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"angular-proyect-a99c9.firebasestorage.app","apiKey":"AIzaSyA0fs6Vr02u5UwT5J0ov6Gj8sdjvx905nU","authDomain":"angular-proyect-a99c9.firebaseapp.com","messagingSenderId":"49556754999","measurementId":"G-W7YYEKNQK7"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
