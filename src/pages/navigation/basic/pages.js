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
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { RestapiServiceProvider } from '../../../providers/restapi-service/restapi-service';
var XNavigationDetailsPage = /** @class */ (function () {
    function XNavigationDetailsPage(params) {
        this.items = [];
        this.items = [
            {
                'title': 'Angular',
                'icon': 'angular',
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'color': '#E63135'
            },
            {
                'title': 'CSS3',
                'icon': 'css3',
                'description': 'The latest version of cascading stylesheets - the styling language of the web!',
                'color': '#0CA9EA'
            },
            {
                'title': 'HTML5',
                'icon': 'html5',
                'description': 'The latest version of the web\'s markup language.',
                'color': '#F46529'
            },
            {
                'title': 'JavaScript',
                'icon': 'javascript',
                'description': 'One of the most popular programming languages on the Web!',
                'color': '#FFD439'
            },
            {
                'title': 'Sass',
                'icon': 'sass',
                'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
                'color': '#CE6296'
            },
            {
                'title': 'NodeJS',
                'icon': 'nodejs',
                'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
                'color': '#78BD43'
            },
            {
                'title': 'Python',
                'icon': 'python',
                'description': 'A clear and powerful object-oriented programming language!',
                'color': '#3575AC'
            },
            {
                'title': 'Markdown',
                'icon': 'markdown',
                'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
                'color': '#412159'
            },
            {
                'title': 'Tux',
                'icon': 'tux',
                'description': 'The official mascot of the Linux kernel!',
                'color': '#000'
            },
        ];
        this.item = this.items[Math.floor(Math.random() * 8) + 1];
    }
    XNavigationDetailsPage = __decorate([
        Component({
            templateUrl: 'navigation-details.html',
        }),
        __metadata("design:paramtypes", [NavParams])
    ], XNavigationDetailsPage);
    return XNavigationDetailsPage;
}());
export { XNavigationDetailsPage };
var XNavigationPage = /** @class */ (function () {
    function XNavigationPage(nav, restapiService, alerCtrl, loadingCtrl) {
        this.nav = nav;
        this.restapiService = restapiService;
        this.alerCtrl = alerCtrl;
        this.loadingCtrl = loadingCtrl;
        this.pet = "puppies";
        this.filter = 'sports';
        this.limit = 3;
        this.loaddatafromserver(this.filter, this.limit);
    }
    // ionViewWillEnter() 
    // {
    //     this.loaddatafromserver(this.filter,this.limit)
    // }
    XNavigationPage.prototype.loaddatafromserver = function (category, limit) {
        var _this = this;
        this.loading = this.loadingCtrl.create({ content: 'Fetching groups...' });
        this.loading.present();
        this.restapiService.getFeeds(category, limit)
            .subscribe(function (response) {
            console.log(response.data.children);
            _this.feedsArray = response.data.children;
            _this.loading.dismiss();
        }, function (eror) {
            var alert = _this.alerCtrl.create({ title: 'New Friend!', message: 'Your friend, Obi wan Kenobi, just approved your friend request!', buttons: ['Ok'] });
            alert.present();
            _this.loading.dismiss();
        });
    };
    XNavigationPage.prototype.openNavDetailsPage = function () {
        this.nav.push(XNavigationDetailsPage, {});
    };
    XNavigationPage = __decorate([
        Component({
            templateUrl: 'navigation.html'
        }),
        __metadata("design:paramtypes", [NavController, RestapiServiceProvider, AlertController, LoadingController])
    ], XNavigationPage);
    return XNavigationPage;
}());
export { XNavigationPage };
//# sourceMappingURL=pages.js.map