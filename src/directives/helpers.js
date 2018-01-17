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
// Modern Input
import { BasicPage as CheckboxBasicPage } from '../pages/checkboxes/basic/pages';
import { BasicPage as RadioBasicPage } from '../pages/radios/basic/pages';
import { BasicPage as SelectBasicPage } from '../pages/selects/basic/pages';
import { BasicPage as RangeBasicPage } from '../pages/ranges/basic/pages';
import { BasicPage as ToggleBasicPage } from '../pages/toggles/basic/pages';
import { BasicPage as DatetimeBasicPage } from '../pages/datetime/basic/pages';
// Tabs
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
// Others
import { BasicPage as GestureBasicPage } from '../pages/gestures/basic/pages';
import { BasicPage as GridBasicPage } from '../pages/grid/basic/pages';
import { BasicPage as IconBasicPage } from '../pages/icons/basic/pages';
import { BasicPage as SearchbarBasicPage } from '../pages/searchbars/basic/pages';
import { XSliderPage } from '../pages/slides/basic/pages';
// Menu
import { BasicPage as MenuBasicPage } from '../pages/menus/basic/pages';
export function getPages() {
    return {
        'inputs': XInputBasicPage,
        'floating-labels': XInputFloatingPage,
        'fixed-inline-labels': XInputFixedInlinePage,
        'inline-labels': XInputInlinePage,
        'inset-labels': XInputInsetPage,
        'placeholder-labels': XInputPlaceholderPage,
        'stacked-labels': XInputStackedPage,
        'buttons': XButtonBasicPage,
        'block-buttons': XButtonBlockPage,
        'clear-buttons': XButtonClearPage,
        'full-buttons': XButtonFullPage,
        'outline-buttons': XButtonOutlinePage,
        'round-buttons': XButtonRoundPage,
        'buttons-in-components': XButtonComponentsPage,
        'button-sizes': XButtonSizesPage,
        'icon-buttons': XButtonIconsPage,
        'fabs': XFabBasicPage,
        // 'overview': XDialogActionSheetPage,
        'action-sheets': XDialogActionSheetPage,
        'alert-confirm': XDialogConfirmPage,
        'alert': XDialogAlertPage,
        'alert-prompt': XDialogPromptPage,
        'alert-checkbox': XDialogCheckboxPage,
        'alert-radio': XDialogRadioPage,
        'toast': XDialogToastPage,
        'loading': XDialogLoading,
        'modals': XModalPage,
        'popovers': XPopoverPage,
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
        'cards': XCardBasicPage,
        'card-header': XCardHeaderPage,
        'card-list': XCardListPage,
        'card-image': XCardImagePage,
        'card-background': XBackgroundPage,
        'card-advanced-map': XAdvancedMapPage,
        'card-advanced-social': XAdvancedSocialPage,
        'card-advanced-weather': XAdvancedWeatherPage,
        'badges': XBadgesPage,
        'checkbox': CheckboxBasicPage,
        'radio': RadioBasicPage,
        'select': SelectBasicPage,
        'range': RangeBasicPage,
        'toggle': ToggleBasicPage,
        'datetime': DatetimeBasicPage,
        'tabs-badges': XTabBadgesPage,
        'tabs': XTabBasicPage,
        'tabs-icon': XTabIconPage,
        'tabs-icon-text': XTabIconTextPage,
        'segment': XSegmentasiPage,
        'navigation': XNavigationPage,
        'toolbar': ToolbarBasicPage,
        'toolbar-buttons': ToolbarButtonsPage,
        'toolbar-searchbar': ToolbarSearchbarPage,
        'toolbar-segment': ToolbarSegmentPage,
        'toolbar-colors': ToolbarColorsPage,
        'gestures': GestureBasicPage,
        'grid': GridBasicPage,
        'icons': IconBasicPage,
        'searchbar': SearchbarBasicPage,
        'slides': XSliderPage,
        'menus': MenuBasicPage
    };
}
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
export function getPageFor(hash) {
    return getPages()[hash];
}
export function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
}
;
//# sourceMappingURL=helpers.js.map