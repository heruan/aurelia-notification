var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject } from "aurelia-dependency-injection";
import { EventAggregator } from "aurelia-event-aggregator";
let BrowserNotificationManager_1;
export let BrowserNotificationManager = BrowserNotificationManager_1 = class BrowserNotificationManager {
    constructor(eventAggregator) {
        this.permissionGranted = false;
        this.eventAggregator = eventAggregator;
    }
    requestPermission() {
        if (Notification.permission === BrowserNotificationManager_1.GRANTED) {
            this.permissionGranted = true;
            return Promise.resolve(this.permissionGranted);
        }
        else {
            return new Promise((resolve, reject) => {
                Notification.requestPermission(result => {
                    switch (result) {
                        case BrowserNotificationManager_1.GRANTED:
                            this.permissionGranted = true;
                            break;
                    }
                    resolve(this.permissionGranted);
                });
            });
        }
    }
    notify(message) {
        let notification = new Notification(message);
        notification.onclick = event => {
        };
        return notification;
    }
};
BrowserNotificationManager.DEFAULT = "default";
BrowserNotificationManager.GRANTED = "granted";
BrowserNotificationManager.DENIED = "denied";
BrowserNotificationManager = BrowserNotificationManager_1 = __decorate([
    autoinject, 
    __metadata('design:paramtypes', [(typeof (_a = typeof EventAggregator !== 'undefined' && EventAggregator) === 'function' && _a) || Object])
], BrowserNotificationManager);
var _a;
//# sourceMappingURL=browser-notification-manager.js.map