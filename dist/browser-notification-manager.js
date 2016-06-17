"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var aurelia_event_aggregator_1 = require("aurelia-event-aggregator");
var BrowserNotificationManager = (function () {
    function BrowserNotificationManager(eventAggregator) {
        this.permissionGranted = false;
        this.eventAggregator = eventAggregator;
    }
    BrowserNotificationManager.prototype.requestPermission = function () {
        var _this = this;
        if (exports.Notification.permission === BrowserNotificationManager.GRANTED) {
            this.permissionGranted = true;
            return Promise.resolve(this.permissionGranted);
        }
        else {
            return new Promise(function (resolve, reject) {
                exports.Notification.requestPermission().then(function (result) {
                    switch (result) {
                        case BrowserNotificationManager.GRANTED:
                            _this.permissionGranted = true;
                            break;
                    }
                    resolve(_this.permissionGranted);
                });
            });
        }
    };
    BrowserNotificationManager.prototype.notify = function (message) {
        var notification = new exports.Notification(message);
        notification.onclick = function (event) {
        };
        return notification;
    };
    BrowserNotificationManager.DEFAULT = "default";
    BrowserNotificationManager.DENIED = "denied";
    BrowserNotificationManager.GRANTED = "granted";
    BrowserNotificationManager = __decorate([
        aurelia_dependency_injection_1.autoinject, 
        __metadata('design:paramtypes', [aurelia_event_aggregator_1.EventAggregator])
    ], BrowserNotificationManager);
    return BrowserNotificationManager;
}());
exports.BrowserNotificationManager = BrowserNotificationManager;
//# sourceMappingURL=browser-notification-manager.js.map