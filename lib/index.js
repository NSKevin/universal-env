"use strict";

// exports.__esModule = true;

// var _env = require("@uni/env");

// Object.keys(_env).forEach(function (key) {
//   if (key === "default" || key === "__esModule") return;
//   if (key in exports && exports[key] === _env[key]) return;
//   exports[key] = _env[key];
// });

exports.__esModule = true;
exports.isWindVane = exports.isWeex = exports.isWeb = exports.isWeChatMiniProgram = exports.isQuickApp = exports.isPHA = exports.isNode = exports.isMiniApp = exports.isKuaiShouMiniProgram = exports.isKraken = exports.isFRM = exports.isByteDanceMicroApp = exports.isBaiduSmartProgram = exports.default = void 0;
var isWeb = typeof window !== 'undefined' && 'onload' in window;
exports.isWeb = isWeb;
var isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
exports.isNode = isNode;
var isWeex = typeof WXEnvironment !== 'undefined' && WXEnvironment.platform !== 'Web';
exports.isWeex = isWeex;
var isKraken = typeof __kraken__ !== 'undefined';
exports.isKraken = isKraken;
var isMiniApp = typeof my !== 'undefined' && my !== null && typeof my.alert !== 'undefined';
exports.isMiniApp = isMiniApp;
var isByteDanceMicroApp = typeof tt !== 'undefined' && tt !== null && typeof tt.showToast !== 'undefined';
exports.isByteDanceMicroApp = isByteDanceMicroApp;
var isBaiduSmartProgram = typeof swan !== 'undefined' && swan !== null && typeof swan.showToast !== 'undefined';
exports.isBaiduSmartProgram = isBaiduSmartProgram;
var isKuaiShouMiniProgram = typeof ks !== 'undefined' && ks !== null && typeof ks.showToast !== 'undefined'; // In wechat mini program, wx.login is a function
// In wechat mini propgram webview, there is no wx.login, but exist wx.miniProgram
// In bytedance maicro app, there is wx variable.
// In kuaishou mini program, there is wx variable.

exports.isKuaiShouMiniProgram = isKuaiShouMiniProgram;
var isWeChatMiniProgram = !isByteDanceMicroApp && typeof wx !== 'undefined' && wx !== null && (typeof wx.request !== 'undefined' || typeof wx.miniProgram !== 'undefined');
exports.isWeChatMiniProgram = isWeChatMiniProgram;
var isQuickApp = typeof global !== 'undefined' && global !== null && typeof global.callNative !== 'undefined' && !isWeex;
exports.isQuickApp = isQuickApp;
var isPHA = isWeb && typeof pha === 'object';
exports.isPHA = isPHA;
var isFRM = isMiniApp && isWeb && my.isFRM; // WindVane.call is a function while page importing windvane.js

exports.isFRM = isFRM;
var ua = typeof navigator === 'object' ? navigator.userAgent || navigator.swuserAgent : '';
var isWindVane = /.+AliApp\((\w+)\/((?:\d+\.)+\d+)\).* .*(WindVane)(?:\/((?:\d+\.)+\d+))?.*/.test(ua) && isWeb && typeof WindVane !== 'undefined' && typeof WindVane.call !== 'undefined';
exports.isWindVane = isWindVane;

var isNativeJS = typeof NativeJS !== 'undefined';
exports.isNativeJS = isNativeJS;

var _default = {
  isNativeJS: isNativeJS,
  isWeb: isWeb,
  isNode: isNode,
  isWeex: isWeex,
  isKraken: isKraken,
  isMiniApp: isMiniApp,
  isByteDanceMicroApp: isByteDanceMicroApp,
  isBaiduSmartProgram: isBaiduSmartProgram,
  isKuaiShouMiniProgram: isKuaiShouMiniProgram,
  isWeChatMiniProgram: isWeChatMiniProgram,
  isQuickApp: isQuickApp,
  isPHA: isPHA,
  isWindVane: isWindVane,
  isFRM: isFRM
};
exports.default = _default;