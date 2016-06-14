import { EventAggregator } from "aurelia-event-aggregator";
export declare class BrowserNotificationManager {
    private static DEFAULT;
    private static GRANTED;
    private static DENIED;
    private eventAggregator;
    private permissionGranted;
    constructor(eventAggregator: EventAggregator);
    requestPermission(): Promise<boolean>;
    notify(message: string): Notification;
}
