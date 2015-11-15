(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["InputToggle"] = factory(require("react"));
	else
		root["InputToggle"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FancySwitch = undefined;

	var _FancySwitch = __webpack_require__(3);

	var _FancySwitch2 = _interopRequireDefault(_FancySwitch);

	__webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.FancySwitch = _FancySwitch2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _switchStyles = __webpack_require__(4);

	var _switchStyles2 = _interopRequireDefault(_switchStyles);

	var _classnames = __webpack_require__(1);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactAddonsPureRenderMixin = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _id = 0;
	function _genID() {
	  return _id++;
	}

	var FancySwitch = (function (_React$Component) {
	  _inherits(FancySwitch, _React$Component);

	  function FancySwitch(props) {
	    _classCallCheck(this, FancySwitch);

	    // TODO: performance gains?

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FancySwitch).call(this, props));

	    _this.shouldComponentUpdate = _reactAddonsPureRenderMixin.shouldComponentUpdate.bind(_this);

	    // unique id for all instances
	    _this._id = _genID();

	    // TODO: Test if autofocus still works?
	    _this.state = {
	      isFocused: false,
	      // Note: resorting to anti pattern of setting inital state from prop
	      fiChecked: _this.props.defaultChecked
	    };

	    return _this;
	  }

	  /**
	   * Callback used get our switch's backing input element.
	   * @param {DOMElement} c the mounted input created by a switch style
	   */

	  _createClass(FancySwitch, [{
	    key: 'setRef',
	    value: function setRef(c) {
	      this._input = c;
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(e) {
	      // Set focus whenever a user interacts with our switch
	      this._input.focus();
	      this.setState({ fiChecked: e.target.checked });

	      // Inform our parents if needed
	      this.props.onChange(e);
	    }
	  }, {
	    key: 'onFocus',
	    value: function onFocus(e) {
	      this.setState({ isFocused: true });

	      // Inform our parents if needed
	      this.props.onFocus(e);
	    }
	  }, {
	    key: 'onBlur',
	    value: function onBlur(e) {
	      this.setState({ isFocused: false });
	      // Inform our parents if needed
	      this.props.onBlur(e);
	    }
	  }, {
	    key: 'onMouseDown',
	    value: function onMouseDown(e) {
	      // Prevent flick of  focus styling due to the focused element switching
	      e.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // we pull out values even if not using in this render
	      // so we can limit what we pass down in ...otherProps
	      var _props = this.props;
	      var label = _props.label;
	      var labelPostion = _props.labelPostion;
	      var propCheck = _props.checked;
	      var effectName = _props.effectName;
	      var defaultChecked = _props.defaultChecked;

	      var otherProps = _objectWithoutProperties(_props, ['label', 'labelPostion', 'checked', 'effectName', 'defaultChecked']);

	      var _state = this.state;
	      var isFocused = _state.isFocused;
	      var fiChecked = _state.fiChecked;

	      // lock in a value no matter what our internal state is

	      var checked = this.props.checked || fiChecked || '';

	      var outerCss = (0, _classnames2.default)('fi-switch', 'fi-switch--' + effectName, 'fi-switch--label-' + labelPostion, isFocused == true && 'fi-switch--focused', checked == true && 'fi-switch--checked');

	      var labelCss = (0, _classnames2.default)(['fi-switch__label', 'fi-switch__label--' + effectName]);

	      // minimizing id clashes with other code
	      var htmlFor = 'fi-switch-id-' + this._id;

	      // setting otherProps first so they can be overridden as needed
	      var switchProps = _extends({}, otherProps, {
	        htmlFor: htmlFor,
	        checked: checked,
	        // ES7 binding
	        setRef: this.setRef.bind(this),
	        onBlur: this.onBlur.bind(this),
	        onFocus: this.onFocus.bind(this),
	        onChange: this.onChange.bind(this)
	      });
	      // React Template Component
	      var switchComponent = _switchStyles2.default[effectName](switchProps);

	      return _react2.default.createElement(
	        'label',
	        { onMouseDown: this.onMouseDown, role: 'checkbox', 'aria-labelledby': htmlFor, className: outerCss },
	        _react2.default.createElement(
	          'label',
	          { className: labelCss, 'aria-label': label, htmlFor: htmlFor },
	          label
	        ),
	        switchComponent
	      );
	    }
	  }]);

	  return FancySwitch;
	})(_react2.default.Component);

	FancySwitch.propTypes = {
	  defaultChecked: _react.PropTypes.bool,

	  label: _react.PropTypes.string,
	  labelPostion: _react.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

	  effectName: _react.PropTypes.oneOf(Object.keys(_switchStyles2.default)),

	  onChange: _react.PropTypes.func,
	  onFocus: _react.PropTypes.func,
	  onBlur: _react.PropTypes.func
	};
	FancySwitch.defaultProps = {
	  defaultChecked: false,

	  label: 'Checkbox label',
	  labelPostion: 'left',

	  effectName: 'echo',

	  // no-ops
	  onChange: function onChange() {},
	  onFocus: function onFocus() {},
	  onBlur: function onBlur() {}
	};
	exports.default = FancySwitch;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(1);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Template = function Template(props) {
	  var effectName = props.effectName;
	  var htmlFor = props.htmlFor;
	  var onBlur = props.onBlur;
	  var onFocus = props.onFocus;
	  var onChange = props.onChange;
	  var checked = props.checked;
	  var setRef = props.setRef;
	  var children = props.children;

	  var otherProps = _objectWithoutProperties(props, ['effectName', 'htmlFor', 'onBlur', 'onFocus', 'onChange', 'checked', 'setRef', 'children']);

	  var spanCss = (0, _classnames2.default)(['fi-switch__container', 'fi-switch__container--' + effectName]);

	  var inputCss = (0, _classnames2.default)(['fi-switch__input', 'fi-switch__input--' + effectName]);

	  var styleCss = (0, _classnames2.default)(['fi-switch__style', 'fi-switch__style--' + effectName]);
	  var styleCssExtra = (0, _classnames2.default)(['fi-switch__extra', 'fi-switch__extra--' + effectName]);
	  return _react2.default.createElement(
	    'span',
	    { className: spanCss },
	    _react2.default.createElement('input', _extends({ onBlur: onBlur, ref: setRef, 'aria-labelledby': htmlFor, onChange: onChange, onFocus: onFocus, className: inputCss, checked: checked, type: 'checkbox', id: htmlFor }, otherProps)),
	    children
	  );
	};

	var b2spirit = function b2spirit(props) {

	  var effectName = 'b2spirit';

	  return _react2.default.createElement(
	    Template,
	    _extends({ effectName: effectName }, props),
	    _react2.default.createElement('span', { className: 'fi-b2spirit__track' }),
	    _react2.default.createElement('span', { className: 'fi-b2spirit__handle' })
	  );
	};

	var simplygreen = function simplygreen(props) {

	  var effectName = 'simplygreen';

	  return _react2.default.createElement(
	    Template,
	    _extends({ effectName: effectName }, props),
	    _react2.default.createElement('span', { className: 'fi-simplygreen__track' }),
	    _react2.default.createElement('span', { className: 'fi-simplygreen__handle' })
	  );
	};

	var sierra = function sierra(props) {
	  var effectName = 'sierra';

	  return _react2.default.createElement(
	    Template,
	    _extends({ effectName: effectName }, props),
	    _react2.default.createElement('span', { className: 'fi-sierra__track' }),
	    _react2.default.createElement('span', { className: 'fi-sierra__handle' }),
	    _react2.default.createElement(
	      'svg',
	      { className: 'fi-sierra__check', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 72 72' },
	      _react2.default.createElement('path', { className: 'fi-sierra__path', d: 'M17.417,37.778l9.93,9.909l25.444-25.393' })
	    )
	  );
	};

	var charlie = function charlie(props) {
	  var effectName = 'charlie';

	  return _react2.default.createElement(
	    Template,
	    _extends({ effectName: effectName }, props),
	    _react2.default.createElement('span', { className: 'fi-charlie__track' }),
	    _react2.default.createElement(
	      'span',
	      { className: 'fi-charlie__track--faux' },
	      _react2.default.createElement('span', { className: 'fi-charlie__handle' }),
	      _react2.default.createElement('span', { className: 'fi-charlie__handle--border' })
	    ),
	    _react2.default.createElement(
	      'span',
	      { className: 'fi-charlie__text--on' },
	      'ON'
	    ),
	    _react2.default.createElement(
	      'span',
	      { className: 'fi-charlie__text--off' },
	      'OFF'
	    )
	  );
	};

	var foxtrot = function foxtrot(props) {
	  var effectName = 'foxtrot';

	  return _react2.default.createElement(
	    Template,
	    _extends({ effectName: effectName }, props),
	    _react2.default.createElement('span', { className: 'fi-foxtrot__track' }),
	    _react2.default.createElement(
	      'span',
	      { className: 'fi-foxtrot__text fi-foxtrot__text--on' },
	      'ON'
	    ),
	    _react2.default.createElement(
	      'span',
	      { className: ' fi-foxtrot__text fi-foxtrot__text--off' },
	      'OFF'
	    ),
	    _react2.default.createElement('span', { className: 'fi-foxtrot__handle' }),
	    _react2.default.createElement(
	      'svg',
	      { className: 'fi-foxtrot__handle-icon', xmlns: 'http://www.w3.org/2000/svg', version: '1.1', viewBox: '0 0 100 100', x: '0px', y: '0px' },
	      _react2.default.createElement('rect', { rx: 2, ry: 2, height: 50, width: 5, x: 25, y: 25 }),
	      _react2.default.createElement('rect', { rx: 2, ry: 2, height: 70, width: 5, x: 50, y: 15 }),
	      _react2.default.createElement('rect', { rx: 2, ry: 2, height: 50, width: 5, x: 75, y: 25 })
	    )
	  );
	};

	var echo = function echo(props) {
	  var effectName = 'echo';

	  return _react2.default.createElement(
	    Template,
	    _extends({ effectName: effectName }, props),
	    _react2.default.createElement('span', { className: 'fi-echo__track' }),
	    _react2.default.createElement('span', { className: 'fi-echo__handle' }),
	    _react2.default.createElement(
	      'svg',
	      { className: 'fi-echo__icon fi-echo__icon--on', version: '1.1', viewBox: '0 0 100 100', x: '0px', xmlns: 'http://www.w3.org/2000/svg', y: '0px' },
	      _react2.default.createElement('path', { d: 'M76.1618449,18.6433479 L86.8851316,27.6412539 C87.3112368,27.9987985 87.3631973,28.6285973 87.0071338,29.0529372 L43.3014211,81.1393773 C43.0807605,81.4023504 42.7559402,81.5236886 42.4400343,81.4944043 C42.2374084,81.4781838 42.0372772,81.4004766 41.8690111,81.2592846 L12.7727666,56.8446366 C12.3441215,56.4849606 12.2880367,55.8529397 12.6433479,55.4294962 L21.6412539,44.7062095 C21.9987985,44.2801043 22.6305811,44.2298085 23.0573684,44.5879255 L40.6784316,59.3737532 L74.7504227,18.7683355 C75.1078026,18.3424266 75.7384014,18.2880367 76.1618449,18.6433479 Z M76.1618449,18.6433479' })
	    ),
	    _react2.default.createElement(
	      'svg',
	      { className: 'fi-echo__icon fi-echo__icon--off', baseProfile: 'tiny', version: '1.1', viewBox: '0 0 100 100', x: '0px', xmlns: 'http://www.w3.org/2000/svg', y: '0px' },
	      _react2.default.createElement('path', { d: 'M50.003,61.176l20.715,21.206c2.078,2.145,3.429,2.166,5.546,0l4.156-4.256   c2.035-2.084,2.174-3.451,0-5.678L58.49,50l21.931-22.449c2.055-2.109,2.094-3.533,0-5.68l-4.156-4.254   c-2.156-2.207-3.488-2.105-5.546,0L50.003,38.824L29.289,17.617c-2.059-2.105-3.391-2.207-5.547,0l-4.154,4.254   c-2.096,2.146-2.059,3.57,0,5.68L41.517,50L19.588,72.448c-2.174,2.227-2.059,3.594,0,5.678l4.154,4.256   c2.098,2.166,3.449,2.145,5.547,0L50.003,61.176z', 'fill-rule': 'evenodd' })
	    )
	  );
	};

	var bbounce = function bbounce(props) {
	  var effectName = 'bbounce';

	  return _react2.default.createElement(
	    Template,
	    _extends({ effectName: effectName }, props),
	    _react2.default.createElement(
	      'span',
	      { className: 'bbounce__body' },
	      _react2.default.createElement('span', { className: 'bbounce__switch' }),
	      _react2.default.createElement(
	        'span',
	        { className: 'bbounce__track' },
	        _react2.default.createElement('span', { className: 'bbounce__badge' }),
	        _react2.default.createElement('span', { className: 'bbounce__badge bbounce__badge--negative' })
	      )
	    )
	  );
	};

	var ios6 = function ios6(props) {
	  var effectName = 'ios6';

	  return _react2.default.createElement(
	    Template,
	    _extends({ effectName: effectName }, props),
	    _react2.default.createElement('div', { className: 'ios6__switch' })
	  );
	};

	var neonpush = function neonpush(props) {
	  var effectName = 'neonpush';
	  return _react2.default.createElement(
	    Template,
	    _extends({ effectName: effectName }, props),
	    _react2.default.createElement('span', { className: 'neonpush__btn' })
	  );
	};

	exports.default = {
	  b2spirit: b2spirit,
	  simplygreen: simplygreen,
	  bbounce: bbounce,
	  ios6: ios6,
	  neonpush: neonpush,
	  sierra: sierra,
	  charlie: charlie,
	  echo: echo,
	  foxtrot: foxtrot
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 * 
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentWithPureRenderMixin
	 */

	'use strict';

	var shallowCompare = __webpack_require__(9);

	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function (nextProps, nextState) {
	    return shallowCompare(this, nextProps, nextState);
	  }
	};

	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/

	'use strict';

	var shallowEqual = __webpack_require__(6);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ }
/******/ ])
});
;