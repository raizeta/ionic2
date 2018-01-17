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
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
var XDialogModalPage = /** @class */ (function () {
    function XDialogModalPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        var characters = [
            {
                name: 'Gollum',
                quote: 'Sneaky little hobbitses!',
                image: 'assets/img/avatar-gollum.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'River Folk' },
                    { title: 'Alter Ego', note: 'Smeagol' }
                ]
            },
            {
                name: 'Frodo',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Samwise Gamgee',
                quote: 'What we need is a few good taters.',
                image: 'assets/img/avatar-samwise.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Nickname', note: 'Sam' }
                ]
            }
        ];
        this.character = characters[this.params.get('charNum')];
    }
    XDialogModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    XDialogModalPage = __decorate([
        Component({
            templateUrl: 'modal-content.html'
        }),
        __metadata("design:paramtypes", [Platform,
            NavParams,
            ViewController])
    ], XDialogModalPage);
    return XDialogModalPage;
}());
export { XDialogModalPage };
var XModalPage = /** @class */ (function () {
    function XModalPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    XModalPage.prototype.openModal = function (characterNum) {
        var modal = this.modalCtrl.create(XDialogModalPage, characterNum);
        modal.present();
    };
    XModalPage = __decorate([
        Component({
            templateUrl: 'template.html'
        }),
        __metadata("design:paramtypes", [ModalController])
    ], XModalPage);
    return XModalPage;
}());
export { XModalPage };
//# sourceMappingURL=pages.js.map