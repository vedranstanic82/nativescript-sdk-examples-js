const ListViewLinksModel = require("./links-view-model");
const link = require("./link");
const navigationLinks = [
    new link("Application", "/application/application-page"),
    new link("Application Settings", "/application-settings/application-settings-page"),
    new link("Action Bar", "ui/action-bar/action-bar-page"),
    new link("ActivityIndicator", "ui/activity-indicator/activity-indicator-page"),
    new link("Animations", "ui/animations/animations-page"),
    new link("Button", "ui/button/button-page"),
    new link("Borders", "ui/borders/borders-page"),
    new link("Color", "color/color-page"),
    new link("DatePicker", "ui/date-picker/date-picker-page"),
    new link("Dialogs", "ui/dialogs/dialogs-page"),
    new link("Gestures", "ui/gestures/gestures-page"),
    new link("HtmlView", "ui/html-view/html-view-page"),
    new link("Image", "ui/image/image-page"),
  
    new link("Layouts", "/layouts"),
    new link("TimePicker", "ui/time-picker/time-picker-page"),
    new link("ScrollView", "/ui/scroll-view/scroll-view-page"),
    new link("SearchBar", "/ui/search-bar/search-bar-page"),
    new link("SegmentedBar", "/ui/segmented-bar/segmented-bar-page"),
    new link("Slider", "/ui/slider/slider-page"),
    new link("Switch", "/ui/switch/switch-page"),
    new link("TabView", "/ui/tab-view/tab-view-page"),
    new link("TextField", "ui/text-field/text-field-page"),
    new link("TextView", "/ui/text-view/text-view-page"),
    new link("WebView", "/ui/web-view/web-view-page"),
    new link("Style", "/ui/styling/styling-page"),
    new link("Gestures", "/gestures"),
    
    new link("Label", "/label"),
    new link("ListPicker", "/list-picker"),
    new link("ListView", "/list-view"),
    new link("Progress", "/ui/progress/progress-page"),
    new link("Formatted String", "/formatted-string"),
    new link("Trace Module", "/trace"),
    new link("Timer Module", "/timer"),
    new link("Placeholder", "/ui/placeholder/placeholder-page"),
    new link("Repeater", "/ui/repeater/repeater-page"),
    new link("Platform Module", "/platform"),
    new link("Location", "/location"),
    new link("FPS Meter", "/fps-meter"),
    new link("HTTP Module", "/http"),
    
    
    new link("Connectivity", "/connectivity"),
    new link("File System", "/file-system"),
    new link("Modal page", "/modal-page"),
    new link("Camera", "/camera")
];

function onNavigatingTo(args) {
    const page = args.object;
    const vm = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: "Cookbook"
    });
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
