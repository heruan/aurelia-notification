import { EventAggregator } from "aurelia-event-aggregator";
export declare class BrowserNotificationManager {
    private static DEFAULT;
    private static DENIED;
    private static GRANTED;
    private eventAggregator;
    private permissionGranted;
    constructor(eventAggregator: EventAggregator);
    requestPermission(): Promise<boolean>;
    notify(message: string): Notification;
}
export interface NotificationOptions {
    dir?: string;
    lang?: string;
    body?: string;
    tag?: string;
    icon?: string;
    data?: any;
    vibrate?: number[];
    renotify?: boolean;
    silent?: boolean;
    sound?: string;
    noscreen?: boolean;
    sticky?: boolean;
}
export interface Notification {
    title: string;
    dir: string;
    lang: string;
    body: string;
    tag: string;
    icon: string;
    data: any;
    silent: boolean;
    timestamp: string;
    noscreen: boolean;
    renotify: boolean;
    sound: string;
    sticky: boolean;
    vibrate: number[];
    onclick: Function;
    onerror: Function;
    close(): void;
}
export declare var Notification: {
    prototype: Notification;
    permission: string;
    new (title: string, options?: NotificationOptions): Notification;
    requestPermission(): Promise<string>;
};
