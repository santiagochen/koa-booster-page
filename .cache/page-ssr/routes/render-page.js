/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/emotion-cache.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/emotion-cache.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/emotion-sheet.esm.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Middleware.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Serializer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Parser.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");





var last = function last(arr) {
  return arr.length ? arr[arr.length - 1] : null;
}; // based on https://github.com/thysultan/stylis.js/blob/e6843c373ebcbbfade25ebcc23f540ed8508da0a/src/Tokenizer.js#L239-L244


var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if ((0,stylis__WEBPACK_IMPORTED_MODULE_3__.token)(character)) {
      break;
    }

    (0,stylis__WEBPACK_IMPORTED_MODULE_3__.next)();
  }

  return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.slice)(begin, stylis__WEBPACK_IMPORTED_MODULE_3__.position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch ((0,stylis__WEBPACK_IMPORTED_MODULE_3__.token)(character)) {
      case 0:
        // &\f
        if (character === 38 && (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(stylis__WEBPACK_IMPORTED_MODULE_3__.position - 1, points, index);
        break;

      case 2:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_3__.delimit)(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_4__.from)(character);
    }
  } while (character = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.next)());

  return parsed;
};

var getRules = function getRules(value, points) {
  return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.dealloc)(toRules((0,stylis__WEBPACK_IMPORTED_MODULE_3__.alloc)(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
  !element.length) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return !!element && element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule') return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses && cache.compat !== true) {
      var prevElement = index > 0 ? children[index - 1] : null;

      if (prevElement && isIgnoringComment(last(prevElement.children))) {
        return;
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

var isBrowser = typeof document !== 'undefined';
var getServerStylisCache = isBrowser ? undefined : (0,_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
  return (0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    var cache = {};
    return function (name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [stylis__WEBPACK_IMPORTED_MODULE_5__.prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if ( true && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if (isBrowser && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  if (isBrowser) {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (true) {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  if (isBrowser) {
    var currentSheet;
    var finalizingPlugins = [stylis__WEBPACK_IMPORTED_MODULE_6__.stringify,  true ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== stylis__WEBPACK_IMPORTED_MODULE_7__.COMMENT) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } : 0];
    var serializer = (0,stylis__WEBPACK_IMPORTED_MODULE_5__.middleware)(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)((0,stylis__WEBPACK_IMPORTED_MODULE_8__.compile)(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if ( true && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [stylis__WEBPACK_IMPORTED_MODULE_6__.stringify];

    var _serializer = (0,stylis__WEBPACK_IMPORTED_MODULE_5__.middleware)(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

    var _stylis = function _stylis(styles) {
      return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)((0,stylis__WEBPACK_IMPORTED_MODULE_8__.compile)(styles), _serializer);
    }; // $FlowFixMe


    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        if ( // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
         true && serialized.map !== undefined) {
          return rules + serialized.map;
        }

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__.StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.esm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPropValid);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/react/dist/emotion-element-8d26346b.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-element-8d26346b.esm.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CacheProvider),
/* harmony export */   "E": () => (/* binding */ Emotion),
/* harmony export */   "T": () => (/* binding */ ThemeContext),
/* harmony export */   "_": () => (/* binding */ __unsafe_useEmotionCache),
/* harmony export */   "a": () => (/* binding */ ThemeProvider),
/* harmony export */   "b": () => (/* binding */ withTheme),
/* harmony export */   "c": () => (/* binding */ createEmotionProps),
/* harmony export */   "h": () => (/* binding */ hasOwnProperty),
/* harmony export */   "i": () => (/* binding */ isBrowser),
/* harmony export */   "u": () => (/* binding */ useTheme),
/* harmony export */   "w": () => (/* binding */ withEmotionCache)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.esm.js");
/* harmony import */ var _isolated_hoist_non_react_statics_do_not_use_this_in_your_code_dist_emotion_react_isolated_hoist_non_react_statics_do_not_use_this_in_your_code_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.esm.js */ "./node_modules/@emotion/react/isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.esm.js");








var isBrowser = typeof document !== 'undefined';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */(0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__["default"])({
  key: 'css'
}) : null);

if (true) {
  EmotionCacheContext.displayName = 'EmotionCacheContext';
}

var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EmotionCacheContext);
};

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
    // the cache will never be null in the browser
    var cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

if (!isBrowser) {
  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      var cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EmotionCacheContext);

      if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__["default"])({
          key: 'css'
        });
        return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}

var ThemeContext = /* #__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});

if (true) {
  ThemeContext.displayName = 'EmotionThemeContext';
}

var useTheme = function useTheme() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
};

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme))) {
      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
    }

    return mergedTheme;
  }

  if ( true && (theme == null || typeof theme !== 'object' || Array.isArray(theme))) {
    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */(0,_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (outerTheme) {
  return (0,_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
    return getTheme(outerTheme, theme);
  });
});
var ThemeProvider = function ThemeProvider(props) {
  var theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';

  var render = function render(props, ref) {
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe


  var WithTheme = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return (0,_isolated_hoist_non_react_statics_do_not_use_this_in_your_code_dist_emotion_react_isolated_hoist_non_react_statics_do_not_use_this_in_your_code_esm_js__WEBPACK_IMPORTED_MODULE_6__["default"])(WithTheme, Component);
}

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (true) {
    var error = new Error();

    if (error.stack) {
      // chrome
      var match = error.stack.match(/at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z0-9$]+) /);

      if (!match) {
        // safari and firefox
        match = error.stack.match(/.*\n([A-Z][A-Za-z0-9$]+)@/);
      }

      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }

  return newProps;
};
var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.getRegisteredStyles)(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)(registeredStyles, undefined, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext));

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.insertStyles)(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(type, newProps);

  if (!isBrowser && rules !== undefined) {
    var _ref;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
  }

  return ele;
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
}




/***/ }),

/***/ "./node_modules/@emotion/react/dist/emotion-react.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-react.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheProvider": () => (/* reexport safe */ _emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__.C),
/* harmony export */   "ThemeContext": () => (/* reexport safe */ _emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__.T),
/* harmony export */   "ThemeProvider": () => (/* reexport safe */ _emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__.a),
/* harmony export */   "__unsafe_useEmotionCache": () => (/* reexport safe */ _emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__._),
/* harmony export */   "useTheme": () => (/* reexport safe */ _emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__.u),
/* harmony export */   "withEmotionCache": () => (/* reexport safe */ _emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__.w),
/* harmony export */   "withTheme": () => (/* reexport safe */ _emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__.b),
/* harmony export */   "ClassNames": () => (/* binding */ ClassNames),
/* harmony export */   "Global": () => (/* binding */ Global),
/* harmony export */   "createElement": () => (/* binding */ jsx),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "jsx": () => (/* binding */ jsx),
/* harmony export */   "keyframes": () => (/* binding */ keyframes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.esm.js");
/* harmony import */ var _emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emotion-element-8d26346b.esm.js */ "./node_modules/@emotion/react/dist/emotion-element-8d26346b.esm.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/emotion-sheet.esm.js");












var pkg = {
	name: "@emotion/react",
	version: "11.5.0",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	browser: {
		"./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
	},
	types: "types/index.d.ts",
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"isolated-hoist-non-react-statics-do-not-use-this-in-your-code",
		"types/*.d.ts",
		"macro.js",
		"macro.d.ts",
		"macro.js.flow"
	],
	sideEffects: false,
	author: "mitchellhamilton <mitchell@mitchellhamilton.me>",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.13.10",
		"@emotion/cache": "^11.5.0",
		"@emotion/serialize": "^1.0.2",
		"@emotion/sheet": "^1.0.3",
		"@emotion/utils": "^1.0.0",
		"@emotion/weak-memoize": "^0.2.5",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		"@babel/core": "^7.0.0",
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@babel/core": {
			optional: true
		},
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@babel/core": "^7.13.10",
		"@emotion/css": "11.5.0",
		"@emotion/css-prettifier": "1.0.0",
		"@emotion/server": "11.4.0",
		"@emotion/styled": "11.3.0",
		"@types/react": "^16.9.11",
		dtslint: "^0.3.0",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.js",
			"./jsx-runtime.js",
			"./jsx-dev-runtime.js",
			"./isolated-hoist-non-react-statics-do-not-use-this-in-your-code.js"
		],
		umdName: "emotionReact"
	}
};

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !_emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__.h.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__.E;
  createElementArgArray[1] = (0,_emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__.c)(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */(0,_emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__.w)(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;
  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__.serializeStyles)([styles], undefined, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__.T));

  if (!_emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__.i) {
    var _ref;

    var serializedNames = serialized.name;
    var serializedStyles = serialized.styles;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      serializedStyles += next.styles;
      next = next.next;
    }

    var shouldCache = cache.compat === true;
    var rules = cache.insert("", {
      name: serializedNames,
      styles: serializedStyles
    }, cache.sheet, shouldCache);

    if (shouldCache) {
      return null;
    }

    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref));
  } // yes, i know these hooks are used conditionally
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    var key = cache.key + "-global";
    var sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_8__.StyleSheet({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.insertStyles)(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (true) {
  Global.displayName = 'EmotionGlobal';
}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__.serializeStyles)(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if ( true && arg.styles !== undefined && arg.name !== undefined) {
              console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
            }

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.getRegisteredStyles)(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = /* #__PURE__ */(0,_emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__.w)(function (props, cache) {
  var rules = '';
  var serializedHashes = '';
  var hasRendered = false;

  var css = function css() {
    if (hasRendered && "development" !== 'production') {
      throw new Error('css can only be used during render');
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__.serializeStyles)(args, cache.registered);

    if (_emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__.i) {
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.insertStyles)(cache, serialized, false);
    } else {
      var res = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.insertStyles)(cache, serialized, false);

      if (res !== undefined) {
        rules += res;
      }
    }

    if (!_emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__.i) {
      serializedHashes += " " + serialized.name;
    }

    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && "development" !== 'production') {
      throw new Error('cx can only be used during render');
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__.T)
  };
  var ele = props.children(content);
  hasRendered = true;

  if (!_emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_2__.i && rules.length !== 0) {
    var _ref;

    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedHashes.substring(1), _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
  }

  return ele;
});

if (true) {
  ClassNames.displayName = 'EmotionClassNames';
}

if (true) {
  var isBrowser = typeof document !== 'undefined'; // #1727 for some reason Jest evaluates modules twice if some consuming module gets mocked with jest.mock

  var isJest = typeof jest !== 'undefined';

  if (isBrowser && !isJest) {
    // globalThis has wide browser support - https://caniuse.com/?search=globalThis, Node.js 12 and later
    var globalContext = // $FlowIgnore
    typeof globalThis !== 'undefined' ? globalThis // eslint-disable-line no-undef
    : isBrowser ? window : global;
    var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";

    if (globalContext[globalKey]) {
      console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
    }

    globalContext[globalKey] = true;
  }
}




/***/ }),

/***/ "./node_modules/@emotion/react/isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.esm.js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@emotion/react/isolated-hoist-non-react-statics-do-not-use-this-in-your-code/dist/emotion-react-isolated-hoist-non-react-statics-do-not-use-this-in-your-code.esm.js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__);


// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks

var hoistNonReactStatics = (function (targetComponent, sourceComponent) {
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default()(targetComponent, sourceComponent);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hoistNonReactStatics);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/emotion-serialize.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/emotion-serialize.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeStyles": () => (/* binding */ serializeStyles)
/* harmony export */ });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = (0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/emotion-sheet.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/emotion-sheet.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleSheet": () => (/* binding */ StyleSheet)
/* harmony export */ });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (true) {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if ( true && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (true) {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-element-8d26346b.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.esm.js");







var testOmitPropsOnStringTag = _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_2__["default"];

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var isBrowser = typeof document !== 'undefined';

var createStyled = function createStyled(tag, options) {
  if (true) {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if ( true && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if ( true && args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.w)(function (props, cache, ref) {
      var finalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_emotion_react__WEBPACK_IMPORTED_MODULE_5__.T);
      }

      if (typeof props.className === 'string') {
        className = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_3__.getRegisteredStyles)(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__.serializeStyles)(styles.concat(classInterpolations), cache.registered, mergedProps);
      var rules = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_3__.insertStyles)(cache, serialized, typeof finalTag === 'string');
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if ( // $FlowFixMe
        finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      var ele = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(finalTag, newProps);

      if (!isBrowser && rules !== undefined) {
        var _ref;

        var serializedNames = serialized.name;
        var next = serialized.next;

        while (next !== undefined) {
          serializedNames += ' ' + next.name;
          next = next.next;
        }

        return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
      }

      return ele;
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "development" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStyled);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/emotion-utils.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/emotion-utils.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRegisteredStyles": () => (/* binding */ getRegisteredStyles),
/* harmony export */   "insertStyles": () => (/* binding */ insertStyles)
/* harmony export */ });
var isBrowser = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      if (!isBrowser && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weakMemoize);


/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/es/lib/history.js":
/*!***************************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/es/lib/history.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalHistory": () => (/* binding */ globalHistory),
/* harmony export */   "navigate": () => (/* binding */ navigate),
/* harmony export */   "createHistory": () => (/* binding */ createHistory),
/* harmony export */   "createMemorySource": () => (/* binding */ createMemorySource)
/* harmony export */ });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getLocation = function getLocation(source) {
  var _source$location = source.location,
      search = _source$location.search,
      hash = _source$location.hash,
      href = _source$location.href,
      origin = _source$location.origin,
      protocol = _source$location.protocol,
      host = _source$location.host,
      hostname = _source$location.hostname,
      port = _source$location.port;
  var pathname = source.location.pathname;


  if (!pathname && href && canUseDOM) {
    var url = new URL(href);
    pathname = url.pathname;
  }

  return {
    pathname: encodeURI(decodeURI(pathname)),
    search: search,
    hash: hash,
    href: href,
    origin: origin,
    protocol: protocol,
    host: host,
    hostname: hostname,
    port: port,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;
  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({ location: location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      if (typeof to === "number") {
        source.history.go(to);
      } else {
        state = _extends({}, state, { key: Date.now() + "" });
        // try...catch iOS Safari limits to 100 pushState calls
        try {
          if (transitioning || replace) {
            source.history.replaceState(state, null, to);
          } else {
            source.history.pushState(state, null, to);
          }
        } catch (e) {
          source.location[replace ? "replace" : "assign"](to);
        }
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({ location: location, action: "PUSH" });
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  var searchIndex = initialPath.indexOf("?");
  var initialLocation = {
    pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
    search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
  };
  var index = 0;
  var stack = [initialLocation];
  var states = [null];

  return {
    get location() {
      return stack[index];
    },
    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search.length ? "?" + search : search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      },
      go: function go(to) {
        var newIndex = index + to;

        if (newIndex < 0 || newIndex > states.length - 1) {
          return;
        }

        index = newIndex;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var navigate = globalHistory.navigate;

////////////////////////////////////////////////////////////////////////////////



/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/es/lib/utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/es/lib/utils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startsWith": () => (/* binding */ startsWith),
/* harmony export */   "pick": () => (/* binding */ pick),
/* harmony export */   "match": () => (/* binding */ match),
/* harmony export */   "resolve": () => (/* binding */ resolve),
/* harmony export */   "insertParams": () => (/* binding */ insertParams),
/* harmony export */   "validateRedirect": () => (/* binding */ validateRedirect),
/* harmony export */   "shallowCompare": () => (/* binding */ shallowCompare)
/* harmony export */ });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! invariant */ "./node_modules/@gatsbyjs/reach-router/node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);


////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  true ? invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".") : 0 : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/lib/utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/lib/utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.shallowCompare = exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/@gatsbyjs/reach-router/node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  true ? (0, _invariant2.default)(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".") : 0 : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;
exports.shallowCompare = shallowCompare;

/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/node_modules/invariant/invariant.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/node_modules/invariant/invariant.js ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "development";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/@mdx-js/react/dist/esm.js":
/*!************************************************!*\
  !*** ./node_modules/@mdx-js/react/dist/esm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MDXContext": () => (/* binding */ MDXContext),
/* harmony export */   "MDXProvider": () => (/* binding */ MDXProvider),
/* harmony export */   "mdx": () => (/* binding */ createElement),
/* harmony export */   "useMDXComponents": () => (/* binding */ useMDXComponents),
/* harmony export */   "withMDXComponents": () => (/* binding */ withMDXComponents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement.apply(null, args);
}




/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = exports.ScrollContext = void 0;

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

exports.ScrollContext = _scrollHandler.ScrollHandler;

var _useScrollRestoration = __webpack_require__(/*! ./use-scroll-restoration */ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js");

exports.useScrollRestoration = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/scroll-handler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/scroll-handler.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _sessionStorage = __webpack_require__(/*! ./session-storage */ "./node_modules/gatsby-react-router-scroll/session-storage.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ScrollContext = /*#__PURE__*/React.createContext(new _sessionStorage.SessionStorage());
exports.ScrollContext = ScrollContext;
ScrollContext.displayName = "GatsbyScrollContext";

var ScrollHandler = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollHandler, _React$Component);

  function ScrollHandler() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this._stateStorage = new _sessionStorage.SessionStorage();
    _this._isTicking = false;
    _this._latestKnownScrollY = 0;

    _this.scrollListener = function () {
      _this._latestKnownScrollY = window.scrollY;

      if (!_this._isTicking) {
        _this._isTicking = true;
        requestAnimationFrame(_this._saveScroll.bind((0, _assertThisInitialized2.default)(_this)));
      }
    };

    _this.windowScroll = function (position, prevProps) {
      if (_this.shouldUpdateScroll(prevProps, _this.props)) {
        window.scrollTo(0, position);
      }
    };

    _this.scrollToHash = function (hash, prevProps) {
      var node = document.getElementById(hash.substring(1));

      if (node && _this.shouldUpdateScroll(prevProps, _this.props)) {
        node.scrollIntoView();
      }
    };

    _this.shouldUpdateScroll = function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing this._stateStorage.


      return shouldUpdateScroll.call((0, _assertThisInitialized2.default)(_this), prevRouterProps, routerProps);
    };

    return _this;
  }

  var _proto = ScrollHandler.prototype;

  _proto._saveScroll = function _saveScroll() {
    var key = this.props.location.key || null;

    if (key) {
      this._stateStorage.save(this.props.location, key, this._latestKnownScrollY);
    }

    this._isTicking = false;
  };

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
    var scrollPosition;
    var _this$props$location = this.props.location,
        key = _this$props$location.key,
        hash = _this$props$location.hash;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    if (scrollPosition) {
      this.windowScroll(scrollPosition, undefined);
    } else if (hash) {
      this.scrollToHash(decodeURI(hash), undefined);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props$location2 = this.props.location,
        hash = _this$props$location2.hash,
        key = _this$props$location2.key;
    var scrollPosition;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }
    /**  There are two pieces of state: the browser url and
     * history state which keeps track of scroll position
     * Native behaviour prescribes that we ought to restore scroll position
     * when a user navigates back in their browser (this is the `POP` action)
     * Currently, reach router has a bug that prevents this at https://github.com/reach/router/issues/228
     * So we _always_ stick to the url as a source of truth — if the url
     * contains a hash, we scroll to it
     */


    if (hash) {
      this.scrollToHash(decodeURI(hash), prevProps);
    } else {
      this.windowScroll(scrollPosition, prevProps);
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ScrollContext.Provider, {
      value: this._stateStorage
    }, this.props.children);
  };

  return ScrollHandler;
}(React.Component);

exports.ScrollHandler = ScrollHandler;
ScrollHandler.propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/session-storage.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/session-storage.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.SessionStorage = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";

var SessionStorage = /*#__PURE__*/function () {
  function SessionStorage() {}

  var _proto = SessionStorage.prototype;

  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);

    try {
      var value = window.sessionStorage.getItem(stateKey);
      return value ? JSON.parse(value) : 0;
    } catch (e) {
      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to access sessionStorage; sessionStorage is not available.");
      }

      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }

      return 0;
    }
  };

  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);

    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }

      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to save state in sessionStorage; sessionStorage is not available.");
      }
    }
  };

  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };

  return SessionStorage;
}();

exports.SessionStorage = SessionStorage;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js":
/*!***************************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

var _react = __webpack_require__(/*! react */ "react");

var _reachRouter = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/es/index.js");

function useScrollRestoration(identifier) {
  var location = (0, _reachRouter.useLocation)();
  var state = (0, _react.useContext)(_scrollHandler.ScrollContext);
  var ref = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    if (ref.current) {
      var position = state.read(location, identifier);
      ref.current.scrollTo(0, position || 0);
    }
  }, [location.key]);
  return {
    ref: ref,
    onScroll: function onScroll() {
      if (ref.current) {
        state.save(location, identifier, ref.current.scrollTop);
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/gatsby/dist/internal-plugins/bundle-optimisations/polyfills/object-assign.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/gatsby/dist/internal-plugins/bundle-optimisations/polyfills/object-assign.js ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = Object.assign;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./.cache/_this_is_virtual_fs_path_/$virtual/async-requires.js":
/*!*********************************************************************!*\
  !*** ./.cache/_this_is_virtual_fs_path_/$virtual/async-requires.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.components = {
  "component---cache-dev-404-page-js": () => __webpack_require__.e(/*! import() | component---cache-dev-404-page-js */ "component---cache-dev-404-page-js").then(__webpack_require__.bind(__webpack_require__, /*! ./../../dev-404-page.js */ "./.cache/dev-404-page.js")),
  "component---src-templates-docs-js": () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../src/templates/docs.js */ "./src/templates/docs.js"))
};

/***/ }),

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiRunner": () => (/* binding */ apiRunner),
/* harmony export */   "apiRunnerAsync": () => (/* binding */ apiRunnerAsync)
/* harmony export */ });
var plugins = [{
  name: 'gatsby-plugin-sitemap',
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-sitemap/gatsby-ssr */ "./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "output": "/sitemap",
    "createLinkInHead": true,
    "entryLimit": 45000,
    "query": "{ site { siteMetadata { siteUrl } } allSitePage { nodes { path } } }",
    "excludes": []
  }
}, {
  name: 'gatsby-plugin-layout',
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-layout/gatsby-ssr */ "./node_modules/gatsby-plugin-layout/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "component": "/usr/local/app/other/koa-booster-page/src/templates/docs.js"
  }
}, {
  name: 'gatsby-plugin-react-helmet',
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  name: 'gatsby-plugin-mdx',
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-mdx/gatsby-ssr */ "./node_modules/gatsby-plugin-mdx/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "gatsbyRemarkPlugins": [{
      "resolve": "/usr/local/app/other/koa-booster-page/node_modules/gatsby-remark-images",
      "id": "018bd99b-813c-5251-a110-8d9c1f629336",
      "name": "gatsby-remark-images",
      "version": "6.0.0",
      "modulePath": "/usr/local/app/other/koa-booster-page/node_modules/gatsby-remark-images/index.js",
      "pluginOptions": {
        "plugins": [],
        "maxWidth": 1035,
        "sizeByPixelDensity": true
      },
      "nodeAPIs": ["pluginOptionsSchema"],
      "browserAPIs": ["onRouteUpdate"],
      "ssrAPIs": []
    }, {
      "resolve": "/usr/local/app/other/koa-booster-page/node_modules/gatsby-remark-copy-linked-files",
      "id": "cf104666-f93f-5e9d-9c2e-1bd9003e1e14",
      "name": "gatsby-remark-copy-linked-files",
      "version": "5.0.0",
      "modulePath": "/usr/local/app/other/koa-booster-page/node_modules/gatsby-remark-copy-linked-files/index.js",
      "pluginOptions": {
        "plugins": []
      },
      "nodeAPIs": [],
      "browserAPIs": [],
      "ssrAPIs": []
    }],
    "extensions": [".mdx", ".md"],
    "defaultLayouts": {},
    "lessBabel": false,
    "remarkPlugins": [],
    "rehypePlugins": [],
    "mediaTypes": ["text/markdown", "text/x-markdown"],
    "root": "/usr/local/app/other/koa-booster-page"
  }
}, {
  name: 'gatsby-plugin-gtag',
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-gtag/gatsby-ssr */ "./node_modules/gatsby-plugin-gtag/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "trackingId": null,
    "head": true,
    "anonymize": false
  }
}];
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js");

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`;
  }

  throw err;
}

function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api);
  }

  const results = [];
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api];

    if (!apiFn) {
      return;
    }

    try {
      const result = apiFn(args, plugin.options);

      if (result && argTransform) {
        args = argTransform({
          args,
          result
        });
      } // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4


      if (typeof result !== `undefined`) {
        results.push(result);
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e);
    }
  });
  return results.length ? results : [defaultReturn];
}
async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api);
  }

  const results = [];

  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api];

    if (!apiFn) {
      continue;
    }

    try {
      const result = await apiFn(args, plugin.options);

      if (result && argTransform) {
        args = argTransform({
          args,
          result
        });
      } // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4


      if (typeof result !== `undefined`) {
        results.push(result);
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e);
    }
  }

  return results.length ? results : [defaultReturn];
}

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {ReactNode} $0.bodyComponent The React element to be rendered as the page body
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // Import React so that you can use JSX in HeadComponents
 * const React = require("react")
 *
 * const HtmlAttributes = {
 *   lang: "en"
 * }
 *
 * const HeadComponents = [
 *   <script key="my-script" src="https://gatsby.dev/my-script" />
 * ]
 *
 * const BodyAttributes = {
 *   "data-theme": "dark"
 * }
 *
 * exports.onRenderBody = ({
 *   setHeadComponents,
 *   setHtmlAttributes,
 *   setBodyAttributes
 * }, pluginOptions) => {
 *   setHtmlAttributes(HtmlAttributes)
 *   setHeadComponents(HeadComponents)
 *   setBodyAttributes(BodyAttributes)
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting Provider components, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to set up any Provider components that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTML)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");



function HTML(props) {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("html", props.htmlAttributes, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("head", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
    charSet: "utf-8"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("body", props.bodyAttributes, props.preBodyComponents, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    key: `body`,
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
}
HTML.propTypes = {
  htmlAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  headComponents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  bodyAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  preBodyComponents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  body: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  postBodyComponents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};

/***/ }),

/***/ "./.cache/develop-static-entry.js":
/*!****************************************!*\
  !*** ./.cache/develop-static-entry.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getPageChunk": () => (/* binding */ getPageChunk)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_runner_ssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");
/* harmony import */ var $virtual_async_requires__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! $virtual/async-requires */ "./.cache/_this_is_virtual_fs_path_/$virtual/async-requires.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* global BROWSER_ESM_ONLY */



 // import testRequireError from "./test-require-error"
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.



const testRequireError = (moduleName, err) => {
  const regex = new RegExp(`Error: Cannot find module\\s.${moduleName}`);
  const firstLine = err.toString().split(`\n`)[0];
  return regex.test(firstLine);
};

let Html;

try {
  Html = __webpack_require__(/*! ../src/html */ "./src/html.js");
} catch (err) {
  if (testRequireError(`../src/html`, err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    console.log(`There was an error requiring "src/html.js"\n\n`, err, `\n\n`);
    process.exit();
  }
}

Html = Html && Html.__esModule ? Html.default : Html;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  pagePath
}) => {
  let headComponents = [(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("meta", {
    key: "environment",
    name: "note",
    content: "environment=development"
  })];
  let htmlAttributes = {};
  let bodyAttributes = {};
  let preBodyComponents = [];
  let postBodyComponents = [];
  let bodyProps = {};
  let htmlStr;

  const setHeadComponents = components => {
    headComponents = headComponents.concat(components);
  };

  const setHtmlAttributes = attributes => {
    htmlAttributes = lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()(htmlAttributes, attributes);
  };

  const setBodyAttributes = attributes => {
    bodyAttributes = lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()(bodyAttributes, attributes);
  };

  const setPreBodyComponents = components => {
    preBodyComponents = preBodyComponents.concat(components);
  };

  const setPostBodyComponents = components => {
    postBodyComponents = postBodyComponents.concat(components);
  };

  const setBodyProps = props => {
    bodyProps = lodash_merge__WEBPACK_IMPORTED_MODULE_1___default()({}, bodyProps, props);
  };

  const getHeadComponents = () => headComponents;

  const replaceHeadComponents = components => {
    headComponents = components;
  };

  const getPreBodyComponents = () => preBodyComponents;

  const replacePreBodyComponents = components => {
    preBodyComponents = components;
  };

  const getPostBodyComponents = () => postBodyComponents;

  const replacePostBodyComponents = components => {
    postBodyComponents = components;
  };

  (0,_api_runner_ssr__WEBPACK_IMPORTED_MODULE_4__.apiRunner)(`onRenderBody`, {
    setHeadComponents,
    setHtmlAttributes,
    setBodyAttributes,
    setPreBodyComponents,
    setPostBodyComponents,
    setBodyProps,
    pathname: pagePath
  });
  (0,_api_runner_ssr__WEBPACK_IMPORTED_MODULE_4__.apiRunner)(`onPreRenderHTML`, {
    getHeadComponents,
    replaceHeadComponents,
    getPreBodyComponents,
    replacePreBodyComponents,
    getPostBodyComponents,
    replacePostBodyComponents,
    pathname: pagePath
  });
  const htmlElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Html, _objectSpread(_objectSpread({}, bodyProps), {}, {
    body: ``,
    headComponents: headComponents.concat([(0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("script", {
      key: `io`,
      src: "/socket.io/socket.io.js"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("link", {
      key: "styles",
      rel: "stylesheet",
      href: "/commons.css"
    })]),
    htmlAttributes,
    bodyAttributes,
    preBodyComponents,
    postBodyComponents: postBodyComponents.concat([ true && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("script", {
      key: `polyfill`,
      src: "/polyfill.js",
      noModule: true
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("script", {
      key: `framework`,
      src: "/framework.js"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("script", {
      key: `commons`,
      src: "/commons.js"
    })].filter(Boolean))
  }));
  htmlStr = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToStaticMarkup)(htmlElement);
  htmlStr = `<!DOCTYPE html>${htmlStr}`;
  return htmlStr;
});
function getPageChunk({
  componentChunkName
}) {
  return $virtual_async_requires__WEBPACK_IMPORTED_MODULE_5__.components[componentChunkName]();
}

/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");

const emitter = (0,mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setMatchPaths": () => (/* binding */ setMatchPaths),
/* harmony export */   "findMatchPath": () => (/* binding */ findMatchPath),
/* harmony export */   "grabMatchParams": () => (/* binding */ grabMatchParams),
/* harmony export */   "findPath": () => (/* binding */ findPath),
/* harmony export */   "cleanPath": () => (/* binding */ cleanPath)
/* harmony export */ });
/* harmony import */ var _gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gatsbyjs/reach-router/lib/utils */ "./node_modules/@gatsbyjs/reach-router/lib/utils.js");
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
/* harmony import */ var _redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect-utils.js */ "./.cache/redirect-utils.js");




const pathCache = new Map();
let matchPaths = [];

const trimPathname = rawPathname => {
  const pathname = decodeURIComponent(rawPathname); // Remove the pathPrefix from the pathname.

  const trimmedPathname = (0,_strip_prefix__WEBPACK_IMPORTED_MODULE_1__["default"])(pathname, decodeURIComponent("")) // Remove any hashfragment
  .split(`#`)[0];
  return trimmedPathname;
};

function absolutify(path) {
  // If it's already absolute, return as-is
  if (path.startsWith(`/`) || path.startsWith(`https://`) || path.startsWith(`http://`)) {
    return path;
  } // Calculate path relative to current location, adding a trailing slash to
  // match behavior of @reach/router


  return new URL(path, window.location.href + (window.location.href.endsWith(`/`) ? `` : `/`)).pathname;
}
/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */


const setMatchPaths = value => {
  matchPaths = value;
};
/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */

const findMatchPath = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);

  if (path) {
    return (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path.route.originalPath);
  }

  return null;
};
/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */

const grabMatchParams = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);

  if (path) {
    return path.params;
  }

  return {};
}; // Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`

const findPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));

  if (pathCache.has(trimmedPathname)) {
    return pathCache.get(trimmedPathname);
  }

  const redirect = (0,_redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__.maybeGetBrowserRedirect)(rawPathname);

  if (redirect) {
    return findPath(redirect.toPath);
  }

  let foundPath = findMatchPath(trimmedPathname);

  if (!foundPath) {
    foundPath = cleanPath(rawPathname);
  }

  pathCache.set(trimmedPathname, foundPath);
  return foundPath;
};
/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */

const cleanPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));
  let foundPath = trimmedPathname;

  if (foundPath === `/index.html`) {
    foundPath = `/`;
  }

  foundPath = (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(foundPath);
  return foundPath;
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "withAssetPrefix": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.withAssetPrefix),
/* harmony export */   "withPrefix": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.withPrefix),
/* harmony export */   "graphql": () => (/* binding */ graphql),
/* harmony export */   "parsePath": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.parsePath),
/* harmony export */   "navigate": () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_2__.navigate),
/* harmony export */   "useScrollRestoration": () => (/* reexport safe */ gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__.useScrollRestoration),
/* harmony export */   "StaticQueryContext": () => (/* binding */ StaticQueryContext),
/* harmony export */   "StaticQuery": () => (/* binding */ StaticQuery),
/* harmony export */   "PageRenderer": () => (/* reexport default from dynamic */ _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default.a),
/* harmony export */   "useStaticQuery": () => (/* binding */ useStaticQuery),
/* harmony export */   "prefetchPathname": () => (/* binding */ prefetchPathname)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-react-router-scroll */ "./node_modules/gatsby-react-router-scroll/index.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");







const prefetchPathname = _loader__WEBPACK_IMPORTED_MODULE_5__["default"].enqueue;
const StaticQueryContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});

function StaticQueryDataRenderer({
  staticQueryData,
  data,
  query,
  render
}) {
  const finalData = data ? data.data : staticQueryData[query] && staticQueryData[query].data;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, finalData && render(finalData), !finalData && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", null, "Loading (StaticQuery)"));
}

const StaticQuery = props => {
  const {
    data,
    query,
    render,
    children
  } = props;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(StaticQueryContext.Consumer, null, staticQueryData => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(StaticQueryDataRenderer, {
    data: data,
    query: query,
    render: render || children,
    staticQueryData: staticQueryData
  }));
};

const useStaticQuery = query => {
  var _context$query;

  if (typeof (react__WEBPACK_IMPORTED_MODULE_0___default().useContext) !== `function` && "development" === `development`) {
    throw new Error(`You're likely using a version of React that doesn't support Hooks\n` + `Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);
  }

  const context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(StaticQueryContext); // query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
  // to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
  // catch the misuse of the API and give proper direction

  if (isNaN(Number(query))) {
    throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:

import { useStaticQuery, graphql } from 'gatsby';

useStaticQuery(graphql\`${query}\`);
`);
  }

  if ((_context$query = context[query]) !== null && _context$query !== void 0 && _context$query.data) {
    return context[query].data;
  } else {
    throw new Error(`The result of this StaticQuery could not be fetched.\n\n` + `This is likely a bug in Gatsby and if refreshing the page does not fix it, ` + `please open an issue in https://github.com/gatsbyjs/gatsby/issues`);
  }
};

StaticQuery.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  render: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};

function graphql() {
  throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls ` + `are supposed to only be evaluated at compile time, and then compiled away. ` + `Unfortunately, something went wrong and the query was left in the compiled code.\n\n` + `Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);
}



/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageResourceStatus": () => (/* binding */ PageResourceStatus),
/* harmony export */   "BaseLoader": () => (/* binding */ BaseLoader),
/* harmony export */   "ProdLoader": () => (/* binding */ ProdLoader),
/* harmony export */   "setLoader": () => (/* binding */ setLoader),
/* harmony export */   "publicLoader": () => (/* binding */ publicLoader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticQueryResults": () => (/* binding */ getStaticQueryResults)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/**
 * Available resource loading statuses
 */

const PageResourceStatus = {
  /**
   * At least one of critical resources failed to load
   */
  Error: `error`,

  /**
   * Resources loaded successfully
   */
  Success: `success`
};

const preferDefault = m => m && m.default || m;

const stripSurroundingSlashes = s => {
  s = s[0] === `/` ? s.slice(1) : s;
  s = s.endsWith(`/`) ? s.slice(0, -1) : s;
  return s;
};

const createPageDataUrl = rawPath => {
  const [path, maybeSearch] = rawPath.split(`?`);
  const fixedPath = path === `/` ? `index` : stripSurroundingSlashes(path);
  return `${""}/page-data/${fixedPath}/page-data.json${maybeSearch ? `?${maybeSearch}` : ``}`;
};

function doFetch(url, method = `GET`) {
  return new Promise(resolve => {
    const req = new XMLHttpRequest();
    req.open(method, url, true);

    req.onreadystatechange = () => {
      if (req.readyState == 4) {
        resolve(req);
      }
    };

    req.send(null);
  });
}

const doesConnectionSupportPrefetch = () => {
  if (`connection` in navigator && typeof navigator.connection !== `undefined`) {
    if ((navigator.connection.effectiveType || ``).includes(`2g`)) {
      return false;
    }

    if (navigator.connection.saveData) {
      return false;
    }
  }

  return true;
};

const toPageResources = (pageData, component = null) => {
  const page = {
    componentChunkName: pageData.componentChunkName,
    path: pageData.path,
    webpackCompilationHash: pageData.webpackCompilationHash,
    matchPath: pageData.matchPath,
    staticQueryHashes: pageData.staticQueryHashes,
    getServerDataError: pageData.getServerDataError
  };
  return {
    component,
    json: pageData.result,
    page
  };
};

class BaseLoader {
  constructor(loadComponent, matchPaths) {
    this.inFlightNetworkRequests = new Map();
    // Map of pagePath -> Page. Where Page is an object with: {
    //   status: PageResourceStatus.Success || PageResourceStatus.Error,
    //   payload: PageResources, // undefined if PageResourceStatus.Error
    // }
    // PageResources is {
    //   component,
    //   json: pageData.result,
    //   page: {
    //     componentChunkName,
    //     path,
    //     webpackCompilationHash,
    //     staticQueryHashes
    //   },
    //   staticQueryResults
    // }
    this.pageDb = new Map();
    this.inFlightDb = new Map();
    this.staticQueryDb = {};
    this.pageDataDb = new Map();
    this.isPrefetchQueueRunning = false;
    this.prefetchQueued = [];
    this.prefetchTriggered = new Set();
    this.prefetchCompleted = new Set();
    this.loadComponent = loadComponent;
    (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.setMatchPaths)(matchPaths);
  }

  memoizedGet(url) {
    let inFlightPromise = this.inFlightNetworkRequests.get(url);

    if (!inFlightPromise) {
      inFlightPromise = doFetch(url, `GET`);
      this.inFlightNetworkRequests.set(url, inFlightPromise);
    } // Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox


    return inFlightPromise.then(response => {
      this.inFlightNetworkRequests.delete(url);
      return response;
    }).catch(err => {
      this.inFlightNetworkRequests.delete(url);
      throw err;
    });
  }

  setApiRunner(apiRunner) {
    this.apiRunner = apiRunner;
    this.prefetchDisabled = apiRunner(`disableCorePrefetching`).some(a => a);
  }

  fetchPageDataJson(loadObj) {
    const {
      pagePath,
      retries = 0
    } = loadObj;
    const url = createPageDataUrl(pagePath);
    return this.memoizedGet(url).then(req => {
      const {
        status,
        responseText
      } = req; // Handle 200

      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);

          if (jsonPayload.path === undefined) {
            throw new Error(`not a valid pageData response`);
          }

          const maybeSearch = pagePath.split(`?`)[1];

          if (maybeSearch && !jsonPayload.path.includes(maybeSearch)) {
            jsonPayload.path += `?${maybeSearch}`;
          }

          return Object.assign(loadObj, {
            status: PageResourceStatus.Success,
            payload: jsonPayload
          });
        } catch (err) {// continue regardless of error
        }
      } // Handle 404


      if (status === 404 || status === 200) {
        // If the request was for a 404/500 page and it doesn't exist, we're done
        if (pagePath === `/404.html` || pagePath === `/500.html`) {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Error
          });
        } // Need some code here to cache the 404 request. In case
        // multiple loadPageDataJsons result in 404s


        return this.fetchPageDataJson(Object.assign(loadObj, {
          pagePath: `/404.html`,
          notFound: true
        }));
      } // handle 500 response (Unrecoverable)


      if (status === 500) {
        return this.fetchPageDataJson(Object.assign(loadObj, {
          pagePath: `/500.html`,
          internalServerError: true
        }));
      } // Handle everything else, including status === 0, and 503s. Should retry


      if (retries < 3) {
        return this.fetchPageDataJson(Object.assign(loadObj, {
          retries: retries + 1
        }));
      } // Retried 3 times already, result is an error.


      return Object.assign(loadObj, {
        status: PageResourceStatus.Error
      });
    });
  }

  loadPageDataJson(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);

    if (this.pageDataDb.has(pagePath)) {
      const pageData = this.pageDataDb.get(pagePath);

      if (true) {
        return Promise.resolve(pageData);
      }
    }

    return this.fetchPageDataJson({
      pagePath
    }).then(pageData => {
      this.pageDataDb.set(pagePath, pageData);
      return pageData;
    });
  }

  findMatchPath(rawPath) {
    return (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findMatchPath)(rawPath);
  } // TODO check all uses of this and whether they use undefined for page resources not exist


  loadPage(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);

    if (this.pageDb.has(pagePath)) {
      const page = this.pageDb.get(pagePath);

      if (true) {
        if (page.error) {
          return {
            error: page.error,
            status: page.status
          };
        }

        return Promise.resolve(page.payload);
      }
    }

    if (this.inFlightDb.has(pagePath)) {
      return this.inFlightDb.get(pagePath);
    }

    const inFlightPromise = Promise.all([this.loadAppData(), this.loadPageDataJson(pagePath)]).then(allData => {
      const result = allData[1];

      if (result.status === PageResourceStatus.Error) {
        return {
          status: PageResourceStatus.Error
        };
      }

      let pageData = result.payload;
      const {
        componentChunkName,
        staticQueryHashes = []
      } = pageData;
      const finalResult = {};
      const componentChunkPromise = this.loadComponent(componentChunkName).then(component => {
        finalResult.createdAt = new Date();
        let pageResources;

        if (!component || component instanceof Error) {
          finalResult.status = PageResourceStatus.Error;
          finalResult.error = component;
        } else {
          finalResult.status = PageResourceStatus.Success;

          if (result.notFound === true) {
            finalResult.notFound = true;
          }

          pageData = Object.assign(pageData, {
            webpackCompilationHash: allData[0] ? allData[0].webpackCompilationHash : ``
          });
          pageResources = toPageResources(pageData, component);
        } // undefined if final result is an error


        return pageResources;
      });
      const staticQueryBatchPromise = Promise.all(staticQueryHashes.map(staticQueryHash => {
        // Check for cache in case this static query result has already been loaded
        if (this.staticQueryDb[staticQueryHash]) {
          const jsonPayload = this.staticQueryDb[staticQueryHash];
          return {
            staticQueryHash,
            jsonPayload
          };
        }

        return this.memoizedGet(`${""}/page-data/sq/d/${staticQueryHash}.json`).then(req => {
          const jsonPayload = JSON.parse(req.responseText);
          return {
            staticQueryHash,
            jsonPayload
          };
        }).catch(() => {
          throw new Error(`We couldn't load "${""}/page-data/sq/d/${staticQueryHash}.json"`);
        });
      })).then(staticQueryResults => {
        const staticQueryResultsMap = {};
        staticQueryResults.forEach(({
          staticQueryHash,
          jsonPayload
        }) => {
          staticQueryResultsMap[staticQueryHash] = jsonPayload;
          this.staticQueryDb[staticQueryHash] = jsonPayload;
        });
        return staticQueryResultsMap;
      });
      return Promise.all([componentChunkPromise, staticQueryBatchPromise]).then(([pageResources, staticQueryResults]) => {
        let payload;

        if (pageResources) {
          payload = _objectSpread(_objectSpread({}, pageResources), {}, {
            staticQueryResults
          });
          finalResult.payload = payload;
          _emitter__WEBPACK_IMPORTED_MODULE_2__["default"].emit(`onPostLoadPageResources`, {
            page: payload,
            pageResources: payload
          });
        }

        this.pageDb.set(pagePath, finalResult);

        if (finalResult.error) {
          return {
            error: finalResult.error,
            status: finalResult.status
          };
        }

        return payload;
      }) // when static-query fail to load we throw a better error
      .catch(err => {
        return {
          error: err,
          status: PageResourceStatus.Error
        };
      });
    });
    inFlightPromise.then(() => {
      this.inFlightDb.delete(pagePath);
    }).catch(error => {
      this.inFlightDb.delete(pagePath);
      throw error;
    });
    this.inFlightDb.set(pagePath, inFlightPromise);
    return inFlightPromise;
  } // returns undefined if the page does not exists in cache


  loadPageSync(rawPath, options = {}) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);

    if (this.pageDb.has(pagePath)) {
      const pageData = this.pageDb.get(pagePath);

      if (pageData.payload) {
        return pageData.payload;
      }

      if (options !== null && options !== void 0 && options.withErrorDetails) {
        return {
          error: pageData.error,
          status: pageData.status
        };
      }
    }

    return undefined;
  }

  shouldPrefetch(pagePath) {
    // Skip prefetching if we know user is on slow or constrained connection
    if (!doesConnectionSupportPrefetch()) {
      return false;
    } // Check if the page exists.


    if (this.pageDb.has(pagePath)) {
      return false;
    }

    return true;
  }

  prefetch(pagePath) {
    if (!this.shouldPrefetch(pagePath)) {
      return {
        then: resolve => resolve(false),
        abort: () => {}
      };
    }

    if (this.prefetchTriggered.has(pagePath)) {
      return {
        then: resolve => resolve(true),
        abort: () => {}
      };
    }

    const defer = {
      resolve: null,
      reject: null,
      promise: null
    };
    defer.promise = new Promise((resolve, reject) => {
      defer.resolve = resolve;
      defer.reject = reject;
    });
    this.prefetchQueued.push([pagePath, defer]);
    const abortC = new AbortController();
    abortC.signal.addEventListener(`abort`, () => {
      const index = this.prefetchQueued.findIndex(([p]) => p === pagePath); // remove from the queue

      if (index !== -1) {
        this.prefetchQueued.splice(index, 1);
      }
    });

    if (!this.isPrefetchQueueRunning) {
      this.isPrefetchQueueRunning = true;
      setTimeout(() => {
        this._processNextPrefetchBatch();
      }, 3000);
    }

    return {
      then: (resolve, reject) => defer.promise.then(resolve, reject),
      abort: abortC.abort.bind(abortC)
    };
  }

  _processNextPrefetchBatch() {
    const idleCallback = window.requestIdleCallback || (cb => setTimeout(cb, 0));

    idleCallback(() => {
      const toPrefetch = this.prefetchQueued.splice(0, 4);
      const prefetches = Promise.all(toPrefetch.map(([pagePath, dPromise]) => {
        // Tell plugins with custom prefetching logic that they should start
        // prefetching this path.
        if (!this.prefetchTriggered.has(pagePath)) {
          this.apiRunner(`onPrefetchPathname`, {
            pathname: pagePath
          });
          this.prefetchTriggered.add(pagePath);
        } // If a plugin has disabled core prefetching, stop now.


        if (this.prefetchDisabled) {
          return dPromise.resolve(false);
        }

        return this.doPrefetch((0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(pagePath)).then(() => {
          if (!this.prefetchCompleted.has(pagePath)) {
            this.apiRunner(`onPostPrefetchPathname`, {
              pathname: pagePath
            });
            this.prefetchCompleted.add(pagePath);
          }

          dPromise.resolve(true);
        });
      }));

      if (this.prefetchQueued.length) {
        prefetches.then(() => {
          setTimeout(() => {
            this._processNextPrefetchBatch();
          }, 3000);
        });
      } else {
        this.isPrefetchQueueRunning = false;
      }
    });
  }

  doPrefetch(pagePath) {
    const pageDataUrl = createPageDataUrl(pagePath);
    return (0,_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])(pageDataUrl, {
      crossOrigin: `anonymous`,
      as: `fetch`
    }).then(() => // This was just prefetched, so will return a response from
    // the cache instead of making another request to the server
    this.loadPageDataJson(pagePath));
  }

  hovering(rawPath) {
    this.loadPage(rawPath);
  }

  getResourceURLsForPathname(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    const page = this.pageDataDb.get(pagePath);

    if (page) {
      const pageResources = toPageResources(page.payload);
      return [...createComponentUrls(pageResources.page.componentChunkName), createPageDataUrl(pagePath)];
    } else {
      return null;
    }
  }

  isPageNotFound(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    const page = this.pageDb.get(pagePath);
    return !page || page.notFound;
  }

  loadAppData(retries = 0) {
    return this.memoizedGet(`${""}/page-data/app-data.json`).then(req => {
      const {
        status,
        responseText
      } = req;
      let appData;

      if (status !== 200 && retries < 3) {
        // Retry 3 times incase of non-200 responses
        return this.loadAppData(retries + 1);
      } // Handle 200


      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);

          if (jsonPayload.webpackCompilationHash === undefined) {
            throw new Error(`not a valid app-data response`);
          }

          appData = jsonPayload;
        } catch (err) {// continue regardless of error
        }
      }

      return appData;
    });
  }

}

const createComponentUrls = componentChunkName => (window.___chunkMapping[componentChunkName] || []).map(chunk => "" + chunk);

class ProdLoader extends BaseLoader {
  constructor(asyncRequires, matchPaths, pageData) {
    const loadComponent = chunkName => {
      if (!asyncRequires.components[chunkName]) {
        throw new Error(`We couldn't find the correct component chunk with the name ${chunkName}`);
      }

      return asyncRequires.components[chunkName]().then(preferDefault) // loader will handle the case when component is error
      .catch(err => err);
    };

    super(loadComponent, matchPaths);

    if (pageData) {
      this.pageDataDb.set((0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(pageData.path), {
        pagePath: pageData.path,
        payload: pageData,
        status: `success`
      });
    }
  }

  doPrefetch(pagePath) {
    return super.doPrefetch(pagePath).then(result => {
      if (result.status !== PageResourceStatus.Success) {
        return Promise.resolve();
      }

      const pageData = result.payload;
      const chunkName = pageData.componentChunkName;
      const componentUrls = createComponentUrls(chunkName);
      return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])).then(() => pageData);
    });
  }

  loadPageDataJson(rawPath) {
    return super.loadPageDataJson(rawPath).then(data => {
      if (data.notFound) {
        // check if html file exist using HEAD request:
        // if it does we should navigate to it instead of showing 404
        return doFetch(rawPath, `HEAD`).then(req => {
          if (req.status === 200) {
            // page (.html file) actually exist (or we asked for 404 )
            // returning page resources status as errored to trigger
            // regular browser navigation to given page
            return {
              status: PageResourceStatus.Error
            };
          } // if HEAD request wasn't 200, return notFound result
          // and show 404 page


          return data;
        });
      }

      return data;
    });
  }

}
let instance;
const setLoader = _loader => {
  instance = _loader;
};
const publicLoader = {
  enqueue: rawPath => instance.prefetch(rawPath),
  // Real methods
  getResourceURLsForPathname: rawPath => instance.getResourceURLsForPathname(rawPath),
  loadPage: rawPath => instance.loadPage(rawPath),
  // TODO add deprecation to v4 so people use withErrorDetails and then we can remove in v5 and change default behaviour
  loadPageSync: (rawPath, options = {}) => instance.loadPageSync(rawPath, options),
  prefetch: rawPath => instance.prefetch(rawPath),
  isPageNotFound: rawPath => instance.isPageNotFound(rawPath),
  hovering: rawPath => instance.hovering(rawPath),
  loadAppData: () => instance.loadAppData()
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (publicLoader);
function getStaticQueryResults() {
  if (instance) {
    return instance.staticQueryDb;
  } else {
    return {};
  }
}

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pathAndSearch => {
  if (pathAndSearch === undefined) {
    return pathAndSearch;
  }

  let [path, search = ``] = pathAndSearch.split(`?`);

  if (search) {
    search = `?` + search;
  }

  if (path === `/`) {
    return `/` + search;
  }

  if (path.charAt(path.length - 1) === `/`) {
    return path.slice(0, -1) + search;
  }

  return path + search;
});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const support = function (feature) {
  if (typeof document === `undefined`) {
    return false;
  }

  const fakeLink = document.createElement(`link`);

  try {
    if (fakeLink.relList && typeof fakeLink.relList.supports === `function`) {
      return fakeLink.relList.supports(feature);
    }
  } catch (err) {
    return false;
  }

  return false;
};

const linkPrefetchStrategy = function (url, options) {
  return new Promise((resolve, reject) => {
    if (typeof document === `undefined`) {
      reject();
      return;
    }

    const link = document.createElement(`link`);
    link.setAttribute(`rel`, `prefetch`);
    link.setAttribute(`href`, url);
    Object.keys(options).forEach(key => {
      link.setAttribute(key, options[key]);
    });
    link.onload = resolve;
    link.onerror = reject;
    const parentElement = document.getElementsByTagName(`head`)[0] || document.getElementsByName(`script`)[0].parentNode;
    parentElement.appendChild(link);
  });
};

const xhrPrefetchStrategy = function (url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(`GET`, url, true);

    req.onload = () => {
      if (req.status === 200) {
        resolve();
      } else {
        reject();
      }
    };

    req.send(null);
  });
};

const supportedPrefetchStrategy = support(`prefetch`) ? linkPrefetchStrategy : xhrPrefetchStrategy;
const preFetched = {};

const prefetch = function (url, options) {
  return new Promise(resolve => {
    if (preFetched[url]) {
      resolve();
      return;
    }

    supportedPrefetchStrategy(url, options).then(() => {
      resolve();
      preFetched[url] = true;
    }).catch(() => {}); // 404s are logged to the console anyway
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/***/ ((module) => {

const preferDefault = m => m && m.default || m;

if (false) {} else if (false) {} else {
  module.exports = () => null;
}

/***/ }),

/***/ "./.cache/react-lifecycles-compat.js":
/*!*******************************************!*\
  !*** ./.cache/react-lifecycles-compat.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.polyfill = Component => Component;

/***/ }),

/***/ "./.cache/redirect-utils.js":
/*!**********************************!*\
  !*** ./.cache/redirect-utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maybeGetBrowserRedirect": () => (/* binding */ maybeGetBrowserRedirect)
/* harmony export */ });
/* harmony import */ var _redirects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirects.json */ "./.cache/redirects.json");
 // Convert to a map for faster lookup in maybeRedirect()

const redirectMap = new Map();
const redirectIgnoreCaseMap = new Map();
_redirects_json__WEBPACK_IMPORTED_MODULE_0__.forEach(redirect => {
  if (redirect.ignoreCase) {
    redirectIgnoreCaseMap.set(redirect.fromPath, redirect);
  } else {
    redirectMap.set(redirect.fromPath, redirect);
  }
});
function maybeGetBrowserRedirect(pathname) {
  let redirect = redirectMap.get(pathname);

  if (!redirect) {
    redirect = redirectIgnoreCaseMap.get(pathname.toLowerCase());
  }

  return redirect;
}

/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stripPrefix)
/* harmony export */ });
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */
function stripPrefix(str, prefix = ``) {
  if (!prefix) {
    return str;
  }

  if (str === prefix) {
    return `/`;
  }

  if (str.startsWith(`${prefix}/`)) {
    return str.slice(prefix.length);
  }

  return str;
}

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((module) => {

const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://hasura.io',
    gaTrackingId: null,
    trailingSlash: false
  },
  header: {
    logo: 'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',
    logoLink: 'https://hasura.io/learn/',
    title: "<a href='https://hasura.io/learn/'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/hasura/gatsby-gitbook-boilerplate',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{
      text: '',
      link: ''
    }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: ({}).GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: ({}).GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: ({}).ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: ['/introduction', // add trailing slash if enabled above
    '/codeblock'],
    collapsedNav: ['/codeblock' // add trailing slash if enabled above
    ],
    links: [{
      text: 'Hasura',
      link: 'https://hasura.io'
    }],
    frontline: false,
    ignoreIndex: true,
    title: "<a href='https://hasura.io/learn/'>graphql </a><div class='greenCircle'></div><a href='https://hasura.io/learn/graphql/react/introduction/'>react</a>"
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Hasura',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg'
  },
  pwa: {
    enabled: false,
    // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [{
        src: 'src/pwa-512.png',
        sizes: `512x512`,
        type: `image/png`
      }]
    }
  }
};
module.exports = config;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.withAssetPrefix = withAssetPrefix;
exports.navigate = exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reachRouter = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/es/index.js");

var _utils = __webpack_require__(/*! @gatsbyjs/reach-router/lib/utils */ "./node_modules/@gatsbyjs/reach-router/lib/utils.js");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;
var _excluded = ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace", "_location"];

var isAbsolutePath = function isAbsolutePath(path) {
  return path === null || path === void 0 ? void 0 : path.startsWith("/");
};

function withPrefix(path, prefix) {
  var _ref, _prefix;

  if (prefix === void 0) {
    prefix = getGlobalBasePrefix();
  }

  if (!isLocalLink(path)) {
    return path;
  }

  if (path.startsWith("./") || path.startsWith("../")) {
    return path;
  }

  var base = (_ref = (_prefix = prefix) !== null && _prefix !== void 0 ? _prefix : getGlobalPathPrefix()) !== null && _ref !== void 0 ? _ref : "/";
  return "" + (base !== null && base !== void 0 && base.endsWith("/") ? base.slice(0, -1) : base) + (path.startsWith("/") ? path : "/" + path);
} // These global values are wrapped in typeof clauses to ensure the values exist.
// This is especially problematic in unit testing of this component.


var getGlobalPathPrefix = function getGlobalPathPrefix() {
  return  true ?  true ? "" : 0 : 0;
};

var getGlobalBasePrefix = function getGlobalBasePrefix() {
  return  true ?  true ? "" : 0 : 0;
};

var isLocalLink = function isLocalLink(path) {
  return path && !path.startsWith("http://") && !path.startsWith("https://") && !path.startsWith("//");
};

function withAssetPrefix(path) {
  return withPrefix(path, getGlobalPathPrefix());
}

function absolutify(path, current) {
  // If it's already absolute, return as-is
  if (isAbsolutePath(path)) {
    return path;
  }

  return (0, _utils.resolve)(path, current);
}

var rewriteLinkPath = function rewriteLinkPath(path, relativeTo) {
  if (typeof path === "number") {
    return path;
  }

  if (!isLocalLink(path)) {
    return path;
  }

  return isAbsolutePath(path) ? withPrefix(path) : absolutify(path, relativeTo);
};

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool
}; // Set up IntersectionObserver

var createIntersectionObserver = function createIntersectionObserver(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        cb(entry.isIntersecting || entry.intersectionRatio > 0);
      }
    });
  }); // Add element to the observer

  io.observe(el);
  return {
    instance: io,
    el: el
  };
};

function GatsbyLinkLocationWrapper(props) {
  return /*#__PURE__*/_react.default.createElement(_reachRouter.Location, null, function (_ref2) {
    var location = _ref2.location;
    return /*#__PURE__*/_react.default.createElement(GatsbyLink, (0, _extends2.default)({}, props, {
      _location: location
    }));
  });
}

var GatsbyLink = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    _this.defaultGetProps = function (_ref3) {
      var isPartiallyCurrent = _ref3.isPartiallyCurrent,
          isCurrent = _ref3.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    };

    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.abortPrefetch = null;
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto._prefetch = function _prefetch() {
    var currentPath = window.location.pathname + window.location.search; // reach router should have the correct state

    if (this.props._location && this.props._location.pathname) {
      currentPath = this.props._location.pathname + this.props._location.search;
    }

    var rewrittenPath = rewriteLinkPath(this.props.to, currentPath);
    var parsed = (0, _parsePath.parsePath)(rewrittenPath);
    var newPathName = parsed.pathname + parsed.search; // Prefetch is used to speed up next navigations. When you use it on the current navigation,
    // there could be a race-condition where Chrome uses the stale data instead of waiting for the network to complete

    if (currentPath !== newPathName) {
      return ___loader.enqueue(newPathName);
    }

    return undefined;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.io) {
      return;
    }

    var _this$io = this.io,
        instance = _this$io.instance,
        el = _this$io.el;

    if (this.abortPrefetch) {
      this.abortPrefetch.abort();
    }

    instance.unobserve(el);
    instance.disconnect();
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && Object.prototype.hasOwnProperty.call(this.props.innerRef, "current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      this.io = createIntersectionObserver(ref, function (inViewPort) {
        if (inViewPort) {
          _this2.abortPrefetch = _this2._prefetch();
        } else {
          if (_this2.abortPrefetch) {
            _this2.abortPrefetch.abort();
          }
        }
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        _location = _this$props._location,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);

    if ( true && !isLocalLink(to)) {
      console.warn("External link " + to + " was detected in a Link component. Use the Link component only for internal links. See: https://gatsby.dev/internal-links");
    }

    var prefixedTo = rewriteLinkPath(to, _location.pathname);

    if (!isLocalLink(prefixedTo)) {
      return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
        href: prefixedTo
      }, rest));
    }

    return /*#__PURE__*/_react.default.createElement(_reachRouter.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        var parsed = (0, _parsePath.parsePath)(prefixedTo);

        ___loader.hovering(parsed.pathname + parsed.search);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault();
          var shouldReplace = replace;

          var isCurrent = encodeURI(prefixedTo) === _location.pathname;

          if (typeof replace !== "boolean" && isCurrent) {
            shouldReplace = true;
          } // Make sure the necessary scripts and data are
          // loaded before continuing.


          window.___navigate(prefixedTo, {
            state: state,
            replace: shouldReplace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool,
  state: _propTypes.default.object
});

var _default = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(GatsbyLinkLocationWrapper, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports["default"] = _default;

var navigate = function navigate(to, options) {
  window.___navigate(rewriteLinkPath(to, window.location.pathname), options);
};

exports.navigate = navigate;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-gtag/gatsby-ssr.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-gtag/gatsby-ssr.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var GTAG_SRC = 'https://www.googletagmanager.com/gtag/js';

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      setPostBodyComponents = _ref.setPostBodyComponents;
  var isPluginEnabled = stringToBool(({}).GATSBY_GTAG_DEBUG) || "development" === 'production';

  if (!pluginOptions.trackingId || !isPluginEnabled) {
    return null;
  }

  var anonymize = pluginOptions.anonymize || false;

  var gtagScript = _react2.default.createElement('script', {
    async: true,
    key: 'gatsby-plugin-gtag-gtag-js',
    src: GTAG_SRC + '?id=' + pluginOptions.trackingId
  });

  var scriptStr = '\n    window.GATSBY_GTAG_PLUGIN_GA_TRACKING_ID = (\n      \'' + pluginOptions.trackingId + '\'\n    );\n    window.GATSBY_GTAG_PLUGIN_ANONYMIZE = ' + anonymize + ';\n\n    var options = {\n      send_page_view: false\n    };\n    if (' + anonymize + ') {\n      options.anonymize_ip = true;\n    }\n\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    window.gtag = gtag;\n    gtag(\'js\', new Date());\n    gtag(\'config\', \'' + pluginOptions.trackingId + '\', options);\n  ';

  var trackScript = _react2.default.createElement('script', {
    key: 'gatsby-plugin-gtag-inline-script',
    dangerouslySetInnerHTML: {
      __html: scriptStr
    }
  });

  var setComponents = pluginOptions.head ? setHeadComponents : setPostBodyComponents;
  return setComponents([gtagScript, trackScript]);
};

function stringToBool(s) {
  if (!s) {
    return false;
  }

  var sNorm = s.trim().toLowerCase();

  if (!sNorm.length) {
    return false;
  }

  return sNorm === 'true' || sNorm === '1';
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-layout/gatsby-ssr.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-layout/gatsby-ssr.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.wrapPageElement = __webpack_require__(/*! ./wrap-page */ "./node_modules/gatsby-plugin-layout/wrap-page.js");

/***/ }),

/***/ "./node_modules/gatsby-plugin-layout/wrap-page.js":
/*!********************************************************!*\
  !*** ./node_modules/gatsby-plugin-layout/wrap-page.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var React = __webpack_require__(/*! react */ "react");

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

var Layout;

try {
  Layout = preferDefault(__webpack_require__(/*! ./src/templates/docs.js */ "./src/templates/docs.js"));
} catch (e) {
  if (e.toString().indexOf("Error: Cannot find module") !== -1) {
    throw new Error("Couldn't find layout component at \"" + "/usr/local/app/other/koa-booster-page/src/templates/docs.js" + ".\n\n" + "Please create layout component in that location or specify path to layout component in gatsby-config.js");
  } else {
    // Logging the error for debugging older browsers as there is no way
    // to wrap the thrown error in a try/catch.
    console.error(e);
    throw e;
  }
} // eslint-disable-next-line react/prop-types,react/display-name


module.exports = function (_ref) {
  var element = _ref.element,
      props = _ref.props;
  return /*#__PURE__*/React.createElement(Layout, props, element);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.onRenderBody = void 0;

var _reactHelmet = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");

var onRenderBody = function onRenderBody(_ref) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.Helmet.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent(), helmet.base.toComponent()]);
};

exports.onRenderBody = onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _path = __webpack_require__(/*! path */ "path");

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // TODO: Remove for v3 - Fix janky path/asset prefixing


var withPrefix = _gatsby.withAssetPrefix || _gatsby.withPrefix;

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;
  var output = pluginOptions.output,
      createLinkInHead = pluginOptions.createLinkInHead;

  if (!createLinkInHead) {
    return;
  }

  setHeadComponents([/*#__PURE__*/React.createElement("link", {
    key: "gatsby-plugin-sitemap",
    rel: "sitemap",
    type: "application/xml",
    href: withPrefix(_path.posix.join(output, "/sitemap-index.xml"))
  })]);
};

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-mdx/mdx-scopes-dir/e92f8988d65cf25c087d226e6c0ef06f.js":
/*!********************************************************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-mdx/mdx-scopes-dir/e92f8988d65cf25c087d226e6c0ef06f.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  React: react__WEBPACK_IMPORTED_MODULE_0__
});

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/context.js":
/*!***************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/context.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMDXScope": () => (/* binding */ useMDXScope),
/* harmony export */   "MDXScopeProvider": () => (/* binding */ MDXScopeProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const GatsbyMDXScopeContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useMDXScope = scope => {
  const contextScope = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(GatsbyMDXScopeContext);
  return scope || contextScope;
};
const MDXScopeProvider = ({
  __mdxScope,
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GatsbyMDXScopeContext.Provider, {
  value: __mdxScope
}, children);

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/gatsby-ssr.js":
/*!******************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/gatsby-ssr.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapRootElement": () => (/* binding */ wrapRootElement)
/* harmony export */ });
/* harmony import */ var _wrap_root_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-root-element */ "./node_modules/gatsby-plugin-mdx/wrap-root-element.js");

const wrapRootElement = _wrap_root_element__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/mdx-renderer.js":
/*!********************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/mdx-renderer.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _defineProperty = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _objectWithoutProperties = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");

const _excluded = ["scope", "children"];

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

const React = __webpack_require__(/*! react */ "react");

const {
  mdx
} = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");

const {
  useMDXScope
} = __webpack_require__(/*! ./context */ "./node_modules/gatsby-plugin-mdx/context.js");

module.exports = function MDXRenderer(_ref) {
  let {
    scope,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const mdxScope = useMDXScope(scope); // Memoize the compiled component

  const End = React.useMemo(() => {
    if (!children) {
      return null;
    }

    const fullScope = _objectSpread({
      // React is here just in case the user doesn't pass them in
      // in a manual usage of the renderer
      React,
      mdx
    }, mdxScope);

    const keys = Object.keys(fullScope);
    const values = keys.map(key => fullScope[key]);
    const fn = new Function(`_fn`, ...keys, `${children}`);
    return fn({}, ...values);
  }, [children, scope]);
  return React.createElement(End, _objectSpread({}, props));
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/wrap-root-element.js":
/*!*************************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/wrap-root-element.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./node_modules/gatsby-plugin-mdx/context.js");
/* harmony import */ var _loaders_mdx_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loaders/mdx-components */ "./node_modules/gatsby-plugin-mdx/loaders/mdx-components.js");
/* harmony import */ var _loaders_mdx_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_loaders_mdx_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loaders_mdx_scopes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loaders/mdx-scopes */ "./node_modules/gatsby-plugin-mdx/loaders/mdx-scopes.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




/**
 * so, this import is weird right?
 *
 * # What it looks like:
 * we're importing a webpack loader directly into our runtime bundle
 *
 * # What it's actually doing:
 * We configure the `mdx-components` loader in gatsby-node's
 * `onCreateWebpackConfig`. The configuration sets the loader to handle its
 * own file, so if we import `./loaders/mdx-components`, the `mdx-components`
 * loader handles loading itself.
 *
 * # Why does this work?
 * The loader doesn't use the file argument to itself and instead returns
 * a generated file that includes the `gatsby-config` mdxPlugins wrapped in
 * require() statements. This results in the `mdxPlugins` being required
 * and available to the code after this import.
 *
 * # Have a better solution to this?
 * Submit a PR
 */




const componentsAndGuards = {};

const componentFromGuards = arr => function GatsbyMDXComponentFinder(props) {
  const {
    Component
  } = arr.find(({
    guard
  }) => guard ? guard(props) : true);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(Component, props);
};

_loaders_mdx_components__WEBPACK_IMPORTED_MODULE_4__.plugins.forEach(({
  guards = {},
  components
}) => {
  Object.entries(components).forEach(([componentName, Component]) => {
    if (componentsAndGuards[componentName]) {
      componentsAndGuards.push({
        guard: guards[componentName],
        Component
      });
    } else {
      componentsAndGuards[componentName] = [{
        guard: guards[componentName],
        Component
      }];
    }
  });
});
const components = Object.entries(componentsAndGuards).map(([name, arr]) => {
  return {
    [name]: componentFromGuards(arr.concat({
      guard: undefined,
      Component: name
    }))
  };
}).reduce((acc, obj) => {
  return _objectSpread(_objectSpread({}, acc), obj);
}, {}); // merge any components in wrapRootElement above this wrapRoot

const MDXConsumer = (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.withMDXComponents)(({
  components: componentsFromContext,
  children
}) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(_context__WEBPACK_IMPORTED_MODULE_3__.MDXScopeProvider, {
  __mdxScope: _loaders_mdx_scopes__WEBPACK_IMPORTED_MODULE_5__["default"]
}, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.MDXProvider, {
  components: _objectSpread(_objectSpread({}, componentsFromContext), components)
}, children)));

const WrapRootElement = ({
  element
}) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_6__.jsx)(MDXConsumer, null, element);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WrapRootElement);

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/loaders/mdx-components.js":
/*!******************************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/loaders/mdx-components.js ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {
  plugins: []
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-mdx/loaders/mdx-scopes.js":
/*!**************************************************************!*\
  !*** ./node_modules/gatsby-plugin-mdx/loaders/mdx-scopes.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var scope_0 = __webpack_require__(/*! ./.cache/caches/gatsby-plugin-mdx/mdx-scopes-dir/e92f8988d65cf25c087d226e6c0ef06f.js */ "./.cache/caches/gatsby-plugin-mdx/mdx-scopes-dir/e92f8988d65cf25c087d226e6c0ef06f.js")["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign({}, scope_0));

/***/ }),

/***/ "./src/components/DarkModeSwitch.js":
/*!******************************************!*\
  !*** ./src/components/DarkModeSwitch.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkModeSwitch": () => (/* binding */ DarkModeSwitch)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_night_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/night.png */ "./src/components/images/night.png");
/* harmony import */ var _images_day_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/day.png */ "./src/components/images/day.png");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");






const StyledSwitch = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('div',  false ? 0 : {
  target: "e1c69wq20",
  label: "StyledSwitch"
})("display:flex;justify-content:flex-end;width:100%;padding:0 20px 0 25px;.switch{position:relative;display:inline-block;width:50px;height:20px;}.switch input{opacity:0;width:0;height:0;}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:0.4s;transition:0.4s;}.slider:before{position:absolute;content:'';height:30px;width:30px;left:0px;bottom:4px;top:0;bottom:0;margin:auto 0;-webkit-transition:0.4s;transition:0.4s;box-shadow:0 0px 15px #2020203d;background:white url(", _images_night_png__WEBPACK_IMPORTED_MODULE_2__["default"], ");background-repeat:no-repeat;background-position:center;}input:checked+.slider{background:linear-gradient(to right, #fefb72, #f0bb31);}input:checked+.slider:before{-webkit-transform:translateX(24px);-ms-transform:translateX(24px);transform:translateX(24px);background:white url(", _images_day_png__WEBPACK_IMPORTED_MODULE_3__["default"], ");background-repeat:no-repeat;background-position:center;}.slider.round{border-radius:34px;}.slider.round:before{border-radius:50%;}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvRGFya01vZGVTd2l0Y2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWtDIiwiZmlsZSI6Ii91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvRGFya01vZGVTd2l0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBOaWdodEltYWdlIGZyb20gJy4vaW1hZ2VzL25pZ2h0LnBuZyc7XG5pbXBvcnQgRGF5SW1hZ2UgZnJvbSAnLi9pbWFnZXMvZGF5LnBuZyc7XG5cbmNvbnN0IFN0eWxlZFN3aXRjaCA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHggMCAyNXB4O1xuXG4gIC8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXG4gIC5zd2l0Y2gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cbiAgLnN3aXRjaCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cblxuICAvKiBUaGUgc2xpZGVyICovXG4gIC5zbGlkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gIH1cblxuICAuc2xpZGVyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYm90dG9tOiA0cHg7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IGF1dG8gMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbiAgICBib3gtc2hhZG93OiAwIDBweCAxNXB4ICMyMDIwMjAzZDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSB1cmwoJHtOaWdodEltYWdlfSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIH1cblxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmVmYjcyLCAjZjBiYjMxKTtcbiAgfVxuXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjRweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjRweCk7XG4gICAgYmFja2dyb3VuZDogd2hpdGUgdXJsKCR7RGF5SW1hZ2V9KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgfVxuXG4gIC8qIFJvdW5kZWQgc2xpZGVycyAqL1xuICAuc2xpZGVyLnJvdW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICB9XG5cbiAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERhcmtNb2RlU3dpdGNoID0gKHsgaXNEYXJrVGhlbWVBY3RpdmUsIHRvZ2dsZUFjdGl2ZVRoZW1lIH0pID0+IChcbiAgPFN0eWxlZFN3aXRjaD5cbiAgICA8bGFiZWwgaWQ9XCJzd2l0Y2hcIiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICBpZD1cInNsaWRlclwiXG4gICAgICAgIG9uQ2hhbmdlPXt0b2dnbGVBY3RpdmVUaGVtZX1cbiAgICAgICAgY2hlY2tlZD17aXNEYXJrVGhlbWVBY3RpdmUgPyBmYWxzZSA6IHRydWV9XG4gICAgICAvPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2xpZGVyIHJvdW5kXCI+PC9zcGFuPlxuICAgIDwvbGFiZWw+XG4gIDwvU3R5bGVkU3dpdGNoPlxuKTtcbiJdfQ== */"));

const DarkModeSwitch = ({
  isDarkThemeActive,
  toggleActiveTheme
}) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledSwitch, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
  id: "switch",
  className: "switch"
}, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
  type: "checkbox",
  id: "slider",
  onChange: toggleActiveTheme,
  checked: isDarkThemeActive ? false : true
}), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
  className: "slider round"
})));

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");
/* harmony import */ var _public_page_data_sq_d_417421954_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/page-data/sq/d/417421954.json */ "./public/page-data/sq/d/417421954.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_github_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-github-btn */ "./node_modules/react-github-btn/index.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./link */ "./src/components/link.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config.js */ "./config.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mdxComponents_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mdxComponents/loading */ "./src/components/mdxComponents/loading.js");
/* harmony import */ var _DarkModeSwitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DarkModeSwitch */ "./src/components/DarkModeSwitch.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar */ "./src/components/sidebar/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");











const help = __webpack_require__(/*! ./images/help.svg */ "./src/components/images/help.svg");

const isSearchEnabled = (_config_js__WEBPACK_IMPORTED_MODULE_7___default().header.search) && (_config_js__WEBPACK_IMPORTED_MODULE_7___default().header.search.enabled) ? true : false;
let searchIndices = [];

if (isSearchEnabled && (_config_js__WEBPACK_IMPORTED_MODULE_7___default().header.search.indexName)) {
  searchIndices.push({
    name: `${(_config_js__WEBPACK_IMPORTED_MODULE_7___default().header.search.indexName)}`,
    title: `Results`,
    hitComp: `PageHit`
  });
}



const LoadableComponent = react_loadable__WEBPACK_IMPORTED_MODULE_6___default()({
  loader: () => __webpack_require__.e(/*! import() */ "src_components_search_index_js").then(__webpack_require__.bind(__webpack_require__, /*! ./search/index */ "./src/components/search/index.js")),
  loading: _mdxComponents_loading__WEBPACK_IMPORTED_MODULE_8__["default"]
});

function myFunction() {
  var x = document.getElementById('navbar');

  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

const StyledBgDiv = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('div',  false ? 0 : {
  target: "e1217p0e0",
  label: "StyledBgDiv"
})("height:60px;box-shadow:0 3px 6px 0 rgba(0, 0, 0, 0.16);background-color:#f8f8f8;position:relative;display:none;background:", props => props.isDarkThemeActive ? '#001932' : undefined, ";@media (max-width: 767px){display:block;}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDaUMiLCJmaWxlIjoiL3Vzci9sb2NhbC9hcHAvb3RoZXIva29hLWJvb3N0ZXItcGFnZS9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBTdGF0aWNRdWVyeSwgZ3JhcGhxbCB9IGZyb20gJ2dhdHNieSc7XG5pbXBvcnQgR2l0SHViQnV0dG9uIGZyb20gJ3JlYWN0LWdpdGh1Yi1idG4nO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9saW5rJztcbmltcG9ydCBMb2FkYWJsZSBmcm9tICdyZWFjdC1sb2FkYWJsZSc7XG5cbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcbmltcG9ydCBMb2FkaW5nUHJvdmlkZXIgZnJvbSAnLi9tZHhDb21wb25lbnRzL2xvYWRpbmcnO1xuaW1wb3J0IHsgRGFya01vZGVTd2l0Y2ggfSBmcm9tICcuL0RhcmtNb2RlU3dpdGNoJztcblxuY29uc3QgaGVscCA9IHJlcXVpcmUoJy4vaW1hZ2VzL2hlbHAuc3ZnJyk7XG5cbmNvbnN0IGlzU2VhcmNoRW5hYmxlZCA9IGNvbmZpZy5oZWFkZXIuc2VhcmNoICYmIGNvbmZpZy5oZWFkZXIuc2VhcmNoLmVuYWJsZWQgPyB0cnVlIDogZmFsc2U7XG5cbmxldCBzZWFyY2hJbmRpY2VzID0gW107XG5cbmlmIChpc1NlYXJjaEVuYWJsZWQgJiYgY29uZmlnLmhlYWRlci5zZWFyY2guaW5kZXhOYW1lKSB7XG4gIHNlYXJjaEluZGljZXMucHVzaCh7XG4gICAgbmFtZTogYCR7Y29uZmlnLmhlYWRlci5zZWFyY2guaW5kZXhOYW1lfWAsXG4gICAgdGl0bGU6IGBSZXN1bHRzYCxcbiAgICBoaXRDb21wOiBgUGFnZUhpdGAsXG4gIH0pO1xufVxuXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGViYXInO1xuXG5jb25zdCBMb2FkYWJsZUNvbXBvbmVudCA9IExvYWRhYmxlKHtcbiAgbG9hZGVyOiAoKSA9PiBpbXBvcnQoJy4vc2VhcmNoL2luZGV4JyksXG4gIGxvYWRpbmc6IExvYWRpbmdQcm92aWRlcixcbn0pO1xuXG5mdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xuICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXInKTtcblxuICBpZiAoeC5jbGFzc05hbWUgPT09ICd0b3BuYXYnKSB7XG4gICAgeC5jbGFzc05hbWUgKz0gJyByZXNwb25zaXZlJztcbiAgfSBlbHNlIHtcbiAgICB4LmNsYXNzTmFtZSA9ICd0b3BuYXYnO1xuICB9XG59XG5cbmNvbnN0IFN0eWxlZEJnRGl2ID0gc3R5bGVkKCdkaXYnKWBcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNEYXJrVGhlbWVBY3RpdmUgPyAnIzAwMTkzMicgOiB1bmRlZmluZWQpfTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgSGVhZGVyID0gKHsgbG9jYXRpb24sIGlzRGFya1RoZW1lQWN0aXZlLCB0b2dnbGVBY3RpdmVUaGVtZSB9KSA9PiAoXG4gIDxTdGF0aWNRdWVyeVxuICAgIHF1ZXJ5PXtncmFwaHFsYFxuICAgICAgcXVlcnkgaGVhZGVyVGl0bGVRdWVyeSB7XG4gICAgICAgIHNpdGUge1xuICAgICAgICAgIHNpdGVNZXRhZGF0YSB7XG4gICAgICAgICAgICBoZWFkZXJUaXRsZVxuICAgICAgICAgICAgZ2l0aHViVXJsXG4gICAgICAgICAgICBoZWxwVXJsXG4gICAgICAgICAgICB0d2VldFRleHRcbiAgICAgICAgICAgIGxvZ28ge1xuICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFkZXJMaW5rcyB7XG4gICAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG4gICAgcmVuZGVyPXsoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgbG9nb0ltZyA9IHJlcXVpcmUoJy4vaW1hZ2VzL2xvZ28uc3ZnJyk7XG5cbiAgICAgIGNvbnN0IHR3aXR0ZXIgPSByZXF1aXJlKCcuL2ltYWdlcy90d2l0dGVyLnN2ZycpO1xuXG4gICAgICBjb25zdCBkaXNjb3JkQnJhbmRzQmxvY2sgPSByZXF1aXJlKCcuL2ltYWdlcy9kaXNjb3JkLWJyYW5kcy1ibG9jay5zdmcnKTtcblxuICAgICAgY29uc3QgdHdpdHRlckJyYW5kc0Jsb2NrID0gcmVxdWlyZSgnLi9pbWFnZXMvdHdpdHRlci1icmFuZHMtYmxvY2suc3ZnJyk7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc2l0ZToge1xuICAgICAgICAgIHNpdGVNZXRhZGF0YTogeyBoZWFkZXJUaXRsZSwgZ2l0aHViVXJsLCBoZWxwVXJsLCB0d2VldFRleHQsIGxvZ28sIGhlYWRlckxpbmtzIH0sXG4gICAgICAgIH0sXG4gICAgICB9ID0gZGF0YTtcblxuICAgICAgY29uc3QgZmluYWxMb2dvTGluayA9IGxvZ28ubGluayAhPT0gJycgPyBsb2dvLmxpbmsgOiAnaHR0cHM6Ly9oYXN1cmEuaW8vJztcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyduYXZCYXJXcmFwcGVyJ30+XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9eyduYXZCYXJEZWZhdWx0J30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J25hdkJhckhlYWRlcid9PlxuICAgICAgICAgICAgICA8TGluayB0bz17ZmluYWxMb2dvTGlua30gY2xhc3NOYW1lPXsnbmF2QmFyQnJhbmQnfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydpbWctcmVzcG9uc2l2ZSBkaXNwbGF5SW5saW5lJ31cbiAgICAgICAgICAgICAgICAgIHNyYz17bG9nby5pbWFnZSAhPT0gJycgPyBsb2dvLmltYWdlIDogbG9nb0ltZ31cbiAgICAgICAgICAgICAgICAgIGFsdD17J2xvZ28nfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J2hlYWRlclRpdGxlIGRpc3BsYXlJbmxpbmUnfVxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaGVhZGVyVGl0bGUgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2NvbmZpZy5oZWFkZXIuc29jaWFsID8gKFxuICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzb2NpYWxXcmFwcGVyIHZpc2libGVNb2JpbGVWaWV3XCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbmZpZy5oZWFkZXIuc29jaWFsIH19XG4gICAgICAgICAgICAgID48L3VsPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICB7aXNTZWFyY2hFbmFibGVkID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3NlYXJjaFdyYXBwZXIgaGlkZGVuTW9iaWxlIG5hdkJhclVMJ30+XG4gICAgICAgICAgICAgICAgPExvYWRhYmxlQ29tcG9uZW50IGNvbGxhcHNlPXt0cnVlfSBpbmRpY2VzPXtzZWFyY2hJbmRpY2VzfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT17J3RvcG5hdid9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3Zpc2libGVNb2JpbGUnfT5cbiAgICAgICAgICAgICAgICA8U2lkZWJhciBsb2NhdGlvbj17bG9jYXRpb259IC8+XG4gICAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXsnbmF2QmFyVUwgbmF2QmFyTmF2IG5hdkJhclVMUmlnaHQnfT5cbiAgICAgICAgICAgICAgICB7aGVhZGVyTGlua3MubWFwKChsaW5rLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChsaW5rLmxpbmsgIT09ICcnICYmIGxpbmsudGV4dCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lkZWJhckxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLmxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGxpbmsudGV4dCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHtoZWxwVXJsICE9PSAnJyA/IChcbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aGVscFVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2hlbHB9IGFsdD17J0hlbHAgaWNvbid9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICB7dHdlZXRUZXh0ICE9PSAnJyA/IChcbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXsnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/JnRleHQ9JyArIHR3ZWV0VGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9eydzaGFyZUljb24nfSBzcmM9e3R3aXR0ZXJ9IGFsdD17J1R3aXR0ZXInfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIHt0d2VldFRleHQgIT09ICcnIHx8IGdpdGh1YlVybCAhPT0gJycgPyAoXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGl2aWRlciBoaWRkZW5Nb2JpbGVcIj48L2xpPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIHtjb25maWcuaGVhZGVyLnNvY2lhbCA/IChcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9eydoaWRkZW5Nb2JpbGUnfT5cbiAgICAgICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsV3JhcHBlclwiXG4gICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb25maWcuaGVhZGVyLnNvY2lhbCB9fVxuICAgICAgICAgICAgICAgICAgICA+PC91bD5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAge2dpdGh1YlVybCAhPT0gJycgPyAoXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsnZ2l0aHViQnRuJ30+XG4gICAgICAgICAgICAgICAgICAgIDxHaXRIdWJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtnaXRodWJVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1zaG93LWNvdW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlN0YXIgb24gR2l0SHViXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFN0YXJcbiAgICAgICAgICAgICAgICAgICAgPC9HaXRIdWJCdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxEYXJrTW9kZVN3aXRjaFxuICAgICAgICAgICAgICAgICAgICBpc0RhcmtUaGVtZUFjdGl2ZT17aXNEYXJrVGhlbWVBY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUFjdGl2ZVRoZW1lPXt0b2dnbGVBY3RpdmVUaGVtZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxTdHlsZWRCZ0RpdiBpc0RhcmtUaGVtZUFjdGl2ZT17aXNEYXJrVGhlbWVBY3RpdmV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eyduYXZCYXJEZWZhdWx0IHJlbW92ZVBhZGQnfT5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtteUZ1bmN0aW9ufVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J25hdkJhclRvZ2dsZSd9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtteUZ1bmN0aW9ufVxuICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnaWNvbkJhcid9Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9eydpY29uQmFyJ30+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J2ljb25CYXInfT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2lzU2VhcmNoRW5hYmxlZCA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydzZWFyY2hXcmFwcGVyJ30+XG4gICAgICAgICAgICAgICAgPExvYWRhYmxlQ29tcG9uZW50IGNvbGxhcHNlPXt0cnVlfSBpbmRpY2VzPXtzZWFyY2hJbmRpY2VzfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvU3R5bGVkQmdEaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9fVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */"));

const Header = ({
  location,
  isDarkThemeActive,
  toggleActiveTheme
}) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_3__.StaticQuery, {
  query: "417421954",
  render: data => {
    const logoImg = __webpack_require__(/*! ./images/logo.svg */ "./src/components/images/logo.svg");

    const twitter = __webpack_require__(/*! ./images/twitter.svg */ "./src/components/images/twitter.svg");

    const discordBrandsBlock = __webpack_require__(/*! ./images/discord-brands-block.svg */ "./src/components/images/discord-brands-block.svg");

    const twitterBrandsBlock = __webpack_require__(/*! ./images/twitter-brands-block.svg */ "./src/components/images/twitter-brands-block.svg");

    const {
      site: {
        siteMetadata: {
          headerTitle,
          githubUrl,
          helpUrl,
          tweetText,
          logo,
          headerLinks
        }
      }
    } = data;
    const finalLogoLink = logo.link !== '' ? logo.link : 'https://hasura.io/';
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: 'navBarWrapper'
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("nav", {
      className: 'navBarDefault'
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: 'navBarHeader'
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
      to: finalLogoLink,
      className: 'navBarBrand'
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
      className: 'img-responsive displayInline',
      src: logo.image !== '' ? logo.image : logoImg,
      alt: 'logo'
    })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: 'headerTitle displayInline',
      dangerouslySetInnerHTML: {
        __html: headerTitle
      }
    })), (_config_js__WEBPACK_IMPORTED_MODULE_7___default().header.social) ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("ul", {
      className: "socialWrapper visibleMobileView",
      dangerouslySetInnerHTML: {
        __html: (_config_js__WEBPACK_IMPORTED_MODULE_7___default().header.social)
      }
    }) : null, isSearchEnabled ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: 'searchWrapper hiddenMobile navBarUL'
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(LoadableComponent, {
      collapse: true,
      indices: searchIndices
    })) : null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      id: "navbar",
      className: 'topnav'
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: 'visibleMobile'
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(_sidebar__WEBPACK_IMPORTED_MODULE_10__["default"], {
      location: location
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("hr", null)), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("ul", {
      className: 'navBarUL navBarNav navBarULRight'
    }, headerLinks.map((link, key) => {
      if (link.link !== '' && link.text !== '') {
        return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("li", {
          key: key
        }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
          className: "sidebarLink",
          href: link.link,
          target: "_blank",
          rel: "noopener noreferrer",
          dangerouslySetInnerHTML: {
            __html: link.text
          }
        }));
      }
    }), helpUrl !== '' ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("li", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
      href: helpUrl
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
      src: help,
      alt: 'Help icon'
    }))) : null, tweetText !== '' ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("li", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("a", {
      href: 'https://twitter.com/intent/tweet?&text=' + tweetText,
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
      className: 'shareIcon',
      src: twitter,
      alt: 'Twitter'
    }))) : null, tweetText !== '' || githubUrl !== '' ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("li", {
      className: "divider hiddenMobile"
    }) : null, (_config_js__WEBPACK_IMPORTED_MODULE_7___default().header.social) ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("li", {
      className: 'hiddenMobile'
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("ul", {
      className: "socialWrapper",
      dangerouslySetInnerHTML: {
        __html: (_config_js__WEBPACK_IMPORTED_MODULE_7___default().header.social)
      }
    })) : null, githubUrl !== '' ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("li", {
      className: 'githubBtn'
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_github_btn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      href: githubUrl,
      "data-show-count": "true",
      "aria-label": "Star on GitHub"
    }, "Star")) : null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("li", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_9__.DarkModeSwitch, {
      isDarkThemeActive: isDarkThemeActive,
      toggleActiveTheme: toggleActiveTheme
    }))))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(StyledBgDiv, {
      isDarkThemeActive: isDarkThemeActive
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: 'navBarDefault removePadd'
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
      onClick: myFunction,
      className: 'navBarToggle',
      onKeyDown: myFunction,
      role: "button",
      tabIndex: 0
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
      className: 'iconBar'
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
      className: 'iconBar'
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
      className: 'iconBar'
    }))), isSearchEnabled ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: 'searchWrapper'
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)(LoadableComponent, {
      collapse: true,
      indices: searchIndices
    })) : null));
  },
  data: _public_page_data_sq_d_417421954_json__WEBPACK_IMPORTED_MODULE_1__
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/NextPrevious.js":
/*!****************************************!*\
  !*** ./src/components/NextPrevious.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link */ "./src/components/link.js");
/* harmony import */ var _styles_PageNavigationButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/PageNavigationButtons */ "./src/components/styles/PageNavigationButtons.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");





const NextPrevious = ({
  mdx,
  nav
}) => {
  let currentIndex;
  const currentPaginationInfo = nav.map((el, index) => {
    if (el && el.url === mdx.fields.slug) {
      currentIndex = index;
    }
  });
  const nextInfo = {};
  const previousInfo = {};

  if (currentIndex === undefined) {
    // index
    if (nav[0]) {
      nextInfo.url = nav[0].url;
      nextInfo.title = nav[0].title;
    }

    previousInfo.url = null;
    previousInfo.title = null;
    currentIndex = -1;
  } else if (currentIndex === 0) {
    // first page
    nextInfo.url = nav[currentIndex + 1] ? nav[currentIndex + 1].url : null;
    nextInfo.title = nav[currentIndex + 1] ? nav[currentIndex + 1].title : null;
    previousInfo.url = null;
    previousInfo.title = null;
  } else if (currentIndex === nav.length - 1) {
    // last page
    nextInfo.url = null;
    nextInfo.title = null;
    previousInfo.url = nav[currentIndex - 1] ? nav[currentIndex - 1].url : null;
    previousInfo.title = nav[currentIndex - 1] ? nav[currentIndex - 1].title : null;
  } else if (currentIndex) {
    // any other page
    nextInfo.url = nav[currentIndex + 1].url;
    nextInfo.title = nav[currentIndex + 1].title;

    if (nav[currentIndex - 1]) {
      previousInfo.url = nav[currentIndex - 1].url;
      previousInfo.title = nav[currentIndex - 1].title;
    }
  }

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_styles_PageNavigationButtons__WEBPACK_IMPORTED_MODULE_2__.StyledNextPrevious, null, previousInfo.url && currentIndex >= 0 ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    to: nav[currentIndex - 1].url,
    className: 'previousBtn'
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: 'leftArrow'
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
    preserveAspectRatio: "xMidYMid meet",
    height: "1em",
    width: "1em",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
    className: "_13gjrqj"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("g", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("line", {
    x1: "19",
    y1: "12",
    x2: "5",
    y2: "12"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("polyline", {
    points: "12 19 5 12 12 5"
  })))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: 'preRightWrapper'
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: 'smallContent'
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", null, "Previous")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: 'nextPreviousTitle'
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", null, nav[currentIndex - 1].title)))) : null, nextInfo.url && currentIndex >= 0 ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    to: nav[currentIndex + 1].url,
    className: 'nextBtn'
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: 'nextRightWrapper'
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: 'smallContent'
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", null, "Next")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: 'nextPreviousTitle'
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", null, nav[currentIndex + 1] && nav[currentIndex + 1].title))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: 'rightArrow'
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
    preserveAspectRatio: "xMidYMid meet",
    height: "1em",
    width: "1em",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: "currentColor",
    className: "_13gjrqj"
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("g", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("polyline", {
    points: "12 5 19 12 12 19"
  }))))) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextPrevious);

/***/ }),

/***/ "./src/components/images/closed.js":
/*!*****************************************!*\
  !*** ./src/components/images/closed.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");



const ClosedSvg = () => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24"
}, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClosedSvg);

/***/ }),

/***/ "./src/components/images/opened.js":
/*!*****************************************!*\
  !*** ./src/components/images/opened.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");



const OpenedSvg = () => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24"
}, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenedSvg);

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mdxComponents": () => (/* reexport safe */ _mdxComponents__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ThemeProvider": () => (/* reexport safe */ _theme_themeProvider__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Layout": () => (/* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Link": () => (/* reexport safe */ _link__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./src/components/theme.js");
/* harmony import */ var _mdxComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mdxComponents */ "./src/components/mdxComponents/index.js");
/* harmony import */ var _theme_themeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme/themeProvider */ "./src/components/theme/themeProvider.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ "./src/components/layout.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./link */ "./src/components/link.js");







/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _theme_themeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/themeProvider */ "./src/components/theme/themeProvider.js");
/* harmony import */ var _mdxComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mdxComponents */ "./src/components/mdxComponents/index.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar */ "./src/components/sidebar/index.js");
/* harmony import */ var _rightSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rightSidebar */ "./src/components/rightSidebar.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config.js */ "./config.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }










const Wrapper = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('div',  false ? 0 : {
  target: "e1eqkayb4",
  label: "Wrapper"
})("display:flex;justify-content:space-between;background:", ({
  theme
}) => theme.colors.background, ";.sideBarUL li a{color:", ({
  theme
}) => theme.colors.text, ";}.sideBarUL .item>a:hover{background-color:#1ed3c6;color:#fff!important;}@media only screen and (max-width: 767px){display:block;}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVU2QiIsImZpbGUiOiIvdXNyL2xvY2FsL2FwcC9vdGhlci9rb2EtYm9vc3Rlci1wYWdlL3NyYy9jb21wb25lbnRzL2xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IE1EWFByb3ZpZGVyIH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5cbmltcG9ydCBUaGVtZVByb3ZpZGVyIGZyb20gJy4vdGhlbWUvdGhlbWVQcm92aWRlcic7XG5pbXBvcnQgbWR4Q29tcG9uZW50cyBmcm9tICcuL21keENvbXBvbmVudHMnO1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJztcbmltcG9ydCBSaWdodFNpZGViYXIgZnJvbSAnLi9yaWdodFNpZGViYXInO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcuanMnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkKCdkaXYnKWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcblxuICAuc2lkZUJhclVMIGxpIGEge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgfVxuXG4gIC5zaWRlQmFyVUwgLml0ZW0gPiBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWVkM2M2O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG5cbiAgICAvKiBiYWNrZ3JvdW5kOiAjRjhGOEY4ICovXG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQoJ21haW4nKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW46IDBweCA4OHB4O1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG5cbiAgdGFibGUgdHIge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDNyZW07XG4gIH1cbmA7XG5cbmNvbnN0IE1heFdpZHRoID0gc3R5bGVkKCdkaXYnKWBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MHJlbSkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuYDtcblxuY29uc3QgTGVmdFNpZGVCYXJXaWR0aCA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiAyOThweDtcbmA7XG5cbmNvbnN0IFJpZ2h0U2lkZUJhcldpZHRoID0gc3R5bGVkKCdkaXYnKWBcbiAgd2lkdGg6IDIyNHB4O1xuYDtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIGxvY2F0aW9uIH0pID0+IChcbiAgPFRoZW1lUHJvdmlkZXIgbG9jYXRpb249e2xvY2F0aW9ufT5cbiAgICA8TURYUHJvdmlkZXIgY29tcG9uZW50cz17bWR4Q29tcG9uZW50c30+XG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPExlZnRTaWRlQmFyV2lkdGggY2xhc3NOYW1lPXsnaGlkZGVuTW9iaWxlJ30+XG4gICAgICAgICAgPFNpZGViYXIgbG9jYXRpb249e2xvY2F0aW9ufSAvPlxuICAgICAgICA8L0xlZnRTaWRlQmFyV2lkdGg+XG4gICAgICAgIHtjb25maWcuc2lkZWJhci50aXRsZSA/IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9eydzaWRlYmFyVGl0bGUgc2lkZUJhclNob3cnfVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb25maWcuc2lkZWJhci50aXRsZSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICA8TWF4V2lkdGg+e2NoaWxkcmVufTwvTWF4V2lkdGg+XG4gICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgPFJpZ2h0U2lkZUJhcldpZHRoIGNsYXNzTmFtZT17J2hpZGRlbk1vYmlsZSd9PlxuICAgICAgICAgIDxSaWdodFNpZGViYXIgbG9jYXRpb249e2xvY2F0aW9ufSAvPlxuICAgICAgICA8L1JpZ2h0U2lkZUJhcldpZHRoPlxuICAgICAgPC9XcmFwcGVyPlxuICAgIDwvTURYUHJvdmlkZXI+XG4gIDwvVGhlbWVQcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */"));

const Content = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('main',  false ? 0 : {
  target: "e1eqkayb3",
  label: "Content"
})("display:flex;flex-grow:1;margin:0px 88px;padding-top:3rem;background:", ({
  theme
}) => theme.colors.background, ";table tr{background:", ({
  theme
}) => theme.colors.background, ";}@media only screen and (max-width: 1023px){padding-left:0;margin:0 10px;padding-top:3rem;}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCOEIiLCJmaWxlIjoiL3Vzci9sb2NhbC9hcHAvb3RoZXIva29hLWJvb3N0ZXItcGFnZS9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBNRFhQcm92aWRlciB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuXG5pbXBvcnQgVGhlbWVQcm92aWRlciBmcm9tICcuL3RoZW1lL3RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IG1keENvbXBvbmVudHMgZnJvbSAnLi9tZHhDb21wb25lbnRzJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcic7XG5pbXBvcnQgUmlnaHRTaWRlYmFyIGZyb20gJy4vcmlnaHRTaWRlYmFyJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG5cbiAgLnNpZGVCYXJVTCBsaSBhIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dH07XG4gIH1cblxuICAuc2lkZUJhclVMIC5pdGVtID4gYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlZDNjNjtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXG4gICAgLyogYmFja2dyb3VuZDogI0Y4RjhGOCAqL1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkKCdtYWluJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luOiAwcHggODhweDtcbiAgcGFkZGluZy10b3A6IDNyZW07XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuXG4gIHRhYmxlIHRyIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICB9XG5gO1xuXG5jb25zdCBNYXhXaWR0aCA9IHN0eWxlZCgnZGl2JylgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTByZW0pIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbmA7XG5cbmNvbnN0IExlZnRTaWRlQmFyV2lkdGggPSBzdHlsZWQoJ2RpdicpYFxuICB3aWR0aDogMjk4cHg7XG5gO1xuXG5jb25zdCBSaWdodFNpZGVCYXJXaWR0aCA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiAyMjRweDtcbmA7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBsb2NhdGlvbiB9KSA9PiAoXG4gIDxUaGVtZVByb3ZpZGVyIGxvY2F0aW9uPXtsb2NhdGlvbn0+XG4gICAgPE1EWFByb3ZpZGVyIGNvbXBvbmVudHM9e21keENvbXBvbmVudHN9PlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxMZWZ0U2lkZUJhcldpZHRoIGNsYXNzTmFtZT17J2hpZGRlbk1vYmlsZSd9PlxuICAgICAgICAgIDxTaWRlYmFyIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgICAgPC9MZWZ0U2lkZUJhcldpZHRoPlxuICAgICAgICB7Y29uZmlnLnNpZGViYXIudGl0bGUgPyAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXsnc2lkZWJhclRpdGxlIHNpZGVCYXJTaG93J31cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29uZmlnLnNpZGViYXIudGl0bGUgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgPE1heFdpZHRoPntjaGlsZHJlbn08L01heFdpZHRoPlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIDxSaWdodFNpZGVCYXJXaWR0aCBjbGFzc05hbWU9eydoaWRkZW5Nb2JpbGUnfT5cbiAgICAgICAgICA8UmlnaHRTaWRlYmFyIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgICAgPC9SaWdodFNpZGVCYXJXaWR0aD5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L01EWFByb3ZpZGVyPlxuICA8L1RoZW1lUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */"));

const MaxWidth = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('div',  false ? 0 : {
  target: "e1eqkayb2",
  label: "MaxWidth"
})( false ? 0 : {
  name: "rnnnrd",
  styles: "@media only screen and (max-width: 50rem){width:100%;position:relative;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEOEIiLCJmaWxlIjoiL3Vzci9sb2NhbC9hcHAvb3RoZXIva29hLWJvb3N0ZXItcGFnZS9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBNRFhQcm92aWRlciB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuXG5pbXBvcnQgVGhlbWVQcm92aWRlciBmcm9tICcuL3RoZW1lL3RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IG1keENvbXBvbmVudHMgZnJvbSAnLi9tZHhDb21wb25lbnRzJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcic7XG5pbXBvcnQgUmlnaHRTaWRlYmFyIGZyb20gJy4vcmlnaHRTaWRlYmFyJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG5cbiAgLnNpZGVCYXJVTCBsaSBhIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dH07XG4gIH1cblxuICAuc2lkZUJhclVMIC5pdGVtID4gYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlZDNjNjtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXG4gICAgLyogYmFja2dyb3VuZDogI0Y4RjhGOCAqL1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkKCdtYWluJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luOiAwcHggODhweDtcbiAgcGFkZGluZy10b3A6IDNyZW07XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuXG4gIHRhYmxlIHRyIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICB9XG5gO1xuXG5jb25zdCBNYXhXaWR0aCA9IHN0eWxlZCgnZGl2JylgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTByZW0pIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbmA7XG5cbmNvbnN0IExlZnRTaWRlQmFyV2lkdGggPSBzdHlsZWQoJ2RpdicpYFxuICB3aWR0aDogMjk4cHg7XG5gO1xuXG5jb25zdCBSaWdodFNpZGVCYXJXaWR0aCA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiAyMjRweDtcbmA7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBsb2NhdGlvbiB9KSA9PiAoXG4gIDxUaGVtZVByb3ZpZGVyIGxvY2F0aW9uPXtsb2NhdGlvbn0+XG4gICAgPE1EWFByb3ZpZGVyIGNvbXBvbmVudHM9e21keENvbXBvbmVudHN9PlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxMZWZ0U2lkZUJhcldpZHRoIGNsYXNzTmFtZT17J2hpZGRlbk1vYmlsZSd9PlxuICAgICAgICAgIDxTaWRlYmFyIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgICAgPC9MZWZ0U2lkZUJhcldpZHRoPlxuICAgICAgICB7Y29uZmlnLnNpZGViYXIudGl0bGUgPyAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXsnc2lkZWJhclRpdGxlIHNpZGVCYXJTaG93J31cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29uZmlnLnNpZGViYXIudGl0bGUgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgPE1heFdpZHRoPntjaGlsZHJlbn08L01heFdpZHRoPlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIDxSaWdodFNpZGVCYXJXaWR0aCBjbGFzc05hbWU9eydoaWRkZW5Nb2JpbGUnfT5cbiAgICAgICAgICA8UmlnaHRTaWRlYmFyIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgICAgPC9SaWdodFNpZGVCYXJXaWR0aD5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L01EWFByb3ZpZGVyPlxuICA8L1RoZW1lUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const LeftSideBarWidth = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('div',  false ? 0 : {
  target: "e1eqkayb1",
  label: "LeftSideBarWidth"
})( false ? 0 : {
  name: "kmc1lc",
  styles: "width:298px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEc0MiLCJmaWxlIjoiL3Vzci9sb2NhbC9hcHAvb3RoZXIva29hLWJvb3N0ZXItcGFnZS9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBNRFhQcm92aWRlciB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuXG5pbXBvcnQgVGhlbWVQcm92aWRlciBmcm9tICcuL3RoZW1lL3RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IG1keENvbXBvbmVudHMgZnJvbSAnLi9tZHhDb21wb25lbnRzJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcic7XG5pbXBvcnQgUmlnaHRTaWRlYmFyIGZyb20gJy4vcmlnaHRTaWRlYmFyJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG5cbiAgLnNpZGVCYXJVTCBsaSBhIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dH07XG4gIH1cblxuICAuc2lkZUJhclVMIC5pdGVtID4gYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlZDNjNjtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXG4gICAgLyogYmFja2dyb3VuZDogI0Y4RjhGOCAqL1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkKCdtYWluJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luOiAwcHggODhweDtcbiAgcGFkZGluZy10b3A6IDNyZW07XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuXG4gIHRhYmxlIHRyIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICB9XG5gO1xuXG5jb25zdCBNYXhXaWR0aCA9IHN0eWxlZCgnZGl2JylgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTByZW0pIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbmA7XG5cbmNvbnN0IExlZnRTaWRlQmFyV2lkdGggPSBzdHlsZWQoJ2RpdicpYFxuICB3aWR0aDogMjk4cHg7XG5gO1xuXG5jb25zdCBSaWdodFNpZGVCYXJXaWR0aCA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiAyMjRweDtcbmA7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBsb2NhdGlvbiB9KSA9PiAoXG4gIDxUaGVtZVByb3ZpZGVyIGxvY2F0aW9uPXtsb2NhdGlvbn0+XG4gICAgPE1EWFByb3ZpZGVyIGNvbXBvbmVudHM9e21keENvbXBvbmVudHN9PlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxMZWZ0U2lkZUJhcldpZHRoIGNsYXNzTmFtZT17J2hpZGRlbk1vYmlsZSd9PlxuICAgICAgICAgIDxTaWRlYmFyIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgICAgPC9MZWZ0U2lkZUJhcldpZHRoPlxuICAgICAgICB7Y29uZmlnLnNpZGViYXIudGl0bGUgPyAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXsnc2lkZWJhclRpdGxlIHNpZGVCYXJTaG93J31cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29uZmlnLnNpZGViYXIudGl0bGUgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgPE1heFdpZHRoPntjaGlsZHJlbn08L01heFdpZHRoPlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIDxSaWdodFNpZGVCYXJXaWR0aCBjbGFzc05hbWU9eydoaWRkZW5Nb2JpbGUnfT5cbiAgICAgICAgICA8UmlnaHRTaWRlYmFyIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgICAgPC9SaWdodFNpZGVCYXJXaWR0aD5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L01EWFByb3ZpZGVyPlxuICA8L1RoZW1lUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const RightSideBarWidth = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('div',  false ? 0 : {
  target: "e1eqkayb0",
  label: "RightSideBarWidth"
})( false ? 0 : {
  name: "nrfftn",
  styles: "width:224px",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREdUMiLCJmaWxlIjoiL3Vzci9sb2NhbC9hcHAvb3RoZXIva29hLWJvb3N0ZXItcGFnZS9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBNRFhQcm92aWRlciB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuXG5pbXBvcnQgVGhlbWVQcm92aWRlciBmcm9tICcuL3RoZW1lL3RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IG1keENvbXBvbmVudHMgZnJvbSAnLi9tZHhDb21wb25lbnRzJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vc2lkZWJhcic7XG5pbXBvcnQgUmlnaHRTaWRlYmFyIGZyb20gJy4vcmlnaHRTaWRlYmFyJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZCgnZGl2JylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG5cbiAgLnNpZGVCYXJVTCBsaSBhIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dH07XG4gIH1cblxuICAuc2lkZUJhclVMIC5pdGVtID4gYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlZDNjNjtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXG4gICAgLyogYmFja2dyb3VuZDogI0Y4RjhGOCAqL1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkKCdtYWluJylgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luOiAwcHggODhweDtcbiAgcGFkZGluZy10b3A6IDNyZW07XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuXG4gIHRhYmxlIHRyIHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICB9XG5gO1xuXG5jb25zdCBNYXhXaWR0aCA9IHN0eWxlZCgnZGl2JylgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTByZW0pIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbmA7XG5cbmNvbnN0IExlZnRTaWRlQmFyV2lkdGggPSBzdHlsZWQoJ2RpdicpYFxuICB3aWR0aDogMjk4cHg7XG5gO1xuXG5jb25zdCBSaWdodFNpZGVCYXJXaWR0aCA9IHN0eWxlZCgnZGl2JylgXG4gIHdpZHRoOiAyMjRweDtcbmA7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBsb2NhdGlvbiB9KSA9PiAoXG4gIDxUaGVtZVByb3ZpZGVyIGxvY2F0aW9uPXtsb2NhdGlvbn0+XG4gICAgPE1EWFByb3ZpZGVyIGNvbXBvbmVudHM9e21keENvbXBvbmVudHN9PlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxMZWZ0U2lkZUJhcldpZHRoIGNsYXNzTmFtZT17J2hpZGRlbk1vYmlsZSd9PlxuICAgICAgICAgIDxTaWRlYmFyIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgICAgPC9MZWZ0U2lkZUJhcldpZHRoPlxuICAgICAgICB7Y29uZmlnLnNpZGViYXIudGl0bGUgPyAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXsnc2lkZWJhclRpdGxlIHNpZGVCYXJTaG93J31cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogY29uZmlnLnNpZGViYXIudGl0bGUgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgPE1heFdpZHRoPntjaGlsZHJlbn08L01heFdpZHRoPlxuICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgIDxSaWdodFNpZGVCYXJXaWR0aCBjbGFzc05hbWU9eydoaWRkZW5Nb2JpbGUnfT5cbiAgICAgICAgICA8UmlnaHRTaWRlYmFyIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgICAgPC9SaWdodFNpZGVCYXJXaWR0aD5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L01EWFByb3ZpZGVyPlxuICA8L1RoZW1lUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Layout = ({
  children,
  location
}) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_theme_themeProvider__WEBPACK_IMPORTED_MODULE_3__["default"], {
  location: location
}, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__.MDXProvider, {
  components: _mdxComponents__WEBPACK_IMPORTED_MODULE_4__["default"]
}, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(Wrapper, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(LeftSideBarWidth, {
  className: 'hiddenMobile'
}, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], {
  location: location
})), (_config_js__WEBPACK_IMPORTED_MODULE_7___default().sidebar.title) ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
  className: 'sidebarTitle sideBarShow',
  dangerouslySetInnerHTML: {
    __html: (_config_js__WEBPACK_IMPORTED_MODULE_7___default().sidebar.title)
  }
}) : null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(Content, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(MaxWidth, null, children)), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(RightSideBarWidth, {
  className: 'hiddenMobile'
}, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_rightSidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
  location: location
})))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/link.js":
/*!********************************!*\
  !*** ./src/components/link.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var is_absolute_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! is-absolute-url */ "./node_modules/is-absolute-url/index.js");
/* harmony import */ var is_absolute_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(is_absolute_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");


const _excluded = ["to"];





const Link = _ref => {
  let {
    to
  } = _ref,
      props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  return is_absolute_url__WEBPACK_IMPORTED_MODULE_4___default()(to) ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    href: to
  }, props), props.children) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: to
  }, props));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);

/***/ }),

/***/ "./src/components/mdxComponents/anchor.js":
/*!************************************************!*\
  !*** ./src/components/mdxComponents/anchor.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var is_absolute_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! is-absolute-url */ "./node_modules/is-absolute-url/index.js");
/* harmony import */ var is_absolute_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(is_absolute_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");


const _excluded = ["children"];





const AnchorTag = _ref => {
  let {
    children: link
  } = _ref,
      props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  if (link) {
    if (is_absolute_url__WEBPACK_IMPORTED_MODULE_4___default()(props.href)) {
      return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
        href: props.href,
        target: "_blank",
        rel: "noopener noreferrer"
      }, link);
    } else {
      return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        to: props.href
      }, props), link);
    }
  } else {
    return null;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnchorTag);

/***/ }),

/***/ "./src/components/mdxComponents/codeBlock.js":
/*!***************************************************!*\
  !*** ./src/components/mdxComponents/codeBlock.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/prism/index.js");
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/dist/index.js");
/* harmony import */ var _custom_config_codeBlockLanguages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../custom/config/codeBlockLanguages */ "./src/custom/config/codeBlockLanguages.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading */ "./src/components/mdxComponents/loading.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");


const _excluded = ["children"];






const theme = (0,_custom_config_codeBlockLanguages__WEBPACK_IMPORTED_MODULE_3__.getTheme)();
/** Removes the last token from a code example if it's empty. */

function cleanTokens(tokens) {
  const tokensLength = tokens.length;

  if (tokensLength === 0) {
    return tokens;
  }

  const lastToken = tokens[tokensLength - 1];

  if (lastToken.length === 1 && lastToken[0].empty) {
    return tokens.slice(0, tokensLength - 1);
  }

  return tokens;
}

const LoadableComponent = react_loadable__WEBPACK_IMPORTED_MODULE_4___default()({
  loader: () => __webpack_require__.e(/*! import() */ "src_components_mdxComponents_LiveProvider_js").then(__webpack_require__.bind(__webpack_require__, /*! ./LiveProvider */ "./src/components/mdxComponents/LiveProvider.js")),
  loading: _loading__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* eslint-disable react/jsx-key */

const CodeBlock = _ref => {
  let {
    children: exampleCode
  } = _ref,
      props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  const [_, updateView] = react__WEBPACK_IMPORTED_MODULE_2__.useState(0);
  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(() => {
    var windowPrism = window.Prism;
    window.Prism = prism_react_renderer__WEBPACK_IMPORTED_MODULE_6__["default"];
    (0,_custom_config_codeBlockLanguages__WEBPACK_IMPORTED_MODULE_3__.applyLanguages)(prism_react_renderer__WEBPACK_IMPORTED_MODULE_6__["default"]);
    window.Prism = windowPrism;
    updateView({
      data: Date.now()
    });
  }, []);

  if (props['react-live']) {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(LoadableComponent, {
      code: exampleCode
    });
  } else {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(prism_react_renderer__WEBPACK_IMPORTED_MODULE_8__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_8__.defaultProps, {
      Prism: prism_react_renderer__WEBPACK_IMPORTED_MODULE_6__["default"],
      code: exampleCode,
      language: props.className ? props.className.split("-")[1] : "javascript",
      theme: theme
    }), ({
      className,
      style,
      tokens,
      getLineProps,
      getTokenProps
    }) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("pre", {
      className: className + ' pre',
      style: style,
      p: 3
    }, cleanTokens(tokens).map((line, i) => {
      let lineClass = {};
      let isDiff = false;

      if (line[0] && line[0].content.length && line[0].content[0] === '+') {
        lineClass = {
          backgroundColor: 'rgba(76, 175, 80, 0.2)'
        };
        isDiff = true;
      } else if (line[0] && line[0].content.length && line[0].content[0] === '-') {
        lineClass = {
          backgroundColor: 'rgba(244, 67, 54, 0.2)'
        };
        isDiff = true;
      } else if (line[0] && line[0].content === '' && line[1] && line[1].content === '+') {
        lineClass = {
          backgroundColor: 'rgba(76, 175, 80, 0.2)'
        };
        isDiff = true;
      } else if (line[0] && line[0].content === '' && line[1] && line[1].content === '-') {
        lineClass = {
          backgroundColor: 'rgba(244, 67, 54, 0.2)'
        };
        isDiff = true;
      }

      const lineProps = getLineProps({
        line,
        key: i
      });
      lineProps.style = lineClass;
      const diffStyle = {
        userSelect: 'none',
        MozUserSelect: '-moz-none',
        WebkitUserSelect: 'none'
      };
      let splitToken;
      return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, lineProps, {
        key: line + i
      }), line.map((token, key) => {
        if (isDiff) {
          if ((key === 0 || key === 1) & (token.content.charAt(0) === '+' || token.content.charAt(0) === '-')) {
            if (token.content.length > 1) {
              splitToken = {
                types: ['template-string', 'string'],
                content: token.content.slice(1)
              };
              const firstChar = {
                types: ['operator'],
                content: token.content.charAt(0)
              };
              return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                key: token + key
              }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTokenProps({
                token: firstChar,
                key
              }), {
                style: diffStyle
              })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", getTokenProps({
                token: splitToken,
                key
              })));
            } else {
              return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getTokenProps({
                token,
                key
              }), {
                style: diffStyle
              }));
            }
          }
        }

        return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", getTokenProps({
          token,
          key
        }));
      }));
    })));
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CodeBlock);

/***/ }),

/***/ "./src/components/mdxComponents/index.js":
/*!***********************************************!*\
  !*** ./src/components/mdxComponents/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _codeBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codeBlock */ "./src/components/mdxComponents/codeBlock.js");
/* harmony import */ var _anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./anchor */ "./src/components/mdxComponents/anchor.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");







const StyledPre = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__["default"])('pre',  false ? 0 : {
  target: "ev1gfv90",
  label: "StyledPre"
})("padding:16px;background:", props => props.theme.colors.preFormattedText, ";" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvbWR4Q29tcG9uZW50cy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNK0IiLCJmaWxlIjoiL3Vzci9sb2NhbC9hcHAvb3RoZXIva29hLWJvb3N0ZXItcGFnZS9zcmMvY29tcG9uZW50cy9tZHhDb21wb25lbnRzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gJy4vY29kZUJsb2NrJztcbmltcG9ydCBBbmNob3JUYWcgZnJvbSAnLi9hbmNob3InO1xuXG5jb25zdCBTdHlsZWRQcmUgPSBzdHlsZWQoJ3ByZScpYFxuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnByZUZvcm1hdHRlZFRleHR9O1xuYDtcblxuY29uc3QgYXBwZW5kU3RyaW5nID0gKGNoaWxkcmVuKSA9PiB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIHJldHVybiBjaGlsZHJlbi5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gYWNjLmNvbmNhdChjdXJyZW50KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGN1cnJlbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBhY2MuY29uY2F0KGN1cnJlbnQucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cbiAgICB9LCAnJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGgxOiAocHJvcHMpID0+IChcbiAgICA8aDFcbiAgICAgIGNsYXNzTmFtZT1cImhlYWRpbmcxXCJcbiAgICAgIGlkPXthcHBlbmRTdHJpbmcocHJvcHMuY2hpbGRyZW4pLnJlcGxhY2UoL1xccysvZywgJycpLnRvTG93ZXJDYXNlKCl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSxcbiAgaDI6IChwcm9wcykgPT4gKFxuICAgIDxoMlxuICAgICAgY2xhc3NOYW1lPVwiaGVhZGluZzJcIlxuICAgICAgaWQ9e2FwcGVuZFN0cmluZyhwcm9wcy5jaGlsZHJlbikucmVwbGFjZSgvXFxzKy9nLCAnJykudG9Mb3dlckNhc2UoKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApLFxuICBoMzogKHByb3BzKSA9PiAoXG4gICAgPGgzXG4gICAgICBjbGFzc05hbWU9XCJoZWFkaW5nM1wiXG4gICAgICBpZD17YXBwZW5kU3RyaW5nKHByb3BzLmNoaWxkcmVuKS5yZXBsYWNlKC9cXHMrL2csICcnKS50b0xvd2VyQ2FzZSgpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICksXG4gIGg0OiAocHJvcHMpID0+IChcbiAgICA8aDRcbiAgICAgIGNsYXNzTmFtZT1cImhlYWRpbmc0XCJcbiAgICAgIGlkPXthcHBlbmRTdHJpbmcocHJvcHMuY2hpbGRyZW4pLnJlcGxhY2UoL1xccysvZywgJycpLnRvTG93ZXJDYXNlKCl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKSxcbiAgaDU6IChwcm9wcykgPT4gKFxuICAgIDxoNVxuICAgICAgY2xhc3NOYW1lPVwiaGVhZGluZzVcIlxuICAgICAgaWQ9e2FwcGVuZFN0cmluZyhwcm9wcy5jaGlsZHJlbikucmVwbGFjZSgvXFxzKy9nLCAnJykudG9Mb3dlckNhc2UoKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApLFxuICBoNjogKHByb3BzKSA9PiAoXG4gICAgPGg2XG4gICAgICBjbGFzc05hbWU9XCJoZWFkaW5nNlwiXG4gICAgICBpZD17YXBwZW5kU3RyaW5nKHByb3BzLmNoaWxkcmVuKS5yZXBsYWNlKC9cXHMrL2csICcnKS50b0xvd2VyQ2FzZSgpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICksXG4gIHA6IChwcm9wcykgPT4gPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCIgey4uLnByb3BzfSAvPixcbiAgcHJlOiAocHJvcHMpID0+IChcbiAgICA8U3R5bGVkUHJlPlxuICAgICAgPHByZSB7Li4ucHJvcHN9IC8+XG4gICAgPC9TdHlsZWRQcmU+XG4gICksXG4gIGNvZGU6IENvZGVCbG9jayxcbiAgYTogQW5jaG9yVGFnLFxuICAvLyBUT0RPIGFkZCBgaW1nYFxuICAvLyBUT0RPIGFkZCBgYmxvY2txdW90ZWBcbiAgLy8gVE9ETyBhZGQgYHVsYFxuICAvLyBUT0RPIGFkZCBgbGlgXG4gIC8vIFRPRE8gYWRkIGB0YWJsZWBcbn07XG4iXX0= */"));

const appendString = children => {
  if (Array.isArray(children)) {
    return children.reduce((acc, current) => {
      if (typeof current === 'string') {
        return acc.concat(current);
      } else if (typeof current === 'object') {
        return acc.concat(current.props.children);
      } else {
        return acc;
      }
    }, '');
  } else {
    return children;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  h1: props => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "heading1",
    id: appendString(props.children).replace(/\s+/g, '').toLowerCase()
  }, props)),
  h2: props => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "heading2",
    id: appendString(props.children).replace(/\s+/g, '').toLowerCase()
  }, props)),
  h3: props => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "heading3",
    id: appendString(props.children).replace(/\s+/g, '').toLowerCase()
  }, props)),
  h4: props => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "heading4",
    id: appendString(props.children).replace(/\s+/g, '').toLowerCase()
  }, props)),
  h5: props => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("h5", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "heading5",
    id: appendString(props.children).replace(/\s+/g, '').toLowerCase()
  }, props)),
  h6: props => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("h6", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "heading6",
    id: appendString(props.children).replace(/\s+/g, '').toLowerCase()
  }, props)),
  p: props => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "paragraph"
  }, props)),
  pre: props => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledPre, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("pre", props)),
  code: _codeBlock__WEBPACK_IMPORTED_MODULE_3__["default"],
  a: _anchor__WEBPACK_IMPORTED_MODULE_4__["default"] // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`

});

/***/ }),

/***/ "./src/components/mdxComponents/loading.js":
/*!*************************************************!*\
  !*** ./src/components/mdxComponents/loading.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");




const LoadingProvider = _ref => {
  let props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref);

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingProvider);

/***/ }),

/***/ "./src/components/rightSidebar.js":
/*!****************************************!*\
  !*** ./src/components/rightSidebar.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3706406642_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3706406642.json */ "./public/page-data/sq/d/3706406642.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Sidebar */ "./src/components/styles/Sidebar.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");


 // import Link from './link';





const SidebarLayout = ({
  location
}) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_2__.StaticQuery, {
  query: "3706406642",
  render: ({
    allMdx
  }) => {
    let navItems = [];
    let finalNavItems;

    if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
      const navItems = allMdx.edges.map((item, index) => {
        let innerItems;

        if (item !== undefined) {
          if (item.node.fields.slug === location.pathname || (_config__WEBPACK_IMPORTED_MODULE_3___default().gatsby.pathPrefix) + item.node.fields.slug === location.pathname) {
            if (item.node.tableOfContents.items) {
              innerItems = item.node.tableOfContents.items.map((innerItem, index) => {
                const itemId = innerItem.title ? innerItem.title.replace(/\s+/g, '').toLowerCase() : '#';
                return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_Sidebar__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
                  key: index,
                  to: `#${itemId}`,
                  level: 1
                }, innerItem.title);
              });
            }
          }
        }

        if (innerItems) {
          finalNavItems = innerItems;
        }
      });
    }

    if (finalNavItems && finalNavItems.length) {
      return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_Sidebar__WEBPACK_IMPORTED_MODULE_4__.Sidebar, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", {
        className: 'rightSideBarUL'
      }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("li", {
        className: 'rightSideTitle'
      }, "CONTENTS"), finalNavItems));
    } else {
      return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_styles_Sidebar__WEBPACK_IMPORTED_MODULE_4__.Sidebar, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("ul", null));
    }
  },
  data: _public_page_data_sq_d_3706406642_json__WEBPACK_IMPORTED_MODULE_0__
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarLayout);

/***/ }),

/***/ "./src/components/sidebar/index.js":
/*!*****************************************!*\
  !*** ./src/components/sidebar/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");
/* harmony import */ var _public_page_data_sq_d_2619113677_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/page-data/sq/d/2619113677.json */ "./public/page-data/sq/d/2619113677.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tree */ "./src/components/sidebar/tree.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/external-link.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");



const _excluded = ["className", "active", "level"];

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






 // eslint-disable-next-line no-unused-vars



const ListItem = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref => {
  let {
    className,
    active,
    level
  } = _ref,
      props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("li", {
    className: className
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    href: props.to
  }, props, {
    target: "_blank",
    rel: "noopener noreferrer"
  }), props.children));
},  false ? 0 : {
  target: "e1sbq3r12",
  label: "ListItem"
})("list-style:none;a{color:#5c6975;text-decoration:none;font-weight:", ({
  level
}) => level === 0 ? 700 : 400, ";padding:0.45rem 0 0.45rem ", props => 2 + (props.level || 0) * 1, "rem;display:block;position:relative;&:hover{color:#1ed3c6!important;}", props => props.active && `
      // color: #663399;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `, "svg{float:right;margin-right:1rem;}}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvc2lkZWJhci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkUiLCJmaWxlIjoiL3Vzci9sb2NhbC9hcHAvb3RoZXIva29hLWJvb3N0ZXItcGFnZS9zcmMvY29tcG9uZW50cy9zaWRlYmFyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyZWUgZnJvbSAnLi90cmVlJztcbmltcG9ydCB7IFN0YXRpY1F1ZXJ5LCBncmFwaHFsIH0gZnJvbSAnZ2F0c2J5JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEV4dGVybmFsTGluayB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmNvbnN0IExpc3RJdGVtID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgYWN0aXZlLCBsZXZlbCwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8YSBocmVmPXtwcm9wcy50b30gey4uLnByb3BzfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICA8L2xpPlxuICApO1xufSlgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgYSB7XG4gICAgY29sb3I6ICM1YzY5NzU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiAkeyh7IGxldmVsIH0pID0+IChsZXZlbCA9PT0gMCA/IDcwMCA6IDQwMCl9O1xuICAgIHBhZGRpbmc6IDAuNDVyZW0gMCAwLjQ1cmVtICR7KHByb3BzKSA9PiAyICsgKHByb3BzLmxldmVsIHx8IDApICogMX1yZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzFlZDNjNiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICR7KHByb3BzKSA9PlxuICAgICAgcHJvcHMuYWN0aXZlICYmXG4gICAgICBgXG4gICAgICAvLyBjb2xvcjogIzY2MzM5OTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiKDIzMCwyMzYsMjQxKSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZCBub25lIHNvbGlkIHNvbGlkO1xuICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMHB4IDFweCAxcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGB9IC8vIGV4dGVybmFsIGxpbmsgaWNvblxuICAgIHN2ZyB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTaWRlYmFyID0gc3R5bGVkKCdhc2lkZScpYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IC1tb3otc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAwcHggNHB4IDFweCByZ2JhKDE3NSwgMTU4LCAyMzIsIDAuNCk7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbmA7XG5cbmNvbnN0IERpdmlkZXIgPSBzdHlsZWQoKHByb3BzKSA9PiAoXG4gIDxsaSB7Li4ucHJvcHN9PlxuICAgIDxociAvPlxuICA8L2xpPlxuKSlgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuXG4gIGhyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGU3ZjM7XG4gIH1cbmA7XG5cbmNvbnN0IFNpZGViYXJMYXlvdXQgPSAoeyBsb2NhdGlvbiB9KSA9PiAoXG4gIDxTdGF0aWNRdWVyeVxuICAgIHF1ZXJ5PXtncmFwaHFsYFxuICAgICAgcXVlcnkge1xuICAgICAgICBhbGxNZHgge1xuICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cbiAgICByZW5kZXI9eyh7IGFsbE1keCB9KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U2lkZWJhcj5cbiAgICAgICAgICB7Y29uZmlnLnNpZGViYXIudGl0bGUgPyAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17J3NpZGViYXJUaXRsZSBoaWRkZW5Nb2JpbGUnfVxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbmZpZy5zaWRlYmFyLnRpdGxlIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9eydzaWRlQmFyVUwnfT5cbiAgICAgICAgICAgIDxUcmVlIGVkZ2VzPXthbGxNZHguZWRnZXN9IC8+XG4gICAgICAgICAgICB7Y29uZmlnLnNpZGViYXIubGlua3MgJiYgY29uZmlnLnNpZGViYXIubGlua3MubGVuZ3RoID4gMCAmJiA8RGl2aWRlciAvPn1cbiAgICAgICAgICAgIHtjb25maWcuc2lkZWJhci5saW5rcy5tYXAoKGxpbmssIGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAobGluay5saW5rICE9PSAnJyAmJiBsaW5rLnRleHQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2tleX0gdG89e2xpbmsubGlua30+XG4gICAgICAgICAgICAgICAgICAgIHtsaW5rLnRleHR9XG4gICAgICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvU2lkZWJhcj5cbiAgICAgICk7XG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJMYXlvdXQ7XG4iXX0= */"));

const Sidebar = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__["default"])('aside',  false ? 0 : {
  target: "e1sbq3r11",
  label: "Sidebar"
})( false ? 0 : {
  name: "z7d7m6",
  styles: "width:100%;height:100vh;overflow:auto;position:fixed;padding-left:0px;position:-webkit-sticky;position:-moz-sticky;position:sticky;top:0;padding-right:0;-webkit-box-shadow:-1px 0px 4px 1px rgba(175, 158, 232, 0.4);@media only screen and (max-width: 1023px){width:100%;height:100vh;}@media (min-width: 767px) and (max-width: 1023px){padding-left:0;}@media only screen and (max-width: 767px){padding-left:0px;height:auto;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvc2lkZWJhci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQytCIiwiZmlsZSI6Ii91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvc2lkZWJhci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmVlIGZyb20gJy4vdHJlZSc7XG5pbXBvcnQgeyBTdGF0aWNRdWVyeSwgZ3JhcGhxbCB9IGZyb20gJ2dhdHNieSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBFeHRlcm5hbExpbmsgfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5jb25zdCBMaXN0SXRlbSA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIGFjdGl2ZSwgbGV2ZWwsIC4uLnByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPGEgaHJlZj17cHJvcHMudG99IHsuLi5wcm9wc30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgPC9saT5cbiAgKTtcbn0pYFxuICBsaXN0LXN0eWxlOiBub25lO1xuXG4gIGEge1xuICAgIGNvbG9yOiAjNWM2OTc1O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogJHsoeyBsZXZlbCB9KSA9PiAobGV2ZWwgPT09IDAgPyA3MDAgOiA0MDApfTtcbiAgICBwYWRkaW5nOiAwLjQ1cmVtIDAgMC40NXJlbSAkeyhwcm9wcykgPT4gMiArIChwcm9wcy5sZXZlbCB8fCAwKSAqIDF9cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICMxZWQzYzYgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAkeyhwcm9wcykgPT5cbiAgICAgIHByb3BzLmFjdGl2ZSAmJlxuICAgICAgYFxuICAgICAgLy8gY29sb3I6ICM2NjMzOTk7XG4gICAgICBib3JkZXItY29sb3I6IHJnYigyMzAsMjM2LDI0MSkgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQgbm9uZSBzb2xpZCBzb2xpZDtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4IDBweCAxcHggMXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBgfSAvLyBleHRlcm5hbCBsaW5rIGljb25cbiAgICBzdmcge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU2lkZWJhciA9IHN0eWxlZCgnYXNpZGUnKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiAtbW96LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMHB4IDRweCAxcHggcmdiYSgxNzUsIDE1OCwgMjMyLCAwLjQpO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5gO1xuXG5jb25zdCBEaXZpZGVyID0gc3R5bGVkKChwcm9wcykgPT4gKFxuICA8bGkgey4uLnByb3BzfT5cbiAgICA8aHIgLz5cbiAgPC9saT5cbikpYFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcblxuICBociB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlN2YzO1xuICB9XG5gO1xuXG5jb25zdCBTaWRlYmFyTGF5b3V0ID0gKHsgbG9jYXRpb24gfSkgPT4gKFxuICA8U3RhdGljUXVlcnlcbiAgICBxdWVyeT17Z3JhcGhxbGBcbiAgICAgIHF1ZXJ5IHtcbiAgICAgICAgYWxsTWR4IHtcbiAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgZmllbGRzIHtcbiAgICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG4gICAgcmVuZGVyPXsoeyBhbGxNZHggfSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNpZGViYXI+XG4gICAgICAgICAge2NvbmZpZy5zaWRlYmFyLnRpdGxlID8gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9eydzaWRlYmFyVGl0bGUgaGlkZGVuTW9iaWxlJ31cbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjb25maWcuc2lkZWJhci50aXRsZSB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXsnc2lkZUJhclVMJ30+XG4gICAgICAgICAgICA8VHJlZSBlZGdlcz17YWxsTWR4LmVkZ2VzfSAvPlxuICAgICAgICAgICAge2NvbmZpZy5zaWRlYmFyLmxpbmtzICYmIGNvbmZpZy5zaWRlYmFyLmxpbmtzLmxlbmd0aCA+IDAgJiYgPERpdmlkZXIgLz59XG4gICAgICAgICAgICB7Y29uZmlnLnNpZGViYXIubGlua3MubWFwKChsaW5rLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGxpbmsubGluayAhPT0gJycgJiYgbGluay50ZXh0ICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtrZXl9IHRvPXtsaW5rLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICB7bGluay50ZXh0fVxuICAgICAgICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rIHNpemU9ezE0fSAvPlxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L1NpZGViYXI+XG4gICAgICApO1xuICAgIH19XG4gIC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyTGF5b3V0O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const Divider = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__["default"])(props => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("li", props, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("hr", null)),  false ? 0 : {
  target: "e1sbq3r10",
  label: "Divider"
})( false ? 0 : {
  name: "1q387v1",
  styles: "list-style:none;padding:0.5rem 0;hr{margin:0;padding:0;border:0;border-bottom:1px solid #ede7f3;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvc2lkZWJhci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRkUiLCJmaWxlIjoiL3Vzci9sb2NhbC9hcHAvb3RoZXIva29hLWJvb3N0ZXItcGFnZS9zcmMvY29tcG9uZW50cy9zaWRlYmFyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyZWUgZnJvbSAnLi90cmVlJztcbmltcG9ydCB7IFN0YXRpY1F1ZXJ5LCBncmFwaHFsIH0gZnJvbSAnZ2F0c2J5JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEV4dGVybmFsTGluayB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmNvbnN0IExpc3RJdGVtID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgYWN0aXZlLCBsZXZlbCwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8YSBocmVmPXtwcm9wcy50b30gey4uLnByb3BzfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICA8L2xpPlxuICApO1xufSlgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgYSB7XG4gICAgY29sb3I6ICM1YzY5NzU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiAkeyh7IGxldmVsIH0pID0+IChsZXZlbCA9PT0gMCA/IDcwMCA6IDQwMCl9O1xuICAgIHBhZGRpbmc6IDAuNDVyZW0gMCAwLjQ1cmVtICR7KHByb3BzKSA9PiAyICsgKHByb3BzLmxldmVsIHx8IDApICogMX1yZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzFlZDNjNiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICR7KHByb3BzKSA9PlxuICAgICAgcHJvcHMuYWN0aXZlICYmXG4gICAgICBgXG4gICAgICAvLyBjb2xvcjogIzY2MzM5OTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiKDIzMCwyMzYsMjQxKSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZCBub25lIHNvbGlkIHNvbGlkO1xuICAgICAgYm9yZGVyLXdpZHRoOiAxcHggMHB4IDFweCAxcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGB9IC8vIGV4dGVybmFsIGxpbmsgaWNvblxuICAgIHN2ZyB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTaWRlYmFyID0gc3R5bGVkKCdhc2lkZScpYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IC1tb3otc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAwcHggNHB4IDFweCByZ2JhKDE3NSwgMTU4LCAyMzIsIDAuNCk7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjdweCkgYW5kIChtYXgtd2lkdGg6IDEwMjNweCkge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbmA7XG5cbmNvbnN0IERpdmlkZXIgPSBzdHlsZWQoKHByb3BzKSA9PiAoXG4gIDxsaSB7Li4ucHJvcHN9PlxuICAgIDxociAvPlxuICA8L2xpPlxuKSlgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuXG4gIGhyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGU3ZjM7XG4gIH1cbmA7XG5cbmNvbnN0IFNpZGViYXJMYXlvdXQgPSAoeyBsb2NhdGlvbiB9KSA9PiAoXG4gIDxTdGF0aWNRdWVyeVxuICAgIHF1ZXJ5PXtncmFwaHFsYFxuICAgICAgcXVlcnkge1xuICAgICAgICBhbGxNZHgge1xuICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cbiAgICByZW5kZXI9eyh7IGFsbE1keCB9KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U2lkZWJhcj5cbiAgICAgICAgICB7Y29uZmlnLnNpZGViYXIudGl0bGUgPyAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17J3NpZGViYXJUaXRsZSBoaWRkZW5Nb2JpbGUnfVxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbmZpZy5zaWRlYmFyLnRpdGxlIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9eydzaWRlQmFyVUwnfT5cbiAgICAgICAgICAgIDxUcmVlIGVkZ2VzPXthbGxNZHguZWRnZXN9IC8+XG4gICAgICAgICAgICB7Y29uZmlnLnNpZGViYXIubGlua3MgJiYgY29uZmlnLnNpZGViYXIubGlua3MubGVuZ3RoID4gMCAmJiA8RGl2aWRlciAvPn1cbiAgICAgICAgICAgIHtjb25maWcuc2lkZWJhci5saW5rcy5tYXAoKGxpbmssIGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAobGluay5saW5rICE9PSAnJyAmJiBsaW5rLnRleHQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2tleX0gdG89e2xpbmsubGlua30+XG4gICAgICAgICAgICAgICAgICAgIHtsaW5rLnRleHR9XG4gICAgICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvU2lkZWJhcj5cbiAgICAgICk7XG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJMYXlvdXQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

const SidebarLayout = ({
  location
}) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_6__.StaticQuery, {
  query: "2619113677",
  render: ({
    allMdx
  }) => {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(Sidebar, null, (_config__WEBPACK_IMPORTED_MODULE_7___default().sidebar.title) ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: 'sidebarTitle hiddenMobile',
      dangerouslySetInnerHTML: {
        __html: (_config__WEBPACK_IMPORTED_MODULE_7___default().sidebar.title)
      }
    }) : null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("ul", {
      className: 'sideBarUL'
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tree__WEBPACK_IMPORTED_MODULE_5__["default"], {
      edges: allMdx.edges
    }), (_config__WEBPACK_IMPORTED_MODULE_7___default().sidebar.links) && (_config__WEBPACK_IMPORTED_MODULE_7___default().sidebar.links.length) > 0 && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(Divider, null), _config__WEBPACK_IMPORTED_MODULE_7___default().sidebar.links.map((link, key) => {
      if (link.link !== '' && link.text !== '') {
        return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(ListItem, {
          key: key,
          to: link.link
        }, link.text, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_9__["default"], {
          size: 14
        }));
      }
    })));
  },
  data: _public_page_data_sq_d_2619113677_json__WEBPACK_IMPORTED_MODULE_3__
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarLayout);

/***/ }),

/***/ "./src/components/sidebar/tree.js":
/*!****************************************!*\
  !*** ./src/components/sidebar/tree.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _treeNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./treeNode */ "./src/components/sidebar/treeNode.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






const calculateTreeData = edges => {
  const originalData = (_config__WEBPACK_IMPORTED_MODULE_3___default().sidebar.ignoreIndex) ? edges.filter(({
    node: {
      fields: {
        slug
      }
    }
  }) => slug !== '/') : edges;
  const tree = originalData.reduce((accu, {
    node: {
      fields: {
        slug,
        title
      }
    }
  }) => {
    const parts = slug.split('/');
    let {
      items: prevItems
    } = accu;
    const slicedParts = (_config__WEBPACK_IMPORTED_MODULE_3___default().gatsby) && (_config__WEBPACK_IMPORTED_MODULE_3___default().gatsby.trailingSlash) ? parts.slice(1, -2) : parts.slice(1, -1);

    for (const part of slicedParts) {
      let tmp = prevItems && prevItems.find(({
        label
      }) => label == part);

      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }
      } else {
        tmp = {
          label: part,
          items: []
        };
        prevItems.push(tmp);
      }

      prevItems = tmp.items;
    }

    const slicedLength = (_config__WEBPACK_IMPORTED_MODULE_3___default().gatsby) && (_config__WEBPACK_IMPORTED_MODULE_3___default().gatsby.trailingSlash) ? parts.length - 2 : parts.length - 1;
    const existingItem = prevItems.find(({
      label
    }) => label === parts[slicedLength]);

    if (existingItem) {
      existingItem.url = slug;
      existingItem.title = title;
    } else {
      prevItems.push({
        label: parts[slicedLength],
        url: slug,
        items: [],
        title
      });
    }

    return accu;
  }, {
    items: []
  });
  const {
    sidebar: {
      forcedNavOrder = []
    }
  } = (_config__WEBPACK_IMPORTED_MODULE_3___default());
  const tmp = [...forcedNavOrder];

  if ((_config__WEBPACK_IMPORTED_MODULE_3___default().gatsby) && (_config__WEBPACK_IMPORTED_MODULE_3___default().gatsby.trailingSlash)) {}

  tmp.reverse();
  return tmp.reduce((accu, slug) => {
    const parts = slug.split('/');
    let {
      items: prevItems
    } = accu;
    const slicedParts = (_config__WEBPACK_IMPORTED_MODULE_3___default().gatsby) && (_config__WEBPACK_IMPORTED_MODULE_3___default().gatsby.trailingSlash) ? parts.slice(1, -2) : parts.slice(1, -1);

    for (const part of slicedParts) {
      let tmp = prevItems.find(item => item && item.label == part);

      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }
      } else {
        tmp = {
          label: part,
          items: []
        };
        prevItems.push(tmp);
      }

      if (tmp && tmp.items) {
        prevItems = tmp.items;
      }
    } // sort items alphabetically.


    prevItems.map(item => {
      item.items = item.items.sort(function (a, b) {
        if (a.label < b.label) return -1;
        if (a.label > b.label) return 1;
        return 0;
      });
    });
    const slicedLength = (_config__WEBPACK_IMPORTED_MODULE_3___default().gatsby) && (_config__WEBPACK_IMPORTED_MODULE_3___default().gatsby.trailingSlash) ? parts.length - 2 : parts.length - 1;
    const index = prevItems.findIndex(({
      label
    }) => label === parts[slicedLength]);

    if (prevItems.length) {
      accu.items.unshift(prevItems.splice(index, 1)[0]);
    }

    return accu;
  }, tree);
};

const Tree = ({
  edges
}) => {
  let {
    0: treeData
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(() => {
    return calculateTreeData(edges);
  });
  const defaultCollapsed = {};
  treeData.items.forEach(item => {
    if ((_config__WEBPACK_IMPORTED_MODULE_3___default().sidebar.collapsedNav) && _config__WEBPACK_IMPORTED_MODULE_3___default().sidebar.collapsedNav.includes(item.url)) {
      defaultCollapsed[item.url] = true;
    } else {
      defaultCollapsed[item.url] = false;
    }
  });
  const {
    0: collapsed,
    1: setCollapsed
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultCollapsed);

  const toggle = url => {
    setCollapsed(_objectSpread(_objectSpread({}, collapsed), {}, {
      [url]: !collapsed[url]
    }));
  };

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_treeNode__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: `${(_config__WEBPACK_IMPORTED_MODULE_3___default().sidebar.frontLine) ? 'showFrontLine' : 'hideFrontLine'} firstLevel`,
    setCollapsed: toggle,
    collapsed: collapsed
  }, treeData));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);

/***/ }),

/***/ "./src/components/sidebar/treeNode.js":
/*!********************************************!*\
  !*** ./src/components/sidebar/treeNode.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_opened__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/opened */ "./src/components/images/opened.js");
/* harmony import */ var _images_closed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/closed */ "./src/components/images/closed.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../link */ "./src/components/link.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");


const _excluded = ["className", "setCollapsed", "collapsed", "url", "title", "items"];







const TreeNode = _ref => {
  let {
    className = '',
    setCollapsed,
    collapsed,
    url,
    title,
    items
  } = _ref,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;
  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }

  const active = location && (location.pathname === url || location.pathname === (_config__WEBPACK_IMPORTED_MODULE_5___default().gatsby.pathPrefix) + url);
  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
    className: calculatedClassName
  }, title && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
    to: url
  }, title, !(_config__WEBPACK_IMPORTED_MODULE_5___default().sidebar.frontLine) && title && hasChildren ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
    onClick: collapse,
    "aria-label": "collapse",
    className: "collapser"
  }, !isCollapsed ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(_images_opened__WEBPACK_IMPORTED_MODULE_3__["default"], null) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(_images_closed__WEBPACK_IMPORTED_MODULE_4__["default"], null)) : null), !isCollapsed && hasChildren ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)("ul", null, items.map((item, index) => (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(TreeNode, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: item.url + index.toString(),
    setCollapsed: setCollapsed,
    collapsed: collapsed
  }, item)))) : null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreeNode);

/***/ }),

/***/ "./src/components/styles/Docs.js":
/*!***************************************!*\
  !*** ./src/components/styles/Docs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledHeading": () => (/* binding */ StyledHeading),
/* harmony export */   "Edit": () => (/* binding */ Edit),
/* harmony export */   "StyledMainWrapper": () => (/* binding */ StyledMainWrapper)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

const StyledHeading = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('h1',  false ? 0 : {
  target: "e1m7sxnn2",
  label: "StyledHeading"
})("font-size:32px;line-height:1.5;font-weight:500;border-left:2px solid #1ed3c6;padding:0 16px;flex:1;margin-top:0;padding-top:0;color:", props => props.theme.colors.heading, ";" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvc3R5bGVzL0RvY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRXlDIiwiZmlsZSI6Ii91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvc3R5bGVzL0RvY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRIZWFkaW5nID0gc3R5bGVkKCdoMScpYFxuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzFlZDNjNjtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBmbGV4OiAxO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmhlYWRpbmd9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEVkaXQgPSBzdHlsZWQoJ2RpdicpYFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMSwgMjIwLCAyMjgpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQgMHM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiByZ2IoMzYsIDQyLCA0OSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMTE2LCAxMjksIDE0MSwgMC4xKSAwcHggMXB4IDFweCAwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ3LCAyNDkpO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZE1haW5XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuXG4gIHVsLFxuICBvbCB7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiA0MHB4O1xuICAgIC1tb3otcGFkZGluZy1zdGFydDogNDBweDtcbiAgICAtby1wYWRkaW5nLXN0YXJ0OiA0MHB4O1xuICAgIG1hcmdpbjogMjRweCAwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMmVtO1xuXG4gICAgbGkge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICB9XG5cbiAgYSB7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXM7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmxpbmt9O1xuICB9XG5cbiAgY29kZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VkZTdmMztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMnB4IDZweDtcbiAgICBmb250LXNpemU6IDAuOTM3NWVtO1xuXG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cbmA7XG4iXX0= */"));
const Edit = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('div',  false ? 0 : {
  target: "e1m7sxnn1",
  label: "Edit"
})( false ? 0 : {
  name: "1vkevom",
  styles: "padding:1rem 1.5rem;text-align:right;a{font-size:14px;font-weight:500;line-height:1em;text-decoration:none;color:#555;border:1px solid rgb(211, 220, 228);cursor:pointer;border-radius:3px;transition:all 0.2s ease-out 0s;text-decoration:none;color:rgb(36, 42, 49);background-color:rgb(255, 255, 255);box-shadow:rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;height:30px;padding:5px 16px;&:hover{background-color:rgb(245, 247, 249);}}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvc3R5bGVzL0RvY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2lDIiwiZmlsZSI6Ii91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvc3R5bGVzL0RvY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRIZWFkaW5nID0gc3R5bGVkKCdoMScpYFxuICBmb250LXNpemU6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzFlZDNjNjtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBmbGV4OiAxO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmhlYWRpbmd9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEVkaXQgPSBzdHlsZWQoJ2RpdicpYFxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM1NTU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxMSwgMjIwLCAyMjgpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQgMHM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiByZ2IoMzYsIDQyLCA0OSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMTE2LCAxMjksIDE0MSwgMC4xKSAwcHggMXB4IDFweCAwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ3LCAyNDkpO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZE1haW5XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuXG4gIHVsLFxuICBvbCB7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiA0MHB4O1xuICAgIC1tb3otcGFkZGluZy1zdGFydDogNDBweDtcbiAgICAtby1wYWRkaW5nLXN0YXJ0OiA0MHB4O1xuICAgIG1hcmdpbjogMjRweCAwcHg7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMmVtO1xuXG4gICAgbGkge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuODtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICB9XG5cbiAgYSB7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXM7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmxpbmt9O1xuICB9XG5cbiAgY29kZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VkZTdmMztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMnB4IDZweDtcbiAgICBmb250LXNpemU6IDAuOTM3NWVtO1xuXG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cbmA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
const StyledMainWrapper = (0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])("div",  false ? 0 : {
  target: "e1m7sxnn0",
  label: "StyledMainWrapper"
})("max-width:750px;color:", props => props.theme.colors.text, ";ul,ol{-webkit-padding-start:40px;-moz-padding-start:40px;-o-padding-start:40px;margin:24px 0px;padding:0px 0px 0px 2em;li{font-size:16px;line-height:1.8;font-weight:400;}}a{transition:color 0.15s;color:", props => props.theme.colors.link, ";}code{border:1px solid #ede7f3;border-radius:4px;padding:2px 6px;font-size:0.9375em;background:", props => props.theme.colors.background, ";}@media (max-width: 767px){padding:0 15px;}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvc3R5bGVzL0RvY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0MyQyIsImZpbGUiOiIvdXNyL2xvY2FsL2FwcC9vdGhlci9rb2EtYm9vc3Rlci1wYWdlL3NyYy9jb21wb25lbnRzL3N0eWxlcy9Eb2NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSGVhZGluZyA9IHN0eWxlZCgnaDEnKWBcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMxZWQzYzY7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5oZWFkaW5nfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBFZGl0ID0gc3R5bGVkKCdkaXYnKWBcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gIGEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMTEsIDIyMCwgMjI4KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0IDBzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogcmdiKDM2LCA0MiwgNDkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDExNiwgMTI5LCAxNDEsIDAuMSkgMHB4IDFweCAxcHggMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NywgMjQ5KTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRNYWluV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogNzUwcHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcblxuICB1bCxcbiAgb2wge1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogNDBweDtcbiAgICAtbW96LXBhZGRpbmctc3RhcnQ6IDQwcHg7XG4gICAgLW8tcGFkZGluZy1zdGFydDogNDBweDtcbiAgICBtYXJnaW46IDI0cHggMHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDJlbTtcblxuICAgIGxpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgfVxuXG4gIGEge1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5saW5rfTtcbiAgfVxuXG4gIGNvZGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGU3ZjM7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgZm9udC1zaXplOiAwLjkzNzVlbTtcblxuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICB9XG5gO1xuIl19 */"));

/***/ }),

/***/ "./src/components/styles/GlobalStyles.js":
/*!***********************************************!*\
  !*** ./src/components/styles/GlobalStyles.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseStyles": () => (/* binding */ baseStyles)
/* harmony export */ });
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


const baseStyles =  false ? 0 : {
  name: "vyyzxe-baseStyles",
  styles: "@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');{}@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap');{}*{margin:0;padding:0;box-sizing:border-box;font-display:swap;}::-webkit-input-placeholder{color:#c2c2c2;}:-ms-input-placeholder{color:#c2c2c2;}::placeholder{color:#c2c2c2;}html,body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Roboto Light','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';font-size:16px;scroll-behavior:smooth;}a{transition:color 0.15s;}body{font-family:'Roboto';}.visibleMobile{display:none;}.visibleMobileView{display:none!important;}.video-responsive{position:relative;padding-bottom:56.2%;}a{text-decoration:none;}a:hover{text-decoration:none;}.displayInline{display:inline-block;}.navBarToggle{border:0px solid #fff;border-radius:4px;width:36px;height:33px;position:absolute;right:20px;padding:8px 5px;display:none;}.navBarToggle .iconBar{display:block;width:22px;height:2px;border-radius:1px;margin:0 auto;margin-top:4px;background-color:#001934;}.navBarToggle .iconBar:first-child{margin-top:0px;}.video-responsive iframe{position:absolute;width:100%;height:100%;}.diffNewLine{color:#22863a;background-color:#f0fff4;}.diffRemoveLine{color:red;background-color:#ffcccc;}.navBarParent{width:100%;float:left;display:flex;align-items:center;}.divider{height:30px;margin:0 15px;border-right:1px solid rgba(255, 255, 255, 0.3);}.navBarULRight{}.githubIcon{width:15px;margin-right:5px;}.githubSection{display:flex;align-items:center;color:#000;opacity:0.7;}.githubSection:hover{text-decoration:none;opacity:1;}.navbar-default .navbar-toggle .icon-bar{background-color:#fff!important;}.navbar-default .navbar-toggle:focus,.navbar-default .navbar-toggle:hover{background-color:#001933;}.headerWrapper{border-bottom:1px solid rgb(212, 218, 223);box-shadow:rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;display:flex;align-items:center;}.formElement{background-color:transparent;padding:4px;border-radius:5px;position:relative;}.formElement:focus{outline:none;border:none;}.formElement svg path{fill:#2fd2c5;}.searchInput{width:100%;background-color:rgba(28,211,198,.12)!important;border-width:0!important;color:#C2C2C2;padding:10px;border-radius:5px;color:#fff;opacity:.6;padding-left:38px;max-width:600px;}.searchInput:focus,.searchInput:visited,.searchInput:hover,.searchInput:focus-within{outline:none;border:0;}.searchWrapper{padding-left:0px;padding-right:20px;flex:1;position:relative;}.searchWrapper a{font-weight:500;}.hitWrapper{background-color:#fff;padding:0.7em 1em 0.4em;border-radius:4px;position:absolute;width:80vw;max-width:30em;top:40px;border:1px solid #ccc;box-shadow:0 1px 4px 0 rgba(0, 0, 0, 0.16);height:auto;max-height:80vh;overflow:scroll;left:0;}.hitWrapper ul li{margin-top:0.7em;padding-top:0.7em;border-top:1px solid;list-style-type:none;}.hitWrapper ul li:first-child{border-top:0px;margin-top:0px;color:black!important;padding:0px;}.showResults{display:block;}.hideResults{display:none;}.hitWrapper span{color:black;font-size:14px;}.headerTitle{height:auto;font-size:16px;line-height:1.5;font-weight:300;color:#fff!important;margin-top:16px;text-transform:uppercase;}.headerTitle a{color:#fff;}.headerTitle a:hover{text-decoration:none;opacity:0.8;}.logoWrapper{padding:21px 0;padding-left:20px;}.logoContent{font-family:'Roboto';margin-left:16px;font-size:28px;line-height:1.5;font-weight:500;padding-right:10px;}.removePadd{padding:0!important;}.navBarDefault{background-color:#001934;border-radius:0;border-top:0;margin-bottom:0;border:0;display:flex;align-items:center;box-shadow:-1px 0px 4px 1px rgba(175, 158, 232, 0.4);-webkit-box-shadow:-1px 0px 4px 1px rgba(175, 158, 232, 0.4);-moz-box-shadow:-1px 0px 4px 1px rgba(175, 158, 232, 0.8);-o-box-shadow:-1px 0px 4px 1px rgba(175, 158, 232, 0.4);z-index:1;padding:15px;position:relative;height:80px;}.navBarHeader{min-width:335px;padding-right:20px;display:flex;align-items:center;}.navBarBrand{padding:0px 0px;display:flex;align-items:center;}.navBarBrand img{width:120px;margin-right:6px;display:inline-block;}.navBarUL li{list-style-type:none;}.navBarUL{-webkit-overflow-scrolling:touch;}.navBarUL li a{font-family:'Roboto';color:#fff!important;font-size:16px;font-weight:500;line-height:1em;opacity:1;padding:10px 15px;}.navBarNav{display:flex;align-items:center;}.navBarUL li a img,.navBarUL li a .shareIcon{width:20px;}.navBarUL li a:hover{opacity:0.7;}pre{border:0!important;background-color:rgb(245, 247, 249);}blockquote{color:rgb(116, 129, 141);margin:0px 0px 24px;padding:0px 0px 0px 12px;border-left:4px solid rgb(230, 236, 241);border-color:rgb(230, 236, 241);}.socialWrapper{display:flex;align-items:center;}.socialWrapper li{display:inline-block;}.socialWrapper li a{display:contents;}.discordBtn,.twitterBtn{border-radius:4px;border:solid 1px #d1d2d3;background-color:#f1f5f8;width:20px;height:20px;padding-top:2px;margin-left:8px;display:flex;align-items:center;justify-content:center;opacity:.8;cursor:pointer;}.twitterBtn img{width:12px!important;}.discordBtn img{width:10px!important;}.discordBtn:hover,.twitterBtn:hover{opacity:1;}.discordBtn{img{width:10px;}}.sidebarTitle{background-color:#f8f8f8;padding:18px 16px;font-family:'Poppins';font-size:18px;font-weight:600;color:#001934;display:flex;align-items:center;}.sideBarShow{display:none;}.sidebarTitle a{color:#001934;}.greenCircle{width:8px;height:8px;background-color:#1cd3c6;border-radius:50%;margin:0 12px;}.headerNav{font-family:'Roboto';padding:0px 24px;color:#001933;font-size:16px;font-weight:500;line-height:1em;}.headerNav a{color:#001933;text-decoration:none;}.headerNav a:hover{text-decoration:none;}.logoWrapper img{width:40px;}.sideBarUL{margin-top:32px;}.sideBarUL li{list-style-type:none;width:auto;}.sideBarUL li a{font-size:14px;font-weight:500;line-height:1.5;padding:7px 24px 7px 16px;padding-left:10px;padding-right:25px;border-style:solid none solid solid;border-width:1px 0px 1px 1px;border-color:transparent currentcolor transparent transparent;}.hideFrontLine .collapser{background:transparent;border:none;outline:none;position:absolute;right:20px;z-index:1;cursor:pointer;}.hideFrontLine .active>a{background-color:#1ed3c6;color:#fff!important;}.firstLevel ul li .collapser svg path{fill:#fff!important;}.active .collapser>svg>path{fill:#001933!important;}.firstLevel ul .item ul .item{border-left:1px solid #e6ecf1;}.sideBarUL .item{list-style:none;padding:0;}.sideBarUL .item>a{color:#1ED3C6;text-decoration:none;display:flex;align-items:center;position:relative;width:100%;padding-right:35px;padding-left:15px;}.showFrontLine .item>a:hover{background-color:#001933;}.showFrontLine .active>a{background-color:#001933;}.sideBarUL .item .item{margin-left:16px;}.firstLevel>ul>.item{margin-left:0!important;}.showFrontLine .item .item{border-left:1px solid #e6ecf1;border-left-color:rgb(230, 236, 241);padding:0;width:calc(100% - 16px)!important;}.showFrontLine .item .active>a{border-color:rgb(230, 236, 241)!important;border-style:solid none solid solid;border-width:1px 0px 1px 1px;background-color:#1ed3c6!important;color:#fff;}.titleWrapper{display:flex;align-items:center;padding-bottom:40px;border-bottom:1px solid rgb(230, 236, 241);margin-bottom:32px;}.gitBtn{height:30px;min-height:30px;display:flex;align-items:center;}.gitBtn img{width:15px;display:inline-block;margin-right:5px;}.addPaddTopBottom{padding:50px 0;}.preRightWrapper{display:block;margin:0px;flex:1 1 0%;padding:16px;text-align:right;}.smallContent{display:block;margin:0px;padding:0px;color:#6e6e6e;}.smallContent span{font-size:12px;line-height:1.625;font-weight:400;}.nextRightWrapper{display:block;margin:0px;padding:16px;flex:1 1 0%;}table{padding:0;}table tr{border-top:1px solid #cccccc;margin:0;padding:0;}table tr:nth-child(2n){background-color:#f8f8f8;}table tr th{font-weight:bold;border:1px solid #cccccc;text-align:left;margin:0;padding:6px 13px;}table tr td{border:1px solid #cccccc;text-align:left;margin:0;padding:6px 13px;}table tr th :first-child,table tr td :first-child{margin-top:0;}table tr th :last-child,table tr td :last-child{margin-bottom:0;}img{max-width:100%;}.githubBtn{display:flex;align-items:center;font-size:16px;padding:10px 0px;padding-left:15px;max-height:40px;}.githubBtn span span{display:flex;align-items:center;}.communitySection{font-size:24px;font-weight:700;}.authorSection{padding:20px 0;}.authorSection,.authorName{display:flex;align-items:center;}.authorImg img{width:75px;height:75px;border-radius:50%;min-width:75px;max-width:75px;min-height:75px;max-height:75px;}.authorDetails{padding-left:10px;}.authorDesc{padding-top:5px;font-size:14px;}.authorName img{margin-left:10px;display:inline-block;width:20px;}.authorName img:hover{opacity:0.7;}.heading1{font-size:26px;font-weight:800;line-height:1.5;margin-bottom:16px;margin-top:32px;}.heading2{font-size:24px;font-weight:700;line-height:1.5;margin-bottom:16px;margin-top:32px;}.heading3{font-size:20px;font-weight:600;line-height:1.5;margin-bottom:16px;margin-top:32px;}.heading4{font-size:18px;font-weight:500;line-height:1.5;margin-bottom:16px;margin-top:32px;}.heading5{font-size:16px;font-weight:400;line-height:1.5;margin-bottom:16px;margin-top:32px;}.heading6{font-size:14px;font-weight:300;line-height:1.5;margin-bottom:16px;margin-top:32px;}.paragraph{margin:16px 0px 32px;line-height:1.625;}.pre{font-size:14px;margin:0px;padding:16px;overflow:auto;}.poweredBy{font-size:0.6em;text-align:end;padding:0;}.topnav{-webkit-transition:top 0.5s,bottom 0.5s;}@media (max-width: 767px){.formElement svg path{fill:#001934;}.visibleMobileView{display:block!important;}.searchInput{color:#001934;}.socialWrapper{position:absolute;right:10px;top:29px;}.responsive{margin-top:15px;position:relative;padding-bottom:20px;border-top:1px solid #fff;}.headerTitle{padding-right:50px;font-size:16px;}.navBarBrand{min-height:40px;}.navBarBrand img{margin-right:8px;}.topnav.responsive .visibleMobile{display:block;}.topnav .navBarUL{display:none;}.topnav.responsive .navBarUL{display:block;text-align:left;}.hiddenMobile{display:none!important;}hr{margin-top:0;margin-bottom:0;}.navBarParent{display:block;}.separator{margin-top:20px;margin-bottom:20px;}.navBarULRight{position:static;}.navBarUL{display:flex;align-items:center;margin:7.5px 0px;}.navBarUL li{height:37px;}.navBarUL li a{font-size:14px;padding:10px 15px;}.navBarDefault{display:block;height:auto;}.navBarToggle{margin-right:0;display:block;position:absolute;left:11px;top:15px;background:#fff;}.navBarHeader{display:flex;min-width:auto;padding-right:0;align-items:center;}.navBarBrand{font-size:20px;padding:0 0;padding-left:0;flex:initial;padding-right:15px;}.titleWrapper{padding:0 15px;display:block;}.gitBtn{display:inline-block;}.mobileView{text-align:left!important;padding-left:0!important;}.searchWrapper{padding:0px 0;padding-top:0px;position:absolute;bottom:0px;width:calc(100% - 70px);position:absolute;left:40px;top:8px;}.hitWrapper{width:100%;right:0;top:35px;max-height:fit-content;position:static;}}@media (min-width: 768px) and (max-width: 991px){.navBarDefault{padding:10px;}.navBarBrand{font-size:22px;}.navBarHeader{min-width:240px;flex:initial;}.githubBtn{padding:10px 10px;}.divider{margin:0 5px;height:20px;}.hitWrapper{max-width:500px;}.navBarUL li a{padding:10px 5px;}.searchWrapper{padding-left:0px;}};label:baseStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvc3R5bGVzL0dsb2JhbFN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFNkIiLCJmaWxlIjoiL3Vzci9sb2NhbC9hcHAvb3RoZXIva29hLWJvb3N0ZXItcGFnZS9zcmMvY29tcG9uZW50cy9zdHlsZXMvR2xvYmFsU3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgYmFzZVN0eWxlcyA9IGNzc2BcbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNjAwJmRpc3BsYXk9c3dhcCcpO1xuICAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgfVxuICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIC8qIEVkZ2UgKi9cbiAgICBjb2xvcjogI2MyYzJjMjtcbiAgfVxuXG4gIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIC8qIEludGVybmV0IEV4cGxvcmVyICovXG4gICAgY29sb3I6ICNjMmMyYzI7XG4gIH1cblxuICA6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2MyYzJjMjtcbiAgfVxuICBodG1sLFxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ1JvYm90byBMaWdodCcsICdPeHlnZW4nLFxuICAgICAgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmLFxuICAgICAgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCc7XG5cbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIH1cblxuICBhIHtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cztcbiAgICAvKiBjb2xvcjogIzY2MzM5OTsgKi9cbiAgfVxuXG4gIGJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgfVxuICAudmlzaWJsZU1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAudmlzaWJsZU1vYmlsZVZpZXcge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAudmlkZW8tcmVzcG9uc2l2ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1Ni4yJTtcbiAgfVxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIC5kaXNwbGF5SW5saW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLm5hdkJhclRvZ2dsZSB7XG4gICAgYm9yZGVyOiAwcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzM3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiA4cHggNXB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm5hdkJhclRvZ2dsZSAuaWNvbkJhciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxOTM0O1xuICB9XG4gIC5uYXZCYXJUb2dnbGUgLmljb25CYXI6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuICAudmlkZW8tcmVzcG9uc2l2ZSBpZnJhbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuZGlmZk5ld0xpbmUge1xuICAgIGNvbG9yOiAjMjI4NjNhO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGZmZjQ7XG4gIH1cblxuICAuZGlmZlJlbW92ZUxpbmUge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2NjYztcbiAgfVxuICAubmF2QmFyUGFyZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmRpdmlkZXIge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IDAgMTVweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIH1cbiAgLm5hdkJhclVMUmlnaHQge1xuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDMwcHg7ICovXG4gIH1cbiAgLmdpdGh1Ykljb24ge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG5cbiAgLmdpdGh1YlNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAuZ2l0aHViU2VjdGlvbjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGUgLmljb24tYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci10b2dnbGU6Zm9jdXMsXG4gIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLXRvZ2dsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTkzMztcbiAgfVxuXG4gIC5oZWFkZXJXcmFwcGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxMiwgMjE4LCAyMjMpO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMTE2LCAxMjksIDE0MSwgMC4xKSAwcHggMXB4IDFweCAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5mb3JtRWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmZvcm1FbGVtZW50OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICAuZm9ybUVsZW1lbnQgc3ZnIHBhdGgge1xuICAgIGZpbGw6ICMyZmQyYzU7XG4gIH1cbiAgLnNlYXJjaElucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI4LDIxMSwxOTgsLjEyKSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjQzJDMkMyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG9wYWNpdHk6IC42O1xuICAgIHBhZGRpbmctbGVmdDogMzhweDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICB9XG4gIC5zZWFyY2hJbnB1dDpmb2N1cyxcbiAgLnNlYXJjaElucHV0OnZpc2l0ZWQsXG4gIC5zZWFyY2hJbnB1dDpob3ZlcixcbiAgLnNlYXJjaElucHV0OmZvY3VzLXdpdGhpbiB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gIH1cbiAgLnNlYXJjaFdyYXBwZXIge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgZmxleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnNlYXJjaFdyYXBwZXIgYSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAuaGl0V3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAwLjdlbSAxZW0gMC40ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODB2dztcbiAgICBtYXgtd2lkdGg6IDMwZW07XG4gICAgdG9wOiA0MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LWhlaWdodDogODB2aDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgLmhpdFdyYXBwZXIgdWwgbGkge1xuICAgIG1hcmdpbi10b3A6IDAuN2VtO1xuICAgIHBhZGRpbmctdG9wOiAwLjdlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG4gIC5oaXRXcmFwcGVyIHVsIGxpOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICAuc2hvd1Jlc3VsdHMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5oaWRlUmVzdWx0cyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGl0V3JhcHBlciBzcGFuIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5oZWFkZXJUaXRsZSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbiAgLmhlYWRlclRpdGxlIGEge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLmhlYWRlclRpdGxlIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbiAgLmxvZ29XcmFwcGVyIHtcbiAgICBwYWRkaW5nOiAyMXB4IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG5cbiAgLmxvZ29Db250ZW50IHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLyogSGVhZGVyIHNlY3Rpb24gc3RhcnRzIGhlcmUgKi9cbiAgLnJlbW92ZVBhZGQge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuICAubmF2QmFyRGVmYXVsdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTkzNDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IC0xcHggMHB4IDRweCAxcHggcmdiYSgxNzUsIDE1OCwgMjMyLCAwLjQpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTFweCAwcHggNHB4IDFweCByZ2JhKDE3NSwgMTU4LCAyMzIsIDAuNCk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAtMXB4IDBweCA0cHggMXB4IHJnYmEoMTc1LCAxNTgsIDIzMiwgMC44KTtcbiAgICAtby1ib3gtc2hhZG93OiAtMXB4IDBweCA0cHggMXB4IHJnYmEoMTc1LCAxNTgsIDIzMiwgMC40KTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogODBweDtcbiAgfVxuICAubmF2QmFySGVhZGVyIHtcbiAgICBtaW4td2lkdGg6IDMzNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5uYXZCYXJCcmFuZCB7XG4gICAgcGFkZGluZzogMHB4IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAubmF2QmFyQnJhbmQgaW1nIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5uYXZCYXJVTCBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG4gIC5uYXZCYXJVTCB7XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICB9XG4gIC5uYXZCYXJVTCBsaSBhIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICB9XG4gIC5uYXZCYXJOYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAubmF2QmFyVUwgbGkgYSBpbWcsXG4gIC5uYXZCYXJVTCBsaSBhIC5zaGFyZUljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG4gIC5uYXZCYXJVTCBsaSBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbiAgcHJlIHtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDcsIDI0OSk7IC8qICFpbXBvcnRhbnQ7ICovXG4gIH1cblxuICBibG9ja3F1b3RlIHtcbiAgICBjb2xvcjogcmdiKDExNiwgMTI5LCAxNDEpO1xuICAgIG1hcmdpbjogMHB4IDBweCAyNHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDEycHg7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCByZ2IoMjMwLCAyMzYsIDI0MSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjMwLCAyMzYsIDI0MSk7XG4gIH1cbiAgLnNvY2lhbFdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuc29jaWFsV3JhcHBlciBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5zb2NpYWxXcmFwcGVyIGxpIGEge1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICB9XG4gIC5kaXNjb3JkQnRuLCAudHdpdHRlckJ0biB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNkMWQyZDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmODtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDJweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAuODtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLnR3aXR0ZXJCdG4gaW1nIHtcbiAgICB3aWR0aDogMTJweCAhaW1wb3J0YW50O1xuICB9XG4gIC5kaXNjb3JkQnRuIGltZyB7XG4gICAgd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuICAuZGlzY29yZEJ0bjpob3ZlciwgLnR3aXR0ZXJCdG46aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLmRpc2NvcmRCdG4ge1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICB9XG4gIH1cbiAgLyogSGVhZGVyIHNlY3Rpb24gZW5kcyBoZXJlICovXG4gIC5zaWRlYmFyVGl0bGUge1xuICAgIC8qIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICBwYWRkaW5nOiAxOHB4IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzAwMTkzNDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuc2lkZUJhclNob3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuc2lkZWJhclRpdGxlIGEge1xuICAgIGNvbG9yOiAjMDAxOTM0O1xuICB9XG5cbiAgLmdyZWVuQ2lyY2xlIHtcbiAgICB3aWR0aDogOHB4O1xuICAgIGhlaWdodDogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxY2QzYzY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMCAxMnB4O1xuICB9XG5cbiAgLmhlYWRlck5hdiB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIHBhZGRpbmc6IDBweCAyNHB4O1xuICAgIGNvbG9yOiAjMDAxOTMzO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gIH1cblxuICAuaGVhZGVyTmF2IGEge1xuICAgIGNvbG9yOiAjMDAxOTMzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC5oZWFkZXJOYXYgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLmxvZ29XcmFwcGVyIGltZyB7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cblxuICAuc2lkZUJhclVMIHtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICB9XG5cbiAgLnNpZGVCYXJVTCBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgLnNpZGVCYXJVTCBsaSBhIHtcbiAgICAvKiBjb2xvcjogI2ZmZjsgKi9cbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIHBhZGRpbmc6IDdweCAyNHB4IDdweCAxNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQgbm9uZSBzb2xpZCBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweCAwcHggMXB4IDFweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IGN1cnJlbnRjb2xvciB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5oaWRlRnJvbnRMaW5lIC5jb2xsYXBzZXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5oaWRlRnJvbnRMaW5lIC5hY3RpdmUgPiBhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWVkM2M2O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZpcnN0TGV2ZWwgdWwgbGkgLmNvbGxhcHNlciBzdmcgcGF0aCB7XG4gICAgZmlsbDogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG4gIC5hY3RpdmUgLmNvbGxhcHNlciA+IHN2ZyA+IHBhdGgge1xuICAgIGZpbGw6ICMwMDE5MzMgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5maXJzdExldmVsIHVsIC5pdGVtIHVsIC5pdGVtIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlNmVjZjE7XG4gIH1cblxuICAuc2lkZUJhclVMIC5pdGVtIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuc2lkZUJhclVMIC5pdGVtID4gYSB7XG4gICAgY29sb3I6ICMxRUQzQzY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIH1cblxuICAuc2hvd0Zyb250TGluZSAuaXRlbSA+IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDE5MzM7XG4gIH1cblxuICAuc2hvd0Zyb250TGluZSAuYWN0aXZlID4gYSB7XG4gICAgLyogY29sb3I6ICNmZmY7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMTkzMztcbiAgfVxuXG4gIC5zaWRlQmFyVUwgLml0ZW0gLml0ZW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICB9XG5cbiAgLmZpcnN0TGV2ZWwgPiB1bCA+IC5pdGVtIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNob3dGcm9udExpbmUgLml0ZW0gLml0ZW0ge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U2ZWNmMTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDIzMCwgMjM2LCAyNDEpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2hvd0Zyb250TGluZSAuaXRlbSAuYWN0aXZlID4gYSB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjMwLCAyMzYsIDI0MSkgIWltcG9ydGFudDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkIG5vbmUgc29saWQgc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHggMHB4IDFweCAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlZDNjNiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLnRpdGxlV3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjMwLCAyMzYsIDI0MSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgfVxuXG4gIC5naXRCdG4ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5naXRCdG4gaW1nIHtcbiAgICB3aWR0aDogMTVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cblxuICAuYWRkUGFkZFRvcEJvdHRvbSB7XG4gICAgcGFkZGluZzogNTBweCAwO1xuICB9XG5cbiAgLnByZVJpZ2h0V3JhcHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZmxleDogMSAxIDAlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cblxuICAuc21hbGxDb250ZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgY29sb3I6ICM2ZTZlNmU7XG4gIH1cblxuICAuc21hbGxDb250ZW50IHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMS42MjU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuXG4gIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuICAubmV4dFJpZ2h0V3JhcHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBmbGV4OiAxIDEgMCU7XG4gIH1cblxuICAvKiB0YWJsZXMuY3NzICovXG4gIHRhYmxlIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgdGFibGUgdHIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgdGFibGUgdHI6bnRoLWNoaWxkKDJuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgfVxuXG4gIHRhYmxlIHRyIHRoIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDZweCAxM3B4O1xuICB9XG5cbiAgdGFibGUgdHIgdGQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogNnB4IDEzcHg7XG4gIH1cblxuICB0YWJsZSB0ciB0aCA6Zmlyc3QtY2hpbGQsXG4gIHRhYmxlIHRyIHRkIDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gIHRhYmxlIHRyIHRoIDpsYXN0LWNoaWxkLFxuICB0YWJsZSB0ciB0ZCA6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuICAvKiBlbmQgLSB0YWJsZXMuY3NzICovXG5cbiAgLyogSW1hZ2Ugc3R5bGluZyAqL1xuICBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuICAvKiBlbmQgaW1hZ2UgKi9cbiAgLmdpdGh1YkJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgfVxuICAuZ2l0aHViQnRuIHNwYW4gc3BhbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmNvbW11bml0eVNlY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIC5hdXRob3JTZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gIH1cbiAgLmF1dGhvclNlY3Rpb24sXG4gIC5hdXRob3JOYW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmF1dGhvckltZyBpbWcge1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWluLXdpZHRoOiA3NXB4O1xuICAgIG1heC13aWR0aDogNzVweDtcbiAgICBtaW4taGVpZ2h0OiA3NXB4O1xuICAgIG1heC1oZWlnaHQ6IDc1cHg7XG4gIH1cbiAgLmF1dGhvckRldGFpbHMge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAuYXV0aG9yRGVzYyB7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmF1dGhvck5hbWUgaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDIwcHg7XG4gIH1cbiAgLmF1dGhvck5hbWUgaW1nOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAuaGVhZGluZzEge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICB9XG5cbiAgLmhlYWRpbmcyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMzJweDtcbiAgfVxuXG4gIC5oZWFkaW5nMyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gIH1cblxuICAuaGVhZGluZzQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICB9XG5cbiAgLmhlYWRpbmc1IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMzJweDtcbiAgfVxuXG4gIC5oZWFkaW5nNiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gIH1cblxuICAucGFyYWdyYXBoIHtcbiAgICBtYXJnaW46IDE2cHggMHB4IDMycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjI1O1xuICB9XG5cbiAgLnByZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cblxuICAucG93ZXJlZEJ5IHtcbiAgICBmb250LXNpemU6IDAuNmVtO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC50b3BuYXYge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIDAuNXMsIGJvdHRvbSAwLjVzO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmZvcm1FbGVtZW50IHN2ZyBwYXRoIHtcbiAgICAgIGZpbGw6ICMwMDE5MzQ7XG4gICAgfVxuICAgIC52aXNpYmxlTW9iaWxlVmlldyB7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuc2VhcmNoSW5wdXQge1xuICAgICAgY29sb3I6ICMwMDE5MzQ7XG4gICAgfVxuICAgIC5zb2NpYWxXcmFwcGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgdG9wOiAyOXB4O1xuICAgIH1cbiAgICAucmVzcG9uc2l2ZSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZjtcbiAgICB9XG4gICAgLmhlYWRlclRpdGxlIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5uYXZCYXJCcmFuZCB7XG4gICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgICAubmF2QmFyQnJhbmQgaW1nIHtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cbiAgICAudG9wbmF2LnJlc3BvbnNpdmUgLnZpc2libGVNb2JpbGUge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC50b3BuYXYgLm5hdkJhclVMIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC50b3BuYXYucmVzcG9uc2l2ZSAubmF2QmFyVUwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICAuaGlkZGVuTW9iaWxlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaHIge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIC5uYXZCYXJQYXJlbnQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5zZXBhcmF0b3Ige1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC5uYXZCYXJVTFJpZ2h0IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgfVxuICAgIC5uYXZCYXJVTCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogNy41cHggMHB4O1xuICAgIH1cbiAgICAubmF2QmFyVUwgbGkge1xuICAgICAgaGVpZ2h0OiAzN3B4O1xuICAgIH1cbiAgICAubmF2QmFyVUwgbGkgYSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgfVxuXG4gICAgLm5hdkJhckRlZmF1bHQge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLm5hdkJhclRvZ2dsZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDExcHg7XG4gICAgICB0b3A6IDE1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cblxuICAgIC5uYXZCYXJIZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5uYXZCYXJCcmFuZCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBwYWRkaW5nOiAwIDA7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBmbGV4OiBpbml0aWFsO1xuICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICB9XG5cbiAgICAudGl0bGVXcmFwcGVyIHtcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5naXRCdG4ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC5tb2JpbGVWaWV3IHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5zZWFyY2hXcmFwcGVyIHtcbiAgICAgIHBhZGRpbmc6IDBweCAwO1xuICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNDBweDtcbiAgICAgIHRvcDogOHB4O1xuICAgIH1cbiAgICAuaGl0V3JhcHBlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdG9wOiAzNXB4O1xuICAgICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLm5hdkJhckRlZmF1bHQge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgLm5hdkJhckJyYW5kIHtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG4gICAgLm5hdkJhckhlYWRlciB7XG4gICAgICBtaW4td2lkdGg6IDI0MHB4O1xuICAgICAgZmxleDogaW5pdGlhbDtcbiAgICB9XG4gICAgLmdpdGh1YkJ0biB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgfVxuICAgIC5kaXZpZGVyIHtcbiAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIC5oaXRXcmFwcGVyIHtcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgfVxuICAgIC5uYXZCYXJVTCBsaSBhIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIH1cbiAgICAuc2VhcmNoV3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICB9XG4gIH1cbmA7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

/***/ }),

/***/ "./src/components/styles/PageNavigationButtons.js":
/*!********************************************************!*\
  !*** ./src/components/styles/PageNavigationButtons.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledNextPrevious": () => (/* binding */ StyledNextPrevious)
/* harmony export */ });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");

const StyledNextPrevious = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__["default"])('div',  false ? 0 : {
  target: "ex6i9xe0",
  label: "StyledNextPrevious"
})("margin:0px;padding:0px;width:auto;display:grid;grid-template-rows:auto;column-gap:24px;grid-template-columns:calc(50% - 8px) calc(50% - 8px);.previousBtn{cursor:pointer;-moz-box-align:center;-moz-box-direction:normal;-moz-box-orient:horizontal;margin:0px;padding:0px;position:relative;display:flex;flex-direction:row;align-items:center;place-self:stretch;border-radius:3px;border:1px solid rgb(230, 236, 241);transition:border 200ms ease 0s;box-shadow:rgba(116, 129, 141, 0.1) 0px 3px 8px 0px;text-decoration:none;background-color:", props => props.theme.colors.background, ";color:", props => props.theme.colors.text, ";}.nextBtn{cursor:pointer;-moz-box-align:center;-moz-box-direction:normal;-moz-box-orient:horizontal;margin:0px;padding:0px;position:relative;display:flex;flex-direction:row;align-items:center;place-self:stretch;border-radius:3px;border:1px solid rgb(230, 236, 241);transition:border 200ms ease 0s;box-shadow:rgba(116, 129, 141, 0.1) 0px 3px 8px 0px;text-decoration:none;background-color:", props => props.theme.colors.background, ";color:", props => props.theme.colors.text, ";}.nextBtn:hover,.previousBtn:hover{text-decoration:none;border:1px solid #1ed3c6;}.nextBtn:hover .rightArrow,.previousBtn:hover .leftArrow{color:#1ed3c6;}.leftArrow{display:flex;margin:0px;color:rgb(157, 170, 182);flex:0 0 auto;font-size:24px;transition:color 200ms ease 0s;padding:16px;padding-right:16px;}.rightArrow{display:flex;flex:0 0 auto;font-size:24px;transition:color 200ms ease 0s;padding:16px;padding-left:16px;margin:0px;color:rgb(157, 170, 182);}.nextPreviousTitle{display:block;margin:0px;padding:0px;transition:color 200ms ease 0s;}.nextPreviousTitle span{font-size:16px;line-height:1.5;font-weight:500;}@media (max-width: 767px){display:block;padding:0 15px;.previousBtn{margin-bottom:20px;}}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvc3R5bGVzL1BhZ2VOYXZpZ2F0aW9uQnV0dG9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFK0MiLCJmaWxlIjoiL3Vzci9sb2NhbC9hcHAvb3RoZXIva29hLWJvb3N0ZXItcGFnZS9zcmMvY29tcG9uZW50cy9zdHlsZXMvUGFnZU5hdmlnYXRpb25CdXR0b25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTmV4dFByZXZpb3VzID0gc3R5bGVkKCdkaXYnKWBcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgY29sdW1uLWdhcDogMjRweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDUwJSAtIDhweCkgY2FsYyg1MCUgLSA4cHgpO1xuXG4gIC5wcmV2aW91c0J0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgLW1vei1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGxhY2Utc2VsZjogc3RyZXRjaDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMCwgMjM2LCAyNDEpO1xuICAgIHRyYW5zaXRpb246IGJvcmRlciAyMDBtcyBlYXNlIDBzO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMTE2LCAxMjksIDE0MSwgMC4xKSAwcHggM3B4IDhweCAwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICB9XG5cbiAgLm5leHRCdG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgIC1tb3otYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBsYWNlLXNlbGY6IHN0cmV0Y2g7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzAsIDIzNiwgMjQxKTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMjAwbXMgZWFzZSAwcztcbiAgICBib3gtc2hhZG93OiByZ2JhKDExNiwgMTI5LCAxNDEsIDAuMSkgMHB4IDNweCA4cHggMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcbiAgfVxuXG4gIC5uZXh0QnRuOmhvdmVyLFxuICAucHJldmlvdXNCdG46aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWVkM2M2O1xuICB9XG5cbiAgLm5leHRCdG46aG92ZXIgLnJpZ2h0QXJyb3csXG4gIC5wcmV2aW91c0J0bjpob3ZlciAubGVmdEFycm93IHtcbiAgICBjb2xvcjogIzFlZDNjNjtcbiAgfVxuXG4gIC5sZWZ0QXJyb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6IHJnYigxNTcsIDE3MCwgMTgyKTtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZSAwcztcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIH1cblxuICAucmlnaHRBcnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAwIDAgYXV0bztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZSAwcztcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogcmdiKDE1NywgMTcwLCAxODIpO1xuICB9XG5cbiAgLm5leHRQcmV2aW91c1RpdGxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZSAwcztcbiAgfVxuXG4gIC5uZXh0UHJldmlvdXNUaXRsZSBzcGFuIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuXG4gICAgLnByZXZpb3VzQnRuIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICB9XG5gO1xuIl19 */"));

/***/ }),

/***/ "./src/components/styles/Sidebar.js":
/*!******************************************!*\
  !*** ./src/components/styles/Sidebar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sidebar": () => (/* binding */ Sidebar),
/* harmony export */   "ListItem": () => (/* binding */ ListItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled/base */ "./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");



const _excluded = ["className", "active", "level"];

const Sidebar = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__["default"])('aside',  false ? 0 : {
  target: "e1y52jk21",
  label: "Sidebar"
})("width:100%;border-right:1px solid #ede7f3;height:100vh;overflow:auto;position:fixed;padding-left:24px;position:-webkit-sticky;position:-moz-sticky;position:sticky;top:0;background:", props => props.theme.colors.background, ";.rightSideTitle{font-size:10px;line-height:1;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;padding:7px 24px 7px 16px;border-left:1px solid #e6ecf1;border-left-color:rgb(230, 236, 241);color:", props => props.theme.colors.text, ";}.rightSideBarUL{margin-top:32px;}.rightSideBarUL li{list-style-type:none;border-left:1px solid #e6ecf1;border-left-color:rgb(230, 236, 241);}.rightSideBarUL li a{font-size:12px;font-weight:500;line-height:1.5;padding:7px 24px 7px 16px;color:", props => props.theme.colors.text, ";}@media only screen and (max-width: 50rem){width:100%;position:relative;}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvc3R5bGVzL1NpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRXNDIiwiZmlsZSI6Ii91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvc3R5bGVzL1NpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyID0gc3R5bGVkKCdhc2lkZScpYFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VkZTdmMztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiAtbW96LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuXG4gIC5yaWdodFNpZGVUaXRsZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gICAgcGFkZGluZzogN3B4IDI0cHggN3B4IDE2cHg7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTZlY2YxO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMjMwLCAyMzYsIDI0MSk7XG5cbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG4gIH1cblxuICAucmlnaHRTaWRlQmFyVUwge1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gIH1cblxuICAucmlnaHRTaWRlQmFyVUwgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlNmVjZjE7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYigyMzAsIDIzNiwgMjQxKTtcbiAgfVxuXG4gIC5yaWdodFNpZGVCYXJVTCBsaSBhIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIHBhZGRpbmc6IDdweCAyNHB4IDdweCAxNnB4O1xuXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MHJlbSkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExpc3RJdGVtID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgYWN0aXZlLCBsZXZlbCwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8YSBocmVmPXtwcm9wcy50b30gey4uLnByb3BzfT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9hPlxuICAgIDwvbGk+XG4gICk7XG59KWBcbiAgbGlzdC1zdHlsZTogbm9uZTtcblxuICBhIHtcbiAgICBjb2xvcjogIzVjNjk3NTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6ICR7KHsgbGV2ZWwgfSkgPT4gKGxldmVsID09PSAwID8gNzAwIDogNDAwKX07XG4gICAgcGFkZGluZzogMC40NXJlbSAwIDAuNDVyZW0gJHtwcm9wcyA9PiAyICsgKHByb3BzLmxldmVsIHx8IDApICogMX1yZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzFlZDNjNiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLmFjdGl2ZSAmJlxuICAgICAgYFxuICAgICAgY29sb3I6ICMxRUQzQzY7XG4gICAgICBib3JkZXItY29sb3I6IHJnYigyMzAsMjM2LDI0MSkgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQgbm9uZSBzb2xpZCBzb2xpZDtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4IDBweCAxcHggMXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBgfSAvLyBleHRlcm5hbCBsaW5rIGljb25cbiAgICBzdmcge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbiAgfVxuYDtcbiJdfQ== */"));
const ListItem = /*#__PURE__*/(0,_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref => {
  let {
    className,
    active,
    level
  } = _ref,
      props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
    className: className
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    href: props.to
  }, props), props.children));
},  false ? 0 : {
  target: "e1y52jk20",
  label: "ListItem"
})("list-style:none;a{color:#5c6975;text-decoration:none;font-weight:", ({
  level
}) => level === 0 ? 700 : 400, ";padding:0.45rem 0 0.45rem ", props => 2 + (props.level || 0) * 1, "rem;display:block;position:relative;&:hover{color:#1ed3c6!important;}", props => props.active && `
      color: #1ED3C6;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `, "svg{float:right;margin-right:1rem;}}" + ( false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvc3R5bGVzL1NpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERFIiwiZmlsZSI6Ii91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvc3R5bGVzL1NpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyID0gc3R5bGVkKCdhc2lkZScpYFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VkZTdmMztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiAtbW96LXN0aWNreTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuXG4gIC5yaWdodFNpZGVUaXRsZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XG4gICAgcGFkZGluZzogN3B4IDI0cHggN3B4IDE2cHg7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTZlY2YxO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2IoMjMwLCAyMzYsIDI0MSk7XG5cbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG4gIH1cblxuICAucmlnaHRTaWRlQmFyVUwge1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gIH1cblxuICAucmlnaHRTaWRlQmFyVUwgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlNmVjZjE7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYigyMzAsIDIzNiwgMjQxKTtcbiAgfVxuXG4gIC5yaWdodFNpZGVCYXJVTCBsaSBhIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIHBhZGRpbmc6IDdweCAyNHB4IDdweCAxNnB4O1xuXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MHJlbSkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IExpc3RJdGVtID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgYWN0aXZlLCBsZXZlbCwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8YSBocmVmPXtwcm9wcy50b30gey4uLnByb3BzfT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9hPlxuICAgIDwvbGk+XG4gICk7XG59KWBcbiAgbGlzdC1zdHlsZTogbm9uZTtcblxuICBhIHtcbiAgICBjb2xvcjogIzVjNjk3NTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6ICR7KHsgbGV2ZWwgfSkgPT4gKGxldmVsID09PSAwID8gNzAwIDogNDAwKX07XG4gICAgcGFkZGluZzogMC40NXJlbSAwIDAuNDVyZW0gJHtwcm9wcyA9PiAyICsgKHByb3BzLmxldmVsIHx8IDApICogMX1yZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzFlZDNjNiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLmFjdGl2ZSAmJlxuICAgICAgYFxuICAgICAgY29sb3I6ICMxRUQzQzY7XG4gICAgICBib3JkZXItY29sb3I6IHJnYigyMzAsMjM2LDI0MSkgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQgbm9uZSBzb2xpZCBzb2xpZDtcbiAgICAgIGJvcmRlci13aWR0aDogMXB4IDBweCAxcHggMXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBgfSAvLyBleHRlcm5hbCBsaW5rIGljb25cbiAgICBzdmcge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbiAgfVxuYDtcbiJdfQ== */"));

/***/ }),

/***/ "./src/components/theme.js":
/*!*********************************!*\
  !*** ./src/components/theme.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace'
  }
});

/***/ }),

/***/ "./src/components/theme/index.js":
/*!***************************************!*\
  !*** ./src/components/theme/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lightTheme": () => (/* binding */ lightTheme),
/* harmony export */   "darkTheme": () => (/* binding */ darkTheme)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace'
  }
};

const lightTheme = _objectSpread(_objectSpread({}, baseTheme), {}, {
  colors: {
    background: '#fff',
    heading: '#000',
    text: '#3B454E',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#1000EE'
  }
});

const darkTheme = _objectSpread(_objectSpread({}, baseTheme), {}, {
  colors: {
    background: '#001933',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#000',
    link: '#1ED3C6'
  }
});



/***/ }),

/***/ "./src/components/theme/themeProvider.js":
/*!***********************************************!*\
  !*** ./src/components/theme/themeProvider.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-element-8d26346b.esm.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/components/theme/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header */ "./src/components/Header.js");
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/GlobalStyles */ "./src/components/styles/GlobalStyles.js");
/* harmony import */ var _custom_styles_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../custom/styles/styles */ "./src/custom/styles/styles.js");








class ThemeProvider extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isDarkThemeActive: false
    };

    this.retrieveActiveTheme = () => {
      const isDarkThemeActive = JSON.parse(window.localStorage.getItem('isDarkThemeActive'));
      this.setState({
        isDarkThemeActive
      });
    };

    this.toggleActiveTheme = () => {
      this.setState(prevState => ({
        isDarkThemeActive: !prevState.isDarkThemeActive
      }));
      window.localStorage.setItem('isDarkThemeActive', JSON.stringify(!this.state.isDarkThemeActive));
    };
  }

  componentDidMount() {
    this.retrieveActiveTheme();
  }

  render() {
    const {
      children,
      location
    } = this.props;
    const {
      isDarkThemeActive
    } = this.state;
    const currentActiveTheme = isDarkThemeActive ? _index__WEBPACK_IMPORTED_MODULE_1__.darkTheme : _index__WEBPACK_IMPORTED_MODULE_1__.lightTheme;
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_5__.Global, {
      styles: [_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__.baseStyles, ..._custom_styles_styles__WEBPACK_IMPORTED_MODULE_4__.styles,  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvdGhlbWUvdGhlbWVQcm92aWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ2dCIiwiZmlsZSI6Ii91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2NvbXBvbmVudHMvdGhlbWUvdGhlbWVQcm92aWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgYXMgRW1vdGlvblRoZW1lUHJvdmlkZXIsIEdsb2JhbCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG5pbXBvcnQgeyBsaWdodFRoZW1lLCBkYXJrVGhlbWUgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJztcbmltcG9ydCB7IGJhc2VTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvR2xvYmFsU3R5bGVzJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4uLy4uL2N1c3RvbS9zdHlsZXMvc3R5bGVzJztcblxuY2xhc3MgVGhlbWVQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGlzRGFya1RoZW1lQWN0aXZlOiBmYWxzZSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJldHJpZXZlQWN0aXZlVGhlbWUoKTtcbiAgfVxuXG4gIHJldHJpZXZlQWN0aXZlVGhlbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgaXNEYXJrVGhlbWVBY3RpdmUgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNEYXJrVGhlbWVBY3RpdmUnKSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNEYXJrVGhlbWVBY3RpdmUgfSk7XG4gIH07XG5cbiAgdG9nZ2xlQWN0aXZlVGhlbWUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHsgaXNEYXJrVGhlbWVBY3RpdmU6ICFwcmV2U3RhdGUuaXNEYXJrVGhlbWVBY3RpdmUgfSkpO1xuXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpc0RhcmtUaGVtZUFjdGl2ZScsIEpTT04uc3RyaW5naWZ5KCF0aGlzLnN0YXRlLmlzRGFya1RoZW1lQWN0aXZlKSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGxvY2F0aW9uIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgeyBpc0RhcmtUaGVtZUFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGN1cnJlbnRBY3RpdmVUaGVtZSA9IGlzRGFya1RoZW1lQWN0aXZlID8gZGFya1RoZW1lIDogbGlnaHRUaGVtZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8R2xvYmFsIHN0eWxlcz17W2Jhc2VTdHlsZXMsIC4uLnN0eWxlc119IC8+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBsb2NhdGlvbj17bG9jYXRpb259XG4gICAgICAgICAgaXNEYXJrVGhlbWVBY3RpdmU9e2lzRGFya1RoZW1lQWN0aXZlfVxuICAgICAgICAgIHRvZ2dsZUFjdGl2ZVRoZW1lPXt0aGlzLnRvZ2dsZUFjdGl2ZVRoZW1lfVxuICAgICAgICAvPlxuICAgICAgICA8RW1vdGlvblRoZW1lUHJvdmlkZXIgdGhlbWU9e2N1cnJlbnRBY3RpdmVUaGVtZX0+e2NoaWxkcmVufTwvRW1vdGlvblRoZW1lUHJvdmlkZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lUHJvdmlkZXI7XG4iXX0= */"]
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      location: location,
      isDarkThemeActive: isDarkThemeActive,
      toggleActiveTheme: this.toggleActiveTheme
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_6__.a, {
      theme: currentActiveTheme
    }, children));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeProvider);

/***/ }),

/***/ "./src/custom/config/codeBlockLanguages.js":
/*!*************************************************!*\
  !*** ./src/custom/config/codeBlockLanguages.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyLanguages": () => (/* binding */ applyLanguages),
/* harmony export */   "getTheme": () => (/* binding */ getTheme)
/* harmony export */ });
function applyLanguages(_Prism) {
  /**
   * Here you have the possibility to add other supported languages to Prism and thus to the code highlighting.
   *
   * We support the following languages automatically:
   * markup, bash, clike, c, cpp, css, javascript, jsx, coffeescript, actionscript, css-extr,
   * diff, git, go, graphql, handlebars, json, less, makefile, markdown, objectivec, ocaml, python,
   * reason, sass, scss, sql, stylus, tsx, typescript, wasm, yaml
   *
   * If you need more languages you can add them yourself as follows:
   * (https://github.com/PrismJS/prism/tree/master/components)
   *
   * ```js
   * require("prismjs/components/prism-docker");
   * require("prismjs/components/prism-ada");
   * ```
   */
}
function getTheme(_Prism) {
  /**
   * Here you have the possibility to change the prism highlighting.
   */
  return __webpack_require__(/*! prism-react-renderer/themes/vsDark */ "./node_modules/prism-react-renderer/themes/vsDark/index.js")["default"];
}

/***/ }),

/***/ "./src/custom/styles/styles.js":
/*!*************************************!*\
  !*** ./src/custom/styles/styles.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");

const customStyles = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)( false ? 0 : ";label:customStyles;",  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvYXBwL290aGVyL2tvYS1ib29zdGVyLXBhZ2Uvc3JjL2N1c3RvbS9zdHlsZXMvc3R5bGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUV3QiIsImZpbGUiOiIvdXNyL2xvY2FsL2FwcC9vdGhlci9rb2EtYm9vc3Rlci1wYWdlL3NyYy9jdXN0b20vc3R5bGVzL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuY29uc3QgY3VzdG9tU3R5bGVzID0gY3NzYFxuXG5gO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gW2N1c3RvbVN0eWxlc107XG4iXX0= */");
const styles = [customStyles];

/***/ }),

/***/ "./src/html.js":
/*!*********************!*\
  !*** ./src/html.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTML)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");





class HTML extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("html", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.htmlAttributes, {
      lang: "en"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("head", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
      charSet: "utf-8"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
      httpEquiv: "x-ua-compatible",
      content: "ie=edge"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no"
    }), (_config__WEBPACK_IMPORTED_MODULE_3___default().siteMetadata.ogImage) ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
      property: "og:image",
      content: (_config__WEBPACK_IMPORTED_MODULE_3___default().siteMetadata.ogImage)
    }) : null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
      property: "twitter:card",
      content: "summary_large_image"
    }), (_config__WEBPACK_IMPORTED_MODULE_3___default().siteMetadata.ogImage) ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
      property: "twitter:image",
      content: (_config__WEBPACK_IMPORTED_MODULE_3___default().siteMetadata.ogImage)
    }) : null, (_config__WEBPACK_IMPORTED_MODULE_3___default().siteMetadata.favicon) ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("link", {
      rel: "shortcut icon",
      type: "image/svg",
      href: (_config__WEBPACK_IMPORTED_MODULE_3___default().siteMetadata.favicon)
    }) : null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("noscript", {
      key: "noscript"
    }), this.props.headComponents), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("body", this.props.bodyAttributes, this.props.preBodyComponents, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      key: `body`,
      id: "___gatsby",
      dangerouslySetInnerHTML: {
        __html: this.props.body
      }
    }), this.props.postBodyComponents, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)("script", {
      defer: true,
      dangerouslySetInnerHTML: {
        __html: `
            function navBarClose() {
              document.getElementById("navbar").classList.toggle("responsive");
            }
            document.addEventListener('click',function(e){
              if(e.target && e.target.tagName.toLowerCase() === 'a'){
                navBarClose();
              }
           });
            `
      }
    })));
  }

}
HTML.propTypes = {
  htmlAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  headComponents: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  bodyAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  preBodyComponents: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  body: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  postBodyComponents: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
};

/***/ }),

/***/ "./src/templates/docs.js":
/*!*******************************!*\
  !*** ./src/templates/docs.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXRuntimeTest)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var gatsby_plugin_mdx_mdx_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-mdx/mdx-renderer */ "./node_modules/gatsby-plugin-mdx/mdx-renderer.js");
/* harmony import */ var gatsby_plugin_mdx_mdx_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_plugin_mdx_mdx_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var $components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! $components */ "./src/components/index.js");
/* harmony import */ var _components_NextPrevious__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NextPrevious */ "./src/components/NextPrevious.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_styles_Docs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/styles/Docs */ "./src/components/styles/Docs.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









const forcedNavOrder = (_config__WEBPACK_IMPORTED_MODULE_6___default().sidebar.forcedNavOrder);
class MDXRuntimeTest extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    const {
      data
    } = this.props;

    if (!data) {
      return this.props.children;
    }

    const {
      allMdx,
      mdx,
      site: {
        siteMetadata: {
          docsLocation,
          title
        }
      }
    } = data;

    const githubIcon = __webpack_require__(/*! ../components/images/github.svg */ "./src/components/images/github.svg")["default"];

    const navItems = allMdx.edges.map(({
      node
    }) => node.fields.slug).filter(slug => slug !== '/').sort().reduce((acc, cur) => {
      if (forcedNavOrder.find(url => url === cur)) {
        return _objectSpread(_objectSpread({}, acc), {}, {
          [cur]: [cur]
        });
      }

      let prefix = cur.split('/')[1];

      if ((_config__WEBPACK_IMPORTED_MODULE_6___default().gatsby) && (_config__WEBPACK_IMPORTED_MODULE_6___default().gatsby.trailingSlash)) {
        prefix = prefix + '/';
      }

      if (prefix && forcedNavOrder.find(url => url === `/${prefix}`)) {
        return _objectSpread(_objectSpread({}, acc), {}, {
          [`/${prefix}`]: [...acc[`/${prefix}`], cur]
        });
      } else {
        return _objectSpread(_objectSpread({}, acc), {}, {
          items: [...acc.items, cur]
        });
      }
    }, {
      items: []
    });
    const nav = forcedNavOrder.reduce((acc, cur) => {
      return acc.concat(navItems[cur]);
    }, []).concat(navItems.items).map(slug => {
      if (slug) {
        const {
          node
        } = allMdx.edges.find(({
          node
        }) => node.fields.slug === slug);
        return {
          title: node.fields.title,
          url: node.fields.slug
        };
      }
    }); // meta tags

    const metaTitle = mdx.frontmatter.metaTitle;
    const metaDescription = mdx.frontmatter.metaDescription;
    let canonicalUrl = (_config__WEBPACK_IMPORTED_MODULE_6___default().gatsby.siteUrl);
    canonicalUrl = (_config__WEBPACK_IMPORTED_MODULE_6___default().gatsby.pathPrefix) !== '/' ? canonicalUrl + (_config__WEBPACK_IMPORTED_MODULE_6___default().gatsby.pathPrefix) : canonicalUrl;
    canonicalUrl = canonicalUrl + mdx.fields.slug;
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)($components__WEBPACK_IMPORTED_MODULE_4__.Layout, this.props, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_helmet__WEBPACK_IMPORTED_MODULE_2__["default"], null, metaTitle ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("title", null, metaTitle) : null, metaTitle ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
      name: "title",
      content: metaTitle
    }) : null, metaDescription ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
      name: "description",
      content: metaDescription
    }) : null, metaTitle ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
      property: "og:title",
      content: metaTitle
    }) : null, metaDescription ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
      property: "og:description",
      content: metaDescription
    }) : null, metaTitle ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
      property: "twitter:title",
      content: metaTitle
    }) : null, metaDescription ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("meta", {
      property: "twitter:description",
      content: metaDescription
    }) : null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("link", {
      rel: "canonical",
      href: canonicalUrl
    })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: 'titleWrapper'
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_styles_Docs__WEBPACK_IMPORTED_MODULE_7__.StyledHeading, null, mdx.fields.title), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_styles_Docs__WEBPACK_IMPORTED_MODULE_7__.Edit, {
      className: 'mobileView'
    }, docsLocation && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)($components__WEBPACK_IMPORTED_MODULE_4__.Link, {
      className: 'gitBtn',
      to: `${docsLocation}/${mdx.parent.relativePath}`
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
      src: githubIcon,
      alt: 'Github logo'
    }), " Edit on GitHub"))), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_styles_Docs__WEBPACK_IMPORTED_MODULE_7__.StyledMainWrapper, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)((gatsby_plugin_mdx_mdx_renderer__WEBPACK_IMPORTED_MODULE_3___default()), null, mdx.body)), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: 'addPaddTopBottom'
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_NextPrevious__WEBPACK_IMPORTED_MODULE_5__["default"], {
      mdx: mdx,
      nav: nav
    })));
  }

}
const pageQuery = "3110060872";

/***/ }),

/***/ "./node_modules/@gatsbyjs/reach-router/es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@gatsbyjs/reach-router/es/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "Location": () => (/* binding */ Location),
/* harmony export */   "LocationProvider": () => (/* binding */ LocationProvider),
/* harmony export */   "Match": () => (/* binding */ Match),
/* harmony export */   "Redirect": () => (/* binding */ Redirect),
/* harmony export */   "Router": () => (/* binding */ Router),
/* harmony export */   "ServerLocation": () => (/* binding */ ServerLocation),
/* harmony export */   "createHistory": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.createHistory),
/* harmony export */   "createMemorySource": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.createMemorySource),
/* harmony export */   "isRedirect": () => (/* binding */ isRedirect),
/* harmony export */   "navigate": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.navigate),
/* harmony export */   "redirectTo": () => (/* binding */ redirectTo),
/* harmony export */   "globalHistory": () => (/* reexport safe */ _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory),
/* harmony export */   "matchPath": () => (/* reexport safe */ _lib_utils__WEBPACK_IMPORTED_MODULE_4__.match),
/* harmony export */   "useLocation": () => (/* binding */ useLocation),
/* harmony export */   "useNavigate": () => (/* binding */ useNavigate),
/* harmony export */   "useParams": () => (/* binding */ useParams),
/* harmony export */   "useMatch": () => (/* binding */ useMatch),
/* harmony export */   "BaseContext": () => (/* binding */ BaseContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! invariant */ "./node_modules/@gatsbyjs/reach-router/node_modules/invariant/invariant.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lifecycles-compat */ "./.cache/react-lifecycles-compat.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/utils */ "./node_modules/@gatsbyjs/reach-router/es/lib/utils.js");
/* harmony import */ var _lib_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/history */ "./node_modules/@gatsbyjs/reach-router/es/lib/history.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-has-content */







////////////////////////////////////////////////////////////////////////////////

var createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultValue);
  Ctx.displayName = name;
  return Ctx;
};

////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider
var LocationContext = createNamedContext("Location");

// sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider
var Location = function Location(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    LocationContext.Consumer,
    null,
    function (context) {
      return context ? children(context) : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        LocationProvider,
        null,
        children
      );
    }
  );
};

var LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: { unlisten: null }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;

    return { navigate: navigate, location: location };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, { replace: true });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    history._onTransitionComplete();
    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return { context: _this2.getContext() };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;

    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      LocationContext.Provider,
      { value: context },
      typeof children === "function" ? children(context) : children || null
    );
  };

  return LocationProvider;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

////////////////////////////////////////////////////////////////////////////////


LocationProvider.defaultProps = {
  history: _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory
};
 true ? LocationProvider.propTypes = {
  history: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
} : 0;
var ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;

  var searchIndex = url.indexOf("?");
  var searchExists = searchIndex > -1;
  var pathname = void 0;
  var search = "";
  var hash = "";

  if (searchExists) {
    pathname = url.substring(0, searchIndex);
    search = url.substring(searchIndex);
  } else {
    pathname = url;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    LocationContext.Provider,
    {
      value: {
        location: {
          pathname: pathname,
          search: search,
          hash: hash
        },
        navigate: function navigate() {
          throw new Error("You can't call navigate on the server.");
        }
      }
    },
    children
  );
};
////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links
var BaseContext = createNamedContext("Base", {
  baseuri: "/",
  basepath: "/",
  navigate: _lib_history__WEBPACK_IMPORTED_MODULE_5__.globalHistory.navigate
});

////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.
var Router = function Router(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (baseContext) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (locationContext) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RouterImpl, _extends({}, baseContext, locationContext, props));
        }
      );
    }
  );
};

var RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = react__WEBPACK_IMPORTED_MODULE_0___default().Children.toArray(children).reduce(function (array, child) {
      var routes = createRoute(basepath)(child);
      return array.concat(routes);
    }, []);
    var pathname = location.pathname;


    var match = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.pick)(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value;

      // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = _extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, uri), options);
        }
      });

      var clone = react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(element, props, element.props.children ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Router,
        { location: location, primary: primary },
        element.props.children
      ) : undefined);

      // using 'div' for < 16.3 support
      var FocusWrapper = primary ? FocusHandler : component;
      // don't pass any props to 'div'
      var wrapperProps = primary ? _extends({ uri: uri, location: location, component: component }, domProps) : domProps;

      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        BaseContext.Provider,
        {
          value: { baseuri: uri, basepath: basepath, navigate: props.navigate }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
          FocusWrapper,
          wrapperProps,
          clone
        )
      );
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent));

RouterImpl.defaultProps = {
  primary: true
};


var FocusContext = createNamedContext("Focus");

var FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    FocusContext.Consumer,
    null,
    function (requestFocus) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FocusHandlerImpl, _extends({}, domProps, {
        component: component,
        requestFocus: requestFocus,
        uri: uri,
        location: location
      }));
    }
  );
};

// don't focus on initial render
var initialRender = true;
var focusHandlerCount = 0;

var FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus && node) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;
    if (initial) {
      return _extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return _extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;
    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;


    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else if (this.node) {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "component", "uri", "location"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
      Comp,
      _extends({
        style: _extends({ outline: "none" }, style),
        tabIndex: "-1",
        ref: function ref(n) {
          return _this5.node = n;
        }
      }, domProps),
      react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        FocusContext.Provider,
        { value: this.requestFocus },
        this.props.children
      )
    );
  };

  return FocusHandlerImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

(0,react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_3__.polyfill)(FocusHandlerImpl);

var k = function k() {};

////////////////////////////////////////////////////////////////////////////////
var forwardRef = (react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef);

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref5) {
      var basepath = _ref5.basepath,
          baseuri = _ref5.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (_ref6) {
          var location = _ref6.location,
              navigate = _ref6.navigate;

          var to = props.to,
              state = props.state,
              replace = props.replace,
              _props$getProps = props.getProps,
              getProps = _props$getProps === undefined ? k : _props$getProps,
              anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

          var href = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
          var encodedHref = encodeURI(href);
          var isCurrent = location.pathname === encodedHref;
          var isPartiallyCurrent = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.startsWith)(location.pathname, encodedHref);

          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", _extends({
            ref: ref || innerRef,
            "aria-current": isCurrent ? "page" : undefined
          }, anchorProps, getProps({ isCurrent: isCurrent, isPartiallyCurrent: isPartiallyCurrent, href: href, location: location }), {
            href: href,
            onClick: function onClick(event) {
              if (anchorProps.onClick) anchorProps.onClick(event);
              if (shouldNavigate(event)) {
                event.preventDefault();
                var shouldReplace = replace;
                if (typeof replace !== "boolean" && isCurrent) {
                  var _location$state = _extends({}, location.state),
                      key = _location$state.key,
                      restState = _objectWithoutProperties(_location$state, ["key"]);

                  shouldReplace = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.shallowCompare)(_extends({}, state), restState);
                }
                navigate(href, {
                  state: state,
                  replace: shouldReplace
                });
              }
            }
          }));
        }
      );
    }
  );
});

Link.displayName = "Link";

 true ? Link.propTypes = {
  to: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
} : 0;

////////////////////////////////////////////////////////////////////////////////
function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  // Support React < 16 with this hook
  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        baseuri = _props3.baseuri,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    Promise.resolve().then(function () {
      var resolvedTo = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
      navigate((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.insertParams)(resolvedTo, props), { replace: replace, state: state });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        baseuri = _props4.baseuri,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    var resolvedTo = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(to, baseuri);
    if (!noThrow) redirectTo((0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.insertParams)(resolvedTo, props));
    return null;
  };

  return RedirectImpl;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

var Redirect = function Redirect(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref7) {
      var baseuri = _ref7.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (locationContext) {
          return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RedirectImpl, _extends({}, locationContext, { baseuri: baseuri }, props));
        }
      );
    }
  );
};

 true ? Redirect.propTypes = {
  from: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  to: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
} : 0;

////////////////////////////////////////////////////////////////////////////////
var Match = function Match(_ref8) {
  var path = _ref8.path,
      children = _ref8.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref9) {
      var baseuri = _ref9.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
        Location,
        null,
        function (_ref10) {
          var navigate = _ref10.navigate,
              location = _ref10.location;

          var resolvedPath = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(path, baseuri);
          var result = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(resolvedPath, location.pathname);
          return children({
            navigate: navigate,
            location: location,
            match: result ? _extends({}, result.params, {
              uri: result.uri,
              path: path
            }) : null
          });
        }
      );
    }
  );
};

////////////////////////////////////////////////////////////////////////////////
// Hooks

var useLocation = function useLocation() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LocationContext);

  if (!context) {
    throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.location;
};

var useNavigate = function useNavigate() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useNavigate hook was used but a BaseContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.navigate;
};

var useParams = function useParams() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var results = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(context.basepath, location.pathname);

  return results ? results.params : null;
};

var useMatch = function useMatch(path) {
  if (!path) {
    throw new Error("useMatch(path: string) requires an argument of a string to match against");
  }
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(BaseContext);

  if (!context) {
    throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var resolvedPath = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.resolve)(path, context.baseuri);
  var result = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.match)(resolvedPath, location.pathname);
  return result ? _extends({}, result.params, {
    uri: result.uri,
    path: path
  }) : null;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    if (element.type === (react__WEBPACK_IMPORTED_MODULE_0___default().Fragment) && element.props.children) {
      return react__WEBPACK_IMPORTED_MODULE_0___default().Children.map(element.props.children, createRoute(basepath));
    }
    !(element.props.path || element.props.default || element.type === Redirect) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_2___default()(false, "<Router>: Children of <Router> must have a `path` or `default` prop, or be a `<Redirect>`. None found on element type `" + element.type + "`") : 0 : void 0;

    !!(element.type === Redirect && (!element.props.from || !element.props.to)) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_2___default()(false, "<Redirect from=\"" + element.props.from + "\" to=\"" + element.props.to + "\"/> requires both \"from\" and \"to\" props when inside a <Router>.") : 0 : void 0;

    !!(element.type === Redirect && !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.validateRedirect)(element.props.from, element.props.to)) ?  true ? invariant__WEBPACK_IMPORTED_MODULE_2___default()(false, "<Redirect from=\"" + element.props.from + " to=\"" + element.props.to + "\"/> has mismatched dynamic segments, ensure both paths have the exact same dynamic segments.") : 0 : void 0;

    if (element.props.default) {
      return { value: element, default: true };
    }

    var elementPath = element.type === Redirect ? element.props.from : element.props.path;

    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);

    return {
      value: element,
      default: element.props.default,
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ "./node_modules/github-buttons/dist/buttons.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/github-buttons/dist/buttons.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/*!
 * github-buttons v2.19.1
 * (c) 2021 なつき
 * @license BSD-2-Clause
 */
var document = window.document;

var Math = window.Math;

var HTMLElement = window.HTMLElement;

var XMLHttpRequest = window.XMLHttpRequest;

var forEach = function (obj, func) {
  for (var i = 0, len = obj.length; i < len; i++) {
    func(obj[i]);
  }
};

var createElementInDocument = function (document) {
  return function (tag, props, children) {
    var el = document.createElement(tag);
    if (props != null) {
      for (var prop in props) {
        var val = props[prop];
        if (val != null) {
          if (el[prop] != null) {
            el[prop] = val;
          } else {
            el.setAttribute(prop, val);
          }
        }
      }
    }
    if (children != null) {
      forEach(children, function (child) {
        el.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
      });
    }
    return el
  }
};

var createElement = createElementInDocument(document);

var dispatchOnce = function (func) {
  var onceToken;
  return function () {
    if (!onceToken) {
      onceToken = 1;
      func.apply(this, arguments);
    }
  }
};

var hasOwnProperty = function (obj, prop) {
  return {}.hasOwnProperty.call(obj, prop)
};

var toLowerCase = function (obj) {
  return ('' + obj).toLowerCase()
};

var name = "github-buttons";
var version = "2.19.1";

var iframeURL = 'https://' + (/* istanbul ignore next */ 'unpkg.com/' + name + '@' + version + '/dist' ) + '/buttons.html';

var domain = 'github.com';

var apiBaseURL = 'https://api.' + domain;

var useXHR = XMLHttpRequest && 'prototype' in XMLHttpRequest && 'withCredentials' in XMLHttpRequest.prototype;

var useShadowDOM = useXHR && HTMLElement && 'attachShadow' in HTMLElement.prototype && !('prototype' in HTMLElement.prototype.attachShadow);

var onEvent = function (target, eventName, func) {
  /* istanbul ignore else: IE lt 9 */
  if (target.addEventListener) {
    target.addEventListener(eventName, func, false);
  } else {
    target.attachEvent('on' + eventName, func);
  }
};

var offEvent = function (target, eventName, func) {
  /* istanbul ignore else: IE lt 9 */
  if (target.removeEventListener) {
    target.removeEventListener(eventName, func, false);
  } else {
    target.detachEvent('on' + eventName, func);
  }
};

var onceEvent = function (target, eventName, func) {
  var callback = function () {
    offEvent(target, eventName, callback);
    return func.apply(this, arguments)
  };
  onEvent(target, eventName, callback);
};

var onceReadyStateChange = /* istanbul ignore next: IE lt 9 */ function (target, regex, func) {
  if (target.readyState != null) {
    var eventName = 'readystatechange';
    var callback = function () {
      if (regex.test(target.readyState)) {
        offEvent(target, eventName, callback);
        return func.apply(this, arguments)
      }
    };
    onEvent(target, eventName, callback);
  }
};

var parseOptions = function (anchor) {
  var options = {
    href: anchor.href,
    title: anchor.title,
    'aria-label': anchor.getAttribute('aria-label')
  };

  forEach(['icon', 'color-scheme', 'text', 'size', 'show-count'], function (option) {
    var attribute = 'data-' + option;
    options[attribute] = anchor.getAttribute(attribute);
  });

  if (options['data-text'] == null) {
    options['data-text'] = anchor.textContent || anchor.innerText;
  }

  return options
};

var buttonsCssText = "body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;display:inline-flex;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor;overflow:visible}";

var light = ".btn{color:#24292f;background-color:#ebf0f4;border-color:#ccd1d5;border-color:rgba(27,31,36,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f6f8fa'/%3e%3cstop offset='90%25' stop-color='%23ebf0f4'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f6f8fa, #ebf0f4 90%);background-image:linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF6F8FA', endColorstr='#FFEAEFF3')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e9ebef;background-position:0 -0.5em;border-color:#caccd1;border-color:rgba(27,31,36,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f3f4f6, #e9ebef 90%);background-image:linear-gradient(180deg, #f3f4f6, #e9ebef 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF3F4F6', endColorstr='#FFE8EAEE')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e5e9ed;border-color:#c7cbcf;border-color:rgba(27,31,36,.15);box-shadow:inset 0 .15em .3em rgba(27,31,36,.15);background-image:none;filter:none}.social-count{color:#24292f;background-color:#fff;border-color:#ddddde;border-color:rgba(27,31,36,.15)}.social-count:focus,.social-count:hover{color:#0969da}.octicon-heart{color:#bf3989}";

var dark = ".btn{color:#c9d1d9;background-color:#1a1e23;border-color:#2f3439;border-color:rgba(240,246,252,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#292e33;background-position:0 -0.5em;border-color:#8b949e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2330363d'/%3e%3cstop offset='90%25' stop-color='%23292e33'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #30363d, #292e33 90%);background-image:linear-gradient(180deg, #30363d, #292e33 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF30363D', endColorstr='#FF282D32')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#161719;border-color:#8b949e;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15);background-image:none;filter:none}.social-count{color:#c9d1d9;background-color:#0d1117;border-color:#24282e;border-color:rgba(240,246,252,.1)}.social-count:focus,.social-count:hover{color:#58a6ff}.octicon-heart{color:#db61a2}";

var darkDimmed = ".btn{color:#adbac7;background-color:#30363d;border-color:#40464e;border-color:rgba(205,217,229,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23373e47'/%3e%3cstop offset='90%25' stop-color='%2330363d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #373e47, #30363d 90%);background-image:linear-gradient(180deg, #373e47, #30363d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF373E47', endColorstr='#FF2F353C')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#3c444d;background-position:0 -0.5em;border-color:#768390;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23444c56'/%3e%3cstop offset='90%25' stop-color='%233c444d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #444c56, #3c444d 90%);background-image:linear-gradient(180deg, #444c56, #3c444d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF444C56', endColorstr='#FF3B434C')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#2e3031;border-color:#768390;box-shadow:inset 0 .15em .3em rgba(28,33,40,.15);background-image:none;filter:none}.social-count{color:#adbac7;background-color:#22272e;border-color:#333940;border-color:rgba(205,217,229,.1)}.social-count:focus,.social-count:hover{color:#539bf5}.octicon-heart{color:#c96198}";

var darkHighContrast = ".btn{color:#f0f3f6;background-color:#202329;border-color:#7a828e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23272b33'/%3e%3cstop offset='90%25' stop-color='%23202329'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #272b33, #202329 90%);background-image:linear-gradient(180deg, #272b33, #202329 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF272B33', endColorstr='#FF1F2228')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#4a515b;background-position:0 -0.5em;border-color:#bdc4cc;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23525964'/%3e%3cstop offset='90%25' stop-color='%234a515b'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #525964, #4a515b 90%);background-image:linear-gradient(180deg, #525964, #4a515b 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF525964', endColorstr='#FF49505A')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#1d1d1f;border-color:#bdc4cc;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15);background-image:none;filter:none}.social-count{color:#f0f3f6;background-color:#0a0c10;border-color:#7a828e}.social-count:focus,.social-count:hover{color:#71b7ff}.octicon-heart{color:#ef6eb1}";

var stringify = function (obj, sep, eq, encodeURIComponent) {
  if (sep == null) {
    sep = '&';
  }
  if (eq == null) {
    eq = '=';
  }
  if (encodeURIComponent == null) {
    encodeURIComponent = window.encodeURIComponent;
  }
  var params = [];
  for (var name in obj) {
    var value = obj[name];
    if (value != null) {
      params.push(encodeURIComponent(name) + eq + encodeURIComponent(value));
    }
  }
  return params.join(sep)
};

var parse = function (str, sep, eq, decodeURIComponent) {
  if (sep == null) {
    sep = '&';
  }
  if (eq == null) {
    eq = '=';
  }
  if (decodeURIComponent == null) {
    decodeURIComponent = window.decodeURIComponent;
  }
  var obj = {};
  forEach(str.split(sep), function (entry) {
    if (entry !== '') {
      var ref = entry.split(eq);
      obj[decodeURIComponent(ref[0])] = (ref[1] != null ? decodeURIComponent(ref.slice(1).join(eq)) : undefined);
    }
  });
  return obj
};

var widgetColorSchemes = {
  light: light,
  dark: dark,
  dark_dimmed: darkDimmed,
  dark_high_contrast: darkHighContrast
};

var getColorSchemeMediaQuery = function (systemColorScheme, widgetColorScheme) {
  return '@media(prefers-color-scheme:' + systemColorScheme + '){' + widgetColorSchemes[hasOwnProperty(widgetColorSchemes, widgetColorScheme) ? widgetColorScheme : systemColorScheme] + '}'
};

var getColorScheme = function (declarations) {
  if (declarations == null) {
    return widgetColorSchemes.light
  }

  if (hasOwnProperty(widgetColorSchemes, declarations)) {
    return widgetColorSchemes[declarations]
  }

  var colorSchemes = parse(declarations, ';', ':', function (str) {
    return str.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g, '')
  });

  return widgetColorSchemes[hasOwnProperty(widgetColorSchemes, colorSchemes['no-preference']) ? colorSchemes['no-preference'] : 'light'] +
    getColorSchemeMediaQuery('light', colorSchemes.light) +
    getColorSchemeMediaQuery('dark', colorSchemes.dark)
};

var data = {
  "comment-discussion": {
    heights: {
      "16": {
        width: 16,
        path: "<path fill-rule=\"evenodd\" d=\"M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z\"></path>"
      }
    }
  },
  download: {
    heights: {
      "16": {
        width: 16,
        path: "<path fill-rule=\"evenodd\" d=\"M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z\"></path>"
      }
    }
  },
  eye: {
    heights: {
      "16": {
        width: 16,
        path: "<path fill-rule=\"evenodd\" d=\"M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z\"></path>"
      }
    }
  },
  heart: {
    heights: {
      "16": {
        width: 16,
        path: "<path fill-rule=\"evenodd\" d=\"M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z\"></path>"
      }
    }
  },
  "issue-opened": {
    heights: {
      "16": {
        width: 16,
        path: "<path d=\"M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z\"></path><path fill-rule=\"evenodd\" d=\"M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z\"></path>"
      }
    }
  },
  "mark-github": {
    heights: {
      "16": {
        width: 16,
        path: "<path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z\"></path>"
      }
    }
  },
  "package": {
    heights: {
      "16": {
        width: 16,
        path: "<path fill-rule=\"evenodd\" d=\"M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z\"></path>"
      }
    }
  },
  play: {
    heights: {
      "16": {
        width: 16,
        path: "<path fill-rule=\"evenodd\" d=\"M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z\"></path>"
      }
    }
  },
  "repo-forked": {
    heights: {
      "16": {
        width: 16,
        path: "<path fill-rule=\"evenodd\" d=\"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z\"></path>"
      }
    }
  },
  "repo-template": {
    heights: {
      "16": {
        width: 16,
        path: "<path fill-rule=\"evenodd\" d=\"M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z\"></path>"
      }
    }
  },
  star: {
    heights: {
      "16": {
        width: 16,
        path: "<path fill-rule=\"evenodd\" d=\"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z\"></path>"
      }
    }
  }
};

var octicon = function (icon, height) {
  icon = toLowerCase(icon).replace(/^octicon-/, '');
  if (!hasOwnProperty(data, icon)) {
    icon = 'mark-github';
  }

  var defaultHeight = height >= 24 && /* istanbul ignore next */ 24 in data[icon].heights ? /* istanbul ignore next */ 24 : 16;

  var svg = data[icon].heights[defaultHeight];

  return '<svg viewBox="0 0 ' + svg.width + ' ' + defaultHeight + '" width="' + (height * svg.width / defaultHeight) + '" height="' + height + '" class="octicon octicon-' + icon + '" aria-hidden="true">' + svg.path + '</svg>'
};

var queues = {};

var fetch = function (url, func) {
  var queue = queues[url] || (queues[url] = []);
  if (queue.push(func) > 1) {
    return
  }

  var callback = dispatchOnce(function () {
    delete queues[url];
    while ((func = queue.shift())) {
      func.apply(null, arguments);
    }
  });

  if (useXHR) {
    var xhr = new XMLHttpRequest();
    onEvent(xhr, 'abort', callback);
    onEvent(xhr, 'error', callback);
    onEvent(xhr, 'load', function () {
      var data;
      try {
        data = JSON.parse(this.responseText);
      } catch (error) {
        callback(error);
        return
      }
      callback(this.status !== 200, data);
    });
    xhr.open('GET', url);
    xhr.send();
  } else {
    var contentWindow = this || window;
    contentWindow._ = function (json) {
      contentWindow._ = null;
      callback(json.meta.status !== 200, json.data);
    };
    var script = createElementInDocument(contentWindow.document)('script', {
      async: true,
      src: url + (url.indexOf('?') !== -1 ? '&' : '?') + 'callback=_'
    });
    var onloadend = /* istanbul ignore next: IE lt 9 */ function () {
      if (contentWindow._) {
        contentWindow._({
          meta: {}
        });
      }
    };
    onEvent(script, 'load', onloadend);
    onEvent(script, 'error', onloadend);
    onceReadyStateChange(script, /de|m/, onloadend);
    contentWindow.document.getElementsByTagName('head')[0].appendChild(script);
  }
};

var render$1 = function (root, options, func) {
  var createElement = createElementInDocument(root.ownerDocument);

  var style = root.appendChild(createElement('style', {
    type: 'text/css'
  }));

  var cssText = buttonsCssText + getColorScheme(options['data-color-scheme']);

  /* istanbul ignore if: IE lt 9 */
  if (style.styleSheet) {
    style.styleSheet.cssText = cssText;
  } else {
    style.appendChild(root.ownerDocument.createTextNode(cssText));
  }

  var isLarge = toLowerCase(options['data-size']) === 'large';

  var btn = createElement('a', {
    className: 'btn',
    href: options.href,
    rel: 'noopener',
    target: '_blank',
    title: options.title || undefined,
    'aria-label': options['aria-label'] || undefined,
    innerHTML: octicon(options['data-icon'], isLarge ? 16 : 14) + '&nbsp;'
  }, [
    createElement('span', {}, [options['data-text'] || ''])
  ]);

  var widget = root.appendChild(createElement('div', {
    className: 'widget' + (isLarge ? ' widget-lg' : '')
  }, [
    btn
  ]));

  var hostname = btn.hostname.replace(/\.$/, '');
  if (('.' + hostname).substring(hostname.length - domain.length) !== ('.' + domain)) {
    btn.removeAttribute('href');
    func(widget);
    return
  }

  var path = (' /' + btn.pathname).split(/\/+/);
  if (((hostname === domain || hostname === 'gist.' + domain) && path[3] === 'archive') ||
    (hostname === domain && path[3] === 'releases' && (path[4] === 'download' || (path[4] === 'latest' && path[5] === 'download'))) ||
    (hostname === 'codeload.' + domain)) {
    btn.target = '_top';
  }

  if (toLowerCase(options['data-show-count']) !== 'true' ||
    hostname !== domain ||
    path[1] === 'marketplace' ||
    path[1] === 'sponsors' ||
    path[1] === 'orgs' ||
    path[1] === 'users' ||
    path[1] === '-') {
    func(widget);
    return
  }

  var href, property;
  if (!path[2] && path[1]) {
    property = 'followers';
    href = '?tab=followers';
  } else if (!path[3] && path[2]) {
    property = 'stargazers_count';
    href = '/stargazers';
  } else if (!path[4] && path[3] === 'subscription') {
    property = 'subscribers_count';
    href = '/watchers';
  } else if (!path[4] && path[3] === 'fork') {
    property = 'forks_count';
    href = '/network/members';
  } else if (path[3] === 'issues') {
    property = 'open_issues_count';
    href = '/issues';
  } else {
    func(widget);
    return
  }

  var api = path[2] ? '/repos/' + path[1] + '/' + path[2] : '/users/' + path[1];
  fetch.call(this, apiBaseURL + api, function (error, json) {
    if (!error) {
      var data = json[property];
      widget.appendChild(createElement('a', {
        className: 'social-count',
        href: json.html_url + href,
        rel: 'noopener',
        target: '_blank',
        'aria-label': data + ' ' + property.replace(/_count$/, '').replace('_', ' ').slice(0, data < 2 ? -1 : undefined) + ' on GitHub'
      }, [
        ('' + data).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      ]));
    }
    func(widget);
  });
};

var devicePixelRatio = window.devicePixelRatio || /* istanbul ignore next */ 1;

var ceilPixel = function (px) {
  return (devicePixelRatio > 1 ? Math.ceil(Math.round(px * devicePixelRatio) / devicePixelRatio * 2) / 2 : Math.ceil(px)) || 0
};

var get = function (el) {
  var width = el.offsetWidth;
  var height = el.offsetHeight;
  if (el.getBoundingClientRect) {
    var boundingClientRect = el.getBoundingClientRect();
    width = Math.max(width, ceilPixel(boundingClientRect.width));
    height = Math.max(height, ceilPixel(boundingClientRect.height));
  }
  return [width, height]
};

var set = function (el, size) {
  el.style.width = size[0] + 'px';
  el.style.height = size[1] + 'px';
};

var render = function (options, func) {
  if (options == null || func == null) {
    return
  }
  if (options.getAttribute) {
    options = parseOptions(options);
  }
  if (useShadowDOM) {
    var host = createElement('span');
    render$1(host.attachShadow({ mode: 'closed' }), options, function () {
      func(host);
    });
  } else {
    var iframe = createElement('iframe', {
      src: 'javascript:0',
      title: options.title || undefined,
      allowtransparency: true,
      scrolling: 'no',
      frameBorder: 0
    });
    set(iframe, [0, 0]);
    iframe.style.border = 'none';
    var callback = function () {
      var contentWindow = iframe.contentWindow;
      var body;
      try {
        body = contentWindow.document.body;
      } catch (_) /* istanbul ignore next: IE 11 */ {
        document.body.appendChild(iframe.parentNode.removeChild(iframe));
        return
      }
      offEvent(iframe, 'load', callback);
      render$1.call(contentWindow, body, options, function (widget) {
        var size = get(widget);
        iframe.parentNode.removeChild(iframe);
        onceEvent(iframe, 'load', function () {
          set(iframe, size);
        });
        iframe.src = iframeURL + '#' + (iframe.name = stringify(options));
        func(iframe);
      });
    };
    onEvent(iframe, 'load', callback);
    document.body.appendChild(iframe);
  }
};




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/is-absolute-url/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-absolute-url/index.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = url => {
	if (typeof url !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof url}\``);
	}

	// Don't match Windows paths `c:\`
	if (/^[a-zA-Z]:\\/.test(url)) {
		return false;
	}

	// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
	// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
	return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url);
};


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/prism-react-renderer/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/prism-react-renderer/dist/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Prism": () => (/* reexport safe */ _prism_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defaultProps": () => (/* binding */ defaultProps)
/* harmony export */ });
/* harmony import */ var _prism_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prism/index.js */ "./node_modules/prism-react-renderer/prism/index.js");
/* harmony import */ var _themes_duotoneDark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themes/duotoneDark */ "./node_modules/prism-react-renderer/themes/duotoneDark/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);





var defaultProps = {
  // $FlowFixMe
  Prism: _prism_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  theme: _themes_duotoneDark__WEBPACK_IMPORTED_MODULE_2__["default"]
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Highlight);



/***/ }),

/***/ "./node_modules/prism-react-renderer/prism/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/prism-react-renderer/prism/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

/**
 * prism-react-renderer:
 * This file has been modified to remove:
 * - globals and window dependency
 * - worker support
 * - highlightAll and other element dependent methods
 * - _.hooks helpers
 * - UMD/node-specific hacks
 * It has also been run through prettier
 */
var Prism = function () {
  var uniqueId = 0;
  var _ = {
    util: {
      encode: function (tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
        } else if (_.util.type(tokens) === "Array") {
          return tokens.map(_.util.encode);
        } else {
          return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        }
      },
      type: function (o) {
        return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
      },
      objId: function (obj) {
        if (!obj["__id"]) {
          Object.defineProperty(obj, "__id", {
            value: ++uniqueId
          });
        }

        return obj["__id"];
      },
      // Deep clone a language definition (e.g. to extend it)
      clone: function (o, visited) {
        var type = _.util.type(o);

        visited = visited || {};

        switch (type) {
          case "Object":
            if (visited[_.util.objId(o)]) {
              return visited[_.util.objId(o)];
            }

            var clone = {};
            visited[_.util.objId(o)] = clone;

            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = _.util.clone(o[key], visited);
              }
            }

            return clone;

          case "Array":
            if (visited[_.util.objId(o)]) {
              return visited[_.util.objId(o)];
            }

            var clone = [];
            visited[_.util.objId(o)] = clone;
            o.forEach(function (v, i) {
              clone[i] = _.util.clone(v, visited);
            });
            return clone;
        }

        return o;
      }
    },
    languages: {
      extend: function (id, redef) {
        var lang = _.util.clone(_.languages[id]);

        for (var key in redef) {
          lang[key] = redef[key];
        }

        return lang;
      },

      /**
       * Insert a token before another token in a language literal
       * As this needs to recreate the object (we cannot actually insert before keys in object literals),
       * we cannot just provide an object, we need anobject and a key.
       * @param inside The key (or language id) of the parent
       * @param before The key to insert before. If not provided, the function appends instead.
       * @param insert Object with the key/value pairs to insert
       * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
       */
      insertBefore: function (inside, before, insert, root) {
        root = root || _.languages;
        var grammar = root[inside];

        if (arguments.length == 2) {
          insert = arguments[1];

          for (var newToken in insert) {
            if (insert.hasOwnProperty(newToken)) {
              grammar[newToken] = insert[newToken];
            }
          }

          return grammar;
        }

        var ret = {};

        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            }

            ret[token] = grammar[token];
          }
        } // Update references in other language definitions


        _.languages.DFS(_.languages, function (key, value) {
          if (value === root[inside] && key != inside) {
            this[key] = ret;
          }
        });

        return root[inside] = ret;
      },
      // Traverse a language definition with Depth First Search
      DFS: function (o, callback, type, visited) {
        visited = visited || {};

        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);

            if (_.util.type(o[i]) === "Object" && !visited[_.util.objId(o[i])]) {
              visited[_.util.objId(o[i])] = true;

              _.languages.DFS(o[i], callback, null, visited);
            } else if (_.util.type(o[i]) === "Array" && !visited[_.util.objId(o[i])]) {
              visited[_.util.objId(o[i])] = true;

              _.languages.DFS(o[i], callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},
    highlight: function (text, grammar, language) {
      var env = {
        code: text,
        grammar: grammar,
        language: language
      };

      _.hooks.run("before-tokenize", env);

      env.tokens = _.tokenize(env.code, env.grammar);

      _.hooks.run("after-tokenize", env);

      return Token.stringify(_.util.encode(env.tokens), env.language);
    },
    matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
      var Token = _.Token;

      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }

        if (token == target) {
          return;
        }

        var patterns = grammar[token];
        patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];

        for (var j = 0; j < patterns.length; ++j) {
          var pattern = patterns[j],
              inside = pattern.inside,
              lookbehind = !!pattern.lookbehind,
              greedy = !!pattern.greedy,
              lookbehindLength = 0,
              alias = pattern.alias;

          if (greedy && !pattern.pattern.global) {
            // Without the global flag, lastIndex won't work
            var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
            pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
          }

          pattern = pattern.pattern || pattern; // Don’t cache length as it changes during the loop

          for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {
            var str = strarr[i];

            if (strarr.length > text.length) {
              // Something went terribly wrong, ABORT, ABORT!
              return;
            }

            if (str instanceof Token) {
              continue;
            }

            if (greedy && i != strarr.length - 1) {
              pattern.lastIndex = pos;
              var match = pattern.exec(text);

              if (!match) {
                break;
              }

              var from = match.index + (lookbehind ? match[1].length : 0),
                  to = match.index + match[0].length,
                  k = i,
                  p = pos;

              for (var len = strarr.length; k < len && (p < to || !strarr[k].type && !strarr[k - 1].greedy); ++k) {
                p += strarr[k].length; // Move the index i to the element in strarr that is closest to from

                if (from >= p) {
                  ++i;
                  pos = p;
                }
              } // If strarr[i] is a Token, then the match starts inside another Token, which is invalid


              if (strarr[i] instanceof Token) {
                continue;
              } // Number of tokens to delete and replace with the new match


              delNum = k - i;
              str = text.slice(pos, p);
              match.index -= pos;
            } else {
              pattern.lastIndex = 0;
              var match = pattern.exec(str),
                  delNum = 1;
            }

            if (!match) {
              if (oneshot) {
                break;
              }

              continue;
            }

            if (lookbehind) {
              lookbehindLength = match[1] ? match[1].length : 0;
            }

            var from = match.index + lookbehindLength,
                match = match[0].slice(lookbehindLength),
                to = from + match.length,
                before = str.slice(0, from),
                after = str.slice(to);
            var args = [i, delNum];

            if (before) {
              ++i;
              pos += before.length;
              args.push(before);
            }

            var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
            args.push(wrapped);

            if (after) {
              args.push(after);
            }

            Array.prototype.splice.apply(strarr, args);

            if (delNum != 1) {
              _.matchGrammar(text, strarr, grammar, i, pos, true, token);
            }

            if (oneshot) {
              break;
            }
          }
        }
      }
    },
    hooks: {
      add: function () {},
      run: function (name, env) {}
    },
    tokenize: function (text, grammar, language) {
      var strarr = [text];
      var rest = grammar.rest;

      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }

        delete grammar.rest;
      }

      _.matchGrammar(text, strarr, grammar, 0, 0, false);

      return strarr;
    }
  };

  var Token = _.Token = function (type, content, alias, matchedStr, greedy) {
    this.type = type;
    this.content = content;
    this.alias = alias; // Copy of the full string this token was created from

    this.length = (matchedStr || "").length | 0;
    this.greedy = !!greedy;
  };

  Token.stringify = function (o, language, parent) {
    if (typeof o == "string") {
      return o;
    }

    if (_.util.type(o) === "Array") {
      return o.map(function (element) {
        return Token.stringify(element, language, o);
      }).join("");
    }

    var env = {
      type: o.type,
      content: Token.stringify(o.content, language, parent),
      tag: "span",
      classes: ["token", o.type],
      attributes: {},
      language: language,
      parent: parent
    };

    if (o.alias) {
      var aliases = _.util.type(o.alias) === "Array" ? o.alias : [o.alias];
      Array.prototype.push.apply(env.classes, aliases);
    }

    var attributes = Object.keys(env.attributes).map(function (name) {
      return name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
    }).join(" ");
    return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + (attributes ? " " + attributes : "") + ">" + env.content + "</" + env.tag + ">";
  };

  return _;
}();

/* This content is auto-generated to include some prismjs language components: */

/* "prismjs/components/prism-markup" */

Prism.languages.markup = {
  'comment': /<!--[\s\S]*?-->/,
  'prolog': /<\?[\s\S]+?\?>/,
  'doctype': {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      'internal-subset': {
        pattern: /(\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null // see below

      },
      'string': {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      'punctuation': /^<!|>$|[[\]]/,
      'doctype-tag': /^DOCTYPE/,
      'name': /[^\s<>'"]+/
    }
  },
  'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          'punctuation': [{
            pattern: /^=/,
            alias: 'attr-equals'
          }, /"|'/]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': [{
    pattern: /&[\da-z]{1,8};/i,
    alias: 'named-entity'
  }, /&#x?[\da-f]{1,8};/i]
};
Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup; // Plugin to make entity title show the real entity, idea by Roman Komarov

Prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: Prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return tagName;
      }), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    Prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;
/* "prismjs/components/prism-bash" */

(function (Prism) {
  // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
  // + LC_ALL, RANDOM, REPLY, SECONDS.
  // + make sure PS1..4 are here as they are not always set,
  // - some useless things.
  var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';
  var commandAfterHeredoc = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: true,
    alias: 'punctuation',
    // this looks reasonably well in all themes
    inside: null // see below

  };
  var insideString = {
    'bash': commandAfterHeredoc,
    'environment': {
      pattern: RegExp("\\$" + envVars),
      alias: 'constant'
    },
    'variable': [// [0]: Arithmetic Environment
    {
      pattern: /\$?\(\([\s\S]+?\)\)/,
      greedy: true,
      inside: {
        // If there is a $ sign at the beginning highlight $(( and )) as variable
        'variable': [{
          pattern: /(^\$\(\([\s\S]+)\)\)/,
          lookbehind: true
        }, /^\$\(\(/],
        'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
        // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
        'operator': /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
        // If there is no $ sign at the beginning highlight (( and )) as punctuation
        'punctuation': /\(\(?|\)\)?|,|;/
      }
    }, // [1]: Command Substitution
    {
      pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
      greedy: true,
      inside: {
        'variable': /^\$\(|^`|\)$|`$/
      }
    }, // [2]: Brace expansion
    {
      pattern: /\$\{[^}]+\}/,
      greedy: true,
      inside: {
        'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
        'punctuation': /[\[\]]/,
        'environment': {
          pattern: RegExp("(\\{)" + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      }
    }, /\$(?:\w+|[#?*!@$])/],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
  };
  Prism.languages.bash = {
    'shebang': {
      pattern: /^#!\s*\/.*/,
      alias: 'important'
    },
    'comment': {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    'function-name': [// a) function foo {
    // b) foo() {
    // c) function foo() {
    // but not “foo {”
    {
      // a) and c)
      pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: true,
      alias: 'function'
    }, {
      // b)
      pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
      alias: 'function'
    }],
    // Highlight variable names as variables in for and select beginnings.
    'for-or-select': {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: 'variable',
      lookbehind: true
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    'assign-left': {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        'environment': {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      },
      alias: 'variable',
      lookbehind: true
    },
    'string': [// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
    {
      pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, // Here-document with quotes around the tag
    // → No expansion (so no “inside”).
    {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
      lookbehind: true,
      greedy: true,
      inside: {
        'bash': commandAfterHeredoc
      }
    }, // “Normal” string
    {
      pattern: /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }],
    'environment': {
      pattern: RegExp("\\$?" + envVars),
      alias: 'constant'
    },
    'variable': insideString.variable,
    'function': {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'keyword': {
      pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    'builtin': {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
      lookbehind: true,
      // Alias added to make those easier to distinguish from strings.
      alias: 'class-name'
    },
    'boolean': {
      pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'file-descriptor': {
      pattern: /\B&\d\b/,
      alias: 'important'
    },
    'operator': {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
      inside: {
        'file-descriptor': {
          pattern: /^\d/,
          alias: 'important'
        }
      }
    },
    'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    'number': {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  commandAfterHeredoc.inside = Prism.languages.bash;
  /* Patterns in command substitution. */

  var toBeCopied = ['comment', 'function-name', 'for-or-select', 'assign-left', 'string', 'environment', 'function', 'keyword', 'builtin', 'boolean', 'file-descriptor', 'operator', 'punctuation', 'number'];
  var inside = insideString.variable[1].inside;

  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
  }

  Prism.languages.shell = Prism.languages.bash;
})(Prism);
/* "prismjs/components/prism-clike" */


Prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true,
    greedy: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      'punctuation': /[.\\]/
    }
  },
  'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  'boolean': /\b(?:true|false)\b/,
  'function': /\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  'punctuation': /[{}[\];(),.:]/
};
/* "prismjs/components/prism-c" */

Prism.languages.c = Prism.languages.extend('clike', {
  'comment': {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: true
  },
  'keyword': /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
  'function': /[a-z_]\w*(?=\s*\()/i,
  'number': /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore('c', 'string', {
  'macro': {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^\s*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    greedy: true,
    alias: 'property',
    inside: {
      'string': [{
        // highlight the path of the include statement as a string
        pattern: /^(#\s*include\s*)<[^>]+>/,
        lookbehind: true
      }, Prism.languages.c['string']],
      'comment': Prism.languages.c['comment'],
      'macro-name': [{
        pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
        lookbehind: true
      }, {
        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
        lookbehind: true,
        alias: 'function'
      }],
      // highlight macro directives as keywords
      'directive': {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: true,
        alias: 'keyword'
      },
      'directive-hash': /^#/,
      'punctuation': /##|\\(?=[\r\n])/,
      'expression': {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  },
  // highlight predefined macros as constants
  'constant': /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
});
delete Prism.languages.c['boolean'];
/* "prismjs/components/prism-cpp" */

(function (Prism) {
  var keyword = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
  Prism.languages.cpp = Prism.languages.extend('c', {
    'class-name': [{
      pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function () {
        return keyword.source;
      })),
      lookbehind: true
    }, // This is intended to capture the class name of method implementations like:
    //   void foo::bar() const {}
    // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
    // it starts with an uppercase letter. This approximation should give decent results.
    /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, // This will capture the class name before destructors like:
    //   Foo::~Foo() {}
    /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, // This also intends to capture the class name of method implementations but here the class has template
    // parameters, so it can't be a namespace (until C++ adds generic namespaces).
    /\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
    'keyword': keyword,
    'number': {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: true
    },
    'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    'boolean': /\b(?:true|false)\b/
  });
  Prism.languages.insertBefore('cpp', 'string', {
    'raw-string': {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: 'string',
      greedy: true
    }
  });
  Prism.languages.insertBefore('cpp', 'class-name', {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    'base-clause': {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: true,
      greedy: true,
      inside: Prism.languages.extend('cpp', {})
    }
  });
  Prism.languages.insertBefore('inside', 'operator', {
    // All untokenized words that are not namespaces should be class names
    'class-name': /\b[a-z_]\w*\b(?!\s*::)/i
  }, Prism.languages.cpp['base-clause']);
})(Prism);
/* "prismjs/components/prism-css" */


(function (Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        'rule': /^@[\w-]+/,
        'selector-function-argument': {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: 'selector'
        },
        'keyword': {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        } // See rest below

      }
    },
    'url': {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
      greedy: true,
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/,
        'string': {
          pattern: RegExp('^' + string.source + '$'),
          alias: 'url'
        }
      }
    },
    'selector': RegExp('[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
    'string': {
      pattern: string,
      greedy: true
    },
    'property': /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
    'important': /!important\b/i,
    'function': /[-a-z0-9]+(?=\()/i,
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;

  if (markup) {
    markup.tag.addInlined('style', 'css');
    Prism.languages.insertBefore('inside', 'attr-value', {
      'style-attr': {
        pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
        lookbehind: true,
        inside: {
          'attr-value': {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              'style': {
                pattern: /(["'])[\s\S]+(?=["']$)/,
                lookbehind: true,
                alias: 'language-css',
                inside: Prism.languages.css
              },
              'punctuation': [{
                pattern: /^=/,
                alias: 'attr-equals'
              }, /"|'/]
            }
          },
          'attr-name': /^style/i
        }
      }
    }, markup.tag);
  }
})(Prism);
/* "prismjs/components/prism-css-extras" */


(function (Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  var selectorInside;
  Prism.languages.css.selector = {
    pattern: Prism.languages.css.selector,
    inside: selectorInside = {
      'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      'pseudo-class': /:[-\w]+/,
      'class': /\.[-\w]+/,
      'id': /#[-\w]+/,
      'attribute': {
        pattern: RegExp('\\[(?:[^[\\]"\']|' + string.source + ')*\\]'),
        greedy: true,
        inside: {
          'punctuation': /^\[|\]$/,
          'case-sensitivity': {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: 'keyword'
          },
          'namespace': {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: true,
            inside: {
              'punctuation': /\|$/
            }
          },
          'attr-name': {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: true
          },
          'attr-value': [string, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: true
          }],
          'operator': /[|~*^$]?=/
        }
      },
      'n-th': [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: true,
        inside: {
          'number': /[\dn]+/,
          'operator': /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: true
      }],
      'combinator': />|\+|~|\|\|/,
      // the `tag` token has been existed and removed.
      // because we can't find a perfect tokenize to match it.
      // if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.
      'punctuation': /[(),]/
    }
  };
  Prism.languages.css['atrule'].inside['selector-function-argument'].inside = selectorInside;
  Prism.languages.insertBefore('css', 'property', {
    'variable': {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: true
    }
  });
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+\b)/,
    lookbehind: true
  }; // 123 -123 .123 -.123 12.3 -12.3

  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  Prism.languages.insertBefore('css', 'function', {
    'operator': {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    // CAREFUL!
    // Previewers and Inline color use hexcode and color.
    'hexcode': {
      pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i,
      alias: 'color'
    },
    'color': [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
      pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        'unit': unit,
        'number': number,
        'function': /[\w-]+(?=\()/,
        'punctuation': /[(),]/
      }
    }],
    // it's important that there is no boundary assertion after the hex digits
    'entity': /\\[\da-f]{1,8}/i,
    'unit': unit,
    'number': number
  });
})(Prism);
/* "prismjs/components/prism-javascript" */


Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [Prism.languages.clike['class-name'], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true,
    inside: {
      'regex-source': {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: 'language-regex',
        inside: Prism.languages.regex
      },
      'regex-flags': /[a-z]+$/,
      'regex-delimiter': /^\/|\/$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore('javascript', 'string', {
  'template-string': {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\${|}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  }
});

if (Prism.languages.markup) {
  Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;
/* "prismjs/components/prism-jsx" */

(function (Prism) {
  var javascript = Prism.util.clone(Prism.languages.javascript);
  Prism.languages.jsx = Prism.languages.extend('markup', javascript);
  Prism.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i;
  Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i;
  Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i;
  Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism.languages.insertBefore('inside', 'attr-name', {
    'spread': {
      pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
      inside: {
        'punctuation': /\.{3}|[{}.]/,
        'attr-value': /\w+/
      }
    }
  }, Prism.languages.jsx.tag);
  Prism.languages.insertBefore('inside', 'attr-value', {
    'script': {
      // Allow for two levels of nesting
      pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
      inside: {
        'script-punctuation': {
          pattern: /^=(?={)/,
          alias: 'punctuation'
        },
        rest: Prism.languages.jsx
      },
      'alias': 'language-javascript'
    }
  }, Prism.languages.jsx.tag); // The following will handle plain text inside tags

  var stringifyToken = function (token) {
    if (!token) {
      return '';
    }

    if (typeof token === 'string') {
      return token;
    }

    if (typeof token.content === 'string') {
      return token.content;
    }

    return token.content.map(stringifyToken).join('');
  };

  var walkTokens = function (tokens) {
    var openedTags = [];

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;

      if (typeof token !== 'string') {
        if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
          // We found a tag, now find its kind
          if (token.content[0].content[0].content === '</') {
            // Closing tag
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              // Pop matching opening tag
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === '/>') ; else {
              // Opening tag
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {
          // Here we might have entered a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {
          // Here we might have left a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }

      if (notTagNorBrace || typeof token === 'string') {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          // Here we are inside a tag, and not inside a JSX context.
          // That's plain text: drop any tokens matched.
          var plainText = stringifyToken(token); // And merge text with adjacent text

          if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }

          if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }

          tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
        }
      }

      if (token.content && typeof token.content !== 'string') {
        walkTokens(token.content);
      }
    }
  };

  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'jsx' && env.language !== 'tsx') {
      return;
    }

    walkTokens(env.tokens);
  });
})(Prism);
/* "prismjs/components/prism-js-extras" */


(function (Prism) {
  Prism.languages.insertBefore('javascript', 'function-variable', {
    'method-variable': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function-variable'].pattern.source),
      lookbehind: true,
      alias: ['function-variable', 'method', 'function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'function', {
    'method': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function'].source),
      lookbehind: true,
      alias: ['function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'constant', {
    'known-class-name': [{
      // standard built-ins
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
      pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
      alias: 'class-name'
    }, {
      // errors
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: 'class-name'
    }]
  });
  /**
   * Replaces the `<ID>` placeholder in the given pattern with a pattern for general JS identifiers.
   *
   * @param {string} source
   * @param {string} [flags]
   * @returns {RegExp}
   */

  function withId(source, flags) {
    return RegExp(source.replace(/<ID>/g, function () {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), flags);
  }

  Prism.languages.insertBefore('javascript', 'keyword', {
    'imports': {
      // https://tc39.es/ecma262/#sec-imports
      pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    'exports': {
      // https://tc39.es/ecma262/#sec-exports
      pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
      lookbehind: true,
      inside: Prism.languages.javascript
    }
  });
  Prism.languages.javascript['keyword'].unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: 'module'
  }, {
    pattern: /\b(?:await|break|catch|continue|do|else|for|finally|if|return|switch|throw|try|while|yield)\b/,
    alias: 'control-flow'
  }, {
    pattern: /\bnull\b/,
    alias: ['null', 'nil']
  }, {
    pattern: /\bundefined\b/,
    alias: 'nil'
  });
  Prism.languages.insertBefore('javascript', 'operator', {
    'spread': {
      pattern: /\.{3}/,
      alias: 'operator'
    },
    'arrow': {
      pattern: /=>/,
      alias: 'operator'
    }
  });
  Prism.languages.insertBefore('javascript', 'punctuation', {
    'property-access': {
      pattern: withId(/(\.\s*)#?<ID>/.source),
      lookbehind: true
    },
    'maybe-class-name': {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: true
    },
    'dom': {
      // this contains only a few commonly used DOM variables
      pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
      alias: 'variable'
    },
    'console': {
      pattern: /\bconsole(?=\s*\.)/,
      alias: 'class-name'
    }
  }); // add 'maybe-class-name' to tokens which might be a class name

  var maybeClassNameTokens = ['function', 'function-variable', 'method', 'method-variable', 'property-access'];

  for (var i = 0; i < maybeClassNameTokens.length; i++) {
    var token = maybeClassNameTokens[i];
    var value = Prism.languages.javascript[token]; // convert regex to object

    if (Prism.util.type(value) === 'RegExp') {
      value = Prism.languages.javascript[token] = {
        pattern: value
      };
    } // keep in mind that we don't support arrays


    var inside = value.inside || {};
    value.inside = inside;
    inside['maybe-class-name'] = /^[A-Z][\s\S]*/;
  }
})(Prism);
/* "prismjs/components/prism-coffeescript" */


(function (Prism) {
  // Ignore comments starting with { to privilege string interpolation highlighting
  var comment = /#(?!\{).+/,
      interpolation = {
    pattern: /#\{[^}]+\}/,
    alias: 'variable'
  };
  Prism.languages.coffeescript = Prism.languages.extend('javascript', {
    'comment': comment,
    'string': [// Strings are multiline
    {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true
    }, {
      // Strings are multiline
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      inside: {
        'interpolation': interpolation
      }
    }],
    'keyword': /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    'class-member': {
      pattern: /@(?!\d)\w+/,
      alias: 'variable'
    }
  });
  Prism.languages.insertBefore('coffeescript', 'comment', {
    'multiline-comment': {
      pattern: /###[\s\S]+?###/,
      alias: 'comment'
    },
    // Block regexp can contain comments and interpolation
    'block-regex': {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: 'regex',
      inside: {
        'comment': comment,
        'interpolation': interpolation
      }
    }
  });
  Prism.languages.insertBefore('coffeescript', 'string', {
    'inline-javascript': {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        'delimiter': {
          pattern: /^`|`$/,
          alias: 'punctuation'
        },
        'script': {
          pattern: /[\s\S]+/,
          alias: 'language-javascript',
          inside: Prism.languages.javascript
        }
      }
    },
    // Block strings
    'multiline-string': [{
      pattern: /'''[\s\S]*?'''/,
      greedy: true,
      alias: 'string'
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: 'string',
      inside: {
        interpolation: interpolation
      }
    }]
  });
  Prism.languages.insertBefore('coffeescript', 'keyword', {
    // Object property
    'property': /(?!\d)\w+(?=\s*:(?!:))/
  });
  delete Prism.languages.coffeescript['template-string'];
  Prism.languages.coffee = Prism.languages.coffeescript;
})(Prism);
/* "prismjs/components/prism-diff" */


(function (Prism) {
  Prism.languages.diff = {
    'coord': [// Match all kinds of coord lines (prefixed by "+++", "---" or "***").
    /^(?:\*{3}|-{3}|\+{3}).*$/m, // Match "@@ ... @@" coord lines in unified diff.
    /^@@.*@@$/m, // Match coord lines in normal diff (starts with a number).
    /^\d.*$/m] // deleted, inserted, unchanged, diff

  };
  /**
   * A map from the name of a block to its line prefix.
   *
   * @type {Object<string, string>}
   */

  var PREFIXES = {
    'deleted-sign': '-',
    'deleted-arrow': '<',
    'inserted-sign': '+',
    'inserted-arrow': '>',
    'unchanged': ' ',
    'diff': '!'
  }; // add a token for each prefix

  Object.keys(PREFIXES).forEach(function (name) {
    var prefix = PREFIXES[name];
    var alias = [];

    if (!/^\w+$/.test(name)) {
      // "deleted-sign" -> "deleted"
      alias.push(/\w+/.exec(name)[0]);
    }

    if (name === "diff") {
      alias.push("bold");
    }

    Prism.languages.diff[name] = {
      pattern: RegExp('^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
      alias: alias,
      inside: {
        'line': {
          pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
          lookbehind: true
        },
        'prefix': {
          pattern: /[\s\S]/,
          alias: /\w+/.exec(name)[0]
        }
      }
    };
  }); // make prefixes available to Diff plugin

  Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
    value: PREFIXES
  });
})(Prism);
/* "prismjs/components/prism-git" */


Prism.languages.git = {
  /*
   * A simple one line comment like in a git status command
   * For instance:
   * $ git status
   * # On branch infinite-scroll
   * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
   * # and have 1 and 2 different commits each, respectively.
   * nothing to commit (working directory clean)
   */
  'comment': /^#.*/m,

  /*
   * Regexp to match the changed lines in a git diff output. Check the example below.
   */
  'deleted': /^[-–].*/m,
  'inserted': /^\+.*/m,

  /*
   * a string (double and simple quote)
   */
  'string': /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,

  /*
   * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
   * For instance:
   * $ git add file.txt
   */
  'command': {
    pattern: /^.*\$ git .*$/m,
    inside: {
      /*
       * A git command can contain a parameter starting by a single or a double dash followed by a string
       * For instance:
       * $ git diff --cached
       * $ git log -p
       */
      'parameter': /\s--?\w+/m
    }
  },

  /*
   * Coordinates displayed in a git diff command
   * For instance:
   * $ git diff
   * diff --git file.txt file.txt
   * index 6214953..1d54a52 100644
   * --- file.txt
   * +++ file.txt
   * @@ -1 +1,2 @@
   * -Here's my tetx file
   * +Here's my text file
   * +And this is the second line
   */
  'coord': /^@@.*@@$/m,

  /*
   * Match a "commit [SHA1]" line in a git log output.
   * For instance:
   * $ git log
   * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
   * Author: lgiraudel
   * Date:   Mon Feb 17 11:18:34 2014 +0100
   *
   *     Add of a new line
   */
  'commit-sha1': /^commit \w{40}$/m
};
/* "prismjs/components/prism-go" */

Prism.languages.go = Prism.languages.extend('clike', {
  'string': {
    pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
    greedy: true
  },
  'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  'boolean': /\b(?:_|iota|nil|true|false)\b/,
  'number': /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  'builtin': /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/
});
delete Prism.languages.go['class-name'];
/* "prismjs/components/prism-graphql" */

Prism.languages.graphql = {
  'comment': /#.*/,
  'description': {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: true,
    alias: 'string',
    inside: {
      'language-markdown': {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: true,
        inside: Prism.languages.markdown
      }
    }
  },
  'string': {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  'number': /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'boolean': /\b(?:true|false)\b/,
  'variable': /\$[a-z_]\w*/i,
  'directive': {
    pattern: /@[a-z_]\w*/i,
    alias: 'function'
  },
  'attr-name': {
    pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*)[a-zA-Z_]\w*/,
    lookbehind: true
  },
  'fragment': {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'keyword': /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  'operator': /[!=|&]|\.{3}/,
  'punctuation': /[!(){}\[\]:=,]/,
  'constant': /\b(?!ID\b)[A-Z][A-Z_\d]*\b/
};
/* "prismjs/components/prism-markup-templating" */

(function (Prism) {
  /**
   * Returns the placeholder for the given language id and index.
   *
   * @param {string} language
   * @param {string|number} index
   * @returns {string}
   */
  function getPlaceholder(language, index) {
    return '___' + language.toUpperCase() + index + '___';
  }

  Object.defineProperties(Prism.languages['markup-templating'] = {}, {
    buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching `placeholderPattern`.
       *
       * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
       * `true` will be replaced.
       *
       * @param {object} env The environment of the `before-tokenize` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function (env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }

        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function (match) {
          if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
            return match;
          }

          var i = tokenStack.length;
          var placeholder; // Check for existing strings

          while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
            ++i;
          } // Create a sparse array


          tokenStack[i] = match;
          return placeholder;
        }); // Switch the grammar to markup

        env.grammar = Prism.languages.markup;
      }
    },
    tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the `after-tokenize` hook.
       * @param {string} language The language id.
       */
      value: function (env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        } // Switch the grammar back


        env.grammar = Prism.languages[language];
        var j = 0;
        var keys = Object.keys(env.tokenStack);

        function walkTokens(tokens) {
          for (var i = 0; i < tokens.length; i++) {
            // all placeholders are replaced already
            if (j >= keys.length) {
              break;
            }

            var token = tokens[i];

            if (typeof token === 'string' || token.content && typeof token.content === 'string') {
              var k = keys[j];
              var t = env.tokenStack[k];
              var s = typeof token === 'string' ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);

              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
                var after = s.substring(index + placeholder.length);
                var replacement = [];

                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }

                replacement.push(middle);

                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }

                if (typeof token === 'string') {
                  tokens.splice.apply(tokens, [i, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content
            /* && typeof token.content !== 'string' */
            ) {
                walkTokens(token.content);
              }
          }

          return tokens;
        }

        walkTokens(env.tokens);
      }
    }
  });
})(Prism);
/* "prismjs/components/prism-handlebars" */


(function (Prism) {
  Prism.languages.handlebars = {
    'comment': /\{\{![\s\S]*?\}\}/,
    'delimiter': {
      pattern: /^\{\{\{?|\}\}\}?$/i,
      alias: 'punctuation'
    },
    'string': /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    'boolean': /\b(?:true|false)\b/,
    'block': {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/i,
      lookbehind: true,
      alias: 'keyword'
    },
    'brackets': {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    'punctuation': /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    'variable': /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
  };
  Prism.hooks.add('before-tokenize', function (env) {
    var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
    Prism.languages['markup-templating'].buildPlaceholders(env, 'handlebars', handlebarsPattern);
  });
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'handlebars');
  });
})(Prism);
/* "prismjs/components/prism-json" */
// https://www.json.org/json-en.html


Prism.languages.json = {
  'property': {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    greedy: true
  },
  'string': {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    greedy: true
  },
  'comment': {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'punctuation': /[{}[\],]/,
  'operator': /:/,
  'boolean': /\b(?:true|false)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  }
};
Prism.languages.webmanifest = Prism.languages.json;
/* "prismjs/components/prism-less" */

/* FIXME :
 :extend() is not handled specifically : its highlighting is buggy.
 Mixin usage must be inside a ruleset to be highlighted.
 At-rules (e.g. import) containing interpolations are buggy.
 Detached rulesets are highlighted as at-rules.
 A comment before a mixin usage prevents the latter to be properly highlighted.
 */

Prism.languages.less = Prism.languages.extend('css', {
  'comment': [/\/\*[\s\S]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: true
  }],
  'atrule': {
    pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      'punctuation': /[:()]/
    }
  },
  // selectors and mixins are considered the same
  'selector': {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      // mixin parameters
      'variable': /@+[\w-]+/
    }
  },
  'property': /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
  'operator': /[+\-*\/]/
});
Prism.languages.insertBefore('less', 'property', {
  'variable': [// Variable declaration (the colon must be consumed!)
  {
    pattern: /@[\w-]+\s*:/,
    inside: {
      "punctuation": /:/
    }
  }, // Variable usage
  /@@?[\w-]+/],
  'mixin-usage': {
    pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
    lookbehind: true,
    alias: 'function'
  }
});
/* "prismjs/components/prism-makefile" */

Prism.languages.makefile = {
  'comment': {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: true
  },
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  // Built-in target names
  'builtin': /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
  // Targets
  'symbol': {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    inside: {
      'variable': /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
    }
  },
  'variable': /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  'keyword': [// Directives
  /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, // Functions
  {
    pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
    lookbehind: true
  }],
  'operator': /(?:::|[?:+!])?=|[|@]/,
  'punctuation': /[:;(){}]/
};
/* "prismjs/components/prism-markdown" */

(function (Prism) {
  // Allow only one line break
  var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))/.source;
  /**
   * This function is intended for the creation of the bold or italic pattern.
   *
   * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
   *
   * _Note:_ Keep in mind that this adds a capturing group.
   *
   * @param {string} pattern
   * @returns {RegExp}
   */

  function createInline(pattern) {
    pattern = pattern.replace(/<inner>/g, function () {
      return inner;
    });
    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')');
  }

  var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
    return tableCell;
  });
  var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  Prism.languages.markdown = Prism.languages.extend('markup', {});
  Prism.languages.insertBefore('markdown', 'prolog', {
    'front-matter-block': {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: true,
      greedy: true,
      inside: {
        'punctuation': /^---|---$/,
        'font-matter': {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ['yaml', 'language-yaml'],
          inside: Prism.languages.yaml
        }
      }
    },
    'blockquote': {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: 'punctuation'
    },
    'table': {
      pattern: RegExp('^' + tableRow + tableLine + '(?:' + tableRow + ')*', 'm'),
      inside: {
        'table-data-rows': {
          pattern: RegExp('^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'),
          lookbehind: true,
          inside: {
            'table-data': {
              pattern: RegExp(tableCell),
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        },
        'table-line': {
          pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
          lookbehind: true,
          inside: {
            'punctuation': /\||:?-{3,}:?/
          }
        },
        'table-header-row': {
          pattern: RegExp('^' + tableRow + '$'),
          inside: {
            'table-header': {
              pattern: RegExp(tableCell),
              alias: 'important',
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        }
      }
    },
    'code': [{
      // Prefixed by 4 spaces or 1 tab and preceded by an empty line
      pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
      lookbehind: true,
      alias: 'keyword'
    }, {
      // `code`
      // ``code``
      pattern: /``.+?``|`[^`\r\n]+`/,
      alias: 'keyword'
    }, {
      // ```optional language
      // code block
      // ```
      pattern: /^```[\s\S]*?^```$/m,
      greedy: true,
      inside: {
        'code-block': {
          pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
          lookbehind: true
        },
        'code-language': {
          pattern: /^(```).+/,
          lookbehind: true
        },
        'punctuation': /```/
      }
    }],
    'title': [{
      // title 1
      // =======
      // title 2
      // -------
      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
      alias: 'important',
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      // # title 1
      // ###### title 6
      pattern: /(^\s*)#.+/m,
      lookbehind: true,
      alias: 'important',
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    'hr': {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'list': {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'url-reference': {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        'variable': {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        'punctuation': /^[\[\]!:]|[<>]/
      },
      alias: 'url'
    },
    'bold': {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /\*\*|__/
      }
    },
    'italic': {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /[*_]/
      }
    },
    'strike': {
      // ~~strike through~~
      // ~strike~
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+?\2/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /~~?/
      }
    },
    'url': {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'operator': /^!/,
        'content': {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {} // see below

        },
        'variable': {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        'url': {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: true
        },
        'string': {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: true
        }
      }
    }
  });
  ['url', 'bold', 'italic', 'strike'].forEach(function (token) {
    ['url', 'bold', 'italic', 'strike'].forEach(function (inside) {
      if (token !== inside) {
        Prism.languages.markdown[token].inside.content.inside[inside] = Prism.languages.markdown[inside];
      }
    });
  });
  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'markdown' && env.language !== 'md') {
      return;
    }

    function walkTokens(tokens) {
      if (!tokens || typeof tokens === 'string') {
        return;
      }

      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (token.type !== 'code') {
          walkTokens(token.content);
          continue;
        }
        /*
         * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
         * is optional. But the grammar is defined so that there is only one case we have to handle:
         *
         * token.content = [
         *     <span class="punctuation">```</span>,
         *     <span class="code-language">xxxx</span>,
         *     '\n', // exactly one new lines (\r or \n or \r\n)
         *     <span class="code-block">...</span>,
         *     '\n', // exactly one new lines again
         *     <span class="punctuation">```</span>
         * ];
         */


        var codeLang = token.content[1];
        var codeBlock = token.content[3];

        if (codeLang && codeBlock && codeLang.type === 'code-language' && codeBlock.type === 'code-block' && typeof codeLang.content === 'string') {
          // this might be a language that Prism does not support
          // do some replacements to support C++, C#, and F#
          var lang = codeLang.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp'); // only use the first word

          lang = (/[a-z][\w-]*/i.exec(lang) || [''])[0].toLowerCase();
          var alias = 'language-' + lang; // add alias

          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === 'string') {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }

    walkTokens(env.tokens);
  });
  Prism.hooks.add('wrap', function (env) {
    if (env.type !== 'code-block') {
      return;
    }

    var codeLang = '';

    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);

      if (match) {
        codeLang = match[1];
        break;
      }
    }

    var grammar = Prism.languages[codeLang];

    if (!grammar) {
      if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
        var id = 'md-' + new Date().valueOf() + '-' + Math.floor(Math.random() * 1e16);
        env.attributes['id'] = id;
        Prism.plugins.autoloader.loadLanguages(codeLang, function () {
          var ele = document.getElementById(id);

          if (ele) {
            ele.innerHTML = Prism.highlight(ele.textContent, Prism.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      // reverse Prism.util.encode
      var code = env.content.replace(/&lt;/g, '<').replace(/&amp;/g, '&');
      env.content = Prism.highlight(code, grammar, codeLang);
    }
  });
  Prism.languages.md = Prism.languages.markdown;
})(Prism);
/* "prismjs/components/prism-objectivec" */


Prism.languages.objectivec = Prism.languages.extend('c', {
  'string': /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
  'keyword': /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  'operator': /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete Prism.languages.objectivec['class-name'];
Prism.languages.objc = Prism.languages.objectivec;
/* "prismjs/components/prism-ocaml" */

Prism.languages.ocaml = {
  'comment': /\(\*[\s\S]*?\*\)/,
  'string': [{
    pattern: /"(?:\\.|[^\\\r\n"])*"/,
    greedy: true
  }, {
    pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
    greedy: true
  }],
  'number': /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?[\d_]+)?)/i,
  'directive': {
    pattern: /\B#\w+/,
    alias: 'important'
  },
  'label': {
    pattern: /\B~\w+/,
    alias: 'function'
  },
  'type-variable': {
    pattern: /\B'\w+/,
    alias: 'function'
  },
  'variant': {
    pattern: /`\w+/,
    alias: 'variable'
  },
  'module': {
    pattern: /\b[A-Z]\w+/,
    alias: 'variable'
  },
  // For the list of keywords and operators,
  // see: http://caml.inria.fr/pub/docs/manual-ocaml/lex.html#sec84
  'keyword': /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
  'boolean': /\b(?:false|true)\b/,
  // Custom operators are allowed
  'operator': /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
  'punctuation': /[(){}\[\]|.,:;]|\b_\b/
};
/* "prismjs/components/prism-python" */

Prism.languages.python = {
  'comment': {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true
  },
  'string-interpolation': {
    pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      'interpolation': {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
        lookbehind: true,
        inside: {
          'format-spec': {
            pattern: /(:)[^:(){}]+(?=}$)/,
            lookbehind: true
          },
          'conversion-option': {
            pattern: /![sra](?=[:}]$)/,
            alias: 'punctuation'
          },
          rest: null
        }
      },
      'string': /[\s\S]+/
    }
  },
  'triple-quoted-string': {
    pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
    greedy: true,
    alias: 'string'
  },
  'string': {
    pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  'function': {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  'class-name': {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  'decorator': {
    pattern: /(^\s*)@\w+(?:\.\w+)*/im,
    lookbehind: true,
    alias: ['annotation', 'punctuation'],
    inside: {
      'punctuation': /\./
    }
  },
  'keyword': /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  'boolean': /\b(?:True|False|None)\b/,
  'number': /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
  'operator': /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  'punctuation': /[{}[\];(),.:]/
};
Prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
/* "prismjs/components/prism-reason" */

Prism.languages.reason = Prism.languages.extend('clike', {
  'string': {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
    greedy: true
  },
  // 'class-name' must be matched *after* 'constructor' defined below
  'class-name': /\b[A-Z]\w*/,
  'keyword': /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  'operator': /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
});
Prism.languages.insertBefore('reason', 'class-name', {
  'character': {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    alias: 'string'
  },
  'constructor': {
    // Negative look-ahead prevents from matching things like String.capitalize
    pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
    alias: 'variable'
  },
  'label': {
    pattern: /\b[a-z]\w*(?=::)/,
    alias: 'symbol'
  }
}); // We can't match functions property, so let's not even try.

delete Prism.languages.reason.function;
/* "prismjs/components/prism-sass" */

(function (Prism) {
  Prism.languages.sass = Prism.languages.extend('css', {
    // Sass comments don't need to be closed, only indented
    'comment': {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: true
    }
  });
  Prism.languages.insertBefore('sass', 'atrule', {
    // We want to consume the whole line
    'atrule-line': {
      // Includes support for = and + shortcuts
      pattern: /^(?:[ \t]*)[@+=].+/m,
      inside: {
        'atrule': /(?:@[\w-]+|[+=])/m
      }
    }
  });
  delete Prism.languages.sass.atrule;
  var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
  var operator = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
    pattern: /(\s+)-(?=\s)/,
    lookbehind: true
  }];
  Prism.languages.insertBefore('sass', 'property', {
    // We want to consume the whole line
    'variable-line': {
      pattern: /^[ \t]*\$.+/m,
      inside: {
        'punctuation': /:/,
        'variable': variable,
        'operator': operator
      }
    },
    // We want to consume the whole line
    'property-line': {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      inside: {
        'property': [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: true
        }],
        'punctuation': /:/,
        'variable': variable,
        'operator': operator,
        'important': Prism.languages.sass.important
      }
    }
  });
  delete Prism.languages.sass.property;
  delete Prism.languages.sass.important; // Now that whole lines for other patterns are consumed,
  // what's left should be selectors

  Prism.languages.insertBefore('sass', 'punctuation', {
    'selector': {
      pattern: /([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/,
      lookbehind: true
    }
  });
})(Prism);
/* "prismjs/components/prism-scss" */


Prism.languages.scss = Prism.languages.extend('css', {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: true
  },
  'atrule': {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      'rule': /@[\w-]+/ // See rest below

    }
  },
  // url, compassified
  'url': /(?:[-a-z]+-)?url(?=\()/i,
  // CSS selector regex is not appropriate for Sass
  // since there can be lot more things (var, @ directive, nesting..)
  // a selector must start at the end of a property or after a brace (end of other rules or nesting)
  // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
  // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
  // can "pass" as a selector- e.g: proper#{$erty})
  // this one was hard to do, so please be careful if you edit this one :)
  'selector': {
    // Initial look-ahead is used to prevent matching of blank selectors
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,
    inside: {
      'parent': {
        pattern: /&/,
        alias: 'important'
      },
      'placeholder': /%[-\w]+/,
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  'property': {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
Prism.languages.insertBefore('scss', 'atrule', {
  'keyword': [/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i, {
    pattern: /( +)(?:from|through)(?= )/,
    lookbehind: true
  }]
});
Prism.languages.insertBefore('scss', 'important', {
  // var and interpolated vars
  'variable': /\$[-\w]+|#\{\$[-\w]+\}/
});
Prism.languages.insertBefore('scss', 'function', {
  'module-modifier': {
    pattern: /\b(?:as|with|show|hide)\b/i,
    alias: 'keyword'
  },
  'placeholder': {
    pattern: /%[-\w]+/,
    alias: 'selector'
  },
  'statement': {
    pattern: /\B!(?:default|optional)\b/i,
    alias: 'keyword'
  },
  'boolean': /\b(?:true|false)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  },
  'operator': {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
    lookbehind: true
  }
});
Prism.languages.scss['atrule'].inside.rest = Prism.languages.scss;
/* "prismjs/components/prism-sql" */

Prism.languages.sql = {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  'variable': [{
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: true
  }, /@[\w.$]+/],
  'string': {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  'function': /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  'keyword': /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  'boolean': /\b(?:TRUE|FALSE|NULL)\b/i,
  'number': /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  'operator': /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  'punctuation': /[;[\]()`,.]/
};
/* "prismjs/components/prism-stylus" */

(function (Prism) {
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+)/,
    lookbehind: true
  }; // 123 -123 .123 -.123 12.3 -12.3

  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  var inside = {
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    'url': {
      pattern: /url\((["']?).*?\1\)/i,
      greedy: true
    },
    'string': {
      pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    'interpolation': null,
    // See below
    'func': null,
    // See below
    'important': /\B!(?:important|optional)\b/i,
    'keyword': {
      pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
      lookbehind: true
    },
    'hexcode': /#[\da-f]{3,6}/i,
    'color': [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
      pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        'unit': unit,
        'number': number,
        'function': /[\w-]+(?=\()/,
        'punctuation': /[(),]/
      }
    }],
    'entity': /\\[\da-f]{1,8}/i,
    'unit': unit,
    'boolean': /\b(?:true|false)\b/,
    'operator': [// We want non-word chars around "-" because it is
    // accepted in property names.
    /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
    'number': number,
    'punctuation': /[{}()\[\];:,]/
  };
  inside['interpolation'] = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: 'variable',
    inside: {
      'delimiter': {
        pattern: /^{|}$/,
        alias: 'punctuation'
      },
      rest: inside
    }
  };
  inside['func'] = {
    pattern: /[\w-]+\([^)]*\).*/,
    inside: {
      'function': /^[^(]+/,
      rest: inside
    }
  };
  Prism.languages.stylus = {
    'atrule-declaration': {
      pattern: /(^\s*)@.+/m,
      lookbehind: true,
      inside: {
        'atrule': /^@[\w-]+/,
        rest: inside
      }
    },
    'variable-declaration': {
      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
      lookbehind: true,
      inside: {
        'variable': /^\S+/,
        rest: inside
      }
    },
    'statement': {
      pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t].+/m,
      lookbehind: true,
      inside: {
        'keyword': /^\S+/,
        rest: inside
      }
    },
    // A property/value pair cannot end with a comma or a brace
    // It cannot have indented content unless it ended with a semicolon
    'property-declaration': {
      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(?:\r?\n|\r)(?:\{|\2[ \t]+)))/m,
      lookbehind: true,
      inside: {
        'property': {
          pattern: /^[^\s:]+/,
          inside: {
            'interpolation': inside.interpolation
          }
        },
        rest: inside
      }
    },
    // A selector can contain parentheses only as part of a pseudo-element
    // It can span multiple lines.
    // It must end with a comma or an accolade or have indented content.
    'selector': {
      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
      lookbehind: true,
      inside: {
        'interpolation': inside.interpolation,
        'comment': inside.comment,
        'punctuation': /[{},]/
      }
    },
    'func': inside.func,
    'string': inside.string,
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true,
      greedy: true
    },
    'interpolation': inside.interpolation,
    'punctuation': /[{}()\[\];:.]/
  };
})(Prism);
/* "prismjs/components/prism-typescript" */


(function (Prism) {
  Prism.languages.typescript = Prism.languages.extend('javascript', {
    'class-name': {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null // see below

    },
    // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
    'keyword': /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
    'builtin': /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
  }); // doesn't work with TS because TS is too complex

  delete Prism.languages.typescript['parameter']; // a version of typescript specifically for highlighting types

  var typeInside = Prism.languages.extend('typescript', {});
  delete typeInside['class-name'];
  Prism.languages.typescript['class-name'].inside = typeInside;
  Prism.languages.insertBefore('typescript', 'function', {
    'generic-function': {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: true,
      inside: {
        'function': /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        'generic': {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: 'class-name',
          inside: typeInside
        }
      }
    }
  });
  Prism.languages.ts = Prism.languages.typescript;
})(Prism);
/* "prismjs/components/prism-tsx" */


(function (Prism) {
  var typescript = Prism.util.clone(Prism.languages.typescript);
  Prism.languages.tsx = Prism.languages.extend('jsx', typescript); // This will prevent collisions between TSX tags and TS generic types.
  // Idea by https://github.com/karlhorky
  // Discussion: https://github.com/PrismJS/prism/issues/2594#issuecomment-710666928

  var tag = Prism.languages.tsx.tag;
  tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + '(?:' + tag.pattern.source + ')', tag.pattern.flags);
  tag.lookbehind = true;
})(Prism);
/* "prismjs/components/prism-wasm" */


Prism.languages.wasm = {
  'comment': [/\(;[\s\S]*?;\)/, {
    pattern: /;;.*/,
    greedy: true
  }],
  'string': {
    pattern: /"(?:\\[\s\S]|[^"\\])*"/,
    greedy: true
  },
  'keyword': [{
    pattern: /\b(?:align|offset)=/,
    inside: {
      'operator': /=/
    }
  }, {
    pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
    inside: {
      'punctuation': /\./
    }
  }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
  'variable': /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
  'number': /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  'punctuation': /[()]/
};
/* "prismjs/components/prism-yaml" */

(function (Prism) {
  // https://yaml.org/spec/1.2/spec.html#c-ns-anchor-property
  // https://yaml.org/spec/1.2/spec.html#c-ns-alias-node
  var anchorOrAlias = /[*&][^\s[\]{},]+/; // https://yaml.org/spec/1.2/spec.html#c-ns-tag-property

  var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/; // https://yaml.org/spec/1.2/spec.html#c-ns-properties(n,c)

  var properties = '(?:' + tag.source + '(?:[ \t]+' + anchorOrAlias.source + ')?|' + anchorOrAlias.source + '(?:[ \t]+' + tag.source + ')?)'; // https://yaml.org/spec/1.2/spec.html#ns-plain(n,c)
  // This is a simplified version that doesn't support "#" and multiline keys
  // All these long scarry character classes are simplified versions of YAML's characters

  var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  });
  var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  /**
   *
   * @param {string} value
   * @param {string} [flags]
   * @returns {RegExp}
   */

  function createValuePattern(value, flags) {
    flags = (flags || '').replace(/m/g, '') + 'm'; // add m flag

    var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function () {
      return properties;
    }).replace(/<<value>>/g, function () {
      return value;
    });
    return RegExp(pattern, flags);
  }

  Prism.languages.yaml = {
    'scalar': {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
        return properties;
      })),
      lookbehind: true,
      alias: 'string'
    },
    'comment': /#.*/,
    'key': {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function () {
        return properties;
      }).replace(/<<key>>/g, function () {
        return '(?:' + plainKey + '|' + string + ')';
      })),
      lookbehind: true,
      greedy: true,
      alias: 'atrule'
    },
    'directive': {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: true,
      alias: 'important'
    },
    'datetime': {
      pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: true,
      alias: 'number'
    },
    'boolean': {
      pattern: createValuePattern(/true|false/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'null': {
      pattern: createValuePattern(/null|~/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'string': {
      pattern: createValuePattern(string),
      lookbehind: true,
      greedy: true
    },
    'number': {
      pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
      lookbehind: true
    },
    'tag': tag,
    'important': anchorOrAlias,
    'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
  };
  Prism.languages.yml = Prism.languages.yaml;
})(Prism);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prism);


/***/ }),

/***/ "./node_modules/prism-react-renderer/themes/duotoneDark/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/prism-react-renderer/themes/duotoneDark/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ "./node_modules/prism-react-renderer/themes/vsDark/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/prism-react-renderer/themes/vsDark/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Converted automatically using ./tools/themeFromVsCode
var theme = {
  plain: {
    color: "#9CDCFE",
    backgroundColor: "#1E1E1E"
  },
  styles: [{
    types: ["prolog"],
    style: {
      color: "rgb(0, 0, 128)"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(106, 153, 85)"
    }
  }, {
    types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
    style: {
      color: "rgb(86, 156, 214)"
    }
  }, {
    types: ["number", "inserted"],
    style: {
      color: "rgb(181, 206, 168)"
    }
  }, {
    types: ["constant"],
    style: {
      color: "rgb(100, 102, 149)"
    }
  }, {
    types: ["attr-name", "variable"],
    style: {
      color: "rgb(156, 220, 254)"
    }
  }, {
    types: ["deleted", "string", "attr-value", "template-punctuation"],
    style: {
      color: "rgb(206, 145, 120)"
    }
  }, {
    types: ["selector"],
    style: {
      color: "rgb(215, 186, 125)"
    }
  }, {
    // Fix tag color
    types: ["tag"],
    style: {
      color: "rgb(78, 201, 176)"
    }
  }, {
    // Fix tag color for HTML
    types: ["tag"],
    languages: ["markup"],
    style: {
      color: "rgb(86, 156, 214)"
    }
  }, {
    types: ["punctuation", "operator"],
    style: {
      color: "rgb(212, 212, 212)"
    }
  }, {
    // Fix punctuation color for HTML
    types: ["punctuation"],
    languages: ["markup"],
    style: {
      color: "#808080"
    }
  }, {
    types: ["function"],
    style: {
      color: "rgb(220, 220, 170)"
    }
  }, {
    types: ["class-name"],
    style: {
      color: "rgb(78, 201, 176)"
    }
  }, {
    types: ["char"],
    style: {
      color: "rgb(209, 105, 105)"
    }
  }]
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/gatsby/dist/internal-plugins/bundle-optimisations/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/***/ ((module) => {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-feather/dist/icons/external-link.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/external-link.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var ExternalLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "15 3 21 3 21 9"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("line", {
    x1: "10",
    y1: "14",
    x2: "21",
    y2: "3"
  }));
});
ExternalLink.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
ExternalLink.displayName = 'ExternalLink';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExternalLink);

/***/ }),

/***/ "./node_modules/react-github-btn/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-github-btn/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class GitHubButton extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent {
  constructor (props) {
    super(props)
    this.$ = react__WEBPACK_IMPORTED_MODULE_0___default().createRef()
    this._ = react__WEBPACK_IMPORTED_MODULE_0___default().createRef()
  }
  render () {
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement('span', { ref: this.$ }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement('a', { ...this.props, ref: this._ }, this.props.children))
  }
  componentDidMount () {
    this.paint()
  }
  getSnapshotBeforeUpdate () {
    this.reset()
    return null
  }
  componentDidUpdate () {
    this.paint()
  }
  componentWillUnmount () {
    this.reset()
  }
  paint () {
    const _ = this.$.current.appendChild(document.createElement('span'))
    Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! github-buttons */ "./node_modules/github-buttons/dist/buttons.esm.js")).then(({ render }) => {
      if (this._.current != null) {
        render(_.appendChild(this._.current), function (el) {
          try {
            _.parentNode.replaceChild(el, _)
          } catch (_) {}
        })
      }
    })
  }
  reset () {
    this.$.current.replaceChild(this._.current, this.$.current.lastChild)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GitHubButton);


/***/ }),

/***/ "./node_modules/react-helmet/es/Helmet.js":
/*!************************************************!*\
  !*** ./node_modules/react-helmet/es/Helmet.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Helmet": () => (/* binding */ HelmetExport)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-side-effect */ "./node_modules/react-side-effect/lib/index.js");
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_side_effect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-assign */ "./node_modules/gatsby/dist/internal-plugins/bundle-optimisations/polyfills/object-assign.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_4__);






var ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target"
};

var REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = "data-react-helmet";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return Array.isArray(innermostTitle) ? innermostTitle.join("") : innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === TAG_PROPERTIES.INNER_HTML || attributeKey === TAG_PROPERTIES.CSS_TEXT || attributeKey === TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = object_assign__WEBPACK_IMPORTED_MODULE_4___default()({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([TAG_PROPERTIES.HREF, TAG_PROPERTIES.TARGET], propsList),
        bodyAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(TAG_NAMES.LINK, [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(TAG_NAMES.META, [TAG_PROPERTIES.NAME, TAG_PROPERTIES.CHARSET, TAG_PROPERTIES.HTTPEQUIV, TAG_PROPERTIES.PROPERTY, TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(TAG_NAMES.NOSCRIPT, [TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(TAG_NAMES.SCRIPT, [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(TAG_NAMES.STYLE, [TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === TAG_PROPERTIES.INNER_HTML || attribute === TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [react__WEBPACK_IMPORTED_MODULE_3___default().createElement(TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === TAG_PROPERTIES.INNER_HTML || mappedAttribute === TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return react__WEBPACK_IMPORTED_MODULE_3___default().createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case ATTRIBUTE_NAMES.BODY:
        case ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            classCallCheck(this, HelmetWrapper);
            return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default()(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case TAG_NAMES.SCRIPT:
                case TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _babelHelpers$extends;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_babelHelpers$extends = {}, _babelHelpers$extends[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _babelHelpers$extends));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _babelHelpers$extends2, _babelHelpers$extends3;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[child.type] = nestedChildren, _babelHelpers$extends2.titleAttributes = _extends({}, newChildProps), _babelHelpers$extends2));

                case TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[child.type] = _extends({}, newChildProps), _babelHelpers$extends3));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _babelHelpers$extends4;

                newFlattenedProps = _extends({}, newFlattenedProps, (_babelHelpers$extends4 = {}, _babelHelpers$extends4[arrayChildName] = arrayTypeChildren[arrayChildName], _babelHelpers$extends4));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (true) {
                if (!VALID_TAG_NAMES.some(function (name) {
                    return child.type === name;
                })) {
                    if (typeof child.type === "function") {
                        return warn("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
                    }

                    return warn("Only elements types " + VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
                }

                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
                    return typeof nestedChild !== "string";
                }))) {
                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
                }
            }

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            react__WEBPACK_IMPORTED_MODULE_3___default().Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = convertReactPropstoHtmlAttributes(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case TAG_NAMES.LINK:
                    case TAG_NAMES.META:
                    case TAG_NAMES.NOSCRIPT:
                    case TAG_NAMES.SCRIPT:
                    case TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return react__WEBPACK_IMPORTED_MODULE_3___default().createElement(Component, newProps);
        };

        createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
             * @param {Object} bodyAttributes: {"className": "root"}
             * @param {String} defaultTitle: "Default Title"
             * @param {Boolean} defer: true
             * @param {Boolean} encodeSpecialCharacters: true
             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
             * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
             * @param {String} title: "Title"
             * @param {Object} titleAttributes: {"itemprop": "name"}
             * @param {String} titleTemplate: "MySite.com - %s"
             */
            set: function set$$1(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);
        return HelmetWrapper;
    }((react__WEBPACK_IMPORTED_MODULE_3___default().Component)), _class.propTypes = {
        base: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
        bodyAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
        children: prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node)]),
        defaultTitle: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        defer: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
        encodeSpecialCharacters: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool),
        htmlAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
        link: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
        meta: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
        noscript: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
        onChangeClientState: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().func),
        script: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
        style: prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_0___default().object)),
        title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
        titleAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().object),
        titleTemplate: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = mapStateOnServer({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = react_side_effect__WEBPACK_IMPORTED_MODULE_1___default()(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelmetExport);



/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-loadable/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-loadable/lib/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "react");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];

function isWebpackReady(getModuleIds) {
  if (( false ? 0 : _typeof(__webpack_require__.m)) !== "object") {
    return false;
  }

  return getModuleIds().every(function (moduleId) {
    return typeof moduleId !== "undefined" && typeof __webpack_require__.m[moduleId] !== "undefined";
  });
}

function load(loader) {
  var promise = loader();

  var state = {
    loading: true,
    loaded: null,
    error: null
  };

  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });

  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };

  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);

      result.promise.then(function (res) {
        state.loaded[key] = res;
      }).catch(function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  }).catch(function (err) {
    state.loading = false;
    throw err;
  });

  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {
  return React.createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _class, _temp;

  if (!options.loading) {
    throw new Error("react-loadable requires a `loading` component");
  }

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);

  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }
    return res.promise;
  }

  ALL_INITIALIZERS.push(init);

  if (typeof opts.webpack === "function") {
    READY_INITIALIZERS.push(function () {
      if (isWebpackReady(opts.webpack)) {
        return init();
      }
    });
  }

  return _temp = _class = function (_React$Component) {
    _inherits(LoadableComponent, _React$Component);

    function LoadableComponent(props) {
      _classCallCheck(this, LoadableComponent);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _this.retry = function () {
        _this.setState({ error: null, loading: true, timedOut: false });
        res = loadFn(opts.loader);
        _this._loadModule();
      };

      init();

      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    LoadableComponent.preload = function preload() {
      return init();
    };

    LoadableComponent.prototype.componentWillMount = function componentWillMount() {
      this._mounted = true;
      this._loadModule();
    };

    LoadableComponent.prototype._loadModule = function _loadModule() {
      var _this2 = this;

      if (this.context.loadable && Array.isArray(opts.modules)) {
        opts.modules.forEach(function (moduleName) {
          _this2.context.loadable.report(moduleName);
        });
      }

      if (!res.loading) {
        return;
      }

      if (typeof opts.delay === "number") {
        if (opts.delay === 0) {
          this.setState({ pastDelay: true });
        } else {
          this._delay = setTimeout(function () {
            _this2.setState({ pastDelay: true });
          }, opts.delay);
        }
      }

      if (typeof opts.timeout === "number") {
        this._timeout = setTimeout(function () {
          _this2.setState({ timedOut: true });
        }, opts.timeout);
      }

      var update = function update() {
        if (!_this2._mounted) {
          return;
        }

        _this2.setState({
          error: res.error,
          loaded: res.loaded,
          loading: res.loading
        });

        _this2._clearTimeouts();
      };

      res.promise.then(function () {
        update();
      }).catch(function (err) {
        update();
      });
    };

    LoadableComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this._mounted = false;
      this._clearTimeouts();
    };

    LoadableComponent.prototype._clearTimeouts = function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    };

    LoadableComponent.prototype.render = function render() {
      if (this.state.loading || this.state.error) {
        return React.createElement(opts.loading, {
          isLoading: this.state.loading,
          pastDelay: this.state.pastDelay,
          timedOut: this.state.timedOut,
          error: this.state.error,
          retry: this.retry
        });
      } else if (this.state.loaded) {
        return opts.render(this.state.loaded, this.props);
      } else {
        return null;
      }
    };

    return LoadableComponent;
  }(React.Component), _class.contextTypes = {
    loadable: PropTypes.shape({
      report: PropTypes.func.isRequired
    })
  }, _temp;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== "function") {
    throw new Error("LoadableMap requires a `render(loaded, props)` function");
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

var Capture = function (_React$Component2) {
  _inherits(Capture, _React$Component2);

  function Capture() {
    _classCallCheck(this, Capture);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Capture.prototype.getChildContext = function getChildContext() {
    return {
      loadable: {
        report: this.props.report
      }
    };
  };

  Capture.prototype.render = function render() {
    return React.Children.only(this.props.children);
  };

  return Capture;
}(React.Component);

Capture.propTypes = {
  report: PropTypes.func.isRequired
};
Capture.childContextTypes = {
  loadable: PropTypes.shape({
    report: PropTypes.func.isRequired
  }).isRequired
};


Loadable.Capture = Capture;

function flushInitializers(initializers) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init());
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function () {
  return new Promise(function (resolve, reject) {
    // We always will resolve, errors should be handled within loading UIs.
    flushInitializers(READY_INITIALIZERS).then(resolve, resolve);
  });
};

module.exports = Loadable;

/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-side-effect/lib/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = /*#__PURE__*/function (_PureComponent) {
      _inheritsLoose(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it
      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return /*#__PURE__*/React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.PureComponent);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

module.exports = withSideEffect;


/***/ }),

/***/ "./src/components/images/day.png":
/*!***************************************!*\
  !*** ./src/components/images/day.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANGSURBVEiJndVPbNRVEAfwz9vd/q8tBQtoxSYYDKYmejMGD3DxYloMiRoT22IEDQcPno3xoFclMf6JHrDFyIVEI3g2eiDoRWOMfygqNrSkoeAWCtIu230e3m+77e6KCZO8vH3zZuY7M+/7mxVjVFu7C+vPt7mmh4fi+eEDMUYFVZkdeZU7dhgIzxOj25ULe3fJx6PYamZkDYD4rRDmmgafDIdE3aIJbcrKxkQF4/GtBtuY/43KGVBxOsT/S3YijAomEVBCBe0geNlYfLfBZ3bfJmFlp7u/ONUcYCIMCw6jL1vhFikUURS9Zn88Vn9ZaOJA8DTuA3n0Zjm3ZlDL2VrASpZE8CwaABormAgPC75Cny7cmYE0kwou4Rq4IWeP0fhdc4DjIe+GD0QvIKcbmzOrtl56t9O2gRBYvsKVcyz9ne7nsQgiPhUdtD8uNVYwGRbQK497qu3ZzsYHUuB1EimepTiVKplBGZQM6rI7liFX5/Ur0rPmpYw3ZcEL7fRso3eQQgcCfffT0Z+i9K3GOFMNvh7gWOjDYGpJpuvbkQK1dND/IF1b6Oynf4jW7jU2a3zY6uPQ3whw0/u4S5DYIqsAOjdrkKqutSfbVcncL+ejOoAQsC39VGN9yOiTa8LmXIGOx8h11RxqzzTgeHLOAGKUM4pFFdzMzJYX0n79YiPAP/O0PUSlHTE9cCXdCJ7zVFxZA4DReA4/gKVMd/WvtJcWKf6e6FlapPgHS0UW3uPyN9b58IuxOFU91Ne+E+kL7cb1Oa5O0zPI0kJaa+XaLIszif21q4x2if+1ClLP/iRrUfYNufQTF79P2ceY2lFaZP5HLqaCFaUxmOSsT3RWD42j4mh4RnQEnTZYP+pCLh1Se2uZF0FZdNC0o16Plf8GgMnwOZ5Eot9GiefVmbQiDbtitif52njcUx+q+TSNTgoZQAlzddblJj7ByWah0htc2LvL7L5Nq9r98YhBLSo2481Vfbkh+DtytljWaiy+3QwgxOnhIfl4AmdoGTXw2eUGq8lwWNCDD1WUBC+hYNyLTf9iZ554RAiPG/jyjYKcR7E1wa3sxKkGh/H4Sp3mULNsVyVvTgxTqYIYmRk5oOK0e0/8fEvH25B/AZyRWA6LDlu9AAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/components/images/discord-brands-block.svg":
/*!********************************************************!*\
  !*** ./src/components/images/discord-brands-block.svg ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS41NTkiIGhlaWdodD0iMTMuMjExIiB2aWV3Qm94PSIwIDAgMTEuNTU5IDEzLjIxMSI+CiAgICA8ZGVmcz4KICAgICAgICA8c3R5bGU+CiAgICAgICAgICAgIC5jbHMtMXtmaWxsOiMyNDI5MmV9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxwYXRoIGlkPSJkaXNjb3JkLWJyYW5kcyIgZD0iTTcuNjY5IDYuMjc1QS42NzYuNjc2IDAgMSAxIDcgNS41NDJhLjcuNyAwIDAgMSAuNjY5LjczM3ptLTMuMDg1LS43MzNhLjczNi43MzYgMCAwIDAgMCAxLjQ2Ni43LjcgMCAwIDAgLjY3NC0uNzMzLjcuNyAwIDAgMC0uNjc0LS43MzN6bTYuOTc1LTQuMTgxdjExLjg1Yy0xLjY1OS0xLjQ3MS0xLjEzMi0uOTg0LTMuMDY1LTIuNzgxbC4zNSAxLjIyMmgtNy40OUExLjM1NyAxLjM1NyAwIDAgMSAwIDEwLjI5MXYtOC45M0ExLjM1NyAxLjM1NyAwIDAgMSAxLjM1NCAwaDguODUxYTEuMzU3IDEuMzU3IDAgMCAxIDEuMzU0IDEuMzYxek05LjY3NyA3LjYyM2E4Ljg0NiA4Ljg0NiAwIDAgMC0uOTUxLTMuODUxIDMuMjY2IDMuMjY2IDAgMCAwLTEuODU2LS42OTRsLS4wOTIuMTA2YTQuNCA0LjQgMCAwIDEgMS42NDUuODM5IDUuNjEyIDUuNjEyIDAgMCAwLTQuOTM0LS4xOTJjLS4yNDQuMTEyLS4zOS4xOTItLjM5LjE5MmE0LjQ1NiA0LjQ1NiAwIDAgMSAxLjczNy0uODY1bC0uMDY2LS4wNzlhMy4yNjYgMy4yNjYgMCAwIDAtMS44NTYuNjk0IDguODQ2IDguODQ2IDAgMCAwLS45NTEgMy44NTEgMi40IDIuNCAwIDAgMCAyLjAxNSAxcy4yNDQtLjMuNDQzLS41NDhBMi4wNTQgMi4wNTQgMCAwIDEgMy4yNjMgNy4zYy4xLjA2OC4yNTcuMTU2LjI3MS4xNjVhNC44MTUgNC44MTUgMCAwIDAgNC4xMjIuMjM1IDMuNzggMy43OCAwIDAgMCAuNzYtLjM5IDIuMDg0IDIuMDg0IDAgMCAxLTEuMi43ODZjLjIuMjUxLjQzNi41MzUuNDM2LjUzNWEyLjQxNSAyLjQxNSAwIDAgMCAyLjAyMS0xeiIgY2xhc3M9ImNscy0xIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/components/images/github.svg":
/*!******************************************!*\
  !*** ./src/components/images/github.svg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4yIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjM1MCAyMzE0LjgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTExNzUsMEM1MjUuOCwwLDAsNTI1LjgsMCwxMTc1YzAsNTUyLjIsMzc4LjksMTAxMC41LDg5MC4xLDExMzkuN2MtNS45LTE0LjctOC44LTM1LjMtOC44LTU1Ljh2LTE5OS44SDczNC40DQoJYy03OS4zLDAtMTUyLjgtMzUuMi0xODUuMS05OS45Yy0zOC4yLTcwLjUtNDQuMS0xNzkuMi0xNDEtMjQ2LjhjLTI5LjQtMjMuNS01LjktNDcsMjYuNC00NC4xYzYxLjcsMTcuNiwxMTEuNiw1OC44LDE1OC42LDEyMC40DQoJYzQ3LDYxLjcsNjcuNiw3Ni40LDE1NS43LDc2LjRjNDEuMSwwLDEwNS43LTIuOSwxNjQuNS0xMS44YzMyLjMtODIuMyw4OC4xLTE1NS43LDE1NS43LTE5MC45Yy0zOTMuNi00Ny01ODEuNi0yNDAuOS01ODEuNi01MDUuMw0KCWMwLTExNC42LDQ5LjktMjIzLjMsMTMyLjItMzE3LjNjLTI2LjQtOTEuMS02MS43LTI3OS4xLDExLjgtMzUyLjVjMTc2LjMsMCwyODIsMTE0LjYsMzA4LjQsMTQzLjljODguMS0yOS40LDE4NS4xLTQ3LDI4NC45LTQ3DQoJYzEwMi44LDAsMTk2LjgsMTcuNiwyODQuOSw0N2MyNi40LTI5LjQsMTMyLjItMTQzLjksMzA4LjQtMTQzLjljNzAuNSw3MC41LDM4LjIsMjYxLjQsOC44LDM1Mi41YzgyLjMsOTEuMSwxMjkuMywyMDIuNywxMjkuMywzMTcuMw0KCWMwLDI2NC40LTE4NS4xLDQ1OC4zLTU3NS43LDQ5OS40YzEwOC43LDU1LjgsMTg1LjEsMjE0LjQsMTg1LjEsMzMxLjlWMjI1NmMwLDguOC0yLjksMTcuNi0yLjksMjYuNA0KCUMyMDIxLDIxMjMuOCwyMzUwLDE2ODkuMSwyMzUwLDExNzVDMjM1MCw1MjUuOCwxODI0LjIsMCwxMTc1LDBMMTE3NSwweiIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ "./src/components/images/help.svg":
/*!****************************************!*\
  !*** ./src/components/images/help.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJiYXNlbGluZS1oZWxwLTI0cHgiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgLmNscy0xe2ZpbGw6bm9uZX0uY2xzLTJ7ZmlsbDojZmZmfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8cGF0aCBpZD0iUGF0aF8xOTYiIGQ9Ik0wIDBoMjR2MjRIMHoiIGNsYXNzPSJjbHMtMSIgZGF0YS1uYW1lPSJQYXRoIDE5NiIvPgogICAgPHBhdGggaWQ9IlBhdGhfMTk3IiBkPSJNMTIgMmExMCAxMCAwIDEgMCAxMCAxMEExMCAxMCAwIDAgMCAxMiAyem0xIDE3aC0ydi0yaDJ6bTIuMDctNy43NWwtLjkuOTJBMy40IDMuNCAwIDAgMCAxMyAxNWgtMnYtLjVhNC4wMjUgNC4wMjUgMCAwIDEgMS4xNy0yLjgzbDEuMjQtMS4yNkExLjk1NSAxLjk1NSAwIDAgMCAxNCA5YTIgMiAwIDAgMC00IDBIOGE0IDQgMCAwIDEgOCAwIDMuMTgyIDMuMTgyIDAgMCAxLS45MyAyLjI1eiIgY2xhc3M9ImNscy0yIiBkYXRhLW5hbWU9IlBhdGggMTk3Ii8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./src/components/images/logo.svg":
/*!****************************************!*\
  !*** ./src/components/images/logo.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDg1IDk1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NSA5NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8ZyBpZD0iTGF5ZXJfMiI+CjwvZz4KPGcgaWQ9IkxheWVyXzEiPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTc5LjksMzEuOGMyLjYtNi4zLDIuNi0xOS4xLTAuOC0yOC45bDAsMGMtMC45LTEuOC0zLjYtMS4yLTMuNywwLjd2MC43Yy0wLjYsOS40LTQsMTQuNS05LjEsMTcKCQkJYy0wLjgsMC40LTIuMSwwLjQtMy0wLjJjLTYtMy44LTEzLjItNi0yMC45LTZzLTE0LjgsMi4zLTIwLjksNmMtMC44LDAuNS0xLjgsMC42LTIuNiwwLjJjLTUuMi0xLjktOC44LTcuNi05LjQtMTcuMVYzLjUKCQkJQzkuNSwxLjYsNi43LDEsNS45LDIuOGMtMy40LDEwLTMuMywyMi44LTAuOCwyOWMxLjMsMy4xLDEuMyw2LjYsMC4yLDkuOGMtMS40LDQtMi4xLDguNS0yLDEzYzAuNSwyMC42LDE4LDM4LjIsMzguNywzOC41CgkJCUM2My44LDkzLjUsODEuNSw3Niw4MS41LDU0LjFjMC00LjQtMC43LTguNS0yLTEyLjRDNzguNSwzOC41LDc4LjYsMzQuOSw3OS45LDMxLjh6IE00MS45LDgzLjlDMjYuMSw4My41LDEzLDcwLjYsMTIuOCw1NC43CgkJCUMxMi40LDM3LjgsMjYuMiwyNCw0MywyNC40YzE1LjksMC4yLDI4LjksMTMuMywyOS4yLDI5LjJDNzIuNSw3MC40LDU4LjgsODQuMSw0MS45LDgzLjl6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ3LDUwLjlsLTctMTAuOGMtMS4xLTEuOC0zLjQtMi4zLTUuMi0xLjJjLTEuMSwwLjctMS44LDEuOS0xLjgsMy4yYzAsMC43LDAuMiwxLjQsMC42LDJsNC43LDcuNAoJCQljMC40LDAuNiwwLjIsMS4zLTAuMSwxLjhsLTcuNCw4LjFjLTEuNCwxLjUtMS4zLDMuOSwwLjIsNS4zYzAuNywwLjYsMS43LDAuOSwyLjYsMC45YzEuMSwwLDItMC41LDIuNy0xLjJsNS41LTYuNAoJCQljMC41LTAuNSwxLjItMC41LDEuNSwwLjFsMy45LDUuNmMwLjIsMC41LDAuNiwwLjgsMS4xLDEuMWMxLjMsMC45LDMsMC45LDQuMywwLjFsMCwwYzEuMS0wLjcsMS44LTEuOSwxLjgtMy4yCgkJCWMwLTAuNy0wLjItMS40LTAuNi0yTDQ3LDUwLjl6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./src/components/images/night.png":
/*!*****************************************!*\
  !*** ./src/components/images/night.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOfSURBVEiJlZVLaFxVGMd/333NJG2a+ujUJnGSSWljGvPoQ0tBbIooulDoQgSpEou4UOqiLlzpxoVFEIsgaotaaEhBEXVV8EUXgrao0SYxk6ROjCUxfaQvm8fMPfd+LqZJ5k4ySfxW93yP/+Ocw7mwTOhw21odbG8rzuf6N3fl+iqNDm5rXGreKlXwB1oe8vtr0yanF4JY1YeR2lDzbgnHn5JwxvYJjuhwR7wUjixUXBc3Wfsk/lg7sUYkvmXC1vB+qe3K5IZa90s2cxTNWQASa4B4C0AAfO8kOx8pxnMi4OdaEmbmcg9mIoF7NxLfAiIvSLIrAyChjswpsysg3jy7tEEuLeZgbotUsQL/SjdmIoF4SPl2QM7YNce/mO1xG85+p27dy3lp1XMbIPCrfbGsY0kCM7DxWzWXqgCINQIugh4TQSMuYRRAxSnM/Ss7jvglCfy+1gfwx/bMuhWv/lbR/rp4wLZw88qzPYIcBDIscpazkZdhXf2YMLy1DwnIq1Muxv5eMLCp5zPta6qQTb03oRdVDkO7XYpAdLhtrZkcuoKavIp4MxK7ByDrJDtLXr+VhmWy/oE5cECkfPYzpiNP37ZSIE23pLSvyVtAIGR3RTLizn0ay25ZEXjm3vVGL/wWxCrfU22PXH1LMVXR7lzhYu+y4H+1bjWTf45jV6/Bq38+OF/zTYTAEnUjAzozb0bp0H+eW7cUgdT93o274QxeDQChhK9GCELcy5GJILKsDHxzaFkX4qUJp99F5agrzrWIgFy68SPxM/vnMw6y5glg/uYJctBOHn9nOaLCyJ1/ZqeE4WrLldgHUTkGzY1EU+jb/si+t4oPsFSYkX3PWqqnLJGdAmD+SNzU4PqquQ6rDKl4LOIi70T7FN6wA/crSR2bKaypPmmbUfdBCezXEN0DqC1hgwAEg42Hwmwmcjji1UPZ9lIipxB+Ah1FLR90A3AfcGdBz5dOsnOv5Nmxgv7ENQ2uV0RgynYgXmolu1Ic03YQbJPUiXT+xyGEtnPXw1heGG37Bc2e+9/oAq9I6kQaCp5r2Xz2tHqpA4hb8DwrzHSjUz9COL0icEXftJOd7xeQRcMMNT1ObuxzDafcaMVGvFrw6sC6HWTB6DTwkpPs/KTIzSIqhrauM8GNTzHjuwsfwvkpB6w1IHEQVGV1r+vc8aJsPPXDgtaSXgEd2FXtc/V1gslHLabWa5jzEAXsACm/IVbZz8iqw05Dz8lSGP8BjRZeDZkbZsEAAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/components/images/twitter-brands-block.svg":
/*!********************************************************!*\
  !*** ./src/components/images/twitter-brands-block.svg ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi41MTciIGhlaWdodD0iMTAuMTY2IiB2aWV3Qm94PSIwIDAgMTIuNTE3IDEwLjE2NiI+CiAgICA8ZGVmcz4KICAgICAgICA8c3R5bGU+CiAgICAgICAgICAgIC5jbHMtMXtmaWxsOiMyNDI5MmV9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxwYXRoIGlkPSJ0d2l0dGVyLWJyYW5kcyIgZD0iTTExLjIzIDUwLjYxNmMuMDA4LjExMS4wMDguMjIyLjAwOC4zMzRhNy4yNDkgNy4yNDkgMCAwIDEtNy4zIDcuM0E3LjI0OSA3LjI0OSAwIDAgMSAwIDU3LjFhNS4zMDcgNS4zMDcgMCAwIDAgLjYxOS4wMzIgNS4xMzggNS4xMzggMCAwIDAgMy4xODUtMS4xIDIuNTcgMi41NyAwIDAgMS0yLjQtMS43NzkgMy4yMzUgMy4yMzUgMCAwIDAgLjQ4NC4wNCAyLjcxMyAyLjcxMyAwIDAgMCAuNjc1LS4wODcgMi41NjYgMi41NjYgMCAwIDEtMi4wNTUtMi41MTh2LS4wMzJhMi41ODQgMi41ODQgMCAwIDAgMS4xNi4zMjYgMi41NjkgMi41NjkgMCAwIDEtLjc5NC0zLjQzMSA3LjI5MiA3LjI5MiAwIDAgMCA1LjI5IDIuNjg0IDIuOSAyLjkgMCAwIDEtLjA2NC0uNTg4IDIuNTY4IDIuNTY4IDAgMCAxIDQuNDQtMS43NTUgNS4wNTEgNS4wNTEgMCAwIDAgMS42MjgtLjYxOSAyLjU1OCAyLjU1OCAwIDAgMS0xLjEyOCAxLjQxNCA1LjE0MyA1LjE0MyAwIDAgMCAxLjQ3Ny0uNCA1LjUxNSA1LjUxNSAwIDAgMS0xLjI4NyAxLjMyNnoiIGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNDguMDgyKSIvPgo8L3N2Zz4K");

/***/ }),

/***/ "./src/components/images/twitter.svg":
/*!*******************************************!*\
  !*** ./src/components/images/twitter.svg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNSAyNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzUgMjc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3LDcuMmwwLjEsMS4ybC0xLjMtMC4xYy00LjYtMC41LTguNi0yLjQtMTItNS41TDIuMSwxLjFMMS43LDIuM0MwLjgsNC44LDEuMyw3LjUsMy4yLDkuM2MxLDEsMC44LDEuMS0xLDAuNQoJQzEuNyw5LjcsMS4xLDkuNSwxLjEsOS42QzAuOSw5LjgsMS41LDExLjksMiwxMi44YzAuNywxLjIsMiwyLjQsMy41LDMuMWwxLjIsMC41bC0xLjUsMGMtMS40LDAtMS41LDAtMS4zLDAuNQoJYzAuNSwxLjUsMi41LDMuMiw0LjcsMy45bDEuNiwwLjVsLTEuNCwwLjhjLTIsMS4xLTQuNCwxLjctNi44LDEuOEMwLjksMjMuOSwwLDI0LDAsMjQuMWMwLDAuMiwzLjEsMS42LDQuOSwyLjEKCWM1LjQsMS41LDExLjgsMC45LDE2LjYtMS44YzMuNC0xLjksNi44LTUuNiw4LjQtOS4yYzAuOS0xLjksMS43LTUuNSwxLjctNy4xYzAtMS4xLDAuMS0xLjIsMS41LTIuNmMwLjgtMC44LDEuNi0xLjYsMS44LTEuOAoJYzAuMy0wLjUsMC4yLTAuNS0xLjEsMGMtMi4xLDAuNy0yLjUsMC42LTEuNC0wLjVjMC44LTAuOCwxLjctMi4xLDEuNy0yLjVjMC0wLjEtMC40LDAtMC44LDAuM2MtMC41LDAuMi0xLjUsMC42LTIuMiwwLjhsLTEuNCwwLjQKCWwtMS4yLTAuOGMtMC43LTAuNC0xLjYtMC45LTIuMS0xYy0xLjMtMC4zLTMuMy0wLjMtNC40LDAuMUMxOC44LDEuNCwxNi44LDQuMiwxNyw3LjJ6Ii8+Cjwvc3ZnPgo=");

/***/ }),

/***/ "react-dom/server":
/*!*****************************************************************************************!*\
  !*** external "/usr/local/app/other/koa-booster-page/node_modules/react-dom/server.js" ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/usr/local/app/other/koa-booster-page/node_modules/react-dom/server.js");

/***/ }),

/***/ "react":
/*!************************************************************************************!*\
  !*** external "/usr/local/app/other/koa-booster-page/node_modules/react/index.js" ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/usr/local/app/other/koa-booster-page/node_modules/react/index.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/stylis/src/Enum.js":
/*!*****************************************!*\
  !*** ./node_modules/stylis/src/Enum.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MS": () => (/* binding */ MS),
/* harmony export */   "MOZ": () => (/* binding */ MOZ),
/* harmony export */   "WEBKIT": () => (/* binding */ WEBKIT),
/* harmony export */   "COMMENT": () => (/* binding */ COMMENT),
/* harmony export */   "RULESET": () => (/* binding */ RULESET),
/* harmony export */   "DECLARATION": () => (/* binding */ DECLARATION),
/* harmony export */   "PAGE": () => (/* binding */ PAGE),
/* harmony export */   "MEDIA": () => (/* binding */ MEDIA),
/* harmony export */   "IMPORT": () => (/* binding */ IMPORT),
/* harmony export */   "CHARSET": () => (/* binding */ CHARSET),
/* harmony export */   "VIEWPORT": () => (/* binding */ VIEWPORT),
/* harmony export */   "SUPPORTS": () => (/* binding */ SUPPORTS),
/* harmony export */   "DOCUMENT": () => (/* binding */ DOCUMENT),
/* harmony export */   "NAMESPACE": () => (/* binding */ NAMESPACE),
/* harmony export */   "KEYFRAMES": () => (/* binding */ KEYFRAMES),
/* harmony export */   "FONT_FACE": () => (/* binding */ FONT_FACE),
/* harmony export */   "COUNTER_STYLE": () => (/* binding */ COUNTER_STYLE),
/* harmony export */   "FONT_FEATURE_VALUES": () => (/* binding */ FONT_FEATURE_VALUES)
/* harmony export */ });
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'


/***/ }),

/***/ "./node_modules/stylis/src/Middleware.js":
/*!***********************************************!*\
  !*** ./node_modules/stylis/src/Middleware.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "middleware": () => (/* binding */ middleware),
/* harmony export */   "rulesheet": () => (/* binding */ rulesheet),
/* harmony export */   "prefixer": () => (/* binding */ prefixer),
/* harmony export */   "namespace": () => (/* binding */ namespace)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var _Serializer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Serializer.js */ "./node_modules/stylis/src/Serializer.js");
/* harmony import */ var _Prefixer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prefixer.js */ "./node_modules/stylis/src/Prefixer.js");






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (!element.return)
		switch (element.type) {
			case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: element.return = (0,_Prefixer_js__WEBPACK_IMPORTED_MODULE_2__.prefix)(element.value, element.length)
				break
			case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES:
				return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(element.value, '@', '@' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT), element, '')], callback)
			case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
				if (element.length)
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)(element.props, function (value) {
						switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /(::plac\w+|:read-\w+)/)) {
							// :read-(only|write)
							case ':read-only': case ':read-write':
								return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(read-\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1'), element, '')], callback)
							// :placeholder
							case '::placeholder':
								return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([
									(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'input-$1'), element, ''),
									(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1'), element, ''),
									(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'input-$1'), element, '')
								], callback)
						}

						return ''
					})
		}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
			element.props = element.props.map(function (value) {
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.tokenize)(value), function (value, index, children) {
					switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 0)) {
						// \f
						case 12:
							return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, 1, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) > 1 ? '' : value
								case index = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}


/***/ }),

/***/ "./node_modules/stylis/src/Parser.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/src/Parser.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compile": () => (/* binding */ compile),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "ruleset": () => (/* binding */ ruleset),
/* harmony export */   "comment": () => (/* binding */ comment),
/* harmony export */   "declaration": () => (/* binding */ declaration)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/stylis/src/Tokenizer.js");




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.dealloc)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.alloc)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)()) {
			// " ' [ (
			case 34: case 39: case 91: case 40:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.whitespace)(previous)
				break
			// \
			case 92:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.escaping)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)()) {
					case 42: case 47:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.commenter)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)()), root, parent), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset:
						if (property > 0 && ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - length))
							(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, ' ', '') + ';', rule, parent, length - 2), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule) {
									// d m s
									case 100: case 109: case 115:
										parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, length, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.prev)() == 125)
						continue

				switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)() === 45)
							characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)())

						atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)(), offset = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.identifier)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.trim)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(y, /&\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_2__.RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.COMMENT, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.char)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.DECLARATION, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, length + 1, -1), length)
}


/***/ }),

/***/ "./node_modules/stylis/src/Prefixer.js":
/*!*********************************************!*\
  !*** ./node_modules/stylis/src/Prefixer.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prefix": () => (/* binding */ prefix)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");



/**
 * @param {string} value
 * @param {number} length
 * @return {string}
 */
function prefix (value, length) {
	switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.hash)(value, length)) {
		// color-adjust
		case 5103:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// flex, flex-direction
		case 6828: case 4268:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// order
		case 6165:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-' + value + value
		// align-items
		case 5187:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(\w+).+(:[^]+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-$1$2' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-item-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/, '') + value
		// align-content
		case 4675:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-line-pack' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /align-content|flex-|-self/, '') + value
		// flex-shrink
		case 5548:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-grow', '') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /([^-])(transform)/g, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2') + value
		// cursor
		case 6187:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(zoom-|grab)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), /(image-set)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(image-set\([^]*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(flex-)?(.*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-pack:$3' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+)-inline(.+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value) - 1 - length > 6)
				switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2-$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value, 'stretch') ? prefix((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'stretch', 'fill-available'), length) + value : value
				}
			break
		// position: sticky
		case 4949:
			// (s)ticky?
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 1) !== 115)
				break
		// display: (flex|inline-flex)
		case 6444:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value) - 3 - (~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value, '!important') && 10))) {
				// stic(k)y
				case 107:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT) + value
				// (inline-)?fl(e)x
				case 101:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + '$2box$3') + value
			}
			break
		// writing-mode
		case 5936:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
			}

			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
	}

	return value
}


/***/ }),

/***/ "./node_modules/stylis/src/Serializer.js":
/*!***********************************************!*\
  !*** ./node_modules/stylis/src/Serializer.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serialize": () => (/* binding */ serialize),
/* harmony export */   "stringify": () => (/* binding */ stringify)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children)

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.IMPORT: case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: return element.return = element.return || element.value
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.COMMENT: return ''
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET: element.value = element.props.join(',')
	}

	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}


/***/ }),

/***/ "./node_modules/stylis/src/Tokenizer.js":
/*!**********************************************!*\
  !*** ./node_modules/stylis/src/Tokenizer.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "line": () => (/* binding */ line),
/* harmony export */   "column": () => (/* binding */ column),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "position": () => (/* binding */ position),
/* harmony export */   "character": () => (/* binding */ character),
/* harmony export */   "characters": () => (/* binding */ characters),
/* harmony export */   "node": () => (/* binding */ node),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "char": () => (/* binding */ char),
/* harmony export */   "prev": () => (/* binding */ prev),
/* harmony export */   "next": () => (/* binding */ next),
/* harmony export */   "peek": () => (/* binding */ peek),
/* harmony export */   "caret": () => (/* binding */ caret),
/* harmony export */   "slice": () => (/* binding */ slice),
/* harmony export */   "token": () => (/* binding */ token),
/* harmony export */   "alloc": () => (/* binding */ alloc),
/* harmony export */   "dealloc": () => (/* binding */ dealloc),
/* harmony export */   "delimit": () => (/* binding */ delimit),
/* harmony export */   "tokenize": () => (/* binding */ tokenize),
/* harmony export */   "whitespace": () => (/* binding */ whitespace),
/* harmony export */   "tokenizer": () => (/* binding */ tokenizer),
/* harmony export */   "escaping": () => (/* binding */ escaping),
/* harmony export */   "delimiter": () => (/* binding */ delimiter),
/* harmony export */   "commenter": () => (/* binding */ commenter),
/* harmony export */   "identifier": () => (/* binding */ identifier)
/* harmony export */ });
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string} type
 * @param {string[]} props
 * @param {object[]} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {string} value
 * @param {object} root
 * @param {string} type
 */
function copy (value, root, type) {
	return node(value, root.root, root.parent, type, root.props, root.children, 0)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.trim)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(identifier(position - 1), children)
				break
			case 2: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(delimit(character), children)
				break
			default: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				return delimiter(type === 34 || type === 39 ? type : character)
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}


/***/ }),

/***/ "./node_modules/stylis/src/Utility.js":
/*!********************************************!*\
  !*** ./node_modules/stylis/src/Utility.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abs": () => (/* binding */ abs),
/* harmony export */   "from": () => (/* binding */ from),
/* harmony export */   "hash": () => (/* binding */ hash),
/* harmony export */   "trim": () => (/* binding */ trim),
/* harmony export */   "match": () => (/* binding */ match),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "indexof": () => (/* binding */ indexof),
/* harmony export */   "charat": () => (/* binding */ charat),
/* harmony export */   "substr": () => (/* binding */ substr),
/* harmony export */   "strlen": () => (/* binding */ strlen),
/* harmony export */   "sizeof": () => (/* binding */ sizeof),
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "combine": () => (/* binding */ combine)
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3)
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} value
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}


/***/ }),

/***/ "./.cache/redirects.json":
/*!*******************************!*\
  !*** ./.cache/redirects.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = [];

/***/ }),

/***/ "./public/page-data/sq/d/2619113677.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2619113677.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"fields":{"slug":"/","title":"Landing Page"}}},{"node":{"fields":{"slug":"/前言","title":"优雅的实现nodejs"}}},{"node":{"fields":{"slug":"/语法","title":"koa-booster语法"}}},{"node":{"fields":{"slug":"/koa-booster-cli","title":"koa-booster-cli使用"}}}]}}}');

/***/ }),

/***/ "./public/page-data/sq/d/3706406642.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3706406642.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"fields":{"slug":"/"},"tableOfContents":{"items":[{"url":"#heading-h1","title":"Heading H1","items":[{"url":"#heading-h2","title":"Heading H2","items":[{"url":"#heading-h3","title":"Heading H3","items":[{"url":"#heading-h4","title":"Heading H4","items":[{"url":"#heading-h5","title":"Heading H5","items":[{"url":"#heading-h6","title":"Heading H6"}]}]}]}]},{"url":"#lists","title":"Lists"},{"url":"#links","title":"Links"}]}]}}},{"node":{"fields":{"slug":"/前言"},"tableOfContents":{"items":[{"url":"#目录","title":"目录","items":[{"url":"#前言我们经常遇到一些场景","title":"前言:我们经常遇到一些场景"},{"url":"#如何优雅像一个大树一样生长coding","title":"如何优雅(像一个大树一样生长(coding))"},{"url":"#举例实现","title":"举例实现"}]}]}}},{"node":{"fields":{"slug":"/语法"},"tableOfContents":{"items":[{"url":"#koa-booster","title":"koa-booster"}]}}},{"node":{"fields":{"slug":"/koa-booster-cli"},"tableOfContents":{"items":[{"url":"#koa-booster-cli","title":"koa-booster-cli"}]}}}]}}}');

/***/ }),

/***/ "./public/page-data/sq/d/417421954.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/417421954.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"headerTitle":"<a href=\'https://hasura.io/learn/\'><img class=\'img-responsive\' src=\'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg\' alt=\'Learn logo\' /></a>","githubUrl":"https://github.com/hasura/gatsby-gitbook-boilerplate","helpUrl":"","tweetText":"","logo":{"link":"https://hasura.io/learn/","image":"https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg"},"headerLinks":[{"link":"","text":""}]}}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"render-page": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./.cache/develop-static-entry.js");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=render-page.js.map