(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var s_ =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Th(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var fr = {},
  Ch = {
    get exports() {
      return fr;
    },
    set exports(e) {
      fr = e;
    },
  },
  ro = {},
  yt = {},
  Ph = {
    get exports() {
      return yt;
    },
    set exports(e) {
      yt = e;
    },
  },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xr = Symbol.for("react.element"),
  Rh = Symbol.for("react.portal"),
  Nh = Symbol.for("react.fragment"),
  Oh = Symbol.for("react.strict_mode"),
  Dh = Symbol.for("react.profiler"),
  Ah = Symbol.for("react.provider"),
  Lh = Symbol.for("react.context"),
  xh = Symbol.for("react.forward_ref"),
  Mh = Symbol.for("react.suspense"),
  Uh = Symbol.for("react.memo"),
  zh = Symbol.for("react.lazy"),
  Aa = Symbol.iterator;
function Fh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Aa && e[Aa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var wc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Sc = Object.assign,
  Ec = {};
function $n(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ec),
    (this.updater = n || wc);
}
$n.prototype.isReactComponent = {};
$n.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
$n.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function kc() {}
kc.prototype = $n.prototype;
function Sl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ec),
    (this.updater = n || wc);
}
var El = (Sl.prototype = new kc());
El.constructor = Sl;
Sc(El, $n.prototype);
El.isPureReactComponent = !0;
var La = Array.isArray,
  Ic = Object.prototype.hasOwnProperty,
  kl = { current: null },
  Tc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cc(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ic.call(t, r) && !Tc.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: xr,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: kl.current,
  };
}
function $h(e, t) {
  return {
    $$typeof: xr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Il(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xr;
}
function jh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xa = /\/+/g;
function Fo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? jh("" + e.key)
    : t.toString(36);
}
function ci(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case xr:
          case Rh:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Fo(s, 0) : r),
      La(i)
        ? ((n = ""),
          e != null && (n = e.replace(xa, "$&/") + "/"),
          ci(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Il(i) &&
            (i = $h(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(xa, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), La(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + Fo(o, l);
      s += ci(o, t, n, a, i);
    }
  else if (((a = Fh(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Fo(o, l++)), (s += ci(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Kr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ci(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Bh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var de = { current: null },
  di = { transition: null },
  Hh = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: di,
    ReactCurrentOwner: kl,
  };
A.Children = {
  map: Kr,
  forEach: function (e, t, n) {
    Kr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Kr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Kr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Il(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
A.Component = $n;
A.Fragment = Nh;
A.Profiler = Dh;
A.PureComponent = Sl;
A.StrictMode = Oh;
A.Suspense = Mh;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hh;
A.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Sc({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = kl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Ic.call(t, a) &&
        !Tc.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: xr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
A.createContext = function (e) {
  return (
    (e = {
      $$typeof: Lh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Ah, _context: e }),
    (e.Consumer = e)
  );
};
A.createElement = Cc;
A.createFactory = function (e) {
  var t = Cc.bind(null, e);
  return (t.type = e), t;
};
A.createRef = function () {
  return { current: null };
};
A.forwardRef = function (e) {
  return { $$typeof: xh, render: e };
};
A.isValidElement = Il;
A.lazy = function (e) {
  return { $$typeof: zh, _payload: { _status: -1, _result: e }, _init: Bh };
};
A.memo = function (e, t) {
  return { $$typeof: Uh, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function (e) {
  var t = di.transition;
  di.transition = {};
  try {
    e();
  } finally {
    di.transition = t;
  }
};
A.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
A.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
A.useContext = function (e) {
  return de.current.useContext(e);
};
A.useDebugValue = function () {};
A.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
A.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
A.useId = function () {
  return de.current.useId();
};
A.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
A.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
A.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
A.useRef = function (e) {
  return de.current.useRef(e);
};
A.useState = function (e) {
  return de.current.useState(e);
};
A.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function () {
  return de.current.useTransition();
};
A.version = "18.2.0";
(function (e) {
  e.exports = A;
})(Ph);
const _t = Th(yt);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vh = yt,
  Wh = Symbol.for("react.element"),
  bh = Symbol.for("react.fragment"),
  Kh = Object.prototype.hasOwnProperty,
  Gh = Vh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Qh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pc(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Kh.call(t, r) && !Qh.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Wh,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Gh.current,
  };
}
ro.Fragment = bh;
ro.jsx = Pc;
ro.jsxs = Pc;
(function (e) {
  e.exports = ro;
})(Ch);
const l_ = fr.Fragment,
  Vt = fr.jsx,
  a_ = fr.jsxs;
var ys = {},
  _s = {},
  Yh = {
    get exports() {
      return _s;
    },
    set exports(e) {
      _s = e;
    },
  },
  ke = {},
  ws = {},
  qh = {
    get exports() {
      return ws;
    },
    set exports(e) {
      ws = e;
    },
  },
  Rc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, R) {
    var O = T.length;
    T.push(R);
    e: for (; 0 < O; ) {
      var K = (O - 1) >>> 1,
        J = T[K];
      if (0 < i(J, R)) (T[K] = R), (T[O] = J), (O = K);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var R = T[0],
      O = T.pop();
    if (O !== R) {
      T[0] = O;
      e: for (var K = 0, J = T.length, Wr = J >>> 1; K < Wr; ) {
        var Ft = 2 * (K + 1) - 1,
          zo = T[Ft],
          $t = Ft + 1,
          br = T[$t];
        if (0 > i(zo, O))
          $t < J && 0 > i(br, zo)
            ? ((T[K] = br), (T[$t] = O), (K = $t))
            : ((T[K] = zo), (T[Ft] = O), (K = Ft));
        else if ($t < J && 0 > i(br, O)) (T[K] = br), (T[$t] = O), (K = $t);
        else break e;
      }
    }
    return R;
  }
  function i(T, R) {
    var O = T.sortIndex - R.sortIndex;
    return O !== 0 ? O : T.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    h = 1,
    p = null,
    m = 3,
    _ = !1,
    w = !1,
    k = !1,
    D = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(T) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= T)
        r(u), (R.sortIndex = R.expirationTime), t(a, R);
      else break;
      R = n(u);
    }
  }
  function g(T) {
    if (((k = !1), f(T), !w))
      if (n(a) !== null) (w = !0), Mo(v);
      else {
        var R = n(u);
        R !== null && Uo(g, R.startTime - T);
      }
  }
  function v(T, R) {
    (w = !1), k && ((k = !1), d(C), (C = -1)), (_ = !0);
    var O = m;
    try {
      for (
        f(R), p = n(a);
        p !== null && (!(p.expirationTime > R) || (T && !ye()));

      ) {
        var K = p.callback;
        if (typeof K == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var J = K(p.expirationTime <= R);
          (R = e.unstable_now()),
            typeof J == "function" ? (p.callback = J) : p === n(a) && r(a),
            f(R);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Wr = !0;
      else {
        var Ft = n(u);
        Ft !== null && Uo(g, Ft.startTime - R), (Wr = !1);
      }
      return Wr;
    } finally {
      (p = null), (m = O), (_ = !1);
    }
  }
  var S = !1,
    E = null,
    C = -1,
    x = 5,
    N = -1;
  function ye() {
    return !(e.unstable_now() - N < x);
  }
  function Ut() {
    if (E !== null) {
      var T = e.unstable_now();
      N = T;
      var R = !0;
      try {
        R = E(!0, T);
      } finally {
        R ? zt() : ((S = !1), (E = null));
      }
    } else S = !1;
  }
  var zt;
  if (typeof c == "function")
    zt = function () {
      c(Ut);
    };
  else if (typeof MessageChannel < "u") {
    var Hn = new MessageChannel(),
      Ih = Hn.port2;
    (Hn.port1.onmessage = Ut),
      (zt = function () {
        Ih.postMessage(null);
      });
  } else
    zt = function () {
      D(Ut, 0);
    };
  function Mo(T) {
    (E = T), S || ((S = !0), zt());
  }
  function Uo(T, R) {
    C = D(function () {
      T(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || _ || ((w = !0), Mo(v));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (x = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (T) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = m;
      }
      var O = m;
      m = R;
      try {
        return T();
      } finally {
        m = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, R) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var O = m;
      m = T;
      try {
        return R();
      } finally {
        m = O;
      }
    }),
    (e.unstable_scheduleCallback = function (T, R, O) {
      var K = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? K + O : K))
          : (O = K),
        T)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = O + J),
        (T = {
          id: h++,
          callback: R,
          priorityLevel: T,
          startTime: O,
          expirationTime: J,
          sortIndex: -1,
        }),
        O > K
          ? ((T.sortIndex = O),
            t(u, T),
            n(a) === null &&
              T === n(u) &&
              (k ? (d(C), (C = -1)) : (k = !0), Uo(g, O - K)))
          : ((T.sortIndex = J), t(a, T), w || _ || ((w = !0), Mo(v))),
        T
      );
    }),
    (e.unstable_shouldYield = ye),
    (e.unstable_wrapCallback = function (T) {
      var R = m;
      return function () {
        var O = m;
        m = R;
        try {
          return T.apply(this, arguments);
        } finally {
          m = O;
        }
      };
    });
})(Rc);
(function (e) {
  e.exports = Rc;
})(qh);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nc = yt,
  Ee = ws;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Oc = new Set(),
  hr = {};
function rn(e, t) {
  On(e, t), On(e + "Capture", t);
}
function On(e, t) {
  for (hr[e] = t, e = 0; e < t.length; e++) Oc.add(t[e]);
}
var Ze = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ss = Object.prototype.hasOwnProperty,
  Jh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ma = {},
  Ua = {};
function Xh(e) {
  return Ss.call(Ua, e)
    ? !0
    : Ss.call(Ma, e)
    ? !1
    : Jh.test(e)
    ? (Ua[e] = !0)
    : ((Ma[e] = !0), !1);
}
function Zh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ep(e, t, n, r) {
  if (t === null || typeof t > "u" || Zh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function fe(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    re[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  re[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    re[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  re[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  re[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  re[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  re[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Tl = /[\-:]([a-z])/g;
function Cl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Tl, Cl);
    re[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Tl, Cl);
    re[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Tl, Cl);
  re[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Pl(e, t, n, r) {
  var i = re.hasOwnProperty(t) ? re[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ep(t, n, i, r) && (n = null),
    r || i === null
      ? Xh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ot = Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Gr = Symbol.for("react.element"),
  an = Symbol.for("react.portal"),
  un = Symbol.for("react.fragment"),
  Rl = Symbol.for("react.strict_mode"),
  Es = Symbol.for("react.profiler"),
  Dc = Symbol.for("react.provider"),
  Ac = Symbol.for("react.context"),
  Nl = Symbol.for("react.forward_ref"),
  ks = Symbol.for("react.suspense"),
  Is = Symbol.for("react.suspense_list"),
  Ol = Symbol.for("react.memo"),
  at = Symbol.for("react.lazy"),
  Lc = Symbol.for("react.offscreen"),
  za = Symbol.iterator;
function Vn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (za && e[za]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  $o;
function Jn(e) {
  if ($o === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      $o = (t && t[1]) || "";
    }
  return (
    `
` +
    $o +
    e
  );
}
var jo = !1;
function Bo(e, t) {
  if (!e || jo) return "";
  jo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (jo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Jn(e) : "";
}
function tp(e) {
  switch (e.tag) {
    case 5:
      return Jn(e.type);
    case 16:
      return Jn("Lazy");
    case 13:
      return Jn("Suspense");
    case 19:
      return Jn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Bo(e.type, !1)), e;
    case 11:
      return (e = Bo(e.type.render, !1)), e;
    case 1:
      return (e = Bo(e.type, !0)), e;
    default:
      return "";
  }
}
function Ts(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case un:
      return "Fragment";
    case an:
      return "Portal";
    case Es:
      return "Profiler";
    case Rl:
      return "StrictMode";
    case ks:
      return "Suspense";
    case Is:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ac:
        return (e.displayName || "Context") + ".Consumer";
      case Dc:
        return (e._context.displayName || "Context") + ".Provider";
      case Nl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ol:
        return (
          (t = e.displayName || null), t !== null ? t : Ts(e.type) || "Memo"
        );
      case at:
        (t = e._payload), (e = e._init);
        try {
          return Ts(e(t));
        } catch {}
    }
  return null;
}
function np(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ts(t);
    case 8:
      return t === Rl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ot(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function xc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function rp(e) {
  var t = xc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Qr(e) {
  e._valueTracker || (e._valueTracker = rp(e));
}
function Mc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = xc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ci(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Cs(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Fa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ot(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Uc(e, t) {
  (t = t.checked), t != null && Pl(e, "checked", t, !1);
}
function Ps(e, t) {
  Uc(e, t);
  var n = Ot(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Rs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Rs(e, t.type, Ot(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function $a(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Rs(e, t, n) {
  (t !== "number" || Ci(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xn = Array.isArray;
function Sn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ot(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ns(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ja(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (Xn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ot(n) };
}
function zc(e, t) {
  var n = Ot(t.value),
    r = Ot(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ba(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Os(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Fc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Yr,
  $c = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Yr = Yr || document.createElement("div"),
          Yr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Yr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var tr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ip = ["Webkit", "ms", "Moz", "O"];
Object.keys(tr).forEach(function (e) {
  ip.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (tr[t] = tr[e]);
  });
});
function jc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (tr.hasOwnProperty(e) && tr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Bc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = jc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var op = W(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ds(e, t) {
  if (t) {
    if (op[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function As(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ls = null;
function Dl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var xs = null,
  En = null,
  kn = null;
function Ha(e) {
  if ((e = zr(e))) {
    if (typeof xs != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = ao(t)), xs(e.stateNode, e.type, t));
  }
}
function Hc(e) {
  En ? (kn ? kn.push(e) : (kn = [e])) : (En = e);
}
function Vc() {
  if (En) {
    var e = En,
      t = kn;
    if (((kn = En = null), Ha(e), t)) for (e = 0; e < t.length; e++) Ha(t[e]);
  }
}
function Wc(e, t) {
  return e(t);
}
function bc() {}
var Ho = !1;
function Kc(e, t, n) {
  if (Ho) return e(t, n);
  Ho = !0;
  try {
    return Wc(e, t, n);
  } finally {
    (Ho = !1), (En !== null || kn !== null) && (bc(), Vc());
  }
}
function mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ao(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var Ms = !1;
if (Ze)
  try {
    var Wn = {};
    Object.defineProperty(Wn, "passive", {
      get: function () {
        Ms = !0;
      },
    }),
      window.addEventListener("test", Wn, Wn),
      window.removeEventListener("test", Wn, Wn);
  } catch {
    Ms = !1;
  }
function sp(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (h) {
    this.onError(h);
  }
}
var nr = !1,
  Pi = null,
  Ri = !1,
  Us = null,
  lp = {
    onError: function (e) {
      (nr = !0), (Pi = e);
    },
  };
function ap(e, t, n, r, i, o, s, l, a) {
  (nr = !1), (Pi = null), sp.apply(lp, arguments);
}
function up(e, t, n, r, i, o, s, l, a) {
  if ((ap.apply(this, arguments), nr)) {
    if (nr) {
      var u = Pi;
      (nr = !1), (Pi = null);
    } else throw Error(y(198));
    Ri || ((Ri = !0), (Us = u));
  }
}
function on(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Gc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Va(e) {
  if (on(e) !== e) throw Error(y(188));
}
function cp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = on(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Va(i), e;
        if (o === r) return Va(i), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Qc(e) {
  return (e = cp(e)), e !== null ? Yc(e) : null;
}
function Yc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Yc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qc = Ee.unstable_scheduleCallback,
  Wa = Ee.unstable_cancelCallback,
  dp = Ee.unstable_shouldYield,
  fp = Ee.unstable_requestPaint,
  G = Ee.unstable_now,
  hp = Ee.unstable_getCurrentPriorityLevel,
  Al = Ee.unstable_ImmediatePriority,
  Jc = Ee.unstable_UserBlockingPriority,
  Ni = Ee.unstable_NormalPriority,
  pp = Ee.unstable_LowPriority,
  Xc = Ee.unstable_IdlePriority,
  io = null,
  He = null;
function mp(e) {
  if (He && typeof He.onCommitFiberRoot == "function")
    try {
      He.onCommitFiberRoot(io, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ue = Math.clz32 ? Math.clz32 : yp,
  gp = Math.log,
  vp = Math.LN2;
function yp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((gp(e) / vp) | 0)) | 0;
}
var qr = 64,
  Jr = 4194304;
function Zn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Oi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = Zn(l)) : ((o &= s), o !== 0 && (r = Zn(o)));
  } else (s = n & ~i), s !== 0 ? (r = Zn(s)) : o !== 0 && (r = Zn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ue(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function _p(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Ue(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = _p(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function zs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Zc() {
  var e = qr;
  return (qr <<= 1), !(qr & 4194240) && (qr = 64), e;
}
function Vo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Mr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ue(t)),
    (e[t] = n);
}
function Sp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ue(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Ll(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ue(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var M = 0;
function ed(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var td,
  xl,
  nd,
  rd,
  id,
  Fs = !1,
  Xr = [],
  wt = null,
  St = null,
  Et = null,
  gr = new Map(),
  vr = new Map(),
  ct = [],
  Ep =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ba(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      wt = null;
      break;
    case "dragenter":
    case "dragleave":
      St = null;
      break;
    case "mouseover":
    case "mouseout":
      Et = null;
      break;
    case "pointerover":
    case "pointerout":
      gr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      vr.delete(t.pointerId);
  }
}
function bn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = zr(t)), t !== null && xl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function kp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (wt = bn(wt, e, t, n, r, i)), !0;
    case "dragenter":
      return (St = bn(St, e, t, n, r, i)), !0;
    case "mouseover":
      return (Et = bn(Et, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return gr.set(o, bn(gr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), vr.set(o, bn(vr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function od(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = on(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Gc(n)), t !== null)) {
          (e.blockedOn = t),
            id(e.priority, function () {
              nd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function fi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $s(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ls = r), n.target.dispatchEvent(r), (Ls = null);
    } else return (t = zr(n)), t !== null && xl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ka(e, t, n) {
  fi(e) && n.delete(t);
}
function Ip() {
  (Fs = !1),
    wt !== null && fi(wt) && (wt = null),
    St !== null && fi(St) && (St = null),
    Et !== null && fi(Et) && (Et = null),
    gr.forEach(Ka),
    vr.forEach(Ka);
}
function Kn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fs ||
      ((Fs = !0),
      Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, Ip)));
}
function yr(e) {
  function t(i) {
    return Kn(i, e);
  }
  if (0 < Xr.length) {
    Kn(Xr[0], e);
    for (var n = 1; n < Xr.length; n++) {
      var r = Xr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    wt !== null && Kn(wt, e),
      St !== null && Kn(St, e),
      Et !== null && Kn(Et, e),
      gr.forEach(t),
      vr.forEach(t),
      n = 0;
    n < ct.length;
    n++
  )
    (r = ct[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ct.length && ((n = ct[0]), n.blockedOn === null); )
    od(n), n.blockedOn === null && ct.shift();
}
var In = ot.ReactCurrentBatchConfig,
  Di = !0;
function Tp(e, t, n, r) {
  var i = M,
    o = In.transition;
  In.transition = null;
  try {
    (M = 1), Ml(e, t, n, r);
  } finally {
    (M = i), (In.transition = o);
  }
}
function Cp(e, t, n, r) {
  var i = M,
    o = In.transition;
  In.transition = null;
  try {
    (M = 4), Ml(e, t, n, r);
  } finally {
    (M = i), (In.transition = o);
  }
}
function Ml(e, t, n, r) {
  if (Di) {
    var i = $s(e, t, n, r);
    if (i === null) Zo(e, t, r, Ai, n), ba(e, r);
    else if (kp(i, e, t, n, r)) r.stopPropagation();
    else if ((ba(e, r), t & 4 && -1 < Ep.indexOf(e))) {
      for (; i !== null; ) {
        var o = zr(i);
        if (
          (o !== null && td(o),
          (o = $s(e, t, n, r)),
          o === null && Zo(e, t, r, Ai, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Zo(e, t, r, null, n);
  }
}
var Ai = null;
function $s(e, t, n, r) {
  if (((Ai = null), (e = Dl(r)), (e = Wt(e)), e !== null))
    if (((t = on(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Gc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ai = e), null;
}
function sd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (hp()) {
        case Al:
          return 1;
        case Jc:
          return 4;
        case Ni:
        case pp:
          return 16;
        case Xc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gt = null,
  Ul = null,
  hi = null;
function ld() {
  if (hi) return hi;
  var e,
    t = Ul,
    n = t.length,
    r,
    i = "value" in gt ? gt.value : gt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (hi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function pi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Zr() {
  return !0;
}
function Ga() {
  return !1;
}
function Ie(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Zr
        : Ga),
      (this.isPropagationStopped = Ga),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Zr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Zr));
      },
      persist: function () {},
      isPersistent: Zr,
    }),
    t
  );
}
var jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  zl = Ie(jn),
  Ur = W({}, jn, { view: 0, detail: 0 }),
  Pp = Ie(Ur),
  Wo,
  bo,
  Gn,
  oo = W({}, Ur, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Fl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Gn &&
            (Gn && e.type === "mousemove"
              ? ((Wo = e.screenX - Gn.screenX), (bo = e.screenY - Gn.screenY))
              : (bo = Wo = 0),
            (Gn = e)),
          Wo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bo;
    },
  }),
  Qa = Ie(oo),
  Rp = W({}, oo, { dataTransfer: 0 }),
  Np = Ie(Rp),
  Op = W({}, Ur, { relatedTarget: 0 }),
  Ko = Ie(Op),
  Dp = W({}, jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ap = Ie(Dp),
  Lp = W({}, jn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  xp = Ie(Lp),
  Mp = W({}, jn, { data: 0 }),
  Ya = Ie(Mp),
  Up = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  zp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Fp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function $p(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Fp[e]) ? !!t[e] : !1;
}
function Fl() {
  return $p;
}
var jp = W({}, Ur, {
    key: function (e) {
      if (e.key) {
        var t = Up[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = pi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? zp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fl,
    charCode: function (e) {
      return e.type === "keypress" ? pi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? pi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Bp = Ie(jp),
  Hp = W({}, oo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qa = Ie(Hp),
  Vp = W({}, Ur, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fl,
  }),
  Wp = Ie(Vp),
  bp = W({}, jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Kp = Ie(bp),
  Gp = W({}, oo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Qp = Ie(Gp),
  Yp = [9, 13, 27, 32],
  $l = Ze && "CompositionEvent" in window,
  rr = null;
Ze && "documentMode" in document && (rr = document.documentMode);
var qp = Ze && "TextEvent" in window && !rr,
  ad = Ze && (!$l || (rr && 8 < rr && 11 >= rr)),
  Ja = String.fromCharCode(32),
  Xa = !1;
function ud(e, t) {
  switch (e) {
    case "keyup":
      return Yp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function cd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var cn = !1;
function Jp(e, t) {
  switch (e) {
    case "compositionend":
      return cd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Xa = !0), Ja);
    case "textInput":
      return (e = t.data), e === Ja && Xa ? null : e;
    default:
      return null;
  }
}
function Xp(e, t) {
  if (cn)
    return e === "compositionend" || (!$l && ud(e, t))
      ? ((e = ld()), (hi = Ul = gt = null), (cn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ad && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Zp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Za(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Zp[e.type] : t === "textarea";
}
function dd(e, t, n, r) {
  Hc(r),
    (t = Li(t, "onChange")),
    0 < t.length &&
      ((n = new zl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ir = null,
  _r = null;
function em(e) {
  Ed(e, 0);
}
function so(e) {
  var t = hn(e);
  if (Mc(t)) return e;
}
function tm(e, t) {
  if (e === "change") return t;
}
var fd = !1;
if (Ze) {
  var Go;
  if (Ze) {
    var Qo = "oninput" in document;
    if (!Qo) {
      var eu = document.createElement("div");
      eu.setAttribute("oninput", "return;"),
        (Qo = typeof eu.oninput == "function");
    }
    Go = Qo;
  } else Go = !1;
  fd = Go && (!document.documentMode || 9 < document.documentMode);
}
function tu() {
  ir && (ir.detachEvent("onpropertychange", hd), (_r = ir = null));
}
function hd(e) {
  if (e.propertyName === "value" && so(_r)) {
    var t = [];
    dd(t, _r, e, Dl(e)), Kc(em, t);
  }
}
function nm(e, t, n) {
  e === "focusin"
    ? (tu(), (ir = t), (_r = n), ir.attachEvent("onpropertychange", hd))
    : e === "focusout" && tu();
}
function rm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return so(_r);
}
function im(e, t) {
  if (e === "click") return so(t);
}
function om(e, t) {
  if (e === "input" || e === "change") return so(t);
}
function sm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fe = typeof Object.is == "function" ? Object.is : sm;
function wr(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ss.call(t, i) || !Fe(e[i], t[i])) return !1;
  }
  return !0;
}
function nu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ru(e, t) {
  var n = nu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = nu(n);
  }
}
function pd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? pd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function imd() {
  for (var e = window, t = Ci(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ci(e.document);
  }
  return t;
}
function jl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function lm(e) {
  var t = imd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    pd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && jl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = ru(n, o));
        var s = ru(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var am = Ze && "documentMode" in document && 11 >= document.documentMode,
  dn = null,
  js = null,
  or = null,
  Bs = !1;
function iu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bs ||
    dn == null ||
    dn !== Ci(r) ||
    ((r = dn),
    "selectionStart" in r && jl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (or && wr(or, r)) ||
      ((or = r),
      (r = Li(js, "onSelect")),
      0 < r.length &&
        ((t = new zl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = dn))));
}
function ei(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var fn = {
    animationend: ei("Animation", "AnimationEnd"),
    animationiteration: ei("Animation", "AnimationIteration"),
    animationstart: ei("Animation", "AnimationStart"),
    transitionend: ei("Transition", "TransitionEnd"),
  },
  Yo = {},
  gd = {};
Ze &&
  ((gd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete fn.animationend.animation,
    delete fn.animationiteration.animation,
    delete fn.animationstart.animation),
  "TransitionEvent" in window || delete fn.transitionend.transition);
function lo(e) {
  if (Yo[e]) return Yo[e];
  if (!fn[e]) return e;
  var t = fn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in gd) return (Yo[e] = t[n]);
  return e;
}
var vd = lo("animationend"),
  yd = lo("animationiteration"),
  _d = lo("animationstart"),
  wd = lo("transitionend"),
  Sd = new Map(),
  ou =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function At(e, t) {
  Sd.set(e, t), rn(t, [e]);
}
for (var qo = 0; qo < ou.length; qo++) {
  var Jo = ou[qo],
    um = Jo.toLowerCase(),
    cm = Jo[0].toUpperCase() + Jo.slice(1);
  At(um, "on" + cm);
}
At(vd, "onAnimationEnd");
At(yd, "onAnimationIteration");
At(_d, "onAnimationStart");
At("dblclick", "onDoubleClick");
At("focusin", "onFocus");
At("focusout", "onBlur");
At(wd, "onTransitionEnd");
On("onMouseEnter", ["mouseout", "mouseover"]);
On("onMouseLeave", ["mouseout", "mouseover"]);
On("onPointerEnter", ["pointerout", "pointerover"]);
On("onPointerLeave", ["pointerout", "pointerover"]);
rn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
rn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
rn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
rn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var er =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  dm = new Set("cancel close invalid load scroll toggle".split(" ").concat(er));
function su(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), up(r, t, void 0, e), (e.currentTarget = null);
}
function Ed(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          su(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          su(i, l, u), (o = a);
        }
    }
  }
  if (Ri) throw ((e = Us), (Ri = !1), (Us = null), e);
}
function $(e, t) {
  var n = t[Ks];
  n === void 0 && (n = t[Ks] = new Set());
  var r = e + "__bubble";
  n.has(r) || (kd(t, e, 2, !1), n.add(r));
}
function Xo(e, t, n) {
  var r = 0;
  t && (r |= 4), kd(n, e, r, t);
}
var ti = "_reactListening" + Math.random().toString(36).slice(2);
function Sr(e) {
  if (!e[ti]) {
    (e[ti] = !0),
      Oc.forEach(function (n) {
        n !== "selectionchange" && (dm.has(n) || Xo(n, !1, e), Xo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ti] || ((t[ti] = !0), Xo("selectionchange", !1, t));
  }
}
function kd(e, t, n, r) {
  switch (sd(t)) {
    case 1:
      var i = Tp;
      break;
    case 4:
      i = Cp;
      break;
    default:
      i = Ml;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ms ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Zo(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Wt(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Kc(function () {
    var u = o,
      h = Dl(n),
      p = [];
    e: {
      var m = Sd.get(e);
      if (m !== void 0) {
        var _ = zl,
          w = e;
        switch (e) {
          case "keypress":
            if (pi(n) === 0) break e;
          case "keydown":
          case "keyup":
            _ = Bp;
            break;
          case "focusin":
            (w = "focus"), (_ = Ko);
            break;
          case "focusout":
            (w = "blur"), (_ = Ko);
            break;
          case "beforeblur":
          case "afterblur":
            _ = Ko;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            _ = Qa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            _ = Np;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            _ = Wp;
            break;
          case vd:
          case yd:
          case _d:
            _ = Ap;
            break;
          case wd:
            _ = Kp;
            break;
          case "scroll":
            _ = Pp;
            break;
          case "wheel":
            _ = Qp;
            break;
          case "copy":
          case "cut":
          case "paste":
            _ = xp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            _ = qa;
        }
        var k = (t & 4) !== 0,
          D = !k && e === "scroll",
          d = k ? (m !== null ? m + "Capture" : null) : m;
        k = [];
        for (var c = u, f; c !== null; ) {
          f = c;
          var g = f.stateNode;
          if (
            (f.tag === 5 &&
              g !== null &&
              ((f = g),
              d !== null && ((g = mr(c, d)), g != null && k.push(Er(c, g, f)))),
            D)
          )
            break;
          c = c.return;
        }
        0 < k.length &&
          ((m = new _(m, w, null, n, h)), p.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (_ = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Ls &&
            (w = n.relatedTarget || n.fromElement) &&
            (Wt(w) || w[et]))
        )
          break e;
        if (
          (_ || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          _
            ? ((w = n.relatedTarget || n.toElement),
              (_ = u),
              (w = w ? Wt(w) : null),
              w !== null &&
                ((D = on(w)), w !== D || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((_ = null), (w = u)),
          _ !== w)
        ) {
          if (
            ((k = Qa),
            (g = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = qa),
              (g = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (D = _ == null ? m : hn(_)),
            (f = w == null ? m : hn(w)),
            (m = new k(g, c + "leave", _, n, h)),
            (m.target = D),
            (m.relatedTarget = f),
            (g = null),
            Wt(h) === u &&
              ((k = new k(d, c + "enter", w, n, h)),
              (k.target = f),
              (k.relatedTarget = D),
              (g = k)),
            (D = g),
            _ && w)
          )
            t: {
              for (k = _, d = w, c = 0, f = k; f; f = ln(f)) c++;
              for (f = 0, g = d; g; g = ln(g)) f++;
              for (; 0 < c - f; ) (k = ln(k)), c--;
              for (; 0 < f - c; ) (d = ln(d)), f--;
              for (; c--; ) {
                if (k === d || (d !== null && k === d.alternate)) break t;
                (k = ln(k)), (d = ln(d));
              }
              k = null;
            }
          else k = null;
          _ !== null && lu(p, m, _, k, !1),
            w !== null && D !== null && lu(p, D, w, k, !0);
        }
      }
      e: {
        if (
          ((m = u ? hn(u) : window),
          (_ = m.nodeName && m.nodeName.toLowerCase()),
          _ === "select" || (_ === "input" && m.type === "file"))
        )
          var v = tm;
        else if (Za(m))
          if (fd) v = om;
          else {
            v = rm;
            var S = nm;
          }
        else
          (_ = m.nodeName) &&
            _.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (v = im);
        if (v && (v = v(e, u))) {
          dd(p, v, n, h);
          break e;
        }
        S && S(e, m, u),
          e === "focusout" &&
            (S = m._wrapperState) &&
            S.controlled &&
            m.type === "number" &&
            Rs(m, "number", m.value);
      }
      switch (((S = u ? hn(u) : window), e)) {
        case "focusin":
          (Za(S) || S.contentEditable === "true") &&
            ((dn = S), (js = u), (or = null));
          break;
        case "focusout":
          or = js = dn = null;
          break;
        case "mousedown":
          Bs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Bs = !1), iu(p, n, h);
          break;
        case "selectionchange":
          if (am) break;
        case "keydown":
        case "keyup":
          iu(p, n, h);
      }
      var E;
      if ($l)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        cn
          ? ud(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (ad &&
          n.locale !== "ko" &&
          (cn || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && cn && (E = ld())
            : ((gt = h),
              (Ul = "value" in gt ? gt.value : gt.textContent),
              (cn = !0))),
        (S = Li(u, C)),
        0 < S.length &&
          ((C = new Ya(C, e, null, n, h)),
          p.push({ event: C, listeners: S }),
          E ? (C.data = E) : ((E = cd(n)), E !== null && (C.data = E)))),
        (E = qp ? Jp(e, n) : Xp(e, n)) &&
          ((u = Li(u, "onBeforeInput")),
          0 < u.length &&
            ((h = new Ya("onBeforeInput", "beforeinput", null, n, h)),
            p.push({ event: h, listeners: u }),
            (h.data = E)));
    }
    Ed(p, t);
  });
}
function Er(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Li(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = mr(e, n)),
      o != null && r.unshift(Er(e, o, i)),
      (o = mr(e, t)),
      o != null && r.push(Er(e, o, i))),
      (e = e.return);
  }
  return r;
}
function ln(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function lu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = mr(n, o)), a != null && s.unshift(Er(n, a, l)))
        : i || ((a = mr(n, o)), a != null && s.push(Er(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var fm = /\r\n?/g,
  hm = /\u0000|\uFFFD/g;
function au(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      fm,
      `
`
    )
    .replace(hm, "");
}
function ni(e, t, n) {
  if (((t = au(t)), au(e) !== t && n)) throw Error(y(425));
}
function xi() {}
var Hs = null,
  Vs = null;
function Ws(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var bs = typeof setTimeout == "function" ? setTimeout : void 0,
  pm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  uu = typeof Promise == "function" ? Promise : void 0,
  mm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof uu < "u"
      ? function (e) {
          return uu.resolve(null).then(e).catch(gm);
        }
      : bs;
function gm(e) {
  setTimeout(function () {
    throw e;
  });
}
function es(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), yr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  yr(t);
}
function kt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function cu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Bn = Math.random().toString(36).slice(2),
  Be = "__reactFiber$" + Bn,
  kr = "__reactProps$" + Bn,
  et = "__reactContainer$" + Bn,
  Ks = "__reactEvents$" + Bn,
  vm = "__reactListeners$" + Bn,
  ym = "__reactHandles$" + Bn;
function Wt(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[et] || n[Be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = cu(e); e !== null; ) {
          if ((n = e[Be])) return n;
          e = cu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function zr(e) {
  return (
    (e = e[Be] || e[et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function hn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function ao(e) {
  return e[kr] || null;
}
var Gs = [],
  pn = -1;
function Lt(e) {
  return { current: e };
}
function j(e) {
  0 > pn || ((e.current = Gs[pn]), (Gs[pn] = null), pn--);
}
function F(e, t) {
  pn++, (Gs[pn] = e.current), (e.current = t);
}
var Dt = {},
  le = Lt(Dt),
  me = Lt(!1),
  qt = Dt;
function Dn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function Mi() {
  j(me), j(le);
}
function du(e, t, n) {
  if (le.current !== Dt) throw Error(y(168));
  F(le, t), F(me, n);
}
function Id(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(y(108, np(e) || "Unknown", i));
  return W({}, n, r);
}
function Ui(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dt),
    (qt = le.current),
    F(le, e),
    F(me, me.current),
    !0
  );
}
function fu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = Id(e, t, qt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      j(me),
      j(le),
      F(le, e))
    : j(me),
    F(me, n);
}
var Ge = null,
  uo = !1,
  ts = !1;
function Td(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
function _m(e) {
  (uo = !0), Td(e);
}
function xt() {
  if (!ts && Ge !== null) {
    ts = !0;
    var e = 0,
      t = M;
    try {
      var n = Ge;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ge = null), (uo = !1);
    } catch (i) {
      throw (Ge !== null && (Ge = Ge.slice(e + 1)), qc(Al, xt), i);
    } finally {
      (M = t), (ts = !1);
    }
  }
  return null;
}
var mn = [],
  gn = 0,
  zi = null,
  Fi = 0,
  Ce = [],
  Pe = 0,
  Jt = null,
  Qe = 1,
  Ye = "";
function jt(e, t) {
  (mn[gn++] = Fi), (mn[gn++] = zi), (zi = e), (Fi = t);
}
function Cd(e, t, n) {
  (Ce[Pe++] = Qe), (Ce[Pe++] = Ye), (Ce[Pe++] = Jt), (Jt = e);
  var r = Qe;
  e = Ye;
  var i = 32 - Ue(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ue(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Qe = (1 << (32 - Ue(t) + i)) | (n << i) | r),
      (Ye = o + e);
  } else (Qe = (1 << o) | (n << i) | r), (Ye = e);
}
function Bl(e) {
  e.return !== null && (jt(e, 1), Cd(e, 1, 0));
}
function Hl(e) {
  for (; e === zi; )
    (zi = mn[--gn]), (mn[gn] = null), (Fi = mn[--gn]), (mn[gn] = null);
  for (; e === Jt; )
    (Jt = Ce[--Pe]),
      (Ce[Pe] = null),
      (Ye = Ce[--Pe]),
      (Ce[Pe] = null),
      (Qe = Ce[--Pe]),
      (Ce[Pe] = null);
}
var Se = null,
  we = null,
  B = !1,
  Me = null;
function Pd(e, t) {
  var n = Re(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (we = kt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (we = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Jt !== null ? { id: Qe, overflow: Ye } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Re(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Qs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ys(e) {
  if (B) {
    var t = we;
    if (t) {
      var n = t;
      if (!hu(e, t)) {
        if (Qs(e)) throw Error(y(418));
        t = kt(n.nextSibling);
        var r = Se;
        t && hu(e, t)
          ? Pd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (B = !1), (Se = e));
      }
    } else {
      if (Qs(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (B = !1), (Se = e);
    }
  }
}
function pu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function ri(e) {
  if (e !== Se) return !1;
  if (!B) return pu(e), (B = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ws(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (Qs(e)) throw (Rd(), Error(y(418)));
    for (; t; ) Pd(e, t), (t = kt(t.nextSibling));
  }
  if ((pu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = kt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = Se ? kt(e.stateNode.nextSibling) : null;
  return !0;
}
function Rd() {
  for (var e = we; e; ) e = kt(e.nextSibling);
}
function An() {
  (we = Se = null), (B = !1);
}
function Vl(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
var wm = ot.ReactCurrentBatchConfig;
function Le(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var $i = Lt(null),
  ji = null,
  vn = null,
  Wl = null;
function bl() {
  Wl = vn = ji = null;
}
function Kl(e) {
  var t = $i.current;
  j($i), (e._currentValue = t);
}
function qs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Tn(e, t) {
  (ji = e),
    (Wl = vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (pe = !0), (e.firstContext = null));
}
function Oe(e) {
  var t = e._currentValue;
  if (Wl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), vn === null)) {
      if (ji === null) throw Error(y(308));
      (vn = e), (ji.dependencies = { lanes: 0, firstContext: e });
    } else vn = vn.next = e;
  return t;
}
var bt = null;
function Gl(e) {
  bt === null ? (bt = [e]) : bt.push(e);
}
function Nd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Gl(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    tt(e, r)
  );
}
function tt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ut = !1;
function Ql(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Od(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Xe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function It(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), L & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      tt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Gl(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    tt(e, n)
  );
}
function mi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ll(e, n);
  }
}
function mu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Bi(e, t, n, r) {
  var i = e.updateQueue;
  ut = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (l = h.lastBaseUpdate),
      l !== s &&
        (l === null ? (h.firstBaseUpdate = u) : (l.next = u),
        (h.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var p = i.baseState;
    (s = 0), (h = u = a = null), (l = o);
    do {
      var m = l.lane,
        _ = l.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: _,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var w = e,
            k = l;
          switch (((m = t), (_ = n), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                p = w.call(_, p, m);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (m = typeof w == "function" ? w.call(_, p, m) : w),
                m == null)
              )
                break e;
              p = W({}, p, m);
              break e;
            case 2:
              ut = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (m = i.effects),
          m === null ? (i.effects = [l]) : m.push(l));
      } else
        (_ = {
          eventTime: _,
          lane: m,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          h === null ? ((u = h = _), (a = p)) : (h = h.next = _),
          (s |= m);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (m = l),
          (l = m.next),
          (m.next = null),
          (i.lastBaseUpdate = m),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (a = p),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = h),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Zt |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function gu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(y(191, i));
        i.call(r);
      }
    }
}
var Dd = new Nc.Component().refs;
function Js(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var co = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? on(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      i = Ct(e),
      o = Xe(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = It(e, o, i)),
      t !== null && (ze(t, e, i, r), mi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      i = Ct(e),
      o = Xe(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = It(e, o, i)),
      t !== null && (ze(t, e, i, r), mi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ce(),
      r = Ct(e),
      i = Xe(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = It(e, i, r)),
      t !== null && (ze(t, e, r, n), mi(t, e, r));
  },
};
function vu(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !wr(n, r) || !wr(i, o)
      : !0
  );
}
function Ad(e, t, n) {
  var r = !1,
    i = Dt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Oe(o))
      : ((i = ge(t) ? qt : le.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Dn(e, i) : Dt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = co),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function yu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && co.enqueueReplaceState(t, t.state, null);
}
function Xs(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Dd), Ql(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Oe(o))
    : ((o = ge(t) ? qt : le.current), (i.context = Dn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Js(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && co.enqueueReplaceState(i, i.state, null),
      Bi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Qn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === Dd && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function ii(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function _u(e) {
  var t = e._init;
  return t(e._payload);
}
function Ld(e) {
  function t(d, c) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [c]), (d.flags |= 16)) : f.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function i(d, c) {
    return (d = Pt(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, c, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < c ? ((d.flags |= 2), c) : f)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function s(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function l(d, c, f, g) {
    return c === null || c.tag !== 6
      ? ((c = as(f, d.mode, g)), (c.return = d), c)
      : ((c = i(c, f)), (c.return = d), c);
  }
  function a(d, c, f, g) {
    var v = f.type;
    return v === un
      ? h(d, c, f.props.children, g, f.key)
      : c !== null &&
        (c.elementType === v ||
          (typeof v == "object" &&
            v !== null &&
            v.$$typeof === at &&
            _u(v) === c.type))
      ? ((g = i(c, f.props)), (g.ref = Qn(d, c, f)), (g.return = d), g)
      : ((g = Si(f.type, f.key, f.props, null, d.mode, g)),
        (g.ref = Qn(d, c, f)),
        (g.return = d),
        g);
  }
  function u(d, c, f, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = us(f, d.mode, g)), (c.return = d), c)
      : ((c = i(c, f.children || [])), (c.return = d), c);
  }
  function h(d, c, f, g, v) {
    return c === null || c.tag !== 7
      ? ((c = Qt(f, d.mode, g, v)), (c.return = d), c)
      : ((c = i(c, f)), (c.return = d), c);
  }
  function p(d, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = as("" + c, d.mode, f)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Gr:
          return (
            (f = Si(c.type, c.key, c.props, null, d.mode, f)),
            (f.ref = Qn(d, null, c)),
            (f.return = d),
            f
          );
        case an:
          return (c = us(c, d.mode, f)), (c.return = d), c;
        case at:
          var g = c._init;
          return p(d, g(c._payload), f);
      }
      if (Xn(c) || Vn(c))
        return (c = Qt(c, d.mode, f, null)), (c.return = d), c;
      ii(d, c);
    }
    return null;
  }
  function m(d, c, f, g) {
    var v = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return v !== null ? null : l(d, c, "" + f, g);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Gr:
          return f.key === v ? a(d, c, f, g) : null;
        case an:
          return f.key === v ? u(d, c, f, g) : null;
        case at:
          return (v = f._init), m(d, c, v(f._payload), g);
      }
      if (Xn(f) || Vn(f)) return v !== null ? null : h(d, c, f, g, null);
      ii(d, f);
    }
    return null;
  }
  function _(d, c, f, g, v) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (d = d.get(f) || null), l(c, d, "" + g, v);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Gr:
          return (d = d.get(g.key === null ? f : g.key) || null), a(c, d, g, v);
        case an:
          return (d = d.get(g.key === null ? f : g.key) || null), u(c, d, g, v);
        case at:
          var S = g._init;
          return _(d, c, f, S(g._payload), v);
      }
      if (Xn(g) || Vn(g)) return (d = d.get(f) || null), h(c, d, g, v, null);
      ii(c, g);
    }
    return null;
  }
  function w(d, c, f, g) {
    for (
      var v = null, S = null, E = c, C = (c = 0), x = null;
      E !== null && C < f.length;
      C++
    ) {
      E.index > C ? ((x = E), (E = null)) : (x = E.sibling);
      var N = m(d, E, f[C], g);
      if (N === null) {
        E === null && (E = x);
        break;
      }
      e && E && N.alternate === null && t(d, E),
        (c = o(N, c, C)),
        S === null ? (v = N) : (S.sibling = N),
        (S = N),
        (E = x);
    }
    if (C === f.length) return n(d, E), B && jt(d, C), v;
    if (E === null) {
      for (; C < f.length; C++)
        (E = p(d, f[C], g)),
          E !== null &&
            ((c = o(E, c, C)), S === null ? (v = E) : (S.sibling = E), (S = E));
      return B && jt(d, C), v;
    }
    for (E = r(d, E); C < f.length; C++)
      (x = _(E, d, C, f[C], g)),
        x !== null &&
          (e && x.alternate !== null && E.delete(x.key === null ? C : x.key),
          (c = o(x, c, C)),
          S === null ? (v = x) : (S.sibling = x),
          (S = x));
    return (
      e &&
        E.forEach(function (ye) {
          return t(d, ye);
        }),
      B && jt(d, C),
      v
    );
  }
  function k(d, c, f, g) {
    var v = Vn(f);
    if (typeof v != "function") throw Error(y(150));
    if (((f = v.call(f)), f == null)) throw Error(y(151));
    for (
      var S = (v = null), E = c, C = (c = 0), x = null, N = f.next();
      E !== null && !N.done;
      C++, N = f.next()
    ) {
      E.index > C ? ((x = E), (E = null)) : (x = E.sibling);
      var ye = m(d, E, N.value, g);
      if (ye === null) {
        E === null && (E = x);
        break;
      }
      e && E && ye.alternate === null && t(d, E),
        (c = o(ye, c, C)),
        S === null ? (v = ye) : (S.sibling = ye),
        (S = ye),
        (E = x);
    }
    if (N.done) return n(d, E), B && jt(d, C), v;
    if (E === null) {
      for (; !N.done; C++, N = f.next())
        (N = p(d, N.value, g)),
          N !== null &&
            ((c = o(N, c, C)), S === null ? (v = N) : (S.sibling = N), (S = N));
      return B && jt(d, C), v;
    }
    for (E = r(d, E); !N.done; C++, N = f.next())
      (N = _(E, d, C, N.value, g)),
        N !== null &&
          (e && N.alternate !== null && E.delete(N.key === null ? C : N.key),
          (c = o(N, c, C)),
          S === null ? (v = N) : (S.sibling = N),
          (S = N));
    return (
      e &&
        E.forEach(function (Ut) {
          return t(d, Ut);
        }),
      B && jt(d, C),
      v
    );
  }
  function D(d, c, f, g) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === un &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case Gr:
          e: {
            for (var v = f.key, S = c; S !== null; ) {
              if (S.key === v) {
                if (((v = f.type), v === un)) {
                  if (S.tag === 7) {
                    n(d, S.sibling),
                      (c = i(S, f.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  S.elementType === v ||
                  (typeof v == "object" &&
                    v !== null &&
                    v.$$typeof === at &&
                    _u(v) === S.type)
                ) {
                  n(d, S.sibling),
                    (c = i(S, f.props)),
                    (c.ref = Qn(d, S, f)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, S);
                break;
              } else t(d, S);
              S = S.sibling;
            }
            f.type === un
              ? ((c = Qt(f.props.children, d.mode, g, f.key)),
                (c.return = d),
                (d = c))
              : ((g = Si(f.type, f.key, f.props, null, d.mode, g)),
                (g.ref = Qn(d, c, f)),
                (g.return = d),
                (d = g));
          }
          return s(d);
        case an:
          e: {
            for (S = f.key; c !== null; ) {
              if (c.key === S)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(d, c.sibling),
                    (c = i(c, f.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = us(f, d.mode, g)), (c.return = d), (d = c);
          }
          return s(d);
        case at:
          return (S = f._init), D(d, c, S(f._payload), g);
      }
      if (Xn(f)) return w(d, c, f, g);
      if (Vn(f)) return k(d, c, f, g);
      ii(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = i(c, f)), (c.return = d), (d = c))
          : (n(d, c), (c = as(f, d.mode, g)), (c.return = d), (d = c)),
        s(d))
      : n(d, c);
  }
  return D;
}
var Ln = Ld(!0),
  xd = Ld(!1),
  Fr = {},
  Ve = Lt(Fr),
  Ir = Lt(Fr),
  Tr = Lt(Fr);
function Kt(e) {
  if (e === Fr) throw Error(y(174));
  return e;
}
function Yl(e, t) {
  switch ((F(Tr, t), F(Ir, e), F(Ve, Fr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Os(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Os(t, e));
  }
  j(Ve), F(Ve, t);
}
function xn() {
  j(Ve), j(Ir), j(Tr);
}
function imd(e) {
  Kt(Tr.current);
  var t = Kt(Ve.current),
    n = Os(t, e.type);
  t !== n && (F(Ir, e), F(Ve, n));
}
function ql(e) {
  Ir.current === e && (j(Ve), j(Ir));
}
var H = Lt(0);
function Hi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ns = [];
function Jl() {
  for (var e = 0; e < ns.length; e++)
    ns[e]._workInProgressVersionPrimary = null;
  ns.length = 0;
}
var gi = ot.ReactCurrentDispatcher,
  rs = ot.ReactCurrentBatchConfig,
  Xt = 0,
  V = null,
  Y = null,
  X = null,
  Vi = !1,
  sr = !1,
  Cr = 0,
  Sm = 0;
function ie() {
  throw Error(y(321));
}
function Xl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function Zl(e, t, n, r, i, o) {
  if (
    ((Xt = o),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (gi.current = e === null || e.memoizedState === null ? Tm : Cm),
    (e = n(r, i)),
    sr)
  ) {
    o = 0;
    do {
      if (((sr = !1), (Cr = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (X = Y = null),
        (t.updateQueue = null),
        (gi.current = Pm),
        (e = n(r, i));
    } while (sr);
  }
  if (
    ((gi.current = Wi),
    (t = Y !== null && Y.next !== null),
    (Xt = 0),
    (X = Y = V = null),
    (Vi = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function ea() {
  var e = Cr !== 0;
  return (Cr = 0), e;
}
function je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return X === null ? (V.memoizedState = X = e) : (X = X.next = e), X;
}
function De() {
  if (Y === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = X === null ? V.memoizedState : X.next;
  if (t !== null) (X = t), (Y = e);
  else {
    if (e === null) throw Error(y(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      X === null ? (V.memoizedState = X = e) : (X = X.next = e);
  }
  return X;
}
function Pr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function is(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Y,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var h = u.lane;
      if ((Xt & h) === h)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: h,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (s = r)) : (a = a.next = p),
          (V.lanes |= h),
          (Zt |= h);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      Fe(r, t.memoizedState) || (pe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (V.lanes |= o), (Zt |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function os(e) {
  var t = De(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Fe(o, t.memoizedState) || (pe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ud() {}
function zd(e, t) {
  var n = V,
    r = De(),
    i = t(),
    o = !Fe(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (pe = !0)),
    (r = r.queue),
    ta(jd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (X !== null && X.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Rr(9, $d.bind(null, n, r, i, t), void 0, null),
      Z === null)
    )
      throw Error(y(349));
    Xt & 30 || Fd(n, t, i);
  }
  return i;
}
function Fd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function $d(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Bd(t) && Hd(e);
}
function jd(e, t, n) {
  return n(function () {
    Bd(t) && Hd(e);
  });
}
function Bd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function Hd(e) {
  var t = tt(e, 1);
  t !== null && ze(t, e, 1, -1);
}
function wu(e) {
  var t = je();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Im.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function Rr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = V.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Vd() {
  return De().memoizedState;
}
function vi(e, t, n, r) {
  var i = je();
  (V.flags |= e),
    (i.memoizedState = Rr(1 | t, n, void 0, r === void 0 ? null : r));
}
function fo(e, t, n, r) {
  var i = De();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var s = Y.memoizedState;
    if (((o = s.destroy), r !== null && Xl(r, s.deps))) {
      i.memoizedState = Rr(t, n, o, r);
      return;
    }
  }
  (V.flags |= e), (i.memoizedState = Rr(1 | t, n, o, r));
}
function Su(e, t) {
  return vi(8390656, 8, e, t);
}
function ta(e, t) {
  return fo(2048, 8, e, t);
}
function Wd(e, t) {
  return fo(4, 2, e, t);
}
function bd(e, t) {
  return fo(4, 4, e, t);
}
function Kd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Gd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), fo(4, 4, Kd.bind(null, t, e), n)
  );
}
function na() {}
function Qd(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yd(e, t) {
  var n = De();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function qd(e, t, n) {
  return Xt & 21
    ? (Fe(n, t) || ((n = Zc()), (V.lanes |= n), (Zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (pe = !0)), (e.memoizedState = n));
}
function Em(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = rs.transition;
  rs.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (rs.transition = r);
  }
}
function Jd() {
  return De().memoizedState;
}
function km(e, t, n) {
  var r = Ct(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Xd(e))
  )
    Zd(t, n);
  else if (((n = Nd(e, t, n, r)), n !== null)) {
    var i = ce();
    ze(n, e, r, i), ef(n, t, r);
  }
}
function Im(e, t, n) {
  var r = Ct(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Xd(e)) Zd(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Fe(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Gl(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Nd(e, t, i, r)),
      n !== null && ((i = ce()), ze(n, e, r, i), ef(n, t, r));
  }
}
function Xd(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function Zd(e, t) {
  sr = Vi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ef(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ll(e, n);
  }
}
var Wi = {
    readContext: Oe,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  Tm = {
    readContext: Oe,
    useCallback: function (e, t) {
      return (je().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Oe,
    useEffect: Su,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        vi(4194308, 4, Kd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return vi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return vi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = je();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = je();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = km.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = je();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: wu,
    useDebugValue: na,
    useDeferredValue: function (e) {
      return (je().memoizedState = e);
    },
    useTransition: function () {
      var e = wu(!1),
        t = e[0];
      return (e = Em.bind(null, e[1])), (je().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        i = je();
      if (B) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), Z === null)) throw Error(y(349));
        Xt & 30 || Fd(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Su(jd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Rr(9, $d.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = je(),
        t = Z.identifierPrefix;
      if (B) {
        var n = Ye,
          r = Qe;
        (n = (r & ~(1 << (32 - Ue(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Cr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Sm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Cm = {
    readContext: Oe,
    useCallback: Qd,
    useContext: Oe,
    useEffect: ta,
    useImperativeHandle: Gd,
    useInsertionEffect: Wd,
    useLayoutEffect: bd,
    useMemo: Yd,
    useReducer: is,
    useRef: Vd,
    useState: function () {
      return is(Pr);
    },
    useDebugValue: na,
    useDeferredValue: function (e) {
      var t = De();
      return qd(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = is(Pr)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: Ud,
    useSyncExternalStore: zd,
    useId: Jd,
    unstable_isNewReconciler: !1,
  },
  Pm = {
    readContext: Oe,
    useCallback: Qd,
    useContext: Oe,
    useEffect: ta,
    useImperativeHandle: Gd,
    useInsertionEffect: Wd,
    useLayoutEffect: bd,
    useMemo: Yd,
    useReducer: os,
    useRef: Vd,
    useState: function () {
      return os(Pr);
    },
    useDebugValue: na,
    useDeferredValue: function (e) {
      var t = De();
      return Y === null ? (t.memoizedState = e) : qd(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = os(Pr)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: Ud,
    useSyncExternalStore: zd,
    useId: Jd,
    unstable_isNewReconciler: !1,
  };
function Mn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += tp(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ss(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Rm = typeof WeakMap == "function" ? WeakMap : Map;
function tf(e, t, n) {
  (n = Xe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ki || ((Ki = !0), (ul = r)), Zs(e, t);
    }),
    n
  );
}
function nf(e, t, n) {
  (n = Xe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Zs(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Zs(e, t),
          typeof r != "function" &&
            (Tt === null ? (Tt = new Set([this])) : Tt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Eu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Rm();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Hm.bind(null, e, t, n)), t.then(e, e));
}
function ku(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Iu(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Xe(-1, 1)), (t.tag = 2), It(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Nm = ot.ReactCurrentOwner,
  pe = !1;
function ue(e, t, n, r) {
  t.child = e === null ? xd(t, null, n, r) : Ln(t, e.child, n, r);
}
function Tu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Tn(t, i),
    (r = Zl(e, t, n, r, o, i)),
    (n = ea()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        nt(e, t, i))
      : (B && n && Bl(t), (t.flags |= 1), ue(e, t, r, i), t.child)
  );
}
function Cu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ca(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), rf(e, t, o, r, i))
      : ((e = Si(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : wr), n(s, r) && e.ref === t.ref)
    )
      return nt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Pt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function rf(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (wr(o, r) && e.ref === t.ref)
      if (((pe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (pe = !0);
      else return (t.lanes = e.lanes), nt(e, t, i);
  }
  return el(e, t, n, r, i);
}
function of(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(_n, _e),
        (_e |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          F(_n, _e),
          (_e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        F(_n, _e),
        (_e |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(_n, _e),
      (_e |= r);
  return ue(e, t, i, n), t.child;
}
function sf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function el(e, t, n, r, i) {
  var o = ge(n) ? qt : le.current;
  return (
    (o = Dn(t, o)),
    Tn(t, i),
    (n = Zl(e, t, n, r, o, i)),
    (r = ea()),
    e !== null && !pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        nt(e, t, i))
      : (B && r && Bl(t), (t.flags |= 1), ue(e, t, n, i), t.child)
  );
}
function Pu(e, t, n, r, i) {
  if (ge(n)) {
    var o = !0;
    Ui(t);
  } else o = !1;
  if ((Tn(t, i), t.stateNode === null))
    yi(e, t), Ad(t, n, r), Xs(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Oe(u))
      : ((u = ge(n) ? qt : le.current), (u = Dn(t, u)));
    var h = n.getDerivedStateFromProps,
      p =
        typeof h == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && yu(t, s, r, u)),
      (ut = !1);
    var m = t.memoizedState;
    (s.state = m),
      Bi(t, r, s, i),
      (a = t.memoizedState),
      l !== r || m !== a || me.current || ut
        ? (typeof h == "function" && (Js(t, n, h, r), (a = t.memoizedState)),
          (l = ut || vu(t, n, l, r, m, a, u))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Od(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Le(t.type, l)),
      (s.props = u),
      (p = t.pendingProps),
      (m = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Oe(a))
        : ((a = ge(n) ? qt : le.current), (a = Dn(t, a)));
    var _ = n.getDerivedStateFromProps;
    (h =
      typeof _ == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== p || m !== a) && yu(t, s, r, a)),
      (ut = !1),
      (m = t.memoizedState),
      (s.state = m),
      Bi(t, r, s, i);
    var w = t.memoizedState;
    l !== p || m !== w || me.current || ut
      ? (typeof _ == "function" && (Js(t, n, _, r), (w = t.memoizedState)),
        (u = ut || vu(t, n, u, r, m, w, a) || !1)
          ? (h ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.UNSAFE_componentWillUpdate != "function") ||
              (typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, w, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, w, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return tl(e, t, n, r, o, i);
}
function tl(e, t, n, r, i, o) {
  sf(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && fu(t, n, !1), nt(e, t, o);
  (r = t.stateNode), (Nm.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Ln(t, e.child, null, o)), (t.child = Ln(t, null, l, o)))
      : ue(e, t, l, o),
    (t.memoizedState = r.state),
    i && fu(t, n, !0),
    t.child
  );
}
function lf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? du(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && du(e, t.context, !1),
    Yl(e, t.containerInfo);
}
function Ru(e, t, n, r, i) {
  return An(), Vl(i), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var nl = { dehydrated: null, treeContext: null, retryLane: 0 };
function rl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function af(e, t, n) {
  var r = t.pendingProps,
    i = H.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    F(H, i & 1),
    e === null)
  )
    return (
      Ys(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = mo(s, r, 0, null)),
              (e = Qt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = rl(n)),
              (t.memoizedState = nl),
              e)
            : ra(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Om(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Pt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Pt(l, o)) : ((o = Qt(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? rl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = nl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Pt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ra(e, t) {
  return (
    (t = mo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function oi(e, t, n, r) {
  return (
    r !== null && Vl(r),
    Ln(t, e.child, null, n),
    (e = ra(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Om(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ss(Error(y(422)))), oi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = mo({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Qt(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Ln(t, e.child, null, s),
        (t.child.memoizedState = rl(s)),
        (t.memoizedState = nl),
        o);
  if (!(t.mode & 1)) return oi(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(y(419))), (r = ss(o, r, void 0)), oi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), pe || l)) {
    if (((r = Z), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), tt(e, i), ze(r, e, i, -1));
    }
    return ua(), (r = ss(Error(y(421)))), oi(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Vm.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (we = kt(i.nextSibling)),
      (Se = t),
      (B = !0),
      (Me = null),
      e !== null &&
        ((Ce[Pe++] = Qe),
        (Ce[Pe++] = Ye),
        (Ce[Pe++] = Jt),
        (Qe = e.id),
        (Ye = e.overflow),
        (Jt = t)),
      (t = ra(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Nu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), qs(e.return, t, n);
}
function ls(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function uf(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ue(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Nu(e, n, t);
        else if (e.tag === 19) Nu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Hi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ls(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Hi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ls(t, !0, n, null, o);
        break;
      case "together":
        ls(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function yi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Dm(e, t, n) {
  switch (t.tag) {
    case 3:
      lf(t), An();
      break;
    case 5:
      imd(t);
      break;
    case 1:
      ge(t.type) && Ui(t);
      break;
    case 4:
      Yl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      F($i, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? af(e, t, n)
          : (F(H, H.current & 1),
            (e = nt(e, t, n)),
            e !== null ? e.sibling : null);
      F(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return uf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        F(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), of(e, t, n);
  }
  return nt(e, t, n);
}
var cf, il, df, ff;
cf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
il = function () {};
df = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Kt(Ve.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Cs(e, i)), (r = Cs(e, r)), (o = []);
        break;
      case "select":
        (i = W({}, i, { value: void 0 })),
          (r = W({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Ns(e, i)), (r = Ns(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = xi);
    }
    Ds(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (hr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (hr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && $("scroll", e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ff = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Yn(e, t) {
  if (!B)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Am(e, t, n) {
  var r = t.pendingProps;
  switch ((Hl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return oe(t), null;
    case 1:
      return ge(t.type) && Mi(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        xn(),
        j(me),
        j(le),
        Jl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ri(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Me !== null && (fl(Me), (Me = null)))),
        il(e, t),
        oe(t),
        null
      );
    case 5:
      ql(t);
      var i = Kt(Tr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        df(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return oe(t), null;
        }
        if (((e = Kt(Ve.current)), ri(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Be] = t), (r[kr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              $("cancel", r), $("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              $("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < er.length; i++) $(er[i], r);
              break;
            case "source":
              $("error", r);
              break;
            case "img":
            case "image":
            case "link":
              $("error", r), $("load", r);
              break;
            case "details":
              $("toggle", r);
              break;
            case "input":
              Fa(r, o), $("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                $("invalid", r);
              break;
            case "textarea":
              ja(r, o), $("invalid", r);
          }
          Ds(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      ni(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      ni(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : hr.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  $("scroll", r);
            }
          switch (n) {
            case "input":
              Qr(r), $a(r, o, !0);
              break;
            case "textarea":
              Qr(r), Ba(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = xi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Fc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Be] = t),
            (e[kr] = r),
            cf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = As(n, r)), n)) {
              case "dialog":
                $("cancel", e), $("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                $("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < er.length; i++) $(er[i], e);
                i = r;
                break;
              case "source":
                $("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                $("error", e), $("load", e), (i = r);
                break;
              case "details":
                $("toggle", e), (i = r);
                break;
              case "input":
                Fa(e, r), (i = Cs(e, r)), $("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = W({}, r, { value: void 0 })),
                  $("invalid", e);
                break;
              case "textarea":
                ja(e, r), (i = Ns(e, r)), $("invalid", e);
                break;
              default:
                i = r;
            }
            Ds(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? Bc(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && $c(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && pr(e, a)
                    : typeof a == "number" && pr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (hr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && $("scroll", e)
                      : a != null && Pl(e, o, a, s));
              }
            switch (n) {
              case "input":
                Qr(e), $a(e, r, !1);
                break;
              case "textarea":
                Qr(e), Ba(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ot(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Sn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Sn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = xi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) ff(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = Kt(Tr.current)), Kt(Ve.current), ri(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Be] = t),
            (o = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                ni(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ni(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Be] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (j(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && we !== null && t.mode & 1 && !(t.flags & 128))
          Rd(), An(), (t.flags |= 98560), (o = !1);
        else if (((o = ri(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[Be] = t;
          } else
            An(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (o = !1);
        } else Me !== null && (fl(Me), (Me = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? q === 0 && (q = 3) : ua())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        xn(), il(e, t), e === null && Sr(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return Kl(t.type._context), oe(t), null;
    case 17:
      return ge(t.type) && Mi(), oe(t), null;
    case 19:
      if ((j(H), (o = t.memoizedState), o === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Yn(o, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Hi(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Yn(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            G() > Un &&
            ((t.flags |= 128), (r = !0), Yn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Hi(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Yn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !B)
            )
              return oe(t), null;
          } else
            2 * G() - o.renderingStartTime > Un &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Yn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = G()),
          (t.sibling = null),
          (n = H.current),
          F(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        aa(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? _e & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function Lm(e, t) {
  switch ((Hl(t), t.tag)) {
    case 1:
      return (
        ge(t.type) && Mi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        xn(),
        j(me),
        j(le),
        Jl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ql(t), null;
    case 13:
      if ((j(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        An();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return j(H), null;
    case 4:
      return xn(), null;
    case 10:
      return Kl(t.type._context), null;
    case 22:
    case 23:
      return aa(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var si = !1,
  se = !1,
  xm = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function yn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        b(e, t, r);
      }
    else n.current = null;
}
function ol(e, t, n) {
  try {
    n();
  } catch (r) {
    b(e, t, r);
  }
}
var Ou = !1;
function Mm(e, t) {
  if (((Hs = Di), (e = imd()), jl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            h = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var _;
              p !== n || (i !== 0 && p.nodeType !== 3) || (l = s + i),
                p !== o || (r !== 0 && p.nodeType !== 3) || (a = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (_ = p.firstChild) !== null;

            )
              (m = p), (p = _);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++u === i && (l = s),
                m === o && ++h === r && (a = s),
                (_ = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = _;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Vs = { focusedElem: e, selectionRange: n }, Di = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    D = w.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Le(t.type, k),
                      D
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          b(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (w = Ou), (Ou = !1), w;
}
function lr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && ol(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ho(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function sl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function hf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), hf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Be], delete t[kr], delete t[Ks], delete t[vm], delete t[ym])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function pf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Du(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || pf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ll(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = xi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ll(e, t, n), e = e.sibling; e !== null; ) ll(e, t, n), (e = e.sibling);
}
function al(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (al(e, t, n), e = e.sibling; e !== null; ) al(e, t, n), (e = e.sibling);
}
var te = null,
  xe = !1;
function st(e, t, n) {
  for (n = n.child; n !== null; ) mf(e, t, n), (n = n.sibling);
}
function mf(e, t, n) {
  if (He && typeof He.onCommitFiberUnmount == "function")
    try {
      He.onCommitFiberUnmount(io, n);
    } catch {}
  switch (n.tag) {
    case 5:
      se || yn(n, t);
    case 6:
      var r = te,
        i = xe;
      (te = null),
        st(e, t, n),
        (te = r),
        (xe = i),
        te !== null &&
          (xe
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null &&
        (xe
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8
              ? es(e.parentNode, n)
              : e.nodeType === 1 && es(e, n),
            yr(e))
          : es(te, n.stateNode));
      break;
    case 4:
      (r = te),
        (i = xe),
        (te = n.stateNode.containerInfo),
        (xe = !0),
        st(e, t, n),
        (te = r),
        (xe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && ol(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      st(e, t, n);
      break;
    case 1:
      if (
        !se &&
        (yn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          b(n, t, l);
        }
      st(e, t, n);
      break;
    case 21:
      st(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((se = (r = se) || n.memoizedState !== null), st(e, t, n), (se = r))
        : st(e, t, n);
      break;
    default:
      st(e, t, n);
  }
}
function Au(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new xm()),
      t.forEach(function (r) {
        var i = Wm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ae(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (te = l.stateNode), (xe = !1);
              break e;
            case 3:
              (te = l.stateNode.containerInfo), (xe = !0);
              break e;
            case 4:
              (te = l.stateNode.containerInfo), (xe = !0);
              break e;
          }
          l = l.return;
        }
        if (te === null) throw Error(y(160));
        mf(o, s, i), (te = null), (xe = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        b(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) gf(t, e), (t = t.sibling);
}
function gf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ae(t, e), $e(e), r & 4)) {
        try {
          lr(3, e, e.return), ho(3, e);
        } catch (k) {
          b(e, e.return, k);
        }
        try {
          lr(5, e, e.return);
        } catch (k) {
          b(e, e.return, k);
        }
      }
      break;
    case 1:
      Ae(t, e), $e(e), r & 512 && n !== null && yn(n, n.return);
      break;
    case 5:
      if (
        (Ae(t, e),
        $e(e),
        r & 512 && n !== null && yn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          pr(i, "");
        } catch (k) {
          b(e, e.return, k);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && Uc(i, o),
              As(l, s);
            var u = As(l, o);
            for (s = 0; s < a.length; s += 2) {
              var h = a[s],
                p = a[s + 1];
              h === "style"
                ? Bc(i, p)
                : h === "dangerouslySetInnerHTML"
                ? $c(i, p)
                : h === "children"
                ? pr(i, p)
                : Pl(i, h, p, u);
            }
            switch (l) {
              case "input":
                Ps(i, o);
                break;
              case "textarea":
                zc(i, o);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var _ = o.value;
                _ != null
                  ? Sn(i, !!o.multiple, _, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Sn(i, !!o.multiple, o.defaultValue, !0)
                      : Sn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[kr] = o;
          } catch (k) {
            b(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Ae(t, e), $e(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (k) {
          b(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Ae(t, e), $e(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          yr(t.containerInfo);
        } catch (k) {
          b(e, e.return, k);
        }
      break;
    case 4:
      Ae(t, e), $e(e);
      break;
    case 13:
      Ae(t, e),
        $e(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (sa = G())),
        r & 4 && Au(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((se = (u = se) || h), Ae(t, e), (se = u)) : Ae(t, e),
        $e(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !h && e.mode & 1)
        )
          for (I = e, h = e.child; h !== null; ) {
            for (p = I = h; I !== null; ) {
              switch (((m = I), (_ = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  lr(4, m, m.return);
                  break;
                case 1:
                  yn(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      b(r, n, k);
                    }
                  }
                  break;
                case 5:
                  yn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    xu(p);
                    continue;
                  }
              }
              _ !== null ? ((_.return = m), (I = _)) : xu(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (i = p.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = jc("display", s)));
              } catch (k) {
                b(e, e.return, k);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (k) {
                b(e, e.return, k);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Ae(t, e), $e(e), r & 4 && Au(e);
      break;
    case 21:
      break;
    default:
      Ae(t, e), $e(e);
  }
}
function $e(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (pf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (pr(i, ""), (r.flags &= -33));
          var o = Du(e);
          al(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Du(e);
          ll(e, l, s);
          break;
        default:
          throw Error(y(161));
      }
    } catch (a) {
      b(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Um(e, t, n) {
  (I = e), vf(e);
}
function vf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var i = I,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || si;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || se;
        l = si;
        var u = se;
        if (((si = s), (se = a) && !u))
          for (I = i; I !== null; )
            (s = I),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Mu(i)
                : a !== null
                ? ((a.return = s), (I = a))
                : Mu(i);
        for (; o !== null; ) (I = o), vf(o), (o = o.sibling);
        (I = i), (si = l), (se = u);
      }
      Lu(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (I = o)) : Lu(e);
  }
}
function Lu(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              se || ho(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !se)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Le(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && gu(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                gu(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var h = u.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && yr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        se || (t.flags & 512 && sl(t));
      } catch (m) {
        b(t, t.return, m);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function xu(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Mu(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ho(4, t);
          } catch (a) {
            b(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              b(t, i, a);
            }
          }
          var o = t.return;
          try {
            sl(t);
          } catch (a) {
            b(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            sl(t);
          } catch (a) {
            b(t, s, a);
          }
      }
    } catch (a) {
      b(t, t.return, a);
    }
    if (t === e) {
      I = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (I = l);
      break;
    }
    I = t.return;
  }
}
var zm = Math.ceil,
  bi = ot.ReactCurrentDispatcher,
  ia = ot.ReactCurrentOwner,
  Ne = ot.ReactCurrentBatchConfig,
  L = 0,
  Z = null,
  Q = null,
  ne = 0,
  _e = 0,
  _n = Lt(0),
  q = 0,
  Nr = null,
  Zt = 0,
  po = 0,
  oa = 0,
  ar = null,
  he = null,
  sa = 0,
  Un = 1 / 0,
  Ke = null,
  Ki = !1,
  ul = null,
  Tt = null,
  li = !1,
  vt = null,
  Gi = 0,
  ur = 0,
  cl = null,
  _i = -1,
  wi = 0;
function ce() {
  return L & 6 ? G() : _i !== -1 ? _i : (_i = G());
}
function Ct(e) {
  return e.mode & 1
    ? L & 2 && ne !== 0
      ? ne & -ne
      : wm.transition !== null
      ? (wi === 0 && (wi = Zc()), wi)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sd(e.type))),
        e)
    : 1;
}
function ze(e, t, n, r) {
  if (50 < ur) throw ((ur = 0), (cl = null), Error(y(185)));
  Mr(e, n, r),
    (!(L & 2) || e !== Z) &&
      (e === Z && (!(L & 2) && (po |= n), q === 4 && dt(e, ne)),
      ve(e, r),
      n === 1 && L === 0 && !(t.mode & 1) && ((Un = G() + 500), uo && xt()));
}
function ve(e, t) {
  var n = e.callbackNode;
  wp(e, t);
  var r = Oi(e, e === Z ? ne : 0);
  if (r === 0)
    n !== null && Wa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Wa(n), t === 1))
      e.tag === 0 ? _m(Uu.bind(null, e)) : Td(Uu.bind(null, e)),
        mm(function () {
          !(L & 6) && xt();
        }),
        (n = null);
    else {
      switch (ed(r)) {
        case 1:
          n = Al;
          break;
        case 4:
          n = Jc;
          break;
        case 16:
          n = Ni;
          break;
        case 536870912:
          n = Xc;
          break;
        default:
          n = Ni;
      }
      n = Tf(n, yf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function yf(e, t) {
  if (((_i = -1), (wi = 0), L & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (Cn() && e.callbackNode !== n) return null;
  var r = Oi(e, e === Z ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Qi(e, r);
  else {
    t = r;
    var i = L;
    L |= 2;
    var o = wf();
    (Z !== e || ne !== t) && ((Ke = null), (Un = G() + 500), Gt(e, t));
    do
      try {
        jm();
        break;
      } catch (l) {
        _f(e, l);
      }
    while (1);
    bl(),
      (bi.current = o),
      (L = i),
      Q !== null ? (t = 0) : ((Z = null), (ne = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = zs(e)), i !== 0 && ((r = i), (t = dl(e, i)))), t === 1)
    )
      throw ((n = Nr), Gt(e, 0), dt(e, r), ve(e, G()), n);
    if (t === 6) dt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Fm(i) &&
          ((t = Qi(e, r)),
          t === 2 && ((o = zs(e)), o !== 0 && ((r = o), (t = dl(e, o)))),
          t === 1))
      )
        throw ((n = Nr), Gt(e, 0), dt(e, r), ve(e, G()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Bt(e, he, Ke);
          break;
        case 3:
          if (
            (dt(e, r), (r & 130023424) === r && ((t = sa + 500 - G()), 10 < t))
          ) {
            if (Oi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ce(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = bs(Bt.bind(null, e, he, Ke), t);
            break;
          }
          Bt(e, he, Ke);
          break;
        case 4:
          if ((dt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ue(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = G() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * zm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = bs(Bt.bind(null, e, he, Ke), r);
            break;
          }
          Bt(e, he, Ke);
          break;
        case 5:
          Bt(e, he, Ke);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return ve(e, G()), e.callbackNode === n ? yf.bind(null, e) : null;
}
function dl(e, t) {
  var n = ar;
  return (
    e.current.memoizedState.isDehydrated && (Gt(e, t).flags |= 256),
    (e = Qi(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && fl(t)),
    e
  );
}
function fl(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function Fm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Fe(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function dt(e, t) {
  for (
    t &= ~oa,
      t &= ~po,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ue(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Uu(e) {
  if (L & 6) throw Error(y(327));
  Cn();
  var t = Oi(e, 0);
  if (!(t & 1)) return ve(e, G()), null;
  var n = Qi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zs(e);
    r !== 0 && ((t = r), (n = dl(e, r)));
  }
  if (n === 1) throw ((n = Nr), Gt(e, 0), dt(e, t), ve(e, G()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Bt(e, he, Ke),
    ve(e, G()),
    null
  );
}
function la(e, t) {
  var n = L;
  L |= 1;
  try {
    return e(t);
  } finally {
    (L = n), L === 0 && ((Un = G() + 500), uo && xt());
  }
}
function en(e) {
  vt !== null && vt.tag === 0 && !(L & 6) && Cn();
  var t = L;
  L |= 1;
  var n = Ne.transition,
    r = M;
  try {
    if (((Ne.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (Ne.transition = n), (L = t), !(L & 6) && xt();
  }
}
function aa() {
  (_e = _n.current), j(_n);
}
function Gt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), pm(n)), Q !== null))
    for (n = Q.return; n !== null; ) {
      var r = n;
      switch ((Hl(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Mi();
          break;
        case 3:
          xn(), j(me), j(le), Jl();
          break;
        case 5:
          ql(r);
          break;
        case 4:
          xn();
          break;
        case 13:
          j(H);
          break;
        case 19:
          j(H);
          break;
        case 10:
          Kl(r.type._context);
          break;
        case 22:
        case 23:
          aa();
      }
      n = n.return;
    }
  if (
    ((Z = e),
    (Q = e = Pt(e.current, null)),
    (ne = _e = t),
    (q = 0),
    (Nr = null),
    (oa = po = Zt = 0),
    (he = ar = null),
    bt !== null)
  ) {
    for (t = 0; t < bt.length; t++)
      if (((n = bt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    bt = null;
  }
  return e;
}
function _f(e, t) {
  do {
    var n = Q;
    try {
      if ((bl(), (gi.current = Wi), Vi)) {
        for (var r = V.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Vi = !1;
      }
      if (
        ((Xt = 0),
        (X = Y = V = null),
        (sr = !1),
        (Cr = 0),
        (ia.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (Nr = t), (Q = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = ne),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            h = l,
            p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var _ = ku(s);
          if (_ !== null) {
            (_.flags &= -257),
              Iu(_, s, l, o, t),
              _.mode & 1 && Eu(o, u, t),
              (t = _),
              (a = u);
            var w = t.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(a), (t.updateQueue = k);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Eu(o, u, t), ua();
              break e;
            }
            a = Error(y(426));
          }
        } else if (B && l.mode & 1) {
          var D = ku(s);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256),
              Iu(D, s, l, o, t),
              Vl(Mn(a, l));
            break e;
          }
        }
        (o = a = Mn(a, l)),
          q !== 4 && (q = 2),
          ar === null ? (ar = [o]) : ar.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = tf(o, a, t);
              mu(o, d);
              break e;
            case 1:
              l = a;
              var c = o.type,
                f = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (Tt === null || !Tt.has(f))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = nf(o, l, t);
                mu(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ef(n);
    } catch (v) {
      (t = v), Q === n && n !== null && (Q = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function wf() {
  var e = bi.current;
  return (bi.current = Wi), e === null ? Wi : e;
}
function ua() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    Z === null || (!(Zt & 268435455) && !(po & 268435455)) || dt(Z, ne);
}
function Qi(e, t) {
  var n = L;
  L |= 2;
  var r = wf();
  (Z !== e || ne !== t) && ((Ke = null), Gt(e, t));
  do
    try {
      $m();
      break;
    } catch (i) {
      _f(e, i);
    }
  while (1);
  if ((bl(), (L = n), (bi.current = r), Q !== null)) throw Error(y(261));
  return (Z = null), (ne = 0), q;
}
function $m() {
  for (; Q !== null; ) Sf(Q);
}
function jm() {
  for (; Q !== null && !dp(); ) Sf(Q);
}
function Sf(e) {
  var t = If(e.alternate, e, _e);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ef(e) : (Q = t),
    (ia.current = null);
}
function Ef(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Lm(n, t)), n !== null)) {
        (n.flags &= 32767), (Q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (Q = null);
        return;
      }
    } else if (((n = Am(n, t, _e)), n !== null)) {
      Q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Q = t;
      return;
    }
    Q = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function Bt(e, t, n) {
  var r = M,
    i = Ne.transition;
  try {
    (Ne.transition = null), (M = 1), Bm(e, t, n, r);
  } finally {
    (Ne.transition = i), (M = r);
  }
  return null;
}
function Bm(e, t, n, r) {
  do Cn();
  while (vt !== null);
  if (L & 6) throw Error(y(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Sp(e, o),
    e === Z && ((Q = Z = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      li ||
      ((li = !0),
      Tf(Ni, function () {
        return Cn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ne.transition), (Ne.transition = null);
    var s = M;
    M = 1;
    var l = L;
    (L |= 4),
      (ia.current = null),
      Mm(e, n),
      gf(n, e),
      lm(Vs),
      (Di = !!Hs),
      (Vs = Hs = null),
      (e.current = n),
      Um(n),
      fp(),
      (L = l),
      (M = s),
      (Ne.transition = o);
  } else e.current = n;
  if (
    (li && ((li = !1), (vt = e), (Gi = i)),
    (o = e.pendingLanes),
    o === 0 && (Tt = null),
    mp(n.stateNode),
    ve(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ki) throw ((Ki = !1), (e = ul), (ul = null), e);
  return (
    Gi & 1 && e.tag !== 0 && Cn(),
    (o = e.pendingLanes),
    o & 1 ? (e === cl ? ur++ : ((ur = 0), (cl = e))) : (ur = 0),
    xt(),
    null
  );
}
function Cn() {
  if (vt !== null) {
    var e = ed(Gi),
      t = Ne.transition,
      n = M;
    try {
      if (((Ne.transition = null), (M = 16 > e ? 16 : e), vt === null))
        var r = !1;
      else {
        if (((e = vt), (vt = null), (Gi = 0), L & 6)) throw Error(y(331));
        var i = L;
        for (L |= 4, I = e.current; I !== null; ) {
          var o = I,
            s = o.child;
          if (I.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (I = u; I !== null; ) {
                  var h = I;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lr(8, h, o);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (I = p);
                  else
                    for (; I !== null; ) {
                      h = I;
                      var m = h.sibling,
                        _ = h.return;
                      if ((hf(h), h === u)) {
                        I = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = _), (I = m);
                        break;
                      }
                      I = _;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var D = k.sibling;
                    (k.sibling = null), (k = D);
                  } while (k !== null);
                }
              }
              I = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (I = s);
          else
            e: for (; I !== null; ) {
              if (((o = I), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    lr(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (I = d);
                break e;
              }
              I = o.return;
            }
        }
        var c = e.current;
        for (I = c; I !== null; ) {
          s = I;
          var f = s.child;
          if (s.subtreeFlags & 2064 && f !== null) (f.return = s), (I = f);
          else
            e: for (s = c; I !== null; ) {
              if (((l = I), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ho(9, l);
                  }
                } catch (v) {
                  b(l, l.return, v);
                }
              if (l === s) {
                I = null;
                break e;
              }
              var g = l.sibling;
              if (g !== null) {
                (g.return = l.return), (I = g);
                break e;
              }
              I = l.return;
            }
        }
        if (
          ((L = i), xt(), He && typeof He.onPostCommitFiberRoot == "function")
        )
          try {
            He.onPostCommitFiberRoot(io, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (Ne.transition = t);
    }
  }
  return !1;
}
function zu(e, t, n) {
  (t = Mn(n, t)),
    (t = tf(e, t, 1)),
    (e = It(e, t, 1)),
    (t = ce()),
    e !== null && (Mr(e, 1, t), ve(e, t));
}
function b(e, t, n) {
  if (e.tag === 3) zu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        zu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Tt === null || !Tt.has(r)))
        ) {
          (e = Mn(n, e)),
            (e = nf(t, e, 1)),
            (t = It(t, e, 1)),
            (e = ce()),
            t !== null && (Mr(t, 1, e), ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Hm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Z === e &&
      (ne & n) === n &&
      (q === 4 || (q === 3 && (ne & 130023424) === ne && 500 > G() - sa)
        ? Gt(e, 0)
        : (oa |= n)),
    ve(e, t);
}
function kf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Jr), (Jr <<= 1), !(Jr & 130023424) && (Jr = 4194304))
      : (t = 1));
  var n = ce();
  (e = tt(e, t)), e !== null && (Mr(e, t, n), ve(e, n));
}
function Vm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), kf(e, n);
}
function Wm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), kf(e, n);
}
var If;
If = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || me.current) pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (pe = !1), Dm(e, t, n);
      pe = !!(e.flags & 131072);
    }
  else (pe = !1), B && t.flags & 1048576 && Cd(t, Fi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      yi(e, t), (e = t.pendingProps);
      var i = Dn(t, le.current);
      Tn(t, n), (i = Zl(null, t, r, e, i, n));
      var o = ea();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(r) ? ((o = !0), Ui(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ql(t),
            (i.updater = co),
            (t.stateNode = i),
            (i._reactInternals = t),
            Xs(t, r, e, n),
            (t = tl(null, t, r, !0, o, n)))
          : ((t.tag = 0), B && o && Bl(t), ue(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (yi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Km(r)),
          (e = Le(r, e)),
          i)
        ) {
          case 0:
            t = el(null, t, r, e, n);
            break e;
          case 1:
            t = Pu(null, t, r, e, n);
            break e;
          case 11:
            t = Tu(null, t, r, e, n);
            break e;
          case 14:
            t = Cu(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Le(r, i)),
        el(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Le(r, i)),
        Pu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((lf(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Od(e, t),
          Bi(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Mn(Error(y(423)), t)), (t = Ru(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Mn(Error(y(424)), t)), (t = Ru(e, t, r, n, i));
            break e;
          } else
            for (
              we = kt(t.stateNode.containerInfo.firstChild),
                Se = t,
                B = !0,
                Me = null,
                n = xd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((An(), r === i)) {
            t = nt(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        imd(t),
        e === null && Ys(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Ws(r, i) ? (s = null) : o !== null && Ws(r, o) && (t.flags |= 32),
        sf(e, t),
        ue(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Ys(t), null;
    case 13:
      return af(e, t, n);
    case 4:
      return (
        Yl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ln(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Le(r, i)),
        Tu(e, t, r, i, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          F($i, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Fe(o.value, s)) {
            if (o.children === i.children && !me.current) {
              t = nt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = Xe(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var h = u.pending;
                        h === null
                          ? (a.next = a)
                          : ((a.next = h.next), (h.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      qs(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(y(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  qs(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ue(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Tn(t, n),
        (i = Oe(i)),
        (r = r(i)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Le(r, t.pendingProps)),
        (i = Le(r.type, i)),
        Cu(e, t, r, i, n)
      );
    case 15:
      return rf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Le(r, i)),
        yi(e, t),
        (t.tag = 1),
        ge(r) ? ((e = !0), Ui(t)) : (e = !1),
        Tn(t, n),
        Ad(t, r, i),
        Xs(t, r, i, n),
        tl(null, t, r, !0, e, n)
      );
    case 19:
      return uf(e, t, n);
    case 22:
      return of(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function Tf(e, t) {
  return qc(e, t);
}
function bm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Re(e, t, n, r) {
  return new bm(e, t, n, r);
}
function ca(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Km(e) {
  if (typeof e == "function") return ca(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Nl)) return 11;
    if (e === Ol) return 14;
  }
  return 2;
}
function Pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Re(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Si(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) ca(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case un:
        return Qt(n.children, i, o, t);
      case Rl:
        (s = 8), (i |= 8);
        break;
      case Es:
        return (
          (e = Re(12, n, t, i | 2)), (e.elementType = Es), (e.lanes = o), e
        );
      case ks:
        return (e = Re(13, n, t, i)), (e.elementType = ks), (e.lanes = o), e;
      case Is:
        return (e = Re(19, n, t, i)), (e.elementType = Is), (e.lanes = o), e;
      case Lc:
        return mo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Dc:
              s = 10;
              break e;
            case Ac:
              s = 9;
              break e;
            case Nl:
              s = 11;
              break e;
            case Ol:
              s = 14;
              break e;
            case at:
              (s = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Re(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Qt(e, t, n, r) {
  return (e = Re(7, e, r, t)), (e.lanes = n), e;
}
function mo(e, t, n, r) {
  return (
    (e = Re(22, e, r, t)),
    (e.elementType = Lc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function as(e, t, n) {
  return (e = Re(6, e, null, t)), (e.lanes = n), e;
}
function us(e, t, n) {
  return (
    (t = Re(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Gm(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Vo(0)),
    (this.expirationTimes = Vo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Vo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function da(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new Gm(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Re(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ql(o),
    e
  );
}
function Qm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: an,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Cf(e) {
  if (!e) return Dt;
  e = e._reactInternals;
  e: {
    if (on(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return Id(e, n, t);
  }
  return t;
}
function Pf(e, t, n, r, i, o, s, l, a) {
  return (
    (e = da(n, r, !0, e, i, o, s, l, a)),
    (e.context = Cf(null)),
    (n = e.current),
    (r = ce()),
    (i = Ct(n)),
    (o = Xe(r, i)),
    (o.callback = t ?? null),
    It(n, o, i),
    (e.current.lanes = i),
    Mr(e, i, r),
    ve(e, r),
    e
  );
}
function go(e, t, n, r) {
  var i = t.current,
    o = ce(),
    s = Ct(i);
  return (
    (n = Cf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Xe(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = It(i, t, s)),
    e !== null && (ze(e, i, s, o), mi(e, i, s)),
    s
  );
}
function Yi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Fu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fa(e, t) {
  Fu(e, t), (e = e.alternate) && Fu(e, t);
}
function Ym() {
  return null;
}
var Rf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ha(e) {
  this._internalRoot = e;
}
vo.prototype.render = ha.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  go(e, t, null, null);
};
vo.prototype.unmount = ha.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    en(function () {
      go(null, e, null, null);
    }),
      (t[et] = null);
  }
};
function vo(e) {
  this._internalRoot = e;
}
vo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = rd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ct.length && t !== 0 && t < ct[n].priority; n++);
    ct.splice(n, 0, e), n === 0 && od(e);
  }
};
function pa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function $u() {}
function qm(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Yi(s);
        o.call(u);
      };
    }
    var s = Pf(t, r, e, 0, null, !1, !1, "", $u);
    return (
      (e._reactRootContainer = s),
      (e[et] = s.current),
      Sr(e.nodeType === 8 ? e.parentNode : e),
      en(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Yi(a);
      l.call(u);
    };
  }
  var a = da(e, 0, !1, null, null, !1, !1, "", $u);
  return (
    (e._reactRootContainer = a),
    (e[et] = a.current),
    Sr(e.nodeType === 8 ? e.parentNode : e),
    en(function () {
      go(t, a, n, r);
    }),
    a
  );
}
function _o(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = Yi(s);
        l.call(a);
      };
    }
    go(t, s, e, i);
  } else s = qm(n, t, e, i, r);
  return Yi(s);
}
td = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zn(t.pendingLanes);
        n !== 0 &&
          (Ll(t, n | 1), ve(t, G()), !(L & 6) && ((Un = G() + 500), xt()));
      }
      break;
    case 13:
      en(function () {
        var r = tt(e, 1);
        if (r !== null) {
          var i = ce();
          ze(r, e, 1, i);
        }
      }),
        fa(e, 1);
  }
};
xl = function (e) {
  if (e.tag === 13) {
    var t = tt(e, 134217728);
    if (t !== null) {
      var n = ce();
      ze(t, e, 134217728, n);
    }
    fa(e, 134217728);
  }
};
nd = function (e) {
  if (e.tag === 13) {
    var t = Ct(e),
      n = tt(e, t);
    if (n !== null) {
      var r = ce();
      ze(n, e, t, r);
    }
    fa(e, t);
  }
};
rd = function () {
  return M;
};
id = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
xs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ps(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ao(r);
            if (!i) throw Error(y(90));
            Mc(r), Ps(r, i);
          }
        }
      }
      break;
    case "textarea":
      zc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Sn(e, !!n.multiple, t, !1);
  }
};
Wc = la;
bc = en;
var Jm = { usingClientEntryPoint: !1, Events: [zr, hn, ao, Hc, Vc, la] },
  qn = {
    findFiberByHostInstance: Wt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Xm = {
    bundleType: qn.bundleType,
    version: qn.version,
    rendererPackageName: qn.rendererPackageName,
    rendererConfig: qn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Qc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: qn.findFiberByHostInstance || Ym,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ai.isDisabled && ai.supportsFiber)
    try {
      (io = ai.inject(Xm)), (He = ai);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jm;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pa(t)) throw Error(y(200));
  return Qm(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!pa(e)) throw Error(y(299));
  var n = !1,
    r = "",
    i = Rf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = da(e, 1, !1, null, null, n, !1, r, i)),
    (e[et] = t.current),
    Sr(e.nodeType === 8 ? e.parentNode : e),
    new ha(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Qc(t)), (e = e === null ? null : e.stateNode), e;
};
ke.flushSync = function (e) {
  return en(e);
};
ke.hydrate = function (e, t, n) {
  if (!yo(t)) throw Error(y(200));
  return _o(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!pa(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Rf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Pf(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[et] = t.current),
    Sr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new vo(t);
};
ke.render = function (e, t, n) {
  if (!yo(t)) throw Error(y(200));
  return _o(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!yo(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (en(function () {
        _o(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[et] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = la;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!yo(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return _o(e, t, n, !1, r);
};
ke.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = ke);
})(Yh);
var ju = _s;
(ys.createRoot = ju.createRoot), (ys.hydrateRoot = ju.hydrateRoot);
const Zm = "modulepreload",
  eg = function (e) {
    return "/" + e;
  },
  Bu = {},
  ma = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const i = document.getElementsByTagName("link");
    return Promise.all(
      n.map((o) => {
        if (((o = eg(o)), o in Bu)) return;
        Bu[o] = !0;
        const s = o.endsWith(".css"),
          l = s ? '[rel="stylesheet"]' : "";
        if (!!r)
          for (let h = i.length - 1; h >= 0; h--) {
            const p = i[h];
            if (p.href === o && (!s || p.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${o}"]${l}`)) return;
        const u = document.createElement("link");
        if (
          ((u.rel = s ? "stylesheet" : Zm),
          s || ((u.as = "script"), (u.crossOrigin = "")),
          (u.href = o),
          document.head.appendChild(u),
          s)
        )
          return new Promise((h, p) => {
            u.addEventListener("load", h),
              u.addEventListener("error", () =>
                p(new Error(`Unable to preload CSS for ${o}`))
              );
          });
      })
    ).then(() => t());
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Nf = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e.charCodeAt(r);
      i < 128
        ? (t[n++] = i)
        : i < 2048
        ? ((t[n++] = (i >> 6) | 192), (t[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < e.length &&
          (e.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
          (t[n++] = (i >> 18) | 240),
          (t[n++] = ((i >> 12) & 63) | 128),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128))
        : ((t[n++] = (i >> 12) | 224),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128));
    }
    return t;
  },
  tg = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const i = e[n++];
      if (i < 128) t[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const o = e[n++];
        t[r++] = String.fromCharCode(((i & 31) << 6) | (o & 63));
      } else if (i > 239 && i < 365) {
        const o = e[n++],
          s = e[n++],
          l = e[n++],
          a =
            (((i & 7) << 18) | ((o & 63) << 12) | ((s & 63) << 6) | (l & 63)) -
            65536;
        (t[r++] = String.fromCharCode(55296 + (a >> 10))),
          (t[r++] = String.fromCharCode(56320 + (a & 1023)));
      } else {
        const o = e[n++],
          s = e[n++];
        t[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((o & 63) << 6) | (s & 63)
        );
      }
    }
    return t.join("");
  },
  Of = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(e, t) {
      if (!Array.isArray(e))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < e.length; i += 3) {
        const o = e[i],
          s = i + 1 < e.length,
          l = s ? e[i + 1] : 0,
          a = i + 2 < e.length,
          u = a ? e[i + 2] : 0,
          h = o >> 2,
          p = ((o & 3) << 4) | (l >> 4);
        let m = ((l & 15) << 2) | (u >> 6),
          _ = u & 63;
        a || ((_ = 64), s || (m = 64)), r.push(n[h], n[p], n[m], n[_]);
      }
      return r.join("");
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(e)
        : this.encodeByteArray(Nf(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(e)
        : tg(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < e.length; ) {
        const o = n[e.charAt(i++)],
          l = i < e.length ? n[e.charAt(i)] : 0;
        ++i;
        const u = i < e.length ? n[e.charAt(i)] : 64;
        ++i;
        const p = i < e.length ? n[e.charAt(i)] : 64;
        if ((++i, o == null || l == null || u == null || p == null))
          throw new ng();
        const m = (o << 2) | (l >> 4);
        if ((r.push(m), u !== 64)) {
          const _ = ((l << 4) & 240) | (u >> 2);
          if ((r.push(_), p !== 64)) {
            const w = ((u << 6) & 192) | p;
            r.push(w);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] =
              this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class ng extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const rg = function (e) {
    const t = Nf(e);
    return Of.encodeByteArray(t, !0);
  },
  Df = function (e) {
    return rg(e).replace(/\./g, "");
  },
  Af = function (e) {
    try {
      return Of.decodeString(e, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ig() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const og = () => ig().__FIREBASE_DEFAULTS__,
  sg = () => {
    if (typeof process > "u" || typeof process.env > "u") return;
    const e = {}.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  lg = () => {
    if (typeof document > "u") return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && Af(e[1]);
    return t && JSON.parse(t);
  },
  ga = () => {
    try {
      return og() || sg() || lg();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  ag = (e) => {
    var t, n;
    return (n =
      (t = ga()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[e];
  },
  ug = () => {
    var e;
    return (e = ga()) === null || e === void 0 ? void 0 : e.config;
  },
  Lf = (e) => {
    var t;
    return (t = ga()) === null || t === void 0 ? void 0 : t[`_${e}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cg {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        (this.resolve = t), (this.reject = n);
      }));
  }
  wrapCallback(t) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ae() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function dg() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ae())
  );
}
function fg() {
  const e =
    typeof chrome == "object"
      ? chrome.runtime
      : typeof browser == "object"
      ? browser.runtime
      : void 0;
  return typeof e == "object" && e.id !== void 0;
}
function hg() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function pg() {
  const e = ae();
  return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function mg() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function gg() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var o;
          t(
            ((o = i.error) === null || o === void 0 ? void 0 : o.message) || ""
          );
        });
    } catch (n) {
      t(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vg = "FirebaseError";
class Mt extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.custoimdata = r),
      (this.name = vg),
      Object.setPrototypeOf(this, Mt.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, $r.prototype.create);
  }
}
class $r {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${t}`,
      o = this.errors[t],
      s = o ? yg(o, r) : "Error",
      l = `${this.serviceName}: ${s} (${i}).`;
    return new Mt(i, l, r);
  }
}
function yg(e, t) {
  return e.replace(_g, (n, r) => {
    const i = t[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const _g = /\{\$([^}]+)}/g;
function wg(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function qi(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const o = e[i],
      s = t[i];
    if (Hu(o) && Hu(s)) {
      if (!qi(o, s)) return !1;
    } else if (o !== s) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function Hu(e) {
  return e !== null && typeof e == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function jr(e) {
  const t = [];
  for (const [n, r] of Object.entries(e))
    Array.isArray(r)
      ? r.forEach((i) => {
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        })
      : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return t.length ? "&" + t.join("&") : "";
}
function Sg(e, t) {
  const n = new Eg(e, t);
  return n.subscribe.bind(n);
}
class Eg {
  constructor(t, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          t(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(t) {
    this.forEachObserver((n) => {
      n.next(t);
    });
  }
  error(t) {
    this.forEachObserver((n) => {
      n.error(t);
    }),
      this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }),
      this.close();
  }
  subscribe(t, n, r) {
    let i;
    if (t === void 0 && n === void 0 && r === void 0)
      throw new Error("Missing Observer.");
    kg(t, ["next", "error", "complete"])
      ? (i = t)
      : (i = { next: t, error: n, complete: r }),
      i.next === void 0 && (i.next = cs),
      i.error === void 0 && (i.error = cs),
      i.complete === void 0 && (i.complete = cs);
    const o = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      o
    );
  }
  unsubscribeOne(t) {
    this.observers === void 0 ||
      this.observers[t] === void 0 ||
      (delete this.observers[t],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(t) {
    if (!this.finalized)
      for (let n = 0; n < this.observers.length; n++) this.sendOne(n, t);
  }
  sendOne(t, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          n(this.observers[t]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(t) {
    this.finalized ||
      ((this.finalized = !0),
      t !== void 0 && (this.finalError = t),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function kg(e, t) {
  if (typeof e != "object" || e === null) return !1;
  for (const n of t) if (n in e && typeof e[n] == "function") return !0;
  return !1;
}
function cs() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function sn(e) {
  return e && e._delegate ? e._delegate : e;
}
class zn {
  constructor(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ht = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ig {
  constructor(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new cg();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        t == null ? void 0 : t.identifier
      ),
      i =
        (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (o) {
        if (i) return null;
        throw o;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (Cg(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Ht });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const o = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(o);
        } catch {}
      }
    }
  }
  clearInstance(t = Ht) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = Ht) {
    return this.instances.has(t);
  }
  getOptions(t = Ht) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [o, s] of this.instancesDeferred.entries()) {
      const l = this.normalizeInstanceIdentifier(o);
      r === l && s.resolve(i);
    }
    return i;
  }
  onInit(t, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      o =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    o.add(t), this.onInitCallbacks.set(i, o);
    const s = this.instances.get(i);
    return (
      s && t(s, i),
      () => {
        o.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: Tg(t),
        options: n,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = Ht) {
    return this.component ? (this.component.multipleInstances ? t : Ht) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function Tg(e) {
  return e === Ht ? void 0 : e;
}
function Cg(e) {
  return e.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Pg {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`
      );
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new Ig(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var z;
(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})(z || (z = {}));
const Rg = {
    debug: z.DEBUG,
    verbose: z.VERBOSE,
    info: z.INFO,
    warn: z.WARN,
    error: z.ERROR,
    silent: z.SILENT,
  },
  Ng = z.INFO,
  Og = {
    [z.DEBUG]: "log",
    [z.VERBOSE]: "log",
    [z.INFO]: "info",
    [z.WARN]: "warn",
    [z.ERROR]: "error",
  },
  Dg = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      i = Og[t];
    if (i) console[i](`[${r}]  ${e.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`
      );
  };
class xf {
  constructor(t) {
    (this.name = t),
      (this._logLevel = Ng),
      (this._logHandler = Dg),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in z))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? Rg[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, z.DEBUG, ...t),
      this._logHandler(this, z.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, z.VERBOSE, ...t),
      this._logHandler(this, z.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, z.INFO, ...t),
      this._logHandler(this, z.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, z.WARN, ...t),
      this._logHandler(this, z.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, z.ERROR, ...t),
      this._logHandler(this, z.ERROR, ...t);
  }
}
const Ag = (e, t) => t.some((n) => e instanceof n);
let Vu, Wu;
function Lg() {
  return (
    Vu ||
    (Vu = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function xg() {
  return (
    Wu ||
    (Wu = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const Mf = new WeakMap(),
  hl = new WeakMap(),
  Uf = new WeakMap(),
  ds = new WeakMap(),
  va = new WeakMap();
function Mg(e) {
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("success", o), e.removeEventListener("error", s);
      },
      o = () => {
        n(Rt(e.result)), i();
      },
      s = () => {
        r(e.error), i();
      };
    e.addEventListener("success", o), e.addEventListener("error", s);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && Mf.set(n, e);
      })
      .catch(() => {}),
    va.set(t, e),
    t
  );
}
function Ug(e) {
  if (hl.has(e)) return;
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("complete", o),
          e.removeEventListener("error", s),
          e.removeEventListener("abort", s);
      },
      o = () => {
        n(), i();
      },
      s = () => {
        r(e.error || new DOMException("AbortError", "AbortError")), i();
      };
    e.addEventListener("complete", o),
      e.addEventListener("error", s),
      e.addEventListener("abort", s);
  });
  hl.set(e, t);
}
let pl = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return hl.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || Uf.get(e);
      if (t === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return Rt(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in e;
  },
};
function zg(e) {
  pl = e(pl);
}
function Fg(e) {
  return e === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(fs(this), t, ...n);
        return Uf.set(r, t.sort ? t.sort() : [t]), Rt(r);
      }
    : xg().includes(e)
    ? function (...t) {
        return e.apply(fs(this), t), Rt(Mf.get(this));
      }
    : function (...t) {
        return Rt(e.apply(fs(this), t));
      };
}
function $g(e) {
  return typeof e == "function"
    ? Fg(e)
    : (e instanceof IDBTransaction && Ug(e),
      Ag(e, Lg()) ? new Proxy(e, pl) : e);
}
function Rt(e) {
  if (e instanceof IDBRequest) return Mg(e);
  if (ds.has(e)) return ds.get(e);
  const t = $g(e);
  return t !== e && (ds.set(e, t), va.set(t, e)), t;
}
const fs = (e) => va.get(e);
function jg(e, t, { blocked: n, upgrade: r, blocking: i, terminated: o } = {}) {
  const s = indexedDB.open(e, t),
    l = Rt(s);
  return (
    r &&
      s.addEventListener("upgradeneeded", (a) => {
        r(Rt(s.result), a.oldVersion, a.newVersion, Rt(s.transaction));
      }),
    n && s.addEventListener("blocked", () => n()),
    l
      .then((a) => {
        o && a.addEventListener("close", () => o()),
          i && a.addEventListener("versionchange", () => i());
      })
      .catch(() => {}),
    l
  );
}
const Bg = ["get", "getKey", "getAll", "getAllKeys", "count"],
  Hg = ["put", "add", "delete", "clear"],
  hs = new Map();
function bu(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (hs.get(t)) return hs.get(t);
  const n = t.replace(/FromIndex$/, ""),
    r = t !== n,
    i = Hg.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || Bg.includes(n))
  )
    return;
  const o = async function (s, ...l) {
    const a = this.transaction(s, i ? "readwrite" : "readonly");
    let u = a.store;
    return (
      r && (u = u.index(l.shift())),
      (await Promise.all([u[n](...l), i && a.done]))[0]
    );
  };
  return hs.set(t, o), o;
}
zg((e) => ({
  ...e,
  get: (t, n, r) => bu(t, n) || e.get(t, n, r),
  has: (t, n) => !!bu(t, n) || e.has(t, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vg {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (Wg(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function Wg(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const ml = "@firebase/app",
  Ku = "0.9.7";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tn = new xf("@firebase/app"),
  bg = "@firebase/app-compat",
  Kg = "@firebase/analytics-compat",
  Gg = "@firebase/analytics",
  Qg = "@firebase/app-check-compat",
  Yg = "@firebase/app-check",
  qg = "@firebase/auth",
  Jg = "@firebase/auth-compat",
  Xg = "@firebase/database",
  Zg = "@firebase/database-compat",
  ev = "@firebase/functions",
  tv = "@firebase/functions-compat",
  nv = "@firebase/installations",
  rv = "@firebase/installations-compat",
  iv = "@firebase/messaging",
  ov = "@firebase/messaging-compat",
  sv = "@firebase/performance",
  lv = "@firebase/performance-compat",
  av = "@firebase/remote-config",
  uv = "@firebase/remote-config-compat",
  cv = "@firebase/storage",
  dv = "@firebase/storage-compat",
  fv = "@firebase/firestore",
  hv = "@firebase/firestore-compat",
  pv = "firebase",
  mv = "9.19.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gl = "[DEFAULT]",
  gv = {
    [ml]: "fire-core",
    [bg]: "fire-core-compat",
    [Gg]: "fire-analytics",
    [Kg]: "fire-analytics-compat",
    [Yg]: "fire-app-check",
    [Qg]: "fire-app-check-compat",
    [qg]: "fire-auth",
    [Jg]: "fire-auth-compat",
    [Xg]: "fire-rtdb",
    [Zg]: "fire-rtdb-compat",
    [ev]: "fire-fn",
    [tv]: "fire-fn-compat",
    [nv]: "fire-iid",
    [rv]: "fire-iid-compat",
    [iv]: "fire-fcm",
    [ov]: "fire-fcm-compat",
    [sv]: "fire-perf",
    [lv]: "fire-perf-compat",
    [av]: "fire-rc",
    [uv]: "fire-rc-compat",
    [cv]: "fire-gcs",
    [dv]: "fire-gcs-compat",
    [fv]: "fire-fst",
    [hv]: "fire-fst-compat",
    "fire-js": "fire-js",
    [pv]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ji = new Map(),
  vl = new Map();
function vv(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    tn.debug(
      `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
      n
    );
  }
}
function Or(e) {
  const t = e.name;
  if (vl.has(t))
    return (
      tn.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  vl.set(t, e);
  for (const n of Ji.values()) vv(n, e);
  return !0;
}
function zf(e, t) {
  const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const yv = {
    ["no-app"]:
      "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    ["bad-app-name"]: "Illegal App name: '{$appName}",
    ["duplicate-app"]:
      "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
    ["no-options"]:
      "Need to provide options, when not being deployed to hosting via source.",
    ["invalid-app-argument"]:
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    ["invalid-log-argument"]:
      "First argument to `onLog` must be null or a function.",
    ["idb-open"]:
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-get"]:
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-set"]:
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-delete"]:
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  },
  Nt = new $r("app", "Firebase", yv);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _v {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new zn("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Nt.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const wo = mv;
function Ff(e, t = {}) {
  let n = e;
  typeof t != "object" && (t = { name: t });
  const r = Object.assign({ name: gl, automaticDataCollectionEnabled: !1 }, t),
    i = r.name;
  if (typeof i != "string" || !i)
    throw Nt.create("bad-app-name", { appName: String(i) });
  if ((n || (n = ug()), !n)) throw Nt.create("no-options");
  const o = Ji.get(i);
  if (o) {
    if (qi(n, o.options) && qi(r, o.config)) return o;
    throw Nt.create("duplicate-app", { appName: i });
  }
  const s = new Pg(i);
  for (const a of vl.values()) s.addComponent(a);
  const l = new _v(n, r, s);
  return Ji.set(i, l), l;
}
function wv(e = gl) {
  const t = Ji.get(e);
  if (!t && e === gl) return Ff();
  if (!t) throw Nt.create("no-app", { appName: e });
  return t;
}
function Pn(e, t, n) {
  var r;
  let i = (r = gv[e]) !== null && r !== void 0 ? r : e;
  n && (i += `-${n}`);
  const o = i.match(/\s|\//),
    s = t.match(/\s|\//);
  if (o || s) {
    const l = [`Unable to register library "${i}" with version "${t}":`];
    o &&
      l.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      o && s && l.push("and"),
      s &&
        l.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`
        ),
      tn.warn(l.join(" "));
    return;
  }
  Or(new zn(`${i}-version`, () => ({ library: i, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Sv = "firebase-heartbeat-database",
  Ev = 1,
  Dr = "firebase-heartbeat-store";
let ps = null;
function $f() {
  return (
    ps ||
      (ps = jg(Sv, Ev, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              e.createObjectStore(Dr);
          }
        },
      }).catch((e) => {
        throw Nt.create("idb-open", { originalErrorMessage: e.message });
      })),
    ps
  );
}
async function kv(e) {
  try {
    return (await $f()).transaction(Dr).objectStore(Dr).get(jf(e));
  } catch (t) {
    if (t instanceof Mt) tn.warn(t.message);
    else {
      const n = Nt.create("idb-get", {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      tn.warn(n.message);
    }
  }
}
async function Gu(e, t) {
  try {
    const r = (await $f()).transaction(Dr, "readwrite");
    return await r.objectStore(Dr).put(t, jf(e)), r.done;
  } catch (n) {
    if (n instanceof Mt) tn.warn(n.message);
    else {
      const r = Nt.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      tn.warn(r.message);
    }
  }
}
function jf(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Iv = 1024,
  Tv = 30 * 24 * 60 * 60 * 1e3;
class Cv {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new Rv(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    const n = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      r = Qu();
    if (
      (this._heartbeatsCache === null &&
        (this._heartbeatsCache = await this._heartbeatsCachePromise),
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === r ||
        this._heartbeatsCache.heartbeats.some((i) => i.date === r)
      ))
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: r, agent: n }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((i) => {
            const o = new Date(i.date).valueOf();
            return Date.now() - o <= Tv;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      this._heartbeatsCache === null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const t = Qu(),
      { heartbeatsToSend: n, unsentEntries: r } = Pv(
        this._heartbeatsCache.heartbeats
      ),
      i = Df(JSON.stringify({ version: 2, heartbeats: n }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = t),
      r.length > 0
        ? ((this._heartbeatsCache.heartbeats = r),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      i
    );
  }
}
function Qu() {
  return new Date().toISOString().substring(0, 10);
}
function Pv(e, t = Iv) {
  const n = [];
  let r = e.slice();
  for (const i of e) {
    const o = n.find((s) => s.agent === i.agent);
    if (o) {
      if ((o.dates.push(i.date), Yu(n) > t)) {
        o.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), Yu(n) > t)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class Rv {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return mg()
      ? gg()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    return (await this._canUseIndexedDBPromise)
      ? (await kv(this.app)) || { heartbeats: [] }
      : { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Gu(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Gu(this.app, {
        lastSentHeartbeatDate:
          (n = t.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function Yu(e) {
  return Df(JSON.stringify({ version: 2, heartbeats: e })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Nv(e) {
  Or(new zn("platform-logger", (t) => new Vg(t), "PRIVATE")),
    Or(new zn("heartbeat", (t) => new Cv(t), "PRIVATE")),
    Pn(ml, Ku, e),
    Pn(ml, Ku, "esm2017"),
    Pn("fire-js", "");
}
Nv("");
function ya(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function Bf() {
  return {
    ["dependent-sdk-initialized-before-auth"]:
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const Ov = Bf,
  Hf = new $r("auth", "Firebase", Bf());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qu = new xf("@firebase/auth");
function Ei(e, ...t) {
  qu.logLevel <= z.ERROR && qu.error(`Auth (${wo}): ${e}`, ...t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rt(e, ...t) {
  throw _a(e, ...t);
}
function We(e, ...t) {
  return _a(e, ...t);
}
function Dv(e, t, n) {
  const r = Object.assign(Object.assign({}, Ov()), { [t]: n });
  return new $r("auth", "Firebase", r).create(t, { appName: e.name });
}
function _a(e, ...t) {
  if (typeof e != "string") {
    const n = t[0],
      r = [...t.slice(1)];
    return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
  }
  return Hf.create(e, ...t);
}
function P(e, t, ...n) {
  if (!e) throw _a(t, ...n);
}
function qe(e) {
  const t = "INTERNAL ASSERTION FAILED: " + e;
  throw (Ei(t), new Error(t));
}
function it(e, t) {
  e || qe(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ju = new Map();
function Je(e) {
  it(e instanceof Function, "Expected a class definition");
  let t = Ju.get(e);
  return t
    ? (it(t instanceof e, "Instance stored in cache mismatched with class"), t)
    : ((t = new e()), Ju.set(e, t), t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Av(e, t) {
  const n = zf(e, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      o = n.getOptions();
    if (qi(o, t ?? {})) return i;
    rt(i, "already-initialized");
  }
  return n.initialize({ options: t });
}
function Lv(e, t) {
  const n = (t == null ? void 0 : t.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(Je);
  t != null && t.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(
      r,
      t == null ? void 0 : t.popupRedirectResolver
    );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function yl() {
  var e;
  return (
    (typeof self < "u" &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.href)) ||
    ""
  );
}
function xv() {
  return Xu() === "http:" || Xu() === "https:";
}
function Xu() {
  var e;
  return (
    (typeof self < "u" &&
      ((e = self.location) === null || e === void 0 ? void 0 : e.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Mv() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (xv() || fg() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function Uv() {
  if (typeof navigator > "u") return null;
  const e = navigator;
  return (e.languages && e.languages[0]) || e.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Br {
  constructor(t, n) {
    (this.shortDelay = t),
      (this.longDelay = n),
      it(n > t, "Short delay should be less than long delay!"),
      (this.isMobile = dg() || hg());
  }
  get() {
    return Mv()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function wa(e, t) {
  it(e.emulator, "Emulator should always be set here");
  const { url: n } = e.emulator;
  return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vf {
  static initialize(t, n, r) {
    (this.fetchImpl = t),
      n && (this.headersImpl = n),
      r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    qe(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    qe(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    qe(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zv = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Fv = new Br(3e4, 6e4);
function $v(e, t) {
  return e.tenantId && !t.tenantId
    ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
    : t;
}
async function So(e, t, n, r, i = {}) {
  return Wf(e, i, async () => {
    let o = {},
      s = {};
    r && (t === "GET" ? (s = r) : (o = { body: JSON.stringify(r) }));
    const l = jr(Object.assign({ key: e.config.apiKey }, s)).slice(1),
      a = await e._getAdditionalHeaders();
    return (
      (a["Content-Type"] = "application/json"),
      e.languageCode && (a["X-Firebase-Locale"] = e.languageCode),
      Vf.fetch()(
        bf(e, e.config.apiHost, n, l),
        Object.assign(
          { method: t, headers: a, referrerPolicy: "no-referrer" },
          o
        )
      )
    );
  });
}
async function Wf(e, t, n) {
  e._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, zv), t);
  try {
    const i = new Bv(e),
      o = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const s = await o.json();
    if ("needConfirmation" in s)
      throw ui(e, "account-exists-with-different-credential", s);
    if (o.ok && !("errorMessage" in s)) return s;
    {
      const l = o.ok ? s.errorMessage : s.error.message,
        [a, u] = l.split(" : ");
      if (a === "FEDERATED_USER_ID_ALREADY_LINKED")
        throw ui(e, "credential-already-in-use", s);
      if (a === "EMAIL_EXISTS") throw ui(e, "email-already-in-use", s);
      if (a === "USER_DISABLED") throw ui(e, "user-disabled", s);
      const h = r[a] || a.toLowerCase().replace(/[_\s]+/g, "-");
      if (u) throw Dv(e, h, u);
      rt(e, h);
    }
  } catch (i) {
    if (i instanceof Mt) throw i;
    rt(e, "network-request-failed", { message: String(i) });
  }
}
async function jv(e, t, n, r, i = {}) {
  const o = await So(e, t, n, r, i);
  return (
    "mfaPendingCredential" in o &&
      rt(e, "multi-factor-auth-required", { _serverResponse: o }),
    o
  );
}
function bf(e, t, n, r) {
  const i = `${t}${n}?${r}`;
  return e.config.emulator ? wa(e.config, i) : `${e.config.apiScheme}://${i}`;
}
class Bv {
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(
          () => r(We(this.auth, "network-request-failed")),
          Fv.get()
        );
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function ui(e, t, n) {
  const r = { appName: e.name };
  n.email && (r.email = n.email),
    n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = We(e, t, r);
  return (i.custoimdata._tokenResponse = n), i;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Hv(e, t) {
  return So(e, "POST", "/v1/accounts:delete", t);
}
async function Vv(e, t) {
  return So(e, "POST", "/v1/accounts:lookup", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function cr(e) {
  if (e)
    try {
      const t = new Date(Number(e));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function Wv(e, t = !1) {
  const n = sn(e),
    r = await n.getIdToken(t),
    i = Sa(r);
  P(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
  const o = typeof i.firebase == "object" ? i.firebase : void 0,
    s = o == null ? void 0 : o.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: cr(ms(i.auth_time)),
    issuedAtTime: cr(ms(i.iat)),
    expirationTime: cr(ms(i.exp)),
    signInProvider: s || null,
    signInSecondFactor: (o == null ? void 0 : o.sign_in_second_factor) || null,
  };
}
function ms(e) {
  return Number(e) * 1e3;
}
function Sa(e) {
  const [t, n, r] = e.split(".");
  if (t === void 0 || n === void 0 || r === void 0)
    return Ei("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = Af(n);
    return i
      ? JSON.parse(i)
      : (Ei("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return (
      Ei(
        "Caught error parsing JWT payload as JSON",
        i == null ? void 0 : i.toString()
      ),
      null
    );
  }
}
function bv(e) {
  const t = Sa(e);
  return (
    P(t, "internal-error"),
    P(typeof t.exp < "u", "internal-error"),
    P(typeof t.iat < "u", "internal-error"),
    Number(t.exp) - Number(t.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ar(e, t, n = !1) {
  if (n) return t;
  try {
    return await t;
  } catch (r) {
    throw (
      (r instanceof Mt &&
        Kv(r) &&
        e.auth.currentUser === e &&
        (await e.auth.signOut()),
      r)
    );
  }
}
function Kv({ code: e }) {
  return e === "auth/user-disabled" || e === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gv {
  constructor(t) {
    (this.user = t),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(t) {
    var n;
    if (t) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i =
        ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0
          ? n
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, i);
    }
  }
  schedule(t = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(t);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (t) {
      (t == null ? void 0 : t.code) === "auth/network-request-failed" &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kf {
  constructor(t, n) {
    (this.createdAt = t), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = cr(this.lastLoginAt)),
      (this.creationTime = cr(this.createdAt));
  }
  _copy(t) {
    (this.createdAt = t.createdAt),
      (this.lastLoginAt = t.lastLoginAt),
      this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Xi(e) {
  var t;
  const n = e.auth,
    r = await e.getIdToken(),
    i = await Ar(e, Vv(n, { idToken: r }));
  P(i == null ? void 0 : i.users.length, n, "internal-error");
  const o = i.users[0];
  e._notifyReloadListener(o);
  const s =
      !((t = o.providerUserInfo) === null || t === void 0) && t.length
        ? qv(o.providerUserInfo)
        : [],
    l = Yv(e.providerData, s),
    a = e.isAnonymous,
    u = !(e.email && o.passwordHash) && !(l != null && l.length),
    h = a ? u : !1,
    p = {
      uid: o.localId,
      displayName: o.displayName || null,
      photoURL: o.photoUrl || null,
      email: o.email || null,
      emailVerified: o.emailVerified || !1,
      phoneNumber: o.phoneNumber || null,
      tenantId: o.tenantId || null,
      providerData: l,
      metadata: new Kf(o.createdAt, o.lastLoginAt),
      isAnonymous: h,
    };
  Object.assign(e, p);
}
async function Qv(e) {
  const t = sn(e);
  await Xi(t),
    await t.auth._persistUserIfCurrent(t),
    t.auth._notifyListenersIfCurrent(t);
}
function Yv(e, t) {
  return [
    ...e.filter((r) => !t.some((i) => i.providerId === r.providerId)),
    ...t,
  ];
}
function qv(e) {
  return e.map((t) => {
    var { providerId: n } = t,
      r = ya(t, ["providerId"]);
    return {
      providerId: n,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Jv(e, t) {
  const n = await Wf(e, {}, async () => {
    const r = jr({ grant_type: "refresh_token", refresh_token: t }).slice(1),
      { tokenApiHost: i, apiKey: o } = e.config,
      s = bf(e, i, "/v1/token", `key=${o}`),
      l = await e._getAdditionalHeaders();
    return (
      (l["Content-Type"] = "application/x-www-form-urlencoded"),
      Vf.fetch()(s, { method: "POST", headers: l, body: r })
    );
  });
  return {
    accessToken: n.access_token,
    expiresIn: n.expires_in,
    refreshToken: n.refresh_token,
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Lr {
  constructor() {
    (this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    P(t.idToken, "internal-error"),
      P(typeof t.idToken < "u", "internal-error"),
      P(typeof t.refreshToken < "u", "internal-error");
    const n =
      "expiresIn" in t && typeof t.expiresIn < "u"
        ? Number(t.expiresIn)
        : bv(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, n);
  }
  async getToken(t, n = !1) {
    return (
      P(!this.accessToken || this.refreshToken, t, "user-token-expired"),
      !n && this.accessToken && !this.isExpired
        ? this.accessToken
        : this.refreshToken
        ? (await this.refresh(t, this.refreshToken), this.accessToken)
        : null
    );
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, n) {
    const { accessToken: r, refreshToken: i, expiresIn: o } = await Jv(t, n);
    this.updateTokensAndExpiration(r, i, Number(o));
  }
  updateTokensAndExpiration(t, n, r) {
    (this.refreshToken = n || null),
      (this.accessToken = t || null),
      (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(t, n) {
    const { refreshToken: r, accessToken: i, expirationTime: o } = n,
      s = new Lr();
    return (
      r &&
        (P(typeof r == "string", "internal-error", { appName: t }),
        (s.refreshToken = r)),
      i &&
        (P(typeof i == "string", "internal-error", { appName: t }),
        (s.accessToken = i)),
      o &&
        (P(typeof o == "number", "internal-error", { appName: t }),
        (s.expirationTime = o)),
      s
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(t) {
    (this.accessToken = t.accessToken),
      (this.refreshToken = t.refreshToken),
      (this.expirationTime = t.expirationTime);
  }
  _clone() {
    return Object.assign(new Lr(), this.toJSON());
  }
  _performRefresh() {
    return qe("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function lt(e, t) {
  P(typeof e == "string" || typeof e > "u", "internal-error", { appName: t });
}
class Yt {
  constructor(t) {
    var { uid: n, auth: r, stsTokenManager: i } = t,
      o = ya(t, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new Gv(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = o.displayName || null),
      (this.email = o.email || null),
      (this.emailVerified = o.emailVerified || !1),
      (this.phoneNumber = o.phoneNumber || null),
      (this.photoURL = o.photoURL || null),
      (this.isAnonymous = o.isAnonymous || !1),
      (this.tenantId = o.tenantId || null),
      (this.providerData = o.providerData ? [...o.providerData] : []),
      (this.metadata = new Kf(o.createdAt || void 0, o.lastLoginAt || void 0));
  }
  async getIdToken(t) {
    const n = await Ar(this, this.stsTokenManager.getToken(this.auth, t));
    return (
      P(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(t) {
    return Wv(this, t);
  }
  reload() {
    return Qv(this);
  }
  _assign(t) {
    this !== t &&
      (P(this.uid === t.uid, this.auth, "internal-error"),
      (this.displayName = t.displayName),
      (this.photoURL = t.photoURL),
      (this.email = t.email),
      (this.emailVerified = t.emailVerified),
      (this.phoneNumber = t.phoneNumber),
      (this.isAnonymous = t.isAnonymous),
      (this.tenantId = t.tenantId),
      (this.providerData = t.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(t.metadata),
      this.stsTokenManager._assign(t.stsTokenManager));
  }
  _clone(t) {
    const n = new Yt(
      Object.assign(Object.assign({}, this), {
        auth: t,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(t) {
    P(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = t),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null));
  }
  _notifyReloadListener(t) {
    this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(t, n = !1) {
    let r = !1;
    t.idToken &&
      t.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(t), (r = !0)),
      n && (await Xi(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    const t = await this.getIdToken();
    return (
      await Ar(this, Hv(this.auth, { idToken: t })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((t) => Object.assign({}, t)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(t, n) {
    var r, i, o, s, l, a, u, h;
    const p = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      m = (i = n.email) !== null && i !== void 0 ? i : void 0,
      _ = (o = n.phoneNumber) !== null && o !== void 0 ? o : void 0,
      w = (s = n.photoURL) !== null && s !== void 0 ? s : void 0,
      k = (l = n.tenantId) !== null && l !== void 0 ? l : void 0,
      D = (a = n._redirectEventId) !== null && a !== void 0 ? a : void 0,
      d = (u = n.createdAt) !== null && u !== void 0 ? u : void 0,
      c = (h = n.lastLoginAt) !== null && h !== void 0 ? h : void 0,
      {
        uid: f,
        emailVerified: g,
        isAnonymous: v,
        providerData: S,
        stsTokenManager: E,
      } = n;
    P(f && E, t, "internal-error");
    const C = Lr.fromJSON(this.name, E);
    P(typeof f == "string", t, "internal-error"),
      lt(p, t.name),
      lt(m, t.name),
      P(typeof g == "boolean", t, "internal-error"),
      P(typeof v == "boolean", t, "internal-error"),
      lt(_, t.name),
      lt(w, t.name),
      lt(k, t.name),
      lt(D, t.name),
      lt(d, t.name),
      lt(c, t.name);
    const x = new Yt({
      uid: f,
      auth: t,
      email: m,
      emailVerified: g,
      displayName: p,
      isAnonymous: v,
      photoURL: w,
      phoneNumber: _,
      tenantId: k,
      stsTokenManager: C,
      createdAt: d,
      lastLoginAt: c,
    });
    return (
      S &&
        Array.isArray(S) &&
        (x.providerData = S.map((N) => Object.assign({}, N))),
      D && (x._redirectEventId = D),
      x
    );
  }
  static async _fromIdTokenResponse(t, n, r = !1) {
    const i = new Lr();
    i.updateFromServerResponse(n);
    const o = new Yt({
      uid: n.localId,
      auth: t,
      stsTokenManager: i,
      isAnonymous: r,
    });
    return await Xi(o), o;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gf {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(t, n) {
    this.storage[t] = n;
  }
  async _get(t) {
    const n = this.storage[t];
    return n === void 0 ? null : n;
  }
  async _remove(t) {
    delete this.storage[t];
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
Gf.type = "NONE";
const Zu = Gf;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ki(e, t, n) {
  return `firebase:${e}:${t}:${n}`;
}
class Rn {
  constructor(t, n, r) {
    (this.persistence = t), (this.auth = n), (this.userKey = r);
    const { config: i, name: o } = this.auth;
    (this.fullUserKey = ki(this.userKey, i.apiKey, o)),
      (this.fullPersistenceKey = ki("persistence", i.apiKey, o)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    return t ? Yt._fromJSON(this.auth, t) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(t) {
    if (this.persistence === t) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = t), n))
      return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, n, r = "authUser") {
    if (!n.length) return new Rn(Je(Zu), t, r);
    const i = (
      await Promise.all(
        n.map(async (u) => {
          if (await u._isAvailable()) return u;
        })
      )
    ).filter((u) => u);
    let o = i[0] || Je(Zu);
    const s = ki(r, t.config.apiKey, t.name);
    let l = null;
    for (const u of n)
      try {
        const h = await u._get(s);
        if (h) {
          const p = Yt._fromJSON(t, h);
          u !== o && (l = p), (o = u);
          break;
        }
      } catch {}
    const a = i.filter((u) => u._shouldAllowMigration);
    return !o._shouldAllowMigration || !a.length
      ? new Rn(o, t, r)
      : ((o = a[0]),
        l && (await o._set(s, l.toJSON())),
        await Promise.all(
          n.map(async (u) => {
            if (u !== o)
              try {
                await u._remove(s);
              } catch {}
          })
        ),
        new Rn(o, t, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ec(e) {
  const t = e.toLowerCase();
  if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/"))
    return "Opera";
  if (qf(t)) return "IEMobile";
  if (t.includes("msie") || t.includes("trident/")) return "IE";
  if (t.includes("edge/")) return "Edge";
  if (Qf(t)) return "Firefox";
  if (t.includes("silk/")) return "Silk";
  if (Xf(t)) return "Blackberry";
  if (Zf(t)) return "Webos";
  if (Ea(t)) return "Safari";
  if ((t.includes("chrome/") || Yf(t)) && !t.includes("edge/")) return "Chrome";
  if (Jf(t)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = e.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function Qf(e = ae()) {
  return /firefox\//i.test(e);
}
function Ea(e = ae()) {
  const t = e.toLowerCase();
  return (
    t.includes("safari/") &&
    !t.includes("chrome/") &&
    !t.includes("crios/") &&
    !t.includes("android")
  );
}
function Yf(e = ae()) {
  return /crios\//i.test(e);
}
function qf(e = ae()) {
  return /iemobile/i.test(e);
}
function Jf(e = ae()) {
  return /android/i.test(e);
}
function Xf(e = ae()) {
  return /blackberry/i.test(e);
}
function Zf(e = ae()) {
  return /webos/i.test(e);
}
function Eo(e = ae()) {
  return (
    /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
  );
}
function Xv(e = ae()) {
  var t;
  return (
    Eo(e) &&
    !!(!((t = window.navigator) === null || t === void 0) && t.standalone)
  );
}
function Zv() {
  return pg() && document.documentMode === 10;
}
function eh(e = ae()) {
  return Eo(e) || Jf(e) || Zf(e) || Xf(e) || /windows phone/i.test(e) || qf(e);
}
function ey() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function th(e, t = []) {
  let n;
  switch (e) {
    case "Browser":
      n = ec(ae());
      break;
    case "Worker":
      n = `${ec(ae())}-${e}`;
      break;
    default:
      n = e;
  }
  const r = t.length ? t.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${wo}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ty {
  constructor(t) {
    (this.auth = t), (this.queue = []);
  }
  pushCallback(t, n) {
    const r = (o) =>
      new Promise((s, l) => {
        try {
          const a = t(o);
          s(a);
        } catch (a) {
          l(a);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const n = [];
    try {
      for (const r of this.queue) await r(t), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: r == null ? void 0 : r.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ny {
  constructor(t, n, r) {
    (this.app = t),
      (this.heartbeatServiceProvider = n),
      (this.config = r),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new tc(this)),
      (this.idTokenSubscription = new tc(this)),
      (this.beforeStateQueue = new ty(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = Hf),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = t.name),
      (this.clientVersion = r.sdkClientVersion);
  }
  _initializeWithPersistence(t, n) {
    return (
      n && (this._popupRedirectResolver = Je(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Rn.create(this, t)), !this._deleted)
        ) {
          if (
            !((r = this._popupRedirectResolver) === null || r === void 0) &&
            r._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid =
              ((i = this.currentUser) === null || i === void 0
                ? void 0
                : i.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const t = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !t)) {
      if (this.currentUser && t && this.currentUser.uid === t.uid) {
        this._currentUser._assign(t), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(t, !0);
    }
  }
  async initializeCurrentUser(t) {
    var n;
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      o = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const s =
          (n = this.redirectUser) === null || n === void 0
            ? void 0
            : n._redirectEventId,
        l = i == null ? void 0 : i._redirectEventId,
        a = await this.tryRedirectSignIn(t);
      (!s || s === l) && a != null && a.user && ((i = a.user), (o = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (o)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (s) {
          (i = r),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(s)
            );
        }
      return i
        ? this.reloadAndSetCurrentUserOrClear(i)
        : this.directlySetCurrentUser(null);
    }
    return (
      P(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(t) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(t) {
    try {
      await Xi(t);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== "auth/network-request-failed")
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = Uv();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    const n = t ? sn(t) : null;
    return (
      n &&
        P(
          n.auth.config.apiKey === this.config.apiKey,
          this,
          "invalid-user-token"
        ),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(t, n = !1) {
    if (!this._deleted)
      return (
        t && P(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
        n || (await this.beforeStateQueue.runMiddleware(t)),
        this.queue(async () => {
          await this.directlySetCurrentUser(t), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return (
      await this.beforeStateQueue.runMiddleware(null),
      (this.redirectPersistenceManager || this._popupRedirectResolver) &&
        (await this._setRedirectUser(null)),
      this._updateCurrentUser(null, !0)
    );
  }
  setPersistence(t) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(Je(t));
    });
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(t) {
    this._errorFactory = new $r("auth", "Firebase", t());
  }
  onAuthStateChanged(t, n, r) {
    return this.registerStateListener(this.authStateSubscription, t, n, r);
  }
  beforeAuthStateChanged(t, n) {
    return this.beforeStateQueue.pushCallback(t, n);
  }
  onIdTokenChanged(t, n, r) {
    return this.registerStateListener(this.idTokenSubscription, t, n, r);
  }
  toJSON() {
    var t;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON(),
    };
  }
  async _setRedirectUser(t, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return t === null ? r.removeCurrentUser() : r.setCurrentUser(t);
  }
  async getOrInitRedirectPersistenceManager(t) {
    if (!this.redirectPersistenceManager) {
      const n = (t && Je(t)) || this._popupRedirectResolver;
      P(n, this, "argument-error"),
        (this.redirectPersistenceManager = await Rn.create(
          this,
          [Je(n._redirectPersistence)],
          "redirectUser"
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(t) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0
        ? void 0
        : n._redirectEventId) === t
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0
            ? void 0
            : r._redirectEventId) === t
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(t) {
    if (t === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(t));
  }
  _notifyListenersIfCurrent(t) {
    t === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var t, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !==
        null && n !== void 0
        ? n
        : null;
    this.lastNotifiedUid !== r &&
      ((this.lastNotifiedUid = r),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(t, n, r, i) {
    if (this._deleted) return () => {};
    const o = typeof n == "function" ? n : n.next.bind(n),
      s = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    return (
      P(s, this, "internal-error"),
      s.then(() => o(this.currentUser)),
      typeof n == "function" ? t.addObserver(n, r, i) : t.addObserver(n)
    );
  }
  async directlySetCurrentUser(t) {
    this.currentUser &&
      this.currentUser !== t &&
      this._currentUser._stopProactiveRefresh(),
      t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
      (this.currentUser = t),
      t
        ? await this.assertedPersistence.setCurrentUser(t)
        : await this.assertedPersistence.removeCurrentUser();
  }
  queue(t) {
    return (this.operations = this.operations.then(t, t)), this.operations;
  }
  get assertedPersistence() {
    return (
      P(this.persistenceManager, this, "internal-error"),
      this.persistenceManager
    );
  }
  _logFramework(t) {
    !t ||
      this.frameworks.includes(t) ||
      (this.frameworks.push(t),
      this.frameworks.sort(),
      (this.clientVersion = th(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var t;
    const n = { ["X-Client-Version"]: this.clientVersion };
    this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
    const r = await ((t = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || t === void 0
      ? void 0
      : t.getHeartbeatsHeader());
    return r && (n["X-Firebase-Client"] = r), n;
  }
}
function ka(e) {
  return sn(e);
}
class tc {
  constructor(t) {
    (this.auth = t),
      (this.observer = null),
      (this.addObserver = Sg((n) => (this.observer = n)));
  }
  get next() {
    return (
      P(this.observer, this.auth, "internal-error"),
      this.observer.next.bind(this.observer)
    );
  }
}
function ry(e, t, n) {
  const r = ka(e);
  P(r._canInitEmulator, r, "emulator-config-failed"),
    P(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
  const i = !!(n != null && n.disableWarnings),
    o = nh(t),
    { host: s, port: l } = iy(t),
    a = l === null ? "" : `:${l}`;
  (r.config.emulator = { url: `${o}//${s}${a}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: s,
      port: l,
      protocol: o.replace(":", ""),
      options: Object.freeze({ disableWarnings: i }),
    })),
    i || oy();
}
function nh(e) {
  const t = e.indexOf(":");
  return t < 0 ? "" : e.substr(0, t + 1);
}
function iy(e) {
  const t = nh(e),
    n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
  if (!n) return { host: "", port: null };
  const r = n[2].split("@").pop() || "",
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const o = i[1];
    return { host: o, port: nc(r.substr(o.length + 1)) };
  } else {
    const [o, s] = r.split(":");
    return { host: o, port: nc(s) };
  }
}
function nc(e) {
  if (!e) return null;
  const t = Number(e);
  return isNaN(t) ? null : t;
}
function oy() {
  function e() {
    const t = document.createElement("p"),
      n = t.style;
    (t.innerText =
      "Running in emulator mode. Do not use with production credentials."),
      (n.position = "fixed"),
      (n.width = "100%"),
      (n.backgroundColor = "#ffffff"),
      (n.border = ".1em solid #000000"),
      (n.color = "#b50000"),
      (n.bottom = "0px"),
      (n.left = "0px"),
      (n.margin = "0px"),
      (n.zIndex = "10000"),
      (n.textAlign = "center"),
      t.classList.add("firebase-emulator-warning"),
      document.body.appendChild(t);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading"
        ? window.addEventListener("DOMContentLoaded", e)
        : e());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rh {
  constructor(t, n) {
    (this.providerId = t), (this.signInMethod = n);
  }
  toJSON() {
    return qe("not implemented");
  }
  _getIdTokenResponse(t) {
    return qe("not implemented");
  }
  _linkToIdToken(t, n) {
    return qe("not implemented");
  }
  _getReauthenticationResolver(t) {
    return qe("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Nn(e, t) {
  return jv(e, "POST", "/v1/accounts:signInWithIdp", $v(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const sy = "http://localhost";
class nn extends rh {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(t) {
    const n = new nn(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (n.idToken = t.idToken),
          t.accessToken && (n.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (n.nonce = t.nonce),
          t.pendingToken && (n.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
        ? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
        : rt("argument-error"),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(t) {
    const n = typeof t == "string" ? JSON.parse(t) : t,
      { providerId: r, signInMethod: i } = n,
      o = ya(n, ["providerId", "signInMethod"]);
    if (!r || !i) return null;
    const s = new nn(r, i);
    return (
      (s.idToken = o.idToken || void 0),
      (s.accessToken = o.accessToken || void 0),
      (s.secret = o.secret),
      (s.nonce = o.nonce),
      (s.pendingToken = o.pendingToken || null),
      s
    );
  }
  _getIdTokenResponse(t) {
    const n = this.buildRequest();
    return Nn(t, n);
  }
  _linkToIdToken(t, n) {
    const r = this.buildRequest();
    return (r.idToken = n), Nn(t, r);
  }
  _getReauthenticationResolver(t) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), Nn(t, n);
  }
  buildRequest() {
    const t = { requestUri: sy, returnSecureToken: !0 };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (t.postBody = jr(n));
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ih {
  constructor(t) {
    (this.providerId = t),
      (this.defaultLanguageCode = null),
      (this.customParameters = {});
  }
  setDefaultLanguage(t) {
    this.defaultLanguageCode = t;
  }
  setCustomParameters(t) {
    return (this.customParameters = t), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hr extends ih {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(t) {
    return this.scopes.includes(t) || this.scopes.push(t), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ft extends Hr {
  constructor() {
    super("facebook.com");
  }
  static credential(t) {
    return nn._fromParams({
      providerId: ft.PROVIDER_ID,
      signInMethod: ft.FACEBOOK_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return ft.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return ft.credentialFromTaggedObject(t.custoimdata || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return ft.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
ft.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
ft.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ht extends Hr {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(t, n) {
    return nn._fromParams({
      providerId: ht.PROVIDER_ID,
      signInMethod: ht.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: n,
    });
  }
  static credentialFromResult(t) {
    return ht.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return ht.credentialFromTaggedObject(t.custoimdata || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = t;
    if (!n && !r) return null;
    try {
      return ht.credential(n, r);
    } catch {
      return null;
    }
  }
}
ht.GOOGLE_SIGN_IN_METHOD = "google.com";
ht.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pt extends Hr {
  constructor() {
    super("github.com");
  }
  static credential(t) {
    return nn._fromParams({
      providerId: pt.PROVIDER_ID,
      signInMethod: pt.GITHUB_SIGN_IN_METHOD,
      accessToken: t,
    });
  }
  static credentialFromResult(t) {
    return pt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return pt.credentialFromTaggedObject(t.custoimdata || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return pt.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
pt.GITHUB_SIGN_IN_METHOD = "github.com";
pt.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mt extends Hr {
  constructor() {
    super("twitter.com");
  }
  static credential(t, n) {
    return nn._fromParams({
      providerId: mt.PROVIDER_ID,
      signInMethod: mt.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(t) {
    return mt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return mt.credentialFromTaggedObject(t.custoimdata || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = t;
    if (!n || !r) return null;
    try {
      return mt.credential(n, r);
    } catch {
      return null;
    }
  }
}
mt.TWITTER_SIGN_IN_METHOD = "twitter.com";
mt.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fn {
  constructor(t) {
    (this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType);
  }
  static async _fromIdTokenResponse(t, n, r, i = !1) {
    const o = await Yt._fromIdTokenResponse(t, r, i),
      s = rc(r);
    return new Fn({
      user: o,
      providerId: s,
      _tokenResponse: r,
      operationType: n,
    });
  }
  static async _forOperation(t, n, r) {
    await t._updateTokensIfNecessary(r, !0);
    const i = rc(r);
    return new Fn({
      user: t,
      providerId: i,
      _tokenResponse: r,
      operationType: n,
    });
  }
}
function rc(e) {
  return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zi extends Mt {
  constructor(t, n, r, i) {
    var o;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, Zi.prototype),
      (this.custoimdata = {
        appName: t.name,
        tenantId: (o = t.tenantId) !== null && o !== void 0 ? o : void 0,
        _serverResponse: n.custoimdata._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(t, n, r, i) {
    return new Zi(t, n, r, i);
  }
}
function oh(e, t, n, r) {
  return (
    t === "reauthenticate"
      ? n._getReauthenticationResolver(e)
      : n._getIdTokenResponse(e)
  ).catch((o) => {
    throw o.code === "auth/multi-factor-auth-required"
      ? Zi._fromErrorAndOperation(e, o, t, r)
      : o;
  });
}
async function ly(e, t, n = !1) {
  const r = await Ar(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
  return Fn._forOperation(e, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ay(e, t, n = !1) {
  const { auth: r } = e,
    i = "reauthenticate";
  try {
    const o = await Ar(e, oh(r, i, t, e), n);
    P(o.idToken, r, "internal-error");
    const s = Sa(o.idToken);
    P(s, r, "internal-error");
    const { sub: l } = s;
    return P(e.uid === l, r, "user-mismatch"), Fn._forOperation(e, i, o);
  } catch (o) {
    throw (
      ((o == null ? void 0 : o.code) === "auth/user-not-found" &&
        rt(r, "user-mismatch"),
      o)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function uy(e, t, n = !1) {
  const r = "signIn",
    i = await oh(e, r, t),
    o = await Fn._fromIdTokenResponse(e, r, i);
  return n || (await e._updateCurrentUser(o.user)), o;
}
function cy(e, t, n, r) {
  return sn(e).onIdTokenChanged(t, n, r);
}
function dy(e, t, n) {
  return sn(e).beforeAuthStateChanged(t, n);
}
function fy(e, t, n, r) {
  return sn(e).onAuthStateChanged(t, n, r);
}
const eo = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sh {
  constructor(t, n) {
    (this.storageRetriever = t), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(eo, "1"),
          this.storage.removeItem(eo),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(t, n) {
    return this.storage.setItem(t, JSON.stringify(n)), Promise.resolve();
  }
  _get(t) {
    const n = this.storage.getItem(t);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(t) {
    return this.storage.removeItem(t), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hy() {
  const e = ae();
  return Ea(e) || Eo(e);
}
const py = 1e3,
  my = 10;
class lh extends sh {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (t, n) => this.onStorageEvent(t, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = hy() && ey()),
      (this.fallbackToPolling = eh()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(t) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        i = this.localCache[n];
      r !== i && t(n, i, r);
    }
  }
  onStorageEvent(t, n = !1) {
    if (!t.key) {
      this.forAllChangedKeys((s, l, a) => {
        this.notifyListeners(s, a);
      });
      return;
    }
    const r = t.key;
    if (
      (n ? this.detachListener() : this.stopPolling(),
      this.safariLocalStorageNotSynced)
    ) {
      const s = this.storage.getItem(r);
      if (t.newValue !== s)
        t.newValue !== null
          ? this.storage.setItem(r, t.newValue)
          : this.storage.removeItem(r);
      else if (this.localCache[r] === t.newValue && !n) return;
    }
    const i = () => {
        const s = this.storage.getItem(r);
        (!n && this.localCache[r] === s) || this.notifyListeners(r, s);
      },
      o = this.storage.getItem(r);
    Zv() && o !== t.newValue && t.newValue !== t.oldValue
      ? setTimeout(i, my)
      : i();
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((t, n, r) => {
          this.onStorageEvent(
            new StorageEvent("storage", { key: t, oldValue: n, newValue: r }),
            !0
          );
        });
      }, py));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[t] ||
        ((this.listeners[t] = new Set()),
        (this.localCache[t] = this.storage.getItem(t))),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling());
  }
  async _set(t, n) {
    await super._set(t, n), (this.localCache[t] = JSON.stringify(n));
  }
  async _get(t) {
    const n = await super._get(t);
    return (this.localCache[t] = JSON.stringify(n)), n;
  }
  async _remove(t) {
    await super._remove(t), delete this.localCache[t];
  }
}
lh.type = "LOCAL";
const gy = lh;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ah extends sh {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
ah.type = "SESSION";
const uh = ah;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vy(e) {
  return Promise.all(
    e.map(async (t) => {
      try {
        return { fulfilled: !0, value: await t };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ko {
  constructor(t) {
    (this.eventTarget = t),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(t) {
    const n = this.receivers.find((i) => i.isListeningto(t));
    if (n) return n;
    const r = new ko(t);
    return this.receivers.push(r), r;
  }
  isListeningto(t) {
    return this.eventTarget === t;
  }
  async handleEvent(t) {
    const n = t,
      { eventId: r, eventType: i, data: o } = n.data,
      s = this.handlersMap[i];
    if (!(s != null && s.size)) return;
    n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i });
    const l = Array.from(s).map(async (u) => u(n.origin, o)),
      a = await vy(l);
    n.ports[0].postMessage({
      status: "done",
      eventId: r,
      eventType: i,
      response: a,
    });
  }
  _subscribe(t, n) {
    Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[t] || (this.handlersMap[t] = new Set()),
      this.handlersMap[t].add(n);
  }
  _unsubscribe(t, n) {
    this.handlersMap[t] && n && this.handlersMap[t].delete(n),
      (!n || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
ko.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ia(e = "", t = 10) {
  let n = "";
  for (let r = 0; r < t; r++) n += Math.floor(Math.random() * 10);
  return e + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yy {
  constructor(t) {
    (this.target = t), (this.handlers = new Set());
  }
  removeMessageHandler(t) {
    t.messageChannel &&
      (t.messageChannel.port1.removeEventListener("message", t.onMessage),
      t.messageChannel.port1.close()),
      this.handlers.delete(t);
  }
  async _send(t, n, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i) throw new Error("connection_unavailable");
    let o, s;
    return new Promise((l, a) => {
      const u = Ia("", 20);
      i.port1.start();
      const h = setTimeout(() => {
        a(new Error("unsupported_event"));
      }, r);
      (s = {
        messageChannel: i,
        onMessage(p) {
          const m = p;
          if (m.data.eventId === u)
            switch (m.data.status) {
              case "ack":
                clearTimeout(h),
                  (o = setTimeout(() => {
                    a(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(o), l(m.data.response);
                break;
              default:
                clearTimeout(h),
                  clearTimeout(o),
                  a(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(s),
        i.port1.addEventListener("message", s.onMessage),
        this.target.postMessage({ eventType: t, eventId: u, data: n }, [
          i.port2,
        ]);
    }).finally(() => {
      s && this.removeMessageHandler(s);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function be() {
  return window;
}
function _y(e) {
  be().location.href = e;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ch() {
  return (
    typeof be().WorkerGlobalScope < "u" &&
    typeof be().importScripts == "function"
  );
}
async function wy() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function Sy() {
  var e;
  return (
    ((e = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    e === void 0
      ? void 0
      : e.controller) || null
  );
}
function Ey() {
  return ch() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dh = "firebaseLocalStorageDb",
  ky = 1,
  to = "firebaseLocalStorage",
  fh = "fbase_key";
class Vr {
  constructor(t) {
    this.request = t;
  }
  toPromise() {
    return new Promise((t, n) => {
      this.request.addEventListener("success", () => {
        t(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          n(this.request.error);
        });
    });
  }
}
function Io(e, t) {
  return e.transaction([to], t ? "readwrite" : "readonly").objectStore(to);
}
function Iy() {
  const e = indexedDB.deleteDatabase(dh);
  return new Vr(e).toPromise();
}
function _l() {
  const e = indexedDB.open(dh, ky);
  return new Promise((t, n) => {
    e.addEventListener("error", () => {
      n(e.error);
    }),
      e.addEventListener("upgradeneeded", () => {
        const r = e.result;
        try {
          r.createObjectStore(to, { keyPath: fh });
        } catch (i) {
          n(i);
        }
      }),
      e.addEventListener("success", async () => {
        const r = e.result;
        r.objectStoreNames.contains(to)
          ? t(r)
          : (r.close(), await Iy(), t(await _l()));
      });
  });
}
async function ic(e, t, n) {
  const r = Io(e, !0).put({ [fh]: t, value: n });
  return new Vr(r).toPromise();
}
async function Ty(e, t) {
  const n = Io(e, !1).get(t),
    r = await new Vr(n).toPromise();
  return r === void 0 ? null : r.value;
}
function oc(e, t) {
  const n = Io(e, !0).delete(t);
  return new Vr(n).toPromise();
}
const Cy = 800,
  Py = 3;
class hh {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await _l()), this.db);
  }
  async _withRetries(t) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await t(r);
      } catch (r) {
        if (n++ > Py) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return ch() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = ko._getInstance(Ey())),
      this.receiver._subscribe("keyChanged", async (t, n) => ({
        keyProcessed: (await this._poll()).includes(n.key),
      })),
      this.receiver._subscribe("ping", async (t, n) => ["keyChanged"]);
  }
  async initializeSender() {
    var t, n;
    if (((this.activeServiceWorker = await wy()), !this.activeServiceWorker))
      return;
    this.sender = new yy(this.activeServiceWorker);
    const r = await this.sender._send("ping", {}, 800);
    r &&
      !((t = r[0]) === null || t === void 0) &&
      t.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(t) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        Sy() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          "keyChanged",
          { key: t },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const t = await _l();
      return await ic(t, eo, "1"), await oc(t, eo), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(t) {
    this.pendingWrites++;
    try {
      await t();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(t, n) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((r) => ic(r, t, n)),
        (this.localCache[t] = n),
        this.notifyServiceWorker(t)
      )
    );
  }
  async _get(t) {
    const n = await this._withRetries((r) => Ty(r, t));
    return (this.localCache[t] = n), n;
  }
  async _remove(t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((n) => oc(n, t)),
        delete this.localCache[t],
        this.notifyServiceWorker(t)
      )
    );
  }
  async _poll() {
    const t = await this._withRetries((i) => {
      const o = Io(i, !1).getAll();
      return new Vr(o).toPromise();
    });
    if (!t) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    for (const { fbase_key: i, value: o } of t)
      r.add(i),
        JSON.stringify(this.localCache[i]) !== JSON.stringify(o) &&
          (this.notifyListeners(i, o), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] &&
        !r.has(i) &&
        (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n);
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), Cy));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] &&
      (this.listeners[t].delete(n),
      this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
hh.type = "LOCAL";
const Ry = hh;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ny() {
  var e, t;
  return (t =
    (e = document.getElementsByTagName("head")) === null || e === void 0
      ? void 0
      : e[0]) !== null && t !== void 0
    ? t
    : document;
}
function Oy(e) {
  return new Promise((t, n) => {
    const r = document.createElement("script");
    r.setAttribute("src", e),
      (r.onload = t),
      (r.onerror = (i) => {
        const o = We("internal-error");
        (o.custoimdata = i), n(o);
      }),
      (r.type = "text/javascript"),
      (r.charset = "UTF-8"),
      Ny().appendChild(r);
  });
}
function Dy(e) {
  return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
new Br(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ay(e, t) {
  return t
    ? Je(t)
    : (P(e._popupRedirectResolver, e, "argument-error"),
      e._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ta extends rh {
  constructor(t) {
    super("custom", "custom"), (this.params = t);
  }
  _getIdTokenResponse(t) {
    return Nn(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, n) {
    return Nn(t, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(t) {
    return Nn(t, this._buildIdpRequest());
  }
  _buildIdpRequest(t) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return t && (n.idToken = t), n;
  }
}
function Ly(e) {
  return uy(e.auth, new Ta(e), e.bypassAuthState);
}
function xy(e) {
  const { auth: t, user: n } = e;
  return P(n, t, "internal-error"), ay(n, new Ta(e), e.bypassAuthState);
}
async function My(e) {
  const { auth: t, user: n } = e;
  return P(n, t, "internal-error"), ly(n, new Ta(e), e.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ph {
  constructor(t, n, r, i, o = !1) {
    (this.auth = t),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = o),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (t, n) => {
      this.pendingPromise = { resolve: t, reject: n };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(t) {
    const {
      urlResponse: n,
      sessionId: r,
      postBody: i,
      tenantId: o,
      error: s,
      type: l,
    } = t;
    if (s) {
      this.reject(s);
      return;
    }
    const a = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: o || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(l)(a));
    } catch (u) {
      this.reject(u);
    }
  }
  onError(t) {
    this.reject(t);
  }
  getIdpTask(t) {
    switch (t) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return Ly;
      case "linkViaPopup":
      case "linkViaRedirect":
        return My;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return xy;
      default:
        rt(this.auth, "internal-error");
    }
  }
  resolve(t) {
    it(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(t),
      this.unregisterAndCleanUp();
  }
  reject(t) {
    it(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(t),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Uy = new Br(2e3, 1e4);
class wn extends ph {
  constructor(t, n, r, i, o) {
    super(t, n, i, o),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      wn.currentPopupAction && wn.currentPopupAction.cancel(),
      (wn.currentPopupAction = this);
  }
  async executeNotNull() {
    const t = await this.execute();
    return P(t, this.auth, "internal-error"), t;
  }
  async onExecution() {
    it(this.filter.length === 1, "Popup operations only handle one event");
    const t = Ia();
    (this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      t
    )),
      (this.authWindow.associatedEvent = t),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(We(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var t;
    return (
      ((t = this.authWindow) === null || t === void 0
        ? void 0
        : t.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(We(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (wn.currentPopupAction = null);
  }
  pollUserCancellation() {
    const t = () => {
      var n, r;
      if (
        !(
          (r =
            (n = this.authWindow) === null || n === void 0
              ? void 0
              : n.window) === null || r === void 0
        ) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null),
            this.reject(We(this.auth, "popup-closed-by-user"));
        }, 2e3);
        return;
      }
      this.pollId = window.setTimeout(t, Uy.get());
    };
    t();
  }
}
wn.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zy = "pendingRedirect",
  Ii = new Map();
class Fy extends ph {
  constructor(t, n, r = !1) {
    super(
      t,
      ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"],
      n,
      void 0,
      r
    ),
      (this.eventId = null);
  }
  async execute() {
    let t = Ii.get(this.auth._key());
    if (!t) {
      try {
        const r = (await $y(this.resolver, this.auth))
          ? await super.execute()
          : null;
        t = () => Promise.resolve(r);
      } catch (n) {
        t = () => Promise.reject(n);
      }
      Ii.set(this.auth._key(), t);
    }
    return (
      this.bypassAuthState ||
        Ii.set(this.auth._key(), () => Promise.resolve(null)),
      t()
    );
  }
  async onAuthEvent(t) {
    if (t.type === "signInViaRedirect") return super.onAuthEvent(t);
    if (t.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (t.eventId) {
      const n = await this.auth._redirectUserForId(t.eventId);
      if (n) return (this.user = n), super.onAuthEvent(t);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function $y(e, t) {
  const n = Hy(t),
    r = By(e);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === "true";
  return await r._remove(n), i;
}
function jy(e, t) {
  Ii.set(e._key(), t);
}
function By(e) {
  return Je(e._redirectPersistence);
}
function Hy(e) {
  return ki(zy, e.config.apiKey, e.name);
}
async function Vy(e, t, n = !1) {
  const r = ka(e),
    i = Ay(r, t),
    s = await new Fy(r, i, n).execute();
  return (
    s &&
      !n &&
      (delete s.user._redirectEventId,
      await r._persistUserIfCurrent(s.user),
      await r._setRedirectUser(null, t)),
    s
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Wy = 10 * 60 * 1e3;
class by {
  constructor(t) {
    (this.auth = t),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(t) {
    this.consumers.add(t),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, t) &&
        (this.sendToConsumer(this.queuedRedirectEvent, t),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(t) {
    this.consumers.delete(t);
  }
  onEvent(t) {
    if (this.hasEventBeenHandled(t)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(t, r) &&
          ((n = !0), this.sendToConsumer(t, r), this.saveEventToCache(t));
      }),
      this.hasHandledPotentialRedirect ||
        !Ky(t) ||
        ((this.hasHandledPotentialRedirect = !0),
        n || ((this.queuedRedirectEvent = t), (n = !0))),
      n
    );
  }
  sendToConsumer(t, n) {
    var r;
    if (t.error && !mh(t)) {
      const i =
        ((r = t.error.code) === null || r === void 0
          ? void 0
          : r.split("auth/")[1]) || "internal-error";
      n.onError(We(this.auth, i));
    } else n.onAuthEvent(t);
  }
  isEventForConsumer(t, n) {
    const r = n.eventId === null || (!!t.eventId && t.eventId === n.eventId);
    return n.filter.includes(t.type) && r;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= Wy &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(sc(t))
    );
  }
  saveEventToCache(t) {
    this.cachedEventUids.add(sc(t)), (this.lastProcessedEventTime = Date.now());
  }
}
function sc(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId]
    .filter((t) => t)
    .join("-");
}
function mh({ type: e, error: t }) {
  return (
    e === "unknown" && (t == null ? void 0 : t.code) === "auth/no-auth-event"
  );
}
function Ky(e) {
  switch (e.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return mh(e);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Gy(e, t = {}) {
  return So(e, "GET", "/v1/projects", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qy = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  Yy = /^https?/;
async function qy(e) {
  if (e.config.emulator) return;
  const { authorizedDomains: t } = await Gy(e);
  for (const n of t)
    try {
      if (Jy(n)) return;
    } catch {}
  rt(e, "unauthorized-domain");
}
function Jy(e) {
  const t = yl(),
    { protocol: n, hostname: r } = new URL(t);
  if (e.startsWith("chrome-extension://")) {
    const s = new URL(e);
    return s.hostname === "" && r === ""
      ? n === "chrome-extension:" &&
          e.replace("chrome-extension://", "") ===
            t.replace("chrome-extension://", "")
      : n === "chrome-extension:" && s.hostname === r;
  }
  if (!Yy.test(n)) return !1;
  if (Qy.test(e)) return r === e;
  const i = e.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Xy = new Br(3e4, 6e4);
function lc() {
  const e = be().___jsl;
  if (e != null && e.H) {
    for (const t of Object.keys(e.H))
      if (
        ((e.H[t].r = e.H[t].r || []),
        (e.H[t].L = e.H[t].L || []),
        (e.H[t].r = [...e.H[t].L]),
        e.CP)
      )
        for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
  }
}
function Zy(e) {
  return new Promise((t, n) => {
    var r, i, o;
    function s() {
      lc(),
        gapi.load("gapi.iframes", {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            lc(), n(We(e, "network-request-failed"));
          },
          timeout: Xy.get(),
        });
    }
    if (
      !(
        (i = (r = be().gapi) === null || r === void 0 ? void 0 : r.iframes) ===
          null || i === void 0
      ) &&
      i.Iframe
    )
      t(gapi.iframes.getContext());
    else if (!((o = be().gapi) === null || o === void 0) && o.load) s();
    else {
      const l = Dy("iframefcb");
      return (
        (be()[l] = () => {
          gapi.load ? s() : n(We(e, "network-request-failed"));
        }),
        Oy(`https://apis.google.com/js/api.js?onload=${l}`).catch((a) => n(a))
      );
    }
  }).catch((t) => {
    throw ((Ti = null), t);
  });
}
let Ti = null;
function e0(e) {
  return (Ti = Ti || Zy(e)), Ti;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const t0 = new Br(5e3, 15e3),
  n0 = "__/auth/iframe",
  r0 = "emulator/auth/iframe",
  i0 = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  o0 = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function s0(e) {
  const t = e.config;
  P(t.authDomain, e, "auth-domain-config-required");
  const n = t.emulator ? wa(t, r0) : `https://${e.config.authDomain}/${n0}`,
    r = { apiKey: t.apiKey, appName: e.name, v: wo },
    i = o0.get(e.config.apiHost);
  i && (r.eid = i);
  const o = e._getFrameworks();
  return o.length && (r.fw = o.join(",")), `${n}?${jr(r).slice(1)}`;
}
async function l0(e) {
  const t = await e0(e),
    n = be().gapi;
  return (
    P(n, e, "internal-error"),
    t.open(
      {
        where: document.body,
        url: s0(e),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: i0,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, o) => {
          await r.restyle({ setHideOnLeave: !1 });
          const s = We(e, "network-request-failed"),
            l = be().setTimeout(() => {
              o(s);
            }, t0.get());
          function a() {
            be().clearTimeout(l), i(r);
          }
          r.ping(a).then(a, () => {
            o(s);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const a0 = {
    location: "yes",
    resizable: "yes",
    statusbar: "yes",
    toolbar: "no",
  },
  u0 = 500,
  c0 = 600,
  d0 = "_blank",
  f0 = "http://localhost";
class ac {
  constructor(t) {
    (this.window = t), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function h0(e, t, n, r = u0, i = c0) {
  const o = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    s = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let l = "";
  const a = Object.assign(Object.assign({}, a0), {
      width: r.toString(),
      height: i.toString(),
      top: o,
      left: s,
    }),
    u = ae().toLowerCase();
  n && (l = Yf(u) ? d0 : n), Qf(u) && ((t = t || f0), (a.scrollbars = "yes"));
  const h = Object.entries(a).reduce((m, [_, w]) => `${m}${_}=${w},`, "");
  if (Xv(u) && l !== "_self") return p0(t || "", l), new ac(null);
  const p = window.open(t || "", l, h);
  P(p, e, "popup-blocked");
  try {
    p.focus();
  } catch {}
  return new ac(p);
}
function p0(e, t) {
  const n = document.createElement("a");
  (n.href = e), (n.target = t);
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent(
    "click",
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const m0 = "__/auth/handler",
  g0 = "emulator/auth/handler";
function uc(e, t, n, r, i, o) {
  P(e.config.authDomain, e, "auth-domain-config-required"),
    P(e.config.apiKey, e, "invalid-api-key");
  const s = {
    apiKey: e.config.apiKey,
    appName: e.name,
    authType: n,
    redirectUrl: r,
    v: wo,
    eventId: i,
  };
  if (t instanceof ih) {
    t.setDefaultLanguage(e.languageCode),
      (s.providerId = t.providerId || ""),
      wg(t.getCustomParameters()) ||
        (s.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [a, u] of Object.entries(o || {})) s[a] = u;
  }
  if (t instanceof Hr) {
    const a = t.getScopes().filter((u) => u !== "");
    a.length > 0 && (s.scopes = a.join(","));
  }
  e.tenantId && (s.tid = e.tenantId);
  const l = s;
  for (const a of Object.keys(l)) l[a] === void 0 && delete l[a];
  return `${v0(e)}?${jr(l).slice(1)}`;
}
function v0({ config: e }) {
  return e.emulator ? wa(e, g0) : `https://${e.authDomain}/${m0}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gs = "webStorageSupport";
class y0 {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = uh),
      (this._completeRedirectFn = Vy),
      (this._overrideRedirectResult = jy);
  }
  async _openPopup(t, n, r, i) {
    var o;
    it(
      (o = this.eventManagers[t._key()]) === null || o === void 0
        ? void 0
        : o.manager,
      "_initialize() not called before _openPopup()"
    );
    const s = uc(t, n, r, yl(), i);
    return h0(t, s, Ia());
  }
  async _openRedirect(t, n, r, i) {
    return (
      await this._originValidation(t),
      _y(uc(t, n, r, yl(), i)),
      new Promise(() => {})
    );
  }
  _initialize(t) {
    const n = t._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: o } = this.eventManagers[n];
      return i
        ? Promise.resolve(i)
        : (it(o, "If manager is not set, promise should be"), o);
    }
    const r = this.initAndGetManager(t);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(t) {
    const n = await l0(t),
      r = new by(t);
    return (
      n.register(
        "authEvent",
        (i) => (
          P(i == null ? void 0 : i.authEvent, t, "invalid-auth-event"),
          { status: r.onEvent(i.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[t._key()] = { manager: r }),
      (this.iframes[t._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(t, n) {
    this.iframes[t._key()].send(
      gs,
      { type: gs },
      (i) => {
        var o;
        const s =
          (o = i == null ? void 0 : i[0]) === null || o === void 0
            ? void 0
            : o[gs];
        s !== void 0 && n(!!s), rt(t, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(t) {
    const n = t._key();
    return (
      this.originValidationPromises[n] ||
        (this.originValidationPromises[n] = qy(t)),
      this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return eh() || Ea() || Eo();
  }
}
const _0 = y0;
var cc = "@firebase/auth",
  dc = "0.22.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class w0 {
  constructor(t) {
    (this.auth = t), (this.internalListeners = new Map());
  }
  getUid() {
    var t;
    return (
      this.assertAuthConfigured(),
      ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) ||
        null
    );
  }
  async getToken(t) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(t) }
        : null
    );
  }
  addAuthTokenListener(t) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      t((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(t, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(t);
    n && (this.internalListeners.delete(t), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    P(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function S0(e) {
  switch (e) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return;
  }
}
function E0(e) {
  Or(
    new zn(
      "auth",
      (t, { options: n }) => {
        const r = t.getProvider("app").getImmediate(),
          i = t.getProvider("heartbeat"),
          { apiKey: o, authDomain: s } = r.options;
        return ((l, a) => {
          P(o && !o.includes(":"), "invalid-api-key", { appName: l.name }),
            P(!(s != null && s.includes(":")), "argument-error", {
              appName: l.name,
            });
          const u = {
              apiKey: o,
              authDomain: s,
              clientPlatform: e,
              apiHost: "identitytoolkit.googleapis.com",
              tokenApiHost: "securetoken.googleapis.com",
              apiScheme: "https",
              sdkClientVersion: th(e),
            },
            h = new ny(l, a, u);
          return Lv(h, n), h;
        })(r, i);
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((t, n, r) => {
        t.getProvider("auth-internal").initialize();
      })
  ),
    Or(
      new zn(
        "auth-internal",
        (t) => {
          const n = ka(t.getProvider("auth").getImmediate());
          return ((r) => new w0(r))(n);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    Pn(cc, dc, S0(e)),
    Pn(cc, dc, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const k0 = 5 * 60,
  I0 = Lf("authIdTokenMaxAge") || k0;
let fc = null;
const T0 = (e) => async (t) => {
  const n = t && (await t.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > I0) return;
  const i = n == null ? void 0 : n.token;
  fc !== i &&
    ((fc = i),
    await fetch(e, {
      method: i ? "POST" : "DELETE",
      headers: i ? { Authorization: `Bearer ${i}` } : {},
    }));
};
function gh(e = wv()) {
  const t = zf(e, "auth");
  if (t.isInitialized()) return t.getImmediate();
  const n = Av(e, { popupRedirectResolver: _0, persistence: [Ry, gy, uh] }),
    r = Lf("authTokenSyncURL");
  if (r) {
    const o = T0(r);
    dy(n, o, () => o(n.currentUser)), cy(n, (s) => o(s));
  }
  const i = ag("auth");
  return i && ry(n, `http://${i}`), n;
}
E0("Browser");
function hc(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function dr() {
  return (
    (dr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    dr.apply(this, arguments)
  );
}
function pc(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function wl(e, t) {
  return (
    (wl = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    wl(e, t)
  );
}
function C0(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    wl(e, t);
}
var no = {},
  P0 = {
    get exports() {
      return no;
    },
    set exports(e) {
      no = e;
    },
  },
  U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ee = typeof Symbol == "function" && Symbol.for,
  Ca = ee ? Symbol.for("react.element") : 60103,
  Pa = ee ? Symbol.for("react.portal") : 60106,
  To = ee ? Symbol.for("react.fragment") : 60107,
  Co = ee ? Symbol.for("react.strict_mode") : 60108,
  Po = ee ? Symbol.for("react.profiler") : 60114,
  Ro = ee ? Symbol.for("react.provider") : 60109,
  No = ee ? Symbol.for("react.context") : 60110,
  Ra = ee ? Symbol.for("react.async_mode") : 60111,
  Oo = ee ? Symbol.for("react.concurrent_mode") : 60111,
  Do = ee ? Symbol.for("react.forward_ref") : 60112,
  Ao = ee ? Symbol.for("react.suspense") : 60113,
  R0 = ee ? Symbol.for("react.suspense_list") : 60120,
  Lo = ee ? Symbol.for("react.memo") : 60115,
  xo = ee ? Symbol.for("react.lazy") : 60116,
  N0 = ee ? Symbol.for("react.block") : 60121,
  O0 = ee ? Symbol.for("react.fundamental") : 60117,
  D0 = ee ? Symbol.for("react.responder") : 60118,
  A0 = ee ? Symbol.for("react.scope") : 60119;
function Te(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ca:
        switch (((e = e.type), e)) {
          case Ra:
          case Oo:
          case To:
          case Po:
          case Co:
          case Ao:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case No:
              case Do:
              case xo:
              case Lo:
              case Ro:
                return e;
              default:
                return t;
            }
        }
      case Pa:
        return t;
    }
  }
}
function vh(e) {
  return Te(e) === Oo;
}
U.AsyncMode = Ra;
U.ConcurrentMode = Oo;
U.ContextConsumer = No;
U.ContextProvider = Ro;
U.Element = Ca;
U.ForwardRef = Do;
U.Fragment = To;
U.Lazy = xo;
U.Memo = Lo;
U.Portal = Pa;
U.Profiler = Po;
U.StrictMode = Co;
U.Suspense = Ao;
U.isAsyncMode = function (e) {
  return vh(e) || Te(e) === Ra;
};
U.isConcurrentMode = vh;
U.isContextConsumer = function (e) {
  return Te(e) === No;
};
U.isContextProvider = function (e) {
  return Te(e) === Ro;
};
U.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ca;
};
U.isForwardRef = function (e) {
  return Te(e) === Do;
};
U.isFragment = function (e) {
  return Te(e) === To;
};
U.isLazy = function (e) {
  return Te(e) === xo;
};
U.isMemo = function (e) {
  return Te(e) === Lo;
};
U.isPortal = function (e) {
  return Te(e) === Pa;
};
U.isProfiler = function (e) {
  return Te(e) === Po;
};
U.isStrictMode = function (e) {
  return Te(e) === Co;
};
U.isSuspense = function (e) {
  return Te(e) === Ao;
};
U.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === To ||
    e === Oo ||
    e === Po ||
    e === Co ||
    e === Ao ||
    e === R0 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === xo ||
        e.$$typeof === Lo ||
        e.$$typeof === Ro ||
        e.$$typeof === No ||
        e.$$typeof === Do ||
        e.$$typeof === O0 ||
        e.$$typeof === D0 ||
        e.$$typeof === A0 ||
        e.$$typeof === N0))
  );
};
U.typeOf = Te;
(function (e) {
  e.exports = U;
})(P0);
var Na = no,
  L0 = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  x0 = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  M0 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  yh = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Oa = {};
Oa[Na.ForwardRef] = M0;
Oa[Na.Memo] = yh;
function mc(e) {
  return Na.isMemo(e) ? yh : Oa[e.$$typeof] || L0;
}
var U0 = Object.defineProperty,
  z0 = Object.getOwnPropertyNames,
  gc = Object.getOwnPropertySymbols,
  F0 = Object.getOwnPropertyDescriptor,
  $0 = Object.getPrototypeOf,
  vc = Object.prototype;
function _h(e, t, n) {
  if (typeof t != "string") {
    if (vc) {
      var r = $0(t);
      r && r !== vc && _h(e, r, n);
    }
    var i = z0(t);
    gc && (i = i.concat(gc(t)));
    for (var o = mc(e), s = mc(t), l = 0; l < i.length; ++l) {
      var a = i[l];
      if (!x0[a] && !(n && n[a]) && !(s && s[a]) && !(o && o[a])) {
        var u = F0(t, a);
        try {
          U0(e, a, u);
        } catch {}
      }
    }
  }
  return e;
}
var j0 = _h;
function B0(e, t) {
  if (!e) {
    var n = new Error("loadable: " + t);
    throw ((n.framesToPop = 1), (n.name = "Invariant Violation"), n);
  }
}
var H0 = _t.createContext(),
  V0 = { initialChunks: {} },
  yc = "PENDING",
  W0 = "RESOLVED",
  vs = "REJECTED";
function b0(e) {
  return typeof e == "function"
    ? { requireAsync: e, resolve: function () {}, chunkName: function () {} }
    : e;
}
var K0 = function (t) {
    var n = function (i) {
      return _t.createElement(H0.Consumer, null, function (o) {
        return _t.createElement(t, Object.assign({ __chunkExtractor: o }, i));
      });
    };
    return (
      t.displayName && (n.displayName = t.displayName + "WithChunkExtractor"), n
    );
  },
  G0 = function (t) {
    return t;
  };
function wh(e) {
  var t = e.defaultResolveComponent,
    n = t === void 0 ? G0 : t,
    r = e.render,
    i = e.onLoad;
  function o(l, a) {
    a === void 0 && (a = {});
    var u = b0(l),
      h = {};
    function p(d) {
      return a.cacheKey ? a.cacheKey(d) : u.resolve ? u.resolve(d) : "static";
    }
    function m(d, c, f) {
      var g = a.resolveComponent ? a.resolveComponent(d, c) : n(d);
      if (a.resolveComponent && !no.isValidElementType(g))
        throw new Error(
          "resolveComponent returned something that is not a React component!"
        );
      return j0(f, g, { preload: !0 }), g;
    }
    var _ = function (c) {
        var f = p(c),
          g = h[f];
        return (
          (!g || g.status === vs) &&
            ((g = u.requireAsync(c)),
            (g.status = yc),
            (h[f] = g),
            g.then(
              function () {
                g.status = W0;
              },
              function (v) {
                console.error(
                  "loadable-components: failed to asynchronously load component",
                  {
                    fileName: u.resolve(c),
                    chunkName: u.chunkName(c),
                    error: v && v.message,
                  }
                ),
                  (g.status = vs);
              }
            )),
          g
        );
      },
      w = (function (d) {
        C0(c, d),
          (c.getDerivedStateFromProps = function (v, S) {
            var E = p(v);
            return dr({}, S, {
              cacheKey: E,
              loading: S.loading || S.cacheKey !== E,
            });
          });
        function c(g) {
          var v;
          return (
            (v = d.call(this, g) || this),
            (v.state = {
              result: null,
              error: null,
              loading: !0,
              cacheKey: p(g),
            }),
            B0(
              !g.__chunkExtractor || u.requireSync,
              "SSR requires `@loadable/babel-plugin`, please install it"
            ),
            g.__chunkExtractor
              ? (a.ssr === !1 ||
                  (u.requireAsync(g).catch(function () {
                    return null;
                  }),
                  v.loadSync(),
                  g.__chunkExtractor.addChunk(u.chunkName(g))),
                pc(v))
              : (a.ssr !== !1 &&
                  ((u.isReady && u.isReady(g)) ||
                    (u.chunkName && V0.initialChunks[u.chunkName(g)])) &&
                  v.loadSync(),
                v)
          );
        }
        var f = c.prototype;
        return (
          (f.componentDidMount = function () {
            this.mounted = !0;
            var v = this.getCache();
            v && v.status === vs && this.setCache(),
              this.state.loading && this.loadAsync();
          }),
          (f.componentDidUpdate = function (v, S) {
            S.cacheKey !== this.state.cacheKey && this.loadAsync();
          }),
          (f.componentWillUnmount = function () {
            this.mounted = !1;
          }),
          (f.safeSetState = function (v, S) {
            this.mounted && this.setState(v, S);
          }),
          (f.getCacheKey = function () {
            return p(this.props);
          }),
          (f.getCache = function () {
            return h[this.getCacheKey()];
          }),
          (f.setCache = function (v) {
            v === void 0 && (v = void 0), (h[this.getCacheKey()] = v);
          }),
          (f.triggerOnLoad = function () {
            var v = this;
            i &&
              setTimeout(function () {
                i(v.state.result, v.props);
              });
          }),
          (f.loadSync = function () {
            if (this.state.loading)
              try {
                var v = u.requireSync(this.props),
                  S = m(v, this.props, D);
                (this.state.result = S), (this.state.loading = !1);
              } catch (E) {
                console.error(
                  "loadable-components: failed to synchronously load component, which expected to be available",
                  {
                    fileName: u.resolve(this.props),
                    chunkName: u.chunkName(this.props),
                    error: E && E.message,
                  }
                ),
                  (this.state.error = E);
              }
          }),
          (f.loadAsync = function () {
            var v = this,
              S = this.resolveAsync();
            return (
              S.then(function (E) {
                var C = m(E, v.props, D);
                v.safeSetState({ result: C, loading: !1 }, function () {
                  return v.triggerOnLoad();
                });
              }).catch(function (E) {
                return v.safeSetState({ error: E, loading: !1 });
              }),
              S
            );
          }),
          (f.resolveAsync = function () {
            var v = this.props;
            v.__chunkExtractor, v.forwardedRef;
            var S = hc(v, ["__chunkExtractor", "forwardedRef"]);
            return _(S);
          }),
          (f.render = function () {
            var v = this.props,
              S = v.forwardedRef,
              E = v.fallback;
            v.__chunkExtractor;
            var C = hc(v, ["forwardedRef", "fallback", "__chunkExtractor"]),
              x = this.state,
              N = x.error,
              ye = x.loading,
              Ut = x.result;
            if (a.suspense) {
              var zt = this.getCache() || this.loadAsync();
              if (zt.status === yc) throw this.loadAsync();
            }
            if (N) throw N;
            var Hn = E || a.fallback || null;
            return ye
              ? Hn
              : r({
                  fallback: Hn,
                  result: Ut,
                  options: a,
                  props: dr({}, C, { ref: S }),
                });
          }),
          c
        );
      })(_t.Component),
      k = K0(w),
      D = _t.forwardRef(function (d, c) {
        return _t.createElement(k, Object.assign({ forwardedRef: c }, d));
      });
    return (
      (D.displayName = "Loadable"),
      (D.preload = function (d) {
        D.load(d);
      }),
      (D.load = function (d) {
        return _(d);
      }),
      D
    );
  }
  function s(l, a) {
    return o(l, dr({}, a, { suspense: !0 }));
  }
  return { loadable: o, lazy: s };
}
function Q0(e) {
  return e.__esModule ? e.default : e.default || e;
}
var Sh = wh({
    defaultResolveComponent: Q0,
    render: function (t) {
      var n = t.result,
        r = t.props;
      return _t.createElement(n, r);
    },
  }),
  Y0 = Sh.loadable,
  q0 = Sh.lazy,
  Eh = wh({
    onLoad: function (t, n) {
      t &&
        n.forwardedRef &&
        (typeof n.forwardedRef == "function"
          ? n.forwardedRef(t)
          : (n.forwardedRef.current = t));
    },
    render: function (t) {
      var n = t.result,
        r = t.props;
      return r.children ? r.children(n) : null;
    },
  }),
  J0 = Eh.loadable,
  X0 = Eh.lazy,
  Da = Y0;
Da.lib = J0;
var kh = q0;
kh.lib = X0;
var Z0 = "firebase",
  e_ = "9.19.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ Pn(Z0, e_, "app");
const t_ = {
    apiKey: "AIzaSyDPg9Z6-ZnPRFpT7I6iqHlssQPq1akiOmA",
    authDomain: "enft-c31a2.firebaseapp.com",
    projectId: "enft-c31a2",
    storageBucket: "enft-c31a2.appspot.com",
    messagingSenderId: "141135167159",
    appId: "1:141135167159:web:377cc3917fda663b39d732",
  },
  n_ = Ff(t_);
gh(n_);
const _c = Da(() => ma(() => import("./LoadingComp-3a2bc686.js"), [])),
  r_ = Da(() => ma(() => import("./LandingP-d4578e9e.js"), [])),
  i_ = kh(() => ma(() => import("./MarketP-22578f86.js"), []));
function o_() {
  let [e, t] = yt.useState(null);
  const [n, r] = yt.useState(!0),
    i = gh();
  return (
    fy(i, (o) => {
      t(o ? () => (e = !0) : () => (e = !1));
    }),
    yt.useEffect(() => {
      setTimeout(() => {
        r(!1);
      }, 3e3);
    }, []),
    Vt("div", {
      className: " w-full h-full ",
      children: e ? (n ? Vt(_c, {}) : Vt(i_, {})) : n ? Vt(_c, {}) : Vt(r_, {}),
    })
  );
}
ys.createRoot(document.getElementById("root")).render(
  Vt(_t.StrictMode, { children: Vt(o_, {}) })
);
export { l_ as F, a_ as a, _s as b, s_ as c, Vt as j, yt as r };
