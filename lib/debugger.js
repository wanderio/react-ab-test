'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var _emitter = require('./emitter');

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.NODE_ENV === 'production' || !_ExecutionEnvironment.canUseDOM) {
  module.exports = {
    enable: function enable() {},
    disable: function disable() {}
  };
} else {
  var _class, _temp2;

  var style = null;
  var attachStyleSheet = function attachStyleSheet() {
    style = document.createElement('style');
    style.appendChild(document.createTextNode(''));
    document.head.appendChild(style);
    function addCSSRule(selector, rules) {
      if ('insertRule' in style.sheet) {
        style.sheet.insertRule(selector + '{' + rules + '}', 0);
      } else if ('addRule' in style.sheet) {
        style.sheet.addRule(selector, rules, 0);
      }
    }
    addCSSRule('#pushtell-debugger', 'z-index: 25000');
    addCSSRule('#pushtell-debugger', 'position: fixed');
    addCSSRule('#pushtell-debugger', 'transform: translateX(-50%)');
    addCSSRule('#pushtell-debugger', 'bottom: 0');
    addCSSRule('#pushtell-debugger', 'left: 50%');
    addCSSRule('#pushtell-debugger ul', 'margin: 0');
    addCSSRule('#pushtell-debugger ul', 'padding: 0 0 0 20px');
    addCSSRule('#pushtell-debugger li', 'margin: 0');
    addCSSRule('#pushtell-debugger li', 'padding: 0');
    addCSSRule('#pushtell-debugger li', 'font-size: 14px');
    addCSSRule('#pushtell-debugger li', 'line-height: 14px');
    addCSSRule('#pushtell-debugger input', 'float: left');
    addCSSRule('#pushtell-debugger input', 'margin: 0 10px 0 0');
    addCSSRule('#pushtell-debugger input', 'padding: 0');
    addCSSRule('#pushtell-debugger input', 'cursor: pointer');
    addCSSRule('#pushtell-debugger label', 'color: #999999');
    addCSSRule('#pushtell-debugger label', 'margin: 0 0 10px 0');
    addCSSRule('#pushtell-debugger label', 'cursor: pointer');
    addCSSRule('#pushtell-debugger label', 'font-weight: normal');
    addCSSRule('#pushtell-debugger label.active', 'color: #000000');
    addCSSRule('#pushtell-debugger .pushtell-experiment-name', 'font-size: 16px');
    addCSSRule('#pushtell-debugger .pushtell-experiment-name', 'color: #000000');
    addCSSRule('#pushtell-debugger .pushtell-experiment-name', 'margin: 0 0 10px 0');
    addCSSRule('#pushtell-debugger .pushtell-production-build-note', 'font-size: 10px');
    addCSSRule('#pushtell-debugger .pushtell-production-build-note', 'color: #999999');
    addCSSRule('#pushtell-debugger .pushtell-production-build-note', 'text-align: center');
    addCSSRule('#pushtell-debugger .pushtell-production-build-note', 'margin: 10px -40px 0 -10px');
    addCSSRule('#pushtell-debugger .pushtell-production-build-note', 'border-top: 1px solid #b3b3b3');
    addCSSRule('#pushtell-debugger .pushtell-production-build-note', 'padding: 10px 10px 5px 10px');
    addCSSRule('#pushtell-debugger .pushtell-handle', 'cursor: pointer');
    addCSSRule('#pushtell-debugger .pushtell-handle', 'padding: 5px 10px 5px 10px');
    addCSSRule('#pushtell-debugger .pushtell-panel', 'padding: 15px 40px 5px 10px');
    addCSSRule('#pushtell-debugger .pushtell-container', 'font-size: 11px');
    addCSSRule('#pushtell-debugger .pushtell-container', 'background-color: #ebebeb');
    addCSSRule('#pushtell-debugger .pushtell-container', 'color: #000000');
    addCSSRule('#pushtell-debugger .pushtell-container', 'box-shadow: 0px 0 5px rgba(0, 0, 0, 0.1)');
    addCSSRule('#pushtell-debugger .pushtell-container', 'border-top: 1px solid #b3b3b3');
    addCSSRule('#pushtell-debugger .pushtell-container', 'border-left: 1px solid #b3b3b3');
    addCSSRule('#pushtell-debugger .pushtell-container', 'border-right: 1px solid #b3b3b3');
    addCSSRule('#pushtell-debugger .pushtell-container', 'border-top-left-radius: 2px');
    addCSSRule('#pushtell-debugger .pushtell-container', 'border-top-right-radius: 2px');
    addCSSRule('#pushtell-debugger .pushtell-close', 'cursor: pointer');
    addCSSRule('#pushtell-debugger .pushtell-close', 'font-size: 16px');
    addCSSRule('#pushtell-debugger .pushtell-close', 'font-weight: bold');
    addCSSRule('#pushtell-debugger .pushtell-close', 'color: #CC0000');
    addCSSRule('#pushtell-debugger .pushtell-close', 'position: absolute');
    addCSSRule('#pushtell-debugger .pushtell-close', 'top: 0px');
    addCSSRule('#pushtell-debugger .pushtell-close', 'right: 7px');
    addCSSRule('#pushtell-debugger .pushtell-close:hover', 'color: #FF0000');
    addCSSRule('#pushtell-debugger .pushtell-close, #pushtell-debugger label', 'transition: all .25s');
  };

  var removeStyleSheet = function removeStyleSheet() {
    if (style) {
      document.head.removeChild(style);
      style = null;
    }
  };

  var Debugger = (_temp2 = _class = function (_React$Component) {
    _inherits(Debugger, _React$Component);

    function Debugger() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Debugger);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Debugger.__proto__ || Object.getPrototypeOf(Debugger)).call.apply(_ref, [this].concat(args))), _this), _this.state = { experiments: _emitter2.default.getActiveExperiments(), visible: false }, _this.toggleVisibility = function () {
        return _this.setState({ visible: !_this.state.visible });
      }, _this.updateExperiments = function () {
        return _this.setState({ experiments: _emitter2.default.getActiveExperiments() });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Debugger, [{
      key: 'setActiveVariant',
      value: function setActiveVariant(experimentName, variantName) {
        _emitter2.default.setActiveVariant(experimentName, variantName);
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.activeSubscription = _emitter2.default.addListener('active', this.updateExperiments);

        this.inactiveSubscription = _emitter2.default.addListener('inactive', this.updateExperiments);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.activeSubscription.remove();
        this.inactiveSubscription.remove();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        if (this.state.visible) {
          return _react2.default.createElement(
            'div',
            { className: 'pushtell-container pushtell-panel' },
            _react2.default.createElement(
              'div',
              { className: 'pushtell-close', onClick: this.toggleVisibility },
              '\xD7'
            ),
            this.experimentNames.map(function (experimentName) {
              var variantNames = Object.keys(_this2.state.experiments[experimentName]);

              if (!variantNames.length) {
                return;
              }

              return _react2.default.createElement(
                'div',
                { className: 'pushtell-experiment', key: experimentName },
                _react2.default.createElement(
                  'div',
                  { className: 'pushtell-experiment-name' },
                  experimentName
                ),
                _react2.default.createElement(
                  'ul',
                  null,
                  variantNames.map(function (variantName) {
                    return _react2.default.createElement(
                      'li',
                      { key: variantName },
                      _react2.default.createElement(
                        'label',
                        {
                          className: _this2.state.experiments[experimentName][variantName] ? 'active' : null,
                          onClick: _this2.setActiveVariant.bind(_this2, experimentName, variantName)
                        },
                        _react2.default.createElement('input', {
                          type: 'radio',
                          name: experimentName,
                          value: variantName,
                          defaultChecked: _this2.state.experiments[experimentName][variantName]
                        }),
                        variantName
                      )
                    );
                  })
                )
              );
            }),
            _react2.default.createElement(
              'div',
              { className: 'pushtell-production-build-note' },
              'This panel is hidden on production builds.'
            )
          );
        }

        if (this.experimentNames.length > 0) {
          return _react2.default.createElement(
            'div',
            {
              className: 'pushtell-container pushtell-handle',
              onClick: this.toggleVisibility
            },
            this.experimentNames.length,
            ' Active Experiment',
            this.experimentNames.length > 1 ? 's' : ''
          );
        }

        return null;
      }
    }, {
      key: 'experimentNames',
      get: function get() {
        return Object.keys(this.state.experiments);
      }
    }]);

    return Debugger;
  }(_react2.default.Component), _class.displayName = 'Pushtell.Debugger', _temp2);
  var body = document.getElementsByTagName('body')[0];

  module.exports = {
    enable: function enable() {
      attachStyleSheet();
      var container = document.createElement('div');
      container.id = 'pushtell-debugger';
      body.appendChild(container);
      _reactDom2.default.render(_react2.default.createElement(Debugger, null), container);
    },
    disable: function disable() {
      removeStyleSheet();
      var container = document.getElementById('pushtell-debugger');
      if (container) {
        _reactDom2.default.unmountComponentAtNode(container);
        body.removeChild(container);
      }
    }
  };
}