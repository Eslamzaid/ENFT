var Ir = Object.defineProperty;
var _r = (e, t, r) =>
  t in e
    ? Ir(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var m = (e, t, r) => (_r(e, typeof t != "symbol" ? t + "" : t, r), r);
import { r as N, j as c, a as M, b as Or, F as Fr } from "./index-2b72a6ff.js";
const yt =
    "data:image/webp;base64,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",
  Er =
    "data:image/webp;base64,UklGRnwAAABXRUJQVlA4WAoAAAAQAAAAHQAAHQAAQUxQSCoAAAABHyAQSPbn2iuNiIgMRhqgoSSeUkQjEbti9xH9FxIk0h2CGbF8ysPRDABWUDggLAAAAPACAJ0BKh4AHgA+fTCSR6SjIaE36ACQD4lpAAC5/g0AAP76A07j///RdgAA",
  jr =
    "data:image/webp;base64,UklGRsYAAABXRUJQVlA4WAoAAAAQAAAAFwAAFwAAQUxQSHkAAAABV6CQjSQ4uJ/COizOYVxEBErx+MzAKJIkKc35RsJ9WFgJfFGAhbXAcyVggLUJ0zMcCiL6z8ht20jugd1n0mfgpzZw1jtbSCV1LIHqXCT+yOhcLkcdQCgZUqEF9hBnQHNpJoc5MHReUKVy0apUQpV6oyXst7Lf8J8GAFZQOCAmAAAA0AIAnQEqGAAYAD6RRJ1KpaOioagIALASCWkAAD2joAD++E0AAAA=",
  At = "/assets/NavShades-5ea8d287.png",
  zr = () => {
    let [e, t] = N.useState(!0);
    const [r, s] = N.useState(window.innerWidth);
    return (
      N.useEffect(() => {
        function n() {
          s((l) => window.innerWidth);
        }
        return (
          window.addEventListener("resize", n),
          r > 725 ? t(() => (e = !0)) : t(() => (e = !1)),
          () => window.removeEventListener("resize", n)
        );
      }, []),
      c("div", {
        className: " w-screen flex justify-center xl:px-16",
        children:
          r < 725
            ? M("nav", {
                className: "font-semibold text-white w-screen",
                children: [
                  c("img", {
                    src: At,
                    alt: "Shades for design",
                    className: " absolute",
                  }),
                  M("div", {
                    className: "w-screen",
                    children: [
                      c("img", {
                        alt: "NavBar",
                        className:
                          " absolute w-10 top-8 right-5 cursor-pointer",
                        onClick: () => t(() => !e),
                        src: e ? jr : Er,
                      }),
                      M("ul", {
                        className: e ? "  pt-4 inline-block" : " mb-2 pt-4 ",
                        children: [
                          c("li", {
                            children: c("img", {
                              src: yt,
                              className: " ml-4 cursor-pointer",
                              alt: "ENFT",
                            }),
                          }),
                          M("div", {
                            className: e
                              ? " border-b-2 absolute z-50 backdrop-blur-md child:ml-4  w-screen child:my-5 child:border-2 child:border-transparent child:cursor-pointer  child:p-4 child-hover:text-slate-200"
                              : " hidden",
                            children: [
                              c("li", {
                                className:
                                  " hover:border-b-2   text-left w-32 hover:border-b-white transition-all",
                                children: "Marketplace",
                              }),
                              c("li", {
                                className:
                                  " hover:border-b-2   text-left w-32 hover:border-b-white transition-all",
                                children: "Collection",
                              }),
                              c("li", {
                                className:
                                  " hover:border-b-2   text-left w-32 hover:border-b-white transition-all",
                                children: "Articles",
                              }),
                              c("li", {
                                className:
                                  " hover:border-b-2   text-left w-32 hover:border-b-white transition-all",
                                children: "Bid now",
                              }),
                              c("li", {
                                className:
                                  "bg-backColor w-fit rounded-full hover:bg-sky-400 hover:text-slate-400 transition-colors",
                                children: "Connect Wallet",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : M("nav", {
                className: " text-white  w-11/12 xl:w-[75rem] 2xl:w-11/12",
                children: [
                  c("img", {
                    src: At,
                    alt: "Shades for design",
                    className: " absolute",
                  }),
                  c("div", {
                    className: "mt-7",
                    children: M("ul", {
                      className: `flex justify-end items-center child:z-30  sm:m-3\r
                child:border-transparent child:border-2 child:transition-all\r
                sm:text-sm  child:cursor-pointer child:font-semibold \r
                 `,
                      children: [
                        c("li", {
                          className: "justify-self-start mr-auto",
                          children: c("img", { src: yt, alt: "ENFT" }),
                        }),
                        c("li", {
                          className: `sm:text-sm hover:text-slate-200 hover:border-2 hover:border-b-white\r
              sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] imd:mx-4 imd:text-lg lg:mx-6`,
                          children: "Marketplace",
                        }),
                        c("li", {
                          className: `sm:text-sm hover:border-2 hover:text-slate-200 hover:border-b-white\r
              sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] imd:mx-4 imd:text-lg lg:mx-6`,
                          children: "Collection",
                        }),
                        c("li", {
                          className: `sm:text-sm hover:border-2 hover:text-slate-200 hover:border-b-white\r
            sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] imd:mx-4 imd:text-lg lg:mx-6`,
                          children: "Articles",
                        }),
                        c("li", {
                          className: `sm:text-sm hover:border-2 hover:text-slate-200 hover:border-b-white\r
            sm:mx-[0.4rem] ssm:text-base ssm:mx-[0.4rem] imd:mx-4 imd:text-lg lg:mx-6`,
                          children: "Bid now",
                        }),
                        c("li", {
                          className:
                            " xl:p-3 lg:p-[5px] imd:ml-1 sm:p-[5.5px] ssm:text-base bg-backColor w-fit rounded-full hover:bg-sky-400 transition-colors",
                          children: "Connect Wallet",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
      })
    );
  };
var it = Ae(),
  b = (e) => ye(e, it),
  ot = Ae();
b.write = (e) => ye(e, ot);
var ze = Ae();
b.onStart = (e) => ye(e, ze);
var dt = Ae();
b.onFrame = (e) => ye(e, dt);
var ut = Ae();
b.onFinish = (e) => ye(e, ut);
var ee = [];
b.setTimeout = (e, t) => {
  let r = b.now() + t,
    s = () => {
      let l = ee.findIndex((a) => a.cancel == s);
      ~l && ee.splice(l, 1), (L -= ~l ? 1 : 0);
    },
    n = { time: r, handler: e, cancel: s };
  return ee.splice(Wt(r), 0, n), (L += 1), Zt(), n;
};
var Wt = (e) => ~(~ee.findIndex((t) => t.time > e) || ~ee.length);
b.cancel = (e) => {
  ze.delete(e), dt.delete(e), ut.delete(e), it.delete(e), ot.delete(e);
};
b.sync = (e) => {
  (Ze = !0), b.batchedUpdates(e), (Ze = !1);
};
b.throttle = (e) => {
  let t;
  function r() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function s(...n) {
    (t = n), b.onStart(r);
  }
  return (
    (s.handler = e),
    (s.cancel = () => {
      ze.delete(r), (t = null);
    }),
    s
  );
};
var ct = typeof window < "u" ? window.requestAnimationFrame : () => {};
b.use = (e) => (ct = e);
b.now = typeof performance < "u" ? () => performance.now() : Date.now;
b.batchedUpdates = (e) => e();
b.catch = console.error;
b.frameLoop = "always";
b.advance = () => {
  b.frameLoop !== "demand"
    ? console.warn(
        "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
      )
    : $t();
};
var q = -1,
  L = 0,
  Ze = !1;
function ye(e, t) {
  Ze ? (t.delete(e), e(0)) : (t.add(e), Zt());
}
function Zt() {
  q < 0 && ((q = 0), b.frameLoop !== "demand" && ct(Jt));
}
function Tr() {
  q = -1;
}
function Jt() {
  ~q && (ct(Jt), b.batchedUpdates($t));
}
function $t() {
  let e = q;
  q = b.now();
  let t = Wt(q);
  if ((t && (er(ee.splice(0, t), (r) => r.handler()), (L -= t)), !L)) {
    Tr();
    return;
  }
  ze.flush(),
    it.flush(e ? Math.min(64, q - e) : 16.667),
    dt.flush(),
    ot.flush(),
    ut.flush();
}
function Ae() {
  let e = new Set(),
    t = e;
  return {
    add(r) {
      (L += t == e && !e.has(r) ? 1 : 0), e.add(r);
    },
    delete(r) {
      return (L -= t == e && e.has(r) ? 1 : 0), e.delete(r);
    },
    flush(r) {
      t.size &&
        ((e = new Set()),
        (L -= t.size),
        er(t, (s) => s(r) && e.add(s)),
        (L += e.size),
        (t = e));
    },
  };
}
function er(e, t) {
  e.forEach((r) => {
    try {
      t(r);
    } catch (s) {
      b.catch(s);
    }
  });
}
var Qr = Object.defineProperty,
  Br = (e, t) => {
    for (var r in t) Qr(e, r, { get: t[r], enumerable: !0 });
  },
  B = {};
Br(B, {
  assign: () => Vr,
  colors: () => Y,
  createStringInterpolator: () => ht,
  skipAnimation: () => rr,
  to: () => tr,
  willAdvance: () => pt,
});
function Je() {}
var Rr = (e, t, r) =>
    Object.defineProperty(e, t, { value: r, writable: !0, configurable: !0 }),
  o = {
    arr: Array.isArray,
    obj: (e) => !!e && e.constructor.name === "Object",
    fun: (e) => typeof e == "function",
    str: (e) => typeof e == "string",
    num: (e) => typeof e == "number",
    und: (e) => e === void 0,
  };
function U(e, t) {
  if (o.arr(e)) {
    if (!o.arr(t) || e.length !== t.length) return !1;
    for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
    return !0;
  }
  return e === t;
}
var k = (e, t) => e.forEach(t);
function V(e, t, r) {
  if (o.arr(e)) {
    for (let s = 0; s < e.length; s++) t.call(r, e[s], `${s}`);
    return;
  }
  for (let s in e) e.hasOwnProperty(s) && t.call(r, e[s], s);
}
var _ = (e) => (o.und(e) ? [] : o.arr(e) ? e : [e]);
function de(e, t) {
  if (e.size) {
    let r = Array.from(e);
    e.clear(), k(r, t);
  }
}
var oe = (e, ...t) => de(e, (r) => r(...t)),
  mt = () =>
    typeof window > "u" ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  ht,
  tr,
  Y = null,
  rr = !1,
  pt = Je,
  Vr = (e) => {
    e.to && (tr = e.to),
      e.now && (b.now = e.now),
      e.colors !== void 0 && (Y = e.colors),
      e.skipAnimation != null && (rr = e.skipAnimation),
      e.createStringInterpolator && (ht = e.createStringInterpolator),
      e.requestAnimationFrame && b.use(e.requestAnimationFrame),
      e.batchedUpdates && (b.batchedUpdates = e.batchedUpdates),
      e.willAdvance && (pt = e.willAdvance),
      e.frameLoop && (b.frameLoop = e.frameLoop);
  },
  ue = new Set(),
  j = [],
  De = [],
  _e = 0,
  Te = {
    get idle() {
      return !ue.size && !j.length;
    },
    start(e) {
      _e > e.priority ? (ue.add(e), b.onStart(Gr)) : (sr(e), b($e));
    },
    advance: $e,
    sort(e) {
      if (_e) b.onFrame(() => Te.sort(e));
      else {
        let t = j.indexOf(e);
        ~t && (j.splice(t, 1), nr(e));
      }
    },
    clear() {
      (j = []), ue.clear();
    },
  };
function Gr() {
  ue.forEach(sr), ue.clear(), b($e);
}
function sr(e) {
  j.includes(e) || nr(e);
}
function nr(e) {
  j.splice(
    Ur(j, (t) => t.priority > e.priority),
    0,
    e
  );
}
function $e(e) {
  let t = De;
  for (let r = 0; r < j.length; r++) {
    let s = j[r];
    (_e = s.priority), s.idle || (pt(s), s.advance(e), s.idle || t.push(s));
  }
  return (_e = 0), (De = j), (De.length = 0), (j = t), j.length > 0;
}
function Ur(e, t) {
  let r = e.findIndex(t);
  return r < 0 ? e.length : r;
}
var Dr = (e, t, r) => Math.min(Math.max(r, e), t),
  qr = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199,
  },
  Q = "[-+]?\\d*\\.?\\d+",
  Oe = Q + "%";
function Qe(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var Lr = new RegExp("rgb" + Qe(Q, Q, Q)),
  Yr = new RegExp("rgba" + Qe(Q, Q, Q, Q)),
  Xr = new RegExp("hsl" + Qe(Q, Oe, Oe)),
  Kr = new RegExp("hsla" + Qe(Q, Oe, Oe, Q)),
  Hr = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  Wr = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  Zr = /^#([0-9a-fA-F]{6})$/,
  Jr = /^#([0-9a-fA-F]{8})$/;
function $r(e) {
  let t;
  return typeof e == "number"
    ? e >>> 0 === e && e >= 0 && e <= 4294967295
      ? e
      : null
    : (t = Zr.exec(e))
    ? parseInt(t[1] + "ff", 16) >>> 0
    : Y && Y[e] !== void 0
    ? Y[e]
    : (t = Lr.exec(e))
    ? (($(t[1]) << 24) | ($(t[2]) << 16) | ($(t[3]) << 8) | 255) >>> 0
    : (t = Yr.exec(e))
    ? (($(t[1]) << 24) | ($(t[2]) << 16) | ($(t[3]) << 8) | Pt(t[4])) >>> 0
    : (t = Hr.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
    : (t = Jr.exec(e))
    ? parseInt(t[1], 16) >>> 0
    : (t = Wr.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
    : (t = Xr.exec(e))
    ? (Nt(kt(t[1]), Pe(t[2]), Pe(t[3])) | 255) >>> 0
    : (t = Kr.exec(e))
    ? (Nt(kt(t[1]), Pe(t[2]), Pe(t[3])) | Pt(t[4])) >>> 0
    : null;
}
function qe(e, t, r) {
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
function Nt(e, t, r) {
  let s = r < 0.5 ? r * (1 + t) : r + t - r * t,
    n = 2 * r - s,
    l = qe(n, s, e + 1 / 3),
    a = qe(n, s, e),
    d = qe(n, s, e - 1 / 3);
  return (
    (Math.round(l * 255) << 24) |
    (Math.round(a * 255) << 16) |
    (Math.round(d * 255) << 8)
  );
}
function $(e) {
  let t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function kt(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function Pt(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Pe(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Mt(e) {
  let t = $r(e);
  if (t === null) return e;
  t = t || 0;
  let r = (t & 4278190080) >>> 24,
    s = (t & 16711680) >>> 16,
    n = (t & 65280) >>> 8,
    l = (t & 255) / 255;
  return `rgba(${r}, ${s}, ${n}, ${l})`;
}
var he = (e, t, r) => {
  if (o.fun(e)) return e;
  if (o.arr(e)) return he({ range: e, output: t, extrapolate: r });
  if (o.str(e.output[0])) return ht(e);
  let s = e,
    n = s.output,
    l = s.range || [0, 1],
    a = s.extrapolateLeft || s.extrapolate || "extend",
    d = s.extrapolateRight || s.extrapolate || "extend",
    i = s.easing || ((u) => u);
  return (u) => {
    let p = ts(u, l);
    return es(u, l[p], l[p + 1], n[p], n[p + 1], i, a, d, s.map);
  };
};
function es(e, t, r, s, n, l, a, d, i) {
  let u = i ? i(e) : e;
  if (u < t) {
    if (a === "identity") return u;
    a === "clamp" && (u = t);
  }
  if (u > r) {
    if (d === "identity") return u;
    d === "clamp" && (u = r);
  }
  return s === n
    ? s
    : t === r
    ? e <= t
      ? s
      : n
    : (t === -1 / 0
        ? (u = -u)
        : r === 1 / 0
        ? (u = u - t)
        : (u = (u - t) / (r - t)),
      (u = l(u)),
      s === -1 / 0
        ? (u = -u)
        : n === 1 / 0
        ? (u = u + s)
        : (u = u * (n - s) + s),
      u);
}
function ts(e, t) {
  for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
  return r - 1;
}
var rs =
    (e, t = "end") =>
    (r) => {
      r = t === "end" ? Math.min(r, 0.999) : Math.max(r, 0.001);
      let s = r * e,
        n = t === "end" ? Math.floor(s) : Math.ceil(s);
      return Dr(0, 1, n / e);
    },
  Fe = 1.70158,
  Me = Fe * 1.525,
  St = Fe + 1,
  Ct = (2 * Math.PI) / 3,
  It = (2 * Math.PI) / 4.5,
  Se = (e) =>
    e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  ss = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
    easeInOutQuad: (e) =>
      e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
    easeInOutCubic: (e) =>
      e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
    easeInOutQuart: (e) =>
      e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
    easeInOutQuint: (e) =>
      e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
    easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
    easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
    easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * e - 10)),
    easeOutExpo: (e) => (e === 1 ? 1 : 1 - Math.pow(2, -10 * e)),
    easeInOutExpo: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? Math.pow(2, 20 * e - 10) / 2
        : (2 - Math.pow(2, -20 * e + 10)) / 2,
    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    easeInOutCirc: (e) =>
      e < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
    easeInBack: (e) => St * e * e * e - Fe * e * e,
    easeOutBack: (e) => 1 + St * Math.pow(e - 1, 3) + Fe * Math.pow(e - 1, 2),
    easeInOutBack: (e) =>
      e < 0.5
        ? (Math.pow(2 * e, 2) * ((Me + 1) * 2 * e - Me)) / 2
        : (Math.pow(2 * e - 2, 2) * ((Me + 1) * (e * 2 - 2) + Me) + 2) / 2,
    easeInElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * Ct),
    easeOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * Ct) + 1,
    easeInOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * It)) / 2
        : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * It)) / 2 +
          1,
    easeInBounce: (e) => 1 - Se(1 - e),
    easeOutBounce: Se,
    easeInOutBounce: (e) =>
      e < 0.5 ? (1 - Se(1 - 2 * e)) / 2 : (1 + Se(2 * e - 1)) / 2,
    steps: rs,
  },
  re = Symbol.for("FluidValue.get"),
  K = Symbol.for("FluidValue.observers"),
  E = (e) => !!(e && e[re]),
  I = (e) => (e && e[re] ? e[re]() : e),
  _t = (e) => e[K] || null;
function ns(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function pe(e, t) {
  let r = e[K];
  r &&
    r.forEach((s) => {
      ns(s, t);
    });
}
var An,
  Nn,
  Ht,
  ar =
    ((Ht = class {
      constructor(e) {
        m(this, An);
        m(this, Nn);
        if (!e && !(e = this.get)) throw Error("Unknown getter");
        as(this, e);
      }
    }),
    (An = re),
    (Nn = K),
    Ht),
  as = (e, t) => lr(e, re, t);
function se(e, t) {
  if (e[re]) {
    let r = e[K];
    r || lr(e, K, (r = new Set())),
      r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t));
  }
  return t;
}
function fe(e, t) {
  let r = e[K];
  if (r && r.has(t)) {
    let s = r.size - 1;
    s ? r.delete(t) : (e[K] = null),
      e.observerRemoved && e.observerRemoved(s, t);
  }
}
var lr = (e, t, r) =>
    Object.defineProperty(e, t, { value: r, writable: !0, configurable: !0 }),
  Ce = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  ls =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  Ot = new RegExp(`(${Ce.source})(%|[a-z]+)`, "i"),
  is = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  Be = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  ir = (e) => {
    let [t, r] = os(e);
    if (!t || mt()) return e;
    let s = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(t);
    return s
      ? s.trim()
      : r && r.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(r) ||
        e
      : r && Be.test(r)
      ? ir(r)
      : r || e;
  },
  os = (e) => {
    let t = Be.exec(e);
    if (!t) return [,];
    let [, r, s] = t;
    return [r, s];
  },
  Le,
  ds = (e, t, r, s, n) =>
    `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(s)}, ${n})`,
  or = (e) => {
    Le ||
      (Le = Y
        ? new RegExp(`(${Object.keys(Y).join("|")})(?!\\w)`, "g")
        : /^\b$/);
    let t = e.output.map((n) =>
        I(n).replace(Be, ir).replace(ls, Mt).replace(Le, Mt)
      ),
      r = t.map((n) => n.match(Ce).map(Number)),
      s = r[0]
        .map((n, l) =>
          r.map((a) => {
            if (!(l in a))
              throw Error('The arity of each "output" value must be equal');
            return a[l];
          })
        )
        .map((n) => he({ ...e, output: n }));
    return (n) => {
      var d;
      let l =
          !Ot.test(t[0]) &&
          ((d = t.find((i) => Ot.test(i))) == null
            ? void 0
            : d.replace(Ce, "")),
        a = 0;
      return t[0].replace(Ce, () => `${s[a++](n)}${l || ""}`).replace(is, ds);
    };
  },
  ft = "react-spring: ",
  dr = (e) => {
    let t = e,
      r = !1;
    if (typeof t != "function")
      throw new TypeError(`${ft}once requires a function parameter`);
    return (...s) => {
      r || (t(...s), (r = !0));
    };
  },
  us = dr(console.warn);
function cs() {
  us(`${ft}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var ms = dr(console.warn);
function hs() {
  ms(
    `${ft}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function Re(e) {
  return (
    o.str(e) &&
    (e[0] == "#" || /\d/.test(e) || (!mt() && Be.test(e)) || e in (Y || {}))
  );
}
var gt = mt() ? N.useEffect : N.useLayoutEffect,
  ps = () => {
    let e = N.useRef(!1);
    return (
      gt(
        () => (
          (e.current = !0),
          () => {
            e.current = !1;
          }
        ),
        []
      ),
      e
    );
  };
function ur() {
  let e = N.useState()[1],
    t = ps();
  return () => {
    t.current && e(Math.random());
  };
}
function fs(e, t) {
  let [r] = N.useState(() => ({ inputs: t, result: e() })),
    s = N.useRef(),
    n = s.current,
    l = n;
  return (
    l
      ? (t && l.inputs && gs(t, l.inputs)) || (l = { inputs: t, result: e() })
      : (l = r),
    N.useEffect(() => {
      (s.current = l), n == r && (r.inputs = r.result = void 0);
    }, [l]),
    l.result
  );
}
function gs(e, t) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
var cr = (e) => N.useEffect(e, xs),
  xs = [];
function Ft(e) {
  let t = N.useRef();
  return (
    N.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
var ge = Symbol.for("Animated:node"),
  bs = (e) => !!e && e[ge] === e,
  R = (e) => e && e[ge],
  xt = (e, t) => Rr(e, ge, t),
  Ve = (e) => e && e[ge] && e[ge].getPayload(),
  mr = class {
    constructor() {
      m(this, "payload");
      xt(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  Ne = class extends mr {
    constructor(t) {
      super();
      m(this, "done", !0);
      m(this, "elapsedTime");
      m(this, "lastPosition");
      m(this, "lastVelocity");
      m(this, "v0");
      m(this, "durationProgress", 0);
      (this._value = t),
        o.num(this._value) && (this.lastPosition = this._value);
    }
    static create(t) {
      return new Ne(t);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(t, r) {
      return (
        o.num(t) &&
          ((this.lastPosition = t),
          r &&
            ((t = Math.round(t / r) * r),
            this.done && (this.lastPosition = t))),
        this._value === t ? !1 : ((this._value = t), !0)
      );
    }
    reset() {
      let { done: t } = this;
      (this.done = !1),
        o.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          t && (this.lastVelocity = null),
          (this.v0 = null));
    }
  },
  xe = class extends Ne {
    constructor(t) {
      super(0);
      m(this, "_string", null);
      m(this, "_toString");
      this._toString = he({ output: [t, t] });
    }
    static create(t) {
      return new xe(t);
    }
    getValue() {
      return this._string ?? (this._string = this._toString(this._value));
    }
    setValue(t) {
      if (o.str(t)) {
        if (t == this._string) return !1;
        (this._string = t), (this._value = 1);
      } else if (super.setValue(t)) this._string = null;
      else return !1;
      return !0;
    }
    reset(t) {
      t && (this._toString = he({ output: [this.getValue(), t] })),
        (this._value = 0),
        super.reset();
    }
  },
  Ee = { dependencies: null },
  Ge = class extends mr {
    constructor(e) {
      super(), (this.source = e), this.setValue(e);
    }
    getValue(e) {
      let t = {};
      return (
        V(this.source, (r, s) => {
          bs(r)
            ? (t[s] = r.getValue(e))
            : E(r)
            ? (t[s] = I(r))
            : e || (t[s] = r);
        }),
        t
      );
    }
    setValue(e) {
      (this.source = e), (this.payload = this._makePayload(e));
    }
    reset() {
      this.payload && k(this.payload, (e) => e.reset());
    }
    _makePayload(e) {
      if (e) {
        let t = new Set();
        return V(e, this._addToPayload, t), Array.from(t);
      }
    }
    _addToPayload(e) {
      Ee.dependencies && E(e) && Ee.dependencies.add(e);
      let t = Ve(e);
      t && k(t, (r) => this.add(r));
    }
  },
  hr = class extends Ge {
    constructor(t) {
      super(t);
    }
    static create(t) {
      return new hr(t);
    }
    getValue() {
      return this.source.map((t) => t.getValue());
    }
    setValue(t) {
      let r = this.getPayload();
      return t.length == r.length
        ? r.map((s, n) => s.setValue(t[n])).some(Boolean)
        : (super.setValue(t.map(vs)), !0);
    }
  };
function vs(e) {
  return (Re(e) ? xe : Ne).create(e);
}
function et(e) {
  let t = R(e);
  return t ? t.constructor : o.arr(e) ? hr : Re(e) ? xe : Ne;
}
var Et = (e, t) => {
    let r = !o.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return N.forwardRef((s, n) => {
      let l = N.useRef(null),
        a =
          r &&
          N.useCallback(
            (g) => {
              l.current = As(n, g);
            },
            [n]
          ),
        [d, i] = ys(s, t),
        u = ur(),
        p = () => {
          let g = l.current;
          (r && !g) ||
            ((g ? t.applyAnimatedValues(g, d.getValue(!0)) : !1) === !1 && u());
        },
        h = new ws(p, i),
        f = N.useRef();
      gt(
        () => (
          (f.current = h),
          k(i, (g) => se(g, h)),
          () => {
            f.current &&
              (k(f.current.deps, (g) => fe(g, f.current)),
              b.cancel(f.current.update));
          }
        )
      ),
        N.useEffect(p, []),
        cr(() => () => {
          let g = f.current;
          k(g.deps, (A) => fe(A, g));
        });
      let S = t.getComponentProps(d.getValue());
      return N.createElement(e, { ...S, ref: a });
    });
  },
  ws = class {
    constructor(e, t) {
      (this.update = e), (this.deps = t);
    }
    eventObserved(e) {
      e.type == "change" && b.write(this.update);
    }
  };
function ys(e, t) {
  let r = new Set();
  return (
    (Ee.dependencies = r),
    e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }),
    (e = new Ge(e)),
    (Ee.dependencies = null),
    [e, r]
  );
}
function As(e, t) {
  return e && (o.fun(e) ? e(t) : (e.current = t)), t;
}
var jt = Symbol.for("AnimatedComponent"),
  Ns = (
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: r = (n) => new Ge(n),
      getComponentProps: s = (n) => n,
    } = {}
  ) => {
    let n = {
        applyAnimatedValues: t,
        createAnimatedStyle: r,
        getComponentProps: s,
      },
      l = (a) => {
        let d = zt(a) || "Anonymous";
        return (
          o.str(a)
            ? (a = l[a] || (l[a] = Et(a, n)))
            : (a = a[jt] || (a[jt] = Et(a, n))),
          (a.displayName = `Animated(${d})`),
          a
        );
      };
    return (
      V(e, (a, d) => {
        o.arr(e) && (d = zt(a)), (l[d] = l(a));
      }),
      { animated: l }
    );
  },
  zt = (e) =>
    o.str(e)
      ? e
      : e && o.str(e.displayName)
      ? e.displayName
      : (o.fun(e) && e.name) || null;
function X(e, ...t) {
  return o.fun(e) ? e(...t) : e;
}
var ce = (e, t) =>
    e === !0 || !!(t && e && (o.fun(e) ? e(t) : _(e).includes(t))),
  pr = (e, t) => (o.obj(e) ? t && e[t] : e),
  fr = (e, t) => (e.default === !0 ? e[t] : e.default ? e.default[t] : void 0),
  ks = (e) => e,
  bt = (e, t = ks) => {
    let r = Ps;
    e.default && e.default !== !0 && ((e = e.default), (r = Object.keys(e)));
    let s = {};
    for (let n of r) {
      let l = t(e[n], n);
      o.und(l) || (s[n] = l);
    }
    return s;
  },
  Ps = [
    "config",
    "onProps",
    "onStart",
    "onChange",
    "onPause",
    "onResume",
    "onRest",
  ],
  Ms = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1,
  };
function Ss(e) {
  let t = {},
    r = 0;
  if (
    (V(e, (s, n) => {
      Ms[n] || ((t[n] = s), r++);
    }),
    r)
  )
    return t;
}
function gr(e) {
  let t = Ss(e);
  if (t) {
    let r = { to: t };
    return V(e, (s, n) => n in t || (r[n] = s)), r;
  }
  return { ...e };
}
function be(e) {
  return (
    (e = I(e)),
    o.arr(e)
      ? e.map(be)
      : Re(e)
      ? B.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
      : e
  );
}
function Cs(e) {
  for (let t in e) return !0;
  return !1;
}
function tt(e) {
  return o.fun(e) || (o.arr(e) && o.obj(e[0]));
}
function Is(e, t) {
  var r;
  (r = e.ref) == null || r.delete(e), t == null || t.delete(e);
}
function _s(e, t) {
  var r;
  t &&
    e.ref !== t &&
    ((r = e.ref) == null || r.delete(e), t.add(e), (e.ref = t));
}
var Os = {
    default: { tension: 170, friction: 26 },
    gentle: { tension: 120, friction: 14 },
    wobbly: { tension: 180, friction: 12 },
    stiff: { tension: 210, friction: 20 },
    slow: { tension: 280, friction: 60 },
    molasses: { tension: 280, friction: 120 },
  },
  rt = { ...Os.default, mass: 1, damping: 1, easing: ss.linear, clamp: !1 },
  Fs = class {
    constructor() {
      m(this, "tension");
      m(this, "friction");
      m(this, "frequency");
      m(this, "damping");
      m(this, "mass");
      m(this, "velocity", 0);
      m(this, "restVelocity");
      m(this, "precision");
      m(this, "progress");
      m(this, "duration");
      m(this, "easing");
      m(this, "clamp");
      m(this, "bounce");
      m(this, "decay");
      m(this, "round");
      Object.assign(this, rt);
    }
  };
function Es(e, t, r) {
  r && ((r = { ...r }), Tt(r, t), (t = { ...r, ...t })),
    Tt(e, t),
    Object.assign(e, t);
  for (let a in rt) e[a] == null && (e[a] = rt[a]);
  let { frequency: s, damping: n } = e,
    { mass: l } = e;
  return (
    o.und(s) ||
      (s < 0.01 && (s = 0.01),
      n < 0 && (n = 0),
      (e.tension = Math.pow((2 * Math.PI) / s, 2) * l),
      (e.friction = (4 * Math.PI * n * l) / s)),
    e
  );
}
function Tt(e, t) {
  if (!o.und(t.decay)) e.duration = void 0;
  else {
    let r = !o.und(t.tension) || !o.und(t.friction);
    (r || !o.und(t.frequency) || !o.und(t.damping) || !o.und(t.mass)) &&
      ((e.duration = void 0), (e.decay = void 0)),
      r && (e.frequency = void 0);
  }
}
var Qt = [],
  js = class {
    constructor() {
      m(this, "changed", !1);
      m(this, "values", Qt);
      m(this, "toValues", null);
      m(this, "fromValues", Qt);
      m(this, "to");
      m(this, "from");
      m(this, "config", new Fs());
      m(this, "immediate", !1);
    }
  };
function xr(e, { key: t, props: r, defaultProps: s, state: n, actions: l }) {
  return new Promise((a, d) => {
    let i,
      u,
      p = ce(r.cancel ?? (s == null ? void 0 : s.cancel), t);
    if (p) S();
    else {
      o.und(r.pause) || (n.paused = ce(r.pause, t));
      let g = s == null ? void 0 : s.pause;
      g !== !0 && (g = n.paused || ce(g, t)),
        (i = X(r.delay || 0, t)),
        g ? (n.resumeQueue.add(f), l.pause()) : (l.resume(), f());
    }
    function h() {
      n.resumeQueue.add(f),
        n.timeouts.delete(u),
        u.cancel(),
        (i = u.time - b.now());
    }
    function f() {
      i > 0 && !B.skipAnimation
        ? ((n.delayed = !0),
          (u = b.setTimeout(S, i)),
          n.pauseQueue.add(h),
          n.timeouts.add(u))
        : S();
    }
    function S() {
      n.delayed && (n.delayed = !1),
        n.pauseQueue.delete(h),
        n.timeouts.delete(u),
        e <= (n.cancelId || 0) && (p = !0);
      try {
        l.start({ ...r, callId: e, cancel: p }, a);
      } catch (g) {
        d(g);
      }
    }
  });
}
var vt = (e, t) =>
    t.length == 1
      ? t[0]
      : t.some((r) => r.cancelled)
      ? te(e.get())
      : t.every((r) => r.noop)
      ? br(e.get())
      : T(
          e.get(),
          t.every((r) => r.finished)
        ),
  br = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  T = (e, t, r = !1) => ({ value: e, finished: t, cancelled: r }),
  te = (e) => ({ value: e, cancelled: !0, finished: !1 });
function vr(e, t, r, s) {
  let { callId: n, parentId: l, onRest: a } = t,
    { asyncTo: d, promise: i } = r;
  return !l && e === d && !t.reset
    ? i
    : (r.promise = (async () => {
        (r.asyncId = n), (r.asyncTo = e);
        let u = bt(t, (x, w) => (w === "onRest" ? void 0 : x)),
          p,
          h,
          f = new Promise((x, w) => ((p = x), (h = w))),
          S = (x) => {
            let w =
              (n <= (r.cancelId || 0) && te(s)) ||
              (n !== r.asyncId && T(s, !1));
            if (w) throw ((x.result = w), h(x), x);
          },
          g = (x, w) => {
            let y = new Bt(),
              P = new Rt();
            return (async () => {
              if (B.skipAnimation)
                throw (ve(r), (P.result = T(s, !1)), h(P), P);
              S(y);
              let v = o.obj(x) ? { ...x } : { ...w, to: x };
              (v.parentId = n),
                V(u, (O, W) => {
                  o.und(v[W]) && (v[W] = O);
                });
              let C = await s.start(v);
              return (
                S(y),
                r.paused &&
                  (await new Promise((O) => {
                    r.resumeQueue.add(O);
                  })),
                C
              );
            })();
          },
          A;
        if (B.skipAnimation) return ve(r), T(s, !1);
        try {
          let x;
          o.arr(e)
            ? (x = (async (w) => {
                for (let y of w) await g(y);
              })(e))
            : (x = Promise.resolve(e(g, s.stop.bind(s)))),
            await Promise.all([x.then(p), f]),
            (A = T(s.get(), !0, !1));
        } catch (x) {
          if (x instanceof Bt) A = x.result;
          else if (x instanceof Rt) A = x.result;
          else throw x;
        } finally {
          n == r.asyncId &&
            ((r.asyncId = l),
            (r.asyncTo = l ? d : void 0),
            (r.promise = l ? i : void 0));
        }
        return (
          o.fun(a) &&
            b.batchedUpdates(() => {
              a(A, s, s.item);
            }),
          A
        );
      })());
}
function ve(e, t) {
  de(e.timeouts, (r) => r.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    t && (e.cancelId = t);
}
var Bt = class extends Error {
    constructor() {
      super(
        "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
      );
      m(this, "result");
    }
  },
  Rt = class extends Error {
    constructor() {
      super("SkipAnimationSignal");
      m(this, "result");
    }
  },
  st = (e) => e instanceof wt,
  zs = 1,
  wt = class extends ar {
    constructor() {
      super(...arguments);
      m(this, "id", zs++);
      m(this, "_priority", 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(t) {
      this._priority != t && ((this._priority = t), this._onPriorityChange(t));
    }
    get() {
      let t = R(this);
      return t && t.getValue();
    }
    to(...t) {
      return B.to(this, t);
    }
    interpolate(...t) {
      return cs(), B.to(this, t);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(t) {
      t == 1 && this._attach();
    }
    observerRemoved(t) {
      t == 0 && this._detach();
    }
    _attach() {}
    _detach() {}
    _onChange(t, r = !1) {
      pe(this, { type: "change", parent: this, value: t, idle: r });
    }
    _onPriorityChange(t) {
      this.idle || Te.sort(this),
        pe(this, { type: "priority", parent: this, priority: t });
    }
  },
  H = Symbol.for("SpringPhase"),
  wr = 1,
  nt = 2,
  at = 4,
  Ye = (e) => (e[H] & wr) > 0,
  D = (e) => (e[H] & nt) > 0,
  ae = (e) => (e[H] & at) > 0,
  Vt = (e, t) => (t ? (e[H] |= nt | wr) : (e[H] &= ~nt)),
  Gt = (e, t) => (t ? (e[H] |= at) : (e[H] &= ~at)),
  Ts = class extends wt {
    constructor(t, r) {
      super();
      m(this, "key");
      m(this, "animation", new js());
      m(this, "queue");
      m(this, "defaultProps", {});
      m(this, "_state", {
        paused: !1,
        delayed: !1,
        pauseQueue: new Set(),
        resumeQueue: new Set(),
        timeouts: new Set(),
      });
      m(this, "_pendingCalls", new Set());
      m(this, "_lastCallId", 0);
      m(this, "_lastToId", 0);
      m(this, "_memoizedDuration", 0);
      if (!o.und(t) || !o.und(r)) {
        let s = o.obj(t) ? { ...t } : { ...r, from: t };
        o.und(s.default) && (s.default = !0), this.start(s);
      }
    }
    get idle() {
      return !(D(this) || this._state.asyncTo) || ae(this);
    }
    get goal() {
      return I(this.animation.to);
    }
    get velocity() {
      let t = R(this);
      return t instanceof Ne
        ? t.lastVelocity || 0
        : t.getPayload().map((r) => r.lastVelocity || 0);
    }
    get hasAnimated() {
      return Ye(this);
    }
    get isAnimating() {
      return D(this);
    }
    get isPaused() {
      return ae(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(t) {
      let r = !0,
        s = !1,
        n = this.animation,
        { toValues: l } = n,
        { config: a } = n,
        d = Ve(n.to);
      !d && E(n.to) && (l = _(I(n.to))),
        n.values.forEach((p, h) => {
          if (p.done) return;
          let f = p.constructor == xe ? 1 : d ? d[h].lastPosition : l[h],
            S = n.immediate,
            g = f;
          if (!S) {
            if (((g = p.lastPosition), a.tension <= 0)) {
              p.done = !0;
              return;
            }
            let A = (p.elapsedTime += t),
              x = n.fromValues[h],
              w =
                p.v0 != null
                  ? p.v0
                  : (p.v0 = o.arr(a.velocity) ? a.velocity[h] : a.velocity),
              y,
              P =
                a.precision ||
                (x == f ? 0.005 : Math.min(1, Math.abs(f - x) * 0.001));
            if (o.und(a.duration))
              if (a.decay) {
                let v = a.decay === !0 ? 0.998 : a.decay,
                  C = Math.exp(-(1 - v) * A);
                (g = x + (w / (1 - v)) * (1 - C)),
                  (S = Math.abs(p.lastPosition - g) <= P),
                  (y = w * C);
              } else {
                y = p.lastVelocity == null ? w : p.lastVelocity;
                let v = a.restVelocity || P / 10,
                  C = a.clamp ? 0 : a.bounce,
                  O = !o.und(C),
                  W = x == f ? p.v0 > 0 : x < f,
                  G,
                  ke = !1,
                  F = 1,
                  ne = Math.ceil(t / F);
                for (
                  let z = 0;
                  z < ne &&
                  ((G = Math.abs(y) > v),
                  !(!G && ((S = Math.abs(f - g) <= P), S)));
                  ++z
                ) {
                  O &&
                    ((ke = g == f || g > f == W),
                    ke && ((y = -y * C), (g = f)));
                  let Z = -a.tension * 1e-6 * (g - f),
                    J = -a.friction * 0.001 * y,
                    Cr = (Z + J) / a.mass;
                  (y = y + Cr * F), (g = g + y * F);
                }
              }
            else {
              let v = 1;
              a.duration > 0 &&
                (this._memoizedDuration !== a.duration &&
                  ((this._memoizedDuration = a.duration),
                  p.durationProgress > 0 &&
                    ((p.elapsedTime = a.duration * p.durationProgress),
                    (A = p.elapsedTime += t))),
                (v = (a.progress || 0) + A / this._memoizedDuration),
                (v = v > 1 ? 1 : v < 0 ? 0 : v),
                (p.durationProgress = v)),
                (g = x + a.easing(v) * (f - x)),
                (y = (g - p.lastPosition) / t),
                (S = v == 1);
            }
            (p.lastVelocity = y),
              Number.isNaN(g) &&
                (console.warn("Got NaN while animating:", this), (S = !0));
          }
          d && !d[h].done && (S = !1),
            S ? (p.done = !0) : (r = !1),
            p.setValue(g, a.round) && (s = !0);
        });
      let i = R(this),
        u = i.getValue();
      if (r) {
        let p = I(n.to);
        (u !== p || s) && !a.decay
          ? (i.setValue(p), this._onChange(p))
          : s && a.decay && this._onChange(u),
          this._stop();
      } else s && this._onChange(u);
    }
    set(t) {
      return (
        b.batchedUpdates(() => {
          this._stop(), this._focus(t), this._set(t);
        }),
        this
      );
    }
    pause() {
      this._update({ pause: !0 });
    }
    resume() {
      this._update({ pause: !1 });
    }
    finish() {
      if (D(this)) {
        let { to: t, config: r } = this.animation;
        b.batchedUpdates(() => {
          this._onStart(), r.decay || this._set(t, !1), this._stop();
        });
      }
      return this;
    }
    update(t) {
      return (this.queue || (this.queue = [])).push(t), this;
    }
    start(t, r) {
      let s;
      return (
        o.und(t)
          ? ((s = this.queue || []), (this.queue = []))
          : (s = [o.obj(t) ? t : { ...r, to: t }]),
        Promise.all(s.map((n) => this._update(n))).then((n) => vt(this, n))
      );
    }
    stop(t) {
      let { to: r } = this.animation;
      return (
        this._focus(this.get()),
        ve(this._state, t && this._lastCallId),
        b.batchedUpdates(() => this._stop(r, t)),
        this
      );
    }
    reset() {
      this._update({ reset: !0 });
    }
    eventObserved(t) {
      t.type == "change"
        ? this._start()
        : t.type == "priority" && (this.priority = t.priority + 1);
    }
    _prepareNode(t) {
      let r = this.key || "",
        { to: s, from: n } = t;
      (s = o.obj(s) ? s[r] : s),
        (s == null || tt(s)) && (s = void 0),
        (n = o.obj(n) ? n[r] : n),
        n == null && (n = void 0);
      let l = { to: s, from: n };
      return (
        Ye(this) ||
          (t.reverse && ([s, n] = [n, s]),
          (n = I(n)),
          o.und(n) ? R(this) || this._set(s) : this._set(n)),
        l
      );
    }
    _update({ ...t }, r) {
      let { key: s, defaultProps: n } = this;
      t.default &&
        Object.assign(
          n,
          bt(t, (d, i) => (/^on/.test(i) ? pr(d, s) : d))
        ),
        Dt(this, t, "onProps"),
        ie(this, "onProps", t, this);
      let l = this._prepareNode(t);
      if (Object.isFrozen(this))
        throw Error(
          "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
        );
      let a = this._state;
      return xr(++this._lastCallId, {
        key: s,
        props: t,
        defaultProps: n,
        state: a,
        actions: {
          pause: () => {
            ae(this) ||
              (Gt(this, !0),
              oe(a.pauseQueue),
              ie(this, "onPause", T(this, le(this, this.animation.to)), this));
          },
          resume: () => {
            ae(this) &&
              (Gt(this, !1),
              D(this) && this._resume(),
              oe(a.resumeQueue),
              ie(this, "onResume", T(this, le(this, this.animation.to)), this));
          },
          start: this._merge.bind(this, l),
        },
      }).then((d) => {
        if (t.loop && d.finished && !(r && d.noop)) {
          let i = yr(t);
          if (i) return this._update(i, !0);
        }
        return d;
      });
    }
    _merge(t, r, s) {
      if (r.cancel) return this.stop(!0), s(te(this));
      let n = !o.und(t.to),
        l = !o.und(t.from);
      if (n || l)
        if (r.callId > this._lastToId) this._lastToId = r.callId;
        else return s(te(this));
      let { key: a, defaultProps: d, animation: i } = this,
        { to: u, from: p } = i,
        { to: h = u, from: f = p } = t;
      l && !n && (!r.default || o.und(h)) && (h = f),
        r.reverse && ([h, f] = [f, h]);
      let S = !U(f, p);
      S && (i.from = f), (f = I(f));
      let g = !U(h, u);
      g && this._focus(h);
      let A = tt(r.to),
        { config: x } = i,
        { decay: w, velocity: y } = x;
      (n || l) && (x.velocity = 0),
        r.config &&
          !A &&
          Es(
            x,
            X(r.config, a),
            r.config !== d.config ? X(d.config, a) : void 0
          );
      let P = R(this);
      if (!P || o.und(h)) return s(T(this, !0));
      let v = o.und(r.reset) ? l && !r.default : !o.und(f) && ce(r.reset, a),
        C = v ? f : this.get(),
        O = be(h),
        W = o.num(O) || o.arr(O) || Re(O),
        G = !A && (!W || ce(d.immediate || r.immediate, a));
      if (g) {
        let z = et(h);
        if (z !== P.constructor)
          if (G) P = this._set(O);
          else
            throw Error(
              `Cannot animate between ${P.constructor.name} and ${z.name}, as the "to" prop suggests`
            );
      }
      let ke = P.constructor,
        F = E(h),
        ne = !1;
      if (!F) {
        let z = v || (!Ye(this) && S);
        (g || z) && ((ne = U(be(C), O)), (F = !ne)),
          ((!U(i.immediate, G) && !G) || !U(x.decay, w) || !U(x.velocity, y)) &&
            (F = !0);
      }
      if (
        (ne && D(this) && (i.changed && !v ? (F = !0) : F || this._stop(u)),
        !A &&
          ((F || E(u)) &&
            ((i.values = P.getPayload()),
            (i.toValues = E(h) ? null : ke == xe ? [1] : _(O))),
          i.immediate != G && ((i.immediate = G), !G && !v && this._set(u)),
          F))
      ) {
        let { onRest: z } = i;
        k(Bs, (J) => Dt(this, r, J));
        let Z = T(this, le(this, u));
        oe(this._pendingCalls, Z),
          this._pendingCalls.add(s),
          i.changed &&
            b.batchedUpdates(() => {
              var J;
              (i.changed = !v),
                z == null || z(Z, this),
                v
                  ? X(d.onRest, Z)
                  : (J = i.onStart) == null || J.call(i, Z, this);
            });
      }
      v && this._set(C),
        A
          ? s(vr(r.to, r, this._state, this))
          : F
          ? this._start()
          : D(this) && !g
          ? this._pendingCalls.add(s)
          : s(br(C));
    }
    _focus(t) {
      let r = this.animation;
      t !== r.to &&
        (_t(this) && this._detach(), (r.to = t), _t(this) && this._attach());
    }
    _attach() {
      let t = 0,
        { to: r } = this.animation;
      E(r) && (se(r, this), st(r) && (t = r.priority + 1)), (this.priority = t);
    }
    _detach() {
      let { to: t } = this.animation;
      E(t) && fe(t, this);
    }
    _set(t, r = !0) {
      let s = I(t);
      if (!o.und(s)) {
        let n = R(this);
        if (!n || !U(s, n.getValue())) {
          let l = et(s);
          !n || n.constructor != l ? xt(this, l.create(s)) : n.setValue(s),
            n &&
              b.batchedUpdates(() => {
                this._onChange(s, r);
              });
        }
      }
      return R(this);
    }
    _onStart() {
      let t = this.animation;
      t.changed ||
        ((t.changed = !0), ie(this, "onStart", T(this, le(this, t.to)), this));
    }
    _onChange(t, r) {
      r || (this._onStart(), X(this.animation.onChange, t, this)),
        X(this.defaultProps.onChange, t, this),
        super._onChange(t, r);
    }
    _start() {
      let t = this.animation;
      R(this).reset(I(t.to)),
        t.immediate || (t.fromValues = t.values.map((r) => r.lastPosition)),
        D(this) || (Vt(this, !0), ae(this) || this._resume());
    }
    _resume() {
      B.skipAnimation ? this.finish() : Te.start(this);
    }
    _stop(t, r) {
      if (D(this)) {
        Vt(this, !1);
        let s = this.animation;
        k(s.values, (l) => {
          l.done = !0;
        }),
          s.toValues && (s.onChange = s.onPause = s.onResume = void 0),
          pe(this, { type: "idle", parent: this });
        let n = r ? te(this.get()) : T(this.get(), le(this, t ?? s.to));
        oe(this._pendingCalls, n),
          s.changed && ((s.changed = !1), ie(this, "onRest", n, this));
      }
    }
  };
function le(e, t) {
  let r = be(t),
    s = be(e.get());
  return U(s, r);
}
function yr(e, t = e.loop, r = e.to) {
  let s = X(t);
  if (s) {
    let n = s !== !0 && gr(s),
      l = (n || e).reverse,
      a = !n || n.reset;
    return we({
      ...e,
      loop: t,
      default: !1,
      pause: void 0,
      to: !l || tt(r) ? r : void 0,
      from: a ? e.from : void 0,
      reset: a,
      ...n,
    });
  }
}
function we(e) {
  let { to: t, from: r } = (e = gr(e)),
    s = new Set();
  return (
    o.obj(t) && Ut(t, s),
    o.obj(r) && Ut(r, s),
    (e.keys = s.size ? Array.from(s) : null),
    e
  );
}
function Qs(e) {
  let t = we(e);
  return o.und(t.default) && (t.default = bt(t)), t;
}
function Ut(e, t) {
  V(e, (r, s) => r != null && t.add(s));
}
var Bs = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function Dt(e, t, r) {
  e.animation[r] = t[r] !== fr(t, r) ? pr(t[r], e.key) : void 0;
}
function ie(e, t, ...r) {
  var s, n, l, a;
  (n = (s = e.animation)[t]) == null || n.call(s, ...r),
    (a = (l = e.defaultProps)[t]) == null || a.call(l, ...r);
}
var Rs = ["onStart", "onChange", "onRest"],
  Vs = 1,
  Gs = class {
    constructor(e, t) {
      m(this, "id", Vs++);
      m(this, "springs", {});
      m(this, "queue", []);
      m(this, "ref");
      m(this, "_flush");
      m(this, "_initialProps");
      m(this, "_lastAsyncId", 0);
      m(this, "_active", new Set());
      m(this, "_changed", new Set());
      m(this, "_started", !1);
      m(this, "_item");
      m(this, "_state", {
        paused: !1,
        pauseQueue: new Set(),
        resumeQueue: new Set(),
        timeouts: new Set(),
      });
      m(this, "_events", {
        onStart: new Map(),
        onChange: new Map(),
        onRest: new Map(),
      });
      (this._onFrame = this._onFrame.bind(this)),
        t && (this._flush = t),
        e && this.start({ default: !0, ...e });
    }
    get idle() {
      return (
        !this._state.asyncTo &&
        Object.values(this.springs).every(
          (e) => e.idle && !e.isDelayed && !e.isPaused
        )
      );
    }
    get item() {
      return this._item;
    }
    set item(e) {
      this._item = e;
    }
    get() {
      let e = {};
      return this.each((t, r) => (e[r] = t.get())), e;
    }
    set(e) {
      for (let t in e) {
        let r = e[t];
        o.und(r) || this.springs[t].set(r);
      }
    }
    update(e) {
      return e && this.queue.push(we(e)), this;
    }
    start(e) {
      let { queue: t } = this;
      return (
        e ? (t = _(e).map(we)) : (this.queue = []),
        this._flush ? this._flush(this, t) : (Mr(this, t), lt(this, t))
      );
    }
    stop(e, t) {
      if ((e !== !!e && (t = e), t)) {
        let r = this.springs;
        k(_(t), (s) => r[s].stop(!!e));
      } else ve(this._state, this._lastAsyncId), this.each((r) => r.stop(!!e));
      return this;
    }
    pause(e) {
      if (o.und(e)) this.start({ pause: !0 });
      else {
        let t = this.springs;
        k(_(e), (r) => t[r].pause());
      }
      return this;
    }
    resume(e) {
      if (o.und(e)) this.start({ pause: !1 });
      else {
        let t = this.springs;
        k(_(e), (r) => t[r].resume());
      }
      return this;
    }
    each(e) {
      V(this.springs, e);
    }
    _onFrame() {
      let { onStart: e, onChange: t, onRest: r } = this._events,
        s = this._active.size > 0,
        n = this._changed.size > 0;
      ((s && !this._started) || (n && !this._started)) &&
        ((this._started = !0),
        de(e, ([d, i]) => {
          (i.value = this.get()), d(i, this, this._item);
        }));
      let l = !s && this._started,
        a = n || (l && r.size) ? this.get() : null;
      n &&
        t.size &&
        de(t, ([d, i]) => {
          (i.value = a), d(i, this, this._item);
        }),
        l &&
          ((this._started = !1),
          de(r, ([d, i]) => {
            (i.value = a), d(i, this, this._item);
          }));
    }
    eventObserved(e) {
      if (e.type == "change")
        this._changed.add(e.parent), e.idle || this._active.add(e.parent);
      else if (e.type == "idle") this._active.delete(e.parent);
      else return;
      b.onFrame(this._onFrame);
    }
  };
function lt(e, t) {
  return Promise.all(t.map((r) => Ar(e, r))).then((r) => vt(e, r));
}
async function Ar(e, t, r) {
  let { keys: s, to: n, from: l, loop: a, onRest: d, onResolve: i } = t,
    u = o.obj(t.default) && t.default;
  a && (t.loop = !1), n === !1 && (t.to = null), l === !1 && (t.from = null);
  let p = o.arr(n) || o.fun(n) ? n : void 0;
  p
    ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
    : k(Rs, (A) => {
        let x = t[A];
        if (o.fun(x)) {
          let w = e._events[A];
          (t[A] = ({ finished: y, cancelled: P }) => {
            let v = w.get(x);
            v
              ? (y || (v.finished = !1), P && (v.cancelled = !0))
              : w.set(x, {
                  value: null,
                  finished: y || !1,
                  cancelled: P || !1,
                });
          }),
            u && (u[A] = t[A]);
        }
      });
  let h = e._state;
  t.pause === !h.paused
    ? ((h.paused = t.pause), oe(t.pause ? h.pauseQueue : h.resumeQueue))
    : h.paused && (t.pause = !0);
  let f = (s || Object.keys(e.springs)).map((A) => e.springs[A].start(t)),
    S = t.cancel === !0 || fr(t, "cancel") === !0;
  (p || (S && h.asyncId)) &&
    f.push(
      xr(++e._lastAsyncId, {
        props: t,
        state: h,
        actions: {
          pause: Je,
          resume: Je,
          start(A, x) {
            S
              ? (ve(h, e._lastAsyncId), x(te(e)))
              : ((A.onRest = d), x(vr(p, A, h, e)));
          },
        },
      })
    ),
    h.paused &&
      (await new Promise((A) => {
        h.resumeQueue.add(A);
      }));
  let g = vt(e, await Promise.all(f));
  if (a && g.finished && !(r && g.noop)) {
    let A = yr(t, a, n);
    if (A) return Mr(e, [A]), Ar(e, A, !0);
  }
  return i && b.batchedUpdates(() => i(g, e, e.item)), g;
}
function qt(e, t) {
  let r = { ...e.springs };
  return (
    t &&
      k(_(t), (s) => {
        o.und(s.keys) && (s = we(s)),
          o.obj(s.to) || (s = { ...s, to: void 0 }),
          Pr(r, s, (n) => kr(n));
      }),
    Nr(e, r),
    r
  );
}
function Nr(e, t) {
  V(t, (r, s) => {
    e.springs[s] || ((e.springs[s] = r), se(r, e));
  });
}
function kr(e, t) {
  let r = new Ts();
  return (r.key = e), t && se(r, t), r;
}
function Pr(e, t, r) {
  t.keys &&
    k(t.keys, (s) => {
      (e[s] || (e[s] = r(s)))._prepareNode(t);
    });
}
function Mr(e, t) {
  k(t, (r) => {
    Pr(e.springs, r, (s) => kr(s, e));
  });
}
var Ue = ({ children: e, ...t }) => {
    let r = N.useContext(je),
      s = t.pause || !!r.pause,
      n = t.immediate || !!r.immediate;
    t = fs(() => ({ pause: s, immediate: n }), [s, n]);
    let { Provider: l } = je;
    return N.createElement(l, { value: t }, e);
  },
  je = Us(Ue, {});
Ue.Provider = je.Provider;
Ue.Consumer = je.Consumer;
function Us(e, t) {
  return (
    Object.assign(e, N.createContext(t)),
    (e.Provider._context = e),
    (e.Consumer._context = e),
    e
  );
}
var Ds = () => {
  let e = [],
    t = function (s) {
      hs();
      let n = [];
      return (
        k(e, (l, a) => {
          if (o.und(s)) n.push(l.start());
          else {
            let d = r(s, l, a);
            d && n.push(l.start(d));
          }
        }),
        n
      );
    };
  (t.current = e),
    (t.add = function (s) {
      e.includes(s) || e.push(s);
    }),
    (t.delete = function (s) {
      let n = e.indexOf(s);
      ~n && e.splice(n, 1);
    }),
    (t.pause = function () {
      return k(e, (s) => s.pause(...arguments)), this;
    }),
    (t.resume = function () {
      return k(e, (s) => s.resume(...arguments)), this;
    }),
    (t.set = function (s) {
      k(e, (n, l) => {
        let a = o.fun(s) ? s(l, n) : s;
        a && n.set(a);
      });
    }),
    (t.start = function (s) {
      let n = [];
      return (
        k(e, (l, a) => {
          if (o.und(s)) n.push(l.start());
          else {
            let d = this._getProps(s, l, a);
            d && n.push(l.start(d));
          }
        }),
        n
      );
    }),
    (t.stop = function () {
      return k(e, (s) => s.stop(...arguments)), this;
    }),
    (t.update = function (s) {
      return k(e, (n, l) => n.update(this._getProps(s, n, l))), this;
    });
  let r = function (s, n, l) {
    return o.fun(s) ? s(l, n) : s;
  };
  return (t._getProps = r), t;
};
function qs(e, t, r) {
  let s = o.fun(t) && t;
  s && !r && (r = []);
  let n = N.useMemo(() => (s || arguments.length == 3 ? Ds() : void 0), []),
    l = N.useRef(0),
    a = ur(),
    d = N.useMemo(
      () => ({
        ctrls: [],
        queue: [],
        flush(w, y) {
          let P = qt(w, y);
          return l.current > 0 &&
            !d.queue.length &&
            !Object.keys(P).some((v) => !w.springs[v])
            ? lt(w, y)
            : new Promise((v) => {
                Nr(w, P),
                  d.queue.push(() => {
                    v(lt(w, y));
                  }),
                  a();
              });
        },
      }),
      []
    ),
    i = N.useRef([...d.ctrls]),
    u = [],
    p = Ft(e) || 0;
  N.useMemo(() => {
    k(i.current.slice(e, p), (w) => {
      Is(w, n), w.stop(!0);
    }),
      (i.current.length = e),
      h(p, e);
  }, [e]),
    N.useMemo(() => {
      h(0, Math.min(p, e));
    }, r);
  function h(w, y) {
    for (let P = w; P < y; P++) {
      let v = i.current[P] || (i.current[P] = new Gs(null, d.flush)),
        C = s ? s(P, v) : t[P];
      C && (u[P] = Qs(C));
    }
  }
  let f = i.current.map((w, y) => qt(w, u[y])),
    S = N.useContext(Ue),
    g = Ft(S),
    A = S !== g && Cs(S);
  gt(() => {
    l.current++, (d.ctrls = i.current);
    let { queue: w } = d;
    w.length && ((d.queue = []), k(w, (y) => y())),
      k(i.current, (y, P) => {
        n == null || n.add(y), A && y.start({ default: S });
        let v = u[P];
        v && (_s(y, v.ref), y.ref ? y.queue.push(v) : y.start(v));
      });
  }),
    cr(() => () => {
      k(d.ctrls, (w) => w.stop(!0));
    });
  let x = f.map((w) => ({ ...w }));
  return n ? [x, n] : x;
}
function Ls(e, t) {
  let r = o.fun(e),
    [[s], n] = qs(1, r ? e : [e], r ? t || [] : t);
  return r || arguments.length == 2 ? [s, n] : s;
}
var Ys = class extends wt {
  constructor(t, r) {
    super();
    m(this, "key");
    m(this, "idle", !0);
    m(this, "calc");
    m(this, "_active", new Set());
    (this.source = t), (this.calc = he(...r));
    let s = this._get(),
      n = et(s);
    xt(this, n.create(s));
  }
  advance(t) {
    let r = this._get(),
      s = this.get();
    U(r, s) || (R(this).setValue(r), this._onChange(r, this.idle)),
      !this.idle && Lt(this._active) && Xe(this);
  }
  _get() {
    let t = o.arr(this.source) ? this.source.map(I) : _(I(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle &&
      !Lt(this._active) &&
      ((this.idle = !1),
      k(Ve(this), (t) => {
        t.done = !1;
      }),
      B.skipAnimation
        ? (b.batchedUpdates(() => this.advance()), Xe(this))
        : Te.start(this));
  }
  _attach() {
    let t = 1;
    k(_(this.source), (r) => {
      E(r) && se(r, this),
        st(r) &&
          (r.idle || this._active.add(r), (t = Math.max(t, r.priority + 1)));
    }),
      (this.priority = t),
      this._start();
  }
  _detach() {
    k(_(this.source), (t) => {
      E(t) && fe(t, this);
    }),
      this._active.clear(),
      Xe(this);
  }
  eventObserved(t) {
    t.type == "change"
      ? t.idle
        ? this.advance()
        : (this._active.add(t.parent), this._start())
      : t.type == "idle"
      ? this._active.delete(t.parent)
      : t.type == "priority" &&
        (this.priority = _(this.source).reduce(
          (r, s) => Math.max(r, (st(s) ? s.priority : 0) + 1),
          0
        ));
  }
};
function Xs(e) {
  return e.idle !== !1;
}
function Lt(e) {
  return !e.size || Array.from(e).every(Xs);
}
function Xe(e) {
  e.idle ||
    ((e.idle = !0),
    k(Ve(e), (t) => {
      t.done = !0;
    }),
    pe(e, { type: "idle", parent: e }));
}
B.assign({ createStringInterpolator: or, to: (e, t) => new Ys(e, t) });
var Sr = /^--/;
function Ks(e, t) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : typeof t == "number" &&
      t !== 0 &&
      !Sr.test(e) &&
      !(me.hasOwnProperty(e) && me[e])
    ? t + "px"
    : ("" + t).trim();
}
var Yt = {};
function Hs(e, t) {
  if (!e.nodeType || !e.setAttribute) return !1;
  let r =
      e.nodeName === "filter" ||
      (e.parentNode && e.parentNode.nodeName === "filter"),
    {
      style: s,
      children: n,
      scrollTop: l,
      scrollLeft: a,
      viewBox: d,
      ...i
    } = t,
    u = Object.values(i),
    p = Object.keys(i).map((h) =>
      r || e.hasAttribute(h)
        ? h
        : Yt[h] || (Yt[h] = h.replace(/([A-Z])/g, (f) => "-" + f.toLowerCase()))
    );
  n !== void 0 && (e.textContent = n);
  for (let h in s)
    if (s.hasOwnProperty(h)) {
      let f = Ks(h, s[h]);
      Sr.test(h) ? e.style.setProperty(h, f) : (e.style[h] = f);
    }
  p.forEach((h, f) => {
    e.setAttribute(h, u[f]);
  }),
    l !== void 0 && (e.scrollTop = l),
    a !== void 0 && (e.scrollLeft = a),
    d !== void 0 && e.setAttribute("viewBox", d);
}
var me = {
    animationIterationCount: !0,
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
  Ws = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
  Zs = ["Webkit", "Ms", "Moz", "O"];
me = Object.keys(me).reduce(
  (e, t) => (Zs.forEach((r) => (e[Ws(r, t)] = e[t])), e),
  me
);
var Js = /^(matrix|translate|scale|rotate|skew)/,
  $s = /^(translate)/,
  en = /^(rotate|skew)/,
  Ke = (e, t) => (o.num(e) && e !== 0 ? e + t : e),
  Ie = (e, t) =>
    o.arr(e)
      ? e.every((r) => Ie(r, t))
      : o.num(e)
      ? e === t
      : parseFloat(e) === t,
  tn = class extends Ge {
    constructor({ x: e, y: t, z: r, ...s }) {
      let n = [],
        l = [];
      (e || t || r) &&
        (n.push([e || 0, t || 0, r || 0]),
        l.push((a) => [
          `translate3d(${a.map((d) => Ke(d, "px")).join(",")})`,
          Ie(a, 0),
        ])),
        V(s, (a, d) => {
          if (d === "transform")
            n.push([a || ""]), l.push((i) => [i, i === ""]);
          else if (Js.test(d)) {
            if ((delete s[d], o.und(a))) return;
            let i = $s.test(d) ? "px" : en.test(d) ? "deg" : "";
            n.push(_(a)),
              l.push(
                d === "rotate3d"
                  ? ([u, p, h, f]) => [
                      `rotate3d(${u},${p},${h},${Ke(f, i)})`,
                      Ie(f, 0),
                    ]
                  : (u) => [
                      `${d}(${u.map((p) => Ke(p, i)).join(",")})`,
                      Ie(u, d.startsWith("scale") ? 1 : 0),
                    ]
              );
          }
        }),
        n.length && (s.transform = new rn(n, l)),
        super(s);
    }
  },
  rn = class extends ar {
    constructor(t, r) {
      super();
      m(this, "_value", null);
      (this.inputs = t), (this.transforms = r);
    }
    get() {
      return this._value || (this._value = this._get());
    }
    _get() {
      let t = "",
        r = !0;
      return (
        k(this.inputs, (s, n) => {
          let l = I(s[0]),
            [a, d] = this.transforms[n](o.arr(l) ? l : s.map(I));
          (t += " " + a), (r = r && d);
        }),
        r ? "none" : t
      );
    }
    observerAdded(t) {
      t == 1 && k(this.inputs, (r) => k(r, (s) => E(s) && se(s, this)));
    }
    observerRemoved(t) {
      t == 0 && k(this.inputs, (r) => k(r, (s) => E(s) && fe(s, this)));
    }
    eventObserved(t) {
      t.type == "change" && (this._value = null), pe(this, t);
    }
  },
  sn = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ];
B.assign({
  batchedUpdates: Or.unstable_batchedUpdates,
  createStringInterpolator: or,
  colors: qr,
});
var nn = Ns(sn, {
    applyAnimatedValues: Hs,
    createAnimatedStyle: (e) => new tn(e),
    getComponentProps: ({ scrollTop: e, scrollLeft: t, ...r }) => r,
  }),
  an = nn.animated;
const ln = "/assets/Rectangle 11-a7604c31.webp",
  Xt = "/assets/Verifi-f4f0fb59.webp",
  on = "/assets/owl-1d8b4fc1.webp",
  dn =
    "data:image/webp;base64,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",
  un = "/assets/ahbal-81e63d2e.webp",
  cn = "/assets/Cool-21f9f595.webp",
  mn = "/assets/chanda-ab1e58f0.webp",
  hn = "/assets/crocPi-05d4f498.webp",
  pn = "/assets/MSRT-a5c25877.webp",
  He = [
    {
      id: 1,
      nft: ln,
      alt: "A person with a scurf, NFT",
      imgOwner: Xt,
      imgName: "HAPE #6959",
      imgNameAlt: "Profile of HAPE",
      imgSmName: "HAPES PRIME",
      CurrentPrice: "5.758 ETH",
      TotalPrice: "$5744.31",
      Profits: "+12.45%",
    },
    {
      id: 2,
      alt: "An owl, NFT",
      nft: on,
      imgOwner: Xt,
      imgName: "HAPE #6959",
      imgNameAlt: "Profile of HAPE",
      imgSmName: "HAPES PRIME",
      CurrentPrice: "3.142 ETH",
      TotalPrice: "$5234.51",
      Profits: "+48.55%",
    },
    {
      id: 3,
      alt: " A sheep, NFT",
      nft: dn,
      imgOwner: un,
      imgName: "alokir #3154",
      imgNameAlt: "Profile of alokir",
      imgSmName: "alokir shaow",
      CurrentPrice: "6.142 ETH",
      TotalPrice: "$99,524.92",
      Profits: "-4.12%",
    },
    {
      id: 4,
      alt: "An invisible man, NFT",
      nft: cn,
      imgOwner: mn,
      imgName: "Chanda #2412",
      imgNameAlt: "Profile of Chanda",
      imgSmName: "Chanda chanda",
      CurrentPrice: "2.245 ETH",
      TotalPrice: "$19,534.33",
      Profits: "+2.99%",
    },
    {
      id: 5,
      alt: "A crocodile dripped up, NFT",
      nft: hn,
      imgOwner: pn,
      imgName: "msrt #8831",
      imgNameAlt: "Profile of msrt",
      imgSmName: "msrt mosrt",
      CurrentPrice: "8.231 ETH",
      TotalPrice: "$21,421.48",
      Profits: "+78.24%",
    },
  ],
  fn = "/assets/Vector6-55eb8f9c.webp",
  gn = "/assets/Vector5-2e40a1f0.webp";
let Kt = Math.floor(Math.random() * 50);
const xn = () => {
    const [e, t] = N.useState(0);
    let [r, s] = N.useState(Kt),
      [n, l] = N.useState(59),
      [a, d] = N.useState(59);
    return (
      N.useEffect(() => {
        const i = setInterval(() => {
          t((u) => (u === He.length - 1 ? 0 : u + 1));
        }, 2e3);
        return () => clearInterval(i);
      }, []),
      N.useEffect(() => {
        let i = setInterval(() => {
            n > 0 ? a > 0 && d((h) => h - 1) : clearInterval(i);
          }, 1e3),
          u = setInterval(() => {
            n > 0 && a == 0 && (l((h) => h - 1), d(() => (a = 59)));
          }, 1e3),
          p = setInterval(() => {
            r > 0
              ? n == 0 &&
                a == 0 &&
                (s((h) => h - 1), l(() => (n = 59)), d(() => (a = 59)))
              : (s(() => (r = Kt)), l(() => (n = 59)), d(() => (a = 59)));
          }, 1e3);
        return () => {
          clearInterval(i), clearInterval(u), clearInterval(p);
        };
      }),
      c("div", {
        children: M("div", {
          className: "bg-left w-full z-10 relative",
          children: [
            c("div", {
              className:
                " z-20 absolute ring-1 rounded-xl  ring-slate-400 -skew-x-[8deg] h-60 backdrop-blur-md imd:w-[17.4rem] imd:-left-9 imd:-bottom-[15.2rem] lg:w-72  lg:left-[8rem] lg:-bottom-[15.2rem] llg:left-[16rem] llg:w-[18.4rem] xl:left-[10rem]  xl:w-[21rem] xl:-bottom-[15rem] 2xl:left-[9rem] 2xl:w-[27rem] 2xl:-bottom-[14rem]",
            }),
            c("div", {
              className: ` z-20 absolute top-10 ring-1 \r
                      rounded-xl ring-slate-400 -skew-x-[8deg] backdrop-blur-2xl\r
                      imd:w-72 imd:left-0 imd:h-[23rem]\r
                      lg:left-44 lg:h-[28rem]\r
                      llg:left-[19.5rem] llg:h-[26.7rem]\r
                      xl:h-[30em] xl:left-48 xl:w-[22.6rem]\r
                      2xl:w-[28.5rem]`,
            }),
            M("div", {
              className: ` z-40 child:-skew-x-3 -skew-x-[8deg] -bottom-[4rem] backdrop-blur-xl\r
                      absolute font-semibold rounded-2xl h-fit border border-slate-400 pb-1\r
                      flex flex-nowrap flex-col\r
                      imd:px-3 imd:left-52 imd:w-fit \r
                      lg:left-[24rem] lg:w-[7.3rem]\r
                      llg:left-[32rem] llg:px-5 llg:w-32 \r
                      xl:left-[29rem] xl:px-3 xl:py-1 xl:w-32\r
                      2xl:left-[33rem] 2xl:w-40 2xl:py-2 2xl:px-7\r
                         `,
              children: [
                c("h2", {
                  className:
                    " imd:text-base imd:font-bold xl:text-xl lg:text-base lg:font-black",
                  children: "BID NOW!",
                }),
                c("p", {
                  className: " text-[0.7rem] font-[500] ",
                  children: "Latest collection",
                }),
              ],
            }),
            " ",
            c("div", {
              className:
                " absolute z-10  imd:-left-3 imd:top-7 lg:left-36 lg:top-8 llg:left-64 llg:top-8 xl:left-40 xl:top-8 2xl:left-40 2xl:top-4 w-fit",
              children: He.map((i, u) =>
                c("div", {
                  children:
                    u === e &&
                    c("div", {
                      children: c(
                        "img",
                        {
                          src: i.nft,
                          className:
                            u === e
                              ? i.id == 1
                                ? " animate-waving-hand object-contain imd:w-64 lg:w-80 llg:w-80 xl:w-[22rem] 2xl:w-[25.5rem] rounded-xl -skew-x-[8deg]"
                                : " animate-waving-hand object-contain imd:w-64 lg:w-80 llg:w-80 xl:w-[22rem] 2xl:w-[25.5rem] rounded-xl -skew-x-[8deg]  "
                              : "",
                        },
                        i.id
                      ),
                    }),
                })
              ),
            }),
            c("div", {
              className:
                " absolute z-30 imd:-left-3 imd:top-7 lg:left-36 lg:top-8 llg:left-64 llg:top-8 xl:left-40 xl:top-8 2xl:left-40 2xl:top-4 w-fit",
              children: He.map((i, u) =>
                c(Fr, {
                  children:
                    u === e &&
                    M("div", {
                      children: [
                        c(
                          "img",
                          {
                            src: i.nft,
                            className:
                              u === e
                                ? i.id == 1
                                  ? " animate-waving-hand object-contain imd:w-64 lg:w-80 llg:w-80 xl:w-[22rem] 2xl:w-[25.5rem] rounded-xl -skew-x-[8deg]"
                                  : " animate-waving-hand object-contain imd:w-64 lg:w-80 llg:w-80 xl:w-[22rem] 2xl:w-[25.5rem] rounded-xl -skew-x-[8deg]  "
                                : "",
                          },
                          i.id
                        ),
                        M("div", {
                          className:
                            " absolute backdrop-blur-xl rounded-xl -skew-x-[8deg] font-headerFont flex justify-between ring-1 ring-slate-400 z-10 imd:p-3 imd:w-52 imd:h-16 imd:-left-16 imd:top-[14rem] lg:p-3 lg:w-56 lg:h-16 lg:-left-16 lg:top-[18rem] llg:p-3 llg:w-56 llg:h-16 llg:-left-16 llg:top-[18rem] xl:p-4 xl:gap-x-12 xl:w-64 xl:h-20 xl:-left-16 xl:top-[20rem] 2xl:p-5 2xl:gax-x-16 2xl:w-[18.2rem] 2xl:h-20 2xl:-left-20 2xl:top-[22rem]  ",
                          children: [
                            M("div", {
                              className: " relative imd:bottom-1  bottom-2",
                              children: [
                                c(
                                  "h3",
                                  {
                                    className:
                                      "imd:font-semibold  lg:text-base 2xl:text-xl 2xl:font-[600]",
                                    children: i.CurrentPrice,
                                  },
                                  i.id
                                ),
                                c("p", {
                                  className: "text-sm",
                                  children: "Latest Bid",
                                }),
                              ],
                            }),
                            M("div", {
                              className:
                                " relative imd:bottom-2 bottom-3 text-right",
                              children: [
                                c(
                                  "h3",
                                  {
                                    className: " 2xl:text-lg font-medium",
                                    children: i.TotalPrice,
                                  },
                                  i.id
                                ),
                                c(
                                  "p",
                                  {
                                    className:
                                      i.id == 3
                                        ? "text-red-500 font-medium"
                                        : "text-[#24FF00] font-medium",
                                    children: i.Profits,
                                  },
                                  i.id
                                ),
                              ],
                            }),
                          ],
                        }),
                        M("div", {
                          className:
                            " absolute flex justify-between bgred-300 font-headerFont  child:-skew-x-6 ring-1 ring-slate-400 backdrop-blur-md rounded-xl  imd:w-[12.4rem] imd:p-3 imd:bottom-[14rem]  imd:-left-16 lg:w-[13rem] lg:p-3 lg:bottom-[18rem]  lg:-left-16 llg:w-[14rem] llg:p-3 llg:bottom-[18rem]  llg:-left-16 xl:w-[15rem] xl:p-3 xl:bottom-[20rem]  xl:-left-16 2xl:w-[17rem] 2xl:p-4 2xl:bottom-[22rem]  2xl:-left-20",
                          children: [
                            c(
                              "img",
                              {
                                src: i.imgOwner,
                                className:
                                  i.id == 1 || i.id == 2
                                    ? "imd:w-14 imd:h-14 lg:w-16 lg:h-16 object-contain contrast-200"
                                    : "imd:w-14 imd:h-14 lg:w-16 lg:h-16 object-contain contrast-150 -skew-x-6",
                                alt: i.imgNameAlt,
                              },
                              i.id
                            ),
                            M("div", {
                              className: " pt-2",
                              children: [
                                c(
                                  "h2",
                                  {
                                    className:
                                      "lg:text-base llg:text-lg xl:text-xl 2xl:text-2xl font-semibold",
                                    children: i.imgName,
                                  },
                                  i.id
                                ),
                                c(
                                  "p",
                                  {
                                    className: "text-black",
                                    children: i.imgSmName,
                                  },
                                  i.id
                                ),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                })
              ),
            }),
            M("div", {
              className:
                " z-20 ring-1 ring-slate-400 backdrop-blur-2xl -skew-x-[8deg] absolute w-fit h-16  font-headerFont rounded-xl imd:p-2 imd:-left-[2.7rem]  imd:pb-4 imd:pr-4 imd:text-sm imd:top-[23rem] lg:p-3 lg:pb-6 lg:pr-7 lg:left-[7.8rem] lg:top-[28rem] llg:left-[16rem] llg:top-[27.6rem] xl:top-[29.2rem] xl:p-4 xl:pb-14 xl:pr-5 xl:left-[7.5rem] xl:text-base 2xl:left-[8rem]",
              children: [
                c("h3", { children: " Auction" }),
                c("br", {}),
                c("span", {
                  className: " text-xs relative bottom-4",
                  children: "End In",
                }),
              ],
            }),
            M("div", {
              className: " z-30 relative w-full h-full ",
              children: [
                c("img", {
                  src: fn,
                  alt: "liner gradient color",
                  className:
                    " z-40 absolute pointer-events-none  imd:-left-64 imd:-bottom-[30rem] lg:-left-40 lg:-bottom-[45rem] llg:-left-24 xl:-left-44  2xl:-left-52 2xl:-bottom-[42rem]",
                }),
                c("img", {
                  src: gn,
                  alt: "liner gradient color",
                  className:
                    " bg-right absolute -bottom-[48rem] -right-20 pointer-events-none imd:left-24 imd:-bottom-[38rem] lg:-bottom-[46rem] lg:left-44 llg:left-72 xl:-bottom-[52rem]",
                }),
                M("div", {
                  className:
                    " absolute font-headerFont backdrop-blur-lg outline-slate-500 outline outline-1  flex flex-nowrap items-center rounded-xl -skew-x-[8deg] imd:top-[23.8rem] imd:left-[3rem] lg:top-[29.5rem] imd:p-2 lg:left-[15rem] llg:top-[28.7rem] llg:p-3 llg:left-[22.5rem] xl:p-3 xl:top-[31rem] xl:left-[14rem]  2xl:left-[15.3rem] 2xl:p-5                           ",
                  children: [
                    M("h2", {
                      className: " inline-block text-center imd:px-2 xl:px-4 ",
                      children: [
                        c("span", {
                          className:
                            "imd:text-2xl xl:text-2xl 2xl:text-4xl imd:font-semibold",
                          children: r,
                        }),
                        c("br", {}),
                        "Hours",
                      ],
                    }),
                    c("span", {
                      className: "  imd:text-2xl xl:text-4xl xl:px-1 2xl:px-3",
                      children: ":",
                    }),
                    M("h2", {
                      className: " inline-block text-center imd:px-2  xl:px-4",
                      children: [
                        c("span", {
                          className:
                            "imd:text-2xl xl:text-2xl 2xl:text-4xl imd:font-semibold",
                          children: n,
                        }),
                        c("br", {}),
                        "Minutes",
                      ],
                    }),
                    c("span", {
                      className:
                        " imd:text-2xl xl:text-2xl 2xl:text-4xl xl:px-1 2xl:px-3",
                      children: ":",
                    }),
                    M("h2", {
                      className: " inline-block text-center imd:px-2 xl:px-4",
                      children: [
                        c("span", {
                          className:
                            "imd:text-2xl xl:text-2xl 2xl:text-4xl imd:font-semibold",
                          children: a,
                        }),
                        c("br", {}),
                        "Seconds",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  bn = "/assets/H1TextColor-8ff052ca.webp";
function We({ n: e, str: t }) {
  const { number: r } = Ls({
    from: { number: 0 },
    number: e,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return M("div", {
    className: " inline-block w-fi",
    children: [
      M("div", {
        className: "  flex justify-center items-center text-center mx-4",
        children: [c(an.div, { children: r.to((s) => s.toFixed(0)) }), "K+"],
      }),
      c("div", {
        className: " flex justify-center",
        children: c("p", {
          className: " text-sm font-normal text-slate-200",
          children: t,
        }),
      }),
    ],
  });
}
const vn = () =>
    M("section", {
      className: `lg:mt-14 mt-12 w-[89.6%] text-white \r
                 imd:flex imd:justify-between  imd:items-middle\r
                 xl:px-3 2xl:px-16 xl:w-[75rem] 2xl:w-11/12`,
      children: [
        M("section", {
          className: `relative my-6 text-center flex flex-col items-center\r
                          imd:text-left imd:items-start\r
                          `,
          children: [
            c("img", {
              src: bn,
              alt: "A linear gradient color",
              className: " absolute",
            }),
            M("h1", {
              className: ` relative bg-left exsm:text-6xl extsm:text-5xl text-[2.6rem] font-headerFont font-semibold\r
                      mb-7 \r
                      imd:text-[3rem]\r
                      lg:text-[4rem] lg:text-left \r
                      xl:text-[4.8rem]\r
                      2xl:text-[5.5rem] `,
              children: [
                "Discover",
                c("br", {}),
                "Collect, & Sell",
                c("br", {}),
                M("span", {
                  className:
                    "bg-gradient-to-r from-[#69EACB] via-[#EACCF8] to-[#6654F1] inline-block text-transparent bg-clip-text",
                  children: [" ", "Extraordinary", " "],
                }),
                c("br", {}),
                "NFTs",
              ],
            }),
            c("p", {
              className: ` font-poppi extsm:text-base  text-slate-200 extsm:w-96 relative bottom-7 \r
          sm:mt-5 text-xs w-80 extsm:px-1`,
              children:
                "The leading NFT Marketplace on Ethereum Home to the next generation of digital creators. Discover the best NFT collections.",
            }),
            M("div", {
              className: ` child:mx-3 imd:child:p-1  imd:child:py-1 imd:child:font-semibold child:cursor-pointer w-screen relative flex justify-evenly\r
                         imd:w-3/4 imd:justify-start imd:ml-1 imd:gap-4 imd:child:mx-0`,
              children: [
                c("button", {
                  className: ` bg-backColor p-1 h-fit w-28 focus:bg-sky-600 rounded-xl hover:ring-2 hover:ring-offset-2 hover:ring-offset-[#141843] hover:ring-sky-300\r
                          imd:rounded-full imd:ml-4 shadow-sm shadow-backColor\r
                          xl:p-3`,
                  children: "Explore",
                }),
                c("button", {
                  className: ` hover:ring-2 hover:ring-offset-2hover:ring-slate-400 hover:ring-offset-[#141843] border w-28 rounded-xl\r
                              imd:rounded-full shadow-sm shadow-slate-400`,
                  children: "Bid now",
                }),
              ],
            }),
            M("div", {
              className:
                " font-headerFont w-full mt-8 sm:text-2xl font-semibold",
              children: [
                c(We, { n: 432, str: "collections" }),
                c(We, { n: 200, str: "Artists" }),
                c(We, { n: 10, str: "Community" }),
              ],
            }),
          ],
        }),
        c("section", {
          className: " imd:w-[20rem] lg:w-[45rem] lg:mr-0 hidden imd:block",
          children: c(xn, {}),
        }),
      ],
    }),
  wn = "/assets/FPol-d20ecce5.webp",
  yn = () =>
    M("section", {
      className: " mt-16 w-screen",
      children: [
        c("img", {
          src: wn,
          alt: " Some Shades for design",
          className: " absolute w-screen",
        }),
        c("div", {}),
      ],
    }),
  Cn = () =>
    c("article", {
      className:
        " bg-no-repeat bg-contain w-screen h-screen flex flex-col justify-start gap-x-10 relative items-center bg-[#141845] overflow-x-hidden",
      children: c("section", {
        children: M("nav", {
          className:
            " bg-no-repeat w-screen h-screen flex flex-col justify-start gap-x-10 relative items-center overflow-x-hidden",
          children: [c(zr, {}), c(vn, {}), c(yn, {})],
        }),
      }),
    });
export { Cn as default };
