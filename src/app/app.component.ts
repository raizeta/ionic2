import { Component, NgZone, ViewChild } from '@angular/core';
import { Config, Menu, NavController, Platform  } from 'ionic-angular';


import * as helpers from '../directives/helpers';
import { PageTwo } from '../pages/menus/basic/pages';
import { SecuredPage } from '../pages/auth/pages';

// inputs
import { BasicPage as XInputBasicPage } from '../pages/inputs/basic/pages';
import { FloatingPage as XInputFloatingPage } from '../pages/inputs/floating/pages';
import { FixedInlinePage as XInputFixedInlinePage } from '../pages/inputs/fixed-inline/pages';
import { InlinePage as XInputInlinePage } from '../pages/inputs/inline/pages';
import { InsetPage as XInputInsetPage } from '../pages/inputs/inset/pages';
import { PlaceholderPage as XInputPlaceholderPage } from '../pages/inputs/placeholder/pages';
import { StackedPage as XInputStackedPage } from '../pages/inputs/stacked/pages';

// buttons
import { XButtonBasicPage } from '../pages/buttons/basic/pages';
import { XButtonBlockPage } from '../pages/buttons/block/pages';
import { XButtonClearPage } from '../pages/buttons/clear/pages';
import { XButtonComponentsPage } from '../pages/buttons/components/pages';
import { XButtonFullPage } from '../pages/buttons/full/pages';
import { XButtonIconsPage } from '../pages/buttons/icons/pages';
import { XButtonOutlinePage } from '../pages/buttons/outline/pages';
import { XButtonRoundPage } from '../pages/buttons/round/pages';
import { XButtonSizesPage } from '../pages/buttons/sizes/pages';
import { XFabBasicPage } from '../pages/fabs/basic/pages';

// Dialog
import { XDialogActionSheetPage } from '../pages/action-sheets/basic/pages';
import { XDialogConfirmPage } from '../pages/alerts/confirm/pages';
import { XDialogAlertPage } from '../pages/alerts/alert/pages';
import { XDialogPromptPage } from '../pages/alerts/prompt/pages';
import { XDialogCheckboxPage } from '../pages/alerts/checkbox/pages';
import { XDialogRadioPage } from '../pages/alerts/radio/pages';
import { XDialogToastPage } from '../pages/toast/basic/pages';
import { XDialogLoading } from '../pages/loading/basic/pages';
import { XModalPage } from '../pages/modals/basic/pages';
import { XPopoverPage } from '../pages/popovers/basic/pages';

//List
import { XAvatarPage } from '../pages/lists/avatar/pages';
import { XDividersPage } from '../pages/lists/dividers/pages';
import { XHeadersPage } from '../pages/lists/headers/pages';
import { XIconPage } from '../pages/lists/icon/pages';
import { XInsetPage } from '../pages/lists/inset/pages';  
import { XMultilinePage } from '../pages/lists/multiline/pages'; 
import { XNoLinesPage } from '../pages/lists/no-lines/pages';
import { XSlidingPage } from '../pages/lists/sliding/pages';
import { XThumbnailPage } from '../pages/lists/thumbnail/pages';

// cards
import { XAdvancedMapPage } from '../pages/cards/advanced-map/pages';
import { XAdvancedSocialPage } from '../pages/cards/advanced-social/pages';
import { XAdvancedWeatherPage } from '../pages/cards/advanced-weather/pages';
import { XBackgroundPage } from '../pages/cards/background/pages';
import { XCardBasicPage } from '../pages/cards/basic/pages';
import { XCardHeaderPage } from '../pages/cards/header/pages';
import { XCardImagePage } from '../pages/cards/image/pages';
import { XCardListPage } from '../pages/cards/list/pages';
import { XBadgesPage } from '../pages/badges/basic/pages';

//Modern Input
import { BasicPage as CheckboxBasicPage } from '../pages/checkboxes/basic/pages';
import { BasicPage as RadioBasicPage } from '../pages/radios/basic/pages';
import { BasicPage as SelectBasicPage } from '../pages/selects/basic/pages';
import { BasicPage as RangeBasicPage } from '../pages/ranges/basic/pages';
import { BasicPage as ToggleBasicPage } from '../pages/toggles/basic/pages';
import { BasicPage as DatetimeBasicPage } from '../pages/datetime/basic/pages';

//Tab
import { XTabBadgesPage } from '../pages/tabs/badges/pages';
import { XTabBasicPage } from '../pages/tabs/basic/pages';
import { XTabIconPage } from '../pages/tabs/icon/pages';
import { XTabIconTextPage } from '../pages/tabs/icon-text/pages';
import { XSegmentasiPage } from '../pages/segments/basic/pages'; 
import { XNavigationPage } from '../pages/navigation/basic/pages';

// toolbars
import { BasicPage as ToolbarBasicPage } from '../pages/toolbar/basic/pages';
import { ButtonsPage as ToolbarButtonsPage } from '../pages/toolbar/buttons/pages';
import { SearchbarPage as ToolbarSearchbarPage } from '../pages/toolbar/searchbar/pages';
import { SegmentPage as ToolbarSegmentPage } from '../pages/toolbar/segment/pages';
import { ColorsPage as ToolbarColorsPage } from '../pages/toolbar/colors/pages';

//Others
import { BasicPage as GestureBasicPage } from '../pages/gestures/basic/pages';
import { BasicPage as GridBasicPage } from '../pages/grid/basic/pages';
import { BasicPage as IconBasicPage } from '../pages/icons/basic/pages';
import { BasicPage as SearchbarBasicPage } from '../pages/searchbars/basic/pages';
import { XSliderPage } from '../pages/slides/basic/pages';


@Component({
  templateUrl: 'app.template.html'
})
export class MyApp 
{
  isProductionMode: boolean = true;
  isLab: boolean = false;
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
                  title:'Input',
                  child:
                  [
                    {title:'XInputBasicPage',component:XInputBasicPage},
                    {title:'XInputFloatingPage',component:XInputFloatingPage},
                    {title:'XInputFixedInlinePage',component:XInputFixedInlinePage},
                    {title:'XInputInlinePage',component:XInputInlinePage},
                    {title:'XInputInsetPage',component:XInputInsetPage},
                    {title:'XInputPlaceholderPage',component:XInputPlaceholderPage},
                    {title:'XInputStackedPage',component:XInputStackedPage}
                  ]
                },
                {
                  title:'Button',
                  child:
                  [
                    {title:'XButtonBasicPage',component:XButtonBasicPage},
                    {title:'XButtonBlockPage',component:XButtonBlockPage},
                    {title:'XButtonClearPage',component:XButtonClearPage},
                    {title:'XButtonComponentsPage',component:XButtonComponentsPage},
                    {title:'XButtonFullPage',component:XButtonFullPage},
                    {title:'XButtonIconsPage',component:XButtonIconsPage},
                    {title:'XButtonOutlinePage',component:XButtonOutlinePage},
                    {title:'XButtonRoundPage',component:XButtonRoundPage},
                    {title:'XButtonSizesPage',component:XButtonSizesPage},
                    {title:'XFabBasicPage',component:XFabBasicPage}
                  ]
                },
                {
                  title:'Dialog',
                  child:
                  [
                    { title: 'Action Sheet', component: XDialogActionSheetPage },
                    { title: 'Confirm Dialog', component: XDialogConfirmPage },
                    { title: 'Alert Dialog', component: XDialogAlertPage },
                    { title: 'Prompt Dialog', component: XDialogPromptPage },
                    { title: 'CheckBox Dialog', component: XDialogCheckboxPage },
                    { title: 'Radio Dialog', component: XDialogRadioPage },
                    { title: 'Toast Dialog', component: XDialogToastPage },
                    { title: 'Loading Dialog', component: XDialogLoading },
                    { title: 'Modal Dialog', component: XModalPage },
                    { title: 'Popover Dialog', component: XPopoverPage }
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
                      { title: 'Card List', component: XCardListPage },
                      { title: 'Card Badges', component: XBadgesPage }
                  ]
                },
                {
                  title:'Modern Input',
                  child:
                  [                      
                      { title: 'Checkbox', component: CheckboxBasicPage },
                      { title: 'Radio', component: RadioBasicPage },
                      { title: 'Select', component: SelectBasicPage },
                      { title: 'Range', component: RangeBasicPage },
                      { title: 'Toggle', component: ToggleBasicPage },
                      { title: 'Datetime', component: DatetimeBasicPage }
                  ]
                },
                {
                  title:'Tab',
                  child:
                  [
                      
                      { title: 'Tab Badges', component: XTabBadgesPage },
                      { title: 'Tab Basic', component: XTabBasicPage },
                      { title: 'Tab Icon', component: XTabIconPage },
                      { title: 'Tab IconText', component: XTabIconTextPage },
                      { title: 'Segmentasi', component: XSegmentasiPage },
                      { title: 'Navigasi', component: XNavigationPage },
                    ]
                },
                {
                  title:'Toolbar',
                  child:
                  [
                      
                      { title: 'Toolbar Basic', component: ToolbarBasicPage },
                      { title: 'Toolbar Button', component: ToolbarButtonsPage },
                      { title: 'Toolbar Search', component: ToolbarSearchbarPage },
                      { title: 'Toolbar Segment', component: ToolbarSegmentPage },
                      { title: 'Toolbar Colors', component: ToolbarColorsPage }
                    ]
                },
                {
                  title:'Others',
                  child:
                  [
                      { title: 'Gesture', component: GestureBasicPage },
                      { title: 'Grid', component: GridBasicPage },
                      { title: 'Icon', component: IconBasicPage },
                      { title: 'Search', component: SearchbarBasicPage },
                      { title: 'Wellcome Slider', component: XSliderPage },
                    ]
                },

                { title: 'Secured', component: SecuredPage }
              ];
  constructor(public platform: Platform, public config: Config, public zone: NgZone) 
  {
      this.rootPage = XSliderPage;
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
    if (this.platform.getQueryParam('production') === 'true') 
    {
      this.isProductionMode = true;

      // Platform is ios by default
      // only change it if android or windows
      if (this.platform.is('android')) 
      {
        this.currentPlatform = 'android';
      } 
      else if (this.platform.is('windows')) 
      {
        this.currentPlatform = 'windows';
      }

      if (helpers.hasScrollbar() === true) 
      {
        setTimeout(function () 
        {
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
              this.nextPage = XDialogAlertPage;
            }
            setTimeout(() => {
              helpers.debounce(this.content.setRoot(this.nextPage), 60, false);
            });
          }
        });
      });
    }
  }

  previousSection() 
  {
    let previousPage = this.currentPageIndex - 1;
    if (previousPage < 0) 
    {
      previousPage = 0;
    }
    let pageName = Object.keys(helpers.getPages())[previousPage];
    console.log(Object.keys(helpers.getPages()));
    this.content.setRoot(helpers.getPageFor(pageName), {}, { animate: false });
    this.currentPageIndex = previousPage;
  }

  nextSection() 
  {
    let nextPage = this.currentPageIndex + 1;
    const pageList = Object.keys(helpers.getPages());
    if (nextPage >= pageList.length) 
    {
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

  public checkActivePage(page): boolean
  {
    return page === this.activePage;
  }
}
