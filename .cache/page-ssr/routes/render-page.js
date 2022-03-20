/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1506:
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

/***/ 9713:
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

/***/ 7154:
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

/***/ 5354:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(9489);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 5318:
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ 6479:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(7316);

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

/***/ 7316:
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

/***/ 9489:
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

/***/ 8704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ emotion_cache_esm)
});

// EXTERNAL MODULE: ./node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var emotion_sheet_esm = __webpack_require__(6166);
;// CONCATENATED MODULE: ./node_modules/stylis/src/Utility.js
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var Utility_from = String.fromCharCode

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return (((((((length << 2) ^ Utility_charat(value, 0)) << 2) ^ Utility_charat(value, 1)) << 2) ^ Utility_charat(value, 2)) << 2) ^ Utility_charat(value, 3)
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
function Utility_charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function Utility_substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function Utility_strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function Utility_sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function Utility_append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function Utility_combine (array, callback) {
	return array.map(callback).join('')
}

;// CONCATENATED MODULE: ./node_modules/stylis/src/Tokenizer.js


var line = 1
var column = 1
var Tokenizer_length = 0
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
function Tokenizer_char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? Utility_charat(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < Tokenizer_length ? Utility_charat(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return Utility_charat(characters, position)
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
	return Utility_substr(characters, begin, end)
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
	return line = column = 1, Tokenizer_length = Utility_strlen(characters = value), position = 0, []
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
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function Tokenizer_tokenize (value) {
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
			case 0: append(identifier(position - 1), children)
				break
			case 2: append(delimit(character), children)
				break
			default: append(from(character), children)
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

	return '/*' + slice(index, position - 1) + '*' + Utility_from(type === 47 ? type : next())
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

;// CONCATENATED MODULE: ./node_modules/stylis/src/Enum.js
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var Enum_RULESET = 'rule'
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

;// CONCATENATED MODULE: ./node_modules/stylis/src/Serializer.js



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''
	var length = Utility_sizeof(children)

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
		case IMPORT: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case Enum_RULESET: element.value = element.props.join(',')
	}

	return Utility_strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

;// CONCATENATED MODULE: ./node_modules/stylis/src/Prefixer.js



/**
 * @param {string} value
 * @param {number} length
 * @return {string}
 */
function prefix (value, length) {
	switch (hash(value, length)) {
		// color-adjust
		case 5103:
			return WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return WEBKIT + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return WEBKIT + value + MOZ + value + MS + value + value
		// flex, flex-direction
		case 6828: case 4268:
			return WEBKIT + value + MS + value + value
		// order
		case 6165:
			return WEBKIT + value + MS + 'flex-' + value + value
		// align-items
		case 5187:
			return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value
		// align-content
		case 4675:
			return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value
		// flex-shrink
		case 5548:
			return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value
		// cursor
		case 6187:
			return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if (Utility_strlen(value) - 1 - length > 6)
				switch (Utility_charat(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if (Utility_charat(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (Utility_charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value
				}
			break
		// position: sticky
		case 4949:
			// (s)ticky?
			if (Utility_charat(value, length + 1) !== 115)
				break
		// display: (flex|inline-flex)
		case 6444:
			switch (Utility_charat(value, Utility_strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
				// stic(k)y
				case 107:
					return replace(value, ':', ':' + WEBKIT) + value
				// (inline-)?fl(e)x
				case 101:
					return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (Utility_charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value
			}
			break
		// writing-mode
		case 5936:
			switch (Utility_charat(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
			}

			return WEBKIT + value + MS + value + value
	}

	return value
}

;// CONCATENATED MODULE: ./node_modules/stylis/src/Middleware.js






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = Utility_sizeof(collection)

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
			case DECLARATION: element.return = prefix(element.value, element.length)
				break
			case KEYFRAMES:
				return serialize([copy(replace(element.value, '@', '@' + WEBKIT), element, '')], callback)
			case Enum_RULESET:
				if (element.length)
					return Utility_combine(element.props, function (value) {
						switch (match(value, /(::plac\w+|:read-\w+)/)) {
							// :read-(only|write)
							case ':read-only': case ':read-write':
								return serialize([copy(replace(value, /:(read-\w+)/, ':' + MOZ + '$1'), element, '')], callback)
							// :placeholder
							case '::placeholder':
								return serialize([
									copy(replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1'), element, ''),
									copy(replace(value, /:(plac\w+)/, ':' + MOZ + '$1'), element, ''),
									copy(replace(value, /:(plac\w+)/, MS + 'input-$1'), element, '')
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
		case RULESET:
			element.props = element.props.map(function (value) {
				return combine(tokenize(value), function (value, index, children) {
					switch (charat(value, 0)) {
						// \f
						case 12:
							return substr(value, 1, strlen(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + substr(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return sizeof(children) > 1 ? '' : value
								case index = sizeof(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}

;// CONCATENATED MODULE: ./node_modules/stylis/src/Parser.js




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
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
		switch (previous = character, character = next()) {
			// " ' [ (
			case 34: case 39: case 91: case 40:
				characters += delimit(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous)
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7)
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						Utility_append(comment(commenter(next(), caret()), root, parent), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = Utility_strlen(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset:
						if (property > 0 && (Utility_strlen(characters) - length))
							Utility_append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						Utility_append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule) {
									// d m s
									case 100: case 109: case 115:
										parse(value, reference, reference, rule && Utility_append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, length, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + Utility_strlen(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += Utility_from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = (Utility_strlen(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next())

						atrule = peek(), offset = Utility_strlen(type = characters += identifier(caret())), character++
						break
					// -
					case 45:
						if (previous === 45 && Utility_strlen(characters) == 2)
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
	var size = Utility_sizeof(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = Utility_substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z

	return node(value, root, parent, offset === 0 ? Enum_RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return node(value, root, parent, COMMENT, Utility_from(Tokenizer_char()), Utility_substr(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return node(value, root, parent, DECLARATION, Utility_substr(value, 0, length), Utility_substr(value, length + 1, -1), length)
}

// EXTERNAL MODULE: ./node_modules/@emotion/weak-memoize/dist/weak-memoize.esm.js
var weak_memoize_esm = __webpack_require__(9716);
// EXTERNAL MODULE: ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
var emotion_memoize_esm = __webpack_require__(5042);
;// CONCATENATED MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.esm.js





var last = function last(arr) {
  return arr.length ? arr[arr.length - 1] : null;
}; // based on https://github.com/thysultan/stylis.js/blob/e6843c373ebcbbfade25ebcc23f540ed8508da0a/src/Tokenizer.js#L239-L244


var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = peek(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (token(character)) {
      break;
    }

    next();
  }

  return slice(begin, position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;

      case 2:
        parsed[index] += delimit(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += Utility_from(character);
    }
  } while (character = next());

  return parsed;
};

var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
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
var getServerStylisCache = isBrowser ? undefined : (0,weak_memoize_esm/* default */.Z)(function () {
  return (0,emotion_memoize_esm/* default */.Z)(function () {
    var cache = {};
    return function (name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if (false) {}

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

  if (false) {}

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

  if (false) {}

  if (isBrowser) {
    var currentSheet;
    var finalizingPlugins = [stringify,  false ? 0 : rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return serialize(compile(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if (false) {}

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [stringify];

    var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

    var _stylis = function _stylis(styles) {
      return serialize(compile(styles), _serializer);
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
        false) {}

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
    sheet: new emotion_sheet_esm/* StyleSheet */.m({
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

/* harmony default export */ const emotion_cache_esm = (createCache);


/***/ }),

/***/ 5042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/***/ 5734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Emotion),
/* harmony export */   "T": () => (/* binding */ ThemeContext),
/* harmony export */   "a": () => (/* binding */ ThemeProvider),
/* harmony export */   "c": () => (/* binding */ createEmotionProps),
/* harmony export */   "h": () => (/* binding */ hasOwnProperty),
/* harmony export */   "i": () => (/* binding */ isBrowser),
/* harmony export */   "w": () => (/* binding */ withEmotionCache)
/* harmony export */ });
/* unused harmony exports C, _, b, u */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8704);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7462);
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9716);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4577);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8174);








var isBrowser = typeof document !== 'undefined';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */(0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
  key: 'css'
}) : null);

if (false) {}

var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return useContext(EmotionCacheContext);
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
        cache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
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

if (false) {}

var useTheme = function useTheme() {
  return useContext(ThemeContext);
};

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if (false) {}

    return mergedTheme;
  }

  if (false) {}

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */(0,_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function (outerTheme) {
  return (0,_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(function (theme) {
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
    var theme = useContext(ThemeContext);
    return /*#__PURE__*/createElement(Component, _extends({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe


  var WithTheme = /*#__PURE__*/forwardRef(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return hoistNonReactStatics(WithTheme, Component);
}

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (false) {}

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type;

  if (false) { var match, error; }

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
    className = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_2__/* .getRegisteredStyles */ .f)(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_3__/* .serializeStyles */ .O)(registeredStyles, undefined, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext));

  if (false) { var labelFromStack; }

  var rules = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_2__/* .insertStyles */ .M)(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( true || 0)) {
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

if (false) {}




/***/ }),

/***/ 6657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xB": () => (/* binding */ Global),
/* harmony export */   "iv": () => (/* binding */ css),
/* harmony export */   "tZ": () => (/* binding */ jsx)
/* harmony export */ });
/* unused harmony exports ClassNames, createElement, keyframes */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8704);
/* harmony import */ var _emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5734);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7154);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8679);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4577);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8174);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6166);












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

  if (props == null || !_emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_6__.h.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_6__.E;
  createElementArgArray[1] = (0,_emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_6__.c)(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */(0,_emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_6__.w)(function (props, cache) {
  if (false) {}

  var styles = props.styles;
  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__/* .serializeStyles */ .O)([styles], undefined, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_6__.T));

  if (!_emotion_element_8d26346b_esm_js__WEBPACK_IMPORTED_MODULE_6__.i) {
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
    var sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_7__/* .StyleSheet */ .m({
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
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__/* .insertStyles */ .M)(cache, serialized.next, true);
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

if (false) {}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__/* .serializeStyles */ .O)(args);
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
            if (false) {}

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
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = /* #__PURE__ */(/* unused pure expression or super */ null && (withEmotionCache(function (props, cache) {
  var rules = '';
  var serializedHashes = '';
  var hasRendered = false;

  var css = function css() {
    if (hasRendered && "production" !== 'production') {}

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = serializeStyles(args, cache.registered);

    if (isBrowser$1) {
      insertStyles(cache, serialized, false);
    } else {
      var res = insertStyles(cache, serialized, false);

      if (res !== undefined) {
        rules += res;
      }
    }

    if (!isBrowser$1) {
      serializedHashes += " " + serialized.name;
    }

    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && "production" !== 'production') {}

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: useContext(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;

  if (!isBrowser$1 && rules.length !== 0) {
    var _ref;

    return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedHashes.substring(1), _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
  }

  return ele;
})));

if (false) {}

if (false) { var globalKey, globalContext, isJest, isBrowser; }




/***/ }),

/***/ 8174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* binding */ serializeStyles)
});

;// CONCATENATED MODULE: ./node_modules/@emotion/hash/dist/hash.esm.js
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

/* harmony default export */ const hash_esm = (murmur2);

// EXTERNAL MODULE: ./node_modules/@emotion/unitless/dist/unitless.esm.js
var unitless_esm = __webpack_require__(7899);
// EXTERNAL MODULE: ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
var emotion_memoize_esm = __webpack_require__(5042);
;// CONCATENATED MODULE: ./node_modules/@emotion/serialize/dist/emotion-serialize.esm.js




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

var processStyleName = /* #__PURE__ */(0,emotion_memoize_esm/* default */.Z)(function (styleName) {
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

  if (unitless_esm/* default */.Z[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

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

          if (false) {}

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
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

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
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {}

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
                if (false) {}

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

if (false) {} // this is the cursor for keyframes
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
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = hash_esm(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ 6166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ StyleSheet)
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

    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
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

    if (false) { var isImportRule; }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (false) {}
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

    if (false) {}
  };

  return StyleSheet;
}();




/***/ }),

/***/ 5858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ emotion_styled_base_esm)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: external "/usr/local/app/other/koa-booster-page/node_modules/react/index.js"
var index_js_ = __webpack_require__(2897);
// EXTERNAL MODULE: ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
var emotion_memoize_esm = __webpack_require__(5042);
;// CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */(0,emotion_memoize_esm/* default */.Z)(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const emotion_is_prop_valid_esm = (isPropValid);

// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-8d26346b.esm.js
var emotion_element_8d26346b_esm = __webpack_require__(5734);
// EXTERNAL MODULE: ./node_modules/@emotion/utils/dist/emotion-utils.esm.js
var emotion_utils_esm = __webpack_require__(4577);
// EXTERNAL MODULE: ./node_modules/@emotion/serialize/dist/emotion-serialize.esm.js + 1 modules
var emotion_serialize_esm = __webpack_require__(8174);
;// CONCATENATED MODULE: ./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js







var testOmitPropsOnStringTag = emotion_is_prop_valid_esm;

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
  if (false) {}

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
      if (false) {}

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if (false) {}

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = (0,emotion_element_8d26346b_esm.w)(function (props, cache, ref) {
      var finalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = (0,index_js_.useContext)(emotion_element_8d26346b_esm.T);
      }

      if (typeof props.className === 'string') {
        className = (0,emotion_utils_esm/* getRegisteredStyles */.f)(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = (0,emotion_serialize_esm/* serializeStyles */.O)(styles.concat(classInterpolations), cache.registered, mergedProps);
      var rules = (0,emotion_utils_esm/* insertStyles */.M)(cache, serialized, typeof finalTag === 'string');
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
      var ele = /*#__PURE__*/(0,index_js_.createElement)(finalTag, newProps);

      if (!isBrowser && rules !== undefined) {
        var _ref;

        var serializedNames = serialized.name;
        var next = serialized.next;

        while (next !== undefined) {
          serializedNames += ' ' + next.name;
          next = next.next;
        }

        return /*#__PURE__*/(0,index_js_.createElement)(index_js_.Fragment, null, /*#__PURE__*/(0,index_js_.createElement)("style", (_ref = {}, _ref["data-emotion"] = cache.key + " " + serializedNames, _ref.dangerouslySetInnerHTML = {
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
        if (targetClassName === undefined && "production" !== 'production') {} // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, (0,esm_extends/* default */.Z)({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

/* harmony default export */ const emotion_styled_base_esm = (createStyled);


/***/ }),

/***/ 7899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/***/ 4577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ getRegisteredStyles),
/* harmony export */   "M": () => (/* binding */ insertStyles)
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

/***/ 9716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/***/ 1122:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.shallowCompare = exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(4138);

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
        !matchIsNotReserved ?  false ? 0 : (0, _invariant2.default)(false) : void 0;
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

/***/ 4138:
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

var NODE_ENV = "production";

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

/***/ 3905:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
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

/***/ 9996:
/***/ ((module) => {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ 9679:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = true;
exports.p2 = __webpack_unused_export__ = void 0;

var _scrollHandler = __webpack_require__(1432);

__webpack_unused_export__ = _scrollHandler.ScrollHandler;

var _useScrollRestoration = __webpack_require__(4855);

exports.p2 = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ 1432:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(1506));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(5354));

var React = _interopRequireWildcard(__webpack_require__(2897));

var _propTypes = _interopRequireDefault(__webpack_require__(5697));

var _sessionStorage = __webpack_require__(1142);

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

/***/ 1142:
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
      if (false) {}

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

      if (false) {}
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

/***/ 4855:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;

var _scrollHandler = __webpack_require__(1432);

var _react = __webpack_require__(2897);

var _reachRouter = __webpack_require__(3631);

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

/***/ 4852:
/***/ ((module) => {

"use strict";


module.exports = Object.assign;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ 4999:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.components={"component---src-templates-docs-js":()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7252))};

/***/ }),

/***/ 9874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiRunner": () => (/* binding */ apiRunner),
/* harmony export */   "apiRunnerAsync": () => (/* binding */ apiRunnerAsync)
/* harmony export */ });
var plugins=[{name:'gatsby-plugin-sitemap',plugin:__webpack_require__(6313),options:{"plugins":[],"output":"/sitemap","createLinkInHead":true,"entryLimit":45000,"query":"{ site { siteMetadata { siteUrl } } allSitePage { nodes { path } } }","excludes":[]}},{name:'gatsby-plugin-layout',plugin:__webpack_require__(6211),options:{"plugins":[],"component":"/usr/local/app/other/koa-booster-page/src/templates/docs.js"}},{name:'gatsby-plugin-react-helmet',plugin:__webpack_require__(9814),options:{"plugins":[]}},{name:'gatsby-plugin-mdx',plugin:__webpack_require__(929),options:{"plugins":[],"gatsbyRemarkPlugins":[{"resolve":"/usr/local/app/other/koa-booster-page/node_modules/gatsby-remark-images","id":"018bd99b-813c-5251-a110-8d9c1f629336","name":"gatsby-remark-images","version":"6.0.0","modulePath":"/usr/local/app/other/koa-booster-page/node_modules/gatsby-remark-images/index.js","pluginOptions":{"plugins":[],"maxWidth":1035,"sizeByPixelDensity":true},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]},{"resolve":"/usr/local/app/other/koa-booster-page/node_modules/gatsby-remark-copy-linked-files","id":"cf104666-f93f-5e9d-9c2e-1bd9003e1e14","name":"gatsby-remark-copy-linked-files","version":"5.0.0","modulePath":"/usr/local/app/other/koa-booster-page/node_modules/gatsby-remark-copy-linked-files/index.js","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]}],"extensions":[".mdx",".md"],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/usr/local/app/other/koa-booster-page"}},{name:'gatsby-plugin-gtag',plugin:__webpack_require__(2130),options:{"plugins":[],"trackingId":null,"head":true,"anonymize":false}}];/* global plugins */ // During bootstrap, we write requires at top of this file which looks like:
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
const apis=__webpack_require__(3120);function augmentErrorWithPlugin(plugin,err){if(plugin.name!==`default-site-plugin`){// default-site-plugin is user code and will print proper stack trace,
// so no point in annotating error message pointing out which plugin is root of the problem
err.message+=` (from plugin: ${plugin.name})`;}throw err;}function apiRunner(api,args,defaultReturn,argTransform){if(!apis[api]){console.log(`This API doesn't exist`,api);}const results=[];plugins.forEach(plugin=>{const apiFn=plugin.plugin[api];if(!apiFn){return;}try{const result=apiFn(args,plugin.options);if(result&&argTransform){args=argTransform({args,result});}// This if case keeps behaviour as before, we should allow undefined here as the api is defined
// TODO V4
if(typeof result!==`undefined`){results.push(result);}}catch(e){augmentErrorWithPlugin(plugin,e);}});return results.length?results:[defaultReturn];}async function apiRunnerAsync(api,args,defaultReturn,argTransform){if(!apis[api]){console.log(`This API doesn't exist`,api);}const results=[];for(const plugin of plugins){const apiFn=plugin.plugin[api];if(!apiFn){continue;}try{const result=await apiFn(args,plugin.options);if(result&&argTransform){args=argTransform({args,result});}// This if case keeps behaviour as before, we should allow undefined here as the api is defined
// TODO V4
if(typeof result!==`undefined`){results.push(result);}}catch(e){augmentErrorWithPlugin(plugin,e);}}return results.length?results:[defaultReturn];}

/***/ }),

/***/ 3120:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */ /**
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
 */exports.replaceRenderer=true;/**
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
 */exports.onRenderBody=true;/**
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
 */exports.onPreRenderHTML=true;/**
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
 */exports.wrapPageElement=true;/**
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
 */exports.wrapRootElement=true;

/***/ }),

/***/ 5677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTML)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6657);
function HTML(props){return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__/* .jsx */ .tZ)("html",props.htmlAttributes,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__/* .jsx */ .tZ)("head",null,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__/* .jsx */ .tZ)("meta",{charSet:"utf-8"}),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__/* .jsx */ .tZ)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__/* .jsx */ .tZ)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),props.headComponents),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__/* .jsx */ .tZ)("body",props.bodyAttributes,props.preBodyComponents,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__/* .jsx */ .tZ)("div",{key:`body`,id:"___gatsby",dangerouslySetInnerHTML:{__html:props.body}}),props.postBodyComponents));}HTML.propTypes={htmlAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),headComponents:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),bodyAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),preBodyComponents:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),body:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),postBodyComponents:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)};

/***/ }),

/***/ 8451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "cleanPath": () => (/* binding */ cleanPath),
  "findMatchPath": () => (/* binding */ findMatchPath),
  "findPath": () => (/* binding */ findPath),
  "grabMatchParams": () => (/* binding */ grabMatchParams),
  "setMatchPaths": () => (/* binding */ setMatchPaths)
});

// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/lib/utils.js
var utils = __webpack_require__(1122);
;// CONCATENATED MODULE: ./.cache/strip-prefix.js
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */function stripPrefix(str,prefix=``){if(!prefix){return str;}if(str===prefix){return`/`;}if(str.startsWith(`${prefix}/`)){return str.slice(prefix.length);}return str;}
;// CONCATENATED MODULE: ./.cache/normalize-page-path.js
/* harmony default export */ const normalize_page_path = (pathAndSearch=>{if(pathAndSearch===undefined){return pathAndSearch;}let[path,search=``]=pathAndSearch.split(`?`);if(search){search=`?`+search;}if(path===`/`){return`/`+search;}if(path.charAt(path.length-1)===`/`){return path.slice(0,-1)+search;}return path+search;});
;// CONCATENATED MODULE: ./.cache/redirects.json
const redirects_namespaceObject = [];
;// CONCATENATED MODULE: ./.cache/redirect-utils.js
// Convert to a map for faster lookup in maybeRedirect()
const redirectMap=new Map();const redirectIgnoreCaseMap=new Map();redirects_namespaceObject.forEach(redirect=>{if(redirect.ignoreCase){redirectIgnoreCaseMap.set(redirect.fromPath,redirect);}else{redirectMap.set(redirect.fromPath,redirect);}});function maybeGetBrowserRedirect(pathname){let redirect=redirectMap.get(pathname);if(!redirect){redirect=redirectIgnoreCaseMap.get(pathname.toLowerCase());}return redirect;}
;// CONCATENATED MODULE: ./.cache/find-path.js
const pathCache=new Map();let matchPaths=[];const trimPathname=rawPathname=>{const pathname=decodeURIComponent(rawPathname);// Remove the pathPrefix from the pathname.
const trimmedPathname=stripPrefix(pathname,decodeURIComponent(""))// Remove any hashfragment
.split(`#`)[0];return trimmedPathname;};function absolutify(path){// If it's already absolute, return as-is
if(path.startsWith(`/`)||path.startsWith(`https://`)||path.startsWith(`http://`)){return path;}// Calculate path relative to current location, adding a trailing slash to
// match behavior of @reach/router
return new URL(path,window.location.href+(window.location.href.endsWith(`/`)?``:`/`)).pathname;}/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */const setMatchPaths=value=>{matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */const findMatchPath=rawPathname=>{const trimmedPathname=cleanPath(rawPathname);const pickPaths=matchPaths.map(({path,matchPath})=>{return{path:matchPath,originalPath:path};});const path=(0,utils.pick)(pickPaths,trimmedPathname);if(path){return normalize_page_path(path.route.originalPath);}return null;};/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */const grabMatchParams=rawPathname=>{const trimmedPathname=cleanPath(rawPathname);const pickPaths=matchPaths.map(({path,matchPath})=>{return{path:matchPath,originalPath:path};});const path=(0,utils.pick)(pickPaths,trimmedPathname);if(path){return path.params;}return{};};// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
const findPath=rawPathname=>{const trimmedPathname=trimPathname(absolutify(rawPathname));if(pathCache.has(trimmedPathname)){return pathCache.get(trimmedPathname);}const redirect=maybeGetBrowserRedirect(rawPathname);if(redirect){return findPath(redirect.toPath);}let foundPath=findMatchPath(trimmedPathname);if(!foundPath){foundPath=cleanPath(rawPathname);}pathCache.set(trimmedPathname,foundPath);return foundPath;};/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */const cleanPath=rawPathname=>{const trimmedPathname=trimPathname(absolutify(rawPathname));let foundPath=trimmedPathname;if(foundPath===`/index.html`){foundPath=`/`;}foundPath=normalize_page_path(foundPath);return foundPath;};

/***/ }),

/***/ 2031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Link": () => (/* reexport */ gatsby_link/* default */.ZP),
  "PageRenderer": () => (/* reexport */ (public_page_renderer_default())),
  "StaticQuery": () => (/* binding */ StaticQuery),
  "StaticQueryContext": () => (/* binding */ StaticQueryContext),
  "graphql": () => (/* binding */ graphql),
  "navigate": () => (/* reexport */ gatsby_link/* navigate */.c4),
  "parsePath": () => (/* reexport */ gatsby_link/* parsePath */.cP),
  "prefetchPathname": () => (/* binding */ prefetchPathname),
  "useScrollRestoration": () => (/* reexport */ gatsby_react_router_scroll/* useScrollRestoration */.p2),
  "useStaticQuery": () => (/* binding */ useStaticQuery),
  "withAssetPrefix": () => (/* reexport */ gatsby_link/* withAssetPrefix */.mc),
  "withPrefix": () => (/* reexport */ gatsby_link/* withPrefix */.dq)
});

// EXTERNAL MODULE: external "/usr/local/app/other/koa-booster-page/node_modules/react/index.js"
var index_js_ = __webpack_require__(2897);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/gatsby-link/index.js
var gatsby_link = __webpack_require__(8902);
// EXTERNAL MODULE: ./node_modules/gatsby-react-router-scroll/index.js
var gatsby_react_router_scroll = __webpack_require__(9679);
// EXTERNAL MODULE: ./.cache/public-page-renderer.js
var public_page_renderer = __webpack_require__(861);
var public_page_renderer_default = /*#__PURE__*/__webpack_require__.n(public_page_renderer);
;// CONCATENATED MODULE: ./.cache/prefetch.js
const support=function(feature){if(typeof document===`undefined`){return false;}const fakeLink=document.createElement(`link`);try{if(fakeLink.relList&&typeof fakeLink.relList.supports===`function`){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};const linkPrefetchStrategy=function(url,options){return new Promise((resolve,reject)=>{if(typeof document===`undefined`){reject();return;}const link=document.createElement(`link`);link.setAttribute(`rel`,`prefetch`);link.setAttribute(`href`,url);Object.keys(options).forEach(key=>{link.setAttribute(key,options[key]);});link.onload=resolve;link.onerror=reject;const parentElement=document.getElementsByTagName(`head`)[0]||document.getElementsByName(`script`)[0].parentNode;parentElement.appendChild(link);});};const xhrPrefetchStrategy=function(url){return new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(`GET`,url,true);req.onload=()=>{if(req.status===200){resolve();}else{reject();}};req.send(null);});};const supportedPrefetchStrategy=support(`prefetch`)?linkPrefetchStrategy:xhrPrefetchStrategy;const preFetched={};const prefetch=function(url,options){return new Promise(resolve=>{if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url,options).then(()=>{resolve();preFetched[url]=true;}).catch(()=>{});// 404s are logged to the console anyway
});};/* harmony default export */ const _cache_prefetch = ((/* unused pure expression or super */ null && (prefetch)));
;// CONCATENATED MODULE: ./node_modules/mitt/dist/mitt.es.js
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

/* harmony default export */ const mitt_es = (mitt);
//# sourceMappingURL=mitt.es.js.map

;// CONCATENATED MODULE: ./.cache/emitter.js
const emitter_emitter=mitt_es();/* harmony default export */ const _cache_emitter = ((/* unused pure expression or super */ null && (emitter_emitter)));
// EXTERNAL MODULE: ./.cache/find-path.js + 4 modules
var find_path = __webpack_require__(8451);
;// CONCATENATED MODULE: ./.cache/loader.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}/**
 * Available resource loading statuses
 */const PageResourceStatus={/**
   * At least one of critical resources failed to load
   */Error:`error`,/**
   * Resources loaded successfully
   */Success:`success`};const preferDefault=m=>m&&m.default||m;const stripSurroundingSlashes=s=>{s=s[0]===`/`?s.slice(1):s;s=s.endsWith(`/`)?s.slice(0,-1):s;return s;};const createPageDataUrl=rawPath=>{const[path,maybeSearch]=rawPath.split(`?`);const fixedPath=path===`/`?`index`:stripSurroundingSlashes(path);return`${""}/page-data/${fixedPath}/page-data.json${maybeSearch?`?${maybeSearch}`:``}`;};function doFetch(url,method=`GET`){return new Promise(resolve=>{const req=new XMLHttpRequest();req.open(method,url,true);req.onreadystatechange=()=>{if(req.readyState==4){resolve(req);}};req.send(null);});}const doesConnectionSupportPrefetch=()=>{if(`connection`in navigator&&typeof navigator.connection!==`undefined`){if((navigator.connection.effectiveType||``).includes(`2g`)){return false;}if(navigator.connection.saveData){return false;}}return true;};const toPageResources=(pageData,component=null)=>{const page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath,staticQueryHashes:pageData.staticQueryHashes,getServerDataError:pageData.getServerDataError};return{component,json:pageData.result,page};};class BaseLoader{constructor(loadComponent,matchPaths){this.inFlightNetworkRequests=new Map();// Map of pagePath -> Page. Where Page is an object with: {
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
this.pageDb=new Map();this.inFlightDb=new Map();this.staticQueryDb={};this.pageDataDb=new Map();this.isPrefetchQueueRunning=false;this.prefetchQueued=[];this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;setMatchPaths(matchPaths);}memoizedGet(url){let inFlightPromise=this.inFlightNetworkRequests.get(url);if(!inFlightPromise){inFlightPromise=doFetch(url,`GET`);this.inFlightNetworkRequests.set(url,inFlightPromise);}// Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
return inFlightPromise.then(response=>{this.inFlightNetworkRequests.delete(url);return response;}).catch(err=>{this.inFlightNetworkRequests.delete(url);throw err;});}setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner(`disableCorePrefetching`).some(a=>a);}fetchPageDataJson(loadObj){const{pagePath,retries=0}=loadObj;const url=createPageDataUrl(pagePath);return this.memoizedGet(url).then(req=>{const{status,responseText}=req;// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.path===undefined){throw new Error(`not a valid pageData response`);}const maybeSearch=pagePath.split(`?`)[1];if(maybeSearch&&!jsonPayload.path.includes(maybeSearch)){jsonPayload.path+=`?${maybeSearch}`;}return Object.assign(loadObj,{status:PageResourceStatus.Success,payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404/500 page and it doesn't exist, we're done
if(pagePath===`/404.html`||pagePath===`/500.html`){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return this.fetchPageDataJson(Object.assign(loadObj,{pagePath:`/404.html`,notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return this.fetchPageDataJson(Object.assign(loadObj,{pagePath:`/500.html`,internalServerError:true}));}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return this.fetchPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is an error.
return Object.assign(loadObj,{status:PageResourceStatus.Error});});}loadPageDataJson(rawPath){const pagePath=findPath(rawPath);if(this.pageDataDb.has(pagePath)){const pageData=this.pageDataDb.get(pagePath);if(true){return Promise.resolve(pageData);}}return this.fetchPageDataJson({pagePath}).then(pageData=>{this.pageDataDb.set(pagePath,pageData);return pageData;});}findMatchPath(rawPath){return findMatchPath(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
loadPage(rawPath){const pagePath=findPath(rawPath);if(this.pageDb.has(pagePath)){const page=this.pageDb.get(pagePath);if(true){if(page.error){return{error:page.error,status:page.status};}return Promise.resolve(page.payload);}}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}const inFlightPromise=Promise.all([this.loadAppData(),this.loadPageDataJson(pagePath)]).then(allData=>{const result=allData[1];if(result.status===PageResourceStatus.Error){return{status:PageResourceStatus.Error};}let pageData=result.payload;const{componentChunkName,staticQueryHashes=[]}=pageData;const finalResult={};const componentChunkPromise=this.loadComponent(componentChunkName).then(component=>{finalResult.createdAt=new Date();let pageResources;if(!component||component instanceof Error){finalResult.status=PageResourceStatus.Error;finalResult.error=component;}else{finalResult.status=PageResourceStatus.Success;if(result.notFound===true){finalResult.notFound=true;}pageData=Object.assign(pageData,{webpackCompilationHash:allData[0]?allData[0].webpackCompilationHash:``});pageResources=toPageResources(pageData,component);}// undefined if final result is an error
return pageResources;});const staticQueryBatchPromise=Promise.all(staticQueryHashes.map(staticQueryHash=>{// Check for cache in case this static query result has already been loaded
if(this.staticQueryDb[staticQueryHash]){const jsonPayload=this.staticQueryDb[staticQueryHash];return{staticQueryHash,jsonPayload};}return this.memoizedGet(`${""}/page-data/sq/d/${staticQueryHash}.json`).then(req=>{const jsonPayload=JSON.parse(req.responseText);return{staticQueryHash,jsonPayload};}).catch(()=>{throw new Error(`We couldn't load "${""}/page-data/sq/d/${staticQueryHash}.json"`);});})).then(staticQueryResults=>{const staticQueryResultsMap={};staticQueryResults.forEach(({staticQueryHash,jsonPayload})=>{staticQueryResultsMap[staticQueryHash]=jsonPayload;this.staticQueryDb[staticQueryHash]=jsonPayload;});return staticQueryResultsMap;});return Promise.all([componentChunkPromise,staticQueryBatchPromise]).then(([pageResources,staticQueryResults])=>{let payload;if(pageResources){payload=_objectSpread(_objectSpread({},pageResources),{},{staticQueryResults});finalResult.payload=payload;emitter.emit(`onPostLoadPageResources`,{page:payload,pageResources:payload});}this.pageDb.set(pagePath,finalResult);if(finalResult.error){return{error:finalResult.error,status:finalResult.status};}return payload;})// when static-query fail to load we throw a better error
.catch(err=>{return{error:err,status:PageResourceStatus.Error};});});inFlightPromise.then(()=>{this.inFlightDb.delete(pagePath);}).catch(error=>{this.inFlightDb.delete(pagePath);throw error;});this.inFlightDb.set(pagePath,inFlightPromise);return inFlightPromise;}// returns undefined if the page does not exists in cache
loadPageSync(rawPath,options={}){const pagePath=findPath(rawPath);if(this.pageDb.has(pagePath)){const pageData=this.pageDb.get(pagePath);if(pageData.payload){return pageData.payload;}if(options!==null&&options!==void 0&&options.withErrorDetails){return{error:pageData.error,status:pageData.status};}}return undefined;}shouldPrefetch(pagePath){// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;}prefetch(pagePath){if(!this.shouldPrefetch(pagePath)){return{then:resolve=>resolve(false),abort:()=>{}};}if(this.prefetchTriggered.has(pagePath)){return{then:resolve=>resolve(true),abort:()=>{}};}const defer={resolve:null,reject:null,promise:null};defer.promise=new Promise((resolve,reject)=>{defer.resolve=resolve;defer.reject=reject;});this.prefetchQueued.push([pagePath,defer]);const abortC=new AbortController();abortC.signal.addEventListener(`abort`,()=>{const index=this.prefetchQueued.findIndex(([p])=>p===pagePath);// remove from the queue
if(index!==-1){this.prefetchQueued.splice(index,1);}});if(!this.isPrefetchQueueRunning){this.isPrefetchQueueRunning=true;setTimeout(()=>{this._processNextPrefetchBatch();},3000);}return{then:(resolve,reject)=>defer.promise.then(resolve,reject),abort:abortC.abort.bind(abortC)};}_processNextPrefetchBatch(){const idleCallback=window.requestIdleCallback||(cb=>setTimeout(cb,0));idleCallback(()=>{const toPrefetch=this.prefetchQueued.splice(0,4);const prefetches=Promise.all(toPrefetch.map(([pagePath,dPromise])=>{// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!this.prefetchTriggered.has(pagePath)){this.apiRunner(`onPrefetchPathname`,{pathname:pagePath});this.prefetchTriggered.add(pagePath);}// If a plugin has disabled core prefetching, stop now.
if(this.prefetchDisabled){return dPromise.resolve(false);}return this.doPrefetch(findPath(pagePath)).then(()=>{if(!this.prefetchCompleted.has(pagePath)){this.apiRunner(`onPostPrefetchPathname`,{pathname:pagePath});this.prefetchCompleted.add(pagePath);}dPromise.resolve(true);});}));if(this.prefetchQueued.length){prefetches.then(()=>{setTimeout(()=>{this._processNextPrefetchBatch();},3000);});}else{this.isPrefetchQueueRunning=false;}});}doPrefetch(pagePath){const pageDataUrl=createPageDataUrl(pagePath);return prefetchHelper(pageDataUrl,{crossOrigin:`anonymous`,as:`fetch`}).then(()=>// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
this.loadPageDataJson(pagePath));}hovering(rawPath){this.loadPage(rawPath);}getResourceURLsForPathname(rawPath){const pagePath=findPath(rawPath);const page=this.pageDataDb.get(pagePath);if(page){const pageResources=toPageResources(page.payload);return[...createComponentUrls(pageResources.page.componentChunkName),createPageDataUrl(pagePath)];}else{return null;}}isPageNotFound(rawPath){const pagePath=findPath(rawPath);const page=this.pageDb.get(pagePath);return!page||page.notFound;}loadAppData(retries=0){return this.memoizedGet(`${""}/page-data/app-data.json`).then(req=>{const{status,responseText}=req;let appData;if(status!==200&&retries<3){// Retry 3 times incase of non-200 responses
return this.loadAppData(retries+1);}// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error(`not a valid app-data response`);}appData=jsonPayload;}catch(err){// continue regardless of error
}}return appData;});}}const createComponentUrls=componentChunkName=>(window.___chunkMapping[componentChunkName]||[]).map(chunk=>""+chunk);class ProdLoader extends (/* unused pure expression or super */ null && (BaseLoader)){constructor(asyncRequires,matchPaths,pageData){const loadComponent=chunkName=>{if(!asyncRequires.components[chunkName]){throw new Error(`We couldn't find the correct component chunk with the name ${chunkName}`);}return asyncRequires.components[chunkName]().then(preferDefault)// loader will handle the case when component is error
.catch(err=>err);};super(loadComponent,matchPaths);if(pageData){this.pageDataDb.set(findPath(pageData.path),{pagePath:pageData.path,payload:pageData,status:`success`});}}doPrefetch(pagePath){return super.doPrefetch(pagePath).then(result=>{if(result.status!==PageResourceStatus.Success){return Promise.resolve();}const pageData=result.payload;const chunkName=pageData.componentChunkName;const componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(prefetchHelper)).then(()=>pageData);});}loadPageDataJson(rawPath){return super.loadPageDataJson(rawPath).then(data=>{if(data.notFound){// check if html file exist using HEAD request:
// if it does we should navigate to it instead of showing 404
return doFetch(rawPath,`HEAD`).then(req=>{if(req.status===200){// page (.html file) actually exist (or we asked for 404 )
// returning page resources status as errored to trigger
// regular browser navigation to given page
return{status:PageResourceStatus.Error};}// if HEAD request wasn't 200, return notFound result
// and show 404 page
return data;});}return data;});}}let instance;const setLoader=_loader=>{instance=_loader;};const publicLoader={enqueue:rawPath=>instance.prefetch(rawPath),// Real methods
getResourceURLsForPathname:rawPath=>instance.getResourceURLsForPathname(rawPath),loadPage:rawPath=>instance.loadPage(rawPath),// TODO add deprecation to v4 so people use withErrorDetails and then we can remove in v5 and change default behaviour
loadPageSync:(rawPath,options={})=>instance.loadPageSync(rawPath,options),prefetch:rawPath=>instance.prefetch(rawPath),isPageNotFound:rawPath=>instance.isPageNotFound(rawPath),hovering:rawPath=>instance.hovering(rawPath),loadAppData:()=>instance.loadAppData()};/* harmony default export */ const loader = (publicLoader);function getStaticQueryResults(){if(instance){return instance.staticQueryDb;}else{return{};}}
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.esm.js
var emotion_react_esm = __webpack_require__(6657);
;// CONCATENATED MODULE: ./.cache/gatsby-browser-entry.js
const prefetchPathname=loader.enqueue;const StaticQueryContext=/*#__PURE__*/index_js_default().createContext({});function StaticQueryDataRenderer({staticQueryData,data,query,render}){const finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return (0,emotion_react_esm/* jsx */.tZ)((index_js_default()).Fragment,null,finalData&&render(finalData),!finalData&&(0,emotion_react_esm/* jsx */.tZ)("div",null,"Loading (StaticQuery)"));}const StaticQuery=props=>{const{data,query,render,children}=props;return (0,emotion_react_esm/* jsx */.tZ)(StaticQueryContext.Consumer,null,staticQueryData=>(0,emotion_react_esm/* jsx */.tZ)(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData}));};const useStaticQuery=query=>{var _context$query;if(typeof (index_js_default()).useContext!==`function`&&"production"===`development`){}const context=index_js_default().useContext(StaticQueryContext);// query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
// to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
// catch the misuse of the API and give proper direction
if(isNaN(Number(query))){throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:

import { useStaticQuery, graphql } from 'gatsby';

useStaticQuery(graphql\`${query}\`);
`);}if((_context$query=context[query])!==null&&_context$query!==void 0&&_context$query.data){return context[query].data;}else{throw new Error(`The result of this StaticQuery could not be fetched.\n\n`+`This is likely a bug in Gatsby and if refreshing the page does not fix it, `+`please open an issue in https://github.com/gatsbyjs/gatsby/issues`);}};StaticQuery.propTypes={data:(prop_types_default()).object,query:(prop_types_default()).string.isRequired,render:(prop_types_default()).func,children:(prop_types_default()).func};function graphql(){throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls `+`are supposed to only be evaluated at compile time, and then compiled away. `+`Unfortunately, something went wrong and the query was left in the compiled code.\n\n`+`Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);}

/***/ }),

/***/ 861:
/***/ ((module) => {

const preferDefault=m=>m&&m.default||m;if(false){}else if(false){}else{module.exports=()=>null;}

/***/ }),

/***/ 3639:
/***/ ((__unused_webpack_module, exports) => {

exports.O=Component=>Component;

/***/ }),

/***/ 5394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteAnnouncerProps": () => (/* binding */ RouteAnnouncerProps)
/* harmony export */ });
// This is extracted to separate module because it's shared
// between browser and SSR code
const RouteAnnouncerProps={id:`gatsby-announcer`,style:{position:`absolute`,top:0,width:1,height:1,padding:0,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,whiteSpace:`nowrap`,border:0},"aria-live":`assertive`,"aria-atomic":`true`};

/***/ }),

/***/ 1945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WritableAsPromise": () => (/* binding */ WritableAsPromise)
/* harmony export */ });
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8311);
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_0__);
class WritableAsPromise extends stream__WEBPACK_IMPORTED_MODULE_0__.Writable{constructor(){super();this._output=``;this._deferred={promise:null,resolve:null,reject:null};this._deferred.promise=new Promise((resolve,reject)=>{this._deferred.resolve=resolve;this._deferred.reject=reject;});}_write(chunk,enc,cb){this._output+=chunk.toString();cb();}end(){this._deferred.resolve(this._output);this.destroy();}// disguise us as a promise
then(resolve,reject){return this._deferred.promise.then(resolve,reject);}}

/***/ }),

/***/ 3451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sanitizeComponents": () => (/* binding */ sanitizeComponents),
/* harmony export */   "default": () => (/* binding */ staticPage),
/* harmony export */   "getPageChunk": () => (/* binding */ getPageChunk)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7462);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6657);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}const React=__webpack_require__(2897);const path=__webpack_require__(1423);const{renderToString,renderToStaticMarkup,pipeToNodeWritable}=__webpack_require__(8887);const{ServerLocation,Router,isRedirect}=__webpack_require__(3631);const merge=__webpack_require__(9996);const{StaticQueryContext}=__webpack_require__(2031);const fs=__webpack_require__(3324);const{WritableAsPromise}=__webpack_require__(1945);const{RouteAnnouncerProps}=__webpack_require__(5394);const{apiRunner,apiRunnerAsync}=__webpack_require__(9874);const asyncRequires=__webpack_require__(4999);const{version:gatsbyVersion}=__webpack_require__(1741);const{grabMatchParams}=__webpack_require__(8451);const chunkMapping=__webpack_require__(9804);// we want to force posix-style joins, so Windows doesn't produce backslashes for urls
const{join}=path.posix;// const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.
const testRequireError=(moduleName,err)=>{const regex=new RegExp(`Error: Cannot find module\\s.${moduleName}`);const firstLine=err.toString().split(`\n`)[0];return regex.test(firstLine);};let Html;try{Html=__webpack_require__(230);}catch(err){if(testRequireError(`../src/html`,err)){Html=__webpack_require__(5677);}else{throw err;}}Html=Html&&Html.__esModule?Html.default:Html;const getPageDataPath=path=>{const fixedPagePath=path===`/`?`index`:path;return join(`page-data`,fixedPagePath,`page-data.json`);};const getPageDataUrl=pagePath=>{const pageDataPath=getPageDataPath(pagePath);return`${""}/${pageDataPath}`;};const getStaticQueryPath=hash=>join(`page-data`,`sq`,`d`,`${hash}.json`);const getStaticQueryUrl=hash=>`${""}/${getStaticQueryPath(hash)}`;const getAppDataUrl=()=>`${""}/${join(`page-data`,`app-data.json`)}`;const createElement=React.createElement;const sanitizeComponents=components=>{const componentsArray=[].concat(components).flat(Infinity).filter(Boolean);return componentsArray.map(component=>{// Ensure manifest is always loaded from content server
// And not asset server when an assetPrefix is used
if(undefined&&component.props.rel===`manifest`){return React.cloneElement(component,{href:component.props.href.replace(undefined,``)});}return component;});};function deepMerge(a,b){const combineMerge=(target,source,options)=>{const destination=target.slice();source.forEach((item,index)=>{if(typeof destination[index]===`undefined`){destination[index]=options.cloneUnlessOtherwiseSpecified(item,options);}else if(options.isMergeableObject(item)){destination[index]=merge(target[index],item,options);}else if(target.indexOf(item)===-1){destination.push(item);}});return destination;};return merge(a,b,{arrayMerge:combineMerge});}async function staticPage({pagePath,pageData,staticQueryContext,styles,scripts,reversedStyles,reversedScripts,inlinePageData=false}){// for this to work we need this function to be sync or at least ensure there is single execution of it at a time
global.unsafeBuiltinUsage=[];try{let bodyHtml=``;let headComponents=[(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)("meta",{name:"generator",content:`Gatsby ${gatsbyVersion}`,key:`generator-${gatsbyVersion}`})];let htmlAttributes={};let bodyAttributes={};let preBodyComponents=[];let postBodyComponents=[];let bodyProps={};function loadPageDataSync(_pagePath){if(_pagePath===pagePath){// no need to use fs if we are asking for pageData of current page
return pageData;}const pageDataPath=getPageDataPath(_pagePath);const pageDataFile=join(process.cwd(),`public`,pageDataPath);try{// deprecation notice
const myErrorHolder={name:`Usage of loadPageDataSync for page other than currently generated page disables incremental html generation in future builds`};Error.captureStackTrace(myErrorHolder,loadPageDataSync);global.unsafeBuiltinUsage.push(myErrorHolder.stack);const pageDataJson=fs.readFileSync(pageDataFile);return JSON.parse(pageDataJson);}catch(error){// not an error if file is not found. There's just no page data
return null;}}const replaceBodyHTMLString=body=>{bodyHtml=body;};const setHeadComponents=components=>{headComponents=headComponents.concat(sanitizeComponents(components));};const setHtmlAttributes=attributes=>{// TODO - we should remove deep merges
htmlAttributes=deepMerge(htmlAttributes,attributes);};const setBodyAttributes=attributes=>{// TODO - we should remove deep merges
bodyAttributes=deepMerge(bodyAttributes,attributes);};const setPreBodyComponents=components=>{preBodyComponents=preBodyComponents.concat(sanitizeComponents(components));};const setPostBodyComponents=components=>{postBodyComponents=postBodyComponents.concat(sanitizeComponents(components));};const setBodyProps=props=>{// TODO - we should remove deep merges
bodyProps=deepMerge({},bodyProps,props);};const getHeadComponents=()=>headComponents;const replaceHeadComponents=components=>{headComponents=sanitizeComponents(components);};const getPreBodyComponents=()=>preBodyComponents;const replacePreBodyComponents=components=>{preBodyComponents=sanitizeComponents(components);};const getPostBodyComponents=()=>postBodyComponents;const replacePostBodyComponents=components=>{postBodyComponents=sanitizeComponents(components);};const pageDataUrl=getPageDataUrl(pagePath);const{componentChunkName,staticQueryHashes=[]}=pageData;const pageComponent=await asyncRequires.components[componentChunkName]();const staticQueryUrls=staticQueryHashes.map(getStaticQueryUrl);class RouteHandler extends React.Component{render(){var _pageData$result,_pageData$result$page;const props=_objectSpread(_objectSpread(_objectSpread({},this.props),pageData.result),{},{params:_objectSpread(_objectSpread({},grabMatchParams(this.props.location.pathname)),((_pageData$result=pageData.result)===null||_pageData$result===void 0?void 0:(_pageData$result$page=_pageData$result.pageContext)===null||_pageData$result$page===void 0?void 0:_pageData$result$page.__params)||{})});const pageElement=createElement(pageComponent.default,props);const wrappedPage=apiRunner(`wrapPageElement`,{element:pageElement,props},pageElement,({result})=>{return{element:result,props};}).pop();return wrappedPage;}}const routerElement=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)(ServerLocation,{url:`${""}${pagePath}`},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)(Router,{id:"gatsby-focus-wrapper",baseuri:""},(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)(RouteHandler,{path:"/*"})),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)("div",RouteAnnouncerProps));const bodyComponent=(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)(StaticQueryContext.Provider,{value:staticQueryContext},apiRunner(`wrapRootElement`,{element:routerElement,pathname:pagePath},routerElement,({result})=>{return{element:result,pathname:pagePath};}).pop());// Let the site or plugin render the page component.
await apiRunnerAsync(`replaceRenderer`,{bodyComponent,replaceBodyHTMLString,setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,pathPrefix:""});// If no one stepped up, we'll handle it.
if(!bodyHtml){try{// react 18 enabled
if(pipeToNodeWritable){const writableStream=new WritableAsPromise();const{startWriting}=pipeToNodeWritable(bodyComponent,writableStream,{onCompleteAll(){startWriting();},onError(){}});bodyHtml=await writableStream;}else{bodyHtml=renderToString(bodyComponent);}}catch(e){// ignore @reach/router redirect errors
if(!isRedirect(e))throw e;}}apiRunner(`onRenderBody`,{setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,loadPageDataSync,bodyHtml,scripts,styles,pathPrefix:""});reversedScripts.forEach(script=>{// Add preload/prefetch <link>s for scripts.
headComponents.push((0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)("link",{as:"script",rel:script.rel,key:script.name,href:`${""}/${script.name}`}));});if(pageData&&!inlinePageData){headComponents.push((0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)("link",{as:"fetch",rel:"preload",key:pageDataUrl,href:pageDataUrl,crossOrigin:"anonymous"}));}staticQueryUrls.forEach(staticQueryUrl=>headComponents.push((0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)("link",{as:"fetch",rel:"preload",key:staticQueryUrl,href:staticQueryUrl,crossOrigin:"anonymous"})));const appDataUrl=getAppDataUrl();if(appDataUrl){headComponents.push((0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)("link",{as:"fetch",rel:"preload",key:appDataUrl,href:appDataUrl,crossOrigin:"anonymous"}));}reversedStyles.forEach(style=>{// Add <link>s for styles that should be prefetched
// otherwise, inline as a <style> tag
if(style.rel===`prefetch`){headComponents.push((0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)("link",{as:"style",rel:style.rel,key:style.name,href:`${""}/${style.name}`}));}else{headComponents.unshift((0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)("style",{"data-href":`${""}/${style.name}`,"data-identity":`gatsby-global-css`,dangerouslySetInnerHTML:{__html:style.content}}));}});// Add page metadata for the current page
const windowPageData=`/*<![CDATA[*/window.pagePath="${pagePath}";${inlinePageData?`window.pageData=${JSON.stringify(pageData)};`:``}/*]]>*/`;postBodyComponents.push((0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)("script",{key:`script-loader`,id:`gatsby-script-loader`,dangerouslySetInnerHTML:{__html:windowPageData}}));// Add chunk mapping metadata
const scriptChunkMapping=`/*<![CDATA[*/window.___chunkMapping=${JSON.stringify(chunkMapping)};/*]]>*/`;postBodyComponents.push((0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)("script",{key:`chunk-mapping`,id:`gatsby-chunk-mapping`,dangerouslySetInnerHTML:{__html:scriptChunkMapping}}));let bodyScripts=[];if(chunkMapping[`polyfill`]){chunkMapping[`polyfill`].forEach(script=>{const scriptPath=`${""}${script}`;bodyScripts.push((0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)("script",{key:scriptPath,src:scriptPath,noModule:true}));});}// Filter out prefetched bundles as adding them as a script tag
// would force high priority fetching.
bodyScripts=bodyScripts.concat(scripts.filter(s=>s.rel!==`prefetch`).map(s=>{const scriptPath=`${""}/${JSON.stringify(s.name).slice(1,-1)}`;return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)("script",{key:scriptPath,src:scriptPath,async:true});}));postBodyComponents.push(...bodyScripts);apiRunner(`onPreRenderHTML`,{getHeadComponents,replaceHeadComponents,getPreBodyComponents,replacePreBodyComponents,getPostBodyComponents,replacePostBodyComponents,pathname:pagePath,pathPrefix:""});const html=`<!DOCTYPE html>${renderToStaticMarkup((0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__/* .jsx */ .tZ)(Html,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({},bodyProps,{headComponents:headComponents,htmlAttributes:htmlAttributes,bodyAttributes:bodyAttributes,preBodyComponents:preBodyComponents,postBodyComponents:postBodyComponents,body:bodyHtml,path:pagePath})))}`;return{html,unsafeBuiltinsUsage:global.unsafeBuiltinUsage};}catch(e){e.unsafeBuiltinsUsage=global.unsafeBuiltinUsage;throw e;}}function getPageChunk({componentChunkName}){return asyncRequires.components[componentChunkName]();}

/***/ }),

/***/ 8514:
/***/ ((module) => {

const config={gatsby:{pathPrefix:'/',siteUrl:'https://hasura.io',gaTrackingId:null,trailingSlash:false},header:{logo:'https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/brand.svg',logoLink:'https://hasura.io/learn/',title:"<a href='https://hasura.io/learn/'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",githubUrl:'https://github.com/hasura/gatsby-gitbook-boilerplate',helpUrl:'',tweetText:'',social:`<li>
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
		  </li>`,links:[{text:'',link:''}],search:{enabled:false,indexName:'',algoliaAppId:({}).GATSBY_ALGOLIA_APP_ID,algoliaSearchKey:({}).GATSBY_ALGOLIA_SEARCH_KEY,algoliaAdminKey:({}).ALGOLIA_ADMIN_KEY}},sidebar:{forcedNavOrder:['/introduction',// add trailing slash if enabled above
'/codeblock'],collapsedNav:['/codeblock'// add trailing slash if enabled above
],links:[// { text: 'Hasura123', link: 'https://hasura.io' }
],frontline:false,ignoreIndex:true,title:"<a href='https://github.com/santiagochen/koa-booster/'>Koa-Booster</a>"},siteMetadata:{title:'Gatsby Gitbook Boilerplate | Hasura',description:'Documentation built with mdx. Powering hasura.io/learn ',ogImage:null,docsLocation:'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',favicon:'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg'},pwa:{enabled:false,// disabling this will also remove the existing service worker.
manifest:{name:'Gatsby Gitbook Starter',short_name:'GitbookStarter',start_url:'/',background_color:'#6b37bf',theme_color:'#6b37bf',display:'standalone',crossOrigin:'use-credentials',icons:[{src:'src/pwa-512.png',sizes:`512x512`,type:`image/png`}]}}};module.exports=config;

/***/ }),

/***/ 8902:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
var _interopRequireDefault=__webpack_require__(5318);__webpack_unused_export__=true;exports.dq=withPrefix;exports.mc=withAssetPrefix;exports.c4=exports.ZP=void 0;var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(7316));var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(1506));var _inheritsLoose2=_interopRequireDefault(__webpack_require__(5354));var _extends2=_interopRequireDefault(__webpack_require__(7154));var _propTypes=_interopRequireDefault(__webpack_require__(5697));var _react=_interopRequireDefault(__webpack_require__(2897));var _reachRouter=__webpack_require__(3631);var _utils=__webpack_require__(1122);var _parsePath=__webpack_require__(9876);exports.cP=_parsePath.parsePath;var _excluded=["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","partiallyActive","state","replace","_location"];var isAbsolutePath=function isAbsolutePath(path){return path===null||path===void 0?void 0:path.startsWith("/");};function withPrefix(path,prefix){var _ref,_prefix;if(prefix===void 0){prefix=getGlobalBasePrefix();}if(!isLocalLink(path)){return path;}if(path.startsWith("./")||path.startsWith("../")){return path;}var base=(_ref=(_prefix=prefix)!==null&&_prefix!==void 0?_prefix:getGlobalPathPrefix())!==null&&_ref!==void 0?_ref:"/";return""+(base!==null&&base!==void 0&&base.endsWith("/")?base.slice(0,-1):base)+(path.startsWith("/")?path:"/"+path);}// These global values are wrapped in typeof clauses to ensure the values exist.
// This is especially problematic in unit testing of this component.
var getGlobalPathPrefix=function getGlobalPathPrefix(){return  false?0:"";};var getGlobalBasePrefix=function getGlobalBasePrefix(){return  false?0:"";};var isLocalLink=function isLocalLink(path){return path&&!path.startsWith("http://")&&!path.startsWith("https://")&&!path.startsWith("//");};function withAssetPrefix(path){return withPrefix(path,getGlobalPathPrefix());}function absolutify(path,current){// If it's already absolute, return as-is
if(isAbsolutePath(path)){return path;}return(0,_utils.resolve)(path,current);}var rewriteLinkPath=function rewriteLinkPath(path,relativeTo){if(typeof path==="number"){return path;}if(!isLocalLink(path)){return path;}return isAbsolutePath(path)?withPrefix(path):absolutify(path,relativeTo);};var NavLinkPropTypes={activeClassName:_propTypes.default.string,activeStyle:_propTypes.default.object,partiallyActive:_propTypes.default.bool};// Set up IntersectionObserver
var createIntersectionObserver=function createIntersectionObserver(el,cb){var io=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(el===entry.target){// Check if element is within viewport, remove listener, destroy observer, and run link callback.
// MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
cb(entry.isIntersecting||entry.intersectionRatio>0);}});});// Add element to the observer
io.observe(el);return{instance:io,el:el};};function GatsbyLinkLocationWrapper(props){return/*#__PURE__*/_react.default.createElement(_reachRouter.Location,null,function(_ref2){var location=_ref2.location;return/*#__PURE__*/_react.default.createElement(GatsbyLink,(0,_extends2.default)({},props,{_location:location}));});}var GatsbyLink=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2.default)(GatsbyLink,_React$Component);function GatsbyLink(props){var _this;_this=_React$Component.call(this,props)||this;// Default to no support for IntersectionObserver
_this.defaultGetProps=function(_ref3){var isPartiallyCurrent=_ref3.isPartiallyCurrent,isCurrent=_ref3.isCurrent;if(_this.props.partiallyActive?isPartiallyCurrent:isCurrent){return{className:[_this.props.className,_this.props.activeClassName].filter(Boolean).join(" "),style:(0,_extends2.default)({},_this.props.style,_this.props.activeStyle)};}return null;};var IOSupported=false;if(typeof window!=="undefined"&&window.IntersectionObserver){IOSupported=true;}_this.state={IOSupported:IOSupported};_this.abortPrefetch=null;_this.handleRef=_this.handleRef.bind((0,_assertThisInitialized2.default)(_this));return _this;}var _proto=GatsbyLink.prototype;_proto._prefetch=function _prefetch(){var currentPath=window.location.pathname+window.location.search;// reach router should have the correct state
if(this.props._location&&this.props._location.pathname){currentPath=this.props._location.pathname+this.props._location.search;}var rewrittenPath=rewriteLinkPath(this.props.to,currentPath);var parsed=(0,_parsePath.parsePath)(rewrittenPath);var newPathName=parsed.pathname+parsed.search;// Prefetch is used to speed up next navigations. When you use it on the current navigation,
// there could be a race-condition where Chrome uses the stale data instead of waiting for the network to complete
if(currentPath!==newPathName){return ___loader.enqueue(newPathName);}return undefined;};_proto.componentWillUnmount=function componentWillUnmount(){if(!this.io){return;}var _this$io=this.io,instance=_this$io.instance,el=_this$io.el;if(this.abortPrefetch){this.abortPrefetch.abort();}instance.unobserve(el);instance.disconnect();};_proto.handleRef=function handleRef(ref){var _this2=this;if(this.props.innerRef&&Object.prototype.hasOwnProperty.call(this.props.innerRef,"current")){this.props.innerRef.current=ref;}else if(this.props.innerRef){this.props.innerRef(ref);}if(this.state.IOSupported&&ref){// If IO supported and element reference found, setup Observer functionality
this.io=createIntersectionObserver(ref,function(inViewPort){if(inViewPort){_this2.abortPrefetch=_this2._prefetch();}else{if(_this2.abortPrefetch){_this2.abortPrefetch.abort();}}});}};_proto.render=function render(){var _this3=this;var _this$props=this.props,to=_this$props.to,_this$props$getProps=_this$props.getProps,getProps=_this$props$getProps===void 0?this.defaultGetProps:_this$props$getProps,_onClick=_this$props.onClick,_onMouseEnter=_this$props.onMouseEnter,$activeClassName=_this$props.activeClassName,$activeStyle=_this$props.activeStyle,$innerRef=_this$props.innerRef,partiallyActive=_this$props.partiallyActive,state=_this$props.state,replace=_this$props.replace,_location=_this$props._location,rest=(0,_objectWithoutPropertiesLoose2.default)(_this$props,_excluded);if(false){}var prefixedTo=rewriteLinkPath(to,_location.pathname);if(!isLocalLink(prefixedTo)){return/*#__PURE__*/_react.default.createElement("a",(0,_extends2.default)({href:prefixedTo},rest));}return/*#__PURE__*/_react.default.createElement(_reachRouter.Link,(0,_extends2.default)({to:prefixedTo,state:state,getProps:getProps,innerRef:this.handleRef,onMouseEnter:function onMouseEnter(e){if(_onMouseEnter){_onMouseEnter(e);}var parsed=(0,_parsePath.parsePath)(prefixedTo);___loader.hovering(parsed.pathname+parsed.search);},onClick:function onClick(e){if(_onClick){_onClick(e);}if(e.button===0&&// ignore right clicks
!_this3.props.target&&// let browser handle "target=_blank"
!e.defaultPrevented&&// onClick prevented default
!e.metaKey&&// ignore clicks with modifier keys...
!e.altKey&&!e.ctrlKey&&!e.shiftKey){e.preventDefault();var shouldReplace=replace;var isCurrent=encodeURI(prefixedTo)===_location.pathname;if(typeof replace!=="boolean"&&isCurrent){shouldReplace=true;}// Make sure the necessary scripts and data are
// loaded before continuing.
window.___navigate(prefixedTo,{state:state,replace:shouldReplace});}return true;}},rest));};return GatsbyLink;}(_react.default.Component);GatsbyLink.propTypes=(0,_extends2.default)({},NavLinkPropTypes,{onClick:_propTypes.default.func,to:_propTypes.default.string.isRequired,replace:_propTypes.default.bool,state:_propTypes.default.object});var _default=/*#__PURE__*/_react.default.forwardRef(function(props,ref){return/*#__PURE__*/_react.default.createElement(GatsbyLinkLocationWrapper,(0,_extends2.default)({innerRef:ref},props));});exports.ZP=_default;var navigate=function navigate(to,options){window.___navigate(rewriteLinkPath(to,window.location.pathname),options);};exports.c4=navigate;

/***/ }),

/***/ 9876:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
exports.__esModule=true;exports.parsePath=parsePath;function parsePath(path){var pathname=path||"/";var search="";var hash="";var hashIndex=pathname.indexOf("#");if(hashIndex!==-1){hash=pathname.substr(hashIndex);pathname=pathname.substr(0,hashIndex);}var searchIndex=pathname.indexOf("?");if(searchIndex!==-1){search=pathname.substr(searchIndex);pathname=pathname.substr(0,searchIndex);}return{pathname:pathname,search:search==="?"?"":search,hash:hash==="#"?"":hash};}

/***/ }),

/***/ 2130:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _react=__webpack_require__(2897);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var GTAG_SRC='https://www.googletagmanager.com/gtag/js';exports.onRenderBody=function(_ref,pluginOptions){var setHeadComponents=_ref.setHeadComponents,setPostBodyComponents=_ref.setPostBodyComponents;var isPluginEnabled=stringToBool(({}).GATSBY_GTAG_DEBUG)||"production"==='production';if(!pluginOptions.trackingId||!isPluginEnabled){return null;}var anonymize=pluginOptions.anonymize||false;var gtagScript=_react2.default.createElement('script',{async:true,key:'gatsby-plugin-gtag-gtag-js',src:GTAG_SRC+'?id='+pluginOptions.trackingId});var scriptStr='\n    window.GATSBY_GTAG_PLUGIN_GA_TRACKING_ID = (\n      \''+pluginOptions.trackingId+'\'\n    );\n    window.GATSBY_GTAG_PLUGIN_ANONYMIZE = '+anonymize+';\n\n    var options = {\n      send_page_view: false\n    };\n    if ('+anonymize+') {\n      options.anonymize_ip = true;\n    }\n\n    window.dataLayer = window.dataLayer || [];\n    function gtag(){dataLayer.push(arguments);}\n    window.gtag = gtag;\n    gtag(\'js\', new Date());\n    gtag(\'config\', \''+pluginOptions.trackingId+'\', options);\n  ';var trackScript=_react2.default.createElement('script',{key:'gatsby-plugin-gtag-inline-script',dangerouslySetInnerHTML:{__html:scriptStr}});var setComponents=pluginOptions.head?setHeadComponents:setPostBodyComponents;return setComponents([gtagScript,trackScript]);};function stringToBool(s){if(!s){return false;}var sNorm=s.trim().toLowerCase();if(!sNorm.length){return false;}return sNorm==='true'||sNorm==='1';}

/***/ }),

/***/ 6211:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
exports.wrapPageElement = __webpack_require__(8840);

/***/ }),

/***/ 8840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
var React=__webpack_require__(2897);var preferDefault=function preferDefault(m){return m&&m.default||m;};var Layout;try{Layout=preferDefault(__webpack_require__(7252));}catch(e){if(e.toString().indexOf("Error: Cannot find module")!==-1){throw new Error("Couldn't find layout component at \""+"/usr/local/app/other/koa-booster-page/src/templates/docs.js"+".\n\n"+"Please create layout component in that location or specify path to layout component in gatsby-config.js");}else{// Logging the error for debugging older browsers as there is no way
// to wrap the thrown error in a try/catch.
console.error(e);throw e;}}// eslint-disable-next-line react/prop-types,react/display-name
module.exports=function(_ref){var element=_ref.element,props=_ref.props;return/*#__PURE__*/React.createElement(Layout,props,element);};

/***/ }),

/***/ 9814:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
exports.__esModule=true;exports.onRenderBody=void 0;var _reactHelmet=__webpack_require__(4593);var onRenderBody=function onRenderBody(_ref){var setHeadComponents=_ref.setHeadComponents,setHtmlAttributes=_ref.setHtmlAttributes,setBodyAttributes=_ref.setBodyAttributes;var helmet=_reactHelmet.Helmet.renderStatic();// These action functions were added partway through the Gatsby 1.x cycle.
if(setHtmlAttributes){setHtmlAttributes(helmet.htmlAttributes.toComponent());}if(setBodyAttributes){setBodyAttributes(helmet.bodyAttributes.toComponent());}setHeadComponents([helmet.title.toComponent(),helmet.link.toComponent(),helmet.meta.toComponent(),helmet.noscript.toComponent(),helmet.script.toComponent(),helmet.style.toComponent(),helmet.base.toComponent()]);};exports.onRenderBody=onRenderBody;

/***/ }),

/***/ 6313:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var React=_interopRequireWildcard(__webpack_require__(2897));var _gatsby=__webpack_require__(2031);var _path=__webpack_require__(1423);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}// TODO: Remove for v3 - Fix janky path/asset prefixing
var withPrefix=_gatsby.withAssetPrefix||_gatsby.withPrefix;exports.onRenderBody=function(_ref,pluginOptions){var setHeadComponents=_ref.setHeadComponents;var output=pluginOptions.output,createLinkInHead=pluginOptions.createLinkInHead;if(!createLinkInHead){return;}setHeadComponents([/*#__PURE__*/React.createElement("link",{key:"gatsby-plugin-sitemap",rel:"sitemap",type:"application/xml",href:withPrefix(_path.posix.join(output,"/sitemap-index.xml"))})]);};

/***/ }),

/***/ 2822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({React: react__WEBPACK_IMPORTED_MODULE_0__});

/***/ }),

/***/ 2197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMDXScope": () => (/* binding */ useMDXScope),
/* harmony export */   "MDXScopeProvider": () => (/* binding */ MDXScopeProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const GatsbyMDXScopeContext=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});const useMDXScope=scope=>{const contextScope=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(GatsbyMDXScopeContext);return scope||contextScope;};const MDXScopeProvider=({__mdxScope,children})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GatsbyMDXScopeContext.Provider,{value:__mdxScope},children);

/***/ }),

/***/ 929:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wrapRootElement": () => (/* binding */ wrapRootElement)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: external "/usr/local/app/other/koa-booster-page/node_modules/react/index.js"
var index_js_ = __webpack_require__(2897);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-mdx/context.js
var context = __webpack_require__(2197);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-mdx/loaders/mdx-components.js
var mdx_components = __webpack_require__(6086);
;// CONCATENATED MODULE: ./node_modules/gatsby-plugin-mdx/loaders/mdx-scopes.js
var scope_0=__webpack_require__(2822)/* ["default"] */ .Z;/* harmony default export */ const mdx_scopes = (Object.assign({},scope_0));
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.esm.js
var emotion_react_esm = __webpack_require__(6657);
;// CONCATENATED MODULE: ./node_modules/gatsby-plugin-mdx/wrap-root-element.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,defineProperty/* default */.Z)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}/**
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
 */const componentsAndGuards={};const componentFromGuards=arr=>function GatsbyMDXComponentFinder(props){const{Component}=arr.find(({guard})=>guard?guard(props):true);return (0,emotion_react_esm/* jsx */.tZ)(Component,props);};mdx_components.plugins.forEach(({guards={},components})=>{Object.entries(components).forEach(([componentName,Component])=>{if(componentsAndGuards[componentName]){componentsAndGuards.push({guard:guards[componentName],Component});}else{componentsAndGuards[componentName]=[{guard:guards[componentName],Component}];}});});const components=Object.entries(componentsAndGuards).map(([name,arr])=>{return{[name]:componentFromGuards(arr.concat({guard:undefined,Component:name}))};}).reduce((acc,obj)=>{return _objectSpread(_objectSpread({},acc),obj);},{});// merge any components in wrapRootElement above this wrapRoot
const MDXConsumer=(0,esm.withMDXComponents)(({components:componentsFromContext,children})=>(0,emotion_react_esm/* jsx */.tZ)(context.MDXScopeProvider,{__mdxScope:mdx_scopes},(0,emotion_react_esm/* jsx */.tZ)(esm.MDXProvider,{components:_objectSpread(_objectSpread({},componentsFromContext),components)},children)));const WrapRootElement=({element})=>(0,emotion_react_esm/* jsx */.tZ)(MDXConsumer,null,element);/* harmony default export */ const wrap_root_element = (WrapRootElement);
;// CONCATENATED MODULE: ./node_modules/gatsby-plugin-mdx/gatsby-ssr.js
const wrapRootElement=wrap_root_element;

/***/ }),

/***/ 6660:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _defineProperty=__webpack_require__(9713);var _objectWithoutProperties=__webpack_require__(6479);const _excluded=["scope","children"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}const React=__webpack_require__(2897);const{mdx}=__webpack_require__(3905);const{useMDXScope}=__webpack_require__(2197);module.exports=function MDXRenderer(_ref){let{scope,children}=_ref,props=_objectWithoutProperties(_ref,_excluded);const mdxScope=useMDXScope(scope);// Memoize the compiled component
const End=React.useMemo(()=>{if(!children){return null;}const fullScope=_objectSpread({// React is here just in case the user doesn't pass them in
// in a manual usage of the renderer
React,mdx},mdxScope);const keys=Object.keys(fullScope);const values=keys.map(key=>fullScope[key]);const fn=new Function(`_fn`,...keys,`${children}`);return fn({},...values);},[children,scope]);return React.createElement(End,_objectSpread({},props));};

/***/ }),

/***/ 6086:
/***/ ((module) => {

module.exports={plugins:[]};

/***/ }),

/***/ 230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTML)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8514);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6657);
class HTML extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)("html",(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({},this.props.htmlAttributes,{lang:"en"}),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)("head",null,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)("meta",{charSet:"utf-8"}),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(_config__WEBPACK_IMPORTED_MODULE_2___default().siteMetadata.ogImage)?(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)("meta",{property:"og:image",content:(_config__WEBPACK_IMPORTED_MODULE_2___default().siteMetadata.ogImage)}):null,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)("meta",{property:"twitter:card",content:"summary_large_image"}),(_config__WEBPACK_IMPORTED_MODULE_2___default().siteMetadata.ogImage)?(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)("meta",{property:"twitter:image",content:(_config__WEBPACK_IMPORTED_MODULE_2___default().siteMetadata.ogImage)}):null,(_config__WEBPACK_IMPORTED_MODULE_2___default().siteMetadata.favicon)?(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)("link",{rel:"shortcut icon",type:"image/svg",href:(_config__WEBPACK_IMPORTED_MODULE_2___default().siteMetadata.favicon)}):null,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)("noscript",{key:"noscript"}),this.props.headComponents),(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)("body",this.props.bodyAttributes,this.props.preBodyComponents,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)("div",{key:`body`,id:"___gatsby",dangerouslySetInnerHTML:{__html:this.props.body}}),this.props.postBodyComponents,(0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__/* .jsx */ .tZ)("script",{defer:true,dangerouslySetInnerHTML:{__html:`
            function navBarClose() {
              document.getElementById("navbar").classList.toggle("responsive");
            }
            document.addEventListener('click',function(e){
              if(e.target && e.target.tagName.toLowerCase() === 'a'){
                navBarClose();
              }
           });
            `}})));}}HTML.propTypes={htmlAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),headComponents:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),bodyAttributes:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),preBodyComponents:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),body:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),postBodyComponents:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)};

/***/ }),

/***/ 7252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXRuntimeTest)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: external "/usr/local/app/other/koa-booster-page/node_modules/react/index.js"
var index_js_ = __webpack_require__(2897);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(4593);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-mdx/mdx-renderer.js
var mdx_renderer = __webpack_require__(6660);
var mdx_renderer_default = /*#__PURE__*/__webpack_require__.n(mdx_renderer);
;// CONCATENATED MODULE: ./src/components/theme.js
/* harmony default export */ const theme = ({fonts:{mono:'"SF Mono", "Roboto Mono", Menlo, monospace'}});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@emotion/styled/base/dist/emotion-styled-base.esm.js + 1 modules
var emotion_styled_base_esm = __webpack_require__(5858);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(4925);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.js + 1 modules
var dist = __webpack_require__(4544);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(7410);
;// CONCATENATED MODULE: ./src/custom/config/codeBlockLanguages.js
function applyLanguages(_Prism){/**
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
   */}function getTheme(_Prism){/**
   * Here you have the possibility to change the prism highlighting.
   */return __webpack_require__(1418)/* ["default"] */ .Z;}
// EXTERNAL MODULE: ./node_modules/react-loadable/lib/index.js
var lib = __webpack_require__(8356);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.esm.js
var emotion_react_esm = __webpack_require__(6657);
;// CONCATENATED MODULE: ./src/components/mdxComponents/loading.js
const LoadingProvider=_ref=>{let props=(0,esm_extends/* default */.Z)({},_ref);return (0,emotion_react_esm/* jsx */.tZ)("div",null);};/* harmony default export */ const loading = (LoadingProvider);
;// CONCATENATED MODULE: ./src/components/mdxComponents/codeBlock.js
const _excluded=["children"];const codeBlock_theme=getTheme();/** Removes the last token from a code example if it's empty. */function cleanTokens(tokens){const tokensLength=tokens.length;if(tokensLength===0){return tokens;}const lastToken=tokens[tokensLength-1];if(lastToken.length===1&&lastToken[0].empty){return tokens.slice(0,tokensLength-1);}return tokens;}const LoadableComponent=lib_default()({loader:()=>__webpack_require__.e(/* import() */ 773).then(__webpack_require__.bind(__webpack_require__, 1773)),loading:loading});/* eslint-disable react/jsx-key */const CodeBlock=_ref=>{let{children:exampleCode}=_ref,props=(0,objectWithoutProperties/* default */.Z)(_ref,_excluded);const[_,updateView]=index_js_.useState(0);index_js_.useEffect(()=>{var windowPrism=window.Prism;window.Prism=prism/* default */.Z;applyLanguages(prism/* default */.Z);window.Prism=windowPrism;updateView({data:Date.now()});},[]);if(props["react-live"]){return (0,emotion_react_esm/* jsx */.tZ)(LoadableComponent,{code:exampleCode});}else{return (0,emotion_react_esm/* jsx */.tZ)(dist/* default */.ZP,(0,esm_extends/* default */.Z)({},dist/* defaultProps */.lG,{Prism:prism/* default */.Z,code:exampleCode,language:props.className?props.className.split("-")[1]:"javascript",theme:codeBlock_theme}),({className,style,tokens,getLineProps,getTokenProps})=>(0,emotion_react_esm/* jsx */.tZ)("pre",{className:className+" pre",style:style,p:3},cleanTokens(tokens).map((line,i)=>{let lineClass={};let isDiff=false;if(line[0]&&line[0].content.length&&line[0].content[0]==="+"){lineClass={backgroundColor:"rgba(76, 175, 80, 0.2)"};isDiff=true;}else if(line[0]&&line[0].content.length&&line[0].content[0]==="-"){lineClass={backgroundColor:"rgba(244, 67, 54, 0.2)"};isDiff=true;}else if(line[0]&&line[0].content===""&&line[1]&&line[1].content==="+"){lineClass={backgroundColor:"rgba(76, 175, 80, 0.2)"};isDiff=true;}else if(line[0]&&line[0].content===""&&line[1]&&line[1].content==="-"){lineClass={backgroundColor:"rgba(244, 67, 54, 0.2)"};isDiff=true;}const lineProps=getLineProps({line,key:i});lineProps.style=lineClass;const diffStyle={userSelect:"none",MozUserSelect:"-moz-none",WebkitUserSelect:"none"};let splitToken;return (0,emotion_react_esm/* jsx */.tZ)("div",(0,esm_extends/* default */.Z)({},lineProps,{key:line+i}),line.map((token,key)=>{if(isDiff){if((key===0||key===1)&(token.content.charAt(0)==="+"||token.content.charAt(0)==="-")){if(token.content.length>1){splitToken={types:["template-string","string"],content:token.content.slice(1)};const firstChar={types:["operator"],content:token.content.charAt(0)};return (0,emotion_react_esm/* jsx */.tZ)(index_js_.Fragment,{key:token+key},(0,emotion_react_esm/* jsx */.tZ)("span",(0,esm_extends/* default */.Z)({},getTokenProps({token:firstChar,key}),{style:diffStyle})),(0,emotion_react_esm/* jsx */.tZ)("span",getTokenProps({token:splitToken,key})));}else{return (0,emotion_react_esm/* jsx */.tZ)("span",(0,esm_extends/* default */.Z)({},getTokenProps({token,key}),{style:diffStyle}));}}}return (0,emotion_react_esm/* jsx */.tZ)("span",getTokenProps({token,key}));}));})));}};/* harmony default export */ const codeBlock = (CodeBlock);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(2031);
// EXTERNAL MODULE: ./node_modules/is-absolute-url/index.js
var is_absolute_url = __webpack_require__(3444);
var is_absolute_url_default = /*#__PURE__*/__webpack_require__.n(is_absolute_url);
;// CONCATENATED MODULE: ./src/components/mdxComponents/anchor.js
const anchor_excluded=["children"];const AnchorTag=_ref=>{let{children:link}=_ref,props=(0,objectWithoutProperties/* default */.Z)(_ref,anchor_excluded);if(link){if(is_absolute_url_default()(props.href)){return (0,emotion_react_esm/* jsx */.tZ)("a",{href:props.href,target:"_blank",rel:"noopener noreferrer"},link);}else{return (0,emotion_react_esm/* jsx */.tZ)(gatsby_browser_entry.Link,(0,esm_extends/* default */.Z)({to:props.href},props),link);}}else{return null;}};/* harmony default export */ const mdxComponents_anchor = (AnchorTag);
;// CONCATENATED MODULE: ./src/components/mdxComponents/index.js
const StyledPre=/*#__PURE__*/(0,emotion_styled_base_esm/* default */.Z)("pre", true?{target:"ev1gfv90"}:0)("padding:16px;background:",props=>props.theme.colors.preFormattedText,";"+( true?"":0));const appendString=children=>{if(Array.isArray(children)){return children.reduce((acc,current)=>{if(typeof current==="string"){return acc.concat(current);}else if(typeof current==="object"){return acc.concat(current.props.children);}else{return acc;}},"");}else{return children;}};/* harmony default export */ const mdxComponents = ({h1:props=>(0,emotion_react_esm/* jsx */.tZ)("h1",(0,esm_extends/* default */.Z)({className:"heading1",id:appendString(props.children).replace(/\s+/g,"").toLowerCase()},props)),h2:props=>(0,emotion_react_esm/* jsx */.tZ)("h2",(0,esm_extends/* default */.Z)({className:"heading2",id:appendString(props.children).replace(/\s+/g,"").toLowerCase()},props)),h3:props=>(0,emotion_react_esm/* jsx */.tZ)("h3",(0,esm_extends/* default */.Z)({className:"heading3",id:appendString(props.children).replace(/\s+/g,"").toLowerCase()},props)),h4:props=>(0,emotion_react_esm/* jsx */.tZ)("h4",(0,esm_extends/* default */.Z)({className:"heading4",id:appendString(props.children).replace(/\s+/g,"").toLowerCase()},props)),h5:props=>(0,emotion_react_esm/* jsx */.tZ)("h5",(0,esm_extends/* default */.Z)({className:"heading5",id:appendString(props.children).replace(/\s+/g,"").toLowerCase()},props)),h6:props=>(0,emotion_react_esm/* jsx */.tZ)("h6",(0,esm_extends/* default */.Z)({className:"heading6",id:appendString(props.children).replace(/\s+/g,"").toLowerCase()},props)),p:props=>(0,emotion_react_esm/* jsx */.tZ)("p",(0,esm_extends/* default */.Z)({className:"paragraph"},props)),pre:props=>(0,emotion_react_esm/* jsx */.tZ)(StyledPre,null,(0,emotion_react_esm/* jsx */.tZ)("pre",props)),code:codeBlock,a:mdxComponents_anchor// TODO add `img`
// TODO add `blockquote`
// TODO add `ul`
// TODO add `li`
// TODO add `table`
});
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-8d26346b.esm.js
var emotion_element_8d26346b_esm = __webpack_require__(5734);
;// CONCATENATED MODULE: ./src/components/theme/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,defineProperty/* default */.Z)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}const baseTheme={fonts:{mono:'"SF Mono", "Roboto Mono", Menlo, monospace'}};const lightTheme=_objectSpread(_objectSpread({},baseTheme),{},{colors:{background:"#fff",heading:"#000",text:"#3B454E",preFormattedText:"rgb(245, 247, 249)",link:"#1000EE"}});const darkTheme=_objectSpread(_objectSpread({},baseTheme),{},{colors:{background:"#001933",heading:"#fff",text:"#fff",preFormattedText:"#000",link:"#1ED3C6"}});
;// CONCATENATED MODULE: ./node_modules/react-github-btn/index.js


class GitHubButton extends index_js_.PureComponent {
  constructor (props) {
    super(props)
    this.$ = index_js_default().createRef()
    this._ = index_js_default().createRef()
  }
  render () {
    return index_js_default().createElement('span', { ref: this.$ }, index_js_default().createElement('a', { ...this.props, ref: this._ }, this.props.children))
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
    Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9984)).then(({ render }) => {
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

/* harmony default export */ const react_github_btn = (GitHubButton);

;// CONCATENATED MODULE: ./src/components/link.js
const link_excluded=["to"];const Link=_ref=>{let{to}=_ref,props=(0,objectWithoutProperties/* default */.Z)(_ref,link_excluded);return is_absolute_url_default()(to)?(0,emotion_react_esm/* jsx */.tZ)("a",(0,esm_extends/* default */.Z)({href:to},props),props.children):(0,emotion_react_esm/* jsx */.tZ)(gatsby_browser_entry.Link,(0,esm_extends/* default */.Z)({to:to},props));};/* harmony default export */ const components_link = (Link);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(8514);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
;// CONCATENATED MODULE: ./src/components/images/night.png
/* harmony default export */ const night = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOfSURBVEiJlZVLaFxVGMd/333NJG2a+ujUJnGSSWljGvPoQ0tBbIooulDoQgSpEou4UOqiLlzpxoVFEIsgaotaaEhBEXVV8EUXgrao0SYxk6ROjCUxfaQvm8fMPfd+LqZJ5k4ySfxW93yP/+Ocw7mwTOhw21odbG8rzuf6N3fl+iqNDm5rXGreKlXwB1oe8vtr0yanF4JY1YeR2lDzbgnHn5JwxvYJjuhwR7wUjixUXBc3Wfsk/lg7sUYkvmXC1vB+qe3K5IZa90s2cxTNWQASa4B4C0AAfO8kOx8pxnMi4OdaEmbmcg9mIoF7NxLfAiIvSLIrAyChjswpsysg3jy7tEEuLeZgbotUsQL/SjdmIoF4SPl2QM7YNce/mO1xG85+p27dy3lp1XMbIPCrfbGsY0kCM7DxWzWXqgCINQIugh4TQSMuYRRAxSnM/Ss7jvglCfy+1gfwx/bMuhWv/lbR/rp4wLZw88qzPYIcBDIscpazkZdhXf2YMLy1DwnIq1Muxv5eMLCp5zPta6qQTb03oRdVDkO7XYpAdLhtrZkcuoKavIp4MxK7ByDrJDtLXr+VhmWy/oE5cECkfPYzpiNP37ZSIE23pLSvyVtAIGR3RTLizn0ay25ZEXjm3vVGL/wWxCrfU22PXH1LMVXR7lzhYu+y4H+1bjWTf45jV6/Bq38+OF/zTYTAEnUjAzozb0bp0H+eW7cUgdT93o274QxeDQChhK9GCELcy5GJILKsDHxzaFkX4qUJp99F5agrzrWIgFy68SPxM/vnMw6y5glg/uYJctBOHn9nOaLCyJ1/ZqeE4WrLldgHUTkGzY1EU+jb/si+t4oPsFSYkX3PWqqnLJGdAmD+SNzU4PqquQ6rDKl4LOIi70T7FN6wA/crSR2bKaypPmmbUfdBCezXEN0DqC1hgwAEg42Hwmwmcjji1UPZ9lIipxB+Ah1FLR90A3AfcGdBz5dOsnOv5Nmxgv7ENQ2uV0RgynYgXmolu1Ic03YQbJPUiXT+xyGEtnPXw1heGG37Bc2e+9/oAq9I6kQaCp5r2Xz2tHqpA4hb8DwrzHSjUz9COL0icEXftJOd7xeQRcMMNT1ObuxzDafcaMVGvFrw6sC6HWTB6DTwkpPs/KTIzSIqhrauM8GNTzHjuwsfwvkpB6w1IHEQVGV1r+vc8aJsPPXDgtaSXgEd2FXtc/V1gslHLabWa5jzEAXsACm/IVbZz8iqw05Dz8lSGP8BjRZeDZkbZsEAAAAASUVORK5CYII=");
;// CONCATENATED MODULE: ./src/components/images/day.png
/* harmony default export */ const day = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANGSURBVEiJndVPbNRVEAfwz9vd/q8tBQtoxSYYDKYmejMGD3DxYloMiRoT22IEDQcPno3xoFclMf6JHrDFyIVEI3g2eiDoRWOMfygqNrSkoeAWCtIu230e3m+77e6KCZO8vH3zZuY7M+/7mxVjVFu7C+vPt7mmh4fi+eEDMUYFVZkdeZU7dhgIzxOj25ULe3fJx6PYamZkDYD4rRDmmgafDIdE3aIJbcrKxkQF4/GtBtuY/43KGVBxOsT/S3YijAomEVBCBe0geNlYfLfBZ3bfJmFlp7u/ONUcYCIMCw6jL1vhFikUURS9Zn88Vn9ZaOJA8DTuA3n0Zjm3ZlDL2VrASpZE8CwaABormAgPC75Cny7cmYE0kwou4Rq4IWeP0fhdc4DjIe+GD0QvIKcbmzOrtl56t9O2gRBYvsKVcyz9ne7nsQgiPhUdtD8uNVYwGRbQK497qu3ZzsYHUuB1EimepTiVKplBGZQM6rI7liFX5/Ur0rPmpYw3ZcEL7fRso3eQQgcCfffT0Z+i9K3GOFMNvh7gWOjDYGpJpuvbkQK1dND/IF1b6Oynf4jW7jU2a3zY6uPQ3whw0/u4S5DYIqsAOjdrkKqutSfbVcncL+ejOoAQsC39VGN9yOiTa8LmXIGOx8h11RxqzzTgeHLOAGKUM4pFFdzMzJYX0n79YiPAP/O0PUSlHTE9cCXdCJ7zVFxZA4DReA4/gKVMd/WvtJcWKf6e6FlapPgHS0UW3uPyN9b58IuxOFU91Ne+E+kL7cb1Oa5O0zPI0kJaa+XaLIszif21q4x2if+1ClLP/iRrUfYNufQTF79P2ceY2lFaZP5HLqaCFaUxmOSsT3RWD42j4mh4RnQEnTZYP+pCLh1Se2uZF0FZdNC0o16Plf8GgMnwOZ5Eot9GiefVmbQiDbtitif52njcUx+q+TSNTgoZQAlzddblJj7ByWah0htc2LvL7L5Nq9r98YhBLSo2481Vfbkh+DtytljWaiy+3QwgxOnhIfl4AmdoGTXw2eUGq8lwWNCDD1WUBC+hYNyLTf9iZ554RAiPG/jyjYKcR7E1wa3sxKkGh/H4Sp3mULNsVyVvTgxTqYIYmRk5oOK0e0/8fEvH25B/AZyRWA6LDlu9AAAAAElFTkSuQmCC");
;// CONCATENATED MODULE: ./src/components/DarkModeSwitch.js
const StyledSwitch=/*#__PURE__*/(0,emotion_styled_base_esm/* default */.Z)("div", true?{target:"e1c69wq20"}:0)("display:flex;justify-content:flex-end;width:100%;padding:0 20px 0 25px;.switch{position:relative;display:inline-block;width:50px;height:20px;}.switch input{opacity:0;width:0;height:0;}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:0.4s;transition:0.4s;}.slider:before{position:absolute;content:\"\";height:30px;width:30px;left:0px;bottom:4px;top:0;bottom:0;margin:auto 0;-webkit-transition:0.4s;transition:0.4s;box-shadow:0 0px 15px #2020203d;background:white url(",night,");background-repeat:no-repeat;background-position:center;}input:checked+.slider{background:linear-gradient(to right, #fefb72, #f0bb31);}input:checked+.slider:before{-webkit-transform:translateX(24px);-ms-transform:translateX(24px);transform:translateX(24px);background:white url(",day,");background-repeat:no-repeat;background-position:center;}.slider.round{border-radius:34px;}.slider.round:before{border-radius:50%;}"+( true?"":0));const DarkModeSwitch=({isDarkThemeActive,toggleActiveTheme})=>(0,emotion_react_esm/* jsx */.tZ)(StyledSwitch,null,(0,emotion_react_esm/* jsx */.tZ)("label",{id:"switch",className:"switch"},(0,emotion_react_esm/* jsx */.tZ)("input",{type:"checkbox",id:"slider",onChange:toggleActiveTheme,checked:isDarkThemeActive?false:true}),(0,emotion_react_esm/* jsx */.tZ)("span",{className:"slider round"})));
;// CONCATENATED MODULE: ./src/components/images/opened.js
const OpenedSvg=()=>(0,emotion_react_esm/* jsx */.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24"},(0,emotion_react_esm/* jsx */.tZ)("path",{d:"M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"}));/* harmony default export */ const opened = (OpenedSvg);
;// CONCATENATED MODULE: ./src/components/images/closed.js
const ClosedSvg=()=>(0,emotion_react_esm/* jsx */.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24"},(0,emotion_react_esm/* jsx */.tZ)("path",{d:"M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"}));/* harmony default export */ const images_closed = (ClosedSvg);
;// CONCATENATED MODULE: ./src/components/sidebar/treeNode.js
const treeNode_excluded=["className","setCollapsed","collapsed","url","title","items"];const TreeNode=_ref=>{let{className="",setCollapsed,collapsed,url,title,items}=_ref,rest=(0,objectWithoutProperties/* default */.Z)(_ref,treeNode_excluded);const isCollapsed=collapsed[url];const collapse=()=>{setCollapsed(url);};const hasChildren=items.length!==0;let location;if(typeof document!="undefined"){location=document.location;}const active=location&&(location.pathname===url||location.pathname===(config_default()).gatsby.pathPrefix+url);const calculatedClassName=`${className} item ${active?"active":""}`;return (0,emotion_react_esm/* jsx */.tZ)("li",{className:calculatedClassName},title&&(0,emotion_react_esm/* jsx */.tZ)(components_link,{to:url},title,!(config_default()).sidebar.frontLine&&title&&hasChildren?(0,emotion_react_esm/* jsx */.tZ)("button",{onClick:collapse,"aria-label":"collapse",className:"collapser"},!isCollapsed?(0,emotion_react_esm/* jsx */.tZ)(opened,null):(0,emotion_react_esm/* jsx */.tZ)(images_closed,null)):null),!isCollapsed&&hasChildren?(0,emotion_react_esm/* jsx */.tZ)("ul",null,items.map((item,index)=>(0,emotion_react_esm/* jsx */.tZ)(TreeNode,(0,esm_extends/* default */.Z)({key:item.url+index.toString(),setCollapsed:setCollapsed,collapsed:collapsed},item)))):null);};/* harmony default export */ const treeNode = (TreeNode);
;// CONCATENATED MODULE: ./src/components/sidebar/tree.js
function tree_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function tree_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){tree_ownKeys(Object(source),true).forEach(function(key){(0,defineProperty/* default */.Z)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{tree_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}const calculateTreeData=edges=>{const originalData=(config_default()).sidebar.ignoreIndex?edges.filter(({node:{fields:{slug}}})=>slug!=="/"):edges;const tree=originalData.reduce((accu,{node:{fields:{slug,title}}})=>{const parts=slug.split("/");let{items:prevItems}=accu;const slicedParts=(config_default()).gatsby&&(config_default()).gatsby.trailingSlash?parts.slice(1,-2):parts.slice(1,-1);for(const part of slicedParts){let tmp=prevItems&&prevItems.find(({label})=>label==part);if(tmp){if(!tmp.items){tmp.items=[];}}else{tmp={label:part,items:[]};prevItems.push(tmp);}prevItems=tmp.items;}const slicedLength=(config_default()).gatsby&&(config_default()).gatsby.trailingSlash?parts.length-2:parts.length-1;const existingItem=prevItems.find(({label})=>label===parts[slicedLength]);if(existingItem){existingItem.url=slug;existingItem.title=title;}else{prevItems.push({label:parts[slicedLength],url:slug,items:[],title});}return accu;},{items:[]});const{sidebar:{forcedNavOrder=[]}}=(config_default());const tmp=[...forcedNavOrder];if((config_default()).gatsby&&(config_default()).gatsby.trailingSlash){}tmp.reverse();return tmp.reduce((accu,slug)=>{const parts=slug.split("/");let{items:prevItems}=accu;const slicedParts=(config_default()).gatsby&&(config_default()).gatsby.trailingSlash?parts.slice(1,-2):parts.slice(1,-1);for(const part of slicedParts){let tmp=prevItems.find(item=>item&&item.label==part);if(tmp){if(!tmp.items){tmp.items=[];}}else{tmp={label:part,items:[]};prevItems.push(tmp);}if(tmp&&tmp.items){prevItems=tmp.items;}}// sort items alphabetically.
prevItems.map(item=>{item.items=item.items.sort(function(a,b){if(a.label<b.label)return-1;if(a.label>b.label)return 1;return 0;});});const slicedLength=(config_default()).gatsby&&(config_default()).gatsby.trailingSlash?parts.length-2:parts.length-1;const index=prevItems.findIndex(({label})=>label===parts[slicedLength]);if(prevItems.length){accu.items.unshift(prevItems.splice(index,1)[0]);}return accu;},tree);};const Tree=({edges})=>{let{0:treeData}=(0,index_js_.useState)(()=>{return calculateTreeData(edges);});const defaultCollapsed={};treeData.items.forEach(item=>{if((config_default()).sidebar.collapsedNav&&config_default().sidebar.collapsedNav.includes(item.url)){defaultCollapsed[item.url]=true;}else{defaultCollapsed[item.url]=false;}});const{0:collapsed,1:setCollapsed}=(0,index_js_.useState)(defaultCollapsed);const toggle=url=>{setCollapsed(tree_objectSpread(tree_objectSpread({},collapsed),{},{[url]:!collapsed[url]}));};return (0,emotion_react_esm/* jsx */.tZ)(treeNode,(0,esm_extends/* default */.Z)({className:`${(config_default()).sidebar.frontLine?"showFrontLine":"hideFrontLine"} firstLevel`,setCollapsed:toggle,collapsed:collapsed},treeData));};/* harmony default export */ const tree = (Tree);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./node_modules/react-feather/dist/icons/external-link.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var ExternalLink = (0,index_js_.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/index_js_default().createElement("svg", _extends({
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
  }, rest), /*#__PURE__*/index_js_default().createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  }), /*#__PURE__*/index_js_default().createElement("polyline", {
    points: "15 3 21 3 21 9"
  }), /*#__PURE__*/index_js_default().createElement("line", {
    x1: "10",
    y1: "14",
    x2: "21",
    y2: "3"
  }));
});
ExternalLink.propTypes = {
  color: (prop_types_default()).string,
  size: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])
};
ExternalLink.displayName = 'ExternalLink';
/* harmony default export */ const external_link = (ExternalLink);
;// CONCATENATED MODULE: ./src/components/sidebar/index.js
const sidebar_excluded=["className","active","level"];function _EMOTION_STRINGIFIED_CSS_ERROR__(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}// eslint-disable-next-line no-unused-vars
const ListItem=/*#__PURE__*/(0,emotion_styled_base_esm/* default */.Z)(_ref=>{let{className,active,level}=_ref,props=(0,objectWithoutProperties/* default */.Z)(_ref,sidebar_excluded);return (0,emotion_react_esm/* jsx */.tZ)("li",{className:className},(0,emotion_react_esm/* jsx */.tZ)("a",(0,esm_extends/* default */.Z)({href:props.to},props,{target:"_blank",rel:"noopener noreferrer"}),props.children));}, true?{target:"e1sbq3r12"}:0)("list-style:none;a{color:#5c6975;text-decoration:none;font-weight:",({level})=>level===0?700:400,";padding:0.45rem 0 0.45rem ",props=>2+(props.level||0)*1,"rem;display:block;position:relative;&:hover{color:#1ed3c6!important;}",props=>props.active&&`
      // color: #663399;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `,"svg{float:right;margin-right:1rem;}}"+( true?"":0));const Sidebar=/*#__PURE__*/(0,emotion_styled_base_esm/* default */.Z)("aside", true?{target:"e1sbq3r11"}:0)( true?{name:"z7d7m6",styles:"width:100%;height:100vh;overflow:auto;position:fixed;padding-left:0px;position:-webkit-sticky;position:-moz-sticky;position:sticky;top:0;padding-right:0;-webkit-box-shadow:-1px 0px 4px 1px rgba(175, 158, 232, 0.4);@media only screen and (max-width: 1023px){width:100%;height:100vh;}@media (min-width: 767px) and (max-width: 1023px){padding-left:0;}@media only screen and (max-width: 767px){padding-left:0px;height:auto;}"}:0);const Divider=/*#__PURE__*/(0,emotion_styled_base_esm/* default */.Z)(props=>(0,emotion_react_esm/* jsx */.tZ)("li",props,(0,emotion_react_esm/* jsx */.tZ)("hr",null)), true?{target:"e1sbq3r10"}:0)( true?{name:"1q387v1",styles:"list-style:none;padding:0.5rem 0;hr{margin:0;padding:0;border:0;border-bottom:1px solid #ede7f3;}"}:0);const SidebarLayout=({location})=>(0,emotion_react_esm/* jsx */.tZ)(gatsby_browser_entry.StaticQuery,{query:"2619113677",render:({allMdx})=>{return (0,emotion_react_esm/* jsx */.tZ)(Sidebar,null,(config_default()).sidebar.title?(0,emotion_react_esm/* jsx */.tZ)("div",{className:"sidebarTitle hiddenMobile",dangerouslySetInnerHTML:{__html:(config_default()).sidebar.title}}):null,(0,emotion_react_esm/* jsx */.tZ)("ul",{className:"sideBarUL"},(0,emotion_react_esm/* jsx */.tZ)(tree,{edges:allMdx.edges}),(config_default()).sidebar.links&&(config_default()).sidebar.links.length>0&&(0,emotion_react_esm/* jsx */.tZ)(Divider,null),config_default().sidebar.links.map((link,key)=>{if(link.link!==""&&link.text!==""){return (0,emotion_react_esm/* jsx */.tZ)(ListItem,{key:key,to:link.link},link.text,(0,emotion_react_esm/* jsx */.tZ)(external_link,{size:14}));}})));}});/* harmony default export */ const sidebar = (SidebarLayout);
;// CONCATENATED MODULE: ./src/components/Header.js
const help=__webpack_require__(5609);const isSearchEnabled=(config_default()).header.search&&(config_default()).header.search.enabled?true:false;let searchIndices=[];if(isSearchEnabled&&(config_default()).header.search.indexName){searchIndices.push({name:`${(config_default()).header.search.indexName}`,title:`Results`,hitComp:`PageHit`});}const Header_LoadableComponent=lib_default()({loader:()=>__webpack_require__.e(/* import() */ 361).then(__webpack_require__.bind(__webpack_require__, 9361)),loading:loading});function myFunction(){var x=document.getElementById("navbar");if(x.className==="topnav"){x.className+=" responsive";}else{x.className="topnav";}}const StyledBgDiv=/*#__PURE__*/(0,emotion_styled_base_esm/* default */.Z)("div", true?{target:"e1217p0e0"}:0)("height:60px;box-shadow:0 3px 6px 0 rgba(0, 0, 0, 0.16);background-color:#f8f8f8;position:relative;display:none;background:",props=>props.isDarkThemeActive?"#001932":undefined,";@media (max-width: 767px){display:block;}"+( true?"":0));const Header=({location,isDarkThemeActive,toggleActiveTheme})=>(0,emotion_react_esm/* jsx */.tZ)(gatsby_browser_entry.StaticQuery,{query:"417421954",render:data=>{const logoImg=__webpack_require__(6909);const twitter=__webpack_require__(3288);const discordBrandsBlock=__webpack_require__(333);const twitterBrandsBlock=__webpack_require__(1353);const{site:{siteMetadata:{headerTitle,githubUrl,helpUrl,tweetText,logo,headerLinks}}}=data;const finalLogoLink=logo.link!==""?logo.link:"https://hasura.io/";return (0,emotion_react_esm/* jsx */.tZ)("div",{className:"navBarWrapper"},(0,emotion_react_esm/* jsx */.tZ)("nav",{className:"navBarDefault"},(0,emotion_react_esm/* jsx */.tZ)("div",{className:"navBarHeader"},(0,emotion_react_esm/* jsx */.tZ)(components_link,{to:finalLogoLink,className:"navBarBrand"},(0,emotion_react_esm/* jsx */.tZ)("img",{className:"img-responsive displayInline",src:logo.image!==""?logo.image:logoImg,alt:"logo"})),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"headerTitle displayInline",dangerouslySetInnerHTML:{__html:headerTitle}})),(config_default()).header.social?(0,emotion_react_esm/* jsx */.tZ)("ul",{className:"socialWrapper visibleMobileView",dangerouslySetInnerHTML:{__html:(config_default()).header.social}}):null,isSearchEnabled?(0,emotion_react_esm/* jsx */.tZ)("div",{className:"searchWrapper hiddenMobile navBarUL"},(0,emotion_react_esm/* jsx */.tZ)(Header_LoadableComponent,{collapse:true,indices:searchIndices})):null,(0,emotion_react_esm/* jsx */.tZ)("div",{id:"navbar",className:"topnav"},(0,emotion_react_esm/* jsx */.tZ)("div",{className:"visibleMobile"},(0,emotion_react_esm/* jsx */.tZ)(sidebar,{location:location}),(0,emotion_react_esm/* jsx */.tZ)("hr",null)),(0,emotion_react_esm/* jsx */.tZ)("ul",{className:"navBarUL navBarNav navBarULRight"},headerLinks.map((link,key)=>{if(link.link!==""&&link.text!==""){return (0,emotion_react_esm/* jsx */.tZ)("li",{key:key},(0,emotion_react_esm/* jsx */.tZ)("a",{className:"sidebarLink",href:link.link,target:"_blank",rel:"noopener noreferrer",dangerouslySetInnerHTML:{__html:link.text}}));}}),helpUrl!==""?(0,emotion_react_esm/* jsx */.tZ)("li",null,(0,emotion_react_esm/* jsx */.tZ)("a",{href:helpUrl},(0,emotion_react_esm/* jsx */.tZ)("img",{src:help,alt:"Help icon"}))):null,tweetText!==""?(0,emotion_react_esm/* jsx */.tZ)("li",null,(0,emotion_react_esm/* jsx */.tZ)("a",{href:"https://twitter.com/intent/tweet?&text="+tweetText,target:"_blank",rel:"noopener noreferrer"},(0,emotion_react_esm/* jsx */.tZ)("img",{className:"shareIcon",src:twitter,alt:"Twitter"}))):null,tweetText!==""||githubUrl!==""?(0,emotion_react_esm/* jsx */.tZ)("li",{className:"divider hiddenMobile"}):null,(config_default()).header.social?(0,emotion_react_esm/* jsx */.tZ)("li",{className:"hiddenMobile"},(0,emotion_react_esm/* jsx */.tZ)("ul",{className:"socialWrapper",dangerouslySetInnerHTML:{__html:(config_default()).header.social}})):null,githubUrl!==""?(0,emotion_react_esm/* jsx */.tZ)("li",{className:"githubBtn"},(0,emotion_react_esm/* jsx */.tZ)(react_github_btn,{href:githubUrl,"data-show-count":"true","aria-label":"Star on GitHub"},"Star")):null,(0,emotion_react_esm/* jsx */.tZ)("li",null,(0,emotion_react_esm/* jsx */.tZ)(DarkModeSwitch,{isDarkThemeActive:isDarkThemeActive,toggleActiveTheme:toggleActiveTheme}))))),(0,emotion_react_esm/* jsx */.tZ)(StyledBgDiv,{isDarkThemeActive:isDarkThemeActive},(0,emotion_react_esm/* jsx */.tZ)("div",{className:"navBarDefault removePadd"},(0,emotion_react_esm/* jsx */.tZ)("span",{onClick:myFunction,className:"navBarToggle",onKeyDown:myFunction,role:"button",tabIndex:0},(0,emotion_react_esm/* jsx */.tZ)("span",{className:"iconBar"}),(0,emotion_react_esm/* jsx */.tZ)("span",{className:"iconBar"}),(0,emotion_react_esm/* jsx */.tZ)("span",{className:"iconBar"}))),isSearchEnabled?(0,emotion_react_esm/* jsx */.tZ)("div",{className:"searchWrapper"},(0,emotion_react_esm/* jsx */.tZ)(Header_LoadableComponent,{collapse:true,indices:searchIndices})):null));}});/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./src/components/styles/GlobalStyles.js
function GlobalStyles_EMOTION_STRINGIFIED_CSS_ERROR_(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const baseStyles= true?{name:"h006jy",styles:"@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\");{}@import url(\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap\");{}*{margin:0;padding:0;box-sizing:border-box;font-display:swap;}::-webkit-input-placeholder{color:#c2c2c2;}:-ms-input-placeholder{color:#c2c2c2;}::placeholder{color:#c2c2c2;}html,body{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\",\"Roboto Light\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:16px;scroll-behavior:smooth;}a{transition:color 0.15s;}body{font-family:\"Roboto\";}.visibleMobile{display:none;}.visibleMobileView{display:none!important;}.video-responsive{position:relative;padding-bottom:56.2%;}a{text-decoration:none;}a:hover{text-decoration:none;}.displayInline{display:inline-block;}.navBarToggle{border:0px solid #fff;border-radius:4px;width:36px;height:33px;position:absolute;right:20px;padding:8px 5px;display:none;}.navBarToggle .iconBar{display:block;width:22px;height:2px;border-radius:1px;margin:0 auto;margin-top:4px;background-color:#001934;}.navBarToggle .iconBar:first-child{margin-top:0px;}.video-responsive iframe{position:absolute;width:100%;height:100%;}.diffNewLine{color:#22863a;background-color:#f0fff4;}.diffRemoveLine{color:red;background-color:#ffcccc;}.navBarParent{width:100%;float:left;display:flex;align-items:center;}.divider{height:30px;margin:0 15px;border-right:1px solid rgba(255, 255, 255, 0.3);}.navBarULRight{}.githubIcon{width:15px;margin-right:5px;}.githubSection{display:flex;align-items:center;color:#000;opacity:0.7;}.githubSection:hover{text-decoration:none;opacity:1;}.navbar-default .navbar-toggle .icon-bar{background-color:#fff!important;}.navbar-default .navbar-toggle:focus,.navbar-default .navbar-toggle:hover{background-color:#001933;}.headerWrapper{border-bottom:1px solid rgb(212, 218, 223);box-shadow:rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;display:flex;align-items:center;}.formElement{background-color:transparent;padding:4px;border-radius:5px;position:relative;}.formElement:focus{outline:none;border:none;}.formElement svg path{fill:#2fd2c5;}.searchInput{width:100%;background-color:rgba(28, 211, 198, 0.12)!important;border-width:0!important;color:#c2c2c2;padding:10px;border-radius:5px;color:#fff;opacity:0.6;padding-left:38px;max-width:600px;}.searchInput:focus,.searchInput:visited,.searchInput:hover,.searchInput:focus-within{outline:none;border:0;}.searchWrapper{padding-left:0px;padding-right:20px;flex:1;position:relative;}.searchWrapper a{font-weight:500;}.hitWrapper{background-color:#fff;padding:0.7em 1em 0.4em;border-radius:4px;position:absolute;width:80vw;max-width:30em;top:40px;border:1px solid #ccc;box-shadow:0 1px 4px 0 rgba(0, 0, 0, 0.16);height:auto;max-height:80vh;overflow:scroll;left:0;}.hitWrapper ul li{margin-top:0.7em;padding-top:0.7em;border-top:1px solid;list-style-type:none;}.hitWrapper ul li:first-child{border-top:0px;margin-top:0px;color:black!important;padding:0px;}.showResults{display:block;}.hideResults{display:none;}.hitWrapper span{color:black;font-size:14px;}.headerTitle{height:auto;font-size:16px;line-height:1.5;font-weight:300;color:#fff!important;margin-top:16px;text-transform:uppercase;}.headerTitle a{color:#fff;}.headerTitle a:hover{text-decoration:none;opacity:0.8;}.logoWrapper{padding:21px 0;padding-left:20px;}.logoContent{font-family:\"Roboto\";margin-left:16px;font-size:28px;line-height:1.5;font-weight:500;padding-right:10px;}.removePadd{padding:0!important;}.navBarDefault{background-color:#001934;border-radius:0;border-top:0;margin-bottom:0;border:0;display:flex;align-items:center;box-shadow:-1px 0px 4px 1px rgba(175, 158, 232, 0.4);-webkit-box-shadow:-1px 0px 4px 1px rgba(175, 158, 232, 0.4);-moz-box-shadow:-1px 0px 4px 1px rgba(175, 158, 232, 0.8);-o-box-shadow:-1px 0px 4px 1px rgba(175, 158, 232, 0.4);z-index:1;padding:15px;position:relative;height:80px;}.navBarHeader{min-width:335px;padding-right:20px;display:flex;align-items:center;}.navBarBrand{padding:0px 0px;display:flex;align-items:center;}.navBarBrand img{width:120px;margin-right:6px;display:inline-block;}.navBarUL li{list-style-type:none;}.navBarUL{-webkit-overflow-scrolling:touch;}.navBarUL li a{font-family:\"Roboto\";color:#fff!important;font-size:16px;font-weight:500;line-height:1em;opacity:1;padding:10px 15px;}.navBarNav{display:flex;align-items:center;}.navBarUL li a img,.navBarUL li a .shareIcon{width:20px;}.navBarUL li a:hover{opacity:0.7;}pre{border:0!important;background-color:rgb(245, 247, 249);}blockquote{color:rgb(116, 129, 141);margin:0px 0px 24px;padding:0px 0px 0px 12px;border-left:4px solid rgb(230, 236, 241);border-color:rgb(230, 236, 241);}.socialWrapper{display:flex;align-items:center;}.socialWrapper li{display:inline-block;}.socialWrapper li a{display:contents;}.discordBtn,.twitterBtn{border-radius:4px;border:solid 1px #d1d2d3;background-color:#f1f5f8;width:20px;height:20px;padding-top:2px;margin-left:8px;display:flex;align-items:center;justify-content:center;opacity:0.8;cursor:pointer;}.twitterBtn img{width:12px!important;}.discordBtn img{width:10px!important;}.discordBtn:hover,.twitterBtn:hover{opacity:1;}.discordBtn{img{width:10px;}}.sidebarTitle{background-color:#f8f8f8;padding:18px 16px;font-family:\"Poppins\";font-size:18px;font-weight:600;color:#001934;display:flex;align-items:center;}.sideBarShow{display:none;}.sidebarTitle a{color:#001934;}.greenCircle{width:8px;height:8px;background-color:#1cd3c6;border-radius:50%;margin:0 12px;}.headerNav{font-family:\"Roboto\";padding:0px 24px;color:#001933;font-size:16px;font-weight:500;line-height:1em;}.headerNav a{color:#001933;text-decoration:none;}.headerNav a:hover{text-decoration:none;}.logoWrapper img{width:40px;}.sideBarUL{margin-top:32px;}.sideBarUL li{list-style-type:none;width:auto;}.sideBarUL li a{font-size:14px;font-weight:500;line-height:1.5;padding:7px 24px 7px 16px;padding-left:10px;padding-right:25px;border-style:solid none solid solid;border-width:1px 0px 1px 1px;border-color:transparent currentcolor transparent transparent;}.hideFrontLine .collapser{background:transparent;border:none;outline:none;position:absolute;right:20px;z-index:1;cursor:pointer;}.hideFrontLine .active>a{background-color:#1ed3c6;color:#fff!important;}.firstLevel ul li .collapser svg path{fill:#fff!important;}.active .collapser>svg>path{fill:#001933!important;}.firstLevel ul .item ul .item{border-left:1px solid #e6ecf1;}.sideBarUL .item{list-style:none;padding:0;}.sideBarUL .item>a{color:#1ed3c6;text-decoration:none;display:flex;align-items:center;position:relative;width:100%;padding-right:35px;padding-left:15px;}.showFrontLine .item>a:hover{background-color:#001933;}.showFrontLine .active>a{background-color:#001933;}.sideBarUL .item .item{margin-left:16px;}.firstLevel>ul>.item{margin-left:0!important;}.showFrontLine .item .item{border-left:1px solid #e6ecf1;border-left-color:rgb(230, 236, 241);padding:0;width:calc(100% - 16px)!important;}.showFrontLine .item .active>a{border-color:rgb(230, 236, 241)!important;border-style:solid none solid solid;border-width:1px 0px 1px 1px;background-color:#1ed3c6!important;color:#fff;}.titleWrapper{display:flex;align-items:center;padding-bottom:40px;border-bottom:1px solid rgb(230, 236, 241);margin-bottom:32px;}.gitBtn{height:30px;min-height:30px;display:flex;align-items:center;}.gitBtn img{width:15px;display:inline-block;margin-right:5px;}.addPaddTopBottom{padding:50px 0;}.preRightWrapper{display:block;margin:0px;flex:1 1 0%;padding:16px;text-align:right;}.smallContent{display:block;margin:0px;padding:0px;color:#6e6e6e;}.smallContent span{font-size:12px;line-height:1.625;font-weight:400;}.nextRightWrapper{display:block;margin:0px;padding:16px;flex:1 1 0%;}table{padding:0;}table tr{border-top:1px solid #cccccc;margin:0;padding:0;}table tr:nth-child(2n){background-color:#f8f8f8;}table tr th{font-weight:bold;border:1px solid #cccccc;text-align:left;margin:0;padding:6px 13px;}table tr td{border:1px solid #cccccc;text-align:left;margin:0;padding:6px 13px;}table tr th :first-child,table tr td :first-child{margin-top:0;}table tr th :last-child,table tr td :last-child{margin-bottom:0;}img{max-width:100%;}.githubBtn{display:flex;align-items:center;font-size:16px;padding:10px 0px;padding-left:15px;max-height:40px;}.githubBtn span span{display:flex;align-items:center;}.communitySection{font-size:24px;font-weight:700;}.authorSection{padding:20px 0;}.authorSection,.authorName{display:flex;align-items:center;}.authorImg img{width:75px;height:75px;border-radius:50%;min-width:75px;max-width:75px;min-height:75px;max-height:75px;}.authorDetails{padding-left:10px;}.authorDesc{padding-top:5px;font-size:14px;}.authorName img{margin-left:10px;display:inline-block;width:20px;}.authorName img:hover{opacity:0.7;}.heading1{font-size:26px;font-weight:800;line-height:1.5;margin-bottom:16px;margin-top:32px;}.heading2{font-size:24px;font-weight:700;line-height:1.5;margin-bottom:16px;margin-top:32px;}.heading3{font-size:20px;font-weight:600;line-height:1.5;margin-bottom:16px;margin-top:32px;}.heading4{font-size:18px;font-weight:500;line-height:1.5;margin-bottom:16px;margin-top:32px;}.heading5{font-size:16px;font-weight:400;line-height:1.5;margin-bottom:16px;margin-top:32px;}.heading6{font-size:14px;font-weight:300;line-height:1.5;margin-bottom:16px;margin-top:32px;}.paragraph{margin:16px 0px 32px;line-height:1.625;}.pre{font-size:14px;margin:0px;padding:16px;overflow:auto;}.poweredBy{font-size:0.6em;text-align:end;padding:0;}.topnav{-webkit-transition:top 0.5s,bottom 0.5s;}@media (max-width: 767px){.formElement svg path{fill:#001934;}.visibleMobileView{display:block!important;}.searchInput{color:#001934;}.socialWrapper{position:absolute;right:10px;top:29px;}.responsive{margin-top:15px;position:relative;padding-bottom:20px;border-top:1px solid #fff;}.headerTitle{padding-right:50px;font-size:16px;}.navBarBrand{min-height:40px;}.navBarBrand img{margin-right:8px;}.topnav.responsive .visibleMobile{display:block;}.topnav .navBarUL{display:none;}.topnav.responsive .navBarUL{display:block;text-align:left;}.hiddenMobile{display:none!important;}hr{margin-top:0;margin-bottom:0;}.navBarParent{display:block;}.separator{margin-top:20px;margin-bottom:20px;}.navBarULRight{position:static;}.navBarUL{display:flex;align-items:center;margin:7.5px 0px;}.navBarUL li{height:37px;}.navBarUL li a{font-size:14px;padding:10px 15px;}.navBarDefault{display:block;height:auto;}.navBarToggle{margin-right:0;display:block;position:absolute;left:11px;top:15px;background:#fff;}.navBarHeader{display:flex;min-width:auto;padding-right:0;align-items:center;}.navBarBrand{font-size:20px;padding:0 0;padding-left:0;flex:initial;padding-right:15px;}.titleWrapper{padding:0 15px;display:block;}.gitBtn{display:inline-block;}.mobileView{text-align:left!important;padding-left:0!important;}.searchWrapper{padding:0px 0;padding-top:0px;position:absolute;bottom:0px;width:calc(100% - 70px);position:absolute;left:40px;top:8px;}.hitWrapper{width:100%;right:0;top:35px;max-height:fit-content;position:static;}}@media (min-width: 768px) and (max-width: 991px){.navBarDefault{padding:10px;}.navBarBrand{font-size:22px;}.navBarHeader{min-width:240px;flex:initial;}.githubBtn{padding:10px 10px;}.divider{margin:0 5px;height:20px;}.hitWrapper{max-width:500px;}.navBarUL li a{padding:10px 5px;}.searchWrapper{padding-left:0px;}}"}:0;
;// CONCATENATED MODULE: ./src/custom/styles/styles.js
const customStyles=/*#__PURE__*/(0,emotion_react_esm/* css */.iv)( true?"":0, true?"":0);const styles=[customStyles];
;// CONCATENATED MODULE: ./src/components/theme/themeProvider.js
class ThemeProvider extends index_js_.Component{constructor(...args){super(...args);this.state={isDarkThemeActive:false};this.retrieveActiveTheme=()=>{const isDarkThemeActive=JSON.parse(window.localStorage.getItem("isDarkThemeActive"));this.setState({isDarkThemeActive});};this.toggleActiveTheme=()=>{this.setState(prevState=>({isDarkThemeActive:!prevState.isDarkThemeActive}));window.localStorage.setItem("isDarkThemeActive",JSON.stringify(!this.state.isDarkThemeActive));};}componentDidMount(){this.retrieveActiveTheme();}render(){const{children,location}=this.props;const{isDarkThemeActive}=this.state;const currentActiveTheme=isDarkThemeActive?darkTheme:lightTheme;return (0,emotion_react_esm/* jsx */.tZ)("div",null,(0,emotion_react_esm/* jsx */.tZ)(emotion_react_esm/* Global */.xB,{styles:[baseStyles,...styles, true?"":0]}),(0,emotion_react_esm/* jsx */.tZ)(components_Header,{location:location,isDarkThemeActive:isDarkThemeActive,toggleActiveTheme:this.toggleActiveTheme}),(0,emotion_react_esm/* jsx */.tZ)(emotion_element_8d26346b_esm.a,{theme:currentActiveTheme},children));}}/* harmony default export */ const themeProvider = (ThemeProvider);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
;// CONCATENATED MODULE: ./src/components/styles/Sidebar.js
const Sidebar_excluded=["className","active","level"];const Sidebar_Sidebar=/*#__PURE__*/(0,emotion_styled_base_esm/* default */.Z)("aside", true?{target:"e1y52jk21"}:0)("width:100%;border-right:1px solid #ede7f3;height:100vh;overflow:auto;position:fixed;padding-left:24px;position:-webkit-sticky;position:-moz-sticky;position:sticky;top:0;background:",props=>props.theme.colors.background,";.rightSideTitle{font-size:10px;line-height:1;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;padding:7px 24px 7px 16px;border-left:1px solid #e6ecf1;border-left-color:rgb(230, 236, 241);color:",props=>props.theme.colors.text,";}.rightSideBarUL{margin-top:32px;}.rightSideBarUL li{list-style-type:none;border-left:1px solid #e6ecf1;border-left-color:rgb(230, 236, 241);}.rightSideBarUL li a{font-size:12px;font-weight:500;line-height:1.5;padding:7px 24px 7px 16px;color:",props=>props.theme.colors.text,";}@media only screen and (max-width: 50rem){width:100%;position:relative;}"+( true?"":0));const Sidebar_ListItem=/*#__PURE__*/(0,emotion_styled_base_esm/* default */.Z)(_ref=>{let{className,active,level}=_ref,props=(0,objectWithoutProperties/* default */.Z)(_ref,Sidebar_excluded);return (0,emotion_react_esm/* jsx */.tZ)("li",{className:className},(0,emotion_react_esm/* jsx */.tZ)("a",(0,esm_extends/* default */.Z)({href:props.to},props),props.children));}, true?{target:"e1y52jk20"}:0)("list-style:none;a{color:#5c6975;text-decoration:none;font-weight:",({level})=>level===0?700:400,";padding:0.45rem 0 0.45rem ",props=>2+(props.level||0)*1,"rem;display:block;position:relative;&:hover{color:#1ed3c6!important;}",props=>props.active&&`
      color: #1ED3C6;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `,"svg{float:right;margin-right:1rem;}}"+( true?"":0));
;// CONCATENATED MODULE: ./src/components/rightSidebar.js
// import Link from './link';
const rightSidebar_SidebarLayout=({location})=>(0,emotion_react_esm/* jsx */.tZ)(gatsby_browser_entry.StaticQuery,{query:"3706406642",render:({allMdx})=>{let navItems=[];let finalNavItems;if(allMdx.edges!==undefined&&allMdx.edges.length>0){const navItems=allMdx.edges.map((item,index)=>{let innerItems;if(item!==undefined){if(item.node.fields.slug===location.pathname||(config_default()).gatsby.pathPrefix+item.node.fields.slug===location.pathname){if(item.node.tableOfContents.items){innerItems=item.node.tableOfContents.items.map((innerItem,index)=>{const itemId=innerItem.title?innerItem.title.replace(/\s+/g,"").toLowerCase():"#";return (0,emotion_react_esm/* jsx */.tZ)(Sidebar_ListItem,{key:index,to:`#${itemId}`,level:1},innerItem.title);});}}}if(innerItems){finalNavItems=innerItems;}});}if(finalNavItems&&finalNavItems.length){return (0,emotion_react_esm/* jsx */.tZ)(Sidebar_Sidebar,null,(0,emotion_react_esm/* jsx */.tZ)("ul",{className:"rightSideBarUL"},(0,emotion_react_esm/* jsx */.tZ)("li",{className:"rightSideTitle"},"CONTENTS"),finalNavItems));}else{return (0,emotion_react_esm/* jsx */.tZ)(Sidebar_Sidebar,null,(0,emotion_react_esm/* jsx */.tZ)("ul",null));}}});/* harmony default export */ const rightSidebar = (rightSidebar_SidebarLayout);
;// CONCATENATED MODULE: ./src/components/layout.js
function layout_EMOTION_STRINGIFIED_CSS_ERROR_(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const Wrapper=/*#__PURE__*/(0,emotion_styled_base_esm/* default */.Z)("div", true?{target:"e1eqkayb4"}:0)("display:flex;justify-content:space-between;background:",({theme})=>theme.colors.background,";.sideBarUL li a{color:",({theme})=>theme.colors.text,";}.sideBarUL .item>a:hover{background-color:#1ed3c6;color:#fff!important;}@media only screen and (max-width: 767px){display:block;}"+( true?"":0));const Content=/*#__PURE__*/(0,emotion_styled_base_esm/* default */.Z)("main", true?{target:"e1eqkayb3"}:0)("display:flex;flex-grow:1;margin:0px 88px;padding-top:3rem;background:",({theme})=>theme.colors.background,";table tr{background:",({theme})=>theme.colors.background,";}@media only screen and (max-width: 1023px){padding-left:0;margin:0 10px;padding-top:3rem;}"+( true?"":0));const MaxWidth=/*#__PURE__*/(0,emotion_styled_base_esm/* default */.Z)("div", true?{target:"e1eqkayb2"}:0)( true?{name:"rnnnrd",styles:"@media only screen and (max-width: 50rem){width:100%;position:relative;}"}:0);const LeftSideBarWidth=/*#__PURE__*/(0,emotion_styled_base_esm/* default */.Z)("div", true?{target:"e1eqkayb1"}:0)( true?{name:"kmc1lc",styles:"width:298px"}:0);const RightSideBarWidth=/*#__PURE__*/(0,emotion_styled_base_esm/* default */.Z)("div", true?{target:"e1eqkayb0"}:0)( true?{name:"nrfftn",styles:"width:224px"}:0);const Layout=({children,location})=>(0,emotion_react_esm/* jsx */.tZ)(themeProvider,{location:location},(0,emotion_react_esm/* jsx */.tZ)(esm.MDXProvider,{components:mdxComponents},(0,emotion_react_esm/* jsx */.tZ)(Wrapper,null,(0,emotion_react_esm/* jsx */.tZ)(LeftSideBarWidth,{className:"hiddenMobile"},(0,emotion_react_esm/* jsx */.tZ)(sidebar,{location:location})),(config_default()).sidebar.title?(0,emotion_react_esm/* jsx */.tZ)("div",{className:"sidebarTitle sideBarShow",dangerouslySetInnerHTML:{__html:(config_default()).sidebar.title}}):null,(0,emotion_react_esm/* jsx */.tZ)(Content,null,(0,emotion_react_esm/* jsx */.tZ)(MaxWidth,null,children)),(0,emotion_react_esm/* jsx */.tZ)(RightSideBarWidth,{className:"hiddenMobile"},(0,emotion_react_esm/* jsx */.tZ)(rightSidebar,{location:location})))));/* harmony default export */ const layout = (Layout);
;// CONCATENATED MODULE: ./src/components/index.js

;// CONCATENATED MODULE: ./src/components/styles/PageNavigationButtons.js
const StyledNextPrevious=/*#__PURE__*/(0,emotion_styled_base_esm/* default */.Z)("div", true?{target:"ex6i9xe0"}:0)("margin:0px;padding:0px;width:auto;display:grid;grid-template-rows:auto;column-gap:24px;grid-template-columns:calc(50% - 8px) calc(50% - 8px);.previousBtn{cursor:pointer;-moz-box-align:center;-moz-box-direction:normal;-moz-box-orient:horizontal;margin:0px;padding:0px;position:relative;display:flex;flex-direction:row;align-items:center;place-self:stretch;border-radius:3px;border:1px solid rgb(230, 236, 241);transition:border 200ms ease 0s;box-shadow:rgba(116, 129, 141, 0.1) 0px 3px 8px 0px;text-decoration:none;background-color:",props=>props.theme.colors.background,";color:",props=>props.theme.colors.text,";}.nextBtn{cursor:pointer;-moz-box-align:center;-moz-box-direction:normal;-moz-box-orient:horizontal;margin:0px;padding:0px;position:relative;display:flex;flex-direction:row;align-items:center;place-self:stretch;border-radius:3px;border:1px solid rgb(230, 236, 241);transition:border 200ms ease 0s;box-shadow:rgba(116, 129, 141, 0.1) 0px 3px 8px 0px;text-decoration:none;background-color:",props=>props.theme.colors.background,";color:",props=>props.theme.colors.text,";}.nextBtn:hover,.previousBtn:hover{text-decoration:none;border:1px solid #1ed3c6;}.nextBtn:hover .rightArrow,.previousBtn:hover .leftArrow{color:#1ed3c6;}.leftArrow{display:flex;margin:0px;color:rgb(157, 170, 182);flex:0 0 auto;font-size:24px;transition:color 200ms ease 0s;padding:16px;padding-right:16px;}.rightArrow{display:flex;flex:0 0 auto;font-size:24px;transition:color 200ms ease 0s;padding:16px;padding-left:16px;margin:0px;color:rgb(157, 170, 182);}.nextPreviousTitle{display:block;margin:0px;padding:0px;transition:color 200ms ease 0s;}.nextPreviousTitle span{font-size:16px;line-height:1.5;font-weight:500;}@media (max-width: 767px){display:block;padding:0 15px;.previousBtn{margin-bottom:20px;}}"+( true?"":0));
;// CONCATENATED MODULE: ./src/components/NextPrevious.js
const NextPrevious=({mdx,nav})=>{let currentIndex;const currentPaginationInfo=nav.map((el,index)=>{if(el&&el.url===mdx.fields.slug){currentIndex=index;}});const nextInfo={};const previousInfo={};if(currentIndex===undefined){// index
if(nav[0]){nextInfo.url=nav[0].url;nextInfo.title=nav[0].title;}previousInfo.url=null;previousInfo.title=null;currentIndex=-1;}else if(currentIndex===0){// first page
nextInfo.url=nav[currentIndex+1]?nav[currentIndex+1].url:null;nextInfo.title=nav[currentIndex+1]?nav[currentIndex+1].title:null;previousInfo.url=null;previousInfo.title=null;}else if(currentIndex===nav.length-1){// last page
nextInfo.url=null;nextInfo.title=null;previousInfo.url=nav[currentIndex-1]?nav[currentIndex-1].url:null;previousInfo.title=nav[currentIndex-1]?nav[currentIndex-1].title:null;}else if(currentIndex){// any other page
nextInfo.url=nav[currentIndex+1].url;nextInfo.title=nav[currentIndex+1].title;if(nav[currentIndex-1]){previousInfo.url=nav[currentIndex-1].url;previousInfo.title=nav[currentIndex-1].title;}}return (0,emotion_react_esm/* jsx */.tZ)(StyledNextPrevious,null,previousInfo.url&&currentIndex>=0?(0,emotion_react_esm/* jsx */.tZ)(components_link,{to:nav[currentIndex-1].url,className:"previousBtn"},(0,emotion_react_esm/* jsx */.tZ)("div",{className:"leftArrow"},(0,emotion_react_esm/* jsx */.tZ)("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"_13gjrqj"},(0,emotion_react_esm/* jsx */.tZ)("g",null,(0,emotion_react_esm/* jsx */.tZ)("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),(0,emotion_react_esm/* jsx */.tZ)("polyline",{points:"12 19 5 12 12 5"})))),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"preRightWrapper"},(0,emotion_react_esm/* jsx */.tZ)("div",{className:"smallContent"},(0,emotion_react_esm/* jsx */.tZ)("span",null,"Previous")),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"nextPreviousTitle"},(0,emotion_react_esm/* jsx */.tZ)("span",null,nav[currentIndex-1].title)))):null,nextInfo.url&&currentIndex>=0?(0,emotion_react_esm/* jsx */.tZ)(components_link,{to:nav[currentIndex+1].url,className:"nextBtn"},(0,emotion_react_esm/* jsx */.tZ)("div",{className:"nextRightWrapper"},(0,emotion_react_esm/* jsx */.tZ)("div",{className:"smallContent"},(0,emotion_react_esm/* jsx */.tZ)("span",null,"Next")),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"nextPreviousTitle"},(0,emotion_react_esm/* jsx */.tZ)("span",null,nav[currentIndex+1]&&nav[currentIndex+1].title))),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"rightArrow"},(0,emotion_react_esm/* jsx */.tZ)("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"_13gjrqj"},(0,emotion_react_esm/* jsx */.tZ)("g",null,(0,emotion_react_esm/* jsx */.tZ)("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),(0,emotion_react_esm/* jsx */.tZ)("polyline",{points:"12 5 19 12 12 19"}))))):null);};/* harmony default export */ const components_NextPrevious = (NextPrevious);
;// CONCATENATED MODULE: ./src/components/styles/Docs.js
function Docs_EMOTION_STRINGIFIED_CSS_ERROR_(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";}const StyledHeading=/*#__PURE__*/(0,emotion_styled_base_esm/* default */.Z)("h1", true?{target:"e1m7sxnn2"}:0)("font-size:32px;line-height:1.5;font-weight:500;border-left:2px solid #1ed3c6;padding:0 16px;flex:1;margin-top:0;padding-top:0;color:",props=>props.theme.colors.heading,";"+( true?"":0));const Edit=/*#__PURE__*/(0,emotion_styled_base_esm/* default */.Z)("div", true?{target:"e1m7sxnn1"}:0)( true?{name:"1vkevom",styles:"padding:1rem 1.5rem;text-align:right;a{font-size:14px;font-weight:500;line-height:1em;text-decoration:none;color:#555;border:1px solid rgb(211, 220, 228);cursor:pointer;border-radius:3px;transition:all 0.2s ease-out 0s;text-decoration:none;color:rgb(36, 42, 49);background-color:rgb(255, 255, 255);box-shadow:rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;height:30px;padding:5px 16px;&:hover{background-color:rgb(245, 247, 249);}}"}:0);const StyledMainWrapper=(0,emotion_styled_base_esm/* default */.Z)("div", true?{target:"e1m7sxnn0"}:0)("max-width:750px;color:",props=>props.theme.colors.text,";ul,ol{-webkit-padding-start:40px;-moz-padding-start:40px;-o-padding-start:40px;margin:24px 0px;padding:0px 0px 0px 2em;li{font-size:16px;line-height:1.8;font-weight:400;}}a{transition:color 0.15s;color:",props=>props.theme.colors.link,";}code{border:1px solid #ede7f3;border-radius:4px;padding:2px 6px;font-size:0.9375em;background:",props=>props.theme.colors.background,";}@media (max-width: 767px){padding:0 15px;}"+( true?"":0));
;// CONCATENATED MODULE: ./src/templates/docs.js
function docs_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function docs_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){docs_ownKeys(Object(source),true).forEach(function(key){(0,defineProperty/* default */.Z)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{docs_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}const forcedNavOrder=(config_default()).sidebar.forcedNavOrder;class MDXRuntimeTest extends index_js_.Component{render(){const{data}=this.props;if(!data){return this.props.children;}const{allMdx,mdx,site:{siteMetadata:{docsLocation,title}}}=data;const githubIcon=__webpack_require__(5935)/* ["default"] */ .Z;const navItems=allMdx.edges.map(({node})=>node.fields.slug).filter(slug=>slug!=="/").sort().reduce((acc,cur)=>{if(forcedNavOrder.find(url=>url===cur)){return docs_objectSpread(docs_objectSpread({},acc),{},{[cur]:[cur]});}let prefix=cur.split("/")[1];if((config_default()).gatsby&&(config_default()).gatsby.trailingSlash){prefix=prefix+"/";}if(prefix&&forcedNavOrder.find(url=>url===`/${prefix}`)){return docs_objectSpread(docs_objectSpread({},acc),{},{[`/${prefix}`]:[...acc[`/${prefix}`],cur]});}else{return docs_objectSpread(docs_objectSpread({},acc),{},{items:[...acc.items,cur]});}},{items:[]});const nav=forcedNavOrder.reduce((acc,cur)=>{return acc.concat(navItems[cur]);},[]).concat(navItems.items).map(slug=>{if(slug){const{node}=allMdx.edges.find(({node})=>node.fields.slug===slug);return{title:node.fields.title,url:node.fields.slug};}});// meta tags
const metaTitle=mdx.frontmatter.metaTitle;const metaDescription=mdx.frontmatter.metaDescription;let canonicalUrl=(config_default()).gatsby.siteUrl;canonicalUrl=(config_default()).gatsby.pathPrefix!=="/"?canonicalUrl+(config_default()).gatsby.pathPrefix:canonicalUrl;canonicalUrl=canonicalUrl+mdx.fields.slug;return (0,emotion_react_esm/* jsx */.tZ)(layout,this.props,(0,emotion_react_esm/* jsx */.tZ)(Helmet["default"],null,metaTitle?(0,emotion_react_esm/* jsx */.tZ)("title",null,metaTitle):null,metaTitle?(0,emotion_react_esm/* jsx */.tZ)("meta",{name:"title",content:metaTitle}):null,metaDescription?(0,emotion_react_esm/* jsx */.tZ)("meta",{name:"description",content:metaDescription}):null,metaTitle?(0,emotion_react_esm/* jsx */.tZ)("meta",{property:"og:title",content:metaTitle}):null,metaDescription?(0,emotion_react_esm/* jsx */.tZ)("meta",{property:"og:description",content:metaDescription}):null,metaTitle?(0,emotion_react_esm/* jsx */.tZ)("meta",{property:"twitter:title",content:metaTitle}):null,metaDescription?(0,emotion_react_esm/* jsx */.tZ)("meta",{property:"twitter:description",content:metaDescription}):null,(0,emotion_react_esm/* jsx */.tZ)("link",{rel:"canonical",href:canonicalUrl})),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"titleWrapper"},(0,emotion_react_esm/* jsx */.tZ)(StyledHeading,null,mdx.fields.title),(0,emotion_react_esm/* jsx */.tZ)(Edit,{className:"mobileView"},docsLocation&&(0,emotion_react_esm/* jsx */.tZ)(components_link,{className:"gitBtn",to:`${docsLocation}/${mdx.parent.relativePath}`},(0,emotion_react_esm/* jsx */.tZ)("img",{src:githubIcon,alt:"Github logo"})," Edit on GitHub"))),(0,emotion_react_esm/* jsx */.tZ)(StyledMainWrapper,null,(0,emotion_react_esm/* jsx */.tZ)((mdx_renderer_default()),null,mdx.body)),(0,emotion_react_esm/* jsx */.tZ)("div",{className:"addPaddTopBottom"},(0,emotion_react_esm/* jsx */.tZ)(components_NextPrevious,{mdx:mdx,nav:nav})));}}const pageQuery="3110060872";

/***/ }),

/***/ 3631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BaseContext": () => (/* binding */ BaseContext),
  "Link": () => (/* binding */ Link),
  "Location": () => (/* binding */ Location),
  "LocationProvider": () => (/* binding */ LocationProvider),
  "Match": () => (/* binding */ Match),
  "Redirect": () => (/* binding */ Redirect),
  "Router": () => (/* binding */ Router),
  "ServerLocation": () => (/* binding */ ServerLocation),
  "createHistory": () => (/* reexport */ createHistory),
  "createMemorySource": () => (/* reexport */ createMemorySource),
  "globalHistory": () => (/* reexport */ globalHistory),
  "isRedirect": () => (/* binding */ isRedirect),
  "matchPath": () => (/* reexport */ match),
  "navigate": () => (/* reexport */ history_navigate),
  "redirectTo": () => (/* binding */ redirectTo),
  "useLocation": () => (/* binding */ useLocation),
  "useMatch": () => (/* binding */ useMatch),
  "useNavigate": () => (/* binding */ useNavigate),
  "useParams": () => (/* binding */ useParams)
});

// EXTERNAL MODULE: external "/usr/local/app/other/koa-booster-page/node_modules/react/index.js"
var index_js_ = __webpack_require__(2897);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
// EXTERNAL MODULE: ./node_modules/@gatsbyjs/reach-router/node_modules/invariant/invariant.js
var invariant = __webpack_require__(4138);
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);
// EXTERNAL MODULE: ./.cache/react-lifecycles-compat.js
var react_lifecycles_compat = __webpack_require__(3639);
;// CONCATENATED MODULE: ./node_modules/@gatsbyjs/reach-router/es/lib/utils.js


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
        !matchIsNotReserved ?  false ? 0 : invariant_default()(false) : void 0;
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

;// CONCATENATED MODULE: ./node_modules/@gatsbyjs/reach-router/es/lib/history.js
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
var history_navigate = globalHistory.navigate;

////////////////////////////////////////////////////////////////////////////////


;// CONCATENATED MODULE: ./node_modules/@gatsbyjs/reach-router/es/index.js
var es_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-has-content */







////////////////////////////////////////////////////////////////////////////////

var createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = (0,index_js_.createContext)(defaultValue);
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
  return index_js_default().createElement(
    LocationContext.Consumer,
    null,
    function (context) {
      return context ? children(context) : index_js_default().createElement(
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

    return index_js_default().createElement(
      LocationContext.Provider,
      { value: context },
      typeof children === "function" ? children(context) : children || null
    );
  };

  return LocationProvider;
}((index_js_default()).Component);

////////////////////////////////////////////////////////////////////////////////


LocationProvider.defaultProps = {
  history: globalHistory
};
 false ? 0 : void 0;
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

  return index_js_default().createElement(
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
  navigate: globalHistory.navigate
});

////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.
var Router = function Router(props) {
  return index_js_default().createElement(
    BaseContext.Consumer,
    null,
    function (baseContext) {
      return index_js_default().createElement(
        Location,
        null,
        function (locationContext) {
          return index_js_default().createElement(RouterImpl, es_extends({}, baseContext, locationContext, props));
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

    var routes = index_js_default().Children.toArray(children).reduce(function (array, child) {
      var routes = createRoute(basepath)(child);
      return array.concat(routes);
    }, []);
    var pathname = location.pathname;


    var match = pick(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value;

      // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = es_extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2(resolve(to, uri), options);
        }
      });

      var clone = index_js_default().cloneElement(element, props, element.props.children ? index_js_default().createElement(
        Router,
        { location: location, primary: primary },
        element.props.children
      ) : undefined);

      // using 'div' for < 16.3 support
      var FocusWrapper = primary ? FocusHandler : component;
      // don't pass any props to 'div'
      var wrapperProps = primary ? es_extends({ uri: uri, location: location, component: component }, domProps) : domProps;

      return index_js_default().createElement(
        BaseContext.Provider,
        {
          value: { baseuri: uri, basepath: basepath, navigate: props.navigate }
        },
        index_js_default().createElement(
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
}((index_js_default()).PureComponent);

RouterImpl.defaultProps = {
  primary: true
};


var FocusContext = createNamedContext("Focus");

var FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return index_js_default().createElement(
    FocusContext.Consumer,
    null,
    function (requestFocus) {
      return index_js_default().createElement(FocusHandlerImpl, es_extends({}, domProps, {
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
      return es_extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return es_extends({
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

    return index_js_default().createElement(
      Comp,
      es_extends({
        style: es_extends({ outline: "none" }, style),
        tabIndex: "-1",
        ref: function ref(n) {
          return _this5.node = n;
        }
      }, domProps),
      index_js_default().createElement(
        FocusContext.Provider,
        { value: this.requestFocus },
        this.props.children
      )
    );
  };

  return FocusHandlerImpl;
}((index_js_default()).Component);

(0,react_lifecycles_compat/* polyfill */.O)(FocusHandlerImpl);

var k = function k() {};

////////////////////////////////////////////////////////////////////////////////
var forwardRef = (index_js_default()).forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return index_js_default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref5) {
      var basepath = _ref5.basepath,
          baseuri = _ref5.baseuri;
      return index_js_default().createElement(
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

          var href = resolve(to, baseuri);
          var encodedHref = encodeURI(href);
          var isCurrent = location.pathname === encodedHref;
          var isPartiallyCurrent = startsWith(location.pathname, encodedHref);

          return index_js_default().createElement("a", es_extends({
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
                  var _location$state = es_extends({}, location.state),
                      key = _location$state.key,
                      restState = _objectWithoutProperties(_location$state, ["key"]);

                  shouldReplace = shallowCompare(es_extends({}, state), restState);
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

 false ? 0 : void 0;

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
      var resolvedTo = resolve(to, baseuri);
      navigate(insertParams(resolvedTo, props), { replace: replace, state: state });
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

    var resolvedTo = resolve(to, baseuri);
    if (!noThrow) redirectTo(insertParams(resolvedTo, props));
    return null;
  };

  return RedirectImpl;
}((index_js_default()).Component);

var Redirect = function Redirect(props) {
  return index_js_default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref7) {
      var baseuri = _ref7.baseuri;
      return index_js_default().createElement(
        Location,
        null,
        function (locationContext) {
          return index_js_default().createElement(RedirectImpl, es_extends({}, locationContext, { baseuri: baseuri }, props));
        }
      );
    }
  );
};

 false ? 0 : void 0;

////////////////////////////////////////////////////////////////////////////////
var Match = function Match(_ref8) {
  var path = _ref8.path,
      children = _ref8.children;
  return index_js_default().createElement(
    BaseContext.Consumer,
    null,
    function (_ref9) {
      var baseuri = _ref9.baseuri;
      return index_js_default().createElement(
        Location,
        null,
        function (_ref10) {
          var navigate = _ref10.navigate,
              location = _ref10.location;

          var resolvedPath = resolve(path, baseuri);
          var result = match(resolvedPath, location.pathname);
          return children({
            navigate: navigate,
            location: location,
            match: result ? es_extends({}, result.params, {
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
  var context = (0,index_js_.useContext)(LocationContext);

  if (!context) {
    throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.location;
};

var useNavigate = function useNavigate() {
  var context = (0,index_js_.useContext)(BaseContext);

  if (!context) {
    throw new Error("useNavigate hook was used but a BaseContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.navigate;
};

var useParams = function useParams() {
  var context = (0,index_js_.useContext)(BaseContext);

  if (!context) {
    throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var results = match(context.basepath, location.pathname);

  return results ? results.params : null;
};

var useMatch = function useMatch(path) {
  if (!path) {
    throw new Error("useMatch(path: string) requires an argument of a string to match against");
  }
  var context = (0,index_js_.useContext)(BaseContext);

  if (!context) {
    throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var resolvedPath = resolve(path, context.baseuri);
  var result = match(resolvedPath, location.pathname);
  return result ? es_extends({}, result.params, {
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

    if (element.type === (index_js_default()).Fragment && element.props.children) {
      return index_js_default().Children.map(element.props.children, createRoute(basepath));
    }
    !(element.props.path || element.props.default || element.type === Redirect) ?  false ? 0 : invariant_default()(false) : void 0;

    !!(element.type === Redirect && (!element.props.from || !element.props.to)) ?  false ? 0 : invariant_default()(false) : void 0;

    !!(element.type === Redirect && !validateRedirect(element.props.from, element.props.to)) ?  false ? 0 : invariant_default()(false) : void 0;

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

/***/ 9984:
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

/***/ 8679:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(9864);

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

/***/ 3444:
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

/***/ 4544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ dist),
  "lG": () => (/* binding */ defaultProps)
});

// UNUSED EXPORTS: Prism

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(7410);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/duotoneDark/index.js
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

/* harmony default export */ const duotoneDark = (theme);

// EXTERNAL MODULE: external "/usr/local/app/other/koa-booster-page/node_modules/react/index.js"
var index_js_ = __webpack_require__(2897);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/dist/index.js





var defaultProps = {
  // $FlowFixMe
  Prism: prism/* default */.Z,
  theme: duotoneDark
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
}(index_js_.Component);

/* harmony default export */ const dist = (Highlight);



/***/ }),

/***/ 7410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/***/ 1418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/***/ 2703:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(414);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 5697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(2703)();
}


/***/ }),

/***/ 414:
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

/***/ 9590:
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

/***/ 4593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Helmet": () => (/* binding */ HelmetExport)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3524);
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_side_effect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9590);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2897);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4852);
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
            if (false) {}

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

/***/ 9921:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 9864:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(9921);
} else {}


/***/ }),

/***/ 8356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(2897);
var PropTypes = __webpack_require__(5697);

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

/***/ 3524:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(2897);
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

/***/ 333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS41NTkiIGhlaWdodD0iMTMuMjExIiB2aWV3Qm94PSIwIDAgMTEuNTU5IDEzLjIxMSI+CiAgICA8ZGVmcz4KICAgICAgICA8c3R5bGU+CiAgICAgICAgICAgIC5jbHMtMXtmaWxsOiMyNDI5MmV9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxwYXRoIGlkPSJkaXNjb3JkLWJyYW5kcyIgZD0iTTcuNjY5IDYuMjc1QS42NzYuNjc2IDAgMSAxIDcgNS41NDJhLjcuNyAwIDAgMSAuNjY5LjczM3ptLTMuMDg1LS43MzNhLjczNi43MzYgMCAwIDAgMCAxLjQ2Ni43LjcgMCAwIDAgLjY3NC0uNzMzLjcuNyAwIDAgMC0uNjc0LS43MzN6bTYuOTc1LTQuMTgxdjExLjg1Yy0xLjY1OS0xLjQ3MS0xLjEzMi0uOTg0LTMuMDY1LTIuNzgxbC4zNSAxLjIyMmgtNy40OUExLjM1NyAxLjM1NyAwIDAgMSAwIDEwLjI5MXYtOC45M0ExLjM1NyAxLjM1NyAwIDAgMSAxLjM1NCAwaDguODUxYTEuMzU3IDEuMzU3IDAgMCAxIDEuMzU0IDEuMzYxek05LjY3NyA3LjYyM2E4Ljg0NiA4Ljg0NiAwIDAgMC0uOTUxLTMuODUxIDMuMjY2IDMuMjY2IDAgMCAwLTEuODU2LS42OTRsLS4wOTIuMTA2YTQuNCA0LjQgMCAwIDEgMS42NDUuODM5IDUuNjEyIDUuNjEyIDAgMCAwLTQuOTM0LS4xOTJjLS4yNDQuMTEyLS4zOS4xOTItLjM5LjE5MmE0LjQ1NiA0LjQ1NiAwIDAgMSAxLjczNy0uODY1bC0uMDY2LS4wNzlhMy4yNjYgMy4yNjYgMCAwIDAtMS44NTYuNjk0IDguODQ2IDguODQ2IDAgMCAwLS45NTEgMy44NTEgMi40IDIuNCAwIDAgMCAyLjAxNSAxcy4yNDQtLjMuNDQzLS41NDhBMi4wNTQgMi4wNTQgMCAwIDEgMy4yNjMgNy4zYy4xLjA2OC4yNTcuMTU2LjI3MS4xNjVhNC44MTUgNC44MTUgMCAwIDAgNC4xMjIuMjM1IDMuNzggMy43OCAwIDAgMCAuNzYtLjM5IDIuMDg0IDIuMDg0IDAgMCAxLTEuMi43ODZjLjIuMjUxLjQzNi41MzUuNDM2LjUzNWEyLjQxNSAyLjQxNSAwIDAgMCAyLjAyMS0xeiIgY2xhc3M9ImNscy0xIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 5935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4yIiBiYXNlUHJvZmlsZT0idGlueSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiDQoJIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjM1MCAyMzE0LjgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTExNzUsMEM1MjUuOCwwLDAsNTI1LjgsMCwxMTc1YzAsNTUyLjIsMzc4LjksMTAxMC41LDg5MC4xLDExMzkuN2MtNS45LTE0LjctOC44LTM1LjMtOC44LTU1Ljh2LTE5OS44SDczNC40DQoJYy03OS4zLDAtMTUyLjgtMzUuMi0xODUuMS05OS45Yy0zOC4yLTcwLjUtNDQuMS0xNzkuMi0xNDEtMjQ2LjhjLTI5LjQtMjMuNS01LjktNDcsMjYuNC00NC4xYzYxLjcsMTcuNiwxMTEuNiw1OC44LDE1OC42LDEyMC40DQoJYzQ3LDYxLjcsNjcuNiw3Ni40LDE1NS43LDc2LjRjNDEuMSwwLDEwNS43LTIuOSwxNjQuNS0xMS44YzMyLjMtODIuMyw4OC4xLTE1NS43LDE1NS43LTE5MC45Yy0zOTMuNi00Ny01ODEuNi0yNDAuOS01ODEuNi01MDUuMw0KCWMwLTExNC42LDQ5LjktMjIzLjMsMTMyLjItMzE3LjNjLTI2LjQtOTEuMS02MS43LTI3OS4xLDExLjgtMzUyLjVjMTc2LjMsMCwyODIsMTE0LjYsMzA4LjQsMTQzLjljODguMS0yOS40LDE4NS4xLTQ3LDI4NC45LTQ3DQoJYzEwMi44LDAsMTk2LjgsMTcuNiwyODQuOSw0N2MyNi40LTI5LjQsMTMyLjItMTQzLjksMzA4LjQtMTQzLjljNzAuNSw3MC41LDM4LjIsMjYxLjQsOC44LDM1Mi41YzgyLjMsOTEuMSwxMjkuMywyMDIuNywxMjkuMywzMTcuMw0KCWMwLDI2NC40LTE4NS4xLDQ1OC4zLTU3NS43LDQ5OS40YzEwOC43LDU1LjgsMTg1LjEsMjE0LjQsMTg1LjEsMzMxLjlWMjI1NmMwLDguOC0yLjksMTcuNi0yLjksMjYuNA0KCUMyMDIxLDIxMjMuOCwyMzUwLDE2ODkuMSwyMzUwLDExNzVDMjM1MCw1MjUuOCwxODI0LjIsMCwxMTc1LDBMMTE3NSwweiIvPg0KPC9zdmc+DQo=");

/***/ }),

/***/ 5609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJiYXNlbGluZS1oZWxwLTI0cHgiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxkZWZzPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgLmNscy0xe2ZpbGw6bm9uZX0uY2xzLTJ7ZmlsbDojZmZmfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2RlZnM+CiAgICA8cGF0aCBpZD0iUGF0aF8xOTYiIGQ9Ik0wIDBoMjR2MjRIMHoiIGNsYXNzPSJjbHMtMSIgZGF0YS1uYW1lPSJQYXRoIDE5NiIvPgogICAgPHBhdGggaWQ9IlBhdGhfMTk3IiBkPSJNMTIgMmExMCAxMCAwIDEgMCAxMCAxMEExMCAxMCAwIDAgMCAxMiAyem0xIDE3aC0ydi0yaDJ6bTIuMDctNy43NWwtLjkuOTJBMy40IDMuNCAwIDAgMCAxMyAxNWgtMnYtLjVhNC4wMjUgNC4wMjUgMCAwIDEgMS4xNy0yLjgzbDEuMjQtMS4yNkExLjk1NSAxLjk1NSAwIDAgMCAxNCA5YTIgMiAwIDAgMC00IDBIOGE0IDQgMCAwIDEgOCAwIDMuMTgyIDMuMTgyIDAgMCAxLS45MyAyLjI1eiIgY2xhc3M9ImNscy0yIiBkYXRhLW5hbWU9IlBhdGggMTk3Ii8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 6909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDg1IDk1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NSA5NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8ZyBpZD0iTGF5ZXJfMiI+CjwvZz4KPGcgaWQ9IkxheWVyXzEiPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTc5LjksMzEuOGMyLjYtNi4zLDIuNi0xOS4xLTAuOC0yOC45bDAsMGMtMC45LTEuOC0zLjYtMS4yLTMuNywwLjd2MC43Yy0wLjYsOS40LTQsMTQuNS05LjEsMTcKCQkJYy0wLjgsMC40LTIuMSwwLjQtMy0wLjJjLTYtMy44LTEzLjItNi0yMC45LTZzLTE0LjgsMi4zLTIwLjksNmMtMC44LDAuNS0xLjgsMC42LTIuNiwwLjJjLTUuMi0xLjktOC44LTcuNi05LjQtMTcuMVYzLjUKCQkJQzkuNSwxLjYsNi43LDEsNS45LDIuOGMtMy40LDEwLTMuMywyMi44LTAuOCwyOWMxLjMsMy4xLDEuMyw2LjYsMC4yLDkuOGMtMS40LDQtMi4xLDguNS0yLDEzYzAuNSwyMC42LDE4LDM4LjIsMzguNywzOC41CgkJCUM2My44LDkzLjUsODEuNSw3Niw4MS41LDU0LjFjMC00LjQtMC43LTguNS0yLTEyLjRDNzguNSwzOC41LDc4LjYsMzQuOSw3OS45LDMxLjh6IE00MS45LDgzLjlDMjYuMSw4My41LDEzLDcwLjYsMTIuOCw1NC43CgkJCUMxMi40LDM3LjgsMjYuMiwyNCw0MywyNC40YzE1LjksMC4yLDI4LjksMTMuMywyOS4yLDI5LjJDNzIuNSw3MC40LDU4LjgsODQuMSw0MS45LDgzLjl6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ3LDUwLjlsLTctMTAuOGMtMS4xLTEuOC0zLjQtMi4zLTUuMi0xLjJjLTEuMSwwLjctMS44LDEuOS0xLjgsMy4yYzAsMC43LDAuMiwxLjQsMC42LDJsNC43LDcuNAoJCQljMC40LDAuNiwwLjIsMS4zLTAuMSwxLjhsLTcuNCw4LjFjLTEuNCwxLjUtMS4zLDMuOSwwLjIsNS4zYzAuNywwLjYsMS43LDAuOSwyLjYsMC45YzEuMSwwLDItMC41LDIuNy0xLjJsNS41LTYuNAoJCQljMC41LTAuNSwxLjItMC41LDEuNSwwLjFsMy45LDUuNmMwLjIsMC41LDAuNiwwLjgsMS4xLDEuMWMxLjMsMC45LDMsMC45LDQuMywwLjFsMCwwYzEuMS0wLjcsMS44LTEuOSwxLjgtMy4yCgkJCWMwLTAuNy0wLjItMS40LTAuNi0yTDQ3LDUwLjl6Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg==");

/***/ }),

/***/ 1353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi41MTciIGhlaWdodD0iMTAuMTY2IiB2aWV3Qm94PSIwIDAgMTIuNTE3IDEwLjE2NiI+CiAgICA8ZGVmcz4KICAgICAgICA8c3R5bGU+CiAgICAgICAgICAgIC5jbHMtMXtmaWxsOiMyNDI5MmV9CiAgICAgICAgPC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxwYXRoIGlkPSJ0d2l0dGVyLWJyYW5kcyIgZD0iTTExLjIzIDUwLjYxNmMuMDA4LjExMS4wMDguMjIyLjAwOC4zMzRhNy4yNDkgNy4yNDkgMCAwIDEtNy4zIDcuM0E3LjI0OSA3LjI0OSAwIDAgMSAwIDU3LjFhNS4zMDcgNS4zMDcgMCAwIDAgLjYxOS4wMzIgNS4xMzggNS4xMzggMCAwIDAgMy4xODUtMS4xIDIuNTcgMi41NyAwIDAgMS0yLjQtMS43NzkgMy4yMzUgMy4yMzUgMCAwIDAgLjQ4NC4wNCAyLjcxMyAyLjcxMyAwIDAgMCAuNjc1LS4wODcgMi41NjYgMi41NjYgMCAwIDEtMi4wNTUtMi41MTh2LS4wMzJhMi41ODQgMi41ODQgMCAwIDAgMS4xNi4zMjYgMi41NjkgMi41NjkgMCAwIDEtLjc5NC0zLjQzMSA3LjI5MiA3LjI5MiAwIDAgMCA1LjI5IDIuNjg0IDIuOSAyLjkgMCAwIDEtLjA2NC0uNTg4IDIuNTY4IDIuNTY4IDAgMCAxIDQuNDQtMS43NTUgNS4wNTEgNS4wNTEgMCAwIDAgMS42MjgtLjYxOSAyLjU1OCAyLjU1OCAwIDAgMS0xLjEyOCAxLjQxNCA1LjE0MyA1LjE0MyAwIDAgMCAxLjQ3Ny0uNCA1LjUxNSA1LjUxNSAwIDAgMS0xLjI4NyAxLjMyNnoiIGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNDguMDgyKSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 3288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNSAyNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzUgMjc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3LDcuMmwwLjEsMS4ybC0xLjMtMC4xYy00LjYtMC41LTguNi0yLjQtMTItNS41TDIuMSwxLjFMMS43LDIuM0MwLjgsNC44LDEuMyw3LjUsMy4yLDkuM2MxLDEsMC44LDEuMS0xLDAuNQoJQzEuNyw5LjcsMS4xLDkuNSwxLjEsOS42QzAuOSw5LjgsMS41LDExLjksMiwxMi44YzAuNywxLjIsMiwyLjQsMy41LDMuMWwxLjIsMC41bC0xLjUsMGMtMS40LDAtMS41LDAtMS4zLDAuNQoJYzAuNSwxLjUsMi41LDMuMiw0LjcsMy45bDEuNiwwLjVsLTEuNCwwLjhjLTIsMS4xLTQuNCwxLjctNi44LDEuOEMwLjksMjMuOSwwLDI0LDAsMjQuMWMwLDAuMiwzLjEsMS42LDQuOSwyLjEKCWM1LjQsMS41LDExLjgsMC45LDE2LjYtMS44YzMuNC0xLjksNi44LTUuNiw4LjQtOS4yYzAuOS0xLjksMS43LTUuNSwxLjctNy4xYzAtMS4xLDAuMS0xLjIsMS41LTIuNmMwLjgtMC44LDEuNi0xLjYsMS44LTEuOAoJYzAuMy0wLjUsMC4yLTAuNS0xLjEsMGMtMi4xLDAuNy0yLjUsMC42LTEuNC0wLjVjMC44LTAuOCwxLjctMi4xLDEuNy0yLjVjMC0wLjEtMC40LDAtMC44LDAuM2MtMC41LDAuMi0xLjUsMC42LTIuMiwwLjhsLTEuNCwwLjQKCWwtMS4yLTAuOGMtMC43LTAuNC0xLjYtMC45LTIuMS0xYy0xLjMtMC4zLTMuMy0wLjMtNC40LDAuMUMxOC44LDEuNCwxNi44LDQuMiwxNyw3LjJ6Ii8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 3324:
/***/ ((module) => {

"use strict";
module.exports = require("/usr/local/app/other/koa-booster-page/.cache/ssr-builtin-trackers/fs");

/***/ }),

/***/ 9872:
/***/ ((module) => {

"use strict";
module.exports = require("/usr/local/app/other/koa-booster-page/.cache/ssr-builtin-trackers/http");

/***/ }),

/***/ 9835:
/***/ ((module) => {

"use strict";
module.exports = require("/usr/local/app/other/koa-booster-page/.cache/ssr-builtin-trackers/https");

/***/ }),

/***/ 8887:
/***/ ((module) => {

"use strict";
module.exports = require("/usr/local/app/other/koa-booster-page/node_modules/react-dom/server.js");

/***/ }),

/***/ 2897:
/***/ ((module) => {

"use strict";
module.exports = require("/usr/local/app/other/koa-booster-page/node_modules/react/index.js");

/***/ }),

/***/ 4347:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 1239:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 1423:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 8311:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 4269:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 4942:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _defineProperty)
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

/***/ 7462:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _extends)
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

/***/ 4925:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _objectWithoutProperties)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
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
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

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

/***/ }),

/***/ 1741:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"_args":[["gatsby@4.0.0","/usr/local/app/other/koa-booster-page"]],"_from":"gatsby@4.0.0","_id":"gatsby@4.0.0","_inBundle":false,"_integrity":"sha512-tLQ+8ppmRswnuSCMCElJYNTDKiwY89RQE/O85ETfeYVfFmGOKdgY1u/q85QFbGrY2+pkf5ZVaWd206u0jEMOhw==","_location":"/gatsby","_phantomChildren":{"@babel/code-frame":"7.15.8","@babel/generator":"7.15.8","@babel/helper-compilation-targets":"7.15.4","@babel/helper-module-transforms":"7.15.8","@babel/helpers":"7.15.4","@babel/parser":"7.15.8","@babel/runtime":"7.15.4","@babel/template":"7.15.4","@babel/traverse":"7.15.4","@babel/types":"7.15.6","@types/common-tags":"1.8.1","better-opn":"2.1.1","boxen":"5.1.2","buffer-from":"1.1.2","clipboardy":"2.3.0","common-tags":"1.8.0","configstore":"5.0.1","convert-hrtime":"3.0.0","convert-source-map":"1.8.0","create-gatsby":"2.0.0","decamelize":"1.2.0","emoji-regex":"8.0.0","envinfo":"7.8.1","execa":"5.1.1","fs-exists-cached":"1.0.0","fs-extra":"10.0.0","gatsby-core-utils":"3.0.0","gatsby-recipes":"1.0.0","gatsby-telemetry":"3.0.0","gensync":"1.0.0-beta.2","is-valid-path":"0.1.1","joi":"17.4.2","json5":"2.2.0","locate-path":"5.0.0","lodash":"4.17.21","loose-envify":"1.4.0","lru-cache":"6.0.0","meant":"1.0.3","ms":"2.1.2","opentracing":"0.14.5","pretty-error":"2.1.2","progress":"2.0.3","prompts":"2.4.2","redux":"4.0.5","require-directory":"2.1.1","resolve-cwd":"3.0.0","set-blocking":"2.0.0","signal-exit":"3.0.5","stack-trace":"0.0.10","update-notifier":"5.1.0","whatwg-url":"5.0.0","yoga-layout-prebuilt":"1.10.0","yurnalist":"2.1.0"},"_requested":{"type":"version","registry":true,"raw":"gatsby@4.0.0","name":"gatsby","escapedName":"gatsby","rawSpec":"4.0.0","saveSpec":null,"fetchSpec":"4.0.0"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/gatsby/-/gatsby-4.0.0.tgz","_spec":"4.0.0","_where":"/usr/local/app/other/koa-booster-page","author":{"name":"Kyle Mathews","email":"mathews.kyle@gmail.com"},"bin":{"gatsby":"cli.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"dependencies":{"@babel/code-frame":"^7.14.0","@babel/core":"^7.15.5","@babel/eslint-parser":"^7.15.4","@babel/helper-plugin-utils":"^7.14.5","@babel/parser":"^7.15.5","@babel/runtime":"^7.15.4","@babel/traverse":"^7.15.4","@babel/types":"^7.15.4","@gatsbyjs/reach-router":"^1.3.6","@gatsbyjs/webpack-hot-middleware":"^2.25.2","@nodelib/fs.walk":"^1.2.8","@pmmmwh/react-refresh-webpack-plugin":"^0.4.3","@types/http-proxy":"^1.17.7","@typescript-eslint/eslint-plugin":"^4.33.0","@typescript-eslint/parser":"^4.33.0","@vercel/webpack-asset-relocator-loader":"^1.7.0","address":"1.1.2","anser":"^2.0.2","autoprefixer":"^10.3.7","axios":"^0.21.1","babel-loader":"^8.2.2","babel-plugin-add-module-exports":"^1.0.4","babel-plugin-dynamic-import-node":"^2.3.3","babel-plugin-lodash":"^3.3.4","babel-plugin-remove-graphql-queries":"^4.0.0","babel-preset-gatsby":"^2.0.0","better-opn":"^2.1.1","bluebird":"^3.7.2","body-parser":"^1.19.0","browserslist":"^4.17.3","cache-manager":"^2.11.1","chalk":"^4.1.2","chokidar":"^3.5.2","common-tags":"^1.8.0","compression":"^1.7.4","cookie":"^0.4.1","core-js":"^3.17.2","cors":"^2.8.5","css-loader":"^5.2.7","css-minimizer-webpack-plugin":"^2.0.0","css.escape":"^1.5.1","date-fns":"^2.25.0","debug":"^3.2.7","deepmerge":"^4.2.2","del":"^5.1.0","detect-port":"^1.3.0","devcert":"^1.2.0","dotenv":"^8.6.0","eslint":"^7.32.0","eslint-config-react-app":"^6.0.0","eslint-plugin-flowtype":"^5.10.0","eslint-plugin-graphql":"^4.0.0","eslint-plugin-import":"^2.24.2","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-react":"^7.26.1","eslint-plugin-react-hooks":"^4.2.0","eslint-webpack-plugin":"^2.5.4","event-source-polyfill":"^1.0.25","execa":"^5.1.1","express":"^4.17.1","express-graphql":"^0.12.0","fastest-levenshtein":"^1.0.12","fastq":"^1.13.0","file-loader":"^6.2.0","find-cache-dir":"^3.3.2","fs-exists-cached":"1.0.0","fs-extra":"^10.0.0","gatsby-cli":"^4.0.0","gatsby-core-utils":"^3.0.0","gatsby-graphiql-explorer":"^2.0.0","gatsby-legacy-polyfills":"^2.0.0","gatsby-link":"^4.0.0","gatsby-plugin-page-creator":"^4.0.0","gatsby-plugin-typescript":"^4.0.0","gatsby-plugin-utils":"^2.0.0","gatsby-react-router-scroll":"^5.0.0","gatsby-telemetry":"^3.0.0","gatsby-worker":"^1.0.0","glob":"^7.2.0","got":"^11.8.2","graphql":"^15.6.1","graphql-compose":"~7.25.1","graphql-playground-middleware-express":"^1.7.22","hasha":"^5.2.2","http-proxy":"^1.18.1","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^3.0.0","joi":"^17.4.2","json-loader":"^0.5.7","latest-version":"5.1.0","lmdb-store":"^1.6.8","lodash":"^4.17.21","md5-file":"^5.0.0","meant":"^1.0.3","memoizee":"^0.4.15","micromatch":"^4.0.4","mime":"^2.5.2","mini-css-extract-plugin":"1.6.2","mitt":"^1.2.0","moment":"^2.29.1","multer":"^1.4.3","node-fetch":"^2.6.5","normalize-path":"^3.0.0","null-loader":"^4.0.1","opentracing":"^0.14.5","p-defer":"^3.0.0","parseurl":"^1.3.3","physical-cpu-count":"^2.0.0","platform":"^1.3.6","postcss":"^8.3.9","postcss-flexbugs-fixes":"^5.0.2","postcss-loader":"^5.3.0","prompts":"^2.4.2","prop-types":"^15.7.2","query-string":"^6.14.1","raw-loader":"^4.0.2","react-dev-utils":"^11.0.4","react-refresh":"^0.9.0","redux":"4.0.5","redux-thunk":"^2.3.0","resolve-from":"^5.0.0","semver":"^7.3.5","shallow-compare":"^1.2.2","signal-exit":"^3.0.5","slugify":"^1.6.1","socket.io":"3.1.2","socket.io-client":"3.1.3","source-map":"^0.7.3","source-map-support":"^0.5.20","st":"^2.0.0","stack-trace":"^0.0.10","string-similarity":"^1.2.2","strip-ansi":"^5.2.0","style-loader":"^2.0.0","terser-webpack-plugin":"^5.2.4","tmp":"^0.2.1","true-case-path":"^2.2.1","type-of":"^2.0.1","url-loader":"^4.1.1","uuid":"^8.3.2","v8-compile-cache":"^2.3.0","webpack":"^5.58.1","webpack-dev-middleware":"^4.3.0","webpack-merge":"^5.8.0","webpack-stats-plugin":"^1.0.3","webpack-virtual-modules":"^0.3.2","xstate":"^4.25.0","yaml-loader":"^0.6.0"},"description":"Blazing fast modern site generator for React","devDependencies":{"@babel/cli":"^7.15.4","@babel/helper-plugin-utils":"^7.14.5","@babel/register":"^7.15.3","@types/eslint":"^7.2.6","@types/micromatch":"^4.0.1","@types/normalize-path":"^3.0.0","@types/reach__router":"^1.3.5","@types/react-dom":"^17.0.9","@types/semver":"^7.3.8","@types/signal-exit":"^3.0.0","@types/string-similarity":"^4.0.0","@types/tmp":"^0.2.0","@types/webpack-virtual-modules":"^0.1.1","babel-preset-gatsby-package":"^2.0.0","copyfiles":"^2.3.0","cross-env":"^7.0.3","documentation":"^13.1.0","enhanced-resolve":"^5.8.2","react":"^16.12.0","react-dom":"^16.12.0","rimraf":"^3.0.2","typescript":"^4.4.3","xhr-mock":"^2.5.1","zipkin":"^0.22.0","zipkin-javascript-opentracing":"^3.0.0","zipkin-transport-http":"^0.22.0"},"engines":{"node":">=14.15.0"},"files":["apis.json","ipc.json","cache-dir/","cli.js","dist/","graphql.js","graphql.d.ts","reporter.js","reporter.d.ts","index.d.ts","scripts/postinstall.js","utils.js","internal.js","internal.d.ts","webpack.js","webpack.d.ts","!**/__tests__/"],"gitHead":"8d07242926e54f7c0819fbee84c152a27ec77959","homepage":"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/commonjs/gatsby-browser-entry.js","module":"cache-dir/gatsby-browser-entry.js","name":"gatsby","peerDependencies":{"react":"^16.9.0 || ^17.0.0","react-dom":"^16.9.0 || ^17.0.0"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^15.6.1","@mdx-js/mdx":"^2.0.0-next.3","@mdx-js/react":"^2.0.0-next.3","@mdx-js/runtime":"^2.0.0-next.3","remark-mdx":"^2.0.0-next.3","remark-mdxjs":"^2.0.0-next.3"},"scripts":{"build":"npm run build:types && npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs","build:cjs":"babel cache-dir --out-dir cache-dir/commonjs --ignore \\"**/__tests__\\" --ignore \\"**/__mocks__\\" && copyfiles -u 1 cache-dir/**/*.json cache-dir/commonjs","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:src":"babel src --out-dir dist --source-maps --verbose --ignore \\"**/gatsby-cli.js,src/internal-plugins/dev-404-page/raw_dev-404-page.js,**/__tests__,**/__mocks__\\" --extensions \\".ts,.js\\"","build:types":"tsc --emitDeclarationOnly --declaration --declarationDir dist && node scripts/check-declaration.js","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","postbuild":"node scripts/output-api-file.js","postinstall":"node scripts/postinstall.js","prebuild":"rimraf dist && rimraf cache-dir/commonjs","prepare":"cross-env NODE_ENV=production npm run build","typecheck":"tsc --noEmit","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch"},"types":"index.d.ts","version":"4.0.0","yargs":{"boolean-negation":false}}');

/***/ }),

/***/ 9804:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"polyfill":["/polyfill-94f96524d21b228bf347.js"],"app":["/app-5c585f4c2a3a9d40aa09.js"],"component---src-templates-docs-js":[]}');

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			418: 1
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
/******/ 	var __webpack_exports__ = __webpack_require__(3451);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=render-page.js.map