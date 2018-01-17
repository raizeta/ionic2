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
var XTabBasicPage = /** @class */ (function () {
    function XTabBasicPage() {
        this.tab1Root = XNavigationPage;
        this.tab2Root = XBadgesPage;
        this.tab3Root = ColorsPage;
    }
    XTabBasicPage = __decorate([
        Component({
            template: "\n    <ion-tabs class=\"tabs-basic\">\n      <ion-tab tabTitle=\"Music\" [root]=\"tab1Root\"></ion-tab>\n      <ion-tab tabTitle=\"Movies\" [root]=\"tab2Root\"></ion-tab>\n      <ion-tab tabTitle=\"Games\" [root]=\"tab3Root\"></ion-tab>\n    </ion-tabs>\n"
        })
    ], XTabBasicPage);
    return XTabBasicPage;
}());
export { XTabBasicPage };
//# sourceMappingURL=pages.js.map