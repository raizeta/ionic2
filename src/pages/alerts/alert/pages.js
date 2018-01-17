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
import { AlertController } from 'ionic-angular';
var XDialogAlertPage = /** @class */ (function () {
    function XDialogAlertPage(alerCtrl) {
        this.alerCtrl = alerCtrl;
    }
    XDialogAlertPage.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'New Friend!',
            message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
            buttons: ['Ok']
        });
        alert.present();
    };
    XDialogAlertPage = __decorate([
        Component({
            templateUrl: 'template.html'
        }),
        __metadata("design:paramtypes", [AlertController])
    ], XDialogAlertPage);
    return XDialogAlertPage;
}());
export { XDialogAlertPage };
//# sourceMappingURL=pages.js.map