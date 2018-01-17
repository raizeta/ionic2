var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { XNavigationPage } from '../../../pages/navigation/basic/pages';
import { XBadgesPage } from '../../../pages/badges/basic/pages';
import { ColorsPage } from '../../../pages/toolbar/colors/pages';
var XTabIconPage = /** @class */ (function () {
    function XTabIconPage(platform) {
        this.isAndroid = false;
        this.tab1Root = XNavigationPage;
        this.tab2Root = XBadgesPage;
        this.tab3Root = ColorsPage;
        this.isAndroid = platform.is('android');
    }
    XTabIconPage = __decorate([
        Component({
            template: "\n  <ion-tabs class=\"tabs-icon\" [color]=\"isAndroid ? 'danger' : 'primary'\">\n    <ion-tab tabIcon=\"contact\" [root]=\"tab1Root\"></ion-tab>\n    <ion-tab tabIcon=\"compass\" [root]=\"tab2Root\"></ion-tab>\n    <ion-tab tabIcon=\"analytics\" [root]=\"tab3Root\"></ion-tab>\n  </ion-tabs>\n"
        }),
        __metadata("design:paramtypes", [Platform])
    ], XTabIconPage);
    return XTabIconPage;
}());
export { XTabIconPage };
//# sourceMappingURL=pages.js.map