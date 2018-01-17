var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { XNavigationPage } from '../../../pages/navigation/basic/pages';
import { XBadgesPage } from '../../../pages/badges/basic/pages';
import { ColorsPage } from '../../../pages/toolbar/colors/pages';
var XTabBadgesPage = /** @class */ (function () {
    function XTabBadgesPage() {
        this.tab1Root = XNavigationPage;
        this.tab2Root = XBadgesPage;
        this.tab3Root = ColorsPage;
    }
    XTabBadgesPage = __decorate([
        Component({
            template: "\n    <ion-tabs>\n      <ion-tab tabIcon=\"call\" [root]=\"tab1Root\" tabBadge=\"3\" tabBadgeStyle=\"danger\"></ion-tab>\n      <ion-tab tabIcon=\"chatbubbles\" [root]=\"tab2Root\" tabBadge=\"14\" tabBadgeStyle=\"danger\"></ion-tab>\n      <ion-tab tabIcon=\"musical-notes\" [root]=\"tab3Root\"></ion-tab>\n    </ion-tabs>\n"
        })
    ], XTabBadgesPage);
    return XTabBadgesPage;
}());
export { XTabBadgesPage };
//# sourceMappingURL=pages.js.map