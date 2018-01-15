import { Component } from '@angular/core';
import { XNavigationPage } from '../../../pages/navigation/basic/pages';
import { XBadgesPage } from '../../../pages/badges/basic/pages';
import { ColorsPage }  from '../../../pages/toolbar/colors/pages';


@Component({
  template: `
    <ion-tabs>
      <ion-tab tabIcon="call" [root]="tab1Root" tabBadge="3" tabBadgeStyle="danger"></ion-tab>
      <ion-tab tabIcon="chatbubbles" [root]="tab2Root" tabBadge="14" tabBadgeStyle="danger"></ion-tab>
      <ion-tab tabIcon="musical-notes" [root]="tab3Root"></ion-tab>
    </ion-tabs>
`})
export class XTabBadgesPage 
{
  tab1Root: any = XNavigationPage;
  tab2Root: any = XBadgesPage;
  tab3Root: any = ColorsPage;
}
