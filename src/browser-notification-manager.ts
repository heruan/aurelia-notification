import {autoinject} from "aurelia-dependency-injection";
import {EventAggregator} from "aurelia-event-aggregator";

@autoinject
export class BrowserNotificationManager {

    private static DEFAULT: string = "default";

    private static DENIED: string = "denied";

    private static GRANTED: string = "granted";

    private eventAggregator: EventAggregator;

    private permissionGranted: boolean = false;

    public constructor(eventAggregator: EventAggregator) {
        this.eventAggregator = eventAggregator;
    }

    public requestPermission(): Promise<boolean> {
        if (Notification.permission === BrowserNotificationManager.GRANTED) {
            this.permissionGranted = true;
            return Promise.resolve(this.permissionGranted);
        } else {
            return new Promise((resolve , reject) => {
                Notification.requestPermission().then(result => {
                    switch (result) {
                        case BrowserNotificationManager.GRANTED:
                        this.permissionGranted = true;
                        break;
                    }
                    resolve(this.permissionGranted);
                });
            });
        }
    }

    public notify(message: string): Notification {
        let notification = new Notification(message);
        notification.onclick = event => {

        };
        return notification;
    }

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
    new(title: string, options?: NotificationOptions): Notification;
    requestPermission(): Promise<string>;
}
