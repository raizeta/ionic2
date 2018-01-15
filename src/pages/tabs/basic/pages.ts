import { Component } from '@angular/core';

import { XNavigationPage } from '../../../pages/navigation/basic/pages';
import { XBadgesPage } from '../../../pages/badges/basic/pages';
import { ColorsPage }  from '../../../pages/toolbar/colors/pages';

@Component({
  template: `
    <ion-tabs class="tabs-basic">
      <ion-tab tabTitle="Music" [root]="tab1Root"></ion-tab>
      <ion-tab tabTitle="Movies" [root]="tab2Root"></ion-tab>
      <ion-tab tabTitle="Games" [root]="tab3Root"></ion-tab>
    </ion-tabs>
`})
export class XTabBasicPage 
{
    tab1Root: any = XNavigationPage;
    tab2Root: any = XBadgesPage;
    tab3Root: any = ColorsPage;
}
