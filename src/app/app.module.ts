import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AngularFireModule } from 'angularfire2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FireProvider } from '../providers/fire/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const config = {
  apiKey: "AIzaSyBrb6gLWfsQL44TnQOh8WPJKEnxxHUKrZk",
  authDomain: "direita-app.firebaseapp.com",
  databaseURL: "https://direita-app.firebaseio.com",
  projectId: "direita-app",
  storageBucket: "direita-app.appspot.com",
  messagingSenderId: "346053489617"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FireProvider
  ]
})
export class AppModule {}
