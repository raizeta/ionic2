import { NgModule,ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

// action sheets
import { SecuredPage } from '../pages/auth/pages';

// action sheets
import { ActionSheetPage } from '../pages/action-sheets/basic/pages';

// alerts
import { AlertPage} from '../pages/alerts/alert/pages';
import { CheckboxPage as AlertCheckboxPage } from '../pages/alerts/checkbox/pages';
import { ConfirmPage as AlertConfirmPage } from '../pages/alerts/confirm/pages';
import { PromptPage as AlertPromptPage } from '../pages/alerts/prompt/pages';
import { RadioPage as AlertRadioPage } from '../pages/alerts/radio/pages';

// segments
import { XSegmentasiPage } from '../pages/segments/basic/pages';

// slides
import { XSliderPage } from '../pages/slides/basic/pages';

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

// modals
import { XModalPage, ModalContentPage } from '../pages/modals/basic/pages';
// popover
import { XPopoverBasicPage, XPopoverPage } from '../pages/popovers/basic/pages';

// navigation
import { XNavigationPage, XNavigationDetailsPage } from '../pages/navigation/basic/pages';

// toolbars
import { BasicPage as ToolbarBasicPage } from '../pages/toolbar/basic/pages';
import { ButtonsPage as ToolbarButtonsPage } from '../pages/toolbar/buttons/pages';
import { ColorsPage as ToolbarColorsPage } from '../pages/toolbar/colors/pages';
import { Page2 as ToolbarColorsPage2 } from '../pages/toolbar/colors/pages';
import { Page3 as ToolbarColorsPage3 } from '../pages/toolbar/colors/pages';
import { Page4 as ToolbarColorsPage4 } from '../pages/toolbar/colors/pages';
import { SearchbarPage as ToolbarSearchbarPage } from '../pages/toolbar/searchbar/pages';
import { SegmentPage as ToolbarSegmentPage } from '../pages/toolbar/segment/pages';

// tabs
import { XTabBadgesPage } from '../pages/tabs/badges/pages';
import { XTabBasicPage } from '../pages/tabs/basic/pages';
import { XTabIconPage } from '../pages/tabs/icon/pages';
import { XTabIconTextPage } from '../pages/tabs/icon-text/pages';

// badges
import { XBadgesPage } from '../pages/badges/basic/pages';

// buttons
import { BasicPage as ButtonBasicPage } from '../pages/buttons/basic/pages';
import { BlockPage as ButtonBlockPage } from '../pages/buttons/block/pages';
import { ClearPage as ButtonClearPage } from '../pages/buttons/clear/pages';
import { ComponentsPage as ButtonComponentsPage } from '../pages/buttons/components/pages';
import { FullPage as ButtonFullPage } from '../pages/buttons/full/pages';
import { IconsPage as ButtonIconsPage } from '../pages/buttons/icons/pages';
import { OutlinePage as ButtonOutlinePage } from '../pages/buttons/outline/pages';
import { RoundPage as ButtonRoundPage } from '../pages/buttons/round/pages';
import { SizesPage as ButtonSizesPage } from '../pages/buttons/sizes/pages';

// fabs
import { BasicPage as FabBasicPage } from '../pages/fabs/basic/pages';



// checkboxes
import { BasicPage as CheckboxBasicPage } from '../pages/checkboxes/basic/pages';

// datetime
import { BasicPage as DatetimeBasicPage } from '../pages/datetime/basic/pages';

// gestures
import { BasicPage as GestureBasicPage } from '../pages/gestures/basic/pages';

// grid
import { BasicPage as GridBasicPage } from '../pages/grid/basic/pages';

// icons
import { BasicPage as IconBasicPage } from '../pages/icons/basic/pages';

// inputs
import { BasicPage as InputBasicPage } from '../pages/inputs/basic/pages';
import { FloatingPage as InputFloatingPage } from '../pages/inputs/floating/pages';
import { FixedInlinePage as InputFixedInlinePage } from '../pages/inputs/fixed-inline/pages';
import { InlinePage as InputInlinePage } from '../pages/inputs/inline/pages';
import { InsetPage as InputInsetPage } from '../pages/inputs/inset/pages';
import { PlaceholderPage as InputPlaceholderPage } from '../pages/inputs/placeholder/pages';
import { StackedPage as InputStackedPage } from '../pages/inputs/stacked/pages';



// loading
import { BasicPage as LoadingBasicPage } from '../pages/loading/basic/pages';

// menu
import { BasicPage as MenuBasicPage } from '../pages/menus/basic/pages';
import { PageOne as MenuPageOne } from '../pages/menus/basic/pages';
import { PageTwo as MenuPageTwo } from '../pages/menus/basic/pages';
import { PageThree as MenuPageThree } from '../pages/menus/basic/pages';







// radios
import { BasicPage as RadioBasicPage } from '../pages/radios/basic/pages';

// ranges
import { BasicPage as RangeBasicPage } from '../pages/ranges/basic/pages';

// searchbar
import { BasicPage as SearchbarBasicPage } from '../pages/searchbars/basic/pages';



// selects
import { BasicPage as SelectBasicPage } from '../pages/selects/basic/pages';





// toast
import { ToastPage } from '../pages/toast/basic/pages';

// toggles
import { BasicPage as ToggleBasicPage } from '../pages/toggles/basic/pages';


// pipes
import { DisplayRoutePipe } from '../pipes/display-route';
import { RestapiServiceProvider } from '../providers/restapi-service/restapi-service';


@NgModule({
  declarations: [
    MyApp,
    SecuredPage,
    ActionSheetPage,

    AlertPage,
    AlertCheckboxPage,
    AlertConfirmPage,
    AlertPromptPage,
    AlertRadioPage,

    XBadgesPage,

    ButtonBasicPage,
    ButtonBlockPage,
    ButtonClearPage,
    ButtonComponentsPage,
    ButtonFullPage,
    ButtonIconsPage,
    ButtonOutlinePage,
    ButtonRoundPage,
    ButtonSizesPage,

    FabBasicPage,

    XAdvancedMapPage,
    XAdvancedSocialPage,
    XAdvancedWeatherPage,
    XBackgroundPage,
    XCardBasicPage,
    XCardHeaderPage,
    XCardImagePage,
    XCardListPage,

    CheckboxBasicPage,

    DatetimeBasicPage,

    GestureBasicPage,

    GridBasicPage,

    IconBasicPage,

    InputBasicPage,
    InputFloatingPage,
    InputFixedInlinePage,
    InputInlinePage,
    InputInsetPage,
    InputPlaceholderPage,
    InputStackedPage,

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

    LoadingBasicPage,

    MenuBasicPage,
    MenuPageOne,
    MenuPageTwo,
    MenuPageThree,

    XModalPage,
    ModalContentPage,

    XNavigationPage,
    XNavigationDetailsPage,

    XPopoverBasicPage,
    XPopoverPage,

    RadioBasicPage,

    RangeBasicPage,

    SearchbarBasicPage,

    XSegmentasiPage,

    SelectBasicPage,

    XSliderPage,

    XTabBadgesPage,

    XTabBasicPage,

    XTabIconPage,
    XTabIconTextPage,


    ToastPage,

    ToggleBasicPage,

    ToolbarBasicPage,
    ToolbarButtonsPage,
    ToolbarColorsPage,
    ToolbarColorsPage2,
    ToolbarColorsPage3,
    ToolbarColorsPage4,
    ToolbarSearchbarPage,
    ToolbarSegmentPage,

    DisplayRoutePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      statusbarPadding: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SecuredPage,
    ActionSheetPage,
    AlertPage,
    AlertCheckboxPage,
    AlertConfirmPage,
    AlertPromptPage,
    AlertRadioPage,

    XBadgesPage,

    ButtonBasicPage,
    ButtonBlockPage,
    ButtonClearPage,
    ButtonComponentsPage,
    ButtonFullPage,
    ButtonIconsPage,
    ButtonOutlinePage,
    ButtonRoundPage,
    ButtonSizesPage,

    FabBasicPage,

    XAdvancedMapPage,
    XAdvancedSocialPage,
    XAdvancedWeatherPage,
    XBackgroundPage,
    XCardBasicPage,
    XCardHeaderPage,
    XCardImagePage,
    XCardListPage,

    CheckboxBasicPage,

    DatetimeBasicPage,

    GestureBasicPage,

    GridBasicPage,

    IconBasicPage,

    InputBasicPage,
    InputFloatingPage,
    InputFixedInlinePage,
    InputInlinePage,
    InputInsetPage,
    InputPlaceholderPage,
    InputStackedPage,

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

    LoadingBasicPage,

    MenuBasicPage,
    MenuPageOne,
    MenuPageTwo,
    MenuPageThree,

    XModalPage,
    ModalContentPage,

    XNavigationPage,
    XNavigationDetailsPage,

    XPopoverBasicPage,
    XPopoverPage,

    RadioBasicPage,

    RangeBasicPage,

    SearchbarBasicPage,

    XSegmentasiPage,

    SelectBasicPage,

    XSliderPage,

    XTabBadgesPage,
    XTabBasicPage,
    XTabIconPage,
    XTabIconTextPage,

    ToastPage,

    ToggleBasicPage,

    ToolbarBasicPage,
    ToolbarButtonsPage,
    ToolbarColorsPage,
    ToolbarColorsPage2,
    ToolbarColorsPage3,
    ToolbarColorsPage4,
    ToolbarSearchbarPage,
    ToolbarSegmentPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},RestapiServiceProvider]
})
export class AppModule { }
