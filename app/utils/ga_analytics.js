import ReactGA from 'react-ga';

export class Analytics {

    static sharedInstance = null;
    static getInstance() {
        if (Analytics.sharedInstance == null) {
            Analytics.sharedInstance = new Analytics()
            Analytics.sharedInstance.init({});
        }
        return Analytics.sharedInstance;
    }

    // --- Private Vars --- //
    _initialized = false
    _loaded = false;
    _pendingView = false;

    init(options={}) {
        this.load();

        if (window && typeof window.GA_INITIALIZED != 'undefined') { this._init(options); }
        else { setTimeout(()=> { this.init(options); }, 250); }
    }

    load() {
        if (this._loaded) { return; }

        ReactGA.initialize(`${process.env.GA_TRACKING_ID}`);
        window.GA_INITIALIZED = true;

        this._loaded = true;
    }

    gaTrackPageView() {
        let windowPath = window.location.pathname;
        console.info(`Logging pageview for ${windowPath}`);
        ReactGA.set({ page: windowPath });
        ReactGA.pageview(windowPath, document.title);
    }

    trackEvent(args) {
        console.debug(`Logging event for ${args}`);
        ReactGA.event(args);
    }

    set(args) {
        console.debug(`Logging set for ${args}`);
        ReactGA.set(args);
    }

    trackException(description, fatal=false) {
        if (description) {
            ReactGA.exception({ description, fatal });
        }
    }

    isReady() { return this._initialized; }


    // --- Private Methods --- //

    _init(options={}) {
        if(!this._initialized) {
            this._initialized = true
        }
    }
}

export const gaTrackNavEvent = (label) => {
    let analytics = Analytics.getInstance();
    analytics.trackEvent({
        category: 'Navigation',
        action: 'Clicked',
        label: label
    });
}

export const VideoEventTypes = {
    MainVideo: 'Main_Video',
    LookSequence: 'Look_Sequence'
}

export const gaTrackVideoEvents = (eventType, label) => {
    let analytics = Analytics.getInstance();
    analytics.trackEvent({
        category: eventType,
        action: 'Clicked',
        label: label
    });
}

export const LookEventsTypes = {
    LookGridProduct: 'LookGrid_Product'
}
export const gaTrackLookEvents = (eventType, label) => {
    // Look_Product 
    let analytics = Analytics.getInstance();
    analytics.trackEvent({
        category: eventType,
        action: 'Clicked',
        label: label
    });
}

export const RackEventsTypes = {
    Rack: 'Rack',
    RackCamera: 'Rack_Camera',
    RakeThemeChanged: 'Rack_Changed_Theme',
    RackCartRemoveItem: 'Rack_Item_Removed_From_Cart',
    RackAddedToRack: 'Rack_Added_To_Rack',
    RackToggled: 'Rack_Toggled',
    RackExportPDF: 'Rack_Export_Pdf',
    RackPurchaseOrder: 'Rack_Purchase_Order',
    RackIncreaseQuantity: 'Rack_Increase_Quantity',
    RackDecreaseQuantity: 'Rack_Decrease_Quantity',
    RackMakeAppointment: 'Rack_Make_Showroom_Appointment',
    RackSubmitOrderRequest: 'Submit Order Request'

}
export const gaTrackRackEvents = (eventType, label) => {
    let analytics = Analytics.getInstance();
    analytics.trackEvent({
        category: eventType,
        action: 'Clicked',
        label: label
    });
}

