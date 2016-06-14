import {autoinject} from "aurelia-dependency-injection";
import {EventAggregator} from "aurelia-event-aggregator";

@autoinject
export class BrowserNotificationManager {

    private static DEFAULT: string = "default";

    private static GRANTED: string = "granted";

    private static DENIED: string = "denied";

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
                Notification.requestPermission(result => {
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
