"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = throttle;
function throttle(func, ms) {
  var isThrottled = false;
  var savedArgs = void 0;
  var savedThis = void 0;
  function wrapper() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (isThrottled) {
      // (2)
      savedArgs = args;
      savedThis = this;
      return;
    }
    func.apply(this, args); // (1)
    isThrottled = true;
    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }
  return wrapper;
}