define(["exports", "aurelia-dependency-injection", "aurelia-event-aggregator"], function (exports, _aureliaDependencyInjection, _aureliaEventAggregator) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.BrowserNotificationManager = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = undefined && undefined.__metadata || function (k, v) {
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var BrowserNotificationManager_1 = void 0;
    var BrowserNotificationManager = exports.BrowserNotificationManager = BrowserNotificationManager_1 = function () {
        function BrowserNotificationManager(eventAggregator) {
            _classCallCheck(this, BrowserNotificationManager);

            this.permissionGranted = false;
            this.eventAggregator = eventAggregator;
        }

        BrowserNotificationManager.prototype.requestPermission = function requestPermission() {
            var _this = this;

            if (Notification.permission === BrowserNotificationManager_1.GRANTED) {
                this.permissionGranted = true;
                return Promise.resolve(this.permissionGranted);
            } else {
                return new Promise(function (resolve, reject) {
                    Notification.requestPermission(function (result) {
                        switch (result) {
                            case BrowserNotificationManager_1.GRANTED:
                                _this.permissionGranted = true;
                                break;
                        }
                        resolve(_this.permissionGranted);
                    });
                });
            }
        };

        BrowserNotificationManager.prototype.notify = function notify(message) {
            var notification = new Notification(message);
            notification.onclick = function (event) {};
            return notification;
        };

        return BrowserNotificationManager;
    }();
    BrowserNotificationManager.DEFAULT = "default";
    BrowserNotificationManager.GRANTED = "granted";
    BrowserNotificationManager.DENIED = "denied";
    exports.BrowserNotificationManager = BrowserNotificationManager = BrowserNotificationManager_1 = __decorate([_aureliaDependencyInjection.autoinject, __metadata('design:paramtypes', [typeof (_a = typeof _aureliaEventAggregator.EventAggregator !== 'undefined' && _aureliaEventAggregator.EventAggregator) === 'function' && _a || Object])], BrowserNotificationManager);
    var _a;
});