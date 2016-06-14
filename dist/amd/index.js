define(["exports", "./notification-manager", "./browser-notification-manager"], function (exports, _notificationManager, _browserNotificationManager) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "NotificationManager", {
    enumerable: true,
    get: function () {
      return _notificationManager.NotificationManager;
    }
  });
  Object.defineProperty(exports, "BrowserNotificationManager", {
    enumerable: true,
    get: function () {
      return _browserNotificationManager.BrowserNotificationManager;
    }
  });
});