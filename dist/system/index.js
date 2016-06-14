"use strict";

System.register(["./notification-manager", "./browser-notification-manager"], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_notificationManager) {
      var _exportObj = {};
      _exportObj.NotificationManager = _notificationManager.NotificationManager;

      _export(_exportObj);
    }, function (_browserNotificationManager) {
      var _exportObj2 = {};
      _exportObj2.BrowserNotificationManager = _browserNotificationManager.BrowserNotificationManager;

      _export(_exportObj2);
    }],
    execute: function () {}
  };
});