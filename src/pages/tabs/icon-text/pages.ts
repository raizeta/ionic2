import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';

import { XNavigationPage } from '../../../pages/navigation/basic/pages';
import { XBadgesPage } from '../../../pages/badges/basic/pages';
import { ColorsPage }  from '../../../pages/toolbar/colors/pages';

@Component({
  template: `
    <ion-tabs class="tabs-icon-text" [color]="isAndroid ? 'royal' : 'primary'">
      <ion-tab tabIcon="water" tabTitle="Water" [root]="tab1Root"></ion-tab>
      <ion-tab tabIcon="leaf" tabTitle="Life" [root]="tab2Root"></ion-tab>
      <ion-tab tabIcon="flame" tabTitle="Fire" [root]="tab3Root"></ion-tab>
    </ion-tabs>
`})
export class XTabIconTextPage 
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
