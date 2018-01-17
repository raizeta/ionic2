var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { PopoverController, NavParams } from 'ionic-angular';
var XDialogPopoverPage = /** @class */ (function () {
    function XDialogPopoverPage(navParams) {
        this.navParams = navParams;
        this.colors = {
            'white': {
                'bg': 'rgb(255, 255, 255)',
                'fg': 'rgb(0, 0, 0)'
            },
            'tan': {
                'bg': 'rgb(249, 241, 228)',
                'fg': 'rgb(0, 0, 0)'
            },
            'grey': {
                'bg': 'rgb(76, 75, 80)',
                'fg': 'rgb(255, 255, 255)'
            },
            'black': {
                'bg': 'rgb(0, 0, 0)',
                'fg': 'rgb(255, 255, 255)'
            },
        };
    }
    XDialogPopoverPage.prototype.ngOnInit = function () {
        if (this.navParams.data) {
            this.contentEle = this.navParams.data.contentEle;
            console.log(this.contentEle);
            this.textEle = this.navParams.data.textEle;
            console.log(this.textEle);
            this.background = this.getColorName(this.contentEle.style.backgroundColor);
            if (this.textEle.style.fontFamily) {
                this.fontFamily = this.textEle.style.fontFamily.replace(/"/g, "");
            }
            else {
                this.fontFamily = "Arial";
            }
        }
    };
    XDialogPopoverPage.prototype.getColorName = function (background) {
        var colorName = 'white';
        if (!background)
            return 'white';
        for (var key in this.colors) {
            if (this.colors[key].bg == background) {
                colorName = key;
            }
        }
        return colorName;
    };
    XDialogPopoverPage.prototype.changeBackground = function (color) {
        this.background = color;
        this.contentEle.style.backgroundColor = this.colors[color].bg;
        this.textEle.style.color = this.colors[color].fg;
    };
    XDialogPopoverPage.prototype.changeFontSize = function (direction) {
        this.textEle.style.fontSize = direction;
    };
    XDialogPopoverPage.prototype.changeFontFamily = function () {
        if (this.fontFamily) {
            this.textEle.style.fontFamily = this.fontFamily;
        }
    };
    XDialogPopoverPage = __decorate([
        Component({
            templateUrl: 'popovertemplate.html'
        }),
        __metadata("design:paramtypes", [NavParams])
    ], XDialogPopoverPage);
    return XDialogPopoverPage;
}());
export { XDialogPopoverPage };
var XPopoverPage = /** @class */ (function () {
    function XPopoverPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    XPopoverPage.prototype.presentPopover = function (ev) {
        var popover = this.popoverCtrl.create(XDialogPopoverPage, { contentEle: this.content.nativeElement, textEle: this.text.nativeElement });
        popover.present({
            ev: ev
        });
    };
    __decorate([
        ViewChild('popoverContent', { read: ElementRef }),
        __metadata("design:type", ElementRef)
    ], XPopoverPage.prototype, "content", void 0);
    __decorate([
        ViewChild('popoverText', { read: ElementRef }),
        __metadata("design:type", ElementRef)
    ], XPopoverPage.prototype, "text", void 0);
    XPopoverPage = __decorate([
        Component({
            templateUrl: 'template.html'
        }),
        __metadata("design:paramtypes", [PopoverController])
    ], XPopoverPage);
    return XPopoverPage;
}());
export { XPopoverPage };
//# sourceMappingURL=pages.js.map