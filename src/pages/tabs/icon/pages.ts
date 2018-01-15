import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { XNavigationPage } from '../../../pages/navigation/basic/pages';
import { XBadgesPage } from '../../../pages/badges/basic/pages';
import { ColorsPage }  from '../../../pages/toolbar/colors/pages';

@Component({
  template: `
  <ion-tabs class="tabs-icon" [color]="isAndroid ? 'danger' : 'primary'">
    <ion-tab tabIcon="contact" [root]="tab1Root"></ion-tab>
    <ion-tab tabIcon="compass" [root]="tab2Root"></ion-tab>
    <ion-tab tabIcon="analytics" [root]="tab3Root"></ion-tab>
  </ion-tabs>
`})
export class XTabIconPage 
{
    isAndroid: boolean = false;
    constructor(platform: Platform) 
    {
      this.isAndroid = platform.is('android');
    }
    tab1Root: any = XNavigationPage;
    tab2Root: any = XBadgesPage;
    tab3Root: any = ColorsPage;

    
}
