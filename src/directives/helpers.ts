// action sheets
import { ActionSheetPage as ActionSheetBasicPage} from '../pages/action-sheets/basic/pages';

// alerts
import { AlertPage as AlertBasicPage } from '../pages/alerts/alert/pages';
import { CheckboxPage as AlertCheckboxPage } from '../pages/alerts/checkbox/pages';
import { ConfirmPage as AlertConfirmPage } from '../pages/alerts/confirm/pages';
import { PromptPage as AlertPromptPage } from '../pages/alerts/prompt/pages';
import { RadioPage as AlertRadioPage } from '../pages/alerts/radio/pages';

// lists
import { XAvatarPage } from '../pages/lists/avatar/pages';
import { BasicPage as ListBasicPage} from '../pages/lists/basic/pages';
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

// segments
import { XSegmentasiPage } from '../pages/segments/basic/pages';

// slides
import { XSliderPage } from '../pages/slides/basic/pages';

// modals
import { XModalPage } from '../pages/modals/basic/pages';

// popover
import { XPopoverBasicPage } from '../pages/popovers/basic/pages';

// navigation
import { XNavigationPage } from '../pages/navigation/basic/pages';

// tabs
import { XTabBadgesPage } from '../pages/tabs/badges/pages';
import { XTabBasicPage } from '../pages/tabs/basic/pages';
import { XTabIconPage  } from '../pages/tabs/icon/pages';
import { XTabIconTextPage  } from '../pages/tabs/icon-text/pages';

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


// radios
import { BasicPage as RadioBasicPage } from '../pages/radios/basic/pages';

// ranges
import { BasicPage as RangeBasicPage } from '../pages/ranges/basic/pages';

// searchbar
import { BasicPage as SearchbarBasicPage } from '../pages/searchbars/basic/pages';


// selects
import { BasicPage as SelectBasicPage } from '../pages/selects/basic/pages';





// toast
import { ToastPage as ToastBasicPage } from '../pages/toast/basic/pages';

// toggles
import { BasicPage as ToggleBasicPage } from '../pages/toggles/basic/pages';

// toolbars
import { BasicPage as ToolbarBasicPage } from '../pages/toolbar/basic/pages';
import { ButtonsPage as ToolbarButtonsPage } from '../pages/toolbar/buttons/pages';
import { ColorsPage as ToolbarColorsPage } from '../pages/toolbar/colors/pages';
import { SearchbarPage as ToolbarSearchbarPage } from '../pages/toolbar/searchbar/pages';
import { SegmentPage as ToolbarSegmentPage } from '../pages/toolbar/segment/pages';


export function hasScrollbar() {

  if (typeof window.top.innerWidth === 'number') {
    return window.top.innerWidth > window.top.document.documentElement.clientWidth;
  }

  // rootElem for quirksmode
  var rootElem = window.top.document.documentElement || window.top.document.body;

  // Check overflow style property on body for fauxscrollbars
  var overflowStyle;

  if (typeof rootElem.style !== 'undefined') {
    overflowStyle = rootElem.style.overflow;
  }

  overflowStyle = overflowStyle || window.top.getComputedStyle(rootElem, '').overflow;

  // Also need to check the Y axis overflow
  var overflowYStyle;

  if (typeof rootElem.style !== 'undefined') {
    overflowYStyle = rootElem.style.overflowY;
  }

  overflowYStyle = overflowYStyle || window.top.getComputedStyle(rootElem, '').overflowY;

  var contentOverflows = rootElem.scrollHeight > rootElem.clientHeight;
  var overflowShown = /^(visible|auto)$/.test(overflowStyle) || /^(visible|auto)$/.test(overflowYStyle);
  var alwaysShowScroll = overflowStyle === 'scroll' || overflowYStyle === 'scroll';

  return (contentOverflows && overflowShown) || (alwaysShowScroll);
}

export function getPages() {
  return {
    'overview': ActionSheetBasicPage,
    'action-sheets': ActionSheetBasicPage,
    'alert': AlertBasicPage,
    'alert-confirm': AlertConfirmPage,
    'alert-prompt': AlertPromptPage,
    'alert-radio': AlertRadioPage,
    'alert-checkbox': AlertCheckboxPage,
    'badges': XBadgesPage,
    'buttons': ButtonBasicPage,
    'block-buttons': ButtonBlockPage,
    'clear-buttons': ButtonClearPage,
    'full-buttons': ButtonFullPage,
    'outline-buttons': ButtonOutlinePage,
    'round-buttons': ButtonRoundPage,
    'buttons-in-components': ButtonComponentsPage,
    'button-sizes': ButtonSizesPage,
    'fabs': FabBasicPage,
    'icon-buttons': ButtonIconsPage,

    'cards': XCardBasicPage,
    'card-header': XCardHeaderPage,
    'card-list': XCardListPage,
    'card-image': XCardImagePage,
    'card-background': XBackgroundPage,
    'card-advanced-map': XAdvancedMapPage,
    'card-advanced-social': XAdvancedSocialPage,
    'card-advanced-weather': XAdvancedWeatherPage,

    'checkbox': CheckboxBasicPage,
    'datetime': DatetimeBasicPage,
    'gestures': GestureBasicPage,
    'inputs': InputBasicPage,
    'fixed-inline-labels': InputFixedInlinePage,
    'floating-labels': InputFloatingPage,
    'inline-labels': InputInlinePage,
    'inset-labels': InputInsetPage,
    'placeholder-labels': InputPlaceholderPage,
    'stacked-labels': InputStackedPage,
    'icons': IconBasicPage,
    'grid': GridBasicPage,

    'lists': ListBasicPage,
    'list-lines': ListBasicPage,
    'avatar-list': XAvatarPage,
    'list-dividers': XDividersPage,
    'list-headers': XHeadersPage,
    'icon-list': XIconPage,
    'inset-list': XInsetPage,
    'multiline-list': XMultilinePage,
    'list-no-lines': XNoLinesPage,
    'sliding-list': XSlidingPage,
    'thumbnail-list': XThumbnailPage,

    'loading': LoadingBasicPage,
    'menus': MenuBasicPage,
    'modals': XModalPage,
    'navigation': XNavigationPage,
    'popovers': XPopoverBasicPage,
    'radio': RadioBasicPage,
    'range': RangeBasicPage,
    'segment': XSegmentasiPage,
    'select': SelectBasicPage,
    'searchbar': SearchbarBasicPage,
    'toggle': ToggleBasicPage,
    'slides': XSliderPage,
    'tabs': XTabBasicPage,
    'tabs-icon': XTabIconPage,
    'tabs-icon-text': XTabIconTextPage,
    'tabs-badges': XTabBadgesPage,
    'toast': ToastBasicPage,
    'toolbar': ToolbarBasicPage,
    'toolbar-buttons': ToolbarButtonsPage,
    'toolbar-segment': ToolbarSegmentPage,
    'toolbar-searchbar': ToolbarSearchbarPage,
    'toolbar-colors': ToolbarColorsPage
  };
}

export function getPageFor(hash) {
  return getPages()[hash];
}

export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
