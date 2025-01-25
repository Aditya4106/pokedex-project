function hd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function js(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var md = { exports: {} },
  vl = {},
  gd = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ho = Symbol.for("react.element"),
  Vm = Symbol.for("react.portal"),
  Ym = Symbol.for("react.fragment"),
  Qm = Symbol.for("react.strict_mode"),
  Km = Symbol.for("react.profiler"),
  Xm = Symbol.for("react.provider"),
  Gm = Symbol.for("react.context"),
  Zm = Symbol.for("react.forward_ref"),
  Jm = Symbol.for("react.suspense"),
  qm = Symbol.for("react.memo"),
  eg = Symbol.for("react.lazy"),
  sc = Symbol.iterator;
function tg(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (sc && e[sc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var vd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  yd = Object.assign,
  wd = {};
function br(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = wd),
    (this.updater = n || vd);
}
br.prototype.isReactComponent = {};
br.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
br.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Sd() {}
Sd.prototype = br.prototype;
function Us(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = wd),
    (this.updater = n || vd);
}
var bs = (Us.prototype = new Sd());
bs.constructor = Us;
yd(bs, br.prototype);
bs.isPureReactComponent = !0;
var uc = Array.isArray,
  xd = Object.prototype.hasOwnProperty,
  $s = { current: null },
  kd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ed(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      xd.call(t, r) && !kd.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Ho,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: $s.current,
  };
}
function ng(e, t) {
  return {
    $$typeof: Ho,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Bs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ho;
}
function rg(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var cc = /\/+/g;
function Vl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? rg("" + e.key)
    : t.toString(36);
}
function Ci(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ho:
          case Vm:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + Vl(l, 0) : r),
      uc(o)
        ? ((n = ""),
          e != null && (n = e.replace(cc, "$&/") + "/"),
          Ci(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Bs(o) &&
            (o = ng(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(cc, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), uc(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + Vl(i, a);
      l += Ci(i, t, n, s, o);
    }
  else if (((s = tg(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Vl(i, a++)), (l += Ci(i, t, n, s, o));
  else if (i === "object")
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
  return l;
}
function ai(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ci(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function og(e) {
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
var Ye = { current: null },
  Pi = { transition: null },
  ig = {
    ReactCurrentDispatcher: Ye,
    ReactCurrentBatchConfig: Pi,
    ReactCurrentOwner: $s,
  };
function _d() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: ai,
  forEach: function (e, t, n) {
    ai(
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
      ai(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ai(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Bs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
X.Component = br;
X.Fragment = Ym;
X.Profiler = Km;
X.PureComponent = Us;
X.StrictMode = Qm;
X.Suspense = Jm;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ig;
X.act = _d;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = yd({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = $s.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      xd.call(t, s) &&
        !kd.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ho, type: e.type, key: o, ref: i, props: r, _owner: l };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: Gm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Xm, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = Ed;
X.createFactory = function (e) {
  var t = Ed.bind(null, e);
  return (t.type = e), t;
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: Zm, render: e };
};
X.isValidElement = Bs;
X.lazy = function (e) {
  return { $$typeof: eg, _payload: { _status: -1, _result: e }, _init: og };
};
X.memo = function (e, t) {
  return { $$typeof: qm, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = Pi.transition;
  Pi.transition = {};
  try {
    e();
  } finally {
    Pi.transition = t;
  }
};
X.unstable_act = _d;
X.useCallback = function (e, t) {
  return Ye.current.useCallback(e, t);
};
X.useContext = function (e) {
  return Ye.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return Ye.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return Ye.current.useEffect(e, t);
};
X.useId = function () {
  return Ye.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return Ye.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return Ye.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return Ye.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return Ye.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return Ye.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return Ye.current.useRef(e);
};
X.useState = function (e) {
  return Ye.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return Ye.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return Ye.current.useTransition();
};
X.version = "18.3.1";
gd.exports = X;
var N = gd.exports;
const Ws = js(N),
  lg = hd({ __proto__: null, default: Ws }, [N]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ag = N,
  sg = Symbol.for("react.element"),
  ug = Symbol.for("react.fragment"),
  cg = Object.prototype.hasOwnProperty,
  fg = ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cd(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) cg.call(t, r) && !dg.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: sg,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: fg.current,
  };
}
vl.Fragment = ug;
vl.jsx = Cd;
vl.jsxs = Cd;
md.exports = vl;
var U = md.exports,
  Pa = {},
  Pd = { exports: {} },
  at = {},
  Nd = { exports: {} },
  Td = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, W) {
    var H = M.length;
    M.push(W);
    e: for (; 0 < H; ) {
      var J = (H - 1) >>> 1,
        ae = M[J];
      if (0 < o(ae, W)) (M[J] = W), (M[H] = ae), (H = J);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var W = M[0],
      H = M.pop();
    if (H !== W) {
      M[0] = H;
      e: for (var J = 0, ae = M.length, Pt = ae >>> 1; J < Pt; ) {
        var Oe = 2 * (J + 1) - 1,
          gt = M[Oe],
          $e = Oe + 1,
          tr = M[$e];
        if (0 > o(gt, H))
          $e < ae && 0 > o(tr, gt)
            ? ((M[J] = tr), (M[$e] = H), (J = $e))
            : ((M[J] = gt), (M[Oe] = H), (J = Oe));
        else if ($e < ae && 0 > o(tr, H)) (M[J] = tr), (M[$e] = H), (J = $e);
        else break e;
      }
    }
    return W;
  }
  function o(M, W) {
    var H = M.sortIndex - W.sortIndex;
    return H !== 0 ? H : M.id - W.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    u = [],
    f = 1,
    c = null,
    p = 3,
    S = !1,
    w = !1,
    x = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(M) {
    for (var W = n(u); W !== null; ) {
      if (W.callback === null) r(u);
      else if (W.startTime <= M)
        r(u), (W.sortIndex = W.expirationTime), t(s, W);
      else break;
      W = n(u);
    }
  }
  function E(M) {
    if (((x = !1), g(M), !w))
      if (n(s) !== null) (w = !0), Jt(P);
      else {
        var W = n(u);
        W !== null && de(E, W.startTime - M);
      }
  }
  function P(M, W) {
    (w = !1), x && ((x = !1), h(R), (R = -1)), (S = !0);
    var H = p;
    try {
      for (
        g(W), c = n(s);
        c !== null && (!(c.expirationTime > W) || (M && !Z()));

      ) {
        var J = c.callback;
        if (typeof J == "function") {
          (c.callback = null), (p = c.priorityLevel);
          var ae = J(c.expirationTime <= W);
          (W = e.unstable_now()),
            typeof ae == "function" ? (c.callback = ae) : c === n(s) && r(s),
            g(W);
        } else r(s);
        c = n(s);
      }
      if (c !== null) var Pt = !0;
      else {
        var Oe = n(u);
        Oe !== null && de(E, Oe.startTime - W), (Pt = !1);
      }
      return Pt;
    } finally {
      (c = null), (p = H), (S = !1);
    }
  }
  var y = !1,
    O = null,
    R = -1,
    F = 5,
    z = -1;
  function Z() {
    return !(e.unstable_now() - z < F);
  }
  function fe() {
    if (O !== null) {
      var M = e.unstable_now();
      z = M;
      var W = !0;
      try {
        W = O(!0, M);
      } finally {
        W ? Te() : ((y = !1), (O = null));
      }
    } else y = !1;
  }
  var Te;
  if (typeof d == "function")
    Te = function () {
      d(fe);
    };
  else if (typeof MessageChannel < "u") {
    var ie = new MessageChannel(),
      Ct = ie.port2;
    (ie.port1.onmessage = fe),
      (Te = function () {
        Ct.postMessage(null);
      });
  } else
    Te = function () {
      C(fe, 0);
    };
  function Jt(M) {
    (O = M), y || ((y = !0), Te());
  }
  function de(M, W) {
    R = C(function () {
      M(e.unstable_now());
    }, W);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || S || ((w = !0), Jt(P));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (M) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = p;
      }
      var H = p;
      p = W;
      try {
        return M();
      } finally {
        p = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, W) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var H = p;
      p = M;
      try {
        return W();
      } finally {
        p = H;
      }
    }),
    (e.unstable_scheduleCallback = function (M, W, H) {
      var J = e.unstable_now();
      switch (
        (typeof H == "object" && H !== null
          ? ((H = H.delay), (H = typeof H == "number" && 0 < H ? J + H : J))
          : (H = J),
        M)
      ) {
        case 1:
          var ae = -1;
          break;
        case 2:
          ae = 250;
          break;
        case 5:
          ae = 1073741823;
          break;
        case 4:
          ae = 1e4;
          break;
        default:
          ae = 5e3;
      }
      return (
        (ae = H + ae),
        (M = {
          id: f++,
          callback: W,
          priorityLevel: M,
          startTime: H,
          expirationTime: ae,
          sortIndex: -1,
        }),
        H > J
          ? ((M.sortIndex = H),
            t(u, M),
            n(s) === null &&
              M === n(u) &&
              (x ? (h(R), (R = -1)) : (x = !0), de(E, H - J)))
          : ((M.sortIndex = ae), t(s, M), w || S || ((w = !0), Jt(P))),
        M
      );
    }),
    (e.unstable_shouldYield = Z),
    (e.unstable_wrapCallback = function (M) {
      var W = p;
      return function () {
        var H = p;
        p = W;
        try {
          return M.apply(this, arguments);
        } finally {
          p = H;
        }
      };
    });
})(Td);
Nd.exports = Td;
var pg = Nd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hg = N,
  lt = pg;
function T(e) {
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
var Rd = new Set(),
  Eo = {};
function Jn(e, t) {
  Lr(e, t), Lr(e + "Capture", t);
}
function Lr(e, t) {
  for (Eo[e] = t, e = 0; e < t.length; e++) Rd.add(t[e]);
}
var Ht = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Na = Object.prototype.hasOwnProperty,
  mg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  fc = {},
  dc = {};
function gg(e) {
  return Na.call(dc, e)
    ? !0
    : Na.call(fc, e)
    ? !1
    : mg.test(e)
    ? (dc[e] = !0)
    : ((fc[e] = !0), !1);
}
function vg(e, t, n, r) {
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
function yg(e, t, n, r) {
  if (t === null || typeof t > "u" || vg(e, t, n, r)) return !0;
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
function Qe(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var ze = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ze[e] = new Qe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ze[t] = new Qe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ze[e] = new Qe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ze[e] = new Qe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ze[e] = new Qe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ze[e] = new Qe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ze[e] = new Qe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ze[e] = new Qe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ze[e] = new Qe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Hs = /[\-:]([a-z])/g;
function Vs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Hs, Vs);
    ze[t] = new Qe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Hs, Vs);
    ze[t] = new Qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Hs, Vs);
  ze[t] = new Qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ze[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ze.xlinkHref = new Qe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ze[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ys(e, t, n, r) {
  var o = ze.hasOwnProperty(t) ? ze[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (yg(t, n, o, r) && (n = null),
    r || o === null
      ? gg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Gt = hg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  si = Symbol.for("react.element"),
  sr = Symbol.for("react.portal"),
  ur = Symbol.for("react.fragment"),
  Qs = Symbol.for("react.strict_mode"),
  Ta = Symbol.for("react.profiler"),
  Ld = Symbol.for("react.provider"),
  Od = Symbol.for("react.context"),
  Ks = Symbol.for("react.forward_ref"),
  Ra = Symbol.for("react.suspense"),
  La = Symbol.for("react.suspense_list"),
  Xs = Symbol.for("react.memo"),
  ln = Symbol.for("react.lazy"),
  Md = Symbol.for("react.offscreen"),
  pc = Symbol.iterator;
function Qr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pc && e[pc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var we = Object.assign,
  Yl;
function oo(e) {
  if (Yl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Yl = (t && t[1]) || "";
    }
  return (
    `
` +
    Yl +
    e
  );
}
var Ql = !1;
function Kl(e, t) {
  if (!e || Ql) return "";
  Ql = !0;
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
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a])) {
                var s =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (Ql = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? oo(e) : "";
}
function wg(e) {
  switch (e.tag) {
    case 5:
      return oo(e.type);
    case 16:
      return oo("Lazy");
    case 13:
      return oo("Suspense");
    case 19:
      return oo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Kl(e.type, !1)), e;
    case 11:
      return (e = Kl(e.type.render, !1)), e;
    case 1:
      return (e = Kl(e.type, !0)), e;
    default:
      return "";
  }
}
function Oa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ur:
      return "Fragment";
    case sr:
      return "Portal";
    case Ta:
      return "Profiler";
    case Qs:
      return "StrictMode";
    case Ra:
      return "Suspense";
    case La:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Od:
        return (e.displayName || "Context") + ".Consumer";
      case Ld:
        return (e._context.displayName || "Context") + ".Provider";
      case Ks:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Xs:
        return (
          (t = e.displayName || null), t !== null ? t : Oa(e.type) || "Memo"
        );
      case ln:
        (t = e._payload), (e = e._init);
        try {
          return Oa(e(t));
        } catch {}
    }
  return null;
}
function Sg(e) {
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
      return Oa(t);
    case 8:
      return t === Qs ? "StrictMode" : "Mode";
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
function kn(e) {
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
function Dd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function xg(e) {
  var t = Dd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ui(e) {
  e._valueTracker || (e._valueTracker = xg(e));
}
function Ad(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Dd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function bi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ma(e, t) {
  var n = t.checked;
  return we({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function hc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = kn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Id(e, t) {
  (t = t.checked), t != null && Ys(e, "checked", t, !1);
}
function Da(e, t) {
  Id(e, t);
  var n = kn(t.value),
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
    ? Aa(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Aa(e, t.type, kn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function mc(e, t, n) {
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
function Aa(e, t, n) {
  (t !== "number" || bi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var io = Array.isArray;
function Er(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ia(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return we({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function gc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (io(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: kn(n) };
}
function zd(e, t) {
  var n = kn(t.value),
    r = kn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function vc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function za(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Fd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ci,
  jd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ci = ci || document.createElement("div"),
          ci.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ci.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _o(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fo = {
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
  kg = ["Webkit", "ms", "Moz", "O"];
Object.keys(fo).forEach(function (e) {
  kg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (fo[t] = fo[e]);
  });
});
function Ud(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (fo.hasOwnProperty(e) && fo[e])
    ? ("" + t).trim()
    : t + "px";
}
function bd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Ud(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Eg = we(
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
function Fa(e, t) {
  if (t) {
    if (Eg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function ja(e, t) {
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
var Ua = null;
function Gs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ba = null,
  _r = null,
  Cr = null;
function yc(e) {
  if ((e = Qo(e))) {
    if (typeof ba != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = kl(t)), ba(e.stateNode, e.type, t));
  }
}
function $d(e) {
  _r ? (Cr ? Cr.push(e) : (Cr = [e])) : (_r = e);
}
function Bd() {
  if (_r) {
    var e = _r,
      t = Cr;
    if (((Cr = _r = null), yc(e), t)) for (e = 0; e < t.length; e++) yc(t[e]);
  }
}
function Wd(e, t) {
  return e(t);
}
function Hd() {}
var Xl = !1;
function Vd(e, t, n) {
  if (Xl) return e(t, n);
  Xl = !0;
  try {
    return Wd(e, t, n);
  } finally {
    (Xl = !1), (_r !== null || Cr !== null) && (Hd(), Bd());
  }
}
function Co(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = kl(n);
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
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var $a = !1;
if (Ht)
  try {
    var Kr = {};
    Object.defineProperty(Kr, "passive", {
      get: function () {
        $a = !0;
      },
    }),
      window.addEventListener("test", Kr, Kr),
      window.removeEventListener("test", Kr, Kr);
  } catch {
    $a = !1;
  }
function _g(e, t, n, r, o, i, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var po = !1,
  $i = null,
  Bi = !1,
  Ba = null,
  Cg = {
    onError: function (e) {
      (po = !0), ($i = e);
    },
  };
function Pg(e, t, n, r, o, i, l, a, s) {
  (po = !1), ($i = null), _g.apply(Cg, arguments);
}
function Ng(e, t, n, r, o, i, l, a, s) {
  if ((Pg.apply(this, arguments), po)) {
    if (po) {
      var u = $i;
      (po = !1), ($i = null);
    } else throw Error(T(198));
    Bi || ((Bi = !0), (Ba = u));
  }
}
function qn(e) {
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
function Yd(e) {
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
function wc(e) {
  if (qn(e) !== e) throw Error(T(188));
}
function Tg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = qn(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return wc(o), e;
        if (i === r) return wc(o), t;
        i = i.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function Qd(e) {
  return (e = Tg(e)), e !== null ? Kd(e) : null;
}
function Kd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Kd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Xd = lt.unstable_scheduleCallback,
  Sc = lt.unstable_cancelCallback,
  Rg = lt.unstable_shouldYield,
  Lg = lt.unstable_requestPaint,
  ke = lt.unstable_now,
  Og = lt.unstable_getCurrentPriorityLevel,
  Zs = lt.unstable_ImmediatePriority,
  Gd = lt.unstable_UserBlockingPriority,
  Wi = lt.unstable_NormalPriority,
  Mg = lt.unstable_LowPriority,
  Zd = lt.unstable_IdlePriority,
  yl = null,
  At = null;
function Dg(e) {
  if (At && typeof At.onCommitFiberRoot == "function")
    try {
      At.onCommitFiberRoot(yl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var kt = Math.clz32 ? Math.clz32 : zg,
  Ag = Math.log,
  Ig = Math.LN2;
function zg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ag(e) / Ig) | 0)) | 0;
}
var fi = 64,
  di = 4194304;
function lo(e) {
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
function Hi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? (r = lo(a)) : ((i &= l), i !== 0 && (r = lo(i)));
  } else (l = n & ~o), l !== 0 ? (r = lo(l)) : i !== 0 && (r = lo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - kt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Fg(e, t) {
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
function jg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - kt(i),
      a = 1 << l,
      s = o[l];
    s === -1
      ? (!(a & n) || a & r) && (o[l] = Fg(a, t))
      : s <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Wa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Jd() {
  var e = fi;
  return (fi <<= 1), !(fi & 4194240) && (fi = 64), e;
}
function Gl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Vo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - kt(t)),
    (e[t] = n);
}
function Ug(e, t) {
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
    var o = 31 - kt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Js(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - kt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var te = 0;
function qd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ep,
  qs,
  tp,
  np,
  rp,
  Ha = !1,
  pi = [],
  pn = null,
  hn = null,
  mn = null,
  Po = new Map(),
  No = new Map(),
  sn = [],
  bg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function xc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pn = null;
      break;
    case "dragenter":
    case "dragleave":
      hn = null;
      break;
    case "mouseover":
    case "mouseout":
      mn = null;
      break;
    case "pointerover":
    case "pointerout":
      Po.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      No.delete(t.pointerId);
  }
}
function Xr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Qo(t)), t !== null && qs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function $g(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (pn = Xr(pn, e, t, n, r, o)), !0;
    case "dragenter":
      return (hn = Xr(hn, e, t, n, r, o)), !0;
    case "mouseover":
      return (mn = Xr(mn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Po.set(i, Xr(Po.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), No.set(i, Xr(No.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function op(e) {
  var t = zn(e.target);
  if (t !== null) {
    var n = qn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Yd(n)), t !== null)) {
          (e.blockedOn = t),
            rp(e.priority, function () {
              tp(n);
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
function Ni(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Va(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ua = r), n.target.dispatchEvent(r), (Ua = null);
    } else return (t = Qo(n)), t !== null && qs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function kc(e, t, n) {
  Ni(e) && n.delete(t);
}
function Bg() {
  (Ha = !1),
    pn !== null && Ni(pn) && (pn = null),
    hn !== null && Ni(hn) && (hn = null),
    mn !== null && Ni(mn) && (mn = null),
    Po.forEach(kc),
    No.forEach(kc);
}
function Gr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ha ||
      ((Ha = !0),
      lt.unstable_scheduleCallback(lt.unstable_NormalPriority, Bg)));
}
function To(e) {
  function t(o) {
    return Gr(o, e);
  }
  if (0 < pi.length) {
    Gr(pi[0], e);
    for (var n = 1; n < pi.length; n++) {
      var r = pi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pn !== null && Gr(pn, e),
      hn !== null && Gr(hn, e),
      mn !== null && Gr(mn, e),
      Po.forEach(t),
      No.forEach(t),
      n = 0;
    n < sn.length;
    n++
  )
    (r = sn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < sn.length && ((n = sn[0]), n.blockedOn === null); )
    op(n), n.blockedOn === null && sn.shift();
}
var Pr = Gt.ReactCurrentBatchConfig,
  Vi = !0;
function Wg(e, t, n, r) {
  var o = te,
    i = Pr.transition;
  Pr.transition = null;
  try {
    (te = 1), eu(e, t, n, r);
  } finally {
    (te = o), (Pr.transition = i);
  }
}
function Hg(e, t, n, r) {
  var o = te,
    i = Pr.transition;
  Pr.transition = null;
  try {
    (te = 4), eu(e, t, n, r);
  } finally {
    (te = o), (Pr.transition = i);
  }
}
function eu(e, t, n, r) {
  if (Vi) {
    var o = Va(e, t, n, r);
    if (o === null) la(e, t, r, Yi, n), xc(e, r);
    else if ($g(o, e, t, n, r)) r.stopPropagation();
    else if ((xc(e, r), t & 4 && -1 < bg.indexOf(e))) {
      for (; o !== null; ) {
        var i = Qo(o);
        if (
          (i !== null && ep(i),
          (i = Va(e, t, n, r)),
          i === null && la(e, t, r, Yi, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else la(e, t, r, null, n);
  }
}
var Yi = null;
function Va(e, t, n, r) {
  if (((Yi = null), (e = Gs(r)), (e = zn(e)), e !== null))
    if (((t = qn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Yd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Yi = e), null;
}
function ip(e) {
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
      switch (Og()) {
        case Zs:
          return 1;
        case Gd:
          return 4;
        case Wi:
        case Mg:
          return 16;
        case Zd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var cn = null,
  tu = null,
  Ti = null;
function lp() {
  if (Ti) return Ti;
  var e,
    t = tu,
    n = t.length,
    r,
    o = "value" in cn ? cn.value : cn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Ti = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ri(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function hi() {
  return !0;
}
function Ec() {
  return !1;
}
function st(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? hi
        : Ec),
      (this.isPropagationStopped = Ec),
      this
    );
  }
  return (
    we(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = hi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = hi));
      },
      persist: function () {},
      isPersistent: hi,
    }),
    t
  );
}
var $r = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  nu = st($r),
  Yo = we({}, $r, { view: 0, detail: 0 }),
  Vg = st(Yo),
  Zl,
  Jl,
  Zr,
  wl = we({}, Yo, {
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
    getModifierState: ru,
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
        : (e !== Zr &&
            (Zr && e.type === "mousemove"
              ? ((Zl = e.screenX - Zr.screenX), (Jl = e.screenY - Zr.screenY))
              : (Jl = Zl = 0),
            (Zr = e)),
          Zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Jl;
    },
  }),
  _c = st(wl),
  Yg = we({}, wl, { dataTransfer: 0 }),
  Qg = st(Yg),
  Kg = we({}, Yo, { relatedTarget: 0 }),
  ql = st(Kg),
  Xg = we({}, $r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gg = st(Xg),
  Zg = we({}, $r, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jg = st(Zg),
  qg = we({}, $r, { data: 0 }),
  Cc = st(qg),
  ev = {
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
  tv = {
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
  nv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function rv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = nv[e]) ? !!t[e] : !1;
}
function ru() {
  return rv;
}
var ov = we({}, Yo, {
    key: function (e) {
      if (e.key) {
        var t = ev[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ri(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? tv[e.keyCode] || "Unidentified"
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
    getModifierState: ru,
    charCode: function (e) {
      return e.type === "keypress" ? Ri(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ri(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  iv = st(ov),
  lv = we({}, wl, {
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
  Pc = st(lv),
  av = we({}, Yo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ru,
  }),
  sv = st(av),
  uv = we({}, $r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cv = st(uv),
  fv = we({}, wl, {
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
  dv = st(fv),
  pv = [9, 13, 27, 32],
  ou = Ht && "CompositionEvent" in window,
  ho = null;
Ht && "documentMode" in document && (ho = document.documentMode);
var hv = Ht && "TextEvent" in window && !ho,
  ap = Ht && (!ou || (ho && 8 < ho && 11 >= ho)),
  Nc = " ",
  Tc = !1;
function sp(e, t) {
  switch (e) {
    case "keyup":
      return pv.indexOf(t.keyCode) !== -1;
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
function up(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var cr = !1;
function mv(e, t) {
  switch (e) {
    case "compositionend":
      return up(t);
    case "keypress":
      return t.which !== 32 ? null : ((Tc = !0), Nc);
    case "textInput":
      return (e = t.data), e === Nc && Tc ? null : e;
    default:
      return null;
  }
}
function gv(e, t) {
  if (cr)
    return e === "compositionend" || (!ou && sp(e, t))
      ? ((e = lp()), (Ti = tu = cn = null), (cr = !1), e)
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
      return ap && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vv = {
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
function Rc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vv[e.type] : t === "textarea";
}
function cp(e, t, n, r) {
  $d(r),
    (t = Qi(t, "onChange")),
    0 < t.length &&
      ((n = new nu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var mo = null,
  Ro = null;
function yv(e) {
  xp(e, 0);
}
function Sl(e) {
  var t = pr(e);
  if (Ad(t)) return e;
}
function wv(e, t) {
  if (e === "change") return t;
}
var fp = !1;
if (Ht) {
  var ea;
  if (Ht) {
    var ta = "oninput" in document;
    if (!ta) {
      var Lc = document.createElement("div");
      Lc.setAttribute("oninput", "return;"),
        (ta = typeof Lc.oninput == "function");
    }
    ea = ta;
  } else ea = !1;
  fp = ea && (!document.documentMode || 9 < document.documentMode);
}
function Oc() {
  mo && (mo.detachEvent("onpropertychange", dp), (Ro = mo = null));
}
function dp(e) {
  if (e.propertyName === "value" && Sl(Ro)) {
    var t = [];
    cp(t, Ro, e, Gs(e)), Vd(yv, t);
  }
}
function Sv(e, t, n) {
  e === "focusin"
    ? (Oc(), (mo = t), (Ro = n), mo.attachEvent("onpropertychange", dp))
    : e === "focusout" && Oc();
}
function xv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Sl(Ro);
}
function kv(e, t) {
  if (e === "click") return Sl(t);
}
function Ev(e, t) {
  if (e === "input" || e === "change") return Sl(t);
}
function _v(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _t = typeof Object.is == "function" ? Object.is : _v;
function Lo(e, t) {
  if (_t(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Na.call(t, o) || !_t(e[o], t[o])) return !1;
  }
  return !0;
}
function Mc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Dc(e, t) {
  var n = Mc(e);
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
    n = Mc(n);
  }
}
function pp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? pp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function hp() {
  for (var e = window, t = bi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = bi(e.document);
  }
  return t;
}
function iu(e) {
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
function Cv(e) {
  var t = hp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    pp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && iu(n)) {
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
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Dc(n, i));
        var l = Dc(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
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
var Pv = Ht && "documentMode" in document && 11 >= document.documentMode,
  fr = null,
  Ya = null,
  go = null,
  Qa = !1;
function Ac(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Qa ||
    fr == null ||
    fr !== bi(r) ||
    ((r = fr),
    "selectionStart" in r && iu(r)
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
    (go && Lo(go, r)) ||
      ((go = r),
      (r = Qi(Ya, "onSelect")),
      0 < r.length &&
        ((t = new nu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = fr))));
}
function mi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var dr = {
    animationend: mi("Animation", "AnimationEnd"),
    animationiteration: mi("Animation", "AnimationIteration"),
    animationstart: mi("Animation", "AnimationStart"),
    transitionend: mi("Transition", "TransitionEnd"),
  },
  na = {},
  mp = {};
Ht &&
  ((mp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete dr.animationend.animation,
    delete dr.animationiteration.animation,
    delete dr.animationstart.animation),
  "TransitionEvent" in window || delete dr.transitionend.transition);
function xl(e) {
  if (na[e]) return na[e];
  if (!dr[e]) return e;
  var t = dr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in mp) return (na[e] = t[n]);
  return e;
}
var gp = xl("animationend"),
  vp = xl("animationiteration"),
  yp = xl("animationstart"),
  wp = xl("transitionend"),
  Sp = new Map(),
  Ic =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Nn(e, t) {
  Sp.set(e, t), Jn(t, [e]);
}
for (var ra = 0; ra < Ic.length; ra++) {
  var oa = Ic[ra],
    Nv = oa.toLowerCase(),
    Tv = oa[0].toUpperCase() + oa.slice(1);
  Nn(Nv, "on" + Tv);
}
Nn(gp, "onAnimationEnd");
Nn(vp, "onAnimationIteration");
Nn(yp, "onAnimationStart");
Nn("dblclick", "onDoubleClick");
Nn("focusin", "onFocus");
Nn("focusout", "onBlur");
Nn(wp, "onTransitionEnd");
Lr("onMouseEnter", ["mouseout", "mouseover"]);
Lr("onMouseLeave", ["mouseout", "mouseover"]);
Lr("onPointerEnter", ["pointerout", "pointerover"]);
Lr("onPointerLeave", ["pointerout", "pointerover"]);
Jn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Jn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Jn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Jn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ao =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Rv = new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));
function zc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ng(r, t, void 0, e), (e.currentTarget = null);
}
function xp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== i && o.isPropagationStopped())) break e;
          zc(o, a, u), (i = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          zc(o, a, u), (i = s);
        }
    }
  }
  if (Bi) throw ((e = Ba), (Bi = !1), (Ba = null), e);
}
function se(e, t) {
  var n = t[Ja];
  n === void 0 && (n = t[Ja] = new Set());
  var r = e + "__bubble";
  n.has(r) || (kp(t, e, 2, !1), n.add(r));
}
function ia(e, t, n) {
  var r = 0;
  t && (r |= 4), kp(n, e, r, t);
}
var gi = "_reactListening" + Math.random().toString(36).slice(2);
function Oo(e) {
  if (!e[gi]) {
    (e[gi] = !0),
      Rd.forEach(function (n) {
        n !== "selectionchange" && (Rv.has(n) || ia(n, !1, e), ia(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gi] || ((t[gi] = !0), ia("selectionchange", !1, t));
  }
}
function kp(e, t, n, r) {
  switch (ip(t)) {
    case 1:
      var o = Wg;
      break;
    case 4:
      o = Hg;
      break;
    default:
      o = eu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !$a ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function la(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = zn(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Vd(function () {
    var u = i,
      f = Gs(n),
      c = [];
    e: {
      var p = Sp.get(e);
      if (p !== void 0) {
        var S = nu,
          w = e;
        switch (e) {
          case "keypress":
            if (Ri(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = iv;
            break;
          case "focusin":
            (w = "focus"), (S = ql);
            break;
          case "focusout":
            (w = "blur"), (S = ql);
            break;
          case "beforeblur":
          case "afterblur":
            S = ql;
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
            S = _c;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Qg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = sv;
            break;
          case gp:
          case vp:
          case yp:
            S = Gg;
            break;
          case wp:
            S = cv;
            break;
          case "scroll":
            S = Vg;
            break;
          case "wheel":
            S = dv;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Jg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Pc;
        }
        var x = (t & 4) !== 0,
          C = !x && e === "scroll",
          h = x ? (p !== null ? p + "Capture" : null) : p;
        x = [];
        for (var d = u, g; d !== null; ) {
          g = d;
          var E = g.stateNode;
          if (
            (g.tag === 5 &&
              E !== null &&
              ((g = E),
              h !== null && ((E = Co(d, h)), E != null && x.push(Mo(d, E, g)))),
            C)
          )
            break;
          d = d.return;
        }
        0 < x.length &&
          ((p = new S(p, w, null, n, f)), c.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Ua &&
            (w = n.relatedTarget || n.fromElement) &&
            (zn(w) || w[Vt]))
        )
          break e;
        if (
          (S || p) &&
          ((p =
            f.window === f
              ? f
              : (p = f.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          S
            ? ((w = n.relatedTarget || n.toElement),
              (S = u),
              (w = w ? zn(w) : null),
              w !== null &&
                ((C = qn(w)), w !== C || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((S = null), (w = u)),
          S !== w)
        ) {
          if (
            ((x = _c),
            (E = "onMouseLeave"),
            (h = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Pc),
              (E = "onPointerLeave"),
              (h = "onPointerEnter"),
              (d = "pointer")),
            (C = S == null ? p : pr(S)),
            (g = w == null ? p : pr(w)),
            (p = new x(E, d + "leave", S, n, f)),
            (p.target = C),
            (p.relatedTarget = g),
            (E = null),
            zn(f) === u &&
              ((x = new x(h, d + "enter", w, n, f)),
              (x.target = g),
              (x.relatedTarget = C),
              (E = x)),
            (C = E),
            S && w)
          )
            t: {
              for (x = S, h = w, d = 0, g = x; g; g = lr(g)) d++;
              for (g = 0, E = h; E; E = lr(E)) g++;
              for (; 0 < d - g; ) (x = lr(x)), d--;
              for (; 0 < g - d; ) (h = lr(h)), g--;
              for (; d--; ) {
                if (x === h || (h !== null && x === h.alternate)) break t;
                (x = lr(x)), (h = lr(h));
              }
              x = null;
            }
          else x = null;
          S !== null && Fc(c, p, S, x, !1),
            w !== null && C !== null && Fc(c, C, w, x, !0);
        }
      }
      e: {
        if (
          ((p = u ? pr(u) : window),
          (S = p.nodeName && p.nodeName.toLowerCase()),
          S === "select" || (S === "input" && p.type === "file"))
        )
          var P = wv;
        else if (Rc(p))
          if (fp) P = Ev;
          else {
            P = xv;
            var y = Sv;
          }
        else
          (S = p.nodeName) &&
            S.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (P = kv);
        if (P && (P = P(e, u))) {
          cp(c, P, n, f);
          break e;
        }
        y && y(e, p, u),
          e === "focusout" &&
            (y = p._wrapperState) &&
            y.controlled &&
            p.type === "number" &&
            Aa(p, "number", p.value);
      }
      switch (((y = u ? pr(u) : window), e)) {
        case "focusin":
          (Rc(y) || y.contentEditable === "true") &&
            ((fr = y), (Ya = u), (go = null));
          break;
        case "focusout":
          go = Ya = fr = null;
          break;
        case "mousedown":
          Qa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Qa = !1), Ac(c, n, f);
          break;
        case "selectionchange":
          if (Pv) break;
        case "keydown":
        case "keyup":
          Ac(c, n, f);
      }
      var O;
      if (ou)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        cr
          ? sp(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (ap &&
          n.locale !== "ko" &&
          (cr || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && cr && (O = lp())
            : ((cn = f),
              (tu = "value" in cn ? cn.value : cn.textContent),
              (cr = !0))),
        (y = Qi(u, R)),
        0 < y.length &&
          ((R = new Cc(R, e, null, n, f)),
          c.push({ event: R, listeners: y }),
          O ? (R.data = O) : ((O = up(n)), O !== null && (R.data = O)))),
        (O = hv ? mv(e, n) : gv(e, n)) &&
          ((u = Qi(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new Cc("onBeforeInput", "beforeinput", null, n, f)),
            c.push({ event: f, listeners: u }),
            (f.data = O)));
    }
    xp(c, t);
  });
}
function Mo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Qi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Co(e, n)),
      i != null && r.unshift(Mo(e, i, o)),
      (i = Co(e, t)),
      i != null && r.push(Mo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function lr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Fc(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((s = Co(n, i)), s != null && l.unshift(Mo(n, s, a)))
        : o || ((s = Co(n, i)), s != null && l.push(Mo(n, s, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Lv = /\r\n?/g,
  Ov = /\u0000|\uFFFD/g;
function jc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Lv,
      `
`
    )
    .replace(Ov, "");
}
function vi(e, t, n) {
  if (((t = jc(t)), jc(e) !== t && n)) throw Error(T(425));
}
function Ki() {}
var Ka = null,
  Xa = null;
function Ga(e, t) {
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
var Za = typeof setTimeout == "function" ? setTimeout : void 0,
  Mv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Uc = typeof Promise == "function" ? Promise : void 0,
  Dv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Uc < "u"
      ? function (e) {
          return Uc.resolve(null).then(e).catch(Av);
        }
      : Za;
function Av(e) {
  setTimeout(function () {
    throw e;
  });
}
function aa(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), To(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  To(t);
}
function gn(e) {
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
function bc(e) {
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
var Br = Math.random().toString(36).slice(2),
  Ot = "__reactFiber$" + Br,
  Do = "__reactProps$" + Br,
  Vt = "__reactContainer$" + Br,
  Ja = "__reactEvents$" + Br,
  Iv = "__reactListeners$" + Br,
  zv = "__reactHandles$" + Br;
function zn(e) {
  var t = e[Ot];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Vt] || n[Ot])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = bc(e); e !== null; ) {
          if ((n = e[Ot])) return n;
          e = bc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Qo(e) {
  return (
    (e = e[Ot] || e[Vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function pr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function kl(e) {
  return e[Do] || null;
}
var qa = [],
  hr = -1;
function Tn(e) {
  return { current: e };
}
function ue(e) {
  0 > hr || ((e.current = qa[hr]), (qa[hr] = null), hr--);
}
function le(e, t) {
  hr++, (qa[hr] = e.current), (e.current = t);
}
var En = {},
  be = Tn(En),
  Ge = Tn(!1),
  Vn = En;
function Or(e, t) {
  var n = e.type.contextTypes;
  if (!n) return En;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ze(e) {
  return (e = e.childContextTypes), e != null;
}
function Xi() {
  ue(Ge), ue(be);
}
function $c(e, t, n) {
  if (be.current !== En) throw Error(T(168));
  le(be, t), le(Ge, n);
}
function Ep(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(T(108, Sg(e) || "Unknown", o));
  return we({}, n, r);
}
function Gi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || En),
    (Vn = be.current),
    le(be, e),
    le(Ge, Ge.current),
    !0
  );
}
function Bc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = Ep(e, t, Vn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ue(Ge),
      ue(be),
      le(be, e))
    : ue(Ge),
    le(Ge, n);
}
var bt = null,
  El = !1,
  sa = !1;
function _p(e) {
  bt === null ? (bt = [e]) : bt.push(e);
}
function Fv(e) {
  (El = !0), _p(e);
}
function Rn() {
  if (!sa && bt !== null) {
    sa = !0;
    var e = 0,
      t = te;
    try {
      var n = bt;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (bt = null), (El = !1);
    } catch (o) {
      throw (bt !== null && (bt = bt.slice(e + 1)), Xd(Zs, Rn), o);
    } finally {
      (te = t), (sa = !1);
    }
  }
  return null;
}
var mr = [],
  gr = 0,
  Zi = null,
  Ji = 0,
  ct = [],
  ft = 0,
  Yn = null,
  $t = 1,
  Bt = "";
function Mn(e, t) {
  (mr[gr++] = Ji), (mr[gr++] = Zi), (Zi = e), (Ji = t);
}
function Cp(e, t, n) {
  (ct[ft++] = $t), (ct[ft++] = Bt), (ct[ft++] = Yn), (Yn = e);
  var r = $t;
  e = Bt;
  var o = 32 - kt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - kt(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      ($t = (1 << (32 - kt(t) + o)) | (n << o) | r),
      (Bt = i + e);
  } else ($t = (1 << i) | (n << o) | r), (Bt = e);
}
function lu(e) {
  e.return !== null && (Mn(e, 1), Cp(e, 1, 0));
}
function au(e) {
  for (; e === Zi; )
    (Zi = mr[--gr]), (mr[gr] = null), (Ji = mr[--gr]), (mr[gr] = null);
  for (; e === Yn; )
    (Yn = ct[--ft]),
      (ct[ft] = null),
      (Bt = ct[--ft]),
      (ct[ft] = null),
      ($t = ct[--ft]),
      (ct[ft] = null);
}
var rt = null,
  nt = null,
  he = !1,
  xt = null;
function Pp(e, t) {
  var n = dt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Wc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (rt = e), (nt = gn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (rt = e), (nt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Yn !== null ? { id: $t, overflow: Bt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = dt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (rt = e),
            (nt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function es(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ts(e) {
  if (he) {
    var t = nt;
    if (t) {
      var n = t;
      if (!Wc(e, t)) {
        if (es(e)) throw Error(T(418));
        t = gn(n.nextSibling);
        var r = rt;
        t && Wc(e, t)
          ? Pp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (he = !1), (rt = e));
      }
    } else {
      if (es(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (he = !1), (rt = e);
    }
  }
}
function Hc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  rt = e;
}
function yi(e) {
  if (e !== rt) return !1;
  if (!he) return Hc(e), (he = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ga(e.type, e.memoizedProps))),
    t && (t = nt))
  ) {
    if (es(e)) throw (Np(), Error(T(418)));
    for (; t; ) Pp(e, t), (t = gn(t.nextSibling));
  }
  if ((Hc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              nt = gn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      nt = null;
    }
  } else nt = rt ? gn(e.stateNode.nextSibling) : null;
  return !0;
}
function Np() {
  for (var e = nt; e; ) e = gn(e.nextSibling);
}
function Mr() {
  (nt = rt = null), (he = !1);
}
function su(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
var jv = Gt.ReactCurrentBatchConfig;
function Jr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = o.refs;
            l === null ? delete a[i] : (a[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function wi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Vc(e) {
  var t = e._init;
  return t(e._payload);
}
function Tp(e) {
  function t(h, d) {
    if (e) {
      var g = h.deletions;
      g === null ? ((h.deletions = [d]), (h.flags |= 16)) : g.push(d);
    }
  }
  function n(h, d) {
    if (!e) return null;
    for (; d !== null; ) t(h, d), (d = d.sibling);
    return null;
  }
  function r(h, d) {
    for (h = new Map(); d !== null; )
      d.key !== null ? h.set(d.key, d) : h.set(d.index, d), (d = d.sibling);
    return h;
  }
  function o(h, d) {
    return (h = Sn(h, d)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, d, g) {
    return (
      (h.index = g),
      e
        ? ((g = h.alternate),
          g !== null
            ? ((g = g.index), g < d ? ((h.flags |= 2), d) : g)
            : ((h.flags |= 2), d))
        : ((h.flags |= 1048576), d)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, d, g, E) {
    return d === null || d.tag !== 6
      ? ((d = ma(g, h.mode, E)), (d.return = h), d)
      : ((d = o(d, g)), (d.return = h), d);
  }
  function s(h, d, g, E) {
    var P = g.type;
    return P === ur
      ? f(h, d, g.props.children, E, g.key)
      : d !== null &&
        (d.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === ln &&
            Vc(P) === d.type))
      ? ((E = o(d, g.props)), (E.ref = Jr(h, d, g)), (E.return = h), E)
      : ((E = zi(g.type, g.key, g.props, null, h.mode, E)),
        (E.ref = Jr(h, d, g)),
        (E.return = h),
        E);
  }
  function u(h, d, g, E) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== g.containerInfo ||
      d.stateNode.implementation !== g.implementation
      ? ((d = ga(g, h.mode, E)), (d.return = h), d)
      : ((d = o(d, g.children || [])), (d.return = h), d);
  }
  function f(h, d, g, E, P) {
    return d === null || d.tag !== 7
      ? ((d = Bn(g, h.mode, E, P)), (d.return = h), d)
      : ((d = o(d, g)), (d.return = h), d);
  }
  function c(h, d, g) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = ma("" + d, h.mode, g)), (d.return = h), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case si:
          return (
            (g = zi(d.type, d.key, d.props, null, h.mode, g)),
            (g.ref = Jr(h, null, d)),
            (g.return = h),
            g
          );
        case sr:
          return (d = ga(d, h.mode, g)), (d.return = h), d;
        case ln:
          var E = d._init;
          return c(h, E(d._payload), g);
      }
      if (io(d) || Qr(d))
        return (d = Bn(d, h.mode, g, null)), (d.return = h), d;
      wi(h, d);
    }
    return null;
  }
  function p(h, d, g, E) {
    var P = d !== null ? d.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return P !== null ? null : a(h, d, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case si:
          return g.key === P ? s(h, d, g, E) : null;
        case sr:
          return g.key === P ? u(h, d, g, E) : null;
        case ln:
          return (P = g._init), p(h, d, P(g._payload), E);
      }
      if (io(g) || Qr(g)) return P !== null ? null : f(h, d, g, E, null);
      wi(h, g);
    }
    return null;
  }
  function S(h, d, g, E, P) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (h = h.get(g) || null), a(d, h, "" + E, P);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case si:
          return (h = h.get(E.key === null ? g : E.key) || null), s(d, h, E, P);
        case sr:
          return (h = h.get(E.key === null ? g : E.key) || null), u(d, h, E, P);
        case ln:
          var y = E._init;
          return S(h, d, g, y(E._payload), P);
      }
      if (io(E) || Qr(E)) return (h = h.get(g) || null), f(d, h, E, P, null);
      wi(d, E);
    }
    return null;
  }
  function w(h, d, g, E) {
    for (
      var P = null, y = null, O = d, R = (d = 0), F = null;
      O !== null && R < g.length;
      R++
    ) {
      O.index > R ? ((F = O), (O = null)) : (F = O.sibling);
      var z = p(h, O, g[R], E);
      if (z === null) {
        O === null && (O = F);
        break;
      }
      e && O && z.alternate === null && t(h, O),
        (d = i(z, d, R)),
        y === null ? (P = z) : (y.sibling = z),
        (y = z),
        (O = F);
    }
    if (R === g.length) return n(h, O), he && Mn(h, R), P;
    if (O === null) {
      for (; R < g.length; R++)
        (O = c(h, g[R], E)),
          O !== null &&
            ((d = i(O, d, R)), y === null ? (P = O) : (y.sibling = O), (y = O));
      return he && Mn(h, R), P;
    }
    for (O = r(h, O); R < g.length; R++)
      (F = S(O, h, R, g[R], E)),
        F !== null &&
          (e && F.alternate !== null && O.delete(F.key === null ? R : F.key),
          (d = i(F, d, R)),
          y === null ? (P = F) : (y.sibling = F),
          (y = F));
    return (
      e &&
        O.forEach(function (Z) {
          return t(h, Z);
        }),
      he && Mn(h, R),
      P
    );
  }
  function x(h, d, g, E) {
    var P = Qr(g);
    if (typeof P != "function") throw Error(T(150));
    if (((g = P.call(g)), g == null)) throw Error(T(151));
    for (
      var y = (P = null), O = d, R = (d = 0), F = null, z = g.next();
      O !== null && !z.done;
      R++, z = g.next()
    ) {
      O.index > R ? ((F = O), (O = null)) : (F = O.sibling);
      var Z = p(h, O, z.value, E);
      if (Z === null) {
        O === null && (O = F);
        break;
      }
      e && O && Z.alternate === null && t(h, O),
        (d = i(Z, d, R)),
        y === null ? (P = Z) : (y.sibling = Z),
        (y = Z),
        (O = F);
    }
    if (z.done) return n(h, O), he && Mn(h, R), P;
    if (O === null) {
      for (; !z.done; R++, z = g.next())
        (z = c(h, z.value, E)),
          z !== null &&
            ((d = i(z, d, R)), y === null ? (P = z) : (y.sibling = z), (y = z));
      return he && Mn(h, R), P;
    }
    for (O = r(h, O); !z.done; R++, z = g.next())
      (z = S(O, h, R, z.value, E)),
        z !== null &&
          (e && z.alternate !== null && O.delete(z.key === null ? R : z.key),
          (d = i(z, d, R)),
          y === null ? (P = z) : (y.sibling = z),
          (y = z));
    return (
      e &&
        O.forEach(function (fe) {
          return t(h, fe);
        }),
      he && Mn(h, R),
      P
    );
  }
  function C(h, d, g, E) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === ur &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case si:
          e: {
            for (var P = g.key, y = d; y !== null; ) {
              if (y.key === P) {
                if (((P = g.type), P === ur)) {
                  if (y.tag === 7) {
                    n(h, y.sibling),
                      (d = o(y, g.props.children)),
                      (d.return = h),
                      (h = d);
                    break e;
                  }
                } else if (
                  y.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === ln &&
                    Vc(P) === y.type)
                ) {
                  n(h, y.sibling),
                    (d = o(y, g.props)),
                    (d.ref = Jr(h, y, g)),
                    (d.return = h),
                    (h = d);
                  break e;
                }
                n(h, y);
                break;
              } else t(h, y);
              y = y.sibling;
            }
            g.type === ur
              ? ((d = Bn(g.props.children, h.mode, E, g.key)),
                (d.return = h),
                (h = d))
              : ((E = zi(g.type, g.key, g.props, null, h.mode, E)),
                (E.ref = Jr(h, d, g)),
                (E.return = h),
                (h = E));
          }
          return l(h);
        case sr:
          e: {
            for (y = g.key; d !== null; ) {
              if (d.key === y)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === g.containerInfo &&
                  d.stateNode.implementation === g.implementation
                ) {
                  n(h, d.sibling),
                    (d = o(d, g.children || [])),
                    (d.return = h),
                    (h = d);
                  break e;
                } else {
                  n(h, d);
                  break;
                }
              else t(h, d);
              d = d.sibling;
            }
            (d = ga(g, h.mode, E)), (d.return = h), (h = d);
          }
          return l(h);
        case ln:
          return (y = g._init), C(h, d, y(g._payload), E);
      }
      if (io(g)) return w(h, d, g, E);
      if (Qr(g)) return x(h, d, g, E);
      wi(h, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        d !== null && d.tag === 6
          ? (n(h, d.sibling), (d = o(d, g)), (d.return = h), (h = d))
          : (n(h, d), (d = ma(g, h.mode, E)), (d.return = h), (h = d)),
        l(h))
      : n(h, d);
  }
  return C;
}
var Dr = Tp(!0),
  Rp = Tp(!1),
  qi = Tn(null),
  el = null,
  vr = null,
  uu = null;
function cu() {
  uu = vr = el = null;
}
function fu(e) {
  var t = qi.current;
  ue(qi), (e._currentValue = t);
}
function ns(e, t, n) {
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
function Nr(e, t) {
  (el = e),
    (uu = vr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xe = !0), (e.firstContext = null));
}
function ht(e) {
  var t = e._currentValue;
  if (uu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), vr === null)) {
      if (el === null) throw Error(T(308));
      (vr = e), (el.dependencies = { lanes: 0, firstContext: e });
    } else vr = vr.next = e;
  return t;
}
var Fn = null;
function du(e) {
  Fn === null ? (Fn = [e]) : Fn.push(e);
}
function Lp(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), du(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Yt(e, r)
  );
}
function Yt(e, t) {
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
var an = !1;
function pu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Op(e, t) {
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
function Wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function vn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Yt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), du(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Yt(e, n)
  );
}
function Li(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Js(e, n);
  }
}
function Yc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
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
function tl(e, t, n, r) {
  var o = e.updateQueue;
  an = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), l === null ? (i = u) : (l.next = u), (l = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== l &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
        (f.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var c = o.baseState;
    (l = 0), (f = u = s = null), (a = i);
    do {
      var p = a.lane,
        S = a.eventTime;
      if ((r & p) === p) {
        f !== null &&
          (f = f.next =
            {
              eventTime: S,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            x = a;
          switch (((p = t), (S = n), x.tag)) {
            case 1:
              if (((w = x.payload), typeof w == "function")) {
                c = w.call(S, c, p);
                break e;
              }
              c = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = x.payload),
                (p = typeof w == "function" ? w.call(S, c, p) : w),
                p == null)
              )
                break e;
              c = we({}, c, p);
              break e;
            case 2:
              an = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [a]) : p.push(a));
      } else
        (S = {
          eventTime: S,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((u = f = S), (s = c)) : (f = f.next = S),
          (l |= p);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (s = c),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Kn |= l), (e.lanes = l), (e.memoizedState = c);
  }
}
function Qc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(T(191, o));
        o.call(r);
      }
    }
}
var Ko = {},
  It = Tn(Ko),
  Ao = Tn(Ko),
  Io = Tn(Ko);
function jn(e) {
  if (e === Ko) throw Error(T(174));
  return e;
}
function hu(e, t) {
  switch ((le(Io, t), le(Ao, e), le(It, Ko), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : za(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = za(t, e));
  }
  ue(It), le(It, t);
}
function Ar() {
  ue(It), ue(Ao), ue(Io);
}
function Mp(e) {
  jn(Io.current);
  var t = jn(It.current),
    n = za(t, e.type);
  t !== n && (le(Ao, e), le(It, n));
}
function mu(e) {
  Ao.current === e && (ue(It), ue(Ao));
}
var ve = Tn(0);
function nl(e) {
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
var ua = [];
function gu() {
  for (var e = 0; e < ua.length; e++)
    ua[e]._workInProgressVersionPrimary = null;
  ua.length = 0;
}
var Oi = Gt.ReactCurrentDispatcher,
  ca = Gt.ReactCurrentBatchConfig,
  Qn = 0,
  ye = null,
  Pe = null,
  Re = null,
  rl = !1,
  vo = !1,
  zo = 0,
  Uv = 0;
function Fe() {
  throw Error(T(321));
}
function vu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!_t(e[n], t[n])) return !1;
  return !0;
}
function yu(e, t, n, r, o, i) {
  if (
    ((Qn = i),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Oi.current = e === null || e.memoizedState === null ? Wv : Hv),
    (e = n(r, o)),
    vo)
  ) {
    i = 0;
    do {
      if (((vo = !1), (zo = 0), 25 <= i)) throw Error(T(301));
      (i += 1),
        (Re = Pe = null),
        (t.updateQueue = null),
        (Oi.current = Vv),
        (e = n(r, o));
    } while (vo);
  }
  if (
    ((Oi.current = ol),
    (t = Pe !== null && Pe.next !== null),
    (Qn = 0),
    (Re = Pe = ye = null),
    (rl = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function wu() {
  var e = zo !== 0;
  return (zo = 0), e;
}
function Rt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Re === null ? (ye.memoizedState = Re = e) : (Re = Re.next = e), Re;
}
function mt() {
  if (Pe === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Pe.next;
  var t = Re === null ? ye.memoizedState : Re.next;
  if (t !== null) (Re = t), (Pe = e);
  else {
    if (e === null) throw Error(T(310));
    (Pe = e),
      (e = {
        memoizedState: Pe.memoizedState,
        baseState: Pe.baseState,
        baseQueue: Pe.baseQueue,
        queue: Pe.queue,
        next: null,
      }),
      Re === null ? (ye.memoizedState = Re = e) : (Re = Re.next = e);
  }
  return Re;
}
function Fo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fa(e) {
  var t = mt(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = Pe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (l = null),
      s = null,
      u = i;
    do {
      var f = u.lane;
      if ((Qn & f) === f)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = c), (l = r)) : (s = s.next = c),
          (ye.lanes |= f),
          (Kn |= f);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (l = r) : (s.next = a),
      _t(r, t.memoizedState) || (Xe = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ye.lanes |= i), (Kn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function da(e) {
  var t = mt(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    _t(i, t.memoizedState) || (Xe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Dp() {}
function Ap(e, t) {
  var n = ye,
    r = mt(),
    o = t(),
    i = !_t(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Xe = !0)),
    (r = r.queue),
    Su(Fp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Re !== null && Re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      jo(9, zp.bind(null, n, r, o, t), void 0, null),
      Le === null)
    )
      throw Error(T(349));
    Qn & 30 || Ip(n, t, o);
  }
  return o;
}
function Ip(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function zp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), jp(t) && Up(e);
}
function Fp(e, t, n) {
  return n(function () {
    jp(t) && Up(e);
  });
}
function jp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !_t(e, n);
  } catch {
    return !0;
  }
}
function Up(e) {
  var t = Yt(e, 1);
  t !== null && Et(t, e, 1, -1);
}
function Kc(e) {
  var t = Rt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Bv.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function jo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function bp() {
  return mt().memoizedState;
}
function Mi(e, t, n, r) {
  var o = Rt();
  (ye.flags |= e),
    (o.memoizedState = jo(1 | t, n, void 0, r === void 0 ? null : r));
}
function _l(e, t, n, r) {
  var o = mt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Pe !== null) {
    var l = Pe.memoizedState;
    if (((i = l.destroy), r !== null && vu(r, l.deps))) {
      o.memoizedState = jo(t, n, i, r);
      return;
    }
  }
  (ye.flags |= e), (o.memoizedState = jo(1 | t, n, i, r));
}
function Xc(e, t) {
  return Mi(8390656, 8, e, t);
}
function Su(e, t) {
  return _l(2048, 8, e, t);
}
function $p(e, t) {
  return _l(4, 2, e, t);
}
function Bp(e, t) {
  return _l(4, 4, e, t);
}
function Wp(e, t) {
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
function Hp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), _l(4, 4, Wp.bind(null, t, e), n)
  );
}
function xu() {}
function Vp(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yp(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qp(e, t, n) {
  return Qn & 21
    ? (_t(n, t) || ((n = Jd()), (ye.lanes |= n), (Kn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
}
function bv(e, t) {
  var n = te;
  (te = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ca.transition;
  ca.transition = {};
  try {
    e(!1), t();
  } finally {
    (te = n), (ca.transition = r);
  }
}
function Kp() {
  return mt().memoizedState;
}
function $v(e, t, n) {
  var r = wn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Xp(e))
  )
    Gp(t, n);
  else if (((n = Lp(e, t, n, r)), n !== null)) {
    var o = Ve();
    Et(n, e, r, o), Zp(n, t, r);
  }
}
function Bv(e, t, n) {
  var r = wn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Xp(e)) Gp(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), _t(a, l))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), du(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Lp(e, t, o, r)),
      n !== null && ((o = Ve()), Et(n, e, r, o), Zp(n, t, r));
  }
}
function Xp(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function Gp(e, t) {
  vo = rl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Zp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Js(e, n);
  }
}
var ol = {
    readContext: ht,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useInsertionEffect: Fe,
    useLayoutEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useMutableSource: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    unstable_isNewReconciler: !1,
  },
  Wv = {
    readContext: ht,
    useCallback: function (e, t) {
      return (Rt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ht,
    useEffect: Xc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Mi(4194308, 4, Wp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Mi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Mi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Rt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Rt();
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
        (e = e.dispatch = $v.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Rt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Kc,
    useDebugValue: xu,
    useDeferredValue: function (e) {
      return (Rt().memoizedState = e);
    },
    useTransition: function () {
      var e = Kc(!1),
        t = e[0];
      return (e = bv.bind(null, e[1])), (Rt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        o = Rt();
      if (he) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), Le === null)) throw Error(T(349));
        Qn & 30 || Ip(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Xc(Fp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        jo(9, zp.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Rt(),
        t = Le.identifierPrefix;
      if (he) {
        var n = Bt,
          r = $t;
        (n = (r & ~(1 << (32 - kt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = zo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Uv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Hv = {
    readContext: ht,
    useCallback: Vp,
    useContext: ht,
    useEffect: Su,
    useImperativeHandle: Hp,
    useInsertionEffect: $p,
    useLayoutEffect: Bp,
    useMemo: Yp,
    useReducer: fa,
    useRef: bp,
    useState: function () {
      return fa(Fo);
    },
    useDebugValue: xu,
    useDeferredValue: function (e) {
      var t = mt();
      return Qp(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = fa(Fo)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Dp,
    useSyncExternalStore: Ap,
    useId: Kp,
    unstable_isNewReconciler: !1,
  },
  Vv = {
    readContext: ht,
    useCallback: Vp,
    useContext: ht,
    useEffect: Su,
    useImperativeHandle: Hp,
    useInsertionEffect: $p,
    useLayoutEffect: Bp,
    useMemo: Yp,
    useReducer: da,
    useRef: bp,
    useState: function () {
      return da(Fo);
    },
    useDebugValue: xu,
    useDeferredValue: function (e) {
      var t = mt();
      return Pe === null ? (t.memoizedState = e) : Qp(t, Pe.memoizedState, e);
    },
    useTransition: function () {
      var e = da(Fo)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Dp,
    useSyncExternalStore: Ap,
    useId: Kp,
    unstable_isNewReconciler: !1,
  };
function yt(e, t) {
  if (e && e.defaultProps) {
    (t = we({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function rs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : we({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Cl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? qn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ve(),
      o = wn(e),
      i = Wt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = vn(e, i, o)),
      t !== null && (Et(t, e, o, r), Li(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ve(),
      o = wn(e),
      i = Wt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = vn(e, i, o)),
      t !== null && (Et(t, e, o, r), Li(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ve(),
      r = wn(e),
      o = Wt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = vn(e, o, r)),
      t !== null && (Et(t, e, r, n), Li(t, e, r));
  },
};
function Gc(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Lo(n, r) || !Lo(o, i)
      : !0
  );
}
function Jp(e, t, n) {
  var r = !1,
    o = En,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ht(i))
      : ((o = Ze(t) ? Vn : be.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Or(e, o) : En)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Cl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Zc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Cl.enqueueReplaceState(t, t.state, null);
}
function os(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), pu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = ht(i))
    : ((i = Ze(t) ? Vn : be.current), (o.context = Or(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (rs(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Cl.enqueueReplaceState(o, o.state, null),
      tl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ir(e, t) {
  try {
    var n = "",
      r = t;
    do (n += wg(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function pa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function is(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Yv = typeof WeakMap == "function" ? WeakMap : Map;
function qp(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ll || ((ll = !0), (ms = r)), is(e, t);
    }),
    n
  );
}
function eh(e, t, n) {
  (n = Wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        is(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        is(e, t),
          typeof r != "function" &&
            (yn === null ? (yn = new Set([this])) : yn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Jc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Yv();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = ly.bind(null, e, t, n)), t.then(e, e));
}
function qc(e) {
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
function ef(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Wt(-1, 1)), (t.tag = 2), vn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Qv = Gt.ReactCurrentOwner,
  Xe = !1;
function He(e, t, n, r) {
  t.child = e === null ? Rp(t, null, n, r) : Dr(t, e.child, n, r);
}
function tf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Nr(t, o),
    (r = yu(e, t, n, r, i, o)),
    (n = wu()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Qt(e, t, o))
      : (he && n && lu(t), (t.flags |= 1), He(e, t, r, o), t.child)
  );
}
function nf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ru(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), th(e, t, i, r, o))
      : ((e = zi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Lo), n(l, r) && e.ref === t.ref)
    )
      return Qt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Sn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function th(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Lo(i, r) && e.ref === t.ref)
      if (((Xe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Xe = !0);
      else return (t.lanes = e.lanes), Qt(e, t, o);
  }
  return ls(e, t, n, r, o);
}
function nh(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(wr, et),
        (et |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          le(wr, et),
          (et |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        le(wr, et),
        (et |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(wr, et),
      (et |= r);
  return He(e, t, o, n), t.child;
}
function rh(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function ls(e, t, n, r, o) {
  var i = Ze(n) ? Vn : be.current;
  return (
    (i = Or(t, i)),
    Nr(t, o),
    (n = yu(e, t, n, r, i, o)),
    (r = wu()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Qt(e, t, o))
      : (he && r && lu(t), (t.flags |= 1), He(e, t, n, o), t.child)
  );
}
function rf(e, t, n, r, o) {
  if (Ze(n)) {
    var i = !0;
    Gi(t);
  } else i = !1;
  if ((Nr(t, o), t.stateNode === null))
    Di(e, t), Jp(t, n, r), os(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ht(u))
      : ((u = Ze(n) ? Vn : be.current), (u = Or(t, u)));
    var f = n.getDerivedStateFromProps,
      c =
        typeof f == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && Zc(t, l, r, u)),
      (an = !1);
    var p = t.memoizedState;
    (l.state = p),
      tl(t, r, l, o),
      (s = t.memoizedState),
      a !== r || p !== s || Ge.current || an
        ? (typeof f == "function" && (rs(t, n, f, r), (s = t.memoizedState)),
          (a = an || Gc(t, n, a, r, p, s, u))
            ? (c ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = u),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Op(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : yt(t.type, a)),
      (l.props = u),
      (c = t.pendingProps),
      (p = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = ht(s))
        : ((s = Ze(n) ? Vn : be.current), (s = Or(t, s)));
    var S = n.getDerivedStateFromProps;
    (f =
      typeof S == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== c || p !== s) && Zc(t, l, r, s)),
      (an = !1),
      (p = t.memoizedState),
      (l.state = p),
      tl(t, r, l, o);
    var w = t.memoizedState;
    a !== c || p !== w || Ge.current || an
      ? (typeof S == "function" && (rs(t, n, S, r), (w = t.memoizedState)),
        (u = an || Gc(t, n, u, r, p, w, s) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, w, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, w, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = s),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return as(e, t, n, r, i, o);
}
function as(e, t, n, r, o, i) {
  rh(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Bc(t, n, !1), Qt(e, t, i);
  (r = t.stateNode), (Qv.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Dr(t, e.child, null, i)), (t.child = Dr(t, null, a, i)))
      : He(e, t, a, i),
    (t.memoizedState = r.state),
    o && Bc(t, n, !0),
    t.child
  );
}
function oh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $c(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $c(e, t.context, !1),
    hu(e, t.containerInfo);
}
function of(e, t, n, r, o) {
  return Mr(), su(o), (t.flags |= 256), He(e, t, n, r), t.child;
}
var ss = { dehydrated: null, treeContext: null, retryLane: 0 };
function us(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ih(e, t, n) {
  var r = t.pendingProps,
    o = ve.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    le(ve, o & 1),
    e === null)
  )
    return (
      ts(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Tl(l, r, 0, null)),
              (e = Bn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = us(n)),
              (t.memoizedState = ss),
              e)
            : ku(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return Kv(e, t, l, r, a, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (a = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Sn(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Sn(a, i)) : ((i = Bn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? us(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ss),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Sn(i, { mode: "visible", children: r.children })),
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
function ku(e, t) {
  return (
    (t = Tl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Si(e, t, n, r) {
  return (
    r !== null && su(r),
    Dr(t, e.child, null, n),
    (e = ku(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Kv(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = pa(Error(T(422)))), Si(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Tl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Bn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Dr(t, e.child, null, l),
        (t.child.memoizedState = us(l)),
        (t.memoizedState = ss),
        i);
  if (!(t.mode & 1)) return Si(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(T(419))), (r = pa(i, r, void 0)), Si(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), Xe || a)) {
    if (((r = Le), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Yt(e, o), Et(r, e, o, -1));
    }
    return Tu(), (r = pa(Error(T(421)))), Si(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ay.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (nt = gn(o.nextSibling)),
      (rt = t),
      (he = !0),
      (xt = null),
      e !== null &&
        ((ct[ft++] = $t),
        (ct[ft++] = Bt),
        (ct[ft++] = Yn),
        ($t = e.id),
        (Bt = e.overflow),
        (Yn = t)),
      (t = ku(t, r.children)),
      (t.flags |= 4096),
      t);
}
function lf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ns(e.return, t, n);
}
function ha(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function lh(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((He(e, t, r.children, n), (r = ve.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && lf(e, n, t);
        else if (e.tag === 19) lf(e, n, t);
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
  if ((le(ve, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && nl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ha(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && nl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ha(t, !0, n, null, i);
        break;
      case "together":
        ha(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Di(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Qt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Kn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Sn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Sn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Xv(e, t, n) {
  switch (t.tag) {
    case 3:
      oh(t), Mr();
      break;
    case 5:
      Mp(t);
      break;
    case 1:
      Ze(t.type) && Gi(t);
      break;
    case 4:
      hu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      le(qi, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (le(ve, ve.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ih(e, t, n)
          : (le(ve, ve.current & 1),
            (e = Qt(e, t, n)),
            e !== null ? e.sibling : null);
      le(ve, ve.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return lh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        le(ve, ve.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), nh(e, t, n);
  }
  return Qt(e, t, n);
}
var ah, cs, sh, uh;
ah = function (e, t) {
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
cs = function () {};
sh = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), jn(It.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Ma(e, o)), (r = Ma(e, r)), (i = []);
        break;
      case "select":
        (o = we({}, o, { value: void 0 })),
          (r = we({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Ia(e, o)), (r = Ia(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ki);
    }
    Fa(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Eo.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Eo.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && se("scroll", e),
                  i || a === s || (i = []))
                : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
uh = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qr(e, t) {
  if (!he)
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
function je(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Gv(e, t, n) {
  var r = t.pendingProps;
  switch ((au(t), t.tag)) {
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
      return je(t), null;
    case 1:
      return Ze(t.type) && Xi(), je(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ar(),
        ue(Ge),
        ue(be),
        gu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (yi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), xt !== null && (ys(xt), (xt = null)))),
        cs(e, t),
        je(t),
        null
      );
    case 5:
      mu(t);
      var o = jn(Io.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        sh(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return je(t), null;
        }
        if (((e = jn(It.current)), yi(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ot] = t), (r[Do] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ao.length; o++) se(ao[o], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se("error", r), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              hc(r, i), se("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                se("invalid", r);
              break;
            case "textarea":
              gc(r, i), se("invalid", r);
          }
          Fa(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      vi(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      vi(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Eo.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              ui(r), mc(r, i, !0);
              break;
            case "textarea":
              ui(r), vc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ki);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Fd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Ot] = t),
            (e[Do] = r),
            ah(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = ja(n, r)), n)) {
              case "dialog":
                se("cancel", e), se("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ao.length; o++) se(ao[o], e);
                o = r;
                break;
              case "source":
                se("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                se("error", e), se("load", e), (o = r);
                break;
              case "details":
                se("toggle", e), (o = r);
                break;
              case "input":
                hc(e, r), (o = Ma(e, r)), se("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = we({}, r, { value: void 0 })),
                  se("invalid", e);
                break;
              case "textarea":
                gc(e, r), (o = Ia(e, r)), se("invalid", e);
                break;
              default:
                o = r;
            }
            Fa(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style"
                  ? bd(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && jd(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && _o(e, s)
                    : typeof s == "number" && _o(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Eo.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && se("scroll", e)
                      : s != null && Ys(e, i, s, l));
              }
            switch (n) {
              case "input":
                ui(e), mc(e, r, !1);
                break;
              case "textarea":
                ui(e), vc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Er(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Er(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ki);
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
      return je(t), null;
    case 6:
      if (e && t.stateNode != null) uh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = jn(Io.current)), jn(It.current), yi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ot] = t),
            (i = r.nodeValue !== n) && ((e = rt), e !== null))
          )
            switch (e.tag) {
              case 3:
                vi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  vi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ot] = t),
            (t.stateNode = r);
      }
      return je(t), null;
    case 13:
      if (
        (ue(ve),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (he && nt !== null && t.mode & 1 && !(t.flags & 128))
          Np(), Mr(), (t.flags |= 98560), (i = !1);
        else if (((i = yi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(T(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(T(317));
            i[Ot] = t;
          } else
            Mr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          je(t), (i = !1);
        } else xt !== null && (ys(xt), (xt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ve.current & 1 ? Ne === 0 && (Ne = 3) : Tu())),
          t.updateQueue !== null && (t.flags |= 4),
          je(t),
          null);
    case 4:
      return (
        Ar(), cs(e, t), e === null && Oo(t.stateNode.containerInfo), je(t), null
      );
    case 10:
      return fu(t.type._context), je(t), null;
    case 17:
      return Ze(t.type) && Xi(), je(t), null;
    case 19:
      if ((ue(ve), (i = t.memoizedState), i === null)) return je(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) qr(i, !1);
        else {
          if (Ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = nl(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    qr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return le(ve, (ve.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ke() > zr &&
            ((t.flags |= 128), (r = !0), qr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = nl(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              qr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !he)
            )
              return je(t), null;
          } else
            2 * ke() - i.renderingStartTime > zr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), qr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ke()),
          (t.sibling = null),
          (n = ve.current),
          le(ve, r ? (n & 1) | 2 : n & 1),
          t)
        : (je(t), null);
    case 22:
    case 23:
      return (
        Nu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? et & 1073741824 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : je(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function Zv(e, t) {
  switch ((au(t), t.tag)) {
    case 1:
      return (
        Ze(t.type) && Xi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ar(),
        ue(Ge),
        ue(be),
        gu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return mu(t), null;
    case 13:
      if (
        (ue(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(T(340));
        Mr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ue(ve), null;
    case 4:
      return Ar(), null;
    case 10:
      return fu(t.type._context), null;
    case 22:
    case 23:
      return Nu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xi = !1,
  Ue = !1,
  Jv = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function yr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        xe(e, t, r);
      }
    else n.current = null;
}
function fs(e, t, n) {
  try {
    n();
  } catch (r) {
    xe(e, t, r);
  }
}
var af = !1;
function qv(e, t) {
  if (((Ka = Vi), (e = hp()), iu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            u = 0,
            f = 0,
            c = e,
            p = null;
          t: for (;;) {
            for (
              var S;
              c !== n || (o !== 0 && c.nodeType !== 3) || (a = l + o),
                c !== i || (r !== 0 && c.nodeType !== 3) || (s = l + r),
                c.nodeType === 3 && (l += c.nodeValue.length),
                (S = c.firstChild) !== null;

            )
              (p = c), (c = S);
            for (;;) {
              if (c === e) break t;
              if (
                (p === n && ++u === o && (a = l),
                p === i && ++f === r && (s = l),
                (S = c.nextSibling) !== null)
              )
                break;
              (c = p), (p = c.parentNode);
            }
            c = S;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Xa = { focusedElem: e, selectionRange: n }, Vi = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
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
                  var x = w.memoizedProps,
                    C = w.memoizedState,
                    h = t.stateNode,
                    d = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : yt(t.type, x),
                      C
                    );
                  h.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (E) {
          xe(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (w = af), (af = !1), w;
}
function yo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && fs(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Pl(e, t) {
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
function ds(e) {
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
function ch(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ch(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ot], delete t[Do], delete t[Ja], delete t[Iv], delete t[zv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function fh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || fh(e.return)) return null;
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
function ps(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Ki));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ps(e, t, n), e = e.sibling; e !== null; ) ps(e, t, n), (e = e.sibling);
}
function hs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hs(e, t, n), e = e.sibling; e !== null; ) hs(e, t, n), (e = e.sibling);
}
var Ae = null,
  wt = !1;
function nn(e, t, n) {
  for (n = n.child; n !== null; ) dh(e, t, n), (n = n.sibling);
}
function dh(e, t, n) {
  if (At && typeof At.onCommitFiberUnmount == "function")
    try {
      At.onCommitFiberUnmount(yl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ue || yr(n, t);
    case 6:
      var r = Ae,
        o = wt;
      (Ae = null),
        nn(e, t, n),
        (Ae = r),
        (wt = o),
        Ae !== null &&
          (wt
            ? ((e = Ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null &&
        (wt
          ? ((e = Ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? aa(e.parentNode, n)
              : e.nodeType === 1 && aa(e, n),
            To(e))
          : aa(Ae, n.stateNode));
      break;
    case 4:
      (r = Ae),
        (o = wt),
        (Ae = n.stateNode.containerInfo),
        (wt = !0),
        nn(e, t, n),
        (Ae = r),
        (wt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && fs(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      nn(e, t, n);
      break;
    case 1:
      if (
        !Ue &&
        (yr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          xe(n, t, a);
        }
      nn(e, t, n);
      break;
    case 21:
      nn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ue = (r = Ue) || n.memoizedState !== null), nn(e, t, n), (Ue = r))
        : nn(e, t, n);
      break;
    default:
      nn(e, t, n);
  }
}
function uf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Jv()),
      t.forEach(function (r) {
        var o = sy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function vt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ae = a.stateNode), (wt = !1);
              break e;
            case 3:
              (Ae = a.stateNode.containerInfo), (wt = !0);
              break e;
            case 4:
              (Ae = a.stateNode.containerInfo), (wt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ae === null) throw Error(T(160));
        dh(i, l, o), (Ae = null), (wt = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        xe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ph(t, e), (t = t.sibling);
}
function ph(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((vt(t, e), Tt(e), r & 4)) {
        try {
          yo(3, e, e.return), Pl(3, e);
        } catch (x) {
          xe(e, e.return, x);
        }
        try {
          yo(5, e, e.return);
        } catch (x) {
          xe(e, e.return, x);
        }
      }
      break;
    case 1:
      vt(t, e), Tt(e), r & 512 && n !== null && yr(n, n.return);
      break;
    case 5:
      if (
        (vt(t, e),
        Tt(e),
        r & 512 && n !== null && yr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          _o(o, "");
        } catch (x) {
          xe(e, e.return, x);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Id(o, i),
              ja(a, l);
            var u = ja(a, i);
            for (l = 0; l < s.length; l += 2) {
              var f = s[l],
                c = s[l + 1];
              f === "style"
                ? bd(o, c)
                : f === "dangerouslySetInnerHTML"
                ? jd(o, c)
                : f === "children"
                ? _o(o, c)
                : Ys(o, f, c, u);
            }
            switch (a) {
              case "input":
                Da(o, i);
                break;
              case "textarea":
                zd(o, i);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null
                  ? Er(o, !!i.multiple, S, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Er(o, !!i.multiple, i.defaultValue, !0)
                      : Er(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Do] = i;
          } catch (x) {
            xe(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((vt(t, e), Tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (x) {
          xe(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (vt(t, e), Tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          To(t.containerInfo);
        } catch (x) {
          xe(e, e.return, x);
        }
      break;
    case 4:
      vt(t, e), Tt(e);
      break;
    case 13:
      vt(t, e),
        Tt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Cu = ke())),
        r & 4 && uf(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ue = (u = Ue) || f), vt(t, e), (Ue = u)) : vt(t, e),
        Tt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (A = e, f = e.child; f !== null; ) {
            for (c = A = f; A !== null; ) {
              switch (((p = A), (S = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  yo(4, p, p.return);
                  break;
                case 1:
                  yr(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (x) {
                      xe(r, n, x);
                    }
                  }
                  break;
                case 5:
                  yr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    ff(c);
                    continue;
                  }
              }
              S !== null ? ((S.return = p), (A = S)) : ff(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                (o = c.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = c.stateNode),
                      (s = c.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = Ud("display", l)));
              } catch (x) {
                xe(e, e.return, x);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (x) {
                xe(e, e.return, x);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            f === c && (f = null), (c = c.return);
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      vt(t, e), Tt(e), r & 4 && uf(e);
      break;
    case 21:
      break;
    default:
      vt(t, e), Tt(e);
  }
}
function Tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (fh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (_o(o, ""), (r.flags &= -33));
          var i = sf(e);
          hs(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = sf(e);
          ps(e, a, l);
          break;
        default:
          throw Error(T(161));
      }
    } catch (s) {
      xe(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ey(e, t, n) {
  (A = e), hh(e);
}
function hh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var o = A,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || xi;
      if (!l) {
        var a = o.alternate,
          s = (a !== null && a.memoizedState !== null) || Ue;
        a = xi;
        var u = Ue;
        if (((xi = l), (Ue = s) && !u))
          for (A = o; A !== null; )
            (l = A),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? df(o)
                : s !== null
                ? ((s.return = l), (A = s))
                : df(o);
        for (; i !== null; ) (A = i), hh(i), (i = i.sibling);
        (A = o), (xi = a), (Ue = u);
      }
      cf(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (A = i)) : cf(e);
  }
}
function cf(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ue || Pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ue)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : yt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Qc(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Qc(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                  var f = u.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && To(c);
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
              throw Error(T(163));
          }
        Ue || (t.flags & 512 && ds(t));
      } catch (p) {
        xe(t, t.return, p);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function ff(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function df(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Pl(4, t);
          } catch (s) {
            xe(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              xe(t, o, s);
            }
          }
          var i = t.return;
          try {
            ds(t);
          } catch (s) {
            xe(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            ds(t);
          } catch (s) {
            xe(t, l, s);
          }
      }
    } catch (s) {
      xe(t, t.return, s);
    }
    if (t === e) {
      A = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (A = a);
      break;
    }
    A = t.return;
  }
}
var ty = Math.ceil,
  il = Gt.ReactCurrentDispatcher,
  Eu = Gt.ReactCurrentOwner,
  pt = Gt.ReactCurrentBatchConfig,
  G = 0,
  Le = null,
  Ce = null,
  Ie = 0,
  et = 0,
  wr = Tn(0),
  Ne = 0,
  Uo = null,
  Kn = 0,
  Nl = 0,
  _u = 0,
  wo = null,
  Ke = null,
  Cu = 0,
  zr = 1 / 0,
  Ut = null,
  ll = !1,
  ms = null,
  yn = null,
  ki = !1,
  fn = null,
  al = 0,
  So = 0,
  gs = null,
  Ai = -1,
  Ii = 0;
function Ve() {
  return G & 6 ? ke() : Ai !== -1 ? Ai : (Ai = ke());
}
function wn(e) {
  return e.mode & 1
    ? G & 2 && Ie !== 0
      ? Ie & -Ie
      : jv.transition !== null
      ? (Ii === 0 && (Ii = Jd()), Ii)
      : ((e = te),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ip(e.type))),
        e)
    : 1;
}
function Et(e, t, n, r) {
  if (50 < So) throw ((So = 0), (gs = null), Error(T(185)));
  Vo(e, n, r),
    (!(G & 2) || e !== Le) &&
      (e === Le && (!(G & 2) && (Nl |= n), Ne === 4 && un(e, Ie)),
      Je(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((zr = ke() + 500), El && Rn()));
}
function Je(e, t) {
  var n = e.callbackNode;
  jg(e, t);
  var r = Hi(e, e === Le ? Ie : 0);
  if (r === 0)
    n !== null && Sc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Sc(n), t === 1))
      e.tag === 0 ? Fv(pf.bind(null, e)) : _p(pf.bind(null, e)),
        Dv(function () {
          !(G & 6) && Rn();
        }),
        (n = null);
    else {
      switch (qd(r)) {
        case 1:
          n = Zs;
          break;
        case 4:
          n = Gd;
          break;
        case 16:
          n = Wi;
          break;
        case 536870912:
          n = Zd;
          break;
        default:
          n = Wi;
      }
      n = kh(n, mh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function mh(e, t) {
  if (((Ai = -1), (Ii = 0), G & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (Tr() && e.callbackNode !== n) return null;
  var r = Hi(e, e === Le ? Ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = sl(e, r);
  else {
    t = r;
    var o = G;
    G |= 2;
    var i = vh();
    (Le !== e || Ie !== t) && ((Ut = null), (zr = ke() + 500), $n(e, t));
    do
      try {
        oy();
        break;
      } catch (a) {
        gh(e, a);
      }
    while (!0);
    cu(),
      (il.current = i),
      (G = o),
      Ce !== null ? (t = 0) : ((Le = null), (Ie = 0), (t = Ne));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Wa(e)), o !== 0 && ((r = o), (t = vs(e, o)))), t === 1)
    )
      throw ((n = Uo), $n(e, 0), un(e, r), Je(e, ke()), n);
    if (t === 6) un(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !ny(o) &&
          ((t = sl(e, r)),
          t === 2 && ((i = Wa(e)), i !== 0 && ((r = i), (t = vs(e, i)))),
          t === 1))
      )
        throw ((n = Uo), $n(e, 0), un(e, r), Je(e, ke()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          Dn(e, Ke, Ut);
          break;
        case 3:
          if (
            (un(e, r), (r & 130023424) === r && ((t = Cu + 500 - ke()), 10 < t))
          ) {
            if (Hi(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ve(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Za(Dn.bind(null, e, Ke, Ut), t);
            break;
          }
          Dn(e, Ke, Ut);
          break;
        case 4:
          if ((un(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - kt(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = ke() - r),
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
                : 1960 * ty(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Za(Dn.bind(null, e, Ke, Ut), r);
            break;
          }
          Dn(e, Ke, Ut);
          break;
        case 5:
          Dn(e, Ke, Ut);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return Je(e, ke()), e.callbackNode === n ? mh.bind(null, e) : null;
}
function vs(e, t) {
  var n = wo;
  return (
    e.current.memoizedState.isDehydrated && ($n(e, t).flags |= 256),
    (e = sl(e, t)),
    e !== 2 && ((t = Ke), (Ke = n), t !== null && ys(t)),
    e
  );
}
function ys(e) {
  Ke === null ? (Ke = e) : Ke.push.apply(Ke, e);
}
function ny(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!_t(i(), o)) return !1;
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
function un(e, t) {
  for (
    t &= ~_u,
      t &= ~Nl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - kt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function pf(e) {
  if (G & 6) throw Error(T(327));
  Tr();
  var t = Hi(e, 0);
  if (!(t & 1)) return Je(e, ke()), null;
  var n = sl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Wa(e);
    r !== 0 && ((t = r), (n = vs(e, r)));
  }
  if (n === 1) throw ((n = Uo), $n(e, 0), un(e, t), Je(e, ke()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Dn(e, Ke, Ut),
    Je(e, ke()),
    null
  );
}
function Pu(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((zr = ke() + 500), El && Rn());
  }
}
function Xn(e) {
  fn !== null && fn.tag === 0 && !(G & 6) && Tr();
  var t = G;
  G |= 1;
  var n = pt.transition,
    r = te;
  try {
    if (((pt.transition = null), (te = 1), e)) return e();
  } finally {
    (te = r), (pt.transition = n), (G = t), !(G & 6) && Rn();
  }
}
function Nu() {
  (et = wr.current), ue(wr);
}
function $n(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Mv(n)), Ce !== null))
    for (n = Ce.return; n !== null; ) {
      var r = n;
      switch ((au(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Xi();
          break;
        case 3:
          Ar(), ue(Ge), ue(be), gu();
          break;
        case 5:
          mu(r);
          break;
        case 4:
          Ar();
          break;
        case 13:
          ue(ve);
          break;
        case 19:
          ue(ve);
          break;
        case 10:
          fu(r.type._context);
          break;
        case 22:
        case 23:
          Nu();
      }
      n = n.return;
    }
  if (
    ((Le = e),
    (Ce = e = Sn(e.current, null)),
    (Ie = et = t),
    (Ne = 0),
    (Uo = null),
    (_u = Nl = Kn = 0),
    (Ke = wo = null),
    Fn !== null)
  ) {
    for (t = 0; t < Fn.length; t++)
      if (((n = Fn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    Fn = null;
  }
  return e;
}
function gh(e, t) {
  do {
    var n = Ce;
    try {
      if ((cu(), (Oi.current = ol), rl)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        rl = !1;
      }
      if (
        ((Qn = 0),
        (Re = Pe = ye = null),
        (vo = !1),
        (zo = 0),
        (Eu.current = null),
        n === null || n.return === null)
      ) {
        (Ne = 1), (Uo = t), (Ce = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          a = n,
          s = t;
        if (
          ((t = Ie),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            f = a,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var p = f.alternate;
            p
              ? ((f.updateQueue = p.updateQueue),
                (f.memoizedState = p.memoizedState),
                (f.lanes = p.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var S = qc(l);
          if (S !== null) {
            (S.flags &= -257),
              ef(S, l, a, i, t),
              S.mode & 1 && Jc(i, u, t),
              (t = S),
              (s = u);
            var w = t.updateQueue;
            if (w === null) {
              var x = new Set();
              x.add(s), (t.updateQueue = x);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Jc(i, u, t), Tu();
              break e;
            }
            s = Error(T(426));
          }
        } else if (he && a.mode & 1) {
          var C = qc(l);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              ef(C, l, a, i, t),
              su(Ir(s, a));
            break e;
          }
        }
        (i = s = Ir(s, a)),
          Ne !== 4 && (Ne = 2),
          wo === null ? (wo = [i]) : wo.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = qp(i, s, t);
              Yc(i, h);
              break e;
            case 1:
              a = s;
              var d = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (yn === null || !yn.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = eh(i, a, t);
                Yc(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      wh(n);
    } catch (P) {
      (t = P), Ce === n && n !== null && (Ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function vh() {
  var e = il.current;
  return (il.current = ol), e === null ? ol : e;
}
function Tu() {
  (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4),
    Le === null || (!(Kn & 268435455) && !(Nl & 268435455)) || un(Le, Ie);
}
function sl(e, t) {
  var n = G;
  G |= 2;
  var r = vh();
  (Le !== e || Ie !== t) && ((Ut = null), $n(e, t));
  do
    try {
      ry();
      break;
    } catch (o) {
      gh(e, o);
    }
  while (!0);
  if ((cu(), (G = n), (il.current = r), Ce !== null)) throw Error(T(261));
  return (Le = null), (Ie = 0), Ne;
}
function ry() {
  for (; Ce !== null; ) yh(Ce);
}
function oy() {
  for (; Ce !== null && !Rg(); ) yh(Ce);
}
function yh(e) {
  var t = xh(e.alternate, e, et);
  (e.memoizedProps = e.pendingProps),
    t === null ? wh(e) : (Ce = t),
    (Eu.current = null);
}
function wh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Zv(n, t)), n !== null)) {
        (n.flags &= 32767), (Ce = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ne = 6), (Ce = null);
        return;
      }
    } else if (((n = Gv(n, t, et)), n !== null)) {
      Ce = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ce = t;
      return;
    }
    Ce = t = e;
  } while (t !== null);
  Ne === 0 && (Ne = 5);
}
function Dn(e, t, n) {
  var r = te,
    o = pt.transition;
  try {
    (pt.transition = null), (te = 1), iy(e, t, n, r);
  } finally {
    (pt.transition = o), (te = r);
  }
  return null;
}
function iy(e, t, n, r) {
  do Tr();
  while (fn !== null);
  if (G & 6) throw Error(T(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Ug(e, i),
    e === Le && ((Ce = Le = null), (Ie = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ki ||
      ((ki = !0),
      kh(Wi, function () {
        return Tr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = pt.transition), (pt.transition = null);
    var l = te;
    te = 1;
    var a = G;
    (G |= 4),
      (Eu.current = null),
      qv(e, n),
      ph(n, e),
      Cv(Xa),
      (Vi = !!Ka),
      (Xa = Ka = null),
      (e.current = n),
      ey(n),
      Lg(),
      (G = a),
      (te = l),
      (pt.transition = i);
  } else e.current = n;
  if (
    (ki && ((ki = !1), (fn = e), (al = o)),
    (i = e.pendingLanes),
    i === 0 && (yn = null),
    Dg(n.stateNode),
    Je(e, ke()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ll) throw ((ll = !1), (e = ms), (ms = null), e);
  return (
    al & 1 && e.tag !== 0 && Tr(),
    (i = e.pendingLanes),
    i & 1 ? (e === gs ? So++ : ((So = 0), (gs = e))) : (So = 0),
    Rn(),
    null
  );
}
function Tr() {
  if (fn !== null) {
    var e = qd(al),
      t = pt.transition,
      n = te;
    try {
      if (((pt.transition = null), (te = 16 > e ? 16 : e), fn === null))
        var r = !1;
      else {
        if (((e = fn), (fn = null), (al = 0), G & 6)) throw Error(T(331));
        var o = G;
        for (G |= 4, A = e.current; A !== null; ) {
          var i = A,
            l = i.child;
          if (A.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (A = u; A !== null; ) {
                  var f = A;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yo(8, f, i);
                  }
                  var c = f.child;
                  if (c !== null) (c.return = f), (A = c);
                  else
                    for (; A !== null; ) {
                      f = A;
                      var p = f.sibling,
                        S = f.return;
                      if ((ch(f), f === u)) {
                        A = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = S), (A = p);
                        break;
                      }
                      A = S;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var C = x.sibling;
                    (x.sibling = null), (x = C);
                  } while (x !== null);
                }
              }
              A = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (A = l);
          else
            e: for (; A !== null; ) {
              if (((i = A), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    yo(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (A = h);
                break e;
              }
              A = i.return;
            }
        }
        var d = e.current;
        for (A = d; A !== null; ) {
          l = A;
          var g = l.child;
          if (l.subtreeFlags & 2064 && g !== null) (g.return = l), (A = g);
          else
            e: for (l = d; A !== null; ) {
              if (((a = A), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pl(9, a);
                  }
                } catch (P) {
                  xe(a, a.return, P);
                }
              if (a === l) {
                A = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), (A = E);
                break e;
              }
              A = a.return;
            }
        }
        if (
          ((G = o), Rn(), At && typeof At.onPostCommitFiberRoot == "function")
        )
          try {
            At.onPostCommitFiberRoot(yl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (te = n), (pt.transition = t);
    }
  }
  return !1;
}
function hf(e, t, n) {
  (t = Ir(n, t)),
    (t = qp(e, t, 1)),
    (e = vn(e, t, 1)),
    (t = Ve()),
    e !== null && (Vo(e, 1, t), Je(e, t));
}
function xe(e, t, n) {
  if (e.tag === 3) hf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yn === null || !yn.has(r)))
        ) {
          (e = Ir(n, e)),
            (e = eh(t, e, 1)),
            (t = vn(t, e, 1)),
            (e = Ve()),
            t !== null && (Vo(t, 1, e), Je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ly(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Le === e &&
      (Ie & n) === n &&
      (Ne === 4 || (Ne === 3 && (Ie & 130023424) === Ie && 500 > ke() - Cu)
        ? $n(e, 0)
        : (_u |= n)),
    Je(e, t);
}
function Sh(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = di), (di <<= 1), !(di & 130023424) && (di = 4194304))
      : (t = 1));
  var n = Ve();
  (e = Yt(e, t)), e !== null && (Vo(e, t, n), Je(e, n));
}
function ay(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Sh(e, n);
}
function sy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), Sh(e, n);
}
var xh;
xh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ge.current) Xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), Xv(e, t, n);
      Xe = !!(e.flags & 131072);
    }
  else (Xe = !1), he && t.flags & 1048576 && Cp(t, Ji, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Di(e, t), (e = t.pendingProps);
      var o = Or(t, be.current);
      Nr(t, n), (o = yu(null, t, r, e, o, n));
      var i = wu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ze(r) ? ((i = !0), Gi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            pu(t),
            (o.updater = Cl),
            (t.stateNode = o),
            (o._reactInternals = t),
            os(t, r, e, n),
            (t = as(null, t, r, !0, i, n)))
          : ((t.tag = 0), he && i && lu(t), He(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Di(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = cy(r)),
          (e = yt(r, e)),
          o)
        ) {
          case 0:
            t = ls(null, t, r, e, n);
            break e;
          case 1:
            t = rf(null, t, r, e, n);
            break e;
          case 11:
            t = tf(null, t, r, e, n);
            break e;
          case 14:
            t = nf(null, t, r, yt(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : yt(r, o)),
        ls(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : yt(r, o)),
        rf(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((oh(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Op(e, t),
          tl(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Ir(Error(T(423)), t)), (t = of(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Ir(Error(T(424)), t)), (t = of(e, t, r, n, o));
            break e;
          } else
            for (
              nt = gn(t.stateNode.containerInfo.firstChild),
                rt = t,
                he = !0,
                xt = null,
                n = Rp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Mr(), r === o)) {
            t = Qt(e, t, n);
            break e;
          }
          He(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Mp(t),
        e === null && ts(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Ga(r, o) ? (l = null) : i !== null && Ga(r, i) && (t.flags |= 32),
        rh(e, t),
        He(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && ts(t), null;
    case 13:
      return ih(e, t, n);
    case 4:
      return (
        hu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Dr(t, null, r, n)) : He(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : yt(r, o)),
        tf(e, t, r, o, n)
      );
    case 7:
      return He(e, t, t.pendingProps, n), t.child;
    case 8:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return He(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          le(qi, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (_t(i.value, l)) {
            if (i.children === o.children && !Ge.current) {
              t = Qt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Wt(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      ns(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(T(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  ns(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        He(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Nr(t, n),
        (o = ht(o)),
        (r = r(o)),
        (t.flags |= 1),
        He(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = yt(r, t.pendingProps)),
        (o = yt(r.type, o)),
        nf(e, t, r, o, n)
      );
    case 15:
      return th(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : yt(r, o)),
        Di(e, t),
        (t.tag = 1),
        Ze(r) ? ((e = !0), Gi(t)) : (e = !1),
        Nr(t, n),
        Jp(t, r, o),
        os(t, r, o, n),
        as(null, t, r, !0, e, n)
      );
    case 19:
      return lh(e, t, n);
    case 22:
      return nh(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function kh(e, t) {
  return Xd(e, t);
}
function uy(e, t, n, r) {
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
function dt(e, t, n, r) {
  return new uy(e, t, n, r);
}
function Ru(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function cy(e) {
  if (typeof e == "function") return Ru(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ks)) return 11;
    if (e === Xs) return 14;
  }
  return 2;
}
function Sn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = dt(e.tag, t, e.key, e.mode)),
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
function zi(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Ru(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case ur:
        return Bn(n.children, o, i, t);
      case Qs:
        (l = 8), (o |= 8);
        break;
      case Ta:
        return (
          (e = dt(12, n, t, o | 2)), (e.elementType = Ta), (e.lanes = i), e
        );
      case Ra:
        return (e = dt(13, n, t, o)), (e.elementType = Ra), (e.lanes = i), e;
      case La:
        return (e = dt(19, n, t, o)), (e.elementType = La), (e.lanes = i), e;
      case Md:
        return Tl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ld:
              l = 10;
              break e;
            case Od:
              l = 9;
              break e;
            case Ks:
              l = 11;
              break e;
            case Xs:
              l = 14;
              break e;
            case ln:
              (l = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = dt(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Bn(e, t, n, r) {
  return (e = dt(7, e, r, t)), (e.lanes = n), e;
}
function Tl(e, t, n, r) {
  return (
    (e = dt(22, e, r, t)),
    (e.elementType = Md),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ma(e, t, n) {
  return (e = dt(6, e, null, t)), (e.lanes = n), e;
}
function ga(e, t, n) {
  return (
    (t = dt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function fy(e, t, n, r, o) {
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
    (this.eventTimes = Gl(0)),
    (this.expirationTimes = Gl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Lu(e, t, n, r, o, i, l, a, s) {
  return (
    (e = new fy(e, t, n, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = dt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pu(i),
    e
  );
}
function dy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: sr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Eh(e) {
  if (!e) return En;
  e = e._reactInternals;
  e: {
    if (qn(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ze(n)) return Ep(e, n, t);
  }
  return t;
}
function _h(e, t, n, r, o, i, l, a, s) {
  return (
    (e = Lu(n, r, !0, e, o, i, l, a, s)),
    (e.context = Eh(null)),
    (n = e.current),
    (r = Ve()),
    (o = wn(n)),
    (i = Wt(r, o)),
    (i.callback = t ?? null),
    vn(n, i, o),
    (e.current.lanes = o),
    Vo(e, o, r),
    Je(e, r),
    e
  );
}
function Rl(e, t, n, r) {
  var o = t.current,
    i = Ve(),
    l = wn(o);
  return (
    (n = Eh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Wt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = vn(o, t, l)),
    e !== null && (Et(e, o, l, i), Li(e, o, l)),
    l
  );
}
function ul(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ou(e, t) {
  mf(e, t), (e = e.alternate) && mf(e, t);
}
function py() {
  return null;
}
var Ch =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Mu(e) {
  this._internalRoot = e;
}
Ll.prototype.render = Mu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Rl(e, t, null, null);
};
Ll.prototype.unmount = Mu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Xn(function () {
      Rl(null, e, null, null);
    }),
      (t[Vt] = null);
  }
};
function Ll(e) {
  this._internalRoot = e;
}
Ll.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = np();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < sn.length && t !== 0 && t < sn[n].priority; n++);
    sn.splice(n, 0, e), n === 0 && op(e);
  }
};
function Du(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ol(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function gf() {}
function hy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = ul(l);
        i.call(u);
      };
    }
    var l = _h(t, r, e, 0, null, !1, !1, "", gf);
    return (
      (e._reactRootContainer = l),
      (e[Vt] = l.current),
      Oo(e.nodeType === 8 ? e.parentNode : e),
      Xn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ul(s);
      a.call(u);
    };
  }
  var s = Lu(e, 0, !1, null, null, !1, !1, "", gf);
  return (
    (e._reactRootContainer = s),
    (e[Vt] = s.current),
    Oo(e.nodeType === 8 ? e.parentNode : e),
    Xn(function () {
      Rl(t, s, n, r);
    }),
    s
  );
}
function Ml(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var s = ul(l);
        a.call(s);
      };
    }
    Rl(t, l, e, o);
  } else l = hy(n, t, e, o, r);
  return ul(l);
}
ep = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = lo(t.pendingLanes);
        n !== 0 &&
          (Js(t, n | 1), Je(t, ke()), !(G & 6) && ((zr = ke() + 500), Rn()));
      }
      break;
    case 13:
      Xn(function () {
        var r = Yt(e, 1);
        if (r !== null) {
          var o = Ve();
          Et(r, e, 1, o);
        }
      }),
        Ou(e, 1);
  }
};
qs = function (e) {
  if (e.tag === 13) {
    var t = Yt(e, 134217728);
    if (t !== null) {
      var n = Ve();
      Et(t, e, 134217728, n);
    }
    Ou(e, 134217728);
  }
};
tp = function (e) {
  if (e.tag === 13) {
    var t = wn(e),
      n = Yt(e, t);
    if (n !== null) {
      var r = Ve();
      Et(n, e, t, r);
    }
    Ou(e, t);
  }
};
np = function () {
  return te;
};
rp = function (e, t) {
  var n = te;
  try {
    return (te = e), t();
  } finally {
    te = n;
  }
};
ba = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Da(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = kl(r);
            if (!o) throw Error(T(90));
            Ad(r), Da(r, o);
          }
        }
      }
      break;
    case "textarea":
      zd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Er(e, !!n.multiple, t, !1);
  }
};
Wd = Pu;
Hd = Xn;
var my = { usingClientEntryPoint: !1, Events: [Qo, pr, kl, $d, Bd, Pu] },
  eo = {
    findFiberByHostInstance: zn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  gy = {
    bundleType: eo.bundleType,
    version: eo.version,
    rendererPackageName: eo.rendererPackageName,
    rendererConfig: eo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Gt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Qd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: eo.findFiberByHostInstance || py,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ei.isDisabled && Ei.supportsFiber)
    try {
      (yl = Ei.inject(gy)), (At = Ei);
    } catch {}
}
at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = my;
at.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Du(t)) throw Error(T(200));
  return dy(e, t, null, n);
};
at.createRoot = function (e, t) {
  if (!Du(e)) throw Error(T(299));
  var n = !1,
    r = "",
    o = Ch;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Lu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Vt] = t.current),
    Oo(e.nodeType === 8 ? e.parentNode : e),
    new Mu(t)
  );
};
at.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = Qd(t)), (e = e === null ? null : e.stateNode), e;
};
at.flushSync = function (e) {
  return Xn(e);
};
at.hydrate = function (e, t, n) {
  if (!Ol(t)) throw Error(T(200));
  return Ml(null, e, t, !0, n);
};
at.hydrateRoot = function (e, t, n) {
  if (!Du(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = Ch;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = _h(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Vt] = t.current),
    Oo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ll(t);
};
at.render = function (e, t, n) {
  if (!Ol(t)) throw Error(T(200));
  return Ml(null, e, t, !1, n);
};
at.unmountComponentAtNode = function (e) {
  if (!Ol(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (Xn(function () {
        Ml(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Vt] = null);
        });
      }),
      !0)
    : !1;
};
at.unstable_batchedUpdates = Pu;
at.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ol(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return Ml(e, t, n, !1, r);
};
at.version = "18.3.1-next-f1338f8080-20240426";
function Ph() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ph);
    } catch (e) {
      console.error(e);
    }
}
Ph(), (Pd.exports = at);
var Au = Pd.exports;
const vy = js(Au),
  yy = hd({ __proto__: null, default: vy }, [Au]);
var vf = Au;
(Pa.createRoot = vf.createRoot), (Pa.hydrateRoot = vf.hydrateRoot);
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ge() {
  return (
    (ge = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ge.apply(this, arguments)
  );
}
var _e;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(_e || (_e = {}));
const yf = "popstate";
function wy(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: a } = r.location;
    return bo(
      "",
      { pathname: i, search: l, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Xo(o);
  }
  return xy(t, n, null, e);
}
function K(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Fr(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Sy() {
  return Math.random().toString(36).substr(2, 8);
}
function wf(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function bo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ge(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ln(t) : t,
      { state: n, key: (t && t.key) || r || Sy() }
    )
  );
}
function Xo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ln(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function xy(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    a = _e.Pop,
    s = null,
    u = f();
  u == null && ((u = 0), l.replaceState(ge({}, l.state, { idx: u }), ""));
  function f() {
    return (l.state || { idx: null }).idx;
  }
  function c() {
    a = _e.Pop;
    let C = f(),
      h = C == null ? null : C - u;
    (u = C), s && s({ action: a, location: x.location, delta: h });
  }
  function p(C, h) {
    a = _e.Push;
    let d = bo(x.location, C, h);
    u = f() + 1;
    let g = wf(d, u),
      E = x.createHref(d);
    try {
      l.pushState(g, "", E);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      o.location.assign(E);
    }
    i && s && s({ action: a, location: x.location, delta: 1 });
  }
  function S(C, h) {
    a = _e.Replace;
    let d = bo(x.location, C, h);
    u = f();
    let g = wf(d, u),
      E = x.createHref(d);
    l.replaceState(g, "", E),
      i && s && s({ action: a, location: x.location, delta: 0 });
  }
  function w(C) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      d = typeof C == "string" ? C : Xo(C);
    return (
      (d = d.replace(/ $/, "%20")),
      K(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, h)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(o, l);
    },
    listen(C) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(yf, c),
        (s = C),
        () => {
          o.removeEventListener(yf, c), (s = null);
        }
      );
    },
    createHref(C) {
      return t(o, C);
    },
    createURL: w,
    encodeLocation(C) {
      let h = w(C);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: p,
    replace: S,
    go(C) {
      return l.go(C);
    },
  };
  return x;
}
var re;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(re || (re = {}));
const ky = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Ey(e) {
  return e.index === !0;
}
function $o(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, i) => {
      let l = [...n, String(i)],
        a = typeof o.id == "string" ? o.id : l.join("-");
      if (
        (K(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route"
        ),
        K(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Ey(o))
      ) {
        let s = ge({}, o, t(o), { id: a });
        return (r[a] = s), s;
      } else {
        let s = ge({}, o, t(o), { id: a, children: void 0 });
        return (
          (r[a] = s), o.children && (s.children = $o(o.children, t, l, r)), s
        );
      }
    })
  );
}
function An(e, t, n) {
  return n === void 0 && (n = "/"), Fi(e, t, n, !1);
}
function Fi(e, t, n, r) {
  let o = typeof t == "string" ? Ln(t) : t,
    i = Go(o.pathname || "/", n);
  if (i == null) return null;
  let l = Nh(e);
  Cy(l);
  let a = null;
  for (let s = 0; a == null && s < l.length; ++s) {
    let u = zy(i);
    a = Ay(l[s], u, r);
  }
  return a;
}
function _y(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function Nh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, l, a) => {
    let s = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (K(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = xn([r, s.relativePath]),
      f = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (K(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Nh(i.children, t, f, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: My(u, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, l) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, l);
      else for (let s of Th(i.path)) o(i, l, s);
    }),
    t
  );
}
function Th(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let l = Th(r.join("/")),
    a = [];
  return (
    a.push(...l.map((s) => (s === "" ? i : [i, s].join("/")))),
    o && a.push(...l),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Cy(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Dy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Py = /^:[\w-]+$/,
  Ny = 3,
  Ty = 2,
  Ry = 1,
  Ly = 10,
  Oy = -2,
  Sf = (e) => e === "*";
function My(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Sf) && (r += Oy),
    t && (r += Ty),
    n
      .filter((o) => !Sf(o))
      .reduce((o, i) => o + (Py.test(i) ? Ny : i === "" ? Ry : Ly), r)
  );
}
function Dy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ay(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    l = [];
  for (let a = 0; a < r.length; ++a) {
    let s = r[a],
      u = a === r.length - 1,
      f = i === "/" ? t : t.slice(i.length) || "/",
      c = xf(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: u },
        f
      ),
      p = s.route;
    if (
      (!c &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (c = xf(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          f
        )),
      !c)
    )
      return null;
    Object.assign(o, c.params),
      l.push({
        params: o,
        pathname: xn([i, c.pathname]),
        pathnameBase: Uy(xn([i, c.pathnameBase])),
        route: p,
      }),
      c.pathnameBase !== "/" && (i = xn([i, c.pathnameBase]));
  }
  return l;
}
function xf(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Iy(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, f, c) => {
      let { paramName: p, isOptional: S } = f;
      if (p === "*") {
        let x = a[c] || "";
        l = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const w = a[c];
      return (
        S && !w ? (u[p] = void 0) : (u[p] = (w || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function Iy(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Fr(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, a, s) => (
            r.push({ paramName: a, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function zy(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Fr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Go(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Fy(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Ln(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : jy(n, t)) : t,
    search: by(r),
    hash: $y(o),
  };
}
function jy(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function va(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Rh(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Lh(e, t) {
  let n = Rh(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Oh(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Ln(e))
    : ((o = ge({}, e)),
      K(
        !o.pathname || !o.pathname.includes("?"),
        va("?", "pathname", "search", o)
      ),
      K(
        !o.pathname || !o.pathname.includes("#"),
        va("#", "pathname", "hash", o)
      ),
      K(!o.search || !o.search.includes("#"), va("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    l = i ? "/" : o.pathname,
    a;
  if (l == null) a = n;
  else {
    let c = t.length - 1;
    if (!r && l.startsWith("..")) {
      let p = l.split("/");
      for (; p[0] === ".."; ) p.shift(), (c -= 1);
      o.pathname = p.join("/");
    }
    a = c >= 0 ? t[c] : "/";
  }
  let s = Fy(o, a),
    u = l && l !== "/" && l.endsWith("/"),
    f = (i || l === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || f) && (s.pathname += "/"), s;
}
const xn = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Uy = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  by = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  $y = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class cl {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Dl(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Mh = ["post", "put", "patch", "delete"],
  By = new Set(Mh),
  Wy = ["get", ...Mh],
  Hy = new Set(Wy),
  Vy = new Set([301, 302, 303, 307, 308]),
  Yy = new Set([307, 308]),
  ya = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Qy = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  to = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Iu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ky = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Dh = "remix-router-transitions";
function Xy(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  K(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let m = e.detectErrorBoundary;
    o = (v) => ({ hasErrorBoundary: m(v) });
  } else o = Ky;
  let i = {},
    l = $o(e.routes, o, void 0, i),
    a,
    s = e.basename || "/",
    u = e.unstable_dataStrategy || e0,
    f = e.unstable_patchRoutesOnMiss,
    c = ge(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    p = null,
    S = new Set(),
    w = null,
    x = null,
    C = null,
    h = e.hydrationData != null,
    d = An(l, e.history.location, s),
    g = null;
  if (d == null && !f) {
    let m = We(404, { pathname: e.history.location.pathname }),
      { matches: v, route: k } = Of(l);
    (d = v), (g = { [k.id]: m });
  }
  d &&
    !e.hydrationData &&
    ni(d, l, e.history.location.pathname).active &&
    (d = null);
  let E;
  if (d)
    if (d.some((m) => m.route.lazy)) E = !1;
    else if (!d.some((m) => m.route.loader)) E = !0;
    else if (c.v7_partialHydration) {
      let m = e.hydrationData ? e.hydrationData.loaderData : null,
        v = e.hydrationData ? e.hydrationData.errors : null,
        k = (_) =>
          _.route.loader
            ? typeof _.route.loader == "function" &&
              _.route.loader.hydrate === !0
              ? !1
              : (m && m[_.route.id] !== void 0) ||
                (v && v[_.route.id] !== void 0)
            : !0;
      if (v) {
        let _ = d.findIndex((D) => v[D.route.id] !== void 0);
        E = d.slice(0, _ + 1).every(k);
      } else E = d.every(k);
    } else E = e.hydrationData != null;
  else if (((E = !1), (d = []), c.v7_partialHydration)) {
    let m = ni(null, l, e.history.location.pathname);
    m.active && m.matches && (d = m.matches);
  }
  let P,
    y = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: d,
      initialized: E,
      navigation: ya,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || g,
      fetchers: new Map(),
      blockers: new Map(),
    },
    O = _e.Pop,
    R = !1,
    F,
    z = !1,
    Z = new Map(),
    fe = null,
    Te = !1,
    ie = !1,
    Ct = [],
    Jt = new Set(),
    de = new Map(),
    M = 0,
    W = -1,
    H = new Map(),
    J = new Set(),
    ae = new Map(),
    Pt = new Map(),
    Oe = new Set(),
    gt = new Map(),
    $e = new Map(),
    tr = new Map(),
    $l = !1;
  function Tm() {
    if (
      ((p = e.history.listen((m) => {
        let { action: v, location: k, delta: _ } = m;
        if ($l) {
          $l = !1;
          return;
        }
        Fr(
          $e.size === 0 || _ != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let D = oc({
          currentLocation: y.location,
          nextLocation: k,
          historyAction: v,
        });
        if (D && _ != null) {
          ($l = !0),
            e.history.go(_ * -1),
            ei(D, {
              state: "blocked",
              location: k,
              proceed() {
                ei(D, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(_);
              },
              reset() {
                let j = new Map(y.blockers);
                j.set(D, to), Be({ blockers: j });
              },
            });
          return;
        }
        return On(v, k);
      })),
      n)
    ) {
      p0(t, Z);
      let m = () => h0(t, Z);
      t.addEventListener("pagehide", m),
        (fe = () => t.removeEventListener("pagehide", m));
    }
    return y.initialized || On(_e.Pop, y.location, { initialHydration: !0 }), P;
  }
  function Rm() {
    p && p(),
      fe && fe(),
      S.clear(),
      F && F.abort(),
      y.fetchers.forEach((m, v) => qo(v)),
      y.blockers.forEach((m, v) => rc(v));
  }
  function Lm(m) {
    return S.add(m), () => S.delete(m);
  }
  function Be(m, v) {
    v === void 0 && (v = {}), (y = ge({}, y, m));
    let k = [],
      _ = [];
    c.v7_fetcherPersist &&
      y.fetchers.forEach((D, j) => {
        D.state === "idle" && (Oe.has(j) ? _.push(j) : k.push(j));
      }),
      [...S].forEach((D) =>
        D(y, {
          deletedFetchers: _,
          unstable_viewTransitionOpts: v.viewTransitionOpts,
          unstable_flushSync: v.flushSync === !0,
        })
      ),
      c.v7_fetcherPersist &&
        (k.forEach((D) => y.fetchers.delete(D)), _.forEach((D) => qo(D)));
  }
  function nr(m, v, k) {
    var _, D;
    let { flushSync: j } = k === void 0 ? {} : k,
      B =
        y.actionData != null &&
        y.navigation.formMethod != null &&
        St(y.navigation.formMethod) &&
        y.navigation.state === "loading" &&
        ((_ = m.state) == null ? void 0 : _._isRedirect) !== !0,
      L;
    v.actionData
      ? Object.keys(v.actionData).length > 0
        ? (L = v.actionData)
        : (L = null)
      : B
      ? (L = y.actionData)
      : (L = null);
    let V = v.loaderData
        ? Rf(y.loaderData, v.loaderData, v.matches || [], v.errors)
        : y.loaderData,
      b = y.blockers;
    b.size > 0 && ((b = new Map(b)), b.forEach((ee, oe) => b.set(oe, to)));
    let $ =
      R === !0 ||
      (y.navigation.formMethod != null &&
        St(y.navigation.formMethod) &&
        ((D = m.state) == null ? void 0 : D._isRedirect) !== !0);
    a && ((l = a), (a = void 0)),
      Te ||
        O === _e.Pop ||
        (O === _e.Push
          ? e.history.push(m, m.state)
          : O === _e.Replace && e.history.replace(m, m.state));
    let ne;
    if (O === _e.Pop) {
      let ee = Z.get(y.location.pathname);
      ee && ee.has(m.pathname)
        ? (ne = { currentLocation: y.location, nextLocation: m })
        : Z.has(m.pathname) &&
          (ne = { currentLocation: m, nextLocation: y.location });
    } else if (z) {
      let ee = Z.get(y.location.pathname);
      ee
        ? ee.add(m.pathname)
        : ((ee = new Set([m.pathname])), Z.set(y.location.pathname, ee)),
        (ne = { currentLocation: y.location, nextLocation: m });
    }
    Be(
      ge({}, v, {
        actionData: L,
        loaderData: V,
        historyAction: O,
        location: m,
        initialized: !0,
        navigation: ya,
        revalidation: "idle",
        restoreScrollPosition: lc(m, v.matches || y.matches),
        preventScrollReset: $,
        blockers: b,
      }),
      { viewTransitionOpts: ne, flushSync: j === !0 }
    ),
      (O = _e.Pop),
      (R = !1),
      (z = !1),
      (Te = !1),
      (ie = !1),
      (Ct = []);
  }
  async function Gu(m, v) {
    if (typeof m == "number") {
      e.history.go(m);
      return;
    }
    let k = ws(
        y.location,
        y.matches,
        s,
        c.v7_prependBasename,
        m,
        c.v7_relativeSplatPath,
        v == null ? void 0 : v.fromRouteId,
        v == null ? void 0 : v.relative
      ),
      {
        path: _,
        submission: D,
        error: j,
      } = kf(c.v7_normalizeFormMethod, !1, k, v),
      B = y.location,
      L = bo(y.location, _, v && v.state);
    L = ge({}, L, e.history.encodeLocation(L));
    let V = v && v.replace != null ? v.replace : void 0,
      b = _e.Push;
    V === !0
      ? (b = _e.Replace)
      : V === !1 ||
        (D != null &&
          St(D.formMethod) &&
          D.formAction === y.location.pathname + y.location.search &&
          (b = _e.Replace));
    let $ =
        v && "preventScrollReset" in v ? v.preventScrollReset === !0 : void 0,
      ne = (v && v.unstable_flushSync) === !0,
      ee = oc({ currentLocation: B, nextLocation: L, historyAction: b });
    if (ee) {
      ei(ee, {
        state: "blocked",
        location: L,
        proceed() {
          ei(ee, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: L,
          }),
            Gu(m, v);
        },
        reset() {
          let oe = new Map(y.blockers);
          oe.set(ee, to), Be({ blockers: oe });
        },
      });
      return;
    }
    return await On(b, L, {
      submission: D,
      pendingError: j,
      preventScrollReset: $,
      replace: v && v.replace,
      enableViewTransition: v && v.unstable_viewTransition,
      flushSync: ne,
    });
  }
  function Om() {
    if (
      (Bl(),
      Be({ revalidation: "loading" }),
      y.navigation.state !== "submitting")
    ) {
      if (y.navigation.state === "idle") {
        On(y.historyAction, y.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      On(O || y.historyAction, y.navigation.location, {
        overrideNavigation: y.navigation,
      });
    }
  }
  async function On(m, v, k) {
    F && F.abort(),
      (F = null),
      (O = m),
      (Te = (k && k.startUninterruptedRevalidation) === !0),
      $m(y.location, y.matches),
      (R = (k && k.preventScrollReset) === !0),
      (z = (k && k.enableViewTransition) === !0);
    let _ = a || l,
      D = k && k.overrideNavigation,
      j = An(_, v, s),
      B = (k && k.flushSync) === !0,
      L = ni(j, _, v.pathname);
    if ((L.active && L.matches && (j = L.matches), !j)) {
      let { error: q, notFoundMatches: Me, route: Ee } = Wl(v.pathname);
      nr(
        v,
        { matches: Me, loaderData: {}, errors: { [Ee.id]: q } },
        { flushSync: B }
      );
      return;
    }
    if (
      y.initialized &&
      !ie &&
      l0(y.location, v) &&
      !(k && k.submission && St(k.submission.formMethod))
    ) {
      nr(v, { matches: j }, { flushSync: B });
      return;
    }
    F = new AbortController();
    let V = ar(e.history, v, F.signal, k && k.submission),
      b;
    if (k && k.pendingError)
      b = [Sr(j).route.id, { type: re.error, error: k.pendingError }];
    else if (k && k.submission && St(k.submission.formMethod)) {
      let q = await Mm(V, v, k.submission, j, L.active, {
        replace: k.replace,
        flushSync: B,
      });
      if (q.shortCircuited) return;
      if (q.pendingActionResult) {
        let [Me, Ee] = q.pendingActionResult;
        if (tt(Ee) && Dl(Ee.error) && Ee.error.status === 404) {
          (F = null),
            nr(v, {
              matches: q.matches,
              loaderData: {},
              errors: { [Me]: Ee.error },
            });
          return;
        }
      }
      (j = q.matches || j),
        (b = q.pendingActionResult),
        (D = wa(v, k.submission)),
        (B = !1),
        (L.active = !1),
        (V = ar(e.history, V.url, V.signal));
    }
    let {
      shortCircuited: $,
      matches: ne,
      loaderData: ee,
      errors: oe,
    } = await Dm(
      V,
      v,
      j,
      L.active,
      D,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      k && k.initialHydration === !0,
      B,
      b
    );
    $ ||
      ((F = null),
      nr(v, ge({ matches: ne || j }, Lf(b), { loaderData: ee, errors: oe })));
  }
  async function Mm(m, v, k, _, D, j) {
    j === void 0 && (j = {}), Bl();
    let B = f0(v, k);
    if ((Be({ navigation: B }, { flushSync: j.flushSync === !0 }), D)) {
      let b = await ri(_, v.pathname, m.signal);
      if (b.type === "aborted") return { shortCircuited: !0 };
      if (b.type === "error") {
        let { boundaryId: $, error: ne } = ti(v.pathname, b);
        return {
          matches: b.partialMatches,
          pendingActionResult: [$, { type: re.error, error: ne }],
        };
      } else if (b.matches) _ = b.matches;
      else {
        let { notFoundMatches: $, error: ne, route: ee } = Wl(v.pathname);
        return {
          matches: $,
          pendingActionResult: [ee.id, { type: re.error, error: ne }],
        };
      }
    }
    let L,
      V = so(_, v);
    if (!V.route.action && !V.route.lazy)
      L = {
        type: re.error,
        error: We(405, {
          method: m.method,
          pathname: v.pathname,
          routeId: V.route.id,
        }),
      };
    else if (((L = (await Vr("action", m, [V], _))[0]), m.signal.aborted))
      return { shortCircuited: !0 };
    if (bn(L)) {
      let b;
      return (
        j && j.replace != null
          ? (b = j.replace)
          : (b =
              Pf(L.response.headers.get("Location"), new URL(m.url), s) ===
              y.location.pathname + y.location.search),
        await Hr(m, L, { submission: k, replace: b }),
        { shortCircuited: !0 }
      );
    }
    if (Un(L)) throw We(400, { type: "defer-action" });
    if (tt(L)) {
      let b = Sr(_, V.route.id);
      return (
        (j && j.replace) !== !0 && (O = _e.Push),
        { matches: _, pendingActionResult: [b.route.id, L] }
      );
    }
    return { matches: _, pendingActionResult: [V.route.id, L] };
  }
  async function Dm(m, v, k, _, D, j, B, L, V, b, $) {
    let ne = D || wa(v, j),
      ee = j || B || If(ne),
      oe = !Te && (!c.v7_partialHydration || !V);
    if (_) {
      if (oe) {
        let Se = Zu($);
        Be(ge({ navigation: ne }, Se !== void 0 ? { actionData: Se } : {}), {
          flushSync: b,
        });
      }
      let Y = await ri(k, v.pathname, m.signal);
      if (Y.type === "aborted") return { shortCircuited: !0 };
      if (Y.type === "error") {
        let { boundaryId: Se, error: qe } = ti(v.pathname, Y);
        return {
          matches: Y.partialMatches,
          loaderData: {},
          errors: { [Se]: qe },
        };
      } else if (Y.matches) k = Y.matches;
      else {
        let { error: Se, notFoundMatches: qe, route: pe } = Wl(v.pathname);
        return { matches: qe, loaderData: {}, errors: { [pe.id]: Se } };
      }
    }
    let q = a || l,
      [Me, Ee] = Ef(
        e.history,
        y,
        k,
        ee,
        v,
        c.v7_partialHydration && V === !0,
        c.v7_skipActionErrorRevalidation,
        ie,
        Ct,
        Jt,
        Oe,
        ae,
        J,
        q,
        s,
        $
      );
    if (
      (Hl(
        (Y) =>
          !(k && k.some((Se) => Se.route.id === Y)) ||
          (Me && Me.some((Se) => Se.route.id === Y))
      ),
      (W = ++M),
      Me.length === 0 && Ee.length === 0)
    ) {
      let Y = tc();
      return (
        nr(
          v,
          ge(
            {
              matches: k,
              loaderData: {},
              errors: $ && tt($[1]) ? { [$[0]]: $[1].error } : null,
            },
            Lf($),
            Y ? { fetchers: new Map(y.fetchers) } : {}
          ),
          { flushSync: b }
        ),
        { shortCircuited: !0 }
      );
    }
    if (oe) {
      let Y = {};
      if (!_) {
        Y.navigation = ne;
        let Se = Zu($);
        Se !== void 0 && (Y.actionData = Se);
      }
      Ee.length > 0 && (Y.fetchers = Am(Ee)), Be(Y, { flushSync: b });
    }
    Ee.forEach((Y) => {
      de.has(Y.key) && en(Y.key), Y.controller && de.set(Y.key, Y.controller);
    });
    let Yr = () => Ee.forEach((Y) => en(Y.key));
    F && F.signal.addEventListener("abort", Yr);
    let { loaderResults: tn, fetcherResults: rr } = await Ju(
      y.matches,
      k,
      Me,
      Ee,
      m
    );
    if (m.signal.aborted) return { shortCircuited: !0 };
    F && F.signal.removeEventListener("abort", Yr),
      Ee.forEach((Y) => de.delete(Y.key));
    let or = Mf([...tn, ...rr]);
    if (or) {
      if (or.idx >= Me.length) {
        let Y = Ee[or.idx - Me.length].key;
        J.add(Y);
      }
      return await Hr(m, or.result, { replace: L }), { shortCircuited: !0 };
    }
    let { loaderData: ir, errors: Nt } = Tf(y, k, Me, tn, $, Ee, rr, gt);
    gt.forEach((Y, Se) => {
      Y.subscribe((qe) => {
        (qe || Y.done) && gt.delete(Se);
      });
    }),
      c.v7_partialHydration &&
        V &&
        y.errors &&
        Object.entries(y.errors)
          .filter((Y) => {
            let [Se] = Y;
            return !Me.some((qe) => qe.route.id === Se);
          })
          .forEach((Y) => {
            let [Se, qe] = Y;
            Nt = Object.assign(Nt || {}, { [Se]: qe });
          });
    let oi = tc(),
      ii = nc(W),
      li = oi || ii || Ee.length > 0;
    return ge(
      { matches: k, loaderData: ir, errors: Nt },
      li ? { fetchers: new Map(y.fetchers) } : {}
    );
  }
  function Zu(m) {
    if (m && !tt(m[1])) return { [m[0]]: m[1].data };
    if (y.actionData)
      return Object.keys(y.actionData).length === 0 ? null : y.actionData;
  }
  function Am(m) {
    return (
      m.forEach((v) => {
        let k = y.fetchers.get(v.key),
          _ = no(void 0, k ? k.data : void 0);
        y.fetchers.set(v.key, _);
      }),
      new Map(y.fetchers)
    );
  }
  function Im(m, v, k, _) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    de.has(m) && en(m);
    let D = (_ && _.unstable_flushSync) === !0,
      j = a || l,
      B = ws(
        y.location,
        y.matches,
        s,
        c.v7_prependBasename,
        k,
        c.v7_relativeSplatPath,
        v,
        _ == null ? void 0 : _.relative
      ),
      L = An(j, B, s),
      V = ni(L, j, B);
    if ((V.active && V.matches && (L = V.matches), !L)) {
      Ft(m, v, We(404, { pathname: B }), { flushSync: D });
      return;
    }
    let {
      path: b,
      submission: $,
      error: ne,
    } = kf(c.v7_normalizeFormMethod, !0, B, _);
    if (ne) {
      Ft(m, v, ne, { flushSync: D });
      return;
    }
    let ee = so(L, b);
    if (((R = (_ && _.preventScrollReset) === !0), $ && St($.formMethod))) {
      zm(m, v, b, ee, L, V.active, D, $);
      return;
    }
    ae.set(m, { routeId: v, path: b }), Fm(m, v, b, ee, L, V.active, D, $);
  }
  async function zm(m, v, k, _, D, j, B, L) {
    Bl(), ae.delete(m);
    function V(pe) {
      if (!pe.route.action && !pe.route.lazy) {
        let jt = We(405, { method: L.formMethod, pathname: k, routeId: v });
        return Ft(m, v, jt, { flushSync: B }), !0;
      }
      return !1;
    }
    if (!j && V(_)) return;
    let b = y.fetchers.get(m);
    qt(m, d0(L, b), { flushSync: B });
    let $ = new AbortController(),
      ne = ar(e.history, k, $.signal, L);
    if (j) {
      let pe = await ri(D, k, ne.signal);
      if (pe.type === "aborted") return;
      if (pe.type === "error") {
        let { error: jt } = ti(k, pe);
        Ft(m, v, jt, { flushSync: B });
        return;
      } else if (pe.matches) {
        if (((D = pe.matches), (_ = so(D, k)), V(_))) return;
      } else {
        Ft(m, v, We(404, { pathname: k }), { flushSync: B });
        return;
      }
    }
    de.set(m, $);
    let ee = M,
      q = (await Vr("action", ne, [_], D))[0];
    if (ne.signal.aborted) {
      de.get(m) === $ && de.delete(m);
      return;
    }
    if (c.v7_fetcherPersist && Oe.has(m)) {
      if (bn(q) || tt(q)) {
        qt(m, on(void 0));
        return;
      }
    } else {
      if (bn(q))
        if ((de.delete(m), W > ee)) {
          qt(m, on(void 0));
          return;
        } else
          return J.add(m), qt(m, no(L)), Hr(ne, q, { fetcherSubmission: L });
      if (tt(q)) {
        Ft(m, v, q.error);
        return;
      }
    }
    if (Un(q)) throw We(400, { type: "defer-action" });
    let Me = y.navigation.location || y.location,
      Ee = ar(e.history, Me, $.signal),
      Yr = a || l,
      tn =
        y.navigation.state !== "idle"
          ? An(Yr, y.navigation.location, s)
          : y.matches;
    K(tn, "Didn't find any matches after fetcher action");
    let rr = ++M;
    H.set(m, rr);
    let or = no(L, q.data);
    y.fetchers.set(m, or);
    let [ir, Nt] = Ef(
      e.history,
      y,
      tn,
      L,
      Me,
      !1,
      c.v7_skipActionErrorRevalidation,
      ie,
      Ct,
      Jt,
      Oe,
      ae,
      J,
      Yr,
      s,
      [_.route.id, q]
    );
    Nt.filter((pe) => pe.key !== m).forEach((pe) => {
      let jt = pe.key,
        ac = y.fetchers.get(jt),
        Hm = no(void 0, ac ? ac.data : void 0);
      y.fetchers.set(jt, Hm),
        de.has(jt) && en(jt),
        pe.controller && de.set(jt, pe.controller);
    }),
      Be({ fetchers: new Map(y.fetchers) });
    let oi = () => Nt.forEach((pe) => en(pe.key));
    $.signal.addEventListener("abort", oi);
    let { loaderResults: ii, fetcherResults: li } = await Ju(
      y.matches,
      tn,
      ir,
      Nt,
      Ee
    );
    if ($.signal.aborted) return;
    $.signal.removeEventListener("abort", oi),
      H.delete(m),
      de.delete(m),
      Nt.forEach((pe) => de.delete(pe.key));
    let Y = Mf([...ii, ...li]);
    if (Y) {
      if (Y.idx >= ir.length) {
        let pe = Nt[Y.idx - ir.length].key;
        J.add(pe);
      }
      return Hr(Ee, Y.result);
    }
    let { loaderData: Se, errors: qe } = Tf(
      y,
      y.matches,
      ir,
      ii,
      void 0,
      Nt,
      li,
      gt
    );
    if (y.fetchers.has(m)) {
      let pe = on(q.data);
      y.fetchers.set(m, pe);
    }
    nc(rr),
      y.navigation.state === "loading" && rr > W
        ? (K(O, "Expected pending action"),
          F && F.abort(),
          nr(y.navigation.location, {
            matches: tn,
            loaderData: Se,
            errors: qe,
            fetchers: new Map(y.fetchers),
          }))
        : (Be({
            errors: qe,
            loaderData: Rf(y.loaderData, Se, tn, qe),
            fetchers: new Map(y.fetchers),
          }),
          (ie = !1));
  }
  async function Fm(m, v, k, _, D, j, B, L) {
    let V = y.fetchers.get(m);
    qt(m, no(L, V ? V.data : void 0), { flushSync: B });
    let b = new AbortController(),
      $ = ar(e.history, k, b.signal);
    if (j) {
      let q = await ri(D, k, $.signal);
      if (q.type === "aborted") return;
      if (q.type === "error") {
        let { error: Me } = ti(k, q);
        Ft(m, v, Me, { flushSync: B });
        return;
      } else if (q.matches) (D = q.matches), (_ = so(D, k));
      else {
        Ft(m, v, We(404, { pathname: k }), { flushSync: B });
        return;
      }
    }
    de.set(m, b);
    let ne = M,
      oe = (await Vr("loader", $, [_], D))[0];
    if (
      (Un(oe) && (oe = (await jh(oe, $.signal, !0)) || oe),
      de.get(m) === b && de.delete(m),
      !$.signal.aborted)
    ) {
      if (Oe.has(m)) {
        qt(m, on(void 0));
        return;
      }
      if (bn(oe))
        if (W > ne) {
          qt(m, on(void 0));
          return;
        } else {
          J.add(m), await Hr($, oe);
          return;
        }
      if (tt(oe)) {
        Ft(m, v, oe.error);
        return;
      }
      K(!Un(oe), "Unhandled fetcher deferred data"), qt(m, on(oe.data));
    }
  }
  async function Hr(m, v, k) {
    let {
      submission: _,
      fetcherSubmission: D,
      replace: j,
    } = k === void 0 ? {} : k;
    v.response.headers.has("X-Remix-Revalidate") && (ie = !0);
    let B = v.response.headers.get("Location");
    K(B, "Expected a Location header on the redirect Response"),
      (B = Pf(B, new URL(m.url), s));
    let L = bo(y.location, B, { _isRedirect: !0 });
    if (n) {
      let oe = !1;
      if (v.response.headers.has("X-Remix-Reload-Document")) oe = !0;
      else if (Iu.test(B)) {
        const q = e.history.createURL(B);
        oe = q.origin !== t.location.origin || Go(q.pathname, s) == null;
      }
      if (oe) {
        j ? t.location.replace(B) : t.location.assign(B);
        return;
      }
    }
    F = null;
    let V =
        j === !0 || v.response.headers.has("X-Remix-Replace")
          ? _e.Replace
          : _e.Push,
      { formMethod: b, formAction: $, formEncType: ne } = y.navigation;
    !_ && !D && b && $ && ne && (_ = If(y.navigation));
    let ee = _ || D;
    if (Yy.has(v.response.status) && ee && St(ee.formMethod))
      await On(V, L, {
        submission: ge({}, ee, { formAction: B }),
        preventScrollReset: R,
      });
    else {
      let oe = wa(L, _);
      await On(V, L, {
        overrideNavigation: oe,
        fetcherSubmission: D,
        preventScrollReset: R,
      });
    }
  }
  async function Vr(m, v, k, _) {
    try {
      let D = await t0(u, m, v, k, _, i, o);
      return await Promise.all(
        D.map((j, B) => {
          if (s0(j)) {
            let L = j.result;
            return {
              type: re.redirect,
              response: o0(L, v, k[B].route.id, _, s, c.v7_relativeSplatPath),
            };
          }
          return r0(j);
        })
      );
    } catch (D) {
      return k.map(() => ({ type: re.error, error: D }));
    }
  }
  async function Ju(m, v, k, _, D) {
    let [j, ...B] = await Promise.all([
      k.length ? Vr("loader", D, k, v) : [],
      ..._.map((L) => {
        if (L.matches && L.match && L.controller) {
          let V = ar(e.history, L.path, L.controller.signal);
          return Vr("loader", V, [L.match], L.matches).then((b) => b[0]);
        } else
          return Promise.resolve({
            type: re.error,
            error: We(404, { pathname: L.path }),
          });
      }),
    ]);
    return (
      await Promise.all([
        Af(
          m,
          k,
          j,
          j.map(() => D.signal),
          !1,
          y.loaderData
        ),
        Af(
          m,
          _.map((L) => L.match),
          B,
          _.map((L) => (L.controller ? L.controller.signal : null)),
          !0
        ),
      ]),
      { loaderResults: j, fetcherResults: B }
    );
  }
  function Bl() {
    (ie = !0),
      Ct.push(...Hl()),
      ae.forEach((m, v) => {
        de.has(v) && (Jt.add(v), en(v));
      });
  }
  function qt(m, v, k) {
    k === void 0 && (k = {}),
      y.fetchers.set(m, v),
      Be(
        { fetchers: new Map(y.fetchers) },
        { flushSync: (k && k.flushSync) === !0 }
      );
  }
  function Ft(m, v, k, _) {
    _ === void 0 && (_ = {});
    let D = Sr(y.matches, v);
    qo(m),
      Be(
        { errors: { [D.route.id]: k }, fetchers: new Map(y.fetchers) },
        { flushSync: (_ && _.flushSync) === !0 }
      );
  }
  function qu(m) {
    return (
      c.v7_fetcherPersist &&
        (Pt.set(m, (Pt.get(m) || 0) + 1), Oe.has(m) && Oe.delete(m)),
      y.fetchers.get(m) || Qy
    );
  }
  function qo(m) {
    let v = y.fetchers.get(m);
    de.has(m) && !(v && v.state === "loading" && H.has(m)) && en(m),
      ae.delete(m),
      H.delete(m),
      J.delete(m),
      Oe.delete(m),
      Jt.delete(m),
      y.fetchers.delete(m);
  }
  function jm(m) {
    if (c.v7_fetcherPersist) {
      let v = (Pt.get(m) || 0) - 1;
      v <= 0 ? (Pt.delete(m), Oe.add(m)) : Pt.set(m, v);
    } else qo(m);
    Be({ fetchers: new Map(y.fetchers) });
  }
  function en(m) {
    let v = de.get(m);
    K(v, "Expected fetch controller: " + m), v.abort(), de.delete(m);
  }
  function ec(m) {
    for (let v of m) {
      let k = qu(v),
        _ = on(k.data);
      y.fetchers.set(v, _);
    }
  }
  function tc() {
    let m = [],
      v = !1;
    for (let k of J) {
      let _ = y.fetchers.get(k);
      K(_, "Expected fetcher: " + k),
        _.state === "loading" && (J.delete(k), m.push(k), (v = !0));
    }
    return ec(m), v;
  }
  function nc(m) {
    let v = [];
    for (let [k, _] of H)
      if (_ < m) {
        let D = y.fetchers.get(k);
        K(D, "Expected fetcher: " + k),
          D.state === "loading" && (en(k), H.delete(k), v.push(k));
      }
    return ec(v), v.length > 0;
  }
  function Um(m, v) {
    let k = y.blockers.get(m) || to;
    return $e.get(m) !== v && $e.set(m, v), k;
  }
  function rc(m) {
    y.blockers.delete(m), $e.delete(m);
  }
  function ei(m, v) {
    let k = y.blockers.get(m) || to;
    K(
      (k.state === "unblocked" && v.state === "blocked") ||
        (k.state === "blocked" && v.state === "blocked") ||
        (k.state === "blocked" && v.state === "proceeding") ||
        (k.state === "blocked" && v.state === "unblocked") ||
        (k.state === "proceeding" && v.state === "unblocked"),
      "Invalid blocker state transition: " + k.state + " -> " + v.state
    );
    let _ = new Map(y.blockers);
    _.set(m, v), Be({ blockers: _ });
  }
  function oc(m) {
    let { currentLocation: v, nextLocation: k, historyAction: _ } = m;
    if ($e.size === 0) return;
    $e.size > 1 && Fr(!1, "A router only supports one blocker at a time");
    let D = Array.from($e.entries()),
      [j, B] = D[D.length - 1],
      L = y.blockers.get(j);
    if (
      !(L && L.state === "proceeding") &&
      B({ currentLocation: v, nextLocation: k, historyAction: _ })
    )
      return j;
  }
  function Wl(m) {
    let v = We(404, { pathname: m }),
      k = a || l,
      { matches: _, route: D } = Of(k);
    return Hl(), { notFoundMatches: _, route: D, error: v };
  }
  function ti(m, v) {
    return {
      boundaryId: Sr(v.partialMatches).route.id,
      error: We(400, {
        type: "route-discovery",
        pathname: m,
        message:
          v.error != null && "message" in v.error ? v.error : String(v.error),
      }),
    };
  }
  function Hl(m) {
    let v = [];
    return (
      gt.forEach((k, _) => {
        (!m || m(_)) && (k.cancel(), v.push(_), gt.delete(_));
      }),
      v
    );
  }
  function bm(m, v, k) {
    if (((w = m), (C = v), (x = k || null), !h && y.navigation === ya)) {
      h = !0;
      let _ = lc(y.location, y.matches);
      _ != null && Be({ restoreScrollPosition: _ });
    }
    return () => {
      (w = null), (C = null), (x = null);
    };
  }
  function ic(m, v) {
    return (
      (x &&
        x(
          m,
          v.map((_) => _y(_, y.loaderData))
        )) ||
      m.key
    );
  }
  function $m(m, v) {
    if (w && C) {
      let k = ic(m, v);
      w[k] = C();
    }
  }
  function lc(m, v) {
    if (w) {
      let k = ic(m, v),
        _ = w[k];
      if (typeof _ == "number") return _;
    }
    return null;
  }
  function ni(m, v, k) {
    if (f)
      if (m) {
        let _ = m[m.length - 1].route;
        if (_.path && (_.path === "*" || _.path.endsWith("/*")))
          return { active: !0, matches: Fi(v, k, s, !0) };
      } else return { active: !0, matches: Fi(v, k, s, !0) || [] };
    return { active: !1, matches: null };
  }
  async function ri(m, v, k) {
    let _ = m,
      D = _.length > 0 ? _[_.length - 1].route : null;
    for (;;) {
      let j = a == null,
        B = a || l;
      try {
        await qy(f, v, _, B, i, o, tr, k);
      } catch ($) {
        return { type: "error", error: $, partialMatches: _ };
      } finally {
        j && (l = [...l]);
      }
      if (k.aborted) return { type: "aborted" };
      let L = An(B, v, s),
        V = !1;
      if (L) {
        let $ = L[L.length - 1].route;
        if ($.index) return { type: "success", matches: L };
        if ($.path && $.path.length > 0)
          if ($.path === "*") V = !0;
          else return { type: "success", matches: L };
      }
      let b = Fi(B, v, s, !0);
      if (
        !b ||
        _.map(($) => $.route.id).join("-") ===
          b.map(($) => $.route.id).join("-")
      )
        return { type: "success", matches: V ? L : null };
      if (((_ = b), (D = _[_.length - 1].route), D.path === "*"))
        return { type: "success", matches: _ };
    }
  }
  function Bm(m) {
    (i = {}), (a = $o(m, o, void 0, i));
  }
  function Wm(m, v) {
    let k = a == null;
    Ih(m, v, a || l, i, o), k && ((l = [...l]), Be({}));
  }
  return (
    (P = {
      get basename() {
        return s;
      },
      get future() {
        return c;
      },
      get state() {
        return y;
      },
      get routes() {
        return l;
      },
      get window() {
        return t;
      },
      initialize: Tm,
      subscribe: Lm,
      enableScrollRestoration: bm,
      navigate: Gu,
      fetch: Im,
      revalidate: Om,
      createHref: (m) => e.history.createHref(m),
      encodeLocation: (m) => e.history.encodeLocation(m),
      getFetcher: qu,
      deleteFetcher: jm,
      dispose: Rm,
      getBlocker: Um,
      deleteBlocker: rc,
      patchRoutes: Wm,
      _internalFetchControllers: de,
      _internalActiveDeferreds: gt,
      _internalSetRoutes: Bm,
    }),
    P
  );
}
function Gy(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function ws(e, t, n, r, o, i, l, a) {
  let s, u;
  if (l) {
    s = [];
    for (let c of t)
      if ((s.push(c), c.route.id === l)) {
        u = c;
        break;
      }
  } else (s = t), (u = t[t.length - 1]);
  let f = Oh(o || ".", Lh(s, i), Go(e.pathname, n) || e.pathname, a === "path");
  return (
    o == null && ((f.search = e.search), (f.hash = e.hash)),
    (o == null || o === "" || o === ".") &&
      u &&
      u.route.index &&
      !zu(f.search) &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (f.pathname = f.pathname === "/" ? n : xn([n, f.pathname])),
    Xo(f)
  );
}
function kf(e, t, n, r) {
  if (!r || !Gy(r)) return { path: n };
  if (r.formMethod && !c0(r.formMethod))
    return { path: n, error: We(405, { method: r.formMethod }) };
  let o = () => ({ path: n, error: We(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    l = e ? i.toUpperCase() : i.toLowerCase(),
    a = zh(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!St(l)) return o();
      let p =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((S, w) => {
              let [x, C] = w;
              return (
                "" +
                S +
                x +
                "=" +
                C +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: l,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!St(l)) return o();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: l,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  K(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let s, u;
  if (r.formData) (s = Ss(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (s = Ss(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = Nf(s));
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (u = Nf(s));
    } catch {
      return o();
    }
  let f = {
    formMethod: l,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (St(f.formMethod)) return { path: n, submission: f };
  let c = Ln(n);
  return (
    t && c.search && zu(c.search) && s.append("index", ""),
    (c.search = "?" + s),
    { path: Xo(c), submission: f }
  );
}
function Zy(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Ef(e, t, n, r, o, i, l, a, s, u, f, c, p, S, w, x) {
  let C = x ? (tt(x[1]) ? x[1].error : x[1].data) : void 0,
    h = e.createURL(t.location),
    d = e.createURL(o),
    g = x && tt(x[1]) ? x[0] : void 0,
    E = g ? Zy(n, g) : n,
    P = x ? x[1].statusCode : void 0,
    y = l && P && P >= 400,
    O = E.filter((F, z) => {
      let { route: Z } = F;
      if (Z.lazy) return !0;
      if (Z.loader == null) return !1;
      if (i)
        return typeof Z.loader != "function" || Z.loader.hydrate
          ? !0
          : t.loaderData[Z.id] === void 0 &&
              (!t.errors || t.errors[Z.id] === void 0);
      if (
        Jy(t.loaderData, t.matches[z], F) ||
        s.some((ie) => ie === F.route.id)
      )
        return !0;
      let fe = t.matches[z],
        Te = F;
      return _f(
        F,
        ge(
          {
            currentUrl: h,
            currentParams: fe.params,
            nextUrl: d,
            nextParams: Te.params,
          },
          r,
          {
            actionResult: C,
            actionStatus: P,
            defaultShouldRevalidate: y
              ? !1
              : a ||
                h.pathname + h.search === d.pathname + d.search ||
                h.search !== d.search ||
                Ah(fe, Te),
          }
        )
      );
    }),
    R = [];
  return (
    c.forEach((F, z) => {
      if (i || !n.some((Ct) => Ct.route.id === F.routeId) || f.has(z)) return;
      let Z = An(S, F.path, w);
      if (!Z) {
        R.push({
          key: z,
          routeId: F.routeId,
          path: F.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let fe = t.fetchers.get(z),
        Te = so(Z, F.path),
        ie = !1;
      p.has(z)
        ? (ie = !1)
        : u.has(z)
        ? (u.delete(z), (ie = !0))
        : fe && fe.state !== "idle" && fe.data === void 0
        ? (ie = a)
        : (ie = _f(
            Te,
            ge(
              {
                currentUrl: h,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: d,
                nextParams: n[n.length - 1].params,
              },
              r,
              {
                actionResult: C,
                actionStatus: P,
                defaultShouldRevalidate: y ? !1 : a,
              }
            )
          )),
        ie &&
          R.push({
            key: z,
            routeId: F.routeId,
            path: F.path,
            matches: Z,
            match: Te,
            controller: new AbortController(),
          });
    }),
    [O, R]
  );
}
function Jy(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function Ah(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function _f(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function qy(e, t, n, r, o, i, l, a) {
  let s = [t, ...n.map((u) => u.route.id)].join("-");
  try {
    let u = l.get(s);
    u ||
      ((u = e({
        path: t,
        matches: n,
        patch: (f, c) => {
          a.aborted || Ih(f, c, r, o, i);
        },
      })),
      l.set(s, u)),
      u && a0(u) && (await u);
  } finally {
    l.delete(s);
  }
}
function Ih(e, t, n, r, o) {
  if (e) {
    var i;
    let l = r[e];
    K(l, "No route found to patch children into: routeId = " + e);
    let a = $o(
      t,
      o,
      [
        e,
        "patch",
        String(((i = l.children) == null ? void 0 : i.length) || "0"),
      ],
      r
    );
    l.children ? l.children.push(...a) : (l.children = a);
  } else {
    let l = $o(t, o, ["patch", String(n.length || "0")], r);
    n.push(...l);
  }
}
async function Cf(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  K(o, "No route found in manifest");
  let i = {};
  for (let l in r) {
    let s = o[l] !== void 0 && l !== "hasErrorBoundary";
    Fr(
      !s,
      'Route "' +
        o.id +
        '" has a static property "' +
        l +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + l + '" will be ignored.')
    ),
      !s && !ky.has(l) && (i[l] = r[l]);
  }
  Object.assign(o, i), Object.assign(o, ge({}, t(o), { lazy: void 0 }));
}
function e0(e) {
  return Promise.all(e.matches.map((t) => t.resolve()));
}
async function t0(e, t, n, r, o, i, l, a) {
  let s = r.reduce((c, p) => c.add(p.route.id), new Set()),
    u = new Set(),
    f = await e({
      matches: o.map((c) => {
        let p = s.has(c.route.id);
        return ge({}, c, {
          shouldLoad: p,
          resolve: (w) => (
            u.add(c.route.id),
            p
              ? n0(t, n, c, i, l, w, a)
              : Promise.resolve({ type: re.data, result: void 0 })
          ),
        });
      }),
      request: n,
      params: o[0].params,
      context: a,
    });
  return (
    o.forEach((c) =>
      K(
        u.has(c.route.id),
        '`match.resolve()` was not called for route id "' +
          c.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
      )
    ),
    f.filter((c, p) => s.has(o[p].route.id))
  );
}
async function n0(e, t, n, r, o, i, l) {
  let a,
    s,
    u = (f) => {
      let c,
        p = new Promise((x, C) => (c = C));
      (s = () => c()), t.signal.addEventListener("abort", s);
      let S = (x) =>
          typeof f != "function"
            ? Promise.reject(
                new Error(
                  "You cannot call the handler for a route which defines a boolean " +
                    ('"' + e + '" [routeId: ' + n.route.id + "]")
                )
              )
            : f(
                { request: t, params: n.params, context: l },
                ...(x !== void 0 ? [x] : [])
              ),
        w;
      return (
        i
          ? (w = i((x) => S(x)))
          : (w = (async () => {
              try {
                return { type: "data", result: await S() };
              } catch (x) {
                return { type: "error", result: x };
              }
            })()),
        Promise.race([w, p])
      );
    };
  try {
    let f = n.route[e];
    if (n.route.lazy)
      if (f) {
        let c,
          [p] = await Promise.all([
            u(f).catch((S) => {
              c = S;
            }),
            Cf(n.route, o, r),
          ]);
        if (c !== void 0) throw c;
        a = p;
      } else if ((await Cf(n.route, o, r), (f = n.route[e]), f)) a = await u(f);
      else if (e === "action") {
        let c = new URL(t.url),
          p = c.pathname + c.search;
        throw We(405, { method: t.method, pathname: p, routeId: n.route.id });
      } else return { type: re.data, result: void 0 };
    else if (f) a = await u(f);
    else {
      let c = new URL(t.url),
        p = c.pathname + c.search;
      throw We(404, { pathname: p });
    }
    K(
      a.result !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (f) {
    return { type: re.error, result: f };
  } finally {
    s && t.signal.removeEventListener("abort", s);
  }
  return a;
}
async function r0(e) {
  let { result: t, type: n } = e;
  if (Fh(t)) {
    let u;
    try {
      let f = t.headers.get("Content-Type");
      f && /\bapplication\/json\b/.test(f)
        ? t.body == null
          ? (u = null)
          : (u = await t.json())
        : (u = await t.text());
    } catch (f) {
      return { type: re.error, error: f };
    }
    return n === re.error
      ? {
          type: re.error,
          error: new cl(t.status, t.statusText, u),
          statusCode: t.status,
          headers: t.headers,
        }
      : { type: re.data, data: u, statusCode: t.status, headers: t.headers };
  }
  if (n === re.error) {
    if (Df(t)) {
      var r;
      if (t.data instanceof Error) {
        var o;
        return {
          type: re.error,
          error: t.data,
          statusCode: (o = t.init) == null ? void 0 : o.status,
        };
      }
      t = new cl(
        ((r = t.init) == null ? void 0 : r.status) || 500,
        void 0,
        t.data
      );
    }
    return { type: re.error, error: t, statusCode: Dl(t) ? t.status : void 0 };
  }
  if (u0(t)) {
    var i, l;
    return {
      type: re.deferred,
      deferredData: t,
      statusCode: (i = t.init) == null ? void 0 : i.status,
      headers:
        ((l = t.init) == null ? void 0 : l.headers) &&
        new Headers(t.init.headers),
    };
  }
  if (Df(t)) {
    var a, s;
    return {
      type: re.data,
      data: t.data,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers:
        (s = t.init) != null && s.headers
          ? new Headers(t.init.headers)
          : void 0,
    };
  }
  return { type: re.data, data: t };
}
function o0(e, t, n, r, o, i) {
  let l = e.headers.get("Location");
  if (
    (K(
      l,
      "Redirects returned/thrown from loaders/actions must have a Location header"
    ),
    !Iu.test(l))
  ) {
    let a = r.slice(0, r.findIndex((s) => s.route.id === n) + 1);
    (l = ws(new URL(t.url), a, o, !0, l, i)), e.headers.set("Location", l);
  }
  return e;
}
function Pf(e, t, n) {
  if (Iu.test(e)) {
    let r = e,
      o = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r),
      i = Go(o.pathname, n) != null;
    if (o.origin === t.origin && i) return o.pathname + o.search + o.hash;
  }
  return e;
}
function ar(e, t, n, r) {
  let o = e.createURL(zh(t)).toString(),
    i = { signal: n };
  if (r && St(r.formMethod)) {
    let { formMethod: l, formEncType: a } = r;
    (i.method = l.toUpperCase()),
      a === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": a })),
          (i.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (i.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (i.body = Ss(r.formData))
        : (i.body = r.formData);
  }
  return new Request(o, i);
}
function Ss(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Nf(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function i0(e, t, n, r, o, i) {
  let l = {},
    a = null,
    s,
    u = !1,
    f = {},
    c = r && tt(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((p, S) => {
      let w = t[S].route.id;
      if (
        (K(!bn(p), "Cannot handle redirect results in processLoaderData"),
        tt(p))
      ) {
        let x = p.error;
        c !== void 0 && ((x = c), (c = void 0)), (a = a || {});
        {
          let C = Sr(e, w);
          a[C.route.id] == null && (a[C.route.id] = x);
        }
        (l[w] = void 0),
          u || ((u = !0), (s = Dl(p.error) ? p.error.status : 500)),
          p.headers && (f[w] = p.headers);
      } else
        Un(p)
          ? (o.set(w, p.deferredData),
            (l[w] = p.deferredData.data),
            p.statusCode != null &&
              p.statusCode !== 200 &&
              !u &&
              (s = p.statusCode),
            p.headers && (f[w] = p.headers))
          : ((l[w] = p.data),
            p.statusCode && p.statusCode !== 200 && !u && (s = p.statusCode),
            p.headers && (f[w] = p.headers));
    }),
    c !== void 0 && r && ((a = { [r[0]]: c }), (l[r[0]] = void 0)),
    { loaderData: l, errors: a, statusCode: s || 200, loaderHeaders: f }
  );
}
function Tf(e, t, n, r, o, i, l, a) {
  let { loaderData: s, errors: u } = i0(t, n, r, o, a);
  for (let f = 0; f < i.length; f++) {
    let { key: c, match: p, controller: S } = i[f];
    K(
      l !== void 0 && l[f] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let w = l[f];
    if (!(S && S.signal.aborted))
      if (tt(w)) {
        let x = Sr(e.matches, p == null ? void 0 : p.route.id);
        (u && u[x.route.id]) || (u = ge({}, u, { [x.route.id]: w.error })),
          e.fetchers.delete(c);
      } else if (bn(w)) K(!1, "Unhandled fetcher revalidation redirect");
      else if (Un(w)) K(!1, "Unhandled fetcher deferred data");
      else {
        let x = on(w.data);
        e.fetchers.set(c, x);
      }
  }
  return { loaderData: s, errors: u };
}
function Rf(e, t, n, r) {
  let o = ge({}, t);
  for (let i of n) {
    let l = i.route.id;
    if (
      (t.hasOwnProperty(l)
        ? t[l] !== void 0 && (o[l] = t[l])
        : e[l] !== void 0 && i.route.loader && (o[l] = e[l]),
      r && r.hasOwnProperty(l))
    )
      break;
  }
  return o;
}
function Lf(e) {
  return e
    ? tt(e[1])
      ? { actionData: {} }
      : { actionData: { [e[0]]: e[1].data } }
    : {};
}
function Sr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Of(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function We(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: o,
      type: i,
      message: l,
    } = t === void 0 ? {} : t,
    a = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((a = "Bad Request"),
        i === "route-discovery"
          ? (s =
              'Unable to match URL "' +
              n +
              '" - the `unstable_patchRoutesOnMiss()` ' +
              (`function threw the following error:
` +
                l))
          : o && n && r
          ? (s =
              "You made a " +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
          ? (s = "defer() is not supported in actions")
          : i === "invalid-body" && (s = "Unable to encode submission body"))
      : e === 403
      ? ((a = "Forbidden"),
        (s = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((a = "Not Found"), (s = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((a = "Method Not Allowed"),
        o && n && r
          ? (s =
              "You made a " +
              o.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o && (s = 'Invalid request method "' + o.toUpperCase() + '"')),
    new cl(e || 500, a, new Error(s), !0)
  );
}
function Mf(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (bn(n)) return { result: n, idx: t };
  }
}
function zh(e) {
  let t = typeof e == "string" ? Ln(e) : e;
  return Xo(ge({}, t, { hash: "" }));
}
function l0(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function a0(e) {
  return typeof e == "object" && e != null && "then" in e;
}
function s0(e) {
  return Fh(e.result) && Vy.has(e.result.status);
}
function Un(e) {
  return e.type === re.deferred;
}
function tt(e) {
  return e.type === re.error;
}
function bn(e) {
  return (e && e.type) === re.redirect;
}
function Df(e) {
  return (
    typeof e == "object" &&
    e != null &&
    "type" in e &&
    "data" in e &&
    "init" in e &&
    e.type === "DataWithResponseInit"
  );
}
function u0(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Fh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function c0(e) {
  return Hy.has(e.toLowerCase());
}
function St(e) {
  return By.has(e.toLowerCase());
}
async function Af(e, t, n, r, o, i) {
  for (let l = 0; l < n.length; l++) {
    let a = n[l],
      s = t[l];
    if (!s) continue;
    let u = e.find((c) => c.route.id === s.route.id),
      f = u != null && !Ah(u, s) && (i && i[s.route.id]) !== void 0;
    if (Un(a) && (o || f)) {
      let c = r[l];
      K(c, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await jh(a, c, o).then((p) => {
          p && (n[l] = p || n[l]);
        });
    }
  }
}
async function jh(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: re.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: re.error, error: o };
      }
    return { type: re.data, data: e.deferredData.data };
  }
}
function zu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function so(e, t) {
  let n = typeof t == "string" ? Ln(t).search : t.search;
  if (e[e.length - 1].route.index && zu(n || "")) return e[e.length - 1];
  let r = Rh(e);
  return r[r.length - 1];
}
function If(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: o,
    formData: i,
    json: l,
  } = e;
  if (!(!t || !n || !r)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (l !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: l,
        text: void 0,
      };
  }
}
function wa(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function f0(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function no(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function d0(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function on(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function p0(e, t) {
  try {
    let n = e.sessionStorage.getItem(Dh);
    if (n) {
      let r = JSON.parse(n);
      for (let [o, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(o, new Set(i || []));
    }
  } catch {}
}
function h0(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, o] of t) n[r] = [...o];
    try {
      e.sessionStorage.setItem(Dh, JSON.stringify(n));
    } catch (r) {
      Fr(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fl() {
  return (
    (fl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fl.apply(this, arguments)
  );
}
const Al = N.createContext(null),
  Uh = N.createContext(null),
  Il = N.createContext(null),
  Fu = N.createContext(null),
  er = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  bh = N.createContext(null);
function zl() {
  return N.useContext(Fu) != null;
}
function $h() {
  return zl() || K(!1), N.useContext(Fu).location;
}
function Bh(e) {
  N.useContext(Il).static || N.useLayoutEffect(e);
}
function m0() {
  let { isDataRoute: e } = N.useContext(er);
  return e ? T0() : g0();
}
function g0() {
  zl() || K(!1);
  let e = N.useContext(Al),
    { basename: t, future: n, navigator: r } = N.useContext(Il),
    { matches: o } = N.useContext(er),
    { pathname: i } = $h(),
    l = JSON.stringify(Lh(o, n.v7_relativeSplatPath)),
    a = N.useRef(!1);
  return (
    Bh(() => {
      a.current = !0;
    }),
    N.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let c = Oh(u, JSON.parse(l), i, f.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : xn([t, c.pathname])),
          (f.replace ? r.replace : r.push)(c, f.state, f);
      },
      [t, r, l, i, e]
    )
  );
}
function v0() {
  let { matches: e } = N.useContext(er),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function y0(e, t, n, r) {
  zl() || K(!1);
  let { navigator: o } = N.useContext(Il),
    { matches: i } = N.useContext(er),
    l = i[i.length - 1],
    a = l ? l.params : {};
  l && l.pathname;
  let s = l ? l.pathnameBase : "/";
  l && l.route;
  let u = $h(),
    f;
  f = u;
  let c = f.pathname || "/",
    p = c;
  if (s !== "/") {
    let x = s.replace(/^\//, "").split("/");
    p = "/" + c.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let S = An(e, { pathname: p });
  return E0(
    S &&
      S.map((x) =>
        Object.assign({}, x, {
          params: Object.assign({}, a, x.params),
          pathname: xn([
            s,
            o.encodeLocation
              ? o.encodeLocation(x.pathname).pathname
              : x.pathname,
          ]),
          pathnameBase:
            x.pathnameBase === "/"
              ? s
              : xn([
                  s,
                  o.encodeLocation
                    ? o.encodeLocation(x.pathnameBase).pathname
                    : x.pathnameBase,
                ]),
        })
      ),
    i,
    n,
    r
  );
}
function w0() {
  let e = N0(),
    t = Dl(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return N.createElement(
    N.Fragment,
    null,
    N.createElement("h2", null, "Unexpected Application Error!"),
    N.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? N.createElement("pre", { style: o }, n) : null,
    null
  );
}
const S0 = N.createElement(w0, null);
class x0 extends N.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? N.createElement(
          er.Provider,
          { value: this.props.routeContext },
          N.createElement(bh.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function k0(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = N.useContext(Al);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    N.createElement(er.Provider, { value: t }, r)
  );
}
function E0(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let l = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let f = l.findIndex(
      (c) => c.route.id && (a == null ? void 0 : a[c.route.id]) !== void 0
    );
    f >= 0 || K(!1), (l = l.slice(0, Math.min(l.length, f + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < l.length; f++) {
      let c = l[f];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = f),
        c.route.id)
      ) {
        let { loaderData: p, errors: S } = n,
          w =
            c.route.loader &&
            p[c.route.id] === void 0 &&
            (!S || S[c.route.id] === void 0);
        if (c.route.lazy || w) {
          (s = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((f, c, p) => {
    let S,
      w = !1,
      x = null,
      C = null;
    n &&
      ((S = a && c.route.id ? a[c.route.id] : void 0),
      (x = c.route.errorElement || S0),
      s &&
        (u < 0 && p === 0
          ? (R0("route-fallback"), (w = !0), (C = null))
          : u === p &&
            ((w = !0), (C = c.route.hydrateFallbackElement || null))));
    let h = t.concat(l.slice(0, p + 1)),
      d = () => {
        let g;
        return (
          S
            ? (g = x)
            : w
            ? (g = C)
            : c.route.Component
            ? (g = N.createElement(c.route.Component, null))
            : c.route.element
            ? (g = c.route.element)
            : (g = f),
          N.createElement(k0, {
            match: c,
            routeContext: { outlet: f, matches: h, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || p === 0)
      ? N.createElement(x0, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: S,
          children: d(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var Wh = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Wh || {}),
  dl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(dl || {});
function _0(e) {
  let t = N.useContext(Al);
  return t || K(!1), t;
}
function C0(e) {
  let t = N.useContext(Uh);
  return t || K(!1), t;
}
function P0(e) {
  let t = N.useContext(er);
  return t || K(!1), t;
}
function Hh(e) {
  let t = P0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || K(!1), n.route.id;
}
function N0() {
  var e;
  let t = N.useContext(bh),
    n = C0(dl.UseRouteError),
    r = Hh(dl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function T0() {
  let { router: e } = _0(Wh.UseNavigateStable),
    t = Hh(dl.UseNavigateStable),
    n = N.useRef(!1);
  return (
    Bh(() => {
      n.current = !0;
    }),
    N.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, fl({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const zf = {};
function R0(e, t, n) {
  zf[e] || (zf[e] = !0);
}
function L0(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = _e.Pop,
    navigator: i,
    static: l = !1,
    future: a,
  } = e;
  zl() && K(!1);
  let s = t.replace(/^\/*/, "/"),
    u = N.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: l,
        future: fl({ v7_relativeSplatPath: !1 }, a),
      }),
      [s, a, i, l]
    );
  typeof r == "string" && (r = Ln(r));
  let {
      pathname: f = "/",
      search: c = "",
      hash: p = "",
      state: S = null,
      key: w = "default",
    } = r,
    x = N.useMemo(() => {
      let C = Go(f, s);
      return C == null
        ? null
        : {
            location: { pathname: C, search: c, hash: p, state: S, key: w },
            navigationType: o,
          };
    }, [s, f, c, p, S, w, o]);
  return x == null
    ? null
    : N.createElement(
        Il.Provider,
        { value: u },
        N.createElement(Fu.Provider, { children: n, value: x })
      );
}
new Promise(() => {});
function O0(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: N.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: N.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: N.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pl() {
  return (
    (pl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pl.apply(this, arguments)
  );
}
const M0 = "6";
try {
  window.__reactRouterVersion = M0;
} catch {}
function D0(e, t) {
  return Xy({
    basename: t == null ? void 0 : t.basename,
    future: pl({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: wy({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || A0(),
    routes: e,
    mapRouteProperties: O0,
    unstable_dataStrategy: t == null ? void 0 : t.unstable_dataStrategy,
    unstable_patchRoutesOnMiss:
      t == null ? void 0 : t.unstable_patchRoutesOnMiss,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function A0() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = pl({}, t, { errors: I0(t.errors) })), t;
}
function I0(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      n[r] = new cl(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let i = window[o.__subType];
        if (typeof i == "function")
          try {
            let l = new i(o.message);
            (l.stack = ""), (n[r] = l);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(o.message);
        (i.stack = ""), (n[r] = i);
      }
    } else n[r] = o;
  return n;
}
const z0 = N.createContext({ isTransitioning: !1 }),
  F0 = N.createContext(new Map()),
  j0 = "startTransition",
  Ff = lg[j0],
  U0 = "flushSync",
  jf = yy[U0];
function b0(e) {
  Ff ? Ff(e) : e();
}
function ro(e) {
  jf ? jf(e) : e();
}
class $0 {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function B0(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [o, i] = N.useState(n.state),
    [l, a] = N.useState(),
    [s, u] = N.useState({ isTransitioning: !1 }),
    [f, c] = N.useState(),
    [p, S] = N.useState(),
    [w, x] = N.useState(),
    C = N.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    d = N.useCallback(
      (R) => {
        h ? b0(R) : R();
      },
      [h]
    ),
    g = N.useCallback(
      (R, F) => {
        let {
          deletedFetchers: z,
          unstable_flushSync: Z,
          unstable_viewTransitionOpts: fe,
        } = F;
        z.forEach((ie) => C.current.delete(ie)),
          R.fetchers.forEach((ie, Ct) => {
            ie.data !== void 0 && C.current.set(Ct, ie.data);
          });
        let Te =
          n.window == null ||
          n.window.document == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!fe || Te) {
          Z ? ro(() => i(R)) : d(() => i(R));
          return;
        }
        if (Z) {
          ro(() => {
            p && (f && f.resolve(), p.skipTransition()),
              u({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: fe.currentLocation,
                nextLocation: fe.nextLocation,
              });
          });
          let ie = n.window.document.startViewTransition(() => {
            ro(() => i(R));
          });
          ie.finished.finally(() => {
            ro(() => {
              c(void 0), S(void 0), a(void 0), u({ isTransitioning: !1 });
            });
          }),
            ro(() => S(ie));
          return;
        }
        p
          ? (f && f.resolve(),
            p.skipTransition(),
            x({
              state: R,
              currentLocation: fe.currentLocation,
              nextLocation: fe.nextLocation,
            }))
          : (a(R),
            u({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: fe.currentLocation,
              nextLocation: fe.nextLocation,
            }));
      },
      [n.window, p, f, C, d]
    );
  N.useLayoutEffect(() => n.subscribe(g), [n, g]),
    N.useEffect(() => {
      s.isTransitioning && !s.flushSync && c(new $0());
    }, [s]),
    N.useEffect(() => {
      if (f && l && n.window) {
        let R = l,
          F = f.promise,
          z = n.window.document.startViewTransition(async () => {
            d(() => i(R)), await F;
          });
        z.finished.finally(() => {
          c(void 0), S(void 0), a(void 0), u({ isTransitioning: !1 });
        }),
          S(z);
      }
    }, [d, l, f, n.window]),
    N.useEffect(() => {
      f && l && o.location.key === l.location.key && f.resolve();
    }, [f, p, o.location, l]),
    N.useEffect(() => {
      !s.isTransitioning &&
        w &&
        (a(w.state),
        u({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: w.currentLocation,
          nextLocation: w.nextLocation,
        }),
        x(void 0));
    }, [s.isTransitioning, w]),
    N.useEffect(() => {}, []);
  let E = N.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (R) => n.navigate(R),
        push: (R, F, z) =>
          n.navigate(R, {
            state: F,
            preventScrollReset: z == null ? void 0 : z.preventScrollReset,
          }),
        replace: (R, F, z) =>
          n.navigate(R, {
            replace: !0,
            state: F,
            preventScrollReset: z == null ? void 0 : z.preventScrollReset,
          }),
      }),
      [n]
    ),
    P = n.basename || "/",
    y = N.useMemo(
      () => ({ router: n, navigator: E, static: !1, basename: P }),
      [n, E, P]
    ),
    O = N.useMemo(
      () => ({ v7_relativeSplatPath: n.future.v7_relativeSplatPath }),
      [n.future.v7_relativeSplatPath]
    );
  return N.createElement(
    N.Fragment,
    null,
    N.createElement(
      Al.Provider,
      { value: y },
      N.createElement(
        Uh.Provider,
        { value: o },
        N.createElement(
          F0.Provider,
          { value: C.current },
          N.createElement(
            z0.Provider,
            { value: s },
            N.createElement(
              L0,
              {
                basename: P,
                location: o.location,
                navigationType: o.historyAction,
                navigator: E,
                future: O,
              },
              o.initialized || n.future.v7_partialHydration
                ? N.createElement(W0, {
                    routes: n.routes,
                    future: n.future,
                    state: o,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
const W0 = N.memo(H0);
function H0(e) {
  let { routes: t, future: n, state: r } = e;
  return y0(t, void 0, r, n);
}
var Uf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Uf || (Uf = {}));
var bf;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(bf || (bf = {}));
const V0 = () => U.jsx(U.Fragment, {}),
  Y0 = ({ name: e, sprite: t, type: n, id: r }) => {
    const o = m0(),
      i = () => {
        o(`/pokemon/${r}`);
      };
    return U.jsxs("div", {
      className: "card",
      onClick: i,
      children: [
        U.jsx("div", {
          className: "heading",
          children: U.jsxs("p", { children: ["Name: ", e] }),
        }),
        U.jsx("img", { src: t, alt: e }),
        U.jsxs("p", { children: ["Type: ", n] }),
      ],
    });
  },
  $f = () => {};
let ju = {},
  Vh = {},
  Yh = null,
  Qh = { mark: $f, measure: $f };
try {
  typeof window < "u" && (ju = window),
    typeof document < "u" && (Vh = document),
    typeof MutationObserver < "u" && (Yh = MutationObserver),
    typeof performance < "u" && (Qh = performance);
} catch {}
const { userAgent: Bf = "" } = ju.navigator || {},
  _n = ju,
  ce = Vh,
  Wf = Yh,
  _i = Qh;
_n.document;
const Zt =
    !!ce.documentElement &&
    !!ce.head &&
    typeof ce.addEventListener == "function" &&
    typeof ce.createElement == "function",
  Kh = ~Bf.indexOf("MSIE") || ~Bf.indexOf("Trident/");
var me = "classic",
  Xh = "duotone",
  ot = "sharp",
  it = "sharp-duotone",
  Q0 = [me, Xh, ot, it],
  K0 = {
    classic: { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" },
    sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
    "sharp-duotone": { 900: "fasds" },
  },
  Hf = {
    kit: { fak: "kit", "fa-kit": "kit" },
    "kit-duotone": { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
  },
  X0 = ["kit"],
  G0 = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,
  Z0 =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
  J0 = {
    "Font Awesome 5 Free": { 900: "fas", 400: "far" },
    "Font Awesome 5 Pro": { 900: "fas", 400: "far", normal: "far", 300: "fal" },
    "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 5 Duotone": { 900: "fad" },
  },
  q0 = {
    "Font Awesome 6 Free": { 900: "fas", 400: "far" },
    "Font Awesome 6 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    },
    "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 6 Duotone": { 900: "fad" },
    "Font Awesome 6 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast",
    },
    "Font Awesome 6 Sharp Duotone": { 900: "fasds" },
  },
  e1 = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    },
    "sharp-duotone": { "fa-solid": "fasds" },
  },
  t1 = {
    classic: ["fas", "far", "fal", "fat"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds"],
  },
  n1 = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    },
    "sharp-duotone": { fasds: "fa-solid" },
  },
  r1 = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
    },
    sharp: { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" },
    "sharp-duotone": { solid: "fasds" },
  },
  Gh = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    },
    "sharp-duotone": { fa: "solid", fasds: "solid", "fa-solid": "solid" },
  },
  o1 = ["solid", "regular", "light", "thin", "duotone", "brands"],
  Zh = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  i1 = Zh.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  uo = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  l1 = [
    ...Object.keys(t1),
    ...o1,
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "beat",
    "border",
    "fade",
    "beat-fade",
    "bounce",
    "flip-both",
    "flip-horizontal",
    "flip-vertical",
    "flip",
    "fw",
    "inverse",
    "layers-counter",
    "layers-text",
    "layers",
    "li",
    "pull-left",
    "pull-right",
    "pulse",
    "rotate-180",
    "rotate-270",
    "rotate-90",
    "rotate-by",
    "shake",
    "spin-pulse",
    "spin-reverse",
    "spin",
    "stack-1x",
    "stack-2x",
    "stack",
    "ul",
    uo.GROUP,
    uo.SWAP_OPACITY,
    uo.PRIMARY,
    uo.SECONDARY,
  ]
    .concat(Zh.map((e) => "".concat(e, "x")))
    .concat(i1.map((e) => "w-".concat(e))),
  a1 = {
    "Font Awesome Kit": { 400: "fak", normal: "fak" },
    "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
  },
  s1 = {
    kit: { "fa-kit": "fak" },
    "kit-duotone": { "fa-kit-duotone": "fakd" },
  },
  u1 = { kit: { fak: "fa-kit" }, "kit-duotone": { fakd: "fa-kit-duotone" } },
  Vf = { kit: { kit: "fak" }, "kit-duotone": { "kit-duotone": "fakd" } };
const Kt = "___FONT_AWESOME___",
  xs = 16,
  Jh = "fa",
  qh = "svg-inline--fa",
  Gn = "data-fa-i2svg",
  ks = "data-fa-pseudo-element",
  c1 = "data-fa-pseudo-element-pending",
  Uu = "data-prefix",
  bu = "data-icon",
  Yf = "fontawesome-i2svg",
  f1 = "async",
  d1 = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  em = (() => {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  tm = [me, ot, it];
function Zo(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[me];
    },
  });
}
const nm = { ...Gh };
nm[me] = { ...Gh[me], ...Hf.kit, ...Hf["kit-duotone"] };
const Wn = Zo(nm),
  Es = { ...r1 };
Es[me] = { ...Es[me], ...Vf.kit, ...Vf["kit-duotone"] };
const Bo = Zo(Es),
  _s = { ...n1 };
_s[me] = { ..._s[me], ...u1.kit };
const Hn = Zo(_s),
  Cs = { ...e1 };
Cs[me] = { ...Cs[me], ...s1.kit };
const p1 = Zo(Cs),
  h1 = G0,
  rm = "fa-layers-text",
  m1 = Z0,
  g1 = { ...K0 };
Zo(g1);
const v1 = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  Sa = uo,
  jr = new Set();
Object.keys(Bo[me]).map(jr.add.bind(jr));
Object.keys(Bo[ot]).map(jr.add.bind(jr));
Object.keys(Bo[it]).map(jr.add.bind(jr));
const y1 = [...X0, ...l1],
  xo = _n.FontAwesomeConfig || {};
function w1(e) {
  var t = ce.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function S1(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ce &&
  typeof ce.querySelector == "function" &&
  [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ].forEach((t) => {
    let [n, r] = t;
    const o = S1(w1(n));
    o != null && (xo[r] = o);
  });
const om = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Jh,
  replacementClass: qh,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
xo.familyPrefix && (xo.cssPrefix = xo.familyPrefix);
const Ur = { ...om, ...xo };
Ur.autoReplaceSvg || (Ur.observeMutations = !1);
const I = {};
Object.keys(om).forEach((e) => {
  Object.defineProperty(I, e, {
    enumerable: !0,
    set: function (t) {
      (Ur[e] = t), ko.forEach((n) => n(I));
    },
    get: function () {
      return Ur[e];
    },
  });
});
Object.defineProperty(I, "familyPrefix", {
  enumerable: !0,
  set: function (e) {
    (Ur.cssPrefix = e), ko.forEach((t) => t(I));
  },
  get: function () {
    return Ur.cssPrefix;
  },
});
_n.FontAwesomeConfig = I;
const ko = [];
function x1(e) {
  return (
    ko.push(e),
    () => {
      ko.splice(ko.indexOf(e), 1);
    }
  );
}
const rn = xs,
  Mt = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function k1(e) {
  if (!e || !Zt) return;
  const t = ce.createElement("style");
  t.setAttribute("type", "text/css"), (t.innerHTML = e);
  const n = ce.head.childNodes;
  let r = null;
  for (let o = n.length - 1; o > -1; o--) {
    const i = n[o],
      l = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(l) > -1 && (r = i);
  }
  return ce.head.insertBefore(t, r), e;
}
const E1 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Wo() {
  let e = 12,
    t = "";
  for (; e-- > 0; ) t += E1[(Math.random() * 62) | 0];
  return t;
}
function Wr(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function $u(e) {
  return e.classList
    ? Wr(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function im(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function _1(e) {
  return Object.keys(e || {})
    .reduce((t, n) => t + "".concat(n, '="').concat(im(e[n]), '" '), "")
    .trim();
}
function Fl(e) {
  return Object.keys(e || {}).reduce(
    (t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"),
    ""
  );
}
function Bu(e) {
  return (
    e.size !== Mt.size ||
    e.x !== Mt.x ||
    e.y !== Mt.y ||
    e.rotate !== Mt.rotate ||
    e.flipX ||
    e.flipY
  );
}
function C1(e) {
  let { transform: t, containerWidth: n, iconWidth: r } = e;
  const o = { transform: "translate(".concat(n / 2, " 256)") },
    i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    l = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    a = "rotate(".concat(t.rotate, " 0 0)"),
    s = { transform: "".concat(i, " ").concat(l, " ").concat(a) },
    u = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: o, inner: s, path: u };
}
function P1(e) {
  let {
      transform: t,
      width: n = xs,
      height: r = xs,
      startCentered: o = !1,
    } = e,
    i = "";
  return (
    o && Kh
      ? (i += "translate("
          .concat(t.x / rn - n / 2, "em, ")
          .concat(t.y / rn - r / 2, "em) "))
      : o
      ? (i += "translate(calc(-50% + "
          .concat(t.x / rn, "em), calc(-50% + ")
          .concat(t.y / rn, "em)) "))
      : (i += "translate(".concat(t.x / rn, "em, ").concat(t.y / rn, "em) ")),
    (i += "scale("
      .concat((t.size / rn) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / rn) * (t.flipY ? -1 : 1), ") ")),
    (i += "rotate(".concat(t.rotate, "deg) ")),
    i
  );
}
var N1 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function lm() {
  const e = Jh,
    t = qh,
    n = I.cssPrefix,
    r = I.replacementClass;
  let o = N1;
  if (n !== e || r !== t) {
    const i = new RegExp("\\.".concat(e, "\\-"), "g"),
      l = new RegExp("\\--".concat(e, "\\-"), "g"),
      a = new RegExp("\\.".concat(t), "g");
    o = o
      .replace(i, ".".concat(n, "-"))
      .replace(l, "--".concat(n, "-"))
      .replace(a, ".".concat(r));
  }
  return o;
}
let Qf = !1;
function xa() {
  I.autoAddCss && !Qf && (k1(lm()), (Qf = !0));
}
var T1 = {
  mixout() {
    return { dom: { css: lm, insertCss: xa } };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        xa();
      },
      beforeI2svg() {
        xa();
      },
    };
  },
};
const Xt = _n || {};
Xt[Kt] || (Xt[Kt] = {});
Xt[Kt].styles || (Xt[Kt].styles = {});
Xt[Kt].hooks || (Xt[Kt].hooks = {});
Xt[Kt].shims || (Xt[Kt].shims = []);
var Dt = Xt[Kt];
const am = [],
  sm = function () {
    ce.removeEventListener("DOMContentLoaded", sm),
      (hl = 1),
      am.map((e) => e());
  };
let hl = !1;
Zt &&
  ((hl = (ce.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    ce.readyState
  )),
  hl || ce.addEventListener("DOMContentLoaded", sm));
function R1(e) {
  Zt && (hl ? setTimeout(e, 0) : am.push(e));
}
function Jo(e) {
  const { tag: t, attributes: n = {}, children: r = [] } = e;
  return typeof e == "string"
    ? im(e)
    : "<"
        .concat(t, " ")
        .concat(_1(n), ">")
        .concat(r.map(Jo).join(""), "</")
        .concat(t, ">");
}
function Kf(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var ka = function (t, n, r, o) {
  var i = Object.keys(t),
    l = i.length,
    a = n,
    s,
    u,
    f;
  for (r === void 0 ? ((s = 1), (f = t[i[0]])) : ((s = 0), (f = r)); s < l; s++)
    (u = i[s]), (f = a(f, t[u], u, t));
  return f;
};
function L1(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const o = e.charCodeAt(n++);
    if (o >= 55296 && o <= 56319 && n < r) {
      const i = e.charCodeAt(n++);
      (i & 64512) == 56320
        ? t.push(((o & 1023) << 10) + (i & 1023) + 65536)
        : (t.push(o), n--);
    } else t.push(o);
  }
  return t;
}
function Ps(e) {
  const t = L1(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function O1(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t),
    o;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((o = e.charCodeAt(t + 1)), o >= 56320 && o <= 57343)
    ? (r - 55296) * 1024 + o - 56320 + 65536
    : r;
}
function Xf(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function Ns(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { skipHooks: r = !1 } = n,
    o = Xf(t);
  typeof Dt.hooks.addPack == "function" && !r
    ? Dt.hooks.addPack(e, Xf(t))
    : (Dt.styles[e] = { ...(Dt.styles[e] || {}), ...o }),
    e === "fas" && Ns("fa", t);
}
const { styles: In, shims: M1 } = Dt,
  D1 = {
    [me]: Object.values(Hn[me]),
    [ot]: Object.values(Hn[ot]),
    [it]: Object.values(Hn[it]),
  };
let Wu = null,
  um = {},
  cm = {},
  fm = {},
  dm = {},
  pm = {};
const A1 = {
  [me]: Object.keys(Wn[me]),
  [ot]: Object.keys(Wn[ot]),
  [it]: Object.keys(Wn[it]),
};
function I1(e) {
  return ~y1.indexOf(e);
}
function z1(e, t) {
  const n = t.split("-"),
    r = n[0],
    o = n.slice(1).join("-");
  return r === e && o !== "" && !I1(o) ? o : null;
}
const hm = () => {
  const e = (r) => ka(In, (o, i, l) => ((o[l] = ka(i, r, {})), o), {});
  (um = e(
    (r, o, i) => (
      o[3] && (r[o[3]] = i),
      o[2] &&
        o[2]
          .filter((a) => typeof a == "number")
          .forEach((a) => {
            r[a.toString(16)] = i;
          }),
      r
    )
  )),
    (cm = e(
      (r, o, i) => (
        (r[i] = i),
        o[2] &&
          o[2]
            .filter((a) => typeof a == "string")
            .forEach((a) => {
              r[a] = i;
            }),
        r
      )
    )),
    (pm = e((r, o, i) => {
      const l = o[2];
      return (
        (r[i] = i),
        l.forEach((a) => {
          r[a] = i;
        }),
        r
      );
    }));
  const t = "far" in In || I.autoFetchSvg,
    n = ka(
      M1,
      (r, o) => {
        const i = o[0];
        let l = o[1];
        const a = o[2];
        return (
          l === "far" && !t && (l = "fas"),
          typeof i == "string" && (r.names[i] = { prefix: l, iconName: a }),
          typeof i == "number" &&
            (r.unicodes[i.toString(16)] = { prefix: l, iconName: a }),
          r
        );
      },
      { names: {}, unicodes: {} }
    );
  (fm = n.names),
    (dm = n.unicodes),
    (Wu = jl(I.styleDefault, { family: I.familyDefault }));
};
x1((e) => {
  Wu = jl(e.styleDefault, { family: I.familyDefault });
});
hm();
function Hu(e, t) {
  return (um[e] || {})[t];
}
function F1(e, t) {
  return (cm[e] || {})[t];
}
function dn(e, t) {
  return (pm[e] || {})[t];
}
function mm(e) {
  return fm[e] || { prefix: null, iconName: null };
}
function j1(e) {
  const t = dm[e],
    n = Hu("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function Cn() {
  return Wu;
}
const Vu = () => ({ prefix: null, iconName: null, rest: [] });
function jl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { family: n = me } = t,
    r = Wn[n][e],
    o = Bo[n][e] || Bo[n][r],
    i = e in Dt.styles ? e : null;
  return o || i || null;
}
const U1 = {
  [me]: Object.keys(Hn[me]),
  [ot]: Object.keys(Hn[ot]),
  [it]: Object.keys(Hn[it]),
};
function Ul(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { skipLookups: n = !1 } = t,
    r = {
      [me]: "".concat(I.cssPrefix, "-").concat(me),
      [ot]: "".concat(I.cssPrefix, "-").concat(ot),
      [it]: "".concat(I.cssPrefix, "-").concat(it),
    };
  let o = null,
    i = me;
  const l = Q0.filter((s) => s !== Xh);
  l.forEach((s) => {
    (e.includes(r[s]) || e.some((u) => U1[s].includes(u))) && (i = s);
  });
  const a = e.reduce((s, u) => {
    const f = z1(I.cssPrefix, u);
    if (
      (In[u]
        ? ((u = D1[i].includes(u) ? p1[i][u] : u), (o = u), (s.prefix = u))
        : A1[i].indexOf(u) > -1
        ? ((o = u), (s.prefix = jl(u, { family: i })))
        : f
        ? (s.iconName = f)
        : u !== I.replacementClass &&
          !l.some((c) => u === r[c]) &&
          s.rest.push(u),
      !n && s.prefix && s.iconName)
    ) {
      const c = o === "fa" ? mm(s.iconName) : {},
        p = dn(s.prefix, s.iconName);
      c.prefix && (o = null),
        (s.iconName = c.iconName || p || s.iconName),
        (s.prefix = c.prefix || s.prefix),
        s.prefix === "far" &&
          !In.far &&
          In.fas &&
          !I.autoFetchSvg &&
          (s.prefix = "fas");
    }
    return s;
  }, Vu());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (a.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (a.prefix = "fad"),
    !a.prefix &&
      i === ot &&
      (In.fass || I.autoFetchSvg) &&
      ((a.prefix = "fass"),
      (a.iconName = dn(a.prefix, a.iconName) || a.iconName)),
    !a.prefix &&
      i === it &&
      (In.fasds || I.autoFetchSvg) &&
      ((a.prefix = "fasds"),
      (a.iconName = dn(a.prefix, a.iconName) || a.iconName)),
    (a.prefix === "fa" || o === "fa") && (a.prefix = Cn() || "fas"),
    a
  );
}
class b1 {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const o = n.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((i) => {
      (this.definitions[i] = { ...(this.definitions[i] || {}), ...o[i] }),
        Ns(i, o[i]);
      const l = Hn[me][i];
      l && Ns(l, o[i]), hm();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? { 0: n } : n;
    return (
      Object.keys(r).map((o) => {
        const { prefix: i, iconName: l, icon: a } = r[o],
          s = a[2];
        t[i] || (t[i] = {}),
          s.length > 0 &&
            s.forEach((u) => {
              typeof u == "string" && (t[i][u] = a);
            }),
          (t[i][l] = a);
      }),
      t
    );
  }
}
let Gf = [],
  xr = {};
const Rr = {},
  $1 = Object.keys(Rr);
function B1(e, t) {
  let { mixoutsTo: n } = t;
  return (
    (Gf = e),
    (xr = {}),
    Object.keys(Rr).forEach((r) => {
      $1.indexOf(r) === -1 && delete Rr[r];
    }),
    Gf.forEach((r) => {
      const o = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(o).forEach((i) => {
          typeof o[i] == "function" && (n[i] = o[i]),
            typeof o[i] == "object" &&
              Object.keys(o[i]).forEach((l) => {
                n[i] || (n[i] = {}), (n[i][l] = o[i][l]);
              });
        }),
        r.hooks)
      ) {
        const i = r.hooks();
        Object.keys(i).forEach((l) => {
          xr[l] || (xr[l] = []), xr[l].push(i[l]);
        });
      }
      r.provides && r.provides(Rr);
    }),
    n
  );
}
function Ts(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
    o < n;
    o++
  )
    r[o - 2] = arguments[o];
  return (
    (xr[e] || []).forEach((l) => {
      t = l.apply(null, [t, ...r]);
    }),
    t
  );
}
function Zn(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  (xr[e] || []).forEach((i) => {
    i.apply(null, n);
  });
}
function Pn() {
  const e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return Rr[e] ? Rr[e].apply(null, t) : void 0;
}
function Rs(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let { iconName: t } = e;
  const n = e.prefix || Cn();
  if (t)
    return (t = dn(n, t) || t), Kf(gm.definitions, n, t) || Kf(Dt.styles, n, t);
}
const gm = new b1(),
  W1 = () => {
    (I.autoReplaceSvg = !1), (I.observeMutations = !1), Zn("noAuto");
  },
  H1 = {
    i2svg: function () {
      let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Zt
        ? (Zn("beforeI2svg", e), Pn("pseudoElements2svg", e), Pn("i2svg", e))
        : Promise.reject(new Error("Operation requires a DOM of some kind."));
    },
    watch: function () {
      let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const { autoReplaceSvgRoot: t } = e;
      I.autoReplaceSvg === !1 && (I.autoReplaceSvg = !0),
        (I.observeMutations = !0),
        R1(() => {
          Y1({ autoReplaceSvgRoot: t }), Zn("watch", e);
        });
    },
  },
  V1 = {
    icon: (e) => {
      if (e === null) return null;
      if (typeof e == "object" && e.prefix && e.iconName)
        return {
          prefix: e.prefix,
          iconName: dn(e.prefix, e.iconName) || e.iconName,
        };
      if (Array.isArray(e) && e.length === 2) {
        const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1],
          n = jl(e[0]);
        return { prefix: n, iconName: dn(n, t) || t };
      }
      if (
        typeof e == "string" &&
        (e.indexOf("".concat(I.cssPrefix, "-")) > -1 || e.match(h1))
      ) {
        const t = Ul(e.split(" "), { skipLookups: !0 });
        return {
          prefix: t.prefix || Cn(),
          iconName: dn(t.prefix, t.iconName) || t.iconName,
        };
      }
      if (typeof e == "string") {
        const t = Cn();
        return { prefix: t, iconName: dn(t, e) || e };
      }
    },
  },
  ut = {
    noAuto: W1,
    config: I,
    dom: H1,
    parse: V1,
    library: gm,
    findIconDefinition: Rs,
    toHtml: Jo,
  },
  Y1 = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { autoReplaceSvgRoot: t = ce } = e;
    (Object.keys(Dt.styles).length > 0 || I.autoFetchSvg) &&
      Zt &&
      I.autoReplaceSvg &&
      ut.dom.i2svg({ node: t });
  };
function bl(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map((n) => Jo(n));
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (!Zt) return;
        const n = ce.createElement("div");
        return (n.innerHTML = e.html), n.children;
      },
    }),
    e
  );
}
function Q1(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: o,
    styles: i,
    transform: l,
  } = e;
  if (Bu(l) && n.found && !r.found) {
    const { width: a, height: s } = n,
      u = { x: a / s / 2, y: 0.5 };
    o.style = Fl({
      ...i,
      "transform-origin": ""
        .concat(u.x + l.x / 16, "em ")
        .concat(u.y + l.y / 16, "em"),
    });
  }
  return [{ tag: "svg", attributes: o, children: t }];
}
function K1(e) {
  let { prefix: t, iconName: n, children: r, attributes: o, symbol: i } = e;
  const l = i === !0 ? "".concat(t, "-").concat(I.cssPrefix, "-").concat(n) : i;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [{ tag: "symbol", attributes: { ...o, id: l }, children: r }],
    },
  ];
}
function Yu(e) {
  const {
      icons: { main: t, mask: n },
      prefix: r,
      iconName: o,
      transform: i,
      symbol: l,
      title: a,
      maskId: s,
      titleId: u,
      extra: f,
      watchable: c = !1,
    } = e,
    { width: p, height: S } = n.found ? n : t,
    w = r === "fak",
    x = [I.replacementClass, o ? "".concat(I.cssPrefix, "-").concat(o) : ""]
      .filter((P) => f.classes.indexOf(P) === -1)
      .filter((P) => P !== "" || !!P)
      .concat(f.classes)
      .join(" ");
  let C = {
    children: [],
    attributes: {
      ...f.attributes,
      "data-prefix": r,
      "data-icon": o,
      class: x,
      role: f.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(p, " ").concat(S),
    },
  };
  const h =
    w && !~f.classes.indexOf("fa-fw")
      ? { width: "".concat((p / S) * 16 * 0.0625, "em") }
      : {};
  c && (C.attributes[Gn] = ""),
    a &&
      (C.children.push({
        tag: "title",
        attributes: {
          id: C.attributes["aria-labelledby"] || "title-".concat(u || Wo()),
        },
        children: [a],
      }),
      delete C.attributes.title);
  const d = {
      ...C,
      prefix: r,
      iconName: o,
      main: t,
      mask: n,
      maskId: s,
      transform: i,
      symbol: l,
      styles: { ...h, ...f.styles },
    },
    { children: g, attributes: E } =
      n.found && t.found
        ? Pn("generateAbstractMask", d) || { children: [], attributes: {} }
        : Pn("generateAbstractIcon", d) || { children: [], attributes: {} };
  return (d.children = g), (d.attributes = E), l ? K1(d) : Q1(d);
}
function Zf(e) {
  const {
      content: t,
      width: n,
      height: r,
      transform: o,
      title: i,
      extra: l,
      watchable: a = !1,
    } = e,
    s = {
      ...l.attributes,
      ...(i ? { title: i } : {}),
      class: l.classes.join(" "),
    };
  a && (s[Gn] = "");
  const u = { ...l.styles };
  Bu(o) &&
    ((u.transform = P1({
      transform: o,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (u["-webkit-transform"] = u.transform));
  const f = Fl(u);
  f.length > 0 && (s.style = f);
  const c = [];
  return (
    c.push({ tag: "span", attributes: s, children: [t] }),
    i &&
      c.push({ tag: "span", attributes: { class: "sr-only" }, children: [i] }),
    c
  );
}
function X1(e) {
  const { content: t, title: n, extra: r } = e,
    o = {
      ...r.attributes,
      ...(n ? { title: n } : {}),
      class: r.classes.join(" "),
    },
    i = Fl(r.styles);
  i.length > 0 && (o.style = i);
  const l = [];
  return (
    l.push({ tag: "span", attributes: o, children: [t] }),
    n &&
      l.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    l
  );
}
const { styles: Ea } = Dt;
function Ls(e) {
  const t = e[0],
    n = e[1],
    [r] = e.slice(4);
  let o = null;
  return (
    Array.isArray(r)
      ? (o = {
          tag: "g",
          attributes: { class: "".concat(I.cssPrefix, "-").concat(Sa.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(I.cssPrefix, "-").concat(Sa.SECONDARY),
                fill: "currentColor",
                d: r[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(I.cssPrefix, "-").concat(Sa.PRIMARY),
                fill: "currentColor",
                d: r[1],
              },
            },
          ],
        })
      : (o = { tag: "path", attributes: { fill: "currentColor", d: r } }),
    { found: !0, width: t, height: n, icon: o }
  );
}
const G1 = { found: !1, width: 512, height: 512 };
function Z1(e, t) {
  !em &&
    !I.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function Os(e, t) {
  let n = t;
  return (
    t === "fa" && I.styleDefault !== null && (t = Cn()),
    new Promise((r, o) => {
      if (n === "fa") {
        const i = mm(e) || {};
        (e = i.iconName || e), (t = i.prefix || t);
      }
      if (e && t && Ea[t] && Ea[t][e]) {
        const i = Ea[t][e];
        return r(Ls(i));
      }
      Z1(e, t),
        r({
          ...G1,
          icon: I.showMissingIcons && e ? Pn("missingIconAbstract") || {} : {},
        });
    })
  );
}
const Jf = () => {},
  Ms =
    I.measurePerformance && _i && _i.mark && _i.measure
      ? _i
      : { mark: Jf, measure: Jf },
  co = 'FA "6.6.0"',
  J1 = (e) => (Ms.mark("".concat(co, " ").concat(e, " begins")), () => vm(e)),
  vm = (e) => {
    Ms.mark("".concat(co, " ").concat(e, " ends")),
      Ms.measure(
        "".concat(co, " ").concat(e),
        "".concat(co, " ").concat(e, " begins"),
        "".concat(co, " ").concat(e, " ends")
      );
  };
var Qu = { begin: J1, end: vm };
const ji = () => {};
function qf(e) {
  return typeof (e.getAttribute ? e.getAttribute(Gn) : null) == "string";
}
function q1(e) {
  const t = e.getAttribute ? e.getAttribute(Uu) : null,
    n = e.getAttribute ? e.getAttribute(bu) : null;
  return t && n;
}
function ew(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(I.replacementClass)
  );
}
function tw() {
  return I.autoReplaceSvg === !0
    ? Ui.replace
    : Ui[I.autoReplaceSvg] || Ui.replace;
}
function nw(e) {
  return ce.createElementNS("http://www.w3.org/2000/svg", e);
}
function rw(e) {
  return ce.createElement(e);
}
function ym(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { ceFn: n = e.tag === "svg" ? nw : rw } = t;
  if (typeof e == "string") return ce.createTextNode(e);
  const r = n(e.tag);
  return (
    Object.keys(e.attributes || []).forEach(function (i) {
      r.setAttribute(i, e.attributes[i]);
    }),
    (e.children || []).forEach(function (i) {
      r.appendChild(ym(i, { ceFn: n }));
    }),
    r
  );
}
function ow(e) {
  let t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
const Ui = {
  replace: function (e) {
    const t = e[0];
    if (t.parentNode)
      if (
        (e[1].forEach((n) => {
          t.parentNode.insertBefore(ym(n), t);
        }),
        t.getAttribute(Gn) === null && I.keepOriginalSource)
      ) {
        let n = ce.createComment(ow(t));
        t.parentNode.replaceChild(n, t);
      } else t.remove();
  },
  nest: function (e) {
    const t = e[0],
      n = e[1];
    if (~$u(t).indexOf(I.replacementClass)) return Ui.replace(e);
    const r = new RegExp("".concat(I.cssPrefix, "-.*"));
    if ((delete n[0].attributes.id, n[0].attributes.class)) {
      const i = n[0].attributes.class
        .split(" ")
        .reduce(
          (l, a) => (
            a === I.replacementClass || a.match(r)
              ? l.toSvg.push(a)
              : l.toNode.push(a),
            l
          ),
          { toNode: [], toSvg: [] }
        );
      (n[0].attributes.class = i.toSvg.join(" ")),
        i.toNode.length === 0
          ? t.removeAttribute("class")
          : t.setAttribute("class", i.toNode.join(" "));
    }
    const o = n.map((i) => Jo(i)).join(`
`);
    t.setAttribute(Gn, ""), (t.innerHTML = o);
  },
};
function ed(e) {
  e();
}
function wm(e, t) {
  const n = typeof t == "function" ? t : ji;
  if (e.length === 0) n();
  else {
    let r = ed;
    I.mutateApproach === f1 && (r = _n.requestAnimationFrame || ed),
      r(() => {
        const o = tw(),
          i = Qu.begin("mutate");
        e.map(o), i(), n();
      });
  }
}
let Ku = !1;
function Sm() {
  Ku = !0;
}
function Ds() {
  Ku = !1;
}
let ml = null;
function td(e) {
  if (!Wf || !I.observeMutations) return;
  const {
    treeCallback: t = ji,
    nodeCallback: n = ji,
    pseudoElementsCallback: r = ji,
    observeMutationsRoot: o = ce,
  } = e;
  (ml = new Wf((i) => {
    if (Ku) return;
    const l = Cn();
    Wr(i).forEach((a) => {
      if (
        (a.type === "childList" &&
          a.addedNodes.length > 0 &&
          !qf(a.addedNodes[0]) &&
          (I.searchPseudoElements && r(a.target), t(a.target)),
        a.type === "attributes" &&
          a.target.parentNode &&
          I.searchPseudoElements &&
          r(a.target.parentNode),
        a.type === "attributes" && qf(a.target) && ~v1.indexOf(a.attributeName))
      )
        if (a.attributeName === "class" && q1(a.target)) {
          const { prefix: s, iconName: u } = Ul($u(a.target));
          a.target.setAttribute(Uu, s || l), u && a.target.setAttribute(bu, u);
        } else ew(a.target) && n(a.target);
    });
  })),
    Zt &&
      ml.observe(o, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0,
      });
}
function iw() {
  ml && ml.disconnect();
}
function lw(e) {
  const t = e.getAttribute("style");
  let n = [];
  return (
    t &&
      (n = t.split(";").reduce((r, o) => {
        const i = o.split(":"),
          l = i[0],
          a = i.slice(1);
        return l && a.length > 0 && (r[l] = a.join(":").trim()), r;
      }, {})),
    n
  );
}
function aw(e) {
  const t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = Ul($u(e));
  return (
    o.prefix || (o.prefix = Cn()),
    t && n && ((o.prefix = t), (o.iconName = n)),
    (o.iconName && o.prefix) ||
      (o.prefix &&
        r.length > 0 &&
        (o.iconName =
          F1(o.prefix, e.innerText) || Hu(o.prefix, Ps(e.innerText))),
      !o.iconName &&
        I.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (o.iconName = e.firstChild.data)),
    o
  );
}
function sw(e) {
  const t = Wr(e.attributes).reduce(
      (o, i) => (
        o.name !== "class" && o.name !== "style" && (o[i.name] = i.value), o
      ),
      {}
    ),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return (
    I.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(I.replacementClass, "-title-")
            .concat(r || Wo()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function uw() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Mt,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function nd(e) {
  let t =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { styleParser: !0 };
  const { iconName: n, prefix: r, rest: o } = aw(e),
    i = sw(e),
    l = Ts("parseNodeAttributes", {}, e);
  let a = t.styleParser ? lw(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: Mt,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    symbol: !1,
    extra: { classes: o, styles: a, attributes: i },
    ...l,
  };
}
const { styles: cw } = Dt;
function xm(e) {
  const t = I.autoReplaceSvg === "nest" ? nd(e, { styleParser: !1 }) : nd(e);
  return ~t.extra.classes.indexOf(rm)
    ? Pn("generateLayersText", e, t)
    : Pn("generateSvgReplacementMutation", e, t);
}
let zt = new Set();
tm.map((e) => {
  zt.add("fa-".concat(e));
});
Object.keys(Wn[me]).map(zt.add.bind(zt));
Object.keys(Wn[ot]).map(zt.add.bind(zt));
Object.keys(Wn[it]).map(zt.add.bind(zt));
zt = [...zt];
function rd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Zt) return Promise.resolve();
  const n = ce.documentElement.classList,
    r = (f) => n.add("".concat(Yf, "-").concat(f)),
    o = (f) => n.remove("".concat(Yf, "-").concat(f)),
    i = I.autoFetchSvg
      ? zt
      : tm.map((f) => "fa-".concat(f)).concat(Object.keys(cw));
  i.includes("fa") || i.push("fa");
  const l = [".".concat(rm, ":not([").concat(Gn, "])")]
    .concat(i.map((f) => ".".concat(f, ":not([").concat(Gn, "])")))
    .join(", ");
  if (l.length === 0) return Promise.resolve();
  let a = [];
  try {
    a = Wr(e.querySelectorAll(l));
  } catch {}
  if (a.length > 0) r("pending"), o("complete");
  else return Promise.resolve();
  const s = Qu.begin("onTree"),
    u = a.reduce((f, c) => {
      try {
        const p = xm(c);
        p && f.push(p);
      } catch (p) {
        em || (p.name === "MissingIcon" && console.error(p));
      }
      return f;
    }, []);
  return new Promise((f, c) => {
    Promise.all(u)
      .then((p) => {
        wm(p, () => {
          r("active"),
            r("complete"),
            o("pending"),
            typeof t == "function" && t(),
            s(),
            f();
        });
      })
      .catch((p) => {
        s(), c(p);
      });
  });
}
function fw(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  xm(e).then((n) => {
    n && wm([n], t);
  });
}
function dw(e) {
  return function (t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Rs(t || {});
    let { mask: o } = n;
    return o && (o = (o || {}).icon ? o : Rs(o || {})), e(r, { ...n, mask: o });
  };
}
const pw = function (e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = Mt,
    symbol: r = !1,
    mask: o = null,
    maskId: i = null,
    title: l = null,
    titleId: a = null,
    classes: s = [],
    attributes: u = {},
    styles: f = {},
  } = t;
  if (!e) return;
  const { prefix: c, iconName: p, icon: S } = e;
  return bl(
    { type: "icon", ...e },
    () => (
      Zn("beforeDOMElementCreation", { iconDefinition: e, params: t }),
      I.autoA11y &&
        (l
          ? (u["aria-labelledby"] = ""
              .concat(I.replacementClass, "-title-")
              .concat(a || Wo()))
          : ((u["aria-hidden"] = "true"), (u.focusable = "false"))),
      Yu({
        icons: {
          main: Ls(S),
          mask: o
            ? Ls(o.icon)
            : { found: !1, width: null, height: null, icon: {} },
        },
        prefix: c,
        iconName: p,
        transform: { ...Mt, ...n },
        symbol: r,
        title: l,
        maskId: i,
        titleId: a,
        extra: { attributes: u, styles: f, classes: s },
      })
    )
  );
};
var hw = {
    mixout() {
      return { icon: dw(pw) };
    },
    hooks() {
      return {
        mutationObserverCallbacks(e) {
          return (e.treeCallback = rd), (e.nodeCallback = fw), e;
        },
      };
    },
    provides(e) {
      (e.i2svg = function (t) {
        const { node: n = ce, callback: r = () => {} } = t;
        return rd(n, r);
      }),
        (e.generateSvgReplacementMutation = function (t, n) {
          const {
            iconName: r,
            title: o,
            titleId: i,
            prefix: l,
            transform: a,
            symbol: s,
            mask: u,
            maskId: f,
            extra: c,
          } = n;
          return new Promise((p, S) => {
            Promise.all([
              Os(r, l),
              u.iconName
                ? Os(u.iconName, u.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then((w) => {
                let [x, C] = w;
                p([
                  t,
                  Yu({
                    icons: { main: x, mask: C },
                    prefix: l,
                    iconName: r,
                    transform: a,
                    symbol: s,
                    maskId: f,
                    title: o,
                    titleId: i,
                    extra: c,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(S);
          });
        }),
        (e.generateAbstractIcon = function (t) {
          let {
            children: n,
            attributes: r,
            main: o,
            transform: i,
            styles: l,
          } = t;
          const a = Fl(l);
          a.length > 0 && (r.style = a);
          let s;
          return (
            Bu(i) &&
              (s = Pn("generateAbstractTransformGrouping", {
                main: o,
                transform: i,
                containerWidth: o.width,
                iconWidth: o.width,
              })),
            n.push(s || o.icon),
            { children: n, attributes: r }
          );
        });
    },
  },
  mw = {
    mixout() {
      return {
        layer(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { classes: n = [] } = t;
          return bl({ type: "layer" }, () => {
            Zn("beforeDOMElementCreation", { assembler: e, params: t });
            let r = [];
            return (
              e((o) => {
                Array.isArray(o)
                  ? o.map((i) => {
                      r = r.concat(i.abstract);
                    })
                  : (r = r.concat(o.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(I.cssPrefix, "-layers"), ...n].join(" "),
                  },
                  children: r,
                },
              ]
            );
          });
        },
      };
    },
  },
  gw = {
    mixout() {
      return {
        counter(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            title: n = null,
            classes: r = [],
            attributes: o = {},
            styles: i = {},
          } = t;
          return bl(
            { type: "counter", content: e },
            () => (
              Zn("beforeDOMElementCreation", { content: e, params: t }),
              X1({
                content: e.toString(),
                title: n,
                extra: {
                  attributes: o,
                  styles: i,
                  classes: ["".concat(I.cssPrefix, "-layers-counter"), ...r],
                },
              })
            )
          );
        },
      };
    },
  },
  vw = {
    mixout() {
      return {
        text(e) {
          let t =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            transform: n = Mt,
            title: r = null,
            classes: o = [],
            attributes: i = {},
            styles: l = {},
          } = t;
          return bl(
            { type: "text", content: e },
            () => (
              Zn("beforeDOMElementCreation", { content: e, params: t }),
              Zf({
                content: e,
                transform: { ...Mt, ...n },
                title: r,
                extra: {
                  attributes: i,
                  styles: l,
                  classes: ["".concat(I.cssPrefix, "-layers-text"), ...o],
                },
              })
            )
          );
        },
      };
    },
    provides(e) {
      e.generateLayersText = function (t, n) {
        const { title: r, transform: o, extra: i } = n;
        let l = null,
          a = null;
        if (Kh) {
          const s = parseInt(getComputedStyle(t).fontSize, 10),
            u = t.getBoundingClientRect();
          (l = u.width / s), (a = u.height / s);
        }
        return (
          I.autoA11y && !r && (i.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            t,
            Zf({
              content: t.innerHTML,
              width: l,
              height: a,
              transform: o,
              title: r,
              extra: i,
              watchable: !0,
            }),
          ])
        );
      };
    },
  };
const yw = new RegExp('"', "ug"),
  od = [1105920, 1112319],
  id = { FontAwesome: { normal: "fas", 400: "fas" }, ...q0, ...J0, ...a1 },
  As = Object.keys(id).reduce((e, t) => ((e[t.toLowerCase()] = id[t]), e), {}),
  ww = Object.keys(As).reduce((e, t) => {
    const n = As[t];
    return (e[t] = n[900] || [...Object.entries(n)][0][1]), e;
  }, {});
function Sw(e) {
  const t = e.replace(yw, ""),
    n = O1(t, 0),
    r = n >= od[0] && n <= od[1],
    o = t.length === 2 ? t[0] === t[1] : !1;
  return { value: Ps(o ? t[0] : t), isSecondary: r || o };
}
function xw(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(),
    r = parseInt(t),
    o = isNaN(r) ? "normal" : r;
  return (As[n] || {})[o] || ww[n];
}
function ld(e, t) {
  const n = "".concat(c1).concat(t.replace(":", "-"));
  return new Promise((r, o) => {
    if (e.getAttribute(n) !== null) return r();
    const l = Wr(e.children).filter((p) => p.getAttribute(ks) === t)[0],
      a = _n.getComputedStyle(e, t),
      s = a.getPropertyValue("font-family"),
      u = s.match(m1),
      f = a.getPropertyValue("font-weight"),
      c = a.getPropertyValue("content");
    if (l && !u) return e.removeChild(l), r();
    if (u && c !== "none" && c !== "") {
      const p = a.getPropertyValue("content");
      let S = xw(s, f);
      const { value: w, isSecondary: x } = Sw(p),
        C = u[0].startsWith("FontAwesome");
      let h = Hu(S, w),
        d = h;
      if (C) {
        const g = j1(w);
        g.iconName && g.prefix && ((h = g.iconName), (S = g.prefix));
      }
      if (
        h &&
        !x &&
        (!l || l.getAttribute(Uu) !== S || l.getAttribute(bu) !== d)
      ) {
        e.setAttribute(n, d), l && e.removeChild(l);
        const g = uw(),
          { extra: E } = g;
        (E.attributes[ks] = t),
          Os(h, S)
            .then((P) => {
              const y = Yu({
                  ...g,
                  icons: { main: P, mask: Vu() },
                  prefix: S,
                  iconName: d,
                  extra: E,
                  watchable: !0,
                }),
                O = ce.createElementNS("http://www.w3.org/2000/svg", "svg");
              t === "::before"
                ? e.insertBefore(O, e.firstChild)
                : e.appendChild(O),
                (O.outerHTML = y.map((R) => Jo(R)).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(o);
      } else r();
    } else r();
  });
}
function kw(e) {
  return Promise.all([ld(e, "::before"), ld(e, "::after")]);
}
function Ew(e) {
  return (
    e.parentNode !== document.head &&
    !~d1.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(ks) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function ad(e) {
  if (Zt)
    return new Promise((t, n) => {
      const r = Wr(e.querySelectorAll("*")).filter(Ew).map(kw),
        o = Qu.begin("searchPseudoElements");
      Sm(),
        Promise.all(r)
          .then(() => {
            o(), Ds(), t();
          })
          .catch(() => {
            o(), Ds(), n();
          });
    });
}
var _w = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return (e.pseudoElementsCallback = ad), e;
      },
    };
  },
  provides(e) {
    e.pseudoElements2svg = function (t) {
      const { node: n = ce } = t;
      I.searchPseudoElements && ad(n);
    };
  },
};
let sd = !1;
var Cw = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Sm(), (sd = !0);
        },
      },
    };
  },
  hooks() {
    return {
      bootstrap() {
        td(Ts("mutationObserverCallbacks", {}));
      },
      noAuto() {
        iw();
      },
      watch(e) {
        const { observeMutationsRoot: t } = e;
        sd
          ? Ds()
          : td(Ts("mutationObserverCallbacks", { observeMutationsRoot: t }));
      },
    };
  },
};
const ud = (e) => {
  let t = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
  return e
    .toLowerCase()
    .split(" ")
    .reduce((n, r) => {
      const o = r.toLowerCase().split("-"),
        i = o[0];
      let l = o.slice(1).join("-");
      if (i && l === "h") return (n.flipX = !0), n;
      if (i && l === "v") return (n.flipY = !0), n;
      if (((l = parseFloat(l)), isNaN(l))) return n;
      switch (i) {
        case "grow":
          n.size = n.size + l;
          break;
        case "shrink":
          n.size = n.size - l;
          break;
        case "left":
          n.x = n.x - l;
          break;
        case "right":
          n.x = n.x + l;
          break;
        case "up":
          n.y = n.y - l;
          break;
        case "down":
          n.y = n.y + l;
          break;
        case "rotate":
          n.rotate = n.rotate + l;
          break;
      }
      return n;
    }, t);
};
var Pw = {
  mixout() {
    return { parse: { transform: (e) => ud(e) } };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = ud(n)), e;
      },
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function (t) {
      let { main: n, transform: r, containerWidth: o, iconWidth: i } = t;
      const l = { transform: "translate(".concat(o / 2, " 256)") },
        a = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "),
        s = "scale("
          .concat((r.size / 16) * (r.flipX ? -1 : 1), ", ")
          .concat((r.size / 16) * (r.flipY ? -1 : 1), ") "),
        u = "rotate(".concat(r.rotate, " 0 0)"),
        f = { transform: "".concat(a, " ").concat(s, " ").concat(u) },
        c = { transform: "translate(".concat((i / 2) * -1, " -256)") },
        p = { outer: l, inner: f, path: c };
      return {
        tag: "g",
        attributes: { ...p.outer },
        children: [
          {
            tag: "g",
            attributes: { ...p.inner },
            children: [
              {
                tag: n.icon.tag,
                children: n.icon.children,
                attributes: { ...n.icon.attributes, ...p.path },
              },
            ],
          },
        ],
      };
    };
  },
};
const _a = { x: 0, y: 0, width: "100%", height: "100%" };
function cd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function Nw(e) {
  return e.tag === "g" ? e.children : [e];
}
var Tw = {
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          const n = t.getAttribute("data-fa-mask"),
            r = n ? Ul(n.split(" ").map((o) => o.trim())) : Vu();
          return (
            r.prefix || (r.prefix = Cn()),
            (e.mask = r),
            (e.maskId = t.getAttribute("data-fa-mask-id")),
            e
          );
        },
      };
    },
    provides(e) {
      e.generateAbstractMask = function (t) {
        let {
          children: n,
          attributes: r,
          main: o,
          mask: i,
          maskId: l,
          transform: a,
        } = t;
        const { width: s, icon: u } = o,
          { width: f, icon: c } = i,
          p = C1({ transform: a, containerWidth: f, iconWidth: s }),
          S = { tag: "rect", attributes: { ..._a, fill: "white" } },
          w = u.children ? { children: u.children.map(cd) } : {},
          x = {
            tag: "g",
            attributes: { ...p.inner },
            children: [
              cd({
                tag: u.tag,
                attributes: { ...u.attributes, ...p.path },
                ...w,
              }),
            ],
          },
          C = { tag: "g", attributes: { ...p.outer }, children: [x] },
          h = "mask-".concat(l || Wo()),
          d = "clip-".concat(l || Wo()),
          g = {
            tag: "mask",
            attributes: {
              ..._a,
              id: h,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse",
            },
            children: [S, C],
          },
          E = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: d }, children: Nw(c) },
              g,
            ],
          };
        return (
          n.push(E, {
            tag: "rect",
            attributes: {
              fill: "currentColor",
              "clip-path": "url(#".concat(d, ")"),
              mask: "url(#".concat(h, ")"),
              ..._a,
            },
          }),
          { children: n, attributes: r }
        );
      };
    },
  },
  Rw = {
    provides(e) {
      let t = !1;
      _n.matchMedia &&
        (t = _n.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (e.missingIconAbstract = function () {
          const n = [],
            r = { fill: "currentColor" },
            o = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          n.push({
            tag: "path",
            attributes: {
              ...r,
              d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
            },
          });
          const i = { ...o, attributeName: "opacity" },
            l = {
              tag: "circle",
              attributes: { ...r, cx: "256", cy: "364", r: "28" },
              children: [],
            };
          return (
            t ||
              l.children.push(
                {
                  tag: "animate",
                  attributes: {
                    ...o,
                    attributeName: "r",
                    values: "28;14;28;28;14;28;",
                  },
                },
                { tag: "animate", attributes: { ...i, values: "1;0;1;1;0;1;" } }
              ),
            n.push(l),
            n.push({
              tag: "path",
              attributes: {
                ...r,
                opacity: "1",
                d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
              },
              children: t
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: { ...i, values: "1;0;0;0;0;1;" },
                    },
                  ],
            }),
            t ||
              n.push({
                tag: "path",
                attributes: {
                  ...r,
                  opacity: "0",
                  d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                },
                children: [
                  {
                    tag: "animate",
                    attributes: { ...i, values: "0;0;1;1;0;0;" },
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: n }
          );
        });
    },
  },
  Lw = {
    hooks() {
      return {
        parseNodeAttributes(e, t) {
          const n = t.getAttribute("data-fa-symbol"),
            r = n === null ? !1 : n === "" ? !0 : n;
          return (e.symbol = r), e;
        },
      };
    },
  },
  Ow = [T1, hw, mw, gw, vw, _w, Cw, Pw, Tw, Rw, Lw];
B1(Ow, { mixoutsTo: ut });
ut.noAuto;
ut.config;
ut.library;
ut.dom;
const Is = ut.parse;
ut.findIconDefinition;
ut.toHtml;
const Mw = ut.icon;
ut.layer;
ut.text;
ut.counter;
var km = { exports: {} },
  Dw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Aw = Dw,
  Iw = Aw;
function Em() {}
function _m() {}
_m.resetWarningCache = Em;
var zw = function () {
  function e(r, o, i, l, a, s) {
    if (s !== Iw) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
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
    checkPropTypes: _m,
    resetWarningCache: Em,
  };
  return (n.PropTypes = n), n;
};
km.exports = zw();
var Fw = km.exports;
const Q = js(Fw);
function fd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fd(Object(n), !0).forEach(function (r) {
          kr(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : fd(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function gl(e) {
  "@babel/helpers - typeof";
  return (
    (gl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    gl(e)
  );
}
function kr(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function jw(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Uw(e, t) {
  if (e == null) return {};
  var n = jw(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function zs(e) {
  return bw(e) || $w(e) || Bw(e) || Ww();
}
function bw(e) {
  if (Array.isArray(e)) return Fs(e);
}
function $w(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Bw(e, t) {
  if (e) {
    if (typeof e == "string") return Fs(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Fs(e, t);
  }
}
function Fs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ww() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hw(e) {
  var t,
    n = e.beat,
    r = e.fade,
    o = e.beatFade,
    i = e.bounce,
    l = e.shake,
    a = e.flash,
    s = e.spin,
    u = e.spinPulse,
    f = e.spinReverse,
    c = e.pulse,
    p = e.fixedWidth,
    S = e.inverse,
    w = e.border,
    x = e.listItem,
    C = e.flip,
    h = e.size,
    d = e.rotation,
    g = e.pull,
    E =
      ((t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": o,
        "fa-bounce": i,
        "fa-shake": l,
        "fa-flash": a,
        "fa-spin": s,
        "fa-spin-reverse": f,
        "fa-spin-pulse": u,
        "fa-pulse": c,
        "fa-fw": p,
        "fa-inverse": S,
        "fa-border": w,
        "fa-li": x,
        "fa-flip": C === !0,
        "fa-flip-horizontal": C === "horizontal" || C === "both",
        "fa-flip-vertical": C === "vertical" || C === "both",
      }),
      kr(t, "fa-".concat(h), typeof h < "u" && h !== null),
      kr(t, "fa-rotate-".concat(d), typeof d < "u" && d !== null && d !== 0),
      kr(t, "fa-pull-".concat(g), typeof g < "u" && g !== null),
      kr(t, "fa-swap-opacity", e.swapOpacity),
      t);
  return Object.keys(E)
    .map(function (P) {
      return E[P] ? P : null;
    })
    .filter(function (P) {
      return P;
    });
}
function Vw(e) {
  return (e = e - 0), e === e;
}
function Cm(e) {
  return Vw(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : "";
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Yw = ["style"];
function Qw(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Kw(e) {
  return e
    .split(";")
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(":"),
        o = Cm(n.slice(0, r)),
        i = n.slice(r + 1).trim();
      return o.startsWith("webkit") ? (t[Qw(o)] = i) : (t[o] = i), t;
    }, {});
}
function Pm(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string") return t;
  var r = (t.children || []).map(function (s) {
      return Pm(e, s);
    }),
    o = Object.keys(t.attributes || {}).reduce(
      function (s, u) {
        var f = t.attributes[u];
        switch (u) {
          case "class":
            (s.attrs.className = f), delete t.attributes.class;
            break;
          case "style":
            s.attrs.style = Kw(f);
            break;
          default:
            u.indexOf("aria-") === 0 || u.indexOf("data-") === 0
              ? (s.attrs[u.toLowerCase()] = f)
              : (s.attrs[Cm(u)] = f);
        }
        return s;
      },
      { attrs: {} }
    ),
    i = n.style,
    l = i === void 0 ? {} : i,
    a = Uw(n, Yw);
  return (
    (o.attrs.style = Lt(Lt({}, o.attrs.style), l)),
    e.apply(void 0, [t.tag, Lt(Lt({}, o.attrs), a)].concat(zs(r)))
  );
}
var Nm = !1;
try {
  Nm = !0;
} catch {}
function Xw() {
  if (!Nm && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function dd(e) {
  if (e && gl(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (Is.icon) return Is.icon(e);
  if (e === null) return null;
  if (e && gl(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == "string") return { prefix: "fas", iconName: e };
}
function Ca(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? kr({}, e, t)
    : {};
}
var pd = {
    border: !1,
    className: "",
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: null,
    transform: null,
    swapOpacity: !1,
  },
  Xu = Ws.forwardRef(function (e, t) {
    var n = Lt(Lt({}, pd), e),
      r = n.icon,
      o = n.mask,
      i = n.symbol,
      l = n.className,
      a = n.title,
      s = n.titleId,
      u = n.maskId,
      f = dd(r),
      c = Ca("classes", [].concat(zs(Hw(n)), zs((l || "").split(" ")))),
      p = Ca(
        "transform",
        typeof n.transform == "string" ? Is.transform(n.transform) : n.transform
      ),
      S = Ca("mask", dd(o)),
      w = Mw(
        f,
        Lt(
          Lt(Lt(Lt({}, c), p), S),
          {},
          { symbol: i, title: a, titleId: s, maskId: u }
        )
      );
    if (!w) return Xw("Could not find icon", f), null;
    var x = w.abstract,
      C = { ref: t };
    return (
      Object.keys(n).forEach(function (h) {
        pd.hasOwnProperty(h) || (C[h] = n[h]);
      }),
      Gw(x[0], C)
    );
  });
Xu.displayName = "FontAwesomeIcon";
Xu.propTypes = {
  beat: Q.bool,
  border: Q.bool,
  beatFade: Q.bool,
  bounce: Q.bool,
  className: Q.string,
  fade: Q.bool,
  flash: Q.bool,
  mask: Q.oneOfType([Q.object, Q.array, Q.string]),
  maskId: Q.string,
  fixedWidth: Q.bool,
  inverse: Q.bool,
  flip: Q.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: Q.oneOfType([Q.object, Q.array, Q.string]),
  listItem: Q.bool,
  pull: Q.oneOf(["right", "left"]),
  pulse: Q.bool,
  rotation: Q.oneOf([0, 90, 180, 270]),
  shake: Q.bool,
  size: Q.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: Q.bool,
  spinPulse: Q.bool,
  spinReverse: Q.bool,
  symbol: Q.oneOfType([Q.bool, Q.string]),
  title: Q.string,
  titleId: Q.string,
  transform: Q.oneOfType([Q.string, Q.object]),
  swapOpacity: Q.bool,
};
var Gw = Pm.bind(null, Ws.createElement);
const Zw = {
    prefix: "fas",
    iconName: "magnifying-glass",
    icon: [
      512,
      512,
      [128269, "search"],
      "f002",
      "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z",
    ],
  },
  Jw = Zw,
  qw = ({ searchQuery: e, handleSearchChange: t }) =>
    U.jsx("div", {
      className: "navbar-container",
      children: U.jsxs("div", {
        className: "content",
        children: [
          U.jsxs("p", {
            children: [
              U.jsx("img", { src: "./assets/pokeball/5.svg", alt: "Pokeball" }),
              "Welcome to Pokedex",
            ],
          }),
          U.jsxs("div", {
            className: "search-container",
            children: [
              U.jsx(Xu, { icon: Jw, className: "search-icon" }),
              U.jsx("input", {
                type: "text",
                value: e,
                onChange: t,
                placeholder: "Search Pokémon...",
                className: "search-bar",
              }),
            ],
          }),
        ],
      }),
    }),
  eS = "_bodybackground_22s42_5",
  tS = "_container_22s42_19",
  nS = "_h2_22s42_37",
  rS = "_desc_22s42_49",
  oS = "_box_22s42_57",
  iS = "_h1_22s42_73",
  lS = "_pokemoninfo_22s42_89",
  aS = "_textbox_22s42_101",
  sS = "_info_left_22s42_109",
  uS = "_box_content_22s42_119",
  cS = "_info_right_22s42_141",
  fS = "_type_boxes_22s42_161",
  dS = "_box_img_22s42_171",
  pS = "_stats_img_22s42_181",
  hS = "_stats_22s42_181",
  De = {
    bodybackground: eS,
    container: tS,
    h2: nS,
    desc: rS,
    box: oS,
    h1: iS,
    pokemoninfo: lS,
    textbox: aS,
    info_left: sS,
    box_content: uS,
    info_right: cS,
    type_boxes: fS,
    box_img: dS,
    stats_img: pS,
    stats: hS,
  },
  mS = () => {
    const { id: e } = v0(),
      [t, n] = N.useState(null),
      [r, o] = N.useState(""),
      [i, l] = N.useState(""),
      [a, s] = N.useState(""),
      u = (p) => {
        let S = (p * 10) / 30.48;
        const w = Math.floor(S);
        (S = Math.floor((S - w) * 100)), l(S), s(w);
      },
      f = (p) => {
        let S = p / 10;
        o(S);
      },
      c = {
        grass: "green",
        poison: "#b97fc9",
        fire: "#fd7d24",
        ice: "#51c4e7",
        psychic: "#f366b9",
        bug: "#729f3f",
        normal: "#a4acaf",
        electric: "#eed535",
        ground: "linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)",
        fairy: "#fdb9e9",
        water: "#4592c4",
        fighting: "#d56723",
        rock: "#a38c21",
        steel: "#9eb7b8",
        flying:
          "linear-gradient(180deg, rgb(23,198,251) 50%, rgb(193,191,191) 50%)",
        dragon: "linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)",
      };
    return (
      N.useEffect(() => {
        (async () => {
          try {
            const w = await (
              await fetch(`https://pokeapi.co/api/v2/pokemon/${e}`)
            ).json();
            n(w);
            const x = w.height;
            f(w.weight), u(x);
          } catch (S) {
            console.error("Error fetching Pokemon details", S);
          }
        })();
      }, [e]),
      N.useEffect(
        () => (
          document.documentElement.classList.add(De.htmlbackground),
          document.body.classList.add(De.bodybackground),
          () => {
            document.documentElement.classList.remove(De.htmlbackground),
              document.body.classList.remove(De.bodybackground);
          }
        ),
        []
      ),
      t
        ? U.jsx("div", {
            className: De.container,
            children: U.jsxs("div", {
              className: De.box,
              children: [
                U.jsx("h1", {
                  className: De.h1,
                  children: t.name.toUpperCase(),
                }),
                U.jsxs("div", {
                  className: De.pokemoninfo,
                  children: [
                    U.jsx("div", {
                      className: De.box_img,
                      children: U.jsx("img", {
                        src: t.sprites.front_default,
                        width: "290rem",
                        alt: t.name,
                      }),
                    }),
                    U.jsxs("div", {
                      className: De.textbox,
                      children: [
                        U.jsxs("div", {
                          className: De.box_content,
                          children: [
                            U.jsxs("div", {
                              className: "info_left",
                              children: [
                                U.jsxs("h3", {
                                  children: [
                                    "Height ",
                                    U.jsx("br", {}),
                                    a,
                                    "'",
                                    i,
                                    '"',
                                  ],
                                }),
                                U.jsxs("h3", {
                                  children: [
                                    "Weight ",
                                    U.jsx("br", {}),
                                    " ",
                                    r,
                                    " Kgs",
                                  ],
                                }),
                              ],
                            }),
                            U.jsx("div", {
                              className: De.info_right,
                              children: U.jsxs("h3", {
                                children: [
                                  "Abilities ",
                                  U.jsx("br", {}),
                                  t.abilities
                                    .map((p) => p.ability.name)
                                    .join(", "),
                                ],
                              }),
                            }),
                          ],
                        }),
                        U.jsxs("div", {
                          className: "types",
                          children: [
                            U.jsx("h2", {
                              className: De.h2,
                              children: "Types",
                            }),
                            U.jsx("div", {
                              className: De.type_boxes,
                              children: t.types.map((p) => {
                                const S = p.type.name;
                                let w = c[S];
                                return (
                                  typeof w != "string" && (w = ""),
                                  U.jsx(
                                    "div",
                                    {
                                      style: {
                                        background:
                                          (w.includes("linear-gradient"), w),
                                        color: "white",
                                        height: "2rem",
                                        width: "7rem",
                                        textAlign: "center",
                                        fontSize: "1.3rem",
                                        borderRadius: "8%",
                                      },
                                      children: S,
                                    },
                                    S
                                  )
                                );
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                U.jsxs("div", {
                  className: De.stats_img,
                  children: [
                    U.jsx("div", {
                      className: De.stats,
                      children: U.jsx("ul", {
                        children: t.stats.map((p, S) =>
                          U.jsxs(
                            "li",
                            {
                              children: [
                                U.jsxs("strong", {
                                  children: [p.stat.name.toUpperCase(), ":"],
                                }),
                                " ",
                                U.jsx("strong", { children: p.base_stat }),
                              ],
                            },
                            S
                          )
                        ),
                      }),
                    }),
                    U.jsx("div", {
                      className: De.back_img,
                      children: U.jsx("img", {
                        src: t.sprites.back_default,
                        width: "259rem",
                        alt: t.name,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        : U.jsx("p", { children: "Loading..." })
    );
  },
  gS = "_toast_16u8r_3",
  vS = { toast: gS },
  yS = ({ message: e }) => U.jsx("div", { className: vS.toast, children: e });
function wS() {
  const [e, t] = N.useState([]),
    [n, r] = N.useState(!1),
    [o, i] = N.useState(!1),
    [l, a] = N.useState(!0),
    [s, u] = N.useState(""),
    f = (w) => {
      u(w.target.value);
    };
  N.useEffect(() => {
    const w = setTimeout(() => {
      r(!0);
    }, 1e3);
    return () => clearTimeout(w);
  }, []);
  const c = () => {
    o ||
      (new Audio(
        "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg"
      ).play(),
      i(!0));
  };
  N.useEffect(() => {
    const w = () => {
      c(), document.removeEventListener("click", w);
    };
    return (
      document.addEventListener("click", w),
      () => {
        document.removeEventListener("click", w);
      }
    );
  }, []);
  const p = e.filter((w) => w.name.toLowerCase().includes(s.toLowerCase())),
    S = D0(
      [
        {
          path: "/",
          element: U.jsxs(U.Fragment, {
            children: [
              U.jsx(qw, { searchQuery: s, handleSearchChange: f }),
              U.jsx(V0, {}),
              U.jsx("div", {
                className: "card-container",
                children: p.map((w) =>
                  U.jsx(
                    Y0,
                    {
                      id: w.id,
                      name: w.name,
                      sprite: w.sprites.front_default,
                      type: w.types.map((x) => x.type.name).join(", "),
                    },
                    w.id
                  )
                ),
              }),
            ],
          }),
        },
        { path: "/pokemon/:id", element: U.jsx(mS, {}) },
      ],
      { basename: "/pokedex-project" }
    );
  return (
    N.useEffect(() => {
      (async () => {
        const x = [];
        for (let C = 1; C <= 150; C++)
          try {
            const d = await (
              await fetch(`https://pokeapi.co/api/v2/pokemon/${C}`)
            ).json();
            x.push(d);
          } catch (h) {
            console.error("Error fetching data", h);
          }
        t(x), a(!1);
      })();
    }, []),
    l
      ? U.jsx("p", { children: "Loading...." })
      : U.jsxs(U.Fragment, {
          children: [
            n && U.jsx(yS, { message: "Welcome to the Pokémon World!" }),
            U.jsx(B0, { router: S }),
          ],
        })
  );
}
Pa.createRoot(document.getElementById("root")).render(U.jsx(wS, {}));
