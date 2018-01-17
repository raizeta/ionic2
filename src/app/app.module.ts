import { NgModule,ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera,CameraOptions} from '@ionic-native/camera';
import { AppVersion } from '@ionic-native/app-version';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
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
import { XModalPage,XDialogModalPage} from '../pages/modals/basic/pages';
import { XPopoverPage,XDialogPopoverPage } from '../pages/popovers/basic/pages';

// lists
import { XAvatarPage } from '../pages/lists/avatar/pages';
import { BasicPage as ListBasicPage } from '../pages/lists/basic/pages';
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

// Tab
import { XTabBadgesPage } from '../pages/tabs/badges/pages';
import { XTabBasicPage } from '../pages/tabs/basic/pages';
import { XTabIconPage } from '../pages/tabs/icon/pages';
import { XTabIconTextPage } from '../pages/tabs/icon-text/pages';
import { XSegmentasiPage } from '../pages/segments/basic/pages';
import { XNavigationPage, XNavigationDetailsPage } from '../pages/navigation/basic/pages';

// toolbars
import { BasicPage as ToolbarBasicPage } from '../pages/toolbar/basic/pages';
import { ButtonsPage as ToolbarButtonsPage } from '../pages/toolbar/buttons/pages';
import { SearchbarPage as ToolbarSearchbarPage } from '../pages/toolbar/searchbar/pages';
import { SegmentPage as ToolbarSegmentPage } from '../pages/toolbar/segment/pages';
import { ColorsPage as ToolbarColorsPage } from '../pages/toolbar/colors/pages';
import { Page2 as ToolbarColorsPage2 } from '../pages/toolbar/colors/pages';
import { Page3 as ToolbarColorsPage3 } from '../pages/toolbar/colors/pages';
import { Page4 as ToolbarColorsPage4 } from '../pages/toolbar/colors/pages';


import { BasicPage as GestureBasicPage } from '../pages/gestures/basic/pages';
import { BasicPage as GridBasicPage } from '../pages/grid/basic/pages';
import { BasicPage as IconBasicPage } from '../pages/icons/basic/pages';
import { BasicPage as SearchbarBasicPage } from '../pages/searchbars/basic/pages';
import { XSliderPage } from '../pages/slides/basic/pages';

import { BasicPage as MenuBasicPage } from '../pages/menus/basic/pages';
import { PageOne as MenuPageOne } from '../pages/menus/basic/pages';
import { PageTwo as MenuPageTwo } from '../pages/menus/basic/pages';
import { PageThree as MenuPageThree } from '../pages/menus/basic/pages';


import { DisplayRoutePipe } from '../pipes/display-route';
import { RestapiServiceProvider } from '../providers/restapi-service/restapi-service';


@NgModule({
  declarations: 
  [
    MyApp,
    SecuredPage,

    XInputBasicPage,
    XInputFloatingPage,
    XInputFixedInlinePage,
    XInputInlinePage,
    XInputInsetPage,
    XInputPlaceholderPage,
    XInputStackedPage,

    XButtonBasicPage,
    XButtonBlockPage,
    XButtonClearPage,
    XButtonComponentsPage,
    XButtonFullPage,
    XButtonIconsPage,
    XButtonOutlinePage,
    XButtonRoundPage,
    XButtonSizesPage,
    XFabBasicPage,

    XDialogActionSheetPage,
    XDialogConfirmPage,
    XDialogAlertPage,
    XDialogPromptPage,
    XDialogCheckboxPage,
    XDialogRadioPage,
    XDialogToastPage,
    XDialogLoading,
    XModalPage,
    XDialogModalPage,
    XPopoverPage,
    XDialogPopoverPage,

    XAdvancedMapPage,
    XAdvancedSocialPage,
    XAdvancedWeatherPage,
    XBackgroundPage,
    XCardBasicPage,
    XCardHeaderPage,
    XCardImagePage,
    XCardListPage,
    XBadgesPage,

    XAvatarPage,
    ListBasicPage,
    XDividersPage,
    XHeadersPage,
    XIconPage,
    XInsetPage,
    XMultilinePage,
    XNoLinesPage,
    XSlidingPage,
    XThumbnailPage,

    CheckboxBasicPage,
    RadioBasicPage,
    SelectBasicPage,
    RangeBasicPage,
    ToggleBasicPage,
    DatetimeBasicPage,
    
    XTabBadgesPage,
    XTabBasicPage,
    XTabIconPage,
    XTabIconTextPage,
    XSegmentasiPage,
    XNavigationPage,
    XNavigationDetailsPage,

    ToolbarBasicPage,
    ToolbarButtonsPage,
    ToolbarSearchbarPage,
    ToolbarSegmentPage,
    ToolbarColorsPage,
    ToolbarColorsPage2,
    ToolbarColorsPage3,
    ToolbarColorsPage4,
    
    GestureBasicPage,
    GridBasicPage,
    IconBasicPage,
    SearchbarBasicPage,
    XSliderPage,


    MenuBasicPage,
    MenuPageOne,
    MenuPageTwo,
    MenuPageThree,
    DisplayRoutePipe
  ],
  imports: 
  [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      statusbarPadding: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: 
  [
    MyApp,
    SecuredPage,

    XInputBasicPage,
    XInputFloatingPage,
    XInputFixedInlinePage,
    XInputInlinePage,
    XInputInsetPage,
    XInputPlaceholderPage,
    XInputStackedPage,

    XButtonBasicPage,
    XButtonBlockPage,
    XButtonClearPage,
    XButtonComponentsPage,
    XButtonFullPage,
    XButtonIconsPage,
    XButtonOutlinePage,
    XButtonRoundPage,
    XButtonSizesPage,
    XFabBasicPage,

    XDialogActionSheetPage,
    XDialogConfirmPage,
    XDialogAlertPage,
    XDialogPromptPage,
    XDialogCheckboxPage,
    XDialogRadioPage,
    XDialogToastPage,
    XDialogLoading,
    XModalPage,
    XDialogModalPage,
    XPopoverPage,
    XDialogPopoverPage,

    XAvatarPage,
    ListBasicPage,
    XDividersPage,
    XHeadersPage,
    XIconPage,
    XInsetPage,
    XMultilinePage,
    XNoLinesPage,
    XSlidingPage,
    XThumbnailPage,
    
    XAdvancedMapPage,
    XAdvancedSocialPage,
    XAdvancedWeatherPage,
    XBackgroundPage,
    XCardBasicPage,
    XCardHeaderPage,
    XCardImagePage,
    XCardListPage,
    XBadgesPage,

    CheckboxBasicPage,
    RadioBasicPage,
    SelectBasicPage,
    RangeBasicPage,
    ToggleBasicPage,
    DatetimeBasicPage,

    XTabBadgesPage,
    XTabBasicPage,
    XTabIconPage,
    XTabIconTextPage,
    XSegmentasiPage,
    XNavigationPage,
    XNavigationDetailsPage,

    ToolbarBasicPage,
    ToolbarButtonsPage,
    ToolbarSearchbarPage,
    ToolbarSegmentPage,
    ToolbarColorsPage,
    ToolbarColorsPage2,
    ToolbarColorsPage3,
    ToolbarColorsPage4,

    GestureBasicPage,
    GridBasicPage,
    IconBasicPage,
    SearchbarBasicPage,
    XSliderPage,

    MenuBasicPage,
    MenuPageOne,
    MenuPageTwo,
    MenuPageThree
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},RestapiServiceProvider,Camera,AppVersion]
})
export class AppModule { }
