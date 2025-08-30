"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports2, module2) {
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports2 == "object" && exports2 && !exports2.nodeType && exports2;
      var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = (function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      })();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined2 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = (function runInContext2(context) {
        context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
        var Array2 = context.Array, Date = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = (function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        })();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer2 = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = (function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        })();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ (function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        })();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
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
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
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
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined2;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
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
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined2,
                args,
                holders,
                undefined2,
                undefined2,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index < length) {
            var value = object == null ? undefined2 : object[toKey(path[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined2;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined2 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, (function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        })(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      });
      var _ = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _;
        define(function() {
          return _;
        });
      } else if (freeModule) {
        (freeModule.exports = _)._ = _;
        freeExports._ = _;
      } else {
        root._ = _;
      }
    }).call(exports2);
  }
});

// node_modules/scss-parser/lib/input-stream.js
var require_input_stream = __commonJS({
  "node_modules/scss-parser/lib/input-stream.js"(exports2, module2) {
    var _ = require_lodash();
    var InputStream = class {
      /**
       * Create a new InputStream
       *
       * @param {string} input
       */
      constructor(input) {
        this.input = input;
        this.cursor = 0;
        this.line = 1;
        this.column = 0;
      }
      /**
       * Return an object that contains the currrent cursor, line, and column
       *
       * @public
       * @returns {InputStream~Position}
       */
      position() {
        return Object.freeze({
          cursor: this.cursor,
          line: this.line,
          column: this.column
        });
      }
      /**
       * Return the current character with an optional offset
       *
       * @public
       * @param {number} offset
       * @returns {string}
       */
      peek(offset) {
        const cursor = _.isInteger(offset) ? this.cursor + offset : this.cursor;
        return this.input.charAt(cursor);
      }
      /**
       * Return the current character and advance the cursor
       *
       * @public
       * @returns {string}
       */
      next() {
        const c = this.input.charAt(this.cursor++);
        if (c === "\n") {
          this.line++;
          this.column = 0;
        } else {
          this.column++;
        }
        return c;
      }
      /**
       * Return true if the stream has reached the end
       *
       * @public
       * @returns {boolean}
       */
      eof() {
        return this.peek() === "";
      }
      /**
       * Throw an error at the current line/column
       *
       * @public
       * @param {string} message
       * @throws Error
       */
      err(msg) {
        throw new Error(`${msg} (${this.line}:${this.column})`);
      }
    };
    module2.exports = (input) => {
      const i = new InputStream(input);
      const InputStreamProxy = {
        position() {
          return i.position();
        },
        peek() {
          return i.peek(...arguments);
        },
        next() {
          return i.next();
        },
        eof() {
          return i.eof();
        },
        err() {
          return i.err(...arguments);
        }
      };
      return InputStreamProxy;
    };
  }
});

// node_modules/invariant/invariant.js
var require_invariant = __commonJS({
  "node_modules/invariant/invariant.js"(exports2, module2) {
    "use strict";
    var NODE_ENV = process.env.NODE_ENV;
    var invariant = function(condition, format, a, b, c, d, e, f) {
      if (NODE_ENV !== "production") {
        if (format === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      }
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(
            format.replace(/%s/g, function() {
              return args[argIndex++];
            })
          );
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    };
    module2.exports = invariant;
  }
});

// node_modules/scss-parser/lib/token-stream.js
var require_token_stream = __commonJS({
  "node_modules/scss-parser/lib/token-stream.js"(exports2, module2) {
    var _ = require_lodash();
    var invariant = require_invariant();
    var HEX_PATTERN = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    var not = (p) => (c) => !p(c);
    var is_char = (c) => (cc) => c === cc;
    var is_whitespace = (c) => "	\r\n ".indexOf(c) >= 0;
    var is_newline = (c) => c === "\n";
    var is_operator = (c) => "+-*/%=&|!~><^".indexOf(c) >= 0;
    var is_operator_repeatable = (c) => "&|=".indexOf(c) >= 0;
    var is_punctuation = (c) => ",;(){}[]:#.".indexOf(c) >= 0;
    var is_digit = (c) => /[0-9]/i.test(c);
    var is_comment_start = (input) => input.peek() === "/" && (input.peek(1) === "/" || input.peek(1) === "*");
    var is_ident_start = (c) => /[a-z_]/i.test(c);
    var is_ident = (c) => /[a-z0-9_-]/i.test(c);
    var is_number_start = (input) => is_digit(input.peek()) || input.peek() === "." && is_digit(input.peek(1));
    var is_hex = (input) => {
      let hex = input.peek();
      if (hex === "#") {
        let _3 = false;
        let _6 = false;
        while (hex.length < 7) {
          const c = input.peek(hex.length);
          if (_.isEmpty(c)) break;
          hex += c;
          if (hex.length === 4) _3 = HEX_PATTERN.test(hex);
          if (hex.length === 7) _6 = HEX_PATTERN.test(hex);
        }
        return _6 ? 6 : _3 ? 3 : false;
      }
      return false;
    };
    var TokenStream = class {
      /**
       * Create a new InputStream
       *
       * @param {InputStreamProxy} input
       */
      constructor(input) {
        invariant(
          _.isPlainObject(input) && _.has(input, "next"),
          "TokenStream requires an InputStream"
        );
        this.input = input;
        this.tokens = [];
      }
      /**
       * Return a new @{link Token}
       *
       * @private
       * @param {string} type
       * @param {string|array} value
       * @param {InputStream~Position} start
       * @returns {Token}
       */
      createToken(type, value, start) {
        return Object.freeze({
          type,
          value,
          start,
          next: this.input.position()
        });
      }
      /**
       * Return the current token with an optional offset
       *
       * @public
       * @param {number} offset
       * @returns {Token}
       */
      peek(offset) {
        if (!this.tokens.length) {
          const token = this.read_next();
          if (token) this.tokens.push(token);
        }
        if (!offset) return this.tokens[0];
        if (offset < this.tokens.length) return this.tokens[offset];
        while (this.tokens.length <= offset) {
          const token = this.read_next();
          if (token) this.tokens.push(token);
          else break;
        }
        return this.tokens[offset];
      }
      /**
       * Return the current token and advance the TokenStream
       *
       * @public
       * @returns {Token}
       */
      next() {
        const token = this.tokens.shift();
        return token || this.read_next();
      }
      /**
       * Return true if the stream has reached the end
       *
       * @public
       * @returns {boolean}
       */
      eof() {
        return typeof this.peek() === "undefined";
      }
      /**
       * Throw an error at the current line/column
       *
       * @public
       * @param {string} message
       * @throws Error
       */
      err() {
        return this.input.err(...arguments);
      }
      /**
       * Parse the next character(s) as a Token
       *
       * @private
       * @returns {Token}
       */
      read_next() {
        if (this.input.eof()) return null;
        const c = this.input.peek();
        if (is_whitespace(c)) {
          return this.read_whitespace();
        }
        if (is_comment_start(this.input)) {
          return this.read_comment();
        }
        if (is_number_start(this.input)) {
          return this.read_number();
        }
        const hex_length = is_hex(this.input);
        if (hex_length) {
          return this.read_hex(hex_length);
        }
        if (is_punctuation(c)) {
          return this.read_punctuation();
        }
        if (is_ident_start(c)) {
          return this.read_ident();
        }
        if (is_operator(c)) {
          return this.read_operator();
        }
        if (c === '"' || c === "'") {
          return this.read_string(c);
        }
        if (c === "@") {
          return this.read_atkeyword();
        }
        if (c === "$") {
          return this.read_variable();
        }
        this.err(`Can't handle character: "${c}"`);
      }
      /**
       * Advance the input while the prediciate is true
       *
       * @private
       * @param {function} predicate
       * @returns {string}
       */
      read_while(predicate) {
        let s = "";
        while (!this.input.eof() && predicate(this.input.peek())) {
          s += this.input.next();
        }
        return s;
      }
      /**
       * Advance the input (consuming escaped characters) until the end character
       * is reached
       *
       * @private
       * @param {string} end
       * @returns {string}
       */
      read_escaped(end) {
        let escaped = false;
        let str = "";
        this.input.next();
        while (!this.input.eof()) {
          const c = this.input.next();
          if (escaped) {
            str += c;
            escaped = false;
          } else if (c === "\\") {
            str += c;
            escaped = true;
          } else if (c === end) {
            break;
          } else {
            str += c;
          }
        }
        return str;
      }
      /**
       * Advance the input while whitespace characters are matched
       *
       * @private
       * @returns {Token}
       */
      read_whitespace() {
        const start = this.input.position();
        const value = this.read_while(is_whitespace);
        return this.createToken("space", value, start);
      }
      /**
       * Advance the input while comment characters are matched
       *
       * @private
       * @returns {Token}
       */
      read_comment() {
        const start = this.input.position();
        this.input.next();
        switch (this.input.next()) {
          case "/":
            return this.read_comment_single(start);
          case "*":
            return this.read_comment_multi(start);
        }
      }
      /**
       * Advance the input while singleline comment characters are matched
       *
       * @private
       * @params {InputStream~Position} start
       * @returns {Token}
       */
      read_comment_single(start) {
        const value = this.read_while(not(is_newline));
        return this.createToken("comment_singleline", value, start);
      }
      /**
       * Advance the input while multiline comment characters are matched
       *
       * @private
       * @params {InputStream~Position} start
       * @returns {Token}
       */
      read_comment_multi(start) {
        let prev = "";
        let value = "";
        while (!this.input.eof()) {
          const next = this.input.next();
          if (next === "/" && prev === "*") break;
          value += prev;
          prev = next;
        }
        return this.createToken("comment_multiline", value, start);
      }
      /**
       * Advance the input while punctuation characters are matched
       *
       * @private
       * @returns {Token}
       */
      read_punctuation() {
        const start = this.input.position();
        const value = this.input.next();
        return this.createToken("punctuation", value, start);
      }
      /**
       * Advance the input while operators characters are matched
       *
       * @private
       * @returns {Token}
       */
      read_operator() {
        const start = this.input.position();
        const c = this.input.peek();
        const value = is_operator_repeatable(c) ? this.read_while(is_char(c)) : this.input.next();
        return this.createToken("operator", value, start);
      }
      /**
       * Advance the input while identifier characters are matched
       *
       * @private
       * @returns {Token}
       */
      read_ident() {
        const start = this.input.position();
        const value = this.read_while(is_ident);
        return this.createToken("identifier", value, start);
      }
      /**
       * Advance the input while string characters are matched
       *
       * @private
       * @param {string} c - " or '
       * @returns {Token}
       */
      read_string(c) {
        const start = this.input.position();
        const value = this.read_escaped(c);
        let type = "string";
        if (c === '"') type = "string_double";
        if (c === "'") type = "string_single";
        return this.createToken(type, value, start);
      }
      /**
       * Advance the input while number characters are matched
       *
       * @private
       * @returns {Token}
       */
      read_number() {
        const start = this.input.position();
        let hasPoint = false;
        const value = this.read_while((c) => {
          if (c === ".") {
            if (hasPoint) return false;
            hasPoint = true;
            return true;
          }
          return is_digit(c);
        });
        return this.createToken("number", value, start);
      }
      /**
       * Advance the input while hex characters are matched
       *
       * @private
       * @returns {Token}
       */
      read_hex(length) {
        const start = this.input.position();
        this.input.next();
        let value = "";
        for (let i = 0; i < length; i++) {
          value += this.input.next();
        }
        return this.createToken("color_hex", value, start);
      }
      /**
       * Advance the input while atkeyword characters are matched
       *
       * @private
       * @returns {Token}
       */
      read_atkeyword() {
        const start = this.input.position();
        this.input.next();
        const value = this.read_while(is_ident);
        return this.createToken("atkeyword", value, start);
      }
      /**
       * Advance the input while variable characters are matched
       *
       * @private
       * @returns {Token}
       */
      read_variable() {
        const start = this.input.position();
        this.input.next();
        const value = this.read_while(is_ident);
        return this.createToken("variable", value, start);
      }
    };
    module2.exports = (input) => {
      const t = new TokenStream(input);
      const TokenStreamProxy = {
        peek() {
          return t.peek(...arguments);
        },
        next() {
          return t.next();
        },
        eof() {
          return t.eof();
        },
        err() {
          return t.err(...arguments);
        },
        /**
         * Yield all tokens from the stream
         *
         * @instance
         * @returns {Token[]}
         */
        all() {
          const tokens = [];
          while (!t.eof()) tokens.push(t.next());
          return tokens;
        }
      };
      return TokenStreamProxy;
    };
  }
});

// node_modules/scss-parser/lib/parse.js
var require_parse = __commonJS({
  "node_modules/scss-parser/lib/parse.js"(exports2, module2) {
    var _ = require_lodash();
    var invariant = require_invariant();
    var Parser = class {
      /**
       * Create a new InputStream
       *
       * @param {TokenStreamProxy} tokens
       */
      constructor(tokens) {
        this.tokens = tokens;
      }
      /**
       * Return a new @{link Node}
       *
       * @private
       * @param {string} type
       * @param {string|array} value
       * @param {InputStream~Position} start
       * @param {InputStream~Position} next
       * @returns {Node}
       */
      createNode(type, value, start, next) {
        return { type, value, start, next };
      }
      /**
       * Return true if the current token(s) are of the provided type
       * and optionally match the specific character(s)
       *
       * @private
       * @param {string} type
       * @param {...string} values
       * @returns {boolean}
       */
      is_type(type, ...values) {
        const t = this.tokens.peek();
        if (!values.length) return t ? type.test(t.type) : false;
        return values.reduce((a, c, i) => {
          const t2 = this.tokens.peek(i);
          return !t2 ? false : a && type.test(t2.type) && t2.value === c;
        }, true);
      }
      /**
       * Return true if the current token is a space
       *
       * @private
       * @returns {boolean}
       */
      is_space() {
        return this.is_type(/space/);
      }
      /**
       * Return true if the current token is a comment
       *
       * @private
       * @returns {boolean}
       */
      is_comment() {
        return this.is_type(/comment/);
      }
      /**
       * Return true if the current token is a punctuation
       *
       * @private
       * @returns {boolean}
       */
      is_punctuation() {
        return this.is_type(/punctuation/, ...arguments);
      }
      /**
       * Return true if the current token is an operator
       *
       * @private
       * @returns {boolean}
       */
      is_operator() {
        return this.is_type(/operator/, ...arguments);
      }
      /**
       * Return true if the current token is an identifier
       *
       * @private
       * @returns {boolean}
       */
      is_identifier() {
        return this.is_type(/identifier/, ...arguments);
      }
      /**
       * Return true if the current token is an atkeyword
       *
       * @private
       * @returns {boolean}
       */
      is_atkeyword() {
        return this.is_type(/atkeyword/, ...arguments);
      }
      /**
       * Return true if the current tokens are interpolation
       *
       * @private
       * @returns {boolean}
       */
      is_interpolation() {
        return this.is_punctuation("#", "{");
      }
      /**
       * Return the current and next token if the isType predicate succeeds
       *
       * @private
       * @param {string} type
       * @param {function} isType
       * @param {...string} chars
       * @throws Error
       * @returns {boolean}
       */
      skip_type(type, isType, ...chars) {
        if (isType.apply(this, chars)) {
          return { start: this.tokens.peek(), next: this.tokens.next() };
        } else {
          this.tokens.err(`Expecting ${type}: "${chars.join("")}"`);
        }
      }
      /**
       * Expect a punctuation token optionally of the specified type
       *
       * @private
       * @param (...string) chars
       * @throws Error
       * @returns {boolean}
       */
      skip_punctuation() {
        return this.skip_type("punctuation", this.is_punctuation, ...arguments);
      }
      /**
       * Expect an operator token optionally of the specified type
       *
       * @private
       * @param (...string) chars
       * @throws Error
       * @returns {boolean}
       */
      skip_operator() {
        return this.skip_type("operator", this.is_operator, ...arguments);
      }
      /**
       * Expect an atkeyword token
       *
       * @private
       * @throws Error
       * @returns {boolean}
       */
      skip_atkeyword() {
        return this.skip_type("atkeyword", this.is_atkeyword);
      }
      /**
       * Throw an error at the current token
       *
       * @private
       * @throws Error
       */
      unexpected() {
        this.tokens.err(`Unexpected token: "${JSON.stringify(this.input.peek())}"`);
      }
      /**
       * Return a top level stylesheet Node
       *
       * @public
       * @returns {Node}
       */
      parse_stylesheet() {
        const value = [];
        while (!this.tokens.eof()) {
          const node = this.parse_node();
          if (_.isArray(node)) {
            value.push(...node);
          } else {
            value.push(node);
          }
        }
        return this.createNode("stylesheet", value);
      }
      /**
       * Parse a top-level Node (atrule,rule,declaration,comment,space)
       *
       * @private
       * @returns {Node|Node[]}
       */
      parse_node() {
        if (this.is_space() || this.is_comment()) return this.tokens.next();
        const value = [];
        const maybe_declaration = (punctuation) => {
          let expandedPseudo = false;
          if (punctuation === ";") {
            const pseudoIndex = _.findIndex(value, {
              type: "pseudo_class"
            });
            if (pseudoIndex > 0) {
              const a = value[pseudoIndex];
              const b = this.createNode("punctuation", ":", a.start, _.first(a.value).start);
              const nodes = [b].concat(a.value);
              value.splice(pseudoIndex, 1, ...nodes);
              expandedPseudo = true;
            }
          }
          const puncIndex = _.findIndex(value, {
            type: "punctuation",
            value: ":"
          });
          if (puncIndex >= 0) {
            const maybeSpace = value[puncIndex + 1];
            if (maybeSpace.type === "space" || expandedPseudo) {
              const start = _.first(value).start;
              let next = _.last(value).next;
              const property_ = _.take(value, puncIndex);
              const propertyNode = this.createNode(
                "property",
                property_,
                _.first(property_).start,
                _.last(property_).next
              );
              const value_ = _.drop(value, puncIndex + 1);
              if (punctuation === "{") {
                const block = this.parse_block();
                value_.push(block);
                next = block.next;
              }
              const valueNode = this.createNode(
                "value",
                value_,
                _.first(value_).start,
                _.last(value_).next
              );
              const declarationValue = [propertyNode, value[puncIndex], valueNode];
              if (punctuation === ";") {
                const { start: start2 } = this.skip_punctuation(";");
                declarationValue.push(start2);
                next = next.start;
              }
              return this.createNode(
                "declaration",
                declarationValue,
                start,
                next
              );
            }
          }
          return false;
        };
        while (!this.tokens.eof()) {
          if (this.is_atkeyword()) {
            return value.concat(this.parse_at_rule());
          }
          value.push(this.parse_atom());
          if (this.is_punctuation("{")) {
            if (value.length) {
              return maybe_declaration("{") || this.parse_rule(value);
            } else {
              return value.concat(this.parse_block());
            }
          }
          if (this.is_punctuation(";")) {
            return maybe_declaration(";");
          }
        }
        return value;
      }
      /**
       * Parse as many atoms as possible while the predicate is true
       *
       * @private
       * @param {function} predicate
       * @returns {Node[]}
       */
      parse_expression(predicate) {
        let value = [];
        let declaration = [];
        while (true) {
          if (this.tokens.eof() || !predicate()) break;
          if (this.is_punctuation(":") && declaration.length) {
            value.push(this.parse_declaration(declaration));
            value = _.xor(value, declaration);
            declaration = [];
          }
          if (this.tokens.eof() || !predicate()) break;
          const atom = this.parse_atom();
          value.push(atom);
          switch (atom.type) {
            case "space":
            case "punctuation":
              break;
            default:
              declaration.push(atom);
          }
        }
        return value;
      }
      /**
       * Parse a single atom
       *
       * @private
       * @returns {Node}
       */
      parse_atom() {
        return this.maybe_function(() => {
          if (this.is_punctuation("(")) {
            return this.parse_wrapped("parentheses", "(", ")");
          }
          if (this.is_interpolation()) {
            return this.parse_interolation();
          }
          if (this.is_punctuation("[")) {
            return this.parse_wrapped("attribute", "[", "]");
          }
          if (this.is_punctuation(".")) {
            return this.parse_selector("class", ".");
          }
          if (this.is_punctuation("#")) {
            return this.parse_selector("id", "#");
          }
          if (this.is_punctuation("::")) {
            return this.parse_selector("pseudo_element", ":");
          }
          if (this.is_punctuation(":")) {
            const next = this.tokens.peek(1);
            if (next.type === "identifier" || next.type === "punctuation" && next.value === "#") {
              return this.parse_selector("pseudo_class", ":");
            }
          }
          return this.tokens.next();
        });
      }
      /**
       * Parse a declaration
       *
       * @private
       * @param {Node[]} property
       * @returns {Node}
       */
      parse_declaration(property) {
        const { start: firstSeparator } = this.skip_punctuation(":");
        let secondSeparator;
        const value = this.parse_expression(() => {
          if (this.is_punctuation(";")) {
            secondSeparator = this.tokens.next();
            return false;
          }
          if (this.is_punctuation(",")) {
            secondSeparator = this.tokens.next();
            return false;
          }
          if (this.is_punctuation(")")) return false;
          return true;
        });
        const propertyNode = this.createNode(
          "property",
          property,
          _.first(property).start,
          _.last(property).next
        );
        const valueNode = this.createNode(
          "value",
          value,
          _.first(value).start,
          _.last(value).next
        );
        const declarationValue = [propertyNode, firstSeparator, valueNode];
        if (secondSeparator) declarationValue.push(secondSeparator);
        return this.createNode(
          "declaration",
          declarationValue,
          _.first(property).start,
          _.last(value).next
        );
      }
      /**
       * Parse an expression wrapped in the provided chracters
       *
       * @private
       * @param {string} type
       * @param {string} open
       * @param {string} close
       * @param {InputToken~Position} start
       * @returns {Node}
       */
      parse_wrapped(type, open, close, _start) {
        const { start } = this.skip_punctuation(open);
        const value = this.parse_expression(
          () => !this.is_punctuation(close)
        );
        const { next } = this.skip_punctuation(close);
        return this.createNode(type, value, (_start || start).start, next.next);
      }
      /**
       * Parse Nodes wrapped in "{}"
       *
       * @private
       * @returns {Node}
       */
      parse_block() {
        const { start } = this.skip_punctuation("{");
        const value = [];
        while (!this.tokens.eof() && !this.is_punctuation("}")) {
          const node = this.parse_node();
          if (_.isArray(node)) {
            value.push(...node);
          } else {
            value.push(node);
          }
        }
        const { next } = this.skip_punctuation("}");
        if (this.is_punctuation(";")) {
          this.skip_punctuation(";");
        }
        return this.createNode("block", value, start.start, next.next);
      }
      /**
       * Parse comma separated expressions wrapped in "()"
       *
       * @private
       * @param {string} [type] the type attrribute of the caller
       * @returns {Node}
       */
      parse_arguments(type) {
        const { start } = this.skip_punctuation("(");
        let value = [];
        if (type === "pseudo_class") {
          while (!this.tokens.eof() && !this.is_punctuation(")")) {
            value.push(this.parse_atom());
          }
        } else {
          while (!this.tokens.eof() && !this.is_punctuation(")")) {
            value = value.concat(this.parse_expression(() => {
              if (this.is_punctuation(",")) return false;
              if (this.is_punctuation(")")) return false;
              return true;
            }));
            if (this.is_punctuation(",")) {
              value.push(this.tokens.next());
            }
          }
        }
        const { next } = this.skip_punctuation(")");
        return this.createNode(
          "arguments",
          value,
          start.start,
          next.next
        );
      }
      /**
       * Optionally wrap a node in a "function"
       *
       * @private
       * @param {function} node - returns a node to optionally be wrapped
       * @returns {Node}
       */
      maybe_function(node) {
        node = node();
        const types = ["identifier", "function", "interpolation", "pseudo_class"];
        return this.is_punctuation("(") && _.includes(types, node.type) ? this.parse_function(node) : node;
      }
      /**
       * Parse a function node
       *
       * @private
       * @params {Node} node - the node to wrap (usually an identifier)
       * @returns {Node}
       */
      parse_function(node) {
        const args = this.parse_arguments(node.type);
        return this.createNode(
          "function",
          [node, args],
          node.start,
          args.next
        );
      }
      /**
       * Parse interpolation
       *
       * @private
       * @returns {Node}
       */
      parse_interolation() {
        const { start } = this.skip_punctuation("#");
        return this.parse_wrapped("interpolation", "{", "}", start);
      }
      /**
       * Parse an atrule
       *
       * @private
       * @returns {Node}
       */
      parse_at_rule() {
        const { start } = this.skip_atkeyword();
        const value = [start];
        if (this.is_space()) value.push(this.tokens.next());
        if (this.is_identifier()) value.push(this.tokens.next());
        while (!this.tokens.eof()) {
          if (this.is_punctuation("(") && /mixin|include|function/.test(start.value)) {
            value.push(this.parse_arguments());
          }
          if (this.is_punctuation("{")) {
            value.push(this.parse_block());
            break;
          }
          if (this.is_punctuation(";")) {
            value.push(this.tokens.next());
            break;
          } else {
            value.push(this.parse_atom());
          }
        }
        return this.createNode("atrule", value, start.start, _.last(value).next);
      }
      /**
       * Parse a rule
       *
       * @private
       * @param {Node[]} selectors
       * @returns {Node}
       */
      parse_rule(selectors) {
        const selector = this.createNode(
          "selector",
          selectors,
          _.first(selectors).start,
          _.last(selectors).next
        );
        const block = this.parse_block();
        return this.createNode(
          "rule",
          [selector, block],
          selector.start,
          block.next
        );
      }
      /**
       * Parse selector starting with the provided punctuation
       *
       * @private
       * @param {string} type
       * @param {string} punctuation
       * @returns {Node}
       */
      parse_selector(type, punctuation) {
        const { start } = this.skip_punctuation(punctuation);
        if (this.is_punctuation(":")) {
          this.skip_punctuation(":");
        }
        const value = [];
        let next = this.is_interpolation() ? this.parse_interolation() : this.tokens.next();
        while (next.type === "identifier" || next.type === "interpolation" || next.type === "operator") {
          value.push(next);
          next = this.is_interpolation() ? this.parse_interolation() : this.tokens.peek();
          if (!next) break;
          if (next.type === "identifier") this.tokens.next();
          if (next.type === "operator") this.tokens.next();
        }
        if (!value.length) {
          this.tokens.err(`Selector ("${type}") expected "identifier" or "interpolation"`);
        }
        return this.createNode(type, value, start.start, _.last(value).next);
      }
    };
    module2.exports = (tokenStream) => {
      invariant(
        _.isPlainObject(tokenStream) && _.has(tokenStream, "next"),
        "Parser requires a TokenStream"
      );
      const parser = new Parser(tokenStream);
      return parser.parse_stylesheet();
    };
  }
});

// node_modules/scss-parser/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/scss-parser/lib/stringify.js"(exports2, module2) {
    var _ = require_lodash();
    var type = {
      arguments: (n) => "(" + walkValue(n.value) + ")",
      atkeyword: (n) => "@" + n.value,
      attribute: (n) => "[" + walkValue(n.value) + "]",
      block: (n) => "{" + walkValue(n.value) + "}",
      class: (n) => "." + walkValue(n.value),
      color_hex: (n) => "#" + n.value,
      id: (n) => "#" + walkValue(n.value),
      interpolation: (n) => "#{" + walkValue(n.value) + "}",
      comment_multiline: (n) => "/*" + n.value + "*/",
      comment_singleline: (n) => "//" + n.value,
      parentheses: (n) => "(" + walkValue(n.value) + ")",
      pseudo_class: (n) => ":" + walkValue(n.value),
      psuedo_element: (n) => "::" + walkValue(n.value),
      string_double: (n) => `"${n.value}"`,
      string_single: (n) => `'${n.value}'`,
      variable: (n) => "$" + n.value
    };
    var walkNode = (node) => {
      if (type[node.type]) return type[node.type](node);
      if (_.isString(node.value)) return node.value;
      if (_.isArray(node.value)) return walkValue(node.value);
      return "";
    };
    var walkValue = (value) => {
      if (!_.isArray(value)) return "";
      return value.reduce((s, node) => {
        return s + walkNode(node);
      }, "");
    };
    module2.exports = (node) => walkNode(node);
  }
});

// node_modules/scss-parser/lib/index.js
var require_lib = __commonJS({
  "node_modules/scss-parser/lib/index.js"(exports2, module2) {
    var createInputStream = require_input_stream();
    var createTokenStream = require_token_stream();
    var _parse = require_parse();
    var _stringify = require_stringify();
    var parse2 = (css) => _parse(createTokenStream(createInputStream(css)));
    var stringify2 = (node) => _stringify(node);
    module2.exports = {
      parse: parse2,
      stringify: stringify2
    };
  }
});

// node_modules/quartet/lib/empty.js
var require_empty = __commonJS({
  "node_modules/quartet/lib/empty.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EMPTY_OBJ = void 0;
    exports2.EMPTY_OBJ = /* @__PURE__ */ Object.create(null);
  }
});

// node_modules/quartet/lib/schemas/SchemaType.js
var require_SchemaType = __commonJS({
  "node_modules/quartet/lib/schemas/SchemaType.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SchemaType = void 0;
    var SchemaType;
    (function(SchemaType2) {
      SchemaType2["And"] = "__!quartet/And!__";
      SchemaType2["Any"] = "__!quartet/Any!__";
      SchemaType2["Array"] = "__!quartet/Array!__";
      SchemaType2["ArrayOf"] = "__!quartet/ArrayOf!__";
      SchemaType2["Boolean"] = "__!quartet/Boolean!__";
      SchemaType2["Finite"] = "__!quartet/Finite!__";
      SchemaType2["Function"] = "__!quartet/Function!__";
      SchemaType2["Max"] = "__!quartet/Max!__";
      SchemaType2["MaxLength"] = "__!quartet/MaxLength!__";
      SchemaType2["Min"] = "__!quartet/Min!__";
      SchemaType2["MinLength"] = "__!quartet/MinLength!__";
      SchemaType2["Negative"] = "__!quartet/Negative!__";
      SchemaType2["Never"] = "__!quartet/Never!__";
      SchemaType2["Not"] = "__!quartet/Not!__";
      SchemaType2["NotANumber"] = "__!quartet/NotANumber!__";
      SchemaType2["Number"] = "__!quartet/Number!__";
      SchemaType2["Object"] = "__!quartet/Object!__";
      SchemaType2["Pair"] = "__!quartet/Pair!__";
      SchemaType2["Positive"] = "__!quartet/Positive!__";
      SchemaType2["SafeInteger"] = "__!quartet/SafeInteger!__";
      SchemaType2["String"] = "__!quartet/String!__";
      SchemaType2["BigInt"] = "__!quartet/BigInt!__";
      SchemaType2["Symbol"] = "__!quartet/Symbol!__";
      SchemaType2["Test"] = "__!quartet/Test!__";
      SchemaType2["Variant"] = "__!quartet/Variant!__";
      SchemaType2["Custom"] = "__!quartet/Custom!__";
    })(SchemaType || (exports2.SchemaType = SchemaType = {}));
  }
});

// node_modules/quartet/lib/schemas/and.js
var require_and = __commonJS({
  "node_modules/quartet/lib/schemas/and.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.and = and;
    var SchemaType_1 = require_SchemaType();
    function and(schemas) {
      return {
        type: SchemaType_1.SchemaType.And,
        schemas
      };
    }
  }
});

// node_modules/quartet/lib/schemas/anySchema.js
var require_anySchema = __commonJS({
  "node_modules/quartet/lib/schemas/anySchema.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.anySchema = anySchema;
    var SchemaType_1 = require_SchemaType();
    var ANY_SCHEMA = {
      type: SchemaType_1.SchemaType.Any
    };
    function anySchema() {
      return ANY_SCHEMA;
    }
  }
});

// node_modules/quartet/lib/schemas/array.js
var require_array = __commonJS({
  "node_modules/quartet/lib/schemas/array.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.array = array;
    var SchemaType_1 = require_SchemaType();
    var ARRAY_SCHEMA = {
      type: SchemaType_1.SchemaType.Array
    };
    function array() {
      return ARRAY_SCHEMA;
    }
  }
});

// node_modules/quartet/lib/schemas/arrayOf.js
var require_arrayOf = __commonJS({
  "node_modules/quartet/lib/schemas/arrayOf.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.arrayOf = arrayOf;
    var SchemaType_1 = require_SchemaType();
    function arrayOf(elementSchema) {
      return {
        type: SchemaType_1.SchemaType.ArrayOf,
        elementSchema
      };
    }
  }
});

// node_modules/quartet/lib/schemas/boolean.js
var require_boolean = __commonJS({
  "node_modules/quartet/lib/schemas/boolean.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.boolean = boolean;
    var SchemaType_1 = require_SchemaType();
    var BOOLEAN_SCHEMA = {
      type: SchemaType_1.SchemaType.Boolean
    };
    function boolean() {
      return BOOLEAN_SCHEMA;
    }
  }
});

// node_modules/quartet/lib/schemas/custom.js
var require_custom = __commonJS({
  "node_modules/quartet/lib/schemas/custom.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.custom = custom;
    var SchemaType_1 = require_SchemaType();
    function custom(customValidator, description) {
      return {
        customValidator,
        description,
        type: SchemaType_1.SchemaType.Custom
      };
    }
  }
});

// node_modules/quartet/lib/schemas/finite.js
var require_finite = __commonJS({
  "node_modules/quartet/lib/schemas/finite.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.finite = finite;
    var SchemaType_1 = require_SchemaType();
    var FINITE_SCHEMA = {
      type: SchemaType_1.SchemaType.Finite
    };
    function finite() {
      return FINITE_SCHEMA;
    }
  }
});

// node_modules/quartet/lib/schemas/functionSchema.js
var require_functionSchema = __commonJS({
  "node_modules/quartet/lib/schemas/functionSchema.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.functionSchema = functionSchema;
    var SchemaType_1 = require_SchemaType();
    var FUNCTION_SCHEMA = {
      type: SchemaType_1.SchemaType.Function
    };
    function functionSchema() {
      return FUNCTION_SCHEMA;
    }
  }
});

// node_modules/quartet/lib/schemas/max.js
var require_max = __commonJS({
  "node_modules/quartet/lib/schemas/max.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.max = max;
    var SchemaType_1 = require_SchemaType();
    function max(maxValue, isExclusive) {
      return {
        isExclusive,
        maxValue,
        type: SchemaType_1.SchemaType.Max
      };
    }
  }
});

// node_modules/quartet/lib/schemas/maxLength.js
var require_maxLength = __commonJS({
  "node_modules/quartet/lib/schemas/maxLength.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.maxLength = maxLength;
    var SchemaType_1 = require_SchemaType();
    function maxLength(maxLength2, isExclusive) {
      return {
        isExclusive,
        maxLength: maxLength2,
        type: SchemaType_1.SchemaType.MaxLength
      };
    }
  }
});

// node_modules/quartet/lib/schemas/min.js
var require_min = __commonJS({
  "node_modules/quartet/lib/schemas/min.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.min = min;
    var SchemaType_1 = require_SchemaType();
    function min(minValue, isExclusive) {
      return {
        isExclusive,
        minValue,
        type: SchemaType_1.SchemaType.Min
      };
    }
  }
});

// node_modules/quartet/lib/schemas/minLength.js
var require_minLength = __commonJS({
  "node_modules/quartet/lib/schemas/minLength.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.minLength = minLength;
    var SchemaType_1 = require_SchemaType();
    function minLength(minLength2, isExclusive) {
      return {
        isExclusive,
        minLength: minLength2,
        type: SchemaType_1.SchemaType.MinLength
      };
    }
  }
});

// node_modules/quartet/lib/schemas/negative.js
var require_negative = __commonJS({
  "node_modules/quartet/lib/schemas/negative.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.negative = negative;
    var SchemaType_1 = require_SchemaType();
    var NEGATIVE_SCHEMA = {
      type: SchemaType_1.SchemaType.Negative
    };
    function negative() {
      return NEGATIVE_SCHEMA;
    }
  }
});

// node_modules/quartet/lib/schemas/neverSchema.js
var require_neverSchema = __commonJS({
  "node_modules/quartet/lib/schemas/neverSchema.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.neverSchema = neverSchema;
    var SchemaType_1 = require_SchemaType();
    var NEVER_SCHEMA = {
      type: SchemaType_1.SchemaType.Never
    };
    function neverSchema() {
      return NEVER_SCHEMA;
    }
  }
});

// node_modules/quartet/lib/schemas/not.js
var require_not = __commonJS({
  "node_modules/quartet/lib/schemas/not.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.not = not;
    var SchemaType_1 = require_SchemaType();
    function not(schema) {
      return {
        schema,
        type: SchemaType_1.SchemaType.Not
      };
    }
  }
});

// node_modules/quartet/lib/schemas/notANumber.js
var require_notANumber = __commonJS({
  "node_modules/quartet/lib/schemas/notANumber.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.notANumber = notANumber;
    var SchemaType_1 = require_SchemaType();
    var NOT_A_NUMBER_SCHEMA = {
      type: SchemaType_1.SchemaType.NotANumber
    };
    function notANumber() {
      return NOT_A_NUMBER_SCHEMA;
    }
  }
});

// node_modules/quartet/lib/schemas/number.js
var require_number = __commonJS({
  "node_modules/quartet/lib/schemas/number.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.number = number;
    var SchemaType_1 = require_SchemaType();
    var NUMBER_SCHEMA = {
      type: SchemaType_1.SchemaType.Number
    };
    function number() {
      return NUMBER_SCHEMA;
    }
  }
});

// node_modules/quartet/lib/schemas/objectSchema.js
var require_objectSchema = __commonJS({
  "node_modules/quartet/lib/schemas/objectSchema.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.objectSchemaWithRest = objectSchemaWithRest;
    exports2.objectSchemaWithoutRest = objectSchemaWithoutRest;
    var empty_1 = require_empty();
    var SchemaType_1 = require_SchemaType();
    function objectSchemaWithRest(propsSchemas, rest, restOmitDict) {
      return {
        hasRestValidator: true,
        props: Object.keys(propsSchemas),
        propsSchemas,
        rest,
        restOmitDict,
        type: SchemaType_1.SchemaType.Object
      };
    }
    function objectSchemaWithoutRest(propsSchemas) {
      return {
        hasRestValidator: false,
        props: Object.keys(propsSchemas),
        propsSchemas,
        rest: null,
        restOmitDict: empty_1.EMPTY_OBJ,
        type: SchemaType_1.SchemaType.Object
      };
    }
  }
});

// node_modules/quartet/lib/schemas/pair.js
var require_pair = __commonJS({
  "node_modules/quartet/lib/schemas/pair.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.pair = pair;
    var SchemaType_1 = require_SchemaType();
    function pair(keyValueSchema) {
      return {
        keyValueSchema,
        type: SchemaType_1.SchemaType.Pair
      };
    }
  }
});

// node_modules/quartet/lib/schemas/positive.js
var require_positive = __commonJS({
  "node_modules/quartet/lib/schemas/positive.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.positive = positive;
    var SchemaType_1 = require_SchemaType();
    var POSITIVE_SCHEMA = {
      type: SchemaType_1.SchemaType.Positive
    };
    function positive() {
      return POSITIVE_SCHEMA;
    }
  }
});

// node_modules/quartet/lib/schemas/safeInteger.js
var require_safeInteger = __commonJS({
  "node_modules/quartet/lib/schemas/safeInteger.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.safeInteger = safeInteger;
    var SchemaType_1 = require_SchemaType();
    var SAFE_INTEGER_SCHEMA = {
      type: SchemaType_1.SchemaType.SafeInteger
    };
    function safeInteger() {
      return SAFE_INTEGER_SCHEMA;
    }
  }
});

// node_modules/quartet/lib/schemas/SpecialProp.js
var require_SpecialProp = __commonJS({
  "node_modules/quartet/lib/schemas/SpecialProp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SpecialProp = void 0;
    var SpecialProp;
    (function(SpecialProp2) {
      SpecialProp2["Rest"] = "__!quartet/Rest!__";
      SpecialProp2["RestOmit"] = "__!quartet/RestOmit!__";
    })(SpecialProp || (exports2.SpecialProp = SpecialProp = {}));
  }
});

// node_modules/quartet/lib/schemas/string.js
var require_string = __commonJS({
  "node_modules/quartet/lib/schemas/string.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.string = string;
    var SchemaType_1 = require_SchemaType();
    var STRING_SCHEMA = {
      type: SchemaType_1.SchemaType.String
    };
    function string() {
      return STRING_SCHEMA;
    }
  }
});

// node_modules/quartet/lib/schemas/symbol.js
var require_symbol = __commonJS({
  "node_modules/quartet/lib/schemas/symbol.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.symbol = symbol;
    var SchemaType_1 = require_SchemaType();
    var SYMBOL_SCHEMA = {
      type: SchemaType_1.SchemaType.Symbol
    };
    function symbol() {
      return SYMBOL_SCHEMA;
    }
  }
});

// node_modules/quartet/lib/schemas/testSchema.js
var require_testSchema = __commonJS({
  "node_modules/quartet/lib/schemas/testSchema.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.testSchema = testSchema;
    var SchemaType_1 = require_SchemaType();
    function testSchema(tester) {
      return {
        tester,
        type: SchemaType_1.SchemaType.Test
      };
    }
  }
});

// node_modules/quartet/lib/schemas/variant.js
var require_variant = __commonJS({
  "node_modules/quartet/lib/schemas/variant.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.variant = variant;
    var SchemaType_1 = require_SchemaType();
    function variant(variants) {
      return {
        type: SchemaType_1.SchemaType.Variant,
        variants
      };
    }
  }
});

// node_modules/quartet/lib/schemas/index.js
var require_schemas = __commonJS({
  "node_modules/quartet/lib/schemas/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_and(), exports2);
    __exportStar(require_anySchema(), exports2);
    __exportStar(require_array(), exports2);
    __exportStar(require_arrayOf(), exports2);
    __exportStar(require_boolean(), exports2);
    __exportStar(require_custom(), exports2);
    __exportStar(require_finite(), exports2);
    __exportStar(require_functionSchema(), exports2);
    __exportStar(require_max(), exports2);
    __exportStar(require_maxLength(), exports2);
    __exportStar(require_min(), exports2);
    __exportStar(require_minLength(), exports2);
    __exportStar(require_negative(), exports2);
    __exportStar(require_neverSchema(), exports2);
    __exportStar(require_not(), exports2);
    __exportStar(require_notANumber(), exports2);
    __exportStar(require_number(), exports2);
    __exportStar(require_objectSchema(), exports2);
    __exportStar(require_pair(), exports2);
    __exportStar(require_positive(), exports2);
    __exportStar(require_safeInteger(), exports2);
    __exportStar(require_SchemaType(), exports2);
    __exportStar(require_SpecialProp(), exports2);
    __exportStar(require_string(), exports2);
    __exportStar(require_symbol(), exports2);
    __exportStar(require_testSchema(), exports2);
    __exportStar(require_variant(), exports2);
  }
});

// node_modules/quartet/lib/utils.js
var require_utils = __commonJS({
  "node_modules/quartet/lib/utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.has = has;
    exports2.arrToDict = arrToDict;
    exports2.getAccessor = getAccessor;
    exports2.getAccessorWithAlloc = getAccessorWithAlloc;
    var EMPTY = {};
    function has(obj, key) {
      if (obj == null) {
        return false;
      }
      if (EMPTY[key] !== void 0) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
      return obj[key] !== void 0 || key in obj;
    }
    function arrToDict(values) {
      var res = /* @__PURE__ */ Object.create(null);
      for (var i = 0; i < values.length; i++) {
        var value = values[i];
        res[value] = true;
      }
      return res;
    }
    var isSimplePropRegex = /^[a-zA-Z_][_a-zA-Z0-9]*$/;
    function getAccessor(prop) {
      if (typeof prop === "number") {
        return "[".concat(prop, "]");
      }
      if (!isSimplePropRegex.test(prop)) {
        return "[".concat(JSON.stringify(prop), "]");
      }
      return ".".concat(prop);
    }
    function getAccessorWithAlloc(prop, alloc) {
      if (typeof prop === "number") {
        if (Number.isSafeInteger(prop)) {
          return "[".concat(prop, "]");
        }
        var propVar = alloc("c", prop);
        return "[".concat(propVar, "]");
      }
      if (!isSimplePropRegex.test(prop)) {
        return "[".concat(JSON.stringify(prop), "]");
      }
      return ".".concat(prop);
    }
  }
});

// node_modules/quartet/lib/rawSchemaToSchema.js
var require_rawSchemaToSchema = __commonJS({
  "node_modules/quartet/lib/rawSchemaToSchema.js"(exports2) {
    "use strict";
    var __assign = exports2 && exports2.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __rest = exports2 && exports2.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.rawSchemaToSchema = rawSchemaToSchema;
    var empty_1 = require_empty();
    var schemas_1 = require_schemas();
    var SpecialProp_1 = require_SpecialProp();
    var utils_1 = require_utils();
    var schemaTypeDict = (0, utils_1.arrToDict)(Object.values(schemas_1.SchemaType));
    function rawPropsSchemasToPropsSchemas(rawPropsSchemas) {
      var propsSchemas = /* @__PURE__ */ Object.create(null);
      var keys = Object.keys(rawPropsSchemas);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var rawSchema = rawPropsSchemas[key];
        var schema = rawSchemaToSchema(rawSchema);
        propsSchemas[key] = schema;
      }
      return propsSchemas;
    }
    function rawSchemaToSchema(rawSchema) {
      if (rawSchema == null) {
        return rawSchema;
      }
      if (typeof rawSchema === "function") {
        if (!("schema" in rawSchema)) {
          throw new Error("Wrap your validation function with v.custom(...) instead of usage of the function directly");
        }
        return rawSchema.schema;
      }
      if (typeof rawSchema !== "object") {
        if (typeof rawSchema === "number" && Number.isNaN(rawSchema)) {
          return (0, schemas_1.notANumber)();
        }
        return rawSchema;
      }
      if (Array.isArray(rawSchema)) {
        if (rawSchema.length === 0) {
          return (0, schemas_1.neverSchema)();
        }
        if (rawSchema.length === 1) {
          return rawSchemaToSchema(rawSchema[0]);
        }
        var variants = [];
        for (var i = 0; i < rawSchema.length; i++) {
          var rawVariant = rawSchema[i];
          var variant = rawSchemaToSchema(rawVariant);
          variants.push(variant);
        }
        return (0, schemas_1.variant)(variants);
      }
      if ((0, utils_1.has)(rawSchema, "type") && schemaTypeDict[rawSchema.type] === true) {
        return rawSchema;
      }
      if ((0, utils_1.has)(rawSchema, SpecialProp_1.SpecialProp.Rest)) {
        if ((0, utils_1.has)(rawSchema, SpecialProp_1.SpecialProp.RestOmit)) {
          var _a = rawSchema, _b = SpecialProp_1.SpecialProp.Rest, rawRest_1 = _a[_b], _c = SpecialProp_1.SpecialProp.RestOmit, restOmit = _a[_c], rawPropsSchemas_1 = __rest(_a, [typeof _b === "symbol" ? _b : _b + "", typeof _c === "symbol" ? _c : _c + ""]);
          var restSchema_1 = rawSchemaToSchema(rawRest_1);
          var propsSchemas_1 = rawPropsSchemasToPropsSchemas(rawPropsSchemas_1);
          return (0, schemas_1.objectSchemaWithRest)(propsSchemas_1, restSchema_1, (0, utils_1.arrToDict)(restOmit));
        }
        var _d = rawSchema, _e = SpecialProp_1.SpecialProp.Rest, rawRest = _d[_e], rawPropsSchemas = __rest(_d, [typeof _e === "symbol" ? _e : _e + ""]);
        var restSchema = rawSchemaToSchema(rawRest);
        var propsSchemas_2 = rawPropsSchemasToPropsSchemas(rawPropsSchemas);
        return (0, schemas_1.objectSchemaWithRest)(propsSchemas_2, restSchema, empty_1.EMPTY_OBJ);
      }
      if ((0, utils_1.has)(rawSchema, SpecialProp_1.SpecialProp.RestOmit)) {
        var rawPropsSchemas = __assign({}, rawSchema);
        delete rawPropsSchemas[SpecialProp_1.SpecialProp.RestOmit];
        var propsSchemas_3 = rawPropsSchemasToPropsSchemas(rawPropsSchemas);
        return (0, schemas_1.objectSchemaWithoutRest)(propsSchemas_3);
      }
      var propsSchemas = rawPropsSchemasToPropsSchemas(rawSchema);
      return (0, schemas_1.objectSchemaWithoutRest)(propsSchemas);
    }
  }
});

// node_modules/quartet/lib/explanations/types.js
var require_types = __commonJS({
  "node_modules/quartet/lib/explanations/types.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ExplanationSchemaType = void 0;
    var ExplanationSchemaType;
    (function(ExplanationSchemaType2) {
      ExplanationSchemaType2["And"] = "And";
      ExplanationSchemaType2["Any"] = "Any";
      ExplanationSchemaType2["Array"] = "Array";
      ExplanationSchemaType2["ArrayOf"] = "ArrayOf";
      ExplanationSchemaType2["Boolean"] = "Boolean";
      ExplanationSchemaType2["Finite"] = "Finite";
      ExplanationSchemaType2["Function"] = "Function";
      ExplanationSchemaType2["Max"] = "Max";
      ExplanationSchemaType2["MaxLength"] = "MaxLength";
      ExplanationSchemaType2["Min"] = "Min";
      ExplanationSchemaType2["MinLength"] = "MinLength";
      ExplanationSchemaType2["Negative"] = "Negative";
      ExplanationSchemaType2["Never"] = "Never";
      ExplanationSchemaType2["Not"] = "Not";
      ExplanationSchemaType2["NotANumber"] = "NotANumber";
      ExplanationSchemaType2["Number"] = "Number";
      ExplanationSchemaType2["Object"] = "Object";
      ExplanationSchemaType2["Pair"] = "Pair";
      ExplanationSchemaType2["Positive"] = "Positive";
      ExplanationSchemaType2["SafeInteger"] = "SafeInteger";
      ExplanationSchemaType2["String"] = "String";
      ExplanationSchemaType2["BigInt"] = "BigInt";
      ExplanationSchemaType2["Symbol"] = "Symbol";
      ExplanationSchemaType2["Test"] = "Test";
      ExplanationSchemaType2["Variant"] = "Variant";
      ExplanationSchemaType2["Custom"] = "Custom";
    })(ExplanationSchemaType || (exports2.ExplanationSchemaType = ExplanationSchemaType = {}));
  }
});

// node_modules/quartet/lib/explanations/schemaToExplanationSchema.js
var require_schemaToExplanationSchema = __commonJS({
  "node_modules/quartet/lib/explanations/schemaToExplanationSchema.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.schemaToExplanationSchema = schemaToExplanationSchema;
    var schemas_1 = require_schemas();
    var types_1 = require_types();
    function getCustomValidatorDescription(customVailidator) {
      if (typeof customVailidator.description === "string") {
        return customVailidator.description;
      }
      return customVailidator.name || "custom";
    }
    function getTesterDescription(tester) {
      if (typeof tester.description === "string") {
        return tester.description;
      }
      if (typeof tester.name === "string") {
        return tester.name;
      }
      if (typeof tester.toString === "function") {
        return tester.toString();
      }
      return "tester";
    }
    function schemaToExplanationSchema(schema) {
      if (typeof schema !== "object" || schema === null) {
        return schema;
      }
      switch (schema.type) {
        case schemas_1.SchemaType.And:
          return {
            type: types_1.ExplanationSchemaType.And,
            schemas: schema.schemas.map(schemaToExplanationSchema)
          };
        case schemas_1.SchemaType.Any:
          return {
            type: types_1.ExplanationSchemaType.Any
          };
        case schemas_1.SchemaType.Array:
          return {
            type: types_1.ExplanationSchemaType.Array
          };
        case schemas_1.SchemaType.ArrayOf:
          return {
            type: types_1.ExplanationSchemaType.ArrayOf,
            elementSchema: schemaToExplanationSchema(schema.elementSchema)
          };
        case schemas_1.SchemaType.Boolean:
          return {
            type: types_1.ExplanationSchemaType.Boolean
          };
        case schemas_1.SchemaType.Finite:
          return {
            type: types_1.ExplanationSchemaType.Finite
          };
        case schemas_1.SchemaType.Function:
          return {
            type: types_1.ExplanationSchemaType.Function
          };
        case schemas_1.SchemaType.Max:
          return {
            type: types_1.ExplanationSchemaType.Max,
            maxValue: schema.maxValue,
            isExclusive: schema.isExclusive
          };
        case schemas_1.SchemaType.MaxLength:
          return {
            type: types_1.ExplanationSchemaType.MaxLength,
            maxLength: schema.maxLength,
            isExclusive: schema.isExclusive
          };
        case schemas_1.SchemaType.Min:
          return {
            type: types_1.ExplanationSchemaType.Min,
            minValue: schema.minValue,
            isExclusive: schema.isExclusive
          };
        case schemas_1.SchemaType.MinLength:
          return {
            type: types_1.ExplanationSchemaType.MinLength,
            minLength: schema.minLength,
            isExclusive: schema.isExclusive
          };
        case schemas_1.SchemaType.Negative:
          return {
            type: types_1.ExplanationSchemaType.Negative
          };
        case schemas_1.SchemaType.Never:
          return {
            type: types_1.ExplanationSchemaType.Never
          };
        case schemas_1.SchemaType.Not:
          return {
            type: types_1.ExplanationSchemaType.Not,
            schema: schemaToExplanationSchema(schema.schema)
          };
        case schemas_1.SchemaType.NotANumber:
          return {
            type: types_1.ExplanationSchemaType.NotANumber
          };
        case schemas_1.SchemaType.Number:
          return {
            type: types_1.ExplanationSchemaType.Number
          };
        case schemas_1.SchemaType.Object: {
          var propsSchemas = /* @__PURE__ */ Object.create(null);
          var props = schema.props;
          for (var i = 0; i < props.length; i++) {
            var prop = props[i];
            propsSchemas[prop] = schemaToExplanationSchema(schema.propsSchemas[prop]);
          }
          if (!schema.hasRestValidator) {
            return {
              type: types_1.ExplanationSchemaType.Object,
              propsSchemas
            };
          }
          return {
            type: types_1.ExplanationSchemaType.Object,
            propsSchemas,
            "[v.rest]": schemaToExplanationSchema(schema.rest),
            "[v.restOmit]": Object.keys(schema.restOmitDict)
          };
        }
        case schemas_1.SchemaType.Pair:
          return {
            type: types_1.ExplanationSchemaType.Pair,
            keyValueSchema: schemaToExplanationSchema(schema.keyValueSchema)
          };
        case schemas_1.SchemaType.Positive:
          return {
            type: types_1.ExplanationSchemaType.Positive
          };
        case schemas_1.SchemaType.SafeInteger:
          return {
            type: types_1.ExplanationSchemaType.SafeInteger
          };
        case schemas_1.SchemaType.String:
          return {
            type: types_1.ExplanationSchemaType.String
          };
        case schemas_1.SchemaType.BigInt:
          return {
            type: types_1.ExplanationSchemaType.BigInt
          };
        case schemas_1.SchemaType.Symbol:
          return {
            type: types_1.ExplanationSchemaType.Symbol
          };
        case schemas_1.SchemaType.Test:
          return {
            type: types_1.ExplanationSchemaType.Test,
            description: getTesterDescription(schema.tester)
          };
        case schemas_1.SchemaType.Variant:
          return {
            type: types_1.ExplanationSchemaType.Variant,
            variants: schema.variants.map(schemaToExplanationSchema)
          };
        case schemas_1.SchemaType.Custom: {
          var customValidator = schema.customValidator, description = schema.description;
          var innerExplanations = [];
          if ("explanations" in customValidator) {
            var explanations = customValidator.explanations;
            if (Array.isArray(explanations)) {
              innerExplanations = explanations;
            }
          }
          return {
            type: types_1.ExplanationSchemaType.Custom,
            description: description == null ? getCustomValidatorDescription(customValidator) : description,
            innerExplanations
          };
        }
      }
    }
  }
});

// node_modules/quartet/lib/explanations/index.js
var require_explanations = __commonJS({
  "node_modules/quartet/lib/explanations/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_types(), exports2);
    __exportStar(require_schemaToExplanationSchema(), exports2);
  }
});

// node_modules/quartet/lib/compilers/implStandard.js
var require_implStandard = __commonJS({
  "node_modules/quartet/lib/compilers/implStandard.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.implStandard = implStandard;
    function implStandard(v2, explanationsToIssues) {
      return {
        validate: function(value) {
          return v2(value) ? {
            value,
            issues: void 0
          } : {
            issues: explanationsToIssues(v2.explanations)
          };
        },
        vendor: "quartet",
        version: 1
      };
    }
  }
});

// node_modules/quartet/lib/getAlloc.js
var require_getAlloc = __commonJS({
  "node_modules/quartet/lib/getAlloc.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getAlloc = getAlloc;
    var utils_1 = require_utils();
    function getAlloc(context, contextVar) {
      var prefixesCounters = {};
      return function(prefix, initialValue, singleton) {
        if (!prefixesCounters[prefix]) {
          context[prefix] = initialValue;
          prefixesCounters[prefix] = 1;
          return "".concat(contextVar).concat((0, utils_1.getAccessor)(prefix));
        }
        if (singleton) {
          if (context[prefix] !== initialValue) {
            throw new Error("Wrong singleton usage");
          }
          return "".concat(contextVar).concat((0, utils_1.getAccessor)(prefix));
        }
        var newCounter = prefixesCounters[prefix] + 1;
        var newAddress = "".concat(prefix, "_").concat(newCounter);
        prefixesCounters[prefix]++;
        context[newAddress] = initialValue;
        return "".concat(contextVar).concat((0, utils_1.getAccessor)(newAddress));
      };
    }
  }
});

// node_modules/quartet/lib/compilers/beautifyStatements.js
var require_beautifyStatements = __commonJS({
  "node_modules/quartet/lib/compilers/beautifyStatements.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.beautifyStatements = beautifyStatements;
    function addTabs(line, tabsCount) {
      var res = line;
      for (var i = 0; i < tabsCount; i++) {
        res = "  " + res;
      }
      return res;
    }
    function beautifyStatements(statements, intialTabSize) {
      if (intialTabSize === void 0) {
        intialTabSize = 1;
      }
      var res = [];
      var tabsCount = intialTabSize;
      for (var i = 0; i < statements.length; i++) {
        var lines = statements[i].split("\n");
        for (var j = 0; j < lines.length; j++) {
          var line = lines[j].trim();
          if (!line) {
            continue;
          }
          if (line === "}") {
            tabsCount--;
          }
          res.push(addTabs(line, tabsCount));
          if (line[line.length - 1] === "{") {
            tabsCount++;
          }
        }
      }
      return res;
    }
  }
});

// node_modules/quartet/lib/compilers/eCompiler/explanation.js
var require_explanation = __commonJS({
  "node_modules/quartet/lib/compilers/eCompiler/explanation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.explanation = explanation;
    var explanations_1 = require_explanations();
    var EMPTY_PATH = [];
    function explanation(value, path, schema, innerExplanations) {
      if (innerExplanations === void 0) {
        innerExplanations = [];
      }
      return {
        value,
        schema: (0, explanations_1.schemaToExplanationSchema)(schema),
        path: EMPTY_PATH.concat(path),
        innerExplanations
      };
    }
  }
});

// node_modules/quartet/lib/compilers/eCompiler/returnExplanations.js
var require_returnExplanations = __commonJS({
  "node_modules/quartet/lib/compilers/eCompiler/returnExplanations.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.returnExplanations = returnExplanations;
    var SchemaType_1 = require_SchemaType();
    var utils_1 = require_utils();
    var explanation_1 = require_explanation();
    var getExplanator_1 = require_getExplanator();
    function renderExplanation(valueVar, pathVar, schema, alloc, innerExplanationsVar) {
      var getExpVar = alloc("e", function(value, path, innerExplanations) {
        if (innerExplanations === void 0) {
          innerExplanations = [];
        }
        return (0, explanation_1.explanation)(value, path, schema, innerExplanations);
      });
      return innerExplanationsVar ? "".concat(getExpVar, "(").concat(valueVar, ", ").concat(pathVar, ", ").concat(innerExplanationsVar, ")") : "".concat(getExpVar, "(").concat(valueVar, ", ").concat(pathVar, ")");
    }
    function returnExplanations(schema, alloc, valueVar, pathVar, statementsBeforeInvalidReturn) {
      var expsVar = alloc("es", []);
      if (typeof schema !== "object" || schema === null) {
        var constantVar = alloc("c", schema);
        var statements = [];
        statements.push("if (".concat(valueVar, " !== ").concat(constantVar, ") {"), "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]"));
        for (var i = 0; i < statementsBeforeInvalidReturn.length; i++) {
          statements.push(statementsBeforeInvalidReturn[i]);
        }
        statements.push("return ".concat(expsVar), "}");
        return statements;
      }
      switch (schema.type) {
        case SchemaType_1.SchemaType.Not:
        case SchemaType_1.SchemaType.Variant:
        case SchemaType_1.SchemaType.Pair: {
          var explanator = (0, getExplanator_1.getExplanator)(schema);
          var explanatorVar = alloc("variantExp", explanator);
          var funcStatements = [];
          funcStatements.push("".concat(expsVar, " = ").concat(explanatorVar, "(").concat(valueVar, ", ").concat(pathVar, ")"), "if (".concat(expsVar, ") {"));
          for (var i = 0; i < statementsBeforeInvalidReturn.length; i++) {
            funcStatements.push(statementsBeforeInvalidReturn[i]);
          }
          funcStatements.push("return ".concat(expsVar), "}");
          return funcStatements;
        }
        case SchemaType_1.SchemaType.And: {
          var andStatements = [];
          for (var i = 0; i < schema.schemas.length; i++) {
            var innerSchema = schema.schemas[i];
            var innerStatements = returnExplanations(innerSchema, alloc, valueVar, pathVar, statementsBeforeInvalidReturn);
            for (var j = 0; j < innerStatements.length; j++) {
              andStatements.push(innerStatements[j]);
            }
          }
          return andStatements;
        }
        case SchemaType_1.SchemaType.Any:
          return [];
        case SchemaType_1.SchemaType.Array: {
          var arrayStatements = [
            "if (!Array.isArray(".concat(valueVar, ")) {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ];
          for (var i = 0; i < statementsBeforeInvalidReturn.length; i++) {
            arrayStatements.push(statementsBeforeInvalidReturn[i]);
          }
          arrayStatements.push("return ".concat(expsVar), "}");
          return arrayStatements;
        }
        case SchemaType_1.SchemaType.ArrayOf: {
          var arrayOfStatements = [
            "if (!Array.isArray(".concat(valueVar, ")) {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ];
          for (var i = 0; i < statementsBeforeInvalidReturn.length; i++) {
            arrayOfStatements.push(statementsBeforeInvalidReturn[i]);
          }
          arrayOfStatements.push("return ".concat(expsVar), "}");
          var indexVar = alloc("i", 0);
          var elemVar = alloc("e", void 0);
          arrayOfStatements.push("for (".concat(indexVar, " = 0; ").concat(indexVar, " < ").concat(valueVar, ".length; ").concat(indexVar, "++) {"), "".concat(elemVar, " = ").concat(valueVar, "[").concat(indexVar, "]"), "".concat(pathVar, ".push(").concat(indexVar, ")"));
          var handleElementStatements = returnExplanations(schema.elementSchema, alloc, elemVar, pathVar, statementsBeforeInvalidReturn.concat(["".concat(pathVar, ".pop()")]));
          for (var i = 0; i < handleElementStatements.length; i++) {
            arrayOfStatements.push(handleElementStatements[i]);
          }
          arrayOfStatements.push("".concat(pathVar, ".pop()"), "}");
          return arrayOfStatements;
        }
        case SchemaType_1.SchemaType.Boolean:
          return [
            "if (typeof ".concat(valueVar, " !== 'boolean') {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar), "}"]);
        case SchemaType_1.SchemaType.Finite:
          return [
            "if (!Number.isFinite(".concat(valueVar, ")) {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar), "}"]);
        case SchemaType_1.SchemaType.Function:
          return [
            "if (typeof ".concat(valueVar, " !== 'function') {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar), "}"]);
        case SchemaType_1.SchemaType.Max: {
          var maxValueVar = alloc("mv", schema.maxValue);
          var cmpMax = schema.isExclusive ? "<" : "<=";
          return [
            "if (!(".concat(valueVar, " ").concat(cmpMax, " ").concat(maxValueVar, ")) {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar), "}"]);
        }
        case SchemaType_1.SchemaType.MaxLength: {
          var maxLengthVar = alloc("ml", schema.maxLength);
          var cmpMaxLen = schema.isExclusive ? "<" : "<=";
          return [
            "if (".concat(valueVar, " == null || !(").concat(valueVar, ".length ").concat(cmpMaxLen, " ").concat(maxLengthVar, ")) {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar), "}"]);
        }
        case SchemaType_1.SchemaType.Min: {
          var minValueVar = alloc("mv", schema.minValue);
          var cmpMin = schema.isExclusive ? ">" : ">=";
          return [
            "if (!(".concat(valueVar, " ").concat(cmpMin, " ").concat(minValueVar, ")) {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar), "}"]);
        }
        case SchemaType_1.SchemaType.MinLength: {
          var minLengthVar = alloc("ml", schema.minLength);
          var cmpMinLen = schema.isExclusive ? ">" : ">=";
          return [
            "if (".concat(valueVar, " == null || !(").concat(valueVar, ".length ").concat(cmpMinLen, " ").concat(minLengthVar, ")) {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar), "}"]);
        }
        case SchemaType_1.SchemaType.Negative:
          return [
            "if (!(".concat(valueVar, " < 0)) {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar), "}"]);
        case SchemaType_1.SchemaType.Never:
          return [
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar)]);
        case SchemaType_1.SchemaType.NotANumber:
          return [
            "if (!Number.isNaN(".concat(valueVar, ")) {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar), "}"]);
        case SchemaType_1.SchemaType.Number:
          return [
            "if (typeof ".concat(valueVar, " !== 'number') {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar), "}"]);
        case SchemaType_1.SchemaType.Object: {
          var statements = [];
          statements.push("if (".concat(valueVar, " == null) {"), "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]"));
          for (var i = 0; i < statementsBeforeInvalidReturn.length; i++) {
            statements.push(statementsBeforeInvalidReturn[i]);
          }
          statements.push("return ".concat(expsVar), "}");
          var props = schema.props, propsSchemas = schema.propsSchemas;
          for (var i = 0; i < props.length; i++) {
            var prop = props[i];
            var propSchema = propsSchemas[prop];
            statements.push("".concat(pathVar, ".push(").concat(JSON.stringify(prop), ")"));
            var handlePropStatements = returnExplanations(propSchema, alloc, "".concat(valueVar).concat((0, utils_1.getAccessorWithAlloc)(prop, alloc)), pathVar, statementsBeforeInvalidReturn.concat(["".concat(pathVar, ".pop()")]));
            for (var j = 0; j < handlePropStatements.length; j++) {
              statements.push(handlePropStatements[j]);
            }
            statements.push("".concat(pathVar, ".pop()"));
          }
          if (schema.hasRestValidator) {
            var restPropsVar = alloc("rps", []);
            var indexVar = alloc("i", 0);
            var restPropVar = alloc("rp", "");
            var restPropValueVar = alloc("rpv", void 0);
            var hasVar = alloc("has", utils_1.has, true);
            var propsSchemasVar = alloc("ps", schema.propsSchemas);
            var restOmitDictVar = alloc("rod", schema.restOmitDict);
            statements.push("".concat(restPropsVar, " = Object.keys(").concat(valueVar, ")"), "for (".concat(indexVar, " = 0; ").concat(indexVar, " < ").concat(restPropsVar, ".length; ").concat(indexVar, "++) {"), "".concat(restPropVar, " = ").concat(restPropsVar, "[").concat(indexVar, "]"), "if (".concat(hasVar, "(").concat(propsSchemasVar, ", ").concat(restPropVar, ") || ").concat(restOmitDictVar, "[").concat(restPropVar, "] === true) continue;"), "".concat(restPropValueVar, " = ").concat(valueVar, "[").concat(restPropVar, "]"), "".concat(pathVar, ".push(").concat(restPropVar, ")"));
            var handleRestPropStatements = returnExplanations(schema.rest, alloc, restPropValueVar, pathVar, ["".concat(pathVar, ".pop()")]);
            for (var j = 0; j < handleRestPropStatements.length; j++) {
              statements.push(handleRestPropStatements[j]);
            }
            statements.push("".concat(pathVar, ".pop()"), "}");
          }
          return statements;
        }
        case SchemaType_1.SchemaType.Positive:
          return [
            "if (!(".concat(valueVar, " > 0)) {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar), "}"]);
        case SchemaType_1.SchemaType.SafeInteger:
          return [
            "if (!Number.isSafeInteger(".concat(valueVar, ")) {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar), "}"]);
        case SchemaType_1.SchemaType.String:
          return [
            "if (typeof ".concat(valueVar, " !== 'string') {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar), "}"]);
        case SchemaType_1.SchemaType.BigInt:
          return [
            "if (typeof ".concat(valueVar, " !== 'bigint') {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar), "}"]);
        case SchemaType_1.SchemaType.Symbol:
          return [
            "if (typeof ".concat(valueVar, " !== 'symbol') {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar), "}"]);
        case SchemaType_1.SchemaType.Test: {
          var testerVar = alloc("tester", schema.tester);
          return [
            "if (!".concat(testerVar, ".test(").concat(valueVar, ")) {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar), "}"]);
        }
        case SchemaType_1.SchemaType.Custom: {
          var customValidatorVar = alloc("tester", schema.customValidator);
          return [
            "if (!".concat(customValidatorVar, "(").concat(valueVar, ")) {"),
            "".concat(expsVar, " = [").concat(renderExplanation(valueVar, pathVar, schema, alloc), "]")
          ].concat(statementsBeforeInvalidReturn, ["return ".concat(expsVar), "}"]);
        }
      }
    }
  }
});

// node_modules/quartet/lib/compilers/eCompiler/getExplanator.js
var require_getExplanator = __commonJS({
  "node_modules/quartet/lib/compilers/eCompiler/getExplanator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getExplanator = getExplanator;
    var getAlloc_1 = require_getAlloc();
    var SchemaType_1 = require_SchemaType();
    var beautifyStatements_1 = require_beautifyStatements();
    var explanation_1 = require_explanation();
    var returnExplanations_1 = require_returnExplanations();
    function getExplanator(schema) {
      if (typeof schema !== "object" || schema === null) {
        return function(value, path) {
          return value === schema ? null : [(0, explanation_1.explanation)(value, path, schema)];
        };
      }
      switch (schema.type) {
        case SchemaType_1.SchemaType.And:
        case SchemaType_1.SchemaType.ArrayOf:
        case SchemaType_1.SchemaType.Object: {
          var context_1 = {};
          var contextParamName = "ctx";
          var pathParamName = "path";
          var alloc = (0, getAlloc_1.getAlloc)(context_1, contextParamName);
          var statements = (0, returnExplanations_1.returnExplanations)(schema, alloc, "value", pathParamName, []);
          var funcBody = "".concat((0, beautifyStatements_1.beautifyStatements)(statements).join("\n"), "\n  return null");
          var explanator_1 = new Function("value", contextParamName, pathParamName, funcBody);
          return function(value, path) {
            return explanator_1(value, context_1, path);
          };
        }
        case SchemaType_1.SchemaType.Any:
          return function() {
            return null;
          };
        case SchemaType_1.SchemaType.Array:
          return function(value, path) {
            return Array.isArray(value) ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.Boolean:
          return function(value, path) {
            return typeof value === "boolean" ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.Finite:
          return function(value, path) {
            return Number.isFinite(value) ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.Function:
          return function(value, path) {
            return typeof value === "function" ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.Max:
          return schema.isExclusive ? function(value, path) {
            return value < schema.maxValue ? null : [(0, explanation_1.explanation)(value, path, schema)];
          } : function(value, path) {
            return value <= schema.maxValue ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.MaxLength:
          return schema.isExclusive ? function(value, path) {
            return value != null && value.length < schema.maxLength ? null : [(0, explanation_1.explanation)(value, path, schema)];
          } : function(value, path) {
            return value != null && value.length <= schema.maxLength ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.Min:
          return schema.isExclusive ? function(value, path) {
            return value > schema.minValue ? null : [(0, explanation_1.explanation)(value, path, schema)];
          } : function(value, path) {
            return value >= schema.minValue ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.MinLength:
          return schema.isExclusive ? function(value, path) {
            return value != null && value.length > schema.minLength ? null : [(0, explanation_1.explanation)(value, path, schema)];
          } : function(value, path) {
            return value != null && value.length >= schema.minLength ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.Negative:
          return function(value, path) {
            return value < 0 ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.Never:
          return function(value, path) {
            return [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.Not: {
          var oppositeExplanator_1 = getExplanator(schema.schema);
          return function(value, path) {
            return oppositeExplanator_1(value, path) ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        }
        case SchemaType_1.SchemaType.NotANumber:
          return function(value, path) {
            return Number.isNaN(value) ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.Number:
          return function(value, path) {
            return typeof value === "number" ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.Pair: {
          var pairValidationExplanator_1 = getExplanator(schema.keyValueSchema);
          return function(value, path) {
            var pair = { value, key: path[path.length - 1] };
            return pairValidationExplanator_1(pair, path);
          };
        }
        case SchemaType_1.SchemaType.Positive:
          return function(value, path) {
            return value > 0 ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.SafeInteger:
          return function(value, path) {
            return Number.isSafeInteger(value) ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.String:
          return function(value, path) {
            return typeof value === "string" ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.BigInt:
          return function(value, path) {
            return typeof value === "bigint" ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.Symbol:
          return function(value, path) {
            return typeof value === "symbol" ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.Test:
          return function(value, path) {
            return schema.tester.test(value) ? null : [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.Custom:
          return function(value, path) {
            var customValidator = schema.customValidator;
            if (customValidator(value)) {
              return null;
            }
            return [(0, explanation_1.explanation)(value, path, schema)];
          };
        case SchemaType_1.SchemaType.Variant: {
          var explanators_1 = schema.variants.map(function(variantSchema) {
            return getExplanator(variantSchema);
          });
          return function(value, path) {
            var innerExplanations = [];
            for (var i = 0; i < explanators_1.length; i++) {
              var explanator = explanators_1[i];
              var innerExps = explanator(value, path);
              if (!innerExps) {
                return null;
              }
              for (var j = 0; j < innerExps.length; j++) {
                innerExplanations.push(innerExps[j]);
              }
            }
            return [(0, explanation_1.explanation)(value, path, schema, innerExplanations)];
          };
        }
      }
    }
  }
});

// node_modules/quartet/lib/compilers/eCompiler/eCompileSchema.js
var require_eCompileSchema = __commonJS({
  "node_modules/quartet/lib/compilers/eCompiler/eCompileSchema.js"(exports2) {
    "use strict";
    var __read = exports2 && exports2.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.eCompileSchema = eCompileSchema;
    var explanations_1 = require_explanations();
    var implStandard_1 = require_implStandard();
    var getExplanator_1 = require_getExplanator();
    function getExpectedTypeName(schema) {
      if (schema === void 0)
        return "undefined";
      if (schema === null)
        return "null";
      if (typeof schema === "boolean" || typeof schema === "number" || typeof schema === "string")
        return "".concat(JSON.stringify(schema));
      if (typeof schema === "symbol") {
        return "".concat(schema.toString());
      }
      if (typeof schema === "bigint") {
        return "".concat(schema, "n");
      }
      if (schema.type === explanations_1.ExplanationSchemaType.And) {
        return "and<".concat(schema.schemas.map(function(t) {
          return getExpectedTypeName(t);
        }).join(","), ">");
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Any) {
        return "any";
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Array) {
        return "Array<any>";
      }
      if (schema.type === explanations_1.ExplanationSchemaType.ArrayOf) {
        return "Array<".concat(getExpectedTypeName(schema.elementSchema), ">");
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Boolean) {
        return "boolean";
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Finite) {
        return "finite";
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Function) {
        return "function";
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Max) {
        if (schema.isExclusive) {
          return "lt<".concat(schema.maxValue, ">");
        } else {
          return "le<".concat(schema.maxValue, ">");
        }
      }
      if (schema.type === explanations_1.ExplanationSchemaType.MaxLength) {
        if (schema.isExclusive) {
          return "lengthLt<".concat(schema.maxLength, ">");
        }
        return "lengthLe<".concat(schema.maxLength, ">");
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Min) {
        if (schema.isExclusive) {
          return "gt<".concat(schema.minValue, ">");
        } else {
          return "ge<".concat(schema.minValue, ">");
        }
      }
      if (schema.type === explanations_1.ExplanationSchemaType.MinLength) {
        if (schema.isExclusive) {
          return "lengthGt<".concat(schema.minLength, ">");
        }
        return "lengthGe<".concat(schema.minLength, ">");
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Negative) {
        return "ge<0>";
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Never) {
        return "never";
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Not) {
        var inner = getExpectedTypeName(schema.schema);
        return "not<".concat(inner, ">");
      }
      if (schema.type === explanations_1.ExplanationSchemaType.NotANumber) {
        return "NaN";
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Number) {
        return "number";
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Object) {
        return "{ ".concat(Object.entries(schema.propsSchemas).map(function(x) {
          return "".concat(x[0], ": ").concat(getExpectedTypeName(x[1]));
        }), " }");
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Pair) {
        return "pair<".concat(getExpectedTypeName(schema.keyValueSchema), ">");
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Positive) {
        return "gt<0>";
      }
      if (schema.type === explanations_1.ExplanationSchemaType.SafeInteger) {
        return "safeInteger";
      }
      if (schema.type === explanations_1.ExplanationSchemaType.String) {
        return "string";
      }
      if (schema.type === explanations_1.ExplanationSchemaType.BigInt) {
        return "bigint";
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Symbol) {
        return "symbol";
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Test) {
        return "test<".concat(schema.description, ">");
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Variant) {
        return "oneOf<".concat(schema.variants.map(function(x) {
          return getExpectedTypeName(x);
        }).join(", "), ">");
      }
      if (schema.type === explanations_1.ExplanationSchemaType.Custom) {
        return "custom<".concat(schema.description, ">");
      }
      return JSON.stringify(schema);
    }
    function getMessage(explanation) {
      var schema = explanation.schema;
      return "expected type: ".concat(getExpectedTypeName(schema));
    }
    function getPath(explanation) {
      return __spreadArray([], __read(explanation.path), false);
    }
    function eCompileSchema(schema) {
      var explanator = (0, getExplanator_1.getExplanator)(schema);
      var explanations = [];
      function validator(value) {
        var explanationsOrNull = explanator(value, []);
        if (explanationsOrNull) {
          validator.explanations = explanationsOrNull;
          return false;
        } else {
          validator.explanations = [];
          return true;
        }
      }
      var res = Object.assign(validator, {
        explanations,
        schema,
        cast: function() {
          return this;
        }
      });
      res["~standard"] = (0, implStandard_1.implStandard)(res, function(explanations2) {
        return explanations2.map(function(explanation) {
          var message = getMessage(explanation);
          var path = getPath(explanation);
          return {
            /** The error message of the issue. */
            message,
            /** The path of the issue, if any. */
            path
          };
        });
      });
      return res;
    }
  }
});

// node_modules/quartet/lib/compilers/eCompiler/eCompiler.js
var require_eCompiler = __commonJS({
  "node_modules/quartet/lib/compilers/eCompiler/eCompiler.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.eCompiler = eCompiler;
    var rawSchemaToSchema_1 = require_rawSchemaToSchema();
    var eCompileSchema_1 = require_eCompileSchema();
    function eCompiler(rawSchema) {
      return (0, eCompileSchema_1.eCompileSchema)((0, rawSchemaToSchema_1.rawSchemaToSchema)(rawSchema));
    }
  }
});

// node_modules/quartet/lib/compilers/eCompiler/index.js
var require_eCompiler2 = __commonJS({
  "node_modules/quartet/lib/compilers/eCompiler/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_eCompiler(), exports2);
  }
});

// node_modules/quartet/lib/schemas/bigint.js
var require_bigint = __commonJS({
  "node_modules/quartet/lib/schemas/bigint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.bigint = bigint;
    var SchemaType_1 = require_SchemaType();
    var BIGINT_SCHEMA = {
      type: SchemaType_1.SchemaType.BigInt
    };
    function bigint() {
      return BIGINT_SCHEMA;
    }
  }
});

// node_modules/quartet/lib/methods.js
var require_methods = __commonJS({
  "node_modules/quartet/lib/methods.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.methods = void 0;
    var rawSchemaToSchema_1 = require_rawSchemaToSchema();
    var schemas_1 = require_schemas();
    var bigint_1 = require_bigint();
    var EMAIL_REGEX = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i;
    exports2.methods = {
      and: function() {
        var rawSchemas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          rawSchemas[_i] = arguments[_i];
        }
        return (0, schemas_1.and)(rawSchemas.map(rawSchemaToSchema_1.rawSchemaToSchema));
      },
      any: (0, schemas_1.anySchema)(),
      array: (0, schemas_1.array)(),
      arrayOf: function(rawElementSchema) {
        var elementSchema = (0, rawSchemaToSchema_1.rawSchemaToSchema)(rawElementSchema);
        return (0, schemas_1.arrayOf)(elementSchema);
      },
      boolean: (0, schemas_1.boolean)(),
      finite: (0, schemas_1.finite)(),
      bigint: (0, bigint_1.bigint)(),
      function: (0, schemas_1.functionSchema)(),
      max: function(maxValue, isExclusive) {
        if (isExclusive === void 0) {
          isExclusive = false;
        }
        return (0, schemas_1.max)(maxValue, isExclusive);
      },
      maxLength: function(maxLengthValue, isExclusive) {
        if (isExclusive === void 0) {
          isExclusive = false;
        }
        return (0, schemas_1.maxLength)(maxLengthValue, isExclusive);
      },
      min: function(minValue, isExclusive) {
        if (isExclusive === void 0) {
          isExclusive = false;
        }
        return (0, schemas_1.min)(minValue, isExclusive);
      },
      minLength: function(minLengthValue, isExclusive) {
        if (isExclusive === void 0) {
          isExclusive = false;
        }
        return (0, schemas_1.minLength)(minLengthValue, isExclusive);
      },
      negative: (0, schemas_1.negative)(),
      never: (0, schemas_1.neverSchema)(),
      not: function(rawSchema) {
        var schema = (0, rawSchemaToSchema_1.rawSchemaToSchema)(rawSchema);
        return (0, schemas_1.not)(schema);
      },
      number: (0, schemas_1.number)(),
      pair: function(rawKeyValueSchema) {
        var keyValueSchema = (0, rawSchemaToSchema_1.rawSchemaToSchema)(rawKeyValueSchema);
        return (0, schemas_1.pair)(keyValueSchema);
      },
      positive: (0, schemas_1.positive)(),
      rest: schemas_1.SpecialProp.Rest,
      restOmit: schemas_1.SpecialProp.RestOmit,
      safeInteger: (0, schemas_1.safeInteger)(),
      string: (0, schemas_1.string)(),
      symbol: (0, schemas_1.symbol)(),
      email: (0, schemas_1.and)([(0, schemas_1.string)(), (0, schemas_1.testSchema)(EMAIL_REGEX)]),
      test: function(tester) {
        return (0, schemas_1.testSchema)(tester);
      },
      custom: function(customValidator, description) {
        return (0, schemas_1.custom)(customValidator, description);
      }
    };
  }
});

// node_modules/quartet/lib/e.js
var require_e = __commonJS({
  "node_modules/quartet/lib/e.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.e = void 0;
    var eCompiler_1 = require_eCompiler2();
    var methods_1 = require_methods();
    exports2.e = Object.assign(eCompiler_1.eCompiler, methods_1.methods);
  }
});

// node_modules/quartet/lib/types.js
var require_types2 = __commonJS({
  "node_modules/quartet/lib/types.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/quartet/lib/compilers/vCompiler/ifInvalidReturnFalse.js
var require_ifInvalidReturnFalse = __commonJS({
  "node_modules/quartet/lib/compilers/vCompiler/ifInvalidReturnFalse.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ifInvalidReturnFalse = ifInvalidReturnFalse;
    var schemas_1 = require_schemas();
    var utils_1 = require_utils();
    var getValidatorFromSchema_1 = require_getValidatorFromSchema();
    function fromNegation(negationConditionCode) {
      return "if (".concat(negationConditionCode, ") return false");
    }
    function ifInvalidReturnFalse(schema, alloc, valueAddress, keyAddress) {
      if (schema === null) {
        return fromNegation("".concat(valueAddress, " !== null"));
      }
      if (schema === void 0) {
        return fromNegation("".concat(valueAddress, " !== undefined"));
      }
      if (typeof schema !== "object") {
        var primitiveValueAddress = alloc("primitive", schema);
        return fromNegation("".concat(valueAddress, " !== ").concat(primitiveValueAddress));
      }
      switch (schema.type) {
        case schemas_1.SchemaType.And: {
          var ifInvalidReturnFalseStatements = schema.schemas.map(function(innerSchema) {
            return ifInvalidReturnFalse(innerSchema, alloc, valueAddress, keyAddress);
          });
          return ifInvalidReturnFalseStatements.join("\n");
        }
        case schemas_1.SchemaType.Any:
          return "";
        case schemas_1.SchemaType.Array:
          return fromNegation("!Array.isArray(".concat(valueAddress, ")"));
        case schemas_1.SchemaType.ArrayOf: {
          var elementSchema = schema.elementSchema;
          var incrementVar = alloc("i", 0);
          var elementVar = alloc("e", void 0);
          var checkIsArray = "if (!Array.isArray(".concat(valueAddress, ")) return false;");
          var checkElements = "\n        for (".concat(incrementVar, " = 0; ").concat(incrementVar, " < ").concat(valueAddress, ".length; ").concat(incrementVar, "++) {\n            ").concat(elementVar, " = ").concat(valueAddress, "[").concat(incrementVar, "];\n            ").concat(ifInvalidReturnFalse(elementSchema, alloc, elementVar, incrementVar), "\n        }\n      ");
          return [checkIsArray, checkElements].join("\n");
        }
        case schemas_1.SchemaType.Boolean:
          return fromNegation("typeof ".concat(valueAddress, " !== 'boolean'"));
        case schemas_1.SchemaType.Finite:
          return fromNegation("!Number.isFinite(".concat(valueAddress, ")"));
        case schemas_1.SchemaType.Function:
          return fromNegation("typeof ".concat(valueAddress, " !== 'function'"));
        case schemas_1.SchemaType.Max: {
          var maxValueVar = alloc("maxValue", schema.maxValue);
          var cmpMax = schema.isExclusive ? "<" : "<=";
          return fromNegation("!(".concat(valueAddress, " ").concat(cmpMax, " ").concat(maxValueVar, ")"));
        }
        case schemas_1.SchemaType.MaxLength: {
          var maxLengthVar = alloc("maxLength", schema.maxLength);
          var cmpMaxLength = schema.isExclusive ? "<" : "<=";
          return fromNegation("".concat(valueAddress, " == null || !(").concat(valueAddress, ".length ").concat(cmpMaxLength, " ").concat(maxLengthVar, ")"));
        }
        case schemas_1.SchemaType.Min: {
          var minValueVar = alloc("minValue", schema.minValue);
          var cmpMin = schema.isExclusive ? ">" : ">=";
          return fromNegation("!(".concat(valueAddress, " ").concat(cmpMin, " ").concat(minValueVar, ")"));
        }
        case schemas_1.SchemaType.MinLength: {
          var minLengthVar = alloc("minLength", schema.minLength);
          var cmp = schema.isExclusive ? ">" : ">=";
          return fromNegation("".concat(valueAddress, " == null || !(").concat(valueAddress, ".length ").concat(cmp, " ").concat(minLengthVar, ")"));
        }
        case schemas_1.SchemaType.Negative:
          return fromNegation("!(".concat(valueAddress, " < 0)"));
        case schemas_1.SchemaType.Never:
          return "return false";
        case schemas_1.SchemaType.Not: {
          if (typeof schema.schema !== "object" || schema.schema === null) {
            if (schema.schema === null) {
              return fromNegation("".concat(valueAddress, " === null"));
            }
            if (schema.schema === void 0) {
              return fromNegation("".concat(valueAddress, " === undefined"));
            }
            var primitiveValueAddress = alloc("primitive", schema.schema);
            return fromNegation("".concat(valueAddress, " === ").concat(primitiveValueAddress));
          }
          var isValid = (0, getValidatorFromSchema_1.getValidatorFromSchema)(schema.schema, keyAddress);
          var isValidVar = alloc("isValid", isValid);
          return "if (".concat(isValidVar, "(").concat(valueAddress, ")) return false");
        }
        case schemas_1.SchemaType.NotANumber:
          return fromNegation("!Number.isNaN(".concat(valueAddress, ")"));
        case schemas_1.SchemaType.Number:
          return fromNegation("typeof ".concat(valueAddress, " !== 'number'"));
        case schemas_1.SchemaType.Object: {
          var statements = [
            "if (".concat(valueAddress, " == null) return false")
          ];
          for (var i = 0; i < schema.props.length; i++) {
            var prop = schema.props[i];
            var propSchema = schema.propsSchemas[prop];
            var propAccessor = (0, utils_1.getAccessorWithAlloc)(prop, alloc);
            var checkPropStatement = ifInvalidReturnFalse(propSchema, alloc, "".concat(valueAddress).concat(propAccessor), JSON.stringify(prop));
            statements.push(checkPropStatement);
          }
          if (schema.hasRestValidator) {
            var restOmitDictVar = alloc("ro", schema.restOmitDict);
            var restPropsVar = alloc("r", []);
            var incVar = alloc("i", 0);
            statements.push("".concat(restPropsVar, " = Object.keys(").concat(valueAddress, ")"));
            statements.push("for (".concat(incVar, " = 0; ").concat(incVar, " < ").concat(restPropsVar, ".length; ").concat(incVar, "++) {"));
            var restPropVar = alloc("rp", void 0);
            statements.push("".concat(restPropVar, " = ").concat(restPropsVar, "[").concat(incVar, "];"));
            var propsSchemasVar = alloc("ps", schema.propsSchemas);
            var hasVar = alloc("has", utils_1.has, true);
            statements.push("if (".concat(hasVar, "(").concat(propsSchemasVar, ", ").concat(restPropVar, ") || ").concat(restOmitDictVar, "[").concat(restPropVar, "] === true) continue;"));
            var restValueVar = alloc("rv", void 0);
            statements.push("".concat(restValueVar, " = ").concat(valueAddress, "[").concat(restPropVar, "]"));
            statements.push(ifInvalidReturnFalse(schema.rest, alloc, restValueVar, restPropVar));
            statements.push("}");
          }
          return statements.join("\n");
        }
        case schemas_1.SchemaType.Pair: {
          var pairVar = alloc("pair", { value: void 0, key: void 0 });
          return [
            "".concat(pairVar, ".value = ").concat(valueAddress),
            "".concat(pairVar, ".key = ").concat(keyAddress),
            "".concat(ifInvalidReturnFalse(schema.keyValueSchema, alloc, pairVar, keyAddress))
          ].join("\n");
        }
        case schemas_1.SchemaType.Positive:
          return fromNegation("!(".concat(valueAddress, " > 0)"));
        case schemas_1.SchemaType.SafeInteger:
          return fromNegation("!Number.isSafeInteger(".concat(valueAddress, ")"));
        case schemas_1.SchemaType.String:
          return fromNegation("typeof ".concat(valueAddress, " !== 'string'"));
        case schemas_1.SchemaType.BigInt:
          return fromNegation("typeof ".concat(valueAddress, " !== 'bigint'"));
        case schemas_1.SchemaType.Symbol:
          return fromNegation("typeof ".concat(valueAddress, " !== 'symbol'"));
        case schemas_1.SchemaType.Test: {
          var testerVar = alloc("t", schema.tester);
          return fromNegation("!".concat(testerVar, ".test(").concat(valueAddress, ")"));
        }
        case schemas_1.SchemaType.Variant: {
          var isOneOf = (0, getValidatorFromSchema_1.getValidatorFromSchema)(schema, keyAddress);
          var isOneOfVar = alloc("cv", isOneOf);
          return fromNegation("!".concat(isOneOfVar, "(").concat(valueAddress, ")"));
        }
        case schemas_1.SchemaType.Custom: {
          var customVar = alloc("custom", schema.customValidator);
          return fromNegation("!".concat(customVar, "(").concat(valueAddress, ")"));
        }
      }
    }
  }
});

// node_modules/quartet/lib/compilers/vCompiler/getValidatorFromSchema.js
var require_getValidatorFromSchema = __commonJS({
  "node_modules/quartet/lib/compilers/vCompiler/getValidatorFromSchema.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getValidatorFromSchema = getValidatorFromSchema;
    var getAlloc_1 = require_getAlloc();
    var SchemaType_1 = require_SchemaType();
    var beautifyStatements_1 = require_beautifyStatements();
    var ifInvalidReturnFalse_1 = require_ifInvalidReturnFalse();
    function getValidatorFromSchema(schema, key) {
      if (typeof schema !== "object" || schema === null) {
        return function(value) {
          return value === schema;
        };
      }
      switch (schema.type) {
        case SchemaType_1.SchemaType.And:
        case SchemaType_1.SchemaType.Object:
        case SchemaType_1.SchemaType.ArrayOf: {
          var context_1 = {};
          var contextParamName = "ctx";
          var alloc = (0, getAlloc_1.getAlloc)(context_1, contextParamName);
          var funcBody = "".concat((0, beautifyStatements_1.beautifyStatements)([
            (0, ifInvalidReturnFalse_1.ifInvalidReturnFalse)(schema, alloc, "value", key)
          ]).join("\n"), "\n  return true");
          var isValid_1 = new Function("value", contextParamName, funcBody);
          return function(value) {
            return isValid_1(value, context_1);
          };
        }
        case SchemaType_1.SchemaType.Any:
          return function() {
            return true;
          };
        case SchemaType_1.SchemaType.Array:
          return function(value) {
            return Array.isArray(value);
          };
        case SchemaType_1.SchemaType.Boolean:
          return function(value) {
            return typeof value === "boolean";
          };
        case SchemaType_1.SchemaType.Finite:
          return function(value) {
            return Number.isFinite(value);
          };
        case SchemaType_1.SchemaType.Function:
          return function(value) {
            return typeof value === "function";
          };
        case SchemaType_1.SchemaType.Max:
          return schema.isExclusive ? function(value) {
            return value < schema.maxValue;
          } : function(value) {
            return value <= schema.maxValue;
          };
        case SchemaType_1.SchemaType.MaxLength:
          return schema.isExclusive ? function(value) {
            return value != null && value.length < schema.maxLength;
          } : function(value) {
            return value != null && value.length <= schema.maxLength;
          };
        case SchemaType_1.SchemaType.Min:
          return schema.isExclusive ? function(value) {
            return value > schema.minValue;
          } : function(value) {
            return value >= schema.minValue;
          };
        case SchemaType_1.SchemaType.MinLength:
          return schema.isExclusive ? function(value) {
            return value != null && value.length > schema.minLength;
          } : function(value) {
            return value != null && value.length >= schema.minLength;
          };
        case SchemaType_1.SchemaType.Negative:
          return function(value) {
            return value < 0;
          };
        case SchemaType_1.SchemaType.Never:
          return function() {
            return false;
          };
        case SchemaType_1.SchemaType.Not: {
          var isNotValid_1 = getValidatorFromSchema(schema.schema, key);
          return function(value) {
            return !isNotValid_1(value);
          };
        }
        case SchemaType_1.SchemaType.NotANumber:
          return function(value) {
            return Number.isNaN(value);
          };
        case SchemaType_1.SchemaType.Number:
          return function(value) {
            return typeof value === "number";
          };
        case SchemaType_1.SchemaType.Pair: {
          var isValidPair_1 = getValidatorFromSchema(schema.keyValueSchema, key);
          var pair_1 = {
            value: void 0,
            key
          };
          return function(value) {
            pair_1.value = value;
            return isValidPair_1(pair_1);
          };
        }
        case SchemaType_1.SchemaType.Positive:
          return function(value) {
            return value > 0;
          };
        case SchemaType_1.SchemaType.SafeInteger:
          return function(value) {
            return Number.isSafeInteger(value);
          };
        case SchemaType_1.SchemaType.String:
          return function(value) {
            return typeof value === "string";
          };
        case SchemaType_1.SchemaType.BigInt:
          return function(value) {
            return typeof value === "bigint";
          };
        case SchemaType_1.SchemaType.Symbol:
          return function(value) {
            return typeof value === "symbol";
          };
        case SchemaType_1.SchemaType.Test:
          return function(value) {
            return schema.tester.test(value);
          };
        case SchemaType_1.SchemaType.Custom:
          return schema.customValidator;
        case SchemaType_1.SchemaType.Variant: {
          var variants = schema.variants;
          var compiledVariants_1 = variants.map(function(innerSchema) {
            return getValidatorFromSchema(innerSchema, key);
          });
          return function(value) {
            for (var i = 0; i < compiledVariants_1.length; i++) {
              var compiledVariant = compiledVariants_1[i];
              if (compiledVariant(value)) {
                return true;
              }
            }
            return false;
          };
        }
      }
    }
  }
});

// node_modules/quartet/lib/compilers/vCompiler/vCompileSchema.js
var require_vCompileSchema = __commonJS({
  "node_modules/quartet/lib/compilers/vCompiler/vCompileSchema.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.vCompileSchema = vCompileSchema;
    var getValidatorFromSchema_1 = require_getValidatorFromSchema();
    var implStandard_1 = require_implStandard();
    function vCompileSchema(schema) {
      var explanations = [];
      var validator = (0, getValidatorFromSchema_1.getValidatorFromSchema)(schema, void 0);
      var res = Object.assign(validator, {
        explanations,
        schema,
        cast: function() {
          return this;
        }
      });
      res["~standard"] = (0, implStandard_1.implStandard)(res, function() {
        return [
          {
            message: "invalid value",
            path: []
          }
        ];
      });
      return res;
    }
  }
});

// node_modules/quartet/lib/compilers/vCompiler/vCompiler.js
var require_vCompiler = __commonJS({
  "node_modules/quartet/lib/compilers/vCompiler/vCompiler.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.vCompiler = vCompiler;
    var rawSchemaToSchema_1 = require_rawSchemaToSchema();
    var vCompileSchema_1 = require_vCompileSchema();
    function vCompiler(rawSchema) {
      return (0, vCompileSchema_1.vCompileSchema)((0, rawSchemaToSchema_1.rawSchemaToSchema)(rawSchema));
    }
  }
});

// node_modules/quartet/lib/compilers/vCompiler/index.js
var require_vCompiler2 = __commonJS({
  "node_modules/quartet/lib/compilers/vCompiler/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_vCompiler(), exports2);
  }
});

// node_modules/quartet/lib/v.js
var require_v = __commonJS({
  "node_modules/quartet/lib/v.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.v = void 0;
    var vCompiler_1 = require_vCompiler2();
    var methods_1 = require_methods();
    exports2.v = Object.assign(vCompiler_1.vCompiler, methods_1.methods);
  }
});

// node_modules/quartet/lib/IQuartetInstance.js
var require_IQuartetInstance = __commonJS({
  "node_modules/quartet/lib/IQuartetInstance.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/quartet/lib/IRawSchema.js
var require_IRawSchema = __commonJS({
  "node_modules/quartet/lib/IRawSchema.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var SpecialProp_1 = require_SpecialProp();
  }
});

// node_modules/quartet/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/quartet/lib/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    __exportStar(require_e(), exports2);
    __exportStar(require_types(), exports2);
    __exportStar(require_types2(), exports2);
    __exportStar(require_v(), exports2);
    __exportStar(require_IQuartetInstance(), exports2);
    __exportStar(require_IRawSchema(), exports2);
  }
});

// node_modules/get-z-index/dist/get-z-index.cjs.production.min.js
var require_get_z_index_cjs_production_min = __commonJS({
  "node_modules/get-z-index/dist/get-z-index.cjs.production.min.js"(exports2) {
    "use strict";
    function r(r2, t2) {
      r2.prototype = Object.create(t2.prototype), r2.prototype.constructor = r2, e(r2, t2);
    }
    function t(r2) {
      return (t = Object.setPrototypeOf ? Object.getPrototypeOf : function(r3) {
        return r3.__proto__ || Object.getPrototypeOf(r3);
      })(r2);
    }
    function e(r2, t2) {
      return (e = Object.setPrototypeOf || function(r3, t3) {
        return r3.__proto__ = t3, r3;
      })(r2, t2);
    }
    function n() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if ("function" == typeof Proxy) return true;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
        }))), true;
      } catch (r2) {
        return false;
      }
    }
    function o(r2, t2, i2) {
      return (o = n() ? Reflect.construct : function(r3, t3, n2) {
        var o2 = [null];
        o2.push.apply(o2, t3);
        var i3 = new (Function.bind.apply(r3, o2))();
        return n2 && e(i3, n2.prototype), i3;
      }).apply(null, arguments);
    }
    function i(r2) {
      var n2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
      return (i = function(r3) {
        if (null === r3 || -1 === Function.toString.call(r3).indexOf("[native code]")) return r3;
        if ("function" != typeof r3) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== n2) {
          if (n2.has(r3)) return n2.get(r3);
          n2.set(r3, i2);
        }
        function i2() {
          return o(r3, arguments, t(this).constructor);
        }
        return i2.prototype = Object.create(r3.prototype, { constructor: { value: i2, enumerable: false, writable: true, configurable: true } }), e(i2, r3);
      })(r2);
    }
    Object.defineProperty(exports2, "__esModule", { value: true });
    var u = (function(t2) {
      function e2(r2) {
        return t2.call(this, "There is no layer with id: " + JSON.stringify(r2)) || this;
      }
      return r(e2, t2), e2;
    })(i(Error));
    var c = (function(t2) {
      function e2(r2, e3, n2) {
        return t2.call(this, "Layer " + JSON.stringify(r2) + " cannot contain more than " + e3 + " items, but got " + n2) || this;
      }
      return r(e2, t2), e2;
    })(i(Error));
    var l = (function() {
      function r2(r3, t3) {
        this.layerZIndex = r3, this.layerSizes = t3;
      }
      var t2 = r2.prototype;
      return t2.getSafe = function(r3, t3) {
        var e2 = this.layerZIndex[r3];
        if (null == e2) return { isOk: false, error: new u(r3) };
        var n2 = t3 || 0, o2 = this.layerSizes[r3] || 1;
        return n2 >= o2 ? { isOk: false, error: new c(r3, o2, n2) } : { isOk: true, value: e2 + (t3 || 0) };
      }, t2.get = function(r3, t3) {
        var e2 = this.getSafe(r3, t3);
        if (e2.isOk) return e2.value;
        throw e2.error;
      }, t2.getLayersDict = function() {
        return Object.assign(/* @__PURE__ */ Object.create(null), this.layerZIndex);
      }, r2;
    })();
    var a = (function(t2) {
      function e2(r2) {
        var e3;
        return (e3 = t2.call(this, "There is a loop in rules: " + r2.join("->")) || this).loop = r2, e3;
      }
      return r(e2, t2), e2;
    })(i(Error));
    function s(r2, t2, e2) {
      for (var n2 = /* @__PURE__ */ Object.create(null), o2 = /* @__PURE__ */ Object.create(null), i2 = [], u2 = t2 || /* @__PURE__ */ Object.create(null), c2 = e2 || /* @__PURE__ */ Object.create(null), s2 = 0; s2 < r2.length; s2++) {
        var p = r2[s2], h = p[0], v2 = p[1], y = n2[v2] || [];
        y.push(h), n2[v2] = y, null == o2[h] && (o2[h] = u2[h] || 1, i2.push(h)), null == o2[v2] && (o2[v2] = u2[v2] || 1, i2.push(v2));
      }
      var O = (function(r3, t3) {
        for (var e3 = [], n3 = /* @__PURE__ */ Object.create(null), o3 = 0; o3 < r3.length; o3++) {
          var i3 = { index: -1, lowLink: -1, onStack: false, visited: false, successors: [], key: r3[o3] };
          n3[r3[o3]] = i3, e3.push(i3);
        }
        for (var u3 = 0; u3 < r3.length; u3++) {
          var c3 = r3[u3], l2 = t3[c3];
          if (l2) for (var a2 = 0; a2 < l2.length; a2++) {
            var s3 = l2[a2];
            if (s3 === c3) return [c3];
            n3[c3].successors.push(n3[s3]);
          }
        }
        var f2 = 0, p2 = [], h2 = [];
        function v3(r4) {
          r4.index = f2, r4.lowLink = f2, f2++, p2.push(r4), r4.onStack = true;
          for (var t4 = 0; t4 < r4.successors.length; t4++) {
            var e4 = r4.successors[t4];
            e4.index < 0 ? (v3(e4), r4.lowLink = Math.min(r4.lowLink, e4.lowLink)) : e4.onStack && (r4.lowLink = Math.min(r4.lowLink, e4.index));
          }
          if (r4.lowLink === r4.index) {
            var n4, o4 = [];
            do {
              if (!(n4 = p2.pop())) break;
              n4.onStack = false, o4.push(n4);
            } while (n4 !== r4);
            h2.push(o4);
          }
        }
        for (var y2 = 0; y2 < e3.length; y2++) e3[y2].index < 0 && v3(e3[y2]);
        if (h2.length !== r3.length) {
          for (var O2 = 0; O2 < h2.length; O2++) {
            var g2 = h2[O2];
            if (!(g2.length <= 1)) {
              for (var d2 = [], b2 = 0; b2 < g2.length; b2++) d2.push(g2[b2].key);
              return d2;
            }
          }
          return [];
        }
        return null;
      })(i2, n2);
      if (O) return { isOk: false, error: new a(O) };
      for (var g = Object.assign(/* @__PURE__ */ Object.create(null), c2), d = 0; d < i2.length; d++) {
        var b = i2[d];
        g[b] = f(g, o2, n2, b);
      }
      return { isOk: true, value: new l(g, o2) };
    }
    function f(r2, t2, e2, n2) {
      var o2 = r2[n2];
      if (null != o2) return o2;
      var i2 = e2[n2];
      if (!i2 || i2.length <= 0) return 0;
      for (var u2 = f(r2, t2, e2, i2[0]) + (t2[i2[0]] || 1), c2 = 0; c2 < i2.length; c2++) {
        var l2 = i2[c2], a2 = f(r2, t2, e2, l2) + (t2[l2] || 1);
        a2 > u2 && (u2 = a2);
      }
      return r2[n2] = u2, u2;
    }
    exports2.AbsentLayerError = u, exports2.LayerIndexOutOfBoundsError = c, exports2.RuleConflictError = a, exports2.ZIndexProvider = l, exports2.compile = function(r2, t2, e2) {
      var n2 = s(r2, t2, e2);
      if (!n2.isOk) throw n2.error;
      var o2 = n2.value;
      return Object.assign((function(r3, t3) {
        return o2.get(r3, t3);
      }), { zIndexDict: o2.getLayersDict() });
    }, exports2.safeCompile = s;
  }
});

// node_modules/get-z-index/dist/get-z-index.cjs.development.js
var require_get_z_index_cjs_development = __commonJS({
  "node_modules/get-z-index/dist/get-z-index.cjs.development.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [null];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2) _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2)) return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2)) return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function getLoopKeys(layers, lowerLayers) {
      var vertices = [];
      var verticesDict = /* @__PURE__ */ Object.create(null);
      for (var i = 0; i < layers.length; i++) {
        var vertex = {
          index: -1,
          lowLink: -1,
          onStack: false,
          visited: false,
          successors: [],
          key: layers[i]
        };
        verticesDict[layers[i]] = vertex;
        vertices.push(vertex);
      }
      for (var _i = 0; _i < layers.length; _i++) {
        var layer = layers[_i];
        var lowers = lowerLayers[layer];
        if (!lowers) continue;
        for (var j = 0; j < lowers.length; j++) {
          var lower = lowers[j];
          if (lower === layer) {
            return [layer];
          }
          verticesDict[layer].successors.push(verticesDict[lower]);
        }
      }
      var index = 0;
      var stack = [];
      var components = [];
      function stronglyConnect(vertex2) {
        vertex2.index = index;
        vertex2.lowLink = index;
        index++;
        stack.push(vertex2);
        vertex2.onStack = true;
        for (var _i2 = 0; _i2 < vertex2.successors.length; _i2++) {
          var successor = vertex2.successors[_i2];
          if (successor.index < 0) {
            stronglyConnect(successor);
            vertex2.lowLink = Math.min(vertex2.lowLink, successor.lowLink);
          } else if (successor.onStack) {
            vertex2.lowLink = Math.min(vertex2.lowLink, successor.index);
          }
        }
        if (vertex2.lowLink === vertex2.index) {
          var scc = [];
          var w;
          do {
            w = stack.pop();
            if (!w) break;
            w.onStack = false;
            scc.push(w);
          } while (w !== vertex2);
          components.push(scc);
        }
      }
      for (var _i3 = 0; _i3 < vertices.length; _i3++) {
        if (vertices[_i3].index < 0) {
          stronglyConnect(vertices[_i3]);
        }
      }
      if (components.length !== layers.length) {
        for (var _i4 = 0; _i4 < components.length; _i4++) {
          var component = components[_i4];
          if (component.length <= 1) continue;
          var res = [];
          for (var _j = 0; _j < component.length; _j++) {
            res.push(component[_j].key);
          }
          return res;
        }
        return [];
      }
      return null;
    }
    var AbsentLayerError = /* @__PURE__ */ (function(_Error) {
      _inheritsLoose(AbsentLayerError2, _Error);
      function AbsentLayerError2(layerId) {
        return _Error.call(this, "There is no layer with id: " + JSON.stringify(layerId)) || this;
      }
      return AbsentLayerError2;
    })(/* @__PURE__ */ _wrapNativeSuper(Error));
    var LayerIndexOutOfBoundsError = /* @__PURE__ */ (function(_Error2) {
      _inheritsLoose(LayerIndexOutOfBoundsError2, _Error2);
      function LayerIndexOutOfBoundsError2(layerId, layerSize, index) {
        return _Error2.call(this, "Layer " + JSON.stringify(layerId) + " cannot contain more than " + layerSize + " items, but got " + index) || this;
      }
      return LayerIndexOutOfBoundsError2;
    })(/* @__PURE__ */ _wrapNativeSuper(Error));
    var ZIndexProvider = /* @__PURE__ */ (function() {
      function ZIndexProvider2(layerZIndex, layerSizes) {
        this.layerZIndex = layerZIndex;
        this.layerSizes = layerSizes;
      }
      var _proto = ZIndexProvider2.prototype;
      _proto.getSafe = function getSafe(layerId, index) {
        var zIndex = this.layerZIndex[layerId];
        if (zIndex == null) {
          return {
            isOk: false,
            error: new AbsentLayerError(layerId)
          };
        }
        var actualIndex = index || 0;
        var layerSize = this.layerSizes[layerId] || 1;
        if (actualIndex >= layerSize) {
          return {
            isOk: false,
            error: new LayerIndexOutOfBoundsError(layerId, layerSize, actualIndex)
          };
        }
        return {
          isOk: true,
          value: zIndex + (index || 0)
        };
      };
      _proto.get = function get(layerId, index) {
        var res = this.getSafe(layerId, index);
        if (res.isOk) {
          return res.value;
        }
        throw res.error;
      };
      _proto.getLayersDict = function getLayersDict() {
        return Object.assign(/* @__PURE__ */ Object.create(null), this.layerZIndex);
      };
      return ZIndexProvider2;
    })();
    var RuleConflictError = /* @__PURE__ */ (function(_Error3) {
      _inheritsLoose(RuleConflictError2, _Error3);
      function RuleConflictError2(loop) {
        var _this;
        _this = _Error3.call(this, "There is a loop in rules: " + loop.join("->")) || this;
        _this.loop = loop;
        return _this;
      }
      return RuleConflictError2;
    })(/* @__PURE__ */ _wrapNativeSuper(Error));
    function safeCompile2(rules, inputLayerSizeDict, inputPredefinedZIndices) {
      var lowerLayers = /* @__PURE__ */ Object.create(null);
      var fullLayersSizeDict = /* @__PURE__ */ Object.create(null);
      var layers = [];
      var layerSizeDict = inputLayerSizeDict || /* @__PURE__ */ Object.create(null);
      var predefinedZIndices = inputPredefinedZIndices || /* @__PURE__ */ Object.create(null);
      for (var i = 0; i < rules.length; i++) {
        var rule = rules[i];
        var lower = rule[0];
        var upper = rule[1];
        var lowers = lowerLayers[upper] || [];
        lowers.push(lower);
        lowerLayers[upper] = lowers;
        if (fullLayersSizeDict[lower] == null) {
          fullLayersSizeDict[lower] = layerSizeDict[lower] || 1;
          layers.push(lower);
        }
        if (fullLayersSizeDict[upper] == null) {
          fullLayersSizeDict[upper] = layerSizeDict[upper] || 1;
          layers.push(upper);
        }
      }
      var loopedKeys = getLoopKeys(layers, lowerLayers);
      if (loopedKeys) {
        return {
          isOk: false,
          error: new RuleConflictError(loopedKeys)
        };
      }
      var res = Object.assign(/* @__PURE__ */ Object.create(null), predefinedZIndices);
      for (var _i5 = 0; _i5 < layers.length; _i5++) {
        var layer = layers[_i5];
        res[layer] = getMinZIndex(res, fullLayersSizeDict, lowerLayers, layer);
      }
      return {
        isOk: true,
        value: new ZIndexProvider(res, fullLayersSizeDict)
      };
    }
    function getMinZIndex(res, fullLayersSizeDict, lowerLayers, layerId) {
      var memoized = res[layerId];
      if (memoized != null) {
        return memoized;
      }
      var lowers = lowerLayers[layerId];
      if (!lowers || lowers.length <= 0) {
        return 0;
      }
      var maxRes = getMinZIndex(res, fullLayersSizeDict, lowerLayers, lowers[0]) + (fullLayersSizeDict[lowers[0]] || 1);
      for (var i = 0; i < lowers.length; i++) {
        var lower = lowers[i];
        var lowerMinZIndex = getMinZIndex(res, fullLayersSizeDict, lowerLayers, lower);
        var lowerSize = fullLayersSizeDict[lower] || 1;
        var minHigherThanLower = lowerMinZIndex + lowerSize;
        if (minHigherThanLower > maxRes) {
          maxRes = minHigherThanLower;
        }
      }
      res[layerId] = maxRes;
      return maxRes;
    }
    function compile(rules, inputLayerSizeDict, inputPredefinedZIndices) {
      var providerRes = safeCompile2(rules, inputLayerSizeDict, inputPredefinedZIndices);
      if (!providerRes.isOk) {
        throw providerRes.error;
      }
      var provider = providerRes.value;
      return Object.assign(function getZIndex(layerId, index) {
        return provider.get(layerId, index);
      }, {
        zIndexDict: provider.getLayersDict()
      });
    }
    exports2.AbsentLayerError = AbsentLayerError;
    exports2.LayerIndexOutOfBoundsError = LayerIndexOutOfBoundsError;
    exports2.RuleConflictError = RuleConflictError;
    exports2.ZIndexProvider = ZIndexProvider;
    exports2.compile = compile;
    exports2.safeCompile = safeCompile2;
  }
});

// node_modules/get-z-index/dist/index.js
var require_dist = __commonJS({
  "node_modules/get-z-index/dist/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_get_z_index_cjs_production_min();
    } else {
      module2.exports = require_get_z_index_cjs_development();
    }
  }
});

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode = __toESM(require("vscode"));

// src/PROPERTY_NAME_ORDER.ts
var PROPERTY_NAME_ORDER = [
  "display",
  "opacity",
  "visibility",
  "z-index",
  "orientation",
  "max-zoom",
  "min-zoom",
  "user-zoom",
  "zoom",
  "position",
  "top",
  "right",
  "bottom",
  "left",
  "flex",
  "flex-grow",
  "flex-shrink",
  "flex-basis",
  "flex-flow",
  "flex-direction",
  "flex-wrap",
  "justify-content",
  "align-items",
  "align-content",
  "align-self",
  "order",
  "float",
  "clear",
  "box-sizing",
  "width",
  "min-width",
  "max-width",
  "height",
  "min-height",
  "max-height",
  "margin",
  "margin-top",
  "margin-right",
  "margin-bottom",
  "margin-left",
  "padding",
  "padding-top",
  "padding-right",
  "padding-bottom",
  "padding-left",
  "border",
  "border-width",
  "border-style",
  "border-color",
  "border-top",
  "border-top-width",
  "border-top-style",
  "border-top-color",
  "border-right",
  "border-right-width",
  "border-right-style",
  "border-right-color",
  "border-bottom",
  "border-bottom-width",
  "border-bottom-style",
  "border-bottom-color",
  "border-left",
  "border-left-width",
  "border-left-style",
  "border-left-color",
  "border-radius",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-bottom-right-radius",
  "border-bottom-left-radius",
  "border-image",
  "border-image-source",
  "border-image-slice",
  "border-image-width",
  "border-image-outset",
  "border-image-repeat",
  "border-top-image",
  "border-right-image",
  "border-bottom-image",
  "border-left-image",
  "border-corner-image",
  "border-top-left-image",
  "border-top-right-image",
  "border-bottom-right-image",
  "border-bottom-left-image",
  "outline",
  "outline-width",
  "outline-style",
  "outline-color",
  "outline-offset",
  "clip",
  "overflow",
  "overflow-x",
  "overflow-y",
  "list-style",
  "list-style-position",
  "list-style-type",
  "list-style-image",
  "table-layout",
  "border-spacing",
  "border-collapse",
  "caption-side",
  "empty-cells",
  "columns",
  "column-width",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-width",
  "column-rule-style",
  "column-rule-color",
  "column-span",
  "direction",
  "color",
  "font",
  "font-style",
  "font-variant",
  "font-weight",
  "font-size",
  "line-height",
  "font-family",
  "font-size-adjust",
  "font-stretch",
  "text-align",
  "text-align-last",
  "text-decoration",
  "text-emphasis",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-emphasis-color",
  "text-indent",
  "text-justify",
  "text-outline",
  "text-overflow",
  "text-overflow-ellipsis",
  "text-overflow-mode",
  "text-size-adjust",
  "text-transform",
  "text-wrap",
  "text-shadow",
  "vertical-align",
  "writing-mode",
  "hyphens",
  "letter-spacing",
  "tab-size",
  "white-space",
  "word-break",
  "word-spacing",
  "word-wrap",
  "cursor",
  "user-select",
  "nav-index",
  "nav-up",
  "nav-right",
  "nav-down",
  "nav-left",
  "pointer-events",
  "resize",
  "content",
  "counter-increment",
  "counter-reset",
  "quotes",
  "background",
  "background-color",
  "background-image",
  "background-repeat",
  "background-attachment",
  "background-position",
  "background-clip",
  "background-origin",
  "background-size",
  "box-shadow",
  "transition",
  "transition-property",
  "transition-duration",
  "transition-timing-function",
  "transition-delay",
  "animation",
  "animation-name",
  "animation-duration",
  "animation-timing-function",
  "animation-delay",
  "animation-iteration-count",
  "animation-direction",
  "animation-fill-mode",
  "animation-play-state",
  "filter",
  "transform",
  "transform-origin",
  "will-change"
];

// src/comparePropertyNames.ts
var comparePropertyNames = (userDefinedComparator, propertyName1, propertyName2) => {
  if (propertyName1 === propertyName2) {
    return 0;
  }
  const userDefinedComparison = userDefinedComparator(
    propertyName1,
    propertyName2
  );
  if (userDefinedComparison !== 0) {
    return userDefinedComparison;
  }
  const index1 = PROPERTY_NAME_ORDER.indexOf(propertyName1);
  const index2 = PROPERTY_NAME_ORDER.indexOf(propertyName2);
  if (index1 < 0 && index2 < 0) {
    return propertyName1 > propertyName2 ? 1 : -1;
  }
  if (index1 < 0) {
    return -1;
  }
  if (index2 < 0) {
    return 1;
  }
  return index1 > index2 ? 1 : -1;
};

// src/getPropertyNameFromLine.ts
function getPropertyNameFromLine(line) {
  const trimmedLine = line.trim();
  const propertyName = trimmedLine.split(":")[0] || "";
  return propertyName.trim().toLowerCase();
}

// src/compareLines.ts
function compareLines(userDefinedComparator, line1, line2) {
  if (line1 === line2) {
    return 0;
  }
  const propertyName1 = getPropertyNameFromLine(line1);
  const propertyName2 = getPropertyNameFromLine(line2);
  return comparePropertyNames(
    userDefinedComparator,
    propertyName1,
    propertyName2
  );
}

// src/getPropertyName.ts
function getPropertyName(n) {
  if (typeof n.value === "string") {
    return null;
  }
  for (const child of n.value) {
    if (child.type !== "property") {
      continue;
    }
    if (typeof child.value === "string") {
      return child.value;
    }
    let res = "";
    for (const child2 of child.value) {
      if (child2.type === "identifier" && typeof child2.value === "string") {
        res += child2.value;
      }
      if (child2.type === "operator" && typeof child2.value === "string") {
        res += child2.value;
      }
    }
    return res;
  }
  return null;
}

// src/groupNodes.ts
var GroupBuilder = class {
  nodes;
  property;
  constructor() {
    this.nodes = [];
    this.property = "";
  }
  getDeclaration() {
    return this.nodes.find((x) => x.type === "declaration") ?? null;
  }
  canAppend(node) {
    if (this.nodes.length === 0) return true;
    const declaration = this.getDeclaration();
    if (node.type === "declaration") {
      return !declaration && this.nodes.length === 0;
    }
    if (!declaration) {
      return true;
    }
    const lastNode = this.nodes[this.nodes.length - 1];
    if (lastNode == null || lastNode.start == null) return false;
    if (lastNode.start.line === node.start?.line) return true;
    return false;
  }
  build() {
    if (this.isEmpty()) return [];
    const declaration = this.getDeclaration();
    const group = {
      property: declaration ? getPropertyName(declaration) : null,
      nodes: this.nodes
    };
    this.property = "";
    this.nodes = [];
    if (group.nodes.length === 1) return [group];
    if (group.nodes.length > 0 && group.nodes[group.nodes.length - 1].type === "space") {
      const n = group.nodes.pop();
      return [group, { property: null, nodes: n ? [n] : [] }];
    }
    return [group];
  }
  append(node) {
    this.nodes.push(node);
  }
  isEmpty() {
    return this.nodes.length === 0;
  }
};
function groupNodes(nodes) {
  const groups = [];
  const groupBuilder = new GroupBuilder();
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (groupBuilder.canAppend(node)) {
      groupBuilder.append(node);
    } else {
      groups.push(...groupBuilder.build());
      groupBuilder.append(node);
    }
  }
  if (!groupBuilder.isEmpty()) {
    groups.push(...groupBuilder.build());
  }
  return groups;
}

// src/sortSubset.ts
function sortSubset(arr, shouldBeSorted, cmp) {
  const sortableSlices = [];
  const elementsToSort = [];
  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];
    const sortable = shouldBeSorted(x, i, arr);
    if (!sortable) continue;
    elementsToSort.push({ x, i });
    if (sortableSlices.length === 0) {
      sortableSlices.push([i, i + 1]);
      continue;
    }
    const lastSlice = sortableSlices[sortableSlices.length - 1];
    if (lastSlice[1] === i) {
      lastSlice[1] += 1;
    } else {
      sortableSlices.push([i, i + 1]);
    }
  }
  elementsToSort.sort((a, b) => {
    const res = cmp(a.x, b.x);
    if (res !== 0) return res;
    return a.i - b.i;
  });
  while (sortableSlices.length > 0) {
    const last = sortableSlices[sortableSlices.length - 1];
    const lastInd = last[1];
    arr[lastInd - 1] = elementsToSort.pop().x;
    const startInd = last[0];
    if (lastInd === startInd + 1) {
      sortableSlices.pop();
    } else {
      last[1] -= 1;
    }
  }
  if (elementsToSort.length !== 0) {
    throw new Error("Unreachable");
  }
}

// src/sortCssTree.ts
function compareProperties(userDefinedComparator, aName, bName) {
  const aLower = aName.trim().toLowerCase();
  const bLower = bName.trim().toLowerCase();
  return comparePropertyNames(userDefinedComparator, aLower, bLower);
}
function sortBlock(userDefinedComparator, node) {
  if (typeof node.value === "string") {
    return;
  }
  const groups = groupNodes(node.value);
  sortSubset(
    groups,
    (a) => a.property != null,
    (a, b) => compareProperties(userDefinedComparator, a.property, b.property)
  );
  node.value.length = 0;
  for (const g of groups) {
    for (const n of g.nodes) {
      node.value.push(n);
    }
  }
  for (const child of node.value) {
    sortCssTree(userDefinedComparator, child);
  }
}
function sortCssTree(userDefinedComparator, node) {
  if (!node) {
    return;
  }
  if (typeof node === "string") {
    return;
  }
  switch (node.type) {
    case "rule":
    // falltrough
    case "atrule":
    // falltrough
    case "stylesheet": {
      for (const child of node.value) {
        sortCssTree(userDefinedComparator, child);
      }
      return;
    }
    case "declaration":
    // falltrough
    case "selector":
    // falltrough
    case "punctuation":
    // falltrough
    case "string_single":
    // falltrough
    case "identifier":
    // falltrough
    case "space":
    // falltrough
    case "atkeyword": {
      return;
    }
    case "block":
      return sortBlock(userDefinedComparator, node);
    default: {
      if (typeof node.value === "string") {
        return;
      }
      if (!Array.isArray(node.value)) {
        return;
      }
      for (const child of node.value) {
        sortCssTree(userDefinedComparator, child);
      }
    }
  }
}

// src/extension.ts
var import_scss_parser = __toESM(require_lib());
var import_quartet = __toESM(require_lib2());
var import_get_z_index = __toESM(require_dist());
var isValidOrder = (0, import_quartet.e)(
  import_quartet.e.arrayOf(
    import_quartet.e.and(import_quartet.e.arrayOf(import_quartet.e.and(import_quartet.e.string, import_quartet.e.minLength(1))), {
      length: 2
    })
  )
);
function activate(context) {
  let disposableSort = vscode.commands.registerCommand(
    "sort-css-declarations.sort",
    () => {
      const activeEditor = vscode.window.activeTextEditor;
      if (!activeEditor) {
        return;
      }
      const currentSelection = activeEditor.selection;
      if (currentSelection.isSingleLine) {
        return;
      }
      const startLineIndex = currentSelection.start.line;
      const endLineIndex = currentSelection.end.line;
      const { document } = activeEditor;
      const linesTexts = Array.from(
        { length: endLineIndex - startLineIndex + 1 },
        (_, i) => {
          const lineNumber = i + startLineIndex;
          const line = document.lineAt(lineNumber);
          return line.text;
        }
      );
      const userComparator = getUserDefinedComparator();
      if (!userComparator.isOk) {
        return;
      }
      linesTexts.sort(
        (line1, line2) => compareLines(userComparator.value, line1, line2)
      );
      activeEditor.edit((editBuilder) => {
        for (let i = 0; i < linesTexts.length; i++) {
          const lineText = linesTexts[i];
          const lineNumber = i + startLineIndex;
          const editedLine = document.lineAt(lineNumber);
          editBuilder.replace(editedLine.range, lineText);
        }
      });
    }
  );
  function getUserOrder() {
    const x = vscode.workspace.getConfiguration("sort-css-declarations").get("order") ?? [];
    if (!isValidOrder(x)) {
      vscode.window.showErrorMessage(
        "Invalid order configuration. Please check your settings."
      );
      vscode.window.showErrorMessage(
        `Explanation: ${JSON.stringify(isValidOrder.explanations)}`
      );
      return [];
    }
    return x;
  }
  function getUserDefinedComparator() {
    const order = getUserOrder();
    const zIndex = (0, import_get_z_index.safeCompile)(order);
    if (!zIndex.isOk) {
      const error = zIndex.error;
      vscode.window.showErrorMessage(`Error in order configuration: ${error}`);
      return { isOk: false };
    }
    const provider = zIndex.value;
    return {
      isOk: true,
      value: (a, b) => {
        const aRes = provider.getSafe(a, void 0);
        if (!aRes.isOk) {
          return 0;
        }
        const bRes = provider.getSafe(b, void 0);
        if (!bRes.isOk) {
          return 0;
        }
        const aIndex = aRes.value;
        const bIndex = bRes.value;
        if (aIndex > bIndex) {
          return 1;
        }
        if (aIndex < bIndex) {
          return -1;
        }
        return 0;
      }
    };
  }
  let disposeAll = vscode.commands.registerCommand(
    "sort-css-declarations.sort-all",
    () => {
      const activeEditor = vscode.window.activeTextEditor;
      if (!activeEditor) {
        return;
      }
      const { document } = activeEditor;
      const text = document.getText();
      let css;
      try {
        css = (0, import_scss_parser.parse)(text);
      } catch (error) {
        vscode.window.showErrorMessage(
          `Cannot parse the CSS/SCSS:
${error?.message ?? error}`
        );
        console.error("Error parsing CSS/SCSS:", error);
        return;
      }
      if (!css) {
        return;
      }
      const userComparator = getUserDefinedComparator();
      if (!userComparator.isOk) {
        return;
      }
      sortCssTree(userComparator.value, css);
      const newText = (0, import_scss_parser.stringify)(css);
      const start = document.lineAt(0).range.start;
      const end = document.lineAt(document.lineCount - 1).range.end;
      const range = new vscode.Range(start, end);
      activeEditor.edit((editBuilder) => {
        editBuilder.replace(range, newText);
      });
    }
  );
  context.subscriptions.push(disposableSort);
  context.subscriptions.push(disposeAll);
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
//# sourceMappingURL=extension.js.map
