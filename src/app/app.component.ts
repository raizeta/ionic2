import { Component, NgZone, ViewChild } from '@angular/core';
import { Config, Menu, NavController, Platform  } from 'ionic-angular';


import * as helpers from '../directives/helpers';
import { PageTwo } from '../pages/menus/basic/pages';
import { SecuredPage } from '../pages/auth/pages';
import { ActionSheetPage } from '../pages/action-sheets/basic/pages';
import { ConfirmPage } from '../pages/alerts/confirm/pages';
import { AlertPage } from '../pages/alerts/alert/pages';
import { PromptPage } from '../pages/alerts/prompt/pages';
import { CheckboxPage } from '../pages/alerts/checkbox/pages';
import { RadioPage } from '../pages/alerts/radio/pages';
import { ToastPage } from '../pages/toast/basic/pages';
import { XModalPage } from '../pages/modals/basic/pages';
import { XPopoverBasicPage } from '../pages/popovers/basic/pages';

import { XAvatarPage } from '../pages/lists/avatar/pages';
import { XDividersPage } from '../pages/lists/dividers/pages';
import { XHeadersPage } from '../pages/lists/headers/pages';
import { XIconPage } from '../pages/lists/icon/pages';
import { XInsetPage } from '../pages/lists/inset/pages';  
import { XMultilinePage } from '../pages/lists/multiline/pages'; 
import { XNoLinesPage } from '../pages/lists/no-lines/pages';
import { XSlidingPage } from '../pages/lists/sliding/pages';
import { XThumbnailPage } from '../pages/lists/thumbnail/pages';
import { XSliderPage } from '../pages/slides/basic/pages'; 
import { XSegmentasiPage } from '../pages/segments/basic/pages'; 

import { XNavigationPage } from '../pages/navigation/basic/pages';
import { XBadgesPage } from '../pages/badges/basic/pages';
import { ColorsPage as XToolbarColorsPage } from '../pages/toolbar/colors/pages';
import { XTabBadgesPage } from '../pages/tabs/badges/pages';
import { XTabBasicPage } from '../pages/tabs/basic/pages';
import { XTabIconPage } from '../pages/tabs/icon/pages';
import { XTabIconTextPage } from '../pages/tabs/icon-text/pages';
// cards
import { XAdvancedMapPage } from '../pages/cards/advanced-map/pages';
import { XAdvancedSocialPage } from '../pages/cards/advanced-social/pages';
import { XAdvancedWeatherPage } from '../pages/cards/advanced-weather/pages';
import { XBackgroundPage } from '../pages/cards/background/pages';
import { XCardBasicPage } from '../pages/cards/basic/pages';
import { XCardHeaderPage } from '../pages/cards/header/pages';
import { XCardImagePage } from '../pages/cards/image/pages';
import { XCardListPage } from '../pages/cards/list/pages';

@Component({
  templateUrl: 'app.template.html'
})
export class MyApp 
{
  isProductionMode: boolean = false;
  isLab: boolean = true;
  rootPage: any;
  nextPage: any;
  activePage: any;
  currentPlatform: string = 'ios';
  currentPageIndex: number = 1;
  // pages: Array<{title: string, component: any}>;
  shownGroup = null;

  @ViewChild('content') content: NavController;
  @ViewChild(Menu) menu: Menu;

  
    rootmenu = [
                {
                  title:'Dialog',
                  child:
                  [
                    { title: 'Toast Dialog', component: ToastPage },
                    { title: 'Alert Dialog', component: AlertPage },
                    { title: 'Confirm Dialog', component: ConfirmPage },
                    { title: 'Prompt Dialog', component: PromptPage },
                    { title: 'CheckBox Dialog', component: CheckboxPage },
                    { title: 'Radio Dialog', component: RadioPage },
                    { title: 'Action Sheet', component: ActionSheetPage },
                    { title: 'Modal Dialog', component: XModalPage },
                    { title: 'Popover Dialog', component: XPopoverBasicPage },
                  ]
                },
                {
                  title:'List',
                  child:
                  [                      
                      { title: 'List Avatar', component: XAvatarPage },
                      { title: 'List Dividers', component: XDividersPage },
                      { title: 'List Header', component: XHeadersPage },
                      { title: 'List Icon', component: XIconPage },
                      { title: 'List Inset', component: XInsetPage },
                      { title: 'List Multilines', component: XMultilinePage },
                      { title: 'List Nolines', component: XNoLinesPage },
                      { title: 'List Sliding', component: XSlidingPage },
                      { title: 'List Thumbnail', component: XThumbnailPage },
                  ]
                },
                {
                  title:'Card',
                  child:
                  [                      
                      { title: 'Card Advanced', component: XAdvancedMapPage },
                      { title: 'Card Social', component: XAdvancedSocialPage },
                      { title: 'Card Weather', component: XAdvancedWeatherPage },
                      { title: 'Card Background', component: XBackgroundPage },
                      { title: 'Card Basic', component: XCardBasicPage },
                      { title: 'Card Header', component: XCardHeaderPage },
                      { title: 'Card Image', component: XCardImagePage },
                      { title: 'Card List', component: XCardListPage }
                  ]
                },
                {
                  title:'Tab',
                  child:
                  [
                      { title: 'Segmentasi', component: XSegmentasiPage },
                      { title: 'Tab Badges', component: XTabBadgesPage },
                      { title: 'Tab Basic', component: XTabBasicPage },
                      { title: 'Tab Icon', component: XTabIconPage },
                      { title: 'Tab IconText', component: XTabIconTextPage }
                    ]
                },
                {
                  title:'Linking',
                  child:
                  [
                      { title: 'Wellcome Slider', component: XSliderPage },
                      { title: 'Navigasi', component: XNavigationPage },
                      { title: 'Deep Linking', component: XToolbarColorsPage },
                      { title: 'Badges', component: XBadgesPage },
                      { title: 'Friends', component: PageTwo }
                    ]
                },
                { title: 'Secured', component: SecuredPage }
              ];
  constructor(public platform: Platform, public config: Config, public zone: NgZone) 
  {
      this.rootPage = SecuredPage;
  }

  ngAfterContentInit() 
  {
    // if viewing the preview app in lab, hide the statusbars
    this.isLab = window.parent.location.pathname === '/ionic-lab';
    if (this.isLab) 
    {
      this.config.set('statusbarPadding', false);
    }
    else
    {
        this.config.set('statusbarPadding', false);
    }


    // production-only code
    // production is false unless viewed on the docs
    // http://ionicframework.com/docs/v2/components/
    if (this.platform.getQueryParam('production') === 'true') {
      this.isProductionMode = true;

      // Platform is ios by default
      // only change it if android or windows
      if (this.platform.is('android')) {
        this.currentPlatform = 'android';
      } else if (this.platform.is('windows')) {
        this.currentPlatform = 'windows';
      }

      if (helpers.hasScrollbar() === true) {
        setTimeout(function () {
          var body = document.getElementsByTagName('body')[0];
          body.className = body.className + ' has-scrollbar';
        }, 500);
      }

      window.parent.postMessage(this.currentPlatform, '*');
      window.addEventListener('message', (e) => {
        this.zone.run(() => {
          if (e.data) {
            var data;
            try {
              data = JSON.parse(e.data);
            } catch (e) {
              console.error(e);
            }

            if (data.hash) {
              this.nextPage = helpers.getPageFor(data.hash.replace('#', ''));
              if (data.hash !== 'menus') {
                this.menu.close()
                this.menu.enable(false);
              }
            } else {
              this.currentPageIndex = 1;
              this.nextPage = AlertPage;
            }
            setTimeout(() => {
              helpers.debounce(this.content.setRoot(this.nextPage), 60, false);
            });
          }
        });
      });
    }
  }

  previousSection() {
    let previousPage = this.currentPageIndex - 1;
    if (previousPage < 0) {
      previousPage = 0;
    }
    let pageName = Object.keys(helpers.getPages())[previousPage];
    console.log(Object.keys(helpers.getPages()));
    this.content.setRoot(helpers.getPageFor(pageName), {}, { animate: false });
    this.currentPageIndex = previousPage;
  }

  nextSection() {
    let nextPage = this.currentPageIndex + 1;
    const pageList = Object.keys(helpers.getPages());
    if (nextPage >= pageList.length) {
      nextPage = pageList.length - 1;
    }
    let pageName = pageList[nextPage];
    this.content.setRoot(helpers.getPageFor(pageName), {}, { animate: false });
    this.currentPageIndex = nextPage;
  }

  openPage(page) 
  {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    helpers.debounce(this.content.setRoot(page.component), 60, false);
    this.activePage = page;
  }
  toggleGroup(group) 
  {
    if (this.isGroupShown(group)) 
    {
        this.shownGroup = null;
    } 
    else 
    {
        this.shownGroup = group;
    }
  };
  isGroupShown(group) 
  {
      return this.shownGroup === group;
  };

  public checkActivePage(page): boolean{
    return page === this.activePage;
  }
}
