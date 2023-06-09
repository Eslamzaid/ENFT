import {
  c as commonjsGlobal,
  r as reactExports,
  j as jsx,
} from "./index-2b72a6ff.js";
var dist = {},
  _extends = {},
  assignExports = {},
  assign$1 = {
    get exports() {
      return assignExports;
    },
    set exports(e) {
      assignExports = e;
    },
  },
  _globalExports = {},
  _global = {
    get exports() {
      return _globalExports;
    },
    set exports(e) {
      _globalExports = e;
    },
  },
  global$4 = (_global.exports =
    typeof window < "u" && window.Math == Math
      ? window
      : typeof self < "u" && self.Math == Math
      ? self
      : Function("return this")());
typeof __g == "number" && (__g = global$4);
var _coreExports = {},
  _core = {
    get exports() {
      return _coreExports;
    },
    set exports(e) {
      _coreExports = e;
    },
  },
  core$4 = (_core.exports = { version: "2.6.12" });
typeof __e == "number" && (__e = core$4);
var _aFunction = function (e) {
    if (typeof e != "function") throw TypeError(e + " is not a function!");
    return e;
  },
  aFunction = _aFunction,
  _ctx = function (e, t, r) {
    if ((aFunction(e), t === void 0)) return e;
    switch (r) {
      case 1:
        return function (s) {
          return e.call(t, s);
        };
      case 2:
        return function (s, a) {
          return e.call(t, s, a);
        };
      case 3:
        return function (s, a, n) {
          return e.call(t, s, a, n);
        };
    }
    return function () {
      return e.apply(t, arguments);
    };
  },
  _objectDp = {},
  _isObject = function (e) {
    return typeof e == "object" ? e !== null : typeof e == "function";
  },
  isObject$3 = _isObject,
  _anObject = function (e) {
    if (!isObject$3(e)) throw TypeError(e + " is not an object!");
    return e;
  },
  _fails = function (e) {
    try {
      return !!e();
    } catch {
      return !0;
    }
  },
  _descriptors,
  hasRequired_descriptors;
function require_descriptors() {
  return (
    hasRequired_descriptors ||
      ((hasRequired_descriptors = 1),
      (_descriptors = !_fails(function () {
        return (
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      }))),
    _descriptors
  );
}
var _domCreate, hasRequired_domCreate;
function require_domCreate() {
  if (hasRequired_domCreate) return _domCreate;
  hasRequired_domCreate = 1;
  var e = _isObject,
    t = _globalExports.document,
    r = e(t) && e(t.createElement);
  return (
    (_domCreate = function (s) {
      return r ? t.createElement(s) : {};
    }),
    _domCreate
  );
}
var _ie8Doimdefine, hasRequired_ie8Doimdefine;
function require_ie8Doimdefine() {
  return (
    hasRequired_ie8Doimdefine ||
      ((hasRequired_ie8Doimdefine = 1),
      (_ie8Doimdefine =
        !require_descriptors() &&
        !_fails(function () {
          return (
            Object.defineProperty(require_domCreate()("div"), "a", {
              get: function () {
                return 7;
              },
            }).a != 7
          );
        }))),
    _ie8Doimdefine
  );
}
var isObject$2 = _isObject,
  _toPrimitive = function (e, t) {
    if (!isObject$2(e)) return e;
    var r, s;
    if (
      (t &&
        typeof (r = e.toString) == "function" &&
        !isObject$2((s = r.call(e)))) ||
      (typeof (r = e.valueOf) == "function" && !isObject$2((s = r.call(e)))) ||
      (!t &&
        typeof (r = e.toString) == "function" &&
        !isObject$2((s = r.call(e))))
    )
      return s;
    throw TypeError("Can't convert object to primitive value");
  },
  hasRequired_objectDp;
function require_objectDp() {
  if (hasRequired_objectDp) return _objectDp;
  hasRequired_objectDp = 1;
  var e = _anObject,
    t = require_ie8Doimdefine(),
    r = _toPrimitive,
    s = Object.defineProperty;
  return (
    (_objectDp.f = require_descriptors()
      ? Object.defineProperty
      : function (n, o, f) {
          if ((e(n), (o = r(o, !0)), e(f), t))
            try {
              return s(n, o, f);
            } catch {}
          if ("get" in f || "set" in f)
            throw TypeError("Accessors not supported!");
          return "value" in f && (n[o] = f.value), n;
        }),
    _objectDp
  );
}
var _propertyDesc = function (e, t) {
    return {
      enumerable: !(e & 1),
      configurable: !(e & 2),
      writable: !(e & 4),
      value: t,
    };
  },
  dP$2 = require_objectDp(),
  createDesc$2 = _propertyDesc,
  _hide = require_descriptors()
    ? function (e, t, r) {
        return dP$2.f(e, t, createDesc$2(1, r));
      }
    : function (e, t, r) {
        return (e[t] = r), e;
      },
  hasOwnProperty = {}.hasOwnProperty,
  _has = function (e, t) {
    return hasOwnProperty.call(e, t);
  },
  global$3 = _globalExports,
  core$3 = _coreExports,
  ctx = _ctx,
  hide$2 = _hide,
  has$6 = _has,
  PROTOTYPE$2 = "prototype",
  $export$7 = function (e, t, r) {
    var s = e & $export$7.F,
      a = e & $export$7.G,
      n = e & $export$7.S,
      o = e & $export$7.P,
      f = e & $export$7.B,
      l = e & $export$7.W,
      p = a ? core$3 : core$3[t] || (core$3[t] = {}),
      b = p[PROTOTYPE$2],
      P = a ? global$3 : n ? global$3[t] : (global$3[t] || {})[PROTOTYPE$2],
      u,
      _,
      x;
    a && (r = t);
    for (u in r)
      (_ = !s && P && P[u] !== void 0),
        !(_ && has$6(p, u)) &&
          ((x = _ ? P[u] : r[u]),
          (p[u] =
            a && typeof P[u] != "function"
              ? r[u]
              : f && _
              ? ctx(x, global$3)
              : l && P[u] == x
              ? (function (g) {
                  var A = function (d, y, c) {
                    if (this instanceof g) {
                      switch (arguments.length) {
                        case 0:
                          return new g();
                        case 1:
                          return new g(d);
                        case 2:
                          return new g(d, y);
                      }
                      return new g(d, y, c);
                    }
                    return g.apply(this, arguments);
                  };
                  return (A[PROTOTYPE$2] = g[PROTOTYPE$2]), A;
                })(x)
              : o && typeof x == "function"
              ? ctx(Function.call, x)
              : x),
          o &&
            (((p.virtual || (p.virtual = {}))[u] = x),
            e & $export$7.R && b && !b[u] && hide$2(b, u, x)));
  };
$export$7.F = 1;
$export$7.G = 2;
$export$7.S = 4;
$export$7.P = 8;
$export$7.B = 16;
$export$7.W = 32;
$export$7.U = 64;
$export$7.R = 128;
var _export = $export$7,
  toString$1 = {}.toString,
  _cof = function (e) {
    return toString$1.call(e).slice(8, -1);
  },
  _iobject,
  hasRequired_iobject;
function require_iobject() {
  if (hasRequired_iobject) return _iobject;
  hasRequired_iobject = 1;
  var e = _cof;
  return (
    (_iobject = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (t) {
          return e(t) == "String" ? t.split("") : Object(t);
        }),
    _iobject
  );
}
var _defined = function (e) {
    if (e == null) throw TypeError("Can't call method on  " + e);
    return e;
  },
  IObject = require_iobject(),
  defined$2 = _defined,
  _toIobject = function (e) {
    return IObject(defined$2(e));
  },
  ceil = Math.ceil,
  floor = Math.floor,
  _toInteger = function (e) {
    return isNaN((e = +e)) ? 0 : (e > 0 ? floor : ceil)(e);
  },
  toInteger$2 = _toInteger,
  min$1 = Math.min,
  _toLength = function (e) {
    return e > 0 ? min$1(toInteger$2(e), 9007199254740991) : 0;
  },
  toInteger$1 = _toInteger,
  max = Math.max,
  min = Math.min,
  _toAbsoluteIndex = function (e, t) {
    return (e = toInteger$1(e)), e < 0 ? max(e + t, 0) : min(e, t);
  },
  toIObject$5 = _toIobject,
  toLength = _toLength,
  toAbsoluteIndex = _toAbsoluteIndex,
  _arrayIncludes = function (e) {
    return function (t, r, s) {
      var a = toIObject$5(t),
        n = toLength(a.length),
        o = toAbsoluteIndex(s, n),
        f;
      if (e && r != r) {
        for (; n > o; ) if (((f = a[o++]), f != f)) return !0;
      } else
        for (; n > o; o++) if ((e || o in a) && a[o] === r) return e || o || 0;
      return !e && -1;
    };
  },
  _sharedExports = {},
  _shared = {
    get exports() {
      return _sharedExports;
    },
    set exports(e) {
      _sharedExports = e;
    },
  },
  _library = !0,
  core$2 = _coreExports,
  global$2 = _globalExports,
  SHARED = "__core-js_shared__",
  store$1 = global$2[SHARED] || (global$2[SHARED] = {});
(_shared.exports = function (e, t) {
  return store$1[e] || (store$1[e] = t !== void 0 ? t : {});
})("versions", []).push({
  version: core$2.version,
  mode: "pure",
  copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
});
var id$1 = 0,
  px = Math.random(),
  _uid = function (e) {
    return "Symbol(".concat(
      e === void 0 ? "" : e,
      ")_",
      (++id$1 + px).toString(36)
    );
  },
  shared$1 = _sharedExports("keys"),
  uid$2 = _uid,
  _sharedKey = function (e) {
    return shared$1[e] || (shared$1[e] = uid$2(e));
  },
  has$5 = _has,
  toIObject$4 = _toIobject,
  arrayIndexOf = _arrayIncludes(!1),
  IE_PROTO$2 = _sharedKey("IE_PROTO"),
  _objectKeysInternal = function (e, t) {
    var r = toIObject$4(e),
      s = 0,
      a = [],
      n;
    for (n in r) n != IE_PROTO$2 && has$5(r, n) && a.push(n);
    for (; t.length > s; )
      has$5(r, (n = t[s++])) && (~arrayIndexOf(a, n) || a.push(n));
    return a;
  },
  _enumBugKeys =
    "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
      ","
    ),
  $keys$2 = _objectKeysInternal,
  enumBugKeys$1 = _enumBugKeys,
  _objectKeys =
    Object.keys ||
    function (t) {
      return $keys$2(t, enumBugKeys$1);
    },
  _objectGops = {};
_objectGops.f = Object.getOwnPropertySymbols;
var _objectPie = {},
  hasRequired_objectPie;
function require_objectPie() {
  return (
    hasRequired_objectPie ||
      ((hasRequired_objectPie = 1), (_objectPie.f = {}.propertyIsEnumerable)),
    _objectPie
  );
}
var defined$1 = _defined,
  _toObject = function (e) {
    return Object(defined$1(e));
  },
  _objectAssign,
  hasRequired_objectAssign;
function require_objectAssign() {
  if (hasRequired_objectAssign) return _objectAssign;
  hasRequired_objectAssign = 1;
  var e = require_descriptors(),
    t = _objectKeys,
    r = _objectGops,
    s = require_objectPie(),
    a = _toObject,
    n = require_iobject(),
    o = Object.assign;
  return (
    (_objectAssign =
      !o ||
      _fails(function () {
        var f = {},
          l = {},
          p = Symbol(),
          b = "abcdefghijklmnopqrst";
        return (
          (f[p] = 7),
          b.split("").forEach(function (P) {
            l[P] = P;
          }),
          o({}, f)[p] != 7 || Object.keys(o({}, l)).join("") != b
        );
      })
        ? function (l, p) {
            for (
              var b = a(l), P = arguments.length, u = 1, _ = r.f, x = s.f;
              P > u;

            )
              for (
                var g = n(arguments[u++]),
                  A = _ ? t(g).concat(_(g)) : t(g),
                  d = A.length,
                  y = 0,
                  c;
                d > y;

              )
                (c = A[y++]), (!e || x.call(g, c)) && (b[c] = g[c]);
            return b;
          }
        : o),
    _objectAssign
  );
}
var $export$6 = _export;
$export$6($export$6.S + $export$6.F, "Object", {
  assign: require_objectAssign(),
});
var assign = _coreExports.Object.assign;
(function (e) {
  e.exports = { default: assign, __esModule: !0 };
})(assign$1);
_extends.__esModule = !0;
var _assign = assignExports,
  _assign2 = _interopRequireDefault$5(_assign);
function _interopRequireDefault$5(e) {
  return e && e.__esModule ? e : { default: e };
}
_extends.default =
  _assign2.default ||
  function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  };
var getPrototypeOfExports = {},
  getPrototypeOf$2 = {
    get exports() {
      return getPrototypeOfExports;
    },
    set exports(e) {
      getPrototypeOfExports = e;
    },
  },
  has$4 = _has,
  toObject$2 = _toObject,
  IE_PROTO$1 = _sharedKey("IE_PROTO"),
  ObjectProto$1 = Object.prototype,
  _objectGpo =
    Object.getPrototypeOf ||
    function (e) {
      return (
        (e = toObject$2(e)),
        has$4(e, IE_PROTO$1)
          ? e[IE_PROTO$1]
          : typeof e.constructor == "function" && e instanceof e.constructor
          ? e.constructor.prototype
          : e instanceof Object
          ? ObjectProto$1
          : null
      );
    },
  $export$5 = _export,
  core$1 = _coreExports,
  fails = _fails,
  _objectSap = function (e, t) {
    var r = (core$1.Object || {})[e] || Object[e],
      s = {};
    (s[e] = t(r)),
      $export$5(
        $export$5.S +
          $export$5.F *
            fails(function () {
              r(1);
            }),
        "Object",
        s
      );
  },
  toObject$1 = _toObject,
  $getPrototypeOf = _objectGpo;
_objectSap("getPrototypeOf", function () {
  return function (t) {
    return $getPrototypeOf(toObject$1(t));
  };
});
var getPrototypeOf$1 = _coreExports.Object.getPrototypeOf;
(function (e) {
  e.exports = { default: getPrototypeOf$1, __esModule: !0 };
})(getPrototypeOf$2);
var classCallCheck = {};
classCallCheck.__esModule = !0;
classCallCheck.default = function (e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
};
var createClass = {},
  definePropertyExports = {},
  defineProperty$2 = {
    get exports() {
      return definePropertyExports;
    },
    set exports(e) {
      definePropertyExports = e;
    },
  },
  $export$4 = _export;
$export$4($export$4.S + $export$4.F * !require_descriptors(), "Object", {
  defineProperty: require_objectDp().f,
});
var $Object$1 = _coreExports.Object,
  defineProperty$1 = function (t, r, s) {
    return $Object$1.defineProperty(t, r, s);
  };
(function (e) {
  e.exports = { default: defineProperty$1, __esModule: !0 };
})(defineProperty$2);
createClass.__esModule = !0;
var _defineProperty = definePropertyExports,
  _defineProperty2 = _interopRequireDefault$4(_defineProperty);
function _interopRequireDefault$4(e) {
  return e && e.__esModule ? e : { default: e };
}
createClass.default = (function () {
  function e(t, r) {
    for (var s = 0; s < r.length; s++) {
      var a = r[s];
      (a.enumerable = a.enumerable || !1),
        (a.configurable = !0),
        "value" in a && (a.writable = !0),
        (0, _defineProperty2.default)(t, a.key, a);
    }
  }
  return function (t, r, s) {
    return r && e(t.prototype, r), s && e(t, s), t;
  };
})();
var possibleConstructorReturn = {},
  _typeof$1 = {},
  iteratorExports = {},
  iterator$1 = {
    get exports() {
      return iteratorExports;
    },
    set exports(e) {
      iteratorExports = e;
    },
  },
  toInteger = _toInteger,
  defined = _defined,
  _stringAt = function (e) {
    return function (t, r) {
      var s = String(defined(t)),
        a = toInteger(r),
        n = s.length,
        o,
        f;
      return a < 0 || a >= n
        ? e
          ? ""
          : void 0
        : ((o = s.charCodeAt(a)),
          o < 55296 ||
          o > 56319 ||
          a + 1 === n ||
          (f = s.charCodeAt(a + 1)) < 56320 ||
          f > 57343
            ? e
              ? s.charAt(a)
              : o
            : e
            ? s.slice(a, a + 2)
            : ((o - 55296) << 10) + (f - 56320) + 65536);
    };
  },
  _redefineExports = {},
  _redefine = {
    get exports() {
      return _redefineExports;
    },
    set exports(e) {
      _redefineExports = e;
    },
  };
(function (e) {
  e.exports = _hide;
})(_redefine);
var _iterators = {},
  dP$1 = require_objectDp(),
  anObject$2 = _anObject,
  getKeys$1 = _objectKeys,
  _objectDps = require_descriptors()
    ? Object.defineProperties
    : function (t, r) {
        anObject$2(t);
        for (var s = getKeys$1(r), a = s.length, n = 0, o; a > n; )
          dP$1.f(t, (o = s[n++]), r[o]);
        return t;
      },
  _html,
  hasRequired_html;
function require_html() {
  if (hasRequired_html) return _html;
  hasRequired_html = 1;
  var e = _globalExports.document;
  return (_html = e && e.documentElement), _html;
}
var anObject$1 = _anObject,
  dPs = _objectDps,
  enumBugKeys = _enumBugKeys,
  IE_PROTO = _sharedKey("IE_PROTO"),
  Empty = function () {},
  PROTOTYPE$1 = "prototype",
  createDict = function () {
    var e = require_domCreate()("iframe"),
      t = enumBugKeys.length,
      r = "<",
      s = ">",
      a;
    for (
      e.style.display = "none",
        require_html().appendChild(e),
        e.src = "javascript:",
        a = e.contentWindow.document,
        a.open(),
        a.write(r + "script" + s + "document.F=Object" + r + "/script" + s),
        a.close(),
        createDict = a.F;
      t--;

    )
      delete createDict[PROTOTYPE$1][enumBugKeys[t]];
    return createDict();
  },
  _objectCreate =
    Object.create ||
    function (t, r) {
      var s;
      return (
        t !== null
          ? ((Empty[PROTOTYPE$1] = anObject$1(t)),
            (s = new Empty()),
            (Empty[PROTOTYPE$1] = null),
            (s[IE_PROTO] = t))
          : (s = createDict()),
        r === void 0 ? s : dPs(s, r)
      );
    },
  _wksExports = {},
  _wks = {
    get exports() {
      return _wksExports;
    },
    set exports(e) {
      _wksExports = e;
    },
  },
  store = _sharedExports("wks"),
  uid$1 = _uid,
  Symbol$1 = _globalExports.Symbol,
  USE_SYMBOL = typeof Symbol$1 == "function",
  $exports = (_wks.exports = function (e) {
    return (
      store[e] ||
      (store[e] =
        (USE_SYMBOL && Symbol$1[e]) ||
        (USE_SYMBOL ? Symbol$1 : uid$1)("Symbol." + e))
    );
  });
$exports.store = store;
var def = require_objectDp().f,
  has$3 = _has,
  TAG = _wksExports("toStringTag"),
  _setToStringTag = function (e, t, r) {
    e &&
      !has$3((e = r ? e : e.prototype), TAG) &&
      def(e, TAG, { configurable: !0, value: t });
  },
  create$2 = _objectCreate,
  descriptor = _propertyDesc,
  setToStringTag$2 = _setToStringTag,
  IteratorPrototype = {};
_hide(IteratorPrototype, _wksExports("iterator"), function () {
  return this;
});
var _iterCreate = function (e, t, r) {
    (e.prototype = create$2(IteratorPrototype, { next: descriptor(1, r) })),
      setToStringTag$2(e, t + " Iterator");
  },
  $export$3 = _export,
  redefine$1 = _redefineExports,
  hide$1 = _hide,
  Iterators$2 = _iterators,
  $iterCreate = _iterCreate,
  setToStringTag$1 = _setToStringTag,
  getPrototypeOf = _objectGpo,
  ITERATOR = _wksExports("iterator"),
  BUGGY = !([].keys && "next" in [].keys()),
  FF_ITERATOR = "@@iterator",
  KEYS = "keys",
  VALUES = "values",
  returnThis = function () {
    return this;
  },
  _iterDefine = function (e, t, r, s, a, n, o) {
    $iterCreate(r, t, s);
    var f = function (c) {
        if (!BUGGY && c in P) return P[c];
        switch (c) {
          case KEYS:
            return function () {
              return new r(this, c);
            };
          case VALUES:
            return function () {
              return new r(this, c);
            };
        }
        return function () {
          return new r(this, c);
        };
      },
      l = t + " Iterator",
      p = a == VALUES,
      b = !1,
      P = e.prototype,
      u = P[ITERATOR] || P[FF_ITERATOR] || (a && P[a]),
      _ = u || f(a),
      x = a ? (p ? f("entries") : _) : void 0,
      g = (t == "Array" && P.entries) || u,
      A,
      d,
      y;
    if (
      (g &&
        ((y = getPrototypeOf(g.call(new e()))),
        y !== Object.prototype && y.next && setToStringTag$1(y, l, !0)),
      p &&
        u &&
        u.name !== VALUES &&
        ((b = !0),
        (_ = function () {
          return u.call(this);
        })),
      o && (BUGGY || b || !P[ITERATOR]) && hide$1(P, ITERATOR, _),
      (Iterators$2[t] = _),
      (Iterators$2[l] = returnThis),
      a)
    )
      if (
        ((A = { values: p ? _ : f(VALUES), keys: n ? _ : f(KEYS), entries: x }),
        o)
      )
        for (d in A) d in P || redefine$1(P, d, A[d]);
      else $export$3($export$3.P + $export$3.F * (BUGGY || b), t, A);
    return A;
  },
  $at = _stringAt(!0);
_iterDefine(
  String,
  "String",
  function (e) {
    (this._t = String(e)), (this._i = 0);
  },
  function () {
    var e = this._t,
      t = this._i,
      r;
    return t >= e.length
      ? { value: void 0, done: !0 }
      : ((r = $at(e, t)), (this._i += r.length), { value: r, done: !1 });
  }
);
var _iterStep = function (e, t) {
    return { value: t, done: !!e };
  },
  step = _iterStep,
  Iterators$1 = _iterators,
  toIObject$3 = _toIobject;
_iterDefine(
  Array,
  "Array",
  function (e, t) {
    (this._t = toIObject$3(e)), (this._i = 0), (this._k = t);
  },
  function () {
    var e = this._t,
      t = this._k,
      r = this._i++;
    return !e || r >= e.length
      ? ((this._t = void 0), step(1))
      : t == "keys"
      ? step(0, r)
      : t == "values"
      ? step(0, e[r])
      : step(0, [r, e[r]]);
  },
  "values"
);
Iterators$1.Arguments = Iterators$1.Array;
var global$1 = _globalExports,
  hide = _hide,
  Iterators = _iterators,
  TO_STRING_TAG = _wksExports("toStringTag"),
  DOMIterables =
    "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
      ","
    );
for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i],
    Collection = global$1[NAME],
    proto = Collection && Collection.prototype;
  proto && !proto[TO_STRING_TAG] && hide(proto, TO_STRING_TAG, NAME),
    (Iterators[NAME] = Iterators.Array);
}
var _wksExt = {};
_wksExt.f = _wksExports;
var iterator = _wksExt.f("iterator");
(function (e) {
  e.exports = { default: iterator, __esModule: !0 };
})(iterator$1);
var symbolExports = {},
  symbol$1 = {
    get exports() {
      return symbolExports;
    },
    set exports(e) {
      symbolExports = e;
    },
  },
  _metaExports = {},
  _meta = {
    get exports() {
      return _metaExports;
    },
    set exports(e) {
      _metaExports = e;
    },
  },
  META$1 = _uid("meta"),
  isObject$1 = _isObject,
  has$2 = _has,
  setDesc = require_objectDp().f,
  id = 0,
  isExtensible =
    Object.isExtensible ||
    function () {
      return !0;
    },
  FREEZE = !_fails(function () {
    return isExtensible(Object.preventExtensions({}));
  }),
  setMeta = function (e) {
    setDesc(e, META$1, { value: { i: "O" + ++id, w: {} } });
  },
  fastKey = function (e, t) {
    if (!isObject$1(e))
      return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
    if (!has$2(e, META$1)) {
      if (!isExtensible(e)) return "F";
      if (!t) return "E";
      setMeta(e);
    }
    return e[META$1].i;
  },
  getWeak = function (e, t) {
    if (!has$2(e, META$1)) {
      if (!isExtensible(e)) return !0;
      if (!t) return !1;
      setMeta(e);
    }
    return e[META$1].w;
  },
  onFreeze = function (e) {
    return (
      FREEZE &&
        meta$1.NEED &&
        isExtensible(e) &&
        !has$2(e, META$1) &&
        setMeta(e),
      e
    );
  },
  meta$1 = (_meta.exports = {
    KEY: META$1,
    NEED: !1,
    fastKey,
    getWeak,
    onFreeze,
  }),
  core = _coreExports,
  wksExt$1 = _wksExt,
  defineProperty = require_objectDp().f,
  _wksDefine = function (e) {
    var t = core.Symbol || (core.Symbol = {});
    e.charAt(0) != "_" &&
      !(e in t) &&
      defineProperty(t, e, { value: wksExt$1.f(e) });
  },
  getKeys = _objectKeys,
  gOPS = _objectGops,
  pIE$1 = require_objectPie(),
  _enumKeys = function (e) {
    var t = getKeys(e),
      r = gOPS.f;
    if (r)
      for (var s = r(e), a = pIE$1.f, n = 0, o; s.length > n; )
        a.call(e, (o = s[n++])) && t.push(o);
    return t;
  },
  cof = _cof,
  _isArray =
    Array.isArray ||
    function (t) {
      return cof(t) == "Array";
    },
  _objectGopnExt = {},
  _objectGopn = {},
  $keys$1 = _objectKeysInternal,
  hiddenKeys = _enumBugKeys.concat("length", "prototype");
_objectGopn.f =
  Object.getOwnPropertyNames ||
  function (t) {
    return $keys$1(t, hiddenKeys);
  };
var toIObject$2 = _toIobject,
  gOPN$1 = _objectGopn.f,
  toString = {}.toString,
  windowNames =
    typeof window == "object" && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [],
  getWindowNames = function (e) {
    try {
      return gOPN$1(e);
    } catch {
      return windowNames.slice();
    }
  };
_objectGopnExt.f = function (t) {
  return windowNames && toString.call(t) == "[object Window]"
    ? getWindowNames(t)
    : gOPN$1(toIObject$2(t));
};
var _objectGopd = {},
  pIE = require_objectPie(),
  createDesc$1 = _propertyDesc,
  toIObject$1 = _toIobject,
  toPrimitive$1 = _toPrimitive,
  has$1 = _has,
  IE8_DOM_DEFINE = require_ie8Doimdefine(),
  gOPD$1 = Object.getOwnPropertyDescriptor;
_objectGopd.f = require_descriptors()
  ? gOPD$1
  : function (t, r) {
      if (((t = toIObject$1(t)), (r = toPrimitive$1(r, !0)), IE8_DOM_DEFINE))
        try {
          return gOPD$1(t, r);
        } catch {}
      if (has$1(t, r)) return createDesc$1(!pIE.f.call(t, r), t[r]);
    };
var global = _globalExports,
  has = _has,
  DESCRIPTORS = require_descriptors(),
  $export$2 = _export,
  redefine = _redefineExports,
  META = _metaExports.KEY,
  $fails = _fails,
  shared = _sharedExports,
  setToStringTag = _setToStringTag,
  uid = _uid,
  wks = _wksExports,
  wksExt = _wksExt,
  wksDefine = _wksDefine,
  enumKeys = _enumKeys,
  isArray = _isArray,
  anObject = _anObject,
  isObject = _isObject,
  toObject = _toObject,
  toIObject = _toIobject,
  toPrimitive = _toPrimitive,
  createDesc = _propertyDesc,
  _create$1 = _objectCreate,
  gOPNExt = _objectGopnExt,
  $GOPD = _objectGopd,
  $GOPS = _objectGops,
  $DP = require_objectDp(),
  $keys = _objectKeys,
  gOPD = $GOPD.f,
  dP = $DP.f,
  gOPN = gOPNExt.f,
  $Symbol = global.Symbol,
  $JSON = global.JSON,
  _stringify = $JSON && $JSON.stringify,
  PROTOTYPE = "prototype",
  HIDDEN = wks("_hidden"),
  TO_PRIMITIVE = wks("toPrimitive"),
  isEnum = {}.propertyIsEnumerable,
  SymbolRegistry = shared("symbol-registry"),
  AllSymbols = shared("symbols"),
  OPSymbols = shared("op-symbols"),
  ObjectProto = Object[PROTOTYPE],
  USE_NATIVE = typeof $Symbol == "function" && !!$GOPS.f,
  QObject = global.QObject,
  setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild,
  setSymbolDesc =
    DESCRIPTORS &&
    $fails(function () {
      return (
        _create$1(
          dP({}, "a", {
            get: function () {
              return dP(this, "a", { value: 7 }).a;
            },
          })
        ).a != 7
      );
    })
      ? function (e, t, r) {
          var s = gOPD(ObjectProto, t);
          s && delete ObjectProto[t],
            dP(e, t, r),
            s && e !== ObjectProto && dP(ObjectProto, t, s);
        }
      : dP,
  wrap = function (e) {
    var t = (AllSymbols[e] = _create$1($Symbol[PROTOTYPE]));
    return (t._k = e), t;
  },
  isSymbol =
    USE_NATIVE && typeof $Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          return e instanceof $Symbol;
        },
  $defineProperty = function (t, r, s) {
    return (
      t === ObjectProto && $defineProperty(OPSymbols, r, s),
      anObject(t),
      (r = toPrimitive(r, !0)),
      anObject(s),
      has(AllSymbols, r)
        ? (s.enumerable
            ? (has(t, HIDDEN) && t[HIDDEN][r] && (t[HIDDEN][r] = !1),
              (s = _create$1(s, { enumerable: createDesc(0, !1) })))
            : (has(t, HIDDEN) || dP(t, HIDDEN, createDesc(1, {})),
              (t[HIDDEN][r] = !0)),
          setSymbolDesc(t, r, s))
        : dP(t, r, s)
    );
  },
  $defineProperties = function (t, r) {
    anObject(t);
    for (var s = enumKeys((r = toIObject(r))), a = 0, n = s.length, o; n > a; )
      $defineProperty(t, (o = s[a++]), r[o]);
    return t;
  },
  $create = function (t, r) {
    return r === void 0 ? _create$1(t) : $defineProperties(_create$1(t), r);
  },
  $propertyIsEnumerable = function (t) {
    var r = isEnum.call(this, (t = toPrimitive(t, !0)));
    return this === ObjectProto && has(AllSymbols, t) && !has(OPSymbols, t)
      ? !1
      : r ||
        !has(this, t) ||
        !has(AllSymbols, t) ||
        (has(this, HIDDEN) && this[HIDDEN][t])
      ? r
      : !0;
  },
  $getOwnPropertyDescriptor = function (t, r) {
    if (
      ((t = toIObject(t)),
      (r = toPrimitive(r, !0)),
      !(t === ObjectProto && has(AllSymbols, r) && !has(OPSymbols, r)))
    ) {
      var s = gOPD(t, r);
      return (
        s &&
          has(AllSymbols, r) &&
          !(has(t, HIDDEN) && t[HIDDEN][r]) &&
          (s.enumerable = !0),
        s
      );
    }
  },
  $getOwnPropertyNames = function (t) {
    for (var r = gOPN(toIObject(t)), s = [], a = 0, n; r.length > a; )
      !has(AllSymbols, (n = r[a++])) && n != HIDDEN && n != META && s.push(n);
    return s;
  },
  $getOwnPropertySymbols = function (t) {
    for (
      var r = t === ObjectProto,
        s = gOPN(r ? OPSymbols : toIObject(t)),
        a = [],
        n = 0,
        o;
      s.length > n;

    )
      has(AllSymbols, (o = s[n++])) &&
        (!r || has(ObjectProto, o)) &&
        a.push(AllSymbols[o]);
    return a;
  };
USE_NATIVE ||
  (($Symbol = function () {
    if (this instanceof $Symbol)
      throw TypeError("Symbol is not a constructor!");
    var t = uid(arguments.length > 0 ? arguments[0] : void 0),
      r = function (s) {
        this === ObjectProto && r.call(OPSymbols, s),
          has(this, HIDDEN) && has(this[HIDDEN], t) && (this[HIDDEN][t] = !1),
          setSymbolDesc(this, t, createDesc(1, s));
      };
    return (
      DESCRIPTORS &&
        setter &&
        setSymbolDesc(ObjectProto, t, { configurable: !0, set: r }),
      wrap(t)
    );
  }),
  redefine($Symbol[PROTOTYPE], "toString", function () {
    return this._k;
  }),
  ($GOPD.f = $getOwnPropertyDescriptor),
  ($DP.f = $defineProperty),
  (_objectGopn.f = gOPNExt.f = $getOwnPropertyNames),
  (require_objectPie().f = $propertyIsEnumerable),
  ($GOPS.f = $getOwnPropertySymbols),
  DESCRIPTORS &&
    !_library &&
    redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, !0),
  (wksExt.f = function (e) {
    return wrap(wks(e));
  }));
$export$2($export$2.G + $export$2.W + $export$2.F * !USE_NATIVE, {
  Symbol: $Symbol,
});
for (
  var es6Symbols =
      "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
        ","
      ),
    j = 0;
  es6Symbols.length > j;

)
  wks(es6Symbols[j++]);
for (
  var wellKnownSymbols = $keys(wks.store), k = 0;
  wellKnownSymbols.length > k;

)
  wksDefine(wellKnownSymbols[k++]);
$export$2($export$2.S + $export$2.F * !USE_NATIVE, "Symbol", {
  for: function (e) {
    return has(SymbolRegistry, (e += ""))
      ? SymbolRegistry[e]
      : (SymbolRegistry[e] = $Symbol(e));
  },
  keyFor: function (t) {
    if (!isSymbol(t)) throw TypeError(t + " is not a symbol!");
    for (var r in SymbolRegistry) if (SymbolRegistry[r] === t) return r;
  },
  useSetter: function () {
    setter = !0;
  },
  useSimple: function () {
    setter = !1;
  },
});
$export$2($export$2.S + $export$2.F * !USE_NATIVE, "Object", {
  create: $create,
  defineProperty: $defineProperty,
  defineProperties: $defineProperties,
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  getOwnPropertyNames: $getOwnPropertyNames,
  getOwnPropertySymbols: $getOwnPropertySymbols,
});
var FAILS_ON_PRIMITIVES = $fails(function () {
  $GOPS.f(1);
});
$export$2($export$2.S + $export$2.F * FAILS_ON_PRIMITIVES, "Object", {
  getOwnPropertySymbols: function (t) {
    return $GOPS.f(toObject(t));
  },
});
$JSON &&
  $export$2(
    $export$2.S +
      $export$2.F *
        (!USE_NATIVE ||
          $fails(function () {
            var e = $Symbol();
            return (
              _stringify([e]) != "[null]" ||
              _stringify({ a: e }) != "{}" ||
              _stringify(Object(e)) != "{}"
            );
          })),
    "JSON",
    {
      stringify: function (t) {
        for (var r = [t], s = 1, a, n; arguments.length > s; )
          r.push(arguments[s++]);
        if (((n = a = r[1]), !((!isObject(a) && t === void 0) || isSymbol(t))))
          return (
            isArray(a) ||
              (a = function (o, f) {
                if (
                  (typeof n == "function" && (f = n.call(this, o, f)),
                  !isSymbol(f))
                )
                  return f;
              }),
            (r[1] = a),
            _stringify.apply($JSON, r)
          );
      },
    }
  );
$Symbol[PROTOTYPE][TO_PRIMITIVE] ||
  _hide($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
setToStringTag($Symbol, "Symbol");
setToStringTag(Math, "Math", !0);
setToStringTag(global.JSON, "JSON", !0);
_wksDefine("asyncIterator");
_wksDefine("observable");
var symbol = _coreExports.Symbol;
(function (e) {
  e.exports = { default: symbol, __esModule: !0 };
})(symbol$1);
_typeof$1.__esModule = !0;
var _iterator = iteratorExports,
  _iterator2 = _interopRequireDefault$3(_iterator),
  _symbol = symbolExports,
  _symbol2 = _interopRequireDefault$3(_symbol),
  _typeof =
    typeof _symbol2.default == "function" &&
    typeof _iterator2.default == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof _symbol2.default == "function" &&
            e.constructor === _symbol2.default &&
            e !== _symbol2.default.prototype
            ? "symbol"
            : typeof e;
        };
function _interopRequireDefault$3(e) {
  return e && e.__esModule ? e : { default: e };
}
_typeof$1.default =
  typeof _symbol2.default == "function" &&
  _typeof(_iterator2.default) === "symbol"
    ? function (e) {
        return typeof e > "u" ? "undefined" : _typeof(e);
      }
    : function (e) {
        return e &&
          typeof _symbol2.default == "function" &&
          e.constructor === _symbol2.default &&
          e !== _symbol2.default.prototype
          ? "symbol"
          : typeof e > "u"
          ? "undefined"
          : _typeof(e);
      };
possibleConstructorReturn.__esModule = !0;
var _typeof2$1 = _typeof$1,
  _typeof3$1 = _interopRequireDefault$2(_typeof2$1);
function _interopRequireDefault$2(e) {
  return e && e.__esModule ? e : { default: e };
}
possibleConstructorReturn.default = function (e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t &&
    ((typeof t > "u" ? "undefined" : (0, _typeof3$1.default)(t)) === "object" ||
      typeof t == "function")
    ? t
    : e;
};
var inherits = {},
  setPrototypeOfExports = {},
  setPrototypeOf$1 = {
    get exports() {
      return setPrototypeOfExports;
    },
    set exports(e) {
      setPrototypeOfExports = e;
    },
  },
  _setProto,
  hasRequired_setProto;
function require_setProto() {
  if (hasRequired_setProto) return _setProto;
  hasRequired_setProto = 1;
  var e = _isObject,
    t = _anObject,
    r = function (s, a) {
      if ((t(s), !e(a) && a !== null))
        throw TypeError(a + ": can't set as prototype!");
    };
  return (
    (_setProto = {
      set:
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function (s, a, n) {
              try {
                (n = _ctx(
                  Function.call,
                  _objectGopd.f(Object.prototype, "__proto__").set,
                  2
                )),
                  n(s, []),
                  (a = !(s instanceof Array));
              } catch {
                a = !0;
              }
              return function (f, l) {
                return r(f, l), a ? (f.__proto__ = l) : n(f, l), f;
              };
            })({}, !1)
          : void 0),
      check: r,
    }),
    _setProto
  );
}
var $export$1 = _export;
$export$1($export$1.S, "Object", { setPrototypeOf: require_setProto().set });
var setPrototypeOf = _coreExports.Object.setPrototypeOf;
(function (e) {
  e.exports = { default: setPrototypeOf, __esModule: !0 };
})(setPrototypeOf$1);
var createExports = {},
  create$1 = {
    get exports() {
      return createExports;
    },
    set exports(e) {
      createExports = e;
    },
  },
  $export = _export;
$export($export.S, "Object", { create: _objectCreate });
var $Object = _coreExports.Object,
  create = function (t, r) {
    return $Object.create(t, r);
  };
(function (e) {
  e.exports = { default: create, __esModule: !0 };
})(create$1);
inherits.__esModule = !0;
var _setPrototypeOf = setPrototypeOfExports,
  _setPrototypeOf2 = _interopRequireDefault$1(_setPrototypeOf),
  _create = createExports,
  _create2 = _interopRequireDefault$1(_create),
  _typeof2 = _typeof$1,
  _typeof3 = _interopRequireDefault$1(_typeof2);
function _interopRequireDefault$1(e) {
  return e && e.__esModule ? e : { default: e };
}
inherits.default = function (e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        (typeof t > "u" ? "undefined" : (0, _typeof3.default)(t))
    );
  (e.prototype = (0, _create2.default)(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (_setPrototypeOf2.default
        ? (0, _setPrototypeOf2.default)(e, t)
        : (e.__proto__ = t));
};
var propTypesExports = {},
  propTypes = {
    get exports() {
      return propTypesExports;
    },
    set exports(e) {
      propTypesExports = e;
    },
  },
  ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  ReactPropTypesSecret_1 = ReactPropTypesSecret$1,
  ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function () {
  function e(s, a, n, o, f, l) {
    if (l !== ReactPropTypesSecret) {
      var p = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((p.name = "Invariant Violation"), p);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction,
  };
  return (r.PropTypes = r), r;
};
propTypes.exports = factoryWithThrowingShims();
var lottieExports = {},
  lottie = {
    get exports() {
      return lottieExports;
    },
    set exports(e) {
      lottieExports = e;
    },
  };
(function (module, exports) {
  typeof navigator < "u" &&
    (function (e, t) {
      module.exports = t();
    })(commonjsGlobal, function () {
      var svgNS = "http://www.w3.org/2000/svg",
        locationHref = "",
        _useWebWorker = !1,
        initialDefaultFrame = -999999,
        setWebWorker = function (t) {
          _useWebWorker = !!t;
        },
        getWebWorker = function () {
          return _useWebWorker;
        },
        setLocationHref = function (t) {
          locationHref = t;
        },
        getLocationHref = function () {
          return locationHref;
        };
      function createTag(e) {
        return document.createElement(e);
      }
      function extendPrototype(e, t) {
        var r,
          s = e.length,
          a;
        for (r = 0; r < s; r += 1) {
          a = e[r].prototype;
          for (var n in a)
            Object.prototype.hasOwnProperty.call(a, n) &&
              (t.prototype[n] = a[n]);
        }
      }
      function getDescriptor(e, t) {
        return Object.getOwnPropertyDescriptor(e, t);
      }
      function createProxyFunction(e) {
        function t() {}
        return (t.prototype = e), t;
      }
      var audioControllerFactory = (function () {
          function e(t) {
            (this.audios = []),
              (this.audioFactory = t),
              (this._volume = 1),
              (this._isMuted = !1);
          }
          return (
            (e.prototype = {
              addAudio: function (r) {
                this.audios.push(r);
              },
              pause: function () {
                var r,
                  s = this.audios.length;
                for (r = 0; r < s; r += 1) this.audios[r].pause();
              },
              resume: function () {
                var r,
                  s = this.audios.length;
                for (r = 0; r < s; r += 1) this.audios[r].resume();
              },
              setRate: function (r) {
                var s,
                  a = this.audios.length;
                for (s = 0; s < a; s += 1) this.audios[s].setRate(r);
              },
              createAudio: function (r) {
                return this.audioFactory
                  ? this.audioFactory(r)
                  : window.Howl
                  ? new window.Howl({ src: [r] })
                  : {
                      isPlaying: !1,
                      play: function () {
                        this.isPlaying = !0;
                      },
                      seek: function () {
                        this.isPlaying = !1;
                      },
                      playing: function () {},
                      rate: function () {},
                      setVolume: function () {},
                    };
              },
              setAudioFactory: function (r) {
                this.audioFactory = r;
              },
              setVolume: function (r) {
                (this._volume = r), this._updateVolume();
              },
              mute: function () {
                (this._isMuted = !0), this._updateVolume();
              },
              unmute: function () {
                (this._isMuted = !1), this._updateVolume();
              },
              getVolume: function () {
                return this._volume;
              },
              _updateVolume: function () {
                var r,
                  s = this.audios.length;
                for (r = 0; r < s; r += 1)
                  this.audios[r].volume(this._volume * (this._isMuted ? 0 : 1));
              },
            }),
            function () {
              return new e();
            }
          );
        })(),
        createTypedArray = (function () {
          function e(r, s) {
            var a = 0,
              n = [],
              o;
            switch (r) {
              case "int16":
              case "uint8c":
                o = 1;
                break;
              default:
                o = 1.1;
                break;
            }
            for (a = 0; a < s; a += 1) n.push(o);
            return n;
          }
          function t(r, s) {
            return r === "float32"
              ? new Float32Array(s)
              : r === "int16"
              ? new Int16Array(s)
              : r === "uint8c"
              ? new Uint8ClampedArray(s)
              : e(r, s);
          }
          return typeof Uint8ClampedArray == "function" &&
            typeof Float32Array == "function"
            ? t
            : e;
        })();
      function createSizedArray(e) {
        return Array.apply(null, { length: e });
      }
      function _typeof$6(e) {
        return (
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (_typeof$6 = function (r) {
                return typeof r;
              })
            : (_typeof$6 = function (r) {
                return r &&
                  typeof Symbol == "function" &&
                  r.constructor === Symbol &&
                  r !== Symbol.prototype
                  ? "symbol"
                  : typeof r;
              }),
          _typeof$6(e)
        );
      }
      var subframeEnabled = !0,
        expressionsPlugin = null,
        expressionsInterfaces = null,
        idPrefix$1 = "",
        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        bmPow = Math.pow,
        bmSqrt = Math.sqrt,
        bmFloor = Math.floor,
        bmMax = Math.max,
        bmMin = Math.min,
        BMMath = {};
      (function () {
        var e = [
            "abs",
            "acos",
            "acosh",
            "asin",
            "asinh",
            "atan",
            "atanh",
            "atan2",
            "ceil",
            "cbrt",
            "expm1",
            "clz32",
            "cos",
            "cosh",
            "exp",
            "floor",
            "fround",
            "hypot",
            "imul",
            "log",
            "log1p",
            "log2",
            "log10",
            "max",
            "min",
            "pow",
            "random",
            "round",
            "sign",
            "sin",
            "sinh",
            "sqrt",
            "tan",
            "tanh",
            "trunc",
            "E",
            "LN10",
            "LN2",
            "LOG10E",
            "LOG2E",
            "PI",
            "SQRT1_2",
            "SQRT2",
          ],
          t,
          r = e.length;
        for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]];
      })(),
        (BMMath.random = Math.random),
        (BMMath.abs = function (e) {
          var t = _typeof$6(e);
          if (t === "object" && e.length) {
            var r = createSizedArray(e.length),
              s,
              a = e.length;
            for (s = 0; s < a; s += 1) r[s] = Math.abs(e[s]);
            return r;
          }
          return Math.abs(e);
        });
      var defaultCurveSegments = 150,
        degToRads = Math.PI / 180,
        roundCorner = 0.5519;
      function styleDiv(e) {
        (e.style.position = "absolute"),
          (e.style.top = 0),
          (e.style.left = 0),
          (e.style.display = "block"),
          (e.style.transformOrigin = "0 0"),
          (e.style.webkitTransformOrigin = "0 0"),
          (e.style.backfaceVisibility = "visible"),
          (e.style.webkitBackfaceVisibility = "visible"),
          (e.style.transformStyle = "preserve-3d"),
          (e.style.webkitTransformStyle = "preserve-3d"),
          (e.style.mozTransformStyle = "preserve-3d");
      }
      function BMEnterFrameEvent(e, t, r, s) {
        (this.type = e),
          (this.currentTime = t),
          (this.totalTime = r),
          (this.direction = s < 0 ? -1 : 1);
      }
      function BMCompleteEvent(e, t) {
        (this.type = e), (this.direction = t < 0 ? -1 : 1);
      }
      function BMCompleteLoopEvent(e, t, r, s) {
        (this.type = e),
          (this.currentLoop = r),
          (this.totalLoops = t),
          (this.direction = s < 0 ? -1 : 1);
      }
      function BMSegmentStartEvent(e, t, r) {
        (this.type = e), (this.firstFrame = t), (this.totalFrames = r);
      }
      function BimdestroyEvent(e, t) {
        (this.type = e), (this.target = t);
      }
      function BMRenderFrameErrorEvent(e, t) {
        (this.type = "renderFrameError"),
          (this.nativeError = e),
          (this.currentTime = t);
      }
      function BMConfigErrorEvent(e) {
        (this.type = "configError"), (this.nativeError = e);
      }
      var createElementID = (function () {
        var e = 0;
        return function () {
          return (e += 1), idPrefix$1 + "__lottie_element_" + e;
        };
      })();
      function HSVtoRGB(e, t, r) {
        var s, a, n, o, f, l, p, b;
        switch (
          ((o = Math.floor(e * 6)),
          (f = e * 6 - o),
          (l = r * (1 - t)),
          (p = r * (1 - f * t)),
          (b = r * (1 - (1 - f) * t)),
          o % 6)
        ) {
          case 0:
            (s = r), (a = b), (n = l);
            break;
          case 1:
            (s = p), (a = r), (n = l);
            break;
          case 2:
            (s = l), (a = r), (n = b);
            break;
          case 3:
            (s = l), (a = p), (n = r);
            break;
          case 4:
            (s = b), (a = l), (n = r);
            break;
          case 5:
            (s = r), (a = l), (n = p);
            break;
        }
        return [s, a, n];
      }
      function RGBtoHSV(e, t, r) {
        var s = Math.max(e, t, r),
          a = Math.min(e, t, r),
          n = s - a,
          o,
          f = s === 0 ? 0 : n / s,
          l = s / 255;
        switch (s) {
          case a:
            o = 0;
            break;
          case e:
            (o = t - r + n * (t < r ? 6 : 0)), (o /= 6 * n);
            break;
          case t:
            (o = r - e + n * 2), (o /= 6 * n);
            break;
          case r:
            (o = e - t + n * 4), (o /= 6 * n);
            break;
        }
        return [o, f, l];
      }
      function addSaturationToRGB(e, t) {
        var r = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
        return (
          (r[1] += t),
          r[1] > 1 ? (r[1] = 1) : r[1] <= 0 && (r[1] = 0),
          HSVtoRGB(r[0], r[1], r[2])
        );
      }
      function addBrightnessToRGB(e, t) {
        var r = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
        return (
          (r[2] += t),
          r[2] > 1 ? (r[2] = 1) : r[2] < 0 && (r[2] = 0),
          HSVtoRGB(r[0], r[1], r[2])
        );
      }
      function addHueToRGB(e, t) {
        var r = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
        return (
          (r[0] += t / 360),
          r[0] > 1 ? (r[0] -= 1) : r[0] < 0 && (r[0] += 1),
          HSVtoRGB(r[0], r[1], r[2])
        );
      }
      var rgbToHex = (function () {
          var e = [],
            t,
            r;
          for (t = 0; t < 256; t += 1)
            (r = t.toString(16)), (e[t] = r.length === 1 ? "0" + r : r);
          return function (s, a, n) {
            return (
              s < 0 && (s = 0),
              a < 0 && (a = 0),
              n < 0 && (n = 0),
              "#" + e[s] + e[a] + e[n]
            );
          };
        })(),
        setSubframeEnabled = function (t) {
          subframeEnabled = !!t;
        },
        getSubframeEnabled = function () {
          return subframeEnabled;
        },
        setExpressionsPlugin = function (t) {
          expressionsPlugin = t;
        },
        getExpressionsPlugin = function () {
          return expressionsPlugin;
        },
        setExpressionInterfaces = function (t) {
          expressionsInterfaces = t;
        },
        getExpressionInterfaces = function () {
          return expressionsInterfaces;
        },
        setDefaultCurveSegments = function (t) {
          defaultCurveSegments = t;
        },
        getDefaultCurveSegments = function () {
          return defaultCurveSegments;
        },
        setIdPrefix = function (t) {
          idPrefix$1 = t;
        };
      function createNS(e) {
        return document.createElementNS(svgNS, e);
      }
      function _typeof$5(e) {
        return (
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (_typeof$5 = function (r) {
                return typeof r;
              })
            : (_typeof$5 = function (r) {
                return r &&
                  typeof Symbol == "function" &&
                  r.constructor === Symbol &&
                  r !== Symbol.prototype
                  ? "symbol"
                  : typeof r;
              }),
          _typeof$5(e)
        );
      }
      var dataManager = (function () {
          var e = 1,
            t = [],
            r,
            s,
            a = {
              onmessage: function () {},
              postMessage: function (_) {
                r({ data: _ });
              },
            },
            n = {
              postMessage: function (_) {
                a.onmessage({ data: _ });
              },
            };
          function o(u) {
            if (window.Worker && window.Blob && getWebWorker()) {
              var _ = new Blob(
                  ["var _workerSelf = self; self.onmessage = ", u.toString()],
                  { type: "text/javascript" }
                ),
                x = URL.createObjectURL(_);
              return new Worker(x);
            }
            return (r = u), a;
          }
          function f() {
            s ||
              ((s = o(function (_) {
                function x() {
                  function A(R, D) {
                    var M,
                      C,
                      I = R.length,
                      L,
                      V,
                      q,
                      Y;
                    for (C = 0; C < I; C += 1)
                      if (((M = R[C]), "ks" in M && !M.completed)) {
                        if (((M.completed = !0), M.hasMask)) {
                          var W = M.masksProperties;
                          for (V = W.length, L = 0; L < V; L += 1)
                            if (W[L].pt.k.i) E(W[L].pt.k);
                            else
                              for (Y = W[L].pt.k.length, q = 0; q < Y; q += 1)
                                W[L].pt.k[q].s && E(W[L].pt.k[q].s[0]),
                                  W[L].pt.k[q].e && E(W[L].pt.k[q].e[0]);
                        }
                        M.ty === 0
                          ? ((M.layers = c(M.refId, D)), A(M.layers, D))
                          : M.ty === 4
                          ? m(M.shapes)
                          : M.ty === 5 && z(M);
                      }
                  }
                  function d(R, D) {
                    if (R) {
                      var M = 0,
                        C = R.length;
                      for (M = 0; M < C; M += 1)
                        R[M].t === 1 &&
                          ((R[M].data.layers = c(R[M].data.refId, D)),
                          A(R[M].data.layers, D));
                    }
                  }
                  function y(R, D) {
                    for (var M = 0, C = D.length; M < C; ) {
                      if (D[M].id === R) return D[M];
                      M += 1;
                    }
                    return null;
                  }
                  function c(R, D) {
                    var M = y(R, D);
                    return M
                      ? M.layers.__used
                        ? JSON.parse(JSON.stringify(M.layers))
                        : ((M.layers.__used = !0), M.layers)
                      : null;
                  }
                  function m(R) {
                    var D,
                      M = R.length,
                      C,
                      I;
                    for (D = M - 1; D >= 0; D -= 1)
                      if (R[D].ty === "sh")
                        if (R[D].ks.k.i) E(R[D].ks.k);
                        else
                          for (I = R[D].ks.k.length, C = 0; C < I; C += 1)
                            R[D].ks.k[C].s && E(R[D].ks.k[C].s[0]),
                              R[D].ks.k[C].e && E(R[D].ks.k[C].e[0]);
                      else R[D].ty === "gr" && m(R[D].it);
                  }
                  function E(R) {
                    var D,
                      M = R.i.length;
                    for (D = 0; D < M; D += 1)
                      (R.i[D][0] += R.v[D][0]),
                        (R.i[D][1] += R.v[D][1]),
                        (R.o[D][0] += R.v[D][0]),
                        (R.o[D][1] += R.v[D][1]);
                  }
                  function S(R, D) {
                    var M = D ? D.split(".") : [100, 100, 100];
                    return R[0] > M[0]
                      ? !0
                      : M[0] > R[0]
                      ? !1
                      : R[1] > M[1]
                      ? !0
                      : M[1] > R[1]
                      ? !1
                      : R[2] > M[2]
                      ? !0
                      : M[2] > R[2]
                      ? !1
                      : null;
                  }
                  var T = (function () {
                      var R = [4, 4, 14];
                      function D(C) {
                        var I = C.t.d;
                        C.t.d = { k: [{ s: I, t: 0 }] };
                      }
                      function M(C) {
                        var I,
                          L = C.length;
                        for (I = 0; I < L; I += 1) C[I].ty === 5 && D(C[I]);
                      }
                      return function (C) {
                        if (S(R, C.v) && (M(C.layers), C.assets)) {
                          var I,
                            L = C.assets.length;
                          for (I = 0; I < L; I += 1)
                            C.assets[I].layers && M(C.assets[I].layers);
                        }
                      };
                    })(),
                    F = (function () {
                      var R = [4, 7, 99];
                      return function (D) {
                        if (D.chars && !S(R, D.v)) {
                          var M,
                            C = D.chars.length;
                          for (M = 0; M < C; M += 1) {
                            var I = D.chars[M];
                            I.data &&
                              I.data.shapes &&
                              (m(I.data.shapes),
                              (I.data.ip = 0),
                              (I.data.op = 99999),
                              (I.data.st = 0),
                              (I.data.sr = 1),
                              (I.data.ks = {
                                p: { k: [0, 0], a: 0 },
                                s: { k: [100, 100], a: 0 },
                                a: { k: [0, 0], a: 0 },
                                r: { k: 0, a: 0 },
                                o: { k: 100, a: 0 },
                              }),
                              D.chars[M].t ||
                                (I.data.shapes.push({ ty: "no" }),
                                I.data.shapes[0].it.push({
                                  p: { k: [0, 0], a: 0 },
                                  s: { k: [100, 100], a: 0 },
                                  a: { k: [0, 0], a: 0 },
                                  r: { k: 0, a: 0 },
                                  o: { k: 100, a: 0 },
                                  sk: { k: 0, a: 0 },
                                  sa: { k: 0, a: 0 },
                                  ty: "tr",
                                })));
                          }
                        }
                      };
                    })(),
                    O = (function () {
                      var R = [5, 7, 15];
                      function D(C) {
                        var I = C.t.p;
                        typeof I.a == "number" && (I.a = { a: 0, k: I.a }),
                          typeof I.p == "number" && (I.p = { a: 0, k: I.p }),
                          typeof I.r == "number" && (I.r = { a: 0, k: I.r });
                      }
                      function M(C) {
                        var I,
                          L = C.length;
                        for (I = 0; I < L; I += 1) C[I].ty === 5 && D(C[I]);
                      }
                      return function (C) {
                        if (S(R, C.v) && (M(C.layers), C.assets)) {
                          var I,
                            L = C.assets.length;
                          for (I = 0; I < L; I += 1)
                            C.assets[I].layers && M(C.assets[I].layers);
                        }
                      };
                    })(),
                    G = (function () {
                      var R = [4, 1, 9];
                      function D(C) {
                        var I,
                          L = C.length,
                          V,
                          q;
                        for (I = 0; I < L; I += 1)
                          if (C[I].ty === "gr") D(C[I].it);
                          else if (C[I].ty === "fl" || C[I].ty === "st")
                            if (C[I].c.k && C[I].c.k[0].i)
                              for (q = C[I].c.k.length, V = 0; V < q; V += 1)
                                C[I].c.k[V].s &&
                                  ((C[I].c.k[V].s[0] /= 255),
                                  (C[I].c.k[V].s[1] /= 255),
                                  (C[I].c.k[V].s[2] /= 255),
                                  (C[I].c.k[V].s[3] /= 255)),
                                  C[I].c.k[V].e &&
                                    ((C[I].c.k[V].e[0] /= 255),
                                    (C[I].c.k[V].e[1] /= 255),
                                    (C[I].c.k[V].e[2] /= 255),
                                    (C[I].c.k[V].e[3] /= 255));
                            else
                              (C[I].c.k[0] /= 255),
                                (C[I].c.k[1] /= 255),
                                (C[I].c.k[2] /= 255),
                                (C[I].c.k[3] /= 255);
                      }
                      function M(C) {
                        var I,
                          L = C.length;
                        for (I = 0; I < L; I += 1)
                          C[I].ty === 4 && D(C[I].shapes);
                      }
                      return function (C) {
                        if (S(R, C.v) && (M(C.layers), C.assets)) {
                          var I,
                            L = C.assets.length;
                          for (I = 0; I < L; I += 1)
                            C.assets[I].layers && M(C.assets[I].layers);
                        }
                      };
                    })(),
                    $ = (function () {
                      var R = [4, 4, 18];
                      function D(C) {
                        var I,
                          L = C.length,
                          V,
                          q;
                        for (I = L - 1; I >= 0; I -= 1)
                          if (C[I].ty === "sh")
                            if (C[I].ks.k.i) C[I].ks.k.c = C[I].closed;
                            else
                              for (q = C[I].ks.k.length, V = 0; V < q; V += 1)
                                C[I].ks.k[V].s &&
                                  (C[I].ks.k[V].s[0].c = C[I].closed),
                                  C[I].ks.k[V].e &&
                                    (C[I].ks.k[V].e[0].c = C[I].closed);
                          else C[I].ty === "gr" && D(C[I].it);
                      }
                      function M(C) {
                        var I,
                          L,
                          V = C.length,
                          q,
                          Y,
                          W,
                          Z;
                        for (L = 0; L < V; L += 1) {
                          if (((I = C[L]), I.hasMask)) {
                            var K = I.masksProperties;
                            for (Y = K.length, q = 0; q < Y; q += 1)
                              if (K[q].pt.k.i) K[q].pt.k.c = K[q].cl;
                              else
                                for (Z = K[q].pt.k.length, W = 0; W < Z; W += 1)
                                  K[q].pt.k[W].s &&
                                    (K[q].pt.k[W].s[0].c = K[q].cl),
                                    K[q].pt.k[W].e &&
                                      (K[q].pt.k[W].e[0].c = K[q].cl);
                          }
                          I.ty === 4 && D(I.shapes);
                        }
                      }
                      return function (C) {
                        if (S(R, C.v) && (M(C.layers), C.assets)) {
                          var I,
                            L = C.assets.length;
                          for (I = 0; I < L; I += 1)
                            C.assets[I].layers && M(C.assets[I].layers);
                        }
                      };
                    })();
                  function B(R) {
                    R.__complete ||
                      (G(R),
                      T(R),
                      F(R),
                      O(R),
                      $(R),
                      A(R.layers, R.assets),
                      d(R.chars, R.assets),
                      (R.__complete = !0));
                  }
                  function z(R) {
                    R.t.a.length === 0 && "m" in R.t.p;
                  }
                  var N = {};
                  return (
                    (N.completeData = B),
                    (N.checkColors = G),
                    (N.checkChars = F),
                    (N.checkPathProperties = O),
                    (N.checkShapes = $),
                    (N.completeLayers = A),
                    N
                  );
                }
                if (
                  (n.dataManager || (n.dataManager = x()),
                  n.assetLoader ||
                    (n.assetLoader = (function () {
                      function A(y) {
                        var c = y.getResponseHeader("content-type");
                        return (c &&
                          y.responseType === "json" &&
                          c.indexOf("json") !== -1) ||
                          (y.response && _typeof$5(y.response) === "object")
                          ? y.response
                          : y.response && typeof y.response == "string"
                          ? JSON.parse(y.response)
                          : y.responseText
                          ? JSON.parse(y.responseText)
                          : null;
                      }
                      function d(y, c, m, E) {
                        var S,
                          T = new XMLHttpRequest();
                        try {
                          T.responseType = "json";
                        } catch {}
                        T.onreadystatechange = function () {
                          if (T.readyState === 4)
                            if (T.status === 200) (S = A(T)), m(S);
                            else
                              try {
                                (S = A(T)), m(S);
                              } catch (F) {
                                E && E(F);
                              }
                        };
                        try {
                          T.open(["G", "E", "T"].join(""), y, !0);
                        } catch {
                          T.open(["G", "E", "T"].join(""), c + "/" + y, !0);
                        }
                        T.send();
                      }
                      return { load: d };
                    })()),
                  _.data.type === "loadAnimation")
                )
                  n.assetLoader.load(
                    _.data.path,
                    _.data.fullPath,
                    function (A) {
                      n.dataManager.completeData(A),
                        n.postMessage({
                          id: _.data.id,
                          payload: A,
                          status: "success",
                        });
                    },
                    function () {
                      n.postMessage({ id: _.data.id, status: "error" });
                    }
                  );
                else if (_.data.type === "complete") {
                  var g = _.data.animation;
                  n.dataManager.completeData(g),
                    n.postMessage({
                      id: _.data.id,
                      payload: g,
                      status: "success",
                    });
                } else
                  _.data.type === "loadData" &&
                    n.assetLoader.load(
                      _.data.path,
                      _.data.fullPath,
                      function (A) {
                        n.postMessage({
                          id: _.data.id,
                          payload: A,
                          status: "success",
                        });
                      },
                      function () {
                        n.postMessage({ id: _.data.id, status: "error" });
                      }
                    );
              })),
              (s.onmessage = function (u) {
                var _ = u.data,
                  x = _.id,
                  g = t[x];
                (t[x] = null),
                  _.status === "success"
                    ? g.onComplete(_.payload)
                    : g.onError && g.onError();
              }));
          }
          function l(u, _) {
            e += 1;
            var x = "processId_" + e;
            return (t[x] = { onComplete: u, onError: _ }), x;
          }
          function p(u, _, x) {
            f();
            var g = l(_, x);
            s.postMessage({
              type: "loadAnimation",
              path: u,
              fullPath: window.location.origin + window.location.pathname,
              id: g,
            });
          }
          function b(u, _, x) {
            f();
            var g = l(_, x);
            s.postMessage({
              type: "loadData",
              path: u,
              fullPath: window.location.origin + window.location.pathname,
              id: g,
            });
          }
          function P(u, _, x) {
            f();
            var g = l(_, x);
            s.postMessage({ type: "complete", animation: u, id: g });
          }
          return { loadAnimation: p, loadData: b, completeAnimation: P };
        })(),
        ImagePreloader = (function () {
          var e = (function () {
            var d = createTag("canvas");
            (d.width = 1), (d.height = 1);
            var y = d.getContext("2d");
            return (y.fillStyle = "rgba(0,0,0,0)"), y.fillRect(0, 0, 1, 1), d;
          })();
          function t() {
            (this.loadedAssets += 1),
              this.loadedAssets === this.totalImages &&
                this.loadedFootagesCount === this.totalFootages &&
                this.imagesLoadedCb &&
                this.imagesLoadedCb(null);
          }
          function r() {
            (this.loadedFootagesCount += 1),
              this.loadedAssets === this.totalImages &&
                this.loadedFootagesCount === this.totalFootages &&
                this.imagesLoadedCb &&
                this.imagesLoadedCb(null);
          }
          function s(d, y, c) {
            var m = "";
            if (d.e) m = d.p;
            else if (y) {
              var E = d.p;
              E.indexOf("images/") !== -1 && (E = E.split("/")[1]), (m = y + E);
            } else (m = c), (m += d.u ? d.u : ""), (m += d.p);
            return m;
          }
          function a(d) {
            var y = 0,
              c = setInterval(
                function () {
                  var m = d.getBBox();
                  (m.width || y > 500) &&
                    (this._imageLoaded(), clearInterval(c)),
                    (y += 1);
                }.bind(this),
                50
              );
          }
          function n(d) {
            var y = s(d, this.assetsPath, this.path),
              c = createNS("image");
            isSafari
              ? this.testImageLoaded(c)
              : c.addEventListener("load", this._imageLoaded, !1),
              c.addEventListener(
                "error",
                function () {
                  (m.img = e), this._imageLoaded();
                }.bind(this),
                !1
              ),
              c.setAttributeNS("http://www.w3.org/1999/xlink", "href", y),
              this._elementHelper.append
                ? this._elementHelper.append(c)
                : this._elementHelper.appendChild(c);
            var m = { img: c, assetData: d };
            return m;
          }
          function o(d) {
            var y = s(d, this.assetsPath, this.path),
              c = createTag("img");
            (c.crossOrigin = "anonymous"),
              c.addEventListener("load", this._imageLoaded, !1),
              c.addEventListener(
                "error",
                function () {
                  (m.img = e), this._imageLoaded();
                }.bind(this),
                !1
              ),
              (c.src = y);
            var m = { img: c, assetData: d };
            return m;
          }
          function f(d) {
            var y = { assetData: d },
              c = s(d, this.assetsPath, this.path);
            return (
              dataManager.loadData(
                c,
                function (m) {
                  (y.img = m), this._footageLoaded();
                }.bind(this),
                function () {
                  (y.img = {}), this._footageLoaded();
                }.bind(this)
              ),
              y
            );
          }
          function l(d, y) {
            this.imagesLoadedCb = y;
            var c,
              m = d.length;
            for (c = 0; c < m; c += 1)
              d[c].layers ||
                (!d[c].t || d[c].t === "seq"
                  ? ((this.totalImages += 1),
                    this.images.push(this._createImageData(d[c])))
                  : d[c].t === 3 &&
                    ((this.totalFootages += 1),
                    this.images.push(this.createFootageData(d[c]))));
          }
          function p(d) {
            this.path = d || "";
          }
          function b(d) {
            this.assetsPath = d || "";
          }
          function P(d) {
            for (var y = 0, c = this.images.length; y < c; ) {
              if (this.images[y].assetData === d) return this.images[y].img;
              y += 1;
            }
            return null;
          }
          function u() {
            (this.imagesLoadedCb = null), (this.images.length = 0);
          }
          function _() {
            return this.totalImages === this.loadedAssets;
          }
          function x() {
            return this.totalFootages === this.loadedFootagesCount;
          }
          function g(d, y) {
            d === "svg"
              ? ((this._elementHelper = y),
                (this._createImageData = this.createImageData.bind(this)))
              : (this._createImageData = this.createImgData.bind(this));
          }
          function A() {
            (this._imageLoaded = t.bind(this)),
              (this._footageLoaded = r.bind(this)),
              (this.testImageLoaded = a.bind(this)),
              (this.createFootageData = f.bind(this)),
              (this.assetsPath = ""),
              (this.path = ""),
              (this.totalImages = 0),
              (this.totalFootages = 0),
              (this.loadedAssets = 0),
              (this.loadedFootagesCount = 0),
              (this.imagesLoadedCb = null),
              (this.images = []);
          }
          return (
            (A.prototype = {
              loadAssets: l,
              setAssetsPath: b,
              setPath: p,
              loadedImages: _,
              loadedFootages: x,
              destroy: u,
              getAsset: P,
              createImgData: o,
              createImageData: n,
              imageLoaded: t,
              footageLoaded: r,
              setCacheType: g,
            }),
            A
          );
        })();
      function BaseEvent() {}
      BaseEvent.prototype = {
        triggerEvent: function (t, r) {
          if (this._cbs[t])
            for (var s = this._cbs[t], a = 0; a < s.length; a += 1) s[a](r);
        },
        addEventListener: function (t, r) {
          return (
            this._cbs[t] || (this._cbs[t] = []),
            this._cbs[t].push(r),
            function () {
              this.removeEventListener(t, r);
            }.bind(this)
          );
        },
        removeEventListener: function (t, r) {
          if (!r) this._cbs[t] = null;
          else if (this._cbs[t]) {
            for (var s = 0, a = this._cbs[t].length; s < a; )
              this._cbs[t][s] === r &&
                (this._cbs[t].splice(s, 1), (s -= 1), (a -= 1)),
                (s += 1);
            this._cbs[t].length || (this._cbs[t] = null);
          }
        },
      };
      var markerParser = (function () {
          function e(t) {
            for (
              var r = t.split(`\r
`),
                s = {},
                a,
                n = 0,
                o = 0;
              o < r.length;
              o += 1
            )
              (a = r[o].split(":")),
                a.length === 2 && ((s[a[0]] = a[1].trim()), (n += 1));
            if (n === 0) throw new Error();
            return s;
          }
          return function (t) {
            for (var r = [], s = 0; s < t.length; s += 1) {
              var a = t[s],
                n = { time: a.tm, duration: a.dr };
              try {
                n.payload = JSON.parse(t[s].cm);
              } catch {
                try {
                  n.payload = e(t[s].cm);
                } catch {
                  n.payload = { name: t[s].cm };
                }
              }
              r.push(n);
            }
            return r;
          };
        })(),
        ProjectInterface = (function () {
          function e(t) {
            this.compositions.push(t);
          }
          return function () {
            function t(r) {
              for (var s = 0, a = this.compositions.length; s < a; ) {
                if (
                  this.compositions[s].data &&
                  this.compositions[s].data.nm === r
                )
                  return (
                    this.compositions[s].prepareFrame &&
                      this.compositions[s].data.xt &&
                      this.compositions[s].prepareFrame(this.currentFrame),
                    this.compositions[s].compInterface
                  );
                s += 1;
              }
              return null;
            }
            return (
              (t.compositions = []),
              (t.currentFrame = 0),
              (t.registerComposition = e),
              t
            );
          };
        })(),
        renderers = {},
        registerRenderer = function (t, r) {
          renderers[t] = r;
        };
      function getRenderer(e) {
        return renderers[e];
      }
      function getRegisteredRenderer() {
        if (renderers.canvas) return "canvas";
        for (var e in renderers) if (renderers[e]) return e;
        return "";
      }
      function _typeof$4(e) {
        return (
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (_typeof$4 = function (r) {
                return typeof r;
              })
            : (_typeof$4 = function (r) {
                return r &&
                  typeof Symbol == "function" &&
                  r.constructor === Symbol &&
                  r !== Symbol.prototype
                  ? "symbol"
                  : typeof r;
              }),
          _typeof$4(e)
        );
      }
      var AnimationItem = function () {
        (this._cbs = []),
          (this.name = ""),
          (this.path = ""),
          (this.isLoaded = !1),
          (this.currentFrame = 0),
          (this.currentRawFrame = 0),
          (this.firstFrame = 0),
          (this.totalFrames = 0),
          (this.frameRate = 0),
          (this.frameMult = 0),
          (this.playSpeed = 1),
          (this.playDirection = 1),
          (this.playCount = 0),
          (this.animationData = {}),
          (this.assets = []),
          (this.isPaused = !0),
          (this.autoplay = !1),
          (this.loop = !0),
          (this.renderer = null),
          (this.animationID = createElementID()),
          (this.assetsPath = ""),
          (this.timeCompleted = 0),
          (this.segmentPos = 0),
          (this.isSubframeEnabled = getSubframeEnabled()),
          (this.segments = []),
          (this._idle = !0),
          (this._completedLoop = !1),
          (this.projectInterface = ProjectInterface()),
          (this.imagePreloader = new ImagePreloader()),
          (this.audioController = audioControllerFactory()),
          (this.markers = []),
          (this.configAnimation = this.configAnimation.bind(this)),
          (this.onSetupError = this.onSetupError.bind(this)),
          (this.onSegmentComplete = this.onSegmentComplete.bind(this)),
          (this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0));
      };
      extendPrototype([BaseEvent], AnimationItem),
        (AnimationItem.prototype.setParams = function (e) {
          (e.wrapper || e.container) &&
            (this.wrapper = e.wrapper || e.container);
          var t = "svg";
          e.animType ? (t = e.animType) : e.renderer && (t = e.renderer);
          var r = getRenderer(t);
          (this.renderer = new r(this, e.rendererSettings)),
            this.imagePreloader.setCacheType(t, this.renderer.globalData.defs),
            this.renderer.setProjectInterface(this.projectInterface),
            (this.animType = t),
            e.loop === "" ||
            e.loop === null ||
            e.loop === void 0 ||
            e.loop === !0
              ? (this.loop = !0)
              : e.loop === !1
              ? (this.loop = !1)
              : (this.loop = parseInt(e.loop, 10)),
            (this.autoplay = "autoplay" in e ? e.autoplay : !0),
            (this.name = e.name ? e.name : ""),
            (this.autoloadSegments = Object.prototype.hasOwnProperty.call(
              e,
              "autoloadSegments"
            )
              ? e.autoloadSegments
              : !0),
            (this.assetsPath = e.assetsPath),
            (this.initialSegment = e.initialSegment),
            e.audioFactory &&
              this.audioController.setAudioFactory(e.audioFactory),
            e.animationData
              ? this.setupAnimation(e.animationData)
              : e.path &&
                (e.path.lastIndexOf("\\") !== -1
                  ? (this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1))
                  : (this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1)),
                (this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1)),
                (this.fileName = this.fileName.substr(
                  0,
                  this.fileName.lastIndexOf(".json")
                )),
                dataManager.loadAnimation(
                  e.path,
                  this.configAnimation,
                  this.onSetupError
                ));
        }),
        (AnimationItem.prototype.onSetupError = function () {
          this.trigger("data_failed");
        }),
        (AnimationItem.prototype.setupAnimation = function (e) {
          dataManager.completeAnimation(e, this.configAnimation);
        }),
        (AnimationItem.prototype.setData = function (e, t) {
          t && _typeof$4(t) !== "object" && (t = JSON.parse(t));
          var r = { wrapper: e, animationData: t },
            s = e.attributes;
          (r.path = s.getNamedItem("data-animation-path")
            ? s.getNamedItem("data-animation-path").value
            : s.getNamedItem("data-bm-path")
            ? s.getNamedItem("data-bm-path").value
            : s.getNamedItem("bm-path")
            ? s.getNamedItem("bm-path").value
            : ""),
            (r.animType = s.getNamedItem("data-anim-type")
              ? s.getNamedItem("data-anim-type").value
              : s.getNamedItem("data-bm-type")
              ? s.getNamedItem("data-bm-type").value
              : s.getNamedItem("bm-type")
              ? s.getNamedItem("bm-type").value
              : s.getNamedItem("data-bm-renderer")
              ? s.getNamedItem("data-bm-renderer").value
              : s.getNamedItem("bm-renderer")
              ? s.getNamedItem("bm-renderer").value
              : getRegisteredRenderer() || "canvas");
          var a = s.getNamedItem("data-anim-loop")
            ? s.getNamedItem("data-anim-loop").value
            : s.getNamedItem("data-bm-loop")
            ? s.getNamedItem("data-bm-loop").value
            : s.getNamedItem("bm-loop")
            ? s.getNamedItem("bm-loop").value
            : "";
          a === "false"
            ? (r.loop = !1)
            : a === "true"
            ? (r.loop = !0)
            : a !== "" && (r.loop = parseInt(a, 10));
          var n = s.getNamedItem("data-anim-autoplay")
            ? s.getNamedItem("data-anim-autoplay").value
            : s.getNamedItem("data-bm-autoplay")
            ? s.getNamedItem("data-bm-autoplay").value
            : s.getNamedItem("bm-autoplay")
            ? s.getNamedItem("bm-autoplay").value
            : !0;
          (r.autoplay = n !== "false"),
            (r.name = s.getNamedItem("data-name")
              ? s.getNamedItem("data-name").value
              : s.getNamedItem("data-bm-name")
              ? s.getNamedItem("data-bm-name").value
              : s.getNamedItem("bm-name")
              ? s.getNamedItem("bm-name").value
              : "");
          var o = s.getNamedItem("data-anim-prerender")
            ? s.getNamedItem("data-anim-prerender").value
            : s.getNamedItem("data-bm-prerender")
            ? s.getNamedItem("data-bm-prerender").value
            : s.getNamedItem("bm-prerender")
            ? s.getNamedItem("bm-prerender").value
            : "";
          o === "false" && (r.prerender = !1),
            r.path ? this.setParams(r) : this.trigger("destroy");
        }),
        (AnimationItem.prototype.includeLayers = function (e) {
          e.op > this.animationData.op &&
            ((this.animationData.op = e.op),
            (this.totalFrames = Math.floor(e.op - this.animationData.ip)));
          var t = this.animationData.layers,
            r,
            s = t.length,
            a = e.layers,
            n,
            o = a.length;
          for (n = 0; n < o; n += 1)
            for (r = 0; r < s; ) {
              if (t[r].id === a[n].id) {
                t[r] = a[n];
                break;
              }
              r += 1;
            }
          if (
            ((e.chars || e.fonts) &&
              (this.renderer.globalData.fontManager.addChars(e.chars),
              this.renderer.globalData.fontManager.addFonts(
                e.fonts,
                this.renderer.globalData.defs
              )),
            e.assets)
          )
            for (s = e.assets.length, r = 0; r < s; r += 1)
              this.animationData.assets.push(e.assets[r]);
          (this.animationData.__complete = !1),
            dataManager.completeAnimation(
              this.animationData,
              this.onSegmentComplete
            );
        }),
        (AnimationItem.prototype.onSegmentComplete = function (e) {
          this.animationData = e;
          var t = getExpressionsPlugin();
          t && t.initExpressions(this), this.loadNextSegment();
        }),
        (AnimationItem.prototype.loadNextSegment = function () {
          var e = this.animationData.segments;
          if (!e || e.length === 0 || !this.autoloadSegments) {
            this.trigger("data_ready"), (this.timeCompleted = this.totalFrames);
            return;
          }
          var t = e.shift();
          this.timeCompleted = t.time * this.frameRate;
          var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
          (this.segmentPos += 1),
            dataManager.loadData(
              r,
              this.includeLayers.bind(this),
              function () {
                this.trigger("data_failed");
              }.bind(this)
            );
        }),
        (AnimationItem.prototype.loadSegments = function () {
          var e = this.animationData.segments;
          e || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
        }),
        (AnimationItem.prototype.imagesLoaded = function () {
          this.trigger("loaded_images"), this.checkLoaded();
        }),
        (AnimationItem.prototype.preloadImages = function () {
          this.imagePreloader.setAssetsPath(this.assetsPath),
            this.imagePreloader.setPath(this.path),
            this.imagePreloader.loadAssets(
              this.animationData.assets,
              this.imagesLoaded.bind(this)
            );
        }),
        (AnimationItem.prototype.configAnimation = function (e) {
          if (this.renderer)
            try {
              (this.animationData = e),
                this.initialSegment
                  ? ((this.totalFrames = Math.floor(
                      this.initialSegment[1] - this.initialSegment[0]
                    )),
                    (this.firstFrame = Math.round(this.initialSegment[0])))
                  : ((this.totalFrames = Math.floor(
                      this.animationData.op - this.animationData.ip
                    )),
                    (this.firstFrame = Math.round(this.animationData.ip))),
                this.renderer.configAnimation(e),
                e.assets || (e.assets = []),
                (this.assets = this.animationData.assets),
                (this.frameRate = this.animationData.fr),
                (this.frameMult = this.animationData.fr / 1e3),
                this.renderer.searchExtraCompositions(e.assets),
                (this.markers = markerParser(e.markers || [])),
                this.trigger("config_ready"),
                this.preloadImages(),
                this.loadSegments(),
                this.updaFrameModifier(),
                this.waitForFontsLoaded(),
                this.isPaused && this.audioController.pause();
            } catch (t) {
              this.triggerConfigError(t);
            }
        }),
        (AnimationItem.prototype.waitForFontsLoaded = function () {
          this.renderer &&
            (this.renderer.globalData.fontManager.isLoaded
              ? this.checkLoaded()
              : setTimeout(this.waitForFontsLoaded.bind(this), 20));
        }),
        (AnimationItem.prototype.checkLoaded = function () {
          if (
            !this.isLoaded &&
            this.renderer.globalData.fontManager.isLoaded &&
            (this.imagePreloader.loadedImages() ||
              this.renderer.rendererType !== "canvas") &&
            this.imagePreloader.loadedFootages()
          ) {
            this.isLoaded = !0;
            var e = getExpressionsPlugin();
            e && e.initExpressions(this),
              this.renderer.initItems(),
              setTimeout(
                function () {
                  this.trigger("DOMLoaded");
                }.bind(this),
                0
              ),
              this.gotoFrame(),
              this.autoplay && this.play();
          }
        }),
        (AnimationItem.prototype.resize = function (e, t) {
          var r = typeof e == "number" ? e : void 0,
            s = typeof t == "number" ? t : void 0;
          this.renderer.updateContainerSize(r, s);
        }),
        (AnimationItem.prototype.setSubframe = function (e) {
          this.isSubframeEnabled = !!e;
        }),
        (AnimationItem.prototype.gotoFrame = function () {
          (this.currentFrame = this.isSubframeEnabled
            ? this.currentRawFrame
            : ~~this.currentRawFrame),
            this.timeCompleted !== this.totalFrames &&
              this.currentFrame > this.timeCompleted &&
              (this.currentFrame = this.timeCompleted),
            this.trigger("enterFrame"),
            this.renderFrame(),
            this.trigger("drawnFrame");
        }),
        (AnimationItem.prototype.renderFrame = function () {
          if (!(this.isLoaded === !1 || !this.renderer))
            try {
              this.renderer.renderFrame(this.currentFrame + this.firstFrame);
            } catch (e) {
              this.triggerRenderFrameError(e);
            }
        }),
        (AnimationItem.prototype.play = function (e) {
          (e && this.name !== e) ||
            (this.isPaused === !0 &&
              ((this.isPaused = !1),
              this.trigger("_pause"),
              this.audioController.resume(),
              this._idle && ((this._idle = !1), this.trigger("_active"))));
        }),
        (AnimationItem.prototype.pause = function (e) {
          (e && this.name !== e) ||
            (this.isPaused === !1 &&
              ((this.isPaused = !0),
              this.trigger("_play"),
              (this._idle = !0),
              this.trigger("_idle"),
              this.audioController.pause()));
        }),
        (AnimationItem.prototype.togglePause = function (e) {
          (e && this.name !== e) ||
            (this.isPaused === !0 ? this.play() : this.pause());
        }),
        (AnimationItem.prototype.stop = function (e) {
          (e && this.name !== e) ||
            (this.pause(),
            (this.playCount = 0),
            (this._completedLoop = !1),
            this.setCurrentRawFrameValue(0));
        }),
        (AnimationItem.prototype.getMarkerData = function (e) {
          for (var t, r = 0; r < this.markers.length; r += 1)
            if (((t = this.markers[r]), t.payload && t.payload.name === e))
              return t;
          return null;
        }),
        (AnimationItem.prototype.goToAndStop = function (e, t, r) {
          if (!(r && this.name !== r)) {
            var s = Number(e);
            if (isNaN(s)) {
              var a = this.getMarkerData(e);
              a && this.goToAndStop(a.time, !0);
            } else
              t
                ? this.setCurrentRawFrameValue(e)
                : this.setCurrentRawFrameValue(e * this.frameModifier);
            this.pause();
          }
        }),
        (AnimationItem.prototype.goToAndPlay = function (e, t, r) {
          if (!(r && this.name !== r)) {
            var s = Number(e);
            if (isNaN(s)) {
              var a = this.getMarkerData(e);
              a &&
                (a.duration
                  ? this.playSegments([a.time, a.time + a.duration], !0)
                  : this.goToAndStop(a.time, !0));
            } else this.goToAndStop(s, t, r);
            this.play();
          }
        }),
        (AnimationItem.prototype.advanceTime = function (e) {
          if (!(this.isPaused === !0 || this.isLoaded === !1)) {
            var t = this.currentRawFrame + e * this.frameModifier,
              r = !1;
            t >= this.totalFrames - 1 && this.frameModifier > 0
              ? !this.loop || this.playCount === this.loop
                ? this.checkSegments(
                    t > this.totalFrames ? t % this.totalFrames : 0
                  ) || ((r = !0), (t = this.totalFrames - 1))
                : t >= this.totalFrames
                ? ((this.playCount += 1),
                  this.checkSegments(t % this.totalFrames) ||
                    (this.setCurrentRawFrameValue(t % this.totalFrames),
                    (this._completedLoop = !0),
                    this.trigger("loopComplete")))
                : this.setCurrentRawFrameValue(t)
              : t < 0
              ? this.checkSegments(t % this.totalFrames) ||
                (this.loop && !(this.playCount-- <= 0 && this.loop !== !0)
                  ? (this.setCurrentRawFrameValue(
                      this.totalFrames + (t % this.totalFrames)
                    ),
                    this._completedLoop
                      ? this.trigger("loopComplete")
                      : (this._completedLoop = !0))
                  : ((r = !0), (t = 0)))
              : this.setCurrentRawFrameValue(t),
              r &&
                (this.setCurrentRawFrameValue(t),
                this.pause(),
                this.trigger("complete"));
          }
        }),
        (AnimationItem.prototype.adjustSegment = function (e, t) {
          (this.playCount = 0),
            e[1] < e[0]
              ? (this.frameModifier > 0 &&
                  (this.playSpeed < 0
                    ? this.setSpeed(-this.playSpeed)
                    : this.setDirection(-1)),
                (this.totalFrames = e[0] - e[1]),
                (this.timeCompleted = this.totalFrames),
                (this.firstFrame = e[1]),
                this.setCurrentRawFrameValue(this.totalFrames - 0.001 - t))
              : e[1] > e[0] &&
                (this.frameModifier < 0 &&
                  (this.playSpeed < 0
                    ? this.setSpeed(-this.playSpeed)
                    : this.setDirection(1)),
                (this.totalFrames = e[1] - e[0]),
                (this.timeCompleted = this.totalFrames),
                (this.firstFrame = e[0]),
                this.setCurrentRawFrameValue(0.001 + t)),
            this.trigger("segmentStart");
        }),
        (AnimationItem.prototype.setSegment = function (e, t) {
          var r = -1;
          this.isPaused &&
            (this.currentRawFrame + this.firstFrame < e
              ? (r = e)
              : this.currentRawFrame + this.firstFrame > t && (r = t - e)),
            (this.firstFrame = e),
            (this.totalFrames = t - e),
            (this.timeCompleted = this.totalFrames),
            r !== -1 && this.goToAndStop(r, !0);
        }),
        (AnimationItem.prototype.playSegments = function (e, t) {
          if ((t && (this.segments.length = 0), _typeof$4(e[0]) === "object")) {
            var r,
              s = e.length;
            for (r = 0; r < s; r += 1) this.segments.push(e[r]);
          } else this.segments.push(e);
          this.segments.length &&
            t &&
            this.adjustSegment(this.segments.shift(), 0),
            this.isPaused && this.play();
        }),
        (AnimationItem.prototype.resetSegments = function (e) {
          (this.segments.length = 0),
            this.segments.push([this.animationData.ip, this.animationData.op]),
            e && this.checkSegments(0);
        }),
        (AnimationItem.prototype.checkSegments = function (e) {
          return this.segments.length
            ? (this.adjustSegment(this.segments.shift(), e), !0)
            : !1;
        }),
        (AnimationItem.prototype.destroy = function (e) {
          (e && this.name !== e) ||
            !this.renderer ||
            (this.renderer.destroy(),
            this.imagePreloader.destroy(),
            this.trigger("destroy"),
            (this._cbs = null),
            (this.onEnterFrame = null),
            (this.onLoopComplete = null),
            (this.onComplete = null),
            (this.onSegmentStart = null),
            (this.onDestroy = null),
            (this.renderer = null),
            (this.renderer = null),
            (this.imagePreloader = null),
            (this.projectInterface = null));
        }),
        (AnimationItem.prototype.setCurrentRawFrameValue = function (e) {
          (this.currentRawFrame = e), this.gotoFrame();
        }),
        (AnimationItem.prototype.setSpeed = function (e) {
          (this.playSpeed = e), this.updaFrameModifier();
        }),
        (AnimationItem.prototype.setDirection = function (e) {
          (this.playDirection = e < 0 ? -1 : 1), this.updaFrameModifier();
        }),
        (AnimationItem.prototype.setLoop = function (e) {
          this.loop = e;
        }),
        (AnimationItem.prototype.setVolume = function (e, t) {
          (t && this.name !== t) || this.audioController.setVolume(e);
        }),
        (AnimationItem.prototype.getVolume = function () {
          return this.audioController.getVolume();
        }),
        (AnimationItem.prototype.mute = function (e) {
          (e && this.name !== e) || this.audioController.mute();
        }),
        (AnimationItem.prototype.unmute = function (e) {
          (e && this.name !== e) || this.audioController.unmute();
        }),
        (AnimationItem.prototype.updaFrameModifier = function () {
          (this.frameModifier =
            this.frameMult * this.playSpeed * this.playDirection),
            this.audioController.setRate(this.playSpeed * this.playDirection);
        }),
        (AnimationItem.prototype.getPath = function () {
          return this.path;
        }),
        (AnimationItem.prototype.getAssetsPath = function (e) {
          var t = "";
          if (e.e) t = e.p;
          else if (this.assetsPath) {
            var r = e.p;
            r.indexOf("images/") !== -1 && (r = r.split("/")[1]),
              (t = this.assetsPath + r);
          } else (t = this.path), (t += e.u ? e.u : ""), (t += e.p);
          return t;
        }),
        (AnimationItem.prototype.getAssetData = function (e) {
          for (var t = 0, r = this.assets.length; t < r; ) {
            if (e === this.assets[t].id) return this.assets[t];
            t += 1;
          }
          return null;
        }),
        (AnimationItem.prototype.hide = function () {
          this.renderer.hide();
        }),
        (AnimationItem.prototype.show = function () {
          this.renderer.show();
        }),
        (AnimationItem.prototype.getDuration = function (e) {
          return e ? this.totalFrames : this.totalFrames / this.frameRate;
        }),
        (AnimationItem.prototype.updateDocumentData = function (e, t, r) {
          try {
            var s = this.renderer.getElementByPath(e);
            s.updateDocumentData(t, r);
          } catch {}
        }),
        (AnimationItem.prototype.trigger = function (e) {
          if (this._cbs && this._cbs[e])
            switch (e) {
              case "enterFrame":
                this.triggerEvent(
                  e,
                  new BMEnterFrameEvent(
                    e,
                    this.currentFrame,
                    this.totalFrames,
                    this.frameModifier
                  )
                );
                break;
              case "drawnFrame":
                (this.drawnFrameEvent.currentTime = this.currentFrame),
                  (this.drawnFrameEvent.totalTime = this.totalFrames),
                  (this.drawnFrameEvent.direction = this.frameModifier),
                  this.triggerEvent(e, this.drawnFrameEvent);
                break;
              case "loopComplete":
                this.triggerEvent(
                  e,
                  new BMCompleteLoopEvent(
                    e,
                    this.loop,
                    this.playCount,
                    this.frameMult
                  )
                );
                break;
              case "complete":
                this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
                break;
              case "segmentStart":
                this.triggerEvent(
                  e,
                  new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)
                );
                break;
              case "destroy":
                this.triggerEvent(e, new BimdestroyEvent(e, this));
                break;
              default:
                this.triggerEvent(e);
            }
          e === "enterFrame" &&
            this.onEnterFrame &&
            this.onEnterFrame.call(
              this,
              new BMEnterFrameEvent(
                e,
                this.currentFrame,
                this.totalFrames,
                this.frameMult
              )
            ),
            e === "loopComplete" &&
              this.onLoopComplete &&
              this.onLoopComplete.call(
                this,
                new BMCompleteLoopEvent(
                  e,
                  this.loop,
                  this.playCount,
                  this.frameMult
                )
              ),
            e === "complete" &&
              this.onComplete &&
              this.onComplete.call(
                this,
                new BMCompleteEvent(e, this.frameMult)
              ),
            e === "segmentStart" &&
              this.onSegmentStart &&
              this.onSegmentStart.call(
                this,
                new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)
              ),
            e === "destroy" &&
              this.onDestroy &&
              this.onDestroy.call(this, new BimdestroyEvent(e, this));
        }),
        (AnimationItem.prototype.triggerRenderFrameError = function (e) {
          var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
          this.triggerEvent("error", t),
            this.onError && this.onError.call(this, t);
        }),
        (AnimationItem.prototype.triggerConfigError = function (e) {
          var t = new BMConfigErrorEvent(e, this.currentFrame);
          this.triggerEvent("error", t),
            this.onError && this.onError.call(this, t);
        });
      var animationManager = (function () {
          var e = {},
            t = [],
            r = 0,
            s = 0,
            a = 0,
            n = !0,
            o = !1;
          function f(D) {
            for (var M = 0, C = D.target; M < s; )
              t[M].animation === C &&
                (t.splice(M, 1), (M -= 1), (s -= 1), C.isPaused || P()),
                (M += 1);
          }
          function l(D, M) {
            if (!D) return null;
            for (var C = 0; C < s; ) {
              if (t[C].elem === D && t[C].elem !== null) return t[C].animation;
              C += 1;
            }
            var I = new AnimationItem();
            return u(I, D), I.setData(D, M), I;
          }
          function p() {
            var D,
              M = t.length,
              C = [];
            for (D = 0; D < M; D += 1) C.push(t[D].animation);
            return C;
          }
          function b() {
            (a += 1), G();
          }
          function P() {
            a -= 1;
          }
          function u(D, M) {
            D.addEventListener("destroy", f),
              D.addEventListener("_active", b),
              D.addEventListener("_idle", P),
              t.push({ elem: M, animation: D }),
              (s += 1);
          }
          function _(D) {
            var M = new AnimationItem();
            return u(M, null), M.setParams(D), M;
          }
          function x(D, M) {
            var C;
            for (C = 0; C < s; C += 1) t[C].animation.setSpeed(D, M);
          }
          function g(D, M) {
            var C;
            for (C = 0; C < s; C += 1) t[C].animation.setDirection(D, M);
          }
          function A(D) {
            var M;
            for (M = 0; M < s; M += 1) t[M].animation.play(D);
          }
          function d(D) {
            var M = D - r,
              C;
            for (C = 0; C < s; C += 1) t[C].animation.advanceTime(M);
            (r = D), a && !o ? window.requestAnimationFrame(d) : (n = !0);
          }
          function y(D) {
            (r = D), window.requestAnimationFrame(d);
          }
          function c(D) {
            var M;
            for (M = 0; M < s; M += 1) t[M].animation.pause(D);
          }
          function m(D, M, C) {
            var I;
            for (I = 0; I < s; I += 1) t[I].animation.goToAndStop(D, M, C);
          }
          function E(D) {
            var M;
            for (M = 0; M < s; M += 1) t[M].animation.stop(D);
          }
          function S(D) {
            var M;
            for (M = 0; M < s; M += 1) t[M].animation.togglePause(D);
          }
          function T(D) {
            var M;
            for (M = s - 1; M >= 0; M -= 1) t[M].animation.destroy(D);
          }
          function F(D, M, C) {
            var I = [].concat(
                [].slice.call(document.getElementsByClassName("lottie")),
                [].slice.call(document.getElementsByClassName("bodymovin"))
              ),
              L,
              V = I.length;
            for (L = 0; L < V; L += 1)
              C && I[L].setAttribute("data-bm-type", C), l(I[L], D);
            if (M && V === 0) {
              C || (C = "svg");
              var q = document.getElementsByTagName("body")[0];
              q.innerText = "";
              var Y = createTag("div");
              (Y.style.width = "100%"),
                (Y.style.height = "100%"),
                Y.setAttribute("data-bm-type", C),
                q.appendChild(Y),
                l(Y, D);
            }
          }
          function O() {
            var D;
            for (D = 0; D < s; D += 1) t[D].animation.resize();
          }
          function G() {
            !o && a && n && (window.requestAnimationFrame(y), (n = !1));
          }
          function $() {
            o = !0;
          }
          function B() {
            (o = !1), G();
          }
          function z(D, M) {
            var C;
            for (C = 0; C < s; C += 1) t[C].animation.setVolume(D, M);
          }
          function N(D) {
            var M;
            for (M = 0; M < s; M += 1) t[M].animation.mute(D);
          }
          function R(D) {
            var M;
            for (M = 0; M < s; M += 1) t[M].animation.unmute(D);
          }
          return (
            (e.registerAnimation = l),
            (e.loadAnimation = _),
            (e.setSpeed = x),
            (e.setDirection = g),
            (e.play = A),
            (e.pause = c),
            (e.stop = E),
            (e.togglePause = S),
            (e.searchAnimations = F),
            (e.resize = O),
            (e.goToAndStop = m),
            (e.destroy = T),
            (e.freeze = $),
            (e.unfreeze = B),
            (e.setVolume = z),
            (e.mute = N),
            (e.unmute = R),
            (e.getRegisteredAnimations = p),
            e
          );
        })(),
        BezierFactory = (function () {
          var e = {};
          e.getBezierEasing = r;
          var t = {};
          function r(y, c, m, E, S) {
            var T =
              S ||
              ("bez_" + y + "_" + c + "_" + m + "_" + E).replace(/\./g, "p");
            if (t[T]) return t[T];
            var F = new d([y, c, m, E]);
            return (t[T] = F), F;
          }
          var s = 4,
            a = 0.001,
            n = 1e-7,
            o = 10,
            f = 11,
            l = 1 / (f - 1),
            p = typeof Float32Array == "function";
          function b(y, c) {
            return 1 - 3 * c + 3 * y;
          }
          function P(y, c) {
            return 3 * c - 6 * y;
          }
          function u(y) {
            return 3 * y;
          }
          function _(y, c, m) {
            return ((b(c, m) * y + P(c, m)) * y + u(c)) * y;
          }
          function x(y, c, m) {
            return 3 * b(c, m) * y * y + 2 * P(c, m) * y + u(c);
          }
          function g(y, c, m, E, S) {
            var T,
              F,
              O = 0;
            do
              (F = c + (m - c) / 2),
                (T = _(F, E, S) - y),
                T > 0 ? (m = F) : (c = F);
            while (Math.abs(T) > n && ++O < o);
            return F;
          }
          function A(y, c, m, E) {
            for (var S = 0; S < s; ++S) {
              var T = x(c, m, E);
              if (T === 0) return c;
              var F = _(c, m, E) - y;
              c -= F / T;
            }
            return c;
          }
          function d(y) {
            (this._p = y),
              (this._mSampleValues = p ? new Float32Array(f) : new Array(f)),
              (this._precomputed = !1),
              (this.get = this.get.bind(this));
          }
          return (
            (d.prototype = {
              get: function (c) {
                var m = this._p[0],
                  E = this._p[1],
                  S = this._p[2],
                  T = this._p[3];
                return (
                  this._precomputed || this._precompute(),
                  m === E && S === T
                    ? c
                    : c === 0
                    ? 0
                    : c === 1
                    ? 1
                    : _(this._getTForX(c), E, T)
                );
              },
              _precompute: function () {
                var c = this._p[0],
                  m = this._p[1],
                  E = this._p[2],
                  S = this._p[3];
                (this._precomputed = !0),
                  (c !== m || E !== S) && this._calcSampleValues();
              },
              _calcSampleValues: function () {
                for (var c = this._p[0], m = this._p[2], E = 0; E < f; ++E)
                  this._mSampleValues[E] = _(E * l, c, m);
              },
              _getTForX: function (c) {
                for (
                  var m = this._p[0],
                    E = this._p[2],
                    S = this._mSampleValues,
                    T = 0,
                    F = 1,
                    O = f - 1;
                  F !== O && S[F] <= c;
                  ++F
                )
                  T += l;
                --F;
                var G = (c - S[F]) / (S[F + 1] - S[F]),
                  $ = T + G * l,
                  B = x($, m, E);
                return B >= a
                  ? A(c, $, m, E)
                  : B === 0
                  ? $
                  : g(c, T, T + l, m, E);
              },
            }),
            e
          );
        })(),
        pooling = (function () {
          function e(t) {
            return t.concat(createSizedArray(t.length));
          }
          return { double: e };
        })(),
        poolFactory = (function () {
          return function (e, t, r) {
            var s = 0,
              a = e,
              n = createSizedArray(a),
              o = { newElement: f, release: l };
            function f() {
              var p;
              return s ? ((s -= 1), (p = n[s])) : (p = t()), p;
            }
            function l(p) {
              s === a && ((n = pooling.double(n)), (a *= 2)),
                r && r(p),
                (n[s] = p),
                (s += 1);
            }
            return o;
          };
        })(),
        bezierLengthPool = (function () {
          function e() {
            return {
              addedLength: 0,
              percents: createTypedArray("float32", getDefaultCurveSegments()),
              lengths: createTypedArray("float32", getDefaultCurveSegments()),
            };
          }
          return poolFactory(8, e);
        })(),
        segmentsLengthPool = (function () {
          function e() {
            return { lengths: [], totalLength: 0 };
          }
          function t(r) {
            var s,
              a = r.lengths.length;
            for (s = 0; s < a; s += 1) bezierLengthPool.release(r.lengths[s]);
            r.lengths.length = 0;
          }
          return poolFactory(8, e, t);
        })();
      function bezFunction() {
        var e = Math;
        function t(u, _, x, g, A, d) {
          var y = u * g + _ * A + x * d - A * g - d * u - x * _;
          return y > -0.001 && y < 0.001;
        }
        function r(u, _, x, g, A, d, y, c, m) {
          if (x === 0 && d === 0 && m === 0) return t(u, _, g, A, y, c);
          var E = e.sqrt(e.pow(g - u, 2) + e.pow(A - _, 2) + e.pow(d - x, 2)),
            S = e.sqrt(e.pow(y - u, 2) + e.pow(c - _, 2) + e.pow(m - x, 2)),
            T = e.sqrt(e.pow(y - g, 2) + e.pow(c - A, 2) + e.pow(m - d, 2)),
            F;
          return (
            E > S
              ? E > T
                ? (F = E - S - T)
                : (F = T - S - E)
              : T > S
              ? (F = T - S - E)
              : (F = S - E - T),
            F > -1e-4 && F < 1e-4
          );
        }
        var s = (function () {
          return function (u, _, x, g) {
            var A = getDefaultCurveSegments(),
              d,
              y,
              c,
              m,
              E,
              S = 0,
              T,
              F = [],
              O = [],
              G = bezierLengthPool.newElement();
            for (c = x.length, d = 0; d < A; d += 1) {
              for (E = d / (A - 1), T = 0, y = 0; y < c; y += 1)
                (m =
                  bmPow(1 - E, 3) * u[y] +
                  3 * bmPow(1 - E, 2) * E * x[y] +
                  3 * (1 - E) * bmPow(E, 2) * g[y] +
                  bmPow(E, 3) * _[y]),
                  (F[y] = m),
                  O[y] !== null && (T += bmPow(F[y] - O[y], 2)),
                  (O[y] = F[y]);
              T && ((T = bmSqrt(T)), (S += T)),
                (G.percents[d] = E),
                (G.lengths[d] = S);
            }
            return (G.addedLength = S), G;
          };
        })();
        function a(u) {
          var _ = segmentsLengthPool.newElement(),
            x = u.c,
            g = u.v,
            A = u.o,
            d = u.i,
            y,
            c = u._length,
            m = _.lengths,
            E = 0;
          for (y = 0; y < c - 1; y += 1)
            (m[y] = s(g[y], g[y + 1], A[y], d[y + 1])), (E += m[y].addedLength);
          return (
            x &&
              c &&
              ((m[y] = s(g[y], g[0], A[y], d[0])), (E += m[y].addedLength)),
            (_.totalLength = E),
            _
          );
        }
        function n(u) {
          (this.segmentLength = 0), (this.points = new Array(u));
        }
        function o(u, _) {
          (this.partialLength = u), (this.point = _);
        }
        var f = (function () {
          var u = {};
          return function (_, x, g, A) {
            var d = (
              _[0] +
              "_" +
              _[1] +
              "_" +
              x[0] +
              "_" +
              x[1] +
              "_" +
              g[0] +
              "_" +
              g[1] +
              "_" +
              A[0] +
              "_" +
              A[1]
            ).replace(/\./g, "p");
            if (!u[d]) {
              var y = getDefaultCurveSegments(),
                c,
                m,
                E,
                S,
                T,
                F = 0,
                O,
                G,
                $ = null;
              _.length === 2 &&
                (_[0] !== x[0] || _[1] !== x[1]) &&
                t(_[0], _[1], x[0], x[1], _[0] + g[0], _[1] + g[1]) &&
                t(_[0], _[1], x[0], x[1], x[0] + A[0], x[1] + A[1]) &&
                (y = 2);
              var B = new n(y);
              for (E = g.length, c = 0; c < y; c += 1) {
                for (
                  G = createSizedArray(E), T = c / (y - 1), O = 0, m = 0;
                  m < E;
                  m += 1
                )
                  (S =
                    bmPow(1 - T, 3) * _[m] +
                    3 * bmPow(1 - T, 2) * T * (_[m] + g[m]) +
                    3 * (1 - T) * bmPow(T, 2) * (x[m] + A[m]) +
                    bmPow(T, 3) * x[m]),
                    (G[m] = S),
                    $ !== null && (O += bmPow(G[m] - $[m], 2));
                (O = bmSqrt(O)), (F += O), (B.points[c] = new o(O, G)), ($ = G);
              }
              (B.segmentLength = F), (u[d] = B);
            }
            return u[d];
          };
        })();
        function l(u, _) {
          var x = _.percents,
            g = _.lengths,
            A = x.length,
            d = bmFloor((A - 1) * u),
            y = u * _.addedLength,
            c = 0;
          if (d === A - 1 || d === 0 || y === g[d]) return x[d];
          for (var m = g[d] > y ? -1 : 1, E = !0; E; )
            if (
              (g[d] <= y && g[d + 1] > y
                ? ((c = (y - g[d]) / (g[d + 1] - g[d])), (E = !1))
                : (d += m),
              d < 0 || d >= A - 1)
            ) {
              if (d === A - 1) return x[d];
              E = !1;
            }
          return x[d] + (x[d + 1] - x[d]) * c;
        }
        function p(u, _, x, g, A, d) {
          var y = l(A, d),
            c = 1 - y,
            m =
              e.round(
                (c * c * c * u[0] +
                  (y * c * c + c * y * c + c * c * y) * x[0] +
                  (y * y * c + c * y * y + y * c * y) * g[0] +
                  y * y * y * _[0]) *
                  1e3
              ) / 1e3,
            E =
              e.round(
                (c * c * c * u[1] +
                  (y * c * c + c * y * c + c * c * y) * x[1] +
                  (y * y * c + c * y * y + y * c * y) * g[1] +
                  y * y * y * _[1]) *
                  1e3
              ) / 1e3;
          return [m, E];
        }
        var b = createTypedArray("float32", 8);
        function P(u, _, x, g, A, d, y) {
          A < 0 ? (A = 0) : A > 1 && (A = 1);
          var c = l(A, y);
          d = d > 1 ? 1 : d;
          var m = l(d, y),
            E,
            S = u.length,
            T = 1 - c,
            F = 1 - m,
            O = T * T * T,
            G = c * T * T * 3,
            $ = c * c * T * 3,
            B = c * c * c,
            z = T * T * F,
            N = c * T * F + T * c * F + T * T * m,
            R = c * c * F + T * c * m + c * T * m,
            D = c * c * m,
            M = T * F * F,
            C = c * F * F + T * m * F + T * F * m,
            I = c * m * F + T * m * m + c * F * m,
            L = c * m * m,
            V = F * F * F,
            q = m * F * F + F * m * F + F * F * m,
            Y = m * m * F + F * m * m + m * F * m,
            W = m * m * m;
          for (E = 0; E < S; E += 1)
            (b[E * 4] =
              e.round((O * u[E] + G * x[E] + $ * g[E] + B * _[E]) * 1e3) / 1e3),
              (b[E * 4 + 1] =
                e.round((z * u[E] + N * x[E] + R * g[E] + D * _[E]) * 1e3) /
                1e3),
              (b[E * 4 + 2] =
                e.round((M * u[E] + C * x[E] + I * g[E] + L * _[E]) * 1e3) /
                1e3),
              (b[E * 4 + 3] =
                e.round((V * u[E] + q * x[E] + Y * g[E] + W * _[E]) * 1e3) /
                1e3);
          return b;
        }
        return {
          getSegmentsLength: a,
          getNewSegment: P,
          getPointInSegment: p,
          buildBezierData: f,
          pointOnLine2D: t,
          pointOnLine3D: r,
        };
      }
      var bez = bezFunction(),
        initFrame = initialDefaultFrame,
        mathAbs = Math.abs;
      function interpolateValue(e, t) {
        var r = this.offsetTime,
          s;
        this.propType === "multidimensional" &&
          (s = createTypedArray("float32", this.pv.length));
        for (
          var a = t.lastIndex,
            n = a,
            o = this.keyframes.length - 1,
            f = !0,
            l,
            p,
            b;
          f;

        ) {
          if (
            ((l = this.keyframes[n]),
            (p = this.keyframes[n + 1]),
            n === o - 1 && e >= p.t - r)
          ) {
            l.h && (l = p), (a = 0);
            break;
          }
          if (p.t - r > e) {
            a = n;
            break;
          }
          n < o - 1 ? (n += 1) : ((a = 0), (f = !1));
        }
        b = this.keyframesMetadata[n] || {};
        var P,
          u,
          _,
          x,
          g,
          A,
          d = p.t - r,
          y = l.t - r,
          c;
        if (l.to) {
          b.bezierData ||
            (b.bezierData = bez.buildBezierData(l.s, p.s || l.e, l.to, l.ti));
          var m = b.bezierData;
          if (e >= d || e < y) {
            var E = e >= d ? m.points.length - 1 : 0;
            for (u = m.points[E].point.length, P = 0; P < u; P += 1)
              s[P] = m.points[E].point[P];
          } else {
            b.__fnct
              ? (A = b.__fnct)
              : ((A = BezierFactory.getBezierEasing(
                  l.o.x,
                  l.o.y,
                  l.i.x,
                  l.i.y,
                  l.n
                ).get),
                (b.__fnct = A)),
              (_ = A((e - y) / (d - y)));
            var S = m.segmentLength * _,
              T,
              F =
                t.lastFrame < e && t._lastKeyframeIndex === n
                  ? t._lastAddedLength
                  : 0;
            for (
              g =
                t.lastFrame < e && t._lastKeyframeIndex === n
                  ? t._lastPoint
                  : 0,
                f = !0,
                x = m.points.length;
              f;

            ) {
              if (
                ((F += m.points[g].partialLength),
                S === 0 || _ === 0 || g === m.points.length - 1)
              ) {
                for (u = m.points[g].point.length, P = 0; P < u; P += 1)
                  s[P] = m.points[g].point[P];
                break;
              } else if (S >= F && S < F + m.points[g + 1].partialLength) {
                for (
                  T = (S - F) / m.points[g + 1].partialLength,
                    u = m.points[g].point.length,
                    P = 0;
                  P < u;
                  P += 1
                )
                  s[P] =
                    m.points[g].point[P] +
                    (m.points[g + 1].point[P] - m.points[g].point[P]) * T;
                break;
              }
              g < x - 1 ? (g += 1) : (f = !1);
            }
            (t._lastPoint = g),
              (t._lastAddedLength = F - m.points[g].partialLength),
              (t._lastKeyframeIndex = n);
          }
        } else {
          var O, G, $, B, z;
          if (((o = l.s.length), (c = p.s || l.e), this.sh && l.h !== 1))
            if (e >= d) (s[0] = c[0]), (s[1] = c[1]), (s[2] = c[2]);
            else if (e <= y) (s[0] = l.s[0]), (s[1] = l.s[1]), (s[2] = l.s[2]);
            else {
              var N = createQuaternion(l.s),
                R = createQuaternion(c),
                D = (e - y) / (d - y);
              quaternionToEuler(s, slerp(N, R, D));
            }
          else
            for (n = 0; n < o; n += 1)
              l.h !== 1 &&
                (e >= d
                  ? (_ = 1)
                  : e < y
                  ? (_ = 0)
                  : (l.o.x.constructor === Array
                      ? (b.__fnct || (b.__fnct = []),
                        b.__fnct[n]
                          ? (A = b.__fnct[n])
                          : ((O = l.o.x[n] === void 0 ? l.o.x[0] : l.o.x[n]),
                            (G = l.o.y[n] === void 0 ? l.o.y[0] : l.o.y[n]),
                            ($ = l.i.x[n] === void 0 ? l.i.x[0] : l.i.x[n]),
                            (B = l.i.y[n] === void 0 ? l.i.y[0] : l.i.y[n]),
                            (A = BezierFactory.getBezierEasing(O, G, $, B).get),
                            (b.__fnct[n] = A)))
                      : b.__fnct
                      ? (A = b.__fnct)
                      : ((O = l.o.x),
                        (G = l.o.y),
                        ($ = l.i.x),
                        (B = l.i.y),
                        (A = BezierFactory.getBezierEasing(O, G, $, B).get),
                        (l.keyframeMetadata = A)),
                    (_ = A((e - y) / (d - y))))),
                (c = p.s || l.e),
                (z = l.h === 1 ? l.s[n] : l.s[n] + (c[n] - l.s[n]) * _),
                this.propType === "multidimensional" ? (s[n] = z) : (s = z);
        }
        return (t.lastIndex = a), s;
      }
      function slerp(e, t, r) {
        var s = [],
          a = e[0],
          n = e[1],
          o = e[2],
          f = e[3],
          l = t[0],
          p = t[1],
          b = t[2],
          P = t[3],
          u,
          _,
          x,
          g,
          A;
        return (
          (_ = a * l + n * p + o * b + f * P),
          _ < 0 && ((_ = -_), (l = -l), (p = -p), (b = -b), (P = -P)),
          1 - _ > 1e-6
            ? ((u = Math.acos(_)),
              (x = Math.sin(u)),
              (g = Math.sin((1 - r) * u) / x),
              (A = Math.sin(r * u) / x))
            : ((g = 1 - r), (A = r)),
          (s[0] = g * a + A * l),
          (s[1] = g * n + A * p),
          (s[2] = g * o + A * b),
          (s[3] = g * f + A * P),
          s
        );
      }
      function quaternionToEuler(e, t) {
        var r = t[0],
          s = t[1],
          a = t[2],
          n = t[3],
          o = Math.atan2(2 * s * n - 2 * r * a, 1 - 2 * s * s - 2 * a * a),
          f = Math.asin(2 * r * s + 2 * a * n),
          l = Math.atan2(2 * r * n - 2 * s * a, 1 - 2 * r * r - 2 * a * a);
        (e[0] = o / degToRads), (e[1] = f / degToRads), (e[2] = l / degToRads);
      }
      function createQuaternion(e) {
        var t = e[0] * degToRads,
          r = e[1] * degToRads,
          s = e[2] * degToRads,
          a = Math.cos(t / 2),
          n = Math.cos(r / 2),
          o = Math.cos(s / 2),
          f = Math.sin(t / 2),
          l = Math.sin(r / 2),
          p = Math.sin(s / 2),
          b = a * n * o - f * l * p,
          P = f * l * o + a * n * p,
          u = f * n * o + a * l * p,
          _ = a * l * o - f * n * p;
        return [P, u, _, b];
      }
      function getValueAtCurrentTime() {
        var e = this.comp.renderedFrame - this.offsetTime,
          t = this.keyframes[0].t - this.offsetTime,
          r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
        if (
          !(
            e === this._caching.lastFrame ||
            (this._caching.lastFrame !== initFrame &&
              ((this._caching.lastFrame >= r && e >= r) ||
                (this._caching.lastFrame < t && e < t)))
          )
        ) {
          this._caching.lastFrame >= e &&
            ((this._caching._lastKeyframeIndex = -1),
            (this._caching.lastIndex = 0));
          var s = this.interpolateValue(e, this._caching);
          this.pv = s;
        }
        return (this._caching.lastFrame = e), this.pv;
      }
      function setVValue(e) {
        var t;
        if (this.propType === "unidimensional")
          (t = e * this.mult),
            mathAbs(this.v - t) > 1e-5 && ((this.v = t), (this._imdf = !0));
        else
          for (var r = 0, s = this.v.length; r < s; )
            (t = e[r] * this.mult),
              mathAbs(this.v[r] - t) > 1e-5 &&
                ((this.v[r] = t), (this._imdf = !0)),
              (r += 1);
      }
      function processEffectsSequence() {
        if (
          !(
            this.elem.globalData.frameId === this.frameId ||
            !this.effectsSequence.length
          )
        ) {
          if (this.lock) {
            this.setVValue(this.pv);
            return;
          }
          (this.lock = !0), (this._imdf = this._isFirstFrame);
          var e,
            t = this.effectsSequence.length,
            r = this.kf ? this.pv : this.data.k;
          for (e = 0; e < t; e += 1) r = this.effectsSequence[e](r);
          this.setVValue(r),
            (this._isFirstFrame = !1),
            (this.lock = !1),
            (this.frameId = this.elem.globalData.frameId);
        }
      }
      function addEffect(e) {
        this.effectsSequence.push(e), this.container.addDynamicProperty(this);
      }
      function ValueProperty(e, t, r, s) {
        (this.propType = "unidimensional"),
          (this.mult = r || 1),
          (this.data = t),
          (this.v = r ? t.k * r : t.k),
          (this.pv = t.k),
          (this._imdf = !1),
          (this.elem = e),
          (this.container = s),
          (this.comp = e.comp),
          (this.k = !1),
          (this.kf = !1),
          (this.vel = 0),
          (this.effectsSequence = []),
          (this._isFirstFrame = !0),
          (this.getValue = processEffectsSequence),
          (this.setVValue = setVValue),
          (this.addEffect = addEffect);
      }
      function MultiDimensionalProperty(e, t, r, s) {
        (this.propType = "multidimensional"),
          (this.mult = r || 1),
          (this.data = t),
          (this._imdf = !1),
          (this.elem = e),
          (this.container = s),
          (this.comp = e.comp),
          (this.k = !1),
          (this.kf = !1),
          (this.frameId = -1);
        var a,
          n = t.k.length;
        for (
          this.v = createTypedArray("float32", n),
            this.pv = createTypedArray("float32", n),
            this.vel = createTypedArray("float32", n),
            a = 0;
          a < n;
          a += 1
        )
          (this.v[a] = t.k[a] * this.mult), (this.pv[a] = t.k[a]);
        (this._isFirstFrame = !0),
          (this.effectsSequence = []),
          (this.getValue = processEffectsSequence),
          (this.setVValue = setVValue),
          (this.addEffect = addEffect);
      }
      function KeyframedValueProperty(e, t, r, s) {
        (this.propType = "unidimensional"),
          (this.keyframes = t.k),
          (this.keyframesMetadata = []),
          (this.offsetTime = e.data.st),
          (this.frameId = -1),
          (this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1,
          }),
          (this.k = !0),
          (this.kf = !0),
          (this.data = t),
          (this.mult = r || 1),
          (this.elem = e),
          (this.container = s),
          (this.comp = e.comp),
          (this.v = initFrame),
          (this.pv = initFrame),
          (this._isFirstFrame = !0),
          (this.getValue = processEffectsSequence),
          (this.setVValue = setVValue),
          (this.interpolateValue = interpolateValue),
          (this.effectsSequence = [getValueAtCurrentTime.bind(this)]),
          (this.addEffect = addEffect);
      }
      function KeyframedMultidimensionalProperty(e, t, r, s) {
        this.propType = "multidimensional";
        var a,
          n = t.k.length,
          o,
          f,
          l,
          p;
        for (a = 0; a < n - 1; a += 1)
          t.k[a].to &&
            t.k[a].s &&
            t.k[a + 1] &&
            t.k[a + 1].s &&
            ((o = t.k[a].s),
            (f = t.k[a + 1].s),
            (l = t.k[a].to),
            (p = t.k[a].ti),
            ((o.length === 2 &&
              !(o[0] === f[0] && o[1] === f[1]) &&
              bez.pointOnLine2D(
                o[0],
                o[1],
                f[0],
                f[1],
                o[0] + l[0],
                o[1] + l[1]
              ) &&
              bez.pointOnLine2D(
                o[0],
                o[1],
                f[0],
                f[1],
                f[0] + p[0],
                f[1] + p[1]
              )) ||
              (o.length === 3 &&
                !(o[0] === f[0] && o[1] === f[1] && o[2] === f[2]) &&
                bez.pointOnLine3D(
                  o[0],
                  o[1],
                  o[2],
                  f[0],
                  f[1],
                  f[2],
                  o[0] + l[0],
                  o[1] + l[1],
                  o[2] + l[2]
                ) &&
                bez.pointOnLine3D(
                  o[0],
                  o[1],
                  o[2],
                  f[0],
                  f[1],
                  f[2],
                  f[0] + p[0],
                  f[1] + p[1],
                  f[2] + p[2]
                ))) &&
              ((t.k[a].to = null), (t.k[a].ti = null)),
            o[0] === f[0] &&
              o[1] === f[1] &&
              l[0] === 0 &&
              l[1] === 0 &&
              p[0] === 0 &&
              p[1] === 0 &&
              (o.length === 2 || (o[2] === f[2] && l[2] === 0 && p[2] === 0)) &&
              ((t.k[a].to = null), (t.k[a].ti = null)));
        (this.effectsSequence = [getValueAtCurrentTime.bind(this)]),
          (this.data = t),
          (this.keyframes = t.k),
          (this.keyframesMetadata = []),
          (this.offsetTime = e.data.st),
          (this.k = !0),
          (this.kf = !0),
          (this._isFirstFrame = !0),
          (this.mult = r || 1),
          (this.elem = e),
          (this.container = s),
          (this.comp = e.comp),
          (this.getValue = processEffectsSequence),
          (this.setVValue = setVValue),
          (this.interpolateValue = interpolateValue),
          (this.frameId = -1);
        var b = t.k[0].s.length;
        for (
          this.v = createTypedArray("float32", b),
            this.pv = createTypedArray("float32", b),
            a = 0;
          a < b;
          a += 1
        )
          (this.v[a] = initFrame), (this.pv[a] = initFrame);
        (this._caching = {
          lastFrame: initFrame,
          lastIndex: 0,
          value: createTypedArray("float32", b),
        }),
          (this.addEffect = addEffect);
      }
      var PropertyFactory = (function () {
        function e(r, s, a, n, o) {
          s.sid && (s = r.globalData.slotManager.getProp(s));
          var f;
          if (!s.k.length) f = new ValueProperty(r, s, n, o);
          else if (typeof s.k[0] == "number")
            f = new MultiDimensionalProperty(r, s, n, o);
          else
            switch (a) {
              case 0:
                f = new KeyframedValueProperty(r, s, n, o);
                break;
              case 1:
                f = new KeyframedMultidimensionalProperty(r, s, n, o);
                break;
            }
          return f.effectsSequence.length && o.addDynamicProperty(f), f;
        }
        var t = { getProp: e };
        return t;
      })();
      function DynamicPropertyContainer() {}
      DynamicPropertyContainer.prototype = {
        addDynamicProperty: function (t) {
          this.dynamicProperties.indexOf(t) === -1 &&
            (this.dynamicProperties.push(t),
            this.container.addDynamicProperty(this),
            (this._isAnimated = !0));
        },
        iterateDynamicProperties: function () {
          this._imdf = !1;
          var t,
            r = this.dynamicProperties.length;
          for (t = 0; t < r; t += 1)
            this.dynamicProperties[t].getValue(),
              this.dynamicProperties[t]._imdf && (this._imdf = !0);
        },
        initDynamicPropertyContainer: function (t) {
          (this.container = t),
            (this.dynamicProperties = []),
            (this._imdf = !1),
            (this._isAnimated = !1);
        },
      };
      var pointPool = (function () {
        function e() {
          return createTypedArray("float32", 2);
        }
        return poolFactory(8, e);
      })();
      function ShapePath() {
        (this.c = !1),
          (this._length = 0),
          (this._maxLength = 8),
          (this.v = createSizedArray(this._maxLength)),
          (this.o = createSizedArray(this._maxLength)),
          (this.i = createSizedArray(this._maxLength));
      }
      (ShapePath.prototype.setPathData = function (e, t) {
        (this.c = e), this.setLength(t);
        for (var r = 0; r < t; )
          (this.v[r] = pointPool.newElement()),
            (this.o[r] = pointPool.newElement()),
            (this.i[r] = pointPool.newElement()),
            (r += 1);
      }),
        (ShapePath.prototype.setLength = function (e) {
          for (; this._maxLength < e; ) this.doubleArrayLength();
          this._length = e;
        }),
        (ShapePath.prototype.doubleArrayLength = function () {
          (this.v = this.v.concat(createSizedArray(this._maxLength))),
            (this.i = this.i.concat(createSizedArray(this._maxLength))),
            (this.o = this.o.concat(createSizedArray(this._maxLength))),
            (this._maxLength *= 2);
        }),
        (ShapePath.prototype.setXYAt = function (e, t, r, s, a) {
          var n;
          switch (
            ((this._length = Math.max(this._length, s + 1)),
            this._length >= this._maxLength && this.doubleArrayLength(),
            r)
          ) {
            case "v":
              n = this.v;
              break;
            case "i":
              n = this.i;
              break;
            case "o":
              n = this.o;
              break;
            default:
              n = [];
              break;
          }
          (!n[s] || (n[s] && !a)) && (n[s] = pointPool.newElement()),
            (n[s][0] = e),
            (n[s][1] = t);
        }),
        (ShapePath.prototype.setTripleAt = function (e, t, r, s, a, n, o, f) {
          this.setXYAt(e, t, "v", o, f),
            this.setXYAt(r, s, "o", o, f),
            this.setXYAt(a, n, "i", o, f);
        }),
        (ShapePath.prototype.reverse = function () {
          var e = new ShapePath();
          e.setPathData(this.c, this._length);
          var t = this.v,
            r = this.o,
            s = this.i,
            a = 0;
          this.c &&
            (e.setTripleAt(
              t[0][0],
              t[0][1],
              s[0][0],
              s[0][1],
              r[0][0],
              r[0][1],
              0,
              !1
            ),
            (a = 1));
          var n = this._length - 1,
            o = this._length,
            f;
          for (f = a; f < o; f += 1)
            e.setTripleAt(
              t[n][0],
              t[n][1],
              s[n][0],
              s[n][1],
              r[n][0],
              r[n][1],
              f,
              !1
            ),
              (n -= 1);
          return e;
        }),
        (ShapePath.prototype.length = function () {
          return this._length;
        });
      var shapePool = (function () {
        function e() {
          return new ShapePath();
        }
        function t(a) {
          var n = a._length,
            o;
          for (o = 0; o < n; o += 1)
            pointPool.release(a.v[o]),
              pointPool.release(a.i[o]),
              pointPool.release(a.o[o]),
              (a.v[o] = null),
              (a.i[o] = null),
              (a.o[o] = null);
          (a._length = 0), (a.c = !1);
        }
        function r(a) {
          var n = s.newElement(),
            o,
            f = a._length === void 0 ? a.v.length : a._length;
          for (n.setLength(f), n.c = a.c, o = 0; o < f; o += 1)
            n.setTripleAt(
              a.v[o][0],
              a.v[o][1],
              a.o[o][0],
              a.o[o][1],
              a.i[o][0],
              a.i[o][1],
              o
            );
          return n;
        }
        var s = poolFactory(4, e, t);
        return (s.clone = r), s;
      })();
      function ShapeCollection() {
        (this._length = 0),
          (this._maxLength = 4),
          (this.shapes = createSizedArray(this._maxLength));
      }
      (ShapeCollection.prototype.addShape = function (e) {
        this._length === this._maxLength &&
          ((this.shapes = this.shapes.concat(
            createSizedArray(this._maxLength)
          )),
          (this._maxLength *= 2)),
          (this.shapes[this._length] = e),
          (this._length += 1);
      }),
        (ShapeCollection.prototype.releaseShapes = function () {
          var e;
          for (e = 0; e < this._length; e += 1)
            shapePool.release(this.shapes[e]);
          this._length = 0;
        });
      var shapeCollectionPool = (function () {
          var e = { newShapeCollection: a, release: n },
            t = 0,
            r = 4,
            s = createSizedArray(r);
          function a() {
            var o;
            return t ? ((t -= 1), (o = s[t])) : (o = new ShapeCollection()), o;
          }
          function n(o) {
            var f,
              l = o._length;
            for (f = 0; f < l; f += 1) shapePool.release(o.shapes[f]);
            (o._length = 0),
              t === r && ((s = pooling.double(s)), (r *= 2)),
              (s[t] = o),
              (t += 1);
          }
          return e;
        })(),
        ShapePropertyFactory = (function () {
          var e = -999999;
          function t(d, y, c) {
            var m = c.lastIndex,
              E,
              S,
              T,
              F,
              O,
              G,
              $,
              B,
              z,
              N = this.keyframes;
            if (d < N[0].t - this.offsetTime)
              (E = N[0].s[0]), (T = !0), (m = 0);
            else if (d >= N[N.length - 1].t - this.offsetTime)
              (E = N[N.length - 1].s
                ? N[N.length - 1].s[0]
                : N[N.length - 2].e[0]),
                (T = !0);
            else {
              for (
                var R = m, D = N.length - 1, M = !0, C, I, L;
                M && ((C = N[R]), (I = N[R + 1]), !(I.t - this.offsetTime > d));

              )
                R < D - 1 ? (R += 1) : (M = !1);
              if (
                ((L = this.keyframesMetadata[R] || {}),
                (T = C.h === 1),
                (m = R),
                !T)
              ) {
                if (d >= I.t - this.offsetTime) B = 1;
                else if (d < C.t - this.offsetTime) B = 0;
                else {
                  var V;
                  L.__fnct
                    ? (V = L.__fnct)
                    : ((V = BezierFactory.getBezierEasing(
                        C.o.x,
                        C.o.y,
                        C.i.x,
                        C.i.y
                      ).get),
                      (L.__fnct = V)),
                    (B = V(
                      (d - (C.t - this.offsetTime)) /
                        (I.t - this.offsetTime - (C.t - this.offsetTime))
                    ));
                }
                S = I.s ? I.s[0] : C.e[0];
              }
              E = C.s[0];
            }
            for (
              G = y._length, $ = E.i[0].length, c.lastIndex = m, F = 0;
              F < G;
              F += 1
            )
              for (O = 0; O < $; O += 1)
                (z = T ? E.i[F][O] : E.i[F][O] + (S.i[F][O] - E.i[F][O]) * B),
                  (y.i[F][O] = z),
                  (z = T ? E.o[F][O] : E.o[F][O] + (S.o[F][O] - E.o[F][O]) * B),
                  (y.o[F][O] = z),
                  (z = T ? E.v[F][O] : E.v[F][O] + (S.v[F][O] - E.v[F][O]) * B),
                  (y.v[F][O] = z);
          }
          function r() {
            var d = this.comp.renderedFrame - this.offsetTime,
              y = this.keyframes[0].t - this.offsetTime,
              c = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
              m = this._caching.lastFrame;
            return (
              (m !== e && ((m < y && d < y) || (m > c && d > c))) ||
                ((this._caching.lastIndex =
                  m < d ? this._caching.lastIndex : 0),
                this.interpolateShape(d, this.pv, this._caching)),
              (this._caching.lastFrame = d),
              this.pv
            );
          }
          function s() {
            this.paths = this.localShapeCollection;
          }
          function a(d, y) {
            if (d._length !== y._length || d.c !== y.c) return !1;
            var c,
              m = d._length;
            for (c = 0; c < m; c += 1)
              if (
                d.v[c][0] !== y.v[c][0] ||
                d.v[c][1] !== y.v[c][1] ||
                d.o[c][0] !== y.o[c][0] ||
                d.o[c][1] !== y.o[c][1] ||
                d.i[c][0] !== y.i[c][0] ||
                d.i[c][1] !== y.i[c][1]
              )
                return !1;
            return !0;
          }
          function n(d) {
            a(this.v, d) ||
              ((this.v = shapePool.clone(d)),
              this.localShapeCollection.releaseShapes(),
              this.localShapeCollection.addShape(this.v),
              (this._imdf = !0),
              (this.paths = this.localShapeCollection));
          }
          function o() {
            if (this.elem.globalData.frameId !== this.frameId) {
              if (!this.effectsSequence.length) {
                this._imdf = !1;
                return;
              }
              if (this.lock) {
                this.setVValue(this.pv);
                return;
              }
              (this.lock = !0), (this._imdf = !1);
              var d;
              this.kf
                ? (d = this.pv)
                : this.data.ks
                ? (d = this.data.ks.k)
                : (d = this.data.pt.k);
              var y,
                c = this.effectsSequence.length;
              for (y = 0; y < c; y += 1) d = this.effectsSequence[y](d);
              this.setVValue(d),
                (this.lock = !1),
                (this.frameId = this.elem.globalData.frameId);
            }
          }
          function f(d, y, c) {
            (this.propType = "shape"),
              (this.comp = d.comp),
              (this.container = d),
              (this.elem = d),
              (this.data = y),
              (this.k = !1),
              (this.kf = !1),
              (this._imdf = !1);
            var m = c === 3 ? y.pt.k : y.ks.k;
            (this.v = shapePool.clone(m)),
              (this.pv = shapePool.clone(this.v)),
              (this.localShapeCollection =
                shapeCollectionPool.newShapeCollection()),
              (this.paths = this.localShapeCollection),
              this.paths.addShape(this.v),
              (this.reset = s),
              (this.effectsSequence = []);
          }
          function l(d) {
            this.effectsSequence.push(d),
              this.container.addDynamicProperty(this);
          }
          (f.prototype.interpolateShape = t),
            (f.prototype.getValue = o),
            (f.prototype.setVValue = n),
            (f.prototype.addEffect = l);
          function p(d, y, c) {
            (this.propType = "shape"),
              (this.comp = d.comp),
              (this.elem = d),
              (this.container = d),
              (this.offsetTime = d.data.st),
              (this.keyframes = c === 3 ? y.pt.k : y.ks.k),
              (this.keyframesMetadata = []),
              (this.k = !0),
              (this.kf = !0);
            var m = this.keyframes[0].s[0].i.length;
            (this.v = shapePool.newElement()),
              this.v.setPathData(this.keyframes[0].s[0].c, m),
              (this.pv = shapePool.clone(this.v)),
              (this.localShapeCollection =
                shapeCollectionPool.newShapeCollection()),
              (this.paths = this.localShapeCollection),
              this.paths.addShape(this.v),
              (this.lastFrame = e),
              (this.reset = s),
              (this._caching = { lastFrame: e, lastIndex: 0 }),
              (this.effectsSequence = [r.bind(this)]);
          }
          (p.prototype.getValue = o),
            (p.prototype.interpolateShape = t),
            (p.prototype.setVValue = n),
            (p.prototype.addEffect = l);
          var b = (function () {
              var d = roundCorner;
              function y(c, m) {
                (this.v = shapePool.newElement()),
                  this.v.setPathData(!0, 4),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  (this.paths = this.localShapeCollection),
                  this.localShapeCollection.addShape(this.v),
                  (this.d = m.d),
                  (this.elem = c),
                  (this.comp = c.comp),
                  (this.frameId = -1),
                  this.initDynamicPropertyContainer(c),
                  (this.p = PropertyFactory.getProp(c, m.p, 1, 0, this)),
                  (this.s = PropertyFactory.getProp(c, m.s, 1, 0, this)),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertEllToPath());
              }
              return (
                (y.prototype = {
                  reset: s,
                  getValue: function () {
                    this.elem.globalData.frameId !== this.frameId &&
                      ((this.frameId = this.elem.globalData.frameId),
                      this.iterateDynamicProperties(),
                      this._imdf && this.convertEllToPath());
                  },
                  convertEllToPath: function () {
                    var m = this.p.v[0],
                      E = this.p.v[1],
                      S = this.s.v[0] / 2,
                      T = this.s.v[1] / 2,
                      F = this.d !== 3,
                      O = this.v;
                    (O.v[0][0] = m),
                      (O.v[0][1] = E - T),
                      (O.v[1][0] = F ? m + S : m - S),
                      (O.v[1][1] = E),
                      (O.v[2][0] = m),
                      (O.v[2][1] = E + T),
                      (O.v[3][0] = F ? m - S : m + S),
                      (O.v[3][1] = E),
                      (O.i[0][0] = F ? m - S * d : m + S * d),
                      (O.i[0][1] = E - T),
                      (O.i[1][0] = F ? m + S : m - S),
                      (O.i[1][1] = E - T * d),
                      (O.i[2][0] = F ? m + S * d : m - S * d),
                      (O.i[2][1] = E + T),
                      (O.i[3][0] = F ? m - S : m + S),
                      (O.i[3][1] = E + T * d),
                      (O.o[0][0] = F ? m + S * d : m - S * d),
                      (O.o[0][1] = E - T),
                      (O.o[1][0] = F ? m + S : m - S),
                      (O.o[1][1] = E + T * d),
                      (O.o[2][0] = F ? m - S * d : m + S * d),
                      (O.o[2][1] = E + T),
                      (O.o[3][0] = F ? m - S : m + S),
                      (O.o[3][1] = E - T * d);
                  },
                }),
                extendPrototype([DynamicPropertyContainer], y),
                y
              );
            })(),
            P = (function () {
              function d(y, c) {
                (this.v = shapePool.newElement()),
                  this.v.setPathData(!0, 0),
                  (this.elem = y),
                  (this.comp = y.comp),
                  (this.data = c),
                  (this.frameId = -1),
                  (this.d = c.d),
                  this.initDynamicPropertyContainer(y),
                  c.sy === 1
                    ? ((this.ir = PropertyFactory.getProp(y, c.ir, 0, 0, this)),
                      (this.is = PropertyFactory.getProp(
                        y,
                        c.is,
                        0,
                        0.01,
                        this
                      )),
                      (this.convertToPath = this.convertStarToPath))
                    : (this.convertToPath = this.convertPolygonToPath),
                  (this.pt = PropertyFactory.getProp(y, c.pt, 0, 0, this)),
                  (this.p = PropertyFactory.getProp(y, c.p, 1, 0, this)),
                  (this.r = PropertyFactory.getProp(
                    y,
                    c.r,
                    0,
                    degToRads,
                    this
                  )),
                  (this.or = PropertyFactory.getProp(y, c.or, 0, 0, this)),
                  (this.os = PropertyFactory.getProp(y, c.os, 0, 0.01, this)),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  this.localShapeCollection.addShape(this.v),
                  (this.paths = this.localShapeCollection),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertToPath());
              }
              return (
                (d.prototype = {
                  reset: s,
                  getValue: function () {
                    this.elem.globalData.frameId !== this.frameId &&
                      ((this.frameId = this.elem.globalData.frameId),
                      this.iterateDynamicProperties(),
                      this._imdf && this.convertToPath());
                  },
                  convertStarToPath: function () {
                    var c = Math.floor(this.pt.v) * 2,
                      m = (Math.PI * 2) / c,
                      E = !0,
                      S = this.or.v,
                      T = this.ir.v,
                      F = this.os.v,
                      O = this.is.v,
                      G = (2 * Math.PI * S) / (c * 2),
                      $ = (2 * Math.PI * T) / (c * 2),
                      B,
                      z,
                      N,
                      R,
                      D = -Math.PI / 2;
                    D += this.r.v;
                    var M = this.data.d === 3 ? -1 : 1;
                    for (this.v._length = 0, B = 0; B < c; B += 1) {
                      (z = E ? S : T), (N = E ? F : O), (R = E ? G : $);
                      var C = z * Math.cos(D),
                        I = z * Math.sin(D),
                        L =
                          C === 0 && I === 0 ? 0 : I / Math.sqrt(C * C + I * I),
                        V =
                          C === 0 && I === 0
                            ? 0
                            : -C / Math.sqrt(C * C + I * I);
                      (C += +this.p.v[0]),
                        (I += +this.p.v[1]),
                        this.v.setTripleAt(
                          C,
                          I,
                          C - L * R * N * M,
                          I - V * R * N * M,
                          C + L * R * N * M,
                          I + V * R * N * M,
                          B,
                          !0
                        ),
                        (E = !E),
                        (D += m * M);
                    }
                  },
                  convertPolygonToPath: function () {
                    var c = Math.floor(this.pt.v),
                      m = (Math.PI * 2) / c,
                      E = this.or.v,
                      S = this.os.v,
                      T = (2 * Math.PI * E) / (c * 4),
                      F,
                      O = -Math.PI * 0.5,
                      G = this.data.d === 3 ? -1 : 1;
                    for (
                      O += this.r.v, this.v._length = 0, F = 0;
                      F < c;
                      F += 1
                    ) {
                      var $ = E * Math.cos(O),
                        B = E * Math.sin(O),
                        z =
                          $ === 0 && B === 0 ? 0 : B / Math.sqrt($ * $ + B * B),
                        N =
                          $ === 0 && B === 0
                            ? 0
                            : -$ / Math.sqrt($ * $ + B * B);
                      ($ += +this.p.v[0]),
                        (B += +this.p.v[1]),
                        this.v.setTripleAt(
                          $,
                          B,
                          $ - z * T * S * G,
                          B - N * T * S * G,
                          $ + z * T * S * G,
                          B + N * T * S * G,
                          F,
                          !0
                        ),
                        (O += m * G);
                    }
                    (this.paths.length = 0), (this.paths[0] = this.v);
                  },
                }),
                extendPrototype([DynamicPropertyContainer], d),
                d
              );
            })(),
            u = (function () {
              function d(y, c) {
                (this.v = shapePool.newElement()),
                  (this.v.c = !0),
                  (this.localShapeCollection =
                    shapeCollectionPool.newShapeCollection()),
                  this.localShapeCollection.addShape(this.v),
                  (this.paths = this.localShapeCollection),
                  (this.elem = y),
                  (this.comp = y.comp),
                  (this.frameId = -1),
                  (this.d = c.d),
                  this.initDynamicPropertyContainer(y),
                  (this.p = PropertyFactory.getProp(y, c.p, 1, 0, this)),
                  (this.s = PropertyFactory.getProp(y, c.s, 1, 0, this)),
                  (this.r = PropertyFactory.getProp(y, c.r, 0, 0, this)),
                  this.dynamicProperties.length
                    ? (this.k = !0)
                    : ((this.k = !1), this.convertRectToPath());
              }
              return (
                (d.prototype = {
                  convertRectToPath: function () {
                    var c = this.p.v[0],
                      m = this.p.v[1],
                      E = this.s.v[0] / 2,
                      S = this.s.v[1] / 2,
                      T = bmMin(E, S, this.r.v),
                      F = T * (1 - roundCorner);
                    (this.v._length = 0),
                      this.d === 2 || this.d === 1
                        ? (this.v.setTripleAt(
                            c + E,
                            m - S + T,
                            c + E,
                            m - S + T,
                            c + E,
                            m - S + F,
                            0,
                            !0
                          ),
                          this.v.setTripleAt(
                            c + E,
                            m + S - T,
                            c + E,
                            m + S - F,
                            c + E,
                            m + S - T,
                            1,
                            !0
                          ),
                          T !== 0
                            ? (this.v.setTripleAt(
                                c + E - T,
                                m + S,
                                c + E - T,
                                m + S,
                                c + E - F,
                                m + S,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                c - E + T,
                                m + S,
                                c - E + F,
                                m + S,
                                c - E + T,
                                m + S,
                                3,
                                !0
                              ),
                              this.v.setTripleAt(
                                c - E,
                                m + S - T,
                                c - E,
                                m + S - T,
                                c - E,
                                m + S - F,
                                4,
                                !0
                              ),
                              this.v.setTripleAt(
                                c - E,
                                m - S + T,
                                c - E,
                                m - S + F,
                                c - E,
                                m - S + T,
                                5,
                                !0
                              ),
                              this.v.setTripleAt(
                                c - E + T,
                                m - S,
                                c - E + T,
                                m - S,
                                c - E + F,
                                m - S,
                                6,
                                !0
                              ),
                              this.v.setTripleAt(
                                c + E - T,
                                m - S,
                                c + E - F,
                                m - S,
                                c + E - T,
                                m - S,
                                7,
                                !0
                              ))
                            : (this.v.setTripleAt(
                                c - E,
                                m + S,
                                c - E + F,
                                m + S,
                                c - E,
                                m + S,
                                2
                              ),
                              this.v.setTripleAt(
                                c - E,
                                m - S,
                                c - E,
                                m - S + F,
                                c - E,
                                m - S,
                                3
                              )))
                        : (this.v.setTripleAt(
                            c + E,
                            m - S + T,
                            c + E,
                            m - S + F,
                            c + E,
                            m - S + T,
                            0,
                            !0
                          ),
                          T !== 0
                            ? (this.v.setTripleAt(
                                c + E - T,
                                m - S,
                                c + E - T,
                                m - S,
                                c + E - F,
                                m - S,
                                1,
                                !0
                              ),
                              this.v.setTripleAt(
                                c - E + T,
                                m - S,
                                c - E + F,
                                m - S,
                                c - E + T,
                                m - S,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                c - E,
                                m - S + T,
                                c - E,
                                m - S + T,
                                c - E,
                                m - S + F,
                                3,
                                !0
                              ),
                              this.v.setTripleAt(
                                c - E,
                                m + S - T,
                                c - E,
                                m + S - F,
                                c - E,
                                m + S - T,
                                4,
                                !0
                              ),
                              this.v.setTripleAt(
                                c - E + T,
                                m + S,
                                c - E + T,
                                m + S,
                                c - E + F,
                                m + S,
                                5,
                                !0
                              ),
                              this.v.setTripleAt(
                                c + E - T,
                                m + S,
                                c + E - F,
                                m + S,
                                c + E - T,
                                m + S,
                                6,
                                !0
                              ),
                              this.v.setTripleAt(
                                c + E,
                                m + S - T,
                                c + E,
                                m + S - T,
                                c + E,
                                m + S - F,
                                7,
                                !0
                              ))
                            : (this.v.setTripleAt(
                                c - E,
                                m - S,
                                c - E + F,
                                m - S,
                                c - E,
                                m - S,
                                1,
                                !0
                              ),
                              this.v.setTripleAt(
                                c - E,
                                m + S,
                                c - E,
                                m + S - F,
                                c - E,
                                m + S,
                                2,
                                !0
                              ),
                              this.v.setTripleAt(
                                c + E,
                                m + S,
                                c + E - F,
                                m + S,
                                c + E,
                                m + S,
                                3,
                                !0
                              )));
                  },
                  getValue: function () {
                    this.elem.globalData.frameId !== this.frameId &&
                      ((this.frameId = this.elem.globalData.frameId),
                      this.iterateDynamicProperties(),
                      this._imdf && this.convertRectToPath());
                  },
                  reset: s,
                }),
                extendPrototype([DynamicPropertyContainer], d),
                d
              );
            })();
          function _(d, y, c) {
            var m;
            if (c === 3 || c === 4) {
              var E = c === 3 ? y.pt : y.ks,
                S = E.k;
              S.length ? (m = new p(d, y, c)) : (m = new f(d, y, c));
            } else
              c === 5
                ? (m = new u(d, y))
                : c === 6
                ? (m = new b(d, y))
                : c === 7 && (m = new P(d, y));
            return m.k && d.addDynamicProperty(m), m;
          }
          function x() {
            return f;
          }
          function g() {
            return p;
          }
          var A = {};
          return (
            (A.getShapeProp = _),
            (A.getConstructorFunction = x),
            (A.getKeyframedConstructorFunction = g),
            A
          );
        })();
      /*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */ var Matrix = (function () {
        var e = Math.cos,
          t = Math.sin,
          r = Math.tan,
          s = Math.round;
        function a() {
          return (
            (this.props[0] = 1),
            (this.props[1] = 0),
            (this.props[2] = 0),
            (this.props[3] = 0),
            (this.props[4] = 0),
            (this.props[5] = 1),
            (this.props[6] = 0),
            (this.props[7] = 0),
            (this.props[8] = 0),
            (this.props[9] = 0),
            (this.props[10] = 1),
            (this.props[11] = 0),
            (this.props[12] = 0),
            (this.props[13] = 0),
            (this.props[14] = 0),
            (this.props[15] = 1),
            this
          );
        }
        function n(M) {
          if (M === 0) return this;
          var C = e(M),
            I = t(M);
          return this._t(C, -I, 0, 0, I, C, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function o(M) {
          if (M === 0) return this;
          var C = e(M),
            I = t(M);
          return this._t(1, 0, 0, 0, 0, C, -I, 0, 0, I, C, 0, 0, 0, 0, 1);
        }
        function f(M) {
          if (M === 0) return this;
          var C = e(M),
            I = t(M);
          return this._t(C, 0, I, 0, 0, 1, 0, 0, -I, 0, C, 0, 0, 0, 0, 1);
        }
        function l(M) {
          if (M === 0) return this;
          var C = e(M),
            I = t(M);
          return this._t(C, -I, 0, 0, I, C, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function p(M, C) {
          return this._t(1, C, M, 1, 0, 0);
        }
        function b(M, C) {
          return this.shear(r(M), r(C));
        }
        function P(M, C) {
          var I = e(C),
            L = t(C);
          return this._t(I, L, 0, 0, -L, I, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            ._t(1, 0, 0, 0, r(M), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            ._t(I, -L, 0, 0, L, I, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        }
        function u(M, C, I) {
          return (
            !I && I !== 0 && (I = 1),
            M === 1 && C === 1 && I === 1
              ? this
              : this._t(M, 0, 0, 0, 0, C, 0, 0, 0, 0, I, 0, 0, 0, 0, 1)
          );
        }
        function _(M, C, I, L, V, q, Y, W, Z, K, ie, ne, se, J, U, ee) {
          return (
            (this.props[0] = M),
            (this.props[1] = C),
            (this.props[2] = I),
            (this.props[3] = L),
            (this.props[4] = V),
            (this.props[5] = q),
            (this.props[6] = Y),
            (this.props[7] = W),
            (this.props[8] = Z),
            (this.props[9] = K),
            (this.props[10] = ie),
            (this.props[11] = ne),
            (this.props[12] = se),
            (this.props[13] = J),
            (this.props[14] = U),
            (this.props[15] = ee),
            this
          );
        }
        function x(M, C, I) {
          return (
            (I = I || 0),
            M !== 0 || C !== 0 || I !== 0
              ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, M, C, I, 1)
              : this
          );
        }
        function g(M, C, I, L, V, q, Y, W, Z, K, ie, ne, se, J, U, ee) {
          var H = this.props;
          if (
            M === 1 &&
            C === 0 &&
            I === 0 &&
            L === 0 &&
            V === 0 &&
            q === 1 &&
            Y === 0 &&
            W === 0 &&
            Z === 0 &&
            K === 0 &&
            ie === 1 &&
            ne === 0
          )
            return (
              (H[12] = H[12] * M + H[15] * se),
              (H[13] = H[13] * q + H[15] * J),
              (H[14] = H[14] * ie + H[15] * U),
              (H[15] *= ee),
              (this._identityCalculated = !1),
              this
            );
          var X = H[0],
            oe = H[1],
            pe = H[2],
            he = H[3],
            ae = H[4],
            le = H[5],
            fe = H[6],
            Q = H[7],
            ce = H[8],
            ue = H[9],
            te = H[10],
            me = H[11],
            re = H[12],
            de = H[13],
            ve = H[14],
            ye = H[15];
          return (
            (H[0] = X * M + oe * V + pe * Z + he * se),
            (H[1] = X * C + oe * q + pe * K + he * J),
            (H[2] = X * I + oe * Y + pe * ie + he * U),
            (H[3] = X * L + oe * W + pe * ne + he * ee),
            (H[4] = ae * M + le * V + fe * Z + Q * se),
            (H[5] = ae * C + le * q + fe * K + Q * J),
            (H[6] = ae * I + le * Y + fe * ie + Q * U),
            (H[7] = ae * L + le * W + fe * ne + Q * ee),
            (H[8] = ce * M + ue * V + te * Z + me * se),
            (H[9] = ce * C + ue * q + te * K + me * J),
            (H[10] = ce * I + ue * Y + te * ie + me * U),
            (H[11] = ce * L + ue * W + te * ne + me * ee),
            (H[12] = re * M + de * V + ve * Z + ye * se),
            (H[13] = re * C + de * q + ve * K + ye * J),
            (H[14] = re * I + de * Y + ve * ie + ye * U),
            (H[15] = re * L + de * W + ve * ne + ye * ee),
            (this._identityCalculated = !1),
            this
          );
        }
        function A() {
          return (
            this._identityCalculated ||
              ((this._identity = !(
                this.props[0] !== 1 ||
                this.props[1] !== 0 ||
                this.props[2] !== 0 ||
                this.props[3] !== 0 ||
                this.props[4] !== 0 ||
                this.props[5] !== 1 ||
                this.props[6] !== 0 ||
                this.props[7] !== 0 ||
                this.props[8] !== 0 ||
                this.props[9] !== 0 ||
                this.props[10] !== 1 ||
                this.props[11] !== 0 ||
                this.props[12] !== 0 ||
                this.props[13] !== 0 ||
                this.props[14] !== 0 ||
                this.props[15] !== 1
              )),
              (this._identityCalculated = !0)),
            this._identity
          );
        }
        function d(M) {
          for (var C = 0; C < 16; ) {
            if (M.props[C] !== this.props[C]) return !1;
            C += 1;
          }
          return !0;
        }
        function y(M) {
          var C;
          for (C = 0; C < 16; C += 1) M.props[C] = this.props[C];
          return M;
        }
        function c(M) {
          var C;
          for (C = 0; C < 16; C += 1) this.props[C] = M[C];
        }
        function m(M, C, I) {
          return {
            x:
              M * this.props[0] +
              C * this.props[4] +
              I * this.props[8] +
              this.props[12],
            y:
              M * this.props[1] +
              C * this.props[5] +
              I * this.props[9] +
              this.props[13],
            z:
              M * this.props[2] +
              C * this.props[6] +
              I * this.props[10] +
              this.props[14],
          };
        }
        function E(M, C, I) {
          return (
            M * this.props[0] +
            C * this.props[4] +
            I * this.props[8] +
            this.props[12]
          );
        }
        function S(M, C, I) {
          return (
            M * this.props[1] +
            C * this.props[5] +
            I * this.props[9] +
            this.props[13]
          );
        }
        function T(M, C, I) {
          return (
            M * this.props[2] +
            C * this.props[6] +
            I * this.props[10] +
            this.props[14]
          );
        }
        function F() {
          var M = this.props[0] * this.props[5] - this.props[1] * this.props[4],
            C = this.props[5] / M,
            I = -this.props[1] / M,
            L = -this.props[4] / M,
            V = this.props[0] / M,
            q =
              (this.props[4] * this.props[13] -
                this.props[5] * this.props[12]) /
              M,
            Y =
              -(
                this.props[0] * this.props[13] -
                this.props[1] * this.props[12]
              ) / M,
            W = new Matrix();
          return (
            (W.props[0] = C),
            (W.props[1] = I),
            (W.props[4] = L),
            (W.props[5] = V),
            (W.props[12] = q),
            (W.props[13] = Y),
            W
          );
        }
        function O(M) {
          var C = this.getInverseMatrix();
          return C.applyToPointArray(M[0], M[1], M[2] || 0);
        }
        function G(M) {
          var C,
            I = M.length,
            L = [];
          for (C = 0; C < I; C += 1) L[C] = O(M[C]);
          return L;
        }
        function $(M, C, I) {
          var L = createTypedArray("float32", 6);
          if (this.isIdentity())
            (L[0] = M[0]),
              (L[1] = M[1]),
              (L[2] = C[0]),
              (L[3] = C[1]),
              (L[4] = I[0]),
              (L[5] = I[1]);
          else {
            var V = this.props[0],
              q = this.props[1],
              Y = this.props[4],
              W = this.props[5],
              Z = this.props[12],
              K = this.props[13];
            (L[0] = M[0] * V + M[1] * Y + Z),
              (L[1] = M[0] * q + M[1] * W + K),
              (L[2] = C[0] * V + C[1] * Y + Z),
              (L[3] = C[0] * q + C[1] * W + K),
              (L[4] = I[0] * V + I[1] * Y + Z),
              (L[5] = I[0] * q + I[1] * W + K);
          }
          return L;
        }
        function B(M, C, I) {
          var L;
          return (
            this.isIdentity()
              ? (L = [M, C, I])
              : (L = [
                  M * this.props[0] +
                    C * this.props[4] +
                    I * this.props[8] +
                    this.props[12],
                  M * this.props[1] +
                    C * this.props[5] +
                    I * this.props[9] +
                    this.props[13],
                  M * this.props[2] +
                    C * this.props[6] +
                    I * this.props[10] +
                    this.props[14],
                ]),
            L
          );
        }
        function z(M, C) {
          if (this.isIdentity()) return M + "," + C;
          var I = this.props;
          return (
            Math.round((M * I[0] + C * I[4] + I[12]) * 100) / 100 +
            "," +
            Math.round((M * I[1] + C * I[5] + I[13]) * 100) / 100
          );
        }
        function N() {
          for (var M = 0, C = this.props, I = "matrix3d(", L = 1e4; M < 16; )
            (I += s(C[M] * L) / L), (I += M === 15 ? ")" : ","), (M += 1);
          return I;
        }
        function R(M) {
          var C = 1e4;
          return (M < 1e-6 && M > 0) || (M > -1e-6 && M < 0) ? s(M * C) / C : M;
        }
        function D() {
          var M = this.props,
            C = R(M[0]),
            I = R(M[1]),
            L = R(M[4]),
            V = R(M[5]),
            q = R(M[12]),
            Y = R(M[13]);
          return (
            "matrix(" +
            C +
            "," +
            I +
            "," +
            L +
            "," +
            V +
            "," +
            q +
            "," +
            Y +
            ")"
          );
        }
        return function () {
          (this.reset = a),
            (this.rotate = n),
            (this.rotateX = o),
            (this.rotateY = f),
            (this.rotateZ = l),
            (this.skew = b),
            (this.skewFromAxis = P),
            (this.shear = p),
            (this.scale = u),
            (this.setTransform = _),
            (this.translate = x),
            (this.transform = g),
            (this.applyToPoint = m),
            (this.applyToX = E),
            (this.applyToY = S),
            (this.applyToZ = T),
            (this.applyToPointArray = B),
            (this.applyToTriplePoints = $),
            (this.applyToPointStringified = z),
            (this.toCSS = N),
            (this.to2dCSS = D),
            (this.clone = y),
            (this.cloneFromProps = c),
            (this.equals = d),
            (this.inversePoints = G),
            (this.inversePoint = O),
            (this.getInverseMatrix = F),
            (this._t = this.transform),
            (this.isIdentity = A),
            (this._identity = !0),
            (this._identityCalculated = !1),
            (this.props = createTypedArray("float32", 16)),
            this.reset();
        };
      })();
      function _typeof$3(e) {
        return (
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (_typeof$3 = function (r) {
                return typeof r;
              })
            : (_typeof$3 = function (r) {
                return r &&
                  typeof Symbol == "function" &&
                  r.constructor === Symbol &&
                  r !== Symbol.prototype
                  ? "symbol"
                  : typeof r;
              }),
          _typeof$3(e)
        );
      }
      var lottie = {};
      function setLocation(e) {
        setLocationHref(e);
      }
      function searchAnimations() {
        animationManager.searchAnimations();
      }
      function setSubframeRendering(e) {
        setSubframeEnabled(e);
      }
      function setPrefix(e) {
        setIdPrefix(e);
      }
      function loadAnimation(e) {
        return animationManager.loadAnimation(e);
      }
      function setQuality(e) {
        if (typeof e == "string")
          switch (e) {
            case "high":
              setDefaultCurveSegments(200);
              break;
            default:
            case "medium":
              setDefaultCurveSegments(50);
              break;
            case "low":
              setDefaultCurveSegments(10);
              break;
          }
        else !isNaN(e) && e > 1 && setDefaultCurveSegments(e);
      }
      function inBrowser() {
        return typeof navigator < "u";
      }
      function installPlugin(e, t) {
        e === "expressions" && setExpressionsPlugin(t);
      }
      function getFactory(e) {
        switch (e) {
          case "propertyFactory":
            return PropertyFactory;
          case "shapePropertyFactory":
            return ShapePropertyFactory;
          case "matrix":
            return Matrix;
          default:
            return null;
        }
      }
      (lottie.play = animationManager.play),
        (lottie.pause = animationManager.pause),
        (lottie.setLocationHref = setLocation),
        (lottie.togglePause = animationManager.togglePause),
        (lottie.setSpeed = animationManager.setSpeed),
        (lottie.setDirection = animationManager.setDirection),
        (lottie.stop = animationManager.stop),
        (lottie.searchAnimations = searchAnimations),
        (lottie.registerAnimation = animationManager.registerAnimation),
        (lottie.loadAnimation = loadAnimation),
        (lottie.setSubframeRendering = setSubframeRendering),
        (lottie.resize = animationManager.resize),
        (lottie.goToAndStop = animationManager.goToAndStop),
        (lottie.destroy = animationManager.destroy),
        (lottie.setQuality = setQuality),
        (lottie.inBrowser = inBrowser),
        (lottie.installPlugin = installPlugin),
        (lottie.freeze = animationManager.freeze),
        (lottie.unfreeze = animationManager.unfreeze),
        (lottie.setVolume = animationManager.setVolume),
        (lottie.mute = animationManager.mute),
        (lottie.unmute = animationManager.unmute),
        (lottie.getRegisteredAnimations =
          animationManager.getRegisteredAnimations),
        (lottie.useWebWorker = setWebWorker),
        (lottie.setIDPrefix = setPrefix),
        (lottie.__getFactory = getFactory),
        (lottie.version = "5.11.0");
      function checkReady() {
        document.readyState === "complete" &&
          (clearInterval(readyStateCheckInterval), searchAnimations());
      }
      function getQueryVariable(e) {
        for (var t = queryString.split("&"), r = 0; r < t.length; r += 1) {
          var s = t[r].split("=");
          if (decodeURIComponent(s[0]) == e) return decodeURIComponent(s[1]);
        }
        return null;
      }
      var queryString = "";
      {
        var scripts = document.getElementsByTagName("script"),
          index = scripts.length - 1,
          myScript = scripts[index] || { src: "" };
        (queryString = myScript.src
          ? myScript.src.replace(/^[^\?]+\??/, "")
          : ""),
          getQueryVariable("renderer");
      }
      var readyStateCheckInterval = setInterval(checkReady, 100);
      try {
        _typeof$3(exports) !== "object" && (window.bodymovin = lottie);
      } catch (e) {}
      var ShapeModifiers = (function () {
        var e = {},
          t = {};
        (e.registerModifier = r), (e.getModifier = s);
        function r(a, n) {
          t[a] || (t[a] = n);
        }
        function s(a, n, o) {
          return new t[a](n, o);
        }
        return e;
      })();
      function ShapeModifier() {}
      (ShapeModifier.prototype.initModifierProperties = function () {}),
        (ShapeModifier.prototype.addShapeToModifier = function () {}),
        (ShapeModifier.prototype.addShape = function (e) {
          if (!this.closed) {
            e.sh.container.addDynamicProperty(e.sh);
            var t = {
              shape: e.sh,
              data: e,
              localShapeCollection: shapeCollectionPool.newShapeCollection(),
            };
            this.shapes.push(t),
              this.addShapeToModifier(t),
              this._isAnimated && e.setAsAnimated();
          }
        }),
        (ShapeModifier.prototype.init = function (e, t) {
          (this.shapes = []),
            (this.elem = e),
            this.initDynamicPropertyContainer(e),
            this.initModifierProperties(e, t),
            (this.frameId = initialDefaultFrame),
            (this.closed = !1),
            (this.k = !1),
            this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
        }),
        (ShapeModifier.prototype.processKeys = function () {
          this.elem.globalData.frameId !== this.frameId &&
            ((this.frameId = this.elem.globalData.frameId),
            this.iterateDynamicProperties());
        }),
        extendPrototype([DynamicPropertyContainer], ShapeModifier);
      function TrimModifier() {}
      extendPrototype([ShapeModifier], TrimModifier),
        (TrimModifier.prototype.initModifierProperties = function (e, t) {
          (this.s = PropertyFactory.getProp(e, t.s, 0, 0.01, this)),
            (this.e = PropertyFactory.getProp(e, t.e, 0, 0.01, this)),
            (this.o = PropertyFactory.getProp(e, t.o, 0, 0, this)),
            (this.sValue = 0),
            (this.eValue = 0),
            (this.getValue = this.processKeys),
            (this.m = t.m),
            (this._isAnimated =
              !!this.s.effectsSequence.length ||
              !!this.e.effectsSequence.length ||
              !!this.o.effectsSequence.length);
        }),
        (TrimModifier.prototype.addShapeToModifier = function (e) {
          e.pathsData = [];
        }),
        (TrimModifier.prototype.calculateShapeEdges = function (e, t, r, s, a) {
          var n = [];
          t <= 1
            ? n.push({ s: e, e: t })
            : e >= 1
            ? n.push({ s: e - 1, e: t - 1 })
            : (n.push({ s: e, e: 1 }), n.push({ s: 0, e: t - 1 }));
          var o = [],
            f,
            l = n.length,
            p;
          for (f = 0; f < l; f += 1)
            if (((p = n[f]), !(p.e * a < s || p.s * a > s + r))) {
              var b, P;
              p.s * a <= s ? (b = 0) : (b = (p.s * a - s) / r),
                p.e * a >= s + r ? (P = 1) : (P = (p.e * a - s) / r),
                o.push([b, P]);
            }
          return o.length || o.push([0, 0]), o;
        }),
        (TrimModifier.prototype.releasePathsData = function (e) {
          var t,
            r = e.length;
          for (t = 0; t < r; t += 1) segmentsLengthPool.release(e[t]);
          return (e.length = 0), e;
        }),
        (TrimModifier.prototype.processShapes = function (e) {
          var t, r;
          if (this._imdf || e) {
            var s = (this.o.v % 360) / 360;
            if (
              (s < 0 && (s += 1),
              this.s.v > 1
                ? (t = 1 + s)
                : this.s.v < 0
                ? (t = 0 + s)
                : (t = this.s.v + s),
              this.e.v > 1
                ? (r = 1 + s)
                : this.e.v < 0
                ? (r = 0 + s)
                : (r = this.e.v + s),
              t > r)
            ) {
              var a = t;
              (t = r), (r = a);
            }
            (t = Math.round(t * 1e4) * 1e-4),
              (r = Math.round(r * 1e4) * 1e-4),
              (this.sValue = t),
              (this.eValue = r);
          } else (t = this.sValue), (r = this.eValue);
          var n,
            o,
            f = this.shapes.length,
            l,
            p,
            b,
            P,
            u,
            _ = 0;
          if (r === t)
            for (o = 0; o < f; o += 1)
              this.shapes[o].localShapeCollection.releaseShapes(),
                (this.shapes[o].shape._imdf = !0),
                (this.shapes[o].shape.paths =
                  this.shapes[o].localShapeCollection),
                this._imdf && (this.shapes[o].pathsData.length = 0);
          else if ((r === 1 && t === 0) || (r === 0 && t === 1)) {
            if (this._imdf)
              for (o = 0; o < f; o += 1)
                (this.shapes[o].pathsData.length = 0),
                  (this.shapes[o].shape._imdf = !0);
          } else {
            var x = [],
              g,
              A;
            for (o = 0; o < f; o += 1)
              if (
                ((g = this.shapes[o]),
                !g.shape._imdf && !this._imdf && !e && this.m !== 2)
              )
                g.shape.paths = g.localShapeCollection;
              else {
                if (
                  ((n = g.shape.paths),
                  (p = n._length),
                  (u = 0),
                  !g.shape._imdf && g.pathsData.length)
                )
                  u = g.totalShapeLength;
                else {
                  for (
                    b = this.releasePathsData(g.pathsData), l = 0;
                    l < p;
                    l += 1
                  )
                    (P = bez.getSegmentsLength(n.shapes[l])),
                      b.push(P),
                      (u += P.totalLength);
                  (g.totalShapeLength = u), (g.pathsData = b);
                }
                (_ += u), (g.shape._imdf = !0);
              }
            var d = t,
              y = r,
              c = 0,
              m;
            for (o = f - 1; o >= 0; o -= 1)
              if (((g = this.shapes[o]), g.shape._imdf)) {
                for (
                  A = g.localShapeCollection,
                    A.releaseShapes(),
                    this.m === 2 && f > 1
                      ? ((m = this.calculateShapeEdges(
                          t,
                          r,
                          g.totalShapeLength,
                          c,
                          _
                        )),
                        (c += g.totalShapeLength))
                      : (m = [[d, y]]),
                    p = m.length,
                    l = 0;
                  l < p;
                  l += 1
                ) {
                  (d = m[l][0]),
                    (y = m[l][1]),
                    (x.length = 0),
                    y <= 1
                      ? x.push({
                          s: g.totalShapeLength * d,
                          e: g.totalShapeLength * y,
                        })
                      : d >= 1
                      ? x.push({
                          s: g.totalShapeLength * (d - 1),
                          e: g.totalShapeLength * (y - 1),
                        })
                      : (x.push({
                          s: g.totalShapeLength * d,
                          e: g.totalShapeLength,
                        }),
                        x.push({ s: 0, e: g.totalShapeLength * (y - 1) }));
                  var E = this.addShapes(g, x[0]);
                  if (x[0].s !== x[0].e) {
                    if (x.length > 1) {
                      var S = g.shape.paths.shapes[g.shape.paths._length - 1];
                      if (S.c) {
                        var T = E.pop();
                        this.addPaths(E, A), (E = this.addShapes(g, x[1], T));
                      } else this.addPaths(E, A), (E = this.addShapes(g, x[1]));
                    }
                    this.addPaths(E, A);
                  }
                }
                g.shape.paths = A;
              }
          }
        }),
        (TrimModifier.prototype.addPaths = function (e, t) {
          var r,
            s = e.length;
          for (r = 0; r < s; r += 1) t.addShape(e[r]);
        }),
        (TrimModifier.prototype.addSegment = function (e, t, r, s, a, n, o) {
          a.setXYAt(t[0], t[1], "o", n),
            a.setXYAt(r[0], r[1], "i", n + 1),
            o && a.setXYAt(e[0], e[1], "v", n),
            a.setXYAt(s[0], s[1], "v", n + 1);
        }),
        (TrimModifier.prototype.addSegmentFromArray = function (e, t, r, s) {
          t.setXYAt(e[1], e[5], "o", r),
            t.setXYAt(e[2], e[6], "i", r + 1),
            s && t.setXYAt(e[0], e[4], "v", r),
            t.setXYAt(e[3], e[7], "v", r + 1);
        }),
        (TrimModifier.prototype.addShapes = function (e, t, r) {
          var s = e.pathsData,
            a = e.shape.paths.shapes,
            n,
            o = e.shape.paths._length,
            f,
            l,
            p = 0,
            b,
            P,
            u,
            _,
            x = [],
            g,
            A = !0;
          for (
            r
              ? ((P = r._length), (g = r._length))
              : ((r = shapePool.newElement()), (P = 0), (g = 0)),
              x.push(r),
              n = 0;
            n < o;
            n += 1
          ) {
            for (
              u = s[n].lengths,
                r.c = a[n].c,
                l = a[n].c ? u.length : u.length + 1,
                f = 1;
              f < l;
              f += 1
            )
              if (((b = u[f - 1]), p + b.addedLength < t.s))
                (p += b.addedLength), (r.c = !1);
              else if (p > t.e) {
                r.c = !1;
                break;
              } else
                t.s <= p && t.e >= p + b.addedLength
                  ? (this.addSegment(
                      a[n].v[f - 1],
                      a[n].o[f - 1],
                      a[n].i[f],
                      a[n].v[f],
                      r,
                      P,
                      A
                    ),
                    (A = !1))
                  : ((_ = bez.getNewSegment(
                      a[n].v[f - 1],
                      a[n].v[f],
                      a[n].o[f - 1],
                      a[n].i[f],
                      (t.s - p) / b.addedLength,
                      (t.e - p) / b.addedLength,
                      u[f - 1]
                    )),
                    this.addSegmentFromArray(_, r, P, A),
                    (A = !1),
                    (r.c = !1)),
                  (p += b.addedLength),
                  (P += 1);
            if (a[n].c && u.length) {
              if (((b = u[f - 1]), p <= t.e)) {
                var d = u[f - 1].addedLength;
                t.s <= p && t.e >= p + d
                  ? (this.addSegment(
                      a[n].v[f - 1],
                      a[n].o[f - 1],
                      a[n].i[0],
                      a[n].v[0],
                      r,
                      P,
                      A
                    ),
                    (A = !1))
                  : ((_ = bez.getNewSegment(
                      a[n].v[f - 1],
                      a[n].v[0],
                      a[n].o[f - 1],
                      a[n].i[0],
                      (t.s - p) / d,
                      (t.e - p) / d,
                      u[f - 1]
                    )),
                    this.addSegmentFromArray(_, r, P, A),
                    (A = !1),
                    (r.c = !1));
              } else r.c = !1;
              (p += b.addedLength), (P += 1);
            }
            if (
              (r._length &&
                (r.setXYAt(r.v[g][0], r.v[g][1], "i", g),
                r.setXYAt(
                  r.v[r._length - 1][0],
                  r.v[r._length - 1][1],
                  "o",
                  r._length - 1
                )),
              p > t.e)
            )
              break;
            n < o - 1 &&
              ((r = shapePool.newElement()), (A = !0), x.push(r), (P = 0));
          }
          return x;
        });
      function PuckerAndBloatModifier() {}
      extendPrototype([ShapeModifier], PuckerAndBloatModifier),
        (PuckerAndBloatModifier.prototype.initModifierProperties = function (
          e,
          t
        ) {
          (this.getValue = this.processKeys),
            (this.amount = PropertyFactory.getProp(e, t.a, 0, null, this)),
            (this._isAnimated = !!this.amount.effectsSequence.length);
        }),
        (PuckerAndBloatModifier.prototype.processPath = function (e, t) {
          var r = t / 100,
            s = [0, 0],
            a = e._length,
            n = 0;
          for (n = 0; n < a; n += 1) (s[0] += e.v[n][0]), (s[1] += e.v[n][1]);
          (s[0] /= a), (s[1] /= a);
          var o = shapePool.newElement();
          o.c = e.c;
          var f, l, p, b, P, u;
          for (n = 0; n < a; n += 1)
            (f = e.v[n][0] + (s[0] - e.v[n][0]) * r),
              (l = e.v[n][1] + (s[1] - e.v[n][1]) * r),
              (p = e.o[n][0] + (s[0] - e.o[n][0]) * -r),
              (b = e.o[n][1] + (s[1] - e.o[n][1]) * -r),
              (P = e.i[n][0] + (s[0] - e.i[n][0]) * -r),
              (u = e.i[n][1] + (s[1] - e.i[n][1]) * -r),
              o.setTripleAt(f, l, p, b, P, u, n);
          return o;
        }),
        (PuckerAndBloatModifier.prototype.processShapes = function (e) {
          var t,
            r,
            s = this.shapes.length,
            a,
            n,
            o = this.amount.v;
          if (o !== 0) {
            var f, l;
            for (r = 0; r < s; r += 1) {
              if (
                ((f = this.shapes[r]),
                (l = f.localShapeCollection),
                !(!f.shape._imdf && !this._imdf && !e))
              )
                for (
                  l.releaseShapes(),
                    f.shape._imdf = !0,
                    t = f.shape.paths.shapes,
                    n = f.shape.paths._length,
                    a = 0;
                  a < n;
                  a += 1
                )
                  l.addShape(this.processPath(t[a], o));
              f.shape.paths = f.localShapeCollection;
            }
          }
          this.dynamicProperties.length || (this._imdf = !1);
        });
      var TransformPropertyFactory = (function () {
        var e = [0, 0];
        function t(l) {
          var p = this._imdf;
          this.iterateDynamicProperties(),
            (this._imdf = this._imdf || p),
            this.a && l.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
            this.s && l.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
            this.sk && l.skewFromAxis(-this.sk.v, this.sa.v),
            this.r
              ? l.rotate(-this.r.v)
              : l
                  .rotateZ(-this.rz.v)
                  .rotateY(this.ry.v)
                  .rotateX(this.rx.v)
                  .rotateZ(-this.or.v[2])
                  .rotateY(this.or.v[1])
                  .rotateX(this.or.v[0]),
            this.data.p.s
              ? this.data.p.z
                ? l.translate(this.px.v, this.py.v, -this.pz.v)
                : l.translate(this.px.v, this.py.v, 0)
              : l.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
        }
        function r(l) {
          if (this.elem.globalData.frameId !== this.frameId) {
            if (
              (this._isDirty &&
                (this.precalculateMatrix(), (this._isDirty = !1)),
              this.iterateDynamicProperties(),
              this._imdf || l)
            ) {
              var p;
              if (
                (this.v.cloneFromProps(this.pre.props),
                this.appliedTransformations < 1 &&
                  this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                this.appliedTransformations < 2 &&
                  this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                this.sk &&
                  this.appliedTransformations < 3 &&
                  this.v.skewFromAxis(-this.sk.v, this.sa.v),
                this.r && this.appliedTransformations < 4
                  ? this.v.rotate(-this.r.v)
                  : !this.r &&
                    this.appliedTransformations < 4 &&
                    this.v
                      .rotateZ(-this.rz.v)
                      .rotateY(this.ry.v)
                      .rotateX(this.rx.v)
                      .rotateZ(-this.or.v[2])
                      .rotateY(this.or.v[1])
                      .rotateX(this.or.v[0]),
                this.autoOriented)
              ) {
                var b, P;
                if (
                  ((p = this.elem.globalData.frameRate),
                  this.p && this.p.keyframes && this.p.getValueAtTime)
                )
                  this.p._caching.lastFrame + this.p.offsetTime <=
                  this.p.keyframes[0].t
                    ? ((b = this.p.getValueAtTime(
                        (this.p.keyframes[0].t + 0.01) / p,
                        0
                      )),
                      (P = this.p.getValueAtTime(this.p.keyframes[0].t / p, 0)))
                    : this.p._caching.lastFrame + this.p.offsetTime >=
                      this.p.keyframes[this.p.keyframes.length - 1].t
                    ? ((b = this.p.getValueAtTime(
                        this.p.keyframes[this.p.keyframes.length - 1].t / p,
                        0
                      )),
                      (P = this.p.getValueAtTime(
                        (this.p.keyframes[this.p.keyframes.length - 1].t -
                          0.05) /
                          p,
                        0
                      )))
                    : ((b = this.p.pv),
                      (P = this.p.getValueAtTime(
                        (this.p._caching.lastFrame + this.p.offsetTime - 0.01) /
                          p,
                        this.p.offsetTime
                      )));
                else if (
                  this.px &&
                  this.px.keyframes &&
                  this.py.keyframes &&
                  this.px.getValueAtTime &&
                  this.py.getValueAtTime
                ) {
                  (b = []), (P = []);
                  var u = this.px,
                    _ = this.py;
                  u._caching.lastFrame + u.offsetTime <= u.keyframes[0].t
                    ? ((b[0] = u.getValueAtTime(
                        (u.keyframes[0].t + 0.01) / p,
                        0
                      )),
                      (b[1] = _.getValueAtTime(
                        (_.keyframes[0].t + 0.01) / p,
                        0
                      )),
                      (P[0] = u.getValueAtTime(u.keyframes[0].t / p, 0)),
                      (P[1] = _.getValueAtTime(_.keyframes[0].t / p, 0)))
                    : u._caching.lastFrame + u.offsetTime >=
                      u.keyframes[u.keyframes.length - 1].t
                    ? ((b[0] = u.getValueAtTime(
                        u.keyframes[u.keyframes.length - 1].t / p,
                        0
                      )),
                      (b[1] = _.getValueAtTime(
                        _.keyframes[_.keyframes.length - 1].t / p,
                        0
                      )),
                      (P[0] = u.getValueAtTime(
                        (u.keyframes[u.keyframes.length - 1].t - 0.01) / p,
                        0
                      )),
                      (P[1] = _.getValueAtTime(
                        (_.keyframes[_.keyframes.length - 1].t - 0.01) / p,
                        0
                      )))
                    : ((b = [u.pv, _.pv]),
                      (P[0] = u.getValueAtTime(
                        (u._caching.lastFrame + u.offsetTime - 0.01) / p,
                        u.offsetTime
                      )),
                      (P[1] = _.getValueAtTime(
                        (_._caching.lastFrame + _.offsetTime - 0.01) / p,
                        _.offsetTime
                      )));
                } else (P = e), (b = P);
                this.v.rotate(-Math.atan2(b[1] - P[1], b[0] - P[0]));
              }
              this.data.p && this.data.p.s
                ? this.data.p.z
                  ? this.v.translate(this.px.v, this.py.v, -this.pz.v)
                  : this.v.translate(this.px.v, this.py.v, 0)
                : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
            this.frameId = this.elem.globalData.frameId;
          }
        }
        function s() {
          if (!this.a.k)
            this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
              (this.appliedTransformations = 1);
          else return;
          if (!this.s.effectsSequence.length)
            this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
              (this.appliedTransformations = 2);
          else return;
          if (this.sk)
            if (
              !this.sk.effectsSequence.length &&
              !this.sa.effectsSequence.length
            )
              this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                (this.appliedTransformations = 3);
            else return;
          this.r
            ? this.r.effectsSequence.length ||
              (this.pre.rotate(-this.r.v), (this.appliedTransformations = 4))
            : !this.rz.effectsSequence.length &&
              !this.ry.effectsSequence.length &&
              !this.rx.effectsSequence.length &&
              !this.or.effectsSequence.length &&
              (this.pre
                .rotateZ(-this.rz.v)
                .rotateY(this.ry.v)
                .rotateX(this.rx.v)
                .rotateZ(-this.or.v[2])
                .rotateY(this.or.v[1])
                .rotateX(this.or.v[0]),
              (this.appliedTransformations = 4));
        }
        function a() {}
        function n(l) {
          this._addDynamicProperty(l),
            this.elem.addDynamicProperty(l),
            (this._isDirty = !0);
        }
        function o(l, p, b) {
          if (
            ((this.elem = l),
            (this.frameId = -1),
            (this.propType = "transform"),
            (this.data = p),
            (this.v = new Matrix()),
            (this.pre = new Matrix()),
            (this.appliedTransformations = 0),
            this.initDynamicPropertyContainer(b || l),
            p.p && p.p.s
              ? ((this.px = PropertyFactory.getProp(l, p.p.x, 0, 0, this)),
                (this.py = PropertyFactory.getProp(l, p.p.y, 0, 0, this)),
                p.p.z &&
                  (this.pz = PropertyFactory.getProp(l, p.p.z, 0, 0, this)))
              : (this.p = PropertyFactory.getProp(
                  l,
                  p.p || { k: [0, 0, 0] },
                  1,
                  0,
                  this
                )),
            p.rx)
          ) {
            if (
              ((this.rx = PropertyFactory.getProp(l, p.rx, 0, degToRads, this)),
              (this.ry = PropertyFactory.getProp(l, p.ry, 0, degToRads, this)),
              (this.rz = PropertyFactory.getProp(l, p.rz, 0, degToRads, this)),
              p.or.k[0].ti)
            ) {
              var P,
                u = p.or.k.length;
              for (P = 0; P < u; P += 1)
                (p.or.k[P].to = null), (p.or.k[P].ti = null);
            }
            (this.or = PropertyFactory.getProp(l, p.or, 1, degToRads, this)),
              (this.or.sh = !0);
          } else
            this.r = PropertyFactory.getProp(
              l,
              p.r || { k: 0 },
              0,
              degToRads,
              this
            );
          p.sk &&
            ((this.sk = PropertyFactory.getProp(l, p.sk, 0, degToRads, this)),
            (this.sa = PropertyFactory.getProp(l, p.sa, 0, degToRads, this))),
            (this.a = PropertyFactory.getProp(
              l,
              p.a || { k: [0, 0, 0] },
              1,
              0,
              this
            )),
            (this.s = PropertyFactory.getProp(
              l,
              p.s || { k: [100, 100, 100] },
              1,
              0.01,
              this
            )),
            p.o
              ? (this.o = PropertyFactory.getProp(l, p.o, 0, 0.01, l))
              : (this.o = { _imdf: !1, v: 1 }),
            (this._isDirty = !0),
            this.dynamicProperties.length || this.getValue(!0);
        }
        (o.prototype = {
          applyToMatrix: t,
          getValue: r,
          precalculateMatrix: s,
          autoOrient: a,
        }),
          extendPrototype([DynamicPropertyContainer], o),
          (o.prototype.addDynamicProperty = n),
          (o.prototype._addDynamicProperty =
            DynamicPropertyContainer.prototype.addDynamicProperty);
        function f(l, p, b) {
          return new o(l, p, b);
        }
        return { getTransformProperty: f };
      })();
      function RepeaterModifier() {}
      extendPrototype([ShapeModifier], RepeaterModifier),
        (RepeaterModifier.prototype.initModifierProperties = function (e, t) {
          (this.getValue = this.processKeys),
            (this.c = PropertyFactory.getProp(e, t.c, 0, null, this)),
            (this.o = PropertyFactory.getProp(e, t.o, 0, null, this)),
            (this.tr = TransformPropertyFactory.getTransformProperty(
              e,
              t.tr,
              this
            )),
            (this.so = PropertyFactory.getProp(e, t.tr.so, 0, 0.01, this)),
            (this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, 0.01, this)),
            (this.data = t),
            this.dynamicProperties.length || this.getValue(!0),
            (this._isAnimated = !!this.dynamicProperties.length),
            (this.pMatrix = new Matrix()),
            (this.rMatrix = new Matrix()),
            (this.sMatrix = new Matrix()),
            (this.tMatrix = new Matrix()),
            (this.matrix = new Matrix());
        }),
        (RepeaterModifier.prototype.applyTransforms = function (
          e,
          t,
          r,
          s,
          a,
          n
        ) {
          var o = n ? -1 : 1,
            f = s.s.v[0] + (1 - s.s.v[0]) * (1 - a),
            l = s.s.v[1] + (1 - s.s.v[1]) * (1 - a);
          e.translate(s.p.v[0] * o * a, s.p.v[1] * o * a, s.p.v[2]),
            t.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]),
            t.rotate(-s.r.v * o * a),
            t.translate(s.a.v[0], s.a.v[1], s.a.v[2]),
            r.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]),
            r.scale(n ? 1 / f : f, n ? 1 / l : l),
            r.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
        }),
        (RepeaterModifier.prototype.init = function (e, t, r, s) {
          for (
            this.elem = e,
              this.arr = t,
              this.pos = r,
              this.elemsData = s,
              this._currentCopies = 0,
              this._elements = [],
              this._groups = [],
              this.frameId = -1,
              this.initDynamicPropertyContainer(e),
              this.initModifierProperties(e, t[r]);
            r > 0;

          )
            (r -= 1), this._elements.unshift(t[r]);
          this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
        }),
        (RepeaterModifier.prototype.resetElements = function (e) {
          var t,
            r = e.length;
          for (t = 0; t < r; t += 1)
            (e[t]._processed = !1),
              e[t].ty === "gr" && this.resetElements(e[t].it);
        }),
        (RepeaterModifier.prototype.cloneElements = function (e) {
          var t = JSON.parse(JSON.stringify(e));
          return this.resetElements(t), t;
        }),
        (RepeaterModifier.prototype.changeGroupRender = function (e, t) {
          var r,
            s = e.length;
          for (r = 0; r < s; r += 1)
            (e[r]._render = t),
              e[r].ty === "gr" && this.changeGroupRender(e[r].it, t);
        }),
        (RepeaterModifier.prototype.processShapes = function (e) {
          var t,
            r,
            s,
            a,
            n,
            o = !1;
          if (this._imdf || e) {
            var f = Math.ceil(this.c.v);
            if (this._groups.length < f) {
              for (; this._groups.length < f; ) {
                var l = { it: this.cloneElements(this._elements), ty: "gr" };
                l.it.push({
                  a: { a: 0, ix: 1, k: [0, 0] },
                  nm: "Transform",
                  o: { a: 0, ix: 7, k: 100 },
                  p: { a: 0, ix: 2, k: [0, 0] },
                  r: {
                    a: 1,
                    ix: 6,
                    k: [
                      { s: 0, e: 0, t: 0 },
                      { s: 0, e: 0, t: 1 },
                    ],
                  },
                  s: { a: 0, ix: 3, k: [100, 100] },
                  sa: { a: 0, ix: 5, k: 0 },
                  sk: { a: 0, ix: 4, k: 0 },
                  ty: "tr",
                }),
                  this.arr.splice(0, 0, l),
                  this._groups.splice(0, 0, l),
                  (this._currentCopies += 1);
              }
              this.elem.reloadShapes(), (o = !0);
            }
            n = 0;
            var p;
            for (s = 0; s <= this._groups.length - 1; s += 1) {
              if (
                ((p = n < f),
                (this._groups[s]._render = p),
                this.changeGroupRender(this._groups[s].it, p),
                !p)
              ) {
                var b = this.elemsData[s].it,
                  P = b[b.length - 1];
                P.transform.op.v !== 0
                  ? ((P.transform.op._imdf = !0), (P.transform.op.v = 0))
                  : (P.transform.op._imdf = !1);
              }
              n += 1;
            }
            this._currentCopies = f;
            var u = this.o.v,
              _ = u % 1,
              x = u > 0 ? Math.floor(u) : Math.ceil(u),
              g = this.pMatrix.props,
              A = this.rMatrix.props,
              d = this.sMatrix.props;
            this.pMatrix.reset(),
              this.rMatrix.reset(),
              this.sMatrix.reset(),
              this.tMatrix.reset(),
              this.matrix.reset();
            var y = 0;
            if (u > 0) {
              for (; y < x; )
                this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  1,
                  !1
                ),
                  (y += 1);
              _ &&
                (this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  _,
                  !1
                ),
                (y += _));
            } else if (u < 0) {
              for (; y > x; )
                this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  1,
                  !0
                ),
                  (y -= 1);
              _ &&
                (this.applyTransforms(
                  this.pMatrix,
                  this.rMatrix,
                  this.sMatrix,
                  this.tr,
                  -_,
                  !0
                ),
                (y -= _));
            }
            (s = this.data.m === 1 ? 0 : this._currentCopies - 1),
              (a = this.data.m === 1 ? 1 : -1),
              (n = this._currentCopies);
            for (var c, m; n; ) {
              if (
                ((t = this.elemsData[s].it),
                (r = t[t.length - 1].transform.mProps.v.props),
                (m = r.length),
                (t[t.length - 1].transform.mProps._imdf = !0),
                (t[t.length - 1].transform.op._imdf = !0),
                (t[t.length - 1].transform.op.v =
                  this._currentCopies === 1
                    ? this.so.v
                    : this.so.v +
                      (this.eo.v - this.so.v) *
                        (s / (this._currentCopies - 1))),
                y !== 0)
              ) {
                for (
                  ((s !== 0 && a === 1) ||
                    (s !== this._currentCopies - 1 && a === -1)) &&
                    this.applyTransforms(
                      this.pMatrix,
                      this.rMatrix,
                      this.sMatrix,
                      this.tr,
                      1,
                      !1
                    ),
                    this.matrix.transform(
                      A[0],
                      A[1],
                      A[2],
                      A[3],
                      A[4],
                      A[5],
                      A[6],
                      A[7],
                      A[8],
                      A[9],
                      A[10],
                      A[11],
                      A[12],
                      A[13],
                      A[14],
                      A[15]
                    ),
                    this.matrix.transform(
                      d[0],
                      d[1],
                      d[2],
                      d[3],
                      d[4],
                      d[5],
                      d[6],
                      d[7],
                      d[8],
                      d[9],
                      d[10],
                      d[11],
                      d[12],
                      d[13],
                      d[14],
                      d[15]
                    ),
                    this.matrix.transform(
                      g[0],
                      g[1],
                      g[2],
                      g[3],
                      g[4],
                      g[5],
                      g[6],
                      g[7],
                      g[8],
                      g[9],
                      g[10],
                      g[11],
                      g[12],
                      g[13],
                      g[14],
                      g[15]
                    ),
                    c = 0;
                  c < m;
                  c += 1
                )
                  r[c] = this.matrix.props[c];
                this.matrix.reset();
              } else
                for (this.matrix.reset(), c = 0; c < m; c += 1)
                  r[c] = this.matrix.props[c];
              (y += 1), (n -= 1), (s += a);
            }
          } else
            for (n = this._currentCopies, s = 0, a = 1; n; )
              (t = this.elemsData[s].it),
                (r = t[t.length - 1].transform.mProps.v.props),
                (t[t.length - 1].transform.mProps._imdf = !1),
                (t[t.length - 1].transform.op._imdf = !1),
                (n -= 1),
                (s += a);
          return o;
        }),
        (RepeaterModifier.prototype.addShape = function () {});
      function RoundCornersModifier() {}
      extendPrototype([ShapeModifier], RoundCornersModifier),
        (RoundCornersModifier.prototype.initModifierProperties = function (
          e,
          t
        ) {
          (this.getValue = this.processKeys),
            (this.rd = PropertyFactory.getProp(e, t.r, 0, null, this)),
            (this._isAnimated = !!this.rd.effectsSequence.length);
        }),
        (RoundCornersModifier.prototype.processPath = function (e, t) {
          var r = shapePool.newElement();
          r.c = e.c;
          var s,
            a = e._length,
            n,
            o,
            f,
            l,
            p,
            b,
            P = 0,
            u,
            _,
            x,
            g,
            A,
            d;
          for (s = 0; s < a; s += 1)
            (n = e.v[s]),
              (f = e.o[s]),
              (o = e.i[s]),
              n[0] === f[0] && n[1] === f[1] && n[0] === o[0] && n[1] === o[1]
                ? (s === 0 || s === a - 1) && !e.c
                  ? (r.setTripleAt(n[0], n[1], f[0], f[1], o[0], o[1], P),
                    (P += 1))
                  : (s === 0 ? (l = e.v[a - 1]) : (l = e.v[s - 1]),
                    (p = Math.sqrt(
                      Math.pow(n[0] - l[0], 2) + Math.pow(n[1] - l[1], 2)
                    )),
                    (b = p ? Math.min(p / 2, t) / p : 0),
                    (A = n[0] + (l[0] - n[0]) * b),
                    (u = A),
                    (d = n[1] - (n[1] - l[1]) * b),
                    (_ = d),
                    (x = u - (u - n[0]) * roundCorner),
                    (g = _ - (_ - n[1]) * roundCorner),
                    r.setTripleAt(u, _, x, g, A, d, P),
                    (P += 1),
                    s === a - 1 ? (l = e.v[0]) : (l = e.v[s + 1]),
                    (p = Math.sqrt(
                      Math.pow(n[0] - l[0], 2) + Math.pow(n[1] - l[1], 2)
                    )),
                    (b = p ? Math.min(p / 2, t) / p : 0),
                    (x = n[0] + (l[0] - n[0]) * b),
                    (u = x),
                    (g = n[1] + (l[1] - n[1]) * b),
                    (_ = g),
                    (A = u - (u - n[0]) * roundCorner),
                    (d = _ - (_ - n[1]) * roundCorner),
                    r.setTripleAt(u, _, x, g, A, d, P),
                    (P += 1))
                : (r.setTripleAt(
                    e.v[s][0],
                    e.v[s][1],
                    e.o[s][0],
                    e.o[s][1],
                    e.i[s][0],
                    e.i[s][1],
                    P
                  ),
                  (P += 1));
          return r;
        }),
        (RoundCornersModifier.prototype.processShapes = function (e) {
          var t,
            r,
            s = this.shapes.length,
            a,
            n,
            o = this.rd.v;
          if (o !== 0) {
            var f, l;
            for (r = 0; r < s; r += 1) {
              if (
                ((f = this.shapes[r]),
                (l = f.localShapeCollection),
                !(!f.shape._imdf && !this._imdf && !e))
              )
                for (
                  l.releaseShapes(),
                    f.shape._imdf = !0,
                    t = f.shape.paths.shapes,
                    n = f.shape.paths._length,
                    a = 0;
                  a < n;
                  a += 1
                )
                  l.addShape(this.processPath(t[a], o));
              f.shape.paths = f.localShapeCollection;
            }
          }
          this.dynamicProperties.length || (this._imdf = !1);
        });
      function floatEqual(e, t) {
        return Math.abs(e - t) * 1e5 <= Math.min(Math.abs(e), Math.abs(t));
      }
      function floatZero(e) {
        return Math.abs(e) <= 1e-5;
      }
      function lerp(e, t, r) {
        return e * (1 - r) + t * r;
      }
      function lerpPoint(e, t, r) {
        return [lerp(e[0], t[0], r), lerp(e[1], t[1], r)];
      }
      function quadRoots(e, t, r) {
        if (e === 0) return [];
        var s = t * t - 4 * e * r;
        if (s < 0) return [];
        var a = -t / (2 * e);
        if (s === 0) return [a];
        var n = Math.sqrt(s) / (2 * e);
        return [a - n, a + n];
      }
      function polynomialCoefficients(e, t, r, s) {
        return [
          -e + 3 * t - 3 * r + s,
          3 * e - 6 * t + 3 * r,
          -3 * e + 3 * t,
          e,
        ];
      }
      function singlePoint(e) {
        return new PolynomialBezier(e, e, e, e, !1);
      }
      function PolynomialBezier(e, t, r, s, a) {
        a && pointEqual(e, t) && (t = lerpPoint(e, s, 1 / 3)),
          a && pointEqual(r, s) && (r = lerpPoint(e, s, 2 / 3));
        var n = polynomialCoefficients(e[0], t[0], r[0], s[0]),
          o = polynomialCoefficients(e[1], t[1], r[1], s[1]);
        (this.a = [n[0], o[0]]),
          (this.b = [n[1], o[1]]),
          (this.c = [n[2], o[2]]),
          (this.d = [n[3], o[3]]),
          (this.points = [e, t, r, s]);
      }
      (PolynomialBezier.prototype.point = function (e) {
        return [
          ((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0],
          ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1],
        ];
      }),
        (PolynomialBezier.prototype.derivative = function (e) {
          return [
            (3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0],
            (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1],
          ];
        }),
        (PolynomialBezier.prototype.tangentAngle = function (e) {
          var t = this.derivative(e);
          return Math.atan2(t[1], t[0]);
        }),
        (PolynomialBezier.prototype.normalAngle = function (e) {
          var t = this.derivative(e);
          return Math.atan2(t[0], t[1]);
        }),
        (PolynomialBezier.prototype.inflectionPoints = function () {
          var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
          if (floatZero(e)) return [];
          var t = (-0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1])) / e,
            r =
              t * t -
              ((1 / 3) * (this.b[1] * this.c[0] - this.b[0] * this.c[1])) / e;
          if (r < 0) return [];
          var s = Math.sqrt(r);
          return floatZero(s)
            ? s > 0 && s < 1
              ? [t]
              : []
            : [t - s, t + s].filter(function (a) {
                return a > 0 && a < 1;
              });
        }),
        (PolynomialBezier.prototype.split = function (e) {
          if (e <= 0) return [singlePoint(this.points[0]), this];
          if (e >= 1)
            return [this, singlePoint(this.points[this.points.length - 1])];
          var t = lerpPoint(this.points[0], this.points[1], e),
            r = lerpPoint(this.points[1], this.points[2], e),
            s = lerpPoint(this.points[2], this.points[3], e),
            a = lerpPoint(t, r, e),
            n = lerpPoint(r, s, e),
            o = lerpPoint(a, n, e);
          return [
            new PolynomialBezier(this.points[0], t, a, o, !0),
            new PolynomialBezier(o, n, s, this.points[3], !0),
          ];
        });
      function extrema(e, t) {
        var r = e.points[0][t],
          s = e.points[e.points.length - 1][t];
        if (r > s) {
          var a = s;
          (s = r), (r = a);
        }
        for (
          var n = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), o = 0;
          o < n.length;
          o += 1
        )
          if (n[o] > 0 && n[o] < 1) {
            var f = e.point(n[o])[t];
            f < r ? (r = f) : f > s && (s = f);
          }
        return { min: r, max: s };
      }
      (PolynomialBezier.prototype.bounds = function () {
        return { x: extrema(this, 0), y: extrema(this, 1) };
      }),
        (PolynomialBezier.prototype.boundingBox = function () {
          var e = this.bounds();
          return {
            left: e.x.min,
            right: e.x.max,
            top: e.y.min,
            bottom: e.y.max,
            width: e.x.max - e.x.min,
            height: e.y.max - e.y.min,
            cx: (e.x.max + e.x.min) / 2,
            cy: (e.y.max + e.y.min) / 2,
          };
        });
      function intersectData(e, t, r) {
        var s = e.boundingBox();
        return {
          cx: s.cx,
          cy: s.cy,
          width: s.width,
          height: s.height,
          bez: e,
          t: (t + r) / 2,
          t1: t,
          t2: r,
        };
      }
      function splitData(e) {
        var t = e.bez.split(0.5);
        return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)];
      }
      function boxIntersect(e, t) {
        return (
          Math.abs(e.cx - t.cx) * 2 < e.width + t.width &&
          Math.abs(e.cy - t.cy) * 2 < e.height + t.height
        );
      }
      function intersectsImpl(e, t, r, s, a, n) {
        if (boxIntersect(e, t)) {
          if (
            r >= n ||
            (e.width <= s && e.height <= s && t.width <= s && t.height <= s)
          ) {
            a.push([e.t, t.t]);
            return;
          }
          var o = splitData(e),
            f = splitData(t);
          intersectsImpl(o[0], f[0], r + 1, s, a, n),
            intersectsImpl(o[0], f[1], r + 1, s, a, n),
            intersectsImpl(o[1], f[0], r + 1, s, a, n),
            intersectsImpl(o[1], f[1], r + 1, s, a, n);
        }
      }
      (PolynomialBezier.prototype.intersections = function (e, t, r) {
        t === void 0 && (t = 2), r === void 0 && (r = 7);
        var s = [];
        return (
          intersectsImpl(
            intersectData(this, 0, 1),
            intersectData(e, 0, 1),
            0,
            t,
            s,
            r
          ),
          s
        );
      }),
        (PolynomialBezier.shapeSegment = function (e, t) {
          var r = (t + 1) % e.length();
          return new PolynomialBezier(e.v[t], e.o[t], e.i[r], e.v[r], !0);
        }),
        (PolynomialBezier.shapeSegmentInverted = function (e, t) {
          var r = (t + 1) % e.length();
          return new PolynomialBezier(e.v[r], e.i[r], e.o[t], e.v[t], !0);
        });
      function crossProduct(e, t) {
        return [
          e[1] * t[2] - e[2] * t[1],
          e[2] * t[0] - e[0] * t[2],
          e[0] * t[1] - e[1] * t[0],
        ];
      }
      function lineIntersection(e, t, r, s) {
        var a = [e[0], e[1], 1],
          n = [t[0], t[1], 1],
          o = [r[0], r[1], 1],
          f = [s[0], s[1], 1],
          l = crossProduct(crossProduct(a, n), crossProduct(o, f));
        return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]];
      }
      function polarOffset(e, t, r) {
        return [e[0] + Math.cos(t) * r, e[1] - Math.sin(t) * r];
      }
      function pointDistance(e, t) {
        return Math.hypot(e[0] - t[0], e[1] - t[1]);
      }
      function pointEqual(e, t) {
        return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1]);
      }
      function ZigZagModifier() {}
      extendPrototype([ShapeModifier], ZigZagModifier),
        (ZigZagModifier.prototype.initModifierProperties = function (e, t) {
          (this.getValue = this.processKeys),
            (this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this)),
            (this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this)),
            (this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this)),
            (this._isAnimated =
              this.amplitude.effectsSequence.length !== 0 ||
              this.frequency.effectsSequence.length !== 0 ||
              this.pointsType.effectsSequence.length !== 0);
        });
      function setPoint(e, t, r, s, a, n, o) {
        var f = r - Math.PI / 2,
          l = r + Math.PI / 2,
          p = t[0] + Math.cos(r) * s * a,
          b = t[1] - Math.sin(r) * s * a;
        e.setTripleAt(
          p,
          b,
          p + Math.cos(f) * n,
          b - Math.sin(f) * n,
          p + Math.cos(l) * o,
          b - Math.sin(l) * o,
          e.length()
        );
      }
      function getPerpendicularVector(e, t) {
        var r = [t[0] - e[0], t[1] - e[1]],
          s = -Math.PI * 0.5,
          a = [
            Math.cos(s) * r[0] - Math.sin(s) * r[1],
            Math.sin(s) * r[0] + Math.cos(s) * r[1],
          ];
        return a;
      }
      function getProjectingAngle(e, t) {
        var r = t === 0 ? e.length() - 1 : t - 1,
          s = (t + 1) % e.length(),
          a = e.v[r],
          n = e.v[s],
          o = getPerpendicularVector(a, n);
        return Math.atan2(0, 1) - Math.atan2(o[1], o[0]);
      }
      function zigZagCorner(e, t, r, s, a, n, o) {
        var f = getProjectingAngle(t, r),
          l = t.v[r % t._length],
          p = t.v[r === 0 ? t._length - 1 : r - 1],
          b = t.v[(r + 1) % t._length],
          P =
            n === 2
              ? Math.sqrt(Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2))
              : 0,
          u =
            n === 2
              ? Math.sqrt(Math.pow(l[0] - b[0], 2) + Math.pow(l[1] - b[1], 2))
              : 0;
        setPoint(
          e,
          t.v[r % t._length],
          f,
          o,
          s,
          u / ((a + 1) * 2),
          P / ((a + 1) * 2)
        );
      }
      function zigZagSegment(e, t, r, s, a, n) {
        for (var o = 0; o < s; o += 1) {
          var f = (o + 1) / (s + 1),
            l =
              a === 2
                ? Math.sqrt(
                    Math.pow(t.points[3][0] - t.points[0][0], 2) +
                      Math.pow(t.points[3][1] - t.points[0][1], 2)
                  )
                : 0,
            p = t.normalAngle(f),
            b = t.point(f);
          setPoint(e, b, p, n, r, l / ((s + 1) * 2), l / ((s + 1) * 2)),
            (n = -n);
        }
        return n;
      }
      (ZigZagModifier.prototype.processPath = function (e, t, r, s) {
        var a = e._length,
          n = shapePool.newElement();
        if (((n.c = e.c), e.c || (a -= 1), a === 0)) return n;
        var o = -1,
          f = PolynomialBezier.shapeSegment(e, 0);
        zigZagCorner(n, e, 0, t, r, s, o);
        for (var l = 0; l < a; l += 1)
          (o = zigZagSegment(n, f, t, r, s, -o)),
            l === a - 1 && !e.c
              ? (f = null)
              : (f = PolynomialBezier.shapeSegment(e, (l + 1) % a)),
            zigZagCorner(n, e, l + 1, t, r, s, o);
        return n;
      }),
        (ZigZagModifier.prototype.processShapes = function (e) {
          var t,
            r,
            s = this.shapes.length,
            a,
            n,
            o = this.amplitude.v,
            f = Math.max(0, Math.round(this.frequency.v)),
            l = this.pointsType.v;
          if (o !== 0) {
            var p, b;
            for (r = 0; r < s; r += 1) {
              if (
                ((p = this.shapes[r]),
                (b = p.localShapeCollection),
                !(!p.shape._imdf && !this._imdf && !e))
              )
                for (
                  b.releaseShapes(),
                    p.shape._imdf = !0,
                    t = p.shape.paths.shapes,
                    n = p.shape.paths._length,
                    a = 0;
                  a < n;
                  a += 1
                )
                  b.addShape(this.processPath(t[a], o, f, l));
              p.shape.paths = p.localShapeCollection;
            }
          }
          this.dynamicProperties.length || (this._imdf = !1);
        });
      function linearOffset(e, t, r) {
        var s = Math.atan2(t[0] - e[0], t[1] - e[1]);
        return [polarOffset(e, s, r), polarOffset(t, s, r)];
      }
      function offsetSegment(e, t) {
        var r, s, a, n, o, f, l;
        (l = linearOffset(e.points[0], e.points[1], t)),
          (r = l[0]),
          (s = l[1]),
          (l = linearOffset(e.points[1], e.points[2], t)),
          (a = l[0]),
          (n = l[1]),
          (l = linearOffset(e.points[2], e.points[3], t)),
          (o = l[0]),
          (f = l[1]);
        var p = lineIntersection(r, s, a, n);
        p === null && (p = s);
        var b = lineIntersection(o, f, a, n);
        return b === null && (b = o), new PolynomialBezier(r, p, b, f);
      }
      function joinLines(e, t, r, s, a) {
        var n = t.points[3],
          o = r.points[0];
        if (s === 3 || pointEqual(n, o)) return n;
        if (s === 2) {
          var f = -t.tangentAngle(1),
            l = -r.tangentAngle(0) + Math.PI,
            p = lineIntersection(
              n,
              polarOffset(n, f + Math.PI / 2, 100),
              o,
              polarOffset(o, f + Math.PI / 2, 100)
            ),
            b = p ? pointDistance(p, n) : pointDistance(n, o) / 2,
            P = polarOffset(n, f, 2 * b * roundCorner);
          return (
            e.setXYAt(P[0], P[1], "o", e.length() - 1),
            (P = polarOffset(o, l, 2 * b * roundCorner)),
            e.setTripleAt(o[0], o[1], o[0], o[1], P[0], P[1], e.length()),
            o
          );
        }
        var u = pointEqual(n, t.points[2]) ? t.points[0] : t.points[2],
          _ = pointEqual(o, r.points[1]) ? r.points[3] : r.points[1],
          x = lineIntersection(u, n, o, _);
        return x && pointDistance(x, n) < a
          ? (e.setTripleAt(x[0], x[1], x[0], x[1], x[0], x[1], e.length()), x)
          : n;
      }
      function getIntersection(e, t) {
        var r = e.intersections(t);
        return (
          r.length && floatEqual(r[0][0], 1) && r.shift(),
          r.length ? r[0] : null
        );
      }
      function pruneSegmentIntersection(e, t) {
        var r = e.slice(),
          s = t.slice(),
          a = getIntersection(e[e.length - 1], t[0]);
        return (
          a &&
            ((r[e.length - 1] = e[e.length - 1].split(a[0])[0]),
            (s[0] = t[0].split(a[1])[1])),
          e.length > 1 &&
          t.length > 1 &&
          ((a = getIntersection(e[0], t[t.length - 1])), a)
            ? [[e[0].split(a[0])[0]], [t[t.length - 1].split(a[1])[1]]]
            : [r, s]
        );
      }
      function pruneIntersections(e) {
        for (var t, r = 1; r < e.length; r += 1)
          (t = pruneSegmentIntersection(e[r - 1], e[r])),
            (e[r - 1] = t[0]),
            (e[r] = t[1]);
        return (
          e.length > 1 &&
            ((t = pruneSegmentIntersection(e[e.length - 1], e[0])),
            (e[e.length - 1] = t[0]),
            (e[0] = t[1])),
          e
        );
      }
      function offsetSegmentSplit(e, t) {
        var r = e.inflectionPoints(),
          s,
          a,
          n,
          o;
        if (r.length === 0) return [offsetSegment(e, t)];
        if (r.length === 1 || floatEqual(r[1], 1))
          return (
            (n = e.split(r[0])),
            (s = n[0]),
            (a = n[1]),
            [offsetSegment(s, t), offsetSegment(a, t)]
          );
        (n = e.split(r[0])), (s = n[0]);
        var f = (r[1] - r[0]) / (1 - r[0]);
        return (
          (n = n[1].split(f)),
          (o = n[0]),
          (a = n[1]),
          [offsetSegment(s, t), offsetSegment(o, t), offsetSegment(a, t)]
        );
      }
      function OffsetPathModifier() {}
      extendPrototype([ShapeModifier], OffsetPathModifier),
        (OffsetPathModifier.prototype.initModifierProperties = function (e, t) {
          (this.getValue = this.processKeys),
            (this.amount = PropertyFactory.getProp(e, t.a, 0, null, this)),
            (this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this)),
            (this.lineJoin = t.lj),
            (this._isAnimated = this.amount.effectsSequence.length !== 0);
        }),
        (OffsetPathModifier.prototype.processPath = function (e, t, r, s) {
          var a = shapePool.newElement();
          a.c = e.c;
          var n = e.length();
          e.c || (n -= 1);
          var o,
            f,
            l,
            p = [];
          for (o = 0; o < n; o += 1)
            (l = PolynomialBezier.shapeSegment(e, o)),
              p.push(offsetSegmentSplit(l, t));
          if (!e.c)
            for (o = n - 1; o >= 0; o -= 1)
              (l = PolynomialBezier.shapeSegmentInverted(e, o)),
                p.push(offsetSegmentSplit(l, t));
          p = pruneIntersections(p);
          var b = null,
            P = null;
          for (o = 0; o < p.length; o += 1) {
            var u = p[o];
            for (
              P && (b = joinLines(a, P, u[0], r, s)),
                P = u[u.length - 1],
                f = 0;
              f < u.length;
              f += 1
            )
              (l = u[f]),
                b && pointEqual(l.points[0], b)
                  ? a.setXYAt(
                      l.points[1][0],
                      l.points[1][1],
                      "o",
                      a.length() - 1
                    )
                  : a.setTripleAt(
                      l.points[0][0],
                      l.points[0][1],
                      l.points[1][0],
                      l.points[1][1],
                      l.points[0][0],
                      l.points[0][1],
                      a.length()
                    ),
                a.setTripleAt(
                  l.points[3][0],
                  l.points[3][1],
                  l.points[3][0],
                  l.points[3][1],
                  l.points[2][0],
                  l.points[2][1],
                  a.length()
                ),
                (b = l.points[3]);
          }
          return p.length && joinLines(a, P, p[0][0], r, s), a;
        }),
        (OffsetPathModifier.prototype.processShapes = function (e) {
          var t,
            r,
            s = this.shapes.length,
            a,
            n,
            o = this.amount.v,
            f = this.miterLimit.v,
            l = this.lineJoin;
          if (o !== 0) {
            var p, b;
            for (r = 0; r < s; r += 1) {
              if (
                ((p = this.shapes[r]),
                (b = p.localShapeCollection),
                !(!p.shape._imdf && !this._imdf && !e))
              )
                for (
                  b.releaseShapes(),
                    p.shape._imdf = !0,
                    t = p.shape.paths.shapes,
                    n = p.shape.paths._length,
                    a = 0;
                  a < n;
                  a += 1
                )
                  b.addShape(this.processPath(t[a], o, l, f));
              p.shape.paths = p.localShapeCollection;
            }
          }
          this.dynamicProperties.length || (this._imdf = !1);
        });
      function getFontProperties(e) {
        for (
          var t = e.fStyle ? e.fStyle.split(" ") : [],
            r = "normal",
            s = "normal",
            a = t.length,
            n,
            o = 0;
          o < a;
          o += 1
        )
          switch (((n = t[o].toLowerCase()), n)) {
            case "italic":
              s = "italic";
              break;
            case "bold":
              r = "700";
              break;
            case "black":
              r = "900";
              break;
            case "medium":
              r = "500";
              break;
            case "regular":
            case "normal":
              r = "400";
              break;
            case "light":
            case "thin":
              r = "200";
              break;
          }
        return { style: s, weight: e.fWeight || r };
      }
      var FontManager = (function () {
        var e = 5e3,
          t = { w: 0, size: 0, shapes: [], data: { shapes: [] } },
          r = [];
        r = r.concat([
          2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368,
          2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379,
          2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403,
        ]);
        var s = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
          a = [65039, 8205];
        function n(m) {
          var E = m.split(","),
            S,
            T = E.length,
            F = [];
          for (S = 0; S < T; S += 1)
            E[S] !== "sans-serif" && E[S] !== "monospace" && F.push(E[S]);
          return F.join(",");
        }
        function o(m, E) {
          var S = createTag("span");
          S.setAttribute("aria-hidden", !0), (S.style.fontFamily = E);
          var T = createTag("span");
          (T.innerText = "giItT1WQy@!-/#"),
            (S.style.position = "absolute"),
            (S.style.left = "-10000px"),
            (S.style.top = "-10000px"),
            (S.style.fontSize = "300px"),
            (S.style.fontVariant = "normal"),
            (S.style.fontStyle = "normal"),
            (S.style.fontWeight = "normal"),
            (S.style.letterSpacing = "0"),
            S.appendChild(T),
            document.body.appendChild(S);
          var F = T.offsetWidth;
          return (
            (T.style.fontFamily = n(m) + ", " + E), { node: T, w: F, parent: S }
          );
        }
        function f() {
          var m,
            E = this.fonts.length,
            S,
            T,
            F = E;
          for (m = 0; m < E; m += 1)
            this.fonts[m].loaded
              ? (F -= 1)
              : this.fonts[m].fOrigin === "n" || this.fonts[m].origin === 0
              ? (this.fonts[m].loaded = !0)
              : ((S = this.fonts[m].monoCase.node),
                (T = this.fonts[m].monoCase.w),
                S.offsetWidth !== T
                  ? ((F -= 1), (this.fonts[m].loaded = !0))
                  : ((S = this.fonts[m].sansCase.node),
                    (T = this.fonts[m].sansCase.w),
                    S.offsetWidth !== T &&
                      ((F -= 1), (this.fonts[m].loaded = !0))),
                this.fonts[m].loaded &&
                  (this.fonts[m].sansCase.parent.parentNode.removeChild(
                    this.fonts[m].sansCase.parent
                  ),
                  this.fonts[m].monoCase.parent.parentNode.removeChild(
                    this.fonts[m].monoCase.parent
                  )));
          F !== 0 && Date.now() - this.initTime < e
            ? setTimeout(this.checkLoadedFontsBinded, 20)
            : setTimeout(this.setIsLoadedBinded, 10);
        }
        function l(m, E) {
          var S = document.body && E ? "svg" : "canvas",
            T,
            F = getFontProperties(m);
          if (S === "svg") {
            var O = createNS("text");
            (O.style.fontSize = "100px"),
              O.setAttribute("font-family", m.fFamily),
              O.setAttribute("font-style", F.style),
              O.setAttribute("font-weight", F.weight),
              (O.textContent = "1"),
              m.fClass
                ? ((O.style.fontFamily = "inherit"),
                  O.setAttribute("class", m.fClass))
                : (O.style.fontFamily = m.fFamily),
              E.appendChild(O),
              (T = O);
          } else {
            var G = new OffscreenCanvas(500, 500).getContext("2d");
            (G.font = F.style + " " + F.weight + " 100px " + m.fFamily),
              (T = G);
          }
          function $(B) {
            return S === "svg"
              ? ((T.textContent = B), T.getComputedTextLength())
              : T.measureText(B).width;
          }
          return { measureText: $ };
        }
        function p(m, E) {
          if (!m) {
            this.isLoaded = !0;
            return;
          }
          if (this.chars) {
            (this.isLoaded = !0), (this.fonts = m.list);
            return;
          }
          if (!document.body) {
            (this.isLoaded = !0),
              m.list.forEach(function (D) {
                (D.helper = l(D)), (D.cache = {});
              }),
              (this.fonts = m.list);
            return;
          }
          var S = m.list,
            T,
            F = S.length,
            O = F;
          for (T = 0; T < F; T += 1) {
            var G = !0,
              $,
              B;
            if (
              ((S[T].loaded = !1),
              (S[T].monoCase = o(S[T].fFamily, "monospace")),
              (S[T].sansCase = o(S[T].fFamily, "sans-serif")),
              !S[T].fPath)
            )
              (S[T].loaded = !0), (O -= 1);
            else if (S[T].fOrigin === "p" || S[T].origin === 3) {
              if (
                (($ = document.querySelectorAll(
                  'style[f-forigin="p"][f-family="' +
                    S[T].fFamily +
                    '"], style[f-origin="3"][f-family="' +
                    S[T].fFamily +
                    '"]'
                )),
                $.length > 0 && (G = !1),
                G)
              ) {
                var z = createTag("style");
                z.setAttribute("f-forigin", S[T].fOrigin),
                  z.setAttribute("f-origin", S[T].origin),
                  z.setAttribute("f-family", S[T].fFamily),
                  (z.type = "text/css"),
                  (z.innerText =
                    "@font-face {font-family: " +
                    S[T].fFamily +
                    "; font-style: normal; src: url('" +
                    S[T].fPath +
                    "');}"),
                  E.appendChild(z);
              }
            } else if (S[T].fOrigin === "g" || S[T].origin === 1) {
              for (
                $ = document.querySelectorAll(
                  'link[f-forigin="g"], link[f-origin="1"]'
                ),
                  B = 0;
                B < $.length;
                B += 1
              )
                $[B].href.indexOf(S[T].fPath) !== -1 && (G = !1);
              if (G) {
                var N = createTag("link");
                N.setAttribute("f-forigin", S[T].fOrigin),
                  N.setAttribute("f-origin", S[T].origin),
                  (N.type = "text/css"),
                  (N.rel = "stylesheet"),
                  (N.href = S[T].fPath),
                  document.body.appendChild(N);
              }
            } else if (S[T].fOrigin === "t" || S[T].origin === 2) {
              for (
                $ = document.querySelectorAll(
                  'script[f-forigin="t"], script[f-origin="2"]'
                ),
                  B = 0;
                B < $.length;
                B += 1
              )
                S[T].fPath === $[B].src && (G = !1);
              if (G) {
                var R = createTag("link");
                R.setAttribute("f-forigin", S[T].fOrigin),
                  R.setAttribute("f-origin", S[T].origin),
                  R.setAttribute("rel", "stylesheet"),
                  R.setAttribute("href", S[T].fPath),
                  E.appendChild(R);
              }
            }
            (S[T].helper = l(S[T], E)),
              (S[T].cache = {}),
              this.fonts.push(S[T]);
          }
          O === 0
            ? (this.isLoaded = !0)
            : setTimeout(this.checkLoadedFonts.bind(this), 100);
        }
        function b(m) {
          if (m) {
            this.chars || (this.chars = []);
            var E,
              S = m.length,
              T,
              F = this.chars.length,
              O;
            for (E = 0; E < S; E += 1) {
              for (T = 0, O = !1; T < F; )
                this.chars[T].style === m[E].style &&
                  this.chars[T].fFamily === m[E].fFamily &&
                  this.chars[T].ch === m[E].ch &&
                  (O = !0),
                  (T += 1);
              O || (this.chars.push(m[E]), (F += 1));
            }
          }
        }
        function P(m, E, S) {
          for (var T = 0, F = this.chars.length; T < F; ) {
            if (
              this.chars[T].ch === m &&
              this.chars[T].style === E &&
              this.chars[T].fFamily === S
            )
              return this.chars[T];
            T += 1;
          }
          return (
            ((typeof m == "string" && m.charCodeAt(0) !== 13) || !m) &&
              console &&
              console.warn &&
              !this._warned &&
              ((this._warned = !0),
              console.warn(
                "Missing character from exported characters list: ",
                m,
                E,
                S
              )),
            t
          );
        }
        function u(m, E, S) {
          var T = this.getFontByName(E),
            F = m.charCodeAt(0);
          if (!T.cache[F + 1]) {
            var O = T.helper;
            if (m === " ") {
              var G = O.measureText("|" + m + "|"),
                $ = O.measureText("||");
              T.cache[F + 1] = (G - $) / 100;
            } else T.cache[F + 1] = O.measureText(m) / 100;
          }
          return T.cache[F + 1] * S;
        }
        function _(m) {
          for (var E = 0, S = this.fonts.length; E < S; ) {
            if (this.fonts[E].fName === m) return this.fonts[E];
            E += 1;
          }
          return this.fonts[0];
        }
        function x(m, E) {
          var S = m.toString(16) + E.toString(16);
          return s.indexOf(S) !== -1;
        }
        function g(m, E) {
          return E ? m === a[0] && E === a[1] : m === a[1];
        }
        function A(m) {
          return r.indexOf(m) !== -1;
        }
        function d() {
          this.isLoaded = !0;
        }
        var y = function () {
          (this.fonts = []),
            (this.chars = null),
            (this.typekitLoaded = 0),
            (this.isLoaded = !1),
            (this._warned = !1),
            (this.initTime = Date.now()),
            (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
            (this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this));
        };
        (y.isModifier = x),
          (y.isZeroWidthJoiner = g),
          (y.isCombinedCharacter = A);
        var c = {
          addChars: b,
          addFonts: p,
          getCharData: P,
          getFontByName: _,
          measureText: u,
          checkLoadedFonts: f,
          setIsLoaded: d,
        };
        return (y.prototype = c), y;
      })();
      function SlotManager(e) {
        this.animationData = e;
      }
      SlotManager.prototype.getProp = function (e) {
        return this.animationData.slots && this.animationData.slots[e.sid]
          ? Object.assign(e, this.animationData.slots[e.sid].p)
          : e;
      };
      function slotFactory(e) {
        return new SlotManager(e);
      }
      function RenderableElement() {}
      RenderableElement.prototype = {
        initRenderable: function () {
          (this.isInRange = !1),
            (this.hidden = !1),
            (this.isTransparent = !1),
            (this.renderableComponents = []);
        },
        addRenderableComponent: function (t) {
          this.renderableComponents.indexOf(t) === -1 &&
            this.renderableComponents.push(t);
        },
        removeRenderableComponent: function (t) {
          this.renderableComponents.indexOf(t) !== -1 &&
            this.renderableComponents.splice(
              this.renderableComponents.indexOf(t),
              1
            );
        },
        prepareRenderableFrame: function (t) {
          this.checkLayerLimits(t);
        },
        checkTransparency: function () {
          this.finalTransform.mProp.o.v <= 0
            ? !this.isTransparent &&
              this.globalData.renderConfig.hideOnTransparent &&
              ((this.isTransparent = !0), this.hide())
            : this.isTransparent && ((this.isTransparent = !1), this.show());
        },
        checkLayerLimits: function (t) {
          this.data.ip - this.data.st <= t && this.data.op - this.data.st > t
            ? this.isInRange !== !0 &&
              ((this.globalData._imdf = !0),
              (this._imdf = !0),
              (this.isInRange = !0),
              this.show())
            : this.isInRange !== !1 &&
              ((this.globalData._imdf = !0),
              (this.isInRange = !1),
              this.hide());
        },
        renderRenderable: function () {
          var t,
            r = this.renderableComponents.length;
          for (t = 0; t < r; t += 1)
            this.renderableComponents[t].renderFrame(this._isFirstFrame);
        },
        sourceRectAtTime: function () {
          return { top: 0, left: 0, width: 100, height: 100 };
        },
        getLayerSize: function () {
          return this.data.ty === 5
            ? { w: this.data.textData.width, h: this.data.textData.height }
            : { w: this.data.width, h: this.data.height };
        },
      };
      var getBlendMode = (function () {
        var e = {
          0: "source-over",
          1: "multiply",
          2: "screen",
          3: "overlay",
          4: "darken",
          5: "lighten",
          6: "color-dodge",
          7: "color-burn",
          8: "hard-light",
          9: "soft-light",
          10: "difference",
          11: "exclusion",
          12: "hue",
          13: "saturation",
          14: "color",
          15: "luminosity",
        };
        return function (t) {
          return e[t] || "";
        };
      })();
      function SliderEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
      }
      function AngleEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
      }
      function ColorEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 1, 0, r);
      }
      function PointEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 1, 0, r);
      }
      function LayerIndexEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
      }
      function MaskIndexEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
      }
      function CheckboxEffect(e, t, r) {
        this.p = PropertyFactory.getProp(t, e.v, 0, 0, r);
      }
      function NoValueEffect() {
        this.p = {};
      }
      function EffectsManager(e, t) {
        var r = e.ef || [];
        this.effectElements = [];
        var s,
          a = r.length,
          n;
        for (s = 0; s < a; s += 1)
          (n = new GroupEffect(r[s], t)), this.effectElements.push(n);
      }
      function GroupEffect(e, t) {
        this.init(e, t);
      }
      extendPrototype([DynamicPropertyContainer], GroupEffect),
        (GroupEffect.prototype.getValue =
          GroupEffect.prototype.iterateDynamicProperties),
        (GroupEffect.prototype.init = function (e, t) {
          (this.data = e),
            (this.effectElements = []),
            this.initDynamicPropertyContainer(t);
          var r,
            s = this.data.ef.length,
            a,
            n = this.data.ef;
          for (r = 0; r < s; r += 1) {
            switch (((a = null), n[r].ty)) {
              case 0:
                a = new SliderEffect(n[r], t, this);
                break;
              case 1:
                a = new AngleEffect(n[r], t, this);
                break;
              case 2:
                a = new ColorEffect(n[r], t, this);
                break;
              case 3:
                a = new PointEffect(n[r], t, this);
                break;
              case 4:
              case 7:
                a = new CheckboxEffect(n[r], t, this);
                break;
              case 10:
                a = new LayerIndexEffect(n[r], t, this);
                break;
              case 11:
                a = new MaskIndexEffect(n[r], t, this);
                break;
              case 5:
                a = new EffectsManager(n[r], t);
                break;
              default:
                a = new NoValueEffect(n[r]);
                break;
            }
            a && this.effectElements.push(a);
          }
        });
      function BaseElement() {}
      BaseElement.prototype = {
        checkMasks: function () {
          if (!this.data.hasMask) return !1;
          for (var t = 0, r = this.data.masksProperties.length; t < r; ) {
            if (
              this.data.masksProperties[t].mode !== "n" &&
              this.data.masksProperties[t].cl !== !1
            )
              return !0;
            t += 1;
          }
          return !1;
        },
        initExpressions: function () {
          var t = getExpressionInterfaces();
          if (t) {
            var r = t("layer"),
              s = t("effects"),
              a = t("shape"),
              n = t("text"),
              o = t("comp");
            (this.layerInterface = r(this)),
              this.data.hasMask &&
                this.maskManager &&
                this.layerInterface.registerMaskInterface(this.maskManager);
            var f = s.createEffectsInterface(this, this.layerInterface);
            this.layerInterface.registerEffectsInterface(f),
              this.data.ty === 0 || this.data.xt
                ? (this.compInterface = o(this))
                : this.data.ty === 4
                ? ((this.layerInterface.shapeInterface = a(
                    this.shapesData,
                    this.itemsData,
                    this.layerInterface
                  )),
                  (this.layerInterface.content =
                    this.layerInterface.shapeInterface))
                : this.data.ty === 5 &&
                  ((this.layerInterface.textInterface = n(this)),
                  (this.layerInterface.text =
                    this.layerInterface.textInterface));
          }
        },
        setBlendMode: function () {
          var t = getBlendMode(this.data.bm),
            r = this.baseElement || this.layerElement;
          r.style["mix-blend-mode"] = t;
        },
        initBaseData: function (t, r, s) {
          (this.globalData = r),
            (this.comp = s),
            (this.data = t),
            (this.layerId = createElementID()),
            this.data.sr || (this.data.sr = 1),
            (this.effectsManager = new EffectsManager(
              this.data,
              this,
              this.dynamicProperties
            ));
        },
        getType: function () {
          return this.type;
        },
        sourceRectAtTime: function () {},
      };
      function FrameElement() {}
      FrameElement.prototype = {
        initFrame: function () {
          (this._isFirstFrame = !1),
            (this.dynamicProperties = []),
            (this._imdf = !1);
        },
        prepareProperties: function (t, r) {
          var s,
            a = this.dynamicProperties.length;
          for (s = 0; s < a; s += 1)
            (r ||
              (this._isParent &&
                this.dynamicProperties[s].propType === "transform")) &&
              (this.dynamicProperties[s].getValue(),
              this.dynamicProperties[s]._imdf &&
                ((this.globalData._imdf = !0), (this._imdf = !0)));
        },
        addDynamicProperty: function (t) {
          this.dynamicProperties.indexOf(t) === -1 &&
            this.dynamicProperties.push(t);
        },
      };
      function FootageElement(e, t, r) {
        this.initFrame(),
          this.initRenderable(),
          (this.assetData = t.getAssetData(e.refId)),
          (this.footageData = t.imageLoader.getAsset(this.assetData)),
          this.initBaseData(e, t, r);
      }
      (FootageElement.prototype.prepareFrame = function () {}),
        extendPrototype(
          [RenderableElement, BaseElement, FrameElement],
          FootageElement
        ),
        (FootageElement.prototype.getBaseElement = function () {
          return null;
        }),
        (FootageElement.prototype.renderFrame = function () {}),
        (FootageElement.prototype.destroy = function () {}),
        (FootageElement.prototype.initExpressions = function () {
          var e = getExpressionInterfaces();
          if (e) {
            var t = e("footage");
            this.layerInterface = t(this);
          }
        }),
        (FootageElement.prototype.getFootageData = function () {
          return this.footageData;
        });
      function AudioElement(e, t, r) {
        this.initFrame(),
          this.initRenderable(),
          (this.assetData = t.getAssetData(e.refId)),
          this.initBaseData(e, t, r),
          (this._isPlaying = !1),
          (this._canPlay = !1);
        var s = this.globalData.getAssetsPath(this.assetData);
        (this.audio = this.globalData.audioController.createAudio(s)),
          (this._currentTime = 0),
          this.globalData.audioController.addAudio(this),
          (this._volumeMultiplier = 1),
          (this._volume = 1),
          (this._previousVolume = null),
          (this.tm = e.tm
            ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this)
            : { _placeholder: !0 }),
          (this.lv = PropertyFactory.getProp(
            this,
            e.au && e.au.lv ? e.au.lv : { k: [100] },
            1,
            0.01,
            this
          ));
      }
      (AudioElement.prototype.prepareFrame = function (e) {
        if (
          (this.prepareRenderableFrame(e, !0),
          this.prepareProperties(e, !0),
          this.tm._placeholder)
        )
          this._currentTime = e / this.data.sr;
        else {
          var t = this.tm.v;
          this._currentTime = t;
        }
        this._volume = this.lv.v[0];
        var r = this._volume * this._volumeMultiplier;
        this._previousVolume !== r &&
          ((this._previousVolume = r), this.audio.volume(r));
      }),
        extendPrototype(
          [RenderableElement, BaseElement, FrameElement],
          AudioElement
        ),
        (AudioElement.prototype.renderFrame = function () {
          this.isInRange &&
            this._canPlay &&
            (this._isPlaying
              ? (!this.audio.playing() ||
                  Math.abs(
                    this._currentTime / this.globalData.frameRate -
                      this.audio.seek()
                  ) > 0.1) &&
                this.audio.seek(this._currentTime / this.globalData.frameRate)
              : (this.audio.play(),
                this.audio.seek(this._currentTime / this.globalData.frameRate),
                (this._isPlaying = !0)));
        }),
        (AudioElement.prototype.show = function () {}),
        (AudioElement.prototype.hide = function () {
          this.audio.pause(), (this._isPlaying = !1);
        }),
        (AudioElement.prototype.pause = function () {
          this.audio.pause(), (this._isPlaying = !1), (this._canPlay = !1);
        }),
        (AudioElement.prototype.resume = function () {
          this._canPlay = !0;
        }),
        (AudioElement.prototype.setRate = function (e) {
          this.audio.rate(e);
        }),
        (AudioElement.prototype.volume = function (e) {
          (this._volumeMultiplier = e),
            (this._previousVolume = e * this._volume),
            this.audio.volume(this._previousVolume);
        }),
        (AudioElement.prototype.getBaseElement = function () {
          return null;
        }),
        (AudioElement.prototype.destroy = function () {}),
        (AudioElement.prototype.sourceRectAtTime = function () {}),
        (AudioElement.prototype.initExpressions = function () {});
      function BaseRenderer() {}
      (BaseRenderer.prototype.checkLayers = function (e) {
        var t,
          r = this.layers.length,
          s;
        for (this.completeLayers = !0, t = r - 1; t >= 0; t -= 1)
          this.elements[t] ||
            ((s = this.layers[t]),
            s.ip - s.st <= e - this.layers[t].st &&
              s.op - s.st > e - this.layers[t].st &&
              this.buildItem(t)),
            (this.completeLayers = this.elements[t] ? this.completeLayers : !1);
        this.checkPendingElements();
      }),
        (BaseRenderer.prototype.createItem = function (e) {
          switch (e.ty) {
            case 2:
              return this.createImage(e);
            case 0:
              return this.createComp(e);
            case 1:
              return this.createSolid(e);
            case 3:
              return this.createNull(e);
            case 4:
              return this.createShape(e);
            case 5:
              return this.createText(e);
            case 6:
              return this.createAudio(e);
            case 13:
              return this.createCamera(e);
            case 15:
              return this.createFootage(e);
            default:
              return this.createNull(e);
          }
        }),
        (BaseRenderer.prototype.createCamera = function () {
          throw new Error("You're using a 3d camera. Try the html renderer.");
        }),
        (BaseRenderer.prototype.createAudio = function (e) {
          return new AudioElement(e, this.globalData, this);
        }),
        (BaseRenderer.prototype.createFootage = function (e) {
          return new FootageElement(e, this.globalData, this);
        }),
        (BaseRenderer.prototype.buildAllItems = function () {
          var e,
            t = this.layers.length;
          for (e = 0; e < t; e += 1) this.buildItem(e);
          this.checkPendingElements();
        }),
        (BaseRenderer.prototype.includeLayers = function (e) {
          this.completeLayers = !1;
          var t,
            r = e.length,
            s,
            a = this.layers.length;
          for (t = 0; t < r; t += 1)
            for (s = 0; s < a; ) {
              if (this.layers[s].id === e[t].id) {
                this.layers[s] = e[t];
                break;
              }
              s += 1;
            }
        }),
        (BaseRenderer.prototype.setProjectInterface = function (e) {
          this.globalData.projectInterface = e;
        }),
        (BaseRenderer.prototype.initItems = function () {
          this.globalData.progressiveLoad || this.buildAllItems();
        }),
        (BaseRenderer.prototype.buildElementParenting = function (e, t, r) {
          for (
            var s = this.elements, a = this.layers, n = 0, o = a.length;
            n < o;

          )
            a[n].ind == t &&
              (!s[n] || s[n] === !0
                ? (this.buildItem(n), this.addPendingElement(e))
                : (r.push(s[n]),
                  s[n].setAsParent(),
                  a[n].parent !== void 0
                    ? this.buildElementParenting(e, a[n].parent, r)
                    : e.setHierarchy(r))),
              (n += 1);
        }),
        (BaseRenderer.prototype.addPendingElement = function (e) {
          this.pendingElements.push(e);
        }),
        (BaseRenderer.prototype.searchExtraCompositions = function (e) {
          var t,
            r = e.length;
          for (t = 0; t < r; t += 1)
            if (e[t].xt) {
              var s = this.createComp(e[t]);
              s.initExpressions(),
                this.globalData.projectInterface.registerComposition(s);
            }
        }),
        (BaseRenderer.prototype.getElementById = function (e) {
          var t,
            r = this.elements.length;
          for (t = 0; t < r; t += 1)
            if (this.elements[t].data.ind === e) return this.elements[t];
          return null;
        }),
        (BaseRenderer.prototype.getElementByPath = function (e) {
          var t = e.shift(),
            r;
          if (typeof t == "number") r = this.elements[t];
          else {
            var s,
              a = this.elements.length;
            for (s = 0; s < a; s += 1)
              if (this.elements[s].data.nm === t) {
                r = this.elements[s];
                break;
              }
          }
          return e.length === 0 ? r : r.getElementByPath(e);
        }),
        (BaseRenderer.prototype.setupGlobalData = function (e, t) {
          (this.globalData.fontManager = new FontManager()),
            (this.globalData.slotManager = slotFactory(e)),
            this.globalData.fontManager.addChars(e.chars),
            this.globalData.fontManager.addFonts(e.fonts, t),
            (this.globalData.getAssetData =
              this.animationItem.getAssetData.bind(this.animationItem)),
            (this.globalData.getAssetsPath =
              this.animationItem.getAssetsPath.bind(this.animationItem)),
            (this.globalData.imageLoader = this.animationItem.imagePreloader),
            (this.globalData.audioController =
              this.animationItem.audioController),
            (this.globalData.frameId = 0),
            (this.globalData.frameRate = e.fr),
            (this.globalData.nm = e.nm),
            (this.globalData.compSize = { w: e.w, h: e.h });
        });
      function TransformElement() {}
      TransformElement.prototype = {
        initTransform: function () {
          (this.finalTransform = {
            mProp: this.data.ks
              ? TransformPropertyFactory.getTransformProperty(
                  this,
                  this.data.ks,
                  this
                )
              : { o: 0 },
            _matimdf: !1,
            _opimdf: !1,
            mat: new Matrix(),
          }),
            this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
            this.data.ty;
        },
        renderTransform: function () {
          if (
            ((this.finalTransform._opimdf =
              this.finalTransform.mProp.o._imdf || this._isFirstFrame),
            (this.finalTransform._matimdf =
              this.finalTransform.mProp._imdf || this._isFirstFrame),
            this.hierarchy)
          ) {
            var t,
              r = this.finalTransform.mat,
              s = 0,
              a = this.hierarchy.length;
            if (!this.finalTransform._matimdf)
              for (; s < a; ) {
                if (this.hierarchy[s].finalTransform.mProp._imdf) {
                  this.finalTransform._matimdf = !0;
                  break;
                }
                s += 1;
              }
            if (this.finalTransform._matimdf)
              for (
                t = this.finalTransform.mProp.v.props,
                  r.cloneFromProps(t),
                  s = 0;
                s < a;
                s += 1
              )
                (t = this.hierarchy[s].finalTransform.mProp.v.props),
                  r.transform(
                    t[0],
                    t[1],
                    t[2],
                    t[3],
                    t[4],
                    t[5],
                    t[6],
                    t[7],
                    t[8],
                    t[9],
                    t[10],
                    t[11],
                    t[12],
                    t[13],
                    t[14],
                    t[15]
                  );
          }
        },
        globalToLocal: function (t) {
          var r = [];
          r.push(this.finalTransform);
          for (var s = !0, a = this.comp; s; )
            a.finalTransform
              ? (a.data.hasMask && r.splice(0, 0, a.finalTransform),
                (a = a.comp))
              : (s = !1);
          var n,
            o = r.length,
            f;
          for (n = 0; n < o; n += 1)
            (f = r[n].mat.applyToPointArray(0, 0, 0)),
              (t = [t[0] - f[0], t[1] - f[1], 0]);
          return t;
        },
        mHelper: new Matrix(),
      };
      function MaskElement(e, t, r) {
        (this.data = e),
          (this.element = t),
          (this.globalData = r),
          (this.storedData = []),
          (this.masksProperties = this.data.masksProperties || []),
          (this.maskElement = null);
        var s = this.globalData.defs,
          a,
          n = this.masksProperties ? this.masksProperties.length : 0;
        (this.viewData = createSizedArray(n)), (this.solidPath = "");
        var o,
          f = this.masksProperties,
          l = 0,
          p = [],
          b,
          P,
          u = createElementID(),
          _,
          x,
          g,
          A,
          d = "clipPath",
          y = "clip-path";
        for (a = 0; a < n; a += 1)
          if (
            (((f[a].mode !== "a" && f[a].mode !== "n") ||
              f[a].inv ||
              f[a].o.k !== 100 ||
              f[a].o.x) &&
              ((d = "mask"), (y = "mask")),
            (f[a].mode === "s" || f[a].mode === "i") && l === 0
              ? ((_ = createNS("rect")),
                _.setAttribute("fill", "#ffffff"),
                _.setAttribute("width", this.element.comp.data.w || 0),
                _.setAttribute("height", this.element.comp.data.h || 0),
                p.push(_))
              : (_ = null),
            (o = createNS("path")),
            f[a].mode === "n")
          )
            (this.viewData[a] = {
              op: PropertyFactory.getProp(
                this.element,
                f[a].o,
                0,
                0.01,
                this.element
              ),
              prop: ShapePropertyFactory.getShapeProp(this.element, f[a], 3),
              elem: o,
              lastPath: "",
            }),
              s.appendChild(o);
          else {
            (l += 1),
              o.setAttribute("fill", f[a].mode === "s" ? "#000000" : "#ffffff"),
              o.setAttribute("clip-rule", "nonzero");
            var c;
            if (
              (f[a].x.k !== 0
                ? ((d = "mask"),
                  (y = "mask"),
                  (A = PropertyFactory.getProp(
                    this.element,
                    f[a].x,
                    0,
                    null,
                    this.element
                  )),
                  (c = createElementID()),
                  (x = createNS("filter")),
                  x.setAttribute("id", c),
                  (g = createNS("feMorphology")),
                  g.setAttribute("operator", "erode"),
                  g.setAttribute("in", "SourceGraphic"),
                  g.setAttribute("radius", "0"),
                  x.appendChild(g),
                  s.appendChild(x),
                  o.setAttribute(
                    "stroke",
                    f[a].mode === "s" ? "#000000" : "#ffffff"
                  ))
                : ((g = null), (A = null)),
              (this.storedData[a] = {
                elem: o,
                x: A,
                expan: g,
                lastPath: "",
                lastOperator: "",
                filterId: c,
                lastRadius: 0,
              }),
              f[a].mode === "i")
            ) {
              P = p.length;
              var m = createNS("g");
              for (b = 0; b < P; b += 1) m.appendChild(p[b]);
              var E = createNS("mask");
              E.setAttribute("mask-type", "alpha"),
                E.setAttribute("id", u + "_" + l),
                E.appendChild(o),
                s.appendChild(E),
                m.setAttribute(
                  "mask",
                  "url(" + getLocationHref() + "#" + u + "_" + l + ")"
                ),
                (p.length = 0),
                p.push(m);
            } else p.push(o);
            f[a].inv &&
              !this.solidPath &&
              (this.solidPath = this.createLayerSolidPath()),
              (this.viewData[a] = {
                elem: o,
                lastPath: "",
                op: PropertyFactory.getProp(
                  this.element,
                  f[a].o,
                  0,
                  0.01,
                  this.element
                ),
                prop: ShapePropertyFactory.getShapeProp(this.element, f[a], 3),
                invRect: _,
              }),
              this.viewData[a].prop.k ||
                this.drawPath(f[a], this.viewData[a].prop.v, this.viewData[a]);
          }
        for (this.maskElement = createNS(d), n = p.length, a = 0; a < n; a += 1)
          this.maskElement.appendChild(p[a]);
        l > 0 &&
          (this.maskElement.setAttribute("id", u),
          this.element.maskedElement.setAttribute(
            y,
            "url(" + getLocationHref() + "#" + u + ")"
          ),
          s.appendChild(this.maskElement)),
          this.viewData.length && this.element.addRenderableComponent(this);
      }
      (MaskElement.prototype.getMaskProperty = function (e) {
        return this.viewData[e].prop;
      }),
        (MaskElement.prototype.renderFrame = function (e) {
          var t = this.element.finalTransform.mat,
            r,
            s = this.masksProperties.length;
          for (r = 0; r < s; r += 1)
            if (
              ((this.viewData[r].prop._imdf || e) &&
                this.drawPath(
                  this.masksProperties[r],
                  this.viewData[r].prop.v,
                  this.viewData[r]
                ),
              (this.viewData[r].op._imdf || e) &&
                this.viewData[r].elem.setAttribute(
                  "fill-opacity",
                  this.viewData[r].op.v
                ),
              this.masksProperties[r].mode !== "n" &&
                (this.viewData[r].invRect &&
                  (this.element.finalTransform.mProp._imdf || e) &&
                  this.viewData[r].invRect.setAttribute(
                    "transform",
                    t.getInverseMatrix().to2dCSS()
                  ),
                this.storedData[r].x && (this.storedData[r].x._imdf || e)))
            ) {
              var a = this.storedData[r].expan;
              this.storedData[r].x.v < 0
                ? (this.storedData[r].lastOperator !== "erode" &&
                    ((this.storedData[r].lastOperator = "erode"),
                    this.storedData[r].elem.setAttribute(
                      "filter",
                      "url(" +
                        getLocationHref() +
                        "#" +
                        this.storedData[r].filterId +
                        ")"
                    )),
                  a.setAttribute("radius", -this.storedData[r].x.v))
                : (this.storedData[r].lastOperator !== "dilate" &&
                    ((this.storedData[r].lastOperator = "dilate"),
                    this.storedData[r].elem.setAttribute("filter", null)),
                  this.storedData[r].elem.setAttribute(
                    "stroke-width",
                    this.storedData[r].x.v * 2
                  ));
            }
        }),
        (MaskElement.prototype.getMaskelement = function () {
          return this.maskElement;
        }),
        (MaskElement.prototype.createLayerSolidPath = function () {
          var e = "M0,0 ";
          return (
            (e += " h" + this.globalData.compSize.w),
            (e += " v" + this.globalData.compSize.h),
            (e += " h-" + this.globalData.compSize.w),
            (e += " v-" + this.globalData.compSize.h + " "),
            e
          );
        }),
        (MaskElement.prototype.drawPath = function (e, t, r) {
          var s = " M" + t.v[0][0] + "," + t.v[0][1],
            a,
            n;
          for (n = t._length, a = 1; a < n; a += 1)
            s +=
              " C" +
              t.o[a - 1][0] +
              "," +
              t.o[a - 1][1] +
              " " +
              t.i[a][0] +
              "," +
              t.i[a][1] +
              " " +
              t.v[a][0] +
              "," +
              t.v[a][1];
          if (
            (t.c &&
              n > 1 &&
              (s +=
                " C" +
                t.o[a - 1][0] +
                "," +
                t.o[a - 1][1] +
                " " +
                t.i[0][0] +
                "," +
                t.i[0][1] +
                " " +
                t.v[0][0] +
                "," +
                t.v[0][1]),
            r.lastPath !== s)
          ) {
            var o = "";
            r.elem &&
              (t.c && (o = e.inv ? this.solidPath + s : s),
              r.elem.setAttribute("d", o)),
              (r.lastPath = s);
          }
        }),
        (MaskElement.prototype.destroy = function () {
          (this.element = null),
            (this.globalData = null),
            (this.maskElement = null),
            (this.data = null),
            (this.masksProperties = null);
        });
      var filtersFactory = (function () {
          var e = {};
          (e.createFilter = t), (e.createAlphaToLuminanceFilter = r);
          function t(s, a) {
            var n = createNS("filter");
            return (
              n.setAttribute("id", s),
              a !== !0 &&
                (n.setAttribute("filterUnits", "objectBoundingBox"),
                n.setAttribute("x", "0%"),
                n.setAttribute("y", "0%"),
                n.setAttribute("width", "100%"),
                n.setAttribute("height", "100%")),
              n
            );
          }
          function r() {
            var s = createNS("feColorMatrix");
            return (
              s.setAttribute("type", "matrix"),
              s.setAttribute("color-interpolation-filters", "sRGB"),
              s.setAttribute(
                "values",
                "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"
              ),
              s
            );
          }
          return e;
        })(),
        featureSupport = (function () {
          var e = {
            maskType: !0,
            svgLumaHidden: !0,
            offscreenCanvas: typeof OffscreenCanvas < "u",
          };
          return (
            (/MSIE 10/i.test(navigator.userAgent) ||
              /MSIE 9/i.test(navigator.userAgent) ||
              /rv:11.0/i.test(navigator.userAgent) ||
              /Edge\/\d./i.test(navigator.userAgent)) &&
              (e.maskType = !1),
            /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1),
            e
          );
        })(),
        registeredEffects = {},
        idPrefix = "filter_result_";
      function SVGEffects(e) {
        var t,
          r = "SourceGraphic",
          s = e.data.ef ? e.data.ef.length : 0,
          a = createElementID(),
          n = filtersFactory.createFilter(a, !0),
          o = 0;
        this.filters = [];
        var f;
        for (t = 0; t < s; t += 1) {
          f = null;
          var l = e.data.ef[t].ty;
          if (registeredEffects[l]) {
            var p = registeredEffects[l].effect;
            (f = new p(
              n,
              e.effectsManager.effectElements[t],
              e,
              idPrefix + o,
              r
            )),
              (r = idPrefix + o),
              registeredEffects[l].countsAsEffect && (o += 1);
          }
          f && this.filters.push(f);
        }
        o &&
          (e.globalData.defs.appendChild(n),
          e.layerElement.setAttribute(
            "filter",
            "url(" + getLocationHref() + "#" + a + ")"
          )),
          this.filters.length && e.addRenderableComponent(this);
      }
      SVGEffects.prototype.renderFrame = function (e) {
        var t,
          r = this.filters.length;
        for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e);
      };
      function registerEffect(e, t, r) {
        registeredEffects[e] = { effect: t, countsAsEffect: r };
      }
      function SVGBaseElement() {}
      SVGBaseElement.prototype = {
        initRendererElement: function () {
          this.layerElement = createNS("g");
        },
        createContainerElements: function () {
          (this.matteElement = createNS("g")),
            (this.transformedElement = this.layerElement),
            (this.maskedElement = this.layerElement),
            (this._sizeChanged = !1);
          var t = null;
          if (this.data.td) {
            this.matteMasks = {};
            var r = createNS("g");
            r.setAttribute("id", this.layerId),
              r.appendChild(this.layerElement),
              (t = r),
              this.globalData.defs.appendChild(r);
          } else
            this.data.tt
              ? (this.matteElement.appendChild(this.layerElement),
                (t = this.matteElement),
                (this.baseElement = this.matteElement))
              : (this.baseElement = this.layerElement);
          if (
            (this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
            this.data.cl &&
              this.layerElement.setAttribute("class", this.data.cl),
            this.data.ty === 0 && !this.data.hd)
          ) {
            var s = createNS("clipPath"),
              a = createNS("path");
            a.setAttribute(
              "d",
              "M0,0 L" +
                this.data.w +
                ",0 L" +
                this.data.w +
                "," +
                this.data.h +
                " L0," +
                this.data.h +
                "z"
            );
            var n = createElementID();
            if (
              (s.setAttribute("id", n),
              s.appendChild(a),
              this.globalData.defs.appendChild(s),
              this.checkMasks())
            ) {
              var o = createNS("g");
              o.setAttribute(
                "clip-path",
                "url(" + getLocationHref() + "#" + n + ")"
              ),
                o.appendChild(this.layerElement),
                (this.transformedElement = o),
                t
                  ? t.appendChild(this.transformedElement)
                  : (this.baseElement = this.transformedElement);
            } else
              this.layerElement.setAttribute(
                "clip-path",
                "url(" + getLocationHref() + "#" + n + ")"
              );
          }
          this.data.bm !== 0 && this.setBlendMode();
        },
        renderElement: function () {
          this.finalTransform._matimdf &&
            this.transformedElement.setAttribute(
              "transform",
              this.finalTransform.mat.to2dCSS()
            ),
            this.finalTransform._opimdf &&
              this.transformedElement.setAttribute(
                "opacity",
                this.finalTransform.mProp.o.v
              );
        },
        destroyBaseElement: function () {
          (this.layerElement = null),
            (this.matteElement = null),
            this.maskManager.destroy();
        },
        getBaseElement: function () {
          return this.data.hd ? null : this.baseElement;
        },
        createRenderableComponents: function () {
          (this.maskManager = new MaskElement(
            this.data,
            this,
            this.globalData
          )),
            (this.renderableEffectsManager = new SVGEffects(this));
        },
        getMatte: function (t) {
          if (
            (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t])
          ) {
            var r = this.layerId + "_" + t,
              s,
              a,
              n,
              o;
            if (t === 1 || t === 3) {
              var f = createNS("mask");
              f.setAttribute("id", r),
                f.setAttribute("mask-type", t === 3 ? "luminance" : "alpha"),
                (n = createNS("use")),
                n.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "href",
                  "#" + this.layerId
                ),
                f.appendChild(n),
                this.globalData.defs.appendChild(f),
                !featureSupport.maskType &&
                  t === 1 &&
                  (f.setAttribute("mask-type", "luminance"),
                  (s = createElementID()),
                  (a = filtersFactory.createFilter(s)),
                  this.globalData.defs.appendChild(a),
                  a.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                  (o = createNS("g")),
                  o.appendChild(n),
                  f.appendChild(o),
                  o.setAttribute(
                    "filter",
                    "url(" + getLocationHref() + "#" + s + ")"
                  ));
            } else if (t === 2) {
              var l = createNS("mask");
              l.setAttribute("id", r), l.setAttribute("mask-type", "alpha");
              var p = createNS("g");
              l.appendChild(p),
                (s = createElementID()),
                (a = filtersFactory.createFilter(s));
              var b = createNS("feComponentTransfer");
              b.setAttribute("in", "SourceGraphic"), a.appendChild(b);
              var P = createNS("feFuncA");
              P.setAttribute("type", "table"),
                P.setAttribute("tableValues", "1.0 0.0"),
                b.appendChild(P),
                this.globalData.defs.appendChild(a);
              var u = createNS("rect");
              u.setAttribute("width", this.comp.data.w),
                u.setAttribute("height", this.comp.data.h),
                u.setAttribute("x", "0"),
                u.setAttribute("y", "0"),
                u.setAttribute("fill", "#ffffff"),
                u.setAttribute("opacity", "0"),
                p.setAttribute(
                  "filter",
                  "url(" + getLocationHref() + "#" + s + ")"
                ),
                p.appendChild(u),
                (n = createNS("use")),
                n.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "href",
                  "#" + this.layerId
                ),
                p.appendChild(n),
                featureSupport.maskType ||
                  (l.setAttribute("mask-type", "luminance"),
                  a.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                  (o = createNS("g")),
                  p.appendChild(u),
                  o.appendChild(this.layerElement),
                  p.appendChild(o)),
                this.globalData.defs.appendChild(l);
            }
            this.matteMasks[t] = r;
          }
          return this.matteMasks[t];
        },
        setMatte: function (t) {
          this.matteElement &&
            this.matteElement.setAttribute(
              "mask",
              "url(" + getLocationHref() + "#" + t + ")"
            );
        },
      };
      function HierarchyElement() {}
      HierarchyElement.prototype = {
        initHierarchy: function () {
          (this.hierarchy = []), (this._isParent = !1), this.checkParenting();
        },
        setHierarchy: function (t) {
          this.hierarchy = t;
        },
        setAsParent: function () {
          this._isParent = !0;
        },
        checkParenting: function () {
          this.data.parent !== void 0 &&
            this.comp.buildElementParenting(this, this.data.parent, []);
        },
      };
      function RenderableDOMElement() {}
      (function () {
        var e = {
          initElement: function (r, s, a) {
            this.initFrame(),
              this.initBaseData(r, s, a),
              this.initTransform(r, s, a),
              this.initHierarchy(),
              this.initRenderable(),
              this.initRendererElement(),
              this.createContainerElements(),
              this.createRenderableComponents(),
              this.createContent(),
              this.hide();
          },
          hide: function () {
            if (!this.hidden && (!this.isInRange || this.isTransparent)) {
              var r = this.baseElement || this.layerElement;
              (r.style.display = "none"), (this.hidden = !0);
            }
          },
          show: function () {
            if (this.isInRange && !this.isTransparent) {
              if (!this.data.hd) {
                var r = this.baseElement || this.layerElement;
                r.style.display = "block";
              }
              (this.hidden = !1), (this._isFirstFrame = !0);
            }
          },
          renderFrame: function () {
            this.data.hd ||
              this.hidden ||
              (this.renderTransform(),
              this.renderRenderable(),
              this.renderElement(),
              this.renderInnerContent(),
              this._isFirstFrame && (this._isFirstFrame = !1));
          },
          renderInnerContent: function () {},
          prepareFrame: function (r) {
            (this._imdf = !1),
              this.prepareRenderableFrame(r),
              this.prepareProperties(r, this.isInRange),
              this.checkTransparency();
          },
          destroy: function () {
            (this.innerElem = null), this.destroyBaseElement();
          },
        };
        extendPrototype(
          [RenderableElement, createProxyFunction(e)],
          RenderableDOMElement
        );
      })();
      function IImageElement(e, t, r) {
        (this.assetData = t.getAssetData(e.refId)),
          this.assetData &&
            this.assetData.sid &&
            (this.assetData = t.slotManager.getProp(this.assetData)),
          this.initElement(e, t, r),
          (this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h,
          });
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          SVGBaseElement,
          HierarchyElement,
          FrameElement,
          RenderableDOMElement,
        ],
        IImageElement
      ),
        (IImageElement.prototype.createContent = function () {
          var e = this.globalData.getAssetsPath(this.assetData);
          (this.innerElem = createNS("image")),
            this.innerElem.setAttribute("width", this.assetData.w + "px"),
            this.innerElem.setAttribute("height", this.assetData.h + "px"),
            this.innerElem.setAttribute(
              "preserveAspectRatio",
              this.assetData.pr ||
                this.globalData.renderConfig.imagePreserveAspectRatio
            ),
            this.innerElem.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "href",
              e
            ),
            this.layerElement.appendChild(this.innerElem);
        }),
        (IImageElement.prototype.sourceRectAtTime = function () {
          return this.sourceRect;
        });
      function ProcessedElement(e, t) {
        (this.elem = e), (this.pos = t);
      }
      function IShapeElement() {}
      IShapeElement.prototype = {
        addShapeToModifiers: function (t) {
          var r,
            s = this.shapeModifiers.length;
          for (r = 0; r < s; r += 1) this.shapeModifiers[r].addShape(t);
        },
        isShapeInAnimatedModifiers: function (t) {
          for (var r = 0, s = this.shapeModifiers.length; r < s; )
            if (this.shapeModifiers[r].isAnimatedWithShape(t)) return !0;
          return !1;
        },
        renderModifiers: function () {
          if (this.shapeModifiers.length) {
            var t,
              r = this.shapes.length;
            for (t = 0; t < r; t += 1) this.shapes[t].sh.reset();
            r = this.shapeModifiers.length;
            var s;
            for (
              t = r - 1;
              t >= 0 &&
              ((s = this.shapeModifiers[t].processShapes(this._isFirstFrame)),
              !s);
              t -= 1
            );
          }
        },
        searchProcessedElement: function (t) {
          for (var r = this.processedElements, s = 0, a = r.length; s < a; ) {
            if (r[s].elem === t) return r[s].pos;
            s += 1;
          }
          return 0;
        },
        addProcessedElement: function (t, r) {
          for (var s = this.processedElements, a = s.length; a; )
            if (((a -= 1), s[a].elem === t)) {
              s[a].pos = r;
              return;
            }
          s.push(new ProcessedElement(t, r));
        },
        prepareFrame: function (t) {
          this.prepareRenderableFrame(t),
            this.prepareProperties(t, this.isInRange);
        },
      };
      var lineCapEnum = { 1: "butt", 2: "round", 3: "square" },
        lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" };
      function SVGShapeData(e, t, r) {
        (this.caches = []),
          (this.styles = []),
          (this.transformers = e),
          (this.lStr = ""),
          (this.sh = r),
          (this.lvl = t),
          (this._isAnimated = !!r.k);
        for (var s = 0, a = e.length; s < a; ) {
          if (e[s].mProps.dynamicProperties.length) {
            this._isAnimated = !0;
            break;
          }
          s += 1;
        }
      }
      SVGShapeData.prototype.setAsAnimated = function () {
        this._isAnimated = !0;
      };
      function SVGStyleData(e, t) {
        (this.data = e),
          (this.type = e.ty),
          (this.d = ""),
          (this.lvl = t),
          (this._imdf = !1),
          (this.closed = e.hd === !0),
          (this.pElem = createNS("path")),
          (this.msElem = null);
      }
      SVGStyleData.prototype.reset = function () {
        (this.d = ""), (this._imdf = !1);
      };
      function DashProperty(e, t, r, s) {
        (this.elem = e),
          (this.frameId = -1),
          (this.dataProps = createSizedArray(t.length)),
          (this.renderer = r),
          (this.k = !1),
          (this.dashStr = ""),
          (this.dashArray = createTypedArray(
            "float32",
            t.length ? t.length - 1 : 0
          )),
          (this.dashoffset = createTypedArray("float32", 1)),
          this.initDynamicPropertyContainer(s);
        var a,
          n = t.length || 0,
          o;
        for (a = 0; a < n; a += 1)
          (o = PropertyFactory.getProp(e, t[a].v, 0, 0, this)),
            (this.k = o.k || this.k),
            (this.dataProps[a] = { n: t[a].n, p: o });
        this.k || this.getValue(!0), (this._isAnimated = this.k);
      }
      (DashProperty.prototype.getValue = function (e) {
        if (
          !(this.elem.globalData.frameId === this.frameId && !e) &&
          ((this.frameId = this.elem.globalData.frameId),
          this.iterateDynamicProperties(),
          (this._imdf = this._imdf || e),
          this._imdf)
        ) {
          var t = 0,
            r = this.dataProps.length;
          for (
            this.renderer === "svg" && (this.dashStr = ""), t = 0;
            t < r;
            t += 1
          )
            this.dataProps[t].n !== "o"
              ? this.renderer === "svg"
                ? (this.dashStr += " " + this.dataProps[t].p.v)
                : (this.dashArray[t] = this.dataProps[t].p.v)
              : (this.dashoffset[0] = this.dataProps[t].p.v);
        }
      }),
        extendPrototype([DynamicPropertyContainer], DashProperty);
      function SVGStrokeStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e),
          (this.getValue = this.iterateDynamicProperties),
          (this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this)),
          (this.w = PropertyFactory.getProp(e, t.w, 0, null, this)),
          (this.d = new DashProperty(e, t.d || {}, "svg", this)),
          (this.c = PropertyFactory.getProp(e, t.c, 1, 255, this)),
          (this.style = r),
          (this._isAnimated = !!this._isAnimated);
      }
      extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);
      function SVGFillStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e),
          (this.getValue = this.iterateDynamicProperties),
          (this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this)),
          (this.c = PropertyFactory.getProp(e, t.c, 1, 255, this)),
          (this.style = r);
      }
      extendPrototype([DynamicPropertyContainer], SVGFillStyleData);
      function SVGNoStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e),
          (this.getValue = this.iterateDynamicProperties),
          (this.style = r);
      }
      extendPrototype([DynamicPropertyContainer], SVGNoStyleData);
      function GradientProperty(e, t, r) {
        (this.data = t), (this.c = createTypedArray("uint8c", t.p * 4));
        var s = t.k.k[0].s
          ? t.k.k[0].s.length - t.p * 4
          : t.k.k.length - t.p * 4;
        (this.o = createTypedArray("float32", s)),
          (this._cimdf = !1),
          (this._oimdf = !1),
          (this._collapsable = this.checkCollapsable()),
          (this._hasOpacity = s),
          this.initDynamicPropertyContainer(r),
          (this.prop = PropertyFactory.getProp(e, t.k, 1, null, this)),
          (this.k = this.prop.k),
          this.getValue(!0);
      }
      (GradientProperty.prototype.comparePoints = function (e, t) {
        for (var r = 0, s = this.o.length / 2, a; r < s; ) {
          if (((a = Math.abs(e[r * 4] - e[t * 4 + r * 2])), a > 0.01))
            return !1;
          r += 1;
        }
        return !0;
      }),
        (GradientProperty.prototype.checkCollapsable = function () {
          if (this.o.length / 2 !== this.c.length / 4) return !1;
          if (this.data.k.k[0].s)
            for (var e = 0, t = this.data.k.k.length; e < t; ) {
              if (!this.comparePoints(this.data.k.k[e].s, this.data.p))
                return !1;
              e += 1;
            }
          else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
          return !0;
        }),
        (GradientProperty.prototype.getValue = function (e) {
          if (
            (this.prop.getValue(),
            (this._imdf = !1),
            (this._cimdf = !1),
            (this._oimdf = !1),
            this.prop._imdf || e)
          ) {
            var t,
              r = this.data.p * 4,
              s,
              a;
            for (t = 0; t < r; t += 1)
              (s = t % 4 === 0 ? 100 : 255),
                (a = Math.round(this.prop.v[t] * s)),
                this.c[t] !== a && ((this.c[t] = a), (this._cimdf = !e));
            if (this.o.length)
              for (r = this.prop.v.length, t = this.data.p * 4; t < r; t += 1)
                (s = t % 2 === 0 ? 100 : 1),
                  (a =
                    t % 2 === 0
                      ? Math.round(this.prop.v[t] * 100)
                      : this.prop.v[t]),
                  this.o[t - this.data.p * 4] !== a &&
                    ((this.o[t - this.data.p * 4] = a), (this._oimdf = !e));
            this._imdf = !e;
          }
        }),
        extendPrototype([DynamicPropertyContainer], GradientProperty);
      function SVGGradientFillStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e),
          (this.getValue = this.iterateDynamicProperties),
          this.initGradientData(e, t, r);
      }
      (SVGGradientFillStyleData.prototype.initGradientData = function (
        e,
        t,
        r
      ) {
        (this.o = PropertyFactory.getProp(e, t.o, 0, 0.01, this)),
          (this.s = PropertyFactory.getProp(e, t.s, 1, null, this)),
          (this.e = PropertyFactory.getProp(e, t.e, 1, null, this)),
          (this.h = PropertyFactory.getProp(e, t.h || { k: 0 }, 0, 0.01, this)),
          (this.a = PropertyFactory.getProp(
            e,
            t.a || { k: 0 },
            0,
            degToRads,
            this
          )),
          (this.g = new GradientProperty(e, t.g, this)),
          (this.style = r),
          (this.stops = []),
          this.setGradientData(r.pElem, t),
          this.setGradientOpacity(t, r),
          (this._isAnimated = !!this._isAnimated);
      }),
        (SVGGradientFillStyleData.prototype.setGradientData = function (e, t) {
          var r = createElementID(),
            s = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
          s.setAttribute("id", r),
            s.setAttribute("spreadMethod", "pad"),
            s.setAttribute("gradientUnits", "userSpaceOnUse");
          var a = [],
            n,
            o,
            f;
          for (f = t.g.p * 4, o = 0; o < f; o += 4)
            (n = createNS("stop")), s.appendChild(n), a.push(n);
          e.setAttribute(
            t.ty === "gf" ? "fill" : "stroke",
            "url(" + getLocationHref() + "#" + r + ")"
          ),
            (this.gf = s),
            (this.cst = a);
        }),
        (SVGGradientFillStyleData.prototype.setGradientOpacity = function (
          e,
          t
        ) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var r,
              s,
              a,
              n = createNS("mask"),
              o = createNS("path");
            n.appendChild(o);
            var f = createElementID(),
              l = createElementID();
            n.setAttribute("id", l);
            var p = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
            p.setAttribute("id", f),
              p.setAttribute("spreadMethod", "pad"),
              p.setAttribute("gradientUnits", "userSpaceOnUse"),
              (a = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length);
            var b = this.stops;
            for (s = e.g.p * 4; s < a; s += 2)
              (r = createNS("stop")),
                r.setAttribute("stop-color", "rgb(255,255,255)"),
                p.appendChild(r),
                b.push(r);
            o.setAttribute(
              e.ty === "gf" ? "fill" : "stroke",
              "url(" + getLocationHref() + "#" + f + ")"
            ),
              e.ty === "gs" &&
                (o.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]),
                o.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]),
                e.lj === 1 && o.setAttribute("stroke-miterlimit", e.ml)),
              (this.of = p),
              (this.ms = n),
              (this.ost = b),
              (this.maskId = l),
              (t.msElem = o);
          }
        }),
        extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);
      function SVGGradientStrokeStyleData(e, t, r) {
        this.initDynamicPropertyContainer(e),
          (this.getValue = this.iterateDynamicProperties),
          (this.w = PropertyFactory.getProp(e, t.w, 0, null, this)),
          (this.d = new DashProperty(e, t.d || {}, "svg", this)),
          this.initGradientData(e, t, r),
          (this._isAnimated = !!this._isAnimated);
      }
      extendPrototype(
        [SVGGradientFillStyleData, DynamicPropertyContainer],
        SVGGradientStrokeStyleData
      );
      function ShapeGroupData() {
        (this.it = []), (this.prevViewData = []), (this.gr = createNS("g"));
      }
      function SVGTransforimdata(e, t, r) {
        (this.transform = { mProps: e, op: t, container: r }),
          (this.elements = []),
          (this._isAnimated =
            this.transform.mProps.dynamicProperties.length ||
            this.transform.op.effectsSequence.length);
      }
      var buildShapeString = function (t, r, s, a) {
          if (r === 0) return "";
          var n = t.o,
            o = t.i,
            f = t.v,
            l,
            p = " M" + a.applyToPointStringified(f[0][0], f[0][1]);
          for (l = 1; l < r; l += 1)
            p +=
              " C" +
              a.applyToPointStringified(n[l - 1][0], n[l - 1][1]) +
              " " +
              a.applyToPointStringified(o[l][0], o[l][1]) +
              " " +
              a.applyToPointStringified(f[l][0], f[l][1]);
          return (
            s &&
              r &&
              ((p +=
                " C" +
                a.applyToPointStringified(n[l - 1][0], n[l - 1][1]) +
                " " +
                a.applyToPointStringified(o[0][0], o[0][1]) +
                " " +
                a.applyToPointStringified(f[0][0], f[0][1])),
              (p += "z")),
            p
          );
        },
        SVGElementsRenderer = (function () {
          var e = new Matrix(),
            t = new Matrix(),
            r = { createRenderFunction: s };
          function s(P) {
            switch (P.ty) {
              case "fl":
                return f;
              case "gf":
                return p;
              case "gs":
                return l;
              case "st":
                return b;
              case "sh":
              case "el":
              case "rc":
              case "sr":
                return o;
              case "tr":
                return a;
              case "no":
                return n;
              default:
                return null;
            }
          }
          function a(P, u, _) {
            (_ || u.transform.op._imdf) &&
              u.transform.container.setAttribute("opacity", u.transform.op.v),
              (_ || u.transform.mProps._imdf) &&
                u.transform.container.setAttribute(
                  "transform",
                  u.transform.mProps.v.to2dCSS()
                );
          }
          function n() {}
          function o(P, u, _) {
            var x,
              g,
              A,
              d,
              y,
              c,
              m = u.styles.length,
              E = u.lvl,
              S,
              T,
              F,
              O,
              G;
            for (c = 0; c < m; c += 1) {
              if (((d = u.sh._imdf || _), u.styles[c].lvl < E)) {
                for (
                  T = t.reset(),
                    O = E - u.styles[c].lvl,
                    G = u.transformers.length - 1;
                  !d && O > 0;

                )
                  (d = u.transformers[G].mProps._imdf || d), (O -= 1), (G -= 1);
                if (d)
                  for (
                    O = E - u.styles[c].lvl, G = u.transformers.length - 1;
                    O > 0;

                  )
                    (F = u.transformers[G].mProps.v.props),
                      T.transform(
                        F[0],
                        F[1],
                        F[2],
                        F[3],
                        F[4],
                        F[5],
                        F[6],
                        F[7],
                        F[8],
                        F[9],
                        F[10],
                        F[11],
                        F[12],
                        F[13],
                        F[14],
                        F[15]
                      ),
                      (O -= 1),
                      (G -= 1);
              } else T = e;
              if (((S = u.sh.paths), (g = S._length), d)) {
                for (A = "", x = 0; x < g; x += 1)
                  (y = S.shapes[x]),
                    y &&
                      y._length &&
                      (A += buildShapeString(y, y._length, y.c, T));
                u.caches[c] = A;
              } else A = u.caches[c];
              (u.styles[c].d += P.hd === !0 ? "" : A),
                (u.styles[c]._imdf = d || u.styles[c]._imdf);
            }
          }
          function f(P, u, _) {
            var x = u.style;
            (u.c._imdf || _) &&
              x.pElem.setAttribute(
                "fill",
                "rgb(" +
                  bmFloor(u.c.v[0]) +
                  "," +
                  bmFloor(u.c.v[1]) +
                  "," +
                  bmFloor(u.c.v[2]) +
                  ")"
              ),
              (u.o._imdf || _) && x.pElem.setAttribute("fill-opacity", u.o.v);
          }
          function l(P, u, _) {
            p(P, u, _), b(P, u, _);
          }
          function p(P, u, _) {
            var x = u.gf,
              g = u.g._hasOpacity,
              A = u.s.v,
              d = u.e.v;
            if (u.o._imdf || _) {
              var y = P.ty === "gf" ? "fill-opacity" : "stroke-opacity";
              u.style.pElem.setAttribute(y, u.o.v);
            }
            if (u.s._imdf || _) {
              var c = P.t === 1 ? "x1" : "cx",
                m = c === "x1" ? "y1" : "cy";
              x.setAttribute(c, A[0]),
                x.setAttribute(m, A[1]),
                g &&
                  !u.g._collapsable &&
                  (u.of.setAttribute(c, A[0]), u.of.setAttribute(m, A[1]));
            }
            var E, S, T, F;
            if (u.g._cimdf || _) {
              E = u.cst;
              var O = u.g.c;
              for (T = E.length, S = 0; S < T; S += 1)
                (F = E[S]),
                  F.setAttribute("offset", O[S * 4] + "%"),
                  F.setAttribute(
                    "stop-color",
                    "rgb(" +
                      O[S * 4 + 1] +
                      "," +
                      O[S * 4 + 2] +
                      "," +
                      O[S * 4 + 3] +
                      ")"
                  );
            }
            if (g && (u.g._oimdf || _)) {
              var G = u.g.o;
              for (
                u.g._collapsable ? (E = u.cst) : (E = u.ost),
                  T = E.length,
                  S = 0;
                S < T;
                S += 1
              )
                (F = E[S]),
                  u.g._collapsable || F.setAttribute("offset", G[S * 2] + "%"),
                  F.setAttribute("stop-opacity", G[S * 2 + 1]);
            }
            if (P.t === 1)
              (u.e._imdf || _) &&
                (x.setAttribute("x2", d[0]),
                x.setAttribute("y2", d[1]),
                g &&
                  !u.g._collapsable &&
                  (u.of.setAttribute("x2", d[0]),
                  u.of.setAttribute("y2", d[1])));
            else {
              var $;
              if (
                ((u.s._imdf || u.e._imdf || _) &&
                  (($ = Math.sqrt(
                    Math.pow(A[0] - d[0], 2) + Math.pow(A[1] - d[1], 2)
                  )),
                  x.setAttribute("r", $),
                  g && !u.g._collapsable && u.of.setAttribute("r", $)),
                u.e._imdf || u.h._imdf || u.a._imdf || _)
              ) {
                $ ||
                  ($ = Math.sqrt(
                    Math.pow(A[0] - d[0], 2) + Math.pow(A[1] - d[1], 2)
                  ));
                var B = Math.atan2(d[1] - A[1], d[0] - A[0]),
                  z = u.h.v;
                z >= 1 ? (z = 0.99) : z <= -1 && (z = -0.99);
                var N = $ * z,
                  R = Math.cos(B + u.a.v) * N + A[0],
                  D = Math.sin(B + u.a.v) * N + A[1];
                x.setAttribute("fx", R),
                  x.setAttribute("fy", D),
                  g &&
                    !u.g._collapsable &&
                    (u.of.setAttribute("fx", R), u.of.setAttribute("fy", D));
              }
            }
          }
          function b(P, u, _) {
            var x = u.style,
              g = u.d;
            g &&
              (g._imdf || _) &&
              g.dashStr &&
              (x.pElem.setAttribute("stroke-dasharray", g.dashStr),
              x.pElem.setAttribute("stroke-dashoffset", g.dashoffset[0])),
              u.c &&
                (u.c._imdf || _) &&
                x.pElem.setAttribute(
                  "stroke",
                  "rgb(" +
                    bmFloor(u.c.v[0]) +
                    "," +
                    bmFloor(u.c.v[1]) +
                    "," +
                    bmFloor(u.c.v[2]) +
                    ")"
                ),
              (u.o._imdf || _) && x.pElem.setAttribute("stroke-opacity", u.o.v),
              (u.w._imdf || _) &&
                (x.pElem.setAttribute("stroke-width", u.w.v),
                x.msElem && x.msElem.setAttribute("stroke-width", u.w.v));
          }
          return r;
        })();
      function SVGShapeElement(e, t, r) {
        (this.shapes = []),
          (this.shapesData = e.shapes),
          (this.stylesList = []),
          (this.shapeModifiers = []),
          (this.itemsData = []),
          (this.processedElements = []),
          (this.animatedContents = []),
          this.initElement(e, t, r),
          (this.prevViewData = []);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          SVGBaseElement,
          IShapeElement,
          HierarchyElement,
          FrameElement,
          RenderableDOMElement,
        ],
        SVGShapeElement
      ),
        (SVGShapeElement.prototype.initSecondaryElement = function () {}),
        (SVGShapeElement.prototype.identityMatrix = new Matrix()),
        (SVGShapeElement.prototype.buildExpressionInterface = function () {}),
        (SVGShapeElement.prototype.createContent = function () {
          this.searchShapes(
            this.shapesData,
            this.itemsData,
            this.prevViewData,
            this.layerElement,
            0,
            [],
            !0
          ),
            this.filterUniqueShapes();
        }),
        (SVGShapeElement.prototype.filterUniqueShapes = function () {
          var e,
            t = this.shapes.length,
            r,
            s,
            a = this.stylesList.length,
            n,
            o = [],
            f = !1;
          for (s = 0; s < a; s += 1) {
            for (
              n = this.stylesList[s], f = !1, o.length = 0, e = 0;
              e < t;
              e += 1
            )
              (r = this.shapes[e]),
                r.styles.indexOf(n) !== -1 &&
                  (o.push(r), (f = r._isAnimated || f));
            o.length > 1 && f && this.setShapesAsAnimated(o);
          }
        }),
        (SVGShapeElement.prototype.setShapesAsAnimated = function (e) {
          var t,
            r = e.length;
          for (t = 0; t < r; t += 1) e[t].setAsAnimated();
        }),
        (SVGShapeElement.prototype.createStyleElement = function (e, t) {
          var r,
            s = new SVGStyleData(e, t),
            a = s.pElem;
          if (e.ty === "st") r = new SVGStrokeStyleData(this, e, s);
          else if (e.ty === "fl") r = new SVGFillStyleData(this, e, s);
          else if (e.ty === "gf" || e.ty === "gs") {
            var n =
              e.ty === "gf"
                ? SVGGradientFillStyleData
                : SVGGradientStrokeStyleData;
            (r = new n(this, e, s)),
              this.globalData.defs.appendChild(r.gf),
              r.maskId &&
                (this.globalData.defs.appendChild(r.ms),
                this.globalData.defs.appendChild(r.of),
                a.setAttribute(
                  "mask",
                  "url(" + getLocationHref() + "#" + r.maskId + ")"
                ));
          } else e.ty === "no" && (r = new SVGNoStyleData(this, e, s));
          return (
            (e.ty === "st" || e.ty === "gs") &&
              (a.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]),
              a.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]),
              a.setAttribute("fill-opacity", "0"),
              e.lj === 1 && a.setAttribute("stroke-miterlimit", e.ml)),
            e.r === 2 && a.setAttribute("fill-rule", "evenodd"),
            e.ln && a.setAttribute("id", e.ln),
            e.cl && a.setAttribute("class", e.cl),
            e.bm && (a.style["mix-blend-mode"] = getBlendMode(e.bm)),
            this.stylesList.push(s),
            this.addToAnimatedContents(e, r),
            r
          );
        }),
        (SVGShapeElement.prototype.createGroupElement = function (e) {
          var t = new ShapeGroupData();
          return (
            e.ln && t.gr.setAttribute("id", e.ln),
            e.cl && t.gr.setAttribute("class", e.cl),
            e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)),
            t
          );
        }),
        (SVGShapeElement.prototype.createTransformElement = function (e, t) {
          var r = TransformPropertyFactory.getTransformProperty(this, e, this),
            s = new SVGTransforimdata(r, r.o, t);
          return this.addToAnimatedContents(e, s), s;
        }),
        (SVGShapeElement.prototype.createShapeElement = function (e, t, r) {
          var s = 4;
          e.ty === "rc"
            ? (s = 5)
            : e.ty === "el"
            ? (s = 6)
            : e.ty === "sr" && (s = 7);
          var a = ShapePropertyFactory.getShapeProp(this, e, s, this),
            n = new SVGShapeData(t, r, a);
          return (
            this.shapes.push(n),
            this.addShapeToModifiers(n),
            this.addToAnimatedContents(e, n),
            n
          );
        }),
        (SVGShapeElement.prototype.addToAnimatedContents = function (e, t) {
          for (var r = 0, s = this.animatedContents.length; r < s; ) {
            if (this.animatedContents[r].element === t) return;
            r += 1;
          }
          this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(e),
            element: t,
            data: e,
          });
        }),
        (SVGShapeElement.prototype.setElementStyles = function (e) {
          var t = e.styles,
            r,
            s = this.stylesList.length;
          for (r = 0; r < s; r += 1)
            this.stylesList[r].closed || t.push(this.stylesList[r]);
        }),
        (SVGShapeElement.prototype.reloadShapes = function () {
          this._isFirstFrame = !0;
          var e,
            t = this.itemsData.length;
          for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
          for (
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              this.layerElement,
              0,
              [],
              !0
            ),
              this.filterUniqueShapes(),
              t = this.dynamicProperties.length,
              e = 0;
            e < t;
            e += 1
          )
            this.dynamicProperties[e].getValue();
          this.renderModifiers();
        }),
        (SVGShapeElement.prototype.searchShapes = function (
          e,
          t,
          r,
          s,
          a,
          n,
          o
        ) {
          var f = [].concat(n),
            l,
            p = e.length - 1,
            b,
            P,
            u = [],
            _ = [],
            x,
            g,
            A;
          for (l = p; l >= 0; l -= 1) {
            if (
              ((A = this.searchProcessedElement(e[l])),
              A ? (t[l] = r[A - 1]) : (e[l]._render = o),
              e[l].ty === "fl" ||
                e[l].ty === "st" ||
                e[l].ty === "gf" ||
                e[l].ty === "gs" ||
                e[l].ty === "no")
            )
              A
                ? (t[l].style.closed = !1)
                : (t[l] = this.createStyleElement(e[l], a)),
                e[l]._render &&
                  t[l].style.pElem.parentNode !== s &&
                  s.appendChild(t[l].style.pElem),
                u.push(t[l].style);
            else if (e[l].ty === "gr") {
              if (!A) t[l] = this.createGroupElement(e[l]);
              else
                for (P = t[l].it.length, b = 0; b < P; b += 1)
                  t[l].prevViewData[b] = t[l].it[b];
              this.searchShapes(
                e[l].it,
                t[l].it,
                t[l].prevViewData,
                t[l].gr,
                a + 1,
                f,
                o
              ),
                e[l]._render &&
                  t[l].gr.parentNode !== s &&
                  s.appendChild(t[l].gr);
            } else
              e[l].ty === "tr"
                ? (A || (t[l] = this.createTransformElement(e[l], s)),
                  (x = t[l].transform),
                  f.push(x))
                : e[l].ty === "sh" ||
                  e[l].ty === "rc" ||
                  e[l].ty === "el" ||
                  e[l].ty === "sr"
                ? (A || (t[l] = this.createShapeElement(e[l], f, a)),
                  this.setElementStyles(t[l]))
                : e[l].ty === "tm" ||
                  e[l].ty === "rd" ||
                  e[l].ty === "ms" ||
                  e[l].ty === "pb" ||
                  e[l].ty === "zz" ||
                  e[l].ty === "op"
                ? (A
                    ? ((g = t[l]), (g.closed = !1))
                    : ((g = ShapeModifiers.getModifier(e[l].ty)),
                      g.init(this, e[l]),
                      (t[l] = g),
                      this.shapeModifiers.push(g)),
                  _.push(g))
                : e[l].ty === "rp" &&
                  (A
                    ? ((g = t[l]), (g.closed = !0))
                    : ((g = ShapeModifiers.getModifier(e[l].ty)),
                      (t[l] = g),
                      g.init(this, e, l, t),
                      this.shapeModifiers.push(g),
                      (o = !1)),
                  _.push(g));
            this.addProcessedElement(e[l], l + 1);
          }
          for (p = u.length, l = 0; l < p; l += 1) u[l].closed = !0;
          for (p = _.length, l = 0; l < p; l += 1) _[l].closed = !0;
        }),
        (SVGShapeElement.prototype.renderInnerContent = function () {
          this.renderModifiers();
          var e,
            t = this.stylesList.length;
          for (e = 0; e < t; e += 1) this.stylesList[e].reset();
          for (this.renderShape(), e = 0; e < t; e += 1)
            (this.stylesList[e]._imdf || this._isFirstFrame) &&
              (this.stylesList[e].msElem &&
                (this.stylesList[e].msElem.setAttribute(
                  "d",
                  this.stylesList[e].d
                ),
                (this.stylesList[e].d = "M0 0" + this.stylesList[e].d)),
              this.stylesList[e].pElem.setAttribute(
                "d",
                this.stylesList[e].d || "M0 0"
              ));
        }),
        (SVGShapeElement.prototype.renderShape = function () {
          var e,
            t = this.animatedContents.length,
            r;
          for (e = 0; e < t; e += 1)
            (r = this.animatedContents[e]),
              (this._isFirstFrame || r.element._isAnimated) &&
                r.data !== !0 &&
                r.fn(r.data, r.element, this._isFirstFrame);
        }),
        (SVGShapeElement.prototype.destroy = function () {
          this.destroyBaseElement(),
            (this.shapesData = null),
            (this.itemsData = null);
        });
      function LetterProps(e, t, r, s, a, n) {
        (this.o = e),
          (this.sw = t),
          (this.sc = r),
          (this.fc = s),
          (this.m = a),
          (this.p = n),
          (this._imdf = { o: !0, sw: !!t, sc: !!r, fc: !!s, m: !0, p: !0 });
      }
      LetterProps.prototype.update = function (e, t, r, s, a, n) {
        (this._imdf.o = !1),
          (this._imdf.sw = !1),
          (this._imdf.sc = !1),
          (this._imdf.fc = !1),
          (this._imdf.m = !1),
          (this._imdf.p = !1);
        var o = !1;
        return (
          this.o !== e && ((this.o = e), (this._imdf.o = !0), (o = !0)),
          this.sw !== t && ((this.sw = t), (this._imdf.sw = !0), (o = !0)),
          this.sc !== r && ((this.sc = r), (this._imdf.sc = !0), (o = !0)),
          this.fc !== s && ((this.fc = s), (this._imdf.fc = !0), (o = !0)),
          this.m !== a && ((this.m = a), (this._imdf.m = !0), (o = !0)),
          n.length &&
            (this.p[0] !== n[0] ||
              this.p[1] !== n[1] ||
              this.p[4] !== n[4] ||
              this.p[5] !== n[5] ||
              this.p[12] !== n[12] ||
              this.p[13] !== n[13]) &&
            ((this.p = n), (this._imdf.p = !0), (o = !0)),
          o
        );
      };
      function TextProperty(e, t) {
        (this._frameId = initialDefaultFrame),
          (this.pv = ""),
          (this.v = ""),
          (this.kf = !1),
          (this._isFirstFrame = !0),
          (this._imdf = !1),
          t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)),
          (this.data = t),
          (this.elem = e),
          (this.comp = this.elem.comp),
          (this.keysIndex = 0),
          (this.canResize = !1),
          (this.minimumFontSize = 1),
          (this.effectsSequence = []),
          (this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: !1,
            strokeColorAnim: !1,
            strokeWidthAnim: !1,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: !1,
          }),
          this.copyData(this.currentData, this.data.d.k[0].s),
          this.searchProperty() || this.completeTextData(this.currentData);
      }
      (TextProperty.prototype.defaultBoxWidth = [0, 0]),
        (TextProperty.prototype.copyData = function (e, t) {
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        }),
        (TextProperty.prototype.setCurrentData = function (e) {
          e.__complete || this.completeTextData(e),
            (this.currentData = e),
            (this.currentData.boxWidth =
              this.currentData.boxWidth || this.defaultBoxWidth),
            (this._imdf = !0);
        }),
        (TextProperty.prototype.searchProperty = function () {
          return this.searchKeyframes();
        }),
        (TextProperty.prototype.searchKeyframes = function () {
          return (
            (this.kf = this.data.d.k.length > 1),
            this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
            this.kf
          );
        }),
        (TextProperty.prototype.addEffect = function (e) {
          this.effectsSequence.push(e), this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.getValue = function (e) {
          if (
            !(
              (this.elem.globalData.frameId === this.frameId ||
                !this.effectsSequence.length) &&
              !e
            )
          ) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var t = this.currentData,
              r = this.keysIndex;
            if (this.lock) {
              this.setCurrentData(this.currentData);
              return;
            }
            (this.lock = !0), (this._imdf = !1);
            var s,
              a = this.effectsSequence.length,
              n = e || this.data.d.k[this.keysIndex].s;
            for (s = 0; s < a; s += 1)
              r !== this.keysIndex
                ? (n = this.effectsSequence[s](n, n.t))
                : (n = this.effectsSequence[s](this.currentData, n.t));
            t !== n && this.setCurrentData(n),
              (this.v = this.currentData),
              (this.pv = this.v),
              (this.lock = !1),
              (this.frameId = this.elem.globalData.frameId);
          }
        }),
        (TextProperty.prototype.getKeyframeValue = function () {
          for (
            var e = this.data.d.k,
              t = this.elem.comp.renderedFrame,
              r = 0,
              s = e.length;
            r <= s - 1 && !(r === s - 1 || e[r + 1].t > t);

          )
            r += 1;
          return (
            this.keysIndex !== r && (this.keysIndex = r),
            this.data.d.k[this.keysIndex].s
          );
        }),
        (TextProperty.prototype.buildFinalText = function (e) {
          for (var t = [], r = 0, s = e.length, a, n, o = !1; r < s; )
            (a = e.charCodeAt(r)),
              FontManager.isCombinedCharacter(a)
                ? (t[t.length - 1] += e.charAt(r))
                : a >= 55296 && a <= 56319
                ? ((n = e.charCodeAt(r + 1)),
                  n >= 56320 && n <= 57343
                    ? (o || FontManager.isModifier(a, n)
                        ? ((t[t.length - 1] += e.substr(r, 2)), (o = !1))
                        : t.push(e.substr(r, 2)),
                      (r += 1))
                    : t.push(e.charAt(r)))
                : a > 56319
                ? ((n = e.charCodeAt(r + 1)),
                  FontManager.isZeroWidthJoiner(a, n)
                    ? ((o = !0), (t[t.length - 1] += e.substr(r, 2)), (r += 1))
                    : t.push(e.charAt(r)))
                : FontManager.isZeroWidthJoiner(a)
                ? ((t[t.length - 1] += e.charAt(r)), (o = !0))
                : t.push(e.charAt(r)),
              (r += 1);
          return t;
        }),
        (TextProperty.prototype.completeTextData = function (e) {
          e.__complete = !0;
          var t = this.elem.globalData.fontManager,
            r = this.data,
            s = [],
            a,
            n,
            o,
            f = 0,
            l,
            p = r.m.g,
            b = 0,
            P = 0,
            u = 0,
            _ = [],
            x = 0,
            g = 0,
            A,
            d,
            y = t.getFontByName(e.f),
            c,
            m = 0,
            E = getFontProperties(y);
          (e.fWeight = E.weight),
            (e.fStyle = E.style),
            (e.finalSize = e.s),
            (e.finalText = this.buildFinalText(e.t)),
            (n = e.finalText.length),
            (e.finalLineHeight = e.lh);
          var S = (e.tr / 1e3) * e.finalSize,
            T;
          if (e.sz)
            for (var F = !0, O = e.sz[0], G = e.sz[1], $, B; F; ) {
              (B = this.buildFinalText(e.t)),
                ($ = 0),
                (x = 0),
                (n = B.length),
                (S = (e.tr / 1e3) * e.finalSize);
              var z = -1;
              for (a = 0; a < n; a += 1)
                (T = B[a].charCodeAt(0)),
                  (o = !1),
                  B[a] === " "
                    ? (z = a)
                    : (T === 13 || T === 3) &&
                      ((x = 0),
                      (o = !0),
                      ($ += e.finalLineHeight || e.finalSize * 1.2)),
                  t.chars
                    ? ((c = t.getCharData(B[a], y.fStyle, y.fFamily)),
                      (m = o ? 0 : (c.w * e.finalSize) / 100))
                    : (m = t.measureText(B[a], e.f, e.finalSize)),
                  x + m > O && B[a] !== " "
                    ? (z === -1 ? (n += 1) : (a = z),
                      ($ += e.finalLineHeight || e.finalSize * 1.2),
                      B.splice(a, z === a ? 1 : 0, "\r"),
                      (z = -1),
                      (x = 0))
                    : ((x += m), (x += S));
              ($ += (y.ascent * e.finalSize) / 100),
                this.canResize && e.finalSize > this.minimumFontSize && G < $
                  ? ((e.finalSize -= 1),
                    (e.finalLineHeight = (e.finalSize * e.lh) / e.s))
                  : ((e.finalText = B), (n = e.finalText.length), (F = !1));
            }
          (x = -S), (m = 0);
          var N = 0,
            R;
          for (a = 0; a < n; a += 1)
            if (
              ((o = !1),
              (R = e.finalText[a]),
              (T = R.charCodeAt(0)),
              T === 13 || T === 3
                ? ((N = 0),
                  _.push(x),
                  (g = x > g ? x : g),
                  (x = -2 * S),
                  (l = ""),
                  (o = !0),
                  (u += 1))
                : (l = R),
              t.chars
                ? ((c = t.getCharData(
                    R,
                    y.fStyle,
                    t.getFontByName(e.f).fFamily
                  )),
                  (m = o ? 0 : (c.w * e.finalSize) / 100))
                : (m = t.measureText(l, e.f, e.finalSize)),
              R === " " ? (N += m + S) : ((x += m + S + N), (N = 0)),
              s.push({
                l: m,
                an: m,
                add: b,
                n: o,
                anIndexes: [],
                val: l,
                line: u,
                animatorJustifyOffset: 0,
              }),
              p == 2)
            ) {
              if (((b += m), l === "" || l === " " || a === n - 1)) {
                for ((l === "" || l === " ") && (b -= m); P <= a; )
                  (s[P].an = b), (s[P].ind = f), (s[P].extra = m), (P += 1);
                (f += 1), (b = 0);
              }
            } else if (p == 3) {
              if (((b += m), l === "" || a === n - 1)) {
                for (l === "" && (b -= m); P <= a; )
                  (s[P].an = b), (s[P].ind = f), (s[P].extra = m), (P += 1);
                (b = 0), (f += 1);
              }
            } else (s[f].ind = f), (s[f].extra = 0), (f += 1);
          if (((e.l = s), (g = x > g ? x : g), _.push(x), e.sz))
            (e.boxWidth = e.sz[0]), (e.justifyOffset = 0);
          else
            switch (((e.boxWidth = g), e.j)) {
              case 1:
                e.justifyOffset = -e.boxWidth;
                break;
              case 2:
                e.justifyOffset = -e.boxWidth / 2;
                break;
              default:
                e.justifyOffset = 0;
            }
          e.lineWidths = _;
          var D = r.a,
            M,
            C;
          d = D.length;
          var I,
            L,
            V = [];
          for (A = 0; A < d; A += 1) {
            for (
              M = D[A],
                M.a.sc && (e.strokeColorAnim = !0),
                M.a.sw && (e.strokeWidthAnim = !0),
                (M.a.fc || M.a.fh || M.a.fs || M.a.fb) &&
                  (e.fillColorAnim = !0),
                L = 0,
                I = M.s.b,
                a = 0;
              a < n;
              a += 1
            )
              (C = s[a]),
                (C.anIndexes[A] = L),
                ((I == 1 && C.val !== "") ||
                  (I == 2 && C.val !== "" && C.val !== " ") ||
                  (I == 3 && (C.n || C.val == " " || a == n - 1)) ||
                  (I == 4 && (C.n || a == n - 1))) &&
                  (M.s.rn === 1 && V.push(L), (L += 1));
            r.a[A].s.totalChars = L;
            var q = -1,
              Y;
            if (M.s.rn === 1)
              for (a = 0; a < n; a += 1)
                (C = s[a]),
                  q != C.anIndexes[A] &&
                    ((q = C.anIndexes[A]),
                    (Y = V.splice(Math.floor(Math.random() * V.length), 1)[0])),
                  (C.anIndexes[A] = Y);
          }
          (e.yOffset = e.finalLineHeight || e.finalSize * 1.2),
            (e.ls = e.ls || 0),
            (e.ascent = (y.ascent * e.finalSize) / 100);
        }),
        (TextProperty.prototype.updateDocumentData = function (e, t) {
          t = t === void 0 ? this.keysIndex : t;
          var r = this.copyData({}, this.data.d.k[t].s);
          (r = this.copyData(r, e)),
            (this.data.d.k[t].s = r),
            this.recalculate(t),
            this.setCurrentData(r),
            this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.recalculate = function (e) {
          var t = this.data.d.k[e].s;
          (t.__complete = !1),
            (this.keysIndex = 0),
            (this._isFirstFrame = !0),
            this.getValue(t);
        }),
        (TextProperty.prototype.canResizeFont = function (e) {
          (this.canResize = e),
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.setMinimumFontSize = function (e) {
          (this.minimumFontSize = Math.floor(e) || 1),
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this);
        });
      var TextSelectorProp = (function () {
        var e = Math.max,
          t = Math.min,
          r = Math.floor;
        function s(n, o) {
          (this._currentTextLength = -1),
            (this.k = !1),
            (this.data = o),
            (this.elem = n),
            (this.comp = n.comp),
            (this.finalS = 0),
            (this.finalE = 0),
            this.initDynamicPropertyContainer(n),
            (this.s = PropertyFactory.getProp(n, o.s || { k: 0 }, 0, 0, this)),
            "e" in o
              ? (this.e = PropertyFactory.getProp(n, o.e, 0, 0, this))
              : (this.e = { v: 100 }),
            (this.o = PropertyFactory.getProp(n, o.o || { k: 0 }, 0, 0, this)),
            (this.xe = PropertyFactory.getProp(
              n,
              o.xe || { k: 0 },
              0,
              0,
              this
            )),
            (this.ne = PropertyFactory.getProp(
              n,
              o.ne || { k: 0 },
              0,
              0,
              this
            )),
            (this.sm = PropertyFactory.getProp(
              n,
              o.sm || { k: 100 },
              0,
              0,
              this
            )),
            (this.a = PropertyFactory.getProp(n, o.a, 0, 0.01, this)),
            this.dynamicProperties.length || this.getValue();
        }
        (s.prototype = {
          getMult: function (o) {
            this._currentTextLength !==
              this.elem.textProperty.currentData.l.length && this.getValue();
            var f = 0,
              l = 0,
              p = 1,
              b = 1;
            this.ne.v > 0 ? (f = this.ne.v / 100) : (l = -this.ne.v / 100),
              this.xe.v > 0
                ? (p = 1 - this.xe.v / 100)
                : (b = 1 + this.xe.v / 100);
            var P = BezierFactory.getBezierEasing(f, l, p, b).get,
              u = 0,
              _ = this.finalS,
              x = this.finalE,
              g = this.data.sh;
            if (g === 2)
              x === _
                ? (u = o >= x ? 1 : 0)
                : (u = e(0, t(0.5 / (x - _) + (o - _) / (x - _), 1))),
                (u = P(u));
            else if (g === 3)
              x === _
                ? (u = o >= x ? 0 : 1)
                : (u = 1 - e(0, t(0.5 / (x - _) + (o - _) / (x - _), 1))),
                (u = P(u));
            else if (g === 4)
              x === _
                ? (u = 0)
                : ((u = e(0, t(0.5 / (x - _) + (o - _) / (x - _), 1))),
                  u < 0.5 ? (u *= 2) : (u = 1 - 2 * (u - 0.5))),
                (u = P(u));
            else if (g === 5) {
              if (x === _) u = 0;
              else {
                var A = x - _;
                o = t(e(0, o + 0.5 - _), x - _);
                var d = -A / 2 + o,
                  y = A / 2;
                u = Math.sqrt(1 - (d * d) / (y * y));
              }
              u = P(u);
            } else
              g === 6
                ? (x === _
                    ? (u = 0)
                    : ((o = t(e(0, o + 0.5 - _), x - _)),
                      (u =
                        (1 + Math.cos(Math.PI + (Math.PI * 2 * o) / (x - _))) /
                        2)),
                  (u = P(u)))
                : (o >= r(_) &&
                    (o - _ < 0
                      ? (u = e(0, t(t(x, 1) - (_ - o), 1)))
                      : (u = e(0, t(x - o, 1)))),
                  (u = P(u)));
            if (this.sm.v !== 100) {
              var c = this.sm.v * 0.01;
              c === 0 && (c = 1e-8);
              var m = 0.5 - c * 0.5;
              u < m ? (u = 0) : ((u = (u - m) / c), u > 1 && (u = 1));
            }
            return u * this.a.v;
          },
          getValue: function (o) {
            this.iterateDynamicProperties(),
              (this._imdf = o || this._imdf),
              (this._currentTextLength =
                this.elem.textProperty.currentData.l.length || 0),
              o && this.data.r === 2 && (this.e.v = this._currentTextLength);
            var f = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
              l = this.o.v / f,
              p = this.s.v / f + l,
              b = this.e.v / f + l;
            if (p > b) {
              var P = p;
              (p = b), (b = P);
            }
            (this.finalS = p), (this.finalE = b);
          },
        }),
          extendPrototype([DynamicPropertyContainer], s);
        function a(n, o, f) {
          return new s(n, o);
        }
        return { getTextSelectorProp: a };
      })();
      function TextAnimatorDataProperty(e, t, r) {
        var s = { propType: !1 },
          a = PropertyFactory.getProp,
          n = t.a;
        (this.a = {
          r: n.r ? a(e, n.r, 0, degToRads, r) : s,
          rx: n.rx ? a(e, n.rx, 0, degToRads, r) : s,
          ry: n.ry ? a(e, n.ry, 0, degToRads, r) : s,
          sk: n.sk ? a(e, n.sk, 0, degToRads, r) : s,
          sa: n.sa ? a(e, n.sa, 0, degToRads, r) : s,
          s: n.s ? a(e, n.s, 1, 0.01, r) : s,
          a: n.a ? a(e, n.a, 1, 0, r) : s,
          o: n.o ? a(e, n.o, 0, 0.01, r) : s,
          p: n.p ? a(e, n.p, 1, 0, r) : s,
          sw: n.sw ? a(e, n.sw, 0, 0, r) : s,
          sc: n.sc ? a(e, n.sc, 1, 0, r) : s,
          fc: n.fc ? a(e, n.fc, 1, 0, r) : s,
          fh: n.fh ? a(e, n.fh, 0, 0, r) : s,
          fs: n.fs ? a(e, n.fs, 0, 0.01, r) : s,
          fb: n.fb ? a(e, n.fb, 0, 0.01, r) : s,
          t: n.t ? a(e, n.t, 0, 0, r) : s,
        }),
          (this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r)),
          (this.s.t = t.s.t);
      }
      function TextAnimatorProperty(e, t, r) {
        (this._isFirstFrame = !0),
          (this._hasMaskedPath = !1),
          (this._frameId = -1),
          (this._textData = e),
          (this._renderType = t),
          (this._elem = r),
          (this._animatorsData = createSizedArray(this._textData.a.length)),
          (this._pathData = {}),
          (this._moreOptions = { alignment: {} }),
          (this.renderedLetters = []),
          (this.lettersChangedFlag = !1),
          this.initDynamicPropertyContainer(r);
      }
      (TextAnimatorProperty.prototype.searchProperties = function () {
        var e,
          t = this._textData.a.length,
          r,
          s = PropertyFactory.getProp;
        for (e = 0; e < t; e += 1)
          (r = this._textData.a[e]),
            (this._animatorsData[e] = new TextAnimatorDataProperty(
              this._elem,
              r,
              this
            ));
        this._textData.p && "m" in this._textData.p
          ? ((this._pathData = {
              a: s(this._elem, this._textData.p.a, 0, 0, this),
              f: s(this._elem, this._textData.p.f, 0, 0, this),
              l: s(this._elem, this._textData.p.l, 0, 0, this),
              r: s(this._elem, this._textData.p.r, 0, 0, this),
              p: s(this._elem, this._textData.p.p, 0, 0, this),
              m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
            }),
            (this._hasMaskedPath = !0))
          : (this._hasMaskedPath = !1),
          (this._moreOptions.alignment = s(
            this._elem,
            this._textData.m.a,
            1,
            0,
            this
          ));
      }),
        (TextAnimatorProperty.prototype.getMeasures = function (e, t) {
          if (
            ((this.lettersChangedFlag = t),
            !(
              !this._imdf &&
              !this._isFirstFrame &&
              !t &&
              (!this._hasMaskedPath || !this._pathData.m._imdf)
            ))
          ) {
            this._isFirstFrame = !1;
            var r = this._moreOptions.alignment.v,
              s = this._animatorsData,
              a = this._textData,
              n = this.mHelper,
              o = this._renderType,
              f = this.renderedLetters.length,
              l,
              p,
              b,
              P,
              u = e.l,
              _,
              x,
              g,
              A,
              d,
              y,
              c,
              m,
              E,
              S,
              T,
              F,
              O,
              G,
              $;
            if (this._hasMaskedPath) {
              if (
                (($ = this._pathData.m),
                !this._pathData.n || this._pathData._imdf)
              ) {
                var B = $.v;
                this._pathData.r.v && (B = B.reverse()),
                  (_ = { tLength: 0, segments: [] }),
                  (P = B._length - 1);
                var z;
                for (F = 0, b = 0; b < P; b += 1)
                  (z = bez.buildBezierData(
                    B.v[b],
                    B.v[b + 1],
                    [B.o[b][0] - B.v[b][0], B.o[b][1] - B.v[b][1]],
                    [
                      B.i[b + 1][0] - B.v[b + 1][0],
                      B.i[b + 1][1] - B.v[b + 1][1],
                    ]
                  )),
                    (_.tLength += z.segmentLength),
                    _.segments.push(z),
                    (F += z.segmentLength);
                (b = P),
                  $.v.c &&
                    ((z = bez.buildBezierData(
                      B.v[b],
                      B.v[0],
                      [B.o[b][0] - B.v[b][0], B.o[b][1] - B.v[b][1]],
                      [B.i[0][0] - B.v[0][0], B.i[0][1] - B.v[0][1]]
                    )),
                    (_.tLength += z.segmentLength),
                    _.segments.push(z),
                    (F += z.segmentLength)),
                  (this._pathData.pi = _);
              }
              if (
                ((_ = this._pathData.pi),
                (x = this._pathData.f.v),
                (c = 0),
                (y = 1),
                (A = 0),
                (d = !0),
                (S = _.segments),
                x < 0 && $.v.c)
              )
                for (
                  _.tLength < Math.abs(x) && (x = -Math.abs(x) % _.tLength),
                    c = S.length - 1,
                    E = S[c].points,
                    y = E.length - 1;
                  x < 0;

                )
                  (x += E[y].partialLength),
                    (y -= 1),
                    y < 0 && ((c -= 1), (E = S[c].points), (y = E.length - 1));
              (E = S[c].points),
                (m = E[y - 1]),
                (g = E[y]),
                (T = g.partialLength);
            }
            (P = u.length), (l = 0), (p = 0);
            var N = e.finalSize * 1.2 * 0.714,
              R = !0,
              D,
              M,
              C,
              I,
              L;
            I = s.length;
            var V,
              q = -1,
              Y,
              W,
              Z,
              K = x,
              ie = c,
              ne = y,
              se = -1,
              J,
              U,
              ee,
              H,
              X,
              oe,
              pe,
              he,
              ae = "",
              le = this.defaultPropsArray,
              fe;
            if (e.j === 2 || e.j === 1) {
              var Q = 0,
                ce = 0,
                ue = e.j === 2 ? -0.5 : -1,
                te = 0,
                me = !0;
              for (b = 0; b < P; b += 1)
                if (u[b].n) {
                  for (Q && (Q += ce); te < b; )
                    (u[te].animatorJustifyOffset = Q), (te += 1);
                  (Q = 0), (me = !0);
                } else {
                  for (C = 0; C < I; C += 1)
                    (D = s[C].a),
                      D.t.propType &&
                        (me && e.j === 2 && (ce += D.t.v * ue),
                        (M = s[C].s),
                        (V = M.getMult(u[b].anIndexes[C], a.a[C].s.totalChars)),
                        V.length
                          ? (Q += D.t.v * V[0] * ue)
                          : (Q += D.t.v * V * ue));
                  me = !1;
                }
              for (Q && (Q += ce); te < b; )
                (u[te].animatorJustifyOffset = Q), (te += 1);
            }
            for (b = 0; b < P; b += 1) {
              if ((n.reset(), (J = 1), u[b].n))
                (l = 0),
                  (p += e.yOffset),
                  (p += R ? 1 : 0),
                  (x = K),
                  (R = !1),
                  this._hasMaskedPath &&
                    ((c = ie),
                    (y = ne),
                    (E = S[c].points),
                    (m = E[y - 1]),
                    (g = E[y]),
                    (T = g.partialLength),
                    (A = 0)),
                  (ae = ""),
                  (he = ""),
                  (oe = ""),
                  (fe = ""),
                  (le = this.defaultPropsArray);
              else {
                if (this._hasMaskedPath) {
                  if (se !== u[b].line) {
                    switch (e.j) {
                      case 1:
                        x += F - e.lineWidths[u[b].line];
                        break;
                      case 2:
                        x += (F - e.lineWidths[u[b].line]) / 2;
                        break;
                    }
                    se = u[b].line;
                  }
                  q !== u[b].ind &&
                    (u[q] && (x += u[q].extra),
                    (x += u[b].an / 2),
                    (q = u[b].ind)),
                    (x += r[0] * u[b].an * 0.005);
                  var re = 0;
                  for (C = 0; C < I; C += 1)
                    (D = s[C].a),
                      D.p.propType &&
                        ((M = s[C].s),
                        (V = M.getMult(u[b].anIndexes[C], a.a[C].s.totalChars)),
                        V.length
                          ? (re += D.p.v[0] * V[0])
                          : (re += D.p.v[0] * V)),
                      D.a.propType &&
                        ((M = s[C].s),
                        (V = M.getMult(u[b].anIndexes[C], a.a[C].s.totalChars)),
                        V.length
                          ? (re += D.a.v[0] * V[0])
                          : (re += D.a.v[0] * V));
                  for (
                    d = !0,
                      this._pathData.a.v &&
                        ((x =
                          u[0].an * 0.5 +
                          ((F -
                            this._pathData.f.v -
                            u[0].an * 0.5 -
                            u[u.length - 1].an * 0.5) *
                            q) /
                            (P - 1)),
                        (x += this._pathData.f.v));
                    d;

                  )
                    A + T >= x + re || !E
                      ? ((O = (x + re - A) / g.partialLength),
                        (W = m.point[0] + (g.point[0] - m.point[0]) * O),
                        (Z = m.point[1] + (g.point[1] - m.point[1]) * O),
                        n.translate(
                          -r[0] * u[b].an * 0.005,
                          -(r[1] * N) * 0.01
                        ),
                        (d = !1))
                      : E &&
                        ((A += g.partialLength),
                        (y += 1),
                        y >= E.length &&
                          ((y = 0),
                          (c += 1),
                          S[c]
                            ? (E = S[c].points)
                            : $.v.c
                            ? ((y = 0), (c = 0), (E = S[c].points))
                            : ((A -= g.partialLength), (E = null))),
                        E && ((m = g), (g = E[y]), (T = g.partialLength)));
                  (Y = u[b].an / 2 - u[b].add), n.translate(-Y, 0, 0);
                } else
                  (Y = u[b].an / 2 - u[b].add),
                    n.translate(-Y, 0, 0),
                    n.translate(-r[0] * u[b].an * 0.005, -r[1] * N * 0.01, 0);
                for (C = 0; C < I; C += 1)
                  (D = s[C].a),
                    D.t.propType &&
                      ((M = s[C].s),
                      (V = M.getMult(u[b].anIndexes[C], a.a[C].s.totalChars)),
                      (l !== 0 || e.j !== 0) &&
                        (this._hasMaskedPath
                          ? V.length
                            ? (x += D.t.v * V[0])
                            : (x += D.t.v * V)
                          : V.length
                          ? (l += D.t.v * V[0])
                          : (l += D.t.v * V)));
                for (
                  e.strokeWidthAnim && (ee = e.sw || 0),
                    e.strokeColorAnim &&
                      (e.sc
                        ? (U = [e.sc[0], e.sc[1], e.sc[2]])
                        : (U = [0, 0, 0])),
                    e.fillColorAnim &&
                      e.fc &&
                      (H = [e.fc[0], e.fc[1], e.fc[2]]),
                    C = 0;
                  C < I;
                  C += 1
                )
                  (D = s[C].a),
                    D.a.propType &&
                      ((M = s[C].s),
                      (V = M.getMult(u[b].anIndexes[C], a.a[C].s.totalChars)),
                      V.length
                        ? n.translate(
                            -D.a.v[0] * V[0],
                            -D.a.v[1] * V[1],
                            D.a.v[2] * V[2]
                          )
                        : n.translate(
                            -D.a.v[0] * V,
                            -D.a.v[1] * V,
                            D.a.v[2] * V
                          ));
                for (C = 0; C < I; C += 1)
                  (D = s[C].a),
                    D.s.propType &&
                      ((M = s[C].s),
                      (V = M.getMult(u[b].anIndexes[C], a.a[C].s.totalChars)),
                      V.length
                        ? n.scale(
                            1 + (D.s.v[0] - 1) * V[0],
                            1 + (D.s.v[1] - 1) * V[1],
                            1
                          )
                        : n.scale(
                            1 + (D.s.v[0] - 1) * V,
                            1 + (D.s.v[1] - 1) * V,
                            1
                          ));
                for (C = 0; C < I; C += 1) {
                  if (
                    ((D = s[C].a),
                    (M = s[C].s),
                    (V = M.getMult(u[b].anIndexes[C], a.a[C].s.totalChars)),
                    D.sk.propType &&
                      (V.length
                        ? n.skewFromAxis(-D.sk.v * V[0], D.sa.v * V[1])
                        : n.skewFromAxis(-D.sk.v * V, D.sa.v * V)),
                    D.r.propType &&
                      (V.length
                        ? n.rotateZ(-D.r.v * V[2])
                        : n.rotateZ(-D.r.v * V)),
                    D.ry.propType &&
                      (V.length
                        ? n.rotateY(D.ry.v * V[1])
                        : n.rotateY(D.ry.v * V)),
                    D.rx.propType &&
                      (V.length
                        ? n.rotateX(D.rx.v * V[0])
                        : n.rotateX(D.rx.v * V)),
                    D.o.propType &&
                      (V.length
                        ? (J += (D.o.v * V[0] - J) * V[0])
                        : (J += (D.o.v * V - J) * V)),
                    e.strokeWidthAnim &&
                      D.sw.propType &&
                      (V.length ? (ee += D.sw.v * V[0]) : (ee += D.sw.v * V)),
                    e.strokeColorAnim && D.sc.propType)
                  )
                    for (X = 0; X < 3; X += 1)
                      V.length
                        ? (U[X] += (D.sc.v[X] - U[X]) * V[0])
                        : (U[X] += (D.sc.v[X] - U[X]) * V);
                  if (e.fillColorAnim && e.fc) {
                    if (D.fc.propType)
                      for (X = 0; X < 3; X += 1)
                        V.length
                          ? (H[X] += (D.fc.v[X] - H[X]) * V[0])
                          : (H[X] += (D.fc.v[X] - H[X]) * V);
                    D.fh.propType &&
                      (V.length
                        ? (H = addHueToRGB(H, D.fh.v * V[0]))
                        : (H = addHueToRGB(H, D.fh.v * V))),
                      D.fs.propType &&
                        (V.length
                          ? (H = addSaturationToRGB(H, D.fs.v * V[0]))
                          : (H = addSaturationToRGB(H, D.fs.v * V))),
                      D.fb.propType &&
                        (V.length
                          ? (H = addBrightnessToRGB(H, D.fb.v * V[0]))
                          : (H = addBrightnessToRGB(H, D.fb.v * V)));
                  }
                }
                for (C = 0; C < I; C += 1)
                  (D = s[C].a),
                    D.p.propType &&
                      ((M = s[C].s),
                      (V = M.getMult(u[b].anIndexes[C], a.a[C].s.totalChars)),
                      this._hasMaskedPath
                        ? V.length
                          ? n.translate(0, D.p.v[1] * V[0], -D.p.v[2] * V[1])
                          : n.translate(0, D.p.v[1] * V, -D.p.v[2] * V)
                        : V.length
                        ? n.translate(
                            D.p.v[0] * V[0],
                            D.p.v[1] * V[1],
                            -D.p.v[2] * V[2]
                          )
                        : n.translate(
                            D.p.v[0] * V,
                            D.p.v[1] * V,
                            -D.p.v[2] * V
                          ));
                if (
                  (e.strokeWidthAnim && (oe = ee < 0 ? 0 : ee),
                  e.strokeColorAnim &&
                    (pe =
                      "rgb(" +
                      Math.round(U[0] * 255) +
                      "," +
                      Math.round(U[1] * 255) +
                      "," +
                      Math.round(U[2] * 255) +
                      ")"),
                  e.fillColorAnim &&
                    e.fc &&
                    (he =
                      "rgb(" +
                      Math.round(H[0] * 255) +
                      "," +
                      Math.round(H[1] * 255) +
                      "," +
                      Math.round(H[2] * 255) +
                      ")"),
                  this._hasMaskedPath)
                ) {
                  if (
                    (n.translate(0, -e.ls),
                    n.translate(0, r[1] * N * 0.01 + p, 0),
                    this._pathData.p.v)
                  ) {
                    G = (g.point[1] - m.point[1]) / (g.point[0] - m.point[0]);
                    var de = (Math.atan(G) * 180) / Math.PI;
                    g.point[0] < m.point[0] && (de += 180),
                      n.rotate((-de * Math.PI) / 180);
                  }
                  n.translate(W, Z, 0),
                    (x -= r[0] * u[b].an * 0.005),
                    u[b + 1] &&
                      q !== u[b + 1].ind &&
                      ((x += u[b].an / 2), (x += e.tr * 0.001 * e.finalSize));
                } else {
                  switch (
                    (n.translate(l, p, 0),
                    e.ps && n.translate(e.ps[0], e.ps[1] + e.ascent, 0),
                    e.j)
                  ) {
                    case 1:
                      n.translate(
                        u[b].animatorJustifyOffset +
                          e.justifyOffset +
                          (e.boxWidth - e.lineWidths[u[b].line]),
                        0,
                        0
                      );
                      break;
                    case 2:
                      n.translate(
                        u[b].animatorJustifyOffset +
                          e.justifyOffset +
                          (e.boxWidth - e.lineWidths[u[b].line]) / 2,
                        0,
                        0
                      );
                      break;
                  }
                  n.translate(0, -e.ls),
                    n.translate(Y, 0, 0),
                    n.translate(r[0] * u[b].an * 0.005, r[1] * N * 0.01, 0),
                    (l += u[b].l + e.tr * 0.001 * e.finalSize);
                }
                o === "html"
                  ? (ae = n.toCSS())
                  : o === "svg"
                  ? (ae = n.to2dCSS())
                  : (le = [
                      n.props[0],
                      n.props[1],
                      n.props[2],
                      n.props[3],
                      n.props[4],
                      n.props[5],
                      n.props[6],
                      n.props[7],
                      n.props[8],
                      n.props[9],
                      n.props[10],
                      n.props[11],
                      n.props[12],
                      n.props[13],
                      n.props[14],
                      n.props[15],
                    ]),
                  (fe = J);
              }
              f <= b
                ? ((L = new LetterProps(fe, oe, pe, he, ae, le)),
                  this.renderedLetters.push(L),
                  (f += 1),
                  (this.lettersChangedFlag = !0))
                : ((L = this.renderedLetters[b]),
                  (this.lettersChangedFlag =
                    L.update(fe, oe, pe, he, ae, le) ||
                    this.lettersChangedFlag));
            }
          }
        }),
        (TextAnimatorProperty.prototype.getValue = function () {
          this._elem.globalData.frameId !== this._frameId &&
            ((this._frameId = this._elem.globalData.frameId),
            this.iterateDynamicProperties());
        }),
        (TextAnimatorProperty.prototype.mHelper = new Matrix()),
        (TextAnimatorProperty.prototype.defaultPropsArray = []),
        extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);
      function ITextElement() {}
      (ITextElement.prototype.initElement = function (e, t, r) {
        (this.lettersChangedFlag = !0),
          this.initFrame(),
          this.initBaseData(e, t, r),
          (this.textProperty = new TextProperty(
            this,
            e.t,
            this.dynamicProperties
          )),
          (this.textAnimator = new TextAnimatorProperty(
            e.t,
            this.renderType,
            this
          )),
          this.initTransform(e, t, r),
          this.initHierarchy(),
          this.initRenderable(),
          this.initRendererElement(),
          this.createContainerElements(),
          this.createRenderableComponents(),
          this.createContent(),
          this.hide(),
          this.textAnimator.searchProperties(this.dynamicProperties);
      }),
        (ITextElement.prototype.prepareFrame = function (e) {
          (this._imdf = !1),
            this.prepareRenderableFrame(e),
            this.prepareProperties(e, this.isInRange),
            (this.textProperty._imdf || this.textProperty._isFirstFrame) &&
              (this.buildNewText(),
              (this.textProperty._isFirstFrame = !1),
              (this.textProperty._imdf = !1));
        }),
        (ITextElement.prototype.createPathShape = function (e, t) {
          var r,
            s = t.length,
            a,
            n = "";
          for (r = 0; r < s; r += 1)
            t[r].ty === "sh" &&
              ((a = t[r].ks.k), (n += buildShapeString(a, a.i.length, !0, e)));
          return n;
        }),
        (ITextElement.prototype.updateDocumentData = function (e, t) {
          this.textProperty.updateDocumentData(e, t);
        }),
        (ITextElement.prototype.canResizeFont = function (e) {
          this.textProperty.canResizeFont(e);
        }),
        (ITextElement.prototype.setMinimumFontSize = function (e) {
          this.textProperty.setMinimumFontSize(e);
        }),
        (ITextElement.prototype.applyTextPropertiesToMatrix = function (
          e,
          t,
          r,
          s,
          a
        ) {
          switch (
            (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0),
            t.translate(0, -e.ls, 0),
            e.j)
          ) {
            case 1:
              t.translate(
                e.justifyOffset + (e.boxWidth - e.lineWidths[r]),
                0,
                0
              );
              break;
            case 2:
              t.translate(
                e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2,
                0,
                0
              );
              break;
          }
          t.translate(s, a, 0);
        }),
        (ITextElement.prototype.buildColor = function (e) {
          return (
            "rgb(" +
            Math.round(e[0] * 255) +
            "," +
            Math.round(e[1] * 255) +
            "," +
            Math.round(e[2] * 255) +
            ")"
          );
        }),
        (ITextElement.prototype.emptyProp = new LetterProps()),
        (ITextElement.prototype.destroy = function () {});
      var emptyShapeData = { shapes: [] };
      function SVGTextLottieElement(e, t, r) {
        (this.textSpans = []),
          (this.renderType = "svg"),
          this.initElement(e, t, r);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          SVGBaseElement,
          HierarchyElement,
          FrameElement,
          RenderableDOMElement,
          ITextElement,
        ],
        SVGTextLottieElement
      ),
        (SVGTextLottieElement.prototype.createContent = function () {
          this.data.singleShape &&
            !this.globalData.fontManager.chars &&
            (this.textContainer = createNS("text"));
        }),
        (SVGTextLottieElement.prototype.buildTextContents = function (e) {
          for (var t = 0, r = e.length, s = [], a = ""; t < r; )
            e[t] === String.fromCharCode(13) || e[t] === String.fromCharCode(3)
              ? (s.push(a), (a = ""))
              : (a += e[t]),
              (t += 1);
          return s.push(a), s;
        }),
        (SVGTextLottieElement.prototype.buildShapeData = function (e, t) {
          if (e.shapes && e.shapes.length) {
            var r = e.shapes[0];
            if (r.it) {
              var s = r.it[r.it.length - 1];
              s.s && ((s.s.k[0] = t), (s.s.k[1] = t));
            }
          }
          return e;
        }),
        (SVGTextLottieElement.prototype.buildNewText = function () {
          this.addDynamicProperty(this);
          var e,
            t,
            r = this.textProperty.currentData;
          (this.renderedLetters = createSizedArray(r ? r.l.length : 0)),
            r.fc
              ? this.layerElement.setAttribute("fill", this.buildColor(r.fc))
              : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
            r.sc &&
              (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)),
              this.layerElement.setAttribute("stroke-width", r.sw)),
            this.layerElement.setAttribute("font-size", r.finalSize);
          var s = this.globalData.fontManager.getFontByName(r.f);
          if (s.fClass) this.layerElement.setAttribute("class", s.fClass);
          else {
            this.layerElement.setAttribute("font-family", s.fFamily);
            var a = r.fWeight,
              n = r.fStyle;
            this.layerElement.setAttribute("font-style", n),
              this.layerElement.setAttribute("font-weight", a);
          }
          this.layerElement.setAttribute("aria-label", r.t);
          var o = r.l || [],
            f = !!this.globalData.fontManager.chars;
          t = o.length;
          var l,
            p = this.mHelper,
            b = "",
            P = this.data.singleShape,
            u = 0,
            _ = 0,
            x = !0,
            g = r.tr * 0.001 * r.finalSize;
          if (P && !f && !r.sz) {
            var A = this.textContainer,
              d = "start";
            switch (r.j) {
              case 1:
                d = "end";
                break;
              case 2:
                d = "middle";
                break;
              default:
                d = "start";
                break;
            }
            A.setAttribute("text-anchor", d),
              A.setAttribute("letter-spacing", g);
            var y = this.buildTextContents(r.finalText);
            for (
              t = y.length, _ = r.ps ? r.ps[1] + r.ascent : 0, e = 0;
              e < t;
              e += 1
            )
              (l = this.textSpans[e].span || createNS("tspan")),
                (l.textContent = y[e]),
                l.setAttribute("x", 0),
                l.setAttribute("y", _),
                (l.style.display = "inherit"),
                A.appendChild(l),
                this.textSpans[e] ||
                  (this.textSpans[e] = { span: null, glyph: null }),
                (this.textSpans[e].span = l),
                (_ += r.finalLineHeight);
            this.layerElement.appendChild(A);
          } else {
            var c = this.textSpans.length,
              m;
            for (e = 0; e < t; e += 1) {
              if (
                (this.textSpans[e] ||
                  (this.textSpans[e] = {
                    span: null,
                    childSpan: null,
                    glyph: null,
                  }),
                !f || !P || e === 0)
              ) {
                if (
                  ((l =
                    c > e
                      ? this.textSpans[e].span
                      : createNS(f ? "g" : "text")),
                  c <= e)
                ) {
                  if (
                    (l.setAttribute("stroke-linecap", "butt"),
                    l.setAttribute("stroke-linejoin", "round"),
                    l.setAttribute("stroke-miterlimit", "4"),
                    (this.textSpans[e].span = l),
                    f)
                  ) {
                    var E = createNS("g");
                    l.appendChild(E), (this.textSpans[e].childSpan = E);
                  }
                  (this.textSpans[e].span = l),
                    this.layerElement.appendChild(l);
                }
                l.style.display = "inherit";
              }
              if (
                (p.reset(),
                P &&
                  (o[e].n &&
                    ((u = -g), (_ += r.yOffset), (_ += x ? 1 : 0), (x = !1)),
                  this.applyTextPropertiesToMatrix(r, p, o[e].line, u, _),
                  (u += o[e].l || 0),
                  (u += g)),
                f)
              ) {
                m = this.globalData.fontManager.getCharData(
                  r.finalText[e],
                  s.fStyle,
                  this.globalData.fontManager.getFontByName(r.f).fFamily
                );
                var S;
                if (m.t === 1)
                  S = new SVGCompElement(m.data, this.globalData, this);
                else {
                  var T = emptyShapeData;
                  m.data &&
                    m.data.shapes &&
                    (T = this.buildShapeData(m.data, r.finalSize)),
                    (S = new SVGShapeElement(T, this.globalData, this));
                }
                if (this.textSpans[e].glyph) {
                  var F = this.textSpans[e].glyph;
                  this.textSpans[e].childSpan.removeChild(F.layerElement),
                    F.destroy();
                }
                (this.textSpans[e].glyph = S),
                  (S._debug = !0),
                  S.prepareFrame(0),
                  S.renderFrame(),
                  this.textSpans[e].childSpan.appendChild(S.layerElement),
                  m.t === 1 &&
                    this.textSpans[e].childSpan.setAttribute(
                      "transform",
                      "scale(" +
                        r.finalSize / 100 +
                        "," +
                        r.finalSize / 100 +
                        ")"
                    );
              } else
                P &&
                  l.setAttribute(
                    "transform",
                    "translate(" + p.props[12] + "," + p.props[13] + ")"
                  ),
                  (l.textContent = o[e].val),
                  l.setAttributeNS(
                    "http://www.w3.org/XML/1998/namespace",
                    "xml:space",
                    "preserve"
                  );
            }
            P && l && l.setAttribute("d", b);
          }
          for (; e < this.textSpans.length; )
            (this.textSpans[e].span.style.display = "none"), (e += 1);
          this._sizeChanged = !0;
        }),
        (SVGTextLottieElement.prototype.sourceRectAtTime = function () {
          if (
            (this.prepareFrame(this.comp.renderedFrame - this.data.st),
            this.renderInnerContent(),
            this._sizeChanged)
          ) {
            this._sizeChanged = !1;
            var e = this.layerElement.getBBox();
            this.bbox = {
              top: e.y,
              left: e.x,
              width: e.width,
              height: e.height,
            };
          }
          return this.bbox;
        }),
        (SVGTextLottieElement.prototype.getValue = function () {
          var e,
            t = this.textSpans.length,
            r;
          for (
            this.renderedFrame = this.comp.renderedFrame, e = 0;
            e < t;
            e += 1
          )
            (r = this.textSpans[e].glyph),
              r &&
                (r.prepareFrame(this.comp.renderedFrame - this.data.st),
                r._imdf && (this._imdf = !0));
        }),
        (SVGTextLottieElement.prototype.renderInnerContent = function () {
          if (
            (!this.data.singleShape || this._imdf) &&
            (this.textAnimator.getMeasures(
              this.textProperty.currentData,
              this.lettersChangedFlag
            ),
            this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)
          ) {
            this._sizeChanged = !0;
            var e,
              t,
              r = this.textAnimator.renderedLetters,
              s = this.textProperty.currentData.l;
            t = s.length;
            var a, n, o;
            for (e = 0; e < t; e += 1)
              s[e].n ||
                ((a = r[e]),
                (n = this.textSpans[e].span),
                (o = this.textSpans[e].glyph),
                o && o.renderFrame(),
                a._imdf.m && n.setAttribute("transform", a.m),
                a._imdf.o && n.setAttribute("opacity", a.o),
                a._imdf.sw && n.setAttribute("stroke-width", a.sw),
                a._imdf.sc && n.setAttribute("stroke", a.sc),
                a._imdf.fc && n.setAttribute("fill", a.fc));
          }
        });
      function ISolidElement(e, t, r) {
        this.initElement(e, t, r);
      }
      extendPrototype([IImageElement], ISolidElement),
        (ISolidElement.prototype.createContent = function () {
          var e = createNS("rect");
          e.setAttribute("width", this.data.sw),
            e.setAttribute("height", this.data.sh),
            e.setAttribute("fill", this.data.sc),
            this.layerElement.appendChild(e);
        });
      function NullElement(e, t, r) {
        this.initFrame(),
          this.initBaseData(e, t, r),
          this.initFrame(),
          this.initTransform(e, t, r),
          this.initHierarchy();
      }
      (NullElement.prototype.prepareFrame = function (e) {
        this.prepareProperties(e, !0);
      }),
        (NullElement.prototype.renderFrame = function () {}),
        (NullElement.prototype.getBaseElement = function () {
          return null;
        }),
        (NullElement.prototype.destroy = function () {}),
        (NullElement.prototype.sourceRectAtTime = function () {}),
        (NullElement.prototype.hide = function () {}),
        extendPrototype(
          [BaseElement, TransformElement, HierarchyElement, FrameElement],
          NullElement
        );
      function SVGRendererBase() {}
      extendPrototype([BaseRenderer], SVGRendererBase),
        (SVGRendererBase.prototype.createNull = function (e) {
          return new NullElement(e, this.globalData, this);
        }),
        (SVGRendererBase.prototype.createShape = function (e) {
          return new SVGShapeElement(e, this.globalData, this);
        }),
        (SVGRendererBase.prototype.createText = function (e) {
          return new SVGTextLottieElement(e, this.globalData, this);
        }),
        (SVGRendererBase.prototype.createImage = function (e) {
          return new IImageElement(e, this.globalData, this);
        }),
        (SVGRendererBase.prototype.createSolid = function (e) {
          return new ISolidElement(e, this.globalData, this);
        }),
        (SVGRendererBase.prototype.configAnimation = function (e) {
          this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
            this.svgElement.setAttribute(
              "xmlns:xlink",
              "http://www.w3.org/1999/xlink"
            ),
            this.renderConfig.viewBoxSize
              ? this.svgElement.setAttribute(
                  "viewBox",
                  this.renderConfig.viewBoxSize
                )
              : this.svgElement.setAttribute(
                  "viewBox",
                  "0 0 " + e.w + " " + e.h
                ),
            this.renderConfig.viewBoxOnly ||
              (this.svgElement.setAttribute("width", e.w),
              this.svgElement.setAttribute("height", e.h),
              (this.svgElement.style.width = "100%"),
              (this.svgElement.style.height = "100%"),
              (this.svgElement.style.transform = "translate3d(0,0,0)"),
              (this.svgElement.style.contentVisibility =
                this.renderConfig.contentVisibility)),
            this.renderConfig.width &&
              this.svgElement.setAttribute("width", this.renderConfig.width),
            this.renderConfig.height &&
              this.svgElement.setAttribute("height", this.renderConfig.height),
            this.renderConfig.className &&
              this.svgElement.setAttribute(
                "class",
                this.renderConfig.className
              ),
            this.renderConfig.id &&
              this.svgElement.setAttribute("id", this.renderConfig.id),
            this.renderConfig.focusable !== void 0 &&
              this.svgElement.setAttribute(
                "focusable",
                this.renderConfig.focusable
              ),
            this.svgElement.setAttribute(
              "preserveAspectRatio",
              this.renderConfig.preserveAspectRatio
            ),
            this.animationItem.wrapper.appendChild(this.svgElement);
          var t = this.globalData.defs;
          this.setupGlobalData(e, t),
            (this.globalData.progressiveLoad =
              this.renderConfig.progressiveLoad),
            (this.data = e);
          var r = createNS("clipPath"),
            s = createNS("rect");
          s.setAttribute("width", e.w),
            s.setAttribute("height", e.h),
            s.setAttribute("x", 0),
            s.setAttribute("y", 0);
          var a = createElementID();
          r.setAttribute("id", a),
            r.appendChild(s),
            this.layerElement.setAttribute(
              "clip-path",
              "url(" + getLocationHref() + "#" + a + ")"
            ),
            t.appendChild(r),
            (this.layers = e.layers),
            (this.elements = createSizedArray(e.layers.length));
        }),
        (SVGRendererBase.prototype.destroy = function () {
          this.animationItem.wrapper &&
            (this.animationItem.wrapper.innerText = ""),
            (this.layerElement = null),
            (this.globalData.defs = null);
          var e,
            t = this.layers ? this.layers.length : 0;
          for (e = 0; e < t; e += 1)
            this.elements[e] &&
              this.elements[e].destroy &&
              this.elements[e].destroy();
          (this.elements.length = 0),
            (this.destroyed = !0),
            (this.animationItem = null);
        }),
        (SVGRendererBase.prototype.updateContainerSize = function () {}),
        (SVGRendererBase.prototype.findIndexByInd = function (e) {
          var t = 0,
            r = this.layers.length;
          for (t = 0; t < r; t += 1) if (this.layers[t].ind === e) return t;
          return -1;
        }),
        (SVGRendererBase.prototype.buildItem = function (e) {
          var t = this.elements;
          if (!(t[e] || this.layers[e].ty === 99)) {
            t[e] = !0;
            var r = this.createItem(this.layers[e]);
            if (
              ((t[e] = r),
              getExpressionsPlugin() &&
                (this.layers[e].ty === 0 &&
                  this.globalData.projectInterface.registerComposition(r),
                r.initExpressions()),
              this.appendElementInPos(r, e),
              this.layers[e].tt)
            ) {
              var s =
                "tp" in this.layers[e]
                  ? this.findIndexByInd(this.layers[e].tp)
                  : e - 1;
              if (s === -1) return;
              if (!this.elements[s] || this.elements[s] === !0)
                this.buildItem(s), this.addPendingElement(r);
              else {
                var a = t[s],
                  n = a.getMatte(this.layers[e].tt);
                r.setMatte(n);
              }
            }
          }
        }),
        (SVGRendererBase.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length; ) {
            var e = this.pendingElements.pop();
            if ((e.checkParenting(), e.data.tt))
              for (var t = 0, r = this.elements.length; t < r; ) {
                if (this.elements[t] === e) {
                  var s =
                      "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
                    a = this.elements[s],
                    n = a.getMatte(this.layers[t].tt);
                  e.setMatte(n);
                  break;
                }
                t += 1;
              }
          }
        }),
        (SVGRendererBase.prototype.renderFrame = function (e) {
          if (!(this.renderedFrame === e || this.destroyed)) {
            e === null ? (e = this.renderedFrame) : (this.renderedFrame = e),
              (this.globalData.frameNum = e),
              (this.globalData.frameId += 1),
              (this.globalData.projectInterface.currentFrame = e),
              (this.globalData._imdf = !1);
            var t,
              r = this.layers.length;
            for (
              this.completeLayers || this.checkLayers(e), t = r - 1;
              t >= 0;
              t -= 1
            )
              (this.completeLayers || this.elements[t]) &&
                this.elements[t].prepareFrame(e - this.layers[t].st);
            if (this.globalData._imdf)
              for (t = 0; t < r; t += 1)
                (this.completeLayers || this.elements[t]) &&
                  this.elements[t].renderFrame();
          }
        }),
        (SVGRendererBase.prototype.appendElementInPos = function (e, t) {
          var r = e.getBaseElement();
          if (r) {
            for (var s = 0, a; s < t; )
              this.elements[s] &&
                this.elements[s] !== !0 &&
                this.elements[s].getBaseElement() &&
                (a = this.elements[s].getBaseElement()),
                (s += 1);
            a
              ? this.layerElement.insertBefore(r, a)
              : this.layerElement.appendChild(r);
          }
        }),
        (SVGRendererBase.prototype.hide = function () {
          this.layerElement.style.display = "none";
        }),
        (SVGRendererBase.prototype.show = function () {
          this.layerElement.style.display = "block";
        });
      function ICompElement() {}
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          HierarchyElement,
          FrameElement,
          RenderableDOMElement,
        ],
        ICompElement
      ),
        (ICompElement.prototype.initElement = function (e, t, r) {
          this.initFrame(),
            this.initBaseData(e, t, r),
            this.initTransform(e, t, r),
            this.initRenderable(),
            this.initHierarchy(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            (this.data.xt || !t.progressiveLoad) && this.buildAllItems(),
            this.hide();
        }),
        (ICompElement.prototype.prepareFrame = function (e) {
          if (
            ((this._imdf = !1),
            this.prepareRenderableFrame(e),
            this.prepareProperties(e, this.isInRange),
            !(!this.isInRange && !this.data.xt))
          ) {
            if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
            else {
              var t = this.tm.v;
              t === this.data.op && (t = this.data.op - 1),
                (this.renderedFrame = t);
            }
            var r,
              s = this.elements.length;
            for (
              this.completeLayers || this.checkLayers(this.renderedFrame),
                r = s - 1;
              r >= 0;
              r -= 1
            )
              (this.completeLayers || this.elements[r]) &&
                (this.elements[r].prepareFrame(
                  this.renderedFrame - this.layers[r].st
                ),
                this.elements[r]._imdf && (this._imdf = !0));
          }
        }),
        (ICompElement.prototype.renderInnerContent = function () {
          var e,
            t = this.layers.length;
          for (e = 0; e < t; e += 1)
            (this.completeLayers || this.elements[e]) &&
              this.elements[e].renderFrame();
        }),
        (ICompElement.prototype.setElements = function (e) {
          this.elements = e;
        }),
        (ICompElement.prototype.getElements = function () {
          return this.elements;
        }),
        (ICompElement.prototype.destroyElements = function () {
          var e,
            t = this.layers.length;
          for (e = 0; e < t; e += 1)
            this.elements[e] && this.elements[e].destroy();
        }),
        (ICompElement.prototype.destroy = function () {
          this.destroyElements(), this.destroyBaseElement();
        });
      function SVGCompElement(e, t, r) {
        (this.layers = e.layers),
          (this.supports3d = !0),
          (this.completeLayers = !1),
          (this.pendingElements = []),
          (this.elements = this.layers
            ? createSizedArray(this.layers.length)
            : []),
          this.initElement(e, t, r),
          (this.tm = e.tm
            ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this)
            : { _placeholder: !0 });
      }
      extendPrototype(
        [SVGRendererBase, ICompElement, SVGBaseElement],
        SVGCompElement
      ),
        (SVGCompElement.prototype.createComp = function (e) {
          return new SVGCompElement(e, this.globalData, this);
        });
      function SVGRenderer(e, t) {
        (this.animationItem = e),
          (this.layers = null),
          (this.renderedFrame = -1),
          (this.svgElement = createNS("svg"));
        var r = "";
        if (t && t.title) {
          var s = createNS("title"),
            a = createElementID();
          s.setAttribute("id", a),
            (s.textContent = t.title),
            this.svgElement.appendChild(s),
            (r += a);
        }
        if (t && t.description) {
          var n = createNS("desc"),
            o = createElementID();
          n.setAttribute("id", o),
            (n.textContent = t.description),
            this.svgElement.appendChild(n),
            (r += " " + o);
        }
        r && this.svgElement.setAttribute("aria-labelledby", r);
        var f = createNS("defs");
        this.svgElement.appendChild(f);
        var l = createNS("g");
        this.svgElement.appendChild(l),
          (this.layerElement = l),
          (this.renderConfig = {
            preserveAspectRatio:
              (t && t.preserveAspectRatio) || "xMidYMid meet",
            imagePreserveAspectRatio:
              (t && t.imagePreserveAspectRatio) || "xMidYMid slice",
            contentVisibility: (t && t.contentVisibility) || "visible",
            progressiveLoad: (t && t.progressiveLoad) || !1,
            hideOnTransparent: !(t && t.hideOnTransparent === !1),
            viewBoxOnly: (t && t.viewBoxOnly) || !1,
            viewBoxSize: (t && t.viewBoxSize) || !1,
            className: (t && t.className) || "",
            id: (t && t.id) || "",
            focusable: t && t.focusable,
            filterSize: {
              width: (t && t.filterSize && t.filterSize.width) || "100%",
              height: (t && t.filterSize && t.filterSize.height) || "100%",
              x: (t && t.filterSize && t.filterSize.x) || "0%",
              y: (t && t.filterSize && t.filterSize.y) || "0%",
            },
            width: t && t.width,
            height: t && t.height,
            runExpressions:
              !t || t.runExpressions === void 0 || t.runExpressions,
          }),
          (this.globalData = {
            _imdf: !1,
            frameNum: -1,
            defs: f,
            renderConfig: this.renderConfig,
          }),
          (this.elements = []),
          (this.pendingElements = []),
          (this.destroyed = !1),
          (this.rendererType = "svg");
      }
      extendPrototype([SVGRendererBase], SVGRenderer),
        (SVGRenderer.prototype.createComp = function (e) {
          return new SVGCompElement(e, this.globalData, this);
        });
      function CVContextData() {
        (this.saved = []),
          (this.cArrPos = 0),
          (this.cTr = new Matrix()),
          (this.cO = 1);
        var e,
          t = 15;
        for (
          this.savedOp = createTypedArray("float32", t), e = 0;
          e < t;
          e += 1
        )
          this.saved[e] = createTypedArray("float32", 16);
        this._length = t;
      }
      (CVContextData.prototype.duplicate = function () {
        var e = this._length * 2,
          t = this.savedOp;
        (this.savedOp = createTypedArray("float32", e)), this.savedOp.set(t);
        var r = 0;
        for (r = this._length; r < e; r += 1)
          this.saved[r] = createTypedArray("float32", 16);
        this._length = e;
      }),
        (CVContextData.prototype.reset = function () {
          (this.cArrPos = 0), this.cTr.reset(), (this.cO = 1);
        }),
        (CVContextData.prototype.popTransform = function () {
          var e = this.saved[this.cArrPos],
            t,
            r = this.cTr.props;
          for (t = 0; t < 16; t += 1) r[t] = e[t];
          return e;
        }),
        (CVContextData.prototype.popOpacity = function () {
          var e = this.savedOp[this.cArrPos];
          return (this.cO = e), e;
        }),
        (CVContextData.prototype.pop = function () {
          this.cArrPos -= 1;
          var e = this.popTransform(),
            t = this.popOpacity();
          return { transform: e, opacity: t };
        }),
        (CVContextData.prototype.push = function () {
          var e = this.cTr.props;
          this._length <= this.cArrPos && this.duplicate();
          var t,
            r = this.saved[this.cArrPos];
          for (t = 0; t < 16; t += 1) r[t] = e[t];
          (this.savedOp[this.cArrPos] = this.cO), (this.cArrPos += 1);
        }),
        (CVContextData.prototype.getTransform = function () {
          return this.cTr;
        }),
        (CVContextData.prototype.getOpacity = function () {
          return this.cO;
        }),
        (CVContextData.prototype.setOpacity = function (e) {
          this.cO = e;
        });
      function ShapeTransformManager() {
        (this.sequences = {}),
          (this.sequenceList = []),
          (this.transform_key_count = 0);
      }
      ShapeTransformManager.prototype = {
        addTransformSequence: function (t) {
          var r,
            s = t.length,
            a = "_";
          for (r = 0; r < s; r += 1) a += t[r].transform.key + "_";
          var n = this.sequences[a];
          return (
            n ||
              ((n = {
                transforms: [].concat(t),
                finalTransform: new Matrix(),
                _imdf: !1,
              }),
              (this.sequences[a] = n),
              this.sequenceList.push(n)),
            n
          );
        },
        processSequence: function (t, r) {
          for (var s = 0, a = t.transforms.length, n = r; s < a && !r; ) {
            if (t.transforms[s].transform.mProps._imdf) {
              n = !0;
              break;
            }
            s += 1;
          }
          if (n) {
            var o;
            for (t.finalTransform.reset(), s = a - 1; s >= 0; s -= 1)
              (o = t.transforms[s].transform.mProps.v.props),
                t.finalTransform.transform(
                  o[0],
                  o[1],
                  o[2],
                  o[3],
                  o[4],
                  o[5],
                  o[6],
                  o[7],
                  o[8],
                  o[9],
                  o[10],
                  o[11],
                  o[12],
                  o[13],
                  o[14],
                  o[15]
                );
          }
          t._imdf = n;
        },
        processSequences: function (t) {
          var r,
            s = this.sequenceList.length;
          for (r = 0; r < s; r += 1)
            this.processSequence(this.sequenceList[r], t);
        },
        getNewKey: function () {
          return (
            (this.transform_key_count += 1), "_" + this.transform_key_count
          );
        },
      };
      var lumaLoader = function () {
        var t = "__lottie_element_luma_buffer",
          r = null,
          s = null,
          a = null;
        function n() {
          var l = createNS("svg"),
            p = createNS("filter"),
            b = createNS("feColorMatrix");
          return (
            p.setAttribute("id", t),
            b.setAttribute("type", "matrix"),
            b.setAttribute("color-interpolation-filters", "sRGB"),
            b.setAttribute(
              "values",
              "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"
            ),
            p.appendChild(b),
            l.appendChild(p),
            l.setAttribute("id", t + "_svg"),
            featureSupport.svgLumaHidden && (l.style.display = "none"),
            l
          );
        }
        function o() {
          r ||
            ((a = n()),
            document.body.appendChild(a),
            (r = createTag("canvas")),
            (s = r.getContext("2d")),
            (s.filter = "url(#" + t + ")"),
            (s.fillStyle = "rgba(0,0,0,0)"),
            s.fillRect(0, 0, 1, 1));
        }
        function f(l) {
          return (
            r || o(),
            (r.width = l.width),
            (r.height = l.height),
            (s.filter = "url(#" + t + ")"),
            r
          );
        }
        return { load: o, get: f };
      };
      function createCanvas(e, t) {
        if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
        var r = createTag("canvas");
        return (r.width = e), (r.height = t), r;
      }
      var assetLoader = (function () {
        return {
          loadLumaCanvas: lumaLoader.load,
          getLumaCanvas: lumaLoader.get,
          createCanvas,
        };
      })();
      function CVEffects() {}
      CVEffects.prototype.renderFrame = function () {};
      function CVMaskElement(e, t) {
        (this.data = e),
          (this.element = t),
          (this.masksProperties = this.data.masksProperties || []),
          (this.viewData = createSizedArray(this.masksProperties.length));
        var r,
          s = this.masksProperties.length,
          a = !1;
        for (r = 0; r < s; r += 1)
          this.masksProperties[r].mode !== "n" && (a = !0),
            (this.viewData[r] = ShapePropertyFactory.getShapeProp(
              this.element,
              this.masksProperties[r],
              3
            ));
        (this.hasMasks = a), a && this.element.addRenderableComponent(this);
      }
      (CVMaskElement.prototype.renderFrame = function () {
        if (this.hasMasks) {
          var e = this.element.finalTransform.mat,
            t = this.element.canvasContext,
            r,
            s = this.masksProperties.length,
            a,
            n,
            o;
          for (t.beginPath(), r = 0; r < s; r += 1)
            if (this.masksProperties[r].mode !== "n") {
              this.masksProperties[r].inv &&
                (t.moveTo(0, 0),
                t.lineTo(this.element.globalData.compSize.w, 0),
                t.lineTo(
                  this.element.globalData.compSize.w,
                  this.element.globalData.compSize.h
                ),
                t.lineTo(0, this.element.globalData.compSize.h),
                t.lineTo(0, 0)),
                (o = this.viewData[r].v),
                (a = e.applyToPointArray(o.v[0][0], o.v[0][1], 0)),
                t.moveTo(a[0], a[1]);
              var f,
                l = o._length;
              for (f = 1; f < l; f += 1)
                (n = e.applyToTriplePoints(o.o[f - 1], o.i[f], o.v[f])),
                  t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
              (n = e.applyToTriplePoints(o.o[f - 1], o.i[0], o.v[0])),
                t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
            }
          this.element.globalData.renderer.save(!0), t.clip();
        }
      }),
        (CVMaskElement.prototype.getMaskProperty =
          MaskElement.prototype.getMaskProperty),
        (CVMaskElement.prototype.destroy = function () {
          this.element = null;
        });
      function CVBaseElement() {}
      var operationsMap = {
        1: "source-in",
        2: "source-out",
        3: "source-in",
        4: "source-out",
      };
      (CVBaseElement.prototype = {
        createElements: function () {},
        initRendererElement: function () {},
        createContainerElements: function () {
          if (this.data.tt >= 1) {
            this.buffers = [];
            var t = this.globalData.canvasContext,
              r = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
            this.buffers.push(r);
            var s = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
            this.buffers.push(s),
              this.data.tt >= 3 &&
                !document._isProxy &&
                assetLoader.loadLumaCanvas();
          }
          (this.canvasContext = this.globalData.canvasContext),
            (this.transformCanvas = this.globalData.transformCanvas),
            (this.renderableEffectsManager = new CVEffects());
        },
        createContent: function () {},
        setBlendMode: function () {
          var t = this.globalData;
          if (t.blendMode !== this.data.bm) {
            t.blendMode = this.data.bm;
            var r = getBlendMode(this.data.bm);
            t.canvasContext.globalCompositeOperation = r;
          }
        },
        createRenderableComponents: function () {
          this.maskManager = new CVMaskElement(this.data, this);
        },
        hideElement: function () {
          !this.hidden &&
            (!this.isInRange || this.isTransparent) &&
            (this.hidden = !0);
        },
        showElement: function () {
          this.isInRange &&
            !this.isTransparent &&
            ((this.hidden = !1),
            (this._isFirstFrame = !0),
            (this.maskManager._isFirstFrame = !0));
        },
        clearCanvas: function (t) {
          t.clearRect(
            this.transformCanvas.tx,
            this.transformCanvas.ty,
            this.transformCanvas.w * this.transformCanvas.sx,
            this.transformCanvas.h * this.transformCanvas.sy
          );
        },
        prepareLayer: function () {
          if (this.data.tt >= 1) {
            var t = this.buffers[0],
              r = t.getContext("2d");
            this.clearCanvas(r),
              r.drawImage(this.canvasContext.canvas, 0, 0),
              (this.currentTransform = this.canvasContext.getTransform()),
              this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
              this.clearCanvas(this.canvasContext),
              this.canvasContext.setTransform(this.currentTransform);
          }
        },
        exitLayer: function () {
          if (this.data.tt >= 1) {
            var t = this.buffers[1],
              r = t.getContext("2d");
            this.clearCanvas(r),
              r.drawImage(this.canvasContext.canvas, 0, 0),
              this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
              this.clearCanvas(this.canvasContext),
              this.canvasContext.setTransform(this.currentTransform);
            var s = this.comp.getElementById(
              "tp" in this.data ? this.data.tp : this.data.ind - 1
            );
            if (
              (s.renderFrame(!0),
              this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
              this.data.tt >= 3 && !document._isProxy)
            ) {
              var a = assetLoader.getLumaCanvas(this.canvasContext.canvas),
                n = a.getContext("2d");
              n.drawImage(this.canvasContext.canvas, 0, 0),
                this.clearCanvas(this.canvasContext),
                this.canvasContext.drawImage(a, 0, 0);
            }
            (this.canvasContext.globalCompositeOperation =
              operationsMap[this.data.tt]),
              this.canvasContext.drawImage(t, 0, 0),
              (this.canvasContext.globalCompositeOperation =
                "destination-over"),
              this.canvasContext.drawImage(this.buffers[0], 0, 0),
              this.canvasContext.setTransform(this.currentTransform),
              (this.canvasContext.globalCompositeOperation = "source-over");
          }
        },
        renderFrame: function (t) {
          if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !t)) {
            this.renderTransform(),
              this.renderRenderable(),
              this.setBlendMode();
            var r = this.data.ty === 0;
            this.prepareLayer(),
              this.globalData.renderer.save(r),
              this.globalData.renderer.ctxTransform(
                this.finalTransform.mat.props
              ),
              this.globalData.renderer.ctxOpacity(
                this.finalTransform.mProp.o.v
              ),
              this.renderInnerContent(),
              this.globalData.renderer.restore(r),
              this.exitLayer(),
              this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
              this._isFirstFrame && (this._isFirstFrame = !1);
          }
        },
        destroy: function () {
          (this.canvasContext = null),
            (this.data = null),
            (this.globalData = null),
            this.maskManager.destroy();
        },
        mHelper: new Matrix(),
      }),
        (CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement),
        (CVBaseElement.prototype.show = CVBaseElement.prototype.showElement);
      function CVShapeData(e, t, r, s) {
        (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
        var a = 4;
        t.ty === "rc"
          ? (a = 5)
          : t.ty === "el"
          ? (a = 6)
          : t.ty === "sr" && (a = 7),
          (this.sh = ShapePropertyFactory.getShapeProp(e, t, a, e));
        var n,
          o = r.length,
          f;
        for (n = 0; n < o; n += 1)
          r[n].closed ||
            ((f = {
              transforms: s.addTransformSequence(r[n].transforms),
              trNodes: [],
            }),
            this.styledShapes.push(f),
            r[n].elements.push(f));
      }
      CVShapeData.prototype.setAsAnimated =
        SVGShapeData.prototype.setAsAnimated;
      function CVShapeElement(e, t, r) {
        (this.shapes = []),
          (this.shapesData = e.shapes),
          (this.stylesList = []),
          (this.itemsData = []),
          (this.prevViewData = []),
          (this.shapeModifiers = []),
          (this.processedElements = []),
          (this.transformsManager = new ShapeTransformManager()),
          this.initElement(e, t, r);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          CVBaseElement,
          IShapeElement,
          HierarchyElement,
          FrameElement,
          RenderableElement,
        ],
        CVShapeElement
      ),
        (CVShapeElement.prototype.initElement =
          RenderableDOMElement.prototype.initElement),
        (CVShapeElement.prototype.transformHelper = {
          opacity: 1,
          _opimdf: !1,
        }),
        (CVShapeElement.prototype.dashResetter = []),
        (CVShapeElement.prototype.createContent = function () {
          this.searchShapes(
            this.shapesData,
            this.itemsData,
            this.prevViewData,
            !0,
            []
          );
        }),
        (CVShapeElement.prototype.createStyleElement = function (e, t) {
          var r = {
              data: e,
              type: e.ty,
              preTransforms: this.transformsManager.addTransformSequence(t),
              transforms: [],
              elements: [],
              closed: e.hd === !0,
            },
            s = {};
          if (
            (e.ty === "fl" || e.ty === "st"
              ? ((s.c = PropertyFactory.getProp(this, e.c, 1, 255, this)),
                s.c.k ||
                  (r.co =
                    "rgb(" +
                    bmFloor(s.c.v[0]) +
                    "," +
                    bmFloor(s.c.v[1]) +
                    "," +
                    bmFloor(s.c.v[2]) +
                    ")"))
              : (e.ty === "gf" || e.ty === "gs") &&
                ((s.s = PropertyFactory.getProp(this, e.s, 1, null, this)),
                (s.e = PropertyFactory.getProp(this, e.e, 1, null, this)),
                (s.h = PropertyFactory.getProp(
                  this,
                  e.h || { k: 0 },
                  0,
                  0.01,
                  this
                )),
                (s.a = PropertyFactory.getProp(
                  this,
                  e.a || { k: 0 },
                  0,
                  degToRads,
                  this
                )),
                (s.g = new GradientProperty(this, e.g, this))),
            (s.o = PropertyFactory.getProp(this, e.o, 0, 0.01, this)),
            e.ty === "st" || e.ty === "gs")
          ) {
            if (
              ((r.lc = lineCapEnum[e.lc || 2]),
              (r.lj = lineJoinEnum[e.lj || 2]),
              e.lj == 1 && (r.ml = e.ml),
              (s.w = PropertyFactory.getProp(this, e.w, 0, null, this)),
              s.w.k || (r.wi = s.w.v),
              e.d)
            ) {
              var a = new DashProperty(this, e.d, "canvas", this);
              (s.d = a),
                s.d.k || ((r.da = s.d.dashArray), (r.do = s.d.dashoffset[0]));
            }
          } else r.r = e.r === 2 ? "evenodd" : "nonzero";
          return this.stylesList.push(r), (s.style = r), s;
        }),
        (CVShapeElement.prototype.createGroupElement = function () {
          var e = { it: [], prevViewData: [] };
          return e;
        }),
        (CVShapeElement.prototype.createTransformElement = function (e) {
          var t = {
            transform: {
              opacity: 1,
              _opimdf: !1,
              key: this.transformsManager.getNewKey(),
              op: PropertyFactory.getProp(this, e.o, 0, 0.01, this),
              mProps: TransformPropertyFactory.getTransformProperty(
                this,
                e,
                this
              ),
            },
          };
          return t;
        }),
        (CVShapeElement.prototype.createShapeElement = function (e) {
          var t = new CVShapeData(
            this,
            e,
            this.stylesList,
            this.transformsManager
          );
          return this.shapes.push(t), this.addShapeToModifiers(t), t;
        }),
        (CVShapeElement.prototype.reloadShapes = function () {
          this._isFirstFrame = !0;
          var e,
            t = this.itemsData.length;
          for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
          for (
            this.searchShapes(
              this.shapesData,
              this.itemsData,
              this.prevViewData,
              !0,
              []
            ),
              t = this.dynamicProperties.length,
              e = 0;
            e < t;
            e += 1
          )
            this.dynamicProperties[e].getValue();
          this.renderModifiers(),
            this.transformsManager.processSequences(this._isFirstFrame);
        }),
        (CVShapeElement.prototype.addTransformToStyleList = function (e) {
          var t,
            r = this.stylesList.length;
          for (t = 0; t < r; t += 1)
            this.stylesList[t].closed || this.stylesList[t].transforms.push(e);
        }),
        (CVShapeElement.prototype.removeTransformFromStyleList = function () {
          var e,
            t = this.stylesList.length;
          for (e = 0; e < t; e += 1)
            this.stylesList[e].closed || this.stylesList[e].transforms.pop();
        }),
        (CVShapeElement.prototype.closeStyles = function (e) {
          var t,
            r = e.length;
          for (t = 0; t < r; t += 1) e[t].closed = !0;
        }),
        (CVShapeElement.prototype.searchShapes = function (e, t, r, s, a) {
          var n,
            o = e.length - 1,
            f,
            l,
            p = [],
            b = [],
            P,
            u,
            _,
            x = [].concat(a);
          for (n = o; n >= 0; n -= 1) {
            if (
              ((P = this.searchProcessedElement(e[n])),
              P ? (t[n] = r[P - 1]) : (e[n]._shouldRender = s),
              e[n].ty === "fl" ||
                e[n].ty === "st" ||
                e[n].ty === "gf" ||
                e[n].ty === "gs")
            )
              P
                ? (t[n].style.closed = !1)
                : (t[n] = this.createStyleElement(e[n], x)),
                p.push(t[n].style);
            else if (e[n].ty === "gr") {
              if (!P) t[n] = this.createGroupElement(e[n]);
              else
                for (l = t[n].it.length, f = 0; f < l; f += 1)
                  t[n].prevViewData[f] = t[n].it[f];
              this.searchShapes(e[n].it, t[n].it, t[n].prevViewData, s, x);
            } else
              e[n].ty === "tr"
                ? (P || ((_ = this.createTransformElement(e[n])), (t[n] = _)),
                  x.push(t[n]),
                  this.addTransformToStyleList(t[n]))
                : e[n].ty === "sh" ||
                  e[n].ty === "rc" ||
                  e[n].ty === "el" ||
                  e[n].ty === "sr"
                ? P || (t[n] = this.createShapeElement(e[n]))
                : e[n].ty === "tm" ||
                  e[n].ty === "rd" ||
                  e[n].ty === "pb" ||
                  e[n].ty === "zz" ||
                  e[n].ty === "op"
                ? (P
                    ? ((u = t[n]), (u.closed = !1))
                    : ((u = ShapeModifiers.getModifier(e[n].ty)),
                      u.init(this, e[n]),
                      (t[n] = u),
                      this.shapeModifiers.push(u)),
                  b.push(u))
                : e[n].ty === "rp" &&
                  (P
                    ? ((u = t[n]), (u.closed = !0))
                    : ((u = ShapeModifiers.getModifier(e[n].ty)),
                      (t[n] = u),
                      u.init(this, e, n, t),
                      this.shapeModifiers.push(u),
                      (s = !1)),
                  b.push(u));
            this.addProcessedElement(e[n], n + 1);
          }
          for (
            this.removeTransformFromStyleList(),
              this.closeStyles(p),
              o = b.length,
              n = 0;
            n < o;
            n += 1
          )
            b[n].closed = !0;
        }),
        (CVShapeElement.prototype.renderInnerContent = function () {
          (this.transformHelper.opacity = 1),
            (this.transformHelper._opimdf = !1),
            this.renderModifiers(),
            this.transformsManager.processSequences(this._isFirstFrame),
            this.renderShape(
              this.transformHelper,
              this.shapesData,
              this.itemsData,
              !0
            );
        }),
        (CVShapeElement.prototype.renderShapeTransform = function (e, t) {
          (e._opimdf || t.op._imdf || this._isFirstFrame) &&
            ((t.opacity = e.opacity), (t.opacity *= t.op.v), (t._opimdf = !0));
        }),
        (CVShapeElement.prototype.drawLayer = function () {
          var e,
            t = this.stylesList.length,
            r,
            s,
            a,
            n,
            o,
            f,
            l = this.globalData.renderer,
            p = this.globalData.canvasContext,
            b,
            P;
          for (e = 0; e < t; e += 1)
            if (
              ((P = this.stylesList[e]),
              (b = P.type),
              !(
                ((b === "st" || b === "gs") && P.wi === 0) ||
                !P.data._shouldRender ||
                P.coOp === 0 ||
                this.globalData.currentGlobalAlpha === 0
              ))
            ) {
              for (
                l.save(),
                  o = P.elements,
                  b === "st" || b === "gs"
                    ? ((p.strokeStyle = b === "st" ? P.co : P.grd),
                      (p.lineWidth = P.wi),
                      (p.lineCap = P.lc),
                      (p.lineJoin = P.lj),
                      (p.miterLimit = P.ml || 0))
                    : (p.fillStyle = b === "fl" ? P.co : P.grd),
                  l.ctxOpacity(P.coOp),
                  b !== "st" && b !== "gs" && p.beginPath(),
                  l.ctxTransform(P.preTransforms.finalTransform.props),
                  s = o.length,
                  r = 0;
                r < s;
                r += 1
              ) {
                for (
                  (b === "st" || b === "gs") &&
                    (p.beginPath(),
                    P.da && (p.setLineDash(P.da), (p.lineDashOffset = P.do))),
                    f = o[r].trNodes,
                    n = f.length,
                    a = 0;
                  a < n;
                  a += 1
                )
                  f[a].t === "m"
                    ? p.moveTo(f[a].p[0], f[a].p[1])
                    : f[a].t === "c"
                    ? p.bezierCurveTo(
                        f[a].pts[0],
                        f[a].pts[1],
                        f[a].pts[2],
                        f[a].pts[3],
                        f[a].pts[4],
                        f[a].pts[5]
                      )
                    : p.closePath();
                (b === "st" || b === "gs") &&
                  (p.stroke(), P.da && p.setLineDash(this.dashResetter));
              }
              b !== "st" && b !== "gs" && p.fill(P.r), l.restore();
            }
        }),
        (CVShapeElement.prototype.renderShape = function (e, t, r, s) {
          var a,
            n = t.length - 1,
            o;
          for (o = e, a = n; a >= 0; a -= 1)
            t[a].ty === "tr"
              ? ((o = r[a].transform), this.renderShapeTransform(e, o))
              : t[a].ty === "sh" ||
                t[a].ty === "el" ||
                t[a].ty === "rc" ||
                t[a].ty === "sr"
              ? this.renderPath(t[a], r[a])
              : t[a].ty === "fl"
              ? this.renderFill(t[a], r[a], o)
              : t[a].ty === "st"
              ? this.renderStroke(t[a], r[a], o)
              : t[a].ty === "gf" || t[a].ty === "gs"
              ? this.renderGradientFill(t[a], r[a], o)
              : t[a].ty === "gr"
              ? this.renderShape(o, t[a].it, r[a].it)
              : t[a].ty;
          s && this.drawLayer();
        }),
        (CVShapeElement.prototype.renderStyledShape = function (e, t) {
          if (this._isFirstFrame || t._imdf || e.transforms._imdf) {
            var r = e.trNodes,
              s = t.paths,
              a,
              n,
              o,
              f = s._length;
            r.length = 0;
            var l = e.transforms.finalTransform;
            for (o = 0; o < f; o += 1) {
              var p = s.shapes[o];
              if (p && p.v) {
                for (n = p._length, a = 1; a < n; a += 1)
                  a === 1 &&
                    r.push({
                      t: "m",
                      p: l.applyToPointArray(p.v[0][0], p.v[0][1], 0),
                    }),
                    r.push({
                      t: "c",
                      pts: l.applyToTriplePoints(p.o[a - 1], p.i[a], p.v[a]),
                    });
                n === 1 &&
                  r.push({
                    t: "m",
                    p: l.applyToPointArray(p.v[0][0], p.v[0][1], 0),
                  }),
                  p.c &&
                    n &&
                    (r.push({
                      t: "c",
                      pts: l.applyToTriplePoints(p.o[a - 1], p.i[0], p.v[0]),
                    }),
                    r.push({ t: "z" }));
              }
            }
            e.trNodes = r;
          }
        }),
        (CVShapeElement.prototype.renderPath = function (e, t) {
          if (e.hd !== !0 && e._shouldRender) {
            var r,
              s = t.styledShapes.length;
            for (r = 0; r < s; r += 1)
              this.renderStyledShape(t.styledShapes[r], t.sh);
          }
        }),
        (CVShapeElement.prototype.renderFill = function (e, t, r) {
          var s = t.style;
          (t.c._imdf || this._isFirstFrame) &&
            (s.co =
              "rgb(" +
              bmFloor(t.c.v[0]) +
              "," +
              bmFloor(t.c.v[1]) +
              "," +
              bmFloor(t.c.v[2]) +
              ")"),
            (t.o._imdf || r._opimdf || this._isFirstFrame) &&
              (s.coOp = t.o.v * r.opacity);
        }),
        (CVShapeElement.prototype.renderGradientFill = function (e, t, r) {
          var s = t.style,
            a;
          if (
            !s.grd ||
            t.g._imdf ||
            t.s._imdf ||
            t.e._imdf ||
            (e.t !== 1 && (t.h._imdf || t.a._imdf))
          ) {
            var n = this.globalData.canvasContext,
              o = t.s.v,
              f = t.e.v;
            if (e.t === 1) a = n.createLinearGradient(o[0], o[1], f[0], f[1]);
            else {
              var l = Math.sqrt(
                  Math.pow(o[0] - f[0], 2) + Math.pow(o[1] - f[1], 2)
                ),
                p = Math.atan2(f[1] - o[1], f[0] - o[0]),
                b = t.h.v;
              b >= 1 ? (b = 0.99) : b <= -1 && (b = -0.99);
              var P = l * b,
                u = Math.cos(p + t.a.v) * P + o[0],
                _ = Math.sin(p + t.a.v) * P + o[1];
              a = n.createRadialGradient(u, _, 0, o[0], o[1], l);
            }
            var x,
              g = e.g.p,
              A = t.g.c,
              d = 1;
            for (x = 0; x < g; x += 1)
              t.g._hasOpacity && t.g._collapsable && (d = t.g.o[x * 2 + 1]),
                a.addColorStop(
                  A[x * 4] / 100,
                  "rgba(" +
                    A[x * 4 + 1] +
                    "," +
                    A[x * 4 + 2] +
                    "," +
                    A[x * 4 + 3] +
                    "," +
                    d +
                    ")"
                );
            s.grd = a;
          }
          s.coOp = t.o.v * r.opacity;
        }),
        (CVShapeElement.prototype.renderStroke = function (e, t, r) {
          var s = t.style,
            a = t.d;
          a &&
            (a._imdf || this._isFirstFrame) &&
            ((s.da = a.dashArray), (s.do = a.dashoffset[0])),
            (t.c._imdf || this._isFirstFrame) &&
              (s.co =
                "rgb(" +
                bmFloor(t.c.v[0]) +
                "," +
                bmFloor(t.c.v[1]) +
                "," +
                bmFloor(t.c.v[2]) +
                ")"),
            (t.o._imdf || r._opimdf || this._isFirstFrame) &&
              (s.coOp = t.o.v * r.opacity),
            (t.w._imdf || this._isFirstFrame) && (s.wi = t.w.v);
        }),
        (CVShapeElement.prototype.destroy = function () {
          (this.shapesData = null),
            (this.globalData = null),
            (this.canvasContext = null),
            (this.stylesList.length = 0),
            (this.itemsData.length = 0);
        });
      function CVTextElement(e, t, r) {
        (this.textSpans = []),
          (this.yOffset = 0),
          (this.fillColorAnim = !1),
          (this.strokeColorAnim = !1),
          (this.strokeWidthAnim = !1),
          (this.stroke = !1),
          (this.fill = !1),
          (this.justifyOffset = 0),
          (this.currentRender = null),
          (this.renderType = "canvas"),
          (this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: "",
          }),
          this.initElement(e, t, r);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          CVBaseElement,
          HierarchyElement,
          FrameElement,
          RenderableElement,
          ITextElement,
        ],
        CVTextElement
      ),
        (CVTextElement.prototype.tHelper =
          createTag("canvas").getContext("2d")),
        (CVTextElement.prototype.buildNewText = function () {
          var e = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
          var t = !1;
          e.fc
            ? ((t = !0), (this.values.fill = this.buildColor(e.fc)))
            : (this.values.fill = "rgba(0,0,0,0)"),
            (this.fill = t);
          var r = !1;
          e.sc &&
            ((r = !0),
            (this.values.stroke = this.buildColor(e.sc)),
            (this.values.sWidth = e.sw));
          var s = this.globalData.fontManager.getFontByName(e.f),
            a,
            n,
            o = e.l,
            f = this.mHelper;
          (this.stroke = r),
            (this.values.fValue =
              e.finalSize +
              "px " +
              this.globalData.fontManager.getFontByName(e.f).fFamily),
            (n = e.finalText.length);
          var l,
            p,
            b,
            P,
            u,
            _,
            x,
            g,
            A,
            d,
            y = this.data.singleShape,
            c = e.tr * 0.001 * e.finalSize,
            m = 0,
            E = 0,
            S = !0,
            T = 0;
          for (a = 0; a < n; a += 1) {
            (l = this.globalData.fontManager.getCharData(
              e.finalText[a],
              s.fStyle,
              this.globalData.fontManager.getFontByName(e.f).fFamily
            )),
              (p = (l && l.data) || {}),
              f.reset(),
              y &&
                o[a].n &&
                ((m = -c), (E += e.yOffset), (E += S ? 1 : 0), (S = !1)),
              (u = p.shapes ? p.shapes[0].it : []),
              (x = u.length),
              f.scale(e.finalSize / 100, e.finalSize / 100),
              y && this.applyTextPropertiesToMatrix(e, f, o[a].line, m, E),
              (A = createSizedArray(x - 1));
            var F = 0;
            for (_ = 0; _ < x; _ += 1)
              if (u[_].ty === "sh") {
                for (
                  P = u[_].ks.k.i.length, g = u[_].ks.k, d = [], b = 1;
                  b < P;
                  b += 1
                )
                  b === 1 &&
                    d.push(
                      f.applyToX(g.v[0][0], g.v[0][1], 0),
                      f.applyToY(g.v[0][0], g.v[0][1], 0)
                    ),
                    d.push(
                      f.applyToX(g.o[b - 1][0], g.o[b - 1][1], 0),
                      f.applyToY(g.o[b - 1][0], g.o[b - 1][1], 0),
                      f.applyToX(g.i[b][0], g.i[b][1], 0),
                      f.applyToY(g.i[b][0], g.i[b][1], 0),
                      f.applyToX(g.v[b][0], g.v[b][1], 0),
                      f.applyToY(g.v[b][0], g.v[b][1], 0)
                    );
                d.push(
                  f.applyToX(g.o[b - 1][0], g.o[b - 1][1], 0),
                  f.applyToY(g.o[b - 1][0], g.o[b - 1][1], 0),
                  f.applyToX(g.i[0][0], g.i[0][1], 0),
                  f.applyToY(g.i[0][0], g.i[0][1], 0),
                  f.applyToX(g.v[0][0], g.v[0][1], 0),
                  f.applyToY(g.v[0][0], g.v[0][1], 0)
                ),
                  (A[F] = d),
                  (F += 1);
              }
            y && ((m += o[a].l), (m += c)),
              this.textSpans[T]
                ? (this.textSpans[T].elem = A)
                : (this.textSpans[T] = { elem: A }),
              (T += 1);
          }
        }),
        (CVTextElement.prototype.renderInnerContent = function () {
          var e = this.canvasContext;
          (e.font = this.values.fValue),
            (e.lineCap = "butt"),
            (e.lineJoin = "miter"),
            (e.miterLimit = 4),
            this.data.singleShape ||
              this.textAnimator.getMeasures(
                this.textProperty.currentData,
                this.lettersChangedFlag
              );
          var t,
            r,
            s,
            a,
            n,
            o,
            f = this.textAnimator.renderedLetters,
            l = this.textProperty.currentData.l;
          r = l.length;
          var p,
            b = null,
            P = null,
            u = null,
            _,
            x;
          for (t = 0; t < r; t += 1)
            if (!l[t].n) {
              if (
                ((p = f[t]),
                p &&
                  (this.globalData.renderer.save(),
                  this.globalData.renderer.ctxTransform(p.p),
                  this.globalData.renderer.ctxOpacity(p.o)),
                this.fill)
              ) {
                for (
                  p && p.fc
                    ? b !== p.fc && ((b = p.fc), (e.fillStyle = p.fc))
                    : b !== this.values.fill &&
                      ((b = this.values.fill),
                      (e.fillStyle = this.values.fill)),
                    _ = this.textSpans[t].elem,
                    a = _.length,
                    this.globalData.canvasContext.beginPath(),
                    s = 0;
                  s < a;
                  s += 1
                )
                  for (
                    x = _[s],
                      o = x.length,
                      this.globalData.canvasContext.moveTo(x[0], x[1]),
                      n = 2;
                    n < o;
                    n += 6
                  )
                    this.globalData.canvasContext.bezierCurveTo(
                      x[n],
                      x[n + 1],
                      x[n + 2],
                      x[n + 3],
                      x[n + 4],
                      x[n + 5]
                    );
                this.globalData.canvasContext.closePath(),
                  this.globalData.canvasContext.fill();
              }
              if (this.stroke) {
                for (
                  p && p.sw
                    ? u !== p.sw && ((u = p.sw), (e.lineWidth = p.sw))
                    : u !== this.values.sWidth &&
                      ((u = this.values.sWidth),
                      (e.lineWidth = this.values.sWidth)),
                    p && p.sc
                      ? P !== p.sc && ((P = p.sc), (e.strokeStyle = p.sc))
                      : P !== this.values.stroke &&
                        ((P = this.values.stroke),
                        (e.strokeStyle = this.values.stroke)),
                    _ = this.textSpans[t].elem,
                    a = _.length,
                    this.globalData.canvasContext.beginPath(),
                    s = 0;
                  s < a;
                  s += 1
                )
                  for (
                    x = _[s],
                      o = x.length,
                      this.globalData.canvasContext.moveTo(x[0], x[1]),
                      n = 2;
                    n < o;
                    n += 6
                  )
                    this.globalData.canvasContext.bezierCurveTo(
                      x[n],
                      x[n + 1],
                      x[n + 2],
                      x[n + 3],
                      x[n + 4],
                      x[n + 5]
                    );
                this.globalData.canvasContext.closePath(),
                  this.globalData.canvasContext.stroke();
              }
              p && this.globalData.renderer.restore();
            }
        });
      function CVImageElement(e, t, r) {
        (this.assetData = t.getAssetData(e.refId)),
          (this.img = t.imageLoader.getAsset(this.assetData)),
          this.initElement(e, t, r);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          CVBaseElement,
          HierarchyElement,
          FrameElement,
          RenderableElement,
        ],
        CVImageElement
      ),
        (CVImageElement.prototype.initElement =
          SVGShapeElement.prototype.initElement),
        (CVImageElement.prototype.prepareFrame =
          IImageElement.prototype.prepareFrame),
        (CVImageElement.prototype.createContent = function () {
          if (
            this.img.width &&
            (this.assetData.w !== this.img.width ||
              this.assetData.h !== this.img.height)
          ) {
            var e = createTag("canvas");
            (e.width = this.assetData.w), (e.height = this.assetData.h);
            var t = e.getContext("2d"),
              r = this.img.width,
              s = this.img.height,
              a = r / s,
              n = this.assetData.w / this.assetData.h,
              o,
              f,
              l =
                this.assetData.pr ||
                this.globalData.renderConfig.imagePreserveAspectRatio;
            (a > n && l === "xMidYMid slice") ||
            (a < n && l !== "xMidYMid slice")
              ? ((f = s), (o = f * n))
              : ((o = r), (f = o / n)),
              t.drawImage(
                this.img,
                (r - o) / 2,
                (s - f) / 2,
                o,
                f,
                0,
                0,
                this.assetData.w,
                this.assetData.h
              ),
              (this.img = e);
          }
        }),
        (CVImageElement.prototype.renderInnerContent = function () {
          this.canvasContext.drawImage(this.img, 0, 0);
        }),
        (CVImageElement.prototype.destroy = function () {
          this.img = null;
        });
      function CVSolidElement(e, t, r) {
        this.initElement(e, t, r);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          CVBaseElement,
          HierarchyElement,
          FrameElement,
          RenderableElement,
        ],
        CVSolidElement
      ),
        (CVSolidElement.prototype.initElement =
          SVGShapeElement.prototype.initElement),
        (CVSolidElement.prototype.prepareFrame =
          IImageElement.prototype.prepareFrame),
        (CVSolidElement.prototype.renderInnerContent = function () {
          var e = this.canvasContext;
          (e.fillStyle = this.data.sc),
            e.fillRect(0, 0, this.data.sw, this.data.sh);
        });
      function CanvasRendererBase(e, t) {
        (this.animationItem = e),
          (this.renderConfig = {
            clearCanvas: t && t.clearCanvas !== void 0 ? t.clearCanvas : !0,
            context: (t && t.context) || null,
            progressiveLoad: (t && t.progressiveLoad) || !1,
            preserveAspectRatio:
              (t && t.preserveAspectRatio) || "xMidYMid meet",
            imagePreserveAspectRatio:
              (t && t.imagePreserveAspectRatio) || "xMidYMid slice",
            contentVisibility: (t && t.contentVisibility) || "visible",
            className: (t && t.className) || "",
            id: (t && t.id) || "",
          }),
          (this.renderConfig.dpr = (t && t.dpr) || 1),
          this.animationItem.wrapper &&
            (this.renderConfig.dpr =
              (t && t.dpr) || window.devicePixelRatio || 1),
          (this.renderedFrame = -1),
          (this.globalData = {
            frameNum: -1,
            _imdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1,
          }),
          (this.contextData = new CVContextData()),
          (this.elements = []),
          (this.pendingElements = []),
          (this.transformMat = new Matrix()),
          (this.completeLayers = !1),
          (this.rendererType = "canvas");
      }
      extendPrototype([BaseRenderer], CanvasRendererBase),
        (CanvasRendererBase.prototype.createShape = function (e) {
          return new CVShapeElement(e, this.globalData, this);
        }),
        (CanvasRendererBase.prototype.createText = function (e) {
          return new CVTextElement(e, this.globalData, this);
        }),
        (CanvasRendererBase.prototype.createImage = function (e) {
          return new CVImageElement(e, this.globalData, this);
        }),
        (CanvasRendererBase.prototype.createSolid = function (e) {
          return new CVSolidElement(e, this.globalData, this);
        }),
        (CanvasRendererBase.prototype.createNull =
          SVGRenderer.prototype.createNull),
        (CanvasRendererBase.prototype.ctxTransform = function (e) {
          if (
            !(
              e[0] === 1 &&
              e[1] === 0 &&
              e[4] === 0 &&
              e[5] === 1 &&
              e[12] === 0 &&
              e[13] === 0
            )
          ) {
            if (!this.renderConfig.clearCanvas) {
              this.canvasContext.transform(
                e[0],
                e[1],
                e[4],
                e[5],
                e[12],
                e[13]
              );
              return;
            }
            this.transformMat.cloneFromProps(e);
            var t = this.contextData.getTransform(),
              r = t.props;
            this.transformMat.transform(
              r[0],
              r[1],
              r[2],
              r[3],
              r[4],
              r[5],
              r[6],
              r[7],
              r[8],
              r[9],
              r[10],
              r[11],
              r[12],
              r[13],
              r[14],
              r[15]
            ),
              t.cloneFromProps(this.transformMat.props);
            var s = t.props;
            this.canvasContext.setTransform(
              s[0],
              s[1],
              s[4],
              s[5],
              s[12],
              s[13]
            );
          }
        }),
        (CanvasRendererBase.prototype.ctxOpacity = function (e) {
          var t = this.contextData.getOpacity();
          if (!this.renderConfig.clearCanvas) {
            (this.canvasContext.globalAlpha *= e < 0 ? 0 : e),
              (this.globalData.currentGlobalAlpha = t);
            return;
          }
          (t *= e < 0 ? 0 : e),
            this.contextData.setOpacity(t),
            this.globalData.currentGlobalAlpha !== t &&
              ((this.canvasContext.globalAlpha = t),
              (this.globalData.currentGlobalAlpha = t));
        }),
        (CanvasRendererBase.prototype.reset = function () {
          if (!this.renderConfig.clearCanvas) {
            this.canvasContext.restore();
            return;
          }
          this.contextData.reset();
        }),
        (CanvasRendererBase.prototype.save = function (e) {
          if (!this.renderConfig.clearCanvas) {
            this.canvasContext.save();
            return;
          }
          e && this.canvasContext.save(), this.contextData.push();
        }),
        (CanvasRendererBase.prototype.restore = function (e) {
          if (!this.renderConfig.clearCanvas) {
            this.canvasContext.restore();
            return;
          }
          e &&
            (this.canvasContext.restore(),
            (this.globalData.blendMode = "source-over"));
          var t = this.contextData.pop(),
            r = t.transform,
            s = t.opacity;
          this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]),
            this.globalData.currentGlobalAlpha !== s &&
              ((this.canvasContext.globalAlpha = s),
              (this.globalData.currentGlobalAlpha = s));
        }),
        (CanvasRendererBase.prototype.configAnimation = function (e) {
          if (this.animationItem.wrapper) {
            this.animationItem.container = createTag("canvas");
            var t = this.animationItem.container.style;
            (t.width = "100%"), (t.height = "100%");
            var r = "0px 0px 0px";
            (t.transformOrigin = r),
              (t.mozTransformOrigin = r),
              (t.webkitTransformOrigin = r),
              (t["-webkit-transform"] = r),
              (t.contentVisibility = this.renderConfig.contentVisibility),
              this.animationItem.wrapper.appendChild(
                this.animationItem.container
              ),
              (this.canvasContext =
                this.animationItem.container.getContext("2d")),
              this.renderConfig.className &&
                this.animationItem.container.setAttribute(
                  "class",
                  this.renderConfig.className
                ),
              this.renderConfig.id &&
                this.animationItem.container.setAttribute(
                  "id",
                  this.renderConfig.id
                );
          } else this.canvasContext = this.renderConfig.context;
          (this.data = e),
            (this.layers = e.layers),
            (this.transformCanvas = {
              w: e.w,
              h: e.h,
              sx: 0,
              sy: 0,
              tx: 0,
              ty: 0,
            }),
            this.setupGlobalData(e, document.body),
            (this.globalData.canvasContext = this.canvasContext),
            (this.globalData.renderer = this),
            (this.globalData.isDashed = !1),
            (this.globalData.progressiveLoad =
              this.renderConfig.progressiveLoad),
            (this.globalData.transformCanvas = this.transformCanvas),
            (this.elements = createSizedArray(e.layers.length)),
            this.updateContainerSize();
        }),
        (CanvasRendererBase.prototype.updateContainerSize = function (e, t) {
          this.reset();
          var r, s;
          e
            ? ((r = e),
              (s = t),
              (this.canvasContext.canvas.width = r),
              (this.canvasContext.canvas.height = s))
            : (this.animationItem.wrapper && this.animationItem.container
                ? ((r = this.animationItem.wrapper.offsetWidth),
                  (s = this.animationItem.wrapper.offsetHeight))
                : ((r = this.canvasContext.canvas.width),
                  (s = this.canvasContext.canvas.height)),
              (this.canvasContext.canvas.width = r * this.renderConfig.dpr),
              (this.canvasContext.canvas.height = s * this.renderConfig.dpr));
          var a, n;
          if (
            this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 ||
            this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1
          ) {
            var o = this.renderConfig.preserveAspectRatio.split(" "),
              f = o[1] || "meet",
              l = o[0] || "xMidYMid",
              p = l.substr(0, 4),
              b = l.substr(4);
            (a = r / s),
              (n = this.transformCanvas.w / this.transformCanvas.h),
              (n > a && f === "meet") || (n < a && f === "slice")
                ? ((this.transformCanvas.sx =
                    r / (this.transformCanvas.w / this.renderConfig.dpr)),
                  (this.transformCanvas.sy =
                    r / (this.transformCanvas.w / this.renderConfig.dpr)))
                : ((this.transformCanvas.sx =
                    s / (this.transformCanvas.h / this.renderConfig.dpr)),
                  (this.transformCanvas.sy =
                    s / (this.transformCanvas.h / this.renderConfig.dpr))),
              p === "xMid" &&
              ((n < a && f === "meet") || (n > a && f === "slice"))
                ? (this.transformCanvas.tx =
                    ((r -
                      this.transformCanvas.w * (s / this.transformCanvas.h)) /
                      2) *
                    this.renderConfig.dpr)
                : p === "xMax" &&
                  ((n < a && f === "meet") || (n > a && f === "slice"))
                ? (this.transformCanvas.tx =
                    (r -
                      this.transformCanvas.w * (s / this.transformCanvas.h)) *
                    this.renderConfig.dpr)
                : (this.transformCanvas.tx = 0),
              b === "YMid" &&
              ((n > a && f === "meet") || (n < a && f === "slice"))
                ? (this.transformCanvas.ty =
                    ((s -
                      this.transformCanvas.h * (r / this.transformCanvas.w)) /
                      2) *
                    this.renderConfig.dpr)
                : b === "YMax" &&
                  ((n > a && f === "meet") || (n < a && f === "slice"))
                ? (this.transformCanvas.ty =
                    (s -
                      this.transformCanvas.h * (r / this.transformCanvas.w)) *
                    this.renderConfig.dpr)
                : (this.transformCanvas.ty = 0);
          } else
            this.renderConfig.preserveAspectRatio === "none"
              ? ((this.transformCanvas.sx =
                  r / (this.transformCanvas.w / this.renderConfig.dpr)),
                (this.transformCanvas.sy =
                  s / (this.transformCanvas.h / this.renderConfig.dpr)),
                (this.transformCanvas.tx = 0),
                (this.transformCanvas.ty = 0))
              : ((this.transformCanvas.sx = this.renderConfig.dpr),
                (this.transformCanvas.sy = this.renderConfig.dpr),
                (this.transformCanvas.tx = 0),
                (this.transformCanvas.ty = 0));
          (this.transformCanvas.props = [
            this.transformCanvas.sx,
            0,
            0,
            0,
            0,
            this.transformCanvas.sy,
            0,
            0,
            0,
            0,
            1,
            0,
            this.transformCanvas.tx,
            this.transformCanvas.ty,
            0,
            1,
          ]),
            this.ctxTransform(this.transformCanvas.props),
            this.canvasContext.beginPath(),
            this.canvasContext.rect(
              0,
              0,
              this.transformCanvas.w,
              this.transformCanvas.h
            ),
            this.canvasContext.closePath(),
            this.canvasContext.clip(),
            this.renderFrame(this.renderedFrame, !0);
        }),
        (CanvasRendererBase.prototype.destroy = function () {
          this.renderConfig.clearCanvas &&
            this.animationItem.wrapper &&
            (this.animationItem.wrapper.innerText = "");
          var e,
            t = this.layers ? this.layers.length : 0;
          for (e = t - 1; e >= 0; e -= 1)
            this.elements[e] &&
              this.elements[e].destroy &&
              this.elements[e].destroy();
          (this.elements.length = 0),
            (this.globalData.canvasContext = null),
            (this.animationItem.container = null),
            (this.destroyed = !0);
        }),
        (CanvasRendererBase.prototype.renderFrame = function (e, t) {
          if (
            !(
              (this.renderedFrame === e &&
                this.renderConfig.clearCanvas === !0 &&
                !t) ||
              this.destroyed ||
              e === -1
            )
          ) {
            (this.renderedFrame = e),
              (this.globalData.frameNum = e - this.animationItem._isFirstFrame),
              (this.globalData.frameId += 1),
              (this.globalData._imdf = !this.renderConfig.clearCanvas || t),
              (this.globalData.projectInterface.currentFrame = e);
            var r,
              s = this.layers.length;
            for (
              this.completeLayers || this.checkLayers(e), r = 0;
              r < s;
              r += 1
            )
              (this.completeLayers || this.elements[r]) &&
                this.elements[r].prepareFrame(e - this.layers[r].st);
            if (this.globalData._imdf) {
              for (
                this.renderConfig.clearCanvas === !0
                  ? this.canvasContext.clearRect(
                      0,
                      0,
                      this.transformCanvas.w,
                      this.transformCanvas.h
                    )
                  : this.save(),
                  r = s - 1;
                r >= 0;
                r -= 1
              )
                (this.completeLayers || this.elements[r]) &&
                  this.elements[r].renderFrame();
              this.renderConfig.clearCanvas !== !0 && this.restore();
            }
          }
        }),
        (CanvasRendererBase.prototype.buildItem = function (e) {
          var t = this.elements;
          if (!(t[e] || this.layers[e].ty === 99)) {
            var r = this.createItem(this.layers[e], this, this.globalData);
            (t[e] = r), r.initExpressions();
          }
        }),
        (CanvasRendererBase.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length; ) {
            var e = this.pendingElements.pop();
            e.checkParenting();
          }
        }),
        (CanvasRendererBase.prototype.hide = function () {
          this.animationItem.container.style.display = "none";
        }),
        (CanvasRendererBase.prototype.show = function () {
          this.animationItem.container.style.display = "block";
        });
      function CVCompElement(e, t, r) {
        (this.completeLayers = !1),
          (this.layers = e.layers),
          (this.pendingElements = []),
          (this.elements = createSizedArray(this.layers.length)),
          this.initElement(e, t, r),
          (this.tm = e.tm
            ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this)
            : { _placeholder: !0 });
      }
      extendPrototype(
        [CanvasRendererBase, ICompElement, CVBaseElement],
        CVCompElement
      ),
        (CVCompElement.prototype.renderInnerContent = function () {
          var e = this.canvasContext;
          e.beginPath(),
            e.moveTo(0, 0),
            e.lineTo(this.data.w, 0),
            e.lineTo(this.data.w, this.data.h),
            e.lineTo(0, this.data.h),
            e.lineTo(0, 0),
            e.clip();
          var t,
            r = this.layers.length;
          for (t = r - 1; t >= 0; t -= 1)
            (this.completeLayers || this.elements[t]) &&
              this.elements[t].renderFrame();
        }),
        (CVCompElement.prototype.destroy = function () {
          var e,
            t = this.layers.length;
          for (e = t - 1; e >= 0; e -= 1)
            this.elements[e] && this.elements[e].destroy();
          (this.layers = null), (this.elements = null);
        }),
        (CVCompElement.prototype.createComp = function (e) {
          return new CVCompElement(e, this.globalData, this);
        });
      function CanvasRenderer(e, t) {
        (this.animationItem = e),
          (this.renderConfig = {
            clearCanvas: t && t.clearCanvas !== void 0 ? t.clearCanvas : !0,
            context: (t && t.context) || null,
            progressiveLoad: (t && t.progressiveLoad) || !1,
            preserveAspectRatio:
              (t && t.preserveAspectRatio) || "xMidYMid meet",
            imagePreserveAspectRatio:
              (t && t.imagePreserveAspectRatio) || "xMidYMid slice",
            contentVisibility: (t && t.contentVisibility) || "visible",
            className: (t && t.className) || "",
            id: (t && t.id) || "",
            runExpressions:
              !t || t.runExpressions === void 0 || t.runExpressions,
          }),
          (this.renderConfig.dpr = (t && t.dpr) || 1),
          this.animationItem.wrapper &&
            (this.renderConfig.dpr =
              (t && t.dpr) || window.devicePixelRatio || 1),
          (this.renderedFrame = -1),
          (this.globalData = {
            frameNum: -1,
            _imdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1,
          }),
          (this.contextData = new CVContextData()),
          (this.elements = []),
          (this.pendingElements = []),
          (this.transformMat = new Matrix()),
          (this.completeLayers = !1),
          (this.rendererType = "canvas");
      }
      extendPrototype([CanvasRendererBase], CanvasRenderer),
        (CanvasRenderer.prototype.createComp = function (e) {
          return new CVCompElement(e, this.globalData, this);
        });
      function HBaseElement() {}
      (HBaseElement.prototype = {
        checkBlendMode: function () {},
        initRendererElement: function () {
          (this.baseElement = createTag(this.data.tg || "div")),
            this.data.hasMask
              ? ((this.svgElement = createNS("svg")),
                (this.layerElement = createNS("g")),
                (this.maskedElement = this.layerElement),
                this.svgElement.appendChild(this.layerElement),
                this.baseElement.appendChild(this.svgElement))
              : (this.layerElement = this.baseElement),
            styleDiv(this.baseElement);
        },
        createContainerElements: function () {
          (this.renderableEffectsManager = new CVEffects()),
            (this.transformedElement = this.baseElement),
            (this.maskedElement = this.layerElement),
            this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
            this.data.cl &&
              this.layerElement.setAttribute("class", this.data.cl),
            this.data.bm !== 0 && this.setBlendMode();
        },
        renderElement: function () {
          var t = this.transformedElement ? this.transformedElement.style : {};
          if (this.finalTransform._matimdf) {
            var r = this.finalTransform.mat.toCSS();
            (t.transform = r), (t.webkitTransform = r);
          }
          this.finalTransform._opimdf &&
            (t.opacity = this.finalTransform.mProp.o.v);
        },
        renderFrame: function () {
          this.data.hd ||
            this.hidden ||
            (this.renderTransform(),
            this.renderRenderable(),
            this.renderElement(),
            this.renderInnerContent(),
            this._isFirstFrame && (this._isFirstFrame = !1));
        },
        destroy: function () {
          (this.layerElement = null),
            (this.transformedElement = null),
            this.matteElement && (this.matteElement = null),
            this.maskManager &&
              (this.maskManager.destroy(), (this.maskManager = null));
        },
        createRenderableComponents: function () {
          this.maskManager = new MaskElement(this.data, this, this.globalData);
        },
        addEffects: function () {},
        setMatte: function () {},
      }),
        (HBaseElement.prototype.getBaseElement =
          SVGBaseElement.prototype.getBaseElement),
        (HBaseElement.prototype.destroyBaseElement =
          HBaseElement.prototype.destroy),
        (HBaseElement.prototype.buildElementParenting =
          BaseRenderer.prototype.buildElementParenting);
      function HSolidElement(e, t, r) {
        this.initElement(e, t, r);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          HBaseElement,
          HierarchyElement,
          FrameElement,
          RenderableDOMElement,
        ],
        HSolidElement
      ),
        (HSolidElement.prototype.createContent = function () {
          var e;
          this.data.hasMask
            ? ((e = createNS("rect")),
              e.setAttribute("width", this.data.sw),
              e.setAttribute("height", this.data.sh),
              e.setAttribute("fill", this.data.sc),
              this.svgElement.setAttribute("width", this.data.sw),
              this.svgElement.setAttribute("height", this.data.sh))
            : ((e = createTag("div")),
              (e.style.width = this.data.sw + "px"),
              (e.style.height = this.data.sh + "px"),
              (e.style.backgroundColor = this.data.sc)),
            this.layerElement.appendChild(e);
        });
      function HShapeElement(e, t, r) {
        (this.shapes = []),
          (this.shapesData = e.shapes),
          (this.stylesList = []),
          (this.shapeModifiers = []),
          (this.itemsData = []),
          (this.processedElements = []),
          (this.animatedContents = []),
          (this.shapesContainer = createNS("g")),
          this.initElement(e, t, r),
          (this.prevViewData = []),
          (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 });
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          HSolidElement,
          SVGShapeElement,
          HBaseElement,
          HierarchyElement,
          FrameElement,
          RenderableElement,
        ],
        HShapeElement
      ),
        (HShapeElement.prototype._renderShapeFrame =
          HShapeElement.prototype.renderInnerContent),
        (HShapeElement.prototype.createContent = function () {
          var e;
          if (((this.baseElement.style.fontSize = 0), this.data.hasMask))
            this.layerElement.appendChild(this.shapesContainer),
              (e = this.svgElement);
          else {
            e = createNS("svg");
            var t = this.comp.data ? this.comp.data : this.globalData.compSize;
            e.setAttribute("width", t.w),
              e.setAttribute("height", t.h),
              e.appendChild(this.shapesContainer),
              this.layerElement.appendChild(e);
          }
          this.searchShapes(
            this.shapesData,
            this.itemsData,
            this.prevViewData,
            this.shapesContainer,
            0,
            [],
            !0
          ),
            this.filterUniqueShapes(),
            (this.shapeCont = e);
        }),
        (HShapeElement.prototype.getTransformedPoint = function (e, t) {
          var r,
            s = e.length;
          for (r = 0; r < s; r += 1)
            t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
          return t;
        }),
        (HShapeElement.prototype.calculateShapeBoundingBox = function (e, t) {
          var r = e.sh.v,
            s = e.transformers,
            a,
            n = r._length,
            o,
            f,
            l,
            p;
          if (!(n <= 1)) {
            for (a = 0; a < n - 1; a += 1)
              (o = this.getTransformedPoint(s, r.v[a])),
                (f = this.getTransformedPoint(s, r.o[a])),
                (l = this.getTransformedPoint(s, r.i[a + 1])),
                (p = this.getTransformedPoint(s, r.v[a + 1])),
                this.checkBounds(o, f, l, p, t);
            r.c &&
              ((o = this.getTransformedPoint(s, r.v[a])),
              (f = this.getTransformedPoint(s, r.o[a])),
              (l = this.getTransformedPoint(s, r.i[0])),
              (p = this.getTransformedPoint(s, r.v[0])),
              this.checkBounds(o, f, l, p, t));
          }
        }),
        (HShapeElement.prototype.checkBounds = function (e, t, r, s, a) {
          this.getBoundsOfCurve(e, t, r, s);
          var n = this.shapeBoundingBox;
          (a.x = bmMin(n.left, a.x)),
            (a.xMax = bmMax(n.right, a.xMax)),
            (a.y = bmMin(n.top, a.y)),
            (a.yMax = bmMax(n.bottom, a.yMax));
        }),
        (HShapeElement.prototype.shapeBoundingBox = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }),
        (HShapeElement.prototype.tempBoundingBox = {
          x: 0,
          xMax: 0,
          y: 0,
          yMax: 0,
          width: 0,
          height: 0,
        }),
        (HShapeElement.prototype.getBoundsOfCurve = function (e, t, r, s) {
          for (
            var a = [
                [e[0], s[0]],
                [e[1], s[1]],
              ],
              n,
              o,
              f,
              l,
              p,
              b,
              P,
              u = 0;
            u < 2;
            ++u
          )
            (o = 6 * e[u] - 12 * t[u] + 6 * r[u]),
              (n = -3 * e[u] + 9 * t[u] - 9 * r[u] + 3 * s[u]),
              (f = 3 * t[u] - 3 * e[u]),
              (o |= 0),
              (n |= 0),
              (f |= 0),
              (n === 0 && o === 0) ||
                (n === 0
                  ? ((l = -f / o),
                    l > 0 &&
                      l < 1 &&
                      a[u].push(this.calculateF(l, e, t, r, s, u)))
                  : ((p = o * o - 4 * f * n),
                    p >= 0 &&
                      ((b = (-o + bmSqrt(p)) / (2 * n)),
                      b > 0 &&
                        b < 1 &&
                        a[u].push(this.calculateF(b, e, t, r, s, u)),
                      (P = (-o - bmSqrt(p)) / (2 * n)),
                      P > 0 &&
                        P < 1 &&
                        a[u].push(this.calculateF(P, e, t, r, s, u)))));
          (this.shapeBoundingBox.left = bmMin.apply(null, a[0])),
            (this.shapeBoundingBox.top = bmMin.apply(null, a[1])),
            (this.shapeBoundingBox.right = bmMax.apply(null, a[0])),
            (this.shapeBoundingBox.bottom = bmMax.apply(null, a[1]));
        }),
        (HShapeElement.prototype.calculateF = function (e, t, r, s, a, n) {
          return (
            bmPow(1 - e, 3) * t[n] +
            3 * bmPow(1 - e, 2) * e * r[n] +
            3 * (1 - e) * bmPow(e, 2) * s[n] +
            bmPow(e, 3) * a[n]
          );
        }),
        (HShapeElement.prototype.calculateBoundingBox = function (e, t) {
          var r,
            s = e.length;
          for (r = 0; r < s; r += 1)
            e[r] && e[r].sh
              ? this.calculateShapeBoundingBox(e[r], t)
              : e[r] && e[r].it
              ? this.calculateBoundingBox(e[r].it, t)
              : e[r] &&
                e[r].style &&
                e[r].w &&
                this.expandStrokeBoundingBox(e[r].w, t);
        }),
        (HShapeElement.prototype.expandStrokeBoundingBox = function (e, t) {
          var r = 0;
          if (e.keyframes) {
            for (var s = 0; s < e.keyframes.length; s += 1) {
              var a = e.keyframes[s].s;
              a > r && (r = a);
            }
            r *= e.mult;
          } else r = e.v * e.mult;
          (t.x -= r), (t.xMax += r), (t.y -= r), (t.yMax += r);
        }),
        (HShapeElement.prototype.currentBoxContains = function (e) {
          return (
            this.currentBBox.x <= e.x &&
            this.currentBBox.y <= e.y &&
            this.currentBBox.width + this.currentBBox.x >= e.x + e.width &&
            this.currentBBox.height + this.currentBBox.y >= e.y + e.height
          );
        }),
        (HShapeElement.prototype.renderInnerContent = function () {
          if (
            (this._renderShapeFrame(),
            !this.hidden && (this._isFirstFrame || this._imdf))
          ) {
            var e = this.tempBoundingBox,
              t = 999999;
            if (
              ((e.x = t),
              (e.xMax = -t),
              (e.y = t),
              (e.yMax = -t),
              this.calculateBoundingBox(this.itemsData, e),
              (e.width = e.xMax < e.x ? 0 : e.xMax - e.x),
              (e.height = e.yMax < e.y ? 0 : e.yMax - e.y),
              this.currentBoxContains(e))
            )
              return;
            var r = !1;
            if (
              (this.currentBBox.w !== e.width &&
                ((this.currentBBox.w = e.width),
                this.shapeCont.setAttribute("width", e.width),
                (r = !0)),
              this.currentBBox.h !== e.height &&
                ((this.currentBBox.h = e.height),
                this.shapeCont.setAttribute("height", e.height),
                (r = !0)),
              r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y)
            ) {
              (this.currentBBox.w = e.width),
                (this.currentBBox.h = e.height),
                (this.currentBBox.x = e.x),
                (this.currentBBox.y = e.y),
                this.shapeCont.setAttribute(
                  "viewBox",
                  this.currentBBox.x +
                    " " +
                    this.currentBBox.y +
                    " " +
                    this.currentBBox.w +
                    " " +
                    this.currentBBox.h
                );
              var s = this.shapeCont.style,
                a =
                  "translate(" +
                  this.currentBBox.x +
                  "px," +
                  this.currentBBox.y +
                  "px)";
              (s.transform = a), (s.webkitTransform = a);
            }
          }
        });
      function HTextElement(e, t, r) {
        (this.textSpans = []),
          (this.textPaths = []),
          (this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }),
          (this.renderType = "svg"),
          (this.isMasked = !1),
          this.initElement(e, t, r);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          HBaseElement,
          HierarchyElement,
          FrameElement,
          RenderableDOMElement,
          ITextElement,
        ],
        HTextElement
      ),
        (HTextElement.prototype.createContent = function () {
          if (((this.isMasked = this.checkMasks()), this.isMasked)) {
            (this.renderType = "svg"),
              (this.compW = this.comp.data.w),
              (this.compH = this.comp.data.h),
              this.svgElement.setAttribute("width", this.compW),
              this.svgElement.setAttribute("height", this.compH);
            var e = createNS("g");
            this.maskedElement.appendChild(e), (this.innerElem = e);
          } else
            (this.renderType = "html"), (this.innerElem = this.layerElement);
          this.checkParenting();
        }),
        (HTextElement.prototype.buildNewText = function () {
          var e = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
          var t = this.innerElem.style,
            r = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
          (t.fill = r),
            (t.color = r),
            e.sc &&
              ((t.stroke = this.buildColor(e.sc)),
              (t.strokeWidth = e.sw + "px"));
          var s = this.globalData.fontManager.getFontByName(e.f);
          if (!this.globalData.fontManager.chars)
            if (
              ((t.fontSize = e.finalSize + "px"),
              (t.lineHeight = e.finalSize + "px"),
              s.fClass)
            )
              this.innerElem.className = s.fClass;
            else {
              t.fontFamily = s.fFamily;
              var a = e.fWeight,
                n = e.fStyle;
              (t.fontStyle = n), (t.fontWeight = a);
            }
          var o,
            f,
            l = e.l;
          f = l.length;
          var p,
            b,
            P,
            u = this.mHelper,
            _,
            x = "",
            g = 0;
          for (o = 0; o < f; o += 1) {
            if (
              (this.globalData.fontManager.chars
                ? (this.textPaths[g]
                    ? (p = this.textPaths[g])
                    : ((p = createNS("path")),
                      p.setAttribute("stroke-linecap", lineCapEnum[1]),
                      p.setAttribute("stroke-linejoin", lineJoinEnum[2]),
                      p.setAttribute("stroke-miterlimit", "4")),
                  this.isMasked ||
                    (this.textSpans[g]
                      ? ((b = this.textSpans[g]), (P = b.children[0]))
                      : ((b = createTag("div")),
                        (b.style.lineHeight = 0),
                        (P = createNS("svg")),
                        P.appendChild(p),
                        styleDiv(b))))
                : this.isMasked
                ? (p = this.textPaths[g] ? this.textPaths[g] : createNS("text"))
                : this.textSpans[g]
                ? ((b = this.textSpans[g]), (p = this.textPaths[g]))
                : ((b = createTag("span")),
                  styleDiv(b),
                  (p = createTag("span")),
                  styleDiv(p),
                  b.appendChild(p)),
              this.globalData.fontManager.chars)
            ) {
              var A = this.globalData.fontManager.getCharData(
                  e.finalText[o],
                  s.fStyle,
                  this.globalData.fontManager.getFontByName(e.f).fFamily
                ),
                d;
              if (
                (A ? (d = A.data) : (d = null),
                u.reset(),
                d &&
                  d.shapes &&
                  d.shapes.length &&
                  ((_ = d.shapes[0].it),
                  u.scale(e.finalSize / 100, e.finalSize / 100),
                  (x = this.createPathShape(u, _)),
                  p.setAttribute("d", x)),
                this.isMasked)
              )
                this.innerElem.appendChild(p);
              else {
                if ((this.innerElem.appendChild(b), d && d.shapes)) {
                  document.body.appendChild(P);
                  var y = P.getBBox();
                  P.setAttribute("width", y.width + 2),
                    P.setAttribute("height", y.height + 2),
                    P.setAttribute(
                      "viewBox",
                      y.x -
                        1 +
                        " " +
                        (y.y - 1) +
                        " " +
                        (y.width + 2) +
                        " " +
                        (y.height + 2)
                    );
                  var c = P.style,
                    m = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)";
                  (c.transform = m),
                    (c.webkitTransform = m),
                    (l[o].yOffset = y.y - 1);
                } else P.setAttribute("width", 1), P.setAttribute("height", 1);
                b.appendChild(P);
              }
            } else if (
              ((p.textContent = l[o].val),
              p.setAttributeNS(
                "http://www.w3.org/XML/1998/namespace",
                "xml:space",
                "preserve"
              ),
              this.isMasked)
            )
              this.innerElem.appendChild(p);
            else {
              this.innerElem.appendChild(b);
              var E = p.style,
                S = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
              (E.transform = S), (E.webkitTransform = S);
            }
            this.isMasked ? (this.textSpans[g] = p) : (this.textSpans[g] = b),
              (this.textSpans[g].style.display = "block"),
              (this.textPaths[g] = p),
              (g += 1);
          }
          for (; g < this.textSpans.length; )
            (this.textSpans[g].style.display = "none"), (g += 1);
        }),
        (HTextElement.prototype.renderInnerContent = function () {
          var e;
          if (this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
            if (this.isMasked && this.finalTransform._matimdf) {
              this.svgElement.setAttribute(
                "viewBox",
                -this.finalTransform.mProp.p.v[0] +
                  " " +
                  -this.finalTransform.mProp.p.v[1] +
                  " " +
                  this.compW +
                  " " +
                  this.compH
              ),
                (e = this.svgElement.style);
              var t =
                "translate(" +
                -this.finalTransform.mProp.p.v[0] +
                "px," +
                -this.finalTransform.mProp.p.v[1] +
                "px)";
              (e.transform = t), (e.webkitTransform = t);
            }
          }
          if (
            (this.textAnimator.getMeasures(
              this.textProperty.currentData,
              this.lettersChangedFlag
            ),
            !(
              !this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag
            ))
          ) {
            var r,
              s,
              a = 0,
              n = this.textAnimator.renderedLetters,
              o = this.textProperty.currentData.l;
            s = o.length;
            var f, l, p;
            for (r = 0; r < s; r += 1)
              o[r].n
                ? (a += 1)
                : ((l = this.textSpans[r]),
                  (p = this.textPaths[r]),
                  (f = n[a]),
                  (a += 1),
                  f._imdf.m &&
                    (this.isMasked
                      ? l.setAttribute("transform", f.m)
                      : ((l.style.webkitTransform = f.m),
                        (l.style.transform = f.m))),
                  (l.style.opacity = f.o),
                  f.sw && f._imdf.sw && p.setAttribute("stroke-width", f.sw),
                  f.sc && f._imdf.sc && p.setAttribute("stroke", f.sc),
                  f.fc &&
                    f._imdf.fc &&
                    (p.setAttribute("fill", f.fc), (p.style.color = f.fc)));
            if (
              this.innerElem.getBBox &&
              !this.hidden &&
              (this._isFirstFrame || this._imdf)
            ) {
              var b = this.innerElem.getBBox();
              this.currentBBox.w !== b.width &&
                ((this.currentBBox.w = b.width),
                this.svgElement.setAttribute("width", b.width)),
                this.currentBBox.h !== b.height &&
                  ((this.currentBBox.h = b.height),
                  this.svgElement.setAttribute("height", b.height));
              var P = 1;
              if (
                this.currentBBox.w !== b.width + P * 2 ||
                this.currentBBox.h !== b.height + P * 2 ||
                this.currentBBox.x !== b.x - P ||
                this.currentBBox.y !== b.y - P
              ) {
                (this.currentBBox.w = b.width + P * 2),
                  (this.currentBBox.h = b.height + P * 2),
                  (this.currentBBox.x = b.x - P),
                  (this.currentBBox.y = b.y - P),
                  this.svgElement.setAttribute(
                    "viewBox",
                    this.currentBBox.x +
                      " " +
                      this.currentBBox.y +
                      " " +
                      this.currentBBox.w +
                      " " +
                      this.currentBBox.h
                  ),
                  (e = this.svgElement.style);
                var u =
                  "translate(" +
                  this.currentBBox.x +
                  "px," +
                  this.currentBBox.y +
                  "px)";
                (e.transform = u), (e.webkitTransform = u);
              }
            }
          }
        });
      function HCameraElement(e, t, r) {
        this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
        var s = PropertyFactory.getProp;
        if (
          ((this.pe = s(this, e.pe, 0, 0, this)),
          e.ks.p.s
            ? ((this.px = s(this, e.ks.p.x, 1, 0, this)),
              (this.py = s(this, e.ks.p.y, 1, 0, this)),
              (this.pz = s(this, e.ks.p.z, 1, 0, this)))
            : (this.p = s(this, e.ks.p, 1, 0, this)),
          e.ks.a && (this.a = s(this, e.ks.a, 1, 0, this)),
          e.ks.or.k.length && e.ks.or.k[0].to)
        ) {
          var a,
            n = e.ks.or.k.length;
          for (a = 0; a < n; a += 1)
            (e.ks.or.k[a].to = null), (e.ks.or.k[a].ti = null);
        }
        (this.or = s(this, e.ks.or, 1, degToRads, this)),
          (this.or.sh = !0),
          (this.rx = s(this, e.ks.rx, 0, degToRads, this)),
          (this.ry = s(this, e.ks.ry, 0, degToRads, this)),
          (this.rz = s(this, e.ks.rz, 0, degToRads, this)),
          (this.mat = new Matrix()),
          (this._prevMat = new Matrix()),
          (this._isFirstFrame = !0),
          (this.finalTransform = { mProp: this });
      }
      extendPrototype(
        [BaseElement, FrameElement, HierarchyElement],
        HCameraElement
      ),
        (HCameraElement.prototype.setup = function () {
          var e,
            t = this.comp.threeDElements.length,
            r,
            s,
            a;
          for (e = 0; e < t; e += 1)
            if (((r = this.comp.threeDElements[e]), r.type === "3d")) {
              (s = r.perspectiveElem.style), (a = r.container.style);
              var n = this.pe.v + "px",
                o = "0px 0px 0px",
                f = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              (s.perspective = n),
                (s.webkitPerspective = n),
                (a.transformOrigin = o),
                (a.mozTransformOrigin = o),
                (a.webkitTransformOrigin = o),
                (s.transform = f),
                (s.webkitTransform = f);
            }
        }),
        (HCameraElement.prototype.createElements = function () {}),
        (HCameraElement.prototype.hide = function () {}),
        (HCameraElement.prototype.renderFrame = function () {
          var e = this._isFirstFrame,
            t,
            r;
          if (this.hierarchy)
            for (r = this.hierarchy.length, t = 0; t < r; t += 1)
              e = this.hierarchy[t].finalTransform.mProp._imdf || e;
          if (
            e ||
            this.pe._imdf ||
            (this.p && this.p._imdf) ||
            (this.px && (this.px._imdf || this.py._imdf || this.pz._imdf)) ||
            this.rx._imdf ||
            this.ry._imdf ||
            this.rz._imdf ||
            this.or._imdf ||
            (this.a && this.a._imdf)
          ) {
            if ((this.mat.reset(), this.hierarchy))
              for (r = this.hierarchy.length - 1, t = r; t >= 0; t -= 1) {
                var s = this.hierarchy[t].finalTransform.mProp;
                this.mat.translate(-s.p.v[0], -s.p.v[1], s.p.v[2]),
                  this.mat
                    .rotateX(-s.or.v[0])
                    .rotateY(-s.or.v[1])
                    .rotateZ(s.or.v[2]),
                  this.mat.rotateX(-s.rx.v).rotateY(-s.ry.v).rotateZ(s.rz.v),
                  this.mat.scale(1 / s.s.v[0], 1 / s.s.v[1], 1 / s.s.v[2]),
                  this.mat.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
              }
            if (
              (this.p
                ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2])
                : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
              this.a)
            ) {
              var a;
              this.p
                ? (a = [
                    this.p.v[0] - this.a.v[0],
                    this.p.v[1] - this.a.v[1],
                    this.p.v[2] - this.a.v[2],
                  ])
                : (a = [
                    this.px.v - this.a.v[0],
                    this.py.v - this.a.v[1],
                    this.pz.v - this.a.v[2],
                  ]);
              var n = Math.sqrt(
                  Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2)
                ),
                o = [a[0] / n, a[1] / n, a[2] / n],
                f = Math.sqrt(o[2] * o[2] + o[0] * o[0]),
                l = Math.atan2(o[1], f),
                p = Math.atan2(o[0], -o[2]);
              this.mat.rotateY(p).rotateX(-l);
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
              this.mat
                .rotateX(-this.or.v[0])
                .rotateY(-this.or.v[1])
                .rotateZ(this.or.v[2]),
              this.mat.translate(
                this.globalData.compSize.w / 2,
                this.globalData.compSize.h / 2,
                0
              ),
              this.mat.translate(0, 0, this.pe.v);
            var b = !this._prevMat.equals(this.mat);
            if ((b || this.pe._imdf) && this.comp.threeDElements) {
              r = this.comp.threeDElements.length;
              var P, u, _;
              for (t = 0; t < r; t += 1)
                if (((P = this.comp.threeDElements[t]), P.type === "3d")) {
                  if (b) {
                    var x = this.mat.toCSS();
                    (_ = P.container.style),
                      (_.transform = x),
                      (_.webkitTransform = x);
                  }
                  this.pe._imdf &&
                    ((u = P.perspectiveElem.style),
                    (u.perspective = this.pe.v + "px"),
                    (u.webkitPerspective = this.pe.v + "px"));
                }
              this.mat.clone(this._prevMat);
            }
          }
          this._isFirstFrame = !1;
        }),
        (HCameraElement.prototype.prepareFrame = function (e) {
          this.prepareProperties(e, !0);
        }),
        (HCameraElement.prototype.destroy = function () {}),
        (HCameraElement.prototype.getBaseElement = function () {
          return null;
        });
      function HImageElement(e, t, r) {
        (this.assetData = t.getAssetData(e.refId)), this.initElement(e, t, r);
      }
      extendPrototype(
        [
          BaseElement,
          TransformElement,
          HBaseElement,
          HSolidElement,
          HierarchyElement,
          FrameElement,
          RenderableElement,
        ],
        HImageElement
      ),
        (HImageElement.prototype.createContent = function () {
          var e = this.globalData.getAssetsPath(this.assetData),
            t = new Image();
          this.data.hasMask
            ? ((this.imageElem = createNS("image")),
              this.imageElem.setAttribute("width", this.assetData.w + "px"),
              this.imageElem.setAttribute("height", this.assetData.h + "px"),
              this.imageElem.setAttributeNS(
                "http://www.w3.org/1999/xlink",
                "href",
                e
              ),
              this.layerElement.appendChild(this.imageElem),
              this.baseElement.setAttribute("width", this.assetData.w),
              this.baseElement.setAttribute("height", this.assetData.h))
            : this.layerElement.appendChild(t),
            (t.crossOrigin = "anonymous"),
            (t.src = e),
            this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
        });
      function HybridRendererBase(e, t) {
        (this.animationItem = e),
          (this.layers = null),
          (this.renderedFrame = -1),
          (this.renderConfig = {
            className: (t && t.className) || "",
            imagePreserveAspectRatio:
              (t && t.imagePreserveAspectRatio) || "xMidYMid slice",
            hideOnTransparent: !(t && t.hideOnTransparent === !1),
            filterSize: {
              width: (t && t.filterSize && t.filterSize.width) || "400%",
              height: (t && t.filterSize && t.filterSize.height) || "400%",
              x: (t && t.filterSize && t.filterSize.x) || "-100%",
              y: (t && t.filterSize && t.filterSize.y) || "-100%",
            },
          }),
          (this.globalData = {
            _imdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig,
          }),
          (this.pendingElements = []),
          (this.elements = []),
          (this.threeDElements = []),
          (this.destroyed = !1),
          (this.camera = null),
          (this.supports3d = !0),
          (this.rendererType = "html");
      }
      extendPrototype([BaseRenderer], HybridRendererBase),
        (HybridRendererBase.prototype.buildItem =
          SVGRenderer.prototype.buildItem),
        (HybridRendererBase.prototype.checkPendingElements = function () {
          for (; this.pendingElements.length; ) {
            var e = this.pendingElements.pop();
            e.checkParenting();
          }
        }),
        (HybridRendererBase.prototype.appendElementInPos = function (e, t) {
          var r = e.getBaseElement();
          if (r) {
            var s = this.layers[t];
            if (!s.ddd || !this.supports3d)
              if (this.threeDElements) this.addTo3dContainer(r, t);
              else {
                for (var a = 0, n, o, f; a < t; )
                  this.elements[a] &&
                    this.elements[a] !== !0 &&
                    this.elements[a].getBaseElement &&
                    ((o = this.elements[a]),
                    (f = this.layers[a].ddd
                      ? this.getThreeDContainerByPos(a)
                      : o.getBaseElement()),
                    (n = f || n)),
                    (a += 1);
                n
                  ? (!s.ddd || !this.supports3d) &&
                    this.layerElement.insertBefore(r, n)
                  : (!s.ddd || !this.supports3d) &&
                    this.layerElement.appendChild(r);
              }
            else this.addTo3dContainer(r, t);
          }
        }),
        (HybridRendererBase.prototype.createShape = function (e) {
          return this.supports3d
            ? new HShapeElement(e, this.globalData, this)
            : new SVGShapeElement(e, this.globalData, this);
        }),
        (HybridRendererBase.prototype.createText = function (e) {
          return this.supports3d
            ? new HTextElement(e, this.globalData, this)
            : new SVGTextLottieElement(e, this.globalData, this);
        }),
        (HybridRendererBase.prototype.createCamera = function (e) {
          return (
            (this.camera = new HCameraElement(e, this.globalData, this)),
            this.camera
          );
        }),
        (HybridRendererBase.prototype.createImage = function (e) {
          return this.supports3d
            ? new HImageElement(e, this.globalData, this)
            : new IImageElement(e, this.globalData, this);
        }),
        (HybridRendererBase.prototype.createSolid = function (e) {
          return this.supports3d
            ? new HSolidElement(e, this.globalData, this)
            : new ISolidElement(e, this.globalData, this);
        }),
        (HybridRendererBase.prototype.createNull =
          SVGRenderer.prototype.createNull),
        (HybridRendererBase.prototype.getThreeDContainerByPos = function (e) {
          for (var t = 0, r = this.threeDElements.length; t < r; ) {
            if (
              this.threeDElements[t].startPos <= e &&
              this.threeDElements[t].endPos >= e
            )
              return this.threeDElements[t].perspectiveElem;
            t += 1;
          }
          return null;
        }),
        (HybridRendererBase.prototype.createThreeDContainer = function (e, t) {
          var r = createTag("div"),
            s,
            a;
          styleDiv(r);
          var n = createTag("div");
          if ((styleDiv(n), t === "3d")) {
            (s = r.style),
              (s.width = this.globalData.compSize.w + "px"),
              (s.height = this.globalData.compSize.h + "px");
            var o = "50% 50%";
            (s.webkitTransformOrigin = o),
              (s.mozTransformOrigin = o),
              (s.transformOrigin = o),
              (a = n.style);
            var f = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            (a.transform = f), (a.webkitTransform = f);
          }
          r.appendChild(n);
          var l = {
            container: n,
            perspectiveElem: r,
            startPos: e,
            endPos: e,
            type: t,
          };
          return this.threeDElements.push(l), l;
        }),
        (HybridRendererBase.prototype.build3dContainers = function () {
          var e,
            t = this.layers.length,
            r,
            s = "";
          for (e = 0; e < t; e += 1)
            this.layers[e].ddd && this.layers[e].ty !== 3
              ? (s !== "3d" &&
                  ((s = "3d"), (r = this.createThreeDContainer(e, "3d"))),
                (r.endPos = Math.max(r.endPos, e)))
              : (s !== "2d" &&
                  ((s = "2d"), (r = this.createThreeDContainer(e, "2d"))),
                (r.endPos = Math.max(r.endPos, e)));
          for (t = this.threeDElements.length, e = t - 1; e >= 0; e -= 1)
            this.resizerElem.appendChild(
              this.threeDElements[e].perspectiveElem
            );
        }),
        (HybridRendererBase.prototype.addTo3dContainer = function (e, t) {
          for (var r = 0, s = this.threeDElements.length; r < s; ) {
            if (t <= this.threeDElements[r].endPos) {
              for (var a = this.threeDElements[r].startPos, n; a < t; )
                this.elements[a] &&
                  this.elements[a].getBaseElement &&
                  (n = this.elements[a].getBaseElement()),
                  (a += 1);
              n
                ? this.threeDElements[r].container.insertBefore(e, n)
                : this.threeDElements[r].container.appendChild(e);
              break;
            }
            r += 1;
          }
        }),
        (HybridRendererBase.prototype.configAnimation = function (e) {
          var t = createTag("div"),
            r = this.animationItem.wrapper,
            s = t.style;
          (s.width = e.w + "px"),
            (s.height = e.h + "px"),
            (this.resizerElem = t),
            styleDiv(t),
            (s.transformStyle = "flat"),
            (s.mozTransformStyle = "flat"),
            (s.webkitTransformStyle = "flat"),
            this.renderConfig.className &&
              t.setAttribute("class", this.renderConfig.className),
            r.appendChild(t),
            (s.overflow = "hidden");
          var a = createNS("svg");
          a.setAttribute("width", "1"),
            a.setAttribute("height", "1"),
            styleDiv(a),
            this.resizerElem.appendChild(a);
          var n = createNS("defs");
          a.appendChild(n),
            (this.data = e),
            this.setupGlobalData(e, a),
            (this.globalData.defs = n),
            (this.layers = e.layers),
            (this.layerElement = this.resizerElem),
            this.build3dContainers(),
            this.updateContainerSize();
        }),
        (HybridRendererBase.prototype.destroy = function () {
          this.animationItem.wrapper &&
            (this.animationItem.wrapper.innerText = ""),
            (this.animationItem.container = null),
            (this.globalData.defs = null);
          var e,
            t = this.layers ? this.layers.length : 0;
          for (e = 0; e < t; e += 1)
            this.elements[e] &&
              this.elements[e].destroy &&
              this.elements[e].destroy();
          (this.elements.length = 0),
            (this.destroyed = !0),
            (this.animationItem = null);
        }),
        (HybridRendererBase.prototype.updateContainerSize = function () {
          var e = this.animationItem.wrapper.offsetWidth,
            t = this.animationItem.wrapper.offsetHeight,
            r = e / t,
            s = this.globalData.compSize.w / this.globalData.compSize.h,
            a,
            n,
            o,
            f;
          s > r
            ? ((a = e / this.globalData.compSize.w),
              (n = e / this.globalData.compSize.w),
              (o = 0),
              (f =
                (t -
                  this.globalData.compSize.h *
                    (e / this.globalData.compSize.w)) /
                2))
            : ((a = t / this.globalData.compSize.h),
              (n = t / this.globalData.compSize.h),
              (o =
                (e -
                  this.globalData.compSize.w *
                    (t / this.globalData.compSize.h)) /
                2),
              (f = 0));
          var l = this.resizerElem.style;
          (l.webkitTransform =
            "matrix3d(" +
            a +
            ",0,0,0,0," +
            n +
            ",0,0,0,0,1,0," +
            o +
            "," +
            f +
            ",0,1)"),
            (l.transform = l.webkitTransform);
        }),
        (HybridRendererBase.prototype.renderFrame =
          SVGRenderer.prototype.renderFrame),
        (HybridRendererBase.prototype.hide = function () {
          this.resizerElem.style.display = "none";
        }),
        (HybridRendererBase.prototype.show = function () {
          this.resizerElem.style.display = "block";
        }),
        (HybridRendererBase.prototype.initItems = function () {
          if ((this.buildAllItems(), this.camera)) this.camera.setup();
          else {
            var e = this.globalData.compSize.w,
              t = this.globalData.compSize.h,
              r,
              s = this.threeDElements.length;
            for (r = 0; r < s; r += 1) {
              var a = this.threeDElements[r].perspectiveElem.style;
              (a.webkitPerspective =
                Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2)) + "px"),
                (a.perspective = a.webkitPerspective);
            }
          }
        }),
        (HybridRendererBase.prototype.searchExtraCompositions = function (e) {
          var t,
            r = e.length,
            s = createTag("div");
          for (t = 0; t < r; t += 1)
            if (e[t].xt) {
              var a = this.createComp(e[t], s, this.globalData.comp, null);
              a.initExpressions(),
                this.globalData.projectInterface.registerComposition(a);
            }
        });
      function HCompElement(e, t, r) {
        (this.layers = e.layers),
          (this.supports3d = !e.hasMask),
          (this.completeLayers = !1),
          (this.pendingElements = []),
          (this.elements = this.layers
            ? createSizedArray(this.layers.length)
            : []),
          this.initElement(e, t, r),
          (this.tm = e.tm
            ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this)
            : { _placeholder: !0 });
      }
      extendPrototype(
        [HybridRendererBase, ICompElement, HBaseElement],
        HCompElement
      ),
        (HCompElement.prototype._createBaseContainerElements =
          HCompElement.prototype.createContainerElements),
        (HCompElement.prototype.createContainerElements = function () {
          this._createBaseContainerElements(),
            this.data.hasMask
              ? (this.svgElement.setAttribute("width", this.data.w),
                this.svgElement.setAttribute("height", this.data.h),
                (this.transformedElement = this.baseElement))
              : (this.transformedElement = this.layerElement);
        }),
        (HCompElement.prototype.addTo3dContainer = function (e, t) {
          for (var r = 0, s; r < t; )
            this.elements[r] &&
              this.elements[r].getBaseElement &&
              (s = this.elements[r].getBaseElement()),
              (r += 1);
          s
            ? this.layerElement.insertBefore(e, s)
            : this.layerElement.appendChild(e);
        }),
        (HCompElement.prototype.createComp = function (e) {
          return this.supports3d
            ? new HCompElement(e, this.globalData, this)
            : new SVGCompElement(e, this.globalData, this);
        });
      function HybridRenderer(e, t) {
        (this.animationItem = e),
          (this.layers = null),
          (this.renderedFrame = -1),
          (this.renderConfig = {
            className: (t && t.className) || "",
            imagePreserveAspectRatio:
              (t && t.imagePreserveAspectRatio) || "xMidYMid slice",
            hideOnTransparent: !(t && t.hideOnTransparent === !1),
            filterSize: {
              width: (t && t.filterSize && t.filterSize.width) || "400%",
              height: (t && t.filterSize && t.filterSize.height) || "400%",
              x: (t && t.filterSize && t.filterSize.x) || "-100%",
              y: (t && t.filterSize && t.filterSize.y) || "-100%",
            },
            runExpressions:
              !t || t.runExpressions === void 0 || t.runExpressions,
          }),
          (this.globalData = {
            _imdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig,
          }),
          (this.pendingElements = []),
          (this.elements = []),
          (this.threeDElements = []),
          (this.destroyed = !1),
          (this.camera = null),
          (this.supports3d = !0),
          (this.rendererType = "html");
      }
      extendPrototype([HybridRendererBase], HybridRenderer),
        (HybridRenderer.prototype.createComp = function (e) {
          return this.supports3d
            ? new HCompElement(e, this.globalData, this)
            : new SVGCompElement(e, this.globalData, this);
        });
      var CompExpressionInterface = (function () {
          return function (e) {
            function t(r) {
              for (var s = 0, a = e.layers.length; s < a; ) {
                if (e.layers[s].nm === r || e.layers[s].ind === r)
                  return e.elements[s].layerInterface;
                s += 1;
              }
              return null;
            }
            return (
              Object.defineProperty(t, "_name", { value: e.data.nm }),
              (t.layer = t),
              (t.pixelAspect = 1),
              (t.height = e.data.h || e.globalData.compSize.h),
              (t.width = e.data.w || e.globalData.compSize.w),
              (t.pixelAspect = 1),
              (t.frameDuration = 1 / e.globalData.frameRate),
              (t.displayStartTime = 0),
              (t.numLayers = e.layers.length),
              t
            );
          };
        })(),
        Expressions = (function () {
          var e = {};
          e.initExpressions = t;
          function t(r) {
            var s = 0,
              a = [];
            function n() {
              s += 1;
            }
            function o() {
              (s -= 1), s === 0 && l();
            }
            function f(p) {
              a.indexOf(p) === -1 && a.push(p);
            }
            function l() {
              var p,
                b = a.length;
              for (p = 0; p < b; p += 1) a[p].release();
              a.length = 0;
            }
            (r.renderer.compInterface = CompExpressionInterface(r.renderer)),
              r.renderer.globalData.projectInterface.registerComposition(
                r.renderer
              ),
              (r.renderer.globalData.pushExpression = n),
              (r.renderer.globalData.popExpression = o),
              (r.renderer.globalData.registerExpressionProperty = f);
          }
          return e;
        })(),
        MaskManagerInterface = (function () {
          function e(r, s) {
            (this._mask = r), (this._data = s);
          }
          Object.defineProperty(e.prototype, "maskPath", {
            get: function () {
              return (
                this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
              );
            },
          }),
            Object.defineProperty(e.prototype, "maskOpacity", {
              get: function () {
                return (
                  this._mask.op.k && this._mask.op.getValue(),
                  this._mask.op.v * 100
                );
              },
            });
          var t = function (s) {
            var a = createSizedArray(s.viewData.length),
              n,
              o = s.viewData.length;
            for (n = 0; n < o; n += 1)
              a[n] = new e(s.viewData[n], s.masksProperties[n]);
            var f = function (p) {
              for (n = 0; n < o; ) {
                if (s.masksProperties[n].nm === p) return a[n];
                n += 1;
              }
              return null;
            };
            return f;
          };
          return t;
        })(),
        ExpressionPropertyInterface = (function () {
          var e = { pv: 0, v: 0, mult: 1 },
            t = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
          function r(o, f, l) {
            Object.defineProperty(o, "velocity", {
              get: function () {
                return f.getVelocityAtTime(f.comp.currentFrame);
              },
            }),
              (o.numKeys = f.keyframes ? f.keyframes.length : 0),
              (o.key = function (p) {
                if (!o.numKeys) return 0;
                var b = "";
                "s" in f.keyframes[p - 1]
                  ? (b = f.keyframes[p - 1].s)
                  : "e" in f.keyframes[p - 2]
                  ? (b = f.keyframes[p - 2].e)
                  : (b = f.keyframes[p - 2].s);
                var P =
                  l === "unidimensional" ? new Number(b) : Object.assign({}, b);
                return (
                  (P.time =
                    f.keyframes[p - 1].t / f.elem.comp.globalData.frameRate),
                  (P.value = l === "unidimensional" ? b[0] : b),
                  P
                );
              }),
              (o.valueAtTime = f.getValueAtTime),
              (o.speedAtTime = f.getSpeedAtTime),
              (o.velocityAtTime = f.getVelocityAtTime),
              (o.propertyGroup = f.propertyGroup);
          }
          function s(o) {
            (!o || !("pv" in o)) && (o = e);
            var f = 1 / o.mult,
              l = o.pv * f,
              p = new Number(l);
            return (
              (p.value = l),
              r(p, o, "unidimensional"),
              function () {
                return (
                  o.k && o.getValue(),
                  (l = o.v * f),
                  p.value !== l &&
                    ((p = new Number(l)),
                    (p.value = l),
                    r(p, o, "unidimensional")),
                  p
                );
              }
            );
          }
          function a(o) {
            (!o || !("pv" in o)) && (o = t);
            var f = 1 / o.mult,
              l = (o.data && o.data.l) || o.pv.length,
              p = createTypedArray("float32", l),
              b = createTypedArray("float32", l);
            return (
              (p.value = b),
              r(p, o, "multidimensional"),
              function () {
                o.k && o.getValue();
                for (var P = 0; P < l; P += 1)
                  (b[P] = o.v[P] * f), (p[P] = b[P]);
                return p;
              }
            );
          }
          function n() {
            return e;
          }
          return function (o) {
            return o ? (o.propType === "unidimensional" ? s(o) : a(o)) : n;
          };
        })(),
        TransformExpressionInterface = (function () {
          return function (e) {
            function t(o) {
              switch (o) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return t.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return t.rotation;
                case "ADBE Rotate X":
                  return t.xRotation;
                case "ADBE Rotate Y":
                  return t.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return t.position;
                case "ADBE Position_0":
                  return t.xPosition;
                case "ADBE Position_1":
                  return t.yPosition;
                case "ADBE Position_2":
                  return t.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return t.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return t.opacity;
                default:
                  return null;
              }
            }
            Object.defineProperty(t, "rotation", {
              get: ExpressionPropertyInterface(e.r || e.rz),
            }),
              Object.defineProperty(t, "zRotation", {
                get: ExpressionPropertyInterface(e.rz || e.r),
              }),
              Object.defineProperty(t, "xRotation", {
                get: ExpressionPropertyInterface(e.rx),
              }),
              Object.defineProperty(t, "yRotation", {
                get: ExpressionPropertyInterface(e.ry),
              }),
              Object.defineProperty(t, "scale", {
                get: ExpressionPropertyInterface(e.s),
              });
            var r, s, a, n;
            return (
              e.p
                ? (n = ExpressionPropertyInterface(e.p))
                : ((r = ExpressionPropertyInterface(e.px)),
                  (s = ExpressionPropertyInterface(e.py)),
                  e.pz && (a = ExpressionPropertyInterface(e.pz))),
              Object.defineProperty(t, "position", {
                get: function () {
                  return e.p ? n() : [r(), s(), a ? a() : 0];
                },
              }),
              Object.defineProperty(t, "xPosition", {
                get: ExpressionPropertyInterface(e.px),
              }),
              Object.defineProperty(t, "yPosition", {
                get: ExpressionPropertyInterface(e.py),
              }),
              Object.defineProperty(t, "zPosition", {
                get: ExpressionPropertyInterface(e.pz),
              }),
              Object.defineProperty(t, "anchorPoint", {
                get: ExpressionPropertyInterface(e.a),
              }),
              Object.defineProperty(t, "opacity", {
                get: ExpressionPropertyInterface(e.o),
              }),
              Object.defineProperty(t, "skew", {
                get: ExpressionPropertyInterface(e.sk),
              }),
              Object.defineProperty(t, "skewAxis", {
                get: ExpressionPropertyInterface(e.sa),
              }),
              Object.defineProperty(t, "orientation", {
                get: ExpressionPropertyInterface(e.or),
              }),
              t
            );
          };
        })(),
        LayerExpressionInterface = (function () {
          function e(p) {
            var b = new Matrix();
            if (p !== void 0) {
              var P = this._elem.finalTransform.mProp.getValueAtTime(p);
              P.clone(b);
            } else {
              var u = this._elem.finalTransform.mProp;
              u.applyToMatrix(b);
            }
            return b;
          }
          function t(p, b) {
            var P = this.getMatrix(b);
            return (
              (P.props[12] = 0),
              (P.props[13] = 0),
              (P.props[14] = 0),
              this.applyPoint(P, p)
            );
          }
          function r(p, b) {
            var P = this.getMatrix(b);
            return this.applyPoint(P, p);
          }
          function s(p, b) {
            var P = this.getMatrix(b);
            return (
              (P.props[12] = 0),
              (P.props[13] = 0),
              (P.props[14] = 0),
              this.invertPoint(P, p)
            );
          }
          function a(p, b) {
            var P = this.getMatrix(b);
            return this.invertPoint(P, p);
          }
          function n(p, b) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var P,
                u = this._elem.hierarchy.length;
              for (P = 0; P < u; P += 1)
                this._elem.hierarchy[P].finalTransform.mProp.applyToMatrix(p);
            }
            return p.applyToPointArray(b[0], b[1], b[2] || 0);
          }
          function o(p, b) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var P,
                u = this._elem.hierarchy.length;
              for (P = 0; P < u; P += 1)
                this._elem.hierarchy[P].finalTransform.mProp.applyToMatrix(p);
            }
            return p.inversePoint(b);
          }
          function f(p) {
            var b = new Matrix();
            if (
              (b.reset(),
              this._elem.finalTransform.mProp.applyToMatrix(b),
              this._elem.hierarchy && this._elem.hierarchy.length)
            ) {
              var P,
                u = this._elem.hierarchy.length;
              for (P = 0; P < u; P += 1)
                this._elem.hierarchy[P].finalTransform.mProp.applyToMatrix(b);
              return b.inversePoint(p);
            }
            return b.inversePoint(p);
          }
          function l() {
            return [1, 1, 1, 1];
          }
          return function (p) {
            var b;
            function P(g) {
              _.mask = new MaskManagerInterface(g, p);
            }
            function u(g) {
              _.effect = g;
            }
            function _(g) {
              switch (g) {
                case "ADBE Root Vectors Group":
                case "Contents":
                case 2:
                  return _.shapeInterface;
                case 1:
                case 6:
                case "Transform":
                case "transform":
                case "ADBE Transform Group":
                  return b;
                case 4:
                case "ADBE Effect Parade":
                case "effects":
                case "Effects":
                  return _.effect;
                case "ADBE Text Properties":
                  return _.textInterface;
                default:
                  return null;
              }
            }
            (_.getMatrix = e),
              (_.invertPoint = o),
              (_.applyPoint = n),
              (_.toWorld = r),
              (_.toWorldVec = t),
              (_.fromWorld = a),
              (_.fromWorldVec = s),
              (_.toComp = r),
              (_.fromComp = f),
              (_.sampleImage = l),
              (_.sourceRectAtTime = p.sourceRectAtTime.bind(p)),
              (_._elem = p),
              (b = TransformExpressionInterface(p.finalTransform.mProp));
            var x = getDescriptor(b, "anchorPoint");
            return (
              Object.defineProperties(_, {
                hasParent: {
                  get: function () {
                    return p.hierarchy.length;
                  },
                },
                parent: {
                  get: function () {
                    return p.hierarchy[0].layerInterface;
                  },
                },
                rotation: getDescriptor(b, "rotation"),
                scale: getDescriptor(b, "scale"),
                position: getDescriptor(b, "position"),
                opacity: getDescriptor(b, "opacity"),
                anchorPoint: x,
                anchor_point: x,
                transform: {
                  get: function () {
                    return b;
                  },
                },
                active: {
                  get: function () {
                    return p.isInRange;
                  },
                },
              }),
              (_.startTime = p.data.st),
              (_.index = p.data.ind),
              (_.source = p.data.refId),
              (_.height = p.data.ty === 0 ? p.data.h : 100),
              (_.width = p.data.ty === 0 ? p.data.w : 100),
              (_.inPoint = p.data.ip / p.comp.globalData.frameRate),
              (_.outPoint = p.data.op / p.comp.globalData.frameRate),
              (_._name = p.data.nm),
              (_.registerMaskInterface = P),
              (_.registerEffectsInterface = u),
              _
            );
          };
        })(),
        propertyGroupFactory = (function () {
          return function (e, t) {
            return function (r) {
              return (r = r === void 0 ? 1 : r), r <= 0 ? e : t(r - 1);
            };
          };
        })(),
        PropertyInterface = (function () {
          return function (e, t) {
            var r = { _name: e };
            function s(a) {
              return (a = a === void 0 ? 1 : a), a <= 0 ? r : t(a - 1);
            }
            return s;
          };
        })(),
        EffectsExpressionInterface = (function () {
          var e = { createEffectsInterface: t };
          function t(a, n) {
            if (a.effectsManager) {
              var o = [],
                f = a.data.ef,
                l,
                p = a.effectsManager.effectElements.length;
              for (l = 0; l < p; l += 1)
                o.push(r(f[l], a.effectsManager.effectElements[l], n, a));
              var b = a.data.ef || [],
                P = function (_) {
                  for (l = 0, p = b.length; l < p; ) {
                    if (_ === b[l].nm || _ === b[l].mn || _ === b[l].ix)
                      return o[l];
                    l += 1;
                  }
                  return null;
                };
              return (
                Object.defineProperty(P, "numProperties", {
                  get: function () {
                    return b.length;
                  },
                }),
                P
              );
            }
            return null;
          }
          function r(a, n, o, f) {
            function l(_) {
              for (var x = a.ef, g = 0, A = x.length; g < A; ) {
                if (_ === x[g].nm || _ === x[g].mn || _ === x[g].ix)
                  return x[g].ty === 5 ? b[g] : b[g]();
                g += 1;
              }
              throw new Error();
            }
            var p = propertyGroupFactory(l, o),
              b = [],
              P,
              u = a.ef.length;
            for (P = 0; P < u; P += 1)
              a.ef[P].ty === 5
                ? b.push(
                    r(
                      a.ef[P],
                      n.effectElements[P],
                      n.effectElements[P].propertyGroup,
                      f
                    )
                  )
                : b.push(s(n.effectElements[P], a.ef[P].ty, f, p));
            return (
              a.mn === "ADBE Color Control" &&
                Object.defineProperty(l, "color", {
                  get: function () {
                    return b[0]();
                  },
                }),
              Object.defineProperties(l, {
                numProperties: {
                  get: function () {
                    return a.np;
                  },
                },
                _name: { value: a.nm },
                propertyGroup: { value: p },
              }),
              (l.enabled = a.en !== 0),
              (l.active = l.enabled),
              l
            );
          }
          function s(a, n, o, f) {
            var l = ExpressionPropertyInterface(a.p);
            function p() {
              return n === 10 ? o.comp.compInterface(a.p.v) : l();
            }
            return (
              a.p.setGroupProperty &&
                a.p.setGroupProperty(PropertyInterface("", f)),
              p
            );
          }
          return e;
        })(),
        ShapePathInterface = (function () {
          return function (t, r, s) {
            var a = r.sh;
            function n(f) {
              return f === "Shape" ||
                f === "shape" ||
                f === "Path" ||
                f === "path" ||
                f === "ADBE Vector Shape" ||
                f === 2
                ? n.path
                : null;
            }
            var o = propertyGroupFactory(n, s);
            return (
              a.setGroupProperty(PropertyInterface("Path", o)),
              Object.defineProperties(n, {
                path: {
                  get: function () {
                    return a.k && a.getValue(), a;
                  },
                },
                shape: {
                  get: function () {
                    return a.k && a.getValue(), a;
                  },
                },
                _name: { value: t.nm },
                ix: { value: t.ix },
                propertyIndex: { value: t.ix },
                mn: { value: t.mn },
                propertyGroup: { value: s },
              }),
              n
            );
          };
        })(),
        ShapeExpressionInterface = (function () {
          function e(x, g, A) {
            var d = [],
              y,
              c = x ? x.length : 0;
            for (y = 0; y < c; y += 1)
              x[y].ty === "gr"
                ? d.push(r(x[y], g[y], A))
                : x[y].ty === "fl"
                ? d.push(s(x[y], g[y], A))
                : x[y].ty === "st"
                ? d.push(o(x[y], g[y], A))
                : x[y].ty === "tm"
                ? d.push(f(x[y], g[y], A))
                : x[y].ty === "tr" ||
                  (x[y].ty === "el"
                    ? d.push(p(x[y], g[y], A))
                    : x[y].ty === "sr"
                    ? d.push(b(x[y], g[y], A))
                    : x[y].ty === "sh"
                    ? d.push(ShapePathInterface(x[y], g[y], A))
                    : x[y].ty === "rc"
                    ? d.push(P(x[y], g[y], A))
                    : x[y].ty === "rd"
                    ? d.push(u(x[y], g[y], A))
                    : x[y].ty === "rp"
                    ? d.push(_(x[y], g[y], A))
                    : x[y].ty === "gf"
                    ? d.push(a(x[y], g[y], A))
                    : d.push(n(x[y], g[y])));
            return d;
          }
          function t(x, g, A) {
            var d,
              y = function (E) {
                for (var S = 0, T = d.length; S < T; ) {
                  if (
                    d[S]._name === E ||
                    d[S].mn === E ||
                    d[S].propertyIndex === E ||
                    d[S].ix === E ||
                    d[S].ind === E
                  )
                    return d[S];
                  S += 1;
                }
                return typeof E == "number" ? d[E - 1] : null;
              };
            (y.propertyGroup = propertyGroupFactory(y, A)),
              (d = e(x.it, g.it, y.propertyGroup)),
              (y.numProperties = d.length);
            var c = l(
              x.it[x.it.length - 1],
              g.it[g.it.length - 1],
              y.propertyGroup
            );
            return (
              (y.transform = c), (y.propertyIndex = x.cix), (y._name = x.nm), y
            );
          }
          function r(x, g, A) {
            var d = function (E) {
              switch (E) {
                case "ADBE Vectors Group":
                case "Contents":
                case 2:
                  return d.content;
                default:
                  return d.transform;
              }
            };
            d.propertyGroup = propertyGroupFactory(d, A);
            var y = t(x, g, d.propertyGroup),
              c = l(
                x.it[x.it.length - 1],
                g.it[g.it.length - 1],
                d.propertyGroup
              );
            return (
              (d.content = y),
              (d.transform = c),
              Object.defineProperty(d, "_name", {
                get: function () {
                  return x.nm;
                },
              }),
              (d.numProperties = x.np),
              (d.propertyIndex = x.ix),
              (d.nm = x.nm),
              (d.mn = x.mn),
              d
            );
          }
          function s(x, g, A) {
            function d(y) {
              return y === "Color" || y === "color"
                ? d.color
                : y === "Opacity" || y === "opacity"
                ? d.opacity
                : null;
            }
            return (
              Object.defineProperties(d, {
                color: { get: ExpressionPropertyInterface(g.c) },
                opacity: { get: ExpressionPropertyInterface(g.o) },
                _name: { value: x.nm },
                mn: { value: x.mn },
              }),
              g.c.setGroupProperty(PropertyInterface("Color", A)),
              g.o.setGroupProperty(PropertyInterface("Opacity", A)),
              d
            );
          }
          function a(x, g, A) {
            function d(y) {
              return y === "Start Point" || y === "start point"
                ? d.startPoint
                : y === "End Point" || y === "end point"
                ? d.endPoint
                : y === "Opacity" || y === "opacity"
                ? d.opacity
                : null;
            }
            return (
              Object.defineProperties(d, {
                startPoint: { get: ExpressionPropertyInterface(g.s) },
                endPoint: { get: ExpressionPropertyInterface(g.e) },
                opacity: { get: ExpressionPropertyInterface(g.o) },
                type: {
                  get: function () {
                    return "a";
                  },
                },
                _name: { value: x.nm },
                mn: { value: x.mn },
              }),
              g.s.setGroupProperty(PropertyInterface("Start Point", A)),
              g.e.setGroupProperty(PropertyInterface("End Point", A)),
              g.o.setGroupProperty(PropertyInterface("Opacity", A)),
              d
            );
          }
          function n() {
            function x() {
              return null;
            }
            return x;
          }
          function o(x, g, A) {
            var d = propertyGroupFactory(T, A),
              y = propertyGroupFactory(S, d);
            function c(F) {
              Object.defineProperty(S, x.d[F].nm, {
                get: ExpressionPropertyInterface(g.d.dataProps[F].p),
              });
            }
            var m,
              E = x.d ? x.d.length : 0,
              S = {};
            for (m = 0; m < E; m += 1)
              c(m), g.d.dataProps[m].p.setGroupProperty(y);
            function T(F) {
              return F === "Color" || F === "color"
                ? T.color
                : F === "Opacity" || F === "opacity"
                ? T.opacity
                : F === "Stroke Width" || F === "stroke width"
                ? T.strokeWidth
                : null;
            }
            return (
              Object.defineProperties(T, {
                color: { get: ExpressionPropertyInterface(g.c) },
                opacity: { get: ExpressionPropertyInterface(g.o) },
                strokeWidth: { get: ExpressionPropertyInterface(g.w) },
                dash: {
                  get: function () {
                    return S;
                  },
                },
                _name: { value: x.nm },
                mn: { value: x.mn },
              }),
              g.c.setGroupProperty(PropertyInterface("Color", d)),
              g.o.setGroupProperty(PropertyInterface("Opacity", d)),
              g.w.setGroupProperty(PropertyInterface("Stroke Width", d)),
              T
            );
          }
          function f(x, g, A) {
            function d(c) {
              return c === x.e.ix || c === "End" || c === "end"
                ? d.end
                : c === x.s.ix
                ? d.start
                : c === x.o.ix
                ? d.offset
                : null;
            }
            var y = propertyGroupFactory(d, A);
            return (
              (d.propertyIndex = x.ix),
              g.s.setGroupProperty(PropertyInterface("Start", y)),
              g.e.setGroupProperty(PropertyInterface("End", y)),
              g.o.setGroupProperty(PropertyInterface("Offset", y)),
              (d.propertyIndex = x.ix),
              (d.propertyGroup = A),
              Object.defineProperties(d, {
                start: { get: ExpressionPropertyInterface(g.s) },
                end: { get: ExpressionPropertyInterface(g.e) },
                offset: { get: ExpressionPropertyInterface(g.o) },
                _name: { value: x.nm },
              }),
              (d.mn = x.mn),
              d
            );
          }
          function l(x, g, A) {
            function d(c) {
              return x.a.ix === c || c === "Anchor Point"
                ? d.anchorPoint
                : x.o.ix === c || c === "Opacity"
                ? d.opacity
                : x.p.ix === c || c === "Position"
                ? d.position
                : x.r.ix === c ||
                  c === "Rotation" ||
                  c === "ADBE Vector Rotation"
                ? d.rotation
                : x.s.ix === c || c === "Scale"
                ? d.scale
                : (x.sk && x.sk.ix === c) || c === "Skew"
                ? d.skew
                : (x.sa && x.sa.ix === c) || c === "Skew Axis"
                ? d.skewAxis
                : null;
            }
            var y = propertyGroupFactory(d, A);
            return (
              g.transform.mProps.o.setGroupProperty(
                PropertyInterface("Opacity", y)
              ),
              g.transform.mProps.p.setGroupProperty(
                PropertyInterface("Position", y)
              ),
              g.transform.mProps.a.setGroupProperty(
                PropertyInterface("Anchor Point", y)
              ),
              g.transform.mProps.s.setGroupProperty(
                PropertyInterface("Scale", y)
              ),
              g.transform.mProps.r.setGroupProperty(
                PropertyInterface("Rotation", y)
              ),
              g.transform.mProps.sk &&
                (g.transform.mProps.sk.setGroupProperty(
                  PropertyInterface("Skew", y)
                ),
                g.transform.mProps.sa.setGroupProperty(
                  PropertyInterface("Skew Angle", y)
                )),
              g.transform.op.setGroupProperty(PropertyInterface("Opacity", y)),
              Object.defineProperties(d, {
                opacity: {
                  get: ExpressionPropertyInterface(g.transform.mProps.o),
                },
                position: {
                  get: ExpressionPropertyInterface(g.transform.mProps.p),
                },
                anchorPoint: {
                  get: ExpressionPropertyInterface(g.transform.mProps.a),
                },
                scale: {
                  get: ExpressionPropertyInterface(g.transform.mProps.s),
                },
                rotation: {
                  get: ExpressionPropertyInterface(g.transform.mProps.r),
                },
                skew: {
                  get: ExpressionPropertyInterface(g.transform.mProps.sk),
                },
                skewAxis: {
                  get: ExpressionPropertyInterface(g.transform.mProps.sa),
                },
                _name: { value: x.nm },
              }),
              (d.ty = "tr"),
              (d.mn = x.mn),
              (d.propertyGroup = A),
              d
            );
          }
          function p(x, g, A) {
            function d(m) {
              return x.p.ix === m ? d.position : x.s.ix === m ? d.size : null;
            }
            var y = propertyGroupFactory(d, A);
            d.propertyIndex = x.ix;
            var c = g.sh.ty === "tm" ? g.sh.prop : g.sh;
            return (
              c.s.setGroupProperty(PropertyInterface("Size", y)),
              c.p.setGroupProperty(PropertyInterface("Position", y)),
              Object.defineProperties(d, {
                size: { get: ExpressionPropertyInterface(c.s) },
                position: { get: ExpressionPropertyInterface(c.p) },
                _name: { value: x.nm },
              }),
              (d.mn = x.mn),
              d
            );
          }
          function b(x, g, A) {
            function d(m) {
              return x.p.ix === m
                ? d.position
                : x.r.ix === m
                ? d.rotation
                : x.pt.ix === m
                ? d.points
                : x.or.ix === m || m === "ADBE Vector Star Outer Radius"
                ? d.outerRadius
                : x.os.ix === m
                ? d.outerRoundness
                : x.ir &&
                  (x.ir.ix === m || m === "ADBE Vector Star Inner Radius")
                ? d.innerRadius
                : x.is && x.is.ix === m
                ? d.innerRoundness
                : null;
            }
            var y = propertyGroupFactory(d, A),
              c = g.sh.ty === "tm" ? g.sh.prop : g.sh;
            return (
              (d.propertyIndex = x.ix),
              c.or.setGroupProperty(PropertyInterface("Outer Radius", y)),
              c.os.setGroupProperty(PropertyInterface("Outer Roundness", y)),
              c.pt.setGroupProperty(PropertyInterface("Points", y)),
              c.p.setGroupProperty(PropertyInterface("Position", y)),
              c.r.setGroupProperty(PropertyInterface("Rotation", y)),
              x.ir &&
                (c.ir.setGroupProperty(PropertyInterface("Inner Radius", y)),
                c.is.setGroupProperty(PropertyInterface("Inner Roundness", y))),
              Object.defineProperties(d, {
                position: { get: ExpressionPropertyInterface(c.p) },
                rotation: { get: ExpressionPropertyInterface(c.r) },
                points: { get: ExpressionPropertyInterface(c.pt) },
                outerRadius: { get: ExpressionPropertyInterface(c.or) },
                outerRoundness: { get: ExpressionPropertyInterface(c.os) },
                innerRadius: { get: ExpressionPropertyInterface(c.ir) },
                innerRoundness: { get: ExpressionPropertyInterface(c.is) },
                _name: { value: x.nm },
              }),
              (d.mn = x.mn),
              d
            );
          }
          function P(x, g, A) {
            function d(m) {
              return x.p.ix === m
                ? d.position
                : x.r.ix === m
                ? d.roundness
                : x.s.ix === m || m === "Size" || m === "ADBE Vector Rect Size"
                ? d.size
                : null;
            }
            var y = propertyGroupFactory(d, A),
              c = g.sh.ty === "tm" ? g.sh.prop : g.sh;
            return (
              (d.propertyIndex = x.ix),
              c.p.setGroupProperty(PropertyInterface("Position", y)),
              c.s.setGroupProperty(PropertyInterface("Size", y)),
              c.r.setGroupProperty(PropertyInterface("Rotation", y)),
              Object.defineProperties(d, {
                position: { get: ExpressionPropertyInterface(c.p) },
                roundness: { get: ExpressionPropertyInterface(c.r) },
                size: { get: ExpressionPropertyInterface(c.s) },
                _name: { value: x.nm },
              }),
              (d.mn = x.mn),
              d
            );
          }
          function u(x, g, A) {
            function d(m) {
              return x.r.ix === m || m === "Round Corners 1" ? d.radius : null;
            }
            var y = propertyGroupFactory(d, A),
              c = g;
            return (
              (d.propertyIndex = x.ix),
              c.rd.setGroupProperty(PropertyInterface("Radius", y)),
              Object.defineProperties(d, {
                radius: { get: ExpressionPropertyInterface(c.rd) },
                _name: { value: x.nm },
              }),
              (d.mn = x.mn),
              d
            );
          }
          function _(x, g, A) {
            function d(m) {
              return x.c.ix === m || m === "Copies"
                ? d.copies
                : x.o.ix === m || m === "Offset"
                ? d.offset
                : null;
            }
            var y = propertyGroupFactory(d, A),
              c = g;
            return (
              (d.propertyIndex = x.ix),
              c.c.setGroupProperty(PropertyInterface("Copies", y)),
              c.o.setGroupProperty(PropertyInterface("Offset", y)),
              Object.defineProperties(d, {
                copies: { get: ExpressionPropertyInterface(c.c) },
                offset: { get: ExpressionPropertyInterface(c.o) },
                _name: { value: x.nm },
              }),
              (d.mn = x.mn),
              d
            );
          }
          return function (x, g, A) {
            var d;
            function y(m) {
              if (typeof m == "number")
                return (m = m === void 0 ? 1 : m), m === 0 ? A : d[m - 1];
              for (var E = 0, S = d.length; E < S; ) {
                if (d[E]._name === m) return d[E];
                E += 1;
              }
              return null;
            }
            function c() {
              return A;
            }
            return (
              (y.propertyGroup = propertyGroupFactory(y, c)),
              (d = e(x, g, y.propertyGroup)),
              (y.numProperties = d.length),
              (y._name = "Contents"),
              y
            );
          };
        })(),
        TextExpressionInterface = (function () {
          return function (e) {
            var t;
            function r(s) {
              switch (s) {
                case "ADBE Text Document":
                  return r.sourceText;
                default:
                  return null;
              }
            }
            return (
              Object.defineProperty(r, "sourceText", {
                get: function () {
                  e.textProperty.getValue();
                  var a = e.textProperty.currentData.t;
                  return (
                    (!t || a !== t.value) &&
                      ((t = new String(a)),
                      (t.value = a || new String(a)),
                      Object.defineProperty(t, "style", {
                        get: function () {
                          return { fillColor: e.textProperty.currentData.fc };
                        },
                      })),
                    t
                  );
                },
              }),
              r
            );
          };
        })();
      function _typeof$2(e) {
        return (
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (_typeof$2 = function (r) {
                return typeof r;
              })
            : (_typeof$2 = function (r) {
                return r &&
                  typeof Symbol == "function" &&
                  r.constructor === Symbol &&
                  r !== Symbol.prototype
                  ? "symbol"
                  : typeof r;
              }),
          _typeof$2(e)
        );
      }
      var FootageInterface = (function () {
          var e = function (s) {
              var a = "",
                n = s.getFootageData();
              function o() {
                return (a = ""), (n = s.getFootageData()), f;
              }
              function f(l) {
                if (n[l])
                  return (a = l), (n = n[l]), _typeof$2(n) === "object" ? f : n;
                var p = l.indexOf(a);
                if (p !== -1) {
                  var b = parseInt(l.substr(p + a.length), 10);
                  return (n = n[b]), _typeof$2(n) === "object" ? f : n;
                }
                return "";
              }
              return o;
            },
            t = function (s) {
              function a(n) {
                return n === "Outline" ? a.outlineInterface() : null;
              }
              return (a._name = "Outline"), (a.outlineInterface = e(s)), a;
            };
          return function (r) {
            function s(a) {
              return a === "Data" ? s.dataInterface : null;
            }
            return (s._name = "Data"), (s.dataInterface = t(r)), s;
          };
        })(),
        interfaces = {
          layer: LayerExpressionInterface,
          effects: EffectsExpressionInterface,
          comp: CompExpressionInterface,
          shape: ShapeExpressionInterface,
          text: TextExpressionInterface,
          footage: FootageInterface,
        };
      function getInterface(e) {
        return interfaces[e] || null;
      }
      function _typeof$1(e) {
        return (
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (_typeof$1 = function (r) {
                return typeof r;
              })
            : (_typeof$1 = function (r) {
                return r &&
                  typeof Symbol == "function" &&
                  r.constructor === Symbol &&
                  r !== Symbol.prototype
                  ? "symbol"
                  : typeof r;
              }),
          _typeof$1(e)
        );
      }
      function seedRandom(e, t) {
        var r = this,
          s = 256,
          a = 6,
          n = 52,
          o = "random",
          f = t.pow(s, a),
          l = t.pow(2, n),
          p = l * 2,
          b = s - 1,
          P;
        function u(c, m, E) {
          var S = [];
          m = m === !0 ? { entropy: !0 } : m || {};
          var T = A(g(m.entropy ? [c, y(e)] : c === null ? d() : c, 3), S),
            F = new _(S),
            O = function () {
              for (var $ = F.g(a), B = f, z = 0; $ < l; )
                ($ = ($ + z) * s), (B *= s), (z = F.g(1));
              for (; $ >= p; ) ($ /= 2), (B /= 2), (z >>>= 1);
              return ($ + z) / B;
            };
          return (
            (O.int32 = function () {
              return F.g(4) | 0;
            }),
            (O.quick = function () {
              return F.g(4) / 4294967296;
            }),
            (O.double = O),
            A(y(F.S), e),
            (
              m.pass ||
              E ||
              function (G, $, B, z) {
                return (
                  z &&
                    (z.S && x(z, F),
                    (G.state = function () {
                      return x(F, {});
                    })),
                  B ? ((t[o] = G), $) : G
                );
              }
            )(O, T, "global" in m ? m.global : this == t, m.state)
          );
        }
        t["seed" + o] = u;
        function _(c) {
          var m,
            E = c.length,
            S = this,
            T = 0,
            F = (S.i = S.j = 0),
            O = (S.S = []);
          for (E || (c = [E++]); T < s; ) O[T] = T++;
          for (T = 0; T < s; T++)
            (O[T] = O[(F = b & (F + c[T % E] + (m = O[T])))]), (O[F] = m);
          S.g = function (G) {
            for (var $, B = 0, z = S.i, N = S.j, R = S.S; G--; )
              ($ = R[(z = b & (z + 1))]),
                (B =
                  B * s + R[b & ((R[z] = R[(N = b & (N + $))]) + (R[N] = $))]);
            return (S.i = z), (S.j = N), B;
          };
        }
        function x(c, m) {
          return (m.i = c.i), (m.j = c.j), (m.S = c.S.slice()), m;
        }
        function g(c, m) {
          var E = [],
            S = _typeof$1(c),
            T;
          if (m && S == "object")
            for (T in c)
              try {
                E.push(g(c[T], m - 1));
              } catch {}
          return E.length ? E : S == "string" ? c : c + "\0";
        }
        function A(c, m) {
          for (var E = c + "", S, T = 0; T < E.length; )
            m[b & T] = b & ((S ^= m[b & T] * 19) + E.charCodeAt(T++));
          return y(m);
        }
        function d() {
          try {
            var c = new Uint8Array(s);
            return (r.crypto || r.msCrypto).getRandomValues(c), y(c);
          } catch {
            var m = r.navigator,
              E = m && m.plugins;
            return [+new Date(), r, E, r.screen, y(e)];
          }
        }
        function y(c) {
          return String.fromCharCode.apply(0, c);
        }
        A(t.random(), e);
      }
      function initialize$2(e) {
        seedRandom([], e);
      }
      var propTypes = { SHAPE: "shape" };
      function _typeof(e) {
        return (
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? (_typeof = function (r) {
                return typeof r;
              })
            : (_typeof = function (r) {
                return r &&
                  typeof Symbol == "function" &&
                  r.constructor === Symbol &&
                  r !== Symbol.prototype
                  ? "symbol"
                  : typeof r;
              }),
          _typeof(e)
        );
      }
      var ExpressionManager = (function () {
          var ob = {},
            Math = BMMath,
            window = null,
            document = null,
            XMLHttpRequest = null,
            fetch = null,
            frames = null;
          initialize$2(BMMath);
          function $bm_isInstanceOfArray(e) {
            return e.constructor === Array || e.constructor === Float32Array;
          }
          function isNumerable(e, t) {
            return (
              e === "number" ||
              e === "boolean" ||
              e === "string" ||
              t instanceof Number
            );
          }
          function $bm_neg(e) {
            var t = _typeof(e);
            if (t === "number" || t === "boolean" || e instanceof Number)
              return -e;
            if ($bm_isInstanceOfArray(e)) {
              var r,
                s = e.length,
                a = [];
              for (r = 0; r < s; r += 1) a[r] = -e[r];
              return a;
            }
            return e.propType ? e.v : -e;
          }
          var easeInBez = BezierFactory.getBezierEasing(
              0.333,
              0,
              0.833,
              0.833,
              "easeIn"
            ).get,
            easeOutBez = BezierFactory.getBezierEasing(
              0.167,
              0.167,
              0.667,
              1,
              "easeOut"
            ).get,
            easeInOutBez = BezierFactory.getBezierEasing(
              0.33,
              0,
              0.667,
              1,
              "easeInOut"
            ).get;
          function sum(e, t) {
            var r = _typeof(e),
              s = _typeof(t);
            if (
              r === "string" ||
              s === "string" ||
              (isNumerable(r, e) && isNumerable(s, t))
            )
              return e + t;
            if ($bm_isInstanceOfArray(e) && isNumerable(s, t))
              return (e = e.slice(0)), (e[0] += t), e;
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t))
              return (t = t.slice(0)), (t[0] = e + t[0]), t;
            if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
              for (
                var a = 0, n = e.length, o = t.length, f = [];
                a < n || a < o;

              )
                (typeof e[a] == "number" || e[a] instanceof Number) &&
                (typeof t[a] == "number" || t[a] instanceof Number)
                  ? (f[a] = e[a] + t[a])
                  : (f[a] = t[a] === void 0 ? e[a] : e[a] || t[a]),
                  (a += 1);
              return f;
            }
            return 0;
          }
          var add = sum;
          function sub(e, t) {
            var r = _typeof(e),
              s = _typeof(t);
            if (isNumerable(r, e) && isNumerable(s, t))
              return (
                r === "string" && (e = parseInt(e, 10)),
                s === "string" && (t = parseInt(t, 10)),
                e - t
              );
            if ($bm_isInstanceOfArray(e) && isNumerable(s, t))
              return (e = e.slice(0)), (e[0] -= t), e;
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t))
              return (t = t.slice(0)), (t[0] = e - t[0]), t;
            if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
              for (
                var a = 0, n = e.length, o = t.length, f = [];
                a < n || a < o;

              )
                (typeof e[a] == "number" || e[a] instanceof Number) &&
                (typeof t[a] == "number" || t[a] instanceof Number)
                  ? (f[a] = e[a] - t[a])
                  : (f[a] = t[a] === void 0 ? e[a] : e[a] || t[a]),
                  (a += 1);
              return f;
            }
            return 0;
          }
          function mul(e, t) {
            var r = _typeof(e),
              s = _typeof(t),
              a;
            if (isNumerable(r, e) && isNumerable(s, t)) return e * t;
            var n, o;
            if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
              for (
                o = e.length, a = createTypedArray("float32", o), n = 0;
                n < o;
                n += 1
              )
                a[n] = e[n] * t;
              return a;
            }
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) {
              for (
                o = t.length, a = createTypedArray("float32", o), n = 0;
                n < o;
                n += 1
              )
                a[n] = e * t[n];
              return a;
            }
            return 0;
          }
          function div(e, t) {
            var r = _typeof(e),
              s = _typeof(t),
              a;
            if (isNumerable(r, e) && isNumerable(s, t)) return e / t;
            var n, o;
            if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
              for (
                o = e.length, a = createTypedArray("float32", o), n = 0;
                n < o;
                n += 1
              )
                a[n] = e[n] / t;
              return a;
            }
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) {
              for (
                o = t.length, a = createTypedArray("float32", o), n = 0;
                n < o;
                n += 1
              )
                a[n] = e / t[n];
              return a;
            }
            return 0;
          }
          function mod(e, t) {
            return (
              typeof e == "string" && (e = parseInt(e, 10)),
              typeof t == "string" && (t = parseInt(t, 10)),
              e % t
            );
          }
          var $bm_sum = sum,
            $bm_sub = sub,
            $bm_mul = mul,
            $bm_div = div,
            $bm_mod = mod;
          function clamp(e, t, r) {
            if (t > r) {
              var s = r;
              (r = t), (t = s);
            }
            return Math.min(Math.max(e, t), r);
          }
          function radiansToDegrees(e) {
            return e / degToRads;
          }
          var radians_to_degrees = radiansToDegrees;
          function degreesToRadians(e) {
            return e * degToRads;
          }
          var degrees_to_radians = radiansToDegrees,
            helperLengthArray = [0, 0, 0, 0, 0, 0];
          function length(e, t) {
            if (typeof e == "number" || e instanceof Number)
              return (t = t || 0), Math.abs(e - t);
            t || (t = helperLengthArray);
            var r,
              s = Math.min(e.length, t.length),
              a = 0;
            for (r = 0; r < s; r += 1) a += Math.pow(t[r] - e[r], 2);
            return Math.sqrt(a);
          }
          function normalize(e) {
            return div(e, length(e));
          }
          function rgbToHsl(e) {
            var t = e[0],
              r = e[1],
              s = e[2],
              a = Math.max(t, r, s),
              n = Math.min(t, r, s),
              o,
              f,
              l = (a + n) / 2;
            if (a === n) (o = 0), (f = 0);
            else {
              var p = a - n;
              switch (((f = l > 0.5 ? p / (2 - a - n) : p / (a + n)), a)) {
                case t:
                  o = (r - s) / p + (r < s ? 6 : 0);
                  break;
                case r:
                  o = (s - t) / p + 2;
                  break;
                case s:
                  o = (t - r) / p + 4;
                  break;
              }
              o /= 6;
            }
            return [o, f, l, e[3]];
          }
          function hue2rgb(e, t, r) {
            return (
              r < 0 && (r += 1),
              r > 1 && (r -= 1),
              r < 1 / 6
                ? e + (t - e) * 6 * r
                : r < 1 / 2
                ? t
                : r < 2 / 3
                ? e + (t - e) * (2 / 3 - r) * 6
                : e
            );
          }
          function hslToRgb(e) {
            var t = e[0],
              r = e[1],
              s = e[2],
              a,
              n,
              o;
            if (r === 0) (a = s), (o = s), (n = s);
            else {
              var f = s < 0.5 ? s * (1 + r) : s + r - s * r,
                l = 2 * s - f;
              (a = hue2rgb(l, f, t + 1 / 3)),
                (n = hue2rgb(l, f, t)),
                (o = hue2rgb(l, f, t - 1 / 3));
            }
            return [a, n, o, e[3]];
          }
          function linear(e, t, r, s, a) {
            if (
              ((s === void 0 || a === void 0) &&
                ((s = t), (a = r), (t = 0), (r = 1)),
              r < t)
            ) {
              var n = r;
              (r = t), (t = n);
            }
            if (e <= t) return s;
            if (e >= r) return a;
            var o = r === t ? 0 : (e - t) / (r - t);
            if (!s.length) return s + (a - s) * o;
            var f,
              l = s.length,
              p = createTypedArray("float32", l);
            for (f = 0; f < l; f += 1) p[f] = s[f] + (a[f] - s[f]) * o;
            return p;
          }
          function random(e, t) {
            if (
              (t === void 0 &&
                (e === void 0 ? ((e = 0), (t = 1)) : ((t = e), (e = void 0))),
              t.length)
            ) {
              var r,
                s = t.length;
              e || (e = createTypedArray("float32", s));
              var a = createTypedArray("float32", s),
                n = BMMath.random();
              for (r = 0; r < s; r += 1) a[r] = e[r] + n * (t[r] - e[r]);
              return a;
            }
            e === void 0 && (e = 0);
            var o = BMMath.random();
            return e + o * (t - e);
          }
          function createPath(e, t, r, s) {
            var a,
              n = e.length,
              o = shapePool.newElement();
            o.setPathData(!!s, n);
            var f = [0, 0],
              l,
              p;
            for (a = 0; a < n; a += 1)
              (l = t && t[a] ? t[a] : f),
                (p = r && r[a] ? r[a] : f),
                o.setTripleAt(
                  e[a][0],
                  e[a][1],
                  p[0] + e[a][0],
                  p[1] + e[a][1],
                  l[0] + e[a][0],
                  l[1] + e[a][1],
                  a,
                  !0
                );
            return o;
          }
          function initiateExpression(elem, data, property) {
            function noOp(e) {
              return e;
            }
            if (!elem.globalData.renderConfig.runExpressions) return noOp;
            var val = data.x,
              needsVelocity = /velocity(?![\w\d])/.test(val),
              _needsRandom = val.indexOf("random") !== -1,
              elemType = elem.data.ty,
              transform,
              $bm_transform,
              content,
              effect,
              thisProperty = property;
            (thisProperty.valueAtTime = thisProperty.getValueAtTime),
              Object.defineProperty(thisProperty, "value", {
                get: function () {
                  return thisProperty.v;
                },
              }),
              (elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate),
              (elem.comp.displayStartTime = 0);
            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
              outPoint = elem.data.op / elem.comp.globalData.frameRate,
              width = elem.data.sw ? elem.data.sw : 0,
              height = elem.data.sh ? elem.data.sh : 0,
              name = elem.data.nm,
              loopIn,
              loop_in,
              loopOut,
              loop_out,
              smooth,
              toWorld,
              fromWorld,
              fromComp,
              toComp,
              fromCompToSurface,
              position,
              rotation,
              anchorPoint,
              scale,
              thisLayer,
              thisComp,
              mask,
              valueAtTime,
              velocityAtTime,
              scoped_bm_rt,
              expression_function = eval(
                "[function _expression_function(){" +
                  val +
                  ";scoped_bm_rt=$bm_rt}]"
              )[0],
              numKeys = property.kf ? data.k.length : 0,
              active = !this.data || this.data.hd !== !0,
              wiggle = function e(t, r) {
                var s,
                  a,
                  n = this.pv.length ? this.pv.length : 1,
                  o = createTypedArray("float32", n);
                t = 5;
                var f = Math.floor(time * t);
                for (s = 0, a = 0; s < f; ) {
                  for (a = 0; a < n; a += 1)
                    o[a] += -r + r * 2 * BMMath.random();
                  s += 1;
                }
                var l = time * t,
                  p = l - Math.floor(l),
                  b = createTypedArray("float32", n);
                if (n > 1) {
                  for (a = 0; a < n; a += 1)
                    b[a] =
                      this.pv[a] + o[a] + (-r + r * 2 * BMMath.random()) * p;
                  return b;
                }
                return this.pv + o[0] + (-r + r * 2 * BMMath.random()) * p;
              }.bind(this);
            thisProperty.loopIn &&
              ((loopIn = thisProperty.loopIn.bind(thisProperty)),
              (loop_in = loopIn)),
              thisProperty.loopOut &&
                ((loopOut = thisProperty.loopOut.bind(thisProperty)),
                (loop_out = loopOut)),
              thisProperty.smooth &&
                (smooth = thisProperty.smooth.bind(thisProperty));
            function loopInDuration(e, t) {
              return loopIn(e, t, !0);
            }
            function loopOutDuration(e, t) {
              return loopOut(e, t, !0);
            }
            this.getValueAtTime &&
              (valueAtTime = this.getValueAtTime.bind(this)),
              this.getVelocityAtTime &&
                (velocityAtTime = this.getVelocityAtTime.bind(this));
            var comp = elem.comp.globalData.projectInterface.bind(
              elem.comp.globalData.projectInterface
            );
            function lookAt(e, t) {
              var r = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
                s =
                  Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) /
                  degToRads,
                a = -Math.atan2(r[1], r[2]) / degToRads;
              return [a, s, 0];
            }
            function easeOut(e, t, r, s, a) {
              return applyEase(easeOutBez, e, t, r, s, a);
            }
            function easeIn(e, t, r, s, a) {
              return applyEase(easeInBez, e, t, r, s, a);
            }
            function ease(e, t, r, s, a) {
              return applyEase(easeInOutBez, e, t, r, s, a);
            }
            function applyEase(e, t, r, s, a, n) {
              a === void 0 ? ((a = r), (n = s)) : (t = (t - r) / (s - r)),
                t > 1 ? (t = 1) : t < 0 && (t = 0);
              var o = e(t);
              if ($bm_isInstanceOfArray(a)) {
                var f,
                  l = a.length,
                  p = createTypedArray("float32", l);
                for (f = 0; f < l; f += 1) p[f] = (n[f] - a[f]) * o + a[f];
                return p;
              }
              return (n - a) * o + a;
            }
            function nearestKey(e) {
              var t,
                r = data.k.length,
                s,
                a;
              if (!data.k.length || typeof data.k[0] == "number")
                (s = 0), (a = 0);
              else if (
                ((s = -1),
                (e *= elem.comp.globalData.frameRate),
                e < data.k[0].t)
              )
                (s = 1), (a = data.k[0].t);
              else {
                for (t = 0; t < r - 1; t += 1)
                  if (e === data.k[t].t) {
                    (s = t + 1), (a = data.k[t].t);
                    break;
                  } else if (e > data.k[t].t && e < data.k[t + 1].t) {
                    e - data.k[t].t > data.k[t + 1].t - e
                      ? ((s = t + 2), (a = data.k[t + 1].t))
                      : ((s = t + 1), (a = data.k[t].t));
                    break;
                  }
                s === -1 && ((s = t + 1), (a = data.k[t].t));
              }
              var n = {};
              return (
                (n.index = s), (n.time = a / elem.comp.globalData.frameRate), n
              );
            }
            function key(e) {
              var t, r, s;
              if (!data.k.length || typeof data.k[0] == "number")
                throw new Error("The property has no keyframe at index " + e);
              (e -= 1),
                (t = {
                  time: data.k[e].t / elem.comp.globalData.frameRate,
                  value: [],
                });
              var a = Object.prototype.hasOwnProperty.call(data.k[e], "s")
                ? data.k[e].s
                : data.k[e - 1].e;
              for (s = a.length, r = 0; r < s; r += 1)
                (t[r] = a[r]), (t.value[r] = a[r]);
              return t;
            }
            function framesToTime(e, t) {
              return t || (t = elem.comp.globalData.frameRate), e / t;
            }
            function timeToFrames(e, t) {
              return (
                !e && e !== 0 && (e = time),
                t || (t = elem.comp.globalData.frameRate),
                e * t
              );
            }
            function seedRandom(e) {
              BMMath.seedrandom(randSeed + e);
            }
            function sourceRectAtTime() {
              return elem.sourceRectAtTime();
            }
            function substring(e, t) {
              return typeof value == "string"
                ? t === void 0
                  ? value.substring(e)
                  : value.substring(e, t)
                : "";
            }
            function substr(e, t) {
              return typeof value == "string"
                ? t === void 0
                  ? value.substr(e)
                  : value.substr(e, t)
                : "";
            }
            function posterizeTime(e) {
              (time = e === 0 ? 0 : Math.floor(time * e) / e),
                (value = valueAtTime(time));
            }
            var time,
              velocity,
              value,
              text,
              textIndex,
              textTotal,
              selectorValue,
              index = elem.data.ind,
              hasParent = !!(elem.hierarchy && elem.hierarchy.length),
              parent,
              randSeed = Math.floor(Math.random() * 1e6),
              globalData = elem.globalData;
            function executeExpression(e) {
              return (
                (value = e),
                this.frameExpressionId === elem.globalData.frameId &&
                this.propType !== "textSelector"
                  ? value
                  : (this.propType === "textSelector" &&
                      ((textIndex = this.textIndex),
                      (textTotal = this.textTotal),
                      (selectorValue = this.selectorValue)),
                    thisLayer ||
                      ((text = elem.layerInterface.text),
                      (thisLayer = elem.layerInterface),
                      (thisComp = elem.comp.compInterface),
                      (toWorld = thisLayer.toWorld.bind(thisLayer)),
                      (fromWorld = thisLayer.fromWorld.bind(thisLayer)),
                      (fromComp = thisLayer.fromComp.bind(thisLayer)),
                      (toComp = thisLayer.toComp.bind(thisLayer)),
                      (mask = thisLayer.mask
                        ? thisLayer.mask.bind(thisLayer)
                        : null),
                      (fromCompToSurface = fromComp)),
                    transform ||
                      ((transform = elem.layerInterface(
                        "ADBE Transform Group"
                      )),
                      ($bm_transform = transform),
                      transform && (anchorPoint = transform.anchorPoint)),
                    elemType === 4 &&
                      !content &&
                      (content = thisLayer("ADBE Root Vectors Group")),
                    effect || (effect = thisLayer(4)),
                    (hasParent = !!(elem.hierarchy && elem.hierarchy.length)),
                    hasParent &&
                      !parent &&
                      (parent = elem.hierarchy[0].layerInterface),
                    (time =
                      this.comp.renderedFrame / this.comp.globalData.frameRate),
                    _needsRandom && seedRandom(randSeed + time),
                    needsVelocity && (velocity = velocityAtTime(time)),
                    expression_function(),
                    (this.frameExpressionId = elem.globalData.frameId),
                    (scoped_bm_rt =
                      scoped_bm_rt.propType === propTypes.SHAPE
                        ? scoped_bm_rt.v
                        : scoped_bm_rt),
                    scoped_bm_rt)
              );
            }
            return (
              (executeExpression.__preventDeadCodeRemoval = [
                $bm_transform,
                anchorPoint,
                time,
                velocity,
                inPoint,
                outPoint,
                width,
                height,
                name,
                loop_in,
                loop_out,
                smooth,
                toComp,
                fromCompToSurface,
                toWorld,
                fromWorld,
                mask,
                position,
                rotation,
                scale,
                thisComp,
                numKeys,
                active,
                wiggle,
                loopInDuration,
                loopOutDuration,
                comp,
                lookAt,
                easeOut,
                easeIn,
                ease,
                nearestKey,
                key,
                text,
                textIndex,
                textTotal,
                selectorValue,
                framesToTime,
                timeToFrames,
                sourceRectAtTime,
                substring,
                substr,
                posterizeTime,
                index,
                globalData,
              ]),
              executeExpression
            );
          }
          return (
            (ob.initiateExpression = initiateExpression),
            (ob.__preventDeadCodeRemoval = [
              window,
              document,
              XMLHttpRequest,
              fetch,
              frames,
              $bm_neg,
              add,
              $bm_sum,
              $bm_sub,
              $bm_mul,
              $bm_div,
              $bm_mod,
              clamp,
              radians_to_degrees,
              degreesToRadians,
              degrees_to_radians,
              normalize,
              rgbToHsl,
              hslToRgb,
              linear,
              random,
              createPath,
            ]),
            ob
          );
        })(),
        expressionHelpers = (function () {
          function e(o, f, l) {
            f.x &&
              ((l.k = !0),
              (l.x = !0),
              (l.initiateExpression = ExpressionManager.initiateExpression),
              l.effectsSequence.push(l.initiateExpression(o, f, l).bind(l)));
          }
          function t(o) {
            return (
              (o *= this.elem.globalData.frameRate),
              (o -= this.offsetTime),
              o !== this._cachingAtTime.lastFrame &&
                ((this._cachingAtTime.lastIndex =
                  this._cachingAtTime.lastFrame < o
                    ? this._cachingAtTime.lastIndex
                    : 0),
                (this._cachingAtTime.value = this.interpolateValue(
                  o,
                  this._cachingAtTime
                )),
                (this._cachingAtTime.lastFrame = o)),
              this._cachingAtTime.value
            );
          }
          function r(o) {
            var f = -0.01,
              l = this.getValueAtTime(o),
              p = this.getValueAtTime(o + f),
              b = 0;
            if (l.length) {
              var P;
              for (P = 0; P < l.length; P += 1) b += Math.pow(p[P] - l[P], 2);
              b = Math.sqrt(b) * 100;
            } else b = 0;
            return b;
          }
          function s(o) {
            if (this.vel !== void 0) return this.vel;
            var f = -0.001,
              l = this.getValueAtTime(o),
              p = this.getValueAtTime(o + f),
              b;
            if (l.length) {
              b = createTypedArray("float32", l.length);
              var P;
              for (P = 0; P < l.length; P += 1) b[P] = (p[P] - l[P]) / f;
            } else b = (p - l) / f;
            return b;
          }
          function a() {
            return this.pv;
          }
          function n(o) {
            this.propertyGroup = o;
          }
          return {
            searchExpressions: e,
            getSpeedAtTime: r,
            getVelocityAtTime: s,
            getValueAtTime: t,
            getStaticValueAtTime: a,
            setGroupProperty: n,
          };
        })();
      function addPropertyDecorator() {
        function e(u, _, x) {
          if (!this.k || !this.keyframes) return this.pv;
          u = u ? u.toLowerCase() : "";
          var g = this.comp.renderedFrame,
            A = this.keyframes,
            d = A[A.length - 1].t;
          if (g <= d) return this.pv;
          var y, c;
          x
            ? (_
                ? (y = Math.abs(d - this.elem.comp.globalData.frameRate * _))
                : (y = Math.max(0, d - this.elem.data.ip)),
              (c = d - y))
            : ((!_ || _ > A.length - 1) && (_ = A.length - 1),
              (c = A[A.length - 1 - _].t),
              (y = d - c));
          var m, E, S;
          if (u === "pingpong") {
            var T = Math.floor((g - c) / y);
            if (T % 2 !== 0)
              return this.getValueAtTime(
                (y - ((g - c) % y) + c) / this.comp.globalData.frameRate,
                0
              );
          } else if (u === "offset") {
            var F = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
              O = this.getValueAtTime(d / this.comp.globalData.frameRate, 0),
              G = this.getValueAtTime(
                (((g - c) % y) + c) / this.comp.globalData.frameRate,
                0
              ),
              $ = Math.floor((g - c) / y);
            if (this.pv.length) {
              for (S = new Array(F.length), E = S.length, m = 0; m < E; m += 1)
                S[m] = (O[m] - F[m]) * $ + G[m];
              return S;
            }
            return (O - F) * $ + G;
          } else if (u === "continue") {
            var B = this.getValueAtTime(d / this.comp.globalData.frameRate, 0),
              z = this.getValueAtTime(
                (d - 0.001) / this.comp.globalData.frameRate,
                0
              );
            if (this.pv.length) {
              for (S = new Array(B.length), E = S.length, m = 0; m < E; m += 1)
                S[m] =
                  B[m] +
                  ((B[m] - z[m]) * ((g - d) / this.comp.globalData.frameRate)) /
                    5e-4;
              return S;
            }
            return B + (B - z) * ((g - d) / 0.001);
          }
          return this.getValueAtTime(
            (((g - c) % y) + c) / this.comp.globalData.frameRate,
            0
          );
        }
        function t(u, _, x) {
          if (!this.k) return this.pv;
          u = u ? u.toLowerCase() : "";
          var g = this.comp.renderedFrame,
            A = this.keyframes,
            d = A[0].t;
          if (g >= d) return this.pv;
          var y, c;
          x
            ? (_
                ? (y = Math.abs(this.elem.comp.globalData.frameRate * _))
                : (y = Math.max(0, this.elem.data.op - d)),
              (c = d + y))
            : ((!_ || _ > A.length - 1) && (_ = A.length - 1),
              (c = A[_].t),
              (y = c - d));
          var m, E, S;
          if (u === "pingpong") {
            var T = Math.floor((d - g) / y);
            if (T % 2 === 0)
              return this.getValueAtTime(
                (((d - g) % y) + d) / this.comp.globalData.frameRate,
                0
              );
          } else if (u === "offset") {
            var F = this.getValueAtTime(d / this.comp.globalData.frameRate, 0),
              O = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
              G = this.getValueAtTime(
                (y - ((d - g) % y) + d) / this.comp.globalData.frameRate,
                0
              ),
              $ = Math.floor((d - g) / y) + 1;
            if (this.pv.length) {
              for (S = new Array(F.length), E = S.length, m = 0; m < E; m += 1)
                S[m] = G[m] - (O[m] - F[m]) * $;
              return S;
            }
            return G - (O - F) * $;
          } else if (u === "continue") {
            var B = this.getValueAtTime(d / this.comp.globalData.frameRate, 0),
              z = this.getValueAtTime(
                (d + 0.001) / this.comp.globalData.frameRate,
                0
              );
            if (this.pv.length) {
              for (S = new Array(B.length), E = S.length, m = 0; m < E; m += 1)
                S[m] = B[m] + ((B[m] - z[m]) * (d - g)) / 0.001;
              return S;
            }
            return B + ((B - z) * (d - g)) / 0.001;
          }
          return this.getValueAtTime(
            (y - (((d - g) % y) + d)) / this.comp.globalData.frameRate,
            0
          );
        }
        function r(u, _) {
          if (!this.k) return this.pv;
          if (((u = (u || 0.4) * 0.5), (_ = Math.floor(_ || 5)), _ <= 1))
            return this.pv;
          var x = this.comp.renderedFrame / this.comp.globalData.frameRate,
            g = x - u,
            A = x + u,
            d = _ > 1 ? (A - g) / (_ - 1) : 1,
            y = 0,
            c = 0,
            m;
          this.pv.length
            ? (m = createTypedArray("float32", this.pv.length))
            : (m = 0);
          for (var E; y < _; ) {
            if (((E = this.getValueAtTime(g + y * d)), this.pv.length))
              for (c = 0; c < this.pv.length; c += 1) m[c] += E[c];
            else m += E;
            y += 1;
          }
          if (this.pv.length) for (c = 0; c < this.pv.length; c += 1) m[c] /= _;
          else m /= _;
          return m;
        }
        function s(u) {
          this._transformCachingAtTime ||
            (this._transformCachingAtTime = { v: new Matrix() });
          var _ = this._transformCachingAtTime.v;
          if (
            (_.cloneFromProps(this.pre.props), this.appliedTransformations < 1)
          ) {
            var x = this.a.getValueAtTime(u);
            _.translate(
              -x[0] * this.a.mult,
              -x[1] * this.a.mult,
              x[2] * this.a.mult
            );
          }
          if (this.appliedTransformations < 2) {
            var g = this.s.getValueAtTime(u);
            _.scale(g[0] * this.s.mult, g[1] * this.s.mult, g[2] * this.s.mult);
          }
          if (this.sk && this.appliedTransformations < 3) {
            var A = this.sk.getValueAtTime(u),
              d = this.sa.getValueAtTime(u);
            _.skewFromAxis(-A * this.sk.mult, d * this.sa.mult);
          }
          if (this.r && this.appliedTransformations < 4) {
            var y = this.r.getValueAtTime(u);
            _.rotate(-y * this.r.mult);
          } else if (!this.r && this.appliedTransformations < 4) {
            var c = this.rz.getValueAtTime(u),
              m = this.ry.getValueAtTime(u),
              E = this.rx.getValueAtTime(u),
              S = this.or.getValueAtTime(u);
            _.rotateZ(-c * this.rz.mult)
              .rotateY(m * this.ry.mult)
              .rotateX(E * this.rx.mult)
              .rotateZ(-S[2] * this.or.mult)
              .rotateY(S[1] * this.or.mult)
              .rotateX(S[0] * this.or.mult);
          }
          if (this.data.p && this.data.p.s) {
            var T = this.px.getValueAtTime(u),
              F = this.py.getValueAtTime(u);
            if (this.data.p.z) {
              var O = this.pz.getValueAtTime(u);
              _.translate(
                T * this.px.mult,
                F * this.py.mult,
                -O * this.pz.mult
              );
            } else _.translate(T * this.px.mult, F * this.py.mult, 0);
          } else {
            var G = this.p.getValueAtTime(u);
            _.translate(
              G[0] * this.p.mult,
              G[1] * this.p.mult,
              -G[2] * this.p.mult
            );
          }
          return _;
        }
        function a() {
          return this.v.clone(new Matrix());
        }
        var n = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function (u, _, x) {
          var g = n(u, _, x);
          return (
            g.dynamicProperties.length
              ? (g.getValueAtTime = s.bind(g))
              : (g.getValueAtTime = a.bind(g)),
            (g.setGroupProperty = expressionHelpers.setGroupProperty),
            g
          );
        };
        var o = PropertyFactory.getProp;
        PropertyFactory.getProp = function (u, _, x, g, A) {
          var d = o(u, _, x, g, A);
          d.kf
            ? (d.getValueAtTime = expressionHelpers.getValueAtTime.bind(d))
            : (d.getValueAtTime =
                expressionHelpers.getStaticValueAtTime.bind(d)),
            (d.setGroupProperty = expressionHelpers.setGroupProperty),
            (d.loopOut = e),
            (d.loopIn = t),
            (d.smooth = r),
            (d.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(d)),
            (d.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(d)),
            (d.numKeys = _.a === 1 ? _.k.length : 0),
            (d.propertyIndex = _.ix);
          var y = 0;
          return (
            x !== 0 &&
              (y = createTypedArray(
                "float32",
                _.a === 1 ? _.k[0].s.length : _.k.length
              )),
            (d._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: y,
            }),
            expressionHelpers.searchExpressions(u, _, d),
            d.k && A.addDynamicProperty(d),
            d
          );
        };
        function f(u) {
          return (
            this._cachingAtTime ||
              (this._cachingAtTime = {
                shapeValue: shapePool.clone(this.pv),
                lastIndex: 0,
                lastTime: initialDefaultFrame,
              }),
            (u *= this.elem.globalData.frameRate),
            (u -= this.offsetTime),
            u !== this._cachingAtTime.lastTime &&
              ((this._cachingAtTime.lastIndex =
                this._cachingAtTime.lastTime < u ? this._caching.lastIndex : 0),
              (this._cachingAtTime.lastTime = u),
              this.interpolateShape(
                u,
                this._cachingAtTime.shapeValue,
                this._cachingAtTime
              )),
            this._cachingAtTime.shapeValue
          );
        }
        var l = ShapePropertyFactory.getConstructorFunction(),
          p = ShapePropertyFactory.getKeyframedConstructorFunction();
        function b() {}
        (b.prototype = {
          vertices: function (_, x) {
            this.k && this.getValue();
            var g = this.v;
            x !== void 0 && (g = this.getValueAtTime(x, 0));
            var A,
              d = g._length,
              y = g[_],
              c = g.v,
              m = createSizedArray(d);
            for (A = 0; A < d; A += 1)
              _ === "i" || _ === "o"
                ? (m[A] = [y[A][0] - c[A][0], y[A][1] - c[A][1]])
                : (m[A] = [y[A][0], y[A][1]]);
            return m;
          },
          points: function (_) {
            return this.vertices("v", _);
          },
          inTangents: function (_) {
            return this.vertices("i", _);
          },
          outTangents: function (_) {
            return this.vertices("o", _);
          },
          isClosed: function () {
            return this.v.c;
          },
          pointOnPath: function (_, x) {
            var g = this.v;
            x !== void 0 && (g = this.getValueAtTime(x, 0)),
              this._segmentsLength ||
                (this._segmentsLength = bez.getSegmentsLength(g));
            for (
              var A = this._segmentsLength,
                d = A.lengths,
                y = A.totalLength * _,
                c = 0,
                m = d.length,
                E = 0,
                S;
              c < m;

            ) {
              if (E + d[c].addedLength > y) {
                var T = c,
                  F = g.c && c === m - 1 ? 0 : c + 1,
                  O = (y - E) / d[c].addedLength;
                S = bez.getPointInSegment(
                  g.v[T],
                  g.v[F],
                  g.o[T],
                  g.i[F],
                  O,
                  d[c]
                );
                break;
              } else E += d[c].addedLength;
              c += 1;
            }
            return (
              S ||
                (S = g.c
                  ? [g.v[0][0], g.v[0][1]]
                  : [g.v[g._length - 1][0], g.v[g._length - 1][1]]),
              S
            );
          },
          vectorOnPath: function (_, x, g) {
            _ == 1 ? (_ = this.v.c) : _ == 0 && (_ = 0.999);
            var A = this.pointOnPath(_, x),
              d = this.pointOnPath(_ + 0.001, x),
              y = d[0] - A[0],
              c = d[1] - A[1],
              m = Math.sqrt(Math.pow(y, 2) + Math.pow(c, 2));
            if (m === 0) return [0, 0];
            var E = g === "tangent" ? [y / m, c / m] : [-c / m, y / m];
            return E;
          },
          tangentOnPath: function (_, x) {
            return this.vectorOnPath(_, x, "tangent");
          },
          normalOnPath: function (_, x) {
            return this.vectorOnPath(_, x, "normal");
          },
          setGroupProperty: expressionHelpers.setGroupProperty,
          getValueAtTime: expressionHelpers.getStaticValueAtTime,
        }),
          extendPrototype([b], l),
          extendPrototype([b], p),
          (p.prototype.getValueAtTime = f),
          (p.prototype.initiateExpression =
            ExpressionManager.initiateExpression);
        var P = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function (u, _, x, g, A) {
          var d = P(u, _, x, g, A);
          return (
            (d.propertyIndex = _.ix),
            (d.lock = !1),
            x === 3
              ? expressionHelpers.searchExpressions(u, _.pt, d)
              : x === 4 && expressionHelpers.searchExpressions(u, _.ks, d),
            d.k && u.addDynamicProperty(d),
            d
          );
        };
      }
      function initialize$1() {
        addPropertyDecorator();
      }
      function addDecorator() {
        function e() {
          return this.data.d.x
            ? ((this.calculateExpression =
                ExpressionManager.initiateExpression.bind(this)(
                  this.elem,
                  this.data.d,
                  this
                )),
              this.addEffect(this.getExpressionValue.bind(this)),
              !0)
            : null;
        }
        (TextProperty.prototype.getExpressionValue = function (t, r) {
          var s = this.calculateExpression(r);
          if (t.t !== s) {
            var a = {};
            return (
              this.copyData(a, t), (a.t = s.toString()), (a.__complete = !1), a
            );
          }
          return t;
        }),
          (TextProperty.prototype.searchProperty = function () {
            var t = this.searchKeyframes(),
              r = this.searchExpressions();
            return (this.kf = t || r), this.kf;
          }),
          (TextProperty.prototype.searchExpressions = e);
      }
      function initialize() {
        addDecorator();
      }
      function SVGComposableEffect() {}
      SVGComposableEffect.prototype = {
        createMergeNode: function e(t, r) {
          var s = createNS("feMerge");
          s.setAttribute("result", t);
          var a, n;
          for (n = 0; n < r.length; n += 1)
            (a = createNS("feMergeNode")),
              a.setAttribute("in", r[n]),
              s.appendChild(a),
              s.appendChild(a);
          return s;
        },
      };
      var linearFilterValue =
        "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
      function SVGTintFilter(e, t, r, s, a) {
        this.filterManager = t;
        var n = createNS("feColorMatrix");
        n.setAttribute("type", "matrix"),
          n.setAttribute("color-interpolation-filters", "linearRGB"),
          n.setAttribute("values", linearFilterValue + " 1 0"),
          (this.linearFilter = n),
          n.setAttribute("result", s + "_tint_1"),
          e.appendChild(n),
          (n = createNS("feColorMatrix")),
          n.setAttribute("type", "matrix"),
          n.setAttribute("color-interpolation-filters", "sRGB"),
          n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
          n.setAttribute("result", s + "_tint_2"),
          e.appendChild(n),
          (this.matrixFilter = n);
        var o = this.createMergeNode(s, [a, s + "_tint_1", s + "_tint_2"]);
        e.appendChild(o);
      }
      extendPrototype([SVGComposableEffect], SVGTintFilter),
        (SVGTintFilter.prototype.renderFrame = function (e) {
          if (e || this.filterManager._imdf) {
            var t = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              s = this.filterManager.effectElements[2].p.v / 100;
            this.linearFilter.setAttribute(
              "values",
              linearFilterValue + " " + s + " 0"
            ),
              this.matrixFilter.setAttribute(
                "values",
                r[0] -
                  t[0] +
                  " 0 0 0 " +
                  t[0] +
                  " " +
                  (r[1] - t[1]) +
                  " 0 0 0 " +
                  t[1] +
                  " " +
                  (r[2] - t[2]) +
                  " 0 0 0 " +
                  t[2] +
                  " 0 0 0 1 0"
              );
          }
        });
      function SVGFillFilter(e, t, r, s) {
        this.filterManager = t;
        var a = createNS("feColorMatrix");
        a.setAttribute("type", "matrix"),
          a.setAttribute("color-interpolation-filters", "sRGB"),
          a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
          a.setAttribute("result", s),
          e.appendChild(a),
          (this.matrixFilter = a);
      }
      SVGFillFilter.prototype.renderFrame = function (e) {
        if (e || this.filterManager._imdf) {
          var t = this.filterManager.effectElements[2].p.v,
            r = this.filterManager.effectElements[6].p.v;
          this.matrixFilter.setAttribute(
            "values",
            "0 0 0 0 " +
              t[0] +
              " 0 0 0 0 " +
              t[1] +
              " 0 0 0 0 " +
              t[2] +
              " 0 0 0 " +
              r +
              " 0"
          );
        }
      };
      function SVGStrokeEffect(e, t, r) {
        (this.initialized = !1),
          (this.filterManager = t),
          (this.elem = r),
          (this.paths = []);
      }
      (SVGStrokeEffect.prototype.initialize = function () {
        var e =
            this.elem.layerElement.children ||
            this.elem.layerElement.childNodes,
          t,
          r,
          s,
          a;
        for (
          this.filterManager.effectElements[1].p.v === 1
            ? ((a = this.elem.maskManager.masksProperties.length), (s = 0))
            : ((s = this.filterManager.effectElements[0].p.v - 1), (a = s + 1)),
            r = createNS("g"),
            r.setAttribute("fill", "none"),
            r.setAttribute("stroke-linecap", "round"),
            r.setAttribute("stroke-dashoffset", 1),
            s;
          s < a;
          s += 1
        )
          (t = createNS("path")),
            r.appendChild(t),
            this.paths.push({ p: t, m: s });
        if (this.filterManager.effectElements[10].p.v === 3) {
          var n = createNS("mask"),
            o = createElementID();
          n.setAttribute("id", o),
            n.setAttribute("mask-type", "alpha"),
            n.appendChild(r),
            this.elem.globalData.defs.appendChild(n);
          var f = createNS("g");
          for (
            f.setAttribute("mask", "url(" + getLocationHref() + "#" + o + ")");
            e[0];

          )
            f.appendChild(e[0]);
          this.elem.layerElement.appendChild(f),
            (this.masker = n),
            r.setAttribute("stroke", "#fff");
        } else if (
          this.filterManager.effectElements[10].p.v === 1 ||
          this.filterManager.effectElements[10].p.v === 2
        ) {
          if (this.filterManager.effectElements[10].p.v === 2)
            for (
              e =
                this.elem.layerElement.children ||
                this.elem.layerElement.childNodes;
              e.length;

            )
              this.elem.layerElement.removeChild(e[0]);
          this.elem.layerElement.appendChild(r),
            this.elem.layerElement.removeAttribute("mask"),
            r.setAttribute("stroke", "#fff");
        }
        (this.initialized = !0), (this.pathMasker = r);
      }),
        (SVGStrokeEffect.prototype.renderFrame = function (e) {
          this.initialized || this.initialize();
          var t,
            r = this.paths.length,
            s,
            a;
          for (t = 0; t < r; t += 1)
            if (
              this.paths[t].m !== -1 &&
              ((s = this.elem.maskManager.viewData[this.paths[t].m]),
              (a = this.paths[t].p),
              (e || this.filterManager._imdf || s.prop._imdf) &&
                a.setAttribute("d", s.lastPath),
              e ||
                this.filterManager.effectElements[9].p._imdf ||
                this.filterManager.effectElements[4].p._imdf ||
                this.filterManager.effectElements[7].p._imdf ||
                this.filterManager.effectElements[8].p._imdf ||
                s.prop._imdf)
            ) {
              var n;
              if (
                this.filterManager.effectElements[7].p.v !== 0 ||
                this.filterManager.effectElements[8].p.v !== 100
              ) {
                var o =
                    Math.min(
                      this.filterManager.effectElements[7].p.v,
                      this.filterManager.effectElements[8].p.v
                    ) * 0.01,
                  f =
                    Math.max(
                      this.filterManager.effectElements[7].p.v,
                      this.filterManager.effectElements[8].p.v
                    ) * 0.01,
                  l = a.getTotalLength();
                n = "0 0 0 " + l * o + " ";
                var p = l * (f - o),
                  b =
                    1 +
                    this.filterManager.effectElements[4].p.v *
                      2 *
                      this.filterManager.effectElements[9].p.v *
                      0.01,
                  P = Math.floor(p / b),
                  u;
                for (u = 0; u < P; u += 1)
                  n +=
                    "1 " +
                    this.filterManager.effectElements[4].p.v *
                      2 *
                      this.filterManager.effectElements[9].p.v *
                      0.01 +
                    " ";
                n += "0 " + l * 10 + " 0 0";
              } else
                n =
                  "1 " +
                  this.filterManager.effectElements[4].p.v *
                    2 *
                    this.filterManager.effectElements[9].p.v *
                    0.01;
              a.setAttribute("stroke-dasharray", n);
            }
          if (
            ((e || this.filterManager.effectElements[4].p._imdf) &&
              this.pathMasker.setAttribute(
                "stroke-width",
                this.filterManager.effectElements[4].p.v * 2
              ),
            (e || this.filterManager.effectElements[6].p._imdf) &&
              this.pathMasker.setAttribute(
                "opacity",
                this.filterManager.effectElements[6].p.v
              ),
            (this.filterManager.effectElements[10].p.v === 1 ||
              this.filterManager.effectElements[10].p.v === 2) &&
              (e || this.filterManager.effectElements[3].p._imdf))
          ) {
            var _ = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute(
              "stroke",
              "rgb(" +
                bmFloor(_[0] * 255) +
                "," +
                bmFloor(_[1] * 255) +
                "," +
                bmFloor(_[2] * 255) +
                ")"
            );
          }
        });
      function SVGTritoneFilter(e, t, r, s) {
        this.filterManager = t;
        var a = createNS("feColorMatrix");
        a.setAttribute("type", "matrix"),
          a.setAttribute("color-interpolation-filters", "linearRGB"),
          a.setAttribute(
            "values",
            "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
          ),
          e.appendChild(a);
        var n = createNS("feComponentTransfer");
        n.setAttribute("color-interpolation-filters", "sRGB"),
          n.setAttribute("result", s),
          (this.matrixFilter = n);
        var o = createNS("feFuncR");
        o.setAttribute("type", "table"), n.appendChild(o), (this.feFuncR = o);
        var f = createNS("feFuncG");
        f.setAttribute("type", "table"), n.appendChild(f), (this.feFuncG = f);
        var l = createNS("feFuncB");
        l.setAttribute("type", "table"),
          n.appendChild(l),
          (this.feFuncB = l),
          e.appendChild(n);
      }
      SVGTritoneFilter.prototype.renderFrame = function (e) {
        if (e || this.filterManager._imdf) {
          var t = this.filterManager.effectElements[0].p.v,
            r = this.filterManager.effectElements[1].p.v,
            s = this.filterManager.effectElements[2].p.v,
            a = s[0] + " " + r[0] + " " + t[0],
            n = s[1] + " " + r[1] + " " + t[1],
            o = s[2] + " " + r[2] + " " + t[2];
          this.feFuncR.setAttribute("tableValues", a),
            this.feFuncG.setAttribute("tableValues", n),
            this.feFuncB.setAttribute("tableValues", o);
        }
      };
      function SVGProLevelsFilter(e, t, r, s) {
        this.filterManager = t;
        var a = this.filterManager.effectElements,
          n = createNS("feComponentTransfer");
        (a[10].p.k ||
          a[10].p.v !== 0 ||
          a[11].p.k ||
          a[11].p.v !== 1 ||
          a[12].p.k ||
          a[12].p.v !== 1 ||
          a[13].p.k ||
          a[13].p.v !== 0 ||
          a[14].p.k ||
          a[14].p.v !== 1) &&
          (this.feFuncR = this.createFeFunc("feFuncR", n)),
          (a[17].p.k ||
            a[17].p.v !== 0 ||
            a[18].p.k ||
            a[18].p.v !== 1 ||
            a[19].p.k ||
            a[19].p.v !== 1 ||
            a[20].p.k ||
            a[20].p.v !== 0 ||
            a[21].p.k ||
            a[21].p.v !== 1) &&
            (this.feFuncG = this.createFeFunc("feFuncG", n)),
          (a[24].p.k ||
            a[24].p.v !== 0 ||
            a[25].p.k ||
            a[25].p.v !== 1 ||
            a[26].p.k ||
            a[26].p.v !== 1 ||
            a[27].p.k ||
            a[27].p.v !== 0 ||
            a[28].p.k ||
            a[28].p.v !== 1) &&
            (this.feFuncB = this.createFeFunc("feFuncB", n)),
          (a[31].p.k ||
            a[31].p.v !== 0 ||
            a[32].p.k ||
            a[32].p.v !== 1 ||
            a[33].p.k ||
            a[33].p.v !== 1 ||
            a[34].p.k ||
            a[34].p.v !== 0 ||
            a[35].p.k ||
            a[35].p.v !== 1) &&
            (this.feFuncA = this.createFeFunc("feFuncA", n)),
          (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) &&
            (n.setAttribute("color-interpolation-filters", "sRGB"),
            e.appendChild(n)),
          (a[3].p.k ||
            a[3].p.v !== 0 ||
            a[4].p.k ||
            a[4].p.v !== 1 ||
            a[5].p.k ||
            a[5].p.v !== 1 ||
            a[6].p.k ||
            a[6].p.v !== 0 ||
            a[7].p.k ||
            a[7].p.v !== 1) &&
            ((n = createNS("feComponentTransfer")),
            n.setAttribute("color-interpolation-filters", "sRGB"),
            n.setAttribute("result", s),
            e.appendChild(n),
            (this.feFuncRComposed = this.createFeFunc("feFuncR", n)),
            (this.feFuncGComposed = this.createFeFunc("feFuncG", n)),
            (this.feFuncBComposed = this.createFeFunc("feFuncB", n)));
      }
      (SVGProLevelsFilter.prototype.createFeFunc = function (e, t) {
        var r = createNS(e);
        return r.setAttribute("type", "table"), t.appendChild(r), r;
      }),
        (SVGProLevelsFilter.prototype.getTableValue = function (e, t, r, s, a) {
          for (
            var n = 0,
              o = 256,
              f,
              l = Math.min(e, t),
              p = Math.max(e, t),
              b = Array.call(null, { length: o }),
              P,
              u = 0,
              _ = a - s,
              x = t - e;
            n <= 256;

          )
            (f = n / 256),
              f <= l
                ? (P = x < 0 ? a : s)
                : f >= p
                ? (P = x < 0 ? s : a)
                : (P = s + _ * Math.pow((f - e) / x, 1 / r)),
              (b[u] = P),
              (u += 1),
              (n += 256 / (o - 1));
          return b.join(" ");
        }),
        (SVGProLevelsFilter.prototype.renderFrame = function (e) {
          if (e || this.filterManager._imdf) {
            var t,
              r = this.filterManager.effectElements;
            this.feFuncRComposed &&
              (e ||
                r[3].p._imdf ||
                r[4].p._imdf ||
                r[5].p._imdf ||
                r[6].p._imdf ||
                r[7].p._imdf) &&
              ((t = this.getTableValue(
                r[3].p.v,
                r[4].p.v,
                r[5].p.v,
                r[6].p.v,
                r[7].p.v
              )),
              this.feFuncRComposed.setAttribute("tableValues", t),
              this.feFuncGComposed.setAttribute("tableValues", t),
              this.feFuncBComposed.setAttribute("tableValues", t)),
              this.feFuncR &&
                (e ||
                  r[10].p._imdf ||
                  r[11].p._imdf ||
                  r[12].p._imdf ||
                  r[13].p._imdf ||
                  r[14].p._imdf) &&
                ((t = this.getTableValue(
                  r[10].p.v,
                  r[11].p.v,
                  r[12].p.v,
                  r[13].p.v,
                  r[14].p.v
                )),
                this.feFuncR.setAttribute("tableValues", t)),
              this.feFuncG &&
                (e ||
                  r[17].p._imdf ||
                  r[18].p._imdf ||
                  r[19].p._imdf ||
                  r[20].p._imdf ||
                  r[21].p._imdf) &&
                ((t = this.getTableValue(
                  r[17].p.v,
                  r[18].p.v,
                  r[19].p.v,
                  r[20].p.v,
                  r[21].p.v
                )),
                this.feFuncG.setAttribute("tableValues", t)),
              this.feFuncB &&
                (e ||
                  r[24].p._imdf ||
                  r[25].p._imdf ||
                  r[26].p._imdf ||
                  r[27].p._imdf ||
                  r[28].p._imdf) &&
                ((t = this.getTableValue(
                  r[24].p.v,
                  r[25].p.v,
                  r[26].p.v,
                  r[27].p.v,
                  r[28].p.v
                )),
                this.feFuncB.setAttribute("tableValues", t)),
              this.feFuncA &&
                (e ||
                  r[31].p._imdf ||
                  r[32].p._imdf ||
                  r[33].p._imdf ||
                  r[34].p._imdf ||
                  r[35].p._imdf) &&
                ((t = this.getTableValue(
                  r[31].p.v,
                  r[32].p.v,
                  r[33].p.v,
                  r[34].p.v,
                  r[35].p.v
                )),
                this.feFuncA.setAttribute("tableValues", t));
          }
        });
      function SVGDropShadowEffect(e, t, r, s, a) {
        var n = t.container.globalData.renderConfig.filterSize,
          o = t.data.fs || n;
        e.setAttribute("x", o.x || n.x),
          e.setAttribute("y", o.y || n.y),
          e.setAttribute("width", o.width || n.width),
          e.setAttribute("height", o.height || n.height),
          (this.filterManager = t);
        var f = createNS("feGaussianBlur");
        f.setAttribute("in", "SourceAlpha"),
          f.setAttribute("result", s + "_drop_shadow_1"),
          f.setAttribute("stdDeviation", "0"),
          (this.feGaussianBlur = f),
          e.appendChild(f);
        var l = createNS("feOffset");
        l.setAttribute("dx", "25"),
          l.setAttribute("dy", "0"),
          l.setAttribute("in", s + "_drop_shadow_1"),
          l.setAttribute("result", s + "_drop_shadow_2"),
          (this.feOffset = l),
          e.appendChild(l);
        var p = createNS("feFlood");
        p.setAttribute("flood-color", "#00ff00"),
          p.setAttribute("flood-opacity", "1"),
          p.setAttribute("result", s + "_drop_shadow_3"),
          (this.feFlood = p),
          e.appendChild(p);
        var b = createNS("feComposite");
        b.setAttribute("in", s + "_drop_shadow_3"),
          b.setAttribute("in2", s + "_drop_shadow_2"),
          b.setAttribute("operator", "in"),
          b.setAttribute("result", s + "_drop_shadow_4"),
          e.appendChild(b);
        var P = this.createMergeNode(s, [s + "_drop_shadow_4", a]);
        e.appendChild(P);
      }
      extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
        (SVGDropShadowEffect.prototype.renderFrame = function (e) {
          if (e || this.filterManager._imdf) {
            if (
              ((e || this.filterManager.effectElements[4].p._imdf) &&
                this.feGaussianBlur.setAttribute(
                  "stdDeviation",
                  this.filterManager.effectElements[4].p.v / 4
                ),
              e || this.filterManager.effectElements[0].p._imdf)
            ) {
              var t = this.filterManager.effectElements[0].p.v;
              this.feFlood.setAttribute(
                "flood-color",
                rgbToHex(
                  Math.round(t[0] * 255),
                  Math.round(t[1] * 255),
                  Math.round(t[2] * 255)
                )
              );
            }
            if (
              ((e || this.filterManager.effectElements[1].p._imdf) &&
                this.feFlood.setAttribute(
                  "flood-opacity",
                  this.filterManager.effectElements[1].p.v / 255
                ),
              e ||
                this.filterManager.effectElements[2].p._imdf ||
                this.filterManager.effectElements[3].p._imdf)
            ) {
              var r = this.filterManager.effectElements[3].p.v,
                s = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                a = r * Math.cos(s),
                n = r * Math.sin(s);
              this.feOffset.setAttribute("dx", a),
                this.feOffset.setAttribute("dy", n);
            }
          }
        });
      var _svgMatteSymbols = [];
      function SVGMatte3Effect(e, t, r) {
        (this.initialized = !1),
          (this.filterManager = t),
          (this.filterElem = e),
          (this.elem = r),
          (r.matteElement = createNS("g")),
          r.matteElement.appendChild(r.layerElement),
          r.matteElement.appendChild(r.transformedElement),
          (r.baseElement = r.matteElement);
      }
      (SVGMatte3Effect.prototype.findSymbol = function (e) {
        for (var t = 0, r = _svgMatteSymbols.length; t < r; ) {
          if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
          t += 1;
        }
        return null;
      }),
        (SVGMatte3Effect.prototype.replaceInParent = function (e, t) {
          var r = e.layerElement.parentNode;
          if (r) {
            for (
              var s = r.children, a = 0, n = s.length;
              a < n && s[a] !== e.layerElement;

            )
              a += 1;
            var o;
            a <= n - 2 && (o = s[a + 1]);
            var f = createNS("use");
            f.setAttribute("href", "#" + t),
              o ? r.insertBefore(f, o) : r.appendChild(f);
          }
        }),
        (SVGMatte3Effect.prototype.setElementAsMask = function (e, t) {
          if (!this.findSymbol(t)) {
            var r = createElementID(),
              s = createNS("mask");
            s.setAttribute("id", t.layerId),
              s.setAttribute("mask-type", "alpha"),
              _svgMatteSymbols.push(t);
            var a = e.globalData.defs;
            a.appendChild(s);
            var n = createNS("symbol");
            n.setAttribute("id", r),
              this.replaceInParent(t, r),
              n.appendChild(t.layerElement),
              a.appendChild(n);
            var o = createNS("use");
            o.setAttribute("href", "#" + r),
              s.appendChild(o),
              (t.data.hd = !1),
              t.show();
          }
          e.setMatte(t.layerId);
        }),
        (SVGMatte3Effect.prototype.initialize = function () {
          for (
            var e = this.filterManager.effectElements[0].p.v,
              t = this.elem.comp.elements,
              r = 0,
              s = t.length;
            r < s;

          )
            t[r] &&
              t[r].data.ind === e &&
              this.setElementAsMask(this.elem, t[r]),
              (r += 1);
          this.initialized = !0;
        }),
        (SVGMatte3Effect.prototype.renderFrame = function () {
          this.initialized || this.initialize();
        });
      function SVGGaussianBlurEffect(e, t, r, s) {
        e.setAttribute("x", "-100%"),
          e.setAttribute("y", "-100%"),
          e.setAttribute("width", "300%"),
          e.setAttribute("height", "300%"),
          (this.filterManager = t);
        var a = createNS("feGaussianBlur");
        a.setAttribute("result", s),
          e.appendChild(a),
          (this.feGaussianBlur = a);
      }
      return (
        (SVGGaussianBlurEffect.prototype.renderFrame = function (e) {
          if (e || this.filterManager._imdf) {
            var t = 0.3,
              r = this.filterManager.effectElements[0].p.v * t,
              s = this.filterManager.effectElements[1].p.v,
              a = s == 3 ? 0 : r,
              n = s == 2 ? 0 : r;
            this.feGaussianBlur.setAttribute("stdDeviation", a + " " + n);
            var o =
              this.filterManager.effectElements[2].p.v == 1
                ? "wrap"
                : "duplicate";
            this.feGaussianBlur.setAttribute("edgeMode", o);
          }
        }),
        registerRenderer("canvas", CanvasRenderer),
        registerRenderer("html", HybridRenderer),
        registerRenderer("svg", SVGRenderer),
        ShapeModifiers.registerModifier("tm", TrimModifier),
        ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
        ShapeModifiers.registerModifier("rp", RepeaterModifier),
        ShapeModifiers.registerModifier("rd", RoundCornersModifier),
        ShapeModifiers.registerModifier("zz", ZigZagModifier),
        ShapeModifiers.registerModifier("op", OffsetPathModifier),
        setExpressionsPlugin(Expressions),
        setExpressionInterfaces(getInterface),
        initialize$1(),
        initialize(),
        registerEffect(20, SVGTintFilter, !0),
        registerEffect(21, SVGFillFilter, !0),
        registerEffect(22, SVGStrokeEffect, !1),
        registerEffect(23, SVGTritoneFilter, !0),
        registerEffect(24, SVGProLevelsFilter, !0),
        registerEffect(25, SVGDropShadowEffect, !0),
        registerEffect(28, SVGMatte3Effect, !1),
        registerEffect(29, SVGGaussianBlurEffect, !0),
        lottie
      );
    });
})(lottie, lottieExports);
Object.defineProperty(dist, "__esModule", { value: !0 });
var _extends2 = _extends,
  _extends3 = _interopRequireDefault(_extends2),
  _getPrototypeOf = getPrototypeOfExports,
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf),
  _classCallCheck2 = classCallCheck,
  _classCallCheck3 = _interopRequireDefault(_classCallCheck2),
  _createClass2 = createClass,
  _createClass3 = _interopRequireDefault(_createClass2),
  _possibleConstructorReturn2 = possibleConstructorReturn,
  _possibleConstructorReturn3 = _interopRequireDefault(
    _possibleConstructorReturn2
  ),
  _inherits2 = inherits,
  _inherits3 = _interopRequireDefault(_inherits2),
  _react = reactExports,
  _react2 = _interopRequireDefault(_react),
  _propTypes = propTypesExports,
  _propTypes2 = _interopRequireDefault(_propTypes),
  _lottieWeb = lottieExports,
  _lottieWeb2 = _interopRequireDefault(_lottieWeb);
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
var Lottie = (function (e) {
    (0, _inherits3.default)(t, e);
    function t() {
      var r, s, a, n;
      (0, _classCallCheck3.default)(this, t);
      for (var o = arguments.length, f = Array(o), l = 0; l < o; l++)
        f[l] = arguments[l];
      return (
        (n =
          ((s =
            ((a = (0, _possibleConstructorReturn3.default)(
              this,
              (r = t.__proto__ || (0, _getPrototypeOf2.default)(t)).call.apply(
                r,
                [this].concat(f)
              )
            )),
            a)),
          (a.handleClickToPause = function () {
            a.anim.isPaused ? a.anim.play() : a.anim.pause();
          }),
          s)),
        (0, _possibleConstructorReturn3.default)(a, n)
      );
    }
    return (
      (0, _createClass3.default)(t, [
        {
          key: "componentDidMount",
          value: function () {
            var s = this.props,
              a = s.options,
              n = s.eventListeners,
              o = a.loop,
              f = a.autoplay,
              l = a.animationData,
              p = a.rendererSettings,
              b = a.segments;
            (this.options = {
              container: this.el,
              renderer: "svg",
              loop: o !== !1,
              autoplay: f !== !1,
              segments: b !== !1,
              animationData: l,
              rendererSettings: p,
            }),
              (this.options = (0, _extends3.default)({}, this.options, a)),
              (this.anim = _lottieWeb2.default.loadAnimation(this.options)),
              this.registerEvents(n);
          },
        },
        {
          key: "UNSAFE_componentWillUpdate",
          value: function (s) {
            this.options.animationData !== s.options.animationData &&
              (this.deRegisterEvents(this.props.eventListeners),
              this.destroy(),
              (this.options = (0, _extends3.default)(
                {},
                this.options,
                s.options
              )),
              (this.anim = _lottieWeb2.default.loadAnimation(this.options)),
              this.registerEvents(s.eventListeners));
          },
        },
        {
          key: "componentDidUpdate",
          value: function () {
            this.props.isStopped
              ? this.stop()
              : this.props.segments
              ? this.playSegments()
              : this.play(),
              this.pause(),
              this.setSpeed(),
              this.setDirection();
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this.deRegisterEvents(this.props.eventListeners),
              this.destroy(),
              (this.options.animationData = null),
              (this.anim = null);
          },
        },
        {
          key: "setSpeed",
          value: function () {
            this.anim.setSpeed(this.props.speed);
          },
        },
        {
          key: "setDirection",
          value: function () {
            this.anim.setDirection(this.props.direction);
          },
        },
        {
          key: "play",
          value: function () {
            this.anim.play();
          },
        },
        {
          key: "playSegments",
          value: function () {
            this.anim.playSegments(this.props.segments);
          },
        },
        {
          key: "stop",
          value: function () {
            this.anim.stop();
          },
        },
        {
          key: "pause",
          value: function () {
            this.props.isPaused && !this.anim.isPaused
              ? this.anim.pause()
              : !this.props.isPaused && this.anim.isPaused && this.anim.pause();
          },
        },
        {
          key: "destroy",
          value: function () {
            this.anim.destroy();
          },
        },
        {
          key: "registerEvents",
          value: function (s) {
            var a = this;
            s.forEach(function (n) {
              a.anim.addEventListener(n.eventName, n.callback);
            });
          },
        },
        {
          key: "deRegisterEvents",
          value: function (s) {
            var a = this;
            s.forEach(function (n) {
              a.anim.removeEventListener(n.eventName, n.callback);
            });
          },
        },
        {
          key: "render",
          value: function () {
            var s = this,
              a = this.props,
              n = a.width,
              o = a.height,
              f = a.ariaRole,
              l = a.ariaLabel,
              p = a.isClickToPauseDisabled,
              b = a.title,
              P = function (g) {
                var A = void 0;
                return (
                  typeof g == "number" ? (A = g + "px") : (A = g || "100%"), A
                );
              },
              u = (0, _extends3.default)(
                {
                  width: P(n),
                  height: P(o),
                  overflow: "hidden",
                  margin: "0 auto",
                  outline: "none",
                },
                this.props.style
              ),
              _ = p
                ? function () {
                    return null;
                  }
                : this.handleClickToPause;
            return _react2.default.createElement("div", {
              ref: function (g) {
                s.el = g;
              },
              style: u,
              onClick: _,
              title: b,
              role: f,
              "aria-label": l,
              tabIndex: "0",
            });
          },
        },
      ]),
      t
    );
  })(_react2.default.Component),
  _default = (dist.default = Lottie);
Lottie.propTypes = {
  eventListeners: _propTypes2.default.arrayOf(_propTypes2.default.object),
  options: _propTypes2.default.object.isRequired,
  height: _propTypes2.default.oneOfType([
    _propTypes2.default.string,
    _propTypes2.default.number,
  ]),
  width: _propTypes2.default.oneOfType([
    _propTypes2.default.string,
    _propTypes2.default.number,
  ]),
  isStopped: _propTypes2.default.bool,
  isPaused: _propTypes2.default.bool,
  speed: _propTypes2.default.number,
  segments: _propTypes2.default.arrayOf(_propTypes2.default.number),
  direction: _propTypes2.default.number,
  ariaRole: _propTypes2.default.string,
  ariaLabel: _propTypes2.default.string,
  isClickToPauseDisabled: _propTypes2.default.bool,
  title: _propTypes2.default.string,
};
Lottie.defaultProps = {
  eventListeners: [],
  isStopped: !1,
  isPaused: !1,
  speed: 1,
  ariaRole: "button",
  ariaLabel: "animation",
  isClickToPauseDisabled: !1,
  title: "",
};
const v = "4.8.0",
  meta = { g: "LottieFiles AE 3.0.2", a: "", k: "", d: "", tc: "" },
  fr = 60,
  ip = 0,
  op = 96,
  w = 256,
  h = 256,
  nm = "Tricube Spinner #1 (Lottie Render)",
  ddd = 0,
  assets = [],
  layers = [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Bottom_Cube Invert",
      parent: 7,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: -60, ix: 10 },
        p: { a: 0, k: [20.785, 12, 0], ix: 2 },
        a: { a: 0, k: [128, 152, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128, 152],
                          [107.215, 140],
                          [128, 128],
                          [148.784, 140],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 72,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128, 152],
                          [107.215, 140],
                          [128, 128],
                          [148.784, 140],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 96,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128, 152],
                          [107.215, 140],
                          [128, 128],
                          [148.784, 140],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Top",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: !1,
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128, 152],
                          [107.165, 140],
                          [107.215, 140],
                          [128, 152],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 72,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128, 176],
                          [107.215, 164],
                          [107.215, 140],
                          [128, 152],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 96,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128, 152],
                          [107.165, 140],
                          [107.215, 140],
                          [128, 152],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Side",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 2,
          mn: "ADBE Vector Group",
          hd: !1,
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [148.835, 140],
                          [128, 152],
                          [128, 152],
                          [148.785, 140],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 72,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [148.785, 164],
                          [128, 176],
                          [128, 152],
                          [148.785, 140],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 96,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [148.835, 140],
                          [128, 152],
                          [128, 152],
                          [148.785, 140],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Front ",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 3,
          mn: "ADBE Vector Group",
          hd: !1,
        },
      ],
      ip: 48,
      op: 97,
      st: -18,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Side_Cube Invert",
      parent: 7,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: -60, ix: 10 },
        p: { a: 0, k: [0, -24, 0], ix: 2 },
        a: { a: 0, k: [148.785, 116, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [148.785, 116],
                          [128, 104],
                          [128.034, 104],
                          [148.869, 116],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 72,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [148.785, 116],
                          [128, 104],
                          [148.784, 92],
                          [169.569, 104],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 96,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [148.785, 116],
                          [128, 104],
                          [128.034, 104],
                          [148.869, 116],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Top",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: !1,
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [148.785, 140],
                          [128, 128],
                          [128, 104],
                          [148.785, 116],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 72,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [148.785, 140],
                          [128, 128],
                          [128, 104],
                          [148.785, 116],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 96,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [148.785, 140],
                          [128, 128],
                          [128, 104],
                          [148.785, 116],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Side",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 2,
          mn: "ADBE Vector Group",
          hd: !1,
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [148.869, 140],
                          [148.785, 140],
                          [148.785, 116],
                          [148.919, 116],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 72,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [169.569, 128],
                          [148.785, 140],
                          [148.785, 116],
                          [169.569, 104],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 96,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [148.869, 140],
                          [148.785, 140],
                          [148.785, 116],
                          [148.919, 116],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Front",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 3,
          mn: "ADBE Vector Group",
          hd: !1,
        },
      ],
      ip: 48,
      op: 97,
      st: -18,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Front_Cube Invert",
      parent: 7,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: -60, ix: 10 },
        p: { a: 0, k: [-20.784, 12, 0], ix: 2 },
        a: { a: 0, k: [107.215, 116, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [107.215, 116],
                          [107.131, 116],
                          [127.965, 104],
                          [128, 104],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 72,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [107.215, 116],
                          [86.431, 104],
                          [107.215, 92],
                          [128, 104],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 96,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [107.215, 116],
                          [107.131, 116],
                          [127.965, 104],
                          [128, 104],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Top",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: !1,
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [107.215, 140],
                          [107.131, 140],
                          [107.131, 116],
                          [107.215, 116],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 72,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [107.215, 140],
                          [86.431, 128],
                          [86.431, 104],
                          [107.215, 116],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 96,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [107.215, 140],
                          [107.131, 140],
                          [107.131, 116],
                          [107.215, 116],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Side",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 2,
          mn: "ADBE Vector Group",
          hd: !1,
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128, 128],
                          [107.215, 140],
                          [107.215, 116],
                          [128, 104],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 72,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128, 128],
                          [107.215, 140],
                          [107.215, 116],
                          [128, 104],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 96,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128, 128],
                          [107.215, 140],
                          [107.215, 116],
                          [128, 104],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Front",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 3,
          mn: "ADBE Vector Group",
          hd: !1,
        },
      ],
      ip: 48,
      op: 97,
      st: -18,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 4,
      ty: 4,
      nm: "Top Cube",
      parent: 7,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [0, -24, 0], ix: 2 },
        a: { a: 0, k: [128, 104, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 0,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [0, 36],
                          [-20.785, 24],
                          [0, 12],
                          [20.816, 24],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 24,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [0, 12],
                          [-20.785, 0],
                          [0, -12],
                          [20.785, 0],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [0, 36],
                          [-20.785, 24],
                          [0, 12],
                          [20.816, 24],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [128, 92], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Top",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: !1,
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 0,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128, 128],
                          [107.215, 116],
                          [107.165, 116],
                          [128, 128],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 24,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128, 128],
                          [107.215, 116],
                          [107.215, 92],
                          [128, 104],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128, 128],
                          [107.215, 116],
                          [107.165, 116],
                          [128, 128],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Side",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 2,
          mn: "ADBE Vector Group",
          hd: !1,
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 0,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [148.785, 116],
                          [128, 128],
                          [128, 128],
                          [148.819, 116],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 24,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [148.785, 116],
                          [128, 128],
                          [128, 104],
                          [148.785, 92],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [148.785, 116],
                          [128, 128],
                          [128, 128],
                          [148.819, 116],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Front",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 3,
          mn: "ADBE Vector Group",
          hd: !1,
        },
      ],
      ip: 0,
      op: 48,
      st: -6,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 5,
      ty: 4,
      nm: "Front cube",
      parent: 7,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [20.785, 12, 0], ix: 2 },
        a: { a: 0, k: [148.785, 140, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 0,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128.035, 128],
                          [128, 128],
                          [148.785, 116],
                          [148.869, 116],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 24,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [148.785, 140],
                          [128, 128],
                          [148.785, 116],
                          [169.569, 128],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128.035, 128],
                          [128, 128],
                          [148.785, 116],
                          [148.869, 116],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Top",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: !1,
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 0,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128.035, 152],
                          [128, 152],
                          [128, 128],
                          [128.035, 128],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 24,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [148.785, 164],
                          [128, 152],
                          [128, 128],
                          [148.785, 140],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128.035, 152],
                          [128, 152],
                          [128, 128],
                          [128.035, 128],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Side",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 2,
          mn: "ADBE Vector Group",
          hd: !1,
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 0,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-10.377, -5.984],
                          [-31.177, 6],
                          [-31.177, -18],
                          [-10.361, -30.015],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 24,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [10.392, 6],
                          [-10.392, 18],
                          [-10.392, -6],
                          [10.392, -18],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [-10.377, -5.984],
                          [-31.177, 6],
                          [-31.177, -18],
                          [-10.361, -30.015],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [159.177, 146], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Front",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 3,
          mn: "ADBE Vector Group",
          hd: !1,
        },
      ],
      ip: 0,
      op: 48,
      st: -6,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 6,
      ty: 4,
      nm: "Side Cube",
      parent: 7,
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: { a: 0, k: 0, ix: 10 },
        p: { a: 0, k: [-20.785, 12, 0], ix: 2 },
        a: { a: 0, k: [107.215, 140, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 0,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [127.966, 128],
                          [107.131, 116],
                          [107.215, 116],
                          [128, 128],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 24,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [107.216, 140],
                          [86.431, 128],
                          [107.215, 116],
                          [128, 128],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [127.966, 128],
                          [107.131, 116],
                          [107.215, 116],
                          [128, 128],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Top",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 1,
          mn: "ADBE Vector Group",
          hd: !1,
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 0,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [31.177, 6],
                          [10.392, -6],
                          [10.392, -30],
                          [31.177, -18],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 24,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [10.392, 18],
                          [-10.392, 6],
                          [-10.392, -18],
                          [10.392, -6],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [31.177, 6],
                          [10.392, -6],
                          [10.392, -30],
                          [31.177, -18],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [96.823, 146], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Side",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 2,
          mn: "ADBE Vector Group",
          hd: !1,
        },
        {
          ty: "gr",
          it: [
            {
              ind: 0,
              ty: "sh",
              ix: 1,
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 0,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128, 152],
                          [127.965, 152],
                          [127.965, 128],
                          [128, 128],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    i: { x: 0.2, y: 1 },
                    o: { x: 0.8, y: 0 },
                    t: 24,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128, 152],
                          [107.215, 164],
                          [107.215, 140],
                          [128, 128],
                        ],
                        c: !0,
                      },
                    ],
                  },
                  {
                    t: 48,
                    s: [
                      {
                        i: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        o: [
                          [0, 0],
                          [0, 0],
                          [0, 0],
                          [0, 0],
                        ],
                        v: [
                          [128, 152],
                          [127.965, 152],
                          [127.965, 128],
                          [128, 128],
                        ],
                        c: !0,
                      },
                    ],
                  },
                ],
                ix: 2,
              },
              nm: "Path 1",
              mn: "ADBE Vector Shape - Group",
              hd: !1,
            },
            {
              ty: "st",
              c: { a: 0, k: [0, 0, 0, 1], ix: 3 },
              o: { a: 0, k: 100, ix: 4 },
              w: { a: 0, k: 3, ix: 5 },
              lc: 2,
              lj: 2,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: !1,
            },
            {
              ty: "fl",
              c: { a: 0, k: [1, 1, 1, 1], ix: 4 },
              o: { a: 0, k: 100, ix: 5 },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: !1,
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0], ix: 2 },
              a: { a: 0, k: [0, 0], ix: 1 },
              s: { a: 0, k: [100, 100], ix: 3 },
              r: { a: 0, k: 0, ix: 6 },
              o: { a: 0, k: 100, ix: 7 },
              sk: { a: 0, k: 0, ix: 4 },
              sa: { a: 0, k: 0, ix: 5 },
              nm: "Transform",
            },
          ],
          nm: "Front",
          np: 3,
          cix: 2,
          bm: 0,
          ix: 3,
          mn: "ADBE Vector Group",
          hd: !1,
        },
      ],
      ip: 0,
      op: 48,
      st: -6,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 7,
      ty: 3,
      nm: "Rotation Layer",
      sr: 1,
      ks: {
        o: { a: 0, k: 100, ix: 11 },
        r: {
          a: 1,
          k: [
            { i: { x: [0.2], y: [1] }, o: { x: [0.8], y: [0] }, t: 24, s: [0] },
            {
              i: { x: [0.2], y: [1] },
              o: { x: [0.8], y: [0] },
              t: 48,
              s: [60],
            },
            {
              i: { x: [0.2], y: [1] },
              o: { x: [0.8], y: [0] },
              t: 72,
              s: [60],
            },
            { t: 96, s: [120] },
          ],
          ix: 10,
        },
        p: { a: 0, k: [128, 128, 0], ix: 2 },
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
      },
      ao: 0,
      ip: 0,
      op: 97,
      st: -30,
      bm: 0,
    },
  ],
  markers = [],
  animationData = {
    v,
    meta,
    fr,
    ip,
    op,
    w,
    h,
    nm,
    ddd,
    assets,
    layers,
    markers,
  },
  LoadingComp = () =>
    jsx("div", {
      className:
        " w-screen h-screen pointer-events-none bg-[#141845] flex justify-center items-center",
      children: jsx(_default, {
        options: {
          loop: !0,
          autoplay: !0,
          animationData,
          rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
        },
        height: 400,
        width: 400,
      }),
    });
export { LoadingComp as default };
