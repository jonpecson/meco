import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Appointments', component: Page1, icon: 'calendar'},
      { title: 'Events', component: Page2, icon: 'notifications'},
      { title: 'News', component: Page2, icon: 'list-box'},
      { title: 'Profile Settings', component: Page2, icon: 'person'},
      { title: 'About', component: Page2, icon: 'information-circle'},
      { title: 'Feedback', component: Page2, icon: 'bug'},
      { title: 'Settings', component: Page2, icon: 'settings'},

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
