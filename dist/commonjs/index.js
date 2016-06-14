"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notificationManager = require("./notification-manager");

Object.defineProperty(exports, "NotificationManager", {
  enumerable: true,
  get: function get() {
    return _notificationManager.NotificationManager;
  }
});

var _browserNotificationManager = require("./browser-notification-manager");

Object.defineProperty(exports, "BrowserNotificationManager", {
  enumerable: true,
  get: function get() {
    return _browserNotificationManager.BrowserNotificationManager;
  }
});