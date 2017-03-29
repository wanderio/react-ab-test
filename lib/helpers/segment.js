'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emitter = require('../emitter');

var _emitter2 = _interopRequireDefault(_emitter);

var _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var playSubscription = void 0,
    winSubscription = void 0;

exports.default = {
  enable: function enable() {
    if (_ExecutionEnvironment.canUseDOM) {
      if (typeof analytics === 'undefined') {
        var error = new Error('React A/B Test Segment Helper: "analytics" global is not defined.');
        error.type = 'PUSHTELL_HELPER_MISSING_GLOBAL';
        throw error;
      }

      playSubscription = _emitter2.default.addPlayListener(function (experimentName, variationName) {
        analytics.identify(_defineProperty({}, experimentName, variationName), function () {
          return _emitter2.default.emit('segment-play', experimentName, variationName);
        });

        analytics.track('Experiment Viewed', { experimentName: experimentName, variationName: variationName }, function () {
          return _emitter2.default.emit('segment-play', experimentName, variationName);
        });
      });

      winSubscription = _emitter2.default.addWinListener(function (experimentName, variationName) {
        return analytics.track('Experiment Won', { experimentName: experimentName, variationName: variationName }, function () {
          return _emitter2.default.emit('segment-win', experimentName, variationName);
        });
      });
    }
  },
  disable: function disable() {
    if (_ExecutionEnvironment.canUseDOM) {
      if (!playSubscription || !winSubscription) {
        var error = new Error('React A/B Test Segment Helper: Helper was not enabled.');
        error.type = 'PUSHTELL_HELPER_INVALID_DISABLE';
        throw error;
      }
      playSubscription.remove();
      winSubscription.remove();
    }
  }
};
module.exports = exports['default'];