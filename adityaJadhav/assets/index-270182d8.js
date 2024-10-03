(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
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
var Zu =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function $o(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function $u(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function r() {
      if (this instanceof r) {
        var i = [null];
        i.push.apply(i, arguments);
        var o = Function.bind.apply(e, i);
        return new o();
      }
      return e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(t).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(t, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
            enumerable: !0,
            get: function () {
              return t[r];
            },
          }
      );
    }),
    n
  );
}
var h2 = {},
  Xu = {
    get exports() {
      return h2;
    },
    set exports(t) {
      h2 = t;
    },
  },
  Fi = {},
  P = {},
  Gu = {
    get exports() {
      return P;
    },
    set exports(t) {
      P = t;
    },
  },
  ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var B2 = Symbol.for("react.element"),
  qu = Symbol.for("react.portal"),
  Ku = Symbol.for("react.fragment"),
  Qu = Symbol.for("react.strict_mode"),
  Ju = Symbol.for("react.profiler"),
  ec = Symbol.for("react.provider"),
  tc = Symbol.for("react.context"),
  nc = Symbol.for("react.forward_ref"),
  rc = Symbol.for("react.suspense"),
  ic = Symbol.for("react.memo"),
  oc = Symbol.for("react.lazy"),
  $7 = Symbol.iterator;
function sc(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = ($7 && t[$7]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Xo = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () { },
  enqueueReplaceState: function () { },
  enqueueSetState: function () { },
},
  Go = Object.assign,
  qo = {};
function u6(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = qo),
    (this.updater = n || Xo);
}
u6.prototype.isReactComponent = {};
u6.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
u6.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Ko() { }
Ko.prototype = u6.prototype;
function L4(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = qo),
    (this.updater = n || Xo);
}
var M4 = (L4.prototype = new Ko());
M4.constructor = L4;
Go(M4, u6.prototype);
M4.isPureReactComponent = !0;
var X7 = Array.isArray,
  Qo = Object.prototype.hasOwnProperty,
  O4 = { current: null },
  Jo = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(t, e, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (s = e.ref),
      e.key !== void 0 && (o = "" + e.key),
      e))
      Qo.call(e, r) && !Jo.hasOwnProperty(r) && (i[r] = e[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (t && t.defaultProps)
    for (r in ((l = t.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: B2,
    type: t,
    key: o,
    ref: s,
    props: i,
    _owner: O4.current,
  };
}
function lc(t, e) {
  return {
    $$typeof: B2,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function b4(t) {
  return typeof t == "object" && t !== null && t.$$typeof === B2;
}
function ac(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var G7 = /\/+/g;
function u8(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? ac("" + t.key)
    : e.toString(36);
}
function L0(t, e, n, r, i) {
  var o = typeof t;
  (o === "undefined" || o === "boolean") && (t = null);
  var s = !1;
  if (t === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case B2:
          case qu:
            s = !0;
        }
    }
  if (s)
    return (
      (s = t),
      (i = i(s)),
      (t = r === "" ? "." + u8(s, 0) : r),
      X7(i)
        ? ((n = ""),
          t != null && (n = t.replace(G7, "$&/") + "/"),
          L0(i, e, n, "", function (u) {
            return u;
          }))
        : i != null &&
        (b4(i) &&
          (i = lc(
            i,
            n +
            (!i.key || (s && s.key === i.key)
              ? ""
              : ("" + i.key).replace(G7, "$&/") + "/") +
            t
          )),
          e.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), X7(t)))
    for (var l = 0; l < t.length; l++) {
      o = t[l];
      var a = r + u8(o, l);
      s += L0(o, e, n, a, i);
    }
  else if (((a = sc(t)), typeof a == "function"))
    for (t = a.call(t), l = 0; !(o = t.next()).done;)
      (o = o.value), (a = r + u8(o, l++)), (s += L0(o, e, n, a, i));
  else if (o === "object")
    throw (
      ((e = String(t)),
        Error(
          "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
        ))
    );
  return s;
}
function q2(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    L0(t, r, "", "", function (o) {
      return e.call(n, o, i++);
    }),
    r
  );
}
function uc(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var R1 = { current: null },
  M0 = { transition: null },
  cc = {
    ReactCurrentDispatcher: R1,
    ReactCurrentBatchConfig: M0,
    ReactCurrentOwner: O4,
  };
ue.Children = {
  map: q2,
  forEach: function (t, e, n) {
    q2(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      q2(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      q2(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!b4(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
};
ue.Component = u6;
ue.Fragment = Ku;
ue.Profiler = Ju;
ue.PureComponent = L4;
ue.StrictMode = Qu;
ue.Suspense = rc;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cc;
ue.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
      t +
      "."
    );
  var r = Go({}, t.props),
    i = t.key,
    o = t.ref,
    s = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((o = e.ref), (s = O4.current)),
        e.key !== void 0 && (i = "" + e.key),
        t.type && t.type.defaultProps)
    )
      var l = t.type.defaultProps;
    for (a in e)
      Qo.call(e, a) &&
        !Jo.hasOwnProperty(a) &&
        (r[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: B2, type: t.type, key: i, ref: o, props: r, _owner: s };
};
ue.createContext = function (t) {
  return (
    (t = {
      $$typeof: tc,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: ec, _context: t }),
    (t.Consumer = t)
  );
};
ue.createElement = es;
ue.createFactory = function (t) {
  var e = es.bind(null, t);
  return (e.type = t), e;
};
ue.createRef = function () {
  return { current: null };
};
ue.forwardRef = function (t) {
  return { $$typeof: nc, render: t };
};
ue.isValidElement = b4;
ue.lazy = function (t) {
  return { $$typeof: oc, _payload: { _status: -1, _result: t }, _init: uc };
};
ue.memo = function (t, e) {
  return { $$typeof: ic, type: t, compare: e === void 0 ? null : e };
};
ue.startTransition = function (t) {
  var e = M0.transition;
  M0.transition = {};
  try {
    t();
  } finally {
    M0.transition = e;
  }
};
ue.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ue.useCallback = function (t, e) {
  return R1.current.useCallback(t, e);
};
ue.useContext = function (t) {
  return R1.current.useContext(t);
};
ue.useDebugValue = function () { };
ue.useDeferredValue = function (t) {
  return R1.current.useDeferredValue(t);
};
ue.useEffect = function (t, e) {
  return R1.current.useEffect(t, e);
};
ue.useId = function () {
  return R1.current.useId();
};
ue.useImperativeHandle = function (t, e, n) {
  return R1.current.useImperativeHandle(t, e, n);
};
ue.useInsertionEffect = function (t, e) {
  return R1.current.useInsertionEffect(t, e);
};
ue.useLayoutEffect = function (t, e) {
  return R1.current.useLayoutEffect(t, e);
};
ue.useMemo = function (t, e) {
  return R1.current.useMemo(t, e);
};
ue.useReducer = function (t, e, n) {
  return R1.current.useReducer(t, e, n);
};
ue.useRef = function (t) {
  return R1.current.useRef(t);
};
ue.useState = function (t) {
  return R1.current.useState(t);
};
ue.useSyncExternalStore = function (t, e, n) {
  return R1.current.useSyncExternalStore(t, e, n);
};
ue.useTransition = function () {
  return R1.current.useTransition();
};
ue.version = "18.2.0";
(function (t) {
  t.exports = ue;
})(Gu);
const ts = $o(P);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fc = P,
  dc = Symbol.for("react.element"),
  hc = Symbol.for("react.fragment"),
  Cc = Object.prototype.hasOwnProperty,
  pc = fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  mc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ns(t, e, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    e.key !== void 0 && (o = "" + e.key),
    e.ref !== void 0 && (s = e.ref);
  for (r in e) Cc.call(e, r) && !mc.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return {
    $$typeof: dc,
    type: t,
    key: o,
    ref: s,
    props: i,
    _owner: pc.current,
  };
}
Fi.Fragment = hc;
Fi.jsx = ns;
Fi.jsxs = ns;
(function (t) {
  t.exports = Fi;
})(Xu);
const V6 = h2.Fragment,
  C = h2.jsx,
  R = h2.jsxs;
var e5 = {},
  G0 = {},
  gc = {
    get exports() {
      return G0;
    },
    set exports(t) {
      G0 = t;
    },
  },
  ft = {},
  t5 = {},
  vc = {
    get exports() {
      return t5;
    },
    set exports(t) {
      t5 = t;
    },
  },
  rs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(b, N) {
    var S = b.length;
    b.push(N);
    e: for (; 0 < S;) {
      var F = (S - 1) >>> 1,
        Y = b[F];
      if (0 < i(Y, N)) (b[F] = N), (b[S] = Y), (S = F);
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var N = b[0],
      S = b.pop();
    if (S !== N) {
      b[0] = S;
      e: for (var F = 0, Y = b.length, ee = Y >>> 1; F < ee;) {
        var Q = 2 * (F + 1) - 1,
          Ce = b[Q],
          re = Q + 1,
          ve = b[re];
        if (0 > i(Ce, S))
          re < Y && 0 > i(ve, Ce)
            ? ((b[F] = ve), (b[re] = S), (F = re))
            : ((b[F] = Ce), (b[Q] = S), (F = Q));
        else if (re < Y && 0 > i(ve, S)) (b[F] = ve), (b[re] = S), (F = re);
        else break e;
      }
    }
    return N;
  }
  function i(b, N) {
    var S = b.sortIndex - N.sortIndex;
    return S !== 0 ? S : b.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    t.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    t.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    h = !1,
    v = !1,
    m = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function _(b) {
    for (var N = n(u); N !== null;) {
      if (N.callback === null) r(u);
      else if (N.startTime <= b)
        r(u), (N.sortIndex = N.expirationTime), e(a, N);
      else break;
      N = n(u);
    }
  }
  function y(b) {
    if (((m = !1), _(b), !v))
      if (n(a) !== null) (v = !0), H(x);
      else {
        var N = n(u);
        N !== null && E(y, N.startTime - b);
      }
  }
  function x(b, N) {
    (v = !1), m && ((m = !1), g(L), (L = -1)), (h = !0);
    var S = d;
    try {
      for (
        _(N), f = n(a);
        f !== null && (!(f.expirationTime > N) || (b && !W()));

      ) {
        var F = f.callback;
        if (typeof F == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var Y = F(f.expirationTime <= N);
          (N = t.unstable_now()),
            typeof Y == "function" ? (f.callback = Y) : f === n(a) && r(a),
            _(N);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var ee = !0;
      else {
        var Q = n(u);
        Q !== null && E(y, Q.startTime - N), (ee = !1);
      }
      return ee;
    } finally {
      (f = null), (d = S), (h = !1);
    }
  }
  var T = !1,
    w = null,
    L = -1,
    M = 5,
    O = -1;
  function W() {
    return !(t.unstable_now() - O < M);
  }
  function I() {
    if (w !== null) {
      var b = t.unstable_now();
      O = b;
      var N = !0;
      try {
        N = w(!0, b);
      } finally {
        N ? $() : ((T = !1), (w = null));
      }
    } else T = !1;
  }
  var $;
  if (typeof p == "function")
    $ = function () {
      p(I);
    };
  else if (typeof MessageChannel < "u") {
    var D = new MessageChannel(),
      A = D.port2;
    (D.port1.onmessage = I),
      ($ = function () {
        A.postMessage(null);
      });
  } else
    $ = function () {
      k(I, 0);
    };
  function H(b) {
    (w = b), T || ((T = !0), $());
  }
  function E(b, N) {
    L = k(function () {
      b(t.unstable_now());
    }, N);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      v || h || ((v = !0), H(x));
    }),
    (t.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        )
        : (M = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (t.unstable_next = function (b) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = d;
      }
      var S = d;
      d = N;
      try {
        return b();
      } finally {
        d = S;
      }
    }),
    (t.unstable_pauseExecution = function () { }),
    (t.unstable_requestPaint = function () { }),
    (t.unstable_runWithPriority = function (b, N) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var S = d;
      d = b;
      try {
        return N();
      } finally {
        d = S;
      }
    }),
    (t.unstable_scheduleCallback = function (b, N, S) {
      var F = t.unstable_now();
      switch (
      (typeof S == "object" && S !== null
        ? ((S = S.delay), (S = typeof S == "number" && 0 < S ? F + S : F))
        : (S = F),
        b)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = S + Y),
        (b = {
          id: c++,
          callback: N,
          priorityLevel: b,
          startTime: S,
          expirationTime: Y,
          sortIndex: -1,
        }),
        S > F
          ? ((b.sortIndex = S),
            e(u, b),
            n(a) === null &&
            b === n(u) &&
            (m ? (g(L), (L = -1)) : (m = !0), E(y, S - F)))
          : ((b.sortIndex = Y), e(a, b), v || h || ((v = !0), H(x))),
        b
      );
    }),
    (t.unstable_shouldYield = W),
    (t.unstable_wrapCallback = function (b) {
      var N = d;
      return function () {
        var S = d;
        d = N;
        try {
          return b.apply(this, arguments);
        } finally {
          d = S;
        }
      };
    });
})(rs);
(function (t) {
  t.exports = rs;
})(vc);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var is = P,
  ut = t5;
function z(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var os = new Set(),
  C2 = {};
function ir(t, e) {
  $r(t, e), $r(t + "Capture", e);
}
function $r(t, e) {
  for (C2[t] = e, t = 0; t < e.length; t++) os.add(e[t]);
}
var M3 = !(
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
),
  n5 = Object.prototype.hasOwnProperty,
  yc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  q7 = {},
  K7 = {};
function _c(t) {
  return n5.call(K7, t)
    ? !0
    : n5.call(q7, t)
      ? !1
      : yc.test(t)
        ? (K7[t] = !0)
        : ((q7[t] = !0), !1);
}
function wc(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function Sc(t, e, n, r) {
  if (e === null || typeof e > "u" || wc(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function A1(t, e, n, r, i, o, s) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var f1 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    f1[t] = new A1(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  f1[e] = new A1(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  f1[t] = new A1(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  f1[t] = new A1(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    f1[t] = new A1(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  f1[t] = new A1(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  f1[t] = new A1(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  f1[t] = new A1(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  f1[t] = new A1(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var P4 = /[\-:]([a-z])/g;
function N4(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(P4, N4);
    f1[e] = new A1(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(P4, N4);
    f1[e] = new A1(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(P4, N4);
  f1[e] = new A1(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  f1[t] = new A1(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
f1.xlinkHref = new A1(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
  f1[t] = new A1(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function V4(t, e, n, r) {
  var i = f1.hasOwnProperty(e) ? f1[e] : null;
  (i !== null
    ? i.type !== 0
    : r ||
    !(2 < e.length) ||
    (e[0] !== "o" && e[0] !== "O") ||
    (e[1] !== "n" && e[1] !== "N")) &&
    (Sc(e, n, i, r) && (n = null),
      r || i === null
        ? _c(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
        : i.mustUseProperty
          ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
          : ((e = i.attributeName),
            (r = i.attributeNamespace),
            n === null
              ? t.removeAttribute(e)
              : ((i = i.type),
                (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
                r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var R3 = is.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  K2 = Symbol.for("react.element"),
  gr = Symbol.for("react.portal"),
  vr = Symbol.for("react.fragment"),
  R4 = Symbol.for("react.strict_mode"),
  r5 = Symbol.for("react.profiler"),
  ss = Symbol.for("react.provider"),
  ls = Symbol.for("react.context"),
  A4 = Symbol.for("react.forward_ref"),
  i5 = Symbol.for("react.suspense"),
  o5 = Symbol.for("react.suspense_list"),
  D4 = Symbol.for("react.memo"),
  B3 = Symbol.for("react.lazy"),
  as = Symbol.for("react.offscreen"),
  Q7 = Symbol.iterator;
function w6(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Q7 && t[Q7]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var be = Object.assign,
  c8;
function R6(t) {
  if (c8 === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      c8 = (e && e[1]) || "";
    }
  return (
    `
` +
    c8 +
    t
  );
}
var f8 = !1;
function d8(t, e) {
  if (!t || f8) return "";
  f8 = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
          Object.defineProperty(e.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      t();
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
                  t.displayName &&
                  a.includes("<anonymous>") &&
                  (a = a.replace("<anonymous>", t.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (f8 = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? R6(t) : "";
}
function xc(t) {
  switch (t.tag) {
    case 5:
      return R6(t.type);
    case 16:
      return R6("Lazy");
    case 13:
      return R6("Suspense");
    case 19:
      return R6("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = d8(t.type, !1)), t;
    case 11:
      return (t = d8(t.type.render, !1)), t;
    case 1:
      return (t = d8(t.type, !0)), t;
    default:
      return "";
  }
}
function s5(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case vr:
      return "Fragment";
    case gr:
      return "Portal";
    case r5:
      return "Profiler";
    case R4:
      return "StrictMode";
    case i5:
      return "Suspense";
    case o5:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case ls:
        return (t.displayName || "Context") + ".Consumer";
      case ss:
        return (t._context.displayName || "Context") + ".Provider";
      case A4:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
          ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case D4:
        return (
          (e = t.displayName || null), e !== null ? e : s5(t.type) || "Memo"
        );
      case B3:
        (e = t._payload), (t = t._init);
        try {
          return s5(t(e));
        } catch { }
    }
  return null;
}
function kc(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return s5(e);
    case 8:
      return e === R4 ? "StrictMode" : "Mode";
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
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function dn(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function us(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function Ec(t) {
  var e = us(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Q2(t) {
  t._valueTracker || (t._valueTracker = Ec(t));
}
function cs(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = us(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function q0(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function l5(t, e) {
  var n = e.checked;
  return be({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function J7(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = dn(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function fs(t, e) {
  (e = e.checked), e != null && V4(t, "checked", e, !1);
}
function a5(t, e) {
  fs(t, e);
  var n = dn(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? u5(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && u5(t, e.type, dn(e.defaultValue)),
    e.checked == null &&
    e.defaultChecked != null &&
    (t.defaultChecked = !!e.defaultChecked);
}
function e9(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function u5(t, e, n) {
  (e !== "number" || q0(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var A6 = Array.isArray;
function Ar(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + dn(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        (t[i].selected = !0), r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function c5(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(z(91));
  return be({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function t9(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(z(92));
      if (A6(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: dn(n) };
}
function ds(t, e) {
  var n = dn(e.value),
    r = dn(e.defaultValue);
  n != null &&
    ((n = "" + n),
      n !== t.value && (t.value = n),
      e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r);
}
function n9(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function hs(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function f5(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? hs(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : t;
}
var J2,
  Cs = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
        MSApp.execUnsafeLocalFunction(function () {
          return t(e, n, r, i);
        });
      }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        J2 = J2 || document.createElement("div"),
        J2.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
        e = J2.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild;) t.appendChild(e.firstChild);
    }
  });
function p2(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Y6 = {
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
  Tc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Y6).forEach(function (t) {
  Tc.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Y6[e] = Y6[t]);
  });
});
function ps(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Y6.hasOwnProperty(t) && Y6[t])
      ? ("" + e).trim()
      : e + "px";
}
function ms(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = ps(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : (t[n] = i);
    }
}
var Lc = be(
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
function d5(t, e) {
  if (e) {
    if (Lc[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(z(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(z(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(z(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(z(62));
  }
}
function h5(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
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
var C5 = null;
function I4(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var p5 = null,
  Dr = null,
  Ir = null;
function r9(t) {
  if ((t = U2(t))) {
    if (typeof p5 != "function") throw Error(z(280));
    var e = t.stateNode;
    e && ((e = Ui(e)), p5(t.stateNode, t.type, e));
  }
}
function gs(t) {
  Dr ? (Ir ? Ir.push(t) : (Ir = [t])) : (Dr = t);
}
function vs() {
  if (Dr) {
    var t = Dr,
      e = Ir;
    if (((Ir = Dr = null), r9(t), e)) for (t = 0; t < e.length; t++) r9(e[t]);
  }
}
function ys(t, e) {
  return t(e);
}
function _s() { }
var h8 = !1;
function ws(t, e, n) {
  if (h8) return t(e, n);
  h8 = !0;
  try {
    return ys(t, e, n);
  } finally {
    (h8 = !1), (Dr !== null || Ir !== null) && (_s(), vs());
  }
}
function m2(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = Ui(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
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
        ((t = t.type),
          (r = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
        (t = !r);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(z(231, e, typeof n));
  return n;
}
var m5 = !1;
if (M3)
  try {
    var S6 = {};
    Object.defineProperty(S6, "passive", {
      get: function () {
        m5 = !0;
      },
    }),
      window.addEventListener("test", S6, S6),
      window.removeEventListener("test", S6, S6);
  } catch {
    m5 = !1;
  }
function Mc(t, e, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Z6 = !1,
  K0 = null,
  Q0 = !1,
  g5 = null,
  Oc = {
    onError: function (t) {
      (Z6 = !0), (K0 = t);
    },
  };
function bc(t, e, n, r, i, o, s, l, a) {
  (Z6 = !1), (K0 = null), Mc.apply(Oc, arguments);
}
function Pc(t, e, n, r, i, o, s, l, a) {
  if ((bc.apply(this, arguments), Z6)) {
    if (Z6) {
      var u = K0;
      (Z6 = !1), (K0 = null);
    } else throw Error(z(198));
    Q0 || ((Q0 = !0), (g5 = u));
  }
}
function or(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return;) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function Ss(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function i9(t) {
  if (or(t) !== t) throw Error(z(188));
}
function Nc(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = or(t)), e === null)) throw Error(z(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ;) {
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
      for (o = i.child; o;) {
        if (o === n) return i9(i), t;
        if (o === r) return i9(i), e;
        o = o.sibling;
      }
      throw Error(z(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l;) {
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
        for (l = o.child; l;) {
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
        if (!s) throw Error(z(189));
      }
    }
    if (n.alternate !== r) throw Error(z(190));
  }
  if (n.tag !== 3) throw Error(z(188));
  return n.stateNode.current === n ? t : e;
}
function xs(t) {
  return (t = Nc(t)), t !== null ? ks(t) : null;
}
function ks(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null;) {
    var e = ks(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Es = ut.unstable_scheduleCallback,
  o9 = ut.unstable_cancelCallback,
  Vc = ut.unstable_shouldYield,
  Rc = ut.unstable_requestPaint,
  ze = ut.unstable_now,
  Ac = ut.unstable_getCurrentPriorityLevel,
  z4 = ut.unstable_ImmediatePriority,
  Ts = ut.unstable_UserBlockingPriority,
  J0 = ut.unstable_NormalPriority,
  Dc = ut.unstable_LowPriority,
  Ls = ut.unstable_IdlePriority,
  Hi = null,
  a3 = null;
function Ic(t) {
  if (a3 && typeof a3.onCommitFiberRoot == "function")
    try {
      a3.onCommitFiberRoot(Hi, t, void 0, (t.current.flags & 128) === 128);
    } catch { }
}
var Ut = Math.clz32 ? Math.clz32 : Hc,
  zc = Math.log,
  Fc = Math.LN2;
function Hc(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((zc(t) / Fc) | 0)) | 0;
}
var e0 = 64,
  t0 = 4194304;
function D6(t) {
  switch (t & -t) {
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
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function ei(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    o = t.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = D6(l)) : ((o &= s), o !== 0 && (r = D6(o)));
  } else (s = n & ~i), s !== 0 ? (r = D6(s)) : o !== 0 && (r = D6(o));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (o = e & -e), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e;)
      (n = 31 - Ut(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
  return r;
}
function Bc(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
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
      return e + 5e3;
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
function Wc(t, e) {
  for (
    var n = t.suspendedLanes,
    r = t.pingedLanes,
    i = t.expirationTimes,
    o = t.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Ut(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = Bc(l, e))
      : a <= e && (t.expiredLanes |= l),
      (o &= ~l);
  }
}
function v5(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function Ms() {
  var t = e0;
  return (e0 <<= 1), !(e0 & 4194240) && (e0 = 64), t;
}
function C8(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function W2(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - Ut(e)),
    (t[e] = n);
}
function jc(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n;) {
    var i = 31 - Ut(n),
      o = 1 << i;
    (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~o);
  }
}
function F4(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n;) {
    var r = 31 - Ut(n),
      i = 1 << r;
    (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
  }
}
var he = 0;
function Os(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var bs,
  H4,
  Ps,
  Ns,
  Vs,
  y5 = !1,
  n0 = [],
  en = null,
  tn = null,
  nn = null,
  g2 = new Map(),
  v2 = new Map(),
  j3 = [],
  Uc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function s9(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      en = null;
      break;
    case "dragenter":
    case "dragleave":
      tn = null;
      break;
    case "mouseover":
    case "mouseout":
      nn = null;
      break;
    case "pointerover":
    case "pointerout":
      g2.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      v2.delete(e.pointerId);
  }
}
function x6(t, e, n, r, i, o) {
  return t === null || t.nativeEvent !== o
    ? ((t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: o,
      targetContainers: [i],
    }),
      e !== null && ((e = U2(e)), e !== null && H4(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function Yc(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return (en = x6(en, t, e, n, r, i)), !0;
    case "dragenter":
      return (tn = x6(tn, t, e, n, r, i)), !0;
    case "mouseover":
      return (nn = x6(nn, t, e, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return g2.set(o, x6(g2.get(o) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), v2.set(o, x6(v2.get(o) || null, t, e, n, r, i)), !0
      );
  }
  return !1;
}
function Rs(t) {
  var e = Vn(t.target);
  if (e !== null) {
    var n = or(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = Ss(n)), e !== null)) {
          (t.blockedOn = e),
            Vs(t.priority, function () {
              Ps(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function O0(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length;) {
    var n = _5(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (C5 = r), n.target.dispatchEvent(r), (C5 = null);
    } else return (e = U2(n)), e !== null && H4(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function l9(t, e, n) {
  O0(t) && n.delete(e);
}
function Zc() {
  (y5 = !1),
    en !== null && O0(en) && (en = null),
    tn !== null && O0(tn) && (tn = null),
    nn !== null && O0(nn) && (nn = null),
    g2.forEach(l9),
    v2.forEach(l9);
}
function k6(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
      y5 ||
      ((y5 = !0),
        ut.unstable_scheduleCallback(ut.unstable_NormalPriority, Zc)));
}
function y2(t) {
  function e(i) {
    return k6(i, t);
  }
  if (0 < n0.length) {
    k6(n0[0], t);
    for (var n = 1; n < n0.length; n++) {
      var r = n0[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    en !== null && k6(en, t),
    tn !== null && k6(tn, t),
    nn !== null && k6(nn, t),
    g2.forEach(e),
    v2.forEach(e),
    n = 0;
    n < j3.length;
    n++
  )
    (r = j3[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < j3.length && ((n = j3[0]), n.blockedOn === null);)
    Rs(n), n.blockedOn === null && j3.shift();
}
var zr = R3.ReactCurrentBatchConfig,
  ti = !0;
function $c(t, e, n, r) {
  var i = he,
    o = zr.transition;
  zr.transition = null;
  try {
    (he = 1), B4(t, e, n, r);
  } finally {
    (he = i), (zr.transition = o);
  }
}
function Xc(t, e, n, r) {
  var i = he,
    o = zr.transition;
  zr.transition = null;
  try {
    (he = 4), B4(t, e, n, r);
  } finally {
    (he = i), (zr.transition = o);
  }
}
function B4(t, e, n, r) {
  if (ti) {
    var i = _5(t, e, n, r);
    if (i === null) k8(t, e, r, ni, n), s9(t, r);
    else if (Yc(i, t, e, n, r)) r.stopPropagation();
    else if ((s9(t, r), e & 4 && -1 < Uc.indexOf(t))) {
      for (; i !== null;) {
        var o = U2(i);
        if (
          (o !== null && bs(o),
            (o = _5(t, e, n, r)),
            o === null && k8(t, e, r, ni, n),
            o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else k8(t, e, r, null, n);
  }
}
var ni = null;
function _5(t, e, n, r) {
  if (((ni = null), (t = I4(r)), (t = Vn(t)), t !== null))
    if (((e = or(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = Ss(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (ni = t), null;
}
function As(t) {
  switch (t) {
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
      switch (Ac()) {
        case z4:
          return 1;
        case Ts:
          return 4;
        case J0:
        case Dc:
          return 16;
        case Ls:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Y3 = null,
  W4 = null,
  b0 = null;
function Ds() {
  if (b0) return b0;
  var t,
    e = W4,
    n = e.length,
    r,
    i = "value" in Y3 ? Y3.value : Y3.textContent,
    o = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var s = n - t;
  for (r = 1; r <= s && e[n - r] === i[o - r]; r++);
  return (b0 = i.slice(t, 1 < r ? 1 - r : void 0));
}
function P0(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function r0() {
  return !0;
}
function a9() {
  return !1;
}
function dt(t) {
  function e(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in t)
      t.hasOwnProperty(l) && ((n = t[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? r0
        : a9),
      (this.isPropagationStopped = a9),
      this
    );
  }
  return (
    be(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = r0));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = r0));
      },
      persist: function () { },
      isPersistent: r0,
    }),
    e
  );
}
var c6 = {
  eventPhase: 0,
  bubbles: 0,
  cancelable: 0,
  timeStamp: function (t) {
    return t.timeStamp || Date.now();
  },
  defaultPrevented: 0,
  isTrusted: 0,
},
  j4 = dt(c6),
  j2 = be({}, c6, { view: 0, detail: 0 }),
  Gc = dt(j2),
  p8,
  m8,
  E6,
  Bi = be({}, j2, {
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
    getModifierState: U4,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== E6 &&
          (E6 && t.type === "mousemove"
            ? ((p8 = t.screenX - E6.screenX), (m8 = t.screenY - E6.screenY))
            : (m8 = p8 = 0),
            (E6 = t)),
          p8);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : m8;
    },
  }),
  u9 = dt(Bi),
  qc = be({}, Bi, { dataTransfer: 0 }),
  Kc = dt(qc),
  Qc = be({}, j2, { relatedTarget: 0 }),
  g8 = dt(Qc),
  Jc = be({}, c6, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ef = dt(Jc),
  tf = be({}, c6, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  nf = dt(tf),
  rf = be({}, c6, { data: 0 }),
  c9 = dt(rf),
  of = {
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
  sf = {
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
  lf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function af(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = lf[t]) ? !!e[t] : !1;
}
function U4() {
  return af;
}
var uf = be({}, j2, {
  key: function (t) {
    if (t.key) {
      var e = of[t.key] || t.key;
      if (e !== "Unidentified") return e;
    }
    return t.type === "keypress"
      ? ((t = P0(t)), t === 13 ? "Enter" : String.fromCharCode(t))
      : t.type === "keydown" || t.type === "keyup"
        ? sf[t.keyCode] || "Unidentified"
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
  getModifierState: U4,
  charCode: function (t) {
    return t.type === "keypress" ? P0(t) : 0;
  },
  keyCode: function (t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  },
  which: function (t) {
    return t.type === "keypress"
      ? P0(t)
      : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
  },
}),
  cf = dt(uf),
  ff = be({}, Bi, {
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
  f9 = dt(ff),
  df = be({}, j2, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: U4,
  }),
  hf = dt(df),
  Cf = be({}, c6, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pf = dt(Cf),
  mf = be({}, Bi, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
            ? -t.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  gf = dt(mf),
  vf = [9, 13, 27, 32],
  Y4 = M3 && "CompositionEvent" in window,
  $6 = null;
M3 && "documentMode" in document && ($6 = document.documentMode);
var yf = M3 && "TextEvent" in window && !$6,
  Is = M3 && (!Y4 || ($6 && 8 < $6 && 11 >= $6)),
  d9 = String.fromCharCode(32),
  h9 = !1;
function zs(t, e) {
  switch (t) {
    case "keyup":
      return vf.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Fs(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var yr = !1;
function _f(t, e) {
  switch (t) {
    case "compositionend":
      return Fs(e);
    case "keypress":
      return e.which !== 32 ? null : ((h9 = !0), d9);
    case "textInput":
      return (t = e.data), t === d9 && h9 ? null : t;
    default:
      return null;
  }
}
function wf(t, e) {
  if (yr)
    return t === "compositionend" || (!Y4 && zs(t, e))
      ? ((t = Ds()), (b0 = W4 = Y3 = null), (yr = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Is && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Sf = {
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
function C9(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!Sf[t.type] : e === "textarea";
}
function Hs(t, e, n, r) {
  gs(r),
    (e = ri(e, "onChange")),
    0 < e.length &&
    ((n = new j4("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e }));
}
var X6 = null,
  _2 = null;
function xf(t) {
  Ks(t, 0);
}
function Wi(t) {
  var e = Sr(t);
  if (cs(e)) return t;
}
function kf(t, e) {
  if (t === "change") return e;
}
var Bs = !1;
if (M3) {
  var v8;
  if (M3) {
    var y8 = "oninput" in document;
    if (!y8) {
      var p9 = document.createElement("div");
      p9.setAttribute("oninput", "return;"),
        (y8 = typeof p9.oninput == "function");
    }
    v8 = y8;
  } else v8 = !1;
  Bs = v8 && (!document.documentMode || 9 < document.documentMode);
}
function m9() {
  X6 && (X6.detachEvent("onpropertychange", Ws), (_2 = X6 = null));
}
function Ws(t) {
  if (t.propertyName === "value" && Wi(_2)) {
    var e = [];
    Hs(e, _2, t, I4(t)), ws(xf, e);
  }
}
function Ef(t, e, n) {
  t === "focusin"
    ? (m9(), (X6 = e), (_2 = n), X6.attachEvent("onpropertychange", Ws))
    : t === "focusout" && m9();
}
function Tf(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return Wi(_2);
}
function Lf(t, e) {
  if (t === "click") return Wi(e);
}
function Mf(t, e) {
  if (t === "input" || t === "change") return Wi(e);
}
function Of(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Gt = typeof Object.is == "function" ? Object.is : Of;
function w2(t, e) {
  if (Gt(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!n5.call(e, i) || !Gt(t[i], e[i])) return !1;
  }
  return !0;
}
function g9(t) {
  for (; t && t.firstChild;) t = t.firstChild;
  return t;
}
function v9(t, e) {
  var n = g9(t);
  t = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = g9(n);
  }
}
function js(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
          ? js(t, e.parentNode)
          : "contains" in t
            ? t.contains(e)
            : t.compareDocumentPosition
              ? !!(t.compareDocumentPosition(e) & 16)
              : !1
    : !1;
}
function Us() {
  for (var t = window, e = q0(); e instanceof t.HTMLIFrameElement;) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = q0(t.document);
  }
  return e;
}
function Z4(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function bf(t) {
  var e = Us(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    js(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Z4(n)) {
      if (
        ((e = r.start),
          (t = r.end),
          t === void 0 && (t = e),
          "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
          t.getSelection)
      ) {
        t = t.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !t.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = v9(n, o));
        var s = v9(n, r);
        i &&
          s &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== s.node ||
            t.focusOffset !== s.offset) &&
          ((e = e.createRange()),
            e.setStart(i.node, i.offset),
            t.removeAllRanges(),
            o > r
              ? (t.addRange(e), t.extend(s.node, s.offset))
              : (e.setEnd(s.node, s.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode);)
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var Pf = M3 && "documentMode" in document && 11 >= document.documentMode,
  _r = null,
  w5 = null,
  G6 = null,
  S5 = !1;
function y9(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  S5 ||
    _r == null ||
    _r !== q0(r) ||
    ((r = _r),
      "selectionStart" in r && Z4(r)
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
      (G6 && w2(G6, r)) ||
      ((G6 = r),
        (r = ri(w5, "onSelect")),
        0 < r.length &&
        ((e = new j4("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: r }),
          (e.target = _r))));
}
function i0(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var wr = {
  animationend: i0("Animation", "AnimationEnd"),
  animationiteration: i0("Animation", "AnimationIteration"),
  animationstart: i0("Animation", "AnimationStart"),
  transitionend: i0("Transition", "TransitionEnd"),
},
  _8 = {},
  Ys = {};
M3 &&
  ((Ys = document.createElement("div").style),
    "AnimationEvent" in window ||
    (delete wr.animationend.animation,
      delete wr.animationiteration.animation,
      delete wr.animationstart.animation),
    "TransitionEvent" in window || delete wr.transitionend.transition);
function ji(t) {
  if (_8[t]) return _8[t];
  if (!wr[t]) return t;
  var e = wr[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in Ys) return (_8[t] = e[n]);
  return t;
}
var Zs = ji("animationend"),
  $s = ji("animationiteration"),
  Xs = ji("animationstart"),
  Gs = ji("transitionend"),
  qs = new Map(),
  _9 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function gn(t, e) {
  qs.set(t, e), ir(e, [t]);
}
for (var w8 = 0; w8 < _9.length; w8++) {
  var S8 = _9[w8],
    Nf = S8.toLowerCase(),
    Vf = S8[0].toUpperCase() + S8.slice(1);
  gn(Nf, "on" + Vf);
}
gn(Zs, "onAnimationEnd");
gn($s, "onAnimationIteration");
gn(Xs, "onAnimationStart");
gn("dblclick", "onDoubleClick");
gn("focusin", "onFocus");
gn("focusout", "onBlur");
gn(Gs, "onTransitionEnd");
$r("onMouseEnter", ["mouseout", "mouseover"]);
$r("onMouseLeave", ["mouseout", "mouseover"]);
$r("onPointerEnter", ["pointerout", "pointerover"]);
$r("onPointerLeave", ["pointerout", "pointerover"]);
ir(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
ir(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ir(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
ir(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
ir(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var I6 =
  "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ),
  Rf = new Set("cancel close invalid load scroll toggle".split(" ").concat(I6));
function w9(t, e, n) {
  var r = t.type || "unknown-event";
  (t.currentTarget = n), Pc(r, e, void 0, t), (t.currentTarget = null);
}
function Ks(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (e)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          w9(i, l, u), (o = a);
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
          w9(i, l, u), (o = a);
        }
    }
  }
  if (Q0) throw ((t = g5), (Q0 = !1), (g5 = null), t);
}
function ye(t, e) {
  var n = e[L5];
  n === void 0 && (n = e[L5] = new Set());
  var r = t + "__bubble";
  n.has(r) || (Qs(e, t, 2, !1), n.add(r));
}
function x8(t, e, n) {
  var r = 0;
  e && (r |= 4), Qs(n, t, r, e);
}
var o0 = "_reactListening" + Math.random().toString(36).slice(2);
function S2(t) {
  if (!t[o0]) {
    (t[o0] = !0),
      os.forEach(function (n) {
        n !== "selectionchange" && (Rf.has(n) || x8(n, !1, t), x8(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[o0] || ((e[o0] = !0), x8("selectionchange", !1, e));
  }
}
function Qs(t, e, n, r) {
  switch (As(e)) {
    case 1:
      var i = $c;
      break;
    case 4:
      i = Xc;
      break;
    default:
      i = B4;
  }
  (n = i.bind(null, e, n, t)),
    (i = void 0),
    !m5 ||
    (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
    (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
        ? t.addEventListener(e, n, { passive: i })
        : t.addEventListener(e, n, !1);
}
function k8(t, e, n, r, i) {
  var o = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (; ;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null;) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
                a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null;) {
          if (((s = Vn(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  ws(function () {
    var u = o,
      c = I4(n),
      f = [];
    e: {
      var d = qs.get(t);
      if (d !== void 0) {
        var h = j4,
          v = t;
        switch (t) {
          case "keypress":
            if (P0(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = cf;
            break;
          case "focusin":
            (v = "focus"), (h = g8);
            break;
          case "focusout":
            (v = "blur"), (h = g8);
            break;
          case "beforeblur":
          case "afterblur":
            h = g8;
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
            h = u9;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = Kc;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = hf;
            break;
          case Zs:
          case $s:
          case Xs:
            h = ef;
            break;
          case Gs:
            h = pf;
            break;
          case "scroll":
            h = Gc;
            break;
          case "wheel":
            h = gf;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = nf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = f9;
        }
        var m = (e & 4) !== 0,
          k = !m && t === "scroll",
          g = m ? (d !== null ? d + "Capture" : null) : d;
        m = [];
        for (var p = u, _; p !== null;) {
          _ = p;
          var y = _.stateNode;
          if (
            (_.tag === 5 &&
              y !== null &&
              ((_ = y),
                g !== null && ((y = m2(p, g)), y != null && m.push(x2(p, y, _)))),
              k)
          )
            break;
          p = p.return;
        }
        0 < m.length &&
          ((d = new h(d, v, null, n, c)), f.push({ event: d, listeners: m }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((d = t === "mouseover" || t === "pointerover"),
            (h = t === "mouseout" || t === "pointerout"),
            d &&
            n !== C5 &&
            (v = n.relatedTarget || n.fromElement) &&
            (Vn(v) || v[O3]))
        )
          break e;
        if (
          (h || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
            h
              ? ((v = n.relatedTarget || n.toElement),
                (h = u),
                (v = v ? Vn(v) : null),
                v !== null &&
                ((k = or(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
              : ((h = null), (v = u)),
            h !== v)
        ) {
          if (
            ((m = u9),
              (y = "onMouseLeave"),
              (g = "onMouseEnter"),
              (p = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
              ((m = f9),
                (y = "onPointerLeave"),
                (g = "onPointerEnter"),
                (p = "pointer")),
              (k = h == null ? d : Sr(h)),
              (_ = v == null ? d : Sr(v)),
              (d = new m(y, p + "leave", h, n, c)),
              (d.target = k),
              (d.relatedTarget = _),
              (y = null),
              Vn(c) === u &&
              ((m = new m(g, p + "enter", v, n, c)),
                (m.target = _),
                (m.relatedTarget = k),
                (y = m)),
              (k = y),
              h && v)
          )
            t: {
              for (m = h, g = v, p = 0, _ = m; _; _ = fr(_)) p++;
              for (_ = 0, y = g; y; y = fr(y)) _++;
              for (; 0 < p - _;) (m = fr(m)), p--;
              for (; 0 < _ - p;) (g = fr(g)), _--;
              for (; p--;) {
                if (m === g || (g !== null && m === g.alternate)) break t;
                (m = fr(m)), (g = fr(g));
              }
              m = null;
            }
          else m = null;
          h !== null && S9(f, d, h, m, !1),
            v !== null && k !== null && S9(f, k, v, m, !0);
        }
      }
      e: {
        if (
          ((d = u ? Sr(u) : window),
            (h = d.nodeName && d.nodeName.toLowerCase()),
            h === "select" || (h === "input" && d.type === "file"))
        )
          var x = kf;
        else if (C9(d))
          if (Bs) x = Mf;
          else {
            x = Tf;
            var T = Ef;
          }
        else
          (h = d.nodeName) &&
            h.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (x = Lf);
        if (x && (x = x(t, u))) {
          Hs(f, x, n, c);
          break e;
        }
        T && T(t, d, u),
          t === "focusout" &&
          (T = d._wrapperState) &&
          T.controlled &&
          d.type === "number" &&
          u5(d, "number", d.value);
      }
      switch (((T = u ? Sr(u) : window), t)) {
        case "focusin":
          (C9(T) || T.contentEditable === "true") &&
            ((_r = T), (w5 = u), (G6 = null));
          break;
        case "focusout":
          G6 = w5 = _r = null;
          break;
        case "mousedown":
          S5 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (S5 = !1), y9(f, n, c);
          break;
        case "selectionchange":
          if (Pf) break;
        case "keydown":
        case "keyup":
          y9(f, n, c);
      }
      var w;
      if (Y4)
        e: {
          switch (t) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        yr
          ? zs(t, n) && (L = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (Is &&
          n.locale !== "ko" &&
          (yr || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && yr && (w = Ds())
            : ((Y3 = c),
              (W4 = "value" in Y3 ? Y3.value : Y3.textContent),
              (yr = !0))),
          (T = ri(u, L)),
          0 < T.length &&
          ((L = new c9(L, t, null, n, c)),
            f.push({ event: L, listeners: T }),
            w ? (L.data = w) : ((w = Fs(n)), w !== null && (L.data = w)))),
        (w = yf ? _f(t, n) : wf(t, n)) &&
        ((u = ri(u, "onBeforeInput")),
          0 < u.length &&
          ((c = new c9("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = w)));
    }
    Ks(f, e);
  });
}
function x2(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function ri(t, e) {
  for (var n = e + "Capture", r = []; t !== null;) {
    var i = t,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
        (o = m2(t, n)),
        o != null && r.unshift(x2(t, o, i)),
        (o = m2(t, e)),
        o != null && r.push(x2(t, o, i))),
      (t = t.return);
  }
  return r;
}
function fr(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function S9(t, e, n, r, i) {
  for (var o = e._reactName, s = []; n !== null && n !== r;) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
        i
          ? ((a = m2(n, o)), a != null && s.unshift(x2(n, a, l)))
          : i || ((a = m2(n, o)), a != null && s.push(x2(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && t.push({ event: e, listeners: s });
}
var Af = /\r\n?/g,
  Df = /\u0000|\uFFFD/g;
function x9(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      Af,
      `
`
    )
    .replace(Df, "");
}
function s0(t, e, n) {
  if (((e = x9(e)), x9(t) !== e && n)) throw Error(z(425));
}
function ii() { }
var x5 = null,
  k5 = null;
function E5(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var T5 = typeof setTimeout == "function" ? setTimeout : void 0,
  If = typeof clearTimeout == "function" ? clearTimeout : void 0,
  k9 = typeof Promise == "function" ? Promise : void 0,
  zf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof k9 < "u"
        ? function (t) {
          return k9.resolve(null).then(t).catch(Ff);
        }
        : T5;
function Ff(t) {
  setTimeout(function () {
    throw t;
  });
}
function E8(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          t.removeChild(i), y2(e);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  y2(e);
}
function rn(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function E9(t) {
  t = t.previousSibling;
  for (var e = 0; t;) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var f6 = Math.random().toString(36).slice(2),
  o3 = "__reactFiber$" + f6,
  k2 = "__reactProps$" + f6,
  O3 = "__reactContainer$" + f6,
  L5 = "__reactEvents$" + f6,
  Hf = "__reactListeners$" + f6,
  Bf = "__reactHandles$" + f6;
function Vn(t) {
  var e = t[o3];
  if (e) return e;
  for (var n = t.parentNode; n;) {
    if ((e = n[O3] || n[o3])) {
      if (
        ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
      )
        for (t = E9(t); t !== null;) {
          if ((n = t[o3])) return n;
          t = E9(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function U2(t) {
  return (
    (t = t[o3] || t[O3]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function Sr(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(z(33));
}
function Ui(t) {
  return t[k2] || null;
}
var M5 = [],
  xr = -1;
function vn(t) {
  return { current: t };
}
function _e(t) {
  0 > xr || ((t.current = M5[xr]), (M5[xr] = null), xr--);
}
function ge(t, e) {
  xr++, (M5[xr] = t.current), (t.current = e);
}
var hn = {},
  w1 = vn(hn),
  B1 = vn(!1),
  Xn = hn;
function Xr(t, e) {
  var n = t.type.contextTypes;
  if (!n) return hn;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = e[o];
  return (
    r &&
    ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function W1(t) {
  return (t = t.childContextTypes), t != null;
}
function oi() {
  _e(B1), _e(w1);
}
function T9(t, e, n) {
  if (w1.current !== hn) throw Error(z(168));
  ge(w1, e), ge(B1, n);
}
function Js(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(z(108, kc(t) || "Unknown", i));
  return be({}, n, r);
}
function si(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || hn),
    (Xn = w1.current),
    ge(w1, t),
    ge(B1, B1.current),
    !0
  );
}
function L9(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(z(169));
  n
    ? ((t = Js(t, e, Xn)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      _e(B1),
      _e(w1),
      ge(w1, t))
    : _e(B1),
    ge(B1, n);
}
var y3 = null,
  Yi = !1,
  T8 = !1;
function el(t) {
  y3 === null ? (y3 = [t]) : y3.push(t);
}
function Wf(t) {
  (Yi = !0), el(t);
}
function yn() {
  if (!T8 && y3 !== null) {
    T8 = !0;
    var t = 0,
      e = he;
    try {
      var n = y3;
      for (he = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      (y3 = null), (Yi = !1);
    } catch (i) {
      throw (y3 !== null && (y3 = y3.slice(t + 1)), Es(z4, yn), i);
    } finally {
      (he = e), (T8 = !1);
    }
  }
  return null;
}
var kr = [],
  Er = 0,
  li = null,
  ai = 0,
  _t = [],
  wt = 0,
  Gn = null,
  S3 = 1,
  x3 = "";
function Mn(t, e) {
  (kr[Er++] = ai), (kr[Er++] = li), (li = t), (ai = e);
}
function tl(t, e, n) {
  (_t[wt++] = S3), (_t[wt++] = x3), (_t[wt++] = Gn), (Gn = t);
  var r = S3;
  t = x3;
  var i = 32 - Ut(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ut(e) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (S3 = (1 << (32 - Ut(e) + i)) | (n << i) | r),
      (x3 = o + t);
  } else (S3 = (1 << o) | (n << i) | r), (x3 = t);
}
function $4(t) {
  t.return !== null && (Mn(t, 1), tl(t, 1, 0));
}
function X4(t) {
  for (; t === li;)
    (li = kr[--Er]), (kr[Er] = null), (ai = kr[--Er]), (kr[Er] = null);
  for (; t === Gn;)
    (Gn = _t[--wt]),
      (_t[wt] = null),
      (x3 = _t[--wt]),
      (_t[wt] = null),
      (S3 = _t[--wt]),
      (_t[wt] = null);
}
var lt = null,
  st = null,
  xe = !1,
  Bt = null;
function nl(t, e) {
  var n = xt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function M9(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (lt = t), (st = rn(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (lt = t), (st = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = Gn !== null ? { id: S3, overflow: x3 } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = xt(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (lt = t),
            (st = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function O5(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function b5(t) {
  if (xe) {
    var e = st;
    if (e) {
      var n = e;
      if (!M9(t, e)) {
        if (O5(t)) throw Error(z(418));
        e = rn(n.nextSibling);
        var r = lt;
        e && M9(t, e)
          ? nl(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (xe = !1), (lt = t));
      }
    } else {
      if (O5(t)) throw Error(z(418));
      (t.flags = (t.flags & -4097) | 2), (xe = !1), (lt = t);
    }
  }
}
function O9(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13;)
    t = t.return;
  lt = t;
}
function l0(t) {
  if (t !== lt) return !1;
  if (!xe) return O9(t), (xe = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
        (e = e !== "head" && e !== "body" && !E5(t.type, t.memoizedProps))),
      e && (e = st))
  ) {
    if (O5(t)) throw (rl(), Error(z(418)));
    for (; e;) nl(t, e), (e = rn(e.nextSibling));
  }
  if ((O9(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(z(317));
    e: {
      for (t = t.nextSibling, e = 0; t;) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              st = rn(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      st = null;
    }
  } else st = lt ? rn(t.stateNode.nextSibling) : null;
  return !0;
}
function rl() {
  for (var t = st; t;) t = rn(t.nextSibling);
}
function Gr() {
  (st = lt = null), (xe = !1);
}
function G4(t) {
  Bt === null ? (Bt = [t]) : Bt.push(t);
}
var jf = R3.ReactCurrentBatchConfig;
function It(t, e) {
  if (t && t.defaultProps) {
    (e = be({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var ui = vn(null),
  ci = null,
  Tr = null,
  q4 = null;
function K4() {
  q4 = Tr = ci = null;
}
function Q4(t) {
  var e = ui.current;
  _e(ui), (t._currentValue = e);
}
function P5(t, e, n) {
  for (; t !== null;) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
        t === n)
    )
      break;
    t = t.return;
  }
}
function Fr(t, e) {
  (ci = t),
    (q4 = Tr = null),
    (t = t.dependencies),
    t !== null &&
    t.firstContext !== null &&
    (t.lanes & e && (H1 = !0), (t.firstContext = null));
}
function Ot(t) {
  var e = t._currentValue;
  if (q4 !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Tr === null)) {
      if (ci === null) throw Error(z(308));
      (Tr = t), (ci.dependencies = { lanes: 0, firstContext: t });
    } else Tr = Tr.next = t;
  return e;
}
var Rn = null;
function J4(t) {
  Rn === null ? (Rn = [t]) : Rn.push(t);
}
function il(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), J4(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    b3(t, r)
  );
}
function b3(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null;)
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var W3 = !1;
function e7(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ol(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
    (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      effects: t.effects,
    });
}
function E3(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function on(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), fe & 2)) {
    var i = r.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      b3(t, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), J4(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    b3(t, n)
  );
}
function N0(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), F4(t, n);
  }
}
function b9(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
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
      o === null ? (i = o = e) : (o = o.next = e);
    } else i = o = e;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function fi(t, e, n, r) {
  var i = t.updateQueue;
  W3 = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = t.alternate;
    c !== null &&
      ((c = c.updateQueue),
        (l = c.lastBaseUpdate),
        l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
          (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        h = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
          {
            eventTime: h,
            lane: 0,
            tag: l.tag,
            payload: l.payload,
            callback: l.callback,
            next: null,
          });
        e: {
          var v = t,
            m = l;
          switch (((d = e), (h = n), m.tag)) {
            case 1:
              if (((v = m.payload), typeof v == "function")) {
                f = v.call(h, f, d);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = m.payload),
                  (d = typeof v == "function" ? v.call(h, f, d) : v),
                  d == null)
              )
                break e;
              f = be({}, f, d);
              break e;
            case 2:
              W3 = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((t.flags |= 64),
            (d = i.effects),
            d === null ? (i.effects = [l]) : d.push(l));
      } else
        (h = {
          eventTime: h,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (a = f)) : (c = c.next = h),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = f),
        (i.baseState = a),
        (i.firstBaseUpdate = u),
        (i.lastBaseUpdate = c),
        (e = i.shared.interleaved),
        e !== null)
    ) {
      i = e;
      do (s |= i.lane), (i = i.next);
      while (i !== e);
    } else o === null && (i.shared.lanes = 0);
    (Kn |= s), (t.lanes = s), (t.memoizedState = f);
  }
}
function P9(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(z(191, i));
        i.call(r);
      }
    }
}
var sl = new is.Component().refs;
function N5(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : be({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Zi = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? or(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = V1(),
      i = ln(t),
      o = E3(r, i);
    (o.payload = e),
      n != null && (o.callback = n),
      (e = on(t, o, i)),
      e !== null && (Yt(e, t, i, r), N0(e, t, i));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = V1(),
      i = ln(t),
      o = E3(r, i);
    (o.tag = 1),
      (o.payload = e),
      n != null && (o.callback = n),
      (e = on(t, o, i)),
      e !== null && (Yt(e, t, i, r), N0(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = V1(),
      r = ln(t),
      i = E3(n, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = on(t, i, r)),
      e !== null && (Yt(e, t, r, n), N0(e, t, r));
  },
};
function N9(t, e, n, r, i, o, s) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, o, s)
      : e.prototype && e.prototype.isPureReactComponent
        ? !w2(n, r) || !w2(i, o)
        : !0
  );
}
function ll(t, e, n) {
  var r = !1,
    i = hn,
    o = e.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ot(o))
      : ((i = W1(e) ? Xn : w1.current),
        (r = e.contextTypes),
        (o = (r = r != null) ? Xr(t, i) : hn)),
    (e = new e(n, o)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Zi),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
    ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = o)),
    e
  );
}
function V9(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
    e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
    e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && Zi.enqueueReplaceState(e, e.state, null);
}
function V5(t, e, n, r) {
  var i = t.stateNode;
  (i.props = n), (i.state = t.memoizedState), (i.refs = sl), e7(t);
  var o = e.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Ot(o))
    : ((o = W1(e) ? Xn : w1.current), (i.context = Xr(t, o))),
    (i.state = t.memoizedState),
    (o = e.getDerivedStateFromProps),
    typeof o == "function" && (N5(t, e, o, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
    typeof i.getSnapshotBeforeUpdate == "function" ||
    (typeof i.UNSAFE_componentWillMount != "function" &&
      typeof i.componentWillMount != "function") ||
    ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
      i.UNSAFE_componentWillMount(),
      e !== i.state && Zi.enqueueReplaceState(i, i.state, null),
      fi(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function T6(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(z(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(z(147, t));
      var i = r,
        o = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === o
        ? e.ref
        : ((e = function (s) {
          var l = i.refs;
          l === sl && (l = i.refs = {}),
            s === null ? delete l[o] : (l[o] = s);
        }),
          (e._stringRef = o),
          e);
    }
    if (typeof t != "string") throw Error(z(284));
    if (!n._owner) throw Error(z(290, t));
  }
  return t;
}
function a0(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
      Error(
        z(
          31,
          t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t
        )
      ))
  );
}
function R9(t) {
  var e = t._init;
  return e(t._payload);
}
function al(t) {
  function e(g, p) {
    if (t) {
      var _ = g.deletions;
      _ === null ? ((g.deletions = [p]), (g.flags |= 16)) : _.push(p);
    }
  }
  function n(g, p) {
    if (!t) return null;
    for (; p !== null;) e(g, p), (p = p.sibling);
    return null;
  }
  function r(g, p) {
    for (g = new Map(); p !== null;)
      p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
    return g;
  }
  function i(g, p) {
    return (g = an(g, p)), (g.index = 0), (g.sibling = null), g;
  }
  function o(g, p, _) {
    return (
      (g.index = _),
      t
        ? ((_ = g.alternate),
          _ !== null
            ? ((_ = _.index), _ < p ? ((g.flags |= 2), p) : _)
            : ((g.flags |= 2), p))
        : ((g.flags |= 1048576), p)
    );
  }
  function s(g) {
    return t && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, p, _, y) {
    return p === null || p.tag !== 6
      ? ((p = V8(_, g.mode, y)), (p.return = g), p)
      : ((p = i(p, _)), (p.return = g), p);
  }
  function a(g, p, _, y) {
    var x = _.type;
    return x === vr
      ? c(g, p, _.props.children, y, _.key)
      : p !== null &&
        (p.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === B3 &&
            R9(x) === p.type))
        ? ((y = i(p, _.props)), (y.ref = T6(g, p, _)), (y.return = g), y)
        : ((y = z0(_.type, _.key, _.props, null, g.mode, y)),
          (y.ref = T6(g, p, _)),
          (y.return = g),
          y);
  }
  function u(g, p, _, y) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== _.containerInfo ||
      p.stateNode.implementation !== _.implementation
      ? ((p = R8(_, g.mode, y)), (p.return = g), p)
      : ((p = i(p, _.children || [])), (p.return = g), p);
  }
  function c(g, p, _, y, x) {
    return p === null || p.tag !== 7
      ? ((p = Fn(_, g.mode, y, x)), (p.return = g), p)
      : ((p = i(p, _)), (p.return = g), p);
  }
  function f(g, p, _) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = V8("" + p, g.mode, _)), (p.return = g), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case K2:
          return (
            (_ = z0(p.type, p.key, p.props, null, g.mode, _)),
            (_.ref = T6(g, null, p)),
            (_.return = g),
            _
          );
        case gr:
          return (p = R8(p, g.mode, _)), (p.return = g), p;
        case B3:
          var y = p._init;
          return f(g, y(p._payload), _);
      }
      if (A6(p) || w6(p))
        return (p = Fn(p, g.mode, _, null)), (p.return = g), p;
      a0(g, p);
    }
    return null;
  }
  function d(g, p, _, y) {
    var x = p !== null ? p.key : null;
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return x !== null ? null : l(g, p, "" + _, y);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case K2:
          return _.key === x ? a(g, p, _, y) : null;
        case gr:
          return _.key === x ? u(g, p, _, y) : null;
        case B3:
          return (x = _._init), d(g, p, x(_._payload), y);
      }
      if (A6(_) || w6(_)) return x !== null ? null : c(g, p, _, y, null);
      a0(g, _);
    }
    return null;
  }
  function h(g, p, _, y, x) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (g = g.get(_) || null), l(p, g, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case K2:
          return (g = g.get(y.key === null ? _ : y.key) || null), a(p, g, y, x);
        case gr:
          return (g = g.get(y.key === null ? _ : y.key) || null), u(p, g, y, x);
        case B3:
          var T = y._init;
          return h(g, p, _, T(y._payload), x);
      }
      if (A6(y) || w6(y)) return (g = g.get(_) || null), c(p, g, y, x, null);
      a0(p, y);
    }
    return null;
  }
  function v(g, p, _, y) {
    for (
      var x = null, T = null, w = p, L = (p = 0), M = null;
      w !== null && L < _.length;
      L++
    ) {
      w.index > L ? ((M = w), (w = null)) : (M = w.sibling);
      var O = d(g, w, _[L], y);
      if (O === null) {
        w === null && (w = M);
        break;
      }
      t && w && O.alternate === null && e(g, w),
        (p = o(O, p, L)),
        T === null ? (x = O) : (T.sibling = O),
        (T = O),
        (w = M);
    }
    if (L === _.length) return n(g, w), xe && Mn(g, L), x;
    if (w === null) {
      for (; L < _.length; L++)
        (w = f(g, _[L], y)),
          w !== null &&
          ((p = o(w, p, L)), T === null ? (x = w) : (T.sibling = w), (T = w));
      return xe && Mn(g, L), x;
    }
    for (w = r(g, w); L < _.length; L++)
      (M = h(w, g, L, _[L], y)),
        M !== null &&
        (t && M.alternate !== null && w.delete(M.key === null ? L : M.key),
          (p = o(M, p, L)),
          T === null ? (x = M) : (T.sibling = M),
          (T = M));
    return (
      t &&
      w.forEach(function (W) {
        return e(g, W);
      }),
      xe && Mn(g, L),
      x
    );
  }
  function m(g, p, _, y) {
    var x = w6(_);
    if (typeof x != "function") throw Error(z(150));
    if (((_ = x.call(_)), _ == null)) throw Error(z(151));
    for (
      var T = (x = null), w = p, L = (p = 0), M = null, O = _.next();
      w !== null && !O.done;
      L++, O = _.next()
    ) {
      w.index > L ? ((M = w), (w = null)) : (M = w.sibling);
      var W = d(g, w, O.value, y);
      if (W === null) {
        w === null && (w = M);
        break;
      }
      t && w && W.alternate === null && e(g, w),
        (p = o(W, p, L)),
        T === null ? (x = W) : (T.sibling = W),
        (T = W),
        (w = M);
    }
    if (O.done) return n(g, w), xe && Mn(g, L), x;
    if (w === null) {
      for (; !O.done; L++, O = _.next())
        (O = f(g, O.value, y)),
          O !== null &&
          ((p = o(O, p, L)), T === null ? (x = O) : (T.sibling = O), (T = O));
      return xe && Mn(g, L), x;
    }
    for (w = r(g, w); !O.done; L++, O = _.next())
      (O = h(w, g, L, O.value, y)),
        O !== null &&
        (t && O.alternate !== null && w.delete(O.key === null ? L : O.key),
          (p = o(O, p, L)),
          T === null ? (x = O) : (T.sibling = O),
          (T = O));
    return (
      t &&
      w.forEach(function (I) {
        return e(g, I);
      }),
      xe && Mn(g, L),
      x
    );
  }
  function k(g, p, _, y) {
    if (
      (typeof _ == "object" &&
        _ !== null &&
        _.type === vr &&
        _.key === null &&
        (_ = _.props.children),
        typeof _ == "object" && _ !== null)
    ) {
      switch (_.$$typeof) {
        case K2:
          e: {
            for (var x = _.key, T = p; T !== null;) {
              if (T.key === x) {
                if (((x = _.type), x === vr)) {
                  if (T.tag === 7) {
                    n(g, T.sibling),
                      (p = i(T, _.props.children)),
                      (p.return = g),
                      (g = p);
                    break e;
                  }
                } else if (
                  T.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === B3 &&
                    R9(x) === T.type)
                ) {
                  n(g, T.sibling),
                    (p = i(T, _.props)),
                    (p.ref = T6(g, T, _)),
                    (p.return = g),
                    (g = p);
                  break e;
                }
                n(g, T);
                break;
              } else e(g, T);
              T = T.sibling;
            }
            _.type === vr
              ? ((p = Fn(_.props.children, g.mode, y, _.key)),
                (p.return = g),
                (g = p))
              : ((y = z0(_.type, _.key, _.props, null, g.mode, y)),
                (y.ref = T6(g, p, _)),
                (y.return = g),
                (g = y));
          }
          return s(g);
        case gr:
          e: {
            for (T = _.key; p !== null;) {
              if (p.key === T)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === _.containerInfo &&
                  p.stateNode.implementation === _.implementation
                ) {
                  n(g, p.sibling),
                    (p = i(p, _.children || [])),
                    (p.return = g),
                    (g = p);
                  break e;
                } else {
                  n(g, p);
                  break;
                }
              else e(g, p);
              p = p.sibling;
            }
            (p = R8(_, g.mode, y)), (p.return = g), (g = p);
          }
          return s(g);
        case B3:
          return (T = _._init), k(g, p, T(_._payload), y);
      }
      if (A6(_)) return v(g, p, _, y);
      if (w6(_)) return m(g, p, _, y);
      a0(g, _);
    }
    return (typeof _ == "string" && _ !== "") || typeof _ == "number"
      ? ((_ = "" + _),
        p !== null && p.tag === 6
          ? (n(g, p.sibling), (p = i(p, _)), (p.return = g), (g = p))
          : (n(g, p), (p = V8(_, g.mode, y)), (p.return = g), (g = p)),
        s(g))
      : n(g, p);
  }
  return k;
}
var qr = al(!0),
  ul = al(!1),
  Y2 = {},
  u3 = vn(Y2),
  E2 = vn(Y2),
  T2 = vn(Y2);
function An(t) {
  if (t === Y2) throw Error(z(174));
  return t;
}
function t7(t, e) {
  switch ((ge(T2, e), ge(E2, t), ge(u3, Y2), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : f5(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = f5(e, t));
  }
  _e(u3), ge(u3, e);
}
function Kr() {
  _e(u3), _e(E2), _e(T2);
}
function cl(t) {
  An(T2.current);
  var e = An(u3.current),
    n = f5(e, t.type);
  e !== n && (ge(E2, t), ge(u3, n));
}
function n7(t) {
  E2.current === t && (_e(u3), _e(E2));
}
var Te = vn(0);
function di(t) {
  for (var e = t; e !== null;) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null;) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var L8 = [];
function r7() {
  for (var t = 0; t < L8.length; t++)
    L8[t]._workInProgressVersionPrimary = null;
  L8.length = 0;
}
var V0 = R3.ReactCurrentDispatcher,
  M8 = R3.ReactCurrentBatchConfig,
  qn = 0,
  Oe = null,
  Ue = null,
  t1 = null,
  hi = !1,
  q6 = !1,
  L2 = 0,
  Uf = 0;
function h1() {
  throw Error(z(321));
}
function i7(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!Gt(t[n], e[n])) return !1;
  return !0;
}
function o7(t, e, n, r, i, o) {
  if (
    ((qn = o),
      (Oe = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (V0.current = t === null || t.memoizedState === null ? Xf : Gf),
      (t = n(r, i)),
      q6)
  ) {
    o = 0;
    do {
      if (((q6 = !1), (L2 = 0), 25 <= o)) throw Error(z(301));
      (o += 1),
        (t1 = Ue = null),
        (e.updateQueue = null),
        (V0.current = qf),
        (t = n(r, i));
    } while (q6);
  }
  if (
    ((V0.current = Ci),
      (e = Ue !== null && Ue.next !== null),
      (qn = 0),
      (t1 = Ue = Oe = null),
      (hi = !1),
      e)
  )
    throw Error(z(300));
  return t;
}
function s7() {
  var t = L2 !== 0;
  return (L2 = 0), t;
}
function r3() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return t1 === null ? (Oe.memoizedState = t1 = t) : (t1 = t1.next = t), t1;
}
function bt() {
  if (Ue === null) {
    var t = Oe.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = Ue.next;
  var e = t1 === null ? Oe.memoizedState : t1.next;
  if (e !== null) (t1 = e), (Ue = t);
  else {
    if (t === null) throw Error(z(310));
    (Ue = t),
      (t = {
        memoizedState: Ue.memoizedState,
        baseState: Ue.baseState,
        baseQueue: Ue.baseQueue,
        queue: Ue.queue,
        next: null,
      }),
      t1 === null ? (Oe.memoizedState = t1 = t) : (t1 = t1.next = t);
  }
  return t1;
}
function M2(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function O8(t) {
  var e = bt(),
    n = e.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = t;
  var r = Ue,
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
      var c = u.lane;
      if ((qn & c) === c)
        a !== null &&
          (a = a.next =
          {
            lane: 0,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          }),
          (r = u.hasEagerState ? u.eagerState : t(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (Oe.lanes |= c),
          (Kn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      Gt(r, e.memoizedState) || (H1 = !0),
      (e.memoizedState = r),
      (e.baseState = s),
      (e.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((t = n.interleaved), t !== null)) {
    i = t;
    do (o = i.lane), (Oe.lanes |= o), (Kn |= o), (i = i.next);
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function b8(t) {
  var e = bt(),
    n = e.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    o = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = t(o, s.action)), (s = s.next);
    while (s !== i);
    Gt(o, e.memoizedState) || (H1 = !0),
      (e.memoizedState = o),
      e.baseQueue === null && (e.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function fl() { }
function dl(t, e) {
  var n = Oe,
    r = bt(),
    i = e(),
    o = !Gt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (H1 = !0)),
      (r = r.queue),
      l7(pl.bind(null, n, r, t), [t]),
      r.getSnapshot !== e || o || (t1 !== null && t1.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
        O2(9, Cl.bind(null, n, r, i, e), void 0, null),
        n1 === null)
    )
      throw Error(z(349));
    qn & 30 || hl(n, e, i);
  }
  return i;
}
function hl(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = Oe.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Oe.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function Cl(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), ml(e) && gl(t);
}
function pl(t, e, n) {
  return n(function () {
    ml(e) && gl(t);
  });
}
function ml(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Gt(t, n);
  } catch {
    return !0;
  }
}
function gl(t) {
  var e = b3(t, 1);
  e !== null && Yt(e, t, 1, -1);
}
function A9(t) {
  var e = r3();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: M2,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = $f.bind(null, Oe, t)),
    [e.memoizedState, t]
  );
}
function O2(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = Oe.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Oe.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function vl() {
  return bt().memoizedState;
}
function R0(t, e, n, r) {
  var i = r3();
  (Oe.flags |= t),
    (i.memoizedState = O2(1 | e, n, void 0, r === void 0 ? null : r));
}
function $i(t, e, n, r) {
  var i = bt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ue !== null) {
    var s = Ue.memoizedState;
    if (((o = s.destroy), r !== null && i7(r, s.deps))) {
      i.memoizedState = O2(e, n, o, r);
      return;
    }
  }
  (Oe.flags |= t), (i.memoizedState = O2(1 | e, n, o, r));
}
function D9(t, e) {
  return R0(8390656, 8, t, e);
}
function l7(t, e) {
  return $i(2048, 8, t, e);
}
function yl(t, e) {
  return $i(4, 2, t, e);
}
function _l(t, e) {
  return $i(4, 4, t, e);
}
function wl(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function Sl(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), $i(4, 4, wl.bind(null, e, t), n)
  );
}
function a7() { }
function xl(t, e) {
  var n = bt();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && i7(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function kl(t, e) {
  var n = bt();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && i7(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function El(t, e, n) {
  return qn & 21
    ? (Gt(n, e) || ((n = Ms()), (Oe.lanes |= n), (Kn |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (H1 = !0)), (t.memoizedState = n));
}
function Yf(t, e) {
  var n = he;
  (he = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = M8.transition;
  M8.transition = {};
  try {
    t(!1), e();
  } finally {
    (he = n), (M8.transition = r);
  }
}
function Tl() {
  return bt().memoizedState;
}
function Zf(t, e, n) {
  var r = ln(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ll(t))
  )
    Ml(e, n);
  else if (((n = il(t, e, n, r)), n !== null)) {
    var i = V1();
    Yt(n, t, r, i), Ol(n, e, r);
  }
}
function $f(t, e, n) {
  var r = ln(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ll(t)) Ml(e, i);
  else {
    var o = t.alternate;
    if (
      t.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = e.lastRenderedReducer), o !== null)
    )
      try {
        var s = e.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Gt(l, s))) {
          var a = e.interleaved;
          a === null
            ? ((i.next = i), J4(e))
            : ((i.next = a.next), (a.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = il(t, e, i, r)),
      n !== null && ((i = V1()), Yt(n, t, r, i), Ol(n, e, r));
  }
}
function Ll(t) {
  var e = t.alternate;
  return t === Oe || (e !== null && e === Oe);
}
function Ml(t, e) {
  q6 = hi = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function Ol(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), F4(t, n);
  }
}
var Ci = {
  readContext: Ot,
  useCallback: h1,
  useContext: h1,
  useEffect: h1,
  useImperativeHandle: h1,
  useInsertionEffect: h1,
  useLayoutEffect: h1,
  useMemo: h1,
  useReducer: h1,
  useRef: h1,
  useState: h1,
  useDebugValue: h1,
  useDeferredValue: h1,
  useTransition: h1,
  useMutableSource: h1,
  useSyncExternalStore: h1,
  useId: h1,
  unstable_isNewReconciler: !1,
},
  Xf = {
    readContext: Ot,
    useCallback: function (t, e) {
      return (r3().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Ot,
    useEffect: D9,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        R0(4194308, 4, wl.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return R0(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return R0(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = r3();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var r = r3();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = Zf.bind(null, Oe, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = r3();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: A9,
    useDebugValue: a7,
    useDeferredValue: function (t) {
      return (r3().memoizedState = t);
    },
    useTransition: function () {
      var t = A9(!1),
        e = t[0];
      return (t = Yf.bind(null, t[1])), (r3().memoizedState = t), [e, t];
    },
    useMutableSource: function () { },
    useSyncExternalStore: function (t, e, n) {
      var r = Oe,
        i = r3();
      if (xe) {
        if (n === void 0) throw Error(z(407));
        n = n();
      } else {
        if (((n = e()), n1 === null)) throw Error(z(349));
        qn & 30 || hl(r, e, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: e };
      return (
        (i.queue = o),
        D9(pl.bind(null, r, o, t), [t]),
        (r.flags |= 2048),
        O2(9, Cl.bind(null, r, o, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = r3(),
        e = n1.identifierPrefix;
      if (xe) {
        var n = x3,
          r = S3;
        (n = (r & ~(1 << (32 - Ut(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = L2++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = Uf++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  Gf = {
    readContext: Ot,
    useCallback: xl,
    useContext: Ot,
    useEffect: l7,
    useImperativeHandle: Sl,
    useInsertionEffect: yl,
    useLayoutEffect: _l,
    useMemo: kl,
    useReducer: O8,
    useRef: vl,
    useState: function () {
      return O8(M2);
    },
    useDebugValue: a7,
    useDeferredValue: function (t) {
      var e = bt();
      return El(e, Ue.memoizedState, t);
    },
    useTransition: function () {
      var t = O8(M2)[0],
        e = bt().memoizedState;
      return [t, e];
    },
    useMutableSource: fl,
    useSyncExternalStore: dl,
    useId: Tl,
    unstable_isNewReconciler: !1,
  },
  qf = {
    readContext: Ot,
    useCallback: xl,
    useContext: Ot,
    useEffect: l7,
    useImperativeHandle: Sl,
    useInsertionEffect: yl,
    useLayoutEffect: _l,
    useMemo: kl,
    useReducer: b8,
    useRef: vl,
    useState: function () {
      return b8(M2);
    },
    useDebugValue: a7,
    useDeferredValue: function (t) {
      var e = bt();
      return Ue === null ? (e.memoizedState = t) : El(e, Ue.memoizedState, t);
    },
    useTransition: function () {
      var t = b8(M2)[0],
        e = bt().memoizedState;
      return [t, e];
    },
    useMutableSource: fl,
    useSyncExternalStore: dl,
    useId: Tl,
    unstable_isNewReconciler: !1,
  };
function Qr(t, e) {
  try {
    var n = "",
      r = e;
    do (n += xc(r)), (r = r.return);
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
  return { value: t, source: e, stack: i, digest: null };
}
function P8(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function R5(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Kf = typeof WeakMap == "function" ? WeakMap : Map;
function bl(t, e, n) {
  (n = E3(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      mi || ((mi = !0), (U5 = r)), R5(t, e);
    }),
    n
  );
}
function Pl(t, e, n) {
  (n = E3(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        R5(t, e);
      });
  }
  var o = t.stateNode;
  return (
    o !== null &&
    typeof o.componentDidCatch == "function" &&
    (n.callback = function () {
      R5(t, e),
        typeof r != "function" &&
        (sn === null ? (sn = new Set([this])) : sn.add(this));
      var s = e.stack;
      this.componentDidCatch(e.value, {
        componentStack: s !== null ? s : "",
      });
    }),
    n
  );
}
function I9(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new Kf();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(n) || (i.add(n), (t = fd.bind(null, t, e, n)), e.then(t, t));
}
function z9(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
        e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function F9(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
      ? (t.flags |= 65536)
      : ((t.flags |= 128),
        (n.flags |= 131072),
        (n.flags &= -52805),
        n.tag === 1 &&
        (n.alternate === null
          ? (n.tag = 17)
          : ((e = E3(-1, 1)), (e.tag = 2), on(n, e, 1))),
        (n.lanes |= 1)),
      t);
}
var Qf = R3.ReactCurrentOwner,
  H1 = !1;
function M1(t, e, n, r) {
  e.child = t === null ? ul(e, null, n, r) : qr(e, t.child, n, r);
}
function H9(t, e, n, r, i) {
  n = n.render;
  var o = e.ref;
  return (
    Fr(e, i),
    (r = o7(t, e, n, r, o, i)),
    (n = s7()),
    t !== null && !H1
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        P3(t, e, i))
      : (xe && n && $4(e), (e.flags |= 1), M1(t, e, r, i), e.child)
  );
}
function B9(t, e, n, r, i) {
  if (t === null) {
    var o = n.type;
    return typeof o == "function" &&
      !m7(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = o), Nl(t, e, o, r, i))
      : ((t = z0(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((o = t.child), !(t.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : w2), n(s, r) && t.ref === e.ref)
    )
      return P3(t, e, i);
  }
  return (
    (e.flags |= 1),
    (t = an(o, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function Nl(t, e, n, r, i) {
  if (t !== null) {
    var o = t.memoizedProps;
    if (w2(o, r) && t.ref === e.ref)
      if (((H1 = !1), (e.pendingProps = r = o), (t.lanes & i) !== 0))
        t.flags & 131072 && (H1 = !0);
      else return (e.lanes = t.lanes), P3(t, e, i);
  }
  return A5(t, e, n, r, i);
}
function Vl(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    o = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ge(Mr, et),
        (et |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = o !== null ? o.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          ge(Mr, et),
          (et |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ge(Mr, et),
        (et |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (e.memoizedState = null)) : (r = n),
      ge(Mr, et),
      (et |= r);
  return M1(t, e, i, n), e.child;
}
function Rl(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function A5(t, e, n, r, i) {
  var o = W1(n) ? Xn : w1.current;
  return (
    (o = Xr(e, o)),
    Fr(e, i),
    (n = o7(t, e, n, r, o, i)),
    (r = s7()),
    t !== null && !H1
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        P3(t, e, i))
      : (xe && r && $4(e), (e.flags |= 1), M1(t, e, n, i), e.child)
  );
}
function W9(t, e, n, r, i) {
  if (W1(n)) {
    var o = !0;
    si(e);
  } else o = !1;
  if ((Fr(e, i), e.stateNode === null))
    A0(t, e), ll(e, n, r), V5(e, n, r, i), (r = !0);
  else if (t === null) {
    var s = e.stateNode,
      l = e.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ot(u))
      : ((u = W1(n) ? Xn : w1.current), (u = Xr(e, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && V9(e, s, r, u)),
      (W3 = !1);
    var d = e.memoizedState;
    (s.state = d),
      fi(e, r, s, i),
      (a = e.memoizedState),
      l !== r || d !== a || B1.current || W3
        ? (typeof c == "function" && (N5(e, n, c, r), (a = e.memoizedState)),
          (l = W3 || N9(e, n, l, r, d, a, u))
            ? (f ||
              (typeof s.UNSAFE_componentWillMount != "function" &&
                typeof s.componentWillMount != "function") ||
              (typeof s.componentWillMount == "function" &&
                s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (s = e.stateNode),
      ol(t, e),
      (l = e.memoizedProps),
      (u = e.type === e.elementType ? l : It(e.type, l)),
      (s.props = u),
      (f = e.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ot(a))
        : ((a = W1(n) ? Xn : w1.current), (a = Xr(e, a)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && V9(e, s, r, a)),
      (W3 = !1),
      (d = e.memoizedState),
      (s.state = d),
      fi(e, r, s, i);
    var v = e.memoizedState;
    l !== f || d !== v || B1.current || W3
      ? (typeof h == "function" && (N5(e, n, h, r), (v = e.memoizedState)),
        (u = W3 || N9(e, n, u, r, d, v, a) || !1)
          ? (c ||
            (typeof s.UNSAFE_componentWillUpdate != "function" &&
              typeof s.componentWillUpdate != "function") ||
            (typeof s.componentWillUpdate == "function" &&
              s.componentWillUpdate(r, v, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
              s.UNSAFE_componentWillUpdate(r, v, a)),
            typeof s.componentDidUpdate == "function" && (e.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
            (l === t.memoizedProps && d === t.memoizedState) ||
            (e.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
            (l === t.memoizedProps && d === t.memoizedState) ||
            (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
        (l === t.memoizedProps && d === t.memoizedState) ||
        (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
        (l === t.memoizedProps && d === t.memoizedState) ||
        (e.flags |= 1024),
        (r = !1));
  }
  return D5(t, e, n, r, o, i);
}
function D5(t, e, n, r, i, o) {
  Rl(t, e);
  var s = (e.flags & 128) !== 0;
  if (!r && !s) return i && L9(e, n, !1), P3(t, e, o);
  (r = e.stateNode), (Qf.current = e);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && s
      ? ((e.child = qr(e, t.child, null, o)), (e.child = qr(e, null, l, o)))
      : M1(t, e, l, o),
    (e.memoizedState = r.state),
    i && L9(e, n, !0),
    e.child
  );
}
function Al(t) {
  var e = t.stateNode;
  e.pendingContext
    ? T9(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && T9(t, e.context, !1),
    t7(t, e.containerInfo);
}
function j9(t, e, n, r, i) {
  return Gr(), G4(i), (e.flags |= 256), M1(t, e, n, r), e.child;
}
var I5 = { dehydrated: null, treeContext: null, retryLane: 0 };
function z5(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Dl(t, e, n) {
  var r = e.pendingProps,
    i = Te.current,
    o = !1,
    s = (e.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
      l
        ? ((o = !0), (e.flags &= -129))
        : (t === null || t.memoizedState !== null) && (i |= 1),
      ge(Te, i & 1),
      t === null)
  )
    return (
      b5(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
          ? t.data === "$!"
            ? (e.lanes = 8)
            : (e.lanes = 1073741824)
          : (e.lanes = 1),
          null)
        : ((s = r.children),
          (t = r.fallback),
          o
            ? ((r = e.mode),
              (o = e.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = qi(s, r, 0, null)),
              (t = Fn(t, r, n, null)),
              (o.return = e),
              (t.return = e),
              (o.sibling = t),
              (e.child = o),
              (e.child.memoizedState = z5(n)),
              (e.memoizedState = I5),
              t)
            : u7(e, s))
    );
  if (((i = t.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Jf(t, e, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = e.mode), (i = t.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (e.deletions = null))
        : ((r = an(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = an(l, o)) : ((o = Fn(o, s, n, null)), (o.flags |= 2)),
      (o.return = e),
      (r.return = e),
      (r.sibling = o),
      (e.child = r),
      (r = o),
      (o = e.child),
      (s = t.child.memoizedState),
      (s =
        s === null
          ? z5(n)
          : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions,
          }),
      (o.memoizedState = s),
      (o.childLanes = t.childLanes & ~n),
      (e.memoizedState = I5),
      r
    );
  }
  return (
    (o = t.child),
    (t = o.sibling),
    (r = an(o, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
    ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function u7(t, e) {
  return (
    (e = qi({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function u0(t, e, n, r) {
  return (
    r !== null && G4(r),
    qr(e, t.child, null, n),
    (t = u7(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function Jf(t, e, n, r, i, o, s) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = P8(Error(z(422)))), u0(t, e, s, r))
      : e.memoizedState !== null
        ? ((e.child = t.child), (e.flags |= 128), null)
        : ((o = r.fallback),
          (i = e.mode),
          (r = qi({ mode: "visible", children: r.children }, i, 0, null)),
          (o = Fn(o, i, s, null)),
          (o.flags |= 2),
          (r.return = e),
          (o.return = e),
          (r.sibling = o),
          (e.child = r),
          e.mode & 1 && qr(e, t.child, null, s),
          (e.child.memoizedState = z5(s)),
          (e.memoizedState = I5),
          o);
  if (!(e.mode & 1)) return u0(t, e, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(z(419))), (r = P8(o, r, void 0)), u0(t, e, s, r);
  }
  if (((l = (s & t.childLanes) !== 0), H1 || l)) {
    if (((r = n1), r !== null)) {
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
        ((o.retryLane = i), b3(t, i), Yt(r, t, i, -1));
    }
    return p7(), (r = P8(Error(z(421)))), u0(t, e, s, r);
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = dd.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = o.treeContext),
      (st = rn(i.nextSibling)),
      (lt = e),
      (xe = !0),
      (Bt = null),
      t !== null &&
      ((_t[wt++] = S3),
        (_t[wt++] = x3),
        (_t[wt++] = Gn),
        (S3 = t.id),
        (x3 = t.overflow),
        (Gn = e)),
      (e = u7(e, r.children)),
      (e.flags |= 4096),
      e);
}
function U9(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), P5(t.return, e, n);
}
function N8(t, e, n, r, i) {
  var o = t.memoizedState;
  o === null
    ? (t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: i,
    })
    : ((o.isBackwards = e),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Il(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((M1(t, e, r.children, n), (r = Te.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null;) {
        if (t.tag === 13) t.memoizedState !== null && U9(t, n, e);
        else if (t.tag === 19) U9(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    r &= 1;
  }
  if ((ge(Te, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null;)
          (t = n.alternate),
            t !== null && di(t) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          N8(e, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null;) {
          if (((t = i.alternate), t !== null && di(t) === null)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = n), (n = i), (i = t);
        }
        N8(e, !0, n, null, o);
        break;
      case "together":
        N8(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function A0(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function P3(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
      (Kn |= e.lanes),
      !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(z(153));
  if (e.child !== null) {
    for (
      t = e.child, n = an(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = an(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function ed(t, e, n) {
  switch (e.tag) {
    case 3:
      Al(e), Gr();
      break;
    case 5:
      cl(e);
      break;
    case 1:
      W1(e.type) && si(e);
      break;
    case 4:
      t7(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      ge(ui, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ge(Te, Te.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
            ? Dl(t, e, n)
            : (ge(Te, Te.current & 1),
              (t = P3(t, e, n)),
              t !== null ? t.sibling : null);
      ge(Te, Te.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return Il(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
          i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          ge(Te, Te.current),
          r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Vl(t, e, n);
  }
  return P3(t, e, n);
}
var zl, F5, Fl, Hl;
zl = function (t, e) {
  for (var n = e.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
F5 = function () { };
Fl = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    (t = e.stateNode), An(u3.current);
    var o = null;
    switch (n) {
      case "input":
        (i = l5(t, i)), (r = l5(t, r)), (o = []);
        break;
      case "select":
        (i = be({}, i, { value: void 0 })),
          (r = be({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = c5(t, i)), (r = c5(t, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = ii);
    }
    d5(n, r);
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
            (C2.hasOwnProperty(u)
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
              (C2.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && ye("scroll", t),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
Hl = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function L6(t, e) {
  if (!xe)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null;)
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null;)
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function C1(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var i = t.child; i !== null;)
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling);
  else
    for (i = t.child; i !== null;)
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling);
  return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function td(t, e, n) {
  var r = e.pendingProps;
  switch ((X4(e), e.tag)) {
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
      return C1(e), null;
    case 1:
      return W1(e.type) && oi(), C1(e), null;
    case 3:
      return (
        (r = e.stateNode),
        Kr(),
        _e(B1),
        _e(w1),
        r7(),
        r.pendingContext &&
        ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
        (l0(e)
          ? (e.flags |= 4)
          : t === null ||
          (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
          ((e.flags |= 1024), Bt !== null && ($5(Bt), (Bt = null)))),
        F5(t, e),
        C1(e),
        null
      );
    case 5:
      n7(e);
      var i = An(T2.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        Fl(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(z(166));
          return C1(e), null;
        }
        if (((t = An(u3.current)), l0(e))) {
          (r = e.stateNode), (n = e.type);
          var o = e.memoizedProps;
          switch (((r[o3] = e), (r[k2] = o), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              ye("cancel", r), ye("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ye("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < I6.length; i++) ye(I6[i], r);
              break;
            case "source":
              ye("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ye("error", r), ye("load", r);
              break;
            case "details":
              ye("toggle", r);
              break;
            case "input":
              J7(r, o), ye("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ye("invalid", r);
              break;
            case "textarea":
              t9(r, o), ye("invalid", r);
          }
          d5(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                  (o.suppressHydrationWarning !== !0 &&
                    s0(r.textContent, l, t),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                  r.textContent !== "" + l &&
                  (o.suppressHydrationWarning !== !0 &&
                    s0(r.textContent, l, t),
                    (i = ["children", "" + l]))
                : C2.hasOwnProperty(s) &&
                l != null &&
                s === "onScroll" &&
                ye("scroll", r);
            }
          switch (n) {
            case "input":
              Q2(r), e9(r, o, !0);
              break;
            case "textarea":
              Q2(r), n9(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ii);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = hs(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = s.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                  ? (t = s.createElement(n, { is: r.is }))
                  : ((t = s.createElement(n)),
                    n === "select" &&
                    ((s = t),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (t = s.createElementNS(t, n)),
            (t[o3] = e),
            (t[k2] = r),
            zl(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((s = h5(n, r)), n)) {
              case "dialog":
                ye("cancel", t), ye("close", t), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ye("load", t), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < I6.length; i++) ye(I6[i], t);
                i = r;
                break;
              case "source":
                ye("error", t), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ye("error", t), ye("load", t), (i = r);
                break;
              case "details":
                ye("toggle", t), (i = r);
                break;
              case "input":
                J7(t, r), (i = l5(t, r)), ye("invalid", t);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = be({}, r, { value: void 0 })),
                  ye("invalid", t);
                break;
              case "textarea":
                t9(t, r), (i = c5(t, r)), ye("invalid", t);
                break;
              default:
                i = r;
            }
            d5(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? ms(t, a)
                  : o === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Cs(t, a))
                    : o === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && p2(t, a)
                        : typeof a == "number" && p2(t, "" + a)
                      : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (C2.hasOwnProperty(o)
                        ? a != null && o === "onScroll" && ye("scroll", t)
                        : a != null && V4(t, o, a, s));
              }
            switch (n) {
              case "input":
                Q2(t), e9(t, r, !1);
                break;
              case "textarea":
                Q2(t), n9(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                (t.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Ar(t, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                    Ar(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = ii);
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
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return C1(e), null;
    case 6:
      if (t && e.stateNode != null) Hl(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(z(166));
        if (((n = An(T2.current)), An(u3.current), l0(e))) {
          if (
            ((r = e.stateNode),
              (n = e.memoizedProps),
              (r[o3] = e),
              (o = r.nodeValue !== n) && ((t = lt), t !== null))
          )
            switch (t.tag) {
              case 3:
                s0(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  s0(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          o && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[o3] = e),
            (e.stateNode = r);
      }
      return C1(e), null;
    case 13:
      if (
        (_e(Te),
          (r = e.memoizedState),
          t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (xe && st !== null && e.mode & 1 && !(e.flags & 128))
          rl(), Gr(), (e.flags |= 98560), (o = !1);
        else if (((o = l0(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!o) throw Error(z(318));
            if (
              ((o = e.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
            )
              throw Error(z(317));
            o[o3] = e;
          } else
            Gr(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          C1(e), (o = !1);
        } else Bt !== null && ($5(Bt), (Bt = null)), (o = !0);
        if (!o) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
          r &&
          ((e.child.flags |= 8192),
            e.mode & 1 &&
            (t === null || Te.current & 1 ? $e === 0 && ($e = 3) : p7())),
          e.updateQueue !== null && (e.flags |= 4),
          C1(e),
          null);
    case 4:
      return (
        Kr(), F5(t, e), t === null && S2(e.stateNode.containerInfo), C1(e), null
      );
    case 10:
      return Q4(e.type._context), C1(e), null;
    case 17:
      return W1(e.type) && oi(), C1(e), null;
    case 19:
      if ((_e(Te), (o = e.memoizedState), o === null)) return C1(e), null;
      if (((r = (e.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) L6(o, !1);
        else {
          if ($e !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null;) {
              if (((s = di(t)), s !== null)) {
                for (
                  e.flags |= 128,
                  L6(o, !1),
                  r = s.updateQueue,
                  r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                  e.subtreeFlags = 0,
                  r = n,
                  n = e.child;
                  n !== null;

                )
                  (o = n),
                    (t = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = t),
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
                        (t = s.dependencies),
                        (o.dependencies =
                          t === null
                            ? null
                            : {
                              lanes: t.lanes,
                              firstContext: t.firstContext,
                            })),
                    (n = n.sibling);
                return ge(Te, (Te.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          o.tail !== null &&
            ze() > Jr &&
            ((e.flags |= 128), (r = !0), L6(o, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = di(s)), t !== null)) {
            if (
              ((e.flags |= 128),
                (r = !0),
                (n = t.updateQueue),
                n !== null && ((e.updateQueue = n), (e.flags |= 4)),
                L6(o, !0),
                o.tail === null && o.tailMode === "hidden" && !s.alternate && !xe)
            )
              return C1(e), null;
          } else
            2 * ze() - o.renderingStartTime > Jr &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), L6(o, !1), (e.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = e.child), (e.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (e.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((e = o.tail),
          (o.rendering = e),
          (o.tail = e.sibling),
          (o.renderingStartTime = ze()),
          (e.sibling = null),
          (n = Te.current),
          ge(Te, r ? (n & 1) | 2 : n & 1),
          e)
        : (C1(e), null);
    case 22:
    case 23:
      return (
        C7(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? et & 1073741824 && (C1(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : C1(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, e.tag));
}
function nd(t, e) {
  switch ((X4(e), e.tag)) {
    case 1:
      return (
        W1(e.type) && oi(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        Kr(),
        _e(B1),
        _e(w1),
        r7(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return n7(e), null;
    case 13:
      if (
        (_e(Te), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(z(340));
        Gr();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return _e(Te), null;
    case 4:
      return Kr(), null;
    case 10:
      return Q4(e.type._context), null;
    case 22:
    case 23:
      return C7(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var c0 = !1,
  g1 = !1,
  rd = typeof WeakSet == "function" ? WeakSet : Set,
  U = null;
function Lr(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ne(t, e, r);
      }
    else n.current = null;
}
function H5(t, e, n) {
  try {
    n();
  } catch (r) {
    Ne(t, e, r);
  }
}
var Y9 = !1;
function id(t, e) {
  if (((x5 = ti), (t = Us()), Z4(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
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
            c = 0,
            f = t,
            d = null;
          t: for (; ;) {
            for (
              var h;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
              f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
              f.nodeType === 3 && (s += f.nodeValue.length),
              (h = f.firstChild) !== null;

            )
              (d = f), (f = h);
            for (; ;) {
              if (f === t) break t;
              if (
                (d === n && ++u === i && (l = s),
                  d === o && ++c === r && (a = s),
                  (h = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = h;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (k5 = { focusedElem: t, selectionRange: n }, ti = !1, U = e; U !== null;)
    if (((e = U), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (U = t);
    else
      for (; U !== null;) {
        e = U;
        try {
          var v = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var m = v.memoizedProps,
                    k = v.memoizedState,
                    g = e.stateNode,
                    p = g.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? m : It(e.type, m),
                      k
                    );
                  g.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var _ = e.stateNode.containerInfo;
                _.nodeType === 1
                  ? (_.textContent = "")
                  : _.nodeType === 9 &&
                  _.documentElement &&
                  _.removeChild(_.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(z(163));
            }
        } catch (y) {
          Ne(e, e.return, y);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (U = t);
          break;
        }
        U = e.return;
      }
  return (v = Y9), (Y9 = !1), v;
}
function K6(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && H5(e, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Xi(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function B5(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function Bl(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), Bl(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
    ((e = t.stateNode),
      e !== null &&
      (delete e[o3], delete e[k2], delete e[L5], delete e[Hf], delete e[Bf])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function Wl(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Z9(t) {
  e: for (; ;) {
    for (; t.sibling === null;) {
      if (t.return === null || Wl(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function W5(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
          ? ((e = n.parentNode), e.insertBefore(t, n))
          : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = ii));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (W5(t, e, n), t = t.sibling; t !== null;) W5(t, e, n), (t = t.sibling);
}
function j5(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (j5(t, e, n), t = t.sibling; t !== null;) j5(t, e, n), (t = t.sibling);
}
var l1 = null,
  Ht = !1;
function F3(t, e, n) {
  for (n = n.child; n !== null;) jl(t, e, n), (n = n.sibling);
}
function jl(t, e, n) {
  if (a3 && typeof a3.onCommitFiberUnmount == "function")
    try {
      a3.onCommitFiberUnmount(Hi, n);
    } catch { }
  switch (n.tag) {
    case 5:
      g1 || Lr(n, e);
    case 6:
      var r = l1,
        i = Ht;
      (l1 = null),
        F3(t, e, n),
        (l1 = r),
        (Ht = i),
        l1 !== null &&
        (Ht
          ? ((t = l1),
            (n = n.stateNode),
            t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
          : l1.removeChild(n.stateNode));
      break;
    case 18:
      l1 !== null &&
        (Ht
          ? ((t = l1),
            (n = n.stateNode),
            t.nodeType === 8
              ? E8(t.parentNode, n)
              : t.nodeType === 1 && E8(t, n),
            y2(t))
          : E8(l1, n.stateNode));
      break;
    case 4:
      (r = l1),
        (i = Ht),
        (l1 = n.stateNode.containerInfo),
        (Ht = !0),
        F3(t, e, n),
        (l1 = r),
        (Ht = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !g1 &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && H5(n, e, s),
            (i = i.next);
        } while (i !== r);
      }
      F3(t, e, n);
      break;
    case 1:
      if (
        !g1 &&
        (Lr(n, e),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Ne(n, e, l);
        }
      F3(t, e, n);
      break;
    case 21:
      F3(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((g1 = (r = g1) || n.memoizedState !== null), F3(t, e, n), (g1 = r))
        : F3(t, e, n);
      break;
    default:
      F3(t, e, n);
  }
}
function $9(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new rd()),
      e.forEach(function (r) {
        var i = hd.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function At(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = t,
          s = e,
          l = s;
        e: for (; l !== null;) {
          switch (l.tag) {
            case 5:
              (l1 = l.stateNode), (Ht = !1);
              break e;
            case 3:
              (l1 = l.stateNode.containerInfo), (Ht = !0);
              break e;
            case 4:
              (l1 = l.stateNode.containerInfo), (Ht = !0);
              break e;
          }
          l = l.return;
        }
        if (l1 === null) throw Error(z(160));
        jl(o, s, i), (l1 = null), (Ht = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        Ne(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null;) Ul(e, t), (e = e.sibling);
}
function Ul(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((At(e, t), n3(t), r & 4)) {
        try {
          K6(3, t, t.return), Xi(3, t);
        } catch (m) {
          Ne(t, t.return, m);
        }
        try {
          K6(5, t, t.return);
        } catch (m) {
          Ne(t, t.return, m);
        }
      }
      break;
    case 1:
      At(e, t), n3(t), r & 512 && n !== null && Lr(n, n.return);
      break;
    case 5:
      if (
        (At(e, t),
          n3(t),
          r & 512 && n !== null && Lr(n, n.return),
          t.flags & 32)
      ) {
        var i = t.stateNode;
        try {
          p2(i, "");
        } catch (m) {
          Ne(t, t.return, m);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var o = t.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = t.type,
          a = t.updateQueue;
        if (((t.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && fs(i, o),
              h5(l, s);
            var u = h5(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? ms(i, f)
                : c === "dangerouslySetInnerHTML"
                  ? Cs(i, f)
                  : c === "children"
                    ? p2(i, f)
                    : V4(i, c, f, u);
            }
            switch (l) {
              case "input":
                a5(i, o);
                break;
              case "textarea":
                ds(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var h = o.value;
                h != null
                  ? Ar(i, !!o.multiple, h, !1)
                  : d !== !!o.multiple &&
                  (o.defaultValue != null
                    ? Ar(i, !!o.multiple, o.defaultValue, !0)
                    : Ar(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[k2] = o;
          } catch (m) {
            Ne(t, t.return, m);
          }
      }
      break;
    case 6:
      if ((At(e, t), n3(t), r & 4)) {
        if (t.stateNode === null) throw Error(z(162));
        (i = t.stateNode), (o = t.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (m) {
          Ne(t, t.return, m);
        }
      }
      break;
    case 3:
      if (
        (At(e, t), n3(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          y2(e.containerInfo);
        } catch (m) {
          Ne(t, t.return, m);
        }
      break;
    case 4:
      At(e, t), n3(t);
      break;
    case 13:
      At(e, t),
        n3(t),
        (i = t.child),
        i.flags & 8192 &&
        ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
          (i.alternate !== null && i.alternate.memoizedState !== null) ||
          (d7 = ze())),
        r & 4 && $9(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
          t.mode & 1 ? ((g1 = (u = g1) || c), At(e, t), (g1 = u)) : At(e, t),
          n3(t),
          r & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
            (t.stateNode.isHidden = u) && !c && t.mode & 1)
        )
          for (U = t, c = t.child; c !== null;) {
            for (f = U = c; U !== null;) {
              switch (((d = U), (h = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  K6(4, d, d.return);
                  break;
                case 1:
                  Lr(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (e = r),
                        (v.props = e.memoizedProps),
                        (v.state = e.memoizedState),
                        v.componentWillUnmount();
                    } catch (m) {
                      Ne(r, n, m);
                    }
                  }
                  break;
                case 5:
                  Lr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    G9(f);
                    continue;
                  }
              }
              h !== null ? ((h.return = d), (U = h)) : G9(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = t; ;) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = ps("display", s)));
              } catch (m) {
                Ne(t, t.return, m);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (m) {
                Ne(t, t.return, m);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === t) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === t) break e;
          for (; f.sibling === null;) {
            if (f.return === null || f.return === t) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      At(e, t), n3(t), r & 4 && $9(t);
      break;
    case 21:
      break;
    default:
      At(e, t), n3(t);
  }
}
function n3(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null;) {
          if (Wl(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(z(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (p2(i, ""), (r.flags &= -33));
          var o = Z9(t);
          j5(t, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Z9(t);
          W5(t, l, s);
          break;
        default:
          throw Error(z(161));
      }
    } catch (a) {
      Ne(t, t.return, a);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function od(t, e, n) {
  (U = t), Yl(t);
}
function Yl(t, e, n) {
  for (var r = (t.mode & 1) !== 0; U !== null;) {
    var i = U,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || c0;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || g1;
        l = c0;
        var u = g1;
        if (((c0 = s), (g1 = a) && !u))
          for (U = i; U !== null;)
            (s = U),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? q9(i)
                : a !== null
                  ? ((a.return = s), (U = a))
                  : q9(i);
        for (; o !== null;) (U = o), Yl(o), (o = o.sibling);
        (U = i), (c0 = l), (g1 = u);
      }
      X9(t);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (U = o)) : X9(t);
  }
}
function X9(t) {
  for (; U !== null;) {
    var e = U;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              g1 || Xi(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !g1)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : It(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = e.updateQueue;
              o !== null && P9(e, o, r);
              break;
            case 3:
              var s = e.updateQueue;
              if (s !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                P9(e, s, n);
              }
              break;
            case 5:
              var l = e.stateNode;
              if (n === null && e.flags & 4) {
                n = l;
                var a = e.memoizedProps;
                switch (e.type) {
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
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && y2(f);
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
              throw Error(z(163));
          }
        g1 || (e.flags & 512 && B5(e));
      } catch (d) {
        Ne(e, e.return, d);
      }
    }
    if (e === t) {
      U = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (U = n);
      break;
    }
    U = e.return;
  }
}
function G9(t) {
  for (; U !== null;) {
    var e = U;
    if (e === t) {
      U = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (U = n);
      break;
    }
    U = e.return;
  }
}
function q9(t) {
  for (; U !== null;) {
    var e = U;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            Xi(4, e);
          } catch (a) {
            Ne(e, n, a);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Ne(e, i, a);
            }
          }
          var o = e.return;
          try {
            B5(e);
          } catch (a) {
            Ne(e, o, a);
          }
          break;
        case 5:
          var s = e.return;
          try {
            B5(e);
          } catch (a) {
            Ne(e, s, a);
          }
      }
    } catch (a) {
      Ne(e, e.return, a);
    }
    if (e === t) {
      U = null;
      break;
    }
    var l = e.sibling;
    if (l !== null) {
      (l.return = e.return), (U = l);
      break;
    }
    U = e.return;
  }
}
var sd = Math.ceil,
  pi = R3.ReactCurrentDispatcher,
  c7 = R3.ReactCurrentOwner,
  Lt = R3.ReactCurrentBatchConfig,
  fe = 0,
  n1 = null,
  We = null,
  c1 = 0,
  et = 0,
  Mr = vn(0),
  $e = 0,
  b2 = null,
  Kn = 0,
  Gi = 0,
  f7 = 0,
  Q6 = null,
  z1 = null,
  d7 = 0,
  Jr = 1 / 0,
  g3 = null,
  mi = !1,
  U5 = null,
  sn = null,
  f0 = !1,
  Z3 = null,
  gi = 0,
  J6 = 0,
  Y5 = null,
  D0 = -1,
  I0 = 0;
function V1() {
  return fe & 6 ? ze() : D0 !== -1 ? D0 : (D0 = ze());
}
function ln(t) {
  return t.mode & 1
    ? fe & 2 && c1 !== 0
      ? c1 & -c1
      : jf.transition !== null
        ? (I0 === 0 && (I0 = Ms()), I0)
        : ((t = he),
          t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : As(t.type))),
          t)
    : 1;
}
function Yt(t, e, n, r) {
  if (50 < J6) throw ((J6 = 0), (Y5 = null), Error(z(185)));
  W2(t, n, r),
    (!(fe & 2) || t !== n1) &&
    (t === n1 && (!(fe & 2) && (Gi |= n), $e === 4 && U3(t, c1)),
      j1(t, r),
      n === 1 && fe === 0 && !(e.mode & 1) && ((Jr = ze() + 500), Yi && yn()));
}
function j1(t, e) {
  var n = t.callbackNode;
  Wc(t, e);
  var r = ei(t, t === n1 ? c1 : 0);
  if (r === 0)
    n !== null && o9(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && o9(n), e === 1))
      t.tag === 0 ? Wf(K9.bind(null, t)) : el(K9.bind(null, t)),
        zf(function () {
          !(fe & 6) && yn();
        }),
        (n = null);
    else {
      switch (Os(r)) {
        case 1:
          n = z4;
          break;
        case 4:
          n = Ts;
          break;
        case 16:
          n = J0;
          break;
        case 536870912:
          n = Ls;
          break;
        default:
          n = J0;
      }
      n = Jl(n, Zl.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function Zl(t, e) {
  if (((D0 = -1), (I0 = 0), fe & 6)) throw Error(z(327));
  var n = t.callbackNode;
  if (Hr() && t.callbackNode !== n) return null;
  var r = ei(t, t === n1 ? c1 : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = vi(t, r);
  else {
    e = r;
    var i = fe;
    fe |= 2;
    var o = Xl();
    (n1 !== t || c1 !== e) && ((g3 = null), (Jr = ze() + 500), zn(t, e));
    do
      try {
        ud();
        break;
      } catch (l) {
        $l(t, l);
      }
    while (1);
    K4(),
      (pi.current = o),
      (fe = i),
      We !== null ? (e = 0) : ((n1 = null), (c1 = 0), (e = $e));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = v5(t)), i !== 0 && ((r = i), (e = Z5(t, i)))), e === 1)
    )
      throw ((n = b2), zn(t, 0), U3(t, r), j1(t, ze()), n);
    if (e === 6) U3(t, r);
    else {
      if (
        ((i = t.current.alternate),
          !(r & 30) &&
          !ld(i) &&
          ((e = vi(t, r)),
            e === 2 && ((o = v5(t)), o !== 0 && ((r = o), (e = Z5(t, o)))),
            e === 1))
      )
        throw ((n = b2), zn(t, 0), U3(t, r), j1(t, ze()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          On(t, z1, g3);
          break;
        case 3:
          if (
            (U3(t, r), (r & 130023424) === r && ((e = d7 + 500 - ze()), 10 < e))
          ) {
            if (ei(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              V1(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = T5(On.bind(null, t, z1, g3), e);
            break;
          }
          On(t, z1, g3);
          break;
        case 4:
          if ((U3(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r;) {
            var s = 31 - Ut(r);
            (o = 1 << s), (s = e[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
              (r = ze() - r),
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
                            : 1960 * sd(r / 1960)) - r),
              10 < r)
          ) {
            t.timeoutHandle = T5(On.bind(null, t, z1, g3), r);
            break;
          }
          On(t, z1, g3);
          break;
        case 5:
          On(t, z1, g3);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return j1(t, ze()), t.callbackNode === n ? Zl.bind(null, t) : null;
}
function Z5(t, e) {
  var n = Q6;
  return (
    t.current.memoizedState.isDehydrated && (zn(t, e).flags |= 256),
    (t = vi(t, e)),
    t !== 2 && ((e = z1), (z1 = n), e !== null && $5(e)),
    t
  );
}
function $5(t) {
  z1 === null ? (z1 = t) : z1.push.apply(z1, t);
}
function ld(t) {
  for (var e = t; ;) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Gt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function U3(t, e) {
  for (
    e &= ~f7,
    e &= ~Gi,
    t.suspendedLanes |= e,
    t.pingedLanes &= ~e,
    t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - Ut(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function K9(t) {
  if (fe & 6) throw Error(z(327));
  Hr();
  var e = ei(t, 0);
  if (!(e & 1)) return j1(t, ze()), null;
  var n = vi(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = v5(t);
    r !== 0 && ((e = r), (n = Z5(t, r)));
  }
  if (n === 1) throw ((n = b2), zn(t, 0), U3(t, e), j1(t, ze()), n);
  if (n === 6) throw Error(z(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    On(t, z1, g3),
    j1(t, ze()),
    null
  );
}
function h7(t, e) {
  var n = fe;
  fe |= 1;
  try {
    return t(e);
  } finally {
    (fe = n), fe === 0 && ((Jr = ze() + 500), Yi && yn());
  }
}
function Qn(t) {
  Z3 !== null && Z3.tag === 0 && !(fe & 6) && Hr();
  var e = fe;
  fe |= 1;
  var n = Lt.transition,
    r = he;
  try {
    if (((Lt.transition = null), (he = 1), t)) return t();
  } finally {
    (he = r), (Lt.transition = n), (fe = e), !(fe & 6) && yn();
  }
}
function C7() {
  (et = Mr.current), _e(Mr);
}
function zn(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), If(n)), We !== null))
    for (n = We.return; n !== null;) {
      var r = n;
      switch ((X4(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && oi();
          break;
        case 3:
          Kr(), _e(B1), _e(w1), r7();
          break;
        case 5:
          n7(r);
          break;
        case 4:
          Kr();
          break;
        case 13:
          _e(Te);
          break;
        case 19:
          _e(Te);
          break;
        case 10:
          Q4(r.type._context);
          break;
        case 22:
        case 23:
          C7();
      }
      n = n.return;
    }
  if (
    ((n1 = t),
      (We = t = an(t.current, null)),
      (c1 = et = e),
      ($e = 0),
      (b2 = null),
      (f7 = Gi = Kn = 0),
      (z1 = Q6 = null),
      Rn !== null)
  ) {
    for (e = 0; e < Rn.length; e++)
      if (((n = Rn[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Rn = null;
  }
  return t;
}
function $l(t, e) {
  do {
    var n = We;
    try {
      if ((K4(), (V0.current = Ci), hi)) {
        for (var r = Oe.memoizedState; r !== null;) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        hi = !1;
      }
      if (
        ((qn = 0),
          (t1 = Ue = Oe = null),
          (q6 = !1),
          (L2 = 0),
          (c7.current = null),
          n === null || n.return === null)
      ) {
        ($e = 1), (b2 = e), (We = null);
        break;
      }
      e: {
        var o = t,
          s = n.return,
          l = n,
          a = e;
        if (
          ((e = c1),
            (l.flags |= 32768),
            a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = z9(s);
          if (h !== null) {
            (h.flags &= -257),
              F9(h, s, l, o, e),
              h.mode & 1 && I9(o, u, e),
              (e = h),
              (a = u);
            var v = e.updateQueue;
            if (v === null) {
              var m = new Set();
              m.add(a), (e.updateQueue = m);
            } else v.add(a);
            break e;
          } else {
            if (!(e & 1)) {
              I9(o, u, e), p7();
              break e;
            }
            a = Error(z(426));
          }
        } else if (xe && l.mode & 1) {
          var k = z9(s);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              F9(k, s, l, o, e),
              G4(Qr(a, l));
            break e;
          }
        }
        (o = a = Qr(a, l)),
          $e !== 4 && ($e = 2),
          Q6 === null ? (Q6 = [o]) : Q6.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (e &= -e), (o.lanes |= e);
              var g = bl(o, a, e);
              b9(o, g);
              break e;
            case 1:
              l = a;
              var p = o.type,
                _ = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (_ !== null &&
                    typeof _.componentDidCatch == "function" &&
                    (sn === null || !sn.has(_))))
              ) {
                (o.flags |= 65536), (e &= -e), (o.lanes |= e);
                var y = Pl(o, l, e);
                b9(o, y);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      ql(n);
    } catch (x) {
      (e = x), We === n && n !== null && (We = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Xl() {
  var t = pi.current;
  return (pi.current = Ci), t === null ? Ci : t;
}
function p7() {
  ($e === 0 || $e === 3 || $e === 2) && ($e = 4),
    n1 === null || (!(Kn & 268435455) && !(Gi & 268435455)) || U3(n1, c1);
}
function vi(t, e) {
  var n = fe;
  fe |= 2;
  var r = Xl();
  (n1 !== t || c1 !== e) && ((g3 = null), zn(t, e));
  do
    try {
      ad();
      break;
    } catch (i) {
      $l(t, i);
    }
  while (1);
  if ((K4(), (fe = n), (pi.current = r), We !== null)) throw Error(z(261));
  return (n1 = null), (c1 = 0), $e;
}
function ad() {
  for (; We !== null;) Gl(We);
}
function ud() {
  for (; We !== null && !Vc();) Gl(We);
}
function Gl(t) {
  var e = Ql(t.alternate, t, et);
  (t.memoizedProps = t.pendingProps),
    e === null ? ql(t) : (We = e),
    (c7.current = null);
}
function ql(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = nd(n, e)), n !== null)) {
        (n.flags &= 32767), (We = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        ($e = 6), (We = null);
        return;
      }
    } else if (((n = td(n, e, et)), n !== null)) {
      We = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      We = e;
      return;
    }
    We = e = t;
  } while (e !== null);
  $e === 0 && ($e = 5);
}
function On(t, e, n) {
  var r = he,
    i = Lt.transition;
  try {
    (Lt.transition = null), (he = 1), cd(t, e, n, r);
  } finally {
    (Lt.transition = i), (he = r);
  }
  return null;
}
function cd(t, e, n, r) {
  do Hr();
  while (Z3 !== null);
  if (fe & 6) throw Error(z(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(z(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (jc(t, o),
      t === n1 && ((We = n1 = null), (c1 = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      f0 ||
      ((f0 = !0),
        Jl(J0, function () {
          return Hr(), null;
        })),
      (o = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || o)
  ) {
    (o = Lt.transition), (Lt.transition = null);
    var s = he;
    he = 1;
    var l = fe;
    (fe |= 4),
      (c7.current = null),
      id(t, n),
      Ul(n, t),
      bf(k5),
      (ti = !!x5),
      (k5 = x5 = null),
      (t.current = n),
      od(n),
      Rc(),
      (fe = l),
      (he = s),
      (Lt.transition = o);
  } else t.current = n;
  if (
    (f0 && ((f0 = !1), (Z3 = t), (gi = i)),
      (o = t.pendingLanes),
      o === 0 && (sn = null),
      Ic(n.stateNode),
      j1(t, ze()),
      e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (mi) throw ((mi = !1), (t = U5), (U5 = null), t);
  return (
    gi & 1 && t.tag !== 0 && Hr(),
    (o = t.pendingLanes),
    o & 1 ? (t === Y5 ? J6++ : ((J6 = 0), (Y5 = t))) : (J6 = 0),
    yn(),
    null
  );
}
function Hr() {
  if (Z3 !== null) {
    var t = Os(gi),
      e = Lt.transition,
      n = he;
    try {
      if (((Lt.transition = null), (he = 16 > t ? 16 : t), Z3 === null))
        var r = !1;
      else {
        if (((t = Z3), (Z3 = null), (gi = 0), fe & 6)) throw Error(z(331));
        var i = fe;
        for (fe |= 4, U = t.current; U !== null;) {
          var o = U,
            s = o.child;
          if (U.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (U = u; U !== null;) {
                  var c = U;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      K6(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (U = f);
                  else
                    for (; U !== null;) {
                      c = U;
                      var d = c.sibling,
                        h = c.return;
                      if ((Bl(c), c === u)) {
                        U = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = h), (U = d);
                        break;
                      }
                      U = h;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var m = v.child;
                if (m !== null) {
                  v.child = null;
                  do {
                    var k = m.sibling;
                    (m.sibling = null), (m = k);
                  } while (m !== null);
                }
              }
              U = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (U = s);
          else
            e: for (; U !== null;) {
              if (((o = U), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    K6(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (U = g);
                break e;
              }
              U = o.return;
            }
        }
        var p = t.current;
        for (U = p; U !== null;) {
          s = U;
          var _ = s.child;
          if (s.subtreeFlags & 2064 && _ !== null) (_.return = s), (U = _);
          else
            e: for (s = p; U !== null;) {
              if (((l = U), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xi(9, l);
                  }
                } catch (x) {
                  Ne(l, l.return, x);
                }
              if (l === s) {
                U = null;
                break e;
              }
              var y = l.sibling;
              if (y !== null) {
                (y.return = l.return), (U = y);
                break e;
              }
              U = l.return;
            }
        }
        if (
          ((fe = i), yn(), a3 && typeof a3.onPostCommitFiberRoot == "function")
        )
          try {
            a3.onPostCommitFiberRoot(Hi, t);
          } catch { }
        r = !0;
      }
      return r;
    } finally {
      (he = n), (Lt.transition = e);
    }
  }
  return !1;
}
function Q9(t, e, n) {
  (e = Qr(n, e)),
    (e = bl(t, e, 1)),
    (t = on(t, e, 1)),
    (e = V1()),
    t !== null && (W2(t, 1, e), j1(t, e));
}
function Ne(t, e, n) {
  if (t.tag === 3) Q9(t, t, n);
  else
    for (; e !== null;) {
      if (e.tag === 3) {
        Q9(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (sn === null || !sn.has(r)))
        ) {
          (t = Qr(n, t)),
            (t = Pl(e, t, 1)),
            (e = on(e, t, 1)),
            (t = V1()),
            e !== null && (W2(e, 1, t), j1(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function fd(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = V1()),
    (t.pingedLanes |= t.suspendedLanes & n),
    n1 === t &&
    (c1 & n) === n &&
    ($e === 4 || ($e === 3 && (c1 & 130023424) === c1 && 500 > ze() - d7)
      ? zn(t, 0)
      : (f7 |= n)),
    j1(t, e);
}
function Kl(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = t0), (t0 <<= 1), !(t0 & 130023424) && (t0 = 4194304))
      : (e = 1));
  var n = V1();
  (t = b3(t, e)), t !== null && (W2(t, e, n), j1(t, n));
}
function dd(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), Kl(t, n);
}
function hd(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(z(314));
  }
  r !== null && r.delete(e), Kl(t, n);
}
var Ql;
Ql = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || B1.current) H1 = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (H1 = !1), ed(t, e, n);
      H1 = !!(t.flags & 131072);
    }
  else (H1 = !1), xe && e.flags & 1048576 && tl(e, ai, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      A0(t, e), (t = e.pendingProps);
      var i = Xr(e, w1.current);
      Fr(e, n), (i = o7(null, e, r, t, i, n));
      var o = s7();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            W1(r) ? ((o = !0), si(e)) : (o = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            e7(e),
            (i.updater = Zi),
            (e.stateNode = i),
            (i._reactInternals = e),
            V5(e, r, t, n),
            (e = D5(null, e, r, !0, o, n)))
          : ((e.tag = 0), xe && o && $4(e), M1(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
        (A0(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = pd(r)),
          (t = It(r, t)),
          i)
        ) {
          case 0:
            e = A5(null, e, r, t, n);
            break e;
          case 1:
            e = W9(null, e, r, t, n);
            break e;
          case 11:
            e = H9(null, e, r, t, n);
            break e;
          case 14:
            e = B9(null, e, r, It(r.type, t), n);
            break e;
        }
        throw Error(z(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : It(r, i)),
        A5(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : It(r, i)),
        W9(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((Al(e), t === null)) throw Error(z(387));
        (r = e.pendingProps),
          (o = e.memoizedState),
          (i = o.element),
          ol(t, e),
          fi(e, r, null, n);
        var s = e.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
              (e.updateQueue.baseState = o),
              (e.memoizedState = o),
              e.flags & 256)
          ) {
            (i = Qr(Error(z(423)), e)), (e = j9(t, e, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Qr(Error(z(424)), e)), (e = j9(t, e, r, n, i));
            break e;
          } else
            for (
              st = rn(e.stateNode.containerInfo.firstChild),
              lt = e,
              xe = !0,
              Bt = null,
              n = ul(e, null, r, n),
              e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Gr(), r === i)) {
            e = P3(t, e, n);
            break e;
          }
          M1(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        cl(e),
        t === null && b5(e),
        (r = e.type),
        (i = e.pendingProps),
        (o = t !== null ? t.memoizedProps : null),
        (s = i.children),
        E5(r, i) ? (s = null) : o !== null && E5(r, o) && (e.flags |= 32),
        Rl(t, e),
        M1(t, e, s, n),
        e.child
      );
    case 6:
      return t === null && b5(e), null;
    case 13:
      return Dl(t, e, n);
    case 4:
      return (
        t7(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = qr(e, null, r, n)) : M1(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : It(r, i)),
        H9(t, e, r, i, n)
      );
    case 7:
      return M1(t, e, e.pendingProps, n), e.child;
    case 8:
      return M1(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return M1(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
            (i = e.pendingProps),
            (o = e.memoizedProps),
            (s = i.value),
            ge(ui, r._currentValue),
            (r._currentValue = s),
            o !== null)
        )
          if (Gt(o.value, s)) {
            if (o.children === i.children && !B1.current) {
              e = P3(t, e, n);
              break e;
            }
          } else
            for (o = e.child, o !== null && (o.return = e); o !== null;) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null;) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = E3(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      P5(o.return, n, e),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === e.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(z(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  P5(s, n, e),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null;) {
                  if (s === e) {
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
        M1(t, e, i.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        Fr(e, n),
        (i = Ot(i)),
        (r = r(i)),
        (e.flags |= 1),
        M1(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (i = It(r, e.pendingProps)),
        (i = It(r.type, i)),
        B9(t, e, r, i, n)
      );
    case 15:
      return Nl(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : It(r, i)),
        A0(t, e),
        (e.tag = 1),
        W1(r) ? ((t = !0), si(e)) : (t = !1),
        Fr(e, n),
        ll(e, r, i),
        V5(e, r, i, n),
        D5(null, e, r, !0, t, n)
      );
    case 19:
      return Il(t, e, n);
    case 22:
      return Vl(t, e, n);
  }
  throw Error(z(156, e.tag));
};
function Jl(t, e) {
  return Es(t, e);
}
function Cd(t, e, n, r) {
  (this.tag = t),
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
    (this.pendingProps = e),
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
function xt(t, e, n, r) {
  return new Cd(t, e, n, r);
}
function m7(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function pd(t) {
  if (typeof t == "function") return m7(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === A4)) return 11;
    if (t === D4) return 14;
  }
  return 2;
}
function an(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = xt(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function z0(t, e, n, r, i, o) {
  var s = 2;
  if (((r = t), typeof t == "function")) m7(t) && (s = 1);
  else if (typeof t == "string") s = 5;
  else
    e: switch (t) {
      case vr:
        return Fn(n.children, i, o, e);
      case R4:
        (s = 8), (i |= 8);
        break;
      case r5:
        return (
          (t = xt(12, n, e, i | 2)), (t.elementType = r5), (t.lanes = o), t
        );
      case i5:
        return (t = xt(13, n, e, i)), (t.elementType = i5), (t.lanes = o), t;
      case o5:
        return (t = xt(19, n, e, i)), (t.elementType = o5), (t.lanes = o), t;
      case as:
        return qi(n, i, o, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case ss:
              s = 10;
              break e;
            case ls:
              s = 9;
              break e;
            case A4:
              s = 11;
              break e;
            case D4:
              s = 14;
              break e;
            case B3:
              (s = 16), (r = null);
              break e;
          }
        throw Error(z(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = xt(s, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = o), e
  );
}
function Fn(t, e, n, r) {
  return (t = xt(7, t, r, e)), (t.lanes = n), t;
}
function qi(t, e, n, r) {
  return (
    (t = xt(22, t, r, e)),
    (t.elementType = as),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function V8(t, e, n) {
  return (t = xt(6, t, null, e)), (t.lanes = n), t;
}
function R8(t, e, n) {
  return (
    (e = xt(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function md(t, e, n, r, i) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
      null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = C8(0)),
    (this.expirationTimes = C8(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
      0),
    (this.entanglements = C8(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function g7(t, e, n, r, i, o, s, l, a) {
  return (
    (t = new md(t, e, n, l, a)),
    e === 1 ? ((e = 1), o === !0 && (e |= 8)) : (e = 0),
    (o = xt(3, null, null, e)),
    (t.current = o),
    (o.stateNode = t),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    e7(o),
    t
  );
}
function gd(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: gr,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function ea(t) {
  if (!t) return hn;
  t = t._reactInternals;
  e: {
    if (or(t) !== t || t.tag !== 1) throw Error(z(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (W1(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(z(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (W1(n)) return Js(t, n, e);
  }
  return e;
}
function ta(t, e, n, r, i, o, s, l, a) {
  return (
    (t = g7(n, r, !0, t, i, o, s, l, a)),
    (t.context = ea(null)),
    (n = t.current),
    (r = V1()),
    (i = ln(n)),
    (o = E3(r, i)),
    (o.callback = e ?? null),
    on(n, o, i),
    (t.current.lanes = i),
    W2(t, i, r),
    j1(t, r),
    t
  );
}
function Ki(t, e, n, r) {
  var i = e.current,
    o = V1(),
    s = ln(i);
  return (
    (n = ea(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = E3(o, s)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = on(i, e, s)),
    t !== null && (Yt(t, i, s, o), N0(t, i, s)),
    s
  );
}
function yi(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function J9(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function v7(t, e) {
  J9(t, e), (t = t.alternate) && J9(t, e);
}
function vd() {
  return null;
}
var na =
  typeof reportError == "function"
    ? reportError
    : function (t) {
      console.error(t);
    };
function y7(t) {
  this._internalRoot = t;
}
Qi.prototype.render = y7.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(z(409));
  Ki(t, e, null, null);
};
Qi.prototype.unmount = y7.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Qn(function () {
      Ki(null, t, null, null);
    }),
      (e[O3] = null);
  }
};
function Qi(t) {
  this._internalRoot = t;
}
Qi.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Ns();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < j3.length && e !== 0 && e < j3[n].priority; n++);
    j3.splice(n, 0, t), n === 0 && Rs(t);
  }
};
function _7(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Ji(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function eo() { }
function yd(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = yi(s);
        o.call(u);
      };
    }
    var s = ta(e, r, t, 0, null, !1, !1, "", eo);
    return (
      (t._reactRootContainer = s),
      (t[O3] = s.current),
      S2(t.nodeType === 8 ? t.parentNode : t),
      Qn(),
      s
    );
  }
  for (; (i = t.lastChild);) t.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = yi(a);
      l.call(u);
    };
  }
  var a = g7(t, 0, !1, null, null, !1, !1, "", eo);
  return (
    (t._reactRootContainer = a),
    (t[O3] = a.current),
    S2(t.nodeType === 8 ? t.parentNode : t),
    Qn(function () {
      Ki(e, a, n, r);
    }),
    a
  );
}
function e8(t, e, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = yi(s);
        l.call(a);
      };
    }
    Ki(e, s, t, i);
  } else s = yd(n, e, t, i, r);
  return yi(s);
}
bs = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = D6(e.pendingLanes);
        n !== 0 &&
          (F4(e, n | 1), j1(e, ze()), !(fe & 6) && ((Jr = ze() + 500), yn()));
      }
      break;
    case 13:
      Qn(function () {
        var r = b3(t, 1);
        if (r !== null) {
          var i = V1();
          Yt(r, t, 1, i);
        }
      }),
        v7(t, 1);
  }
};
H4 = function (t) {
  if (t.tag === 13) {
    var e = b3(t, 134217728);
    if (e !== null) {
      var n = V1();
      Yt(e, t, 134217728, n);
    }
    v7(t, 134217728);
  }
};
Ps = function (t) {
  if (t.tag === 13) {
    var e = ln(t),
      n = b3(t, e);
    if (n !== null) {
      var r = V1();
      Yt(n, t, e, r);
    }
    v7(t, e);
  }
};
Ns = function () {
  return he;
};
Vs = function (t, e) {
  var n = he;
  try {
    return (he = t), e();
  } finally {
    he = n;
  }
};
p5 = function (t, e, n) {
  switch (e) {
    case "input":
      if ((a5(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode;) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
          e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = Ui(r);
            if (!i) throw Error(z(90));
            cs(r), a5(r, i);
          }
        }
      }
      break;
    case "textarea":
      ds(t, n);
      break;
    case "select":
      (e = n.value), e != null && Ar(t, !!n.multiple, e, !1);
  }
};
ys = h7;
_s = Qn;
var _d = { usingClientEntryPoint: !1, Events: [U2, Sr, Ui, gs, vs, h7] },
  M6 = {
    findFiberByHostInstance: Vn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  wd = {
    bundleType: M6.bundleType,
    version: M6.version,
    rendererPackageName: M6.rendererPackageName,
    rendererConfig: M6.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: R3.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = xs(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: M6.findFiberByHostInstance || vd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var d0 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!d0.isDisabled && d0.supportsFiber)
    try {
      (Hi = d0.inject(wd)), (a3 = d0);
    } catch { }
}
ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _d;
ft.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!_7(e)) throw Error(z(200));
  return gd(t, e, null, n);
};
ft.createRoot = function (t, e) {
  if (!_7(t)) throw Error(z(299));
  var n = !1,
    r = "",
    i = na;
  return (
    e != null &&
    (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = g7(t, 1, !1, null, null, n, !1, r, i)),
    (t[O3] = e.current),
    S2(t.nodeType === 8 ? t.parentNode : t),
    new y7(e)
  );
};
ft.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(z(188))
      : ((t = Object.keys(t).join(",")), Error(z(268, t)));
  return (t = xs(e)), (t = t === null ? null : t.stateNode), t;
};
ft.flushSync = function (t) {
  return Qn(t);
};
ft.hydrate = function (t, e, n) {
  if (!Ji(e)) throw Error(z(200));
  return e8(null, t, e, !0, n);
};
ft.hydrateRoot = function (t, e, n) {
  if (!_7(t)) throw Error(z(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = na;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
      (e = ta(e, null, t, 1, n ?? null, i, !1, o, s)),
      (t[O3] = e.current),
      S2(t),
      r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i);
  return new Qi(e);
};
ft.render = function (t, e, n) {
  if (!Ji(e)) throw Error(z(200));
  return e8(null, t, e, !1, n);
};
ft.unmountComponentAtNode = function (t) {
  if (!Ji(t)) throw Error(z(40));
  return t._reactRootContainer
    ? (Qn(function () {
      e8(null, null, t, !1, function () {
        (t._reactRootContainer = null), (t[O3] = null);
      });
    }),
      !0)
    : !1;
};
ft.unstable_batchedUpdates = h7;
ft.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!Ji(n)) throw Error(z(200));
  if (t == null || t._reactInternals === void 0) throw Error(z(38));
  return e8(t, e, n, !1, r);
};
ft.version = "18.2.0-next-9e3b772b8-20220608";
(function (t) {
  function e() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  e(), (t.exports = ft);
})(gc);
var to = G0;
(e5.createRoot = to.createRoot), (e5.hydrateRoot = to.hydrateRoot);
function t8(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function no(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(t, r.key, r);
  }
}
function n8(t, e, n) {
  return e && no(t.prototype, e), n && no(t, n), t;
}
function Sd(t, e, n) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      })
      : (t[e] = n),
    t
  );
}
function ro(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function A8(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? ro(Object(n), !0).forEach(function (r) {
        Sd(t, r, n[r]);
      })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : ro(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function ra(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    e && X5(t, e);
}
function Zt(t) {
  return (
    (Zt = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
        return n.__proto__ || Object.getPrototypeOf(n);
      }),
    Zt(t)
  );
}
function X5(t, e) {
  return (
    (X5 =
      Object.setPrototypeOf ||
      function (r, i) {
        return (r.__proto__ = i), r;
      }),
    X5(t, e)
  );
}
function xd() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Date.prototype.toString.call(Reflect.construct(Date, [], function () { })),
      !0
    );
  } catch {
    return !1;
  }
}
function ia(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function kd(t, e) {
  return e && (typeof e == "object" || typeof e == "function") ? e : ia(t);
}
function oa(t) {
  var e = xd();
  return function () {
    var r = Zt(t),
      i;
    if (e) {
      var o = Zt(this).constructor;
      i = Reflect.construct(r, arguments, o);
    } else i = r.apply(this, arguments);
    return kd(this, i);
  };
}
function Ed(t, e) {
  for (
    ;
    !Object.prototype.hasOwnProperty.call(t, e) && ((t = Zt(t)), t !== null);

  );
  return t;
}
function T3(t, e, n) {
  return (
    typeof Reflect < "u" && Reflect.get
      ? (T3 = Reflect.get)
      : (T3 = function (i, o, s) {
        var l = Ed(i, o);
        if (l) {
          var a = Object.getOwnPropertyDescriptor(l, o);
          return a.get ? a.get.call(s) : a.value;
        }
      }),
    T3(t, e, n || t)
  );
}
function Or(t, e) {
  return Md(t) || bd(t, e) || sa(t, e) || Nd();
}
function Td(t) {
  return Ld(t) || Od(t) || sa(t) || Pd();
}
function Ld(t) {
  if (Array.isArray(t)) return G5(t);
}
function Md(t) {
  if (Array.isArray(t)) return t;
}
function Od(t) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(t)) return Array.from(t);
}
function bd(t, e) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(t)))) {
    var n = [],
      r = !0,
      i = !1,
      o = void 0;
    try {
      for (
        var s = t[Symbol.iterator](), l;
        !(r = (l = s.next()).done) && (n.push(l.value), !(e && n.length === e));
        r = !0
      );
    } catch (a) {
      (i = !0), (o = a);
    } finally {
      try {
        !r && s.return != null && s.return();
      } finally {
        if (i) throw o;
      }
    }
    return n;
  }
}
function sa(t, e) {
  if (t) {
    if (typeof t == "string") return G5(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (n === "Object" && t.constructor && (n = t.constructor.name),
        n === "Map" || n === "Set")
    )
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return G5(t, e);
  }
}
function G5(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function Pd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Br = {
  el: document,
  name: "scroll",
  offset: [0, 0],
  repeat: !1,
  smooth: !1,
  initPosition: { x: 0, y: 0 },
  direction: "vertical",
  gestureDirection: "vertical",
  reloadOnContextChange: !1,
  lerp: 0.1,
  class: "is-inview",
  scrollbarContainer: !1,
  scrollbarClass: "c-scrollbar",
  scrollingClass: "has-scroll-scrolling",
  draggingClass: "has-scroll-dragging",
  smoothClass: "has-scroll-smooth",
  initClass: "has-scroll-init",
  getSpeed: !1,
  getDirection: !1,
  scrollFromAnywhere: !1,
  multiplier: 1,
  firefoxMultiplier: 50,
  touchMultiplier: 2,
  resetNativeScroll: !0,
  tablet: {
    smooth: !1,
    direction: "vertical",
    gestureDirection: "vertical",
    breakpoint: 1024,
  },
  smartphone: {
    smooth: !1,
    direction: "vertical",
    gestureDirection: "vertical",
  },
},
  la = (function () {
    function t() {
      var e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      t8(this, t),
        Object.assign(this, Br, e),
        (this.smartphone = Br.smartphone),
        e.smartphone && Object.assign(this.smartphone, e.smartphone),
        (this.tablet = Br.tablet),
        e.tablet && Object.assign(this.tablet, e.tablet),
        (this.namespace = "locomotive"),
        (this.html = document.documentElement),
        (this.windowHeight = window.innerHeight),
        (this.windowWidth = window.innerWidth),
        (this.windowMiddle = {
          x: this.windowWidth / 2,
          y: this.windowHeight / 2,
        }),
        (this.els = {}),
        (this.currentElements = {}),
        (this.listeners = {}),
        (this.hasScrollTicking = !1),
        (this.hasCallEventSet = !1),
        (this.checkScroll = this.checkScroll.bind(this)),
        (this.checkResize = this.checkResize.bind(this)),
        (this.checkEvent = this.checkEvent.bind(this)),
        (this.instance = {
          scroll: { x: 0, y: 0 },
          limit: { x: this.html.offsetWidth, y: this.html.offsetHeight },
          currentElements: this.currentElements,
        }),
        this.isMobile
          ? this.isTablet
            ? (this.context = "tablet")
            : (this.context = "smartphone")
          : (this.context = "desktop"),
        this.isMobile && (this.direction = this[this.context].direction),
        this.direction === "horizontal"
          ? (this.directionAxis = "x")
          : (this.directionAxis = "y"),
        this.getDirection && (this.instance.direction = null),
        this.getDirection && (this.instance.speed = 0),
        this.html.classList.add(this.initClass),
        window.addEventListener("resize", this.checkResize, !1);
    }
    return (
      n8(t, [
        {
          key: "init",
          value: function () {
            this.initEvents();
          },
        },
        {
          key: "checkScroll",
          value: function () {
            this.dispatchScroll();
          },
        },
        {
          key: "checkResize",
          value: function () {
            var n = this;
            this.resizeTick ||
              ((this.resizeTick = !0),
                requestAnimationFrame(function () {
                  n.resize(), (n.resizeTick = !1);
                }));
          },
        },
        { key: "resize", value: function () { } },
        {
          key: "checkContext",
          value: function () {
            if (this.reloadOnContextChange) {
              (this.isMobile =
                /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                ) ||
                (navigator.platform === "MacIntel" &&
                  navigator.maxTouchPoints > 1) ||
                this.windowWidth < this.tablet.breakpoint),
                (this.isTablet =
                  this.isMobile && this.windowWidth >= this.tablet.breakpoint);
              var n = this.context;
              if (
                (this.isMobile
                  ? this.isTablet
                    ? (this.context = "tablet")
                    : (this.context = "smartphone")
                  : (this.context = "desktop"),
                  n != this.context)
              ) {
                var r = n == "desktop" ? this.smooth : this[n].smooth,
                  i =
                    this.context == "desktop"
                      ? this.smooth
                      : this[this.context].smooth;
                r != i && window.location.reload();
              }
            }
          },
        },
        {
          key: "initEvents",
          value: function () {
            var n = this;
            (this.scrollToEls = this.el.querySelectorAll(
              "[data-".concat(this.name, "-to]")
            )),
              (this.setScrollTo = this.setScrollTo.bind(this)),
              this.scrollToEls.forEach(function (r) {
                r.addEventListener("click", n.setScrollTo, !1);
              });
          },
        },
        {
          key: "setScrollTo",
          value: function (n) {
            n.preventDefault(),
              this.scrollTo(
                n.currentTarget.getAttribute(
                  "data-".concat(this.name, "-href")
                ) || n.currentTarget.getAttribute("href"),
                {
                  offset: n.currentTarget.getAttribute(
                    "data-".concat(this.name, "-offset")
                  ),
                }
              );
          },
        },
        { key: "addElements", value: function () { } },
        {
          key: "detectElements",
          value: function (n) {
            var r = this,
              i = this.instance.scroll.y,
              o = i + this.windowHeight,
              s = this.instance.scroll.x,
              l = s + this.windowWidth;
            Object.entries(this.els).forEach(function (a) {
              var u = Or(a, 2),
                c = u[0],
                f = u[1];
              if (
                (f &&
                  (!f.inView || n) &&
                  (r.direction === "horizontal"
                    ? l >= f.left && s < f.right && r.setInView(f, c)
                    : o >= f.top && i < f.bottom && r.setInView(f, c)),
                  f && f.inView)
              )
                if (r.direction === "horizontal") {
                  var d = f.right - f.left;
                  (f.progress =
                    (r.instance.scroll.x - (f.left - r.windowWidth)) /
                    (d + r.windowWidth)),
                    (l < f.left || s > f.right) && r.setOutOfView(f, c);
                } else {
                  var h = f.bottom - f.top;
                  (f.progress =
                    (r.instance.scroll.y - (f.top - r.windowHeight)) /
                    (h + r.windowHeight)),
                    (o < f.top || i > f.bottom) && r.setOutOfView(f, c);
                }
            }),
              (this.hasScrollTicking = !1);
          },
        },
        {
          key: "setInView",
          value: function (n, r) {
            (this.els[r].inView = !0),
              n.el.classList.add(n.class),
              (this.currentElements[r] = n),
              n.call &&
              this.hasCallEventSet &&
              (this.dispatchCall(n, "enter"),
                n.repeat || (this.els[r].call = !1));
          },
        },
        {
          key: "setOutOfView",
          value: function (n, r) {
            var i = this;
            (this.els[r].inView = !1),
              Object.keys(this.currentElements).forEach(function (o) {
                o === r && delete i.currentElements[o];
              }),
              n.call && this.hasCallEventSet && this.dispatchCall(n, "exit"),
              n.repeat && n.el.classList.remove(n.class);
          },
        },
        {
          key: "dispatchCall",
          value: function (n, r) {
            (this.callWay = r),
              (this.callValue = n.call.split(",").map(function (o) {
                return o.trim();
              })),
              (this.callObj = n),
              this.callValue.length == 1 &&
              (this.callValue = this.callValue[0]);
            var i = new Event(this.namespace + "call");
            this.el.dispatchEvent(i);
          },
        },
        {
          key: "dispatchScroll",
          value: function () {
            var n = new Event(this.namespace + "scroll");
            this.el.dispatchEvent(n);
          },
        },
        {
          key: "setEvents",
          value: function (n, r) {
            this.listeners[n] || (this.listeners[n] = []);
            var i = this.listeners[n];
            i.push(r),
              i.length === 1 &&
              this.el.addEventListener(
                this.namespace + n,
                this.checkEvent,
                !1
              ),
              n === "call" &&
              ((this.hasCallEventSet = !0), this.detectElements(!0));
          },
        },
        {
          key: "unsetEvents",
          value: function (n, r) {
            if (this.listeners[n]) {
              var i = this.listeners[n],
                o = i.indexOf(r);
              o < 0 ||
                (i.splice(o, 1),
                  i.index === 0 &&
                  this.el.removeEventListener(
                    this.namespace + n,
                    this.checkEvent,
                    !1
                  ));
            }
          },
        },
        {
          key: "checkEvent",
          value: function (n) {
            var r = this,
              i = n.type.replace(this.namespace, ""),
              o = this.listeners[i];
            !o ||
              o.length === 0 ||
              o.forEach(function (s) {
                switch (i) {
                  case "scroll":
                    return s(r.instance);
                  case "call":
                    return s(r.callValue, r.callWay, r.callObj);
                  default:
                    return s();
                }
              });
          },
        },
        { key: "startScroll", value: function () { } },
        { key: "stopScroll", value: function () { } },
        {
          key: "setScroll",
          value: function (n, r) {
            this.instance.scroll = { x: 0, y: 0 };
          },
        },
        {
          key: "destroy",
          value: function () {
            var n = this;
            window.removeEventListener("resize", this.checkResize, !1),
              Object.keys(this.listeners).forEach(function (r) {
                n.el.removeEventListener(n.namespace + r, n.checkEvent, !1);
              }),
              (this.listeners = {}),
              this.scrollToEls.forEach(function (r) {
                r.removeEventListener("click", n.setScrollTo, !1);
              }),
              this.html.classList.remove(this.initClass);
          },
        },
      ]),
      t
    );
  })(),
  Vd =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {};
function aa(t, e) {
  return (e = { exports: {} }), t(e, e.exports), e.exports;
}
var ua = aa(function (t, e) {
  (function () {
    function n() {
      var r = window,
        i = document;
      if (
        "scrollBehavior" in i.documentElement.style &&
        r.__forceSmoothScrollPolyfill__ !== !0
      )
        return;
      var o = r.HTMLElement || r.Element,
        s = 468,
        l = {
          scroll: r.scroll || r.scrollTo,
          scrollBy: r.scrollBy,
          elementScroll: o.prototype.scroll || f,
          scrollIntoView: o.prototype.scrollIntoView,
        },
        a =
          r.performance && r.performance.now
            ? r.performance.now.bind(r.performance)
            : Date.now;
      function u(y) {
        var x = ["MSIE ", "Trident/", "Edge/"];
        return new RegExp(x.join("|")).test(y);
      }
      var c = u(r.navigator.userAgent) ? 1 : 0;
      function f(y, x) {
        (this.scrollLeft = y), (this.scrollTop = x);
      }
      function d(y) {
        return 0.5 * (1 - Math.cos(Math.PI * y));
      }
      function h(y) {
        if (
          y === null ||
          typeof y != "object" ||
          y.behavior === void 0 ||
          y.behavior === "auto" ||
          y.behavior === "instant"
        )
          return !0;
        if (typeof y == "object" && y.behavior === "smooth") return !1;
        throw new TypeError(
          "behavior member of ScrollOptions " +
          y.behavior +
          " is not a valid value for enumeration ScrollBehavior."
        );
      }
      function v(y, x) {
        if (x === "Y") return y.clientHeight + c < y.scrollHeight;
        if (x === "X") return y.clientWidth + c < y.scrollWidth;
      }
      function m(y, x) {
        var T = r.getComputedStyle(y, null)["overflow" + x];
        return T === "auto" || T === "scroll";
      }
      function k(y) {
        var x = v(y, "Y") && m(y, "Y"),
          T = v(y, "X") && m(y, "X");
        return x || T;
      }
      function g(y) {
        for (; y !== i.body && k(y) === !1;) y = y.parentNode || y.host;
        return y;
      }
      function p(y) {
        var x = a(),
          T,
          w,
          L,
          M = (x - y.startTime) / s;
        (M = M > 1 ? 1 : M),
          (T = d(M)),
          (w = y.startX + (y.x - y.startX) * T),
          (L = y.startY + (y.y - y.startY) * T),
          y.method.call(y.scrollable, w, L),
          (w !== y.x || L !== y.y) && r.requestAnimationFrame(p.bind(r, y));
      }
      function _(y, x, T) {
        var w,
          L,
          M,
          O,
          W = a();
        y === i.body
          ? ((w = r),
            (L = r.scrollX || r.pageXOffset),
            (M = r.scrollY || r.pageYOffset),
            (O = l.scroll))
          : ((w = y), (L = y.scrollLeft), (M = y.scrollTop), (O = f)),
          p({
            scrollable: w,
            method: O,
            startTime: W,
            startX: L,
            startY: M,
            x,
            y: T,
          });
      }
      (r.scroll = r.scrollTo =
        function () {
          if (arguments[0] !== void 0) {
            if (h(arguments[0]) === !0) {
              l.scroll.call(
                r,
                arguments[0].left !== void 0
                  ? arguments[0].left
                  : typeof arguments[0] != "object"
                    ? arguments[0]
                    : r.scrollX || r.pageXOffset,
                arguments[0].top !== void 0
                  ? arguments[0].top
                  : arguments[1] !== void 0
                    ? arguments[1]
                    : r.scrollY || r.pageYOffset
              );
              return;
            }
            _.call(
              r,
              i.body,
              arguments[0].left !== void 0
                ? ~~arguments[0].left
                : r.scrollX || r.pageXOffset,
              arguments[0].top !== void 0
                ? ~~arguments[0].top
                : r.scrollY || r.pageYOffset
            );
          }
        }),
        (r.scrollBy = function () {
          if (arguments[0] !== void 0) {
            if (h(arguments[0])) {
              l.scrollBy.call(
                r,
                arguments[0].left !== void 0
                  ? arguments[0].left
                  : typeof arguments[0] != "object"
                    ? arguments[0]
                    : 0,
                arguments[0].top !== void 0
                  ? arguments[0].top
                  : arguments[1] !== void 0
                    ? arguments[1]
                    : 0
              );
              return;
            }
            _.call(
              r,
              i.body,
              ~~arguments[0].left + (r.scrollX || r.pageXOffset),
              ~~arguments[0].top + (r.scrollY || r.pageYOffset)
            );
          }
        }),
        (o.prototype.scroll = o.prototype.scrollTo =
          function () {
            if (arguments[0] !== void 0) {
              if (h(arguments[0]) === !0) {
                if (typeof arguments[0] == "number" && arguments[1] === void 0)
                  throw new SyntaxError("Value could not be converted");
                l.elementScroll.call(
                  this,
                  arguments[0].left !== void 0
                    ? ~~arguments[0].left
                    : typeof arguments[0] != "object"
                      ? ~~arguments[0]
                      : this.scrollLeft,
                  arguments[0].top !== void 0
                    ? ~~arguments[0].top
                    : arguments[1] !== void 0
                      ? ~~arguments[1]
                      : this.scrollTop
                );
                return;
              }
              var y = arguments[0].left,
                x = arguments[0].top;
              _.call(
                this,
                this,
                typeof y > "u" ? this.scrollLeft : ~~y,
                typeof x > "u" ? this.scrollTop : ~~x
              );
            }
          }),
        (o.prototype.scrollBy = function () {
          if (arguments[0] !== void 0) {
            if (h(arguments[0]) === !0) {
              l.elementScroll.call(
                this,
                arguments[0].left !== void 0
                  ? ~~arguments[0].left + this.scrollLeft
                  : ~~arguments[0] + this.scrollLeft,
                arguments[0].top !== void 0
                  ? ~~arguments[0].top + this.scrollTop
                  : ~~arguments[1] + this.scrollTop
              );
              return;
            }
            this.scroll({
              left: ~~arguments[0].left + this.scrollLeft,
              top: ~~arguments[0].top + this.scrollTop,
              behavior: arguments[0].behavior,
            });
          }
        }),
        (o.prototype.scrollIntoView = function () {
          if (h(arguments[0]) === !0) {
            l.scrollIntoView.call(
              this,
              arguments[0] === void 0 ? !0 : arguments[0]
            );
            return;
          }
          var y = g(this),
            x = y.getBoundingClientRect(),
            T = this.getBoundingClientRect();
          y !== i.body
            ? (_.call(
              this,
              y,
              y.scrollLeft + T.left - x.left,
              y.scrollTop + T.top - x.top
            ),
              r.getComputedStyle(y).position !== "fixed" &&
              r.scrollBy({ left: x.left, top: x.top, behavior: "smooth" }))
            : r.scrollBy({ left: T.left, top: T.top, behavior: "smooth" });
        });
    }
    t.exports = { polyfill: n };
  })();
});
ua.polyfill;
var Rd = (function (t) {
  ra(n, t);
  var e = oa(n);
  function n() {
    var r,
      i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return (
      t8(this, n),
      (r = e.call(this, i)),
      r.resetNativeScroll &&
      (history.scrollRestoration && (history.scrollRestoration = "manual"),
        window.scrollTo(0, 0)),
      window.addEventListener("scroll", r.checkScroll, !1),
      window.smoothscrollPolyfill === void 0 &&
      ((window.smoothscrollPolyfill = ua),
        window.smoothscrollPolyfill.polyfill()),
      r
    );
  }
  return (
    n8(n, [
      {
        key: "init",
        value: function () {
          (this.instance.scroll.y = window.pageYOffset),
            this.addElements(),
            this.detectElements(),
            T3(Zt(n.prototype), "init", this).call(this);
        },
      },
      {
        key: "checkScroll",
        value: function () {
          var i = this;
          T3(Zt(n.prototype), "checkScroll", this).call(this),
            this.getDirection && this.addDirection(),
            this.getSpeed && (this.addSpeed(), (this.speedTs = Date.now())),
            (this.instance.scroll.y = window.pageYOffset),
            Object.entries(this.els).length &&
            (this.hasScrollTicking ||
              (requestAnimationFrame(function () {
                i.detectElements();
              }),
                (this.hasScrollTicking = !0)));
        },
      },
      {
        key: "addDirection",
        value: function () {
          window.pageYOffset > this.instance.scroll.y
            ? this.instance.direction !== "down" &&
            (this.instance.direction = "down")
            : window.pageYOffset < this.instance.scroll.y &&
            this.instance.direction !== "up" &&
            (this.instance.direction = "up");
        },
      },
      {
        key: "addSpeed",
        value: function () {
          window.pageYOffset != this.instance.scroll.y
            ? (this.instance.speed =
              (window.pageYOffset - this.instance.scroll.y) /
              Math.max(1, Date.now() - this.speedTs))
            : (this.instance.speed = 0);
        },
      },
      {
        key: "resize",
        value: function () {
          Object.entries(this.els).length &&
            ((this.windowHeight = window.innerHeight), this.updateElements());
        },
      },
      {
        key: "addElements",
        value: function () {
          var i = this;
          this.els = {};
          var o = this.el.querySelectorAll("[data-" + this.name + "]");
          o.forEach(function (s, l) {
            s.getBoundingClientRect();
            var a = s.dataset[i.name + "Class"] || i.class,
              u =
                typeof s.dataset[i.name + "Id"] == "string"
                  ? s.dataset[i.name + "Id"]
                  : l,
              c,
              f,
              d =
                typeof s.dataset[i.name + "Offset"] == "string"
                  ? s.dataset[i.name + "Offset"].split(",")
                  : i.offset,
              h = s.dataset[i.name + "Repeat"],
              v = s.dataset[i.name + "Call"],
              m = s.dataset[i.name + "Target"],
              k;
            m !== void 0 ? (k = document.querySelector("".concat(m))) : (k = s);
            var g = k.getBoundingClientRect();
            (c = g.top + i.instance.scroll.y),
              (f = g.left + i.instance.scroll.x);
            var p = c + k.offsetHeight,
              _ = f + k.offsetWidth;
            h == "false" ? (h = !1) : h != null ? (h = !0) : (h = i.repeat);
            var y = i.getRelativeOffset(d);
            (c = c + y[0]), (p = p - y[1]);
            var x = {
              el: s,
              targetEl: k,
              id: u,
              class: a,
              top: c,
              bottom: p,
              left: f,
              right: _,
              offset: d,
              progress: 0,
              repeat: h,
              inView: !1,
              call: v,
            };
            (i.els[u] = x), s.classList.contains(a) && i.setInView(i.els[u], u);
          });
        },
      },
      {
        key: "updateElements",
        value: function () {
          var i = this;
          Object.entries(this.els).forEach(function (o) {
            var s = Or(o, 2),
              l = s[0],
              a = s[1],
              u = a.targetEl.getBoundingClientRect().top + i.instance.scroll.y,
              c = u + a.targetEl.offsetHeight,
              f = i.getRelativeOffset(a.offset);
            (i.els[l].top = u + f[0]), (i.els[l].bottom = c - f[1]);
          }),
            (this.hasScrollTicking = !1);
        },
      },
      {
        key: "getRelativeOffset",
        value: function (i) {
          var o = [0, 0];
          if (i)
            for (var s = 0; s < i.length; s++)
              typeof i[s] == "string"
                ? i[s].includes("%")
                  ? (o[s] = parseInt(
                    (i[s].replace("%", "") * this.windowHeight) / 100
                  ))
                  : (o[s] = parseInt(i[s]))
                : (o[s] = i[s]);
          return o;
        },
      },
      {
        key: "scrollTo",
        value: function (i) {
          var o =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : {},
            s = parseInt(o.offset) || 0,
            l = o.callback ? o.callback : !1;
          if (typeof i == "string") {
            if (i === "top") i = this.html;
            else if (i === "bottom")
              i = this.html.offsetHeight - window.innerHeight;
            else if (((i = document.querySelector(i)), !i)) return;
          } else if (typeof i == "number") i = parseInt(i);
          else if (!(i && i.tagName)) {
            console.warn("`target` parameter is not valid");
            return;
          }
          typeof i != "number"
            ? (s = i.getBoundingClientRect().top + s + this.instance.scroll.y)
            : (s = i + s);
          var a = function () {
            return parseInt(window.pageYOffset) === parseInt(s);
          };
          if (l)
            if (a()) {
              l();
              return;
            } else {
              var u = function c() {
                a() && (window.removeEventListener("scroll", c), l());
              };
              window.addEventListener("scroll", u);
            }
          window.scrollTo({
            top: s,
            behavior: o.duration === 0 ? "auto" : "smooth",
          });
        },
      },
      {
        key: "update",
        value: function () {
          this.addElements(), this.detectElements();
        },
      },
      {
        key: "destroy",
        value: function () {
          T3(Zt(n.prototype), "destroy", this).call(this),
            window.removeEventListener("scroll", this.checkScroll, !1);
        },
      },
    ]),
    n
  );
})(la);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var io = Object.getOwnPropertySymbols,
  Ad = Object.prototype.hasOwnProperty,
  Dd = Object.prototype.propertyIsEnumerable;
function Id(t) {
  if (t == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(t);
}
function zd() {
  try {
    if (!Object.assign) return !1;
    var t = new String("abc");
    if (((t[5] = "de"), Object.getOwnPropertyNames(t)[0] === "5")) return !1;
    for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(e).map(function (o) {
      return e[o];
    });
    if (r.join("") !== "0123456789") return !1;
    var i = {};
    return (
      "abcdefghijklmnopqrst".split("").forEach(function (o) {
        i[o] = o;
      }),
      Object.keys(Object.assign({}, i)).join("") === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var Fd = zd()
  ? Object.assign
  : function (t, e) {
    for (var n, r = Id(t), i, o = 1; o < arguments.length; o++) {
      n = Object(arguments[o]);
      for (var s in n) Ad.call(n, s) && (r[s] = n[s]);
      if (io) {
        i = io(n);
        for (var l = 0; l < i.length; l++)
          Dd.call(n, i[l]) && (r[i[l]] = n[i[l]]);
      }
    }
    return r;
  };
function ca() { }
ca.prototype = {
  on: function (t, e, n) {
    var r = this.e || (this.e = {});
    return (r[t] || (r[t] = [])).push({ fn: e, ctx: n }), this;
  },
  once: function (t, e, n) {
    var r = this;
    function i() {
      r.off(t, i), e.apply(n, arguments);
    }
    return (i._ = e), this.on(t, i, n);
  },
  emit: function (t) {
    var e = [].slice.call(arguments, 1),
      n = ((this.e || (this.e = {}))[t] || []).slice(),
      r = 0,
      i = n.length;
    for (r; r < i; r++) n[r].fn.apply(n[r].ctx, e);
    return this;
  },
  off: function (t, e) {
    var n = this.e || (this.e = {}),
      r = n[t],
      i = [];
    if (r && e)
      for (var o = 0, s = r.length; o < s; o++)
        r[o].fn !== e && r[o].fn._ !== e && i.push(r[o]);
    return i.length ? (n[t] = i) : delete n[t], this;
  },
};
var Hd = ca,
  Bd = aa(function (t, e) {
    (function () {
      var n;
      (n = e !== null ? e : this),
        (n.Lethargy = (function () {
          function r(i, o, s, l) {
            (this.stability = i != null ? Math.abs(i) : 8),
              (this.sensitivity = o != null ? 1 + Math.abs(o) : 100),
              (this.tolerance = s != null ? 1 + Math.abs(s) : 1.1),
              (this.delay = l ?? 150),
              (this.lastUpDeltas = function () {
                var a, u, c;
                for (
                  c = [], a = 1, u = this.stability * 2;
                  1 <= u ? a <= u : a >= u;
                  1 <= u ? a++ : a--
                )
                  c.push(null);
                return c;
              }.call(this)),
              (this.lastDownDeltas = function () {
                var a, u, c;
                for (
                  c = [], a = 1, u = this.stability * 2;
                  1 <= u ? a <= u : a >= u;
                  1 <= u ? a++ : a--
                )
                  c.push(null);
                return c;
              }.call(this)),
              (this.deltasTimestamp = function () {
                var a, u, c;
                for (
                  c = [], a = 1, u = this.stability * 2;
                  1 <= u ? a <= u : a >= u;
                  1 <= u ? a++ : a--
                )
                  c.push(null);
                return c;
              }.call(this));
          }
          return (
            (r.prototype.check = function (i) {
              var o;
              return (
                (i = i.originalEvent || i),
                i.wheelDelta != null
                  ? (o = i.wheelDelta)
                  : i.deltaY != null
                    ? (o = i.deltaY * -40)
                    : (i.detail != null || i.detail === 0) &&
                    (o = i.detail * -40),
                this.deltasTimestamp.push(Date.now()),
                this.deltasTimestamp.shift(),
                o > 0
                  ? (this.lastUpDeltas.push(o),
                    this.lastUpDeltas.shift(),
                    this.isInertia(1))
                  : (this.lastDownDeltas.push(o),
                    this.lastDownDeltas.shift(),
                    this.isInertia(-1))
              );
            }),
            (r.prototype.isInertia = function (i) {
              var o, s, l, a, u, c, f;
              return (
                (o = i === -1 ? this.lastDownDeltas : this.lastUpDeltas),
                o[0] === null
                  ? i
                  : this.deltasTimestamp[this.stability * 2 - 2] + this.delay >
                    Date.now() && o[0] === o[this.stability * 2 - 1]
                    ? !1
                    : ((l = o.slice(0, this.stability)),
                      (s = o.slice(this.stability, this.stability * 2)),
                      (f = l.reduce(function (d, h) {
                        return d + h;
                      })),
                      (u = s.reduce(function (d, h) {
                        return d + h;
                      })),
                      (c = f / l.length),
                      (a = u / s.length),
                      Math.abs(c) < Math.abs(a * this.tolerance) &&
                        this.sensitivity < Math.abs(a)
                        ? i
                        : !1)
              );
            }),
            (r.prototype.showLastUpDeltas = function () {
              return this.lastUpDeltas;
            }),
            (r.prototype.showLastDownDeltas = function () {
              return this.lastDownDeltas;
            }),
            r
          );
        })());
    }).call(Vd);
  }),
  rt = (function () {
    return {
      hasWheelEvent: "onwheel" in document,
      hasMouseWheelEvent: "onmousewheel" in document,
      hasTouch:
        "ontouchstart" in window ||
        window.TouchEvent ||
        (window.DocumentTouch && document instanceof DocumentTouch),
      hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
      hasPointer: !!window.navigator.msPointerEnabled,
      hasKeyDown: "onkeydown" in document,
      isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
    };
  })(),
  Wd = Object.prototype.toString,
  jd = Object.prototype.hasOwnProperty,
  Ud = function (t) {
    if (!t) return console.warn("bindAll requires at least one argument.");
    var e = Array.prototype.slice.call(arguments, 1);
    if (e.length === 0)
      for (var n in t)
        jd.call(t, n) &&
          typeof t[n] == "function" &&
          Wd.call(t[n]) == "[object Function]" &&
          e.push(n);
    for (var r = 0; r < e.length; r++) {
      var i = e[r];
      t[i] = Yd(t[i], t);
    }
  };
function Yd(t, e) {
  return function () {
    return t.apply(e, arguments);
  };
}
var Zd = Bd.Lethargy,
  Hn = "virtualscroll",
  $d = ht,
  O6 = { LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, SPACE: 32 };
function ht(t) {
  Ud(
    this,
    "_onWheel",
    "_onMouseWheel",
    "_onTouchStart",
    "_onTouchMove",
    "_onKeyDown"
  ),
    (this.el = window),
    t && t.el && ((this.el = t.el), delete t.el),
    (this.options = Fd(
      {
        mouseMultiplier: 1,
        touchMultiplier: 2,
        firefoxMultiplier: 15,
        keyStep: 120,
        preventTouch: !1,
        unpreventTouchClass: "vs-touchmove-allowed",
        limitInertia: !1,
        useKeyboard: !0,
        useTouch: !0,
      },
      t
    )),
    this.options.limitInertia && (this._lethargy = new Zd()),
    (this._emitter = new Hd()),
    (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
    (this.touchStartX = null),
    (this.touchStartY = null),
    (this.bodyTouchAction = null),
    this.options.passive !== void 0 &&
    (this.listenerOptions = { passive: this.options.passive });
}
ht.prototype._notify = function (t) {
  var e = this._event;
  (e.x += e.deltaX),
    (e.y += e.deltaY),
    this._emitter.emit(Hn, {
      x: e.x,
      y: e.y,
      deltaX: e.deltaX,
      deltaY: e.deltaY,
      originalEvent: t,
    });
};
ht.prototype._onWheel = function (t) {
  var e = this.options;
  if (!(this._lethargy && this._lethargy.check(t) === !1)) {
    var n = this._event;
    (n.deltaX = t.wheelDeltaX || t.deltaX * -1),
      (n.deltaY = t.wheelDeltaY || t.deltaY * -1),
      rt.isFirefox &&
      t.deltaMode == 1 &&
      ((n.deltaX *= e.firefoxMultiplier), (n.deltaY *= e.firefoxMultiplier)),
      (n.deltaX *= e.mouseMultiplier),
      (n.deltaY *= e.mouseMultiplier),
      this._notify(t);
  }
};
ht.prototype._onMouseWheel = function (t) {
  if (!(this.options.limitInertia && this._lethargy.check(t) === !1)) {
    var e = this._event;
    (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
      (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
      this._notify(t);
  }
};
ht.prototype._onTouchStart = function (t) {
  var e = t.targetTouches ? t.targetTouches[0] : t;
  (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
};
ht.prototype._onTouchMove = function (t) {
  var e = this.options;
  e.preventTouch &&
    !t.target.classList.contains(e.unpreventTouchClass) &&
    t.preventDefault();
  var n = this._event,
    r = t.targetTouches ? t.targetTouches[0] : t;
  (n.deltaX = (r.pageX - this.touchStartX) * e.touchMultiplier),
    (n.deltaY = (r.pageY - this.touchStartY) * e.touchMultiplier),
    (this.touchStartX = r.pageX),
    (this.touchStartY = r.pageY),
    this._notify(t);
};
ht.prototype._onKeyDown = function (t) {
  var e = this._event;
  e.deltaX = e.deltaY = 0;
  var n = window.innerHeight - 40;
  switch (t.keyCode) {
    case O6.LEFT:
    case O6.UP:
      e.deltaY = this.options.keyStep;
      break;
    case O6.RIGHT:
    case O6.DOWN:
      e.deltaY = -this.options.keyStep;
      break;
    case t.shiftKey:
      e.deltaY = n;
      break;
    case O6.SPACE:
      e.deltaY = -n;
      break;
    default:
      return;
  }
  this._notify(t);
};
ht.prototype._bind = function () {
  rt.hasWheelEvent &&
    this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
    rt.hasMouseWheelEvent &&
    this.el.addEventListener(
      "mousewheel",
      this._onMouseWheel,
      this.listenerOptions
    ),
    rt.hasTouch &&
    this.options.useTouch &&
    (this.el.addEventListener(
      "touchstart",
      this._onTouchStart,
      this.listenerOptions
    ),
      this.el.addEventListener(
        "touchmove",
        this._onTouchMove,
        this.listenerOptions
      )),
    rt.hasPointer &&
    rt.hasTouchWin &&
    ((this.bodyTouchAction = document.body.style.msTouchAction),
      (document.body.style.msTouchAction = "none"),
      this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
      this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
    rt.hasKeyDown &&
    this.options.useKeyboard &&
    document.addEventListener("keydown", this._onKeyDown);
};
ht.prototype._unbind = function () {
  rt.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
    rt.hasMouseWheelEvent &&
    this.el.removeEventListener("mousewheel", this._onMouseWheel),
    rt.hasTouch &&
    (this.el.removeEventListener("touchstart", this._onTouchStart),
      this.el.removeEventListener("touchmove", this._onTouchMove)),
    rt.hasPointer &&
    rt.hasTouchWin &&
    ((document.body.style.msTouchAction = this.bodyTouchAction),
      this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
      this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
    rt.hasKeyDown &&
    this.options.useKeyboard &&
    document.removeEventListener("keydown", this._onKeyDown);
};
ht.prototype.on = function (t, e) {
  this._emitter.on(Hn, t, e);
  var n = this._emitter.e;
  n && n[Hn] && n[Hn].length === 1 && this._bind();
};
ht.prototype.off = function (t, e) {
  this._emitter.off(Hn, t, e);
  var n = this._emitter.e;
  (!n[Hn] || n[Hn].length <= 0) && this._unbind();
};
ht.prototype.reset = function () {
  var t = this._event;
  (t.x = 0), (t.y = 0);
};
ht.prototype.destroy = function () {
  this._emitter.off(), this._unbind();
};
function D8(t, e, n) {
  return (1 - n) * t + n * e;
}
function mt(t) {
  var e = {};
  if (window.getComputedStyle) {
    var n = getComputedStyle(t),
      r = n.transform || n.webkitTransform || n.mozTransform,
      i = r.match(/^matrix3d\((.+)\)$/);
    return (
      i
        ? ((e.x = i ? parseFloat(i[1].split(", ")[12]) : 0),
          (e.y = i ? parseFloat(i[1].split(", ")[13]) : 0))
        : ((i = r.match(/^matrix\((.+)\)$/)),
          (e.x = i ? parseFloat(i[1].split(", ")[4]) : 0),
          (e.y = i ? parseFloat(i[1].split(", ")[5]) : 0)),
      e
    );
  }
}
function I8(t) {
  for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
  return e;
}
var Xd = 4,
  Gd = 0.001,
  qd = 1e-7,
  Kd = 10,
  z6 = 11,
  h0 = 1 / (z6 - 1),
  Qd = typeof Float32Array == "function";
function fa(t, e) {
  return 1 - 3 * e + 3 * t;
}
function da(t, e) {
  return 3 * e - 6 * t;
}
function ha(t) {
  return 3 * t;
}
function _i(t, e, n) {
  return ((fa(e, n) * t + da(e, n)) * t + ha(e)) * t;
}
function Ca(t, e, n) {
  return 3 * fa(e, n) * t * t + 2 * da(e, n) * t + ha(e);
}
function Jd(t, e, n, r, i) {
  var o,
    s,
    l = 0;
  do (s = e + (n - e) / 2), (o = _i(s, r, i) - t), o > 0 ? (n = s) : (e = s);
  while (Math.abs(o) > qd && ++l < Kd);
  return s;
}
function eh(t, e, n, r) {
  for (var i = 0; i < Xd; ++i) {
    var o = Ca(e, n, r);
    if (o === 0) return e;
    var s = _i(e, n, r) - t;
    e -= s / o;
  }
  return e;
}
function th(t) {
  return t;
}
var nh = function (e, n, r, i) {
  if (!(0 <= e && e <= 1 && 0 <= r && r <= 1))
    throw new Error("bezier x values must be in [0, 1] range");
  if (e === n && r === i) return th;
  for (var o = Qd ? new Float32Array(z6) : new Array(z6), s = 0; s < z6; ++s)
    o[s] = _i(s * h0, e, r);
  function l(a) {
    for (var u = 0, c = 1, f = z6 - 1; c !== f && o[c] <= a; ++c) u += h0;
    --c;
    var d = (a - o[c]) / (o[c + 1] - o[c]),
      h = u + d * h0,
      v = Ca(h, e, r);
    return v >= Gd ? eh(a, h, e, r) : v === 0 ? h : Jd(a, u, u + h0, e, r);
  }
  return function (u) {
    return u === 0 ? 0 : u === 1 ? 1 : _i(l(u), n, i);
  };
},
  m3 = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32,
    TAB: 9,
    PAGEUP: 33,
    PAGEDOWN: 34,
    HOME: 36,
    END: 35,
  },
  rh = (function (t) {
    ra(n, t);
    var e = oa(n);
    function n() {
      var r,
        i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return (
        t8(this, n),
        history.scrollRestoration && (history.scrollRestoration = "manual"),
        window.scrollTo(0, 0),
        (r = e.call(this, i)),
        r.inertia && (r.lerp = r.inertia * 0.1),
        (r.isScrolling = !1),
        (r.isDraggingScrollbar = !1),
        (r.isTicking = !1),
        (r.hasScrollTicking = !1),
        (r.parallaxElements = {}),
        (r.stop = !1),
        (r.scrollbarContainer = i.scrollbarContainer),
        (r.checkKey = r.checkKey.bind(ia(r))),
        window.addEventListener("keydown", r.checkKey, !1),
        r
      );
    }
    return (
      n8(n, [
        {
          key: "init",
          value: function () {
            var i = this;
            this.html.classList.add(this.smoothClass),
              this.html.setAttribute(
                "data-".concat(this.name, "-direction"),
                this.direction
              ),
              (this.instance = A8(
                {
                  delta: { x: this.initPosition.x, y: this.initPosition.y },
                  scroll: { x: this.initPosition.x, y: this.initPosition.y },
                },
                this.instance
              )),
              (this.vs = new $d({
                el: this.scrollFromAnywhere ? document : this.el,
                mouseMultiplier:
                  navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                firefoxMultiplier: this.firefoxMultiplier,
                touchMultiplier: this.touchMultiplier,
                useKeyboard: !1,
                passive: !0,
              })),
              this.vs.on(function (o) {
                i.stop ||
                  i.isDraggingScrollbar ||
                  requestAnimationFrame(function () {
                    i.updateDelta(o), i.isScrolling || i.startScrolling();
                  });
              }),
              this.setScrollLimit(),
              this.initScrollBar(),
              this.addSections(),
              this.addElements(),
              this.checkScroll(!0),
              this.transformElements(!0, !0),
              T3(Zt(n.prototype), "init", this).call(this);
          },
        },
        {
          key: "setScrollLimit",
          value: function () {
            if (
              ((this.instance.limit.y =
                this.el.offsetHeight - this.windowHeight),
                this.direction === "horizontal")
            ) {
              for (var i = 0, o = this.el.children, s = 0; s < o.length; s++)
                i += o[s].offsetWidth;
              this.instance.limit.x = i - this.windowWidth;
            }
          },
        },
        {
          key: "startScrolling",
          value: function () {
            (this.startScrollTs = Date.now()),
              (this.isScrolling = !0),
              this.checkScroll(),
              this.html.classList.add(this.scrollingClass);
          },
        },
        {
          key: "stopScrolling",
          value: function () {
            cancelAnimationFrame(this.checkScrollRaf),
              (this.startScrollTs = void 0),
              this.scrollToRaf &&
              (cancelAnimationFrame(this.scrollToRaf),
                (this.scrollToRaf = null)),
              (this.isScrolling = !1),
              (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
              this.html.classList.remove(this.scrollingClass);
          },
        },
        {
          key: "checkKey",
          value: function (i) {
            var o = this;
            if (this.stop) {
              i.keyCode == m3.TAB &&
                requestAnimationFrame(function () {
                  (o.html.scrollTop = 0),
                    (document.body.scrollTop = 0),
                    (o.html.scrollLeft = 0),
                    (document.body.scrollLeft = 0);
                });
              return;
            }
            switch (i.keyCode) {
              case m3.TAB:
                requestAnimationFrame(function () {
                  (o.html.scrollTop = 0),
                    (document.body.scrollTop = 0),
                    (o.html.scrollLeft = 0),
                    (document.body.scrollLeft = 0),
                    o.scrollTo(document.activeElement, {
                      offset: -window.innerHeight / 2,
                    });
                });
                break;
              case m3.UP:
                this.isActiveElementScrollSensitive() &&
                  (this.instance.delta[this.directionAxis] -= 240);
                break;
              case m3.DOWN:
                this.isActiveElementScrollSensitive() &&
                  (this.instance.delta[this.directionAxis] += 240);
                break;
              case m3.PAGEUP:
                this.instance.delta[this.directionAxis] -= window.innerHeight;
                break;
              case m3.PAGEDOWN:
                this.instance.delta[this.directionAxis] += window.innerHeight;
                break;
              case m3.HOME:
                this.instance.delta[this.directionAxis] -=
                  this.instance.limit[this.directionAxis];
                break;
              case m3.END:
                this.instance.delta[this.directionAxis] +=
                  this.instance.limit[this.directionAxis];
                break;
              case m3.SPACE:
                this.isActiveElementScrollSensitive() &&
                  (i.shiftKey
                    ? (this.instance.delta[this.directionAxis] -=
                      window.innerHeight)
                    : (this.instance.delta[this.directionAxis] +=
                      window.innerHeight));
                break;
              default:
                return;
            }
            this.instance.delta[this.directionAxis] < 0 &&
              (this.instance.delta[this.directionAxis] = 0),
              this.instance.delta[this.directionAxis] >
              this.instance.limit[this.directionAxis] &&
              (this.instance.delta[this.directionAxis] =
                this.instance.limit[this.directionAxis]),
              this.stopScrolling(),
              (this.isScrolling = !0),
              this.checkScroll(),
              this.html.classList.add(this.scrollingClass);
          },
        },
        {
          key: "isActiveElementScrollSensitive",
          value: function () {
            return (
              !(document.activeElement instanceof HTMLInputElement) &&
              !(document.activeElement instanceof HTMLTextAreaElement) &&
              !(document.activeElement instanceof HTMLButtonElement) &&
              !(document.activeElement instanceof HTMLSelectElement)
            );
          },
        },
        {
          key: "checkScroll",
          value: function () {
            var i = this,
              o =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : !1;
            if (o || this.isScrolling || this.isDraggingScrollbar) {
              this.hasScrollTicking ||
                ((this.checkScrollRaf = requestAnimationFrame(function () {
                  return i.checkScroll();
                })),
                  (this.hasScrollTicking = !0)),
                this.updateScroll();
              var s = Math.abs(
                this.instance.delta[this.directionAxis] -
                this.instance.scroll[this.directionAxis]
              ),
                l = Date.now() - this.startScrollTs;
              if (
                (!this.animatingScroll &&
                  l > 100 &&
                  ((s < 0.5 && this.instance.delta[this.directionAxis] != 0) ||
                    (s < 0.5 &&
                      this.instance.delta[this.directionAxis] == 0)) &&
                  this.stopScrolling(),
                  Object.entries(this.sections).forEach(function (u) {
                    var c = Or(u, 2);
                    c[0];
                    var f = c[1];
                    f.persistent ||
                      (i.instance.scroll[i.directionAxis] >
                        f.offset[i.directionAxis] &&
                        i.instance.scroll[i.directionAxis] <
                        f.limit[i.directionAxis])
                      ? (i.direction === "horizontal"
                        ? i.transform(
                          f.el,
                          -i.instance.scroll[i.directionAxis],
                          0
                        )
                        : i.transform(
                          f.el,
                          0,
                          -i.instance.scroll[i.directionAxis]
                        ),
                        f.inView ||
                        ((f.inView = !0),
                          (f.el.style.opacity = 1),
                          (f.el.style.pointerEvents = "all"),
                          f.el.setAttribute(
                            "data-".concat(i.name, "-section-inview"),
                            ""
                          )))
                      : ((f.inView || o) &&
                        ((f.inView = !1),
                          (f.el.style.opacity = 0),
                          (f.el.style.pointerEvents = "none"),
                          f.el.removeAttribute(
                            "data-".concat(i.name, "-section-inview")
                          )),
                        i.transform(f.el, 0, 0));
                  }),
                  this.getDirection && this.addDirection(),
                  this.getSpeed && (this.addSpeed(), (this.speedTs = Date.now())),
                  this.detectElements(),
                  this.transformElements(),
                  this.hasScrollbar)
              ) {
                var a =
                  (this.instance.scroll[this.directionAxis] /
                    this.instance.limit[this.directionAxis]) *
                  this.scrollBarLimit[this.directionAxis];
                this.direction === "horizontal"
                  ? this.transform(this.scrollbarThumb, a, 0)
                  : this.transform(this.scrollbarThumb, 0, a);
              }
              T3(Zt(n.prototype), "checkScroll", this).call(this),
                (this.hasScrollTicking = !1);
            }
          },
        },
        {
          key: "resize",
          value: function () {
            (this.windowHeight = window.innerHeight),
              (this.windowWidth = window.innerWidth),
              this.checkContext(),
              (this.windowMiddle = {
                x: this.windowWidth / 2,
                y: this.windowHeight / 2,
              }),
              this.update();
          },
        },
        {
          key: "updateDelta",
          value: function (i) {
            var o,
              s =
                this[this.context] && this[this.context].gestureDirection
                  ? this[this.context].gestureDirection
                  : this.gestureDirection;
            s === "both"
              ? (o = i.deltaX + i.deltaY)
              : s === "vertical"
                ? (o = i.deltaY)
                : s === "horizontal"
                  ? (o = i.deltaX)
                  : (o = i.deltaY),
              (this.instance.delta[this.directionAxis] -= o * this.multiplier),
              this.instance.delta[this.directionAxis] < 0 &&
              (this.instance.delta[this.directionAxis] = 0),
              this.instance.delta[this.directionAxis] >
              this.instance.limit[this.directionAxis] &&
              (this.instance.delta[this.directionAxis] =
                this.instance.limit[this.directionAxis]);
          },
        },
        {
          key: "updateScroll",
          value: function (i) {
            this.isScrolling || this.isDraggingScrollbar
              ? (this.instance.scroll[this.directionAxis] = D8(
                this.instance.scroll[this.directionAxis],
                this.instance.delta[this.directionAxis],
                this.lerp
              ))
              : this.instance.scroll[this.directionAxis] >
                this.instance.limit[this.directionAxis]
                ? this.setScroll(
                  this.instance.scroll[this.directionAxis],
                  this.instance.limit[this.directionAxis]
                )
                : this.instance.scroll.y < 0
                  ? this.setScroll(this.instance.scroll[this.directionAxis], 0)
                  : this.setScroll(
                    this.instance.scroll[this.directionAxis],
                    this.instance.delta[this.directionAxis]
                  );
          },
        },
        {
          key: "addDirection",
          value: function () {
            this.instance.delta.y > this.instance.scroll.y
              ? this.instance.direction !== "down" &&
              (this.instance.direction = "down")
              : this.instance.delta.y < this.instance.scroll.y &&
              this.instance.direction !== "up" &&
              (this.instance.direction = "up"),
              this.instance.delta.x > this.instance.scroll.x
                ? this.instance.direction !== "right" &&
                (this.instance.direction = "right")
                : this.instance.delta.x < this.instance.scroll.x &&
                this.instance.direction !== "left" &&
                (this.instance.direction = "left");
          },
        },
        {
          key: "addSpeed",
          value: function () {
            this.instance.delta[this.directionAxis] !=
              this.instance.scroll[this.directionAxis]
              ? (this.instance.speed =
                (this.instance.delta[this.directionAxis] -
                  this.instance.scroll[this.directionAxis]) /
                Math.max(1, Date.now() - this.speedTs))
              : (this.instance.speed = 0);
          },
        },
        {
          key: "initScrollBar",
          value: function () {
            if (
              ((this.scrollbar = document.createElement("span")),
                (this.scrollbarThumb = document.createElement("span")),
                this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                this.scrollbarThumb.classList.add(
                  "".concat(this.scrollbarClass, "_thumb")
                ),
                this.scrollbar.append(this.scrollbarThumb),
                this.scrollbarContainer
                  ? this.scrollbarContainer.append(this.scrollbar)
                  : document.body.append(this.scrollbar),
                (this.getScrollBar = this.getScrollBar.bind(this)),
                (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                (this.moveScrollBar = this.moveScrollBar.bind(this)),
                this.scrollbarThumb.addEventListener(
                  "mousedown",
                  this.getScrollBar
                ),
                window.addEventListener("mouseup", this.releaseScrollBar),
                window.addEventListener("mousemove", this.moveScrollBar),
                (this.hasScrollbar = !1),
                this.direction == "horizontal")
            ) {
              if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
                return;
            } else if (
              this.instance.limit.y + this.windowHeight <=
              this.windowHeight
            )
              return;
            (this.hasScrollbar = !0),
              (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
              (this.scrollbarHeight = this.scrollbarBCR.height),
              (this.scrollbarWidth = this.scrollbarBCR.width),
              this.direction === "horizontal"
                ? (this.scrollbarThumb.style.width = "".concat(
                  (this.scrollbarWidth * this.scrollbarWidth) /
                  (this.instance.limit.x + this.scrollbarWidth),
                  "px"
                ))
                : (this.scrollbarThumb.style.height = "".concat(
                  (this.scrollbarHeight * this.scrollbarHeight) /
                  (this.instance.limit.y + this.scrollbarHeight),
                  "px"
                )),
              (this.scrollbarThumbBCR =
                this.scrollbarThumb.getBoundingClientRect()),
              (this.scrollBarLimit = {
                x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
              });
          },
        },
        {
          key: "reinitScrollBar",
          value: function () {
            if (((this.hasScrollbar = !1), this.direction == "horizontal")) {
              if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
                return;
            } else if (
              this.instance.limit.y + this.windowHeight <=
              this.windowHeight
            )
              return;
            (this.hasScrollbar = !0),
              (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
              (this.scrollbarHeight = this.scrollbarBCR.height),
              (this.scrollbarWidth = this.scrollbarBCR.width),
              this.direction === "horizontal"
                ? (this.scrollbarThumb.style.width = "".concat(
                  (this.scrollbarWidth * this.scrollbarWidth) /
                  (this.instance.limit.x + this.scrollbarWidth),
                  "px"
                ))
                : (this.scrollbarThumb.style.height = "".concat(
                  (this.scrollbarHeight * this.scrollbarHeight) /
                  (this.instance.limit.y + this.scrollbarHeight),
                  "px"
                )),
              (this.scrollbarThumbBCR =
                this.scrollbarThumb.getBoundingClientRect()),
              (this.scrollBarLimit = {
                x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
              });
          },
        },
        {
          key: "destroyScrollBar",
          value: function () {
            this.scrollbarThumb.removeEventListener(
              "mousedown",
              this.getScrollBar
            ),
              window.removeEventListener("mouseup", this.releaseScrollBar),
              window.removeEventListener("mousemove", this.moveScrollBar),
              this.scrollbar.remove();
          },
        },
        {
          key: "getScrollBar",
          value: function (i) {
            (this.isDraggingScrollbar = !0),
              this.checkScroll(),
              this.html.classList.remove(this.scrollingClass),
              this.html.classList.add(this.draggingClass);
          },
        },
        {
          key: "releaseScrollBar",
          value: function (i) {
            (this.isDraggingScrollbar = !1),
              this.isScrolling && this.html.classList.add(this.scrollingClass),
              this.html.classList.remove(this.draggingClass);
          },
        },
        {
          key: "moveScrollBar",
          value: function (i) {
            var o = this;
            this.isDraggingScrollbar &&
              requestAnimationFrame(function () {
                var s =
                  ((((i.clientX - o.scrollbarBCR.left) * 100) /
                    o.scrollbarWidth) *
                    o.instance.limit.x) /
                  100,
                  l =
                    ((((i.clientY - o.scrollbarBCR.top) * 100) /
                      o.scrollbarHeight) *
                      o.instance.limit.y) /
                    100;
                l > 0 && l < o.instance.limit.y && (o.instance.delta.y = l),
                  s > 0 && s < o.instance.limit.x && (o.instance.delta.x = s);
              });
          },
        },
        {
          key: "addElements",
          value: function () {
            var i = this;
            (this.els = {}), (this.parallaxElements = {});
            var o = this.el.querySelectorAll("[data-".concat(this.name, "]"));
            o.forEach(function (s, l) {
              var a = I8(s),
                u = Object.entries(i.sections)
                  .map(function (N) {
                    var S = Or(N, 2);
                    S[0];
                    var F = S[1];
                    return F;
                  })
                  .find(function (N) {
                    return a.includes(N.el);
                  }),
                c = s.dataset[i.name + "Class"] || i.class,
                f =
                  typeof s.dataset[i.name + "Id"] == "string"
                    ? s.dataset[i.name + "Id"]
                    : "el" + l,
                d,
                h,
                v = s.dataset[i.name + "Repeat"],
                m = s.dataset[i.name + "Call"],
                k = s.dataset[i.name + "Position"],
                g = s.dataset[i.name + "Delay"],
                p = s.dataset[i.name + "Direction"],
                _ = typeof s.dataset[i.name + "Sticky"] == "string",
                y = s.dataset[i.name + "Speed"]
                  ? parseFloat(s.dataset[i.name + "Speed"]) / 10
                  : !1,
                x =
                  typeof s.dataset[i.name + "Offset"] == "string"
                    ? s.dataset[i.name + "Offset"].split(",")
                    : i.offset,
                T = s.dataset[i.name + "Target"],
                w;
              T !== void 0
                ? (w = document.querySelector("".concat(T)))
                : (w = s);
              var L = w.getBoundingClientRect();
              u === null || u.inView
                ? ((d = L.top + i.instance.scroll.y - mt(w).y),
                  (h = L.left + i.instance.scroll.x - mt(w).x))
                : ((d = L.top - mt(u.el).y - mt(w).y),
                  (h = L.left - mt(u.el).x - mt(w).x));
              var M = d + w.offsetHeight,
                O = h + w.offsetWidth,
                W = { x: (O - h) / 2 + h, y: (M - d) / 2 + d };
              if (_) {
                var I = s.getBoundingClientRect(),
                  $ = I.top,
                  D = I.left,
                  A = { x: D - h, y: $ - d };
                (d += window.innerHeight),
                  (h += window.innerWidth),
                  (M =
                    $ + w.offsetHeight - s.offsetHeight - A[i.directionAxis]),
                  (O = D + w.offsetWidth - s.offsetWidth - A[i.directionAxis]),
                  (W = { x: (O - h) / 2 + h, y: (M - d) / 2 + d });
              }
              v == "false" ? (v = !1) : v != null ? (v = !0) : (v = i.repeat);
              var H = [0, 0];
              if (x)
                if (i.direction === "horizontal") {
                  for (var E = 0; E < x.length; E++)
                    typeof x[E] == "string"
                      ? x[E].includes("%")
                        ? (H[E] = parseInt(
                          (x[E].replace("%", "") * i.windowWidth) / 100
                        ))
                        : (H[E] = parseInt(x[E]))
                      : (H[E] = x[E]);
                  (h = h + H[0]), (O = O - H[1]);
                } else {
                  for (var E = 0; E < x.length; E++)
                    typeof x[E] == "string"
                      ? x[E].includes("%")
                        ? (H[E] = parseInt(
                          (x[E].replace("%", "") * i.windowHeight) / 100
                        ))
                        : (H[E] = parseInt(x[E]))
                      : (H[E] = x[E]);
                  (d = d + H[0]), (M = M - H[1]);
                }
              var b = {
                el: s,
                id: f,
                class: c,
                section: u,
                top: d,
                middle: W,
                bottom: M,
                left: h,
                right: O,
                offset: x,
                progress: 0,
                repeat: v,
                inView: !1,
                call: m,
                speed: y,
                delay: g,
                position: k,
                target: w,
                direction: p,
                sticky: _,
              };
              (i.els[f] = b),
                s.classList.contains(c) && i.setInView(i.els[f], f),
                (y !== !1 || _) && (i.parallaxElements[f] = b);
            });
          },
        },
        {
          key: "addSections",
          value: function () {
            var i = this;
            this.sections = {};
            var o = this.el.querySelectorAll(
              "[data-".concat(this.name, "-section]")
            );
            o.length === 0 && (o = [this.el]),
              o.forEach(function (s, l) {
                var a =
                  typeof s.dataset[i.name + "Id"] == "string"
                    ? s.dataset[i.name + "Id"]
                    : "section" + l,
                  u = s.getBoundingClientRect(),
                  c = {
                    x: u.left - window.innerWidth * 1.5 - mt(s).x,
                    y: u.top - window.innerHeight * 1.5 - mt(s).y,
                  },
                  f = {
                    x: c.x + u.width + window.innerWidth * 2,
                    y: c.y + u.height + window.innerHeight * 2,
                  },
                  d = typeof s.dataset[i.name + "Persistent"] == "string";
                s.setAttribute("data-scroll-section-id", a);
                var h = {
                  el: s,
                  offset: c,
                  limit: f,
                  inView: !1,
                  persistent: d,
                  id: a,
                };
                i.sections[a] = h;
              });
          },
        },
        {
          key: "transform",
          value: function (i, o, s, l) {
            var a;
            if (!l)
              a = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                .concat(o, ",")
                .concat(s, ",0,1)");
            else {
              var u = mt(i),
                c = D8(u.x, o, l),
                f = D8(u.y, s, l);
              a = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                .concat(c, ",")
                .concat(f, ",0,1)");
            }
            (i.style.webkitTransform = a),
              (i.style.msTransform = a),
              (i.style.transform = a);
          },
        },
        {
          key: "transformElements",
          value: function (i) {
            var o = this,
              s =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !1,
              l = this.instance.scroll.x + this.windowWidth,
              a = this.instance.scroll.y + this.windowHeight,
              u = {
                x: this.instance.scroll.x + this.windowMiddle.x,
                y: this.instance.scroll.y + this.windowMiddle.y,
              };
            Object.entries(this.parallaxElements).forEach(function (c) {
              var f = Or(c, 2);
              f[0];
              var d = f[1],
                h = !1;
              if ((i && (h = 0), d.inView || s))
                switch (d.position) {
                  case "top":
                    h = o.instance.scroll[o.directionAxis] * -d.speed;
                    break;
                  case "elementTop":
                    h = (a - d.top) * -d.speed;
                    break;
                  case "bottom":
                    h =
                      (o.instance.limit[o.directionAxis] - a + o.windowHeight) *
                      d.speed;
                    break;
                  case "left":
                    h = o.instance.scroll[o.directionAxis] * -d.speed;
                    break;
                  case "elementLeft":
                    h = (l - d.left) * -d.speed;
                    break;
                  case "right":
                    h =
                      (o.instance.limit[o.directionAxis] - l + o.windowHeight) *
                      d.speed;
                    break;
                  default:
                    h =
                      (u[o.directionAxis] - d.middle[o.directionAxis]) *
                      -d.speed;
                    break;
                }
              d.sticky &&
                (d.inView
                  ? o.direction === "horizontal"
                    ? (h = o.instance.scroll.x - d.left + window.innerWidth)
                    : (h = o.instance.scroll.y - d.top + window.innerHeight)
                  : o.direction === "horizontal"
                    ? o.instance.scroll.x < d.left - window.innerWidth &&
                      o.instance.scroll.x < d.left - window.innerWidth / 2
                      ? (h = 0)
                      : o.instance.scroll.x > d.right &&
                        o.instance.scroll.x > d.right + 100
                        ? (h = d.right - d.left + window.innerWidth)
                        : (h = !1)
                    : o.instance.scroll.y < d.top - window.innerHeight &&
                      o.instance.scroll.y < d.top - window.innerHeight / 2
                      ? (h = 0)
                      : o.instance.scroll.y > d.bottom &&
                        o.instance.scroll.y > d.bottom + 100
                        ? (h = d.bottom - d.top + window.innerHeight)
                        : (h = !1)),
                h !== !1 &&
                (d.direction === "horizontal" ||
                  (o.direction === "horizontal" && d.direction !== "vertical")
                  ? o.transform(d.el, h, 0, i ? !1 : d.delay)
                  : o.transform(d.el, 0, h, i ? !1 : d.delay));
            });
          },
        },
        {
          key: "scrollTo",
          value: function (i) {
            var o = this,
              s =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              l = parseInt(s.offset) || 0,
              a = isNaN(parseInt(s.duration)) ? 1e3 : parseInt(s.duration),
              u = s.easing || [0.25, 0, 0.35, 1],
              c = !!s.disableLerp,
              f = s.callback ? s.callback : !1;
            if (((u = nh.apply(void 0, Td(u))), typeof i == "string")) {
              if (i === "top") i = 0;
              else if (i === "bottom") i = this.instance.limit.y;
              else if (i === "left") i = 0;
              else if (i === "right") i = this.instance.limit.x;
              else if (((i = document.querySelector(i)), !i)) return;
            } else if (typeof i == "number") i = parseInt(i);
            else if (!(i && i.tagName)) {
              console.warn("`target` parameter is not valid");
              return;
            }
            if (typeof i != "number") {
              var d = I8(i).includes(this.el);
              if (!d) return;
              var h = i.getBoundingClientRect(),
                v = h.top,
                m = h.left,
                k = I8(i),
                g = k.find(function (M) {
                  return Object.entries(o.sections)
                    .map(function (O) {
                      var W = Or(O, 2);
                      W[0];
                      var I = W[1];
                      return I;
                    })
                    .find(function (O) {
                      return O.el == M;
                    });
                }),
                p = 0;
              g
                ? (p = mt(g)[this.directionAxis])
                : (p = -this.instance.scroll[this.directionAxis]),
                this.direction === "horizontal"
                  ? (l = m + l - p)
                  : (l = v + l - p);
            } else l = i + l;
            var _ = parseFloat(this.instance.delta[this.directionAxis]),
              y = Math.max(
                0,
                Math.min(l, this.instance.limit[this.directionAxis])
              ),
              x = y - _,
              T = function (O) {
                c
                  ? o.direction === "horizontal"
                    ? o.setScroll(_ + x * O, o.instance.delta.y)
                    : o.setScroll(o.instance.delta.x, _ + x * O)
                  : (o.instance.delta[o.directionAxis] = _ + x * O);
              };
            (this.animatingScroll = !0),
              this.stopScrolling(),
              this.startScrolling();
            var w = Date.now(),
              L = function M() {
                var O = (Date.now() - w) / a;
                O > 1
                  ? (T(1),
                    (o.animatingScroll = !1),
                    a == 0 && o.update(),
                    f && f())
                  : ((o.scrollToRaf = requestAnimationFrame(M)), T(u(O)));
              };
            L();
          },
        },
        {
          key: "update",
          value: function () {
            this.setScrollLimit(),
              this.addSections(),
              this.addElements(),
              this.detectElements(),
              this.updateScroll(),
              this.transformElements(!0),
              this.reinitScrollBar(),
              this.checkScroll(!0);
          },
        },
        {
          key: "startScroll",
          value: function () {
            this.stop = !1;
          },
        },
        {
          key: "stopScroll",
          value: function () {
            this.stop = !0;
          },
        },
        {
          key: "setScroll",
          value: function (i, o) {
            this.instance = A8(
              A8({}, this.instance),
              {},
              { scroll: { x: i, y: o }, delta: { x: i, y: o }, speed: 0 }
            );
          },
        },
        {
          key: "destroy",
          value: function () {
            T3(Zt(n.prototype), "destroy", this).call(this),
              this.stopScrolling(),
              this.html.classList.remove(this.smoothClass),
              this.vs.destroy(),
              this.destroyScrollBar(),
              window.removeEventListener("keydown", this.checkKey, !1);
          },
        },
      ]),
      n
    );
  })(la),
  ih = (function () {
    function t() {
      var e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      t8(this, t),
        (this.options = e),
        Object.assign(this, Br, e),
        (this.smartphone = Br.smartphone),
        e.smartphone && Object.assign(this.smartphone, e.smartphone),
        (this.tablet = Br.tablet),
        e.tablet && Object.assign(this.tablet, e.tablet),
        !this.smooth &&
        this.direction == "horizontal" &&
        console.warn(
          "🚨 `smooth:false` & `horizontal` direction are not yet compatible"
        ),
        !this.tablet.smooth &&
        this.tablet.direction == "horizontal" &&
        console.warn(
          "🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"
        ),
        !this.smartphone.smooth &&
        this.smartphone.direction == "horizontal" &&
        console.warn(
          "🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"
        ),
        this.init();
    }
    return (
      n8(t, [
        {
          key: "init",
          value: function () {
            if (
              ((this.options.isMobile =
                /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  navigator.userAgent
                ) ||
                (navigator.platform === "MacIntel" &&
                  navigator.maxTouchPoints > 1) ||
                window.innerWidth < this.tablet.breakpoint),
                (this.options.isTablet =
                  this.options.isMobile &&
                  window.innerWidth >= this.tablet.breakpoint),
                (this.smooth && !this.options.isMobile) ||
                  (this.tablet.smooth && this.options.isTablet) ||
                  (this.smartphone.smooth &&
                    this.options.isMobile &&
                    !this.options.isTablet)
                  ? (this.scroll = new rh(this.options))
                  : (this.scroll = new Rd(this.options)),
                this.scroll.init(),
                window.location.hash)
            ) {
              var n = window.location.hash.slice(
                1,
                window.location.hash.length
              ),
                r = document.getElementById(n);
              r && this.scroll.scrollTo(r);
            }
          },
        },
        {
          key: "update",
          value: function () {
            this.scroll.update();
          },
        },
        {
          key: "start",
          value: function () {
            this.scroll.startScroll();
          },
        },
        {
          key: "stop",
          value: function () {
            this.scroll.stopScroll();
          },
        },
        {
          key: "scrollTo",
          value: function (n, r) {
            this.scroll.scrollTo(n, r);
          },
        },
        {
          key: "setScroll",
          value: function (n, r) {
            this.scroll.setScroll(n, r);
          },
        },
        {
          key: "on",
          value: function (n, r) {
            this.scroll.setEvents(n, r);
          },
        },
        {
          key: "off",
          value: function (n, r) {
            this.scroll.unsetEvents(n, r);
          },
        },
        {
          key: "destroy",
          value: function () {
            this.scroll.destroy();
          },
        },
      ]),
      t
    );
  })();
function v3(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function pa(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e);
}
/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var at = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: { lineHeight: "" },
},
  e6 = { duration: 0.5, overwrite: !1, delay: 0 },
  w7,
  y1,
  Be,
  kt = 1e8,
  me = 1 / kt,
  q5 = Math.PI * 2,
  oh = q5 / 4,
  sh = 0,
  ma = Math.sqrt,
  lh = Math.cos,
  ah = Math.sin,
  r1 = function (e) {
    return typeof e == "string";
  },
  Ve = function (e) {
    return typeof e == "function";
  },
  N3 = function (e) {
    return typeof e == "number";
  },
  S7 = function (e) {
    return typeof e > "u";
  },
  d3 = function (e) {
    return typeof e == "object";
  },
  U1 = function (e) {
    return e !== !1;
  },
  x7 = function () {
    return typeof window < "u";
  },
  C0 = function (e) {
    return Ve(e) || r1(e);
  },
  ga =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () { },
  _1 = Array.isArray,
  K5 = /(?:-?\.?\d|\.)+/gi,
  va = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  br = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  z8 = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  ya = /[+-]=-?[.\d]+/,
  _a = /[^,'"\[\]\s]+/gi,
  uh = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Le,
  vt,
  Q5,
  k7,
  ct = {},
  wi = {},
  wa,
  Sa = function (e) {
    return (wi = Jn(e, ct)) && $1;
  },
  E7 = function (e, n) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      n,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  Si = function (e, n) {
    return !n && console.warn(e);
  },
  xa = function (e, n) {
    return (e && (ct[e] = n) && wi && (wi[e] = n)) || ct;
  },
  P2 = function () {
    return 0;
  },
  ch = { suppressEvents: !0, isStart: !0, kill: !1 },
  F0 = { suppressEvents: !0, kill: !1 },
  fh = { suppressEvents: !0 },
  T7 = {},
  un = [],
  J5 = {},
  ka,
  tt = {},
  F8 = {},
  oo = 30,
  H0 = [],
  L7 = "",
  M7 = function (e) {
    var n = e[0],
      r,
      i;
    if ((d3(n) || Ve(n) || (e = [e]), !(r = (n._gsap || {}).harness))) {
      for (i = H0.length; i-- && !H0[i].targetTest(n););
      r = H0[i];
    }
    for (i = e.length; i--;)
      (e[i] && (e[i]._gsap || (e[i]._gsap = new Xa(e[i], r)))) ||
        e.splice(i, 1);
    return e;
  },
  Bn = function (e) {
    return e._gsap || M7(Et(e))[0]._gsap;
  },
  Ea = function (e, n, r) {
    return (r = e[n]) && Ve(r)
      ? e[n]()
      : (S7(r) && e.getAttribute && e.getAttribute(n)) || r;
  },
  Y1 = function (e, n) {
    return (e = e.split(",")).forEach(n) || e;
  },
  Ie = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  a1 = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Wr = function (e, n) {
    var r = n.charAt(0),
      i = parseFloat(n.substr(2));
    return (
      (e = parseFloat(e)),
      r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
    );
  },
  dh = function (e, n) {
    for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r;);
    return i < r;
  },
  xi = function () {
    var e = un.length,
      n = un.slice(0),
      r,
      i;
    for (J5 = {}, un.length = 0, r = 0; r < e; r++)
      (i = n[r]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  Ta = function (e, n, r, i) {
    un.length && !y1 && xi(),
      e.render(n, r, i || (y1 && n < 0 && (e._initted || e._startAt))),
      un.length && !y1 && xi();
  },
  La = function (e) {
    var n = parseFloat(e);
    return (n || n === 0) && (e + "").match(_a).length < 2
      ? n
      : r1(e)
        ? e.trim()
        : e;
  },
  Ma = function (e) {
    return e;
  },
  Pt = function (e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e;
  },
  hh = function (e) {
    return function (n, r) {
      for (var i in r)
        i in n || (i === "duration" && e) || i === "ease" || (n[i] = r[i]);
    };
  },
  Jn = function (e, n) {
    for (var r in n) e[r] = n[r];
    return e;
  },
  so = function t(e, n) {
    for (var r in n)
      r !== "__proto__" &&
        r !== "constructor" &&
        r !== "prototype" &&
        (e[r] = d3(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
    return e;
  },
  ki = function (e, n) {
    var r = {},
      i;
    for (i in e) i in n || (r[i] = e[i]);
    return r;
  },
  e2 = function (e) {
    var n = e.parent || Le,
      r = e.keyframes ? hh(_1(e.keyframes)) : Pt;
    if (U1(e.inherit))
      for (; n;) r(e, n.vars.defaults), (n = n.parent || n._dp);
    return e;
  },
  Ch = function (e, n) {
    for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r];);
    return r < 0;
  },
  Oa = function (e, n, r, i, o) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var s = e[i],
      l;
    if (o) for (l = n[o]; s && s[o] > l;) s = s._prev;
    return (
      s ? ((n._next = s._next), (s._next = n)) : ((n._next = e[r]), (e[r] = n)),
      n._next ? (n._next._prev = n) : (e[i] = n),
      (n._prev = s),
      (n.parent = n._dp = e),
      n
    );
  },
  r8 = function (e, n, r, i) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var o = n._prev,
      s = n._next;
    o ? (o._next = s) : e[r] === n && (e[r] = s),
      s ? (s._prev = o) : e[i] === n && (e[i] = o),
      (n._next = n._prev = n.parent = null);
  },
  Cn = function (e, n) {
    e.parent && (!n || e.parent.autoRemoveChildren) && e.parent.remove(e),
      (e._act = 0);
  },
  Wn = function (e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
      for (var r = e; r;) (r._dirty = 1), (r = r.parent);
    return e;
  },
  ph = function (e) {
    for (var n = e.parent; n && n.parent;)
      (n._dirty = 1), n.totalDuration(), (n = n.parent);
    return e;
  },
  e4 = function (e, n, r, i) {
    return (
      e._startAt &&
      (y1
        ? e._startAt.revert(F0)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
        e._startAt.render(n, !0, i))
    );
  },
  mh = function t(e) {
    return !e || (e._ts && t(e.parent));
  },
  lo = function (e) {
    return e._repeat ? t6(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  t6 = function (e, n) {
    var r = Math.floor((e /= n));
    return e && r === e ? r - 1 : r;
  },
  Ei = function (e, n) {
    return (
      (e - n._start) * n._ts +
      (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
    );
  },
  i8 = function (e) {
    return (e._end = a1(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || me) || 0)
    ));
  },
  o8 = function (e, n) {
    var r = e._dp;
    return (
      r &&
      r.smoothChildTiming &&
      e._ts &&
      ((e._start = a1(
        r._time -
        (e._ts > 0
          ? n / e._ts
          : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)
      )),
        i8(e),
        r._dirty || Wn(r, e)),
      e
    );
  },
  ba = function (e, n) {
    var r;
    if (
      ((n._time || (n._initted && !n._dur)) &&
        ((r = Ei(e.rawTime(), n)),
          (!n._dur || Z2(0, n.totalDuration(), r) - n._tTime > me) &&
          n.render(r, !0)),
        Wn(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (r = e; r._dp;)
          r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
      e._zTime = -me;
    }
  },
  s3 = function (e, n, r, i) {
    return (
      n.parent && Cn(n),
      (n._start = a1(
        (N3(r) ? r : r || e !== Le ? gt(e, r, n) : e._time) + n._delay
      )),
      (n._end = a1(
        n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
      )),
      Oa(e, n, "_first", "_last", e._sort ? "_start" : 0),
      t4(n) || (e._recent = n),
      i || ba(e, n),
      e._ts < 0 && o8(e, e._tTime),
      e
    );
  },
  Pa = function (e, n) {
    return (
      (ct.ScrollTrigger || E7("scrollTrigger", n)) &&
      ct.ScrollTrigger.create(n, e)
    );
  },
  Na = function (e, n, r, i, o) {
    if ((b7(e, n, o), !e._initted)) return 1;
    if (
      !r &&
      e._pt &&
      !y1 &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      ka !== it.frame
    )
      return un.push(e), (e._lazy = [o, i]), 1;
  },
  gh = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
  },
  t4 = function (e) {
    var n = e.data;
    return n === "isFromStart" || n === "isStart";
  },
  vh = function (e, n, r, i) {
    var o = e.ratio,
      s =
        n < 0 ||
          (!n &&
            ((!e._start && gh(e) && !(!e._initted && t4(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !t4(e))))
          ? 0
          : 1,
      l = e._rDelay,
      a = 0,
      u,
      c,
      f;
    if (
      (l &&
        e._repeat &&
        ((a = Z2(0, e._tDur, n)),
          (c = t6(a, l)),
          e._yoyo && c & 1 && (s = 1 - s),
          c !== t6(e._tTime, l) &&
          ((o = 1 - s), e.vars.repeatRefresh && e._initted && e.invalidate())),
        s !== o || y1 || i || e._zTime === me || (!n && e._zTime))
    ) {
      if (!e._initted && Na(e, n, i, r, a)) return;
      for (
        f = e._zTime,
        e._zTime = n || (r ? me : 0),
        r || (r = n && !f),
        e.ratio = s,
        e._from && (s = 1 - s),
        e._time = 0,
        e._tTime = a,
        u = e._pt;
        u;

      )
        u.r(s, u.d), (u = u._next);
      n < 0 && e4(e, n, r, !0),
        e._onUpdate && !r && Tt(e, "onUpdate"),
        a && e._repeat && !r && e.parent && Tt(e, "onRepeat"),
        (n >= e._tDur || n < 0) &&
        e.ratio === s &&
        (s && Cn(e, 1),
          !r &&
          !y1 &&
          (Tt(e, s ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = n);
  },
  yh = function (e, n, r) {
    var i;
    if (r > n)
      for (i = e._first; i && i._start <= r;) {
        if (i.data === "isPause" && i._start > n) return i;
        i = i._next;
      }
    else
      for (i = e._last; i && i._start >= r;) {
        if (i.data === "isPause" && i._start < n) return i;
        i = i._prev;
      }
  },
  n6 = function (e, n, r, i) {
    var o = e._repeat,
      s = a1(n) || 0,
      l = e._tTime / e._tDur;
    return (
      l && !i && (e._time *= s / e._dur),
      (e._dur = s),
      (e._tDur = o ? (o < 0 ? 1e10 : a1(s * (o + 1) + e._rDelay * o)) : s),
      l > 0 && !i && o8(e, (e._tTime = e._tDur * l)),
      e.parent && i8(e),
      r || Wn(e.parent, e),
      e
    );
  },
  ao = function (e) {
    return e instanceof F1 ? Wn(e) : n6(e, e._dur);
  },
  _h = { _start: 0, endTime: P2, totalDuration: P2 },
  gt = function t(e, n, r) {
    var i = e.labels,
      o = e._recent || _h,
      s = e.duration() >= kt ? o.endTime(!1) : e._dur,
      l,
      a,
      u;
    return r1(n) && (isNaN(n) || n in i)
      ? ((a = n.charAt(0)),
        (u = n.substr(-1) === "%"),
        (l = n.indexOf("=")),
        a === "<" || a === ">"
          ? (l >= 0 && (n = n.replace(/=/, "")),
            (a === "<" ? o._start : o.endTime(o._repeat >= 0)) +
            (parseFloat(n.substr(1)) || 0) *
            (u ? (l < 0 ? o : r).totalDuration() / 100 : 1))
          : l < 0
            ? (n in i || (i[n] = s), i[n])
            : ((a = parseFloat(n.charAt(l - 1) + n.substr(l + 1))),
              u && r && (a = (a / 100) * (_1(r) ? r[0] : r).totalDuration()),
              l > 1 ? t(e, n.substr(0, l - 1), r) + a : s + a))
      : n == null
        ? s
        : +n;
  },
  t2 = function (e, n, r) {
    var i = N3(n[1]),
      o = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      s = n[o],
      l,
      a;
    if ((i && (s.duration = n[1]), (s.parent = r), e)) {
      for (l = s, a = r; a && !("immediateRender" in l);)
        (l = a.vars.defaults || {}), (a = U1(a.vars.inherit) && a.parent);
      (s.immediateRender = U1(l.immediateRender)),
        e < 2 ? (s.runBackwards = 1) : (s.startAt = n[o - 1]);
    }
    return new Ye(n[0], s, n[o + 1]);
  },
  _n = function (e, n) {
    return e || e === 0 ? n(e) : n;
  },
  Z2 = function (e, n, r) {
    return r < e ? e : r > n ? n : r;
  },
  v1 = function (e, n) {
    return !r1(e) || !(n = uh.exec(e)) ? "" : n[1];
  },
  wh = function (e, n, r) {
    return _n(r, function (i) {
      return Z2(e, n, i);
    });
  },
  n4 = [].slice,
  Va = function (e, n) {
    return (
      e &&
      d3(e) &&
      "length" in e &&
      ((!n && !e.length) || (e.length - 1 in e && d3(e[0]))) &&
      !e.nodeType &&
      e !== vt
    );
  },
  Sh = function (e, n, r) {
    return (
      r === void 0 && (r = []),
      e.forEach(function (i) {
        var o;
        return (r1(i) && !n) || Va(i, 1)
          ? (o = r).push.apply(o, Et(i))
          : r.push(i);
      }) || r
    );
  },
  Et = function (e, n, r) {
    return Be && !n && Be.selector
      ? Be.selector(e)
      : r1(e) && !r && (Q5 || !r6())
        ? n4.call((n || k7).querySelectorAll(e), 0)
        : _1(e)
          ? Sh(e, r)
          : Va(e)
            ? n4.call(e, 0)
            : e
              ? [e]
              : [];
  },
  r4 = function (e) {
    return (
      (e = Et(e)[0] || Si("Invalid scope") || {}),
      function (n) {
        var r = e.current || e.nativeElement || e;
        return Et(
          n,
          r.querySelectorAll
            ? r
            : r === e
              ? Si("Invalid scope") || k7.createElement("div")
              : e
        );
      }
    );
  },
  Ra = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Aa = function (e) {
    if (Ve(e)) return e;
    var n = d3(e) ? e : { each: e },
      r = jn(n.ease),
      i = n.from || 0,
      o = parseFloat(n.base) || 0,
      s = {},
      l = i > 0 && i < 1,
      a = isNaN(i) || l,
      u = n.axis,
      c = i,
      f = i;
    return (
      r1(i)
        ? (c = f = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !l && a && ((c = i[0]), (f = i[1])),
      function (d, h, v) {
        var m = (v || n).length,
          k = s[m],
          g,
          p,
          _,
          y,
          x,
          T,
          w,
          L,
          M;
        if (!k) {
          if (((M = n.grid === "auto" ? 0 : (n.grid || [1, kt])[1]), !M)) {
            for (
              w = -kt;
              w < (w = v[M++].getBoundingClientRect().left) && M < m;

            );
            M--;
          }
          for (
            k = s[m] = [],
            g = a ? Math.min(M, m) * c - 0.5 : i % M,
            p = M === kt ? 0 : a ? (m * f) / M - 0.5 : (i / M) | 0,
            w = 0,
            L = kt,
            T = 0;
            T < m;
            T++
          )
            (_ = (T % M) - g),
              (y = p - ((T / M) | 0)),
              (k[T] = x = u ? Math.abs(u === "y" ? y : _) : ma(_ * _ + y * y)),
              x > w && (w = x),
              x < L && (L = x);
          i === "random" && Ra(k),
            (k.max = w - L),
            (k.min = L),
            (k.v = m =
              (parseFloat(n.amount) ||
                parseFloat(n.each) *
                (M > m
                  ? m - 1
                  : u
                    ? u === "y"
                      ? m / M
                      : M
                    : Math.max(M, m / M)) ||
                0) * (i === "edges" ? -1 : 1)),
            (k.b = m < 0 ? o - m : o),
            (k.u = v1(n.amount || n.each) || 0),
            (r = r && m < 0 ? Ya(r) : r);
        }
        return (
          (m = (k[d] - k.min) / k.max || 0),
          a1(k.b + (r ? r(m) : m) * k.v) + k.u
        );
      }
    );
  },
  i4 = function (e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (r) {
      var i = a1(Math.round(parseFloat(r) / e) * e * n);
      return (i - (i % 1)) / n + (N3(r) ? 0 : v1(r));
    };
  },
  Da = function (e, n) {
    var r = _1(e),
      i,
      o;
    return (
      !r &&
      d3(e) &&
      ((i = r = e.radius || kt),
        e.values
          ? ((e = Et(e.values)), (o = !N3(e[0])) && (i *= i))
          : (e = i4(e.increment))),
      _n(
        n,
        r
          ? Ve(e)
            ? function (s) {
              return (o = e(s)), Math.abs(o - s) <= i ? o : s;
            }
            : function (s) {
              for (
                var l = parseFloat(o ? s.x : s),
                a = parseFloat(o ? s.y : 0),
                u = kt,
                c = 0,
                f = e.length,
                d,
                h;
                f--;

              )
                o
                  ? ((d = e[f].x - l), (h = e[f].y - a), (d = d * d + h * h))
                  : (d = Math.abs(e[f] - l)),
                  d < u && ((u = d), (c = f));
              return (
                (c = !i || u <= i ? e[c] : s),
                o || c === s || N3(s) ? c : c + v1(s)
              );
            }
          : i4(e)
      )
    );
  },
  Ia = function (e, n, r, i) {
    return _n(_1(e) ? !n : r === !0 ? !!(r = 0) : !i, function () {
      return _1(e)
        ? e[~~(Math.random() * e.length)]
        : (r = r || 1e-5) &&
        (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
        Math.floor(
          Math.round((e - r / 2 + Math.random() * (n - e + r * 0.99)) / r) *
          r *
          i
        ) / i;
    });
  },
  xh = function () {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return function (i) {
      return n.reduce(function (o, s) {
        return s(o);
      }, i);
    };
  },
  kh = function (e, n) {
    return function (r) {
      return e(parseFloat(r)) + (n || v1(r));
    };
  },
  Eh = function (e, n, r) {
    return Fa(e, n, 0, 1, r);
  },
  za = function (e, n, r) {
    return _n(r, function (i) {
      return e[~~n(i)];
    });
  },
  Th = function t(e, n, r) {
    var i = n - e;
    return _1(e)
      ? za(e, t(0, e.length), n)
      : _n(r, function (o) {
        return ((i + ((o - e) % i)) % i) + e;
      });
  },
  Lh = function t(e, n, r) {
    var i = n - e,
      o = i * 2;
    return _1(e)
      ? za(e, t(0, e.length - 1), n)
      : _n(r, function (s) {
        return (s = (o + ((s - e) % o)) % o || 0), e + (s > i ? o - s : s);
      });
  },
  N2 = function (e) {
    for (var n = 0, r = "", i, o, s, l; ~(i = e.indexOf("random(", n));)
      (s = e.indexOf(")", i)),
        (l = e.charAt(i + 7) === "["),
        (o = e.substr(i + 7, s - i - 7).match(l ? _a : K5)),
        (r +=
          e.substr(n, i - n) + Ia(l ? o : +o[0], l ? 0 : +o[1], +o[2] || 1e-5)),
        (n = s + 1);
    return r + e.substr(n, e.length - n);
  },
  Fa = function (e, n, r, i, o) {
    var s = n - e,
      l = i - r;
    return _n(o, function (a) {
      return r + (((a - e) / s) * l || 0);
    });
  },
  Mh = function t(e, n, r, i) {
    var o = isNaN(e + n)
      ? 0
      : function (h) {
        return (1 - h) * e + h * n;
      };
    if (!o) {
      var s = r1(e),
        l = {},
        a,
        u,
        c,
        f,
        d;
      if ((r === !0 && (i = 1) && (r = null), s))
        (e = { p: e }), (n = { p: n });
      else if (_1(e) && !_1(n)) {
        for (c = [], f = e.length, d = f - 2, u = 1; u < f; u++)
          c.push(t(e[u - 1], e[u]));
        f--,
          (o = function (v) {
            v *= f;
            var m = Math.min(d, ~~v);
            return c[m](v - m);
          }),
          (r = n);
      } else i || (e = Jn(_1(e) ? [] : {}, e));
      if (!c) {
        for (a in n) O7.call(l, e, a, "get", n[a]);
        o = function (v) {
          return V7(v, l) || (s ? e.p : e);
        };
      }
    }
    return _n(r, o);
  },
  uo = function (e, n, r) {
    var i = e.labels,
      o = kt,
      s,
      l,
      a;
    for (s in i)
      (l = i[s] - n),
        l < 0 == !!r && l && o > (l = Math.abs(l)) && ((a = s), (o = l));
    return a;
  },
  Tt = function (e, n, r) {
    var i = e.vars,
      o = i[n],
      s = Be,
      l = e._ctx,
      a,
      u,
      c;
    if (o)
      return (
        (a = i[n + "Params"]),
        (u = i.callbackScope || e),
        r && un.length && xi(),
        l && (Be = l),
        (c = a ? o.apply(u, a) : o.call(u)),
        (Be = s),
        c
      );
  },
  F6 = function (e) {
    return (
      Cn(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!y1),
      e.progress() < 1 && Tt(e, "onInterrupt"),
      e
    );
  },
  Pr,
  Ha = [],
  Ba = function (e) {
    if (!x7()) {
      Ha.push(e);
      return;
    }
    e = (!e.name && e.default) || e;
    var n = e.name,
      r = Ve(e),
      i =
        n && !r && e.init
          ? function () {
            this._props = [];
          }
          : e,
      o = { init: P2, render: V7, add: O7, kill: Uh, modifier: jh, rawVars: 0 },
      s = { targetTest: 0, get: 0, getSetter: N7, aliases: {}, register: 0 };
    if ((r6(), e !== i)) {
      if (tt[n]) return;
      Pt(i, Pt(ki(e, o), s)),
        Jn(i.prototype, Jn(o, ki(e, s))),
        (tt[(i.prop = n)] = i),
        e.targetTest && (H0.push(i), (T7[n] = 1)),
        (n =
          (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) +
          "Plugin");
    }
    xa(n, i), e.register && e.register($1, i, Z1);
  },
  pe = 255,
  H6 = {
    aqua: [0, pe, pe],
    lime: [0, pe, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, pe],
    navy: [0, 0, 128],
    white: [pe, pe, pe],
    olive: [128, 128, 0],
    yellow: [pe, pe, 0],
    orange: [pe, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [pe, 0, 0],
    pink: [pe, 192, 203],
    cyan: [0, pe, pe],
    transparent: [pe, pe, pe, 0],
  },
  H8 = function (e, n, r) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? n + (r - n) * e * 6
        : e < 0.5
          ? r
          : e * 3 < 2
            ? n + (r - n) * (2 / 3 - e) * 6
            : n) *
        pe +
        0.5) |
      0
    );
  },
  Wa = function (e, n, r) {
    var i = e ? (N3(e) ? [e >> 16, (e >> 8) & pe, e & pe] : 0) : H6.black,
      o,
      s,
      l,
      a,
      u,
      c,
      f,
      d,
      h,
      v;
    if (!i) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), H6[e]))
        i = H6[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((o = e.charAt(1)),
              (s = e.charAt(2)),
              (l = e.charAt(3)),
              (e =
                "#" +
                o +
                o +
                s +
                s +
                l +
                l +
                (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
            e.length === 9)
        )
          return (
            (i = parseInt(e.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & pe, i & pe, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & pe, e & pe]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((i = v = e.match(K5)), !n))
          (a = (+i[0] % 360) / 360),
            (u = +i[1] / 100),
            (c = +i[2] / 100),
            (s = c <= 0.5 ? c * (u + 1) : c + u - c * u),
            (o = c * 2 - s),
            i.length > 3 && (i[3] *= 1),
            (i[0] = H8(a + 1 / 3, o, s)),
            (i[1] = H8(a, o, s)),
            (i[2] = H8(a - 1 / 3, o, s));
        else if (~e.indexOf("="))
          return (i = e.match(va)), r && i.length < 4 && (i[3] = 1), i;
      } else i = e.match(K5) || H6.transparent;
      i = i.map(Number);
    }
    return (
      n &&
      !v &&
      ((o = i[0] / pe),
        (s = i[1] / pe),
        (l = i[2] / pe),
        (f = Math.max(o, s, l)),
        (d = Math.min(o, s, l)),
        (c = (f + d) / 2),
        f === d
          ? (a = u = 0)
          : ((h = f - d),
            (u = c > 0.5 ? h / (2 - f - d) : h / (f + d)),
            (a =
              f === o
                ? (s - l) / h + (s < l ? 6 : 0)
                : f === s
                  ? (l - o) / h + 2
                  : (o - s) / h + 4),
            (a *= 60)),
        (i[0] = ~~(a + 0.5)),
        (i[1] = ~~(u * 100 + 0.5)),
        (i[2] = ~~(c * 100 + 0.5))),
      r && i.length < 4 && (i[3] = 1),
      i
    );
  },
  ja = function (e) {
    var n = [],
      r = [],
      i = -1;
    return (
      e.split(cn).forEach(function (o) {
        var s = o.match(br) || [];
        n.push.apply(n, s), r.push((i += s.length + 1));
      }),
      (n.c = r),
      n
    );
  },
  co = function (e, n, r) {
    var i = "",
      o = (e + i).match(cn),
      s = n ? "hsla(" : "rgba(",
      l = 0,
      a,
      u,
      c,
      f;
    if (!o) return e;
    if (
      ((o = o.map(function (d) {
        return (
          (d = Wa(d, n, 1)) &&
          s +
          (n ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) +
          ")"
        );
      })),
        r && ((c = ja(e)), (a = r.c), a.join(i) !== c.c.join(i)))
    )
      for (u = e.replace(cn, "1").split(br), f = u.length - 1; l < f; l++)
        i +=
          u[l] +
          (~a.indexOf(l)
            ? o.shift() || s + "0,0,0,0)"
            : (c.length ? c : o.length ? o : r).shift());
    if (!u)
      for (u = e.split(cn), f = u.length - 1; l < f; l++) i += u[l] + o[l];
    return i + u[f];
  },
  cn = (function () {
    var t =
      "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in H6) t += "|" + e + "\\b";
    return new RegExp(t + ")", "gi");
  })(),
  Oh = /hsl[a]?\(/,
  Ua = function (e) {
    var n = e.join(" "),
      r;
    if (((cn.lastIndex = 0), cn.test(n)))
      return (
        (r = Oh.test(n)),
        (e[1] = co(e[1], r)),
        (e[0] = co(e[0], r, ja(e[1]))),
        !0
      );
  },
  V2,
  it = (function () {
    var t = Date.now,
      e = 500,
      n = 33,
      r = t(),
      i = r,
      o = 1e3 / 240,
      s = o,
      l = [],
      a,
      u,
      c,
      f,
      d,
      h,
      v = function m(k) {
        var g = t() - i,
          p = k === !0,
          _,
          y,
          x,
          T;
        if (
          (g > e && (r += g - n),
            (i += g),
            (x = i - r),
            (_ = x - s),
            (_ > 0 || p) &&
            ((T = ++f.frame),
              (d = x - f.time * 1e3),
              (f.time = x = x / 1e3),
              (s += _ + (_ >= o ? 4 : o - _)),
              (y = 1)),
            p || (a = u(m)),
            y)
        )
          for (h = 0; h < l.length; h++) l[h](x, d, T, k);
      };
    return (
      (f = {
        time: 0,
        frame: 0,
        tick: function () {
          v(!0);
        },
        deltaRatio: function (k) {
          return d / (1e3 / (k || 60));
        },
        wake: function () {
          wa &&
            (!Q5 &&
              x7() &&
              ((vt = Q5 = window),
                (k7 = vt.document || {}),
                (ct.gsap = $1),
                (vt.gsapVersions || (vt.gsapVersions = [])).push($1.version),
                Sa(wi || vt.GreenSockGlobals || (!vt.gsap && vt) || {}),
                (c = vt.requestAnimationFrame),
                Ha.forEach(Ba)),
              a && f.sleep(),
              (u =
                c ||
                function (k) {
                  return setTimeout(k, (s - f.time * 1e3 + 1) | 0);
                }),
              (V2 = 1),
              v(2));
        },
        sleep: function () {
          (c ? vt.cancelAnimationFrame : clearTimeout)(a), (V2 = 0), (u = P2);
        },
        lagSmoothing: function (k, g) {
          (e = k || 1 / 0), (n = Math.min(g || 33, e));
        },
        fps: function (k) {
          (o = 1e3 / (k || 240)), (s = f.time * 1e3 + o);
        },
        add: function (k, g, p) {
          var _ = g
            ? function (y, x, T, w) {
              k(y, x, T, w), f.remove(_);
            }
            : k;
          return f.remove(k), l[p ? "unshift" : "push"](_), r6(), _;
        },
        remove: function (k, g) {
          ~(g = l.indexOf(k)) && l.splice(g, 1) && h >= g && h--;
        },
        _listeners: l,
      }),
      f
    );
  })(),
  r6 = function () {
    return !V2 && it.wake();
  },
  ce = {},
  bh = /^[\d.\-M][\d.\-,\s]/,
  Ph = /["']/g,
  Nh = function (e) {
    for (
      var n = {},
      r = e.substr(1, e.length - 3).split(":"),
      i = r[0],
      o = 1,
      s = r.length,
      l,
      a,
      u;
      o < s;
      o++
    )
      (a = r[o]),
        (l = o !== s - 1 ? a.lastIndexOf(",") : a.length),
        (u = a.substr(0, l)),
        (n[i] = isNaN(u) ? u.replace(Ph, "").trim() : +u),
        (i = a.substr(l + 1).trim());
    return n;
  },
  Vh = function (e) {
    var n = e.indexOf("(") + 1,
      r = e.indexOf(")"),
      i = e.indexOf("(", n);
    return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r);
  },
  Rh = function (e) {
    var n = (e + "").split("("),
      r = ce[n[0]];
    return r && n.length > 1 && r.config
      ? r.config.apply(
        null,
        ~e.indexOf("{") ? [Nh(n[1])] : Vh(e).split(",").map(La)
      )
      : ce._CE && bh.test(e)
        ? ce._CE("", e)
        : r;
  },
  Ya = function (e) {
    return function (n) {
      return 1 - e(1 - n);
    };
  },
  Za = function t(e, n) {
    for (var r = e._first, i; r;)
      r instanceof F1
        ? t(r, n)
        : r.vars.yoyoEase &&
        (!r._yoyo || !r._repeat) &&
        r._yoyo !== n &&
        (r.timeline
          ? t(r.timeline, n)
          : ((i = r._ease),
            (r._ease = r._yEase),
            (r._yEase = i),
            (r._yoyo = n))),
        (r = r._next);
  },
  jn = function (e, n) {
    return (e && (Ve(e) ? e : ce[e] || Rh(e))) || n;
  },
  sr = function (e, n, r, i) {
    r === void 0 &&
      (r = function (a) {
        return 1 - n(1 - a);
      }),
      i === void 0 &&
      (i = function (a) {
        return a < 0.5 ? n(a * 2) / 2 : 1 - n((1 - a) * 2) / 2;
      });
    var o = { easeIn: n, easeOut: r, easeInOut: i },
      s;
    return (
      Y1(e, function (l) {
        (ce[l] = ct[l] = o), (ce[(s = l.toLowerCase())] = r);
        for (var a in o)
          ce[
            s + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")
          ] = ce[l + "." + a] = o[a];
      }),
      o
    );
  },
  $a = function (e) {
    return function (n) {
      return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
    };
  },
  B8 = function t(e, n, r) {
    var i = n >= 1 ? n : 1,
      o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      s = (o / q5) * (Math.asin(1 / i) || 0),
      l = function (c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * ah((c - s) * o) + 1;
      },
      a =
        e === "out"
          ? l
          : e === "in"
            ? function (u) {
              return 1 - l(1 - u);
            }
            : $a(l);
    return (
      (o = q5 / o),
      (a.config = function (u, c) {
        return t(e, u, c);
      }),
      a
    );
  },
  W8 = function t(e, n) {
    n === void 0 && (n = 1.70158);
    var r = function (s) {
      return s ? --s * s * ((n + 1) * s + n) + 1 : 0;
    },
      i =
        e === "out"
          ? r
          : e === "in"
            ? function (o) {
              return 1 - r(1 - o);
            }
            : $a(r);
    return (
      (i.config = function (o) {
        return t(e, o);
      }),
      i
    );
  };
Y1("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
  var n = e < 5 ? e + 1 : e;
  sr(
    t + ",Power" + (n - 1),
    e
      ? function (r) {
        return Math.pow(r, n);
      }
      : function (r) {
        return r;
      },
    function (r) {
      return 1 - Math.pow(1 - r, n);
    },
    function (r) {
      return r < 0.5
        ? Math.pow(r * 2, n) / 2
        : 1 - Math.pow((1 - r) * 2, n) / 2;
    }
  );
});
ce.Linear.easeNone = ce.none = ce.Linear.easeIn;
sr("Elastic", B8("in"), B8("out"), B8());
(function (t, e) {
  var n = 1 / e,
    r = 2 * n,
    i = 2.5 * n,
    o = function (l) {
      return l < n
        ? t * l * l
        : l < r
          ? t * Math.pow(l - 1.5 / e, 2) + 0.75
          : l < i
            ? t * (l -= 2.25 / e) * l + 0.9375
            : t * Math.pow(l - 2.625 / e, 2) + 0.984375;
    };
  sr(
    "Bounce",
    function (s) {
      return 1 - o(1 - s);
    },
    o
  );
})(7.5625, 2.75);
sr("Expo", function (t) {
  return t ? Math.pow(2, 10 * (t - 1)) : 0;
});
sr("Circ", function (t) {
  return -(ma(1 - t * t) - 1);
});
sr("Sine", function (t) {
  return t === 1 ? 1 : -lh(t * oh) + 1;
});
sr("Back", W8("in"), W8("out"), W8());
ce.SteppedEase =
  ce.steps =
  ct.SteppedEase =
  {
    config: function (e, n) {
      e === void 0 && (e = 1);
      var r = 1 / e,
        i = e + (n ? 0 : 1),
        o = n ? 1 : 0,
        s = 1 - me;
      return function (l) {
        return (((i * Z2(0, s, l)) | 0) + o) * r;
      };
    },
  };
e6.ease = ce["quad.out"];
Y1(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (t) {
    return (L7 += t + "," + t + "Params,");
  }
);
var Xa = function (e, n) {
  (this.id = sh++),
    (e._gsap = this),
    (this.target = e),
    (this.harness = n),
    (this.get = n ? n.get : Ea),
    (this.set = n ? n.getSetter : N7);
},
  i6 = (function () {
    function t(n) {
      (this.vars = n),
        (this._delay = +n.delay || 0),
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
        ((this._rDelay = n.repeatDelay || 0),
          (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
        (this._ts = 1),
        n6(this, +n.duration, 1, 1),
        (this.data = n.data),
        Be && ((this._ctx = Be), Be.data.push(this)),
        V2 || it.wake();
    }
    var e = t.prototype;
    return (
      (e.delay = function (r) {
        return r || r === 0
          ? (this.parent &&
            this.parent.smoothChildTiming &&
            this.startTime(this._start + r - this._delay),
            (this._delay = r),
            this)
          : this._delay;
      }),
      (e.duration = function (r) {
        return arguments.length
          ? this.totalDuration(
            this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
          )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (r) {
        return arguments.length
          ? ((this._dirty = 0),
            n6(
              this,
              this._repeat < 0
                ? r
                : (r - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (r, i) {
        if ((r6(), !arguments.length)) return this._tTime;
        var o = this._dp;
        if (o && o.smoothChildTiming && this._ts) {
          for (o8(this, r), !o._dp || o.parent || ba(o, this); o && o.parent;)
            o.parent._time !==
              o._start +
              (o._ts >= 0
                ? o._tTime / o._ts
                : (o.totalDuration() - o._tTime) / -o._ts) &&
              o.totalTime(o._tTime, !0),
              (o = o.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && r < this._tDur) ||
              (this._ts < 0 && r > 0) ||
              (!this._tDur && !r)) &&
            s3(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== r ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === me) ||
            (!r && !this._initted && (this.add || this._ptLookup))) &&
          (this._ts || (this._pTime = r), Ta(this, r, i)),
          this
        );
      }),
      (e.time = function (r, i) {
        return arguments.length
          ? this.totalTime(
            Math.min(this.totalDuration(), r + lo(this)) %
            (this._dur + this._rDelay) || (r ? this._dur : 0),
            i
          )
          : this._time;
      }),
      (e.totalProgress = function (r, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * r, i)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
      }),
      (e.progress = function (r, i) {
        return arguments.length
          ? this.totalTime(
            this.duration() *
            (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
            lo(this),
            i
          )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
      }),
      (e.iteration = function (r, i) {
        var o = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (r - 1) * o, i)
          : this._repeat
            ? t6(this._tTime, o) + 1
            : 1;
      }),
      (e.timeScale = function (r) {
        if (!arguments.length) return this._rts === -me ? 0 : this._rts;
        if (this._rts === r) return this;
        var i =
          this.parent && this._ts ? Ei(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +r || 0),
          (this._ts = this._ps || r === -me ? 0 : this._rts),
          this.totalTime(Z2(-Math.abs(this._delay), this._tDur, i), !0),
          i8(this),
          ph(this)
        );
      }),
      (e.paused = function (r) {
        return arguments.length
          ? (this._ps !== r &&
            ((this._ps = r),
              r
                ? ((this._pTime =
                  this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (r6(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                    Math.abs(this._zTime) !== me &&
                    (this._tTime -= me)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (r) {
        if (arguments.length) {
          this._start = r;
          var i = this.parent || this._dp;
          return (
            i && (i._sort || !this.parent) && s3(i, this, r - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (r) {
        return (
          this._start +
          (U1(r) ? this.totalDuration() : this.duration()) /
          Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (r) {
        var i = this.parent || this._dp;
        return i
          ? r &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? Ei(i.rawTime(r), this)
              : this._tTime
          : this._tTime;
      }),
      (e.revert = function (r) {
        r === void 0 && (r = fh);
        var i = y1;
        return (
          (y1 = r),
          (this._initted || this._startAt) &&
          (this.timeline && this.timeline.revert(r),
            this.totalTime(-0.01, r.suppressEvents)),
          this.data !== "nested" && r.kill !== !1 && this.kill(),
          (y1 = i),
          this
        );
      }),
      (e.globalTime = function (r) {
        for (var i = this, o = arguments.length ? r : i.rawTime(); i;)
          (o = i._start + o / (i._ts || 1)), (i = i._dp);
        return !this.parent && this._sat
          ? this._sat.vars.immediateRender
            ? -1
            : this._sat.globalTime(r)
          : o;
      }),
      (e.repeat = function (r) {
        return arguments.length
          ? ((this._repeat = r === 1 / 0 ? -2 : r), ao(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (e.repeatDelay = function (r) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = r), ao(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (r) {
        return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
      }),
      (e.seek = function (r, i) {
        return this.totalTime(gt(this, r), U1(i));
      }),
      (e.restart = function (r, i) {
        return this.play().totalTime(r ? -this._delay : 0, U1(i));
      }),
      (e.play = function (r, i) {
        return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (r, i) {
        return (
          r != null && this.seek(r || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (r, i) {
        return r != null && this.seek(r, i), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (r) {
        return arguments.length
          ? (!!r !== this.reversed() &&
            this.timeScale(-this._rts || (r ? -me : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -me), this;
      }),
      (e.isActive = function () {
        var r = this.parent || this._dp,
          i = this._start,
          o;
        return !!(
          !r ||
          (this._ts &&
            this._initted &&
            r.isActive() &&
            (o = r.rawTime(!0)) >= i &&
            o < this.endTime(!0) - me)
        );
      }),
      (e.eventCallback = function (r, i, o) {
        var s = this.vars;
        return arguments.length > 1
          ? (i
            ? ((s[r] = i),
              o && (s[r + "Params"] = o),
              r === "onUpdate" && (this._onUpdate = i))
            : delete s[r],
            this)
          : s[r];
      }),
      (e.then = function (r) {
        var i = this;
        return new Promise(function (o) {
          var s = Ve(r) ? r : Ma,
            l = function () {
              var u = i.then;
              (i.then = null),
                Ve(s) && (s = s(i)) && (s.then || s === i) && (i.then = u),
                o(s),
                (i.then = u);
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
            (!i._tTime && i._ts < 0)
            ? l()
            : (i._prom = l);
        });
      }),
      (e.kill = function () {
        F6(this);
      }),
      t
    );
  })();
Pt(i6.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -me,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var F1 = (function (t) {
  pa(e, t);
  function e(r, i) {
    var o;
    return (
      r === void 0 && (r = {}),
      (o = t.call(this, r) || this),
      (o.labels = {}),
      (o.smoothChildTiming = !!r.smoothChildTiming),
      (o.autoRemoveChildren = !!r.autoRemoveChildren),
      (o._sort = U1(r.sortChildren)),
      Le && s3(r.parent || Le, v3(o), i),
      r.reversed && o.reverse(),
      r.paused && o.paused(!0),
      r.scrollTrigger && Pa(v3(o), r.scrollTrigger),
      o
    );
  }
  var n = e.prototype;
  return (
    (n.to = function (i, o, s) {
      return t2(0, arguments, this), this;
    }),
    (n.from = function (i, o, s) {
      return t2(1, arguments, this), this;
    }),
    (n.fromTo = function (i, o, s, l) {
      return t2(2, arguments, this), this;
    }),
    (n.set = function (i, o, s) {
      return (
        (o.duration = 0),
        (o.parent = this),
        e2(o).repeatDelay || (o.repeat = 0),
        (o.immediateRender = !!o.immediateRender),
        new Ye(i, o, gt(this, s), 1),
        this
      );
    }),
    (n.call = function (i, o, s) {
      return s3(this, Ye.delayedCall(0, i, o), s);
    }),
    (n.staggerTo = function (i, o, s, l, a, u, c) {
      return (
        (s.duration = o),
        (s.stagger = s.stagger || l),
        (s.onComplete = u),
        (s.onCompleteParams = c),
        (s.parent = this),
        new Ye(i, s, gt(this, a)),
        this
      );
    }),
    (n.staggerFrom = function (i, o, s, l, a, u, c) {
      return (
        (s.runBackwards = 1),
        (e2(s).immediateRender = U1(s.immediateRender)),
        this.staggerTo(i, o, s, l, a, u, c)
      );
    }),
    (n.staggerFromTo = function (i, o, s, l, a, u, c, f) {
      return (
        (l.startAt = s),
        (e2(l).immediateRender = U1(l.immediateRender)),
        this.staggerTo(i, o, l, a, u, c, f)
      );
    }),
    (n.render = function (i, o, s) {
      var l = this._time,
        a = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        c = i <= 0 ? 0 : a1(i),
        f = this._zTime < 0 != i < 0 && (this._initted || !u),
        d,
        h,
        v,
        m,
        k,
        g,
        p,
        _,
        y,
        x,
        T,
        w;
      if (
        (this !== Le && c > a && i >= 0 && (c = a), c !== this._tTime || s || f)
      ) {
        if (
          (l !== this._time &&
            u &&
            ((c += this._time - l), (i += this._time - l)),
            (d = c),
            (y = this._start),
            (_ = this._ts),
            (g = !_),
            f && (u || (l = this._zTime), (i || !o) && (this._zTime = i)),
            this._repeat)
        ) {
          if (
            ((T = this._yoyo),
              (k = u + this._rDelay),
              this._repeat < -1 && i < 0)
          )
            return this.totalTime(k * 100 + i, o, s);
          if (
            ((d = a1(c % k)),
              c === a
                ? ((m = this._repeat), (d = u))
                : ((m = ~~(c / k)),
                  m && m === c / k && ((d = u), m--),
                  d > u && (d = u)),
              (x = t6(this._tTime, k)),
              !l &&
              this._tTime &&
              x !== m &&
              this._tTime - x * k - this._dur <= 0 &&
              (x = m),
              T && m & 1 && ((d = u - d), (w = 1)),
              m !== x && !this._lock)
          ) {
            var L = T && x & 1,
              M = L === (T && m & 1);
            if (
              (m < x && (L = !L),
                (l = L ? 0 : u),
                (this._lock = 1),
                (this.render(l || (w ? 0 : a1(m * k)), o, !u)._lock = 0),
                (this._tTime = c),
                !o && this.parent && Tt(this, "onRepeat"),
                this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1),
                (l && l !== this._time) ||
                g !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
                (a = this._tDur),
                M &&
                ((this._lock = 2),
                  (l = L ? u : -1e-4),
                  this.render(l, !0),
                  this.vars.repeatRefresh && !w && this.invalidate()),
                (this._lock = 0),
                !this._ts && !g)
            )
              return this;
            Za(this, w);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((p = yh(this, a1(l), a1(d))), p && (c -= d - (d = p._start))),
            (this._tTime = c),
            (this._time = d),
            (this._act = !_),
            this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = i),
              (l = 0)),
            !l && d && !o && !m && (Tt(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (d >= l && i >= 0)
          for (h = this._first; h;) {
            if (
              ((v = h._next), (h._act || d >= h._start) && h._ts && p !== h)
            ) {
              if (h.parent !== this) return this.render(i, o, s);
              if (
                (h.render(
                  h._ts > 0
                    ? (d - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                    (d - h._start) * h._ts,
                  o,
                  s
                ),
                  d !== this._time || (!this._ts && !g))
              ) {
                (p = 0), v && (c += this._zTime = -me);
                break;
              }
            }
            h = v;
          }
        else {
          h = this._last;
          for (var O = i < 0 ? i : d; h;) {
            if (((v = h._prev), (h._act || O <= h._end) && h._ts && p !== h)) {
              if (h.parent !== this) return this.render(i, o, s);
              if (
                (h.render(
                  h._ts > 0
                    ? (O - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                    (O - h._start) * h._ts,
                  o,
                  s || (y1 && (h._initted || h._startAt))
                ),
                  d !== this._time || (!this._ts && !g))
              ) {
                (p = 0), v && (c += this._zTime = O ? -me : me);
                break;
              }
            }
            h = v;
          }
        }
        if (
          p &&
          !o &&
          (this.pause(),
            (p.render(d >= l ? 0 : -me)._zTime = d >= l ? 1 : -1),
            this._ts)
        )
          return (this._start = y), i8(this), this.render(i, o, s);
        this._onUpdate && !o && Tt(this, "onUpdate", !0),
          ((c === a && this._tTime >= this.totalDuration()) || (!c && l)) &&
          (y === this._start || Math.abs(_) !== Math.abs(this._ts)) &&
          (this._lock ||
            ((i || !u) &&
              ((c === a && this._ts > 0) || (!c && this._ts < 0)) &&
              Cn(this, 1),
              !o &&
              !(i < 0 && !l) &&
              (c || l || !a) &&
              (Tt(
                this,
                c === a && i >= 0 ? "onComplete" : "onReverseComplete",
                !0
              ),
                this._prom &&
                !(c < a && this.timeScale() > 0) &&
                this._prom())));
      }
      return this;
    }),
    (n.add = function (i, o) {
      var s = this;
      if ((N3(o) || (o = gt(this, o, i)), !(i instanceof i6))) {
        if (_1(i))
          return (
            i.forEach(function (l) {
              return s.add(l, o);
            }),
            this
          );
        if (r1(i)) return this.addLabel(i, o);
        if (Ve(i)) i = Ye.delayedCall(0, i);
        else return this;
      }
      return this !== i ? s3(this, i, o) : this;
    }),
    (n.getChildren = function (i, o, s, l) {
      i === void 0 && (i = !0),
        o === void 0 && (o = !0),
        s === void 0 && (s = !0),
        l === void 0 && (l = -kt);
      for (var a = [], u = this._first; u;)
        u._start >= l &&
          (u instanceof Ye
            ? o && a.push(u)
            : (s && a.push(u), i && a.push.apply(a, u.getChildren(!0, o, s)))),
          (u = u._next);
      return a;
    }),
    (n.getById = function (i) {
      for (var o = this.getChildren(1, 1, 1), s = o.length; s--;)
        if (o[s].vars.id === i) return o[s];
    }),
    (n.remove = function (i) {
      return r1(i)
        ? this.removeLabel(i)
        : Ve(i)
          ? this.killTweensOf(i)
          : (r8(this, i),
            i === this._recent && (this._recent = this._last),
            Wn(this));
    }),
    (n.totalTime = function (i, o) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
          this._ts &&
          (this._start = a1(
            it.time -
            (this._ts > 0
              ? i / this._ts
              : (this.totalDuration() - i) / -this._ts)
          )),
          t.prototype.totalTime.call(this, i, o),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (n.addLabel = function (i, o) {
      return (this.labels[i] = gt(this, o)), this;
    }),
    (n.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (n.addPause = function (i, o, s) {
      var l = Ye.delayedCall(0, o || P2, s);
      return (
        (l.data = "isPause"), (this._hasPause = 1), s3(this, l, gt(this, i))
      );
    }),
    (n.removePause = function (i) {
      var o = this._first;
      for (i = gt(this, i); o;)
        o._start === i && o.data === "isPause" && Cn(o), (o = o._next);
    }),
    (n.killTweensOf = function (i, o, s) {
      for (var l = this.getTweensOf(i, s), a = l.length; a--;)
        $3 !== l[a] && l[a].kill(i, o);
      return this;
    }),
    (n.getTweensOf = function (i, o) {
      for (var s = [], l = Et(i), a = this._first, u = N3(o), c; a;)
        a instanceof Ye
          ? dh(a._targets, l) &&
          (u
            ? (!$3 || (a._initted && a._ts)) &&
            a.globalTime(0) <= o &&
            a.globalTime(a.totalDuration()) > o
            : !o || a.isActive()) &&
          s.push(a)
          : (c = a.getTweensOf(l, o)).length && s.push.apply(s, c),
          (a = a._next);
      return s;
    }),
    (n.tweenTo = function (i, o) {
      o = o || {};
      var s = this,
        l = gt(s, i),
        a = o,
        u = a.startAt,
        c = a.onStart,
        f = a.onStartParams,
        d = a.immediateRender,
        h,
        v = Ye.to(
          s,
          Pt(
            {
              ease: o.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: l,
              overwrite: "auto",
              duration:
                o.duration ||
                Math.abs(
                  (l - (u && "time" in u ? u.time : s._time)) / s.timeScale()
                ) ||
                me,
              onStart: function () {
                if ((s.pause(), !h)) {
                  var k =
                    o.duration ||
                    Math.abs(
                      (l - (u && "time" in u ? u.time : s._time)) /
                      s.timeScale()
                    );
                  v._dur !== k && n6(v, k, 0, 1).render(v._time, !0, !0),
                    (h = 1);
                }
                c && c.apply(v, f || []);
              },
            },
            o
          )
        );
      return d ? v.render(0) : v;
    }),
    (n.tweenFromTo = function (i, o, s) {
      return this.tweenTo(o, Pt({ startAt: { time: gt(this, i) } }, s));
    }),
    (n.recent = function () {
      return this._recent;
    }),
    (n.nextLabel = function (i) {
      return i === void 0 && (i = this._time), uo(this, gt(this, i));
    }),
    (n.previousLabel = function (i) {
      return i === void 0 && (i = this._time), uo(this, gt(this, i), 1);
    }),
    (n.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + me);
    }),
    (n.shiftChildren = function (i, o, s) {
      s === void 0 && (s = 0);
      for (var l = this._first, a = this.labels, u; l;)
        l._start >= s && ((l._start += i), (l._end += i)), (l = l._next);
      if (o) for (u in a) a[u] >= s && (a[u] += i);
      return Wn(this);
    }),
    (n.invalidate = function (i) {
      var o = this._first;
      for (this._lock = 0; o;) o.invalidate(i), (o = o._next);
      return t.prototype.invalidate.call(this, i);
    }),
    (n.clear = function (i) {
      i === void 0 && (i = !0);
      for (var o = this._first, s; o;) (s = o._next), this.remove(o), (o = s);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        Wn(this)
      );
    }),
    (n.totalDuration = function (i) {
      var o = 0,
        s = this,
        l = s._last,
        a = kt,
        u,
        c,
        f;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
          (s.reversed() ? -i : i)
        );
      if (s._dirty) {
        for (f = s.parent; l;)
          (u = l._prev),
            l._dirty && l.totalDuration(),
            (c = l._start),
            c > a && s._sort && l._ts && !s._lock
              ? ((s._lock = 1), (s3(s, l, c - l._delay, 1)._lock = 0))
              : (a = c),
            c < 0 &&
            l._ts &&
            ((o -= c),
              ((!f && !s._dp) || (f && f.smoothChildTiming)) &&
              ((s._start += c / s._ts), (s._time -= c), (s._tTime -= c)),
              s.shiftChildren(-c, !1, -1 / 0),
              (a = 0)),
            l._end > o && l._ts && (o = l._end),
            (l = u);
        n6(s, s === Le && s._time > o ? s._time : o, 1, 1), (s._dirty = 0);
      }
      return s._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((Le._ts && (Ta(Le, Ei(i, Le)), (ka = it.frame)), it.frame >= oo)) {
        oo += at.autoSleep || 120;
        var o = Le._first;
        if ((!o || !o._ts) && at.autoSleep && it._listeners.length < 2) {
          for (; o && !o._ts;) o = o._next;
          o || it.sleep();
        }
      }
    }),
    e
  );
})(i6);
Pt(F1.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Ah = function (e, n, r, i, o, s, l) {
  var a = new Z1(this._pt, e, n, 0, 1, eu, null, o),
    u = 0,
    c = 0,
    f,
    d,
    h,
    v,
    m,
    k,
    g,
    p;
  for (
    a.b = r,
    a.e = i,
    r += "",
    i += "",
    (g = ~i.indexOf("random(")) && (i = N2(i)),
    s && ((p = [r, i]), s(p, e, n), (r = p[0]), (i = p[1])),
    d = r.match(z8) || [];
    (f = z8.exec(i));

  )
    (v = f[0]),
      (m = i.substring(u, f.index)),
      h ? (h = (h + 1) % 5) : m.substr(-5) === "rgba(" && (h = 1),
      v !== d[c++] &&
      ((k = parseFloat(d[c - 1]) || 0),
        (a._pt = {
          _next: a._pt,
          p: m || c === 1 ? m : ",",
          s: k,
          c: v.charAt(1) === "=" ? Wr(k, v) - k : parseFloat(v) - k,
          m: h && h < 4 ? Math.round : 0,
        }),
        (u = z8.lastIndex));
  return (
    (a.c = u < i.length ? i.substring(u, i.length) : ""),
    (a.fp = l),
    (ya.test(i) || g) && (a.e = 0),
    (this._pt = a),
    a
  );
},
  O7 = function (e, n, r, i, o, s, l, a, u, c) {
    Ve(i) && (i = i(o || 0, e, s));
    var f = e[n],
      d =
        r !== "get"
          ? r
          : Ve(f)
            ? u
              ? e[
                n.indexOf("set") || !Ve(e["get" + n.substr(3)])
                  ? n
                  : "get" + n.substr(3)
              ](u)
              : e[n]()
            : f,
      h = Ve(f) ? (u ? Hh : Qa) : P7,
      v;
    if (
      (r1(i) &&
        (~i.indexOf("random(") && (i = N2(i)),
          i.charAt(1) === "=" &&
          ((v = Wr(d, i) + (v1(d) || 0)), (v || v === 0) && (i = v))),
        !c || d !== i || o4)
    )
      return !isNaN(d * i) && i !== ""
        ? ((v = new Z1(
          this._pt,
          e,
          n,
          +d || 0,
          i - (d || 0),
          typeof f == "boolean" ? Wh : Ja,
          0,
          h
        )),
          u && (v.fp = u),
          l && v.modifier(l, this, e),
          (this._pt = v))
        : (!f && !(n in e) && E7(n, i),
          Ah.call(this, e, n, d, i, h, a || at.stringFilter, u));
  },
  Dh = function (e, n, r, i, o) {
    if (
      (Ve(e) && (e = n2(e, o, n, r, i)),
        !d3(e) || (e.style && e.nodeType) || _1(e) || ga(e))
    )
      return r1(e) ? n2(e, o, n, r, i) : e;
    var s = {},
      l;
    for (l in e) s[l] = n2(e[l], o, n, r, i);
    return s;
  },
  Ga = function (e, n, r, i, o, s) {
    var l, a, u, c;
    if (
      tt[e] &&
      (l = new tt[e]()).init(
        o,
        l.rawVars ? n[e] : Dh(n[e], i, o, s, r),
        r,
        i,
        s
      ) !== !1 &&
      ((r._pt = a = new Z1(r._pt, o, e, 0, 1, l.render, l, 0, l.priority)),
        r !== Pr)
    )
      for (u = r._ptLookup[r._targets.indexOf(o)], c = l._props.length; c--;)
        u[l._props[c]] = a;
    return l;
  },
  $3,
  o4,
  b7 = function t(e, n, r) {
    var i = e.vars,
      o = i.ease,
      s = i.startAt,
      l = i.immediateRender,
      a = i.lazy,
      u = i.onUpdate,
      c = i.onUpdateParams,
      f = i.callbackScope,
      d = i.runBackwards,
      h = i.yoyoEase,
      v = i.keyframes,
      m = i.autoRevert,
      k = e._dur,
      g = e._startAt,
      p = e._targets,
      _ = e.parent,
      y = _ && _.data === "nested" ? _.vars.targets : p,
      x = e._overwrite === "auto" && !w7,
      T = e.timeline,
      w,
      L,
      M,
      O,
      W,
      I,
      $,
      D,
      A,
      H,
      E,
      b,
      N;
    if (
      (T && (!v || !o) && (o = "none"),
        (e._ease = jn(o, e6.ease)),
        (e._yEase = h ? Ya(jn(h === !0 ? o : h, e6.ease)) : 0),
        h &&
        e._yoyo &&
        !e._repeat &&
        ((h = e._yEase), (e._yEase = e._ease), (e._ease = h)),
        (e._from = !T && !!i.runBackwards),
        !T || (v && !i.stagger))
    ) {
      if (
        ((D = p[0] ? Bn(p[0]).harness : 0),
          (b = D && i[D.prop]),
          (w = ki(i, T7)),
          g &&
          (g._zTime < 0 && g.progress(1),
            n < 0 && d && l && !m ? g.render(-1, !0) : g.revert(d && k ? F0 : ch),
            (g._lazy = 0)),
          s)
      ) {
        if (
          (Cn(
            (e._startAt = Ye.set(
              p,
              Pt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: _,
                  immediateRender: !0,
                  lazy: !g && U1(a),
                  startAt: null,
                  delay: 0,
                  onUpdate: u,
                  onUpdateParams: c,
                  callbackScope: f,
                  stagger: 0,
                },
                s
              )
            ))
          ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            n < 0 && (y1 || (!l && !m)) && e._startAt.revert(F0),
            l && k && n <= 0 && r <= 0)
        ) {
          n && (e._zTime = n);
          return;
        }
      } else if (d && k && !g) {
        if (
          (n && (l = !1),
            (M = Pt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: l && !g && U1(a),
                immediateRender: l,
                stagger: 0,
                parent: _,
              },
              w
            )),
            b && (M[D.prop] = b),
            Cn((e._startAt = Ye.set(p, M))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            n < 0 && (y1 ? e._startAt.revert(F0) : e._startAt.render(-1, !0)),
            (e._zTime = n),
            !l)
        )
          t(e._startAt, me, me);
        else if (!n) return;
      }
      for (
        e._pt = e._ptCache = 0, a = (k && U1(a)) || (a && !k), L = 0;
        L < p.length;
        L++
      ) {
        if (
          ((W = p[L]),
            ($ = W._gsap || M7(p)[L]._gsap),
            (e._ptLookup[L] = H = {}),
            J5[$.id] && un.length && xi(),
            (E = y === p ? L : y.indexOf(W)),
            D &&
            (A = new D()).init(W, b || w, e, E, y) !== !1 &&
            ((e._pt = O =
              new Z1(e._pt, W, A.name, 0, 1, A.render, A, 0, A.priority)),
              A._props.forEach(function (S) {
                H[S] = O;
              }),
              A.priority && (I = 1)),
            !D || b)
        )
          for (M in w)
            tt[M] && (A = Ga(M, w, e, E, W, y))
              ? A.priority && (I = 1)
              : (H[M] = O =
                O7.call(e, W, M, "get", w[M], E, y, 0, i.stringFilter));
        e._op && e._op[L] && e.kill(W, e._op[L]),
          x &&
          e._pt &&
          (($3 = e),
            Le.killTweensOf(W, H, e.globalTime(n)),
            (N = !e.parent),
            ($3 = 0)),
          e._pt && a && (J5[$.id] = 1);
      }
      I && tu(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !N),
      v && n <= 0 && T.render(kt, !0, !0);
  },
  Ih = function (e, n, r, i, o, s, l) {
    var a = ((e._pt && e._ptCache) || (e._ptCache = {}))[n],
      u,
      c,
      f,
      d;
    if (!a)
      for (
        a = e._ptCache[n] = [], f = e._ptLookup, d = e._targets.length;
        d--;

      ) {
        if (((u = f[d][n]), u && u.d && u.d._pt))
          for (u = u.d._pt; u && u.p !== n && u.fp !== n;) u = u._next;
        if (!u) return (o4 = 1), (e.vars[n] = "+=0"), b7(e, l), (o4 = 0), 1;
        a.push(u);
      }
    for (d = a.length; d--;)
      (c = a[d]),
        (u = c._pt || c),
        (u.s = (i || i === 0) && !o ? i : u.s + (i || 0) + s * u.c),
        (u.c = r - u.s),
        c.e && (c.e = Ie(r) + v1(c.e)),
        c.b && (c.b = u.s + v1(c.b));
  },
  zh = function (e, n) {
    var r = e[0] ? Bn(e[0]).harness : 0,
      i = r && r.aliases,
      o,
      s,
      l,
      a;
    if (!i) return n;
    o = Jn({}, n);
    for (s in i)
      if (s in o) for (a = i[s].split(","), l = a.length; l--;) o[a[l]] = o[s];
    return o;
  },
  Fh = function (e, n, r, i) {
    var o = n.ease || i || "power1.inOut",
      s,
      l;
    if (_1(n))
      (l = r[e] || (r[e] = [])),
        n.forEach(function (a, u) {
          return l.push({ t: (u / (n.length - 1)) * 100, v: a, e: o });
        });
    else
      for (s in n)
        (l = r[s] || (r[s] = [])),
          s === "ease" || l.push({ t: parseFloat(e), v: n[s], e: o });
  },
  n2 = function (e, n, r, i, o) {
    return Ve(e)
      ? e.call(n, r, i, o)
      : r1(e) && ~e.indexOf("random(")
        ? N2(e)
        : e;
  },
  qa = L7 + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Ka = {};
Y1(qa + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
  return (Ka[t] = 1);
});
var Ye = (function (t) {
  pa(e, t);
  function e(r, i, o, s) {
    var l;
    typeof i == "number" && ((o.duration = i), (i = o), (o = null)),
      (l = t.call(this, s ? i : e2(i)) || this);
    var a = l.vars,
      u = a.duration,
      c = a.delay,
      f = a.immediateRender,
      d = a.stagger,
      h = a.overwrite,
      v = a.keyframes,
      m = a.defaults,
      k = a.scrollTrigger,
      g = a.yoyoEase,
      p = i.parent || Le,
      _ = (_1(r) || ga(r) ? N3(r[0]) : "length" in i) ? [r] : Et(r),
      y,
      x,
      T,
      w,
      L,
      M,
      O,
      W;
    if (
      ((l._targets = _.length
        ? M7(_)
        : Si(
          "GSAP target " + r + " not found. https://greensock.com",
          !at.nullTargetWarn
        ) || []),
        (l._ptLookup = []),
        (l._overwrite = h),
        v || d || C0(u) || C0(c))
    ) {
      if (
        ((i = l.vars),
          (y = l.timeline =
            new F1({
              data: "nested",
              defaults: m || {},
              targets: p && p.data === "nested" ? p.vars.targets : _,
            })),
          y.kill(),
          (y.parent = y._dp = v3(l)),
          (y._start = 0),
          d || C0(u) || C0(c))
      ) {
        if (((w = _.length), (O = d && Aa(d)), d3(d)))
          for (L in d) ~qa.indexOf(L) && (W || (W = {}), (W[L] = d[L]));
        for (x = 0; x < w; x++)
          (T = ki(i, Ka)),
            (T.stagger = 0),
            g && (T.yoyoEase = g),
            W && Jn(T, W),
            (M = _[x]),
            (T.duration = +n2(u, v3(l), x, M, _)),
            (T.delay = (+n2(c, v3(l), x, M, _) || 0) - l._delay),
            !d &&
            w === 1 &&
            T.delay &&
            ((l._delay = c = T.delay), (l._start += c), (T.delay = 0)),
            y.to(M, T, O ? O(x, M, _) : 0),
            (y._ease = ce.none);
        y.duration() ? (u = c = 0) : (l.timeline = 0);
      } else if (v) {
        e2(Pt(y.vars.defaults, { ease: "none" })),
          (y._ease = jn(v.ease || i.ease || "none"));
        var I = 0,
          $,
          D,
          A;
        if (_1(v))
          v.forEach(function (H) {
            return y.to(_, H, ">");
          }),
            y.duration();
        else {
          T = {};
          for (L in v)
            L === "ease" || L === "easeEach" || Fh(L, v[L], T, v.easeEach);
          for (L in T)
            for (
              $ = T[L].sort(function (H, E) {
                return H.t - E.t;
              }),
              I = 0,
              x = 0;
              x < $.length;
              x++
            )
              (D = $[x]),
                (A = {
                  ease: D.e,
                  duration: ((D.t - (x ? $[x - 1].t : 0)) / 100) * u,
                }),
                (A[L] = D.v),
                y.to(_, A, I),
                (I += A.duration);
          y.duration() < u && y.to({}, { duration: u - y.duration() });
        }
      }
      u || l.duration((u = y.duration()));
    } else l.timeline = 0;
    return (
      h === !0 && !w7 && (($3 = v3(l)), Le.killTweensOf(_), ($3 = 0)),
      s3(p, v3(l), o),
      i.reversed && l.reverse(),
      i.paused && l.paused(!0),
      (f ||
        (!u &&
          !v &&
          l._start === a1(p._time) &&
          U1(f) &&
          mh(v3(l)) &&
          p.data !== "nested")) &&
      ((l._tTime = -me), l.render(Math.max(0, -c) || 0)),
      k && Pa(v3(l), k),
      l
    );
  }
  var n = e.prototype;
  return (
    (n.render = function (i, o, s) {
      var l = this._time,
        a = this._tDur,
        u = this._dur,
        c = i < 0,
        f = i > a - me && !c ? a : i < me ? 0 : i,
        d,
        h,
        v,
        m,
        k,
        g,
        p,
        _,
        y;
      if (!u) vh(this, i, o, s);
      else if (
        f !== this._tTime ||
        !i ||
        s ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== c)
      ) {
        if (((d = f), (_ = this.timeline), this._repeat)) {
          if (((m = u + this._rDelay), this._repeat < -1 && c))
            return this.totalTime(m * 100 + i, o, s);
          if (
            ((d = a1(f % m)),
              f === a
                ? ((v = this._repeat), (d = u))
                : ((v = ~~(f / m)),
                  v && v === f / m && ((d = u), v--),
                  d > u && (d = u)),
              (g = this._yoyo && v & 1),
              g && ((y = this._yEase), (d = u - d)),
              (k = t6(this._tTime, m)),
              d === l && !s && this._initted)
          )
            return (this._tTime = f), this;
          v !== k &&
            (_ && this._yEase && Za(_, g),
              this.vars.repeatRefresh &&
              !g &&
              !this._lock &&
              ((this._lock = s = 1),
                (this.render(a1(m * v), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Na(this, c ? i : d, s, o, f)) return (this._tTime = 0), this;
          if (l !== this._time) return this;
          if (u !== this._dur) return this.render(i, o, s);
        }
        if (
          ((this._tTime = f),
            (this._time = d),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = p = (y || this._ease)(d / u)),
            this._from && (this.ratio = p = 1 - p),
            d && !l && !o && !v && (Tt(this, "onStart"), this._tTime !== f))
        )
          return this;
        for (h = this._pt; h;) h.r(p, h.d), (h = h._next);
        (_ &&
          _.render(
            i < 0 ? i : !d && g ? -me : _._dur * _._ease(d / this._dur),
            o,
            s
          )) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
          !o &&
          (c && e4(this, i, o, s), Tt(this, "onUpdate")),
          this._repeat &&
          v !== k &&
          this.vars.onRepeat &&
          !o &&
          this.parent &&
          Tt(this, "onRepeat"),
          (f === this._tDur || !f) &&
          this._tTime === f &&
          (c && !this._onUpdate && e4(this, i, !0, !0),
            (i || !u) &&
            ((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
            Cn(this, 1),
            !o &&
            !(c && !l) &&
            (f || l || g) &&
            (Tt(this, f === a ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(f < a && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (n.targets = function () {
      return this._targets;
    }),
    (n.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        t.prototype.invalidate.call(this, i)
      );
    }),
    (n.resetTo = function (i, o, s, l) {
      V2 || it.wake(), this._ts || this.play();
      var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        u;
      return (
        this._initted || b7(this, a),
        (u = this._ease(a / this._dur)),
        Ih(this, i, o, s, l, u, a)
          ? this.resetTo(i, o, s, l)
          : (o8(this, 0),
            this.parent ||
            Oa(
              this._dp,
              this,
              "_first",
              "_last",
              this._dp._sort ? "_start" : 0
            ),
            this.render(0))
      );
    }),
    (n.kill = function (i, o) {
      if ((o === void 0 && (o = "all"), !i && (!o || o === "all")))
        return (this._lazy = this._pt = 0), this.parent ? F6(this) : this;
      if (this.timeline) {
        var s = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, o, $3 && $3.vars.overwrite !== !0)
            ._first || F6(this),
          this.parent &&
          s !== this.timeline.totalDuration() &&
          n6(this, (this._dur * this.timeline._tDur) / s, 0, 1),
          this
        );
      }
      var l = this._targets,
        a = i ? Et(i) : l,
        u = this._ptLookup,
        c = this._pt,
        f,
        d,
        h,
        v,
        m,
        k,
        g;
      if ((!o || o === "all") && Ch(l, a))
        return o === "all" && (this._pt = 0), F6(this);
      for (
        f = this._op = this._op || [],
        o !== "all" &&
        (r1(o) &&
          ((m = {}),
            Y1(o, function (p) {
              return (m[p] = 1);
            }),
            (o = m)),
          (o = zh(l, o))),
        g = l.length;
        g--;

      )
        if (~a.indexOf(l[g])) {
          (d = u[g]),
            o === "all"
              ? ((f[g] = o), (v = d), (h = {}))
              : ((h = f[g] = f[g] || {}), (v = o));
          for (m in v)
            (k = d && d[m]),
              k &&
              ((!("kill" in k.d) || k.d.kill(m) === !0) && r8(this, k, "_pt"),
                delete d[m]),
              h !== "all" && (h[m] = 1);
        }
      return this._initted && !this._pt && c && F6(this), this;
    }),
    (e.to = function (i, o) {
      return new e(i, o, arguments[2]);
    }),
    (e.from = function (i, o) {
      return t2(1, arguments);
    }),
    (e.delayedCall = function (i, o, s, l) {
      return new e(o, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: o,
        onReverseComplete: o,
        onCompleteParams: s,
        onReverseCompleteParams: s,
        callbackScope: l,
      });
    }),
    (e.fromTo = function (i, o, s) {
      return t2(2, arguments);
    }),
    (e.set = function (i, o) {
      return (o.duration = 0), o.repeatDelay || (o.repeat = 0), new e(i, o);
    }),
    (e.killTweensOf = function (i, o, s) {
      return Le.killTweensOf(i, o, s);
    }),
    e
  );
})(i6);
Pt(Ye.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Y1("staggerTo,staggerFrom,staggerFromTo", function (t) {
  Ye[t] = function () {
    var e = new F1(),
      n = n4.call(arguments, 0);
    return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n);
  };
});
var P7 = function (e, n, r) {
  return (e[n] = r);
},
  Qa = function (e, n, r) {
    return e[n](r);
  },
  Hh = function (e, n, r, i) {
    return e[n](i.fp, r);
  },
  Bh = function (e, n, r) {
    return e.setAttribute(n, r);
  },
  N7 = function (e, n) {
    return Ve(e[n]) ? Qa : S7(e[n]) && e.setAttribute ? Bh : P7;
  },
  Ja = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
  },
  Wh = function (e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n);
  },
  eu = function (e, n) {
    var r = n._pt,
      i = "";
    if (!e && n.b) i = n.b;
    else if (e === 1 && n.e) i = n.e;
    else {
      for (; r;)
        (i =
          r.p +
          (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
          i),
          (r = r._next);
      i += n.c;
    }
    n.set(n.t, n.p, i, n);
  },
  V7 = function (e, n) {
    for (var r = n._pt; r;) r.r(e, r.d), (r = r._next);
  },
  jh = function (e, n, r, i) {
    for (var o = this._pt, s; o;)
      (s = o._next), o.p === i && o.modifier(e, n, r), (o = s);
  },
  Uh = function (e) {
    for (var n = this._pt, r, i; n;)
      (i = n._next),
        (n.p === e && !n.op) || n.op === e
          ? r8(this, n, "_pt")
          : n.dep || (r = 1),
        (n = i);
    return !r;
  },
  Yh = function (e, n, r, i) {
    i.mSet(e, n, i.m.call(i.tween, r, i.mt), i);
  },
  tu = function (e) {
    for (var n = e._pt, r, i, o, s; n;) {
      for (r = n._next, i = o; i && i.pr > n.pr;) i = i._next;
      (n._prev = i ? i._prev : s) ? (n._prev._next = n) : (o = n),
        (n._next = i) ? (i._prev = n) : (s = n),
        (n = r);
    }
    e._pt = o;
  },
  Z1 = (function () {
    function t(n, r, i, o, s, l, a, u, c) {
      (this.t = r),
        (this.s = o),
        (this.c = s),
        (this.p = i),
        (this.r = l || Ja),
        (this.d = a || this),
        (this.set = u || P7),
        (this.pr = c || 0),
        (this._next = n),
        n && (n._prev = this);
    }
    var e = t.prototype;
    return (
      (e.modifier = function (r, i, o) {
        (this.mSet = this.mSet || this.set),
          (this.set = Yh),
          (this.m = r),
          (this.mt = o),
          (this.tween = i);
      }),
      t
    );
  })();
Y1(
  L7 +
  "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (t) {
    return (T7[t] = 1);
  }
);
ct.TweenMax = ct.TweenLite = Ye;
ct.TimelineLite = ct.TimelineMax = F1;
Le = new F1({
  sortChildren: !1,
  defaults: e6,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
at.stringFilter = Ua;
var o6 = [],
  B0 = {},
  Zh = [],
  fo = 0,
  j8 = function (e) {
    return (B0[e] || Zh).map(function (n) {
      return n();
    });
  },
  s4 = function () {
    var e = Date.now(),
      n = [];
    e - fo > 2 &&
      (j8("matchMediaInit"),
        o6.forEach(function (r) {
          var i = r.queries,
            o = r.conditions,
            s,
            l,
            a,
            u;
          for (l in i)
            (s = vt.matchMedia(i[l]).matches),
              s && (a = 1),
              s !== o[l] && ((o[l] = s), (u = 1));
          u && (r.revert(), a && n.push(r));
        }),
        j8("matchMediaRevert"),
        n.forEach(function (r) {
          return r.onMatch(r);
        }),
        (fo = e),
        j8("matchMedia"));
  },
  nu = (function () {
    function t(n, r) {
      (this.selector = r && r4(r)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        n && this.add(n);
    }
    var e = t.prototype;
    return (
      (e.add = function (r, i, o) {
        Ve(r) && ((o = i), (i = r), (r = Ve));
        var s = this,
          l = function () {
            var u = Be,
              c = s.selector,
              f;
            return (
              u && u !== s && u.data.push(s),
              o && (s.selector = r4(o)),
              (Be = s),
              (f = i.apply(s, arguments)),
              Ve(f) && s._r.push(f),
              (Be = u),
              (s.selector = c),
              (s.isReverted = !1),
              f
            );
          };
        return (s.last = l), r === Ve ? l(s) : r ? (s[r] = l) : l;
      }),
      (e.ignore = function (r) {
        var i = Be;
        (Be = null), r(this), (Be = i);
      }),
      (e.getTweens = function () {
        var r = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof t
              ? r.push.apply(r, i.getTweens())
              : i instanceof Ye &&
              !(i.parent && i.parent.data === "nested") &&
              r.push(i);
          }),
          r
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (r, i) {
        var o = this;
        if (r) {
          var s = this.getTweens();
          this.data.forEach(function (a) {
            a.data === "isFlip" &&
              (a.revert(),
                a.getChildren(!0, !0, !1).forEach(function (u) {
                  return s.splice(s.indexOf(u), 1);
                }));
          }),
            s
              .map(function (a) {
                return { g: a.globalTime(0), t: a };
              })
              .sort(function (a, u) {
                return u.g - a.g || -1;
              })
              .forEach(function (a) {
                return a.t.revert(r);
              }),
            this.data.forEach(function (a) {
              return !(a instanceof i6) && a.revert && a.revert(r);
            }),
            this._r.forEach(function (a) {
              return a(r, o);
            }),
            (this.isReverted = !0);
        } else
          this.data.forEach(function (a) {
            return a.kill && a.kill();
          });
        if ((this.clear(), i)) {
          var l = o6.indexOf(this);
          ~l && o6.splice(l, 1);
        }
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      t
    );
  })(),
  $h = (function () {
    function t(n) {
      (this.contexts = []), (this.scope = n);
    }
    var e = t.prototype;
    return (
      (e.add = function (r, i, o) {
        d3(r) || (r = { matches: r });
        var s = new nu(0, o || this.scope),
          l = (s.conditions = {}),
          a,
          u,
          c;
        this.contexts.push(s), (i = s.add("onMatch", i)), (s.queries = r);
        for (u in r)
          u === "all"
            ? (c = 1)
            : ((a = vt.matchMedia(r[u])),
              a &&
              (o6.indexOf(s) < 0 && o6.push(s),
                (l[u] = a.matches) && (c = 1),
                a.addListener
                  ? a.addListener(s4)
                  : a.addEventListener("change", s4)));
        return c && i(s), this;
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      (e.kill = function (r) {
        this.contexts.forEach(function (i) {
          return i.kill(r, !0);
        });
      }),
      t
    );
  })(),
  Ti = {
    registerPlugin: function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      n.forEach(function (i) {
        return Ba(i);
      });
    },
    timeline: function (e) {
      return new F1(e);
    },
    getTweensOf: function (e, n) {
      return Le.getTweensOf(e, n);
    },
    getProperty: function (e, n, r, i) {
      r1(e) && (e = Et(e)[0]);
      var o = Bn(e || {}).get,
        s = r ? Ma : La;
      return (
        r === "native" && (r = ""),
        e &&
        (n
          ? s(((tt[n] && tt[n].get) || o)(e, n, r, i))
          : function (l, a, u) {
            return s(((tt[l] && tt[l].get) || o)(e, l, a, u));
          })
      );
    },
    quickSetter: function (e, n, r) {
      if (((e = Et(e)), e.length > 1)) {
        var i = e.map(function (c) {
          return $1.quickSetter(c, n, r);
        }),
          o = i.length;
        return function (c) {
          for (var f = o; f--;) i[f](c);
        };
      }
      e = e[0] || {};
      var s = tt[n],
        l = Bn(e),
        a = (l.harness && (l.harness.aliases || {})[n]) || n,
        u = s
          ? function (c) {
            var f = new s();
            (Pr._pt = 0),
              f.init(e, r ? c + r : c, Pr, 0, [e]),
              f.render(1, f),
              Pr._pt && V7(1, Pr);
          }
          : l.set(e, a);
      return s
        ? u
        : function (c) {
          return u(e, a, r ? c + r : c, l, 1);
        };
    },
    quickTo: function (e, n, r) {
      var i,
        o = $1.to(
          e,
          Jn(((i = {}), (i[n] = "+=0.1"), (i.paused = !0), i), r || {})
        ),
        s = function (a, u, c) {
          return o.resetTo(n, a, u, c);
        };
      return (s.tween = o), s;
    },
    isTweening: function (e) {
      return Le.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = jn(e.ease, e6.ease)), so(e6, e || {});
    },
    config: function (e) {
      return so(at, e || {});
    },
    registerEffect: function (e) {
      var n = e.name,
        r = e.effect,
        i = e.plugins,
        o = e.defaults,
        s = e.extendTimeline;
      (i || "").split(",").forEach(function (l) {
        return (
          l && !tt[l] && !ct[l] && Si(n + " effect requires " + l + " plugin.")
        );
      }),
        (F8[n] = function (l, a, u) {
          return r(Et(l), Pt(a || {}, o), u);
        }),
        s &&
        (F1.prototype[n] = function (l, a, u) {
          return this.add(F8[n](l, d3(a) ? a : (u = a) && {}, this), u);
        });
    },
    registerEase: function (e, n) {
      ce[e] = jn(n);
    },
    parseEase: function (e, n) {
      return arguments.length ? jn(e, n) : ce;
    },
    getById: function (e) {
      return Le.getById(e);
    },
    exportRoot: function (e, n) {
      e === void 0 && (e = {});
      var r = new F1(e),
        i,
        o;
      for (
        r.smoothChildTiming = U1(e.smoothChildTiming),
        Le.remove(r),
        r._dp = 0,
        r._time = r._tTime = Le._time,
        i = Le._first;
        i;

      )
        (o = i._next),
          (n ||
            !(
              !i._dur &&
              i instanceof Ye &&
              i.vars.onComplete === i._targets[0]
            )) &&
          s3(r, i, i._start - i._delay),
          (i = o);
      return s3(Le, r, 0), r;
    },
    context: function (e, n) {
      return e ? new nu(e, n) : Be;
    },
    matchMedia: function (e) {
      return new $h(e);
    },
    matchMediaRefresh: function () {
      return (
        o6.forEach(function (e) {
          var n = e.conditions,
            r,
            i;
          for (i in n) n[i] && ((n[i] = !1), (r = 1));
          r && e.revert();
        }) || s4()
      );
    },
    addEventListener: function (e, n) {
      var r = B0[e] || (B0[e] = []);
      ~r.indexOf(n) || r.push(n);
    },
    removeEventListener: function (e, n) {
      var r = B0[e],
        i = r && r.indexOf(n);
      i >= 0 && r.splice(i, 1);
    },
    utils: {
      wrap: Th,
      wrapYoyo: Lh,
      distribute: Aa,
      random: Ia,
      snap: Da,
      normalize: Eh,
      getUnit: v1,
      clamp: wh,
      splitColor: Wa,
      toArray: Et,
      selector: r4,
      mapRange: Fa,
      pipe: xh,
      unitize: kh,
      interpolate: Mh,
      shuffle: Ra,
    },
    install: Sa,
    effects: F8,
    ticker: it,
    updateRoot: F1.updateRoot,
    plugins: tt,
    globalTimeline: Le,
    core: {
      PropTween: Z1,
      globals: xa,
      Tween: Ye,
      Timeline: F1,
      Animation: i6,
      getCache: Bn,
      _removeLinkedListItem: r8,
      reverting: function () {
        return y1;
      },
      context: function (e) {
        return e && Be && (Be.data.push(e), (e._ctx = Be)), Be;
      },
      suppressOverwrites: function (e) {
        return (w7 = e);
      },
    },
  };
Y1("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
  return (Ti[t] = Ye[t]);
});
it.add(F1.updateRoot);
Pr = Ti.to({}, { duration: 0 });
var Xh = function (e, n) {
  for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n;)
    r = r._next;
  return r;
},
  Gh = function (e, n) {
    var r = e._targets,
      i,
      o,
      s;
    for (i in n)
      for (o = r.length; o--;)
        (s = e._ptLookup[o][i]),
          s &&
          (s = s.d) &&
          (s._pt && (s = Xh(s, i)),
            s && s.modifier && s.modifier(n[i], e, r[o], i));
  },
  U8 = function (e, n) {
    return {
      name: e,
      rawVars: 1,
      init: function (i, o, s) {
        s._onInit = function (l) {
          var a, u;
          if (
            (r1(o) &&
              ((a = {}),
                Y1(o, function (c) {
                  return (a[c] = 1);
                }),
                (o = a)),
              n)
          ) {
            a = {};
            for (u in o) a[u] = n(o[u]);
            o = a;
          }
          Gh(l, o);
        };
      },
    };
  },
  $1 =
    Ti.registerPlugin(
      {
        name: "attr",
        init: function (e, n, r, i, o) {
          var s, l, a;
          this.tween = r;
          for (s in n)
            (a = e.getAttribute(s) || ""),
              (l = this.add(
                e,
                "setAttribute",
                (a || 0) + "",
                n[s],
                i,
                o,
                0,
                0,
                s
              )),
              (l.op = s),
              (l.b = a),
              this._props.push(s);
        },
        render: function (e, n) {
          for (var r = n._pt; r;)
            y1 ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        init: function (e, n) {
          for (var r = n.length; r--;)
            this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
        },
      },
      U8("roundProps", i4),
      U8("modifiers"),
      U8("snap", Da)
    ) || Ti;
Ye.version = F1.version = $1.version = "3.11.5";
wa = 1;
x7() && r6();
ce.Power0;
ce.Power1;
ce.Power2;
ce.Power3;
ce.Power4;
ce.Linear;
ce.Quad;
ce.Cubic;
ce.Quart;
ce.Quint;
ce.Strong;
ce.Elastic;
ce.Back;
ce.SteppedEase;
ce.Bounce;
ce.Sine;
ce.Expo;
ce.Circ;
/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var ho,
  X3,
  jr,
  R7,
  Dn,
  Co,
  A7,
  qh = function () {
    return typeof window < "u";
  },
  V3 = {},
  bn = 180 / Math.PI,
  Ur = Math.PI / 180,
  dr = Math.atan2,
  po = 1e8,
  D7 = /([A-Z])/g,
  Kh = /(left|right|width|margin|padding|x)/i,
  Qh = /[\s,\(]\S/,
  l3 = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  l4 = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
  },
  Jh = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
      n
    );
  },
  eC = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
      n
    );
  },
  tC = function (e, n) {
    var r = n.s + n.c * e;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
  },
  ru = function (e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n);
  },
  iu = function (e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
  },
  nC = function (e, n, r) {
    return (e.style[n] = r);
  },
  rC = function (e, n, r) {
    return e.style.setProperty(n, r);
  },
  iC = function (e, n, r) {
    return (e._gsap[n] = r);
  },
  oC = function (e, n, r) {
    return (e._gsap.scaleX = e._gsap.scaleY = r);
  },
  sC = function (e, n, r, i, o) {
    var s = e._gsap;
    (s.scaleX = s.scaleY = r), s.renderTransform(o, s);
  },
  lC = function (e, n, r, i, o) {
    var s = e._gsap;
    (s[n] = r), s.renderTransform(o, s);
  },
  Me = "transform",
  $t = Me + "Origin",
  aC = function t(e, n) {
    var r = this,
      i = this.target,
      o = i.style;
    if (e in V3) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = l3[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (s) {
              return (r.tfm[s] = _3(i, s));
            })
            : (this.tfm[e] = i._gsap.x ? i._gsap[e] : _3(i, e));
      else
        return l3.transform.split(",").forEach(function (s) {
          return t.call(r, s, n);
        });
      if (this.props.indexOf(Me) >= 0) return;
      i._gsap.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
          this.props.push($t, n, "")),
        (e = Me);
    }
    (o || n) && this.props.push(e, n, o[e]);
  },
  ou = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
  },
  uC = function () {
    var e = this.props,
      n = this.target,
      r = n.style,
      i = n._gsap,
      o,
      s;
    for (o = 0; o < e.length; o += 3)
      e[o + 1]
        ? (n[e[o]] = e[o + 2])
        : e[o + 2]
          ? (r[e[o]] = e[o + 2])
          : r.removeProperty(
            e[o].substr(0, 2) === "--"
              ? e[o]
              : e[o].replace(D7, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (s in this.tfm) i[s] = this.tfm[s];
      i.svg &&
        (i.renderTransform(),
          n.setAttribute("data-svg-origin", this.svgo || "")),
        (o = A7()),
        (!o || !o.isStart) && !r[Me] && (ou(r), (i.uncache = 1));
    }
  },
  su = function (e, n) {
    var r = { target: e, props: [], revert: uC, save: aC };
    return (
      e._gsap || $1.core.getCache(e),
      n &&
      n.split(",").forEach(function (i) {
        return r.save(i);
      }),
      r
    );
  },
  lu,
  a4 = function (e, n) {
    var r = X3.createElementNS
      ? X3.createElementNS(
        (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
        e
      )
      : X3.createElement(e);
    return r.style ? r : X3.createElement(e);
  },
  c3 = function t(e, n, r) {
    var i = getComputedStyle(e);
    return (
      i[n] ||
      i.getPropertyValue(n.replace(D7, "-$1").toLowerCase()) ||
      i.getPropertyValue(n) ||
      (!r && t(e, s6(n) || n, 1)) ||
      ""
    );
  },
  mo = "O,Moz,ms,Ms,Webkit".split(","),
  s6 = function (e, n, r) {
    var i = n || Dn,
      o = i.style,
      s = 5;
    if (e in o && !r) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      s-- && !(mo[s] + e in o);

    );
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? mo[s] : "") + e;
  },
  u4 = function () {
    qh() &&
      window.document &&
      ((ho = window),
        (X3 = ho.document),
        (jr = X3.documentElement),
        (Dn = a4("div") || { style: {} }),
        a4("div"),
        (Me = s6(Me)),
        ($t = Me + "Origin"),
        (Dn.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (lu = !!s6("perspective")),
        (A7 = $1.core.reverting),
        (R7 = 1));
  },
  Y8 = function t(e) {
    var n = a4(
      "svg",
      (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
      "http://www.w3.org/2000/svg"
    ),
      r = this.parentNode,
      i = this.nextSibling,
      o = this.style.cssText,
      s;
    if (
      (jr.appendChild(n),
        n.appendChild(this),
        (this.style.display = "block"),
        e)
    )
      try {
        (s = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = t);
      } catch { }
    else this._gsapBBox && (s = this._gsapBBox());
    return (
      r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
      jr.removeChild(n),
      (this.style.cssText = o),
      s
    );
  },
  go = function (e, n) {
    for (var r = n.length; r--;)
      if (e.hasAttribute(n[r])) return e.getAttribute(n[r]);
  },
  au = function (e) {
    var n;
    try {
      n = e.getBBox();
    } catch {
      n = Y8.call(e, !0);
    }
    return (
      (n && (n.width || n.height)) || e.getBBox === Y8 || (n = Y8.call(e, !0)),
      n && !n.width && !n.x && !n.y
        ? {
          x: +go(e, ["x", "cx", "x1"]) || 0,
          y: +go(e, ["y", "cy", "y1"]) || 0,
          width: 0,
          height: 0,
        }
        : n
    );
  },
  uu = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && au(e));
  },
  R2 = function (e, n) {
    if (n) {
      var r = e.style;
      n in V3 && n !== $t && (n = Me),
        r.removeProperty
          ? ((n.substr(0, 2) === "ms" || n.substr(0, 6) === "webkit") &&
            (n = "-" + n),
            r.removeProperty(n.replace(D7, "-$1").toLowerCase()))
          : r.removeAttribute(n);
    }
  },
  G3 = function (e, n, r, i, o, s) {
    var l = new Z1(e._pt, n, r, 0, 1, s ? iu : ru);
    return (e._pt = l), (l.b = i), (l.e = o), e._props.push(r), l;
  },
  vo = { deg: 1, rad: 1, turn: 1 },
  cC = { grid: 1, flex: 1 },
  pn = function t(e, n, r, i) {
    var o = parseFloat(r) || 0,
      s = (r + "").trim().substr((o + "").length) || "px",
      l = Dn.style,
      a = Kh.test(n),
      u = e.tagName.toLowerCase() === "svg",
      c = (u ? "client" : "offset") + (a ? "Width" : "Height"),
      f = 100,
      d = i === "px",
      h = i === "%",
      v,
      m,
      k,
      g;
    return i === s || !o || vo[i] || vo[s]
      ? o
      : (s !== "px" && !d && (o = t(e, n, r, "px")),
        (g = e.getCTM && uu(e)),
        (h || s === "%") && (V3[n] || ~n.indexOf("adius"))
          ? ((v = g ? e.getBBox()[a ? "width" : "height"] : e[c]),
            Ie(h ? (o / v) * f : (o / 100) * v))
          : ((l[a ? "width" : "height"] = f + (d ? s : i)),
            (m =
              ~n.indexOf("adius") || (i === "em" && e.appendChild && !u)
                ? e
                : e.parentNode),
            g && (m = (e.ownerSVGElement || {}).parentNode),
            (!m || m === X3 || !m.appendChild) && (m = X3.body),
            (k = m._gsap),
            k && h && k.width && a && k.time === it.time && !k.uncache
              ? Ie((o / k.width) * f)
              : ((h || s === "%") &&
                !cC[c3(m, "display")] &&
                (l.position = c3(e, "position")),
                m === e && (l.position = "static"),
                m.appendChild(Dn),
                (v = Dn[c]),
                m.removeChild(Dn),
                (l.position = "absolute"),
                a && h && ((k = Bn(m)), (k.time = it.time), (k.width = m[c])),
                Ie(d ? (v * o) / f : v && o ? (f / v) * o : 0))));
  },
  _3 = function (e, n, r, i) {
    var o;
    return (
      R7 || u4(),
      n in l3 &&
      n !== "transform" &&
      ((n = l3[n]), ~n.indexOf(",") && (n = n.split(",")[0])),
      V3[n] && n !== "transform"
        ? ((o = D2(e, i)),
          (o =
            n !== "transformOrigin"
              ? o[n]
              : o.svg
                ? o.origin
                : Mi(c3(e, $t)) + " " + o.zOrigin + "px"))
        : ((o = e.style[n]),
          (!o || o === "auto" || i || ~(o + "").indexOf("calc(")) &&
          (o =
            (Li[n] && Li[n](e, n, r)) ||
            c3(e, n) ||
            Ea(e, n) ||
            (n === "opacity" ? 1 : 0))),
      r && !~(o + "").trim().indexOf(" ") ? pn(e, n, o, r) + r : o
    );
  },
  fC = function (e, n, r, i) {
    if (!r || r === "none") {
      var o = s6(n, e, 1),
        s = o && c3(e, o, 1);
      s && s !== r
        ? ((n = o), (r = s))
        : n === "borderColor" && (r = c3(e, "borderTopColor"));
    }
    var l = new Z1(this._pt, e.style, n, 0, 1, eu),
      a = 0,
      u = 0,
      c,
      f,
      d,
      h,
      v,
      m,
      k,
      g,
      p,
      _,
      y,
      x;
    if (
      ((l.b = r),
        (l.e = i),
        (r += ""),
        (i += ""),
        i === "auto" && ((e.style[n] = i), (i = c3(e, n) || i), (e.style[n] = r)),
        (c = [r, i]),
        Ua(c),
        (r = c[0]),
        (i = c[1]),
        (d = r.match(br) || []),
        (x = i.match(br) || []),
        x.length)
    ) {
      for (; (f = br.exec(i));)
        (k = f[0]),
          (p = i.substring(a, f.index)),
          v
            ? (v = (v + 1) % 5)
            : (p.substr(-5) === "rgba(" || p.substr(-5) === "hsla(") && (v = 1),
          k !== (m = d[u++] || "") &&
          ((h = parseFloat(m) || 0),
            (y = m.substr((h + "").length)),
            k.charAt(1) === "=" && (k = Wr(h, k) + y),
            (g = parseFloat(k)),
            (_ = k.substr((g + "").length)),
            (a = br.lastIndex - _.length),
            _ ||
            ((_ = _ || at.units[n] || y),
              a === i.length && ((i += _), (l.e += _))),
            y !== _ && (h = pn(e, n, m, _) || 0),
            (l._pt = {
              _next: l._pt,
              p: p || u === 1 ? p : ",",
              s: h,
              c: g - h,
              m: (v && v < 4) || n === "zIndex" ? Math.round : 0,
            }));
      l.c = a < i.length ? i.substring(a, i.length) : "";
    } else l.r = n === "display" && i === "none" ? iu : ru;
    return ya.test(i) && (l.e = 0), (this._pt = l), l;
  },
  yo = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  dC = function (e) {
    var n = e.split(" "),
      r = n[0],
      i = n[1] || "50%";
    return (
      (r === "top" || r === "bottom" || i === "left" || i === "right") &&
      ((e = r), (r = i), (i = e)),
      (n[0] = yo[r] || r),
      (n[1] = yo[i] || i),
      n.join(" ")
    );
  },
  hC = function (e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
      var r = n.t,
        i = r.style,
        o = n.u,
        s = r._gsap,
        l,
        a,
        u;
      if (o === "all" || o === !0) (i.cssText = ""), (a = 1);
      else
        for (o = o.split(","), u = o.length; --u > -1;)
          (l = o[u]),
            V3[l] && ((a = 1), (l = l === "transformOrigin" ? $t : Me)),
            R2(r, l);
      a &&
        (R2(r, Me),
          s &&
          (s.svg && r.removeAttribute("transform"),
            D2(r, 1),
            (s.uncache = 1),
            ou(i)));
    }
  },
  Li = {
    clearProps: function (e, n, r, i, o) {
      if (o.data !== "isFromStart") {
        var s = (e._pt = new Z1(e._pt, n, r, 0, 0, hC));
        return (s.u = i), (s.pr = -10), (s.tween = o), e._props.push(r), 1;
      }
    },
  },
  A2 = [1, 0, 0, 1, 0, 0],
  cu = {},
  fu = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  _o = function (e) {
    var n = c3(e, Me);
    return fu(n) ? A2 : n.substr(7).match(va).map(Ie);
  },
  I7 = function (e, n) {
    var r = e._gsap || Bn(e),
      i = e.style,
      o = _o(e),
      s,
      l,
      a,
      u;
    return r.svg && e.getAttribute("transform")
      ? ((a = e.transform.baseVal.consolidate().matrix),
        (o = [a.a, a.b, a.c, a.d, a.e, a.f]),
        o.join(",") === "1,0,0,1,0,0" ? A2 : o)
      : (o === A2 &&
        !e.offsetParent &&
        e !== jr &&
        !r.svg &&
        ((a = i.display),
          (i.display = "block"),
          (s = e.parentNode),
          (!s || !e.offsetParent) &&
          ((u = 1), (l = e.nextElementSibling), jr.appendChild(e)),
          (o = _o(e)),
          a ? (i.display = a) : R2(e, "display"),
          u &&
          (l
            ? s.insertBefore(e, l)
            : s
              ? s.appendChild(e)
              : jr.removeChild(e))),
        n && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
  },
  c4 = function (e, n, r, i, o, s) {
    var l = e._gsap,
      a = o || I7(e, !0),
      u = l.xOrigin || 0,
      c = l.yOrigin || 0,
      f = l.xOffset || 0,
      d = l.yOffset || 0,
      h = a[0],
      v = a[1],
      m = a[2],
      k = a[3],
      g = a[4],
      p = a[5],
      _ = n.split(" "),
      y = parseFloat(_[0]) || 0,
      x = parseFloat(_[1]) || 0,
      T,
      w,
      L,
      M;
    r
      ? a !== A2 &&
      (w = h * k - v * m) &&
      ((L = y * (k / w) + x * (-m / w) + (m * p - k * g) / w),
        (M = y * (-v / w) + x * (h / w) - (h * p - v * g) / w),
        (y = L),
        (x = M))
      : ((T = au(e)),
        (y = T.x + (~_[0].indexOf("%") ? (y / 100) * T.width : y)),
        (x = T.y + (~(_[1] || _[0]).indexOf("%") ? (x / 100) * T.height : x))),
      i || (i !== !1 && l.smooth)
        ? ((g = y - u),
          (p = x - c),
          (l.xOffset = f + (g * h + p * m) - g),
          (l.yOffset = d + (g * v + p * k) - p))
        : (l.xOffset = l.yOffset = 0),
      (l.xOrigin = y),
      (l.yOrigin = x),
      (l.smooth = !!i),
      (l.origin = n),
      (l.originIsAbsolute = !!r),
      (e.style[$t] = "0px 0px"),
      s &&
      (G3(s, l, "xOrigin", u, y),
        G3(s, l, "yOrigin", c, x),
        G3(s, l, "xOffset", f, l.xOffset),
        G3(s, l, "yOffset", d, l.yOffset)),
      e.setAttribute("data-svg-origin", y + " " + x);
  },
  D2 = function (e, n) {
    var r = e._gsap || new Xa(e);
    if ("x" in r && !n && !r.uncache) return r;
    var i = e.style,
      o = r.scaleX < 0,
      s = "px",
      l = "deg",
      a = getComputedStyle(e),
      u = c3(e, $t) || "0",
      c,
      f,
      d,
      h,
      v,
      m,
      k,
      g,
      p,
      _,
      y,
      x,
      T,
      w,
      L,
      M,
      O,
      W,
      I,
      $,
      D,
      A,
      H,
      E,
      b,
      N,
      S,
      F,
      Y,
      ee,
      Q,
      Ce;
    return (
      (c = f = d = m = k = g = p = _ = y = 0),
      (h = v = 1),
      (r.svg = !!(e.getCTM && uu(e))),
      a.translate &&
      ((a.translate !== "none" ||
        a.scale !== "none" ||
        a.rotate !== "none") &&
        (i[Me] =
          (a.translate !== "none"
            ? "translate3d(" +
            (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
            ") "
            : "") +
          (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") +
          (a.scale !== "none"
            ? "scale(" + a.scale.split(" ").join(",") + ") "
            : "") +
          (a[Me] !== "none" ? a[Me] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (w = I7(e, r.svg)),
      r.svg &&
      (r.uncache
        ? ((b = e.getBBox()),
          (u = r.xOrigin - b.x + "px " + (r.yOrigin - b.y) + "px"),
          (E = ""))
        : (E = !n && e.getAttribute("data-svg-origin")),
        c4(e, E || u, !!E || r.originIsAbsolute, r.smooth !== !1, w)),
      (x = r.xOrigin || 0),
      (T = r.yOrigin || 0),
      w !== A2 &&
      ((W = w[0]),
        (I = w[1]),
        ($ = w[2]),
        (D = w[3]),
        (c = A = w[4]),
        (f = H = w[5]),
        w.length === 6
          ? ((h = Math.sqrt(W * W + I * I)),
            (v = Math.sqrt(D * D + $ * $)),
            (m = W || I ? dr(I, W) * bn : 0),
            (p = $ || D ? dr($, D) * bn + m : 0),
            p && (v *= Math.abs(Math.cos(p * Ur))),
            r.svg && ((c -= x - (x * W + T * $)), (f -= T - (x * I + T * D))))
          : ((Ce = w[6]),
            (ee = w[7]),
            (S = w[8]),
            (F = w[9]),
            (Y = w[10]),
            (Q = w[11]),
            (c = w[12]),
            (f = w[13]),
            (d = w[14]),
            (L = dr(Ce, Y)),
            (k = L * bn),
            L &&
            ((M = Math.cos(-L)),
              (O = Math.sin(-L)),
              (E = A * M + S * O),
              (b = H * M + F * O),
              (N = Ce * M + Y * O),
              (S = A * -O + S * M),
              (F = H * -O + F * M),
              (Y = Ce * -O + Y * M),
              (Q = ee * -O + Q * M),
              (A = E),
              (H = b),
              (Ce = N)),
            (L = dr(-$, Y)),
            (g = L * bn),
            L &&
            ((M = Math.cos(-L)),
              (O = Math.sin(-L)),
              (E = W * M - S * O),
              (b = I * M - F * O),
              (N = $ * M - Y * O),
              (Q = D * O + Q * M),
              (W = E),
              (I = b),
              ($ = N)),
            (L = dr(I, W)),
            (m = L * bn),
            L &&
            ((M = Math.cos(L)),
              (O = Math.sin(L)),
              (E = W * M + I * O),
              (b = A * M + H * O),
              (I = I * M - W * O),
              (H = H * M - A * O),
              (W = E),
              (A = b)),
            k &&
            Math.abs(k) + Math.abs(m) > 359.9 &&
            ((k = m = 0), (g = 180 - g)),
            (h = Ie(Math.sqrt(W * W + I * I + $ * $))),
            (v = Ie(Math.sqrt(H * H + Ce * Ce))),
            (L = dr(A, H)),
            (p = Math.abs(L) > 2e-4 ? L * bn : 0),
            (y = Q ? 1 / (Q < 0 ? -Q : Q) : 0)),
        r.svg &&
        ((E = e.getAttribute("transform")),
          (r.forceCSS = e.setAttribute("transform", "") || !fu(c3(e, Me))),
          E && e.setAttribute("transform", E))),
      Math.abs(p) > 90 &&
      Math.abs(p) < 270 &&
      (o
        ? ((h *= -1), (p += m <= 0 ? 180 : -180), (m += m <= 0 ? 180 : -180))
        : ((v *= -1), (p += p <= 0 ? 180 : -180))),
      (n = n || r.uncache),
      (r.x =
        c -
        ((r.xPercent =
          c &&
          ((!n && r.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
          ? (e.offsetWidth * r.xPercent) / 100
          : 0) +
        s),
      (r.y =
        f -
        ((r.yPercent =
          f &&
          ((!n && r.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0)))
          ? (e.offsetHeight * r.yPercent) / 100
          : 0) +
        s),
      (r.z = d + s),
      (r.scaleX = Ie(h)),
      (r.scaleY = Ie(v)),
      (r.rotation = Ie(m) + l),
      (r.rotationX = Ie(k) + l),
      (r.rotationY = Ie(g) + l),
      (r.skewX = p + l),
      (r.skewY = _ + l),
      (r.transformPerspective = y + s),
      (r.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (i[$t] = Mi(u)),
      (r.xOffset = r.yOffset = 0),
      (r.force3D = at.force3D),
      (r.renderTransform = r.svg ? pC : lu ? du : CC),
      (r.uncache = 0),
      r
    );
  },
  Mi = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  Z8 = function (e, n, r) {
    var i = v1(n);
    return Ie(parseFloat(n) + parseFloat(pn(e, "x", r + "px", i))) + i;
  },
  CC = function (e, n) {
    (n.z = "0px"),
      (n.rotationY = n.rotationX = "0deg"),
      (n.force3D = 0),
      du(e, n);
  },
  En = "0deg",
  b6 = "0px",
  Tn = ") ",
  du = function (e, n) {
    var r = n || this,
      i = r.xPercent,
      o = r.yPercent,
      s = r.x,
      l = r.y,
      a = r.z,
      u = r.rotation,
      c = r.rotationY,
      f = r.rotationX,
      d = r.skewX,
      h = r.skewY,
      v = r.scaleX,
      m = r.scaleY,
      k = r.transformPerspective,
      g = r.force3D,
      p = r.target,
      _ = r.zOrigin,
      y = "",
      x = (g === "auto" && e && e !== 1) || g === !0;
    if (_ && (f !== En || c !== En)) {
      var T = parseFloat(c) * Ur,
        w = Math.sin(T),
        L = Math.cos(T),
        M;
      (T = parseFloat(f) * Ur),
        (M = Math.cos(T)),
        (s = Z8(p, s, w * M * -_)),
        (l = Z8(p, l, -Math.sin(T) * -_)),
        (a = Z8(p, a, L * M * -_ + _));
    }
    k !== b6 && (y += "perspective(" + k + Tn),
      (i || o) && (y += "translate(" + i + "%, " + o + "%) "),
      (x || s !== b6 || l !== b6 || a !== b6) &&
      (y +=
        a !== b6 || x
          ? "translate3d(" + s + ", " + l + ", " + a + ") "
          : "translate(" + s + ", " + l + Tn),
      u !== En && (y += "rotate(" + u + Tn),
      c !== En && (y += "rotateY(" + c + Tn),
      f !== En && (y += "rotateX(" + f + Tn),
      (d !== En || h !== En) && (y += "skew(" + d + ", " + h + Tn),
      (v !== 1 || m !== 1) && (y += "scale(" + v + ", " + m + Tn),
      (p.style[Me] = y || "translate(0, 0)");
  },
  pC = function (e, n) {
    var r = n || this,
      i = r.xPercent,
      o = r.yPercent,
      s = r.x,
      l = r.y,
      a = r.rotation,
      u = r.skewX,
      c = r.skewY,
      f = r.scaleX,
      d = r.scaleY,
      h = r.target,
      v = r.xOrigin,
      m = r.yOrigin,
      k = r.xOffset,
      g = r.yOffset,
      p = r.forceCSS,
      _ = parseFloat(s),
      y = parseFloat(l),
      x,
      T,
      w,
      L,
      M;
    (a = parseFloat(a)),
      (u = parseFloat(u)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (u += c), (a += c)),
      a || u
        ? ((a *= Ur),
          (u *= Ur),
          (x = Math.cos(a) * f),
          (T = Math.sin(a) * f),
          (w = Math.sin(a - u) * -d),
          (L = Math.cos(a - u) * d),
          u &&
          ((c *= Ur),
            (M = Math.tan(u - c)),
            (M = Math.sqrt(1 + M * M)),
            (w *= M),
            (L *= M),
            c &&
            ((M = Math.tan(c)),
              (M = Math.sqrt(1 + M * M)),
              (x *= M),
              (T *= M))),
          (x = Ie(x)),
          (T = Ie(T)),
          (w = Ie(w)),
          (L = Ie(L)))
        : ((x = f), (L = d), (T = w = 0)),
      ((_ && !~(s + "").indexOf("px")) || (y && !~(l + "").indexOf("px"))) &&
      ((_ = pn(h, "x", s, "px")), (y = pn(h, "y", l, "px"))),
      (v || m || k || g) &&
      ((_ = Ie(_ + v - (v * x + m * w) + k)),
        (y = Ie(y + m - (v * T + m * L) + g))),
      (i || o) &&
      ((M = h.getBBox()),
        (_ = Ie(_ + (i / 100) * M.width)),
        (y = Ie(y + (o / 100) * M.height))),
      (M =
        "matrix(" + x + "," + T + "," + w + "," + L + "," + _ + "," + y + ")"),
      h.setAttribute("transform", M),
      p && (h.style[Me] = M);
  },
  mC = function (e, n, r, i, o) {
    var s = 360,
      l = r1(o),
      a = parseFloat(o) * (l && ~o.indexOf("rad") ? bn : 1),
      u = a - i,
      c = i + u + "deg",
      f,
      d;
    return (
      l &&
      ((f = o.split("_")[1]),
        f === "short" && ((u %= s), u !== u % (s / 2) && (u += u < 0 ? s : -s)),
        f === "cw" && u < 0
          ? (u = ((u + s * po) % s) - ~~(u / s) * s)
          : f === "ccw" && u > 0 && (u = ((u - s * po) % s) - ~~(u / s) * s)),
      (e._pt = d = new Z1(e._pt, n, r, i, u, Jh)),
      (d.e = c),
      (d.u = "deg"),
      e._props.push(r),
      d
    );
  },
  wo = function (e, n) {
    for (var r in n) e[r] = n[r];
    return e;
  },
  gC = function (e, n, r) {
    var i = wo({}, r._gsap),
      o = "perspective,force3D,transformOrigin,svgOrigin",
      s = r.style,
      l,
      a,
      u,
      c,
      f,
      d,
      h,
      v;
    i.svg
      ? ((u = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (s[Me] = n),
        (l = D2(r, 1)),
        R2(r, Me),
        r.setAttribute("transform", u))
      : ((u = getComputedStyle(r)[Me]),
        (s[Me] = n),
        (l = D2(r, 1)),
        (s[Me] = u));
    for (a in V3)
      (u = i[a]),
        (c = l[a]),
        u !== c &&
        o.indexOf(a) < 0 &&
        ((h = v1(u)),
          (v = v1(c)),
          (f = h !== v ? pn(r, a, u, v) : parseFloat(u)),
          (d = parseFloat(c)),
          (e._pt = new Z1(e._pt, l, a, f, d - f, l4)),
          (e._pt.u = v || 0),
          e._props.push(a));
    wo(l, i);
  };
Y1("padding,margin,Width,Radius", function (t, e) {
  var n = "Top",
    r = "Right",
    i = "Bottom",
    o = "Left",
    s = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function (l) {
      return e < 2 ? t + l : "border" + l + t;
    });
  Li[e > 1 ? "border" + t : t] = function (l, a, u, c, f) {
    var d, h;
    if (arguments.length < 4)
      return (
        (d = s.map(function (v) {
          return _3(l, v, u);
        })),
        (h = d.join(" ")),
        h.split(d[0]).length === 5 ? d[0] : h
      );
    (d = (c + "").split(" ")),
      (h = {}),
      s.forEach(function (v, m) {
        return (h[v] = d[m] = d[m] || d[((m - 1) / 2) | 0]);
      }),
      l.init(a, h, f);
  };
});
var hu = {
  name: "css",
  register: u4,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, n, r, i, o) {
    var s = this._props,
      l = e.style,
      a = r.vars.startAt,
      u,
      c,
      f,
      d,
      h,
      v,
      m,
      k,
      g,
      p,
      _,
      y,
      x,
      T,
      w,
      L;
    R7 || u4(),
      (this.styles = this.styles || su(e)),
      (L = this.styles.props),
      (this.tween = r);
    for (m in n)
      if (m !== "autoRound" && ((c = n[m]), !(tt[m] && Ga(m, n, r, i, e, o)))) {
        if (
          ((h = typeof c),
            (v = Li[m]),
            h === "function" && ((c = c.call(r, i, e, o)), (h = typeof c)),
            h === "string" && ~c.indexOf("random(") && (c = N2(c)),
            v)
        )
          v(this, e, m, c, r) && (w = 1);
        else if (m.substr(0, 2) === "--")
          (u = (getComputedStyle(e).getPropertyValue(m) + "").trim()),
            (c += ""),
            (cn.lastIndex = 0),
            cn.test(u) || ((k = v1(u)), (g = v1(c))),
            g ? k !== g && (u = pn(e, m, u, g) + g) : k && (c += k),
            this.add(l, "setProperty", u, c, i, o, 0, 0, m),
            s.push(m),
            L.push(m, 0, l[m]);
        else if (h !== "undefined") {
          if (
            (a && m in a
              ? ((u = typeof a[m] == "function" ? a[m].call(r, i, e, o) : a[m]),
                r1(u) && ~u.indexOf("random(") && (u = N2(u)),
                v1(u + "") || (u += at.units[m] || v1(_3(e, m)) || ""),
                (u + "").charAt(1) === "=" && (u = _3(e, m)))
              : (u = _3(e, m)),
              (d = parseFloat(u)),
              (p = h === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              p && (c = c.substr(2)),
              (f = parseFloat(c)),
              m in l3 &&
              (m === "autoAlpha" &&
                (d === 1 && _3(e, "visibility") === "hidden" && f && (d = 0),
                  L.push("visibility", 0, l.visibility),
                  G3(
                    this,
                    l,
                    "visibility",
                    d ? "inherit" : "hidden",
                    f ? "inherit" : "hidden",
                    !f
                  )),
                m !== "scale" &&
                m !== "transform" &&
                ((m = l3[m]), ~m.indexOf(",") && (m = m.split(",")[0]))),
              (_ = m in V3),
              _)
          ) {
            if (
              (this.styles.save(m),
                y ||
                ((x = e._gsap),
                  (x.renderTransform && !n.parseTransform) ||
                  D2(e, n.parseTransform),
                  (T = n.smoothOrigin !== !1 && x.smooth),
                  (y = this._pt =
                    new Z1(this._pt, l, Me, 0, 1, x.renderTransform, x, 0, -1)),
                  (y.dep = 1)),
                m === "scale")
            )
              (this._pt = new Z1(
                this._pt,
                x,
                "scaleY",
                x.scaleY,
                (p ? Wr(x.scaleY, p + f) : f) - x.scaleY || 0,
                l4
              )),
                (this._pt.u = 0),
                s.push("scaleY", m),
                (m += "X");
            else if (m === "transformOrigin") {
              L.push($t, 0, l[$t]),
                (c = dC(c)),
                x.svg
                  ? c4(e, c, 0, T, 0, this)
                  : ((g = parseFloat(c.split(" ")[2]) || 0),
                    g !== x.zOrigin && G3(this, x, "zOrigin", x.zOrigin, g),
                    G3(this, l, m, Mi(u), Mi(c)));
              continue;
            } else if (m === "svgOrigin") {
              c4(e, c, 1, T, 0, this);
              continue;
            } else if (m in cu) {
              mC(this, x, m, d, p ? Wr(d, p + c) : c);
              continue;
            } else if (m === "smoothOrigin") {
              G3(this, x, "smooth", x.smooth, c);
              continue;
            } else if (m === "force3D") {
              x[m] = c;
              continue;
            } else if (m === "transform") {
              gC(this, c, e);
              continue;
            }
          } else m in l || (m = s6(m) || m);
          if (_ || ((f || f === 0) && (d || d === 0) && !Qh.test(c) && m in l))
            (k = (u + "").substr((d + "").length)),
              f || (f = 0),
              (g = v1(c) || (m in at.units ? at.units[m] : k)),
              k !== g && (d = pn(e, m, u, g)),
              (this._pt = new Z1(
                this._pt,
                _ ? x : l,
                m,
                d,
                (p ? Wr(d, p + f) : f) - d,
                !_ && (g === "px" || m === "zIndex") && n.autoRound !== !1
                  ? tC
                  : l4
              )),
              (this._pt.u = g || 0),
              k !== g && g !== "%" && ((this._pt.b = u), (this._pt.r = eC));
          else if (m in l) fC.call(this, e, m, u, p ? p + c : c);
          else if (m in e) this.add(e, m, u || e[m], p ? p + c : c, i, o);
          else if (m !== "parseTransform") {
            E7(m, c);
            continue;
          }
          _ || (m in l ? L.push(m, 0, l[m]) : L.push(m, 1, u || e[m])),
            s.push(m);
        }
      }
    w && tu(this);
  },
  render: function (e, n) {
    if (n.tween._time || !A7())
      for (var r = n._pt; r;) r.r(e, r.d), (r = r._next);
    else n.styles.revert();
  },
  get: _3,
  aliases: l3,
  getSetter: function (e, n, r) {
    var i = l3[n];
    return (
      i && i.indexOf(",") < 0 && (n = i),
      n in V3 && n !== $t && (e._gsap.x || _3(e, "x"))
        ? r && Co === r
          ? n === "scale"
            ? oC
            : iC
          : (Co = r || {}) && (n === "scale" ? sC : lC)
        : e.style && !S7(e.style[n])
          ? nC
          : ~n.indexOf("-")
            ? rC
            : N7(e, n)
    );
  },
  core: { _removeProperty: R2, _getMatrix: I7 },
};
$1.utils.checkPrefix = s6;
$1.core.getStyleSaver = su;
(function (t, e, n, r) {
  var i = Y1(t + "," + e + "," + n, function (o) {
    V3[o] = 1;
  });
  Y1(e, function (o) {
    (at.units[o] = "deg"), (cu[o] = 1);
  }),
    (l3[i[13]] = t + "," + e),
    Y1(r, function (o) {
      var s = o.split(":");
      l3[s[1]] = i[s[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Y1(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (t) {
    at.units[t] = "px";
  }
);
$1.registerPlugin(hu);
var j = $1.registerPlugin(hu) || $1;
j.core.Tween;
function So(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(t, r.key, r);
  }
}
function vC(t, e, n) {
  return e && So(t.prototype, e), n && So(t, n), t;
}
/*!
 * Observer 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var u1,
  f4,
  ot,
  q3,
  K3,
  Yr,
  Cu,
  Pn,
  r2,
  pu,
  k3,
  Dt,
  mu,
  gu = function () {
    return (
      u1 ||
      (typeof window < "u" && (u1 = window.gsap) && u1.registerPlugin && u1)
    );
  },
  vu = 1,
  Nr = [],
  se = [],
  f3 = [],
  i2 = Date.now,
  d4 = function (e, n) {
    return n;
  },
  yC = function () {
    var e = r2.core,
      n = e.bridge || {},
      r = e._scrollers,
      i = e._proxies;
    r.push.apply(r, se),
      i.push.apply(i, f3),
      (se = r),
      (f3 = i),
      (d4 = function (s, l) {
        return n[s](l);
      });
  },
  fn = function (e, n) {
    return ~f3.indexOf(e) && f3[f3.indexOf(e) + 1][n];
  },
  o2 = function (e) {
    return !!~pu.indexOf(e);
  },
  D1 = function (e, n, r, i, o) {
    return e.addEventListener(n, r, { passive: !i, capture: !!o });
  },
  L1 = function (e, n, r, i) {
    return e.removeEventListener(n, r, !!i);
  },
  p0 = "scrollLeft",
  m0 = "scrollTop",
  h4 = function () {
    return (k3 && k3.isPressed) || se.cache++;
  },
  Oi = function (e, n) {
    var r = function i(o) {
      if (o || o === 0) {
        vu && (ot.history.scrollRestoration = "manual");
        var s = k3 && k3.isPressed;
        (o = i.v = Math.round(o) || (k3 && k3.iOS ? 1 : 0)),
          e(o),
          (i.cacheID = se.cache),
          s && d4("ss", o);
      } else
        (n || se.cache !== i.cacheID || d4("ref")) &&
          ((i.cacheID = se.cache), (i.v = e()));
      return i.v + i.offset;
    };
    return (r.offset = 0), e && r;
  },
  P1 = {
    s: p0,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Oi(function (t) {
      return arguments.length
        ? ot.scrollTo(t, Ze.sc())
        : ot.pageXOffset || q3[p0] || K3[p0] || Yr[p0] || 0;
    }),
  },
  Ze = {
    s: m0,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: P1,
    sc: Oi(function (t) {
      return arguments.length
        ? ot.scrollTo(P1.sc(), t)
        : ot.pageYOffset || q3[m0] || K3[m0] || Yr[m0] || 0;
    }),
  },
  I1 = function (e) {
    return (
      u1.utils.toArray(e)[0] ||
      (typeof e == "string" && u1.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  mn = function (e, n) {
    var r = n.s,
      i = n.sc;
    o2(e) && (e = q3.scrollingElement || K3);
    var o = se.indexOf(e),
      s = i === Ze.sc ? 1 : 2;
    !~o && (o = se.push(e) - 1), se[o + s] || e.addEventListener("scroll", h4);
    var l = se[o + s],
      a =
        l ||
        (se[o + s] =
          Oi(fn(e, r), !0) ||
          (o2(e)
            ? i
            : Oi(function (u) {
              return arguments.length ? (e[r] = u) : e[r];
            })));
    return (
      (a.target = e),
      l || (a.smooth = u1.getProperty(e, "scrollBehavior") === "smooth"),
      a
    );
  },
  C4 = function (e, n, r) {
    var i = e,
      o = e,
      s = i2(),
      l = s,
      a = n || 50,
      u = Math.max(500, a * 3),
      c = function (v, m) {
        var k = i2();
        m || k - s > a
          ? ((o = i), (i = v), (l = s), (s = k))
          : r
            ? (i += v)
            : (i = o + ((v - o) / (k - l)) * (s - l));
      },
      f = function () {
        (o = i = r ? 0 : i), (l = s = 0);
      },
      d = function (v) {
        var m = l,
          k = o,
          g = i2();
        return (
          (v || v === 0) && v !== i && c(v),
          s === l || g - l > u
            ? 0
            : ((i + (r ? k : -k)) / ((r ? g : s) - m)) * 1e3
        );
      };
    return { update: c, reset: f, getVelocity: d };
  },
  P6 = function (e, n) {
    return (
      n && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  xo = function (e) {
    var n = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(n) >= Math.abs(r) ? n : r;
  },
  yu = function () {
    (r2 = u1.core.globals().ScrollTrigger), r2 && r2.core && yC();
  },
  _u = function (e) {
    return (
      (u1 = e || gu()),
      u1 &&
      typeof document < "u" &&
      document.body &&
      ((ot = window),
        (q3 = document),
        (K3 = q3.documentElement),
        (Yr = q3.body),
        (pu = [ot, q3, K3, Yr]),
        u1.utils.clamp,
        (mu = u1.core.context || function () { }),
        (Pn = "onpointerenter" in Yr ? "pointer" : "mouse"),
        (Cu = je.isTouch =
          ot.matchMedia &&
            ot.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in ot ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (Dt = je.eventTypes =
          (
            "ontouchstart" in K3
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in K3
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (vu = 0);
        }, 500),
        yu(),
        (f4 = 1)),
      f4
    );
  };
P1.op = Ze;
se.cache = 0;
var je = (function () {
  function t(n) {
    this.init(n);
  }
  var e = t.prototype;
  return (
    (e.init = function (r) {
      f4 || _u(u1) || console.warn("Please gsap.registerPlugin(Observer)"),
        r2 || yu();
      var i = r.tolerance,
        o = r.dragMinimum,
        s = r.type,
        l = r.target,
        a = r.lineHeight,
        u = r.debounce,
        c = r.preventDefault,
        f = r.onStop,
        d = r.onStopDelay,
        h = r.ignore,
        v = r.wheelSpeed,
        m = r.event,
        k = r.onDragStart,
        g = r.onDragEnd,
        p = r.onDrag,
        _ = r.onPress,
        y = r.onRelease,
        x = r.onRight,
        T = r.onLeft,
        w = r.onUp,
        L = r.onDown,
        M = r.onChangeX,
        O = r.onChangeY,
        W = r.onChange,
        I = r.onToggleX,
        $ = r.onToggleY,
        D = r.onHover,
        A = r.onHoverEnd,
        H = r.onMove,
        E = r.ignoreCheck,
        b = r.isNormalizer,
        N = r.onGestureStart,
        S = r.onGestureEnd,
        F = r.onWheel,
        Y = r.onEnable,
        ee = r.onDisable,
        Q = r.onClick,
        Ce = r.scrollSpeed,
        re = r.capture,
        ve = r.allowClicks,
        i1 = r.lockAxis,
        C6 = r.onLockAxis;
      (this.target = l = I1(l) || K3),
        (this.vars = r),
        h && (h = u1.utils.toArray(h)),
        (i = i || 1e-9),
        (o = o || 0),
        (v = v || 1),
        (Ce = Ce || 1),
        (s = s || "wheel,touch,pointer"),
        (u = u !== !1),
        a || (a = parseFloat(ot.getComputedStyle(Yr).lineHeight) || 22);
      var X1,
        Ct,
        le,
        Xe,
        G1,
        Qt,
        S1,
        V = this,
        h3 = 0,
        we = 0,
        A3 = mn(l, P1),
        D3 = mn(l, Ze),
        lr = A3(),
        x1 = D3(),
        p6 =
          ~s.indexOf("touch") &&
          !~s.indexOf("pointer") &&
          Dt[0] === "pointerdown",
        I3 = o2(l),
        Re = l.ownerDocument || q3,
        q1 = [0, 0, 0],
        k1 = [0, 0, 0],
        m6 = 0,
        E1 = function () {
          return (m6 = i2());
        },
        Jt = function (q, B) {
          return (
            ((V.event = q) && h && ~h.indexOf(q.target)) ||
            (B && p6 && q.pointerType !== "touch") ||
            (E && E(q, B))
          );
        },
        g6 = function () {
          V._vx.reset(), V._vy.reset(), Ct.pause(), f && f(V);
        },
        z3 = function () {
          var q = (V.deltaX = xo(q1)),
            B = (V.deltaY = xo(k1)),
            X = Math.abs(q) >= i,
            K = Math.abs(B) >= i;
          W && (X || K) && W(V, q, B, q1, k1),
            X &&
            (x && V.deltaX > 0 && x(V),
              T && V.deltaX < 0 && T(V),
              M && M(V),
              I && V.deltaX < 0 != h3 < 0 && I(V),
              (h3 = V.deltaX),
              (q1[0] = q1[1] = q1[2] = 0)),
            K &&
            (L && V.deltaY > 0 && L(V),
              w && V.deltaY < 0 && w(V),
              O && O(V),
              $ && V.deltaY < 0 != we < 0 && $(V),
              (we = V.deltaY),
              (k1[0] = k1[1] = k1[2] = 0)),
            (Xe || le) && (H && H(V), le && (p(V), (le = !1)), (Xe = !1)),
            Qt && !(Qt = !1) && C6 && C6(V),
            G1 && (F(V), (G1 = !1)),
            (X1 = 0);
        },
        ar = function (q, B, X) {
          (q1[X] += q),
            (k1[X] += B),
            V._vx.update(q),
            V._vy.update(B),
            u ? X1 || (X1 = requestAnimationFrame(z3)) : z3();
        },
        wn = function (q, B) {
          i1 &&
            !S1 &&
            ((V.axis = S1 = Math.abs(q) > Math.abs(B) ? "x" : "y"), (Qt = !0)),
            S1 !== "y" && ((q1[2] += q), V._vx.update(q, !0)),
            S1 !== "x" && ((k1[2] += B), V._vy.update(B, !0)),
            u ? X1 || (X1 = requestAnimationFrame(z3)) : z3();
        },
        Sn = function (q) {
          if (!Jt(q, 1)) {
            q = P6(q, c);
            var B = q.clientX,
              X = q.clientY,
              K = B - V.x,
              ne = X - V.y,
              Ge = V.isDragging;
            (V.x = B),
              (V.y = X),
              (Ge ||
                Math.abs(V.startX - B) >= o ||
                Math.abs(V.startY - X) >= o) &&
              (p && (le = !0),
                Ge || (V.isDragging = !0),
                wn(K, ne),
                Ge || (k && k(V)));
          }
        },
        oe = (V.onPress = function (te) {
          Jt(te, 1) ||
            (te && te.button) ||
            ((V.axis = S1 = null),
              Ct.pause(),
              (V.isPressed = !0),
              (te = P6(te)),
              (h3 = we = 0),
              (V.startX = V.x = te.clientX),
              (V.startY = V.y = te.clientY),
              V._vx.reset(),
              V._vy.reset(),
              D1(b ? l : Re, Dt[1], Sn, c, !0),
              (V.deltaX = V.deltaY = 0),
              _ && _(V));
        }),
        C3 = (V.onRelease = function (te) {
          if (!Jt(te, 1)) {
            L1(b ? l : Re, Dt[1], Sn, !0);
            var q = !isNaN(V.y - V.startY),
              B =
                V.isDragging &&
                (Math.abs(V.x - V.startX) > 3 || Math.abs(V.y - V.startY) > 3),
              X = P6(te);
            !B &&
              q &&
              (V._vx.reset(),
                V._vy.reset(),
                c &&
                ve &&
                u1.delayedCall(0.08, function () {
                  if (i2() - m6 > 300 && !te.defaultPrevented) {
                    if (te.target.click) te.target.click();
                    else if (Re.createEvent) {
                      var K = Re.createEvent("MouseEvents");
                      K.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        ot,
                        1,
                        X.screenX,
                        X.screenY,
                        X.clientX,
                        X.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        te.target.dispatchEvent(K);
                    }
                  }
                })),
              (V.isDragging = V.isGesturing = V.isPressed = !1),
              f && !b && Ct.restart(!0),
              g && B && g(V),
              y && y(V, B);
          }
        }),
        Nt = function (q) {
          return (
            q.touches &&
            q.touches.length > 1 &&
            (V.isGesturing = !0) &&
            N(q, V.isDragging)
          );
        },
        Vt = function () {
          return (V.isGesturing = !1) || S(V);
        },
        pt = function (q) {
          if (!Jt(q)) {
            var B = A3(),
              X = D3();
            ar((B - lr) * Ce, (X - x1) * Ce, 1),
              (lr = B),
              (x1 = X),
              f && Ct.restart(!0);
          }
        },
        Rt = function (q) {
          if (!Jt(q)) {
            (q = P6(q, c)), F && (G1 = !0);
            var B =
              (q.deltaMode === 1 ? a : q.deltaMode === 2 ? ot.innerHeight : 1) *
              v;
            ar(q.deltaX * B, q.deltaY * B, 0), f && !b && Ct.restart(!0);
          }
        },
        xn = function (q) {
          if (!Jt(q)) {
            var B = q.clientX,
              X = q.clientY,
              K = B - V.x,
              ne = X - V.y;
            (V.x = B), (V.y = X), (Xe = !0), (K || ne) && wn(K, ne);
          }
        },
        ur = function (q) {
          (V.event = q), D(V);
        },
        p3 = function (q) {
          (V.event = q), A(V);
        },
        v6 = function (q) {
          return Jt(q) || (P6(q, c) && Q(V));
        };
      (Ct = V._dc = u1.delayedCall(d || 0.25, g6).pause()),
        (V.deltaX = V.deltaY = 0),
        (V._vx = C4(0, 50, !0)),
        (V._vy = C4(0, 50, !0)),
        (V.scrollX = A3),
        (V.scrollY = D3),
        (V.isDragging = V.isGesturing = V.isPressed = !1),
        mu(this),
        (V.enable = function (te) {
          return (
            V.isEnabled ||
            (D1(I3 ? Re : l, "scroll", h4),
              s.indexOf("scroll") >= 0 && D1(I3 ? Re : l, "scroll", pt, c, re),
              s.indexOf("wheel") >= 0 && D1(l, "wheel", Rt, c, re),
              ((s.indexOf("touch") >= 0 && Cu) || s.indexOf("pointer") >= 0) &&
              (D1(l, Dt[0], oe, c, re),
                D1(Re, Dt[2], C3),
                D1(Re, Dt[3], C3),
                ve && D1(l, "click", E1, !1, !0),
                Q && D1(l, "click", v6),
                N && D1(Re, "gesturestart", Nt),
                S && D1(Re, "gestureend", Vt),
                D && D1(l, Pn + "enter", ur),
                A && D1(l, Pn + "leave", p3),
                H && D1(l, Pn + "move", xn)),
              (V.isEnabled = !0),
              te && te.type && oe(te),
              Y && Y(V)),
            V
          );
        }),
        (V.disable = function () {
          V.isEnabled &&
            (Nr.filter(function (te) {
              return te !== V && o2(te.target);
            }).length || L1(I3 ? Re : l, "scroll", h4),
              V.isPressed &&
              (V._vx.reset(), V._vy.reset(), L1(b ? l : Re, Dt[1], Sn, !0)),
              L1(I3 ? Re : l, "scroll", pt, re),
              L1(l, "wheel", Rt, re),
              L1(l, Dt[0], oe, re),
              L1(Re, Dt[2], C3),
              L1(Re, Dt[3], C3),
              L1(l, "click", E1, !0),
              L1(l, "click", v6),
              L1(Re, "gesturestart", Nt),
              L1(Re, "gestureend", Vt),
              L1(l, Pn + "enter", ur),
              L1(l, Pn + "leave", p3),
              L1(l, Pn + "move", xn),
              (V.isEnabled = V.isPressed = V.isDragging = !1),
              ee && ee(V));
        }),
        (V.kill = V.revert =
          function () {
            V.disable();
            var te = Nr.indexOf(V);
            te >= 0 && Nr.splice(te, 1), k3 === V && (k3 = 0);
          }),
        Nr.push(V),
        b && o2(l) && (k3 = V),
        V.enable(m);
    }),
    vC(t, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    t
  );
})();
je.version = "3.11.5";
je.create = function (t) {
  return new je(t);
};
je.register = _u;
je.getAll = function () {
  return Nr.slice();
};
je.getById = function (t) {
  return Nr.filter(function (e) {
    return e.vars.id === t;
  })[0];
};
gu() && u1.registerPlugin(je);
/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Z,
  pr,
  ae,
  Se,
  Wt,
  Pe,
  wu,
  bi,
  Pi,
  Vr,
  W0,
  g0,
  p1,
  s8,
  p4,
  O1,
  ko,
  Eo,
  mr,
  Su,
  $8,
  xu,
  Q1,
  ku,
  Eu,
  Tu,
  H3,
  m4,
  z7,
  X8,
  v0 = 1,
  b1 = Date.now,
  G8 = b1(),
  Mt = 0,
  B6 = 0,
  _C = function t() {
    return B6 && requestAnimationFrame(t);
  },
  To = function () {
    return (s8 = 1);
  },
  Lo = function () {
    return (s8 = 0);
  },
  i3 = function (e) {
    return e;
  },
  W6 = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Lu = function () {
    return typeof window < "u";
  },
  Mu = function () {
    return Z || (Lu() && (Z = window.gsap) && Z.registerPlugin && Z);
  },
  er = function (e) {
    return !!~wu.indexOf(e);
  },
  Ou = function (e) {
    return (
      fn(e, "getBoundingClientRect") ||
      (er(e)
        ? function () {
          return (X0.width = ae.innerWidth), (X0.height = ae.innerHeight), X0;
        }
        : function () {
          return w3(e);
        })
    );
  },
  wC = function (e, n, r) {
    var i = r.d,
      o = r.d2,
      s = r.a;
    return (s = fn(e, "getBoundingClientRect"))
      ? function () {
        return s()[i];
      }
      : function () {
        return (n ? ae["inner" + o] : e["client" + o]) || 0;
      };
  },
  SC = function (e, n) {
    return !n || ~f3.indexOf(e)
      ? Ou(e)
      : function () {
        return X0;
      };
  },
  Q3 = function (e, n) {
    var r = n.s,
      i = n.d2,
      o = n.d,
      s = n.a;
    return Math.max(
      0,
      (r = "scroll" + i) && (s = fn(e, r))
        ? s() - Ou(e)()[o]
        : er(e)
          ? (Wt[r] || Pe[r]) -
          (ae["inner" + i] || Wt["client" + i] || Pe["client" + i])
          : e[r] - e["offset" + i]
    );
  },
  y0 = function (e, n) {
    for (var r = 0; r < mr.length; r += 3)
      (!n || ~n.indexOf(mr[r + 1])) && e(mr[r], mr[r + 1], mr[r + 2]);
  },
  zt = function (e) {
    return typeof e == "string";
  },
  N1 = function (e) {
    return typeof e == "function";
  },
  j6 = function (e) {
    return typeof e == "number";
  },
  j0 = function (e) {
    return typeof e == "object";
  },
  N6 = function (e, n, r) {
    return e && e.progress(n ? 0 : 1) && r && e.pause();
  },
  q8 = function (e, n) {
    if (e.enabled) {
      var r = n(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  },
  hr = Math.abs,
  bu = "left",
  Pu = "top",
  F7 = "right",
  H7 = "bottom",
  Un = "width",
  Yn = "height",
  s2 = "Right",
  l2 = "Left",
  a2 = "Top",
  u2 = "Bottom",
  De = "padding",
  St = "margin",
  l6 = "Width",
  B7 = "Height",
  s1 = "px",
  jt = function (e) {
    return ae.getComputedStyle(e);
  },
  xC = function (e) {
    var n = jt(e).position;
    e.style.position = n === "absolute" || n === "fixed" ? n : "relative";
  },
  Mo = function (e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e;
  },
  w3 = function (e, n) {
    var r =
      n &&
      jt(e)[p4] !== "matrix(1, 0, 0, 1, 0, 0)" &&
      Z.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
      }).progress(1),
      i = e.getBoundingClientRect();
    return r && r.progress(0).kill(), i;
  },
  g4 = function (e, n) {
    var r = n.d2;
    return e["offset" + r] || e["client" + r] || 0;
  },
  Nu = function (e) {
    var n = [],
      r = e.labels,
      i = e.duration(),
      o;
    for (o in r) n.push(r[o] / i);
    return n;
  },
  kC = function (e) {
    return function (n) {
      return Z.utils.snap(Nu(e), n);
    };
  },
  W7 = function (e) {
    var n = Z.utils.snap(e),
      r =
        Array.isArray(e) &&
        e.slice(0).sort(function (i, o) {
          return i - o;
        });
    return r
      ? function (i, o, s) {
        s === void 0 && (s = 0.001);
        var l;
        if (!o) return n(i);
        if (o > 0) {
          for (i -= s, l = 0; l < r.length; l++) if (r[l] >= i) return r[l];
          return r[l - 1];
        } else for (l = r.length, i += s; l--;) if (r[l] <= i) return r[l];
        return r[0];
      }
      : function (i, o, s) {
        s === void 0 && (s = 0.001);
        var l = n(i);
        return !o || Math.abs(l - i) < s || l - i < 0 == o < 0
          ? l
          : n(o < 0 ? i - e : i + e);
      };
  },
  EC = function (e) {
    return function (n, r) {
      return W7(Nu(e))(n, r.direction);
    };
  },
  _0 = function (e, n, r, i) {
    return r.split(",").forEach(function (o) {
      return e(n, o, i);
    });
  },
  e1 = function (e, n, r, i, o) {
    return e.addEventListener(n, r, { passive: !i, capture: !!o });
  },
  Je = function (e, n, r, i) {
    return e.removeEventListener(n, r, !!i);
  },
  w0 = function (e, n, r) {
    (r = r && r.wheelHandler), r && (e(n, "wheel", r), e(n, "touchmove", r));
  },
  Oo = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  S0 = { toggleActions: "play", anticipatePin: 0 },
  Ni = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  U0 = function (e, n) {
    if (zt(e)) {
      var r = e.indexOf("="),
        i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (i *= n / 100), (e = e.substr(0, r - 1))),
        (e =
          i +
          (e in Ni
            ? Ni[e] * n
            : ~e.indexOf("%")
              ? (parseFloat(e) * n) / 100
              : parseFloat(e) || 0));
    }
    return e;
  },
  x0 = function (e, n, r, i, o, s, l, a) {
    var u = o.startColor,
      c = o.endColor,
      f = o.fontSize,
      d = o.indent,
      h = o.fontWeight,
      v = Se.createElement("div"),
      m = er(r) || fn(r, "pinType") === "fixed",
      k = e.indexOf("scroller") !== -1,
      g = m ? Pe : r,
      p = e.indexOf("start") !== -1,
      _ = p ? u : c,
      y =
        "border-color:" +
        _ +
        ";font-size:" +
        f +
        ";color:" +
        _ +
        ";font-weight:" +
        h +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (y += "position:" + ((k || a) && m ? "fixed;" : "absolute;")),
      (k || a || !m) &&
      (y += (i === Ze ? F7 : H7) + ":" + (s + parseFloat(d)) + "px;"),
      l &&
      (y +=
        "box-sizing:border-box;text-align:left;width:" +
        l.offsetWidth +
        "px;"),
      (v._isStart = p),
      v.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")),
      (v.style.cssText = y),
      (v.innerText = n || n === 0 ? e + "-" + n : e),
      g.children[0] ? g.insertBefore(v, g.children[0]) : g.appendChild(v),
      (v._offset = v["offset" + i.op.d2]),
      Y0(v, 0, i, p),
      v
    );
  },
  Y0 = function (e, n, r, i) {
    var o = { display: "block" },
      s = r[i ? "os2" : "p2"],
      l = r[i ? "p2" : "os2"];
    (e._isFlipped = i),
      (o[r.a + "Percent"] = i ? -100 : 0),
      (o[r.a] = i ? "1px" : 0),
      (o["border" + s + l6] = 1),
      (o["border" + l + l6] = 0),
      (o[r.p] = n + "px"),
      Z.set(e, o);
  },
  ie = [],
  v4 = {},
  I2,
  bo = function () {
    return b1() - Mt > 34 && (I2 || (I2 = requestAnimationFrame(L3)));
  },
  Cr = function () {
    (!Q1 || !Q1.isPressed || Q1.startX > Pe.clientWidth) &&
      (se.cache++,
        Q1 ? I2 || (I2 = requestAnimationFrame(L3)) : L3(),
        Mt || nr("scrollStart"),
        (Mt = b1()));
  },
  K8 = function () {
    (Tu = ae.innerWidth), (Eu = ae.innerHeight);
  },
  U6 = function () {
    se.cache++,
      !p1 &&
      !xu &&
      !Se.fullscreenElement &&
      !Se.webkitFullscreenElement &&
      (!ku ||
        Tu !== ae.innerWidth ||
        Math.abs(ae.innerHeight - Eu) > ae.innerHeight * 0.25) &&
      bi.restart(!0);
  },
  tr = {},
  TC = [],
  Vu = function t() {
    return Je(G, "scrollEnd", t) || In(!0);
  },
  nr = function (e) {
    return (
      (tr[e] &&
        tr[e].map(function (n) {
          return n();
        })) ||
      TC
    );
  },
  J1 = [],
  Ru = function (e) {
    for (var n = 0; n < J1.length; n += 5)
      (!e || (J1[n + 4] && J1[n + 4].query === e)) &&
        ((J1[n].style.cssText = J1[n + 1]),
          J1[n].getBBox && J1[n].setAttribute("transform", J1[n + 2] || ""),
          (J1[n + 3].uncache = 1));
  },
  j7 = function (e, n) {
    var r;
    for (O1 = 0; O1 < ie.length; O1++)
      (r = ie[O1]),
        r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
    n && Ru(n), n || nr("revert");
  },
  Au = function (e, n) {
    se.cache++,
      (n || !nt) &&
      se.forEach(function (r) {
        return N1(r) && r.cacheID++ && (r.rec = 0);
      }),
      zt(e) && (ae.history.scrollRestoration = z7 = e);
  },
  nt,
  Zn = 0,
  Po,
  LC = function () {
    if (Po !== Zn) {
      var e = (Po = Zn);
      requestAnimationFrame(function () {
        return e === Zn && In(!0);
      });
    }
  },
  In = function (e, n) {
    if (Mt && !e) {
      e1(G, "scrollEnd", Vu);
      return;
    }
    (nt = G.isRefreshing = !0),
      se.forEach(function (i) {
        return N1(i) && i.cacheID++ && (i.rec = i());
      });
    var r = nr("refreshInit");
    Su && G.sort(),
      n || j7(),
      se.forEach(function (i) {
        N1(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
      }),
      ie.slice(0).forEach(function (i) {
        return i.refresh();
      }),
      ie.forEach(function (i, o) {
        if (i._subPinOffset && i.pin) {
          var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
            l = i.pin[s];
          i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - l), i.refresh();
        }
      }),
      ie.forEach(function (i) {
        return (
          i.vars.end === "max" &&
          i.setPositions(i.start, Math.max(i.start + 1, Q3(i.scroller, i._dir)))
        );
      }),
      r.forEach(function (i) {
        return i && i.render && i.render(-1);
      }),
      se.forEach(function (i) {
        N1(i) &&
          (i.smooth &&
            requestAnimationFrame(function () {
              return (i.target.style.scrollBehavior = "smooth");
            }),
            i.rec && i(i.rec));
      }),
      Au(z7, 1),
      bi.pause(),
      Zn++,
      (nt = 2),
      L3(2),
      ie.forEach(function (i) {
        return N1(i.vars.onRefresh) && i.vars.onRefresh(i);
      }),
      (nt = G.isRefreshing = !1),
      nr("refresh");
  },
  y4 = 0,
  Z0 = 1,
  c2,
  L3 = function (e) {
    if (!nt || e === 2) {
      (G.isUpdating = !0), c2 && c2.update(0);
      var n = ie.length,
        r = b1(),
        i = r - G8 >= 50,
        o = n && ie[0].scroll();
      if (
        ((Z0 = y4 > o ? -1 : 1),
          nt || (y4 = o),
          i &&
          (Mt && !s8 && r - Mt > 200 && ((Mt = 0), nr("scrollEnd")),
            (W0 = G8),
            (G8 = r)),
          Z0 < 0)
      ) {
        for (O1 = n; O1-- > 0;) ie[O1] && ie[O1].update(0, i);
        Z0 = 1;
      } else for (O1 = 0; O1 < n; O1++) ie[O1] && ie[O1].update(0, i);
      G.isUpdating = !1;
    }
    I2 = 0;
  },
  _4 = [
    bu,
    Pu,
    H7,
    F7,
    St + u2,
    St + s2,
    St + a2,
    St + l2,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  $0 = _4.concat([
    Un,
    Yn,
    "boxSizing",
    "max" + l6,
    "max" + B7,
    "position",
    St,
    De,
    De + a2,
    De + s2,
    De + u2,
    De + l2,
  ]),
  MC = function (e, n, r) {
    Zr(r);
    var i = e._gsap;
    if (i.spacerIsNative) Zr(i.spacerState);
    else if (e._gsap.swappedIn) {
      var o = n.parentNode;
      o && (o.insertBefore(e, n), o.removeChild(n));
    }
    e._gsap.swappedIn = !1;
  },
  Q8 = function (e, n, r, i) {
    if (!e._gsap.swappedIn) {
      for (var o = _4.length, s = n.style, l = e.style, a; o--;)
        (a = _4[o]), (s[a] = r[a]);
      (s.position = r.position === "absolute" ? "absolute" : "relative"),
        r.display === "inline" && (s.display = "inline-block"),
        (l[H7] = l[F7] = "auto"),
        (s.flexBasis = r.flexBasis || "auto"),
        (s.overflow = "visible"),
        (s.boxSizing = "border-box"),
        (s[Un] = g4(e, P1) + s1),
        (s[Yn] = g4(e, Ze) + s1),
        (s[De] = l[St] = l[Pu] = l[bu] = "0"),
        Zr(i),
        (l[Un] = l["max" + l6] = r[Un]),
        (l[Yn] = l["max" + B7] = r[Yn]),
        (l[De] = r[De]),
        e.parentNode !== n &&
        (e.parentNode.insertBefore(n, e), n.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  OC = /([A-Z])/g,
  Zr = function (e) {
    if (e) {
      var n = e.t.style,
        r = e.length,
        i = 0,
        o,
        s;
      for ((e.t._gsap || Z.core.getCache(e.t)).uncache = 1; i < r; i += 2)
        (s = e[i + 1]),
          (o = e[i]),
          s
            ? (n[o] = s)
            : n[o] && n.removeProperty(o.replace(OC, "-$1").toLowerCase());
    }
  },
  k0 = function (e) {
    for (var n = $0.length, r = e.style, i = [], o = 0; o < n; o++)
      i.push($0[o], r[$0[o]]);
    return (i.t = e), i;
  },
  bC = function (e, n, r) {
    for (var i = [], o = e.length, s = r ? 8 : 0, l; s < o; s += 2)
      (l = e[s]), i.push(l, l in n ? n[l] : e[s + 1]);
    return (i.t = e.t), i;
  },
  X0 = { left: 0, top: 0 },
  No = function (e, n, r, i, o, s, l, a, u, c, f, d, h) {
    N1(e) && (e = e(a)),
      zt(e) &&
      e.substr(0, 3) === "max" &&
      (e = d + (e.charAt(4) === "=" ? U0("0" + e.substr(3), r) : 0));
    var v = h ? h.time() : 0,
      m,
      k,
      g;
    if ((h && h.seek(0), j6(e)))
      h &&
        (e = Z.utils.mapRange(
          h.scrollTrigger.start,
          h.scrollTrigger.end,
          0,
          d,
          e
        )),
        l && Y0(l, r, i, !0);
    else {
      N1(n) && (n = n(a));
      var p = (e || "0").split(" "),
        _,
        y,
        x,
        T;
      (g = I1(n) || Pe),
        (_ = w3(g) || {}),
        (!_ || (!_.left && !_.top)) &&
        jt(g).display === "none" &&
        ((T = g.style.display),
          (g.style.display = "block"),
          (_ = w3(g)),
          T ? (g.style.display = T) : g.style.removeProperty("display")),
        (y = U0(p[0], _[i.d])),
        (x = U0(p[1] || "0", r)),
        (e = _[i.p] - u[i.p] - c + y + o - x),
        l && Y0(l, x, i, r - x < 20 || (l._isStart && x > 20)),
        (r -= r - x);
    }
    if (s) {
      var w = e + r,
        L = s._isStart;
      (m = "scroll" + i.d2),
        Y0(
          s,
          w,
          i,
          (L && w > 20) ||
          (!L && (f ? Math.max(Pe[m], Wt[m]) : s.parentNode[m]) <= w + 1)
        ),
        f &&
        ((u = w3(l)),
          f && (s.style[i.op.p] = u[i.op.p] - i.op.m - s._offset + s1));
    }
    return (
      h &&
      g &&
      ((m = w3(g)),
        h.seek(d),
        (k = w3(g)),
        (h._caScrollDist = m[i.p] - k[i.p]),
        (e = (e / h._caScrollDist) * d)),
      h && h.seek(v),
      h ? e : Math.round(e)
    );
  },
  PC = /(webkit|moz|length|cssText|inset)/i,
  Vo = function (e, n, r, i) {
    if (e.parentNode !== n) {
      var o = e.style,
        s,
        l;
      if (n === Pe) {
        (e._stOrig = o.cssText), (l = jt(e));
        for (s in l)
          !+s &&
            !PC.test(s) &&
            l[s] &&
            typeof o[s] == "string" &&
            s !== "0" &&
            (o[s] = l[s]);
        (o.top = r), (o.left = i);
      } else o.cssText = e._stOrig;
      (Z.core.getCache(e).uncache = 1), n.appendChild(e);
    }
  },
  Du = function (e, n, r) {
    var i = n,
      o = i;
    return function (s) {
      var l = Math.round(e());
      return (
        l !== i &&
        l !== o &&
        Math.abs(l - i) > 3 &&
        Math.abs(l - o) > 3 &&
        ((s = l), r && r()),
        (o = i),
        (i = s),
        s
      );
    };
  },
  Ro = function (e, n) {
    var r = mn(e, n),
      i = "_scroll" + n.p2,
      o = function s(l, a, u, c, f) {
        var d = s.tween,
          h = a.onComplete,
          v = {};
        u = u || r();
        var m = Du(r, u, function () {
          d.kill(), (s.tween = 0);
        });
        return (
          (f = (c && f) || 0),
          (c = c || l - u),
          d && d.kill(),
          (a[i] = l),
          (a.modifiers = v),
          (v[i] = function () {
            return m(u + c * d.ratio + f * d.ratio * d.ratio);
          }),
          (a.onUpdate = function () {
            se.cache++, L3();
          }),
          (a.onComplete = function () {
            (s.tween = 0), h && h.call(d);
          }),
          (d = s.tween = Z.to(e, a)),
          d
        );
      };
    return (
      (e[i] = r),
      (r.wheelHandler = function () {
        return o.tween && o.tween.kill() && (o.tween = 0);
      }),
      e1(e, "wheel", r.wheelHandler),
      G.isTouch && e1(e, "touchmove", r.wheelHandler),
      o
    );
  },
  G = (function () {
    function t(n, r) {
      pr ||
        t.register(Z) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(n, r);
    }
    var e = t.prototype;
    return (
      (e.init = function (r, i) {
        if (
          ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !B6)
        ) {
          this.update = this.refresh = this.kill = i3;
          return;
        }
        r = Mo(zt(r) || j6(r) || r.nodeType ? { trigger: r } : r, S0);
        var o = r,
          s = o.onUpdate,
          l = o.toggleClass,
          a = o.id,
          u = o.onToggle,
          c = o.onRefresh,
          f = o.scrub,
          d = o.trigger,
          h = o.pin,
          v = o.pinSpacing,
          m = o.invalidateOnRefresh,
          k = o.anticipatePin,
          g = o.onScrubComplete,
          p = o.onSnapComplete,
          _ = o.once,
          y = o.snap,
          x = o.pinReparent,
          T = o.pinSpacer,
          w = o.containerAnimation,
          L = o.fastScrollEnd,
          M = o.preventOverlaps,
          O =
            r.horizontal || (r.containerAnimation && r.horizontal !== !1)
              ? P1
              : Ze,
          W = !f && f !== 0,
          I = I1(r.scroller || ae),
          $ = Z.core.getCache(I),
          D = er(I),
          A =
            ("pinType" in r
              ? r.pinType
              : fn(I, "pinType") || (D && "fixed")) === "fixed",
          H = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
          E = W && r.toggleActions.split(" "),
          b = "markers" in r ? r.markers : S0.markers,
          N = D ? 0 : parseFloat(jt(I)["border" + O.p2 + l6]) || 0,
          S = this,
          F =
            r.onRefreshInit &&
            function () {
              return r.onRefreshInit(S);
            },
          Y = wC(I, D, O),
          ee = SC(I, D),
          Q = 0,
          Ce = 0,
          re = mn(I, O),
          ve,
          i1,
          C6,
          X1,
          Ct,
          le,
          Xe,
          G1,
          Qt,
          S1,
          V,
          h3,
          we,
          A3,
          D3,
          lr,
          x1,
          p6,
          I3,
          Re,
          q1,
          k1,
          m6,
          E1,
          Jt,
          g6,
          z3,
          ar,
          wn,
          Sn,
          oe,
          C3,
          Nt,
          Vt,
          pt,
          Rt,
          xn,
          ur,
          p3;
        if (
          (m4(S),
            (S._dir = O),
            (k *= 45),
            (S.scroller = I),
            (S.scroll = w ? w.time.bind(w) : re),
            (X1 = re()),
            (S.vars = r),
            (i = i || r.animation),
            "refreshPriority" in r &&
            ((Su = 1), r.refreshPriority === -9999 && (c2 = S)),
            ($.tweenScroll = $.tweenScroll || {
              top: Ro(I, Ze),
              left: Ro(I, P1),
            }),
            (S.tweenTo = ve = $.tweenScroll[O.p]),
            (S.scrubDuration = function (B) {
              (C3 = j6(B) && B),
                C3
                  ? oe
                    ? oe.duration(B)
                    : (oe = Z.to(i, {
                      ease: "expo",
                      totalProgress: "+=0.001",
                      duration: C3,
                      paused: !0,
                      onComplete: function () {
                        return g && g(S);
                      },
                    }))
                  : (oe && oe.progress(1).kill(), (oe = 0));
            }),
            i &&
            ((i.vars.lazy = !1),
              i._initted ||
              (i.vars.immediateRender !== !1 &&
                r.immediateRender !== !1 &&
                i.duration() &&
                i.render(0, !0, !0)),
              (S.animation = i.pause()),
              (i.scrollTrigger = S),
              S.scrubDuration(f),
              oe && oe.resetTo && oe.resetTo("totalProgress", 0),
              (wn = 0),
              a || (a = i.vars.id)),
            ie.push(S),
            y &&
            ((!j0(y) || y.push) && (y = { snapTo: y }),
              "scrollBehavior" in Pe.style &&
              Z.set(D ? [Pe, Wt] : I, { scrollBehavior: "auto" }),
              se.forEach(function (B) {
                return (
                  N1(B) &&
                  B.target === (D ? Se.scrollingElement || Wt : I) &&
                  (B.smooth = !1)
                );
              }),
              (C6 = N1(y.snapTo)
                ? y.snapTo
                : y.snapTo === "labels"
                  ? kC(i)
                  : y.snapTo === "labelsDirectional"
                    ? EC(i)
                    : y.directional !== !1
                      ? function (B, X) {
                        return W7(y.snapTo)(B, b1() - Ce < 500 ? 0 : X.direction);
                      }
                      : Z.utils.snap(y.snapTo)),
              (Nt = y.duration || { min: 0.1, max: 2 }),
              (Nt = j0(Nt) ? Vr(Nt.min, Nt.max) : Vr(Nt, Nt)),
              (Vt = Z.delayedCall(y.delay || C3 / 2 || 0.1, function () {
                var B = re(),
                  X = b1() - Ce < 500,
                  K = ve.tween;
                if (
                  (X || Math.abs(S.getVelocity()) < 10) &&
                  !K &&
                  !s8 &&
                  Q !== B
                ) {
                  var ne = (B - le) / we,
                    Ge = i && !W ? i.totalProgress() : ne,
                    de = X ? 0 : ((Ge - Sn) / (b1() - W0)) * 1e3 || 0,
                    ke = Z.utils.clamp(-ne, 1 - ne, (hr(de / 2) * de) / 0.185),
                    o1 = ne + (y.inertia === !1 ? 0 : ke),
                    qe = Vr(0, 1, C6(o1, S)),
                    Fe = Math.round(le + qe * we),
                    Ee = y,
                    K1 = Ee.onStart,
                    T1 = Ee.onInterrupt,
                    Ke = Ee.onComplete;
                  if (B <= Xe && B >= le && Fe !== B) {
                    if (K && !K._initted && K.data <= hr(Fe - B)) return;
                    y.inertia === !1 && (ke = qe - ne),
                      ve(
                        Fe,
                        {
                          duration: Nt(
                            hr(
                              (Math.max(hr(o1 - Ge), hr(qe - Ge)) * 0.185) /
                              de /
                              0.05 || 0
                            )
                          ),
                          ease: y.ease || "power3",
                          data: hr(Fe - B),
                          onInterrupt: function () {
                            return Vt.restart(!0) && T1 && T1(S);
                          },
                          onComplete: function () {
                            S.update(),
                              (Q = re()),
                              (wn = Sn =
                                i && !W ? i.totalProgress() : S.progress),
                              p && p(S),
                              Ke && Ke(S);
                          },
                        },
                        B,
                        ke * we,
                        Fe - B - ke * we
                      ),
                      K1 && K1(S, ve.tween);
                  }
                } else S.isActive && Q !== B && Vt.restart(!0);
              }).pause())),
            a && (v4[a] = S),
            (d = S.trigger = I1(d || h)),
            (p3 = d && d._gsap && d._gsap.stRevert),
            p3 && (p3 = p3(S)),
            (h = h === !0 ? d : I1(h)),
            zt(l) && (l = { targets: d, className: l }),
            h &&
            (v === !1 ||
              v === St ||
              (v =
                !v &&
                  h.parentNode &&
                  h.parentNode.style &&
                  jt(h.parentNode).display === "flex"
                  ? !1
                  : De),
              (S.pin = h),
              (i1 = Z.core.getCache(h)),
              i1.spacer
                ? (A3 = i1.pinState)
                : (T &&
                  ((T = I1(T)),
                    T && !T.nodeType && (T = T.current || T.nativeElement),
                    (i1.spacerIsNative = !!T),
                    T && (i1.spacerState = k0(T))),
                  (i1.spacer = x1 = T || Se.createElement("div")),
                  x1.classList.add("pin-spacer"),
                  a && x1.classList.add("pin-spacer-" + a),
                  (i1.pinState = A3 = k0(h))),
              r.force3D !== !1 && Z.set(h, { force3D: !0 }),
              (S.spacer = x1 = i1.spacer),
              (ar = jt(h)),
              (m6 = ar[v + O.os2]),
              (I3 = Z.getProperty(h)),
              (Re = Z.quickSetter(h, O.a, s1)),
              Q8(h, x1, ar),
              (lr = k0(h))),
            b)
        ) {
          (h3 = j0(b) ? Mo(b, Oo) : Oo),
            (S1 = x0("scroller-start", a, I, O, h3, 0)),
            (V = x0("scroller-end", a, I, O, h3, 0, S1)),
            (p6 = S1["offset" + O.op.d2]);
          var v6 = I1(fn(I, "content") || I);
          (G1 = this.markerStart = x0("start", a, v6, O, h3, p6, 0, w)),
            (Qt = this.markerEnd = x0("end", a, v6, O, h3, p6, 0, w)),
            w && (ur = Z.quickSetter([G1, Qt], O.a, s1)),
            !A &&
            !(f3.length && fn(I, "fixedMarkers") === !0) &&
            (xC(D ? Pe : I),
              Z.set([S1, V], { force3D: !0 }),
              (Jt = Z.quickSetter(S1, O.a, s1)),
              (z3 = Z.quickSetter(V, O.a, s1)));
        }
        if (w) {
          var te = w.vars.onUpdate,
            q = w.vars.onUpdateParams;
          w.eventCallback("onUpdate", function () {
            S.update(0, 0, 1), te && te.apply(w, q || []);
          });
        }
        (S.previous = function () {
          return ie[ie.indexOf(S) - 1];
        }),
          (S.next = function () {
            return ie[ie.indexOf(S) + 1];
          }),
          (S.revert = function (B, X) {
            if (!X) return S.kill(!0);
            var K = B !== !1 || !S.enabled,
              ne = p1;
            K !== S.isReverted &&
              (K &&
                ((Rt = Math.max(re(), S.scroll.rec || 0)),
                  (pt = S.progress),
                  (xn = i && i.progress())),
                G1 &&
                [G1, Qt, S1, V].forEach(function (Ge) {
                  return (Ge.style.display = K ? "none" : "block");
                }),
                K && ((p1 = S), S.update(K)),
                h &&
                (!x || !S.isActive) &&
                (K ? MC(h, x1, A3) : Q8(h, x1, jt(h), E1)),
                K || S.update(K),
                (p1 = ne),
                (S.isReverted = K));
          }),
          (S.refresh = function (B, X) {
            if (!((p1 || !S.enabled) && !X)) {
              if (h && B && Mt) {
                e1(t, "scrollEnd", Vu);
                return;
              }
              !nt && F && F(S),
                (p1 = S),
                (Ce = b1()),
                ve.tween && (ve.tween.kill(), (ve.tween = 0)),
                oe && oe.pause(),
                m && i && i.revert({ kill: !1 }).invalidate(),
                S.isReverted || S.revert(!0, !0),
                (S._subPinOffset = !1);
              for (
                var K = Y(),
                ne = ee(),
                Ge = w ? w.duration() : Q3(I, O),
                de = we <= 0.01,
                ke = 0,
                o1 = 0,
                qe = r.end,
                Fe = r.endTrigger || d,
                Ee =
                  r.start || (r.start === 0 || !d ? 0 : h ? "0 0" : "0 100%"),
                K1 = (S.pinnedContainer =
                  r.pinnedContainer && I1(r.pinnedContainer)),
                T1 = (d && Math.max(0, ie.indexOf(S))) || 0,
                Ke = T1,
                Ae,
                d1,
                cr,
                kn,
                He,
                Qe,
                e3,
                a8,
                Z7,
                y6,
                t3;
                Ke--;

              )
                (Qe = ie[Ke]),
                  Qe.end || Qe.refresh(0, 1) || (p1 = S),
                  (e3 = Qe.pin),
                  e3 &&
                  (e3 === d || e3 === h || e3 === K1) &&
                  !Qe.isReverted &&
                  (y6 || (y6 = []), y6.unshift(Qe), Qe.revert(!0, !0)),
                  Qe !== ie[Ke] && (T1--, Ke--);
              for (
                N1(Ee) && (Ee = Ee(S)),
                le =
                No(Ee, d, K, O, re(), G1, S1, S, ne, N, A, Ge, w) ||
                (h ? -0.001 : 0),
                N1(qe) && (qe = qe(S)),
                zt(qe) &&
                !qe.indexOf("+=") &&
                (~qe.indexOf(" ")
                  ? (qe = (zt(Ee) ? Ee.split(" ")[0] : "") + qe)
                  : ((ke = U0(qe.substr(2), K)),
                    (qe = zt(Ee)
                      ? Ee
                      : (w
                        ? Z.utils.mapRange(
                          0,
                          w.duration(),
                          w.scrollTrigger.start,
                          w.scrollTrigger.end,
                          le
                        )
                        : le) + ke),
                    (Fe = d))),
                Xe =
                Math.max(
                  le,
                  No(
                    qe || (Fe ? "100% 0" : Ge),
                    Fe,
                    K,
                    O,
                    re() + ke,
                    Qt,
                    V,
                    S,
                    ne,
                    N,
                    A,
                    Ge,
                    w
                  )
                ) || -0.001,
                we = Xe - le || ((le -= 0.01) && 0.001),
                ke = 0,
                Ke = T1;
                Ke--;

              )
                (Qe = ie[Ke]),
                  (e3 = Qe.pin),
                  e3 &&
                  Qe.start - Qe._pinPush <= le &&
                  !w &&
                  Qe.end > 0 &&
                  ((Ae = Qe.end - Qe.start),
                    ((e3 === d && Qe.start - Qe._pinPush < le) || e3 === K1) &&
                    !j6(Ee) &&
                    (ke += Ae * (1 - Qe.progress)),
                    e3 === h && (o1 += Ae));
              if (
                ((le += ke),
                  (Xe += ke),
                  de && (pt = Z.utils.clamp(0, 1, Z.utils.normalize(le, Xe, Rt))),
                  (S._pinPush = o1),
                  G1 &&
                  ke &&
                  ((Ae = {}),
                    (Ae[O.a] = "+=" + ke),
                    K1 && (Ae[O.p] = "-=" + re()),
                    Z.set([G1, Qt], Ae)),
                  h)
              )
                (Ae = jt(h)),
                  (kn = O === Ze),
                  (cr = re()),
                  (q1 = parseFloat(I3(O.a)) + o1),
                  !Ge &&
                  Xe > 1 &&
                  ((t3 = (D ? Se.scrollingElement || Wt : I).style),
                    (t3 = {
                      style: t3,
                      value: t3["overflow" + O.a.toUpperCase()],
                    }),
                    (t3.style["overflow" + O.a.toUpperCase()] = "scroll")),
                  Q8(h, x1, Ae),
                  (lr = k0(h)),
                  (d1 = w3(h, !0)),
                  (a8 = A && mn(I, kn ? P1 : Ze)()),
                  v &&
                  ((E1 = [v + O.os2, we + o1 + s1]),
                    (E1.t = x1),
                    (Ke = v === De ? g4(h, O) + we + o1 : 0),
                    Ke && E1.push(O.d, Ke + s1),
                    Zr(E1),
                    K1 &&
                    ie.forEach(function (_6) {
                      _6.pin === K1 &&
                        _6.vars.pinSpacing !== !1 &&
                        (_6._subPinOffset = !0);
                    }),
                    A && re(Rt)),
                  A &&
                  ((He = {
                    top: d1.top + (kn ? cr - le : a8) + s1,
                    left: d1.left + (kn ? a8 : cr - le) + s1,
                    boxSizing: "border-box",
                    position: "fixed",
                  }),
                    (He[Un] = He["max" + l6] = Math.ceil(d1.width) + s1),
                    (He[Yn] = He["max" + B7] = Math.ceil(d1.height) + s1),
                    (He[St] =
                      He[St + a2] =
                      He[St + s2] =
                      He[St + u2] =
                      He[St + l2] =
                      "0"),
                    (He[De] = Ae[De]),
                    (He[De + a2] = Ae[De + a2]),
                    (He[De + s2] = Ae[De + s2]),
                    (He[De + u2] = Ae[De + u2]),
                    (He[De + l2] = Ae[De + l2]),
                    (D3 = bC(A3, He, x)),
                    nt && re(0)),
                  i
                    ? ((Z7 = i._initted),
                      $8(1),
                      i.render(i.duration(), !0, !0),
                      (k1 = I3(O.a) - q1 + we + o1),
                      (g6 = Math.abs(we - k1) > 1),
                      A && g6 && D3.splice(D3.length - 2, 2),
                      i.render(0, !0, !0),
                      Z7 || i.invalidate(!0),
                      i.parent || i.totalTime(i.totalTime()),
                      $8(0))
                    : (k1 = we),
                  t3 &&
                  (t3.value
                    ? (t3.style["overflow" + O.a.toUpperCase()] = t3.value)
                    : t3.style.removeProperty("overflow-" + O.a));
              else if (d && re() && !w)
                for (d1 = d.parentNode; d1 && d1 !== Pe;)
                  d1._pinOffset &&
                    ((le -= d1._pinOffset), (Xe -= d1._pinOffset)),
                    (d1 = d1.parentNode);
              y6 &&
                y6.forEach(function (_6) {
                  return _6.revert(!1, !0);
                }),
                (S.start = le),
                (S.end = Xe),
                (X1 = Ct = nt ? Rt : re()),
                !w && !nt && (X1 < Rt && re(Rt), (S.scroll.rec = 0)),
                S.revert(!1, !0),
                Vt &&
                ((Q = -1), S.isActive && re(le + we * pt), Vt.restart(!0)),
                (p1 = 0),
                i &&
                W &&
                (i._initted || xn) &&
                i.progress() !== xn &&
                i.progress(xn, !0).render(i.time(), !0, !0),
                (de || pt !== S.progress || w) &&
                (i &&
                  !W &&
                  i.totalProgress(
                    w && le < -0.001 && !pt
                      ? Z.utils.normalize(le, Xe, 0)
                      : pt,
                    !0
                  ),
                  (S.progress = (X1 - le) / we === pt ? 0 : pt)),
                h && v && (x1._pinOffset = Math.round(S.progress * k1)),
                oe && oe.invalidate(),
                c && !nt && c(S);
            }
          }),
          (S.getVelocity = function () {
            return ((re() - Ct) / (b1() - W0)) * 1e3 || 0;
          }),
          (S.endAnimation = function () {
            N6(S.callbackAnimation),
              i &&
              (oe
                ? oe.progress(1)
                : i.paused()
                  ? W || N6(i, S.direction < 0, 1)
                  : N6(i, i.reversed()));
          }),
          (S.labelToScroll = function (B) {
            return (
              (i &&
                i.labels &&
                (le || S.refresh() || le) +
                (i.labels[B] / i.duration()) * we) ||
              0
            );
          }),
          (S.getTrailing = function (B) {
            var X = ie.indexOf(S),
              K = S.direction > 0 ? ie.slice(0, X).reverse() : ie.slice(X + 1);
            return (
              zt(B)
                ? K.filter(function (ne) {
                  return ne.vars.preventOverlaps === B;
                })
                : K
            ).filter(function (ne) {
              return S.direction > 0 ? ne.end <= le : ne.start >= Xe;
            });
          }),
          (S.update = function (B, X, K) {
            if (!(w && !K && !B)) {
              var ne = nt === !0 ? Rt : S.scroll(),
                Ge = B ? 0 : (ne - le) / we,
                de = Ge < 0 ? 0 : Ge > 1 ? 1 : Ge || 0,
                ke = S.progress,
                o1,
                qe,
                Fe,
                Ee,
                K1,
                T1,
                Ke,
                Ae;
              if (
                (X &&
                  ((Ct = X1),
                    (X1 = w ? re() : ne),
                    y && ((Sn = wn), (wn = i && !W ? i.totalProgress() : de))),
                  k &&
                  !de &&
                  h &&
                  !p1 &&
                  !v0 &&
                  Mt &&
                  le < ne + ((ne - Ct) / (b1() - W0)) * k &&
                  (de = 1e-4),
                  de !== ke && S.enabled)
              ) {
                if (
                  ((o1 = S.isActive = !!de && de < 1),
                    (qe = !!ke && ke < 1),
                    (T1 = o1 !== qe),
                    (K1 = T1 || !!de != !!ke),
                    (S.direction = de > ke ? 1 : -1),
                    (S.progress = de),
                    K1 &&
                    !p1 &&
                    ((Fe = de && !ke ? 0 : de === 1 ? 1 : ke === 1 ? 2 : 3),
                      W &&
                      ((Ee =
                        (!T1 && E[Fe + 1] !== "none" && E[Fe + 1]) || E[Fe]),
                        (Ae =
                          i &&
                          (Ee === "complete" || Ee === "reset" || Ee in i)))),
                    M &&
                    (T1 || Ae) &&
                    (Ae || f || !i) &&
                    (N1(M)
                      ? M(S)
                      : S.getTrailing(M).forEach(function (He) {
                        return He.endAnimation();
                      })),
                    W ||
                    (oe && !p1 && !v0
                      ? (oe._dp._time - oe._start !== oe._time &&
                        oe.render(oe._dp._time - oe._start),
                        oe.resetTo
                          ? oe.resetTo("totalProgress", de, i._tTime / i._tDur)
                          : ((oe.vars.totalProgress = de),
                            oe.invalidate().restart()))
                      : i && i.totalProgress(de, !!p1)),
                    h)
                ) {
                  if ((B && v && (x1.style[v + O.os2] = m6), !A))
                    Re(W6(q1 + k1 * de));
                  else if (K1) {
                    if (
                      ((Ke =
                        !B && de > ke && Xe + 1 > ne && ne + 1 >= Q3(I, O)),
                        x)
                    )
                      if (!B && (o1 || Ke)) {
                        var d1 = w3(h, !0),
                          cr = ne - le;
                        Vo(
                          h,
                          Pe,
                          d1.top + (O === Ze ? cr : 0) + s1,
                          d1.left + (O === Ze ? 0 : cr) + s1
                        );
                      } else Vo(h, x1);
                    Zr(o1 || Ke ? D3 : lr),
                      (g6 && de < 1 && o1) ||
                      Re(q1 + (de === 1 && !Ke ? k1 : 0));
                  }
                }
                y && !ve.tween && !p1 && !v0 && Vt.restart(!0),
                  l &&
                  (T1 || (_ && de && (de < 1 || !X8))) &&
                  Pi(l.targets).forEach(function (He) {
                    return He.classList[o1 || _ ? "add" : "remove"](
                      l.className
                    );
                  }),
                  s && !W && !B && s(S),
                  K1 && !p1
                    ? (W &&
                      (Ae &&
                        (Ee === "complete"
                          ? i.pause().totalProgress(1)
                          : Ee === "reset"
                            ? i.restart(!0).pause()
                            : Ee === "restart"
                              ? i.restart(!0)
                              : i[Ee]()),
                        s && s(S)),
                      (T1 || !X8) &&
                      (u && T1 && q8(S, u),
                        H[Fe] && q8(S, H[Fe]),
                        _ && (de === 1 ? S.kill(!1, 1) : (H[Fe] = 0)),
                        T1 || ((Fe = de === 1 ? 1 : 3), H[Fe] && q8(S, H[Fe]))),
                      L &&
                      !o1 &&
                      Math.abs(S.getVelocity()) > (j6(L) ? L : 2500) &&
                      (N6(S.callbackAnimation),
                        oe
                          ? oe.progress(1)
                          : N6(i, Ee === "reverse" ? 1 : !de, 1)))
                    : W && s && !p1 && s(S);
              }
              if (z3) {
                var kn = w ? (ne / w.duration()) * (w._caScrollDist || 0) : ne;
                Jt(kn + (S1._isFlipped ? 1 : 0)), z3(kn);
              }
              ur && ur((-ne / w.duration()) * (w._caScrollDist || 0));
            }
          }),
          (S.enable = function (B, X) {
            S.enabled ||
              ((S.enabled = !0),
                e1(I, "resize", U6),
                e1(D ? Se : I, "scroll", Cr),
                F && e1(t, "refreshInit", F),
                B !== !1 && ((S.progress = pt = 0), (X1 = Ct = Q = re())),
                X !== !1 && S.refresh());
          }),
          (S.getTween = function (B) {
            return B && ve ? ve.tween : oe;
          }),
          (S.setPositions = function (B, X) {
            h &&
              ((q1 += B - le),
                (k1 += X - B - we),
                v === De && S.adjustPinSpacing(X - B - we)),
              (S.start = le = B),
              (S.end = Xe = X),
              (we = X - B),
              S.update();
          }),
          (S.adjustPinSpacing = function (B) {
            if (E1 && B) {
              var X = E1.indexOf(O.d) + 1;
              (E1[X] = parseFloat(E1[X]) + B + s1),
                (E1[1] = parseFloat(E1[1]) + B + s1),
                Zr(E1);
            }
          }),
          (S.disable = function (B, X) {
            if (
              S.enabled &&
              (B !== !1 && S.revert(!0, !0),
                (S.enabled = S.isActive = !1),
                X || (oe && oe.pause()),
                (Rt = 0),
                i1 && (i1.uncache = 1),
                F && Je(t, "refreshInit", F),
                Vt && (Vt.pause(), ve.tween && ve.tween.kill() && (ve.tween = 0)),
                !D)
            ) {
              for (var K = ie.length; K--;)
                if (ie[K].scroller === I && ie[K] !== S) return;
              Je(I, "resize", U6), Je(I, "scroll", Cr);
            }
          }),
          (S.kill = function (B, X) {
            S.disable(B, X), oe && !X && oe.kill(), a && delete v4[a];
            var K = ie.indexOf(S);
            K >= 0 && ie.splice(K, 1),
              K === O1 && Z0 > 0 && O1--,
              (K = 0),
              ie.forEach(function (ne) {
                return ne.scroller === S.scroller && (K = 1);
              }),
              K || nt || (S.scroll.rec = 0),
              i &&
              ((i.scrollTrigger = null),
                B && i.revert({ kill: !1 }),
                X || i.kill()),
              G1 &&
              [G1, Qt, S1, V].forEach(function (ne) {
                return ne.parentNode && ne.parentNode.removeChild(ne);
              }),
              c2 === S && (c2 = 0),
              h &&
              (i1 && (i1.uncache = 1),
                (K = 0),
                ie.forEach(function (ne) {
                  return ne.pin === h && K++;
                }),
                K || (i1.spacer = 0)),
              r.onKill && r.onKill(S);
          }),
          S.enable(!1, !1),
          p3 && p3(S),
          !i || !i.add || we
            ? S.refresh()
            : Z.delayedCall(0.01, function () {
              return le || Xe || S.refresh();
            }) &&
            (we = 0.01) &&
            (le = Xe = 0),
          h && LC();
      }),
      (t.register = function (r) {
        return (
          pr ||
          ((Z = r || Mu()), Lu() && window.document && t.enable(), (pr = B6)),
          pr
        );
      }),
      (t.defaults = function (r) {
        if (r) for (var i in r) S0[i] = r[i];
        return S0;
      }),
      (t.disable = function (r, i) {
        (B6 = 0),
          ie.forEach(function (s) {
            return s[i ? "kill" : "disable"](r);
          }),
          Je(ae, "wheel", Cr),
          Je(Se, "scroll", Cr),
          clearInterval(g0),
          Je(Se, "touchcancel", i3),
          Je(Pe, "touchstart", i3),
          _0(Je, Se, "pointerdown,touchstart,mousedown", To),
          _0(Je, Se, "pointerup,touchend,mouseup", Lo),
          bi.kill(),
          y0(Je);
        for (var o = 0; o < se.length; o += 3)
          w0(Je, se[o], se[o + 1]), w0(Je, se[o], se[o + 2]);
      }),
      (t.enable = function () {
        if (
          ((ae = window),
            (Se = document),
            (Wt = Se.documentElement),
            (Pe = Se.body),
            Z &&
            ((Pi = Z.utils.toArray),
              (Vr = Z.utils.clamp),
              (m4 = Z.core.context || i3),
              ($8 = Z.core.suppressOverwrites || i3),
              (z7 = ae.history.scrollRestoration || "auto"),
              (y4 = ae.pageYOffset),
              Z.core.globals("ScrollTrigger", t),
              Pe))
        ) {
          (B6 = 1),
            _C(),
            je.register(Z),
            (t.isTouch = je.isTouch),
            (H3 =
              je.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            e1(ae, "wheel", Cr),
            (wu = [ae, Se, Wt, Pe]),
            Z.matchMedia
              ? ((t.matchMedia = function (a) {
                var u = Z.matchMedia(),
                  c;
                for (c in a) u.add(c, a[c]);
                return u;
              }),
                Z.addEventListener("matchMediaInit", function () {
                  return j7();
                }),
                Z.addEventListener("matchMediaRevert", function () {
                  return Ru();
                }),
                Z.addEventListener("matchMedia", function () {
                  In(0, 1), nr("matchMedia");
                }),
                Z.matchMedia("(orientation: portrait)", function () {
                  return K8(), K8;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            K8(),
            e1(Se, "scroll", Cr);
          var r = Pe.style,
            i = r.borderTopStyle,
            o = Z.core.Animation.prototype,
            s,
            l;
          for (
            o.revert ||
            Object.defineProperty(o, "revert", {
              value: function () {
                return this.time(-0.01, !0);
              },
            }),
            r.borderTopStyle = "solid",
            s = w3(Pe),
            Ze.m = Math.round(s.top + Ze.sc()) || 0,
            P1.m = Math.round(s.left + P1.sc()) || 0,
            i ? (r.borderTopStyle = i) : r.removeProperty("border-top-style"),
            g0 = setInterval(bo, 250),
            Z.delayedCall(0.5, function () {
              return (v0 = 0);
            }),
            e1(Se, "touchcancel", i3),
            e1(Pe, "touchstart", i3),
            _0(e1, Se, "pointerdown,touchstart,mousedown", To),
            _0(e1, Se, "pointerup,touchend,mouseup", Lo),
            p4 = Z.utils.checkPrefix("transform"),
            $0.push(p4),
            pr = b1(),
            bi = Z.delayedCall(0.2, In).pause(),
            mr = [
              Se,
              "visibilitychange",
              function () {
                var a = ae.innerWidth,
                  u = ae.innerHeight;
                Se.hidden
                  ? ((ko = a), (Eo = u))
                  : (ko !== a || Eo !== u) && U6();
              },
              Se,
              "DOMContentLoaded",
              In,
              ae,
              "load",
              In,
              ae,
              "resize",
              U6,
            ],
            y0(e1),
            ie.forEach(function (a) {
              return a.enable(0, 1);
            }),
            l = 0;
            l < se.length;
            l += 3
          )
            w0(Je, se[l], se[l + 1]), w0(Je, se[l], se[l + 2]);
        }
      }),
      (t.config = function (r) {
        "limitCallbacks" in r && (X8 = !!r.limitCallbacks);
        var i = r.syncInterval;
        (i && clearInterval(g0)) || ((g0 = i) && setInterval(bo, i)),
          "ignoreMobileResize" in r &&
          (ku = t.isTouch === 1 && r.ignoreMobileResize),
          "autoRefreshEvents" in r &&
          (y0(Je) || y0(e1, r.autoRefreshEvents || "none"),
            (xu = (r.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (t.scrollerProxy = function (r, i) {
        var o = I1(r),
          s = se.indexOf(o),
          l = er(o);
        ~s && se.splice(s, l ? 6 : 2),
          i && (l ? f3.unshift(ae, i, Pe, i, Wt, i) : f3.unshift(o, i));
      }),
      (t.clearMatchMedia = function (r) {
        ie.forEach(function (i) {
          return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
        });
      }),
      (t.isInViewport = function (r, i, o) {
        var s = (zt(r) ? I1(r) : r).getBoundingClientRect(),
          l = s[o ? Un : Yn] * i || 0;
        return o
          ? s.right - l > 0 && s.left + l < ae.innerWidth
          : s.bottom - l > 0 && s.top + l < ae.innerHeight;
      }),
      (t.positionInViewport = function (r, i, o) {
        zt(r) && (r = I1(r));
        var s = r.getBoundingClientRect(),
          l = s[o ? Un : Yn],
          a =
            i == null
              ? l / 2
              : i in Ni
                ? Ni[i] * l
                : ~i.indexOf("%")
                  ? (parseFloat(i) * l) / 100
                  : parseFloat(i) || 0;
        return o ? (s.left + a) / ae.innerWidth : (s.top + a) / ae.innerHeight;
      }),
      (t.killAll = function (r) {
        if (
          (ie.slice(0).forEach(function (o) {
            return o.vars.id !== "ScrollSmoother" && o.kill();
          }),
            r !== !0)
        ) {
          var i = tr.killAll || [];
          (tr = {}),
            i.forEach(function (o) {
              return o();
            });
        }
      }),
      t
    );
  })();
G.version = "3.11.5";
G.saveStyles = function (t) {
  return t
    ? Pi(t).forEach(function (e) {
      if (e && e.style) {
        var n = J1.indexOf(e);
        n >= 0 && J1.splice(n, 5),
          J1.push(
            e,
            e.style.cssText,
            e.getBBox && e.getAttribute("transform"),
            Z.core.getCache(e),
            m4()
          );
      }
    })
    : J1;
};
G.revert = function (t, e) {
  return j7(!t, e);
};
G.create = function (t, e) {
  return new G(t, e);
};
G.refresh = function (t) {
  return t ? U6() : (pr || G.register()) && In(!0);
};
G.update = function (t) {
  return ++se.cache && L3(t === !0 ? 2 : 0);
};
G.clearScrollMemory = Au;
G.maxScroll = function (t, e) {
  return Q3(t, e ? P1 : Ze);
};
G.getScrollFunc = function (t, e) {
  return mn(I1(t), e ? P1 : Ze);
};
G.getById = function (t) {
  return v4[t];
};
G.getAll = function () {
  return ie.filter(function (t) {
    return t.vars.id !== "ScrollSmoother";
  });
};
G.isScrolling = function () {
  return !!Mt;
};
G.snapDirectional = W7;
G.addEventListener = function (t, e) {
  var n = tr[t] || (tr[t] = []);
  ~n.indexOf(e) || n.push(e);
};
G.removeEventListener = function (t, e) {
  var n = tr[t],
    r = n && n.indexOf(e);
  r >= 0 && n.splice(r, 1);
};
G.batch = function (t, e) {
  var n = [],
    r = {},
    i = e.interval || 0.016,
    o = e.batchMax || 1e9,
    s = function (u, c) {
      var f = [],
        d = [],
        h = Z.delayedCall(i, function () {
          c(f, d), (f = []), (d = []);
        }).pause();
      return function (v) {
        f.length || h.restart(!0),
          f.push(v.trigger),
          d.push(v),
          o <= f.length && h.progress(1);
      };
    },
    l;
  for (l in e)
    r[l] =
      l.substr(0, 2) === "on" && N1(e[l]) && l !== "onRefreshInit"
        ? s(l, e[l])
        : e[l];
  return (
    N1(o) &&
    ((o = o()),
      e1(G, "refresh", function () {
        return (o = e.batchMax());
      })),
    Pi(t).forEach(function (a) {
      var u = {};
      for (l in r) u[l] = r[l];
      (u.trigger = a), n.push(G.create(u));
    }),
    n
  );
};
var Ao = function (e, n, r, i) {
  return (
    n > i ? e(i) : n < 0 && e(0),
    r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
  );
},
  J8 = function t(e, n) {
    n === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
        n === !0
          ? "auto"
          : n
            ? "pan-" + n + (je.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Wt && t(Pe, n);
  },
  E0 = { auto: 1, scroll: 1 },
  NC = function (e) {
    var n = e.event,
      r = e.target,
      i = e.axis,
      o = (n.changedTouches ? n.changedTouches[0] : n).target,
      s = o._gsap || Z.core.getCache(o),
      l = b1(),
      a;
    if (!s._isScrollT || l - s._isScrollT > 2e3) {
      for (
        ;
        o &&
        o !== Pe &&
        ((o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth) ||
          !(E0[(a = jt(o)).overflowY] || E0[a.overflowX]));

      )
        o = o.parentNode;
      (s._isScroll =
        o &&
        o !== r &&
        !er(o) &&
        (E0[(a = jt(o)).overflowY] || E0[a.overflowX])),
        (s._isScrollT = l);
    }
    (s._isScroll || i === "x") && (n.stopPropagation(), (n._gsapAllow = !0));
  },
  Iu = function (e, n, r, i) {
    return je.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: n,
      onWheel: (i = i && NC),
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function () {
        return r && e1(Se, je.eventTypes[0], Io, !1, !0);
      },
      onDisable: function () {
        return Je(Se, je.eventTypes[0], Io, !0);
      },
    });
  },
  VC = /(input|label|select|textarea)/i,
  Do,
  Io = function (e) {
    var n = VC.test(e.target.tagName);
    (n || Do) && ((e._gsapAllow = !0), (Do = n));
  },
  RC = function (e) {
    j0(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var n = e,
      r = n.normalizeScrollX,
      i = n.momentum,
      o = n.allowNestedScroll,
      s = n.onRelease,
      l,
      a,
      u = I1(e.target) || Wt,
      c = Z.core.globals().ScrollSmoother,
      f = c && c.get(),
      d =
        H3 &&
        ((e.content && I1(e.content)) ||
          (f && e.content !== !1 && !f.smooth() && f.content())),
      h = mn(u, Ze),
      v = mn(u, P1),
      m = 1,
      k =
        (je.isTouch && ae.visualViewport
          ? ae.visualViewport.scale * ae.visualViewport.width
          : ae.outerWidth) / ae.innerWidth,
      g = 0,
      p = N1(i)
        ? function () {
          return i(l);
        }
        : function () {
          return i || 2.8;
        },
      _,
      y,
      x = Iu(u, e.type, !0, o),
      T = function () {
        return (y = !1);
      },
      w = i3,
      L = i3,
      M = function () {
        (a = Q3(u, Ze)),
          (L = Vr(H3 ? 1 : 0, a)),
          r && (w = Vr(0, Q3(u, P1))),
          (_ = Zn);
      },
      O = function () {
        (d._gsap.y = W6(parseFloat(d._gsap.y) + h.offset) + "px"),
          (d.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(d._gsap.y) +
            ", 0, 1)"),
          (h.offset = h.cacheID = 0);
      },
      W = function () {
        if (y) {
          requestAnimationFrame(T);
          var b = W6(l.deltaY / 2),
            N = L(h.v - b);
          if (d && N !== h.v + h.offset) {
            h.offset = N - h.v;
            var S = W6((parseFloat(d && d._gsap.y) || 0) - h.offset);
            (d.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              S +
              ", 0, 1)"),
              (d._gsap.y = S + "px"),
              (h.cacheID = se.cache),
              L3();
          }
          return !0;
        }
        h.offset && O(), (y = !0);
      },
      I,
      $,
      D,
      A,
      H = function () {
        M(),
          I.isActive() &&
          I.vars.scrollY > a &&
          (h() > a ? I.progress(1) && h(a) : I.resetTo("scrollY", a));
      };
    return (
      d && Z.set(d, { y: "+=0" }),
      (e.ignoreCheck = function (E) {
        return (
          (H3 && E.type === "touchmove" && W()) ||
          (m > 1.05 && E.type !== "touchstart") ||
          l.isGesturing ||
          (E.touches && E.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        y = !1;
        var E = m;
        (m = W6(((ae.visualViewport && ae.visualViewport.scale) || 1) / k)),
          I.pause(),
          E !== m && J8(u, m > 1.01 ? !0 : r ? !1 : "x"),
          ($ = v()),
          (D = h()),
          M(),
          (_ = Zn);
      }),
      (e.onRelease = e.onGestureStart =
        function (E, b) {
          if ((h.offset && O(), !b)) A.restart(!0);
          else {
            se.cache++;
            var N = p(),
              S,
              F;
            r &&
              ((S = v()),
                (F = S + (N * 0.05 * -E.velocityX) / 0.227),
                (N *= Ao(v, S, F, Q3(u, P1))),
                (I.vars.scrollX = w(F))),
              (S = h()),
              (F = S + (N * 0.05 * -E.velocityY) / 0.227),
              (N *= Ao(h, S, F, Q3(u, Ze))),
              (I.vars.scrollY = L(F)),
              I.invalidate().duration(N).play(0.01),
              ((H3 && I.vars.scrollY >= a) || S >= a - 1) &&
              Z.to({}, { onUpdate: H, duration: N });
          }
          s && s(E);
        }),
      (e.onWheel = function () {
        I._ts && I.pause(), b1() - g > 1e3 && ((_ = 0), (g = b1()));
      }),
      (e.onChange = function (E, b, N, S, F) {
        if (
          (Zn !== _ && M(),
            b && r && v(w(S[2] === b ? $ + (E.startX - E.x) : v() + b - S[1])),
            N)
        ) {
          h.offset && O();
          var Y = F[2] === N,
            ee = Y ? D + E.startY - E.y : h() + N - F[1],
            Q = L(ee);
          Y && ee !== Q && (D += Q - ee), h(Q);
        }
        (N || b) && L3();
      }),
      (e.onEnable = function () {
        J8(u, r ? !1 : "x"),
          G.addEventListener("refresh", H),
          e1(ae, "resize", H),
          h.smooth &&
          ((h.target.style.scrollBehavior = "auto"),
            (h.smooth = v.smooth = !1)),
          x.enable();
      }),
      (e.onDisable = function () {
        J8(u, !0),
          Je(ae, "resize", H),
          G.removeEventListener("refresh", H),
          x.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (l = new je(e)),
      (l.iOS = H3),
      H3 && !h() && h(1),
      H3 && Z.ticker.add(i3),
      (A = l._dc),
      (I = Z.to(l, {
        ease: "power4",
        paused: !0,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Du(h, h(), function () {
            return I.pause();
          }),
        },
        onUpdate: L3,
        onComplete: A.vars.onComplete,
      })),
      l
    );
  };
G.sort = function (t) {
  return ie.sort(
    t ||
    function (e, n) {
      return (
        (e.vars.refreshPriority || 0) * -1e6 +
        e.start -
        (n.start + (n.vars.refreshPriority || 0) * -1e6)
      );
    }
  );
};
G.observe = function (t) {
  return new je(t);
};
G.normalizeScroll = function (t) {
  if (typeof t > "u") return Q1;
  if (t === !0 && Q1) return Q1.enable();
  if (t === !1) return Q1 && Q1.kill();
  var e = t instanceof je ? t : RC(t);
  return Q1 && Q1.target === e.target && Q1.kill(), er(e.target) && (Q1 = e), e;
};
G.core = {
  _getVelocityProp: C4,
  _inputObserver: Iu,
  _scrollers: se,
  _proxies: f3,
  bridge: {
    ss: function () {
      Mt || nr("scrollStart"), (Mt = b1());
    },
    ref: function () {
      return p1;
    },
  },
};
Mu() && Z.registerPlugin(G);
var w4 = {},
  AC = {
    get exports() {
      return w4;
    },
    set exports(t) {
      w4 = t;
    },
  };
/*!
 * circletype 2.3.0
 * A JavaScript library that lets you curve type on the web.
 * Copyright © 2014-2018 Peter Hrynkow
 * Licensed MIT
 * https://github.com/peterhry/CircleType#readme
 */ (function (t, e) {
  (function (n, r) {
    t.exports = r();
  })(typeof self < "u" ? self : Zu, function () {
    return (function (n) {
      function r(o) {
        if (i[o]) return i[o].exports;
        var s = (i[o] = { i: o, l: !1, exports: {} });
        return n[o].call(s.exports, s, s.exports, r), (s.l = !0), s.exports;
      }
      var i = {};
      return (
        (r.m = n),
        (r.c = i),
        (r.d = function (o, s, l) {
          r.o(o, s) ||
            Object.defineProperty(o, s, {
              configurable: !1,
              enumerable: !0,
              get: l,
            });
        }),
        (r.n = function (o) {
          var s =
            o && o.__esModule
              ? function () {
                return o.default;
              }
              : function () {
                return o;
              };
          return r.d(s, "a", s), s;
        }),
        (r.o = function (o, s) {
          return Object.prototype.hasOwnProperty.call(o, s);
        }),
        (r.p = ""),
        r((r.s = 29))
      );
    })([
      function (n, r, i) {
        var o = i(24)("wks"),
          s = i(12),
          l = i(1).Symbol,
          a = typeof l == "function";
        (n.exports = function (u) {
          return o[u] || (o[u] = (a && l[u]) || (a ? l : s)("Symbol." + u));
        }).store = o;
      },
      function (n, r) {
        var i = (n.exports =
          typeof window < "u" && window.Math == Math
            ? window
            : typeof self < "u" && self.Math == Math
              ? self
              : Function("return this")());
        typeof __g == "number" && (__g = i);
      },
      function (n, r) {
        var i = (n.exports = { version: "2.5.6" });
        typeof __e == "number" && (__e = i);
      },
      function (n, r, i) {
        var o = i(4),
          s = i(11);
        n.exports = i(6)
          ? function (l, a, u) {
            return o.f(l, a, s(1, u));
          }
          : function (l, a, u) {
            return (l[a] = u), l;
          };
      },
      function (n, r, i) {
        var o = i(5),
          s = i(34),
          l = i(35),
          a = Object.defineProperty;
        r.f = i(6)
          ? Object.defineProperty
          : function (u, c, f) {
            if ((o(u), (c = l(c, !0)), o(f), s))
              try {
                return a(u, c, f);
              } catch { }
            if ("get" in f || "set" in f)
              throw TypeError("Accessors not supported!");
            return "value" in f && (u[c] = f.value), u;
          };
      },
      function (n, r, i) {
        var o = i(10);
        n.exports = function (s) {
          if (!o(s)) throw TypeError(s + " is not an object!");
          return s;
        };
      },
      function (n, r, i) {
        n.exports = !i(17)(function () {
          return (
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              },
            }).a != 7
          );
        });
      },
      function (n, r) {
        var i = {}.hasOwnProperty;
        n.exports = function (o, s) {
          return i.call(o, s);
        };
      },
      function (n, r) {
        var i = Math.ceil,
          o = Math.floor;
        n.exports = function (s) {
          return isNaN((s = +s)) ? 0 : (s > 0 ? o : i)(s);
        };
      },
      function (n, r) {
        n.exports = function (i) {
          if (i == null) throw TypeError("Can't call method on  " + i);
          return i;
        };
      },
      function (n, r) {
        n.exports = function (i) {
          return typeof i == "object" ? i !== null : typeof i == "function";
        };
      },
      function (n, r) {
        n.exports = function (i, o) {
          return {
            enumerable: !(1 & i),
            configurable: !(2 & i),
            writable: !(4 & i),
            value: o,
          };
        };
      },
      function (n, r) {
        var i = 0,
          o = Math.random();
        n.exports = function (s) {
          return "Symbol(".concat(
            s === void 0 ? "" : s,
            ")_",
            (++i + o).toString(36)
          );
        };
      },
      function (n, r) {
        n.exports = {};
      },
      function (n, r, i) {
        var o = i(24)("keys"),
          s = i(12);
        n.exports = function (l) {
          return o[l] || (o[l] = s(l));
        };
      },
      function (n, r) {
        n.exports = !1;
      },
      function (n, r, i) {
        var o = i(1),
          s = i(2),
          l = i(3),
          a = i(19),
          u = i(20),
          c = function (f, d, h) {
            var v,
              m,
              k,
              g,
              p = f & c.F,
              _ = f & c.G,
              y = f & c.S,
              x = f & c.P,
              T = f & c.B,
              w = _ ? o : y ? o[d] || (o[d] = {}) : (o[d] || {}).prototype,
              L = _ ? s : s[d] || (s[d] = {}),
              M = L.prototype || (L.prototype = {});
            _ && (h = d);
            for (v in h)
              (m = !p && w && w[v] !== void 0),
                (k = (m ? w : h)[v]),
                (g =
                  T && m
                    ? u(k, o)
                    : x && typeof k == "function"
                      ? u(Function.call, k)
                      : k),
                w && a(w, v, k, f & c.U),
                L[v] != k && l(L, v, g),
                x && M[v] != k && (M[v] = k);
          };
        (o.core = s),
          (c.F = 1),
          (c.G = 2),
          (c.S = 4),
          (c.P = 8),
          (c.B = 16),
          (c.W = 32),
          (c.U = 64),
          (c.R = 128),
          (n.exports = c);
      },
      function (n, r) {
        n.exports = function (i) {
          try {
            return !!i();
          } catch {
            return !0;
          }
        };
      },
      function (n, r, i) {
        var o = i(10),
          s = i(1).document,
          l = o(s) && o(s.createElement);
        n.exports = function (a) {
          return l ? s.createElement(a) : {};
        };
      },
      function (n, r, i) {
        var o = i(1),
          s = i(3),
          l = i(7),
          a = i(12)("src"),
          u = Function.toString,
          c = ("" + u).split("toString");
        (i(2).inspectSource = function (f) {
          return u.call(f);
        }),
          (n.exports = function (f, d, h, v) {
            var m = typeof h == "function";
            m && (l(h, "name") || s(h, "name", d)),
              f[d] !== h &&
              (m &&
                (l(h, a) || s(h, a, f[d] ? "" + f[d] : c.join(String(d)))),
                f === o
                  ? (f[d] = h)
                  : v
                    ? f[d]
                      ? (f[d] = h)
                      : s(f, d, h)
                    : (delete f[d], s(f, d, h)));
          })(Function.prototype, "toString", function () {
            return (typeof this == "function" && this[a]) || u.call(this);
          });
      },
      function (n, r, i) {
        var o = i(36);
        n.exports = function (s, l, a) {
          if ((o(s), l === void 0)) return s;
          switch (a) {
            case 1:
              return function (u) {
                return s.call(l, u);
              };
            case 2:
              return function (u, c) {
                return s.call(l, u, c);
              };
            case 3:
              return function (u, c, f) {
                return s.call(l, u, c, f);
              };
          }
          return function () {
            return s.apply(l, arguments);
          };
        };
      },
      function (n, r, i) {
        var o = i(42),
          s = i(9);
        n.exports = function (l) {
          return o(s(l));
        };
      },
      function (n, r) {
        var i = {}.toString;
        n.exports = function (o) {
          return i.call(o).slice(8, -1);
        };
      },
      function (n, r, i) {
        var o = i(8),
          s = Math.min;
        n.exports = function (l) {
          return l > 0 ? s(o(l), 9007199254740991) : 0;
        };
      },
      function (n, r, i) {
        var o = i(2),
          s = i(1),
          l = s["__core-js_shared__"] || (s["__core-js_shared__"] = {});
        (n.exports = function (a, u) {
          return l[a] || (l[a] = u !== void 0 ? u : {});
        })("versions", []).push({
          version: o.version,
          mode: i(15) ? "pure" : "global",
          copyright: "© 2018 Denis Pushkarev (zloirock.ru)",
        });
      },
      function (n, r) {
        n.exports =
          "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
            ","
          );
      },
      function (n, r, i) {
        var o = i(4).f,
          s = i(7),
          l = i(0)("toStringTag");
        n.exports = function (a, u, c) {
          a &&
            !s((a = c ? a : a.prototype), l) &&
            o(a, l, { configurable: !0, value: u });
        };
      },
      function (n, r, i) {
        var o = i(9);
        n.exports = function (s) {
          return Object(o(s));
        };
      },
      function (n, r, i) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var o = Math.PI / 180;
        r.default = function (s) {
          return s * o;
        };
      },
      function (n, r, i) {
        i(30);
        var o = i(54),
          s = (function (l) {
            return l && l.__esModule ? l : { default: l };
          })(o);
        n.exports = s.default;
      },
      function (n, r, i) {
        i(31), i(47), (n.exports = i(2).Array.from);
      },
      function (n, r, i) {
        var o = i(32)(!0);
        i(33)(
          String,
          "String",
          function (s) {
            (this._t = String(s)), (this._i = 0);
          },
          function () {
            var s,
              l = this._t,
              a = this._i;
            return a >= l.length
              ? { value: void 0, done: !0 }
              : ((s = o(l, a)), (this._i += s.length), { value: s, done: !1 });
          }
        );
      },
      function (n, r, i) {
        var o = i(8),
          s = i(9);
        n.exports = function (l) {
          return function (a, u) {
            var c,
              f,
              d = String(s(a)),
              h = o(u),
              v = d.length;
            return h < 0 || h >= v
              ? l
                ? ""
                : void 0
              : ((c = d.charCodeAt(h)),
                c < 55296 ||
                  c > 56319 ||
                  h + 1 === v ||
                  (f = d.charCodeAt(h + 1)) < 56320 ||
                  f > 57343
                  ? l
                    ? d.charAt(h)
                    : c
                  : l
                    ? d.slice(h, h + 2)
                    : f - 56320 + ((c - 55296) << 10) + 65536);
          };
        };
      },
      function (n, r, i) {
        var o = i(15),
          s = i(16),
          l = i(19),
          a = i(3),
          u = i(13),
          c = i(37),
          f = i(26),
          d = i(46),
          h = i(0)("iterator"),
          v = !([].keys && "next" in [].keys()),
          m = function () {
            return this;
          };
        n.exports = function (k, g, p, _, y, x, T) {
          c(p, g, _);
          var w,
            L,
            M,
            O = function (N) {
              if (!v && N in D) return D[N];
              switch (N) {
                case "keys":
                case "values":
                  return function () {
                    return new p(this, N);
                  };
              }
              return function () {
                return new p(this, N);
              };
            },
            W = g + " Iterator",
            I = y == "values",
            $ = !1,
            D = k.prototype,
            A = D[h] || D["@@iterator"] || (y && D[y]),
            H = A || O(y),
            E = y ? (I ? O("entries") : H) : void 0,
            b = (g == "Array" && D.entries) || A;
          if (
            (b &&
              (M = d(b.call(new k()))) !== Object.prototype &&
              M.next &&
              (f(M, W, !0), o || typeof M[h] == "function" || a(M, h, m)),
              I &&
              A &&
              A.name !== "values" &&
              (($ = !0),
                (H = function () {
                  return A.call(this);
                })),
              (o && !T) || (!v && !$ && D[h]) || a(D, h, H),
              (u[g] = H),
              (u[W] = m),
              y)
          )
            if (
              ((w = {
                values: I ? H : O("values"),
                keys: x ? H : O("keys"),
                entries: E,
              }),
                T)
            )
              for (L in w) L in D || l(D, L, w[L]);
            else s(s.P + s.F * (v || $), g, w);
          return w;
        };
      },
      function (n, r, i) {
        n.exports =
          !i(6) &&
          !i(17)(function () {
            return (
              Object.defineProperty(i(18)("div"), "a", {
                get: function () {
                  return 7;
                },
              }).a != 7
            );
          });
      },
      function (n, r, i) {
        var o = i(10);
        n.exports = function (s, l) {
          if (!o(s)) return s;
          var a, u;
          if (
            (l &&
              typeof (a = s.toString) == "function" &&
              !o((u = a.call(s)))) ||
            (typeof (a = s.valueOf) == "function" && !o((u = a.call(s)))) ||
            (!l && typeof (a = s.toString) == "function" && !o((u = a.call(s))))
          )
            return u;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function (n, r) {
        n.exports = function (i) {
          if (typeof i != "function")
            throw TypeError(i + " is not a function!");
          return i;
        };
      },
      function (n, r, i) {
        var o = i(38),
          s = i(11),
          l = i(26),
          a = {};
        i(3)(a, i(0)("iterator"), function () {
          return this;
        }),
          (n.exports = function (u, c, f) {
            (u.prototype = o(a, { next: s(1, f) })), l(u, c + " Iterator");
          });
      },
      function (n, r, i) {
        var o = i(5),
          s = i(39),
          l = i(25),
          a = i(14)("IE_PROTO"),
          u = function () { },
          c = function () {
            var f,
              d = i(18)("iframe"),
              h = l.length;
            for (
              d.style.display = "none",
              i(45).appendChild(d),
              d.src = "javascript:",
              f = d.contentWindow.document,
              f.open(),
              f.write("<script>document.F=Object</script>"),
              f.close(),
              c = f.F;
              h--;

            )
              delete c.prototype[l[h]];
            return c();
          };
        n.exports =
          Object.create ||
          function (f, d) {
            var h;
            return (
              f !== null
                ? ((u.prototype = o(f)),
                  (h = new u()),
                  (u.prototype = null),
                  (h[a] = f))
                : (h = c()),
              d === void 0 ? h : s(h, d)
            );
          };
      },
      function (n, r, i) {
        var o = i(4),
          s = i(5),
          l = i(40);
        n.exports = i(6)
          ? Object.defineProperties
          : function (a, u) {
            s(a);
            for (var c, f = l(u), d = f.length, h = 0; d > h;)
              o.f(a, (c = f[h++]), u[c]);
            return a;
          };
      },
      function (n, r, i) {
        var o = i(41),
          s = i(25);
        n.exports =
          Object.keys ||
          function (l) {
            return o(l, s);
          };
      },
      function (n, r, i) {
        var o = i(7),
          s = i(21),
          l = i(43)(!1),
          a = i(14)("IE_PROTO");
        n.exports = function (u, c) {
          var f,
            d = s(u),
            h = 0,
            v = [];
          for (f in d) f != a && o(d, f) && v.push(f);
          for (; c.length > h;) o(d, (f = c[h++])) && (~l(v, f) || v.push(f));
          return v;
        };
      },
      function (n, r, i) {
        var o = i(22);
        n.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (s) {
            return o(s) == "String" ? s.split("") : Object(s);
          };
      },
      function (n, r, i) {
        var o = i(21),
          s = i(23),
          l = i(44);
        n.exports = function (a) {
          return function (u, c, f) {
            var d,
              h = o(u),
              v = s(h.length),
              m = l(f, v);
            if (a && c != c) {
              for (; v > m;) if ((d = h[m++]) != d) return !0;
            } else
              for (; v > m; m++)
                if ((a || m in h) && h[m] === c) return a || m || 0;
            return !a && -1;
          };
        };
      },
      function (n, r, i) {
        var o = i(8),
          s = Math.max,
          l = Math.min;
        n.exports = function (a, u) {
          return (a = o(a)), a < 0 ? s(a + u, 0) : l(a, u);
        };
      },
      function (n, r, i) {
        var o = i(1).document;
        n.exports = o && o.documentElement;
      },
      function (n, r, i) {
        var o = i(7),
          s = i(27),
          l = i(14)("IE_PROTO"),
          a = Object.prototype;
        n.exports =
          Object.getPrototypeOf ||
          function (u) {
            return (
              (u = s(u)),
              o(u, l)
                ? u[l]
                : typeof u.constructor == "function" &&
                  u instanceof u.constructor
                  ? u.constructor.prototype
                  : u instanceof Object
                    ? a
                    : null
            );
          };
      },
      function (n, r, i) {
        var o = i(20),
          s = i(16),
          l = i(27),
          a = i(48),
          u = i(49),
          c = i(23),
          f = i(50),
          d = i(51);
        s(
          s.S +
          s.F *
          !i(53)(function (h) {
            Array.from(h);
          }),
          "Array",
          {
            from: function (h) {
              var v,
                m,
                k,
                g,
                p = l(h),
                _ = typeof this == "function" ? this : Array,
                y = arguments.length,
                x = y > 1 ? arguments[1] : void 0,
                T = x !== void 0,
                w = 0,
                L = d(p);
              if (
                (T && (x = o(x, y > 2 ? arguments[2] : void 0, 2)),
                  L == null || (_ == Array && u(L)))
              )
                for (v = c(p.length), m = new _(v); v > w; w++)
                  f(m, w, T ? x(p[w], w) : p[w]);
              else
                for (g = L.call(p), m = new _(); !(k = g.next()).done; w++)
                  f(m, w, T ? a(g, x, [k.value, w], !0) : k.value);
              return (m.length = w), m;
            },
          }
        );
      },
      function (n, r, i) {
        var o = i(5);
        n.exports = function (s, l, a, u) {
          try {
            return u ? l(o(a)[0], a[1]) : l(a);
          } catch (f) {
            var c = s.return;
            throw (c !== void 0 && o(c.call(s)), f);
          }
        };
      },
      function (n, r, i) {
        var o = i(13),
          s = i(0)("iterator"),
          l = Array.prototype;
        n.exports = function (a) {
          return a !== void 0 && (o.Array === a || l[s] === a);
        };
      },
      function (n, r, i) {
        var o = i(4),
          s = i(11);
        n.exports = function (l, a, u) {
          a in l ? o.f(l, a, s(0, u)) : (l[a] = u);
        };
      },
      function (n, r, i) {
        var o = i(52),
          s = i(0)("iterator"),
          l = i(13);
        n.exports = i(2).getIteratorMethod = function (a) {
          if (a != null) return a[s] || a["@@iterator"] || l[o(a)];
        };
      },
      function (n, r, i) {
        var o = i(22),
          s = i(0)("toStringTag"),
          l =
            o(
              (function () {
                return arguments;
              })()
            ) == "Arguments",
          a = function (u, c) {
            try {
              return u[c];
            } catch { }
          };
        n.exports = function (u) {
          var c, f, d;
          return u === void 0
            ? "Undefined"
            : u === null
              ? "Null"
              : typeof (f = a((c = Object(u)), s)) == "string"
                ? f
                : l
                  ? o(c)
                  : (d = o(c)) == "Object" && typeof c.callee == "function"
                    ? "Arguments"
                    : d;
        };
      },
      function (n, r, i) {
        var o = i(0)("iterator"),
          s = !1;
        try {
          var l = [7][o]();
          (l.return = function () {
            s = !0;
          }),
            Array.from(l, function () {
              throw 2;
            });
        } catch { }
        n.exports = function (a, u) {
          if (!u && !s) return !1;
          var c = !1;
          try {
            var f = [7],
              d = f[o]();
            (d.next = function () {
              return { done: (c = !0) };
            }),
              (f[o] = function () {
                return d;
              }),
              a(f);
          } catch { }
          return c;
        };
      },
      function (n, r, i) {
        function o(T) {
          return T && T.__esModule ? T : { default: T };
        }
        function s(T, w) {
          if (!(T instanceof w))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(r, "__esModule", { value: !0 });
        var l = (function () {
          function T(w, L) {
            for (var M = 0; M < L.length; M++) {
              var O = L[M];
              (O.enumerable = O.enumerable || !1),
                (O.configurable = !0),
                "value" in O && (O.writable = !0),
                Object.defineProperty(w, O.key, O);
            }
          }
          return function (w, L, M) {
            return L && T(w.prototype, L), M && T(w, M), w;
          };
        })(),
          a = i(55),
          u = o(a),
          c = i(56),
          f = o(c),
          d = i(57),
          h = o(d),
          v = i(58),
          m = o(v),
          k = i(59),
          g = o(k),
          p = Math.PI,
          _ = Math.max,
          y = Math.min,
          x = (function () {
            function T(w, L) {
              s(this, T),
                (this.element = w),
                (this.originalHTML = this.element.innerHTML);
              var M = document.createElement("div"),
                O = document.createDocumentFragment();
              M.setAttribute("aria-label", w.innerText),
                (M.style.position = "relative"),
                (this.container = M),
                (this._letters = (0, f.default)(w, L)),
                this._letters.forEach(function (A) {
                  return O.appendChild(A);
                }),
                M.appendChild(O),
                (this.element.innerHTML = ""),
                this.element.appendChild(M);
              var W = window.getComputedStyle(this.element),
                I = W.fontSize,
                $ = W.lineHeight;
              (this._fontSize = parseFloat(I)),
                (this._lineHeight = parseFloat($) || this._fontSize),
                (this._metrics = this._letters.map(u.default));
              var D = this._metrics.reduce(function (A, H) {
                return A + H.width;
              }, 0);
              (this._minRadius = D / p / 2 + this._lineHeight),
                (this._dir = 1),
                (this._forceWidth = !1),
                (this._forceHeight = !0),
                (this._radius = this._minRadius),
                this._invalidate();
            }
            return (
              l(T, [
                {
                  key: "radius",
                  value: function (w) {
                    return w !== void 0
                      ? ((this._radius = _(this._minRadius, w)),
                        this._invalidate(),
                        this)
                      : this._radius;
                  },
                },
                {
                  key: "dir",
                  value: function (w) {
                    return w !== void 0
                      ? ((this._dir = w), this._invalidate(), this)
                      : this._dir;
                  },
                },
                {
                  key: "forceWidth",
                  value: function (w) {
                    return w !== void 0
                      ? ((this._forceWidth = w), this._invalidate(), this)
                      : this._forceWidth;
                  },
                },
                {
                  key: "forceHeight",
                  value: function (w) {
                    return w !== void 0
                      ? ((this._forceHeight = w), this._invalidate(), this)
                      : this._forceHeight;
                  },
                },
                {
                  key: "refresh",
                  value: function () {
                    return this._invalidate();
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    return (this.element.innerHTML = this.originalHTML), this;
                  },
                },
                {
                  key: "_invalidate",
                  value: function () {
                    var w = this;
                    return (
                      cancelAnimationFrame(this._raf),
                      (this._raf = requestAnimationFrame(function () {
                        w._layout();
                      })),
                      this
                    );
                  },
                },
                {
                  key: "_layout",
                  value: function () {
                    var w = this,
                      L = this._radius,
                      M = this._dir,
                      O = M === -1 ? -L + this._lineHeight : L,
                      W = "center " + O / this._fontSize + "em",
                      I = L - this._lineHeight,
                      $ = (0, g.default)(this._metrics, I),
                      D = $.rotations,
                      A = $.θ;
                    if (
                      (this._letters.forEach(function (b, N) {
                        var S = b.style,
                          F = (-0.5 * A + D[N]) * M,
                          Y = (-0.5 * w._metrics[N].width) / w._fontSize,
                          ee = "translateX(" + Y + "em) rotate(" + F + "deg)";
                        (S.position = "absolute"),
                          (S.bottom = M === -1 ? 0 : "auto"),
                          (S.left = "50%"),
                          (S.transform = ee),
                          (S.transformOrigin = W),
                          (S.webkitTransform = ee),
                          (S.webkitTransformOrigin = W);
                      }),
                        this._forceHeight)
                    ) {
                      var H =
                        A > 180
                          ? (0, h.default)(L, A)
                          : (0, h.default)(I, A) + this._lineHeight;
                      this.container.style.height = H / this._fontSize + "em";
                    }
                    if (this._forceWidth) {
                      var E = (0, m.default)(L, y(180, A));
                      this.container.style.width = E / this._fontSize + "em";
                    }
                    return this;
                  },
                },
              ]),
              T
            );
          })();
        r.default = x;
      },
      function (n, r, i) {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.default = function (o) {
            var s = o.getBoundingClientRect();
            return {
              height: s.height,
              left: s.left + window.pageXOffset,
              top: s.top + window.pageYOffset,
              width: s.width,
            };
          });
      },
      function (n, r, i) {
        function o(s) {
          if (Array.isArray(s)) {
            for (var l = 0, a = Array(s.length); l < s.length; l++) a[l] = s[l];
            return a;
          }
          return Array.from(s);
        }
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.default = function (s, l) {
            var a = document.createElement("span"),
              u = s.innerText.trim();
            return (l ? l(u) : [].concat(o(u))).map(function (c) {
              var f = a.cloneNode();
              return (
                f.insertAdjacentHTML("afterbegin", c === " " ? "&nbsp;" : c), f
              );
            });
          });
      },
      function (n, r, i) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var o = i(28),
          s = (function (l) {
            return l && l.__esModule ? l : { default: l };
          })(o);
        r.default = function (l, a) {
          return l * (1 - Math.cos((0, s.default)(a / 2)));
        };
      },
      function (n, r, i) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var o = i(28),
          s = (function (l) {
            return l && l.__esModule ? l : { default: l };
          })(o);
        r.default = function (l, a) {
          return 2 * l * Math.sin((0, s.default)(a / 2));
        };
      },
      function (n, r, i) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var o = i(60),
          s = (function (l) {
            return l && l.__esModule ? l : { default: l };
          })(o);
        r.default = function (l, a) {
          return l.reduce(
            function (u, c) {
              var f = c.width,
                d = (0, s.default)(f / a);
              return {
                θ: u.θ + d,
                rotations: u.rotations.concat([u.θ + d / 2]),
              };
            },
            { θ: 0, rotations: [] }
          );
        };
      },
      function (n, r, i) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        var o = 180 / Math.PI;
        r.default = function (s) {
          return s * o;
        };
      },
    ]);
  });
})(AC);
const DC = $o(w4);
j.registerPlugin(G);
const IC = (t, e, n, r) => {
  if (t.current && e.current.length > 0) {
    const i = e.current,
      o = t.current,
      s = o.getBoundingClientRect();
    j.set(o, { perspective: 400 }),
      i.forEach((a) => {
        const u = a.getBoundingClientRect(),
          c = u.left - s.left,
          f = u.top - s.top;
        j.set(a, {
          x: c,
          y: f,
          opacity: 0,
          scale: Math.random() * 1.5 + 0.5,
          rotationX: Math.random() * 360 - 180,
          rotationY: Math.random() * 360 - 180,
          rotationZ: Math.random() * 360 - 180,
          transformOrigin: "50% 50%",
        });
      }),
      j
        .timeline({ defaults: { duration: 2.1, ease: "power4.out" } })
        .to(
          i,
          {
            x: 0,
            y: 0,
            opacity: 1,
            stagger: { amount: 0.4, grid: "auto", from: "random" },
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scale: 1,
          },
          3.5
        );
  }
  if (n.current && r.current.length > 0) {
    const i = r.current,
      o = n.current,
      s = o.getBoundingClientRect();
    j.set(o, { perspective: 100 }),
      i.forEach((l) => {
        const a = l.getBoundingClientRect(),
          u = a.left - s.left,
          c = a.top - s.top;
        j.set(l, {
          x: u,
          y: c,
          opacity: 0,
          scale: Math.random() * 1.5 + 0.5,
          rotationX: Math.random() * 360 - 180,
          rotationY: Math.random() * 360 - 180,
          rotationZ: Math.random() * 360 - 180,
          transformOrigin: "50% 50%",
        });
      }),
      j
        .timeline({ defaults: { duration: 2.5, ease: "power4.out" } })
        .to(
          i,
          {
            x: 0,
            y: 0,
            opacity: 1,
            stagger: { amount: 0.4, grid: "auto", from: "random" },
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scale: 1,
          },
          3.5
        );
  }
},
  zC = (t, e, n, r) => {
    const i = j.timeline({
      scrollTrigger: {
        trigger: t.current,
        start: "top top",
        end: "+=3000",
        scrub: !0,
      },
    }),
      o = j.timeline({
        scrollTrigger: {
          trigger: t.current,
          start: "top top",
          end: "+=1000",
          scrub: !0,
        },
      });
    i
      .fromTo(
        e.current,
        { xPercent: 0, duration: 15, ease: "power5.out" },
        { xPercent: -50 },
        0
      )
      .fromTo(n.current, { xPercent: 0 }, { xPercent: 50 }, 0),
      o.fromTo(
        r.current.children,
        { y: 0 },
        { y: -300, zIndex: 9, stagger: 0.01 },
        0
      );
  },
  FC = (t, e, n, r, i) => {
    const o = j.timeline({
      scrollTrigger: {
        trigger: t.current,
        start: "top bottom",
        end: "400%",
        scrub: !0,
      },
    });
    j.set(e.current, { x: "-1vw" }),
      j.set(n.current, { x: "-1vw" }),
      o.fromTo(
        e.current,
        { x: "-1w" },
        { x: "-20vw", duration: 5, ease: "power1.out", delay: 0.1 },
        0
      ),
      o.fromTo(
        n.current,
        { x: "-1w" },
        { x: "-20vw", duration: 5, ease: "power1.out", delay: 0.1 },
        0
      );
  },
  HC = (t, e, n) => {
    const r = j.timeline({
      scrollTrigger: {
        trigger: t.current,
        start: "top 100%",
        end: "bottom  0%",
        scrub: !0,
      },
    }),
      i = e.current,
      o = i.textContent;
    i.textContent = "";
    for (let s = 0; s < o.length; s++) {
      const l = document.createElement("span");
      (l.textContent = o[s]), i.appendChild(l);
    }
    r.fromTo(
      e.current.children,
      { opacity: 1 },
      {
        opacity: 1,
        stagger: 0.5,
        color: "#3f3b37",
        webkitTextStrokeColor: "#3f3b37",
        filter: "none",
      },
      12
    );
  },
  $2 = (t) => {
    const e = t.current,
      r = e.textContent.split(" ").map((i) =>
        i.split("").map((s) => {
          const l = document.createElement("span");
          return (l.textContent = s), l;
        })
      );
    (e.textContent = ""),
      r.forEach((i, o) => {
        if (o > 0) {
          const s = document.createElement("span");
          (s.innerHTML = "&nbsp;"), e.appendChild(s);
        }
        i.forEach((s) => e.appendChild(s));
      }),
      j.set(r, {
        transformOrigin: "50% 50%",
        opacity: 0,
        y: "50%",
        rotationX: -90,
      }),
      G.create({
        trigger: e,
        start: "top 85%",
        onEnter: () => {
          j.to(r, {
            opacity: 1,
            y: "0%",
            rotationX: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
          });
        },
        onLeaveBack: () => {
          j.to(r, {
            opacity: 0,
            y: "50%",
            rotationX: 90,
            duration: 1,
            ease: "power3.out",
          });
        },
        scrub: !0,
      });
  },
  BC = (t) => {
    const e = t.current;
    j.set(e, { opacity: 0 }),
      G.create({
        trigger: e,
        start: "top 95%",
        onEnter: () => {
          j.fromTo(
            e,
            { opacity: 0 },
            { opacity: 1, duration: 0.6, ease: "power3.in" }
          );
        },
        onLeaveBack: () => {
          j.to(e, { opacity: 0, duration: 0.2, ease: "power3.in" });
        },
        scrub: !0,
      });
  },
  WC = (t) => {
    t.current.forEach((n, r) => {
      const i = j.timeline({
        scrollTrigger: {
          trigger: n,
          start: "top 100%",
          end: "150 80%",
          scrub: !0,
        },
      });
      n &&
        i.fromTo(
          n.children,
          { y: "50", opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1 },
          0
        );
    });
  },
  jC = (t, e) => {
    (e.current = Array.from(t)),
      e.current.forEach((n, r) => {
        const i = n.getTotalLength();
        j.set(n, { strokeDasharray: i, strokeDashoffset: i }),
          j
            .timeline({
              scrollTrigger: {
                trigger: n,
                start: "top 60%",
                end: "bottom 55%",
                scrub: !0,
              },
            })
            .to(n, { strokeDashoffset: 0, duration: 1, ease: "none" });
      });
  },
  UC = (t) => {
    let e = j.context(() => {
      (() => {
        const r = t.current.offsetHeight;
        return j.to(t.current, {
          scrollTrigger: {
            trigger: t.current,
            start: "top top",
            end: `+=${r + r / 1.2}`,
            scrub: !0,
            pin: !0,
            pinSpacing: !0,
            onEnter: () => { },
          },
        });
      })();
    });
    return () => {
      G.getAll().forEach((n) => n.kill()), e.revert();
    };
  },
  YC = (t, e, n, r, i, o, s, l, a) => {
    const u = t.current.offsetHeight,
      c = j.timeline({
        scrollTrigger: {
          trigger: t.current,
          start: "top bottom",
          end: `+=${u * 3}`,
          scrub: !0,
        },
      }),
      f = j.timeline({
        scrollTrigger: {
          trigger: t.current,
          start: "top bottom",
          end: `+=${u * 3}`,
          scrub: !0,
        },
      });
    c
      .fromTo(
        e.current,
        { translateX: "0vw", opacity: 1, y: "10vw" },
        { translateX: "105%", opacity: 1, duration: 40, y: "-10vw" },
        0
      )
      .fromTo(
        n.current,
        { translateX: "0vw", opacity: 1 },
        { translateX: "-105%", opacity: 1, duration: 40 },
        0
      )
      .fromTo(
        r.current,
        { translateX: "0vw", opacity: 1, y: 0 },
        { translateX: "105%", opacity: 1, duration: 40 },
        0
      )
      .fromTo(
        i.current,
        { translateX: "0vw", opacity: 1 },
        { translateX: "-105%", opacity: 1, duration: 40, y: 0 },
        0
      )
      .fromTo(
        o.current,
        { translateX: "50%", opacity: 1 },
        { translateX: "-105%", opacity: 1, duration: 40 },
        5
      ),
      f
        .fromTo(
          s.current.children,
          { opacity: 0, y: "40%", scale: 0.2 },
          {
            translateY: "0%",
            opacity: 1,
            duration: 4,
            scale: 1,
            stagger: 1.1,
            y: 0,
          },
          25
        )
        .fromTo(
          l.current.children,
          { opacity: 0, y: "40%", scale: 0.2 },
          {
            translateY: "0%",
            opacity: 1,
            duration: 4,
            scale: 1,
            stagger: 1.1,
            y: 0,
          },
          25
        )
        .fromTo(a.current, { opacity: 0 }, { duration: 10, opacity: 1 }, 40);
  },
  ZC = (t, e, n, r, i, o, s, l, a, u, c) => {
    let f = 0;
    e.forEach((h, v) => {
      v > 1 && (f += h.offsetWidth);
    });
    let d = j.to(e, {
      xPercent: -100 * (e.length - 1),
      ease: "none",
      scrollTrigger: { trigger: t.current, pin: !0, scrub: !0, end: `+=${f}` },
    });
    n.forEach((h) => {
      j.fromTo(
        h,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power4.easeOut",
          stagger: 0.15,
          scrollTrigger: {
            trigger: a.current,
            containerAnimation: d,
            start: "left 70%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }),
      j.fromTo(
        c.current,
        { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },
        {
          duration: 0.5,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%) ",
          scrollTrigger: { trigger: t.current, start: "top top", scrub: !0 },
        }
      ),
      j.set(i.current, { xPercent: "20" }),
      j.set(o.current, { xPercent: "20" }),
      j.set(s.current, { xPercent: "20" }),
      j.set(l.current, { xPercent: "20" }),
      r.forEach((h) => {
        j.fromTo(
          h,
          { y: "100%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 0.5,
            ease: "power4.easeOut",
            stagger: 0.15,
            scrollTrigger: {
              trigger: u.current,
              containerAnimation: d,
              start: "left 70%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }),
      j.to(i.current, {
        xPercent: "-50",
        duration: 3,
        scrollTrigger: {
          trigger: a.current,
          containerAnimation: d,
          start: "left center",
          scrub: !0,
          id: "1",
        },
      }),
      j.to(s.current, {
        xPercent: "-60",
        duration: 4,
        delay: 3,
        scrollTrigger: {
          trigger: a.current,
          containerAnimation: d,
          start: "left center",
          scrub: !0,
          toggleActions: "play reverse play reverse",
          id: "1",
        },
      }),
      j.to(o.current, {
        xPercent: "-50",
        duration: 3,
        scrollTrigger: {
          trigger: u.current,
          containerAnimation: d,
          start: "left center",
          scrub: !0,
          id: "2",
        },
      }),
      j.to(l.current, {
        xPercent: "-60",
        duration: 4,
        delay: 3,
        scrollTrigger: {
          trigger: u.current,
          containerAnimation: d,
          start: "left center",
          scrub: !0,
          toggleActions: "play reverse play reverse",
          id: "2",
        },
      });
  },
  $C = (t, e) => {
    (t.current = Array.from(e)),
      t.current.forEach((n, r) => {
        const i = n.getTotalLength();
        j.set(n, { strokeDasharray: i, strokeDashoffset: i }),
          j
            .timeline({
              scrollTrigger: {
                trigger: n,
                start: "top 60%",
                end: "bottom 55%",
                scrub: !0,
              },
            })
            .to(n, { strokeDashoffset: 0, duration: 1, ease: "none" });
      });
  },
  XC = (t) => {
    j.timeline({
      scrollTrigger: {
        trigger: t.current,
        start: "top 100%",
        end: "bottom 80%",
        scrub: !0,
      },
    }).fromTo(
      t.current.children,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.3 }
    );
  },
  GC = (t, e) => {
    (e.current = Array.from(t)),
      e.current.forEach((n, r) => {
        const i = n.getTotalLength();
        j.set(n, { strokeDasharray: i, strokeDashoffset: i }),
          j
            .timeline({
              scrollTrigger: {
                trigger: n,
                start: "top 60%",
                end: "bottom 55%",
                scrub: !0,
              },
            })
            .to(n, { strokeDashoffset: 0, duration: 1, ease: "none" });
      });
  },
  qC = (t) => {
    let e = j.context(() => {
      (() => {
        const r = t.current.offsetHeight;
        return j.to(t.current, {
          scrollTrigger: {
            trigger: t.current,
            start: "top top",
            end: () => `+=${r}`,
            scrub: !0,
            pin: !0,
            pinSpacing: !0,
            onEnter: () => { },
          },
        });
      })();
    });
    return () => {
      G.getAll().forEach((n) => n.kill()), e.revert();
    };
  },
  KC = (t, e) => {
    (e.current = Array.from(t)),
      e.current.forEach((n, r) => {
        const i = n.getTotalLength();
        j.set(n, { strokeDasharray: i, strokeDashoffset: i }),
          j
            .timeline({
              scrollTrigger: {
                trigger: n,
                start: "bottom 70%",
                end: "bottom -70%",
                scrub: !0,
              },
            })
            .to(n, { strokeDashoffset: 0, duration: 1, ease: "none" });
      });
  },
  QC = (t) => {
    t.current.forEach((n, r) => {
      j
        .timeline({
          scrollTrigger: {
            trigger: n,
            start: "top 100%",
            end: "bottom 80%",
            scrub: !0,
            anticipatePin: 1,
            invalidateOnRefresh: !0,
          },
        })
        .fromTo(n, { y: 100, scale: 0.5 }, { y: 0, scale: 1, opacity: 1 }),
        j.timeline({
          scrollTrigger: {
            trigger: n,
            start: "top 70%",
            end: "bottom 40%",
            scrub: !0,
            onEnter: () => n.classList.add("show"),
            onLeaveBack: () => n.classList.remove("show"),
          },
        });
    });
  },
  JC = (t, e) => {
    (t.current = Array.from(e)),
      t.current.forEach((n, r) => {
        const i = n.getTotalLength();
        j.set(n, { strokeDasharray: i, strokeDashoffset: i }),
          j
            .timeline({
              scrollTrigger: {
                trigger: n,
                start: "top 60%",
                end: "bottom+=55%",
                scrub: !0,
              },
            })
            .to(n, { strokeDashoffset: 0, duration: 1, ease: "none" });
      });
  },
  ep = (t, e) => {
    (t.current = Array.from(e)),
      t.current.forEach((n, r) => {
        const i = n.getTotalLength();
        j.set(n, { strokeDasharray: i, strokeDashoffset: i }),
          j
            .timeline({
              scrollTrigger: {
                trigger: n,
                start: "top 80%",
                end: "bottom+=500 -50%",
                scrub: !0,
              },
            })
            .to(n, { strokeDashoffset: 0, duration: 1, ease: "none" });
      });
  },
  tp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAYAAAD6+a2dAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfnCBwKNxhj1p/IAAAN+ElEQVR42u2deVwUV7bHf6e7EREREIKaqE/HCMYFDQgYGmhReYOfUUdEdKISRXEwcQETGdQYxzXRMEaWJBpB3BCXaDTBeZkEg3ZDow1IBsEFycQo42CCuERcELrP+wMKM5oOrTRUg/39i751761Tpw51695z7ilCK8fb1dvV29XJqd0mzNVO8vXVfYlSvjpwIEJpImX160dn+UfOcnbGN+hJEfb26ECv8io7O7SDD0V17NjQ0QNkc1xVFe7yHlp+8yZG4jJ/cuMGYnGVEkpKWIkJPPn8eUkuPqN9Z87UukqmWESqVNk22TbZNhUVYuvhaSGxBTAUBcsdPF2GDkU3vEEZU6ZAh7uoDAjAHEixbcAAKKGGhlruehSQw4sZVxDA84uL0Q+uSM7I0F2RvCe5sHt3VlxW3MlDBQVi660xTM4A5A5yB7mDjY30FP9Razd7Np3GKnaeNQsbaDKu9+8vtnyGwrG4iYlnzlAqZ3DR1q2It+hmtSMpSUlKUlJVldjyCYhuAD4+Pj4+Pvb20izOqsmKjEQGXkeX+fOxFkXo3bmz2PIZC/4U8/FCZSXseSSvT0ggmYVj9YsJCUpSUiHdvCmWXCIZAJHfLvmPnjGhoeSEuVgcG4t3UU6BTk5iKaLFeRuDcPH6dZZRMXovWaIakZ2t0SQl1R1kbikxWswA/Iu8V3uv7tNHN4TitNu3b4cP+sHRx6elzm/yzEU0lqtUPFs6nTfPmKG6pbqVm37xYnOfttkNQME++Z5/Hj8eMTwN0Skp0MCBptnbN/d5Wy3L4A+Ln3/mE+hIE2bPVi1XLz755v79zXU6SfN0S+SX4n3Da3hsLIZzJBUeOmS+8QayBsdQ06kT1eI6/7B3r1+i90lP7Xvv1R00/ixHaqyOFKxgBctkvbq+MLTrraQk2k1v4OLcuS2nuTbGJZThChGdpa9pq4/P/6T3jH/huz59HDVOpV2/PHKkvLy8vLxcp2vqaZpsUe5u7m7ubhYWHZ+zVEsXHTyI+zSK4seOFVt/bZZw2HPmF19gmizdqkNwcN20srb2abtr4hBAZL25/Qxp7JYt5hvfQiTjBo0YNw6oDbq3a/v2usKnHxqe2gDqxvj336do7KOlM2aIrZdnjuGooI+mTq17R3j33aft5okNQMGvlHuWTpxIO2gM7i1aJLYennWogj6jhTExCg+fjh5fBwU9aXuDDUCYx/MNSTElJyeLfeFm6hF8IFrdvyT3U1L8bP1sPcf27m1ocwPHDiKFVO7g1UelMvoCThc4Y2hWFlTojpj8fJTzv/jIgwctrsiWIgF2CLexQW8spT8OH25sHwcf40w+evy4SpJjmWszYkR9qd6VxUYNQDHJ29ZrblgYfqSByE9JMZqgFsjA76KiVEfVHTR74uON1W9rQZg2N7zM1Y/pRjvBcR6KyNBQJeXEa6akpuqrpncIEJw06EEyDly/3miC3eDNmHztWt2NT0gwWr+tDGH6xgHSKvpy5Upj98//IWes/dvfRo10d3N3s7XVV0+vATR45/LRj9Y895zRBPuYhqP4ypX6Xy3m9DBVKIMy2qeVlRm93ylIQ8cuXR4MsnS04Hnz9NV7zAACCgMKXWOtrTGYi7HRvJLX6llKM7n3woV1Q84vIqDqecwAqm3vxHfYHBEBe5qDfY6OYstvpmlQCBJxxcEBqF1w77vw8EePP2YA5En2fCAsTGzBBYaVDSsbVmZl5TdKftfr1chIxRD5z15OKSmKFfJ1XnErVypYwR4hXbuKLaepw3nIpMO/YQANMXcv4STmDBwotsAhISEhISFSqeVb0uW87quvqAYB+D4uDrYYjd5hYTiGdOxZvhxv1ugkQQUFI1/z+LfHvx0cxJbbVKFo2OHAgAEK9t7vETJkiFD+8AkgBFuaCNeulZdfvjxkCH7EBeT7+uqtWEB+iO/WrWaG5Z8kwcHBYstt8jjQF5Kgh/f5oQEIUbYmgna99mvdTxKDVyrJn8/xTcPrP9s8vM8SIa6+IbzaRCCPdlYdvv/2W17CaSjSaPRWXIpu/I+fftJW0Q/t8g8eFFtuk2censfJwYMVrGB3N0dHmbChgpdiJ9JbMK6+EYSFkrrpy6hRLK9Ze2/jggX0e5TQ3YED+VUM5iWXLmmn0B8snBIT1ZXZNtmVrXeDRosh+A48tTaSdb6+MmEnDcEEYsR/Td7/iqP/hdszB8AysaVrxeTyaYl0wAAZZaIvdXVxgQVOiC3Tr+Hv7+Pj5eXu3li9eztr99CBs2dP9jjZ42SPe/eEct8o36hhQW5uskLO5//of8I92l54RAI1UbJFgYH8Diw4p08f/BUxiGRGNM2WTCoutgzrsPLulK++yhicMfh09J07YuvLULgI/2RvFxcZr0EY0p2daSV2ii3Ur6F7h/+CyNxcrMR6xOt/ybP6RLpb+7kwfT1zRiin97R/1oXn5OgCKY9WWVrqbb9E2k734ZAhCpbP9yz19+eqGiUdX7OGxlA+4q2tG56QozAe0+qV2A54IL07on2/igqFn4/c02PuXKUqW52b9+mnYuutMSgWlynPxUWCHvQWp5pX/HRyzqXqBQswHAU0beNGGkNvI9nautGGgq9kOMvplX37/KLk44e9PGGC2NfTKLaswCZHRwldRA3JbWzElkd09tI6nJg586nb179c0WjIdJmbNtW9vLZvL/Zl6UUFGTxsbCSQ4hUseNxJ8MxS765GCE8EtmzhWEzmd7dvbyhvjIYtbjWD7//v+PFiX44+WAMpu9jYmBdOBPrz23hQWqpVS3pZzO7fXzkvZ6FGExGh8lQvyB0ZFqbtJHld6+zlJezcabS/BPjw339jBdNEkECLE0gwne3KYqGLpwRd+tq1+hI+ZGdnZ+eP+f57lLADavbubaw/noZhlN+zp9jXpQ/ygpZKbt+WcG9YsPr2bbEFEp00bZKUz51rtN4FTGaX8+cbq0ZOtBChdnZiX5Ze/FCLvNu3JSjjDTTNgLGtjSM7Km2n+7C6urF6vIMSccOAIWAf0jnKhH0Tt0iJ169dk9AybMPYCxfElsdMy8LR6MkeJSUSHoFSvlpSIrZAZloWGoQhlFNSIpGMRl/qWlwstkBmWhhPctVpz5yRCOnOGrJemWnb/BUxiNTpkCu9rVuclSVpmPYI6c7MtG12oootCwuVpKRTBdeuPXxLrc9zJ7Z8ZpqZfugrCXt4nxsMQPJ/FEzH09LEls9M86I7JJnHm3fvFn7LhD+OHcvO1mhOnVLMkmd4lhYV4TusoGmDBoktMPx1HuwxeTJWSAGdfn/+nekPgun3ZWVYg8W/LJcUIIu+nTqVmcA6/fNy3S6pU/W6S5eQCuA3N8JJPwYyM8G6gaybNElfLZ6lm4OvKyvFVl8D5zAMm4uLs37K2qB5+fRpoVj2WEVrHoDV27bVeb8/+EBsuZV0oltu3wMHGq3YF33R9/Hi4/KcCM0yA2IFCWRISFRD+jYV1EDzp3EzFuyK1Xg/ORlHseGX5Y/9R7SbZV1xf9CWLQZ7v8yYNEKGUsqQWbVP27r10eOPGUBDaNM4isc3xt+9S5MRzbP0R+Y8a1iMqnKvcm8+fdAH+AiHNmzQl6NY/1r1alnS/SOJiULYtdEk6oVtNO7FF+UZ8gx3N9P1lrUUtassI2QTRo0yesdurEJkeXltEs7KOn/4ob5qMn0HhCTGdTl9o6MJmADs2NFkwWRwxIsymWwvIE09ckQhlTt4BUZGolZ2rda2qEjrq/W16qDVGl0hJoI0S5pV3c3SEoHaORTk78+f8VK2iY8H0I/SjXce/h1l8uxFi9SV6kr1Hf3eXsNTxOyXH/b6+/Hj+AixWOXnJ7IezejjDYQiKDNTOVk9R7N45MjGqhvormSutYd17TuhoUKWa7Gv08wjeKGSU2/cwKTaCMTMmmVoM4P91eoAdcCpgsuXEUCv6AqmTzf7DkwE4T6sp1TEzpypJA1p6IcfDG3+xAELSsqentf9yBF+jifwRiPmDjLzVHAH7s+j165VUvbQ3C2HDz9p+ybuBiNSbPJO94pKTm5yWLWZJ4IT8RYfT01Vuaon5Fq99lp96RM/kZsYssSMORZj2m+MiOAxiECnzz8XWzFtHd7DgZh++DANkgVZtRcyuTz9UNzkmDVhF2+X3OfTe9oFB/NqePNocyZRozOFP0Hkzp13xlQfqk2eNKmpWcIFmmlDMJGQxFjIZdvin3Vr7dS/3AljvGpxzozc0cuX1x003st3s98Qv6lyB6+8ceNoOkLwh23b2trXwIwNH8IKDL91i+x1Azk8PNxgZ9hTYrQvhujjUlHZvStJJSW9dj6f171q/362Jhu2ffllyiMNnejVq7nP32qoX8DR3kTn2vTAwKw+OYPzl55o9i37oj2SFf3l54atGTsWWlznzI8/Rlf8BXe6dxdLnhanglfC7epVXkKDuFNMjCpU3SV3/a5ddQfb4Gfj9CHksq052v6ALHb+fAzmOyiMjGxziSqH4jwvq6jgFXwQpXFx2l4UbLE2MVFdqa5UV4q3M0t0A3iUhylN6zNbhmMcMHOmyUQoGcqbHIfy06c5kQZAnpJiuaFD6T235GRTyyRicgagj4YEh/+V5y4gAAcwCXB1bSyDiNERwqvro2yFYEtJMXrqXk9LO5aq7pK7vrBQbL01RqsxAH005PKpz3olJD/CVnZCj5dewkIKwk5nZ+xFAXp07gwLhOAdO7vH8iIIu6Rr8ClW37yJP8ENZdev42dYs3NJCYAP6IXz54UNFbKXqs+jv0r1zc687nndTSj27wn5fw8zzeM7bxNuAAAAAElFTkSuQmCC",
  np = () => {
    const t = P.useRef(null),
      e = P.useRef(null),
      n = P.useRef([]),
      r = P.useRef([]),
      i = P.useRef(),
      o = P.useRef(),
      s = P.useRef(),
      l = P.useRef(null),
      a = P.useRef(null);
    return (
      P.useEffect(() => {
        IC(t, n, e, r);
      }, [t, e]),
      P.useEffect(() => {
        zC(s, i, o, e);
      }, []),
      P.useEffect(() => {
        const u = l.current,
          c = j.timeline();
        return (
          j.set(a.current, { opacity: 0 }),
          c
            .to(a.current, { opacity: 1 }, 4)
            .to(u, {
              duration: 1.2,
              height: "100%",
              opacity: 0.95,
              yoyo: !0,
              repeat: -1,
              repeatDelay: 0.15,
              ease: "power1.out",
            }),
          () => {
            c.kill();
          }
        );
      }, []),
      R("div", {
        className: "hero-container max-container",
        ref: s,
        children: [
          C("div", {
            className: "headline",
            children: C("div", {
              className: "connect-section",
              children: R("a", {
                className: "connect-link",
                href: "https://linkedin.com/in/adityajadhav2/",
                target: "_blank",
                children: [
                  "Let's Connect",
                  C("img", {
                    className: "linkedin-icon",
                    src: tp,
                    alt: "LinkedIn Icon",
                  }),
                ],
              }),
            }),
          }),
          R("div", {
            className: "hero-content-wrapper",
            children: [
              R("div", {
                className: "text-animation-container heading-font",
                ref: t,
                children: [
                  R("div", {
                    className: "t-row",
                    ref: i,
                    children: [
                      C("span", {
                        ref: (u) => (n.current[0] = u),
                        children: "A",
                      }),
                      C("span", {
                        ref: (u) => (n.current[1] = u),
                        children: "d",
                      }),
                      C("span", {
                        ref: (u) => (n.current[2] = u),
                        children: "i",
                      }),
                      C("span", {
                        ref: (u) => (n.current[3] = u),
                        children: "t",
                      }),
                      C("span", {
                        ref: (u) => (n.current[4] = u),
                        children: "y",
                      }),
                      C("span", {
                        ref: (u) => (n.current[5] = u),
                        children: "a",
                      }),
                    ],
                  }),
                  R("div", {
                    className: "t-row",
                    ref: o,
                    children: [
                      C("span", {
                        ref: (u) => (n.current[6] = u),
                        children: "J",
                      }),
                      C("span", {
                        ref: (u) => (n.current[7] = u),
                        children: "a",
                      }),
                      C("span", {
                        ref: (u) => (n.current[8] = u),
                        children: "d",
                      }),
                      C("span", {
                        ref: (u) => (n.current[9] = u),
                        children: "h",
                      }),
                      C("span", {
                        ref: (u) => (n.current[10] = u),
                        children: "a",
                      }),
                      C("span", {
                        className: "adjust",
                        ref: (u) => (n.current[11] = u),
                        children: "v",
                      }),
                    ],
                  }),
                ],
              }),
              R("div", {
                className: "role",
                ref: e,
                children: [
                  C("span", { ref: (u) => (r.current[0] = u), children: "W" }),
                  C("span", { ref: (u) => (r.current[1] = u), children: "E" }),
                  C("span", { ref: (u) => (r.current[2] = u), children: "b" }),
                  // C("span", { ref: (u) => (r.current[3] = u), children: "n" }),
                  // C("span", { ref: (u) => (r.current[4] = u), children: "t" }),
                  // C("span", { ref: (u) => (r.current[5] = u), children: "e" }),
                  // C("span", { ref: (u) => (r.current[6] = u), children: "n" }),
                  // C("span", { ref: (u) => (r.current[7] = u), children: "d" }),
                  C("span", { children: " " }),
                  C("span", { ref: (u) => (r.current[8] = u), children: "D" }),
                  C("span", { ref: (u) => (r.current[9] = u), children: "e" }),
                  C("span", { ref: (u) => (r.current[10] = u), children: "v" }),
                  C("span", { ref: (u) => (r.current[11] = u), children: "e" }),
                  C("span", { ref: (u) => (r.current[12] = u), children: "l" }),
                  C("span", { ref: (u) => (r.current[13] = u), children: "o" }),
                  C("span", { ref: (u) => (r.current[14] = u), children: "p" }),
                  C("span", { ref: (u) => (r.current[15] = u), children: "e" }),
                  C("span", { ref: (u) => (r.current[16] = u), children: "r" }),
                ],
              }),
            ],
          }),
          C("div", {
            className: "scroll-down",
            ref: a,
            children: R("div", {
              className: "btn btn-scroll",
              children: [
                C("div", {
                  className: "btn-scroll_bar_container",
                  children: C("span", {
                    className: "btn-scroll_bar_content",
                    ref: l,
                  }),
                }),
                C("div", { className: "button", children: "Scroll" }),
              ],
            }),
          }),
        ],
      })
    );
  };
const rp = "./assets/main-6-0ba1a20b.png",
  ip = ({ scrollToTopInstance: t }) => {
    const e = P.useRef(null),
      n = P.useRef(null),
      r = P.useRef(null),
      i = P.useRef(null),
      o = P.useRef(null),
      s = P.useRef(null),
      l = P.useRef(null),
      a = P.useRef(null),
      [u, c] = P.useState(!1);
    P.useEffect(() => {
      FC(i, o, s);
    }, []),
      P.useEffect(() => {
        $2(a);
      }, []),
      P.useEffect(() => {
        BC(e);
      }, []),
      P.useEffect(() => {
        const d = window.matchMedia("(max-width: 767px)").matches;
        c(d);
      }, []);
    const f = (d) => {
      if (t !== null) {
        const h = document.getElementById(d);
        h &&
          t.scrollTo(h, {
            offset: -100,
            duration: 1e3,
            easing: [0.7, 0, 0.3, 1],
          });
      }
    };
    return R("div", {
      className: "about-wrapper",
      ref: n,
      children: [
        R("div", {
          className: "back-heading",
          children: [
            C("hr", {}),
            C("span", { children: "About" }),
            C("span", { children: " " }),
            C("span", { children: " " }),
            C("span", { children: " " }),
          ],
        }),
        R("div", {
          className: "about-profile-img-wrapper",
          children: [
            R("div", {
              className: "intro",
              children: [
                C("p", { className: "firstText", ref: a, children: "Hello," }),
                " ",
                C("span", {
                  ref: e,
                  children: `"I'm Aditya Jadhav, an MERN stack developer with a passion for crafting engaging user experiences. Welcome to my portfolio!"`,
                }),
              ],
            }),
            R("div", {
              className: "content-center",
              children: [
                R("div", {
                  className: "about-profile-img back0",
                  ref: r,
                  children: [
                    C("img", { src: rp, ref: i, alt: "" }),
                    C("div", {
                      className: "about-profile-text top heading-font",
                      ref: o,
                      children: "About",
                    }),
                  ],
                }),
                C("div", {
                  className: "about-profile-text bot heading-font",
                  ref: s,
                  children: "About",
                }),
              ],
            }),
          ],
        }),
        C("div", {
          className: "text-wrapper",
          children: C("div", {
            className: "about-description",
            children: R("div", {
              className: "description-row",
              ref: l,
              children: [
                R("p", {
                  children: [
                    "With ",
                    C("span", { className: "color", children: "" }),
                    " A strong foundation in web development, I'm a dedicated developer. I'm skilled in languages like HTML, CSS and JavaScript and I'm enthusiastic about staying informed on the latest trends while eagerly embracing new technologies and frameworks.",
                  ],
                }),
                // R("p", {
                //   style: { marginTop: "20px" },
                //   children: [
                //     "I've worked with",
                //     C("span", {
                //       className: "color",
                //       children: " startup agencies",
                //     }),
                //     ", and my contributions have positively impacted their businesses. Additionally, I've also worked as a freelance developer, collaborating with UX/UI designers, which has taught me the importance of cohesive design.",
                //   ],
                // }),
                C("br", {}),
                C("div", {
                  className: "about-social-icons",
                  onClick: () => f("contact-section"),
                  children: R("div", {
                    className: "all-cta",
                    children: [
                      C("div", { className: "back-cta" }),
                      "CONTACT  ",
                      C("svg", {
                        viewBox: "0 0 70 70",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: C("path", {
                          d: "M17.5 55.4167L55.4167 17.5M55.4167 17.5V53.9M55.4167 17.5H19.0167",
                          strokeWidth: "4.375",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  op = "/assets/notes2-03007312.jpg",
  sp = "/assets/ff4-c9835d5f.png",
  lp = "/assets/dig2-752fd00e.jpg",
  ap = "./assets/portfolio4-2df3016a.jpg";
const zo = [
  {
    id: 1,
    number: "01",
    link: "https://omkargosavi.com",
    type: "Personal Portfolio",
    image: ap,
    title: "Portfolio",
    description:
      "Step into the world of captivating digital storytelling with my personally designed and developed animated portfolio. Fusing the power of React JS, SCSS, and GSAP animations, I've crafted a dynamic showcase that transcends the ordinary. Every element, from custom animations to intricate SVG images, has been meticulously curated to resonate with the essence of my work. From ideation to execution, this project embodies my dedication to delivering high-quality design and seamless interactivity, all while highlighting my skills in frontend development and visual creativity. Dive into a visual journey that's not only a portfolio but a testament to the art of digital expression ",
    technology: "React, SCSS, GSAP, ScrollTrigger",
  },
  {
    id: 2,
    number: "02",
    type: "Company Client",
    link: "https://decentralisedinvestment.group/",
    image: lp,
    title: "DIG",
    description:
      "As a frontend developer for the Dig brand website, I played a crucial role in bringing the ethos of digital pioneers to life. Collaborating with the team, I translated the company's vision of promoting decentralization, individual liberty, and economic freedom into a compelling online presence. Through careful implementation of user interfaces and design components, I ensured that the website effectively communicated the belief that building products can shape the future. It was an exciting opportunity to contribute to a project that embodies innovative ideals and has the potential to influence the digital landscape",
    technology:
      "React js, Swiper, GSAP, AOS, React hooks, Scss, Custom animation, Vercel",
  },
  {
    id: 3,
    number: "03",
    link: "https://notes.client.omkargosavi.com/",
    type: "Educational",
    image: op,
    title: "NOTES APP",
    description:
      "Simple MERN Note Taking App is an educational hobby project that provides a straightforward and easy-to-use platform for keeping track of your notes. Developed using the MERN (MongoDB, Express.js, React, Node.js) stack, this app offers a basic yet functional solution for organizing your thoughts and ideas. ",
    technology:
      "React, Node.js, Typescript, Secure authentication : Uses express-session and cookies, TypeScript, AWS EC2 for backend control.",
  },
  {
    id: 4,
    number: "04",
    link: "https://staging-44-club.vercel.app/",
    type: "Company Client",
    image: sp,
    title: "44 Club",
    description:
      "As a frontend developer for the 44 Club project, I played a pivotal role in shaping the captivating digital presence of this exclusive venture. Working within the team, I brought to life the vision of providing an 'all-access pass to shaking up the world'. Through meticulous implementation of user interfaces and design elements, I ensured that visitors to the 44 Club website could glimpse behind the curtain and gain entry to the inner circle. My contributions helped convey the essence of the project's purpose, inviting individuals to explore its offerings, from riches to parties that make you blush. It was a thrilling experience to contribute to a platform with such a distinctive and alluring concept. ",
    technology: "React js, React hooks, Scss, Custom animation, Vercel",
  },
  {
    id: 5,
    number: "05",
    link: "https://kwenchwear.com/",
    type: "Company Client",
    image: "https://dummyimage.com/600x400/000/fff",
    title: "kwenchwear",
    description:
      "As a dedicated web developer, I was an integral part of the team behind the KwenchWear Fitness Apparel e-commerce website. Collaborating closely with designers and fellow developers, I contributed to crafting a dynamic platform that brings the brand's vision to life. Using technologies like React JS and SCSS, I ensured a seamless and responsive online shopping experience for fitness enthusiasts. Through meticulous coding and attention to detail, I enabled smooth navigation, effortless browsing, and secure checkout processes. The result is a user-centric website that reflects KwenchWear's commitment to providing stylish and functional gym apparel to its customers. Joining forces with the brand, I played a crucial role in enhancing the online presence and accessibility of KwenchWear's fitness wear collections. ",
    technology: "HTML, CSS, JS, Shopify",
  },
  {
    id: 6,
    number: "06",
    link: "https://ionexchangeglobal.com/",
    type: "Company Client",
    image: "https://dummyimage.com/600x400/000/fff",
    title: "Ion Exchange",
    description:
      "As a dedicated web developer, I had the privilege to contribute to the creation of the Ion Exchange company website – a digital gateway to their legacy of pioneering water treatment solutions. Collaborating closely with the Ion Exchange team, I translated their 59 years of expertise into a dynamic online platform. Through strategic design and meticulous development, I ensured the website effectively communicates the brand's strong international presence and commitment to water and environment management solutions. Utilizing my skills in web technologies, I crafted a user-friendly interface that reflects Ion Exchange's global reach, sales, production, and service footprints. It's a testament to the power of web development in conveying a legacy of innovation and sustainability to the world",
    technology: "HTML, CSS, JS, wordpress",
  },
],
  up = ({ scrollContainer: t, handleShowModal: e, handleCloseModal: n }) => {
    P.useState(!1), P.useState(null);
    const [r, i] = P.useState(null),
      o = P.useRef([]);
    P.useEffect(() => {
      i(t.current);
    });
    const s = P.useRef([]),
      l = P.useRef([]);
    return (
      P.useEffect(() => {
        $2(s);
      }, []),
      P.useEffect(() => {
        j.registerPlugin(G), QC(l);
      }, []),
      P.useEffect(() => {
        const a = document.querySelectorAll(".work-container svg path");
        JC(o, a);
      }, []),
      R("div", {
        children: [
          C("div", {
            className: "container work-container",
            children: C("div", {
              className: "title-img",
              children: R("svg", {
                width: "1707",
                height: "1446",
                viewBox: "0 0 1707 1446",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  C("path", {
                    d: "M600.667 1.06646C592.534 3.73313 585.334 13.5998 585.334 21.9998C585.334 27.8665 590.134 36.2665 595.467 39.9998C599.467 42.6665 601.867 43.1998 608.134 43.0665C613.334 42.9331 616.4 43.5998 617.467 44.7998C618.534 46.1331 618.8 53.7331 618.534 70.2665C618 92.6665 617.867 94.2665 614.8 98.3998C609.867 105.466 609.6 113.2 614 122L617.734 129.333L614.8 132.533C610.8 136.8 609.067 149.466 609.6 169.466C610 184.266 610.267 185.733 613.067 188C617.334 191.6 617.2 200.933 612.534 208C609.467 212.533 609.067 214.4 609.6 220.4C610 224.933 611.334 229.066 613.2 231.733C615.867 235.466 616 237.2 615.734 250.266L615.334 264.666L592 265.466C487.867 269.333 382.267 300.533 291.334 354.4C168.534 427.066 79.7335 535.2 31.8668 670C7.20018 739.333 -3.86649 819.733 1.33351 891.333C9.33351 1001.33 48.6668 1107.6 113.867 1196C147.734 1241.73 194 1288.13 239.2 1321.33C322.4 1382.4 423.734 1423.6 527.334 1438.53C561.467 1443.47 577.6 1444.53 617.334 1444.53C657.067 1444.53 673.2 1443.47 707.334 1438.53C820.8 1422.27 926.134 1376.8 1016.4 1305.2C1037.07 1288.93 1084 1242.67 1100.13 1222.67C1164.13 1143.87 1206.13 1054.93 1224.53 959.333C1252 816 1222.13 668.8 1139.6 540.933C1066.93 428.533 951.6 341.333 817.2 297.333C764.267 279.866 712.534 269.866 655.734 265.866L642.667 265.066V250.8C642.667 238.533 642.934 236.4 645.067 235.066C648.667 232.933 652.267 224.4 652.267 218.533C652.134 213.2 649.467 206.933 646.134 204.133C644.934 203.066 644 200.4 644 198.133V194L658.934 194.4C668.534 194.666 674.934 195.333 676.667 196.533C678.134 197.466 686 204.533 694.134 212.133C702.267 219.733 711.867 227.6 715.467 229.6C719.067 231.466 746.667 242.533 776.667 254C806.8 265.466 838.934 277.866 848.134 281.466L865.067 288.133L867.734 294.666C870.267 300.8 870.934 301.333 874.934 301.333C877.334 301.333 882 300.666 885.2 299.866C890.8 298.666 891.467 298.8 906.267 306.666C958.934 334.533 1035.07 385.6 1062.53 411.466C1088.27 435.466 1145.07 505.6 1172.93 547.333C1193.6 578.533 1200 591.466 1216.67 635.733C1248.8 721.6 1257.47 746.533 1266.13 777.867C1270.13 792.533 1275.87 813.333 1278.8 824C1289.2 861.6 1313.47 946 1314.93 949.733C1316.27 953.2 1316 953.867 1312.13 957.333C1305.73 963.2 1306.8 966.667 1316 968.933C1320.53 970.133 1320.67 970.4 1324.27 984.133C1326.4 991.733 1328.93 1004.27 1330 1012L1332 1026L1325.07 1031.87C1267.2 1080.13 1234.67 1159.47 1242.53 1232.67C1254.53 1343.6 1338.53 1428.67 1448.4 1441.47C1468.27 1443.73 1500.8 1442.27 1520 1438.13C1611.87 1418.53 1681.2 1350.13 1701.2 1259.33C1710.13 1218.53 1708 1179.33 1694.53 1138C1668.4 1058.27 1603.73 1000.93 1518.67 982.4C1506.4 979.733 1500.93 979.333 1474 979.333C1447.07 979.333 1441.6 979.733 1429.33 982.4C1411.6 986.267 1391.2 993.067 1375.87 1000.13C1369.33 1003.2 1363.73 1005.47 1363.47 1005.2C1363.2 1004.8 1352.93 971.733 1341.2 933.6C1339.87 929.067 1337.47 921.467 1336 916.667C1334.53 911.867 1332.13 904.133 1330.67 899.333C1329.2 894.533 1326.8 886.667 1325.2 881.6C1323.73 876.667 1315.33 848 1306.67 818C1272.53 699.2 1254.93 645.733 1238.67 611.066C1223.07 577.6 1182.53 510.933 1156.67 476C1138 450.8 1109.07 420.133 1070 384.133C1013.87 332.533 987.2 312.533 956.267 298.666C934.8 289.066 912.267 278.666 898.4 272.133C885.467 266 884 263.866 884 251.333C884 242.8 886.134 236.4 889.334 235.333C892.267 234.4 902 238.133 930 250.666C976.534 271.466 987.467 273.2 999.867 261.866C1004.53 257.733 1006 255.2 1014.13 236.4C1017.47 228.4 1018.27 227.733 1029.87 220.533C1052.93 206.133 1063.07 196.8 1064.8 188.533C1066.93 177.333 1046.93 164.133 1021.73 160.133C1011.87 158.533 950.934 156.4 879.334 155.066L834 154.266L829.2 150.533C822 144.933 818 143.733 811.734 145.466C801.867 148.133 789.334 163.2 789.334 172.533C789.334 174.4 788.534 176 787.6 176C786.667 176 768.267 174.533 746.667 172.666C715.2 170 706.534 168.8 702.134 166.666C696 163.733 681.2 159.866 659.334 155.466L644.667 152.4L644.267 141.6C643.867 131.066 644.134 130.4 648 125.6C655.6 116 655.867 106.133 648.667 97.5998C645.867 94.2665 645.334 92.1331 645.334 85.3331C645.334 77.7331 645.6 77.1998 647.467 78.7998C651.2 81.8665 664 81.1998 668.934 77.5998C686.4 65.1998 679.334 38.9331 658.267 38.1331C650.134 37.8665 646.534 36.1331 644 31.3331C642 27.4665 636.4 23.9998 632.267 23.9998C630.267 23.9998 629.467 22.7998 628.667 18.9331C626.267 5.73313 612.8 -2.80021 600.667 1.06646ZM781.334 182.533C839.734 187.466 844.134 188 856.667 192C864 194.4 875.467 199.066 882 202.666C888.667 206.133 897.334 210.266 901.334 211.866C905.6 213.466 913.334 218.666 919.734 224C936.4 238 939.334 239.333 954.934 239.066C972 238.8 985.867 236.533 993.6 232.533L999.867 229.333L1000.8 234.133C1002.27 241.733 1000.4 250.933 996.667 254.533L993.467 257.866L981.2 256.133C957.067 252.666 946.4 248.666 919.6 232.266C902.267 221.866 896.134 220.533 886.8 225.6C877.867 230.4 874.667 237.333 874.667 251.733C874.667 260.133 874.267 262.8 873.067 262.266C872.134 262 859.467 256.8 844.934 250.8C830.4 244.8 809.734 237.2 798.934 233.866C788.134 230.533 773.334 226 766 223.733C746 217.733 745.067 217.066 735.067 203.466C730.134 196.8 723.467 188.133 720.267 184.266C715.6 178.8 714.934 177.333 716.934 177.333C718.267 177.333 747.334 179.733 781.334 182.533ZM614.134 358.266C613.6 394.8 612.667 461.866 612 507.333C611.334 552.8 610.134 638.533 609.2 698C608.4 757.333 607.6 806.133 607.467 806.267C607.2 806.533 605.2 797.2 602.8 785.6C598.667 765.333 593.734 741.466 582.667 687.6C579.867 673.6 570.8 629.6 562.667 590C544.934 503.6 528.534 423.466 521.334 388.266C516.134 363.6 506 313.6 504.534 306.533L503.867 303.066L521.6 300.266C550.667 295.6 579.867 292.8 607.2 292.133L615.067 292L614.134 358.266ZM690 296.8C707.067 298.933 729.334 302.666 745.067 306.133C752.8 307.866 754.667 308.666 754.134 310.533C753.867 311.733 728.134 427.2 697.2 567.333C666.134 707.333 640.667 822.133 640.667 822.267C640.667 822.4 639.2 822.133 637.467 821.733L634.267 820.933L635.2 766.8C635.6 737.066 636.667 670.933 637.334 620C638.134 569.066 639.334 488.666 640 441.333C640.667 394 641.334 341.333 641.467 324.133V292.933L657.734 293.866C666.667 294.4 681.2 295.733 690 296.8ZM501.334 304.666C501.334 304.933 505.2 324.266 510 347.6C514.8 370.933 521.2 401.6 524 415.6C536.934 478.4 540.134 494.133 544.667 516C547.334 528.8 556.667 574.4 565.467 617.333C595.467 763.6 599.867 784.667 603.2 801.2C605.067 810.267 606.667 818.133 606.667 818.8C606.667 820.267 594.534 825.6 593.467 824.533C593.067 824.133 546.4 714.533 489.867 580.933C424.4 426 387.6 337.733 388.534 337.066C391.334 335.466 419.334 325.466 436 320.266C450.267 315.733 463.067 312.4 491.334 305.6C497.467 304.133 501.334 303.733 501.334 304.666ZM777.2 313.866C805.867 321.733 837.067 332.666 865.734 345.2L872 347.866L870.134 352.266C869.2 354.666 862.134 370.133 854.667 386.666C847.2 403.2 826.667 448.4 809.067 487.333C791.467 526.133 774.134 564.266 770.667 572C761.867 591.466 703.734 719.6 684 763.333C658.534 819.733 656.934 823.067 654.267 826.8L651.734 830.4L647.334 827.467C644.134 825.467 643.067 823.867 643.467 822C643.734 820.533 669.2 705.866 700 567.333C765.334 272.8 757.067 309.333 758.8 309.333C759.6 309.333 767.867 311.333 777.2 313.866ZM487.334 581.466C543.867 715.066 590.134 825.333 590.4 826.667C590.667 828 589.734 829.733 588.4 830.4C586.267 831.467 566.4 803.6 433.334 613.733C349.334 493.866 280.667 395.066 280.667 394.4C280.667 392.266 318.134 370.133 339.734 359.2C356.534 350.8 382.4 338.8 384 338.8C384.4 338.8 430.934 448 487.334 581.466ZM908.534 366.266C938.8 382.8 972.4 404.533 971.734 407.2C971.334 408.933 666.267 811.867 665.6 811.333C665.467 811.2 673.067 794 682.534 773.2C692 752.4 714.267 703.2 732 664C749.734 624.8 767.2 586.4 770.667 578.666C774.134 570.933 794.534 526 816 478.666C837.467 431.333 857.867 386.266 861.467 378.4C865.067 370.4 869.467 360.666 871.2 356.666L874.534 349.466L884.8 354.133C890.4 356.8 901.067 362.266 908.534 366.266ZM432.534 617.066C515.867 736.133 584 834 583.734 834.4C582.667 836.8 576.534 845.333 576 845.333C575.467 845.333 220.134 501.733 194.934 476.8L187.734 469.733L192.934 464.4C208.134 448.266 242.667 419.6 268.667 401.466C276.134 396.266 276.667 396 278.8 398.266C280 399.6 349.2 498.133 432.534 617.066ZM1002 428.666C1021.07 444.4 1046.13 467.466 1054.27 476.933L1061.33 484.933L890.667 651.733L719.867 818.4L693.2 833.867C678.534 842.4 665.867 849.333 665.2 849.333C664.534 849.333 664 848.8 664 848.133C664 847.467 662 844 659.6 840.267L655.067 833.733L657.867 828.4C659.467 825.467 731.467 729.733 818 615.6L975.2 408.133L982 412.933C985.6 415.6 994.667 422.666 1002 428.666ZM380.667 660.666C487.334 764 574.667 849.067 574.667 849.6C574.667 850.133 571.2 848.267 567.067 845.467C562.8 842.667 536 825.467 507.334 807.067C478.8 788.8 381.6 726.533 291.334 668.666C201.2 610.933 125.067 562.133 122.4 560.266L117.467 557.066L122.934 548.8C130.934 537.066 141.867 522.266 151.734 510C163.334 495.6 184.4 472.133 185.734 472.4C186.267 472.533 274 557.2 380.667 660.666ZM1087.07 515.2C1097.47 528.266 1121.33 562.933 1129.07 576L1131.73 580.666L938.934 692C832.934 753.2 742.667 805.333 738.267 807.867C729.067 813.067 712.934 829.067 922.667 624.266L1063.33 486.8L1069.33 493.6C1072.67 497.466 1080.67 507.066 1087.07 515.2ZM334.267 699.466C452.934 775.467 555.334 841.067 561.734 845.2L573.467 852.667L572.534 859.333C572.134 862.933 571.467 866.133 571.334 866.4C570.934 866.8 539.2 861.067 520 857.067C512 855.467 505.067 852.4 313.334 765.333C242.534 733.2 158.534 695.066 126.667 680.666C94.8002 666.266 68.4002 654.133 68.1335 653.866C64.9335 650.8 112.934 559.066 116.934 560.533C117.867 560.933 215.6 623.466 334.267 699.466ZM1148.4 612.266C1160.67 637.2 1177.07 675.466 1175.73 676.666C1175.33 677.066 1134.8 694.133 966.667 764.667C925.2 782.133 864.4 807.733 831.334 821.6L771.334 846.933L727.067 853.2C702.667 856.667 682.667 859.467 682.667 859.333C682.667 859.2 691.334 850.533 702 840L721.2 820.933L926.267 702.4C1039.07 637.333 1132 584 1132.8 584C1133.73 584 1140.67 596.8 1148.4 612.266ZM278.667 752.667C333.334 777.467 404.4 809.733 436.667 824.267C493.867 850.267 502.4 854.267 496.667 852.8C495.2 852.4 459.467 845.467 417.334 837.333C375.2 829.2 316.134 817.733 286 812C256 806.267 198.4 795.067 158 787.333C60.2668 768.533 36.8002 764 36.2668 763.467C35.6002 762.667 39.6002 742.933 44.0002 725.066C48.2668 708.133 59.8668 671.733 64.0002 661.866L66.4002 656.266L122.934 681.866C154 696 224 727.866 278.667 752.667ZM1179.73 687.6C1186.13 705.6 1193.33 733.466 1198 758.667C1202.8 785.2 1203.2 788 1200.8 788C1199.73 788 1168.4 792.267 1131.07 797.333C910.534 827.867 784 845.333 783.067 845.333C782.534 845.333 866.267 809.867 969.334 766.667C1072.4 723.333 1160.53 686.266 1165.33 684.133C1170.13 682 1174.67 680.133 1175.47 680.133C1176.27 680 1178.27 683.466 1179.73 687.6ZM88.5335 776.667C117.2 782.267 165.334 791.6 195.334 797.333C225.467 803.2 298.667 817.2 358 828.667C417.467 840.133 476.4 851.467 489.067 854C511.6 858.4 512.8 858.8 541.867 872L571.6 885.6L568.934 892L566.267 898.4L559.467 897.867C555.734 897.467 527.467 896.133 496.667 894.667C465.867 893.2 428.667 891.333 414 890.667C399.334 889.867 363.334 888.133 334 886.667C278.4 884 207.334 880.4 116.667 876C87.3335 874.533 55.3335 872.933 45.7335 872.4L28.0002 871.6V850C28.0002 829.867 30.2668 798.667 33.3335 778.667C34.0002 773.867 34.6668 769.2 34.6668 768.267C34.6668 767.467 35.0668 766.667 35.4668 766.667C36.0002 766.667 59.7335 771.2 88.5335 776.667ZM1203.2 792.933C1205.47 800.533 1206.93 837.333 1206.4 868.133C1206 887.2 1205.47 902.933 1205.2 903.333C1204.8 903.6 1110.8 904.533 996.267 905.467L788 907.2L740.667 895.2C714.667 888.667 693.867 882.933 694.4 882.4C694.934 882 712.134 874.533 732.667 865.867C764.134 852.667 771.867 850 782 848.533C788.534 847.467 868.134 836.533 958.667 824C1049.2 811.467 1139.6 798.933 1159.33 796.133C1202.4 790 1202.27 790 1203.2 792.933ZM694.134 843.867C680.667 857.333 677.334 860 673.067 860.667C666.934 861.733 667.067 861.867 666.4 856.667C666 852.933 666.8 852.4 687.334 840.4C699.067 833.6 708.934 828 709.334 828C709.734 828 702.8 835.2 694.134 843.867ZM757.2 852.533C756.934 852.8 741.2 859.467 722.267 867.333L687.867 881.733L677.334 879.333C671.2 878 666.667 876.267 666.667 875.333C666.667 873.6 677.867 862.667 679.6 862.667C680.267 862.533 696.934 860.267 716.667 857.467C752.8 852.267 758.267 851.6 757.2 852.533ZM552.267 866.133L571.734 869.733L573.2 875.2C573.867 878.267 574 881.2 573.467 881.733C572.534 882.667 528.667 863.867 526.667 861.733C526.267 861.333 527.467 861.333 529.334 861.733C531.2 862.133 541.467 864.133 552.267 866.133ZM670.667 866.667C669.2 868.133 667.734 869.333 667.467 869.333C667.2 869.333 667.2 868.133 667.6 866.667C668 865.2 669.467 864 670.8 864C673.2 864 673.2 864.133 670.667 866.667ZM196.934 882.667C286.267 887.067 389.6 892.133 426.667 894C463.734 895.867 507.867 898 524.667 898.667C541.6 899.467 557.734 900.4 560.8 900.8L566.134 901.467V908.933C566 916.4 566 916.533 559.867 920.267C554.4 923.6 519.067 935.867 388.667 980C367.467 987.2 289.734 1013.47 216.134 1038.53C142.534 1063.6 81.6002 1084 80.6668 1084C79.7335 1084 76.2668 1077.47 72.8002 1069.33C47.4668 1010 33.3335 951.733 28.5335 886.933L27.6002 874.667H31.0668C32.9335 874.667 107.6 878.267 196.934 882.667ZM681.734 884.133C680.667 884.933 660.667 893.333 659.734 893.333C659.334 893.333 660.667 890.133 662.534 886.267L665.867 879.2L674.267 881.2C678.934 882.267 682.267 883.6 681.734 884.133ZM731.6 895.6C754.534 901.333 773.334 906.267 773.334 906.667C773.334 907.067 752.267 907.6 726.534 907.867L679.734 908.267L671.2 902.533C666.534 899.333 662.667 896.4 662.667 896C662.667 894.933 685.334 885.467 688 885.333C689.067 885.333 708.667 889.867 731.6 895.6ZM667.467 902.933L673.6 907.333L668 907.733C664.934 908 662.267 908 662 907.733C661.2 906.8 659.867 898.667 660.534 898.667C660.934 898.667 664 900.667 667.467 902.933ZM1204 909.733C1204 927.6 1186.93 1007.73 1183.2 1007.07C1181.87 1006.93 1028.13 968.133 978 955.333C959.734 950.667 912.267 938.667 872.667 928.667C833.067 918.667 800.4 910.133 800.134 909.867C799.867 909.6 828 909.2 862.8 909.2C897.6 909.067 968.934 908.533 1021.33 908.133C1073.73 907.6 1136.27 907.067 1160.4 906.933L1204 906.667V909.733ZM985.334 959.867C1092.8 987.067 1181.33 1009.6 1182.27 1010C1185.33 1011.07 1166.27 1061.87 1151.33 1092.4C1145.33 1104.53 1143.07 1107.87 1141.47 1107.33C1138.27 1106 867.734 1003.73 815.334 984C790.4 974.533 766.667 965.6 762.667 964C758.667 962.4 739.334 950 719.6 936.267L683.867 911.333L728.267 910.533C752.667 910.133 776.534 909.867 781.334 910.133C787.6 910.267 844.267 924.133 985.334 959.867ZM710.534 933.333C728.4 945.733 743.334 956.133 743.6 956.533C744 956.8 727.2 950.667 706.534 942.933L668.934 928.667L664.4 921.867C658.267 912.667 659.2 910.667 669.867 910.667H678.134L710.534 933.333ZM663.6 926.267C662.134 927.6 658.667 924.667 658.667 922.133C658.8 919.333 658.8 919.333 661.467 922.533C662.934 924.267 663.867 926 663.6 926.267ZM570.534 928.267C572 931.467 574.134 935.2 575.2 936.667C576.934 939.2 567.734 947.6 399.2 1096.67C301.334 1183.2 218.8 1256 215.867 1258.53L210.4 1263.07L188.934 1241.2C170.534 1222.53 141.2 1188.53 137.2 1181.07C136.267 1179.2 168.267 1159.47 346.4 1052.27C462 982.667 558.534 925.067 560.667 924.267C567.067 922 567.734 922.4 570.534 928.267ZM663.867 929.867C666.267 931.2 672.8 939.867 682.8 955.467C691.2 968.533 698.267 979.733 698.534 980.533C698.8 981.2 688.4 972 675.467 960C662.534 948 652 938 652 937.867C652 937.6 653.067 935.333 654.267 932.667C656.667 927.467 658.267 927.067 663.867 929.867ZM540 932.133C527.6 940.533 135.067 1175.87 134 1175.6C132.134 1175.07 116.267 1151.6 105.467 1133.33C95.8669 1117.2 80.8002 1088.13 81.6002 1087.33C82.0002 1086.93 540.134 930.933 541.334 930.933C541.734 930.8 541.067 931.467 540 932.133ZM714 948.667L754.534 963.867L915.6 1076.13C1004.13 1137.87 1078.93 1190 1081.6 1192L1086.67 1195.6L1075.87 1208.8C1065.33 1221.6 1016.93 1270.67 1014.8 1270.67C1014.27 1270.67 945.067 1207.6 861.2 1130.53L708.667 990.4L691.334 963.6C670.267 931.067 671.6 933.333 672.667 933.333C673.067 933.333 691.734 940.267 714 948.667ZM678.267 966.267L706.134 991.733L815.067 1160.93C874.934 1254 924.267 1331.07 924.667 1332.27C925.6 1334.8 920.4 1338 892.667 1351.87C868.667 1363.73 833.067 1378.93 831.867 1377.6C831.467 1377.07 803.6 1316.67 770 1243.33C736.4 1170 697.6 1085.2 683.734 1054.93L658.534 1000L653.334 971.067C647.467 938.933 647.467 939.6 649.2 940.267C649.867 940.4 662.934 952.133 678.267 966.267ZM581.467 943.467C583.467 945.333 573.6 959.2 443.2 1137.07C365.867 1242.4 302.134 1328.8 301.6 1329.07C300.267 1329.47 271.067 1310.53 255.334 1298.93C237.6 1285.87 213.067 1265.2 214 1264.27C216.534 1261.6 578.134 941.467 578.534 941.467C578.934 941.333 580.134 942.267 581.467 943.467ZM649.2 963.333C650.8 972.8 652.4 982.4 652.8 984.667C653.2 986.8 649.6 980 644.667 969.467C637.867 954.667 636.134 950 637.6 949.2C638.534 948.667 640.534 947.333 642 946.133C643.467 945.067 645.067 944.533 645.467 945.067C645.867 945.6 647.6 953.733 649.2 963.333ZM590.8 950.133C593.6 951.467 594.667 952.933 594.267 954.4C593.867 955.6 576.8 993.2 556.267 1038C535.734 1082.67 492.4 1177.2 460 1248C427.6 1318.8 400.8 1376.93 400.534 1377.2C398.8 1378.93 334.4 1349.07 313.067 1336.53L304.267 1331.33L436.267 1151.33C508.8 1052.27 572 966.133 576.8 959.6C581.467 953.2 585.6 948 586 948C586.4 948 588.667 948.933 590.8 950.133ZM644.8 976.8C655.6 1000.13 656 1001.2 659.867 1023.33C662 1035.73 678.267 1126.8 695.867 1225.6C713.6 1324.27 728 1405.73 728 1406.4C728 1408.4 692 1413.6 659.6 1416.13C633.867 1418 576 1417.07 552 1414.13C522.667 1410.53 508 1407.73 508 1405.73C508 1404.67 512.534 1385.07 518 1362.27C523.467 1339.33 535.467 1289.47 544.667 1251.33C553.867 1213.2 562.934 1175.33 564.8 1167.33C566.8 1159.2 568.534 1152.53 568.667 1152.27C568.8 1152.13 570.4 1152.53 572.267 1153.33C574.934 1154.67 577.067 1154.13 585.6 1150.27C592.134 1147.2 596.934 1145.87 599.2 1146.27C603.867 1147.2 610 1144.53 614 1139.73C615.734 1137.6 620.4 1134.53 624.4 1132.8C635.467 1127.87 635.2 1128.8 634.134 1100.27C632.8 1068 631.734 1066.13 618.134 1072C614.8 1073.33 612 1074.13 612 1073.6C612.134 1060.93 617.467 956.8 618 955.867C618.534 955.2 620.4 954.667 622.4 954.533C624.4 954.533 627.2 954 628.667 953.333C630.134 952.667 631.867 952.4 632.534 952.533C633.334 952.667 638.8 963.6 644.8 976.8ZM601.2 954.533C602.8 955.6 602.934 959.867 602.134 980.267C601.2 1003.87 600.934 1005.73 593.334 1037.33C580.134 1092.53 581.734 1087.73 575.867 1090.8C573.067 1092.13 570.134 1094.53 569.334 1095.87C568.534 1097.33 568 1107.87 568 1120.53V1142.67L557.334 1186.93C551.467 1211.33 538.8 1263.73 529.334 1303.33C519.734 1342.93 510.267 1382.4 508.267 1390.93C506.267 1399.73 504 1406.67 503.2 1406.67C500 1406.67 465.6 1398.4 449.467 1393.87C429.867 1388.27 406.534 1380.27 404.8 1378.67C404.134 1378 411.067 1361.47 420.4 1341.07C437.467 1303.87 518.134 1127.87 569.467 1015.73C585.2 981.333 598.267 953.333 598.667 953.333C599.067 953.333 600.134 953.867 601.2 954.533ZM956.267 1040.13C1058 1078.53 1141.33 1110.67 1141.33 1111.33C1141.33 1113.33 1123.2 1144 1113.33 1158.67C1099.6 1179.07 1089.2 1192.67 1087.73 1192.27C1086.27 1191.87 770.8 972.4 768.667 970.267C766.934 968.533 746.934 961.067 956.267 1040.13ZM1479.33 999.6C1478.67 1006.53 1473.47 1086.67 1469.2 1154C1468.27 1167.87 1467.47 1179.47 1467.2 1179.73C1464.8 1182.8 1437.07 1156.27 1426.67 1140.67C1413.87 1121.6 1368 1027.47 1368 1020.27C1368 1018.8 1388 1009.47 1401.07 1004.8C1422.53 997.2 1448 992.4 1468.93 992.133L1480 992L1479.33 999.6ZM1501.6 994C1509.87 995.067 1522.27 997.467 1529.07 999.333C1540.8 1002.53 1566.4 1011.87 1570.53 1014.53C1572.13 1015.6 1569.07 1023.6 1554.13 1058.27C1544 1081.6 1528.8 1116.67 1520.27 1136.27L1504.8 1171.87L1493.2 1180L1481.47 1188.13L1476.13 1184.4C1471.6 1181.2 1470.8 1179.87 1470.67 1176C1470.67 1173.47 1472.13 1148.8 1474 1121.33C1475.87 1093.87 1478.27 1056.67 1479.33 1038.67C1482 995.733 1482.4 992 1484.67 992C1485.73 992 1493.33 992.933 1501.6 994ZM866 1138.67C943.067 1209.33 1007.33 1268.4 1009.07 1270L1012.27 1272.93L1001.73 1281.47C996 1286.27 986.534 1293.6 980.667 1298C968.267 1307.2 930.667 1332 929.334 1332C928.8 1332 884 1263.2 829.867 1179.07C775.734 1094.8 728 1020.67 723.734 1014.27C719.467 1007.73 716 1002.13 716 1001.6C716 1001.2 718.267 1002.93 721.067 1005.6C723.734 1008.13 789.067 1068.13 866 1138.67ZM662.534 1014.93C663.2 1016.67 700.8 1098.67 746 1197.33C791.2 1296 828.534 1377.33 828.934 1378.13C829.467 1379.73 802.8 1389.07 778 1395.87C760.934 1400.53 732 1407.07 731.334 1406.4C731.067 1406.13 700.934 1238.67 670.534 1068C667.067 1047.87 663.2 1026.93 662.267 1021.6C660.4 1011.87 660.534 1009.6 662.534 1014.93ZM1586.67 1023.47C1605.47 1034.67 1624.93 1050.8 1638.4 1066.4L1645.33 1074.4L1577.87 1121.33C1540.67 1147.07 1510.13 1168 1510 1167.73C1509.87 1167.47 1523.47 1135.87 1540.13 1097.33C1556.93 1058.8 1571.47 1025.07 1572.67 1022.27C1573.73 1019.6 1575.07 1017.33 1575.47 1017.33C1575.87 1017.33 1580.93 1020.13 1586.67 1023.47ZM599.2 1049.33L598.267 1073.6L594.8 1074.8C592.934 1075.47 589.867 1077.73 588.134 1079.73C586.4 1081.73 585.334 1082.4 585.6 1081.33C586 1080.27 589.2 1066.93 592.667 1051.73C596.267 1036.53 599.467 1024.27 599.734 1024.53C600 1024.8 599.734 1036 599.2 1049.33ZM1337.33 1042.93C1337.33 1043.73 1341.87 1053.6 1347.33 1064.67C1360.67 1092 1385.2 1126.8 1415.33 1161.33C1431.2 1179.47 1433.07 1182.13 1426 1176.53C1386.67 1145.73 1302.13 1081.33 1301.73 1081.87C1301.33 1082.27 1301.33 1083.07 1301.73 1083.6C1302.13 1084.27 1334 1109.07 1372.53 1138.67L1442.53 1192.67L1441.73 1198.27C1441.33 1201.33 1441.6 1205.6 1442.4 1207.87C1443.2 1210.13 1443.47 1212 1442.93 1212C1441.2 1212 1259.33 1175.6 1258.8 1175.07C1257.73 1174.27 1262.93 1152.8 1267.47 1139.6C1279.33 1105.87 1300.13 1073.6 1324.93 1050.8C1335.2 1041.33 1337.33 1040 1337.33 1042.93ZM1655.07 1088.27C1665.6 1104.27 1675.33 1124.4 1681.6 1143.33C1684.67 1152.53 1686.93 1160.13 1686.53 1160.53C1686.27 1160.8 1646.13 1172.27 1597.6 1185.87L1509.07 1210.67L1501.73 1208.8C1497.73 1207.73 1494.13 1206.53 1493.87 1206.27C1493.47 1206 1496.4 1198.4 1500.27 1189.6L1507.33 1173.47L1576.67 1125.47C1614.8 1098.93 1646.4 1077.33 1646.93 1077.33C1647.47 1077.33 1651.07 1082.27 1655.07 1088.27ZM620 1091.2C620 1093.73 619.467 1096.27 618.667 1096.67C617.867 1097.2 617.467 1095.33 617.6 1092.13C617.867 1085.47 620 1084.8 620 1091.2ZM590.667 1103.6L593.867 1105.87L588.667 1108.27L583.334 1110.53L582.934 1107.07C582.667 1105.2 583.2 1103.07 584.267 1102.53C586.667 1100.93 586.934 1101.07 590.667 1103.6ZM621.334 1116.27C621.334 1118.27 616.267 1122.4 615.6 1121.07C615.467 1120.8 614.134 1119.33 612.8 1117.73C610.267 1114.67 610.267 1114.67 614.8 1112.8C619.6 1110.8 621.334 1111.73 621.334 1116.27ZM584 1130.67C584 1133.6 583.6 1136 583.067 1136C582.134 1136 581.867 1131.47 582.534 1126.67C582.934 1123.07 584 1126 584 1130.67ZM1688 1164.93C1688 1165.6 1688.93 1171.33 1690 1178C1693.47 1197.87 1692.67 1231.73 1688.53 1252.13L1687.87 1255.6L1602 1234.13C1554.8 1222.27 1516.13 1212.4 1516 1212C1516 1211.6 1523.33 1209.33 1532.4 1206.93C1541.33 1204.4 1578.93 1193.87 1616 1183.33C1653.07 1172.93 1684.4 1164.27 1685.73 1164.13C1686.93 1164 1688 1164.4 1688 1164.93ZM1499.2 1184.93C1497.33 1189.2 1494.8 1194.93 1493.73 1197.6C1492.67 1200.4 1490.93 1202.67 1490 1202.67C1487.6 1202.67 1484 1198.93 1484 1196.67C1484 1195.73 1483.6 1194 1483.2 1192.93C1482.67 1191.47 1485.47 1188.8 1492.13 1184.13C1497.47 1180.4 1502 1177.33 1502.13 1177.33C1502.4 1177.33 1501.07 1180.8 1499.2 1184.93ZM1354 1197.07C1436.13 1213.47 1446.67 1215.87 1451.73 1219.2C1454.8 1221.33 1457.33 1223.87 1457.33 1224.93C1457.33 1225.87 1455.6 1230.27 1453.47 1234.4C1449.6 1242 1448.67 1242.8 1377.47 1294.67C1337.73 1323.6 1304.8 1347.33 1304.27 1347.2C1302.4 1347.07 1287.87 1325.6 1281.47 1313.2C1264 1279.87 1255.73 1247.2 1255.73 1210.53C1255.73 1188 1256.93 1178.67 1259.87 1178.67C1261.07 1178.67 1303.47 1186.93 1354 1197.07ZM1502 1212C1502.4 1212.67 1501.87 1213.33 1500.8 1213.33C1499.73 1213.33 1498.4 1212.67 1498 1212C1497.6 1211.2 1498.13 1210.67 1499.2 1210.67C1500.27 1210.67 1501.6 1211.2 1502 1212ZM1598.93 1236.13C1672.53 1254.4 1686.67 1258.4 1686.67 1260.27C1686.67 1265.2 1676 1294.67 1669.6 1307.47C1662.4 1321.87 1647.33 1345.2 1644.67 1346.13C1642.4 1347.07 1498.4 1229.47 1499.47 1227.73C1500 1227.07 1500.27 1224.13 1500.27 1221.2C1500.13 1216.53 1500.53 1215.87 1504.4 1214.8C1506.8 1214.13 1509.33 1213.73 1510 1213.87C1510.8 1214 1550.8 1224 1598.93 1236.13ZM1460 1232.53C1460 1233.47 1458.93 1235.2 1457.73 1236.13C1455.73 1237.73 1455.6 1237.73 1456.4 1235.6C1456.93 1234.27 1457.33 1232.53 1457.33 1231.87C1457.33 1231.2 1458 1230.67 1458.67 1230.67C1459.47 1230.67 1460 1231.47 1460 1232.53ZM1574.67 1294.67C1610.93 1324.13 1641.07 1348.8 1641.6 1349.2C1643.07 1350.53 1628.13 1366.53 1616.27 1376.4C1577.6 1408.53 1533.87 1425.73 1483.07 1428.8L1467.6 1429.73L1468.4 1417.2C1482 1226.27 1480.53 1242.67 1483.87 1242.67C1485.07 1242.67 1486.67 1244.13 1487.47 1245.87C1491.2 1255.73 1563.33 1406.67 1564.27 1406.67C1564.8 1406.67 1565.33 1406.13 1565.33 1405.6C1565.33 1405.07 1548 1368 1526.8 1323.2L1488.4 1242L1493.2 1237.07L1498 1232.13L1503.33 1236.53C1506.27 1238.93 1538.4 1265.07 1574.67 1294.67ZM1466.67 1239.47C1467.73 1240.4 1470.8 1241.6 1473.33 1242.27C1477.6 1243.47 1478 1243.87 1477.73 1248.13C1471.07 1344.93 1464.8 1427.47 1464.13 1428.13C1462.93 1429.33 1443.33 1427.2 1429.07 1424.13C1407.87 1419.73 1376.53 1407.87 1377.73 1404.8C1378.13 1404 1394.67 1367.87 1414.67 1324.67C1446.8 1254.93 1451.6 1245.47 1456.4 1241.07C1461.73 1236.27 1462.67 1236.13 1466.67 1239.47ZM1421.2 1304.13C1407.2 1334.53 1391.2 1368.93 1385.73 1380.67C1380.27 1392.4 1375.33 1402.53 1374.67 1403.2C1373.07 1404.8 1366.67 1401.33 1350.67 1390.67C1330.4 1377.07 1304.4 1352.27 1307.47 1349.33C1310.27 1346.67 1446 1248.27 1446.4 1248.53C1446.53 1248.8 1435.33 1273.87 1421.2 1304.13Z",
                    stroke: "#3f3b37",
                  }),
                  C("circle", {
                    cx: "618",
                    cy: "885",
                    r: "65.5",
                    fill: "#eee9db",
                    stroke: "#ff007f",
                    strokeWidth: 8,
                  }),
                  C("circle", {
                    cx: "1477",
                    cy: "1210",
                    r: "32",
                    fill: "#eee9db",
                    stroke: "#ff007f",
                    strokeWidth: 8,
                  }),
                ],
              }),
            }),
          }),
          R("div", {
            className: "work-wrapper",
            children: [
              C("div", {
                className: "about-text-heading heading-font",
                ref: s,
                children: "Projects",
              }),
              R("div", {
                className: "subheading",
                children: [
                  "Selected Work and Project Showcase",
                  C("div", { className: "text-border ", children: " " }),
                ],
              }),
              zo.map((a, u) => {
                if (u < 3)
                  return R(
                    "div",
                    {
                      className: `project-wrapper ${u % 2 === 0 ? "left" : "right"
                        }`,
                      ref: (c) => (l.current[u] = c),
                      onClick: () => e(a),
                      children: [
                        R("div", {
                          className: "project-details",
                          children: [
                            C("span", {
                              className: "number",
                              children: a.number,
                            }),
                            C("br", {}),
                            C("span", {
                              className: "proj-name",
                              children: a.title,
                            }),
                            " ",
                            C("br", {}),
                          ],
                        }),
                        C("div", {
                          className: "project-image-wrapper",
                          children: C("img", { src: a.image, alt: "" }),
                        }),
                      ],
                    },
                    u
                  );
              }),
              R("div", {
                className: "experiance-row left",
                children: [
                  "SEE MORE OF MY WORK",
                  C("h2", {}),
                  zo.map((a, u) => {
                    if (u >= 3)
                      return R(
                        "div",
                        {
                          className: "exp-content",
                          onClick: () => e(a),
                          children: [
                            R("div", {
                              className: "exp-name",
                              children: [a.number, ". ", a.title, " "],
                            }),
                            C("div", { className: "exp-role" }),
                            C("div", {
                              className: "exp-year",
                              children: "View Project ",
                            }),
                          ],
                        },
                        u
                      );
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  };
const cp = () => {
  const t = P.useRef(null),
    e = P.useRef([]),
    n = P.useRef(null),
    r = P.useRef([]);
  return (
    P.useEffect(() => {
      $2(t);
    }, []),
    P.useEffect(() => {
      WC(e);
    }, []),
    P.useEffect(() => {
      const i = document.querySelectorAll(".skill-wrapper svg path");
      jC(i, r);
    }, []),
    R("div", {
      className: "skill-wrapper",
      ref: n,
      children: [
        R("div", {
          className: "title-img",
          children: [
            " ",
            R("svg", {
              viewBox: "0 0 1690 1707",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                C("path", {
                  d: "M239.267 1701.56C237 1699.29 240.467 1685.56 253.667 1645.42C284.6 1551.02 293.933 1515.69 307.533 1442.09C316.733 1392.49 317.533 1384.22 316.6 1345.56C315.8 1307.82 313.133 1287.29 305.133 1255.56C295.133 1216.62 282.067 1189.29 264.867 1171.42C258.2 1164.49 255.267 1159.56 245.533 1139.29C239.267 1126.22 231.667 1112.22 228.6 1108.36C225.667 1104.36 214.733 1093.69 204.467 1084.36C181.533 1063.82 162.333 1044.36 157 1036.22C154.6 1032.76 153 1028.49 153 1026.09C153 1023.69 152.067 1020.89 150.867 1019.96C148.867 1018.36 148.733 1018.49 149.667 1021.42L150.6 1024.76L147.133 1021.42C143 1017.69 133 998.49 133 994.223C132.867 992.757 131.133 989.29 129 986.757C126.733 984.223 125 980.623 125 978.757C125 976.89 123.933 974.757 122.467 973.823C121.133 973.023 119.267 969.423 118.467 966.09C116.067 956.623 110.733 946.757 107.133 945.423C103.8 944.223 101.8 939.023 103.133 935.423C103.8 933.957 103.133 933.023 101.4 932.623C96.4667 931.29 89.8 916.09 68.2 857.557C50.4667 809.69 46.4667 792.623 41.4 742.357C38.2 710.49 38.2 625.823 41.4 595.957C45.6667 556.757 50.2 536.223 61.1333 507.023C81.2667 453.29 112.467 397.957 148.733 351.823C155.133 343.557 165.933 329.157 172.6 319.957C221.4 252.757 261.933 214.223 334.333 166.09C364.6 145.957 381.533 136.223 411 121.957C498.333 79.6895 602.867 53.9562 716.333 46.7562C742.733 45.1562 821.4 46.2228 847.667 48.7562C909 54.3562 962.867 64.6227 1016.6 80.6227C1072.47 97.4227 1149.93 131.69 1180.73 153.423C1196.2 164.357 1223.27 188.89 1255 220.623C1290.47 256.223 1303.67 271.157 1328.73 304.623C1354.07 338.49 1364.2 354.49 1382.2 389.157C1390.87 405.823 1399.67 422.223 1401.67 425.423C1409.53 437.823 1429.13 483.023 1440.87 515.823C1448.07 536.223 1464.87 601.557 1469 625.823C1472.2 645.023 1472.47 670.223 1469.67 682.49C1468.6 687.157 1464.2 698.89 1459.93 708.49C1455.53 718.223 1449.53 732.757 1446.47 741.023L1440.87 755.957L1446.33 766.357C1453.4 779.957 1461.53 789.957 1498.47 830.357C1515.4 848.89 1537.67 874.09 1547.93 886.357C1566.2 908.223 1590.47 935.957 1618.47 966.757C1634.6 984.623 1643.4 995.69 1647.8 1004.09C1650.47 1009.16 1651 1011.96 1650.87 1022.09C1650.87 1032.36 1650.33 1035.29 1647 1042.49C1640.07 1057.82 1621.4 1071.69 1599.67 1077.96C1589.53 1080.76 1569.8 1084.09 1563.13 1084.09C1554.73 1084.09 1542.73 1087.69 1536.33 1092.09C1523.27 1101.02 1520.47 1117.56 1527.27 1144.09C1529.93 1154.76 1530.87 1161.42 1530.87 1172.09C1531 1184.89 1530.6 1186.76 1527.27 1193.82C1522.6 1203.16 1513.53 1211.56 1497.67 1220.62C1486.47 1227.16 1481.4 1231.82 1484.33 1232.89C1490.07 1235.02 1494.87 1239.56 1497.27 1245.02C1502.6 1257.02 1497.67 1276.36 1485 1292.76C1459.8 1325.56 1454.47 1356.22 1464.87 1409.42C1476.33 1468.22 1478.73 1486.09 1478.87 1511.42C1479 1536.49 1477.4 1542.49 1466.47 1557.02C1457.8 1568.62 1442.47 1583.96 1436.33 1587.02C1425.8 1592.36 1376.87 1600.76 1312.33 1608.09C1267.67 1613.16 1241.13 1614.76 1205.67 1614.49C1171.8 1614.22 1170.73 1614.36 1157.67 1617.82C1123.93 1626.89 1095.67 1647.29 1082.33 1672.22C1075 1685.96 1073 1694.09 1071.53 1714.09C1070.87 1724.36 1069.93 1733.69 1069.53 1735.02C1068.47 1738.76 1065.27 1737.82 1062.73 1733.02",
                  stroke: "#3F3B37",
                }),
                C("path", {
                  d: "M807 98.7547C815.8 99.5547 830.2 101.421 839 102.888C847.8 104.355 867.267 107.288 882.333 109.554C943.533 118.488 1011.4 135.021 1060.87 153.021C1082.33 160.755 1134.87 187.021 1152.2 198.754C1206.2 235.021 1267 298.088 1302.6 354.888C1321.93 385.688 1340.47 422.621 1379 506.754C1404.87 563.288 1410.33 578.355 1411.4 594.888C1412.2 610.488 1410.2 618.221 1401.67 630.621C1397.93 636.221 1394.47 641.821 1393.93 643.154C1393.4 644.621 1393.93 649.288 1395 653.688C1397.4 662.621 1396.87 665.821 1391.93 671.154C1386.07 677.288 1378.07 678.888 1343.67 680.221C1326.47 680.888 1307 682.355 1300.47 683.421C1277.53 687.421 1259.67 697.021 1233.67 719.421C1202.07 746.754 1192.87 751.021 1148.07 758.754C1119.8 763.688 1104.87 767.821 1089.67 775.288C1069.4 785.288 1060.73 795.554 1042.6 831.421C1030.07 855.954 1023.93 865.021 1010.6 879.021C988.6 901.954 961.667 916.354 927.667 923.688C915.8 926.221 894.867 926.621 839 925.288C817 924.754 814.2 925.021 805.667 927.688C795.267 931.021 784.867 937.421 771 949.021C763.4 955.421 761.667 957.688 761.4 961.154C760.733 969.821 746.733 993.421 742.333 993.421C734.2 993.421 735.4 975.154 745 952.888C748.2 945.288 756.467 932.354 766.867 918.754C777.133 905.154 787.4 884.354 789.133 873.421C790.733 863.421 793.933 857.421 804.2 845.421C814.067 833.821 817.533 827.021 821.533 811.688C827.133 790.088 833.4 780.354 846.333 773.554C850.733 771.154 854.867 769.554 855.533 769.954C856.067 770.354 857 776.221 857.4 783.021C858.467 799.421 860.333 804.888 867.667 812.088C874.733 819.288 883.4 822.488 898.333 823.688C922.867 825.554 941.933 814.088 950.6 792.221C953.267 785.421 953.533 782.754 953.267 763.688C953 737.554 953.933 734.754 963.933 734.754C966.733 734.754 983.8 737.688 1001.93 741.421C1042.73 749.554 1052.33 750.354 1075 747.554C1204.33 731.421 1269.8 677.555 1283 576.488C1284.07 567.955 1285 549.821 1285.13 535.021C1285.27 520.621 1285.67 505.421 1286.07 501.421C1287 494.221 1287 494.088 1291.53 494.088C1299.53 493.955 1303.8 484.621 1298.87 477.688C1296.2 473.821 1295.27 473.955 1289.67 478.888C1287 481.288 1284.73 482.888 1284.47 482.621C1284.33 482.355 1282.47 473.688 1280.47 463.421C1275.53 437.821 1264.07 389.688 1260.2 377.688C1249.4 344.754 1215.27 293.421 1179.8 257.021C1172.2 249.155 1162.73 240.354 1158.87 237.288C1148.87 229.554 1073 192.354 1040.33 179.154C1015.13 169.021 959.8 152.888 917.667 143.554C865.667 131.954 827.533 127.821 751.667 125.288C700.2 123.554 679.267 124.221 661.667 128.088C645.933 131.555 618.067 136.621 595.667 140.088C568.067 144.488 543.933 150.221 518.067 158.754C505.133 163.021 491.133 167.155 486.733 167.955C465.8 171.688 362.2 231.954 323.667 262.754C299 282.488 246.733 337.688 222.067 370.088C209.133 387.155 168.067 451.288 160.733 466.088C150.6 486.088 132.467 567.021 125.8 622.088C124.733 630.888 122.867 645.955 121.667 655.421C120.6 665.021 118.733 676.088 117.533 680.088C111.533 702.621 116.333 751.555 129.133 796.088C135.8 819.288 153.533 852.488 174.2 880.355C180.867 889.288 189.8 901.688 194.067 907.688C205.133 923.554 221 941.288 233.933 952.488C250.067 966.354 281.667 987.021 300.733 996.221C318.6 1004.76 340.6 1018.22 385.667 1048.09C401.8 1058.76 417.4 1068.62 420.333 1070.09C423.667 1071.69 424.867 1072.76 423.533 1073.02C419.4 1073.96 386.067 1071.02 384.733 1069.69C383.667 1068.62 383.8 1067.16 384.867 1064.36C386.2 1061.16 386.2 1059.56 384.6 1055.69C382.6 1051.16 378.2 1047.42 376.6 1049.02C376.067 1049.42 377 1051.29 378.333 1053.16C382.867 1058.76 381.933 1060.36 374.733 1059.29L368.333 1058.36L370.867 1061.29C373.4 1064.09 373.4 1064.09 370.733 1064.09C368.067 1064.09 349.4 1057.96 340.333 1054.09C337.4 1052.76 333.267 1050.36 331.267 1048.62C329 1046.76 325.667 1045.42 323.267 1045.42C314.867 1045.42 299.4 1035.69 301.8 1031.96C302.733 1030.49 305.8 1031.82 314.067 1037.16C317.933 1039.69 321.533 1041.42 322.067 1040.89C323.133 1039.69 311.533 1028.76 306.067 1025.96C303 1024.36 301.667 1024.22 300.2 1025.56C297.133 1028.09 297.933 1034.22 301.933 1037.96C308.867 1044.49 305.267 1043.96 279.667 1034.89C273.4 1032.62 265.533 1030.76 262.2 1030.76C255.133 1030.76 237.8 1026.62 231.8 1023.42C225.533 1020.22 218.333 1013.42 218.333 1010.76C218.333 1009.42 219.267 1007.69 220.333 1006.76C222.733 1004.76 223 994.621 220.733 992.355C217.8 989.421 216.733 990.621 217.267 996.088C217.8 1002.22 216.867 1002.76 213.8 998.088C210.733 993.421 209 993.954 209.933 999.421C210.333 1002.09 210.067 1004.09 209.4 1004.09C201 1004.09 159.667 944.088 140.333 903.688C128.2 878.354 104.867 805.688 97.8001 771.288C95.9334 762.621 93.0001 749.688 91.1334 742.621C81.1334 703.955 85.0001 634.621 101.8 556.355C108.467 525.288 109.4 523.555 112.867 535.821C113.8 539.155 115.133 541.421 116.067 541.021C118.733 540.221 124.067 527.821 124.2 522.088C124.333 517.155 124.067 516.754 121 517.154C111 518.354 111 518.355 110.6 513.821C109.267 500.221 136.733 442.888 168.067 393.421C181.933 371.688 193.133 356.754 212.467 334.754C221.267 324.754 237.133 306.221 247.8 293.421C277.4 257.821 298.733 238.754 334.333 215.421C379.267 186.088 419.933 167.288 488.333 144.088C509.667 136.888 537.533 127.421 550.333 123.021C597 107.021 631.533 99.6883 673.667 96.8883C688.6 95.955 791 97.4214 807 98.7547ZM751 151.955C766.2 155.155 775.267 159.288 786.867 168.221C801 179.154 804.6 183.021 806.067 188.888C806.733 191.688 808.333 198.221 809.533 203.155C811.533 212.221 814.6 219.421 819.667 228.088C822.733 233.155 822.733 234.088 819.667 258.754C813.8 305.421 833.533 371.555 855 376.888C857.267 377.421 861 376.621 866.2 374.221C870.467 372.354 875.267 370.754 876.867 370.754C878.6 370.754 882.733 373.821 887.4 378.621C893 384.488 896.333 386.755 900.067 387.421C907.4 388.888 913.533 387.155 920.2 382.088C927.8 376.355 933.4 373.421 937 373.421C938.6 373.421 941.533 372.488 943.667 371.288C947.133 369.154 947.667 369.155 953.4 372.088C963.8 377.288 972.867 373.554 979 361.288C980.867 357.688 982.867 354.621 983.4 354.621C983.933 354.488 986.867 354.221 990.067 354.221C997.667 353.821 1003.67 347.954 1009.93 334.754C1015.8 322.221 1017 320.888 1025.93 316.754C1029.93 315.021 1035.67 311.421 1038.73 308.754C1041.67 306.221 1046.47 303.421 1049.13 302.754C1060.87 299.554 1070.2 283.421 1073.13 261.421C1077.27 230.755 1082.73 227.688 1110.73 241.154C1138.2 254.221 1158.87 269.821 1186.47 298.488C1209.27 322.088 1217 333.954 1228.87 363.688C1239.53 390.754 1248.07 420.755 1252.87 448.088C1256.87 471.288 1261.4 515.821 1260.47 523.288C1259.13 535.021 1253.93 543.288 1243.13 551.288C1237.8 555.288 1230.33 561.288 1226.47 564.621C1215.8 574.088 1210.33 577.288 1201.67 578.888C1192.47 580.488 1186.73 584.354 1183 591.154C1179.53 597.554 1181.4 598.888 1186.73 593.821C1192.2 588.488 1198.47 585.421 1203.53 585.421C1210.33 585.421 1213.93 583.155 1227 570.888C1245.8 553.155 1255.67 550.621 1260.47 562.088C1264.33 571.421 1261.4 588.888 1252.47 609.421C1230.33 660.488 1164.6 705.688 1089 721.554C1077.8 723.954 1070.47 724.621 1052.33 724.621C1026.33 724.621 1021.67 723.688 997.133 713.421C964.467 699.688 941.133 699.688 932.067 713.288C928.333 718.888 928.067 727.421 931.267 738.754C933.4 746.621 933.4 746.888 930.467 752.754C927.533 758.621 927.533 759.021 929.533 765.021C932.733 774.221 932.333 784.088 928.6 789.554C924.467 795.688 915.4 802.354 908.6 804.221C899.667 806.621 887.133 805.288 883 801.421C878.333 797.021 878.733 792.488 885 784.221C891.667 775.288 892.333 769.154 886.733 766.488C881.933 764.221 880.733 761.421 874.2 739.288C871.267 729.154 866.733 716.888 864.2 712.088C851 686.888 823.667 665.688 790.467 654.888C772.2 648.888 761.4 647.421 737.667 647.555C717.933 647.555 712.867 648.088 698.333 651.288C645.667 663.021 634.067 676.088 605.667 756.621C597.267 779.955 592.2 790.088 588.2 791.688C584.467 793.154 583.667 789.021 584.467 773.421C585.267 759.954 585 756.754 582.333 747.421C578.2 732.754 578.333 723.288 583.133 715.154C594.733 695.021 595.8 689.288 589 682.488C585.4 679.021 584.2 678.488 579.667 679.154C575.667 679.688 573.533 679.154 571 677.154C566.067 673.288 566.733 669.288 572.6 666.088C579.133 662.621 583.133 656.488 586.467 644.888C595.933 612.355 604.6 592.755 615.267 579.421C620.333 573.155 623.8 570.355 631.667 566.488C646.733 559.021 655.133 557.155 677.267 556.488C692.2 555.955 699.4 556.355 707.933 558.088C723 561.021 782.6 580.754 791.667 585.688C795.667 587.954 804.067 594.088 810.333 599.288C816.6 604.621 825.133 611.421 829.4 614.621C837.933 620.888 843.267 627.555 849.267 639.421C860.333 661.421 873.4 679.421 881 683.421C883 684.488 886.333 688.088 888.2 691.421C892.333 698.221 897.933 701.821 904.067 701.154C908.2 700.754 908.333 700.488 908.2 694.755C908.067 685.955 901.4 670.088 894.733 663.021C887.667 655.288 884.467 645.688 885.267 633.955C886.333 617.421 894.6 614.354 919.133 621.154C939.267 626.888 947.267 628.088 963.667 628.088C997 628.088 1024.33 614.088 1035 591.421C1040.6 579.421 1041.13 564.354 1036.47 550.221C1031.53 535.821 1023 523.021 1008.47 508.621C977 477.421 945.4 463.421 885 453.955C863 450.488 804.467 450.488 786.333 453.821C757.4 459.288 735 465.955 691 482.355C679.267 486.755 664.333 491.955 657.667 493.955C607.133 509.155 592.2 516.355 569.667 536.355C557.267 547.421 546.2 560.088 535.933 575.154C524.867 591.154 521 598.888 518.867 609.288C516.6 620.355 512.333 627.288 502.333 636.488C487 650.621 468.867 658.755 434.2 666.755C398.867 674.888 375.4 685.421 353.533 702.888C341.267 712.621 332.733 723.421 324.733 739.288C321 746.621 314.067 759.554 309.4 767.954C298.333 787.554 293 799.821 284.867 824.221C276.867 848.488 272.733 856.888 262.467 869.554C250.867 883.954 222.467 911.688 221.267 909.954C220.733 909.154 214.333 899.954 207 889.554C189.933 865.554 177.8 845.421 166.333 822.355C152.067 793.688 149.533 784.754 142.867 738.488C140.067 718.621 139.533 711.555 140.2 700.088C142.067 671.555 148.467 631.288 151.8 627.288C157.133 620.755 160.467 641.688 156.467 656.888C153.533 668.221 153.8 674.221 157.533 682.088C161.267 689.955 168.467 700.088 170.333 700.088C173.133 700.088 171.4 692.221 166.867 684.621C160.867 674.621 160.333 671.821 162.867 661.821C165.933 650.355 165.533 640.755 161.667 629.555C157 615.555 155.533 602.755 157.133 588.621C158.6 574.755 164.467 549.155 167.4 543.555C169.267 539.821 169.4 539.688 171.133 542.088C172.2 543.421 174.6 549.688 176.467 555.955C181 570.888 185.133 578.755 190.867 583.821C197.8 589.821 203.933 591.021 222.333 589.955C238.067 589.021 238.067 589.021 241.533 592.488C245.933 596.888 245.933 600.088 241.533 616.755C235.533 639.688 237.8 649.288 253.133 667.955C265 682.488 270.333 694.221 266.2 696.888C265.4 697.288 260.6 695.821 255.533 693.421C245.133 688.621 242.2 688.755 234.067 694.355C227.4 698.888 220.467 698.221 202.6 691.021C188.733 685.288 185 684.488 185 686.621C185 691.155 206.333 700.355 221.133 702.088C227.4 702.888 229.8 702.488 236.733 699.555C250.333 693.821 250.6 694.488 239.667 707.955C230.067 720.088 223.133 732.888 220.2 744.088C217.8 753.688 218.467 759.021 223.133 768.355C225.533 773.021 226.333 776.888 226.333 782.888C226.333 788.754 226.733 790.888 228.067 790.355C229.133 790.088 229.667 786.888 229.667 781.288C229.667 773.821 229.133 771.821 225.4 766.221C222.2 761.288 221 758.088 221 753.954C221 741.954 230.733 723.821 244.733 709.421L252.467 701.421H260.467C266.867 701.421 269.4 700.755 273 698.088C282.733 690.888 298.2 695.554 312.6 709.688C321 717.954 323.267 718.888 321.933 713.154C319.8 704.621 303.133 692.221 291 690.088C278.067 687.688 273.933 684.755 261.933 669.021C242.2 643.021 241.4 640.355 246.867 619.021C250.867 603.555 251.133 597.821 248.2 593.688C244.867 588.888 241.4 587.821 225.4 586.621C207.533 585.288 200.733 583.688 194.067 579.288C186.6 574.488 183.133 566.888 177 542.088C171.933 521.955 171.4 518.221 171.933 507.421C172.6 491.821 176.2 483.821 188.467 470.888L197.533 461.288L200.067 464.355C206.467 472.355 215.133 486.888 227.533 510.621C234.867 524.888 243.267 539.155 245.933 542.488C252.067 550.088 261 554.088 275.267 556.088C298.067 559.155 306.333 563.821 320.6 582.088C333.533 598.621 347.4 619.688 349.267 625.688C350.6 630.221 350.467 631.288 348.067 634.488C346.6 636.488 341.933 639.421 337.533 641.288C325.4 646.088 294.333 668.355 294.333 672.088C294.333 676.488 307.133 670.888 315.4 663.021C318.333 660.221 326.867 654.755 334.333 650.755C350.2 642.355 355.267 637.955 356.333 631.021C356.867 628.355 357.4 625.288 357.667 624.355C359 620.488 364.333 623.154 374.733 633.154C386.733 644.621 399.4 652.755 413.4 658.088C423.133 661.688 428.333 662.355 429.8 659.821C431.4 657.288 425.267 653.555 412.467 649.555C395.533 644.221 392.6 642.621 379.667 630.221C373.4 624.221 364.733 617.421 360.2 615.154C350.733 610.088 344.733 603.955 338.333 592.755C332.6 582.621 315.933 565.821 305.933 560.221C301.133 557.554 292.2 554.355 281.933 551.955C273 549.688 264.067 546.755 261.933 545.288C259.933 543.821 258.333 543.288 258.333 544.088C258.333 544.755 257.8 545.421 257 545.421C254.733 545.421 245 529.688 232.067 505.021C225.133 491.688 216.467 476.754 212.867 471.688C209.133 466.488 205.8 460.221 205 456.888C201.533 441.021 212.733 416.488 232.067 397.821C243.8 386.355 253.133 381.421 263.133 381.421C270.733 381.421 272.067 382.221 287.267 395.288C300.867 407.021 307 409.288 326.867 410.621C345.267 411.821 346.867 412.488 361.267 424.355L369 430.888V451.821C369 476.621 370.733 492.755 375.133 507.821C379.667 523.421 381.4 526.221 406.2 561.154L428.333 592.221L437.667 591.421C468.2 588.755 476.067 583.155 479.533 561.421C480.333 556.621 481 535.688 481 514.754C481 465.421 483 453.554 492.467 447.154C500.467 441.688 505 436.355 505 432.355C505 427.955 502.2 425.021 501.267 428.088C500.867 429.155 496.467 434.354 491.4 439.688C486.067 445.421 480.6 452.621 478.6 457.154L475 464.754L474.733 512.754C474.6 539.154 474.067 562.621 473.667 565.021C472.467 571.421 467.4 576.488 458.067 580.888C447.4 585.688 439.4 585.954 433.4 581.688C428.733 578.354 406.867 549.955 394.867 531.288C381.267 510.488 379.133 502.621 377 463.421C375.133 430.088 374.067 424.754 366.067 408.221C362.333 400.488 359.267 392.488 359.133 390.488C359 387.421 358.467 386.754 356.6 387.288C350.333 388.888 346.333 377.421 346.333 357.555C346.333 341.421 348.333 332.088 354.6 318.221C359.533 307.288 360.067 305.288 360.867 290.888C361.533 280.355 362.6 274.088 364.067 271.154C366.733 266.088 376.2 258.088 400.333 240.088C431 217.155 445.133 208.888 463 203.021C467.4 201.555 475.8 198.221 481.667 195.688C487.533 193.021 495.667 190.488 499.667 189.955C505.933 189.288 507.533 189.555 510.733 192.088C517.667 197.555 514.6 209.154 499.667 233.288C482.067 261.821 481.933 266.888 497.667 304.621C502.333 315.821 502.733 317.688 503.8 336.621C505.133 360.355 507.8 372.621 513.533 381.154C521.667 393.421 534.467 398.754 555.8 398.754C561.4 398.754 567.133 399.155 568.333 399.555C572.2 401.021 574.333 407.554 574.333 417.688C574.467 435.554 578.467 445.421 587.667 450.621C591.667 452.888 604.867 455.954 621 458.221C624.467 458.754 627.267 458.088 631.667 455.555C647.533 446.488 652.733 445.688 660.867 451.288C663.8 453.421 668.2 455.555 670.6 455.955L675 456.888L674.6 467.154C674.333 473.154 674.6 477.421 675.4 477.421C677.8 477.421 679.667 473.821 681.133 466.221C682.733 457.288 680.867 453.021 674.733 451.555C672.733 451.021 667.8 448.488 663.933 445.821C657.933 441.688 656.2 441.154 651.133 441.688C647.8 442.088 641.133 444.354 636.067 446.754C618.467 455.154 600.867 453.421 589.667 442.221C583.533 435.954 581.533 430.488 580.333 415.021C579.533 403.955 577.267 398.488 572.067 395.154C569 393.154 565.933 392.754 553.8 393.154C540.467 393.554 538.733 393.288 532.333 390.088C518.333 383.288 513.667 371.421 509.8 333.955C507.4 310.888 505.667 304.488 497.4 286.355C487.4 264.488 487.8 259.155 500.6 240.355C505.533 233.288 512.067 223.688 515.133 219.155C518.2 214.621 521.667 207.554 522.867 203.554C524.6 197.954 526.467 195.021 531.667 190.355C550.067 173.821 593.667 159.821 633.267 157.955C665 156.355 679.533 161.155 694.2 177.955C704.467 189.688 705.133 190.888 706.6 198.621C707.933 205.954 710.333 208.755 719.133 212.888C728.2 217.155 731.8 223.955 736.867 246.488C741.267 265.955 742.067 267.688 752.333 282.355C762.733 297.021 768.6 303.821 774.333 307.421C777 309.155 779.933 312.355 780.733 314.621C781.667 316.888 783 320.488 783.8 322.754C785.8 328.088 789 327.954 789 322.754C789 316.621 785.8 311.555 774.467 299.421C763.133 287.555 750.867 269.955 746.333 259.421C744.733 255.688 742.333 247.554 741 241.154C739.533 234.754 737.133 226.488 735.533 222.888C732.6 215.955 723.933 206.754 720.333 206.754C716.467 206.754 713 201.688 713 195.688C712.867 188.088 710.467 181.954 704.6 174.354C701.933 170.754 699.667 166.488 699.667 164.754C699.667 160.754 705.667 153.554 711 151.288C716.867 148.754 737 149.021 751 151.955ZM870.467 157.154C879.8 160.221 900.867 165.955 917.267 169.955C975.4 184.088 1019.13 198.354 1045.4 211.688C1052.73 215.288 1067 224.621 1068.2 226.488C1069.4 228.488 1066.33 270.088 1064.47 277.154C1060.6 291.154 1052.6 300.088 1043.93 300.088C1042.47 300.088 1038.07 302.755 1034.2 306.088C1030.33 309.288 1025.13 312.755 1022.47 313.555C1015.67 315.688 1012.07 319.421 1006.87 329.688C1004.33 334.621 1000.47 340.755 998.067 343.421C994.467 347.555 993.267 348.221 989.933 347.555C984.067 346.355 977.8 350.888 974.2 358.621C971.267 365.155 965.533 369.421 959.8 369.421C956.067 369.421 949.267 361.688 947.133 354.888C943.533 343.955 943.4 339.288 945.667 321.688C946.867 312.221 947.667 301.821 947.4 298.621C946.867 292.888 946.867 292.888 945.4 296.355C943.4 300.888 941.4 315.954 939.667 341.154C938.867 352.354 937.667 362.888 937 364.621C936.333 366.488 934.333 368.088 932.067 368.754C930.067 369.154 924.867 371.955 920.6 374.888C906.2 384.755 901.933 384.488 891 373.421C881.533 363.821 877.933 363.021 866.867 367.821C859.667 371.021 857.133 371.555 853.933 370.621C840.467 366.755 831.533 344.354 829.133 309.154C828.2 294.088 827.133 287.821 824.2 279.555L820.6 269.021L823.667 256.488C827.4 240.888 826.733 233.421 820.2 219.688C817.533 213.954 815 206.088 814.333 201.021C813.533 196.221 811.533 187.554 809.533 181.821C804.467 166.221 806.6 158.354 817.4 153.288C822.2 151.021 825.133 150.754 838.333 151.154C851.8 151.688 855.667 152.354 870.467 157.154ZM352.467 288.754C355.667 293.554 354.2 301.688 347.667 316.488C333.8 347.688 335 365.955 353.4 398.088C363.4 415.555 363.4 417.288 353.667 409.955C348.6 406.088 340.2 404.221 328.867 404.088C312.6 404.088 304.733 400.354 283.667 382.754C277.4 377.554 269.8 371.688 266.733 369.688C263.533 367.688 261 365.688 261 365.021C261 362.755 285.8 330.221 295.267 319.955C320.733 292.888 346.067 279.021 352.467 288.754ZM883.667 463.555C953.4 472.221 1006.87 503.955 1024.87 547.421C1027.67 553.955 1028.2 557.555 1028.2 567.421C1028.2 581.288 1025.67 588.488 1017.53 597.421C1000.2 616.621 967.933 621.688 927.533 611.421C905.8 605.955 893 607.155 883.4 615.821C876.733 621.955 874.333 627.288 874.333 636.355C874.333 645.288 877.8 652.754 886.467 663.154C893.8 671.821 901 685.421 901 690.355C901 695.421 898.6 695.021 894.867 689.154C892.867 686.088 887 679.288 881.8 674.221C873.4 665.954 870.867 662.221 861.667 644.221C849.8 621.288 846.733 617.555 823.267 598.088C802.867 581.288 798.067 577.955 783 570.755C752.6 556.088 717.133 547.821 684.333 547.555C664.2 547.555 654.067 549.155 637.267 555.555C606.333 567.155 592.6 585.555 579.667 632.755C573.8 654.088 572.6 656.488 568.067 658.621C555.533 664.355 540.733 653.955 531.533 633.021C527 622.755 527.133 607.421 531.933 597.154C537.4 585.288 544.733 575.155 556.333 562.888C566.867 551.955 587.933 534.754 591 534.754C591.8 534.754 594.2 536.621 596.467 538.888C601.8 544.355 617.667 555.155 619.667 554.488C622.2 553.688 613.267 545.688 603 539.688C597.933 536.754 593.4 534.088 593.133 533.821C592.067 533.021 597.4 529.688 610.333 523.021C624.6 515.555 634.333 511.821 660.6 504.088C670.467 501.021 691 493.821 706.2 487.821C721.267 481.955 740.6 475.154 749 472.754C789.533 461.021 837.4 457.821 883.667 463.555ZM1295.4 484.621C1295.67 485.955 1295.27 487.688 1294.6 488.355C1293 489.955 1289.8 484.755 1291 482.621C1292.33 480.621 1294.87 481.955 1295.4 484.621ZM809.533 669.021C823.933 676.221 837 696.088 837 710.888C837 717.688 837.533 719.155 841.667 724.355C859.533 746.355 861.133 756.621 847.667 763.421C838.333 768.221 827.933 776.888 823.533 783.821C821.4 787.288 817.8 796.088 815.533 803.421C810.2 821.421 803.933 833.554 794.067 845.021C789.533 850.354 785.667 854.488 785.4 854.221C785.133 854.088 787.4 847.421 790.467 839.421C797.933 819.688 800.2 806.888 799.267 789.421C798.2 768.621 792.2 753.821 780.867 743.554C773.4 736.621 765.933 733.688 754.2 732.621C748.733 732.088 743.267 731.154 741.933 730.488C739.533 729.288 739.533 729.021 742.2 726.221C743.667 724.621 745.8 719.421 747 714.755C750.733 698.888 751.667 696.488 754.467 693.955C755.933 692.621 766.333 685.421 777.4 677.955C791.267 668.755 798.467 664.621 800.333 665.154C801.8 665.421 805.933 667.288 809.533 669.021Z",
                  stroke: "#3f3b37",
                }),
                C("path", {
                  d: "M720.319 937.022L720.326 936.835C720.525 931.436 720.525 926.053 720.326 920.685L720.319 920.499L720.435 920.354L757.042 874.59L757.042 874.589C757.902 873.52 758.498 872.265 758.783 870.923C759.068 869.582 759.034 868.193 758.683 866.868C753.216 846.427 745.06 826.802 734.43 808.507L734.427 808.502C733.752 807.31 732.806 806.293 731.667 805.533C730.527 804.774 729.226 804.292 727.867 804.127C727.866 804.127 727.865 804.127 727.864 804.127L669.617 797.653L669.432 797.632L669.305 797.495C665.651 793.54 661.841 789.731 657.886 786.076L657.749 785.949L657.729 785.764L651.278 727.61C651.277 727.609 651.277 727.608 651.277 727.607C651.112 726.248 650.631 724.947 649.871 723.807C649.111 722.668 648.095 721.722 646.903 721.047L646.898 721.045C628.626 710.438 609.034 702.291 588.629 696.814C587.305 696.46 585.917 696.422 584.576 696.704C583.234 696.985 581.978 697.577 580.907 698.433L535.166 735.039L535.021 735.156L534.834 735.149C529.436 734.933 524.054 734.933 518.686 735.149L518.5 735.156L518.354 735.04L472.544 698.433L472.542 698.432C471.474 697.572 470.218 696.976 468.877 696.691C467.536 696.406 466.147 696.44 464.822 696.791C444.397 702.262 424.788 710.417 406.507 721.044L406.502 721.047C405.31 721.722 404.293 722.668 403.533 723.807C402.774 724.947 402.292 726.248 402.127 727.607C402.127 727.608 402.127 727.609 402.127 727.61L395.653 785.857L395.632 786.042L395.495 786.169C391.54 789.824 387.731 793.633 384.076 797.588L383.95 797.725L383.764 797.745L325.61 804.197C325.609 804.197 325.608 804.197 325.607 804.197C324.248 804.362 322.947 804.843 321.807 805.603C320.668 806.363 319.722 807.38 319.047 808.572L319.045 808.576C308.438 826.848 300.291 846.44 294.814 866.845C294.46 868.169 294.422 869.557 294.704 870.899C294.985 872.24 295.577 873.496 296.432 874.566C296.432 874.567 296.433 874.567 296.433 874.567L333.039 920.308L333.156 920.454L333.149 920.64C332.933 926.038 332.933 931.421 333.149 936.788L333.156 936.974L333.04 937.12L296.433 982.93L296.432 982.932C295.572 984 294.976 985.256 294.691 986.597C294.406 987.938 294.44 989.328 294.791 990.654C300.262 1011.08 308.418 1030.69 319.044 1048.97L319.047 1048.97C319.722 1050.16 320.668 1051.18 321.807 1051.94C322.946 1052.7 324.247 1053.18 325.606 1053.35C325.607 1053.35 325.608 1053.35 325.61 1053.35L383.857 1059.82L384.042 1059.84L384.169 1059.98C387.813 1063.92 391.643 1067.75 395.588 1071.4L395.725 1071.52L395.745 1071.71L402.22 1129.98C402.22 1129.98 402.22 1129.98 402.22 1129.98C402.385 1131.34 402.866 1132.64 403.626 1133.78C404.386 1134.92 405.403 1135.87 406.595 1136.54L406.599 1136.54C424.897 1147.12 444.513 1155.24 464.937 1160.68L464.937 1160.68C466.261 1161.04 467.65 1161.07 468.991 1160.79C470.332 1160.51 471.589 1159.92 472.659 1159.06C472.659 1159.06 472.659 1159.06 472.659 1159.06L518.4 1122.46L518.545 1122.34L518.731 1122.35C524.13 1122.55 529.514 1122.55 534.882 1122.35L535.067 1122.34L535.212 1122.46L580.977 1159.06L580.977 1159.07C582.528 1160.31 584.457 1160.99 586.445 1160.99C587.183 1160.99 587.917 1160.89 588.631 1160.71C609.064 1155.23 628.681 1147.07 646.967 1136.43L646.972 1136.43C648.164 1135.75 649.181 1134.81 649.941 1133.67C650.7 1132.53 651.181 1131.23 651.346 1129.87C651.347 1129.87 651.347 1129.87 651.347 1129.86L657.821 1071.62L657.842 1071.43L657.979 1071.31C661.924 1067.66 665.753 1063.83 669.398 1059.89L669.525 1059.75L669.71 1059.73L727.98 1053.25C727.981 1053.25 727.983 1053.25 727.984 1053.25C729.342 1053.09 730.643 1052.61 731.782 1051.85C732.922 1051.09 733.868 1050.07 734.543 1048.88L734.545 1048.88C745.125 1030.58 753.241 1010.96 758.683 990.537L758.683 990.537C759.037 989.213 759.075 987.824 758.794 986.483C758.513 985.142 757.921 983.886 757.065 982.816L720.319 937.022ZM720.319 937.022L720.435 937.167L757.065 982.815L720.319 937.022ZM526.738 826.487H526.737C506.514 826.487 486.745 832.484 469.93 843.719C453.115 854.955 440.009 870.924 432.27 889.608C424.531 908.291 422.506 928.85 426.452 948.685C430.397 968.52 440.135 986.739 454.435 1001.04C468.735 1015.34 486.955 1025.08 506.789 1029.02C526.624 1032.97 547.183 1030.94 565.866 1023.2C584.55 1015.46 600.519 1002.36 611.755 985.544C622.99 968.729 628.987 948.96 628.987 928.737V928.736C628.956 901.628 618.174 875.638 599.005 856.469C579.836 837.3 553.846 826.518 526.738 826.487ZM470.486 844.551C487.136 833.425 506.711 827.487 526.736 827.487C553.58 827.518 579.316 838.195 598.298 857.176C617.279 876.158 627.957 901.894 627.987 928.738C627.987 948.763 622.049 968.338 610.923 984.988C599.798 1001.64 583.985 1014.62 565.484 1022.28C546.983 1029.94 526.625 1031.95 506.984 1028.04C487.344 1024.13 469.303 1014.49 455.142 1000.33C440.982 986.172 431.339 968.13 427.433 948.49C423.526 928.849 425.531 908.491 433.194 889.99C440.858 871.489 453.835 855.676 470.486 844.551ZM526.737 826.987C506.613 826.987 486.94 832.955 470.208 844.135C453.475 855.315 440.434 871.207 432.732 889.799C425.031 908.391 423.016 928.85 426.942 948.587C430.868 968.325 440.559 986.455 454.789 1000.69C469.019 1014.92 487.149 1024.61 506.887 1028.53C526.624 1032.46 547.083 1030.44 565.675 1022.74C584.267 1015.04 600.159 1002 611.339 985.266C622.52 968.534 628.487 948.861 628.487 928.737C628.456 901.761 617.727 875.898 598.651 856.823C579.576 837.748 553.713 827.018 526.737 826.987Z",
                  stroke: "#FF007F",
                }),
              ],
            }),
          ],
        }),
        R("div", {
          className: "text-wrapper ",
          children: [
            R("div", {
              className: "heading",
              children: [
                C("div", {
                  className: "about-text-heading heading-font",
                  ref: t,
                  children: "Skills",
                }),
                R("div", {
                  className: "subheading",
                  children: [
                    "My focused technologies: current areas of proficiency",
                    C("div", { className: "text-border", children: " " }),
                  ],
                }),
              ],
            }),
            R("div", {
              className: "skill-row",
              children: [
                C("div", {
                  className: "skillset-row",
                  children: C("div", {
                    className: "about-skills-wrapper",
                    children: C("div", {
                      className: "intro-text",
                      children: "Core",
                    }),
                  }),
                }),
                C("div", {
                  className: "skillset-row",
                  children: R("div", {
                    className: "about-skills-wrapper",
                    children: [
                      C("div", { className: "skill-list" }),
                      R("ul", {
                        className: "rhs",
                        ref: (i) => (e.current[0] = i),
                        children: [
                          C("li", {
                            className: "ticket",
                            children: C("span", { children: "HTML" }),
                          }),
                          C("li", {
                            className: "ticket",
                            children: C("span", { children: "CSS" }),
                          }),
                          C("li", { children: "JS" }),
                          C("li", { children: "SQL" }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            R("div", {
              className: "skill-row",
              children: [
                C("div", {
                  className: "skillset-row",
                  children: C("div", {
                    className: "about-skills-wrapper",
                    children: C("div", {
                      className: "intro-text",
                      children: "Libraries & Frameworks",
                    }),
                  }),
                }),
                C("div", {
                  className: "skillset-row",
                  children: R("div", {
                    className: "about-skills-wrapper",
                    children: [
                      C("div", { className: "skill-list" }),
                      R("ul", {
                        className: "rhs",
                        ref: (i) => (e.current[1] = i),
                        children: [
                          C("li", { children: "React.js" }),
                          C("li", { children: "Express" }),
                          C("li", { children: "Bootstrap" }),
                          C("li", { children: "SASS" }),
                          C("li", { children: "Node.js" }),
                          // C("li", { children: "GSAP" }),
                          // C("li", { children: "Strapi" }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            R("div", {
              className: "skill-row",
              children: [
                C("div", {
                  className: "skillset-row",
                  children: C("div", {
                    className: "about-skills-wrapper",
                    children: C("div", {
                      className: "intro-text",
                      children: "Tools & Platforms",
                    }),
                  }),
                }),
                C("div", {
                  className: "skillset-row",
                  children: C("div", {
                    className: "about-skills-wrapper",
                    children: R("ul", {
                      className: "rhs",
                      ref: (i) => (e.current[2] = i),
                      children: [
                        C("li", { children: "Git" }),
                        C("li", { children: "MongoDB" }),
                        // C("li", { children: "Vercel" }),
                        // C("li", { children: "AWS EC2" }),
                        C("li", { children: "Linux" }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
};
const fp = () => {
  const t = P.useRef(null),
    e = P.useRef([]),
    n = P.useRef(null),
    r = P.useRef(null),
    i = P.useRef([]);
  return (
    P.useEffect(() => {
      $2(t);
    }, []),
    P.useEffect(() => {
      XC(r);
    }, []),
    P.useEffect(() => {
      const o = document.querySelectorAll(".exp svg path");
      GC(o, i);
    }, []),
    R("div", {
      className: "journey-wrapper exp",
      ref: n,
      children: [
        C("div", {
          className: "title-img",
          children: R("svg", {
            width: "1348",
            height: "1038",
            viewBox: "0 0 1348 1038",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              C("path", {
                d: "M1119.1 413.904C1118.8 414.304 1118.5 414.704 1118.2 415.104H1118L1054.2 424.204C1054.2 424.204 1053 423.204 1050.6 421.404C1049.3 420.404 1047.6 419.204 1045.5 417.704C1069.6 416.004 1094.3 414.604 1119.1 413.904Z",
                fill: "white",
              }),
              C("path", {
                d: "M631.541 71.3666L631.538 71.3648C629.3 70.1528 627.899 67.8223 627.899 65.2045C627.899 63.2529 628.683 61.7455 629.941 60.7165C631.209 59.6789 632.99 59.1045 634.999 59.1045H669.199C670.436 59.1045 671.489 59.3919 672.17 59.914C672.82 60.4115 673.177 61.1516 673.006 62.2255L673.001 62.2544L673 62.2837C672.911 64.4133 671.134 66.1045 668.999 66.1045H647.799H647.699H647.679L647.658 66.1062C646.2 66.2277 645.077 67.4534 645.201 68.946L645.201 68.946L645.202 68.9597C645.321 70.0266 646.038 71.0276 647.173 71.2886C655.948 73.8818 664.424 76.9734 672.802 80.5641L672.81 80.5674L672.818 80.5705C674.406 81.188 675.399 82.7885 675.399 84.5045C675.399 84.8322 675.317 85.1715 675.214 85.5832L675.214 85.5832L675.212 85.5921C674.679 87.9045 672.367 89.2512 670.029 88.6217L670.025 88.6204C656.396 85.0942 640.736 76.4448 632.571 71.9354C632.213 71.7376 631.869 71.5477 631.541 71.3666Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M714.405 87.944L714.405 87.944L714.4 87.946C712.355 88.8351 709.853 87.8536 708.961 85.8119C708.787 85.3747 708.695 84.9292 708.598 84.3514C708.521 82.5717 709.594 80.8919 711.273 80.2737L711.273 80.2736L736.473 70.9736L736.475 70.9727C737.496 70.5898 738.1 69.5841 738.1 68.5045V68.4796L738.097 68.4547C737.974 67.2273 736.984 66.2045 735.7 66.2045L735.696 66.2045L709.6 66.4045C709.599 66.4045 709.598 66.4045 709.598 66.4045C707.965 66.4035 706.7 65.1181 706.7 63.6045V63.6045V63.6045V63.6045V63.6045V63.6045V63.6045V63.6045V63.6045V63.6045V63.6045V63.6045V63.6045V63.6045V63.6045V63.6045V63.6045V63.6044V63.6044V63.6044V63.6044V63.6044V63.6044V63.6044V63.6044V63.6044V63.6044V63.6044V63.6044V63.6044V63.6044V63.6044V63.6044V63.6044V63.6044V63.6044V63.6043V63.6043V63.6043V63.6043V63.6043V63.6043V63.6043V63.6043V63.6043V63.6043V63.6043V63.6042V63.6042V63.6042V63.6042V63.6042V63.6042V63.6042V63.6042V63.6042V63.6041V63.6041V63.6041V63.6041V63.6041V63.6041V63.6041V63.604V63.604V63.604V63.604V63.604V63.6039V63.6039V63.6039V63.6039V63.6039V63.6039V63.6038V63.6038V63.6038V63.6038V63.6037V63.6037V63.6037V63.6037V63.6037V63.6036V63.6036V63.6036V63.6036V63.6035V63.6035V63.6035V63.6034V63.6034V63.6034V63.6034V63.6033V63.6033V63.6033V63.6032V63.6032V63.6032V63.6031V63.6031V63.6031V63.603V63.603V63.603V63.6029V63.6029V63.6029V63.6028V63.6028V63.6027V63.6027V63.6027V63.6026V63.6026V63.6025V63.6025V63.6024V63.6024V63.6024V63.6023V63.6023V63.6022V63.6022V63.6021V63.6021V63.602V63.602V63.6019V63.6019V63.6018V63.6018V63.6017V63.6017V63.6016V63.6016V63.6015V63.6014V63.6014V63.6013V63.6013V63.6012V63.6011V63.6011V63.601V63.601V63.6009V63.6008V63.6008V63.6007V63.6006V63.6006V63.6005V63.6004V63.6004V63.6003V63.6002V63.6001V63.6001V63.6V63.5999V63.5999V63.5998V63.5997V63.5996V63.5995V63.5995V63.5994V63.5993V63.5992V63.5991V63.5991V63.599V63.5989V63.5988V63.5987V63.5986V63.5985V63.5984V63.5984V63.5983V63.5982V63.5981V63.598V63.5979V63.5978V63.5977V63.5976V63.5975V63.5974V63.5973V63.5972V63.5971V63.597V63.5969V63.5968V63.5967V63.5966V63.5964V63.5963V63.5962V63.5961V63.596V63.5959V63.5958V63.5957V63.5955V63.5954V63.5953V63.5952V63.5951V63.5949V63.5948V63.5947V63.5946V63.5944V63.5943V63.5942V63.5941V63.5939V63.5938V63.5937V63.5935V63.5934V63.5933V63.5931V63.593V63.5928V63.5927V63.5926V63.5924V63.5923V63.5921V63.592V63.5918V63.5917V63.5915V63.5914V63.5912V63.5911V63.5909V63.5908V63.5906V63.5905V63.5903V63.5901V63.59V63.5898V63.5897V63.5895V63.5893V63.5892V63.589V63.5888V63.5887V63.5885V63.5883V63.5881V63.588V63.5878V63.5876V63.5874V63.5872V63.5871V63.5869V63.5867V63.5865V63.5863V63.5861V63.5859V63.5857V63.5856V63.5854V63.5852V63.585V63.5848V63.5846V63.5844V63.5842V63.584V63.5838V63.5836V63.5834V63.5831V63.5829V63.5827V63.5825V63.5823V63.5821V63.5819V63.5816V63.5814V63.5812V63.581V63.5808V63.5805V63.5803V63.5801V63.5798V63.5796V63.5794V63.5791V63.5789V63.5787V63.5784V63.5782V63.578V63.5777V63.5775V63.5772V63.577V63.5767V63.5765V63.5762V63.576V63.5757V63.5755V63.5752V63.5749V63.5747V63.5744V63.5742V63.5739V63.5736V63.5734V63.5731V63.5728V63.5725V63.5723V63.572V63.5717V63.5714V63.5712V63.5709V63.5706V63.5703V63.57V63.5697V63.5694V63.5691V63.5689V63.5686V63.5683V63.568V63.5677V63.5674V63.5671V63.5668V63.5664V63.5661V63.5658V63.5655V63.5652V63.5649V63.5646V63.5642V63.5639V63.5636V63.5633V63.563V63.5626V63.5623V63.562V63.5616V63.5613V63.561V63.5606V63.5603V63.56V63.5596V63.5593V63.5589V63.5586V63.5582V63.5579V63.5575V63.5572V63.5568V63.5564V63.5561V63.5557V63.5554V63.555V63.5546V63.5543V63.5539V63.5535V63.5531V63.5528V63.5524V63.552V63.5516V63.5512V63.5509V63.5505V63.5501V63.5497V63.5493V63.5489V63.5485V63.5481V63.5477V63.5473V63.5469V63.5465V63.5461V63.5457V63.5453V63.5448V63.5444V63.544V63.5436V63.5432V63.5427V63.5423V63.5419V63.5415V63.541V63.5406V63.5402V63.5397V63.5393V63.5388V63.5384V63.5379V63.5375V63.537V63.5366V63.5361V63.5357V63.5352V63.5348V63.5343V63.5338V63.5334V63.5329V63.5324V63.532V63.5315V63.531V63.5305V63.5301V63.5296V63.5291V63.5286V63.5281V63.5276V63.5271V63.5266V63.5261V63.5256V63.5251V63.5246V63.5241V63.5236V63.5231V63.5226V63.5221V63.5216V63.5211V63.5205V63.52V63.5195V63.519V63.5184V63.5179V63.5174V63.5168V63.5163V63.5158V63.5152V63.5147V63.5141V63.5136V63.513V63.5125V63.5119V63.5114V63.5108V63.5102V63.5097V63.5091V63.5085V63.508V63.5074V63.5068V63.5062V63.5057V63.5051V63.5045C706.7 61.8806 707.976 60.6045 709.6 60.6045H752.5V67.2045C752.5 70.0001 750.823 72.5215 748.204 73.6445C748.203 73.6446 748.203 73.6448 748.203 73.6449L714.405 87.944Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M710.55 131.107L710.5 131.605C710.55 131.107 710.551 131.107 710.551 131.107L710.55 131.107ZM713.7 104.905H713.708L713.717 104.904C717.964 104.754 725.633 104.606 732.232 105.339C735.537 105.706 738.534 106.291 740.691 107.187C742.882 108.097 744 109.233 744 110.605C744 111.52 743.653 112.569 742.977 113.719C742.303 114.864 741.321 116.079 740.097 117.317C737.65 119.794 734.28 122.322 730.616 124.539C726.953 126.755 723.017 128.648 719.448 129.861C715.856 131.082 712.717 131.585 710.608 131.116L710.579 131.11L710.555 131.108L710.554 131.108L710.554 131.107L710.549 131.107C710.543 131.106 710.531 131.104 710.514 131.101C710.481 131.094 710.433 131.083 710.378 131.064C710.261 131.024 710.153 130.964 710.082 130.883C710.025 130.818 709.965 130.711 709.985 130.497C710.007 130.262 710.128 129.891 710.491 129.343C711.219 128.246 712.821 126.583 716.036 124.112C719.239 121.649 724.011 118.406 731.045 114.141C731.271 114.02 731.421 113.814 731.457 113.563C731.489 113.337 731.421 113.13 731.347 112.981L731.311 112.908L731.253 112.851L731.246 112.843C731.201 112.799 731.129 112.727 731.05 112.667C730.971 112.608 730.813 112.505 730.6 112.505C728.201 112.505 723.26 112.454 718.864 111.773C716.662 111.432 714.633 110.938 713.136 110.232C711.646 109.529 710.824 108.688 710.703 107.707C710.901 106.153 712.202 104.905 713.7 104.905Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M935.328 130.088L935.396 129.569L935.396 129.569L935.396 129.569L935.396 129.565L935.399 129.547C935.401 129.531 935.404 129.507 935.409 129.475C935.419 129.409 935.434 129.312 935.455 129.183C935.497 128.927 935.565 128.55 935.664 128.07C935.862 127.11 936.186 125.742 936.69 124.117C937.698 120.864 939.423 116.593 942.284 112.504C945.145 108.417 949.136 104.518 954.682 101.989C959.892 99.6138 966.503 98.4331 974.888 99.4714C974.052 99.8972 972.903 100.515 971.53 101.338C968.589 103.102 964.617 105.809 960.487 109.586C952.316 117.06 943.516 128.736 940.888 145.586C940.885 145.585 940.882 145.584 940.879 145.584C940.526 145.495 940.008 145.367 939.338 145.207C937.998 144.886 936.052 144.438 933.61 143.928C928.726 142.907 921.86 141.636 913.9 140.634C898.516 138.697 879.004 137.76 861.829 141.609C862.451 141.05 863.312 140.331 864.432 139.513C867.104 137.561 871.246 135.049 877.102 132.835C888.809 128.407 907.392 125.161 934.813 129.997L935.328 130.088Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M383.799 148.256C383.535 148.49 383.317 148.691 383.144 148.855C375.193 132.61 363.299 122.012 353.349 115.462C348.31 112.144 343.766 109.863 340.48 108.41C339.157 107.825 338.037 107.374 337.17 107.044C352.551 105.49 365.178 111.217 374.086 117.501C378.741 120.784 382.372 124.213 384.839 126.822C386.073 128.125 387.014 129.223 387.646 129.993C387.962 130.379 388.201 130.682 388.36 130.888C388.439 130.991 388.499 131.07 388.538 131.122L388.582 131.181L388.593 131.195L388.595 131.199L388.596 131.199L389 130.905L388.596 131.199L388.825 131.514L389.187 131.368C414.991 120.957 436.319 121.087 451.184 123.809C458.619 125.17 464.441 127.181 468.399 128.848C470.038 129.539 471.358 130.17 472.34 130.672C439.352 127.617 417.087 132.111 402.985 137.462C395.764 140.202 390.687 143.165 387.409 145.451C385.77 146.593 384.581 147.566 383.799 148.256Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M1296.88 359.376C1296.82 359.403 1296.76 359.429 1296.7 359.454C1295.28 349.675 1290.91 342.15 1286.87 337.044C1284.8 334.432 1282.81 332.449 1281.33 331.118C1281.05 330.862 1280.79 330.63 1280.55 330.423C1288.31 332.353 1293.61 337.258 1297.04 341.866C1298.89 344.364 1300.19 346.768 1301.03 348.547C1301.44 349.436 1301.74 350.168 1301.94 350.675C1302.04 350.929 1302.11 351.127 1302.16 351.26C1302.18 351.326 1302.2 351.377 1302.21 351.41L1302.22 351.447L1302.22 351.456L1302.22 351.458L1302.22 351.458L1302.22 351.458L1302.34 351.829L1302.73 351.804C1317.98 350.811 1329.06 354.535 1336.32 358.494C1339.96 360.474 1342.64 362.515 1344.4 364.057C1344.72 364.333 1345.01 364.593 1345.27 364.833C1329.08 357.984 1317 356.595 1308.85 356.98C1304.58 357.182 1301.4 357.871 1299.27 358.514C1298.21 358.835 1297.41 359.145 1296.88 359.376Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M237.464 855.133C241.643 850.955 243.669 846.206 241.989 844.527C240.31 842.848 235.561 844.874 231.383 849.052C227.204 853.231 225.178 857.979 226.857 859.659C228.537 861.338 233.285 859.312 237.464 855.133Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M255 839.704V833.704C255 831.704 255.8 829.804 257.2 828.404L269.8 815.604C270.4 815.004 271.3 815.004 271.9 815.604C272 815.704 272.2 815.904 272.2 816.104C273.4 819.304 273.5 822.804 272.2 826.004C271.7 827.204 271 828.304 270 829.104L256.6 840.504C256.2 840.904 255.5 840.804 255.2 840.404C255.1 840.204 255 839.904 255 839.704Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M290.3 814.604C288.9 809.904 288.9 804.904 290.2 800.204C291 797.404 292.5 794.804 294.6 792.804C299.1 788.504 308.7 779.304 316.4 773.004C317.1 772.404 318.1 772.504 318.7 773.204C318.8 773.304 318.8 773.404 318.9 773.504C322 778.604 322.6 784.904 320.5 790.604C320.5 790.604 303.3 809.004 291 815.004C290.8 815.004 290.5 815.004 290.3 814.604ZM290.3 814.604C290.3 814.704 290.3 814.704 290.3 814.604Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M380.8 747.204C380.8 747.204 351.8 768.604 336.7 779.204C336.1 779.704 335.2 779.504 334.8 778.904C334.7 778.704 334.6 778.504 334.5 778.204C333.7 769.504 334.7 737.304 374 717.304C375.8 716.404 378.1 717.104 379 718.904C379.2 719.404 379.4 719.904 379.4 720.404L380.8 747.204Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M456.8 645.904L458.6 689.204L401.2 731.404C400.6 731.804 399.8 731.704 399.4 731.104C399.2 730.904 399.1 730.604 399.1 730.304V709.704C399.1 700.204 402.9 691.004 409.7 684.304C420.8 673.104 439.4 656.004 456.8 645.904Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M369.5 626.604C369.3 625.404 368.1 624.604 366.9 624.804C366.3 624.904 365.8 625.204 365.4 625.704L355.5 640.004C354.5 641.504 353.9 643.304 353.9 645.104V652.804C353.9 652.804 367.9 637.904 369.3 632.704C369.8 630.704 369.9 628.604 369.5 626.604Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M383 618.304L396.1 604.504C398 602.504 399 599.904 399 597.204V585.804C399 585.304 398.6 585.004 398.2 585.004C398 585.004 397.7 585.104 397.6 585.304L390.6 592.904C385.2 598.804 382.2 606.504 382.2 614.504V618.104C382.2 618.404 382.4 618.604 382.7 618.604C382.8 618.504 382.9 618.404 383 618.304Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M424.3 571.503C430.2 565.703 433.5 557.803 433.5 549.503V540.604C433.5 540.004 433 539.604 432.5 539.604C432.2 539.604 431.9 539.703 431.8 540.003L416.7 560.703C413.4 565.203 412.6 571.003 414.7 576.203C414.9 576.803 415.2 577.403 415.6 578.003C418.8 576.203 421.7 574.103 424.3 571.503Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M1087.2 415.104C1088.5 415.004 1089.7 415.004 1091 414.904C1091.1 414.904 1091.2 414.904 1091.3 414.904C1091.7 414.904 1092.1 414.904 1092.4 414.904C1095.1 414.804 1097.8 414.604 1100.5 414.504C1096.1 414.704 1091.6 414.904 1087.2 415.104ZM1087.2 415.104C1084.1 415.304 1081.1 415.404 1078 415.604M1087.2 415.104C1085.9 415.204 1084.5 415.304 1083.2 415.304M1087.2 415.104C1085.9 415.204 1084.5 415.204 1083.2 415.304M1078 415.604C1074.2 415.804 1070.3 416.104 1066.4 416.304C1067.4 416.204 1068.4 416.204 1069.4 416.104C1071.7 416.004 1074.1 415.804 1076.4 415.704C1076.7 415.704 1076.8 415.704 1077 415.704C1077.3 415.604 1077.7 415.604 1078 415.604ZM1078 415.604C1079.7 415.504 1081.4 415.404 1083.2 415.304M1078 415.604C1079.8 415.504 1081.5 415.404 1083.2 415.304M1108.6 414.204C1109.6 414.204 1110.6 414.104 1111.6 414.104C1111 414.104 1110.4 414.104 1109.8 414.204C1109.4 414.204 1109 414.204 1108.6 414.204ZM1243.5 417.904C1208.9 414.104 1171.5 413.004 1133.7 413.604C1127.4 411.504 1126.2 402.904 1126.1 397.704C1126.1 395.304 1124.4 393.304 1122 392.804C1090.5 386.304 1052.4 370.604 1035.7 362.804C1029.8 360.004 1025.9 354.304 1025.4 347.804L1022.1 299.604C1013.5 227.804 879.3 209.104 840.5 205.204C833.4 204.404 826.7 201.704 821.1 197.304C816.6 193.604 812.6 189.304 809.4 184.504C805.6 179.304 800.9 174.904 795.4 171.504C787.9 167.404 741.4 165.904 719.5 165.004C712.9 164.704 707.5 159.504 706.9 152.904C703.1 108.404 695.3 23.404 693.5 4.10397C693.4 1.70397 691.3 -0.0960286 688.9 0.00397139C686.5 0.103971 684.7 2.20397 684.8 4.50397C684.8 10.904 684.9 17.304 684.9 23.504C684.9 67.404 684 105.604 683.2 131.004C681.7 128.604 675.2 120.704 655.1 113.104C654.9 113.004 654.8 112.804 654.9 112.604C654.9 112.404 655.1 112.304 655.3 112.304C661.3 112.204 667.2 111.704 673.1 110.804C674.9 110.504 676.2 108.904 676 107.004C675.8 105.304 674.4 104.104 672.7 104.104H643.9C643.3 104.104 642.8 104.504 642.8 105.104C642.4 109.204 643.7 124.804 683.3 131.604C683.1 138.504 682.9 144.404 682.7 149.204C682.5 154.004 682.4 157.704 682.3 160.204C682.2 162.204 680.7 164.004 678.7 164.304C662.4 167.104 645.8 172.804 630.3 179.704C630.4 174.204 630.6 156.604 630.6 142.904C630.6 134.704 630.5 128.004 630.3 126.104C629.8 122.104 626.6 118.304 624.8 116.504C624.5 116.204 624 116.204 623.8 116.504C623.7 116.604 623.6 116.804 623.6 117.004L622.9 139.904H592.3C590.9 139.904 589.8 141.004 589.8 142.404C589.8 143.804 590.9 144.904 592.3 144.904H622.7L622 166.804H600.3C599.2 166.804 598.3 167.704 598.3 168.804C598.3 169.904 599.2 170.804 600.3 170.804H621.9L621.5 183.904C609 190.004 597.1 197.204 585.9 205.304C576.2 212.504 569 219.404 565.6 224.804C554.2 243.204 542.3 249.204 542.3 249.204C509.3 264.904 477.3 288.104 453.6 307.304C441.6 317.004 431.7 325.804 424.9 332.004C424.8 324.804 424.5 314.004 424.1 302.004C423.7 290.004 423.3 276.904 423 265.404H444.5C446.4 265.404 448 263.804 448 261.904C448 260.004 446.4 258.404 444.5 258.404H422.8C422.5 248.604 422.2 240.604 422.1 236.404C422.1 234.404 420.5 232.804 418.5 232.804C416.5 232.804 414.9 234.404 414.9 236.404C414.8 242.204 414.5 249.904 414.1 258.404H386C384.1 258.404 382.5 260.004 382.5 261.904C382.5 263.804 384.1 265.404 386 265.404H413.8C413.5 271.104 413.3 277.004 413 282.904H393.5C392.4 282.904 391.5 283.804 391.5 284.904C391.5 286.004 392.4 286.904 393.5 286.904H412.8C411.4 314.904 410 341.904 410 341.904H345.5V431.904C354.9 432.104 363.8 432.304 372.3 432.304C375.2 437.904 376.3 447.304 366 460.804C348 484.204 352 512.904 353 524.404C354 535.904 347.5 557.904 322.5 607.404C302 647.904 304.7 658.904 306.3 661.604C306.5 661.904 306.8 661.904 307.1 661.704C307.2 661.704 307.3 661.604 307.3 661.504C315.8 641.204 344.4 584.304 362.8 549.504C381.5 514.204 392.5 487.504 418.8 486.504C441.3 485.604 428.7 495.804 428.7 495.804C362.2 564.504 315 681.204 313.5 684.804C314.8 682.304 316.2 679.804 317.5 677.404C320.5 672.804 323.4 670.204 325.5 668.704C327.6 667.204 329 666.904 329 666.904C329.7 672.304 330.8 675.204 331.4 676.504C331.7 677.104 332.4 677.404 333 677.204C338.9 675.304 342.4 659.804 343.3 655.804C343.5 655.104 343.1 654.504 342.4 654.304C341.7 654.104 341.1 654.504 340.9 655.204C340.2 657.504 338.6 661.604 335.5 661.604C330.9 661.604 335.4 646.304 335.5 645.904C360.5 604.604 384 575.304 402.7 555.504C421.4 535.604 435.2 525.104 440.8 521.204C441.8 520.504 443.3 520.704 444 521.804C444.2 522.004 444.3 522.304 444.4 522.604C449.2 542.204 447.9 579.904 447 595.904C402.3 626.904 359.5 663.304 313.5 706.904C180.4 833.304 185.5 928.904 185.5 928.904C276.5 668.904 607 534.404 607 534.404C892 423.404 1189 444.404 1220.5 446.404C1252 448.404 1233.5 475.904 1233.5 475.904C1212.5 518.904 1161.5 600.904 1100.5 716.904C1049 814.804 1017.1 900.204 1008.4 924.504C1007.2 928.204 1009.1 932.104 1012.8 933.404C1015.6 934.304 1018.6 933.404 1020.5 931.204C1055 886.904 1093 828.104 1143.5 762.004C1195.5 694.004 1297 564.004 1297 564.004C1305.6 551.204 1314 534.304 1315.5 522.404C1324 450.904 1303.5 424.404 1243.5 417.904ZM622.2 203.004C634.7 193.704 636.6 201.304 636.8 202.804C636.8 202.904 636.9 202.904 636.9 202.904C636.9 202.904 636.9 202.904 637 202.904C673.2 166.804 716.2 178.204 758.2 178.204C800.2 178.204 805.6 203.204 805.6 203.204C800.4 203.104 795.2 203.004 790.1 203.004C701.2 203.004 628.6 220.104 588.3 232.304C573.5 227.404 608.5 213.204 622.2 203.004ZM434.4 342.804C434.4 342.604 434.5 342.504 434.6 342.404C444.8 329.304 527.7 230.504 725.7 219.804C918.2 209.504 1000.2 252.204 1005.2 292.804L1001.9 295.104C1001.9 295.104 892.8 251.204 709.6 262.804C522.2 274.604 470.3 355.404 435.3 344.404C434.5 344.304 434.2 343.504 434.4 342.804ZM964.5 293.104V329.904C964.5 331.604 963.4 332.904 962.2 332.504L944.2 326.004C942.9 325.504 941.9 323.704 941.9 321.704V286.004C941.9 284.004 943.2 282.404 944.6 282.904L961.9 288.404C963.4 288.804 964.5 290.804 964.5 293.104ZM863.5 273.404V300.704C863.5 304.304 860.6 307.304 856.9 307.304H841.8C838.7 307.304 836.2 304.804 836.2 301.704V273.404C836.2 270.204 838.8 267.504 842 267.504H857.6C860.9 267.504 863.5 270.204 863.5 273.404ZM754 271.404V299.204C754 302.904 751 306.004 747.2 306.004H731.7C728.5 306.004 726 303.404 725.9 300.304V271.504C725.9 268.204 728.6 265.504 731.9 265.504H747.9C751.3 265.404 754 268.104 754 271.404ZM631.8 282.704V313.804C631.8 315.604 630.6 317.104 628.9 317.504L606.3 323.204C605.1 323.504 603.8 322.704 603.5 321.504C603.5 321.304 603.4 321.104 603.4 320.904V288.904C603.4 286.904 604.8 285.104 606.8 284.704L628.4 279.904C629.9 279.604 631.4 280.504 631.7 282.004C631.7 282.304 631.8 282.504 631.8 282.704ZM619.9 505.404C619.6 502.404 619 499.404 618.1 496.504C617 492.704 613.6 490.104 609.7 490.004C573.6 488.604 533.9 491.804 517.3 493.404C512.7 493.804 509.2 497.804 509.4 502.504C509.6 508.104 510 514.604 510.3 518.504C510.4 520.404 512.1 521.904 514 521.904C554.2 520.404 573.6 520.304 582.8 520.604C571.3 525.604 560.1 530.704 549.2 536.004C538.3 541.304 527.7 546.804 517.2 552.504C507.2 555.804 493 556.904 483.4 557.204C477.6 557.404 472.7 552.904 472.4 547.104C472.4 547.004 472.4 546.804 472.4 546.704C472.3 531.904 473.4 514.804 474.2 504.704C474.6 499.204 475.4 493.704 476.5 488.404C476.9 486.604 478.3 485.204 480.2 485.004C498 482.804 525.7 477.704 569.5 466.704C615.9 455.104 660.5 449.104 660.5 449.104C752.5 442.004 794.1 446.704 809.7 449.704C736 466.604 674.2 484.604 619.9 505.404ZM941.6 428.404C923.7 430.704 907 433.004 892.1 435.304C853.6 435.604 802.6 431.104 745.5 430.004C666.5 428.404 573.8 447.704 541.5 457.004C509.2 466.304 450.2 473.004 426.2 474.704C402.2 476.404 400.9 467.704 399.2 451.704C398.6 445.104 399.2 438.504 400.9 432.104C551 428.604 556.3 392.704 704.9 395.104C908.9 398.404 941.9 422.004 941.9 422.004C945.7 423.604 944.1 426.204 941.6 428.404ZM578.8 399.504V372.304C578.8 370.604 579.9 369.104 581.5 368.704L599 364.704C600.2 364.504 601.4 365.304 601.7 366.504C601.7 366.704 601.7 366.804 601.7 367.004V393.404C601.7 394.904 600.8 396.204 599.4 396.604L581 401.504C580 401.704 579 401.104 578.7 400.104C578.8 399.904 578.7 399.704 578.8 399.504ZM695.5 383.904V354.204C695.5 350.804 698.1 348.104 701.5 348.004H717.5C720.9 348.004 723.5 350.804 723.5 354.204V382.804C723.6 386.604 720.6 389.704 716.8 389.804H701.3C698 389.804 695.5 387.204 695.5 383.904ZM823.5 389.704V354.804C823.5 352.404 825.4 350.504 827.8 350.504C828 350.504 828.2 350.504 828.4 350.504L846 352.704C848.2 353.004 849.9 354.804 849.8 357.104V392.904C849.8 395.704 847.5 398.004 844.8 398.004C844.5 398.004 844.2 398.004 843.8 397.904L827.9 395.104C825.3 394.604 823.5 392.304 823.5 389.704ZM963.8 420.804L946.5 414.604C945.2 414.104 944.3 412.504 944.3 410.604V377.204C944.3 375.304 945.6 373.904 946.9 374.304L963.4 379.404C964.9 379.904 966 381.804 966 384.004V418.404C966 420.004 964.9 421.204 963.8 420.804ZM1119.1 413.904C1116.6 414.004 1114.1 414.104 1111.7 414.104C1111.1 414.104 1110.5 414.104 1109.9 414.204C1109.5 414.204 1109.1 414.204 1108.7 414.304C1107.2 414.304 1105.6 414.404 1104.1 414.504C1102.9 414.504 1101.8 414.604 1100.6 414.604C1097.9 414.704 1095.2 414.804 1092.5 415.004C1092.2 415.004 1091.8 415.004 1091.4 415.004C1091.3 415.004 1091.2 415.004 1091.1 415.004C1089.8 415.104 1088.6 415.104 1087.3 415.204C1084.2 415.404 1081.2 415.504 1078.1 415.704C1077.8 415.704 1077.4 415.704 1077.1 415.804C1076.9 415.804 1076.7 415.804 1076.5 415.804C1074.2 415.904 1071.8 416.104 1069.5 416.204C1068.5 416.304 1067.5 416.304 1066.5 416.404C1064.9 416.504 1063.4 416.604 1061.8 416.704C1061.7 416.704 1061.7 416.704 1061.6 416.704C1061.3 416.704 1061 416.704 1060.7 416.804C1059.9 416.904 1059 416.904 1058.2 417.004C1057.4 417.104 1056.6 417.104 1055.8 417.204C1055.5 417.204 1055.1 417.304 1054.8 417.304C1053.7 417.404 1052.6 417.504 1051.5 417.504C1049.5 417.604 1047.6 417.804 1045.6 417.904C1018.6 399.104 929.4 345.504 784.9 341.704C784.9 341.704 664.4 333.204 573.3 368.504C547.8 378.404 520.8 383.604 493.4 383.804L388.3 384.504C384.6 384.504 381.5 381.504 381.5 377.804V358.204H473.7C500.5 358.204 527.1 353.504 552.4 344.504C593.1 329.904 668.5 308.904 765.5 308.904C914.2 308.904 951.5 333.604 1022.2 365.604C1022.2 365.604 1053.5 383.004 1106.5 398.304C1106.5 398.204 1125.8 404.404 1119.1 413.904ZM1288.2 512.204C1285.5 540.904 1248.9 592.104 1182.9 674.104C1128.1 742.204 1103.7 771.204 1092 780.604C1091.2 781.204 1090.1 781.104 1089.5 780.404C1089 779.804 1089 779.104 1089.3 778.404C1103.7 751.604 1165.6 637.604 1199.6 584.204C1232 533.304 1262.6 485.204 1271.6 471.004C1272.7 469.304 1274.9 468.804 1276.6 469.804C1277 470.104 1277.4 470.404 1277.6 470.804C1285.9 482.904 1289.7 497.604 1288.2 512.204Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M502.799 716.904L501.9 624.104C501.9 621.304 499 618.404 496.4 619.404L489 622.404C480.4 625.904 474.6 634.804 473.6 643.904C470.4 673.304 478.4 708.604 478.4 708.604C334.9 803.304 311.5 835.904 311.5 835.904C403.4 775.404 446.3 756.404 459.9 751.204C464.3 749.404 469.299 750.304 472.799 753.404C476.799 757.104 476.499 761.704 475.299 765.204C474.199 768.204 472.1 770.704 469.2 772.204C325.6 847.604 267.5 895.504 267.5 895.504C373.5 834.204 463.199 816.504 462.799 819.804C462.399 823.104 440.799 839.504 440.799 839.504C501.5 821.204 541.5 844.904 541.5 844.904C498.8 739.504 502.799 716.904 502.799 716.904Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M601 572.204C601 572.204 934.7 475.904 1120.2 495.404C1120.2 495.404 1156.4 496.204 1149.7 520.904C1143 545.604 1084.4 675.604 1067.7 740.204C1067.7 740.204 1166.7 543.904 1183.7 497.904C1183.7 497.904 1202.4 460.204 1159.7 460.904C1117 461.604 901.7 448.904 601 572.204Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M751.8 614.704C749.3 614.504 746.7 614.804 744.3 615.504L695.9 629.904C690.8 631.404 687.2 636.204 687.2 641.504V655.004C687.2 663.404 694 670.204 702.4 670.204C703.6 670.204 704.7 670.104 705.9 669.804L756.9 657.904C761.2 656.904 764.3 653.004 764.3 648.504V627.904C764.2 620.504 759.3 615.404 751.8 614.704ZM758.5 644.904C758.5 648.404 756.1 651.504 752.7 652.404L725 659.604C724.3 659.804 723.5 659.904 722.7 659.904C717.8 659.904 713.8 655.904 713.8 651.004V639.004C713.8 634.004 717.2 629.704 722 628.604L746.2 622.604C747 622.404 747.8 622.304 748.6 622.304C754.1 622.304 758.5 626.704 758.5 632.204V644.904Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M864.9 585.304C862 585.104 859.1 585.404 856.3 586.204L801 602.104C795.2 603.704 791.2 608.904 791.1 614.904V629.804C791.1 640.604 801.5 648.504 812.4 646.104L870.6 633.004C875.5 632.004 879 627.704 879.1 622.704V600.004C879.2 591.604 873.5 586.104 864.9 585.304ZM871.5 619.004C871.5 623.004 868.7 626.404 864.9 627.404L833.1 635.504C832.3 635.704 831.5 635.804 830.6 635.804C825 635.904 820.3 631.404 820.3 625.804V612.304C820.3 606.704 824.2 601.804 829.7 600.604L857.5 593.904C858.3 593.704 859.2 593.604 860.1 593.604C866.4 593.504 871.5 598.504 871.6 604.704V619.004H871.5Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M988.8 549.904C985.4 549.604 982.1 550.004 978.9 550.904L915.3 569.304C908.6 571.104 904 577.204 903.9 584.104V601.204C903.9 613.604 915.9 622.804 928.4 620.004L995.5 604.904C1001.1 603.704 1005.2 598.804 1005.3 593.004V566.804C1005.2 557.204 998.7 550.904 988.8 549.904ZM995.5 589.104C995.5 593.604 992.4 597.504 988 598.604L952 607.804C951.1 608.004 950.2 608.204 949.2 608.204C942.8 608.304 937.6 603.204 937.5 596.904V581.604C937.5 575.304 941.9 569.804 948.1 568.304L979.5 560.704C980.5 560.404 981.5 560.304 982.5 560.304C989.6 560.204 995.4 565.804 995.5 572.904V589.104Z",
                stroke: "#3c3c3c",
              }),
              C("path", {
                d: "M90.4995 957.078C106.804 927.977 160.065 887.236 242.675 957.078C345.937 1044.38 326.706 869.359 433.312 913.218C539.918 957.078 499.784 1023.49 583.815 997.179C667.846 970.863 655.722 869.359 732.646 913.218C809.57 957.078 837.162 1053.57 896.945 983.394C956.728 913.218 928.347 894.714 1014.42 885.231C1124.37 873.117 1103.47 899.434 1187.5 927.42",
                stroke: "#FF007F",
                className: "water",
              }),
            ],
          }),
        }),
        R("div", {
          className: "heading",
          children: [
            C("div", {
              className: "about-text-heading  heading-font",
              ref: t,
              children: "Journey",
            }),
            R("div", {
              className: "subheading",
              children: [
                "A Story of Growth , Learning & Professional Development",
                C("div", { className: "text-border", children: " " }),
              ],
            }),
          ],
        }),
        R("div", {
          className: "experiance-row",
          ref: r,
          children: [
            // C("div", {
            //   children: R("div", {
            //     className: "exp-content",
            //     ref: (o) => (e.current[0] = o),
            //     children: [
            //       C("div", {
            //         className: "exp-role",
            //         children: "Freelance Developer ",
            //       }),
            //       C("div", {
            //         className: "exp-name",
            //         children: "Self-employed ",
            //       }),
            //       C("div", { className: "exp-year", children: "Present" }),
            //     ],
            //   }),
            // }),
            // C("div", {
            //       children: R("div", {
            //         className: "exp-content",
            //         ref: (o) => (e.current[1] = o),
            //         children: [
            //           C("div", {
            //             className: "exp-role",
            //             children: "Sr. Frontend Developer ",
            //           }),
            //           C("div", {
            //             className: "exp-name",
            //             children: "Avalor / Swytch ",
            //           }),
            //           C("div", { className: "exp-year", children: "2021-22" }),
            //         ],
            //       }),
            //     }),
            //     C("div", {
            //       children: R("div", {
            //         className: "exp-content",
            //         ref: (o) => (e.current[2] = o),
            //         children: [
            //           C("div", {
            //             className: "exp-role",
            //             children: "Frontend Enginner ",
            //           }),
            //           C("div", {
            //             className: "exp-name",
            //             children: "Vistaar Digital ",
            //           }),
            //           C("div", { className: "exp-year", children: "2018-21" }),
            //         ],
            //       }),
            //     }),
            //     C("div", {
            //       children: R("div", {
            //         className: "exp-content",
            //         ref: (o) => (e.current[3] = o),
            //         children: [
            //           C("div", {
            //             className: "exp-role",
            //             children: "Web Developer Intern ",
            //           }),
            //           C("div", { className: "exp-name", children: "Akrotics " }),
            //           C("div", { className: "exp-year", children: "2018" }),
            //         ],
            //       }),
            //     }),
            //     C("div", {
            //       children: R("div", {
            //         className: "exp-content",
            //         ref: (o) => (e.current[4] = o),
            //         children: [
            //           C("div", {
            //             className: "exp-role",
            //             children: "Web development",
            //           }),
            //           C("div", {
            //             className: "exp-name",
            //             children: "Trycatch Classes ",
            //           }),
            //           C("div", { className: "exp-year", children: "2017-18" }),
            //         ],
            //       }),
            //     }),
            C("div", {
              children: R("div", {
                className: "exp-content",
                ref: (o) => (e.current[5] = o),
                children: [
                  C("div", { className: "exp-role", children: "BE / Btech" }),
                  C("div", {
                    className: "exp-name",
                    children: "Mumbai University ",
                  }),
                  C("div", { className: "exp-year", children: "2024" }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
};
var S4 = {},
  dp = {
    get exports() {
      return S4;
    },
    set exports(t) {
      S4 = t;
    },
  },
  rr = {},
  Vi = {},
  hp = {
    get exports() {
      return Vi;
    },
    set exports(t) {
      Vi = t;
    },
  },
  Cp = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  pp = Cp,
  mp = pp;
function zu() { }
function Fu() { }
Fu.resetWarningCache = zu;
var gp = function () {
  function t(r, i, o, s, l, a) {
    if (a !== mp) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  t.isRequired = t;
  function e() {
    return t;
  }
  var n = {
    array: t,
    bigint: t,
    bool: t,
    func: t,
    number: t,
    object: t,
    string: t,
    symbol: t,
    any: t,
    arrayOf: e,
    element: t,
    elementType: t,
    instanceOf: e,
    node: t,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes: Fu,
    resetWarningCache: zu,
  };
  return (n.PropTypes = n), n;
};
hp.exports = gp();
var Ri = {},
  vp = {
    get exports() {
      return Ri;
    },
    set exports(t) {
      Ri = t;
    },
  },
  qt = {},
  z2 = {},
  yp = {
    get exports() {
      return z2;
    },
    set exports(t) {
      z2 = t;
    },
  };
(function (t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = c);
  /*!
   * Adapted from jQuery UI core
   *
   * http://jqueryui.com
   *
   * Copyright 2014 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/category/ui-core/
   */ var n = "none",
    r = "contents",
    i = /input|select|textarea|button|object|iframe/;
  function o(f, d) {
    return (
      d.getPropertyValue("overflow") !== "visible" ||
      (f.scrollWidth <= 0 && f.scrollHeight <= 0)
    );
  }
  function s(f) {
    var d = f.offsetWidth <= 0 && f.offsetHeight <= 0;
    if (d && !f.innerHTML) return !0;
    try {
      var h = window.getComputedStyle(f),
        v = h.getPropertyValue("display");
      return d ? v !== r && o(f, h) : v === n;
    } catch {
      return console.warn("Failed to inspect element style"), !1;
    }
  }
  function l(f) {
    for (
      var d = f, h = f.getRootNode && f.getRootNode();
      d && d !== document.body;

    ) {
      if ((h && d === h && (d = h.host.parentNode), s(d))) return !1;
      d = d.parentNode;
    }
    return !0;
  }
  function a(f, d) {
    var h = f.nodeName.toLowerCase(),
      v = (i.test(h) && !f.disabled) || (h === "a" && f.href) || d;
    return v && l(f);
  }
  function u(f) {
    var d = f.getAttribute("tabindex");
    d === null && (d = void 0);
    var h = isNaN(d);
    return (h || d >= 0) && a(f, !h);
  }
  function c(f) {
    var d = [].slice.call(f.querySelectorAll("*"), 0).reduce(function (h, v) {
      return h.concat(v.shadowRoot ? c(v.shadowRoot) : [v]);
    }, []);
    return d.filter(u);
  }
  t.exports = e.default;
})(yp, z2);
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.resetState = xp;
qt.log = kp;
qt.handleBlur = F2;
qt.handleFocus = H2;
qt.markForFocusLater = Ep;
qt.returnFocus = Tp;
qt.popWithoutFocus = Lp;
qt.setupScopedFocus = Mp;
qt.teardownScopedFocus = Op;
var _p = z2,
  wp = Sp(_p);
function Sp(t) {
  return t && t.__esModule ? t : { default: t };
}
var a6 = [],
  Rr = null,
  x4 = !1;
function xp() {
  a6 = [];
}
function kp() { }
function F2() {
  x4 = !0;
}
function H2() {
  if (x4) {
    if (((x4 = !1), !Rr)) return;
    setTimeout(function () {
      if (!Rr.contains(document.activeElement)) {
        var t = (0, wp.default)(Rr)[0] || Rr;
        t.focus();
      }
    }, 0);
  }
}
function Ep() {
  a6.push(document.activeElement);
}
function Tp() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
    e = null;
  try {
    a6.length !== 0 && ((e = a6.pop()), e.focus({ preventScroll: t }));
    return;
  } catch {
    console.warn(
      [
        "You tried to return focus to",
        e,
        "but it is not in the DOM anymore",
      ].join(" ")
    );
  }
}
function Lp() {
  a6.length > 0 && a6.pop();
}
function Mp(t) {
  (Rr = t),
    window.addEventListener
      ? (window.addEventListener("blur", F2, !1),
        document.addEventListener("focus", H2, !0))
      : (window.attachEvent("onBlur", F2), document.attachEvent("onFocus", H2));
}
function Op() {
  (Rr = null),
    window.addEventListener
      ? (window.removeEventListener("blur", F2),
        document.removeEventListener("focus", H2))
      : (window.detachEvent("onBlur", F2), document.detachEvent("onFocus", H2));
}
var Ai = {},
  bp = {
    get exports() {
      return Ai;
    },
    set exports(t) {
      Ai = t;
    },
  };
(function (t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = s);
  var n = z2,
    r = i(n);
  function i(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function o() {
    var l =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    return l.activeElement.shadowRoot
      ? o(l.activeElement.shadowRoot)
      : l.activeElement;
  }
  function s(l, a) {
    var u = (0, r.default)(l);
    if (!u.length) {
      a.preventDefault();
      return;
    }
    var c = void 0,
      f = a.shiftKey,
      d = u[0],
      h = u[u.length - 1],
      v = o();
    if (l === v) {
      if (!f) return;
      c = h;
    }
    if ((h === v && !f && (c = d), d === v && f && (c = h), c)) {
      a.preventDefault(), c.focus();
      return;
    }
    var m = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),
      k =
        m != null &&
        m[1] != "Chrome" &&
        /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
    if (k) {
      var g = u.indexOf(v);
      if ((g > -1 && (g += f ? -1 : 1), (c = u[g]), typeof c > "u")) {
        a.preventDefault(), (c = f ? h : d), c.focus();
        return;
      }
      a.preventDefault(), c.focus();
    }
  }
  t.exports = e.default;
})(bp, Ai);
var Kt = {},
  Pp = function () { },
  Np = Pp,
  Xt = {},
  k4 = {},
  Vp = {
    get exports() {
      return k4;
    },
    set exports(t) {
      k4 = t;
    },
  };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/ (function (t) {
  (function () {
    var e = !!(
      typeof window < "u" &&
      window.document &&
      window.document.createElement
    ),
      n = {
        canUseDOM: e,
        canUseWorkers: typeof Worker < "u",
        canUseEventListeners:
          e && !!(window.addEventListener || window.attachEvent),
        canUseViewport: e && !!window.screen,
      };
    t.exports ? (t.exports = n) : (window.ExecutionEnvironment = n);
  })();
})(Vp);
Object.defineProperty(Xt, "__esModule", { value: !0 });
Xt.canUseDOM = Xt.SafeNodeList = Xt.SafeHTMLCollection = void 0;
var Rp = k4,
  Ap = Dp(Rp);
function Dp(t) {
  return t && t.__esModule ? t : { default: t };
}
var l8 = Ap.default,
  Ip = l8.canUseDOM ? window.HTMLElement : {};
Xt.SafeHTMLCollection = l8.canUseDOM ? window.HTMLCollection : {};
Xt.SafeNodeList = l8.canUseDOM ? window.NodeList : {};
Xt.canUseDOM = l8.canUseDOM;
Xt.default = Ip;
Object.defineProperty(Kt, "__esModule", { value: !0 });
Kt.resetState = Wp;
Kt.log = jp;
Kt.assertNodeList = Hu;
Kt.setElement = Up;
Kt.validateElement = U7;
Kt.hide = Yp;
Kt.show = Zp;
Kt.documentNotReadyOrSSRTesting = $p;
var zp = Np,
  Fp = Bp(zp),
  Hp = Xt;
function Bp(t) {
  return t && t.__esModule ? t : { default: t };
}
var yt = null;
function Wp() {
  yt &&
    (yt.removeAttribute
      ? yt.removeAttribute("aria-hidden")
      : yt.length != null
        ? yt.forEach(function (t) {
          return t.removeAttribute("aria-hidden");
        })
        : document.querySelectorAll(yt).forEach(function (t) {
          return t.removeAttribute("aria-hidden");
        })),
    (yt = null);
}
function jp() { }
function Hu(t, e) {
  if (!t || !t.length)
    throw new Error(
      "react-modal: No elements were found for selector " + e + "."
    );
}
function Up(t) {
  var e = t;
  if (typeof e == "string" && Hp.canUseDOM) {
    var n = document.querySelectorAll(e);
    Hu(n, e), (e = n);
  }
  return (yt = e || yt), yt;
}
function U7(t) {
  var e = t || yt;
  return e
    ? Array.isArray(e) || e instanceof HTMLCollection || e instanceof NodeList
      ? e
      : [e]
    : ((0, Fp.default)(
      !1,
      [
        "react-modal: App element is not defined.",
        "Please use `Modal.setAppElement(el)` or set `appElement={el}`.",
        "This is needed so screen readers don't see main content",
        "when modal is opened. It is not recommended, but you can opt-out",
        "by setting `ariaHideApp={false}`.",
      ].join(" ")
    ),
      []);
}
function Yp(t) {
  var e = !0,
    n = !1,
    r = void 0;
  try {
    for (
      var i = U7(t)[Symbol.iterator](), o;
      !(e = (o = i.next()).done);
      e = !0
    ) {
      var s = o.value;
      s.setAttribute("aria-hidden", "true");
    }
  } catch (l) {
    (n = !0), (r = l);
  } finally {
    try {
      !e && i.return && i.return();
    } finally {
      if (n) throw r;
    }
  }
}
function Zp(t) {
  var e = !0,
    n = !1,
    r = void 0;
  try {
    for (
      var i = U7(t)[Symbol.iterator](), o;
      !(e = (o = i.next()).done);
      e = !0
    ) {
      var s = o.value;
      s.removeAttribute("aria-hidden");
    }
  } catch (l) {
    (n = !0), (r = l);
  } finally {
    try {
      !e && i.return && i.return();
    } finally {
      if (n) throw r;
    }
  }
}
function $p() {
  yt = null;
}
var d6 = {};
Object.defineProperty(d6, "__esModule", { value: !0 });
d6.resetState = Xp;
d6.log = Gp;
var f2 = {},
  d2 = {};
function Fo(t, e) {
  t.classList.remove(e);
}
function Xp() {
  var t = document.getElementsByTagName("html")[0];
  for (var e in f2) Fo(t, f2[e]);
  var n = document.body;
  for (var r in d2) Fo(n, d2[r]);
  (f2 = {}), (d2 = {});
}
function Gp() { }
var qp = function (e, n) {
  return e[n] || (e[n] = 0), (e[n] += 1), n;
},
  Kp = function (e, n) {
    return e[n] && (e[n] -= 1), n;
  },
  Qp = function (e, n, r) {
    r.forEach(function (i) {
      qp(n, i), e.add(i);
    });
  },
  Jp = function (e, n, r) {
    r.forEach(function (i) {
      Kp(n, i), n[i] === 0 && e.remove(i);
    });
  };
d6.add = function (e, n) {
  return Qp(
    e.classList,
    e.nodeName.toLowerCase() == "html" ? f2 : d2,
    n.split(" ")
  );
};
d6.remove = function (e, n) {
  return Jp(
    e.classList,
    e.nodeName.toLowerCase() == "html" ? f2 : d2,
    n.split(" ")
  );
};
var h6 = {};
Object.defineProperty(h6, "__esModule", { value: !0 });
h6.log = tm;
h6.resetState = nm;
function em(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var Bu = function t() {
  var e = this;
  em(this, t),
    (this.register = function (n) {
      e.openInstances.indexOf(n) === -1 &&
        (e.openInstances.push(n), e.emit("register"));
    }),
    (this.deregister = function (n) {
      var r = e.openInstances.indexOf(n);
      r !== -1 && (e.openInstances.splice(r, 1), e.emit("deregister"));
    }),
    (this.subscribe = function (n) {
      e.subscribers.push(n);
    }),
    (this.emit = function (n) {
      e.subscribers.forEach(function (r) {
        return r(n, e.openInstances.slice());
      });
    }),
    (this.openInstances = []),
    (this.subscribers = []);
},
  Di = new Bu();
function tm() {
  console.log("portalOpenInstances ----------"),
    console.log(Di.openInstances.length),
    Di.openInstances.forEach(function (t) {
      return console.log(t);
    }),
    console.log("end portalOpenInstances ----------");
}
function nm() {
  Di = new Bu();
}
h6.default = Di;
var Y7 = {};
Object.defineProperty(Y7, "__esModule", { value: !0 });
Y7.resetState = sm;
Y7.log = lm;
var rm = h6,
  im = om(rm);
function om(t) {
  return t && t.__esModule ? t : { default: t };
}
var m1 = void 0,
  Ft = void 0,
  $n = [];
function sm() {
  for (var t = [m1, Ft], e = 0; e < t.length; e++) {
    var n = t[e];
    n && n.parentNode && n.parentNode.removeChild(n);
  }
  (m1 = Ft = null), ($n = []);
}
function lm() {
  console.log("bodyTrap ----------"), console.log($n.length);
  for (var t = [m1, Ft], e = 0; e < t.length; e++) {
    var n = t[e],
      r = n || {};
    console.log(r.nodeName, r.className, r.id);
  }
  console.log("edn bodyTrap ----------");
}
function Ho() {
  $n.length !== 0 && $n[$n.length - 1].focusContent();
}
function am(t, e) {
  !m1 &&
    !Ft &&
    ((m1 = document.createElement("div")),
      m1.setAttribute("data-react-modal-body-trap", ""),
      (m1.style.position = "absolute"),
      (m1.style.opacity = "0"),
      m1.setAttribute("tabindex", "0"),
      m1.addEventListener("focus", Ho),
      (Ft = m1.cloneNode()),
      Ft.addEventListener("focus", Ho)),
    ($n = e),
    $n.length > 0
      ? (document.body.firstChild !== m1 &&
        document.body.insertBefore(m1, document.body.firstChild),
        document.body.lastChild !== Ft && document.body.appendChild(Ft))
      : (m1.parentElement && m1.parentElement.removeChild(m1),
        Ft.parentElement && Ft.parentElement.removeChild(Ft));
}
im.default.subscribe(am);
(function (t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n =
    Object.assign ||
    function (D) {
      for (var A = 1; A < arguments.length; A++) {
        var H = arguments[A];
        for (var E in H)
          Object.prototype.hasOwnProperty.call(H, E) && (D[E] = H[E]);
      }
      return D;
    },
    r =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (D) {
          return typeof D;
        }
        : function (D) {
          return D &&
            typeof Symbol == "function" &&
            D.constructor === Symbol &&
            D !== Symbol.prototype
            ? "symbol"
            : typeof D;
        },
    i = (function () {
      function D(A, H) {
        for (var E = 0; E < H.length; E++) {
          var b = H[E];
          (b.enumerable = b.enumerable || !1),
            (b.configurable = !0),
            "value" in b && (b.writable = !0),
            Object.defineProperty(A, b.key, b);
        }
      }
      return function (A, H, E) {
        return H && D(A.prototype, H), E && D(A, E), A;
      };
    })(),
    o = P,
    s = Vi,
    l = x(s),
    a = qt,
    u = y(a),
    c = Ai,
    f = x(c),
    d = Kt,
    h = y(d),
    v = d6,
    m = y(v),
    k = Xt,
    g = x(k),
    p = h6,
    _ = x(p);
  function y(D) {
    if (D && D.__esModule) return D;
    var A = {};
    if (D != null)
      for (var H in D)
        Object.prototype.hasOwnProperty.call(D, H) && (A[H] = D[H]);
    return (A.default = D), A;
  }
  function x(D) {
    return D && D.__esModule ? D : { default: D };
  }
  function T(D, A) {
    if (!(D instanceof A))
      throw new TypeError("Cannot call a class as a function");
  }
  function w(D, A) {
    if (!D)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return A && (typeof A == "object" || typeof A == "function") ? A : D;
  }
  function L(D, A) {
    if (typeof A != "function" && A !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof A
      );
    (D.prototype = Object.create(A && A.prototype, {
      constructor: { value: D, enumerable: !1, writable: !0, configurable: !0 },
    })),
      A &&
      (Object.setPrototypeOf
        ? Object.setPrototypeOf(D, A)
        : (D.__proto__ = A));
  }
  var M = { overlay: "ReactModal__Overlay", content: "ReactModal__Content" },
    O = function (A) {
      return A.code === "Tab" || A.keyCode === 9;
    },
    W = function (A) {
      return A.code === "Escape" || A.keyCode === 27;
    },
    I = 0,
    $ = (function (D) {
      L(A, D);
      function A(H) {
        T(this, A);
        var E = w(
          this,
          (A.__proto__ || Object.getPrototypeOf(A)).call(this, H)
        );
        return (
          (E.setOverlayRef = function (b) {
            (E.overlay = b), E.props.overlayRef && E.props.overlayRef(b);
          }),
          (E.setContentRef = function (b) {
            (E.content = b), E.props.contentRef && E.props.contentRef(b);
          }),
          (E.afterClose = function () {
            var b = E.props,
              N = b.appElement,
              S = b.ariaHideApp,
              F = b.htmlOpenClassName,
              Y = b.bodyOpenClassName,
              ee = b.parentSelector,
              Q = (ee && ee().ownerDocument) || document;
            Y && m.remove(Q.body, Y),
              F && m.remove(Q.getElementsByTagName("html")[0], F),
              S && I > 0 && ((I -= 1), I === 0 && h.show(N)),
              E.props.shouldFocusAfterRender &&
              (E.props.shouldReturnFocusAfterClose
                ? (u.returnFocus(E.props.preventScroll),
                  u.teardownScopedFocus())
                : u.popWithoutFocus()),
              E.props.onAfterClose && E.props.onAfterClose(),
              _.default.deregister(E);
          }),
          (E.open = function () {
            E.beforeOpen(),
              E.state.afterOpen && E.state.beforeClose
                ? (clearTimeout(E.closeTimer), E.setState({ beforeClose: !1 }))
                : (E.props.shouldFocusAfterRender &&
                  (u.setupScopedFocus(E.node), u.markForFocusLater()),
                  E.setState({ isOpen: !0 }, function () {
                    E.openAnimationFrame = requestAnimationFrame(function () {
                      E.setState({ afterOpen: !0 }),
                        E.props.isOpen &&
                        E.props.onAfterOpen &&
                        E.props.onAfterOpen({
                          overlayEl: E.overlay,
                          contentEl: E.content,
                        });
                    });
                  }));
          }),
          (E.close = function () {
            E.props.closeTimeoutMS > 0
              ? E.closeWithTimeout()
              : E.closeWithoutTimeout();
          }),
          (E.focusContent = function () {
            return (
              E.content &&
              !E.contentHasFocus() &&
              E.content.focus({ preventScroll: !0 })
            );
          }),
          (E.closeWithTimeout = function () {
            var b = Date.now() + E.props.closeTimeoutMS;
            E.setState({ beforeClose: !0, closesAt: b }, function () {
              E.closeTimer = setTimeout(
                E.closeWithoutTimeout,
                E.state.closesAt - Date.now()
              );
            });
          }),
          (E.closeWithoutTimeout = function () {
            E.setState(
              { beforeClose: !1, isOpen: !1, afterOpen: !1, closesAt: null },
              E.afterClose
            );
          }),
          (E.handleKeyDown = function (b) {
            O(b) && (0, f.default)(E.content, b),
              E.props.shouldCloseOnEsc &&
              W(b) &&
              (b.stopPropagation(), E.requestClose(b));
          }),
          (E.handleOverlayOnClick = function (b) {
            E.shouldClose === null && (E.shouldClose = !0),
              E.shouldClose &&
              E.props.shouldCloseOnOverlayClick &&
              (E.ownerHandlesClose() ? E.requestClose(b) : E.focusContent()),
              (E.shouldClose = null);
          }),
          (E.handleContentOnMouseUp = function () {
            E.shouldClose = !1;
          }),
          (E.handleOverlayOnMouseDown = function (b) {
            !E.props.shouldCloseOnOverlayClick &&
              b.target == E.overlay &&
              b.preventDefault();
          }),
          (E.handleContentOnClick = function () {
            E.shouldClose = !1;
          }),
          (E.handleContentOnMouseDown = function () {
            E.shouldClose = !1;
          }),
          (E.requestClose = function (b) {
            return E.ownerHandlesClose() && E.props.onRequestClose(b);
          }),
          (E.ownerHandlesClose = function () {
            return E.props.onRequestClose;
          }),
          (E.shouldBeClosed = function () {
            return !E.state.isOpen && !E.state.beforeClose;
          }),
          (E.contentHasFocus = function () {
            return (
              document.activeElement === E.content ||
              E.content.contains(document.activeElement)
            );
          }),
          (E.buildClassName = function (b, N) {
            var S =
              (typeof N > "u" ? "undefined" : r(N)) === "object"
                ? N
                : {
                  base: M[b],
                  afterOpen: M[b] + "--after-open",
                  beforeClose: M[b] + "--before-close",
                },
              F = S.base;
            return (
              E.state.afterOpen && (F = F + " " + S.afterOpen),
              E.state.beforeClose && (F = F + " " + S.beforeClose),
              typeof N == "string" && N ? F + " " + N : F
            );
          }),
          (E.attributesFromObject = function (b, N) {
            return Object.keys(N).reduce(function (S, F) {
              return (S[b + "-" + F] = N[F]), S;
            }, {});
          }),
          (E.state = { afterOpen: !1, beforeClose: !1 }),
          (E.shouldClose = null),
          (E.moveFromContentToOverlay = null),
          E
        );
      }
      return (
        i(A, [
          {
            key: "componentDidMount",
            value: function () {
              this.props.isOpen && this.open();
            },
          },
          {
            key: "componentDidUpdate",
            value: function (E, b) {
              this.props.isOpen && !E.isOpen
                ? this.open()
                : !this.props.isOpen && E.isOpen && this.close(),
                this.props.shouldFocusAfterRender &&
                this.state.isOpen &&
                !b.isOpen &&
                this.focusContent();
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.state.isOpen && this.afterClose(),
                clearTimeout(this.closeTimer),
                cancelAnimationFrame(this.openAnimationFrame);
            },
          },
          {
            key: "beforeOpen",
            value: function () {
              var E = this.props,
                b = E.appElement,
                N = E.ariaHideApp,
                S = E.htmlOpenClassName,
                F = E.bodyOpenClassName,
                Y = E.parentSelector,
                ee = (Y && Y().ownerDocument) || document;
              F && m.add(ee.body, F),
                S && m.add(ee.getElementsByTagName("html")[0], S),
                N && ((I += 1), h.hide(b)),
                _.default.register(this);
            },
          },
          {
            key: "render",
            value: function () {
              var E = this.props,
                b = E.id,
                N = E.className,
                S = E.overlayClassName,
                F = E.defaultStyles,
                Y = E.children,
                ee = N ? {} : F.content,
                Q = S ? {} : F.overlay;
              if (this.shouldBeClosed()) return null;
              var Ce = {
                ref: this.setOverlayRef,
                className: this.buildClassName("overlay", S),
                style: n({}, Q, this.props.style.overlay),
                onClick: this.handleOverlayOnClick,
                onMouseDown: this.handleOverlayOnMouseDown,
              },
                re = n(
                  {
                    id: b,
                    ref: this.setContentRef,
                    style: n({}, ee, this.props.style.content),
                    className: this.buildClassName("content", N),
                    tabIndex: "-1",
                    onKeyDown: this.handleKeyDown,
                    onMouseDown: this.handleContentOnMouseDown,
                    onMouseUp: this.handleContentOnMouseUp,
                    onClick: this.handleContentOnClick,
                    role: this.props.role,
                    "aria-label": this.props.contentLabel,
                  },
                  this.attributesFromObject(
                    "aria",
                    n({ modal: !0 }, this.props.aria)
                  ),
                  this.attributesFromObject("data", this.props.data || {}),
                  { "data-testid": this.props.testId }
                ),
                ve = this.props.contentElement(re, Y);
              return this.props.overlayElement(Ce, ve);
            },
          },
        ]),
        A
      );
    })(o.Component);
  ($.defaultProps = { style: { overlay: {}, content: {} }, defaultStyles: {} }),
    ($.propTypes = {
      isOpen: l.default.bool.isRequired,
      defaultStyles: l.default.shape({
        content: l.default.object,
        overlay: l.default.object,
      }),
      style: l.default.shape({
        content: l.default.object,
        overlay: l.default.object,
      }),
      className: l.default.oneOfType([l.default.string, l.default.object]),
      overlayClassName: l.default.oneOfType([
        l.default.string,
        l.default.object,
      ]),
      parentSelector: l.default.func,
      bodyOpenClassName: l.default.string,
      htmlOpenClassName: l.default.string,
      ariaHideApp: l.default.bool,
      appElement: l.default.oneOfType([
        l.default.instanceOf(g.default),
        l.default.instanceOf(k.SafeHTMLCollection),
        l.default.instanceOf(k.SafeNodeList),
        l.default.arrayOf(l.default.instanceOf(g.default)),
      ]),
      onAfterOpen: l.default.func,
      onAfterClose: l.default.func,
      onRequestClose: l.default.func,
      closeTimeoutMS: l.default.number,
      shouldFocusAfterRender: l.default.bool,
      shouldCloseOnOverlayClick: l.default.bool,
      shouldReturnFocusAfterClose: l.default.bool,
      preventScroll: l.default.bool,
      role: l.default.string,
      contentLabel: l.default.string,
      aria: l.default.object,
      data: l.default.object,
      children: l.default.node,
      shouldCloseOnEsc: l.default.bool,
      overlayRef: l.default.func,
      contentRef: l.default.func,
      id: l.default.string,
      overlayElement: l.default.func,
      contentElement: l.default.func,
      testId: l.default.string,
    }),
    (e.default = $),
    (t.exports = e.default);
})(vp, Ri);
function Wu() {
  var t = this.constructor.getDerivedStateFromProps(this.props, this.state);
  t != null && this.setState(t);
}
function ju(t) {
  function e(n) {
    var r = this.constructor.getDerivedStateFromProps(t, n);
    return r ?? null;
  }
  this.setState(e.bind(this));
}
function Uu(t, e) {
  try {
    var n = this.props,
      r = this.state;
    (this.props = t),
      (this.state = e),
      (this.__reactInternalSnapshotFlag = !0),
      (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, r));
  } finally {
    (this.props = n), (this.state = r);
  }
}
Wu.__suppressDeprecationWarning = !0;
ju.__suppressDeprecationWarning = !0;
Uu.__suppressDeprecationWarning = !0;
function um(t) {
  var e = t.prototype;
  if (!e || !e.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (
    typeof t.getDerivedStateFromProps != "function" &&
    typeof e.getSnapshotBeforeUpdate != "function"
  )
    return t;
  var n = null,
    r = null,
    i = null;
  if (
    (typeof e.componentWillMount == "function"
      ? (n = "componentWillMount")
      : typeof e.UNSAFE_componentWillMount == "function" &&
      (n = "UNSAFE_componentWillMount"),
      typeof e.componentWillReceiveProps == "function"
        ? (r = "componentWillReceiveProps")
        : typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        (r = "UNSAFE_componentWillReceiveProps"),
      typeof e.componentWillUpdate == "function"
        ? (i = "componentWillUpdate")
        : typeof e.UNSAFE_componentWillUpdate == "function" &&
        (i = "UNSAFE_componentWillUpdate"),
      n !== null || r !== null || i !== null)
  ) {
    var o = t.displayName || t.name,
      s =
        typeof t.getDerivedStateFromProps == "function"
          ? "getDerivedStateFromProps()"
          : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` +
      o +
      " uses " +
      s +
      " but also contains the following legacy lifecycles:" +
      (n !== null
        ? `
  ` + n
        : "") +
      (r !== null
        ? `
  ` + r
        : "") +
      (i !== null
        ? `
  ` + i
        : "") +
      `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (
    (typeof t.getDerivedStateFromProps == "function" &&
      ((e.componentWillMount = Wu), (e.componentWillReceiveProps = ju)),
      typeof e.getSnapshotBeforeUpdate == "function")
  ) {
    if (typeof e.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    e.componentWillUpdate = Uu;
    var l = e.componentDidUpdate;
    e.componentDidUpdate = function (u, c, f) {
      var d = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : f;
      l.call(this, u, c, d);
    };
  }
  return t;
}
const cm = Object.freeze(
  Object.defineProperty(
    { __proto__: null, polyfill: um },
    Symbol.toStringTag,
    { value: "Module" }
  )
),
  fm = $u(cm);
Object.defineProperty(rr, "__esModule", { value: !0 });
rr.bodyOpenClassName = rr.portalClassName = void 0;
var Bo =
  Object.assign ||
  function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  },
  dm = (function () {
    function t(e, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  })(),
  Yu = P,
  Ii = X2(Yu),
  hm = G0,
  zi = X2(hm),
  Cm = Vi,
  J = X2(Cm),
  pm = Ri,
  Wo = X2(pm),
  mm = Kt,
  gm = ym(mm),
  J3 = Xt,
  jo = X2(J3),
  vm = fm;
function ym(t) {
  if (t && t.__esModule) return t;
  var e = {};
  if (t != null)
    for (var n in t)
      Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return (e.default = t), e;
}
function X2(t) {
  return t && t.__esModule ? t : { default: t };
}
function _m(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Uo(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function wm(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
  })),
    e &&
    (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
var Sm = (rr.portalClassName = "ReactModalPortal"),
  xm = (rr.bodyOpenClassName = "ReactModal__Body--open"),
  Nn = J3.canUseDOM && zi.default.createPortal !== void 0,
  Yo = function (e) {
    return document.createElement(e);
  },
  Zo = function () {
    return Nn
      ? zi.default.createPortal
      : zi.default.unstable_renderSubtreeIntoContainer;
  };
function T0(t) {
  return t();
}
var G2 = (function (t) {
  wm(e, t);
  function e() {
    var n, r, i, o;
    _m(this, e);
    for (var s = arguments.length, l = Array(s), a = 0; a < s; a++)
      l[a] = arguments[a];
    return (
      (o =
        ((r =
          ((i = Uo(
            this,
            (n = e.__proto__ || Object.getPrototypeOf(e)).call.apply(
              n,
              [this].concat(l)
            )
          )),
            i)),
          (i.removePortal = function () {
            !Nn && zi.default.unmountComponentAtNode(i.node);
            var u = T0(i.props.parentSelector);
            u && u.contains(i.node)
              ? u.removeChild(i.node)
              : console.warn(
                'React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.'
              );
          }),
          (i.portalRef = function (u) {
            i.portal = u;
          }),
          (i.renderPortal = function (u) {
            var c = Zo(),
              f = c(
                i,
                Ii.default.createElement(
                  Wo.default,
                  Bo({ defaultStyles: e.defaultStyles }, u)
                ),
                i.node
              );
            i.portalRef(f);
          }),
          r)),
      Uo(i, o)
    );
  }
  return (
    dm(
      e,
      [
        {
          key: "componentDidMount",
          value: function () {
            if (J3.canUseDOM) {
              Nn || (this.node = Yo("div")),
                (this.node.className = this.props.portalClassName);
              var r = T0(this.props.parentSelector);
              r.appendChild(this.node), !Nn && this.renderPortal(this.props);
            }
          },
        },
        {
          key: "getSnapshotBeforeUpdate",
          value: function (r) {
            var i = T0(r.parentSelector),
              o = T0(this.props.parentSelector);
            return { prevParent: i, nextParent: o };
          },
        },
        {
          key: "componentDidUpdate",
          value: function (r, i, o) {
            if (J3.canUseDOM) {
              var s = this.props,
                l = s.isOpen,
                a = s.portalClassName;
              r.portalClassName !== a && (this.node.className = a);
              var u = o.prevParent,
                c = o.nextParent;
              c !== u && (u.removeChild(this.node), c.appendChild(this.node)),
                !(!r.isOpen && !l) && !Nn && this.renderPortal(this.props);
            }
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            if (!(!J3.canUseDOM || !this.node || !this.portal)) {
              var r = this.portal.state,
                i = Date.now(),
                o =
                  r.isOpen &&
                  this.props.closeTimeoutMS &&
                  (r.closesAt || i + this.props.closeTimeoutMS);
              o
                ? (r.beforeClose || this.portal.closeWithTimeout(),
                  setTimeout(this.removePortal, o - i))
                : this.removePortal();
            }
          },
        },
        {
          key: "render",
          value: function () {
            if (!J3.canUseDOM || !Nn) return null;
            !this.node && Nn && (this.node = Yo("div"));
            var r = Zo();
            return r(
              Ii.default.createElement(
                Wo.default,
                Bo(
                  { ref: this.portalRef, defaultStyles: e.defaultStyles },
                  this.props
                )
              ),
              this.node
            );
          },
        },
      ],
      [
        {
          key: "setAppElement",
          value: function (r) {
            gm.setElement(r);
          },
        },
      ]
    ),
    e
  );
})(Yu.Component);
G2.propTypes = {
  isOpen: J.default.bool.isRequired,
  style: J.default.shape({
    content: J.default.object,
    overlay: J.default.object,
  }),
  portalClassName: J.default.string,
  bodyOpenClassName: J.default.string,
  htmlOpenClassName: J.default.string,
  className: J.default.oneOfType([
    J.default.string,
    J.default.shape({
      base: J.default.string.isRequired,
      afterOpen: J.default.string.isRequired,
      beforeClose: J.default.string.isRequired,
    }),
  ]),
  overlayClassName: J.default.oneOfType([
    J.default.string,
    J.default.shape({
      base: J.default.string.isRequired,
      afterOpen: J.default.string.isRequired,
      beforeClose: J.default.string.isRequired,
    }),
  ]),
  appElement: J.default.oneOfType([
    J.default.instanceOf(jo.default),
    J.default.instanceOf(J3.SafeHTMLCollection),
    J.default.instanceOf(J3.SafeNodeList),
    J.default.arrayOf(J.default.instanceOf(jo.default)),
  ]),
  onAfterOpen: J.default.func,
  onRequestClose: J.default.func,
  closeTimeoutMS: J.default.number,
  ariaHideApp: J.default.bool,
  shouldFocusAfterRender: J.default.bool,
  shouldCloseOnOverlayClick: J.default.bool,
  shouldReturnFocusAfterClose: J.default.bool,
  preventScroll: J.default.bool,
  parentSelector: J.default.func,
  aria: J.default.object,
  data: J.default.object,
  role: J.default.string,
  contentLabel: J.default.string,
  shouldCloseOnEsc: J.default.bool,
  overlayRef: J.default.func,
  contentRef: J.default.func,
  id: J.default.string,
  overlayElement: J.default.func,
  contentElement: J.default.func,
};
G2.defaultProps = {
  isOpen: !1,
  portalClassName: Sm,
  bodyOpenClassName: xm,
  role: "dialog",
  ariaHideApp: !0,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: !0,
  shouldCloseOnEsc: !0,
  shouldCloseOnOverlayClick: !0,
  shouldReturnFocusAfterClose: !0,
  preventScroll: !1,
  parentSelector: function () {
    return document.body;
  },
  overlayElement: function (e, n) {
    return Ii.default.createElement("div", e, n);
  },
  contentElement: function (e, n) {
    return Ii.default.createElement("div", e, n);
  },
};
G2.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
};
(0, vm.polyfill)(G2);
rr.default = G2;
(function (t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  var n = rr,
    r = i(n);
  function i(o) {
    return o && o.__esModule ? o : { default: o };
  }
  (e.default = r.default), (t.exports = e.default);
})(dp, S4);

const Em = () => {
  const t = [
    { title: "Cloud Computing", link: "https://udemy.com/", platform: "NPTEL", year: "2022" },
    { title: "DBMS", link: "https://facebook.com/", platform: "Scaler", year: "2023" },
  ];

  return (
    P.useRef([]),
    C("div", {
      className: "all-awards-wrapper1",
      children: t.map((e, n) =>
        C(
          "a",
          {
            href: e.link, // Use the specific link for each certificate
            target: "_blank",
            rel: "noopener noreferrer",
            children: R("div", {
              className: `awards-container1 aw${n}`,
              children: [
                C("div", { className: "awards-title", children: e.title }), // Certificate title
                C("div", { className: "awards-platform", children: e.platform }), // Platform for the certificate
                C("div", { className: "awards-year", children: e.year }), // Year of the certificate
                C("div", { className: "custom-cursor" }),
              ],
            }),
          },
          n
        )
      ),
    })
  );
};

const Tm = () => {
  const t = P.useRef(null);
  P.useRef([]);
  const e = P.useRef(null);
  return (
    P.useRef(null),
    P.useEffect(() => { }, []),
    P.useEffect(() => { }, []),
    R("div", {
      className: "journey2-wrapper",
      ref: e,
      children: [
        C("div", {
          className: "heading",
          children: R("div", {
            className: "about-text-heading ",
            ref: t,
            children: [
              "Certificates ",
              C("span", { children: "(Educational)" }),
            ],
          }),
        }),
        C(Em, {}),
      ],
    })
  );
};

const Lm = () => {
  const t = P.useRef(null),
    e = P.useRef([]);
  return (
    P.useEffect(() => {
      const n = document.querySelectorAll(".contact-section-wrapper svg path");
      ep(e, n);
    }, []),
    R("div", {
      className: "contact-section-wrapper",
      children: [
        C("div", {
          className: "contact-bg",
          children: C("svg", {
            viewBox: "0 0 270 238",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: C("path", {
              d: "M75.7999 0.999817C72.7999 3.19982 74.5999 7.99982 78.2999 7.99982C82.0999 7.99982 83.5999 3.99982 80.2999 1.39982C77.9999 -0.400183 77.9999 -0.400183 75.9999 0.999817M80.4999 3.29982C80.9999 4.99982 80.9999 5.59982 79.9999 6.59982C77.7999 7.99982 74.7999 4.99982 75.9999 1.99982C76.5999 -0.200183 79.3999 0.599817 80.1999 2.79982M181 8.19982C178.7 8.99982 178.7 12.6998 181 14.1998C183.2 14.9998 186.2 13.4998 186.2 11.1998C186.2 8.19982 184.9 6.89982 181.9 7.69982M184.9 9.69982C184.9 12.1998 184.9 13.1998 181.9 13.1998C179.9 13.1998 179.9 12.6998 179.9 11.1998C178.9 8.99982 180.9 6.99982 183.9 8.49982M172.9 17.4998C158.9 28.4998 134.9 51.8998 136.9 50.4998L142.9 45.4998L145.9 42.9998L158.9 30.9998L165.9 24.9998C165.9 23.9998 168.9 20.9998 171.9 18.9998C176.9 14.3998 177.9 12.5998 176.9 12.5998L170.9 17.3998M82.9999 9.59982C88.9999 18.5998 113.8 47.0998 115.3 47.7998C117.5 47.7998 116.8 46.2998 107.8 36.5998C103.3 31.2998 96.4999 23.7998 93.4999 20.0998C89.9999 17.0998 85.9999 12.0998 83.7999 10.0998L80.5999 6.09982L82.5999 9.09982M117.3 47.0998C109.6 49.0998 105 54.0998 105 60.0998V63.0998H28.5999C0.999947 62.9998 -2.00005 65.9998 0.999946 92.9998C2.39995 106.5 2.59995 135.8 1.19995 156.2C-0.300054 179.2 -0.300054 219.2 1.19995 224.2C2.79995 228.7 6.99995 233.2 11.1999 234.7C14.1999 236.2 79.4999 236.9 167.2 236.9H211C211 236.9 221.5 235.9 230.3 236.9C249.1 237.9 255.3 235.9 259.9 235.9C269.9 232.9 270.9 220.9 267.9 175.9C265.9 150.9 265.9 121.9 267.9 101.9C268.9 83.8998 267.9 73.8998 264.9 66.8998C261.9 60.8998 264.9 60.8998 198.9 61.8998H140.9V56.8998C140.9 47.8998 127.9 41.8998 114.9 45.8998M132.9 49.8998C136.9 51.8998 138.9 55.8998 138.9 58.8998V61.8998H121.9C103.9 61.8998 103.9 61.8998 103.9 56.8998C103.9 47.8998 120.9 42.8998 131.9 48.8998M261.9 64.8998C265.9 71.8998 268.9 78.8998 265.9 102.9C263.9 116.9 263.9 145.9 265.9 181.9C267.9 217.9 265.9 227.9 257.9 231.9C252.9 233.9 263.9 233.9 155.9 231.9C107.9 230.9 60.8999 230.9 51.8999 231.9C9.89995 233.9 3.89995 232.9 1.89995 211.9C0.899946 203.9 2.89995 174.9 3.89995 144.9C4.89995 128.9 3.89995 93.8998 1.89995 86.8998C1.89995 82.8998 2.89995 69.8998 3.89995 67.8998C5.89995 62.8998 2.89995 62.8998 98.8999 61.8998L222.9 60.8998M233.9 75.8998C255.9 75.8998 255.9 73.8998 255.9 100.9C255.9 109.9 255.9 128.9 256.9 140.9C255.9 161.9 257.9 164.9 254.9 166.9C251.9 168.9 220.9 168.9 218.9 167.9L217.9 166.9V98.9998C217.9 80.1998 217.9 79.9998 220.9 78.3998H223.9L220.9 76.9998C215.9 76.9998 215.9 75.6998 215.9 121.4C215.9 170.4 214.9 170.4 217.9 171.4C219.9 172.4 250.9 172 253.9 170.9C255.9 169.9 256.9 153.9 256.9 98.8998C255.9 75.8998 253.9 75.8998 230.9 75.8998L219.9 76.8998L222.9 77.8998M35.9999 81.9998C24.3999 84.9998 22.7999 87.5998 21.6999 111C17.9999 201 18.6999 210 32.1999 217C38.1999 220 42.4999 220 112.5 219C185.5 218.7 187.3 218.7 195 214.8C206.2 209.8 206.2 209.8 206.2 147.8L206 98.7998L204 93.5998C200 85.3998 194 83.0998 175 81.5998C156.6 80.8998 40.6999 80.8998 36.3999 82.3998M177 84.3998C192 85.9998 199 90.3998 202 100.1C203.8 107.1 203.7 198.1 201.4 204.1C196.4 218.1 194.9 218.1 110.6 218.1C33.5999 219.1 31.9999 219.1 26.7999 210.1C21.7999 203.1 20.7999 207.1 21.9999 151.1C23.7999 79.0998 26.1999 88.0998 36.9999 85.0998C40.1999 84.0998 162.4 84.0998 176.7 85.0998M241.7 90.0998C240.4 91.0998 238.7 91.0998 237.3 91.0998C225.5 91.0998 219.3 105.1 226.9 114.1C227.9 114.1 227.9 115.1 226.9 117.1C225.9 120.1 228.9 122.1 230.9 120.1C233.9 116.1 230.9 118.1 237.9 117.1C242.9 114.1 246.9 110.1 244.9 101.1C243.9 98.0998 243.9 96.0998 243.9 95.0998C242.9 93.0998 242.9 94.0998 241.9 92.0998M241.9 94.0998C242.9 95.0998 243.9 97.0998 240.9 101.1L234.9 113.1C229.9 121.1 227.9 123.6 225.9 120.8C224.9 120.1 236.9 97.7998 237.9 95.2998C239.9 94.2998 239.9 94.2998 240.9 94.2998M229.9 110.3C223.9 121.3 225.9 117.3 221.9 111.3C220.9 106.3 223.9 98.2998 231.9 96.2998H237.9L232.9 105.6M244.9 108.6C244.9 113.6 240.9 120.3 235.9 120.6C229.9 121.4 232.9 121.6 240.9 106.2L242.9 101.2V102.2C243.9 104 244.1 106.9 244.1 108.2M222.1 138.2C223.1 139.8 221.6 140.2 220.7 142.2C215.3 151.2 222.7 163.2 233.3 163.2C234.6 163.2 236.3 161.2 237.6 164.2C239.6 165.2 243.6 162.2 241.6 157.2C240.6 156.2 242.6 156.2 244.6 152.2C243.6 143.2 240.6 138.2 232.6 136.2C229.6 135.2 228.6 136.2 227.6 134.2C226.6 132.7 226.6 132.8 223.6 134.2M230.6 141.2L234.1 147.2L237.1 152.6C241.1 158.6 241.1 160.6 238.5 162.2C236.5 163.9 235 162.2 227.5 148.2L221.5 137.8L224.5 136.8L226.5 134.8L229.5 138.8M236.5 139.8C242 142.8 245 149.8 242.5 155.3C241.5 158.3 241.5 157.9 236 147.3C227 135.3 230.8 136.3 236.7 140.1M229.7 154.1C234.3 162.1 237.3 164.1 230.7 162.5C219.7 160.5 215.7 150.5 219.7 143.5C222.3 138.8 222.7 141.5 229.7 153.8M223.7 193C226.7 194 249.7 194 250.7 193C251.7 192 250 192 246.7 192C244.7 192 241.7 192 237.7 192.6C230.7 192.6 222.9 192.6 223.7 193.3M224.1 207.3C225.1 207.6 251.1 208.3 251.1 207.5C251.1 206.5 246.1 206.5 237.6 206.5H223.6M219 212.7C221 211.7 253.4 213.1 253.4 213.1M219.4 207.1C221.4 206.1 253.7 208.1 253.7 208.1M219.2 201.1C221.2 200.1 253.6 202.1 253.6 202.1M219 195.1C221 194.1 253.6 196.1 253.6 196.1M219.2 189.1C221.2 188.1 253.6 190.1 253.6 190.1M219.4 185.1C221.4 184.1 253.8 186.1 253.8 186.1M222.7 185.8C227.7 186.2 245.7 186 245.7 185.8C245.7 184.8 241.7 184.8 234.7 184.8C226.7 184.8 220.7 185 222.7 185.8Z",
              stroke: "#3F3B37",
            }),
          }),
        }),
        R("div", {
          className: "contact-heading heading-font",
          ref: t,
          children: ["LET’S ", C("br", {}), "CONNECT"],
        }),
        R("div", {
          className: "contact-content",
          children: [
            R("ul", {
              children: [
                C("li", { className: "list-heading", children: "CONTACT" }),
                C("li", { children: "adityajadhavb02@gmail.com" }),
              ],
            }),
            R("ul", {
              children: [
                C("li", { className: "list-heading", children: " ON THE WEB" }),
                C("li", {
                  children: C("a", {
                    href: "https://linkedin.com/in/adityɑjɑdhav2/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "LinkedIn",
                  }),
                }),
                C("li", {
                  children: C("a", {
                    href: "https://github.com/JadhavAditya02/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Github",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
};
const Mm = window.matchMedia("(max-width: 767px)").matches;
j.registerPlugin(G);
const Om = [],
  bm = (t) => {
    const e = P.useRef(),
      { handleToggle: n, active: r, faq: i, isFirstItem: o } = t,
      { header: s, id: l, text: a } = i,
      [u, c] = P.useState(0);
    return (
      P.useEffect(() => {
        e.current && c(e.current.scrollHeight);
      }, [e]),
      R("div", {
        className: "rc-accordion-card",
        children: [
          C("div", {
            className: "rc-accordion-header",
            children: R("div", {
              className: `rc-accordion-toggle p-3 ${r === l || (l === 1 && !r) ? "active" : ""
                }`,
              onClick: () => n(l),
              children: [
                C("span", {
                  className: "symbol",
                  children:
                    r === l || (l === 1 && !r)
                      ? C("svg", {
                        width: "54",
                        height: "6",
                        viewBox: "0 0 54 6",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: C("path", {
                          d: "M53.25 3C53.25 3.58016 53.0195 4.13656 52.6093 4.5468C52.1991 4.95703 51.6427 5.1875 51.0625 5.1875H2.9375C2.35734 5.1875 1.80094 4.95703 1.3907 4.5468C0.980469 4.13656 0.75 3.58016 0.75 3C0.75 2.41984 0.980469 1.86344 1.3907 1.4532C1.80094 1.04297 2.35734 0.8125 2.9375 0.8125H51.0625C51.6427 0.8125 52.1991 1.04297 52.6093 1.4532C53.0195 1.86344 53.25 2.41984 53.25 3Z",
                          fill: "#3f3b37",
                        }),
                      })
                      : C("svg", {
                        width: "54",
                        height: "54",
                        viewBox: "0 0 54 54",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: C("path", {
                          d: "M53.25 27C53.25 27.5802 53.0195 28.1366 52.6093 28.5468C52.1991 28.957 51.6427 29.1875 51.0625 29.1875H29.1875V51.0625C29.1875 51.6427 28.957 52.1991 28.5468 52.6093C28.1366 53.0195 27.5802 53.25 27 53.25C26.4198 53.25 25.8634 53.0195 25.4532 52.6093C25.043 52.1991 24.8125 51.6427 24.8125 51.0625V29.1875H2.9375C2.35734 29.1875 1.80094 28.957 1.3907 28.5468C0.980469 28.1366 0.75 27.5802 0.75 27C0.75 26.4198 0.980469 25.8634 1.3907 25.4532C1.80094 25.043 2.35734 24.8125 2.9375 24.8125H24.8125V2.9375C24.8125 2.35734 25.043 1.80094 25.4532 1.3907C25.8634 0.980469 26.4198 0.75 27 0.75C27.5802 0.75 28.1366 0.980469 28.5468 1.3907C28.957 1.80094 29.1875 2.35734 29.1875 2.9375V24.8125H51.0625C51.6427 24.8125 52.1991 25.043 52.6093 25.4532C53.0195 25.8634 53.25 26.4198 53.25 27Z",
                          fill: "#3f3b37",
                        }),
                      }),
                }),
                R("span", {
                  className: "rc-accordion-title",
                  children: [" ", s],
                }),
              ],
            }),
          }),
          C("div", {
            ref: e,
            className: "rc-collapse ",
            style:
              r === l || (l === 1 && !r)
                ? { height: `${u}px` }
                : { height: "0px" },
            children: C("div", {
              className: "rc-accordion-body",
              children: C("p", { className: "mb-0", children: a }),
            }),
          }),
        ],
      })
    );
  },
  Pm = ({ scrollContainer: t }) => {
    P.useRef(null);
    const e = P.useRef(null);
    P.useRef([]), P.useRef(null), P.useRef(null);
    const n = P.useRef(null),
      r = P.useRef(null),
      [i, o] = P.useState(0);
    P.useEffect(() => {
      e.current && o(e.current.scrollHeight);
    }, [e]),
      P.useEffect(
        () => () => {
          G.getAll().forEach((u) => u.kill());
        },
        []
      );
    const [s, l] = P.useState(null),
      a = (u) => {
        l(s === u ? null : u);
      };
    return C("div", {
      className: "side-pin-wrapper",
      ref: e,
      style: {
        minHeight: Mm ? `calc(400px + ${i}px)` : `calc(380px + ${i}px)`,
      },
      children: R("div", {
        className: "pin-row",
        children: [
          // C("div", {
          //   className: "title-section",
          //   children: C("p", {
          //     ref: n,
          //     children: "Here are some Frequently Asked Questions",
          //   }),
          // }),
          // C("div", {
          //   className: "content-section",
          //   children: C("div", {
          //     className: "side-content-wrapper",
          //     ref: r,
          //     children: Om.map((u, c) =>
          //       C(bm, { active: s, handleToggle: a, faq: u }, c)
          //     ),
          //   }),
          // }),
        ],
      }),
    });
  };
const E4 = "/assets/estore1-d4c13793.jpg",
  T4 = "/assets/krl1-90a0f034.jpg";
const Nm = () => {
  const t = P.useRef(null),
    e = P.useRef(null),
    n = P.useRef(null),
    r = P.useRef(null),
    i = P.useRef(null),
    o = P.useRef(null),
    s = P.useRef(null),
    l = P.useRef(null),
    a = P.useRef(null);
  P.useRef(null), P.useRef(null);
  const u = P.useRef(null);
  return (
    P.useRef(null),
    P.useEffect(() => {
      UC(t);
    }, []),
    P.useEffect(() => {
      YC(t, e, n, r, i, o, s, l, a);
    }, []),
    C(V6, {
      children: C("div", {
        className: "quotes-section",
        ref: u,
        children: R("div", {
          className: "text-wrapper",
          ref: t,
          children: [
            C("div", { className: "bg-wrapper" }),
            R("div", {
              className: "tagline-container  bot",
              children: [
                R("h1", {
                  className: "tagline heading-font",
                  ref: s,
                  children: [
                    C("span", { className: "magic1", children: "C" }),
                    C("span", { className: "magic1", children: "r" }),
                    C("span", { className: "magic1", children: "a" }),
                    C("span", { className: "magic1", children: "f" }),
                    C("span", { className: "magic1", children: "t" }),
                    C("span", { className: "magic1", children: "i" }),
                    C("span", { className: "magic1", children: "n" }),
                    C("span", { className: "magic1", children: "g" }),
                    C("br", {}),
                    C("span", { className: "magic1", children: "m" }),
                    C("span", { className: "magic1", children: "a" }),
                    C("span", { className: "magic1", children: "g" }),
                    C("span", { className: "magic1", children: "i" }),
                    C("span", { className: "magic1", children: "c" }),
                  ],
                }),
                C("div", {
                  className: "date hidden",
                  children: "Since 2022",
                }),
              ],
            }),
            R("div", {
              className: "tagline-container top",
              children: [
                R("h1", {
                  className: "tagline heading-font",
                  ref: l,
                  children: [
                    C("span", { className: "magic", children: "C" }),
                    C("span", { className: "magic", children: "r" }),
                    C("span", { className: "magic", children: "a" }),
                    C("span", { className: "magic", children: "f" }),
                    C("span", { className: "magic", children: "t" }),
                    C("span", { className: "magic", children: "i" }),
                    C("span", { className: "magic", children: "n" }),
                    C("span", { className: "magic", children: "g" }),
                    C("br", {}),
                    C("span", { className: "magic", children: "m" }),
                    C("span", { className: "magic", children: "a" }),
                    C("span", { className: "magic", children: "g" }),
                    C("span", { className: "magic", children: "i" }),
                    C("span", { className: "magic", children: "c" }),
                  ],
                }),
                C("div", {
                  ref: a,
                  className: "date",
                  children: "Since 2022",
                }),
              ],
            }),
            C("div", {
              className: "rotater rotater2",
              children: R("div", {
                className: "text text1",
                ref: e,
                children: [
                  C("span", { children: "WORK" }),
                  C("span", { children: "WORK" }),
                  C("span", { children: "WORK" }),
                  C("span", { children: "WORK" }),
                  C("span", { children: "WORK" }),
                ],
              }),
            }),
            C("div", {
              className: "rotater rotater1",
              children: R("div", {
                className: "text text2",
                ref: n,
                children: [
                  C("span", { children: "PlAY" }),
                  C("span", { children: "PlAY" }),
                  C("span", { children: "PlAY" }),
                  C("span", { children: "PlAY" }),
                  C("span", { children: "PlAY" }),
                  C("span", { children: "PlAY" }),
                ],
              }),
            }),
            C("div", {
              className: "rotater rotater3",
              children: R("div", {
                className: "text text1",
                ref: r,
                children: [
                  C("span", { children: "GROW" }),
                  C("span", { children: "GROW" }),
                  C("span", { children: "GROW" }),
                  C("span", { children: "GROW" }),
                  C("span", { children: "GROW" }),
                ],
              }),
            }),
            C("div", {
              className: "rotater rotater4",
              children: R("div", {
                className: "text text2",
                ref: i,
                children: [
                  C("span", { children: "HOPE" }),
                  C("span", { children: "HOPE" }),
                  C("span", { children: "HOPE" }),
                  C("span", { children: "HOPE" }),
                  C("span", { children: "HOPE" }),
                ],
              }),
            }),
            C("div", {
              className: "rotater rotater5",
              children: R("div", {
                className: "text text2",
                ref: o,
                children: [
                  C("span", { children: "GOAL" }),
                  C("span", { children: "GOAL" }),
                ],
              }),
            }),
          ],
        }),
      }),
    })
  );
},
  Ln = window.matchMedia("(max-width: 830px)").matches,
  Vm = {
    id: 99,
    number: "01",
    link: "https://estore.client.omkargosavi.com/",
    image: E4,
    title: "E-STORE SHOP",
    type: "Educational",
    description:
      "E-STORE is an educational project and a virtual clothing website created for learning and experimentation. Please be aware that E-STORE is not an actual e-commerce store, and everything on this website, including the payment process, is purely in test mode for educational purposes only. ",
    technology:
      "React, Strapi , TypeScript, SCSS, Redux Toolkit, Custom Fetch Hook, Axios, AWS EC2, Vercel , CSS Flexbox & Grid",
  },
  Rm = {
    id: 100,
    number: "01",
    link: "https://staging-krl.vercel.app/",
    type: "Company client",
    image: T4,
    title: "KART RACING LEAGUE",
    description:
      "As a dedicated frontend developer, I was instrumental in crafting the immersive website experience for KART RACING LEAGUE. Collaborating closely with the team, I brought the exciting world of the game to life on the digital forefront. Through skillful design implementation and seamless user interface development, I ensured that gaming enthusiasts can explore the captivating universe of characters including Panni, Buzztter, Zeeni, Phyro, and Terra. The result is a dynamic website that captures the essence of the game, providing visitors with an engaging portal to learn about the characters and their distinctive traits",
    technology: "React , Typescript , SCSS , Slider , AOS , Vercel",
  },
  Am = ({ handleShowModal: t }) => {
    const e = P.useRef(null),
      n = P.useRef(null),
      r = P.useRef(null),
      i = P.useRef(null),
      o = P.useRef([]);
    P.useRef(null), P.useRef(null);
    const s = P.useRef(null);
    let l = P.useRef(null),
      a = P.useRef(null),
      u = P.useRef(null),
      c = P.useRef(null);
    return (
      P.useEffect(() => {
        $2(n);
      }, []),
      P.useEffect(() => {
        if (!Ln) {
          let f = j.utils.toArray(".panel"),
            d = j.utils.toArray(".hidden-text1"),
            h = j.utils.toArray(".hidden-text2");
          ZC(e, f, d, h, l, a, u, c, r, i, s);
        }
      }, []),
      P.useEffect(() => {
        const f = document.querySelectorAll(
          ".horizontal-container2 .title-img svg path"
        );
        $C(o, f);
      }, []),
      C("div", {
        className: "horizontal-container2",
        children: R("div", {
          className: "container1",
          ref: e,
          children: [
            C("div", {
              className: "fix-p",
              children: R("div", {
                children: [
                  C("div", {
                    className: "",
                    children: C("div", {
                      className: "title-img",
                      children: R("svg", {
                        width: "1112",
                        height: "1383",
                        viewBox: "0 0 1112 1383",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          C("mask", {
                            id: "path-1-inside-1_277_3",
                            fill: "white",
                            children: C("path", {
                              d: "M640.619 4.13333C636.486 6.39999 626.086 14.2667 617.419 21.6C608.886 28.9333 593.019 42 582.352 50.5333C543.152 82.1333 509.819 115.6 502.752 130.533C500.886 134.533 494.486 145.2 488.752 154.133C463.286 193.733 433.819 253.467 409.552 314.667C389.819 364.267 354.086 482.8 339.019 548.667C323.952 614.667 310.485 702.8 307.285 757.067C304.352 805.2 310.085 881.467 320.885 940C322.352 947.733 324.752 960.933 326.219 969.333C327.685 977.733 329.819 987.867 330.885 991.733C332.085 995.6 332.752 999.2 332.352 999.867C331.952 1000.53 329.285 1000.27 326.619 999.2C318.619 996.4 308.619 996.933 298.752 1000.67C292.085 1003.2 289.419 1003.6 287.419 1002.67C286.085 1001.87 284.885 1000.8 284.885 1000.13C284.885 999.467 281.019 994.8 276.352 989.467C271.685 984.267 267.152 978.133 266.219 975.733C265.419 973.333 262.885 967.467 260.885 962.667C258.752 957.867 256.352 951.2 255.685 947.733C254.085 940.933 240.885 910.533 229.952 888.667C218.485 865.867 200.085 836.667 182.085 812.533C171.685 798.667 119.685 748.133 111.419 743.867C103.685 740 101.152 740.533 94.0855 747.867C85.1522 757.2 83.8188 766.933 90.6188 774.267C92.8855 776.8 94.7522 777.333 102.085 777.333C107.819 777.333 112.885 778.267 116.485 780C137.419 789.467 186.885 833.867 201.552 856.4C213.019 874.133 238.752 928.4 247.152 952.667C251.819 966.133 252.885 972.8 250.885 975.6C249.419 977.6 247.019 976.533 227.419 964.667C215.419 957.467 185.152 941.467 160.219 929.2C92.3522 895.867 69.0188 885.733 45.9522 879.333C39.1522 877.333 29.4188 873.733 24.4855 871.2C19.4188 868.667 14.3522 866.667 13.0188 866.667C10.4855 866.667 3.41882 873.6 0.885482 878.533C-0.447851 881.067 -0.314518 882.933 1.55215 888.8C4.88548 899.333 6.61882 900.133 24.2188 899.2C40.6188 898.267 59.5522 900.4 84.2188 906C99.9522 909.6 111.285 914.4 130.619 925.867C149.019 936.533 165.285 944.4 186.485 952.8C208.885 961.6 221.152 968 235.285 978.533C258.085 995.467 270.085 1015.47 265.019 1027.73C264.085 1029.87 262.885 1034.53 262.485 1038.13C261.419 1044.67 261.419 1044.67 256.752 1044.4C254.085 1044.27 247.152 1042 241.419 1039.47C227.419 1033.33 221.419 1032.13 206.219 1032C190.352 1032 184.752 1033.6 179.019 1039.47C169.419 1049.47 159.552 1073.87 159.552 1087.87C159.552 1102.27 169.152 1115.2 182.752 1118.8C197.019 1122.67 219.552 1109.73 219.552 1097.6C219.552 1090.67 209.419 1082.67 200.619 1082.67C195.819 1082.67 188.752 1088 189.152 1091.2C189.552 1093.73 190.485 1094 198.619 1094.13C203.685 1094.27 208.485 1095.07 209.285 1095.87C212.085 1098.67 208.619 1104.4 202.219 1107.73C197.285 1110.4 194.752 1110.8 187.552 1110.27C170.885 1109.07 166.752 1104.4 167.819 1087.07C168.885 1069.33 179.019 1051.07 191.019 1045.2C196.485 1042.67 198.485 1042.4 209.419 1043.07C229.685 1044.4 260.352 1054.4 267.552 1062C269.152 1063.73 270.752 1068 271.419 1072.27C272.219 1076.4 275.285 1084.67 279.019 1091.6C285.685 1104.4 288.085 1115.47 285.019 1119.2C284.085 1120.27 279.419 1122.4 274.619 1124C269.952 1125.47 258.752 1129.73 249.819 1133.2C225.419 1142.93 209.419 1147.6 196.219 1149.07C181.019 1150.8 178.619 1153.07 174.352 1169.87C172.752 1176.4 167.685 1191.33 163.019 1203.2C154.485 1224.67 144.219 1260 146.352 1260C147.019 1260 149.552 1256.8 151.952 1252.93C165.685 1231.47 176.085 1207.2 178.219 1192.13C180.085 1178.53 186.752 1166.27 194.885 1161.47C197.019 1160.13 202.485 1158.67 206.885 1158.27C212.219 1157.87 220.619 1155.33 231.685 1150.8C248.485 1144 254.885 1142.53 253.952 1145.6C253.285 1147.47 249.285 1149.73 233.552 1156.67C216.752 1164.27 218.085 1160.27 218.485 1201.2L218.885 1236.67L214.485 1250.4C212.085 1258 210.219 1264.8 210.485 1265.6C211.285 1267.73 220.085 1250 223.285 1240C227.152 1228.13 228.485 1218.53 229.552 1197.33C231.019 1167.2 231.819 1165.2 244.619 1160.53C266.485 1152.53 272.219 1150 276.219 1146.53C278.619 1144.4 281.285 1142.67 281.952 1142.67C284.219 1142.67 286.219 1147.33 286.219 1152.53C286.219 1155.07 286.752 1157.47 287.552 1158C289.019 1158.93 291.019 1151.73 292.885 1138.13C294.619 1125.73 296.352 1120.93 298.619 1121.73C300.219 1122.27 300.219 1122.93 299.552 1151.33C299.152 1163.87 299.419 1165.6 304.085 1178.53C312.752 1202.8 322.219 1219.87 336.619 1237.33C340.485 1242.13 346.885 1252.53 350.886 1260.67C362.752 1284.93 368.619 1306.8 369.819 1331.73C370.219 1340 371.019 1346.27 371.552 1345.73C374.752 1342.13 378.886 1306 377.552 1293.33C376.219 1281.47 372.752 1268.13 368.086 1256.8C365.686 1251.07 363.952 1245.73 364.352 1245.2C365.552 1243.07 370.352 1244 379.286 1247.87C394.619 1254.53 403.152 1256.53 417.552 1256.53C428.619 1256.67 431.952 1256.13 437.419 1253.6C452.486 1246.67 453.552 1247.73 480.086 1298.53C495.019 1326.93 504.352 1341.07 519.952 1358.67C531.419 1371.6 544.486 1383.47 545.686 1382.27C547.019 1381.07 543.419 1376 534.886 1366.53C519.686 1350 502.219 1321.6 502.219 1313.33C502.219 1311.07 499.019 1303.2 494.752 1294.93C486.219 1278.4 482.086 1262.67 481.952 1246C481.819 1232.93 484.352 1226.53 491.686 1221.73C495.552 1219.2 497.286 1218.8 499.286 1219.87C500.619 1220.53 507.552 1228.13 514.619 1236.4C539.019 1265.33 561.552 1284.93 602.886 1313.33C623.152 1327.2 632.886 1334.4 646.219 1345.2C650.219 1348.4 657.152 1352.8 661.552 1354.8C676.886 1362 733.019 1373.47 763.819 1375.73C786.352 1377.33 815.152 1374.93 873.552 1366.53C906.352 1361.87 993.019 1346.27 1003.55 1343.2C1015.55 1339.73 1022.89 1335.2 1031.02 1326.13C1039.29 1317.07 1050.75 1307.33 1062.49 1299.47C1075.29 1291.07 1091.55 1272.93 1091.55 1267.2C1091.55 1265.47 1091.15 1265.33 1089.55 1266.67C1087.69 1268.27 1084.89 1267.47 1084.89 1265.33C1084.89 1264.67 1087.29 1261.33 1090.22 1258C1093.15 1254.67 1095.55 1251.07 1095.69 1250.27C1096.49 1233.73 1098.35 1217.73 1100.22 1211.87C1102.49 1204.8 1102.49 1203.87 1100.35 1198.8C1097.82 1192.4 1097.55 1176.8 1099.69 1168.67C1100.49 1165.73 1103.55 1157.87 1106.49 1151.33C1115.82 1130.67 1113.95 1123.07 1094.75 1101.33C1081.15 1086.13 1080.22 1084.27 1080.22 1071.33C1080.22 1062.67 1080.75 1059.73 1083.29 1055.6C1086.89 1049.47 1087.15 1041.33 1084.22 1024.93C1081.29 1008.27 1075.42 993.467 1062.75 970.533C1045.69 939.867 1038.09 928.933 1022.09 912.533C1006.09 896 1005.15 893.733 1010.89 886.933C1016.22 880.533 1014.49 871.2 1006.09 861.733C1002.89 858 1002.22 856.267 1002.89 853.6C1004.62 846.667 1008.89 842.933 1022.89 835.867C1043.95 825.467 1047.15 822.133 1059.42 797.333C1065.15 785.867 1070.89 772.267 1072.09 767.2C1073.29 762.133 1075.55 754.4 1077.02 750C1083.69 730.4 1083.82 729.733 1083.02 706.667C1081.82 670.267 1075.55 628.133 1069.95 618.933C1067.02 614.133 1067.02 613.733 1069.69 581.2C1070.75 568.533 1067.95 556.667 1058.22 533.333C1051.69 517.6 1045.15 499.733 1041.95 489.333C1039.95 482.8 1026.49 460.4 1015.55 445.333C996.486 419.2 991.552 412 982.352 396.667C977.286 388 972.619 379.333 972.219 377.333C971.819 375.333 969.552 372 967.419 369.867L963.286 366L965.019 369.6C967.686 375.6 964.486 380.133 941.952 403.733C930.352 415.867 921.152 426 921.552 426.4C922.352 427.2 925.419 424.4 948.886 401.867C956.619 394.4 964.352 387.867 966.086 387.333C973.019 385.2 974.486 394.4 968.886 405.333C965.952 411.2 949.686 426.8 932.619 440.533C925.419 446.267 919.552 451.2 919.552 451.6C919.552 452.267 927.686 446.4 951.952 428.667C971.819 414 974.486 413.2 980.352 420.933C982.352 423.733 989.819 432 996.886 439.333C1015.95 459.067 1023.15 471.2 1028.22 491.333C1031.02 502.533 1034.22 509.067 1040.09 515.733C1046.22 522.533 1048.89 528.133 1050.35 537.6C1051.02 542 1053.69 549.867 1056.22 555.2C1061.42 565.733 1061.82 568.933 1058.89 574.667C1056.09 580.133 1049.29 584.4 1019.82 599.333C1005.69 606.4 994.352 612.533 994.486 612.8C994.752 612.933 1000.09 611.2 1006.22 608.8C1032.35 598.667 1050.22 592 1051.42 592C1052.22 592 1052.89 592.933 1052.89 594C1052.89 596.8 1042.62 603.067 1019.95 614.4C1003.69 622.667 997.152 626.667 1000.22 626.667C1000.62 626.667 1010.75 623.333 1022.75 619.333C1034.62 615.333 1046.62 612 1049.42 612C1054.22 612 1054.49 612.267 1057.69 619.6C1061.15 627.6 1064.62 634.667 1068.89 642.667C1071.29 647.333 1074.22 665.067 1074.22 675.6C1074.22 680.267 1073.55 681.733 1069.95 684.533L1065.69 687.867L1069.55 689.333C1071.69 690.133 1073.95 691.6 1074.49 692.4C1076.22 695.067 1075.69 701.867 1073.55 704.933C1071.82 707.333 1071.82 707.867 1073.55 709.333C1076.49 711.733 1075.95 720 1072.49 725.2C1066.89 733.733 1066.22 735.333 1066.22 740C1066.22 750 1063.15 762.4 1057.42 776.533C1045.29 806.133 1037.69 816.933 1026.62 819.867C1016.35 822.667 994.752 824.267 979.552 823.467C954.219 822 940.086 817.6 932.086 808.4C928.486 804.4 926.752 803.467 921.952 803.2C918.752 802.933 911.286 800.933 905.419 798.533C893.952 794 875.419 791.6 873.686 794.533C873.019 795.6 875.152 796 880.619 796C889.952 796 897.419 798.4 907.552 804.667C911.686 807.067 916.752 809.6 918.886 810C926.886 811.733 927.819 812.267 934.352 818.133C942.752 825.6 946.752 827.6 955.552 828.8C959.952 829.333 963.686 830.8 965.419 832.533C967.152 834.267 969.952 835.333 973.819 835.333C977.952 835.6 980.619 836.533 983.019 838.8C989.952 845.2 991.286 851.2 988.219 860.933C987.419 863.467 988.219 864.267 995.952 867.733C1008.75 873.6 1010.35 877.733 1003.02 886.533C996.352 894.533 995.819 897.2 1000.09 900.667C1007.15 906.267 1003.42 908.667 980.752 913.2C973.019 914.667 963.152 917.067 958.752 918.533L950.886 921.067L970.219 921.2C981.552 921.333 988.886 921.867 988.219 922.533C987.419 923.2 978.219 925.6 967.552 928C956.886 930.4 947.952 932.533 947.686 932.8C946.619 933.867 967.019 933.333 992.619 931.733L1018.35 930.267L1025.29 937.067C1034.09 945.733 1040.22 955.867 1045.02 969.467C1050.22 983.867 1053.29 989.467 1060.22 997.333C1070.09 1008.4 1081.02 1033.33 1078.89 1039.87C1077.82 1043.47 1070.09 1046.13 1049.82 1050.13C1004.89 1058.67 1004.89 1058.67 1006.35 1061.73C1007.82 1064.27 1008.75 1064.4 1023.42 1063.6C1031.95 1063.2 1044.49 1061.6 1051.42 1060C1058.35 1058.53 1064.75 1057.47 1065.82 1057.87C1071.15 1060 1063.15 1071.47 1050.89 1079.47C1047.15 1081.73 1039.82 1085.07 1034.49 1086.53C1029.15 1088.13 1024.89 1090 1024.89 1090.67C1024.89 1092.53 1026.75 1092.4 1039.29 1089.33C1057.95 1084.8 1068.22 1086.67 1071.55 1094.8C1072.75 1097.47 1074.09 1098.67 1076.22 1098.67C1082.62 1098.67 1095.95 1111.6 1102.22 1123.87C1106.89 1133.2 1105.69 1140.27 1095.82 1160.8C1087.69 1177.6 1086.22 1182.93 1088.89 1184.67C1091.42 1186.27 1090.22 1190.4 1086.22 1193.73C1081.82 1197.6 1069.55 1201.87 1043.69 1208.67C1025.82 1213.33 1017.02 1216.67 1026.22 1215.2C1053.82 1210.8 1077.82 1204.93 1086.35 1200.53C1089.95 1198.8 1093.42 1197.33 1094.22 1197.33C1096.75 1197.33 1095.55 1202.67 1091.42 1210.13C1088.09 1215.87 1087.02 1220 1086.09 1228.93C1085.42 1235.2 1084.22 1241.2 1083.42 1242.13C1082.62 1243.07 1074.35 1245.6 1065.02 1247.87C1039.02 1254 1015.95 1255.07 928.886 1254.27C858.352 1253.6 826.219 1252.13 813.952 1249.47C807.952 1248.13 805.686 1248.67 808.886 1250.67C814.886 1254.4 846.886 1258.27 879.286 1259.33C911.952 1260.4 913.819 1260.67 918.352 1265.73C921.686 1269.47 923.152 1270 931.019 1270.4C942.486 1271.2 989.952 1268.53 1012.22 1265.87C1021.82 1264.67 1037.29 1262.27 1046.75 1260.53C1056.09 1258.67 1065.42 1257.33 1067.42 1257.6C1070.89 1258 1070.89 1258.13 1070.89 1268.93C1070.89 1283.33 1069.15 1285.73 1053.95 1291.6C1046.75 1294.4 1040.22 1298.13 1035.69 1302C1027.82 1308.67 1019.55 1311.73 998.886 1315.33C979.419 1318.8 979.152 1320.13 998.219 1319.2C1011.95 1318.53 1015.29 1318.8 1017.55 1320.4C1021.42 1323.33 1019.15 1325.07 1006.89 1328.13C1001.15 1329.47 993.686 1332.27 990.352 1334.27C978.619 1341.07 974.752 1342.67 964.219 1345.2C950.619 1348.53 918.486 1353.47 877.552 1358.53C803.952 1367.6 784.352 1368.53 751.286 1364.13C701.686 1357.47 663.152 1344.53 637.552 1326C631.686 1321.73 615.152 1310.13 600.886 1300.27C567.419 1277.07 559.552 1270.67 546.486 1256.4C522.752 1230.53 484.886 1183.07 484.886 1179.2C484.886 1174.4 488.619 1177.07 525.286 1208C572.086 1247.6 603.019 1263.6 675.686 1285.87C685.286 1288.8 693.952 1292.4 698.219 1295.33L705.019 1300L708.886 1297.07C711.952 1294.93 715.286 1294.13 723.552 1293.6C729.419 1293.33 734.219 1292.53 734.219 1291.87C734.219 1288.93 725.952 1286.67 715.286 1286.67C702.486 1286.67 688.752 1283.33 662.752 1273.87C600.219 1251.33 555.819 1225.33 517.286 1188.67C510.352 1182.13 507.286 1178.4 508.219 1177.6C509.819 1175.87 534.619 1179.07 548.886 1182.67C564.086 1186.53 576.886 1188.27 583.286 1187.33C590.086 1186.27 590.219 1183.47 583.419 1182.93C572.886 1182.13 570.219 1180.27 575.952 1177.73C578.352 1176.53 577.419 1176.13 569.552 1175.33C556.352 1174 544.619 1171.07 532.219 1165.73C520.486 1160.67 518.219 1159.2 518.219 1156.53C518.219 1153.2 519.152 1152.93 669.552 1126.8C702.752 1120.93 731.819 1116.93 754.886 1114.67C788.352 1111.6 798.352 1110.27 797.286 1109.2C795.152 1107.07 721.686 1112.13 678.886 1117.47C667.152 1118.93 644.086 1122.4 627.552 1125.33C559.819 1137.2 508.886 1142.93 508.886 1138.8C508.886 1137.73 534.352 1128.53 569.952 1116.8C578.086 1114 584.886 1111.2 584.886 1110.53C584.886 1109.87 582.219 1109.33 578.886 1109.33C575.552 1109.33 572.886 1108.93 572.886 1108.27C572.886 1107.73 575.686 1105.73 579.019 1103.73C583.286 1101.07 585.152 1098.93 585.686 1096C586.752 1090.8 588.486 1089.87 591.552 1092.67C594.086 1094.93 594.219 1094.93 595.019 1092.53C598.086 1082.8 600.486 1081.47 656.886 1055.87C712.619 1030.67 726.752 1024.67 736.486 1021.87C740.619 1020.67 745.686 1018.53 747.552 1017.2C749.419 1015.87 756.886 1013.47 764.219 1011.87C771.552 1010.4 782.619 1007.07 788.886 1004.67C795.152 1002.13 809.286 998 820.219 995.333C843.152 989.867 866.752 982.8 865.819 981.733C865.419 981.333 858.352 982.667 849.952 984.533C841.686 986.4 827.419 989.2 818.219 990.8C768.752 999.333 718.352 1018.53 614.352 1068.27C552.486 1097.87 537.286 1104.67 519.686 1110.8C511.419 1113.6 504.086 1116 503.419 1116C500.886 1116 502.352 1112.4 505.952 1109.73C513.952 1103.87 529.819 1093.47 535.286 1090.8C538.352 1089.2 540.886 1087.33 540.886 1086.67C540.886 1083.87 534.352 1085.6 521.686 1092C508.752 1098.53 504.886 1099.73 504.886 1097.6C504.886 1096.53 577.152 1032.93 594.619 1018.67C600.219 1014.13 604.886 1010 604.886 1009.6C604.886 1008.93 598.886 1013.33 587.286 1022.67C572.752 1034.27 562.219 1039.33 562.219 1034.67C562.219 1031.73 577.152 1017.07 614.752 983.067C637.286 962.667 663.819 938.8 673.552 930C686.219 918.533 694.352 912.267 702.352 908.133C708.486 904.8 715.552 900.133 718.086 897.733C720.619 895.333 723.419 893.333 724.352 893.333C725.552 893.333 725.819 892 725.286 888.933C724.752 885.2 725.286 883.867 729.819 879.6C732.619 876.8 744.219 868.267 755.552 860.4C766.886 852.667 776.886 845.733 777.552 845.067C780.219 842.4 756.086 855.067 738.352 865.6C714.886 879.6 684.486 899.867 675.552 907.467C671.686 910.8 665.819 915.333 662.352 917.6C659.019 920 649.286 928.267 640.886 936.133C619.686 955.867 596.886 975.6 555.552 1010.13C536.086 1026.4 509.819 1049.07 497.019 1060.53C484.352 1072 473.419 1081.33 472.752 1081.33C469.952 1081.33 475.286 1074.93 492.352 1057.33C502.219 1047.2 510.219 1038.53 510.219 1038.13C510.219 1035.33 501.286 1043.33 478.219 1066.53C448.886 1095.87 434.886 1112.53 433.552 1119.6C432.486 1125.47 430.086 1124.67 427.552 1117.6C425.819 1112.67 425.952 1111.6 427.819 1107.6C434.619 1093.2 499.286 1032.13 547.952 994.133C557.952 986.267 566.219 979.6 566.219 979.2C566.219 977.2 514.219 1015.87 474.486 1047.47C463.152 1056.53 453.286 1064 452.619 1064C449.952 1064 457.152 1055.2 490.219 1018.4C501.952 1005.33 498.352 1008.13 475.552 1030C466.352 1038.8 454.486 1049.6 449.152 1054C443.552 1058.67 436.752 1066 432.752 1071.6C419.819 1090.4 407.552 1100 407.552 1091.47C407.552 1087.07 422.886 1064.27 440.886 1042C475.686 998.8 516.752 952.4 583.552 880.667C622.752 838.533 649.019 809.867 651.419 806.4C656.486 798.933 639.419 814.667 606.886 847.333C570.619 883.467 551.286 904 520.752 938.667C510.619 950 495.152 967.067 486.219 976.667C477.152 986.133 463.819 1000.8 456.619 1008.93C443.019 1024.27 439.552 1026.4 436.886 1021.33C435.686 1019.07 436.086 1018.13 438.619 1015.6C440.486 1014 442.752 1010.53 443.819 1008C444.886 1005.47 450.352 997.6 455.819 990.667C469.686 972.8 469.552 972.133 455.286 986.933C441.152 1001.6 437.686 1004 434.619 1000.93C433.152 999.467 432.752 997.6 433.419 994.133C434.219 990.267 442.619 980.267 477.019 942.4C539.819 873.467 570.886 837.6 591.286 810.667C600.352 798.8 602.752 794.667 599.552 796.667C598.752 797.2 577.552 821.067 552.352 849.733C527.286 878.533 497.952 911.467 487.419 923.067C476.886 934.667 464.086 948.8 458.886 954.667C448.752 966.133 439.019 974.667 436.086 974.667C435.019 974.667 434.219 974.4 434.219 974.133C434.219 973.867 437.019 968.8 440.352 963.067C446.486 952.8 454.886 933.6 453.819 932.533C453.552 932.133 448.086 940.533 441.819 950.933C427.552 974.667 412.752 996.267 410.352 997.067C407.419 998 409.286 988.133 415.952 967.867C424.619 941.733 433.419 925.067 459.686 885.733C491.419 838.267 522.086 796.4 562.752 745.333C612.752 682.533 633.286 658.933 687.686 601.333C780.752 502.667 794.352 486.533 816.886 447.333C833.819 418 845.019 391.467 851.419 365.333C855.552 348.4 861.286 316 860.352 314.933C860.086 314.667 858.886 318 857.686 322.267C853.019 339.333 835.019 392.4 828.486 408.667C820.352 428.8 811.819 443.333 795.152 465.867C770.486 499.067 754.219 517.467 680.219 596C628.619 650.667 609.286 671.733 600.886 682.667C598.352 686 582.619 705.867 566.086 726.8C500.619 809.333 451.419 877.2 425.552 920.133C420.486 928.533 413.819 938 410.752 941.333C407.686 944.667 403.686 950.533 401.686 954.267C396.219 965.067 395.019 963.6 396.086 947.6C397.286 927.733 399.952 914.133 410.219 874C425.552 813.867 433.286 788.533 459.419 714.133C466.752 692.933 472.886 674.933 472.886 674.133C472.486 664.667 430.752 773.333 419.552 812.933C417.419 820.267 414.752 828.267 413.552 830.533C408.619 840.133 394.752 905.2 386.886 956C379.952 1000.67 376.752 1013.6 373.419 1010.4C372.886 1009.87 373.152 1001.47 374.086 991.733C376.086 968.133 377.286 916.4 375.686 922.667C373.819 929.733 370.352 972.4 369.419 1000C368.619 1025.6 367.152 1035.2 364.486 1034.27C361.952 1033.47 361.286 1025.73 360.352 990C359.152 944.133 361.419 863.067 364.886 831.867C367.819 804 369.552 769.733 367.686 777.333C367.019 779.867 364.352 798.533 361.686 818.667C356.352 859.333 354.352 896 354.219 950.133C354.219 967.867 353.819 984.267 353.419 986.533C351.686 995.333 349.552 989.6 347.819 971.333C346.485 956.533 345.285 950.8 341.819 942.133C336.885 929.467 335.552 931.333 339.552 945.467C342.485 956.133 343.019 964.667 340.885 966C337.419 968.133 332.219 942.267 325.552 890.667C319.685 843.467 318.885 832.533 319.019 788.667C319.019 740.133 320.219 726.4 329.552 667.333C332.752 646.8 337.019 618.533 338.885 604.667C342.752 576.933 355.286 521.867 365.286 488.667C368.619 477.6 375.019 455.2 379.552 438.667C389.152 403.867 403.152 360.533 408.086 350.933C409.952 347.333 412.086 340.533 412.752 336C413.552 331.333 415.152 326.533 416.219 325.333C417.419 324 419.152 320 420.086 316.4C422.752 306.133 431.819 286.4 451.552 247.333C480.086 191.067 502.352 151.2 511.552 140C514.219 136.667 517.552 131.6 519.019 128.667C521.686 122.933 564.486 78.4 580.752 64.4C591.952 54.8 595.019 53.8667 593.686 60C592.752 65.0667 592.219 65.3333 609.819 49.8667C628.619 33.3333 644.486 22.5333 650.352 22.2667C658.219 21.8667 657.019 26.1333 646.086 38.1333C640.086 44.5333 638.886 46.2667 643.019 42.4C650.486 35.2 654.752 33.3333 662.886 33.3333C670.619 33.3333 686.352 36.4 696.086 39.8667C704.352 42.6667 716.886 50.1333 716.886 52.1333C716.886 52.8 713.686 57.0667 709.819 61.6C696.486 77.6 692.486 82.8 693.152 83.4667C693.552 83.8667 700.086 78.4 707.552 71.3333C727.019 53.2 728.619 52.8 726.886 65.4667C725.286 76.6667 717.952 89.2 704.752 103.6C690.086 119.467 670.886 142.267 660.086 156.667C650.486 169.467 649.419 171.2 651.286 170.533C653.952 169.6 671.686 148.933 677.686 139.867C687.552 124.933 714.219 104.4 726.086 102.533C729.819 102 735.819 100 739.552 98.2667C745.419 95.4667 747.152 95.0667 750.619 96.4C756.619 98.4 776.886 118.8 776.886 122.667C776.886 124.533 773.552 129.2 767.819 135.2C758.619 144.933 742.219 165.6 742.219 167.6C742.219 168.133 747.819 163.067 754.752 156.133C764.619 146.267 767.819 143.867 769.952 144.533C776.086 146.533 783.552 153.733 790.486 164.267C794.619 170.533 799.552 176.8 801.419 178.133C803.552 179.6 806.486 184.667 808.886 190.533C811.152 195.867 814.752 202.4 816.886 204.933C820.886 209.333 820.886 209.467 818.752 214.4C816.086 220.8 811.019 229.6 805.152 238C801.152 243.6 802.619 242.667 814.619 230.933C827.952 218 831.686 215.6 833.552 218.667C834.752 220.533 832.486 224.133 823.019 235.733C813.152 248 809.019 254 811.286 253.2C812.086 252.933 818.752 247.067 826.086 240.267C833.419 233.6 839.819 228 840.486 228C841.686 228 845.286 233.2 855.952 251.333C860.352 258.533 866.352 267.733 869.419 271.467C872.352 275.2 878.619 283.6 883.152 290.133C892.886 304.133 906.619 318.667 921.952 331.2C927.952 336.133 932.886 340.8 932.886 341.6C932.886 342.267 925.952 350.4 917.552 359.6C897.686 381.333 897.286 383.067 915.019 369.733C920.219 365.867 924.886 362.667 925.286 362.667C927.819 362.667 925.152 366.267 914.219 378.133C907.552 385.2 902.486 391.333 902.886 391.733C903.552 392.533 903.019 392.933 919.152 380.267C936.619 366.4 945.552 361.333 952.219 361.333C955.286 361.333 958.352 362 959.286 362.933C960.219 363.867 960.886 364 960.886 363.333C960.886 362.667 951.419 352.8 939.819 341.467C917.952 320 900.752 299.867 885.419 277.867C875.686 264 866.219 246.533 866.219 242.8C866.219 239.467 864.752 238.4 862.752 240.133C859.819 242.533 856.086 240.267 853.419 234.267C849.952 226.4 841.419 216.133 826.219 201.333C814.486 190 813.019 187.867 811.419 181.467C809.952 175.6 808.752 173.733 804.886 171.333C802.219 169.733 796.352 164 791.686 158.8C787.019 153.467 780.486 147.333 777.286 145.067C771.686 141.2 771.419 140.933 773.686 138.533C777.019 134.8 780.219 134.267 784.886 136.667C788.486 138.533 788.886 138.533 788.886 136.533C788.886 132 784.619 120.267 781.419 115.867C776.886 109.733 758.219 93.4667 754.486 92.5333C751.286 91.6 747.019 92.1333 735.819 94.8C727.286 96.9333 724.086 95.2 728.352 90.5333C730.352 88.2667 730.886 86 730.486 78.9333C730.352 73.8667 731.152 66.9333 732.352 62.5333C733.686 57.8667 734.219 52.9333 733.686 50.2667C732.619 44.9333 727.019 39.2 721.552 38C719.419 37.4667 716.486 36.8 715.152 36.4C711.552 35.4667 707.552 25.7333 707.552 18C707.552 10.8 704.886 5.33333 701.286 5.33333C700.086 5.33333 693.286 7.99999 686.086 11.3333C678.886 14.6667 671.019 17.3333 668.619 17.3333C659.819 17.3333 649.952 8.13333 652.886 2.79999C654.086 0.399993 653.952 -6.99103e-06 651.286 -6.99103e-06C649.552 -6.99103e-06 644.752 1.86666 640.619 4.13333ZM408.886 975.867C408.886 981.867 398.619 1005.33 396.086 1005.33C391.686 1005.33 395.552 990.533 403.152 978.267C406.486 972.933 408.886 971.867 408.886 975.867ZM428.886 1008C428.886 1013.73 422.886 1025.47 414.352 1036.13C409.419 1042.4 403.552 1050.4 401.419 1053.87C397.819 1059.6 394.219 1061.87 394.219 1058.4C394.219 1054.4 417.552 1013.87 423.952 1007.07C426.886 1003.73 428.886 1004.13 428.886 1008Z",
                            }),
                          }),
                          C("path", {
                            d: "M640.619 4.13333C636.486 6.39999 626.086 14.2667 617.419 21.6C608.886 28.9333 593.019 42 582.352 50.5333C543.152 82.1333 509.819 115.6 502.752 130.533C500.886 134.533 494.486 145.2 488.752 154.133C463.286 193.733 433.819 253.467 409.552 314.667C389.819 364.267 354.086 482.8 339.019 548.667C323.952 614.667 310.485 702.8 307.285 757.067C304.352 805.2 310.085 881.467 320.885 940C322.352 947.733 324.752 960.933 326.219 969.333C327.685 977.733 329.819 987.867 330.885 991.733C332.085 995.6 332.752 999.2 332.352 999.867C331.952 1000.53 329.285 1000.27 326.619 999.2C318.619 996.4 308.619 996.933 298.752 1000.67C292.085 1003.2 289.419 1003.6 287.419 1002.67C286.085 1001.87 284.885 1000.8 284.885 1000.13C284.885 999.467 281.019 994.8 276.352 989.467C271.685 984.267 267.152 978.133 266.219 975.733C265.419 973.333 262.885 967.467 260.885 962.667C258.752 957.867 256.352 951.2 255.685 947.733C254.085 940.933 240.885 910.533 229.952 888.667C218.485 865.867 200.085 836.667 182.085 812.533C171.685 798.667 119.685 748.133 111.419 743.867C103.685 740 101.152 740.533 94.0855 747.867C85.1522 757.2 83.8188 766.933 90.6188 774.267C92.8855 776.8 94.7522 777.333 102.085 777.333C107.819 777.333 112.885 778.267 116.485 780C137.419 789.467 186.885 833.867 201.552 856.4C213.019 874.133 238.752 928.4 247.152 952.667C251.819 966.133 252.885 972.8 250.885 975.6C249.419 977.6 247.019 976.533 227.419 964.667C215.419 957.467 185.152 941.467 160.219 929.2C92.3522 895.867 69.0188 885.733 45.9522 879.333C39.1522 877.333 29.4188 873.733 24.4855 871.2C19.4188 868.667 14.3522 866.667 13.0188 866.667C10.4855 866.667 3.41882 873.6 0.885482 878.533C-0.447851 881.067 -0.314518 882.933 1.55215 888.8C4.88548 899.333 6.61882 900.133 24.2188 899.2C40.6188 898.267 59.5522 900.4 84.2188 906C99.9522 909.6 111.285 914.4 130.619 925.867C149.019 936.533 165.285 944.4 186.485 952.8C208.885 961.6 221.152 968 235.285 978.533C258.085 995.467 270.085 1015.47 265.019 1027.73C264.085 1029.87 262.885 1034.53 262.485 1038.13C261.419 1044.67 261.419 1044.67 256.752 1044.4C254.085 1044.27 247.152 1042 241.419 1039.47C227.419 1033.33 221.419 1032.13 206.219 1032C190.352 1032 184.752 1033.6 179.019 1039.47C169.419 1049.47 159.552 1073.87 159.552 1087.87C159.552 1102.27 169.152 1115.2 182.752 1118.8C197.019 1122.67 219.552 1109.73 219.552 1097.6C219.552 1090.67 209.419 1082.67 200.619 1082.67C195.819 1082.67 188.752 1088 189.152 1091.2C189.552 1093.73 190.485 1094 198.619 1094.13C203.685 1094.27 208.485 1095.07 209.285 1095.87C212.085 1098.67 208.619 1104.4 202.219 1107.73C197.285 1110.4 194.752 1110.8 187.552 1110.27C170.885 1109.07 166.752 1104.4 167.819 1087.07C168.885 1069.33 179.019 1051.07 191.019 1045.2C196.485 1042.67 198.485 1042.4 209.419 1043.07C229.685 1044.4 260.352 1054.4 267.552 1062C269.152 1063.73 270.752 1068 271.419 1072.27C272.219 1076.4 275.285 1084.67 279.019 1091.6C285.685 1104.4 288.085 1115.47 285.019 1119.2C284.085 1120.27 279.419 1122.4 274.619 1124C269.952 1125.47 258.752 1129.73 249.819 1133.2C225.419 1142.93 209.419 1147.6 196.219 1149.07C181.019 1150.8 178.619 1153.07 174.352 1169.87C172.752 1176.4 167.685 1191.33 163.019 1203.2C154.485 1224.67 144.219 1260 146.352 1260C147.019 1260 149.552 1256.8 151.952 1252.93C165.685 1231.47 176.085 1207.2 178.219 1192.13C180.085 1178.53 186.752 1166.27 194.885 1161.47C197.019 1160.13 202.485 1158.67 206.885 1158.27C212.219 1157.87 220.619 1155.33 231.685 1150.8C248.485 1144 254.885 1142.53 253.952 1145.6C253.285 1147.47 249.285 1149.73 233.552 1156.67C216.752 1164.27 218.085 1160.27 218.485 1201.2L218.885 1236.67L214.485 1250.4C212.085 1258 210.219 1264.8 210.485 1265.6C211.285 1267.73 220.085 1250 223.285 1240C227.152 1228.13 228.485 1218.53 229.552 1197.33C231.019 1167.2 231.819 1165.2 244.619 1160.53C266.485 1152.53 272.219 1150 276.219 1146.53C278.619 1144.4 281.285 1142.67 281.952 1142.67C284.219 1142.67 286.219 1147.33 286.219 1152.53C286.219 1155.07 286.752 1157.47 287.552 1158C289.019 1158.93 291.019 1151.73 292.885 1138.13C294.619 1125.73 296.352 1120.93 298.619 1121.73C300.219 1122.27 300.219 1122.93 299.552 1151.33C299.152 1163.87 299.419 1165.6 304.085 1178.53C312.752 1202.8 322.219 1219.87 336.619 1237.33C340.485 1242.13 346.885 1252.53 350.886 1260.67C362.752 1284.93 368.619 1306.8 369.819 1331.73C370.219 1340 371.019 1346.27 371.552 1345.73C374.752 1342.13 378.886 1306 377.552 1293.33C376.219 1281.47 372.752 1268.13 368.086 1256.8C365.686 1251.07 363.952 1245.73 364.352 1245.2C365.552 1243.07 370.352 1244 379.286 1247.87C394.619 1254.53 403.152 1256.53 417.552 1256.53C428.619 1256.67 431.952 1256.13 437.419 1253.6C452.486 1246.67 453.552 1247.73 480.086 1298.53C495.019 1326.93 504.352 1341.07 519.952 1358.67C531.419 1371.6 544.486 1383.47 545.686 1382.27C547.019 1381.07 543.419 1376 534.886 1366.53C519.686 1350 502.219 1321.6 502.219 1313.33C502.219 1311.07 499.019 1303.2 494.752 1294.93C486.219 1278.4 482.086 1262.67 481.952 1246C481.819 1232.93 484.352 1226.53 491.686 1221.73C495.552 1219.2 497.286 1218.8 499.286 1219.87C500.619 1220.53 507.552 1228.13 514.619 1236.4C539.019 1265.33 561.552 1284.93 602.886 1313.33C623.152 1327.2 632.886 1334.4 646.219 1345.2C650.219 1348.4 657.152 1352.8 661.552 1354.8C676.886 1362 733.019 1373.47 763.819 1375.73C786.352 1377.33 815.152 1374.93 873.552 1366.53C906.352 1361.87 993.019 1346.27 1003.55 1343.2C1015.55 1339.73 1022.89 1335.2 1031.02 1326.13C1039.29 1317.07 1050.75 1307.33 1062.49 1299.47C1075.29 1291.07 1091.55 1272.93 1091.55 1267.2C1091.55 1265.47 1091.15 1265.33 1089.55 1266.67C1087.69 1268.27 1084.89 1267.47 1084.89 1265.33C1084.89 1264.67 1087.29 1261.33 1090.22 1258C1093.15 1254.67 1095.55 1251.07 1095.69 1250.27C1096.49 1233.73 1098.35 1217.73 1100.22 1211.87C1102.49 1204.8 1102.49 1203.87 1100.35 1198.8C1097.82 1192.4 1097.55 1176.8 1099.69 1168.67C1100.49 1165.73 1103.55 1157.87 1106.49 1151.33C1115.82 1130.67 1113.95 1123.07 1094.75 1101.33C1081.15 1086.13 1080.22 1084.27 1080.22 1071.33C1080.22 1062.67 1080.75 1059.73 1083.29 1055.6C1086.89 1049.47 1087.15 1041.33 1084.22 1024.93C1081.29 1008.27 1075.42 993.467 1062.75 970.533C1045.69 939.867 1038.09 928.933 1022.09 912.533C1006.09 896 1005.15 893.733 1010.89 886.933C1016.22 880.533 1014.49 871.2 1006.09 861.733C1002.89 858 1002.22 856.267 1002.89 853.6C1004.62 846.667 1008.89 842.933 1022.89 835.867C1043.95 825.467 1047.15 822.133 1059.42 797.333C1065.15 785.867 1070.89 772.267 1072.09 767.2C1073.29 762.133 1075.55 754.4 1077.02 750C1083.69 730.4 1083.82 729.733 1083.02 706.667C1081.82 670.267 1075.55 628.133 1069.95 618.933C1067.02 614.133 1067.02 613.733 1069.69 581.2C1070.75 568.533 1067.95 556.667 1058.22 533.333C1051.69 517.6 1045.15 499.733 1041.95 489.333C1039.95 482.8 1026.49 460.4 1015.55 445.333C996.486 419.2 991.552 412 982.352 396.667C977.286 388 972.619 379.333 972.219 377.333C971.819 375.333 969.552 372 967.419 369.867L963.286 366L965.019 369.6C967.686 375.6 964.486 380.133 941.952 403.733C930.352 415.867 921.152 426 921.552 426.4C922.352 427.2 925.419 424.4 948.886 401.867C956.619 394.4 964.352 387.867 966.086 387.333C973.019 385.2 974.486 394.4 968.886 405.333C965.952 411.2 949.686 426.8 932.619 440.533C925.419 446.267 919.552 451.2 919.552 451.6C919.552 452.267 927.686 446.4 951.952 428.667C971.819 414 974.486 413.2 980.352 420.933C982.352 423.733 989.819 432 996.886 439.333C1015.95 459.067 1023.15 471.2 1028.22 491.333C1031.02 502.533 1034.22 509.067 1040.09 515.733C1046.22 522.533 1048.89 528.133 1050.35 537.6C1051.02 542 1053.69 549.867 1056.22 555.2C1061.42 565.733 1061.82 568.933 1058.89 574.667C1056.09 580.133 1049.29 584.4 1019.82 599.333C1005.69 606.4 994.352 612.533 994.486 612.8C994.752 612.933 1000.09 611.2 1006.22 608.8C1032.35 598.667 1050.22 592 1051.42 592C1052.22 592 1052.89 592.933 1052.89 594C1052.89 596.8 1042.62 603.067 1019.95 614.4C1003.69 622.667 997.152 626.667 1000.22 626.667C1000.62 626.667 1010.75 623.333 1022.75 619.333C1034.62 615.333 1046.62 612 1049.42 612C1054.22 612 1054.49 612.267 1057.69 619.6C1061.15 627.6 1064.62 634.667 1068.89 642.667C1071.29 647.333 1074.22 665.067 1074.22 675.6C1074.22 680.267 1073.55 681.733 1069.95 684.533L1065.69 687.867L1069.55 689.333C1071.69 690.133 1073.95 691.6 1074.49 692.4C1076.22 695.067 1075.69 701.867 1073.55 704.933C1071.82 707.333 1071.82 707.867 1073.55 709.333C1076.49 711.733 1075.95 720 1072.49 725.2C1066.89 733.733 1066.22 735.333 1066.22 740C1066.22 750 1063.15 762.4 1057.42 776.533C1045.29 806.133 1037.69 816.933 1026.62 819.867C1016.35 822.667 994.752 824.267 979.552 823.467C954.219 822 940.086 817.6 932.086 808.4C928.486 804.4 926.752 803.467 921.952 803.2C918.752 802.933 911.286 800.933 905.419 798.533C893.952 794 875.419 791.6 873.686 794.533C873.019 795.6 875.152 796 880.619 796C889.952 796 897.419 798.4 907.552 804.667C911.686 807.067 916.752 809.6 918.886 810C926.886 811.733 927.819 812.267 934.352 818.133C942.752 825.6 946.752 827.6 955.552 828.8C959.952 829.333 963.686 830.8 965.419 832.533C967.152 834.267 969.952 835.333 973.819 835.333C977.952 835.6 980.619 836.533 983.019 838.8C989.952 845.2 991.286 851.2 988.219 860.933C987.419 863.467 988.219 864.267 995.952 867.733C1008.75 873.6 1010.35 877.733 1003.02 886.533C996.352 894.533 995.819 897.2 1000.09 900.667C1007.15 906.267 1003.42 908.667 980.752 913.2C973.019 914.667 963.152 917.067 958.752 918.533L950.886 921.067L970.219 921.2C981.552 921.333 988.886 921.867 988.219 922.533C987.419 923.2 978.219 925.6 967.552 928C956.886 930.4 947.952 932.533 947.686 932.8C946.619 933.867 967.019 933.333 992.619 931.733L1018.35 930.267L1025.29 937.067C1034.09 945.733 1040.22 955.867 1045.02 969.467C1050.22 983.867 1053.29 989.467 1060.22 997.333C1070.09 1008.4 1081.02 1033.33 1078.89 1039.87C1077.82 1043.47 1070.09 1046.13 1049.82 1050.13C1004.89 1058.67 1004.89 1058.67 1006.35 1061.73C1007.82 1064.27 1008.75 1064.4 1023.42 1063.6C1031.95 1063.2 1044.49 1061.6 1051.42 1060C1058.35 1058.53 1064.75 1057.47 1065.82 1057.87C1071.15 1060 1063.15 1071.47 1050.89 1079.47C1047.15 1081.73 1039.82 1085.07 1034.49 1086.53C1029.15 1088.13 1024.89 1090 1024.89 1090.67C1024.89 1092.53 1026.75 1092.4 1039.29 1089.33C1057.95 1084.8 1068.22 1086.67 1071.55 1094.8C1072.75 1097.47 1074.09 1098.67 1076.22 1098.67C1082.62 1098.67 1095.95 1111.6 1102.22 1123.87C1106.89 1133.2 1105.69 1140.27 1095.82 1160.8C1087.69 1177.6 1086.22 1182.93 1088.89 1184.67C1091.42 1186.27 1090.22 1190.4 1086.22 1193.73C1081.82 1197.6 1069.55 1201.87 1043.69 1208.67C1025.82 1213.33 1017.02 1216.67 1026.22 1215.2C1053.82 1210.8 1077.82 1204.93 1086.35 1200.53C1089.95 1198.8 1093.42 1197.33 1094.22 1197.33C1096.75 1197.33 1095.55 1202.67 1091.42 1210.13C1088.09 1215.87 1087.02 1220 1086.09 1228.93C1085.42 1235.2 1084.22 1241.2 1083.42 1242.13C1082.62 1243.07 1074.35 1245.6 1065.02 1247.87C1039.02 1254 1015.95 1255.07 928.886 1254.27C858.352 1253.6 826.219 1252.13 813.952 1249.47C807.952 1248.13 805.686 1248.67 808.886 1250.67C814.886 1254.4 846.886 1258.27 879.286 1259.33C911.952 1260.4 913.819 1260.67 918.352 1265.73C921.686 1269.47 923.152 1270 931.019 1270.4C942.486 1271.2 989.952 1268.53 1012.22 1265.87C1021.82 1264.67 1037.29 1262.27 1046.75 1260.53C1056.09 1258.67 1065.42 1257.33 1067.42 1257.6C1070.89 1258 1070.89 1258.13 1070.89 1268.93C1070.89 1283.33 1069.15 1285.73 1053.95 1291.6C1046.75 1294.4 1040.22 1298.13 1035.69 1302C1027.82 1308.67 1019.55 1311.73 998.886 1315.33C979.419 1318.8 979.152 1320.13 998.219 1319.2C1011.95 1318.53 1015.29 1318.8 1017.55 1320.4C1021.42 1323.33 1019.15 1325.07 1006.89 1328.13C1001.15 1329.47 993.686 1332.27 990.352 1334.27C978.619 1341.07 974.752 1342.67 964.219 1345.2C950.619 1348.53 918.486 1353.47 877.552 1358.53C803.952 1367.6 784.352 1368.53 751.286 1364.13C701.686 1357.47 663.152 1344.53 637.552 1326C631.686 1321.73 615.152 1310.13 600.886 1300.27C567.419 1277.07 559.552 1270.67 546.486 1256.4C522.752 1230.53 484.886 1183.07 484.886 1179.2C484.886 1174.4 488.619 1177.07 525.286 1208C572.086 1247.6 603.019 1263.6 675.686 1285.87C685.286 1288.8 693.952 1292.4 698.219 1295.33L705.019 1300L708.886 1297.07C711.952 1294.93 715.286 1294.13 723.552 1293.6C729.419 1293.33 734.219 1292.53 734.219 1291.87C734.219 1288.93 725.952 1286.67 715.286 1286.67C702.486 1286.67 688.752 1283.33 662.752 1273.87C600.219 1251.33 555.819 1225.33 517.286 1188.67C510.352 1182.13 507.286 1178.4 508.219 1177.6C509.819 1175.87 534.619 1179.07 548.886 1182.67C564.086 1186.53 576.886 1188.27 583.286 1187.33C590.086 1186.27 590.219 1183.47 583.419 1182.93C572.886 1182.13 570.219 1180.27 575.952 1177.73C578.352 1176.53 577.419 1176.13 569.552 1175.33C556.352 1174 544.619 1171.07 532.219 1165.73C520.486 1160.67 518.219 1159.2 518.219 1156.53C518.219 1153.2 519.152 1152.93 669.552 1126.8C702.752 1120.93 731.819 1116.93 754.886 1114.67C788.352 1111.6 798.352 1110.27 797.286 1109.2C795.152 1107.07 721.686 1112.13 678.886 1117.47C667.152 1118.93 644.086 1122.4 627.552 1125.33C559.819 1137.2 508.886 1142.93 508.886 1138.8C508.886 1137.73 534.352 1128.53 569.952 1116.8C578.086 1114 584.886 1111.2 584.886 1110.53C584.886 1109.87 582.219 1109.33 578.886 1109.33C575.552 1109.33 572.886 1108.93 572.886 1108.27C572.886 1107.73 575.686 1105.73 579.019 1103.73C583.286 1101.07 585.152 1098.93 585.686 1096C586.752 1090.8 588.486 1089.87 591.552 1092.67C594.086 1094.93 594.219 1094.93 595.019 1092.53C598.086 1082.8 600.486 1081.47 656.886 1055.87C712.619 1030.67 726.752 1024.67 736.486 1021.87C740.619 1020.67 745.686 1018.53 747.552 1017.2C749.419 1015.87 756.886 1013.47 764.219 1011.87C771.552 1010.4 782.619 1007.07 788.886 1004.67C795.152 1002.13 809.286 998 820.219 995.333C843.152 989.867 866.752 982.8 865.819 981.733C865.419 981.333 858.352 982.667 849.952 984.533C841.686 986.4 827.419 989.2 818.219 990.8C768.752 999.333 718.352 1018.53 614.352 1068.27C552.486 1097.87 537.286 1104.67 519.686 1110.8C511.419 1113.6 504.086 1116 503.419 1116C500.886 1116 502.352 1112.4 505.952 1109.73C513.952 1103.87 529.819 1093.47 535.286 1090.8C538.352 1089.2 540.886 1087.33 540.886 1086.67C540.886 1083.87 534.352 1085.6 521.686 1092C508.752 1098.53 504.886 1099.73 504.886 1097.6C504.886 1096.53 577.152 1032.93 594.619 1018.67C600.219 1014.13 604.886 1010 604.886 1009.6C604.886 1008.93 598.886 1013.33 587.286 1022.67C572.752 1034.27 562.219 1039.33 562.219 1034.67C562.219 1031.73 577.152 1017.07 614.752 983.067C637.286 962.667 663.819 938.8 673.552 930C686.219 918.533 694.352 912.267 702.352 908.133C708.486 904.8 715.552 900.133 718.086 897.733C720.619 895.333 723.419 893.333 724.352 893.333C725.552 893.333 725.819 892 725.286 888.933C724.752 885.2 725.286 883.867 729.819 879.6C732.619 876.8 744.219 868.267 755.552 860.4C766.886 852.667 776.886 845.733 777.552 845.067C780.219 842.4 756.086 855.067 738.352 865.6C714.886 879.6 684.486 899.867 675.552 907.467C671.686 910.8 665.819 915.333 662.352 917.6C659.019 920 649.286 928.267 640.886 936.133C619.686 955.867 596.886 975.6 555.552 1010.13C536.086 1026.4 509.819 1049.07 497.019 1060.53C484.352 1072 473.419 1081.33 472.752 1081.33C469.952 1081.33 475.286 1074.93 492.352 1057.33C502.219 1047.2 510.219 1038.53 510.219 1038.13C510.219 1035.33 501.286 1043.33 478.219 1066.53C448.886 1095.87 434.886 1112.53 433.552 1119.6C432.486 1125.47 430.086 1124.67 427.552 1117.6C425.819 1112.67 425.952 1111.6 427.819 1107.6C434.619 1093.2 499.286 1032.13 547.952 994.133C557.952 986.267 566.219 979.6 566.219 979.2C566.219 977.2 514.219 1015.87 474.486 1047.47C463.152 1056.53 453.286 1064 452.619 1064C449.952 1064 457.152 1055.2 490.219 1018.4C501.952 1005.33 498.352 1008.13 475.552 1030C466.352 1038.8 454.486 1049.6 449.152 1054C443.552 1058.67 436.752 1066 432.752 1071.6C419.819 1090.4 407.552 1100 407.552 1091.47C407.552 1087.07 422.886 1064.27 440.886 1042C475.686 998.8 516.752 952.4 583.552 880.667C622.752 838.533 649.019 809.867 651.419 806.4C656.486 798.933 639.419 814.667 606.886 847.333C570.619 883.467 551.286 904 520.752 938.667C510.619 950 495.152 967.067 486.219 976.667C477.152 986.133 463.819 1000.8 456.619 1008.93C443.019 1024.27 439.552 1026.4 436.886 1021.33C435.686 1019.07 436.086 1018.13 438.619 1015.6C440.486 1014 442.752 1010.53 443.819 1008C444.886 1005.47 450.352 997.6 455.819 990.667C469.686 972.8 469.552 972.133 455.286 986.933C441.152 1001.6 437.686 1004 434.619 1000.93C433.152 999.467 432.752 997.6 433.419 994.133C434.219 990.267 442.619 980.267 477.019 942.4C539.819 873.467 570.886 837.6 591.286 810.667C600.352 798.8 602.752 794.667 599.552 796.667C598.752 797.2 577.552 821.067 552.352 849.733C527.286 878.533 497.952 911.467 487.419 923.067C476.886 934.667 464.086 948.8 458.886 954.667C448.752 966.133 439.019 974.667 436.086 974.667C435.019 974.667 434.219 974.4 434.219 974.133C434.219 973.867 437.019 968.8 440.352 963.067C446.486 952.8 454.886 933.6 453.819 932.533C453.552 932.133 448.086 940.533 441.819 950.933C427.552 974.667 412.752 996.267 410.352 997.067C407.419 998 409.286 988.133 415.952 967.867C424.619 941.733 433.419 925.067 459.686 885.733C491.419 838.267 522.086 796.4 562.752 745.333C612.752 682.533 633.286 658.933 687.686 601.333C780.752 502.667 794.352 486.533 816.886 447.333C833.819 418 845.019 391.467 851.419 365.333C855.552 348.4 861.286 316 860.352 314.933C860.086 314.667 858.886 318 857.686 322.267C853.019 339.333 835.019 392.4 828.486 408.667C820.352 428.8 811.819 443.333 795.152 465.867C770.486 499.067 754.219 517.467 680.219 596C628.619 650.667 609.286 671.733 600.886 682.667C598.352 686 582.619 705.867 566.086 726.8C500.619 809.333 451.419 877.2 425.552 920.133C420.486 928.533 413.819 938 410.752 941.333C407.686 944.667 403.686 950.533 401.686 954.267C396.219 965.067 395.019 963.6 396.086 947.6C397.286 927.733 399.952 914.133 410.219 874C425.552 813.867 433.286 788.533 459.419 714.133C466.752 692.933 472.886 674.933 472.886 674.133C472.486 664.667 430.752 773.333 419.552 812.933C417.419 820.267 414.752 828.267 413.552 830.533C408.619 840.133 394.752 905.2 386.886 956C379.952 1000.67 376.752 1013.6 373.419 1010.4C372.886 1009.87 373.152 1001.47 374.086 991.733C376.086 968.133 377.286 916.4 375.686 922.667C373.819 929.733 370.352 972.4 369.419 1000C368.619 1025.6 367.152 1035.2 364.486 1034.27C361.952 1033.47 361.286 1025.73 360.352 990C359.152 944.133 361.419 863.067 364.886 831.867C367.819 804 369.552 769.733 367.686 777.333C367.019 779.867 364.352 798.533 361.686 818.667C356.352 859.333 354.352 896 354.219 950.133C354.219 967.867 353.819 984.267 353.419 986.533C351.686 995.333 349.552 989.6 347.819 971.333C346.485 956.533 345.285 950.8 341.819 942.133C336.885 929.467 335.552 931.333 339.552 945.467C342.485 956.133 343.019 964.667 340.885 966C337.419 968.133 332.219 942.267 325.552 890.667C319.685 843.467 318.885 832.533 319.019 788.667C319.019 740.133 320.219 726.4 329.552 667.333C332.752 646.8 337.019 618.533 338.885 604.667C342.752 576.933 355.286 521.867 365.286 488.667C368.619 477.6 375.019 455.2 379.552 438.667C389.152 403.867 403.152 360.533 408.086 350.933C409.952 347.333 412.086 340.533 412.752 336C413.552 331.333 415.152 326.533 416.219 325.333C417.419 324 419.152 320 420.086 316.4C422.752 306.133 431.819 286.4 451.552 247.333C480.086 191.067 502.352 151.2 511.552 140C514.219 136.667 517.552 131.6 519.019 128.667C521.686 122.933 564.486 78.4 580.752 64.4C591.952 54.8 595.019 53.8667 593.686 60C592.752 65.0667 592.219 65.3333 609.819 49.8667C628.619 33.3333 644.486 22.5333 650.352 22.2667C658.219 21.8667 657.019 26.1333 646.086 38.1333C640.086 44.5333 638.886 46.2667 643.019 42.4C650.486 35.2 654.752 33.3333 662.886 33.3333C670.619 33.3333 686.352 36.4 696.086 39.8667C704.352 42.6667 716.886 50.1333 716.886 52.1333C716.886 52.8 713.686 57.0667 709.819 61.6C696.486 77.6 692.486 82.8 693.152 83.4667C693.552 83.8667 700.086 78.4 707.552 71.3333C727.019 53.2 728.619 52.8 726.886 65.4667C725.286 76.6667 717.952 89.2 704.752 103.6C690.086 119.467 670.886 142.267 660.086 156.667C650.486 169.467 649.419 171.2 651.286 170.533C653.952 169.6 671.686 148.933 677.686 139.867C687.552 124.933 714.219 104.4 726.086 102.533C729.819 102 735.819 100 739.552 98.2667C745.419 95.4667 747.152 95.0667 750.619 96.4C756.619 98.4 776.886 118.8 776.886 122.667C776.886 124.533 773.552 129.2 767.819 135.2C758.619 144.933 742.219 165.6 742.219 167.6C742.219 168.133 747.819 163.067 754.752 156.133C764.619 146.267 767.819 143.867 769.952 144.533C776.086 146.533 783.552 153.733 790.486 164.267C794.619 170.533 799.552 176.8 801.419 178.133C803.552 179.6 806.486 184.667 808.886 190.533C811.152 195.867 814.752 202.4 816.886 204.933C820.886 209.333 820.886 209.467 818.752 214.4C816.086 220.8 811.019 229.6 805.152 238C801.152 243.6 802.619 242.667 814.619 230.933C827.952 218 831.686 215.6 833.552 218.667C834.752 220.533 832.486 224.133 823.019 235.733C813.152 248 809.019 254 811.286 253.2C812.086 252.933 818.752 247.067 826.086 240.267C833.419 233.6 839.819 228 840.486 228C841.686 228 845.286 233.2 855.952 251.333C860.352 258.533 866.352 267.733 869.419 271.467C872.352 275.2 878.619 283.6 883.152 290.133C892.886 304.133 906.619 318.667 921.952 331.2C927.952 336.133 932.886 340.8 932.886 341.6C932.886 342.267 925.952 350.4 917.552 359.6C897.686 381.333 897.286 383.067 915.019 369.733C920.219 365.867 924.886 362.667 925.286 362.667C927.819 362.667 925.152 366.267 914.219 378.133C907.552 385.2 902.486 391.333 902.886 391.733C903.552 392.533 903.019 392.933 919.152 380.267C936.619 366.4 945.552 361.333 952.219 361.333C955.286 361.333 958.352 362 959.286 362.933C960.219 363.867 960.886 364 960.886 363.333C960.886 362.667 951.419 352.8 939.819 341.467C917.952 320 900.752 299.867 885.419 277.867C875.686 264 866.219 246.533 866.219 242.8C866.219 239.467 864.752 238.4 862.752 240.133C859.819 242.533 856.086 240.267 853.419 234.267C849.952 226.4 841.419 216.133 826.219 201.333C814.486 190 813.019 187.867 811.419 181.467C809.952 175.6 808.752 173.733 804.886 171.333C802.219 169.733 796.352 164 791.686 158.8C787.019 153.467 780.486 147.333 777.286 145.067C771.686 141.2 771.419 140.933 773.686 138.533C777.019 134.8 780.219 134.267 784.886 136.667C788.486 138.533 788.886 138.533 788.886 136.533C788.886 132 784.619 120.267 781.419 115.867C776.886 109.733 758.219 93.4667 754.486 92.5333C751.286 91.6 747.019 92.1333 735.819 94.8C727.286 96.9333 724.086 95.2 728.352 90.5333C730.352 88.2667 730.886 86 730.486 78.9333C730.352 73.8667 731.152 66.9333 732.352 62.5333C733.686 57.8667 734.219 52.9333 733.686 50.2667C732.619 44.9333 727.019 39.2 721.552 38C719.419 37.4667 716.486 36.8 715.152 36.4C711.552 35.4667 707.552 25.7333 707.552 18C707.552 10.8 704.886 5.33333 701.286 5.33333C700.086 5.33333 693.286 7.99999 686.086 11.3333C678.886 14.6667 671.019 17.3333 668.619 17.3333C659.819 17.3333 649.952 8.13333 652.886 2.79999C654.086 0.399993 653.952 -6.99103e-06 651.286 -6.99103e-06C649.552 -6.99103e-06 644.752 1.86666 640.619 4.13333ZM408.886 975.867C408.886 981.867 398.619 1005.33 396.086 1005.33C391.686 1005.33 395.552 990.533 403.152 978.267C406.486 972.933 408.886 971.867 408.886 975.867ZM428.886 1008C428.886 1013.73 422.886 1025.47 414.352 1036.13C409.419 1042.4 403.552 1050.4 401.419 1053.87C397.819 1059.6 394.219 1061.87 394.219 1058.4C394.219 1054.4 417.552 1013.87 423.952 1007.07C426.886 1003.73 428.886 1004.13 428.886 1008Z",
                            stroke: "#3f3b37",
                            strokeWidth: "12",
                            mask: "url(#path-1-inside-1_277_3)",
                          }),
                          C("path", {
                            d: "M377.698 714.669C377.685 714.753 377.673 714.833 377.661 714.91C378.103 713.453 378.693 711.167 379.449 707.952C381.43 699.528 384.529 684.835 389.062 662.302L389.062 662.3C393.663 639.699 396.56 624.709 397.808 616.905C398.111 615.014 398.315 613.553 398.423 612.51C398.198 613.117 397.932 613.887 397.628 614.82C397.204 616.159 395.728 622.969 393.746 632.535C391.767 642.083 389.292 654.332 386.876 666.498C384.459 678.663 382.101 690.745 380.356 699.96C379.483 704.568 378.764 708.457 378.267 711.281C378.018 712.693 377.826 713.836 377.698 714.669Z",
                            stroke: "#3f3b37",
                          }),
                          C("path", {
                            d: "M386.974 808.772L386.974 808.772L386.972 808.782C385.38 815.547 383.916 826.553 383.117 835.594C382.717 840.114 382.485 844.126 382.485 846.861C382.485 847.903 382.519 848.739 382.586 849.341C382.651 849.035 382.724 848.665 382.802 848.236C383.038 846.945 383.325 845.144 383.643 842.998C384.277 838.707 385.031 833.053 385.739 827.372C386.447 821.691 387.109 815.986 387.561 811.595C387.787 809.399 387.96 807.535 388.059 806.168C388.103 805.57 388.132 805.071 388.146 804.683C387.786 805.526 387.366 806.942 386.974 808.772ZM382.347 850.246C382.345 850.249 382.344 850.251 382.344 850.251C382.344 850.251 382.345 850.249 382.347 850.246Z",
                            stroke: "#3f3b37",
                          }),
                        ],
                      }),
                    }),
                  }),
                  R("div", {
                    className: "",
                    children: [
                      C("div", {
                        className: "about-text-heading heading-font",
                        ref: n,
                        children: "Featured",
                      }),
                      R("div", {
                        className: "subheading",
                        children: [
                          "Featured Work and Project Showcase",
                          C("div", {
                            className: "text-border ",
                            children: " ",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            C("div", {
              className: "fix-p top",
              ref: s,
              children: R("div", {
                children: [
                  C("div", {
                    className: "",
                    children: C("div", {
                      className: "title-img",
                      children: R("svg", {
                        width: "1112",
                        height: "1383",
                        viewBox: "0 0 1112 1383",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          C("mask", {
                            id: "path-1-inside-1_277_3",
                            fill: "white",
                            children: C("path", {
                              d: "M640.619 4.13333C636.486 6.39999 626.086 14.2667 617.419 21.6C608.886 28.9333 593.019 42 582.352 50.5333C543.152 82.1333 509.819 115.6 502.752 130.533C500.886 134.533 494.486 145.2 488.752 154.133C463.286 193.733 433.819 253.467 409.552 314.667C389.819 364.267 354.086 482.8 339.019 548.667C323.952 614.667 310.485 702.8 307.285 757.067C304.352 805.2 310.085 881.467 320.885 940C322.352 947.733 324.752 960.933 326.219 969.333C327.685 977.733 329.819 987.867 330.885 991.733C332.085 995.6 332.752 999.2 332.352 999.867C331.952 1000.53 329.285 1000.27 326.619 999.2C318.619 996.4 308.619 996.933 298.752 1000.67C292.085 1003.2 289.419 1003.6 287.419 1002.67C286.085 1001.87 284.885 1000.8 284.885 1000.13C284.885 999.467 281.019 994.8 276.352 989.467C271.685 984.267 267.152 978.133 266.219 975.733C265.419 973.333 262.885 967.467 260.885 962.667C258.752 957.867 256.352 951.2 255.685 947.733C254.085 940.933 240.885 910.533 229.952 888.667C218.485 865.867 200.085 836.667 182.085 812.533C171.685 798.667 119.685 748.133 111.419 743.867C103.685 740 101.152 740.533 94.0855 747.867C85.1522 757.2 83.8188 766.933 90.6188 774.267C92.8855 776.8 94.7522 777.333 102.085 777.333C107.819 777.333 112.885 778.267 116.485 780C137.419 789.467 186.885 833.867 201.552 856.4C213.019 874.133 238.752 928.4 247.152 952.667C251.819 966.133 252.885 972.8 250.885 975.6C249.419 977.6 247.019 976.533 227.419 964.667C215.419 957.467 185.152 941.467 160.219 929.2C92.3522 895.867 69.0188 885.733 45.9522 879.333C39.1522 877.333 29.4188 873.733 24.4855 871.2C19.4188 868.667 14.3522 866.667 13.0188 866.667C10.4855 866.667 3.41882 873.6 0.885482 878.533C-0.447851 881.067 -0.314518 882.933 1.55215 888.8C4.88548 899.333 6.61882 900.133 24.2188 899.2C40.6188 898.267 59.5522 900.4 84.2188 906C99.9522 909.6 111.285 914.4 130.619 925.867C149.019 936.533 165.285 944.4 186.485 952.8C208.885 961.6 221.152 968 235.285 978.533C258.085 995.467 270.085 1015.47 265.019 1027.73C264.085 1029.87 262.885 1034.53 262.485 1038.13C261.419 1044.67 261.419 1044.67 256.752 1044.4C254.085 1044.27 247.152 1042 241.419 1039.47C227.419 1033.33 221.419 1032.13 206.219 1032C190.352 1032 184.752 1033.6 179.019 1039.47C169.419 1049.47 159.552 1073.87 159.552 1087.87C159.552 1102.27 169.152 1115.2 182.752 1118.8C197.019 1122.67 219.552 1109.73 219.552 1097.6C219.552 1090.67 209.419 1082.67 200.619 1082.67C195.819 1082.67 188.752 1088 189.152 1091.2C189.552 1093.73 190.485 1094 198.619 1094.13C203.685 1094.27 208.485 1095.07 209.285 1095.87C212.085 1098.67 208.619 1104.4 202.219 1107.73C197.285 1110.4 194.752 1110.8 187.552 1110.27C170.885 1109.07 166.752 1104.4 167.819 1087.07C168.885 1069.33 179.019 1051.07 191.019 1045.2C196.485 1042.67 198.485 1042.4 209.419 1043.07C229.685 1044.4 260.352 1054.4 267.552 1062C269.152 1063.73 270.752 1068 271.419 1072.27C272.219 1076.4 275.285 1084.67 279.019 1091.6C285.685 1104.4 288.085 1115.47 285.019 1119.2C284.085 1120.27 279.419 1122.4 274.619 1124C269.952 1125.47 258.752 1129.73 249.819 1133.2C225.419 1142.93 209.419 1147.6 196.219 1149.07C181.019 1150.8 178.619 1153.07 174.352 1169.87C172.752 1176.4 167.685 1191.33 163.019 1203.2C154.485 1224.67 144.219 1260 146.352 1260C147.019 1260 149.552 1256.8 151.952 1252.93C165.685 1231.47 176.085 1207.2 178.219 1192.13C180.085 1178.53 186.752 1166.27 194.885 1161.47C197.019 1160.13 202.485 1158.67 206.885 1158.27C212.219 1157.87 220.619 1155.33 231.685 1150.8C248.485 1144 254.885 1142.53 253.952 1145.6C253.285 1147.47 249.285 1149.73 233.552 1156.67C216.752 1164.27 218.085 1160.27 218.485 1201.2L218.885 1236.67L214.485 1250.4C212.085 1258 210.219 1264.8 210.485 1265.6C211.285 1267.73 220.085 1250 223.285 1240C227.152 1228.13 228.485 1218.53 229.552 1197.33C231.019 1167.2 231.819 1165.2 244.619 1160.53C266.485 1152.53 272.219 1150 276.219 1146.53C278.619 1144.4 281.285 1142.67 281.952 1142.67C284.219 1142.67 286.219 1147.33 286.219 1152.53C286.219 1155.07 286.752 1157.47 287.552 1158C289.019 1158.93 291.019 1151.73 292.885 1138.13C294.619 1125.73 296.352 1120.93 298.619 1121.73C300.219 1122.27 300.219 1122.93 299.552 1151.33C299.152 1163.87 299.419 1165.6 304.085 1178.53C312.752 1202.8 322.219 1219.87 336.619 1237.33C340.485 1242.13 346.885 1252.53 350.886 1260.67C362.752 1284.93 368.619 1306.8 369.819 1331.73C370.219 1340 371.019 1346.27 371.552 1345.73C374.752 1342.13 378.886 1306 377.552 1293.33C376.219 1281.47 372.752 1268.13 368.086 1256.8C365.686 1251.07 363.952 1245.73 364.352 1245.2C365.552 1243.07 370.352 1244 379.286 1247.87C394.619 1254.53 403.152 1256.53 417.552 1256.53C428.619 1256.67 431.952 1256.13 437.419 1253.6C452.486 1246.67 453.552 1247.73 480.086 1298.53C495.019 1326.93 504.352 1341.07 519.952 1358.67C531.419 1371.6 544.486 1383.47 545.686 1382.27C547.019 1381.07 543.419 1376 534.886 1366.53C519.686 1350 502.219 1321.6 502.219 1313.33C502.219 1311.07 499.019 1303.2 494.752 1294.93C486.219 1278.4 482.086 1262.67 481.952 1246C481.819 1232.93 484.352 1226.53 491.686 1221.73C495.552 1219.2 497.286 1218.8 499.286 1219.87C500.619 1220.53 507.552 1228.13 514.619 1236.4C539.019 1265.33 561.552 1284.93 602.886 1313.33C623.152 1327.2 632.886 1334.4 646.219 1345.2C650.219 1348.4 657.152 1352.8 661.552 1354.8C676.886 1362 733.019 1373.47 763.819 1375.73C786.352 1377.33 815.152 1374.93 873.552 1366.53C906.352 1361.87 993.019 1346.27 1003.55 1343.2C1015.55 1339.73 1022.89 1335.2 1031.02 1326.13C1039.29 1317.07 1050.75 1307.33 1062.49 1299.47C1075.29 1291.07 1091.55 1272.93 1091.55 1267.2C1091.55 1265.47 1091.15 1265.33 1089.55 1266.67C1087.69 1268.27 1084.89 1267.47 1084.89 1265.33C1084.89 1264.67 1087.29 1261.33 1090.22 1258C1093.15 1254.67 1095.55 1251.07 1095.69 1250.27C1096.49 1233.73 1098.35 1217.73 1100.22 1211.87C1102.49 1204.8 1102.49 1203.87 1100.35 1198.8C1097.82 1192.4 1097.55 1176.8 1099.69 1168.67C1100.49 1165.73 1103.55 1157.87 1106.49 1151.33C1115.82 1130.67 1113.95 1123.07 1094.75 1101.33C1081.15 1086.13 1080.22 1084.27 1080.22 1071.33C1080.22 1062.67 1080.75 1059.73 1083.29 1055.6C1086.89 1049.47 1087.15 1041.33 1084.22 1024.93C1081.29 1008.27 1075.42 993.467 1062.75 970.533C1045.69 939.867 1038.09 928.933 1022.09 912.533C1006.09 896 1005.15 893.733 1010.89 886.933C1016.22 880.533 1014.49 871.2 1006.09 861.733C1002.89 858 1002.22 856.267 1002.89 853.6C1004.62 846.667 1008.89 842.933 1022.89 835.867C1043.95 825.467 1047.15 822.133 1059.42 797.333C1065.15 785.867 1070.89 772.267 1072.09 767.2C1073.29 762.133 1075.55 754.4 1077.02 750C1083.69 730.4 1083.82 729.733 1083.02 706.667C1081.82 670.267 1075.55 628.133 1069.95 618.933C1067.02 614.133 1067.02 613.733 1069.69 581.2C1070.75 568.533 1067.95 556.667 1058.22 533.333C1051.69 517.6 1045.15 499.733 1041.95 489.333C1039.95 482.8 1026.49 460.4 1015.55 445.333C996.486 419.2 991.552 412 982.352 396.667C977.286 388 972.619 379.333 972.219 377.333C971.819 375.333 969.552 372 967.419 369.867L963.286 366L965.019 369.6C967.686 375.6 964.486 380.133 941.952 403.733C930.352 415.867 921.152 426 921.552 426.4C922.352 427.2 925.419 424.4 948.886 401.867C956.619 394.4 964.352 387.867 966.086 387.333C973.019 385.2 974.486 394.4 968.886 405.333C965.952 411.2 949.686 426.8 932.619 440.533C925.419 446.267 919.552 451.2 919.552 451.6C919.552 452.267 927.686 446.4 951.952 428.667C971.819 414 974.486 413.2 980.352 420.933C982.352 423.733 989.819 432 996.886 439.333C1015.95 459.067 1023.15 471.2 1028.22 491.333C1031.02 502.533 1034.22 509.067 1040.09 515.733C1046.22 522.533 1048.89 528.133 1050.35 537.6C1051.02 542 1053.69 549.867 1056.22 555.2C1061.42 565.733 1061.82 568.933 1058.89 574.667C1056.09 580.133 1049.29 584.4 1019.82 599.333C1005.69 606.4 994.352 612.533 994.486 612.8C994.752 612.933 1000.09 611.2 1006.22 608.8C1032.35 598.667 1050.22 592 1051.42 592C1052.22 592 1052.89 592.933 1052.89 594C1052.89 596.8 1042.62 603.067 1019.95 614.4C1003.69 622.667 997.152 626.667 1000.22 626.667C1000.62 626.667 1010.75 623.333 1022.75 619.333C1034.62 615.333 1046.62 612 1049.42 612C1054.22 612 1054.49 612.267 1057.69 619.6C1061.15 627.6 1064.62 634.667 1068.89 642.667C1071.29 647.333 1074.22 665.067 1074.22 675.6C1074.22 680.267 1073.55 681.733 1069.95 684.533L1065.69 687.867L1069.55 689.333C1071.69 690.133 1073.95 691.6 1074.49 692.4C1076.22 695.067 1075.69 701.867 1073.55 704.933C1071.82 707.333 1071.82 707.867 1073.55 709.333C1076.49 711.733 1075.95 720 1072.49 725.2C1066.89 733.733 1066.22 735.333 1066.22 740C1066.22 750 1063.15 762.4 1057.42 776.533C1045.29 806.133 1037.69 816.933 1026.62 819.867C1016.35 822.667 994.752 824.267 979.552 823.467C954.219 822 940.086 817.6 932.086 808.4C928.486 804.4 926.752 803.467 921.952 803.2C918.752 802.933 911.286 800.933 905.419 798.533C893.952 794 875.419 791.6 873.686 794.533C873.019 795.6 875.152 796 880.619 796C889.952 796 897.419 798.4 907.552 804.667C911.686 807.067 916.752 809.6 918.886 810C926.886 811.733 927.819 812.267 934.352 818.133C942.752 825.6 946.752 827.6 955.552 828.8C959.952 829.333 963.686 830.8 965.419 832.533C967.152 834.267 969.952 835.333 973.819 835.333C977.952 835.6 980.619 836.533 983.019 838.8C989.952 845.2 991.286 851.2 988.219 860.933C987.419 863.467 988.219 864.267 995.952 867.733C1008.75 873.6 1010.35 877.733 1003.02 886.533C996.352 894.533 995.819 897.2 1000.09 900.667C1007.15 906.267 1003.42 908.667 980.752 913.2C973.019 914.667 963.152 917.067 958.752 918.533L950.886 921.067L970.219 921.2C981.552 921.333 988.886 921.867 988.219 922.533C987.419 923.2 978.219 925.6 967.552 928C956.886 930.4 947.952 932.533 947.686 932.8C946.619 933.867 967.019 933.333 992.619 931.733L1018.35 930.267L1025.29 937.067C1034.09 945.733 1040.22 955.867 1045.02 969.467C1050.22 983.867 1053.29 989.467 1060.22 997.333C1070.09 1008.4 1081.02 1033.33 1078.89 1039.87C1077.82 1043.47 1070.09 1046.13 1049.82 1050.13C1004.89 1058.67 1004.89 1058.67 1006.35 1061.73C1007.82 1064.27 1008.75 1064.4 1023.42 1063.6C1031.95 1063.2 1044.49 1061.6 1051.42 1060C1058.35 1058.53 1064.75 1057.47 1065.82 1057.87C1071.15 1060 1063.15 1071.47 1050.89 1079.47C1047.15 1081.73 1039.82 1085.07 1034.49 1086.53C1029.15 1088.13 1024.89 1090 1024.89 1090.67C1024.89 1092.53 1026.75 1092.4 1039.29 1089.33C1057.95 1084.8 1068.22 1086.67 1071.55 1094.8C1072.75 1097.47 1074.09 1098.67 1076.22 1098.67C1082.62 1098.67 1095.95 1111.6 1102.22 1123.87C1106.89 1133.2 1105.69 1140.27 1095.82 1160.8C1087.69 1177.6 1086.22 1182.93 1088.89 1184.67C1091.42 1186.27 1090.22 1190.4 1086.22 1193.73C1081.82 1197.6 1069.55 1201.87 1043.69 1208.67C1025.82 1213.33 1017.02 1216.67 1026.22 1215.2C1053.82 1210.8 1077.82 1204.93 1086.35 1200.53C1089.95 1198.8 1093.42 1197.33 1094.22 1197.33C1096.75 1197.33 1095.55 1202.67 1091.42 1210.13C1088.09 1215.87 1087.02 1220 1086.09 1228.93C1085.42 1235.2 1084.22 1241.2 1083.42 1242.13C1082.62 1243.07 1074.35 1245.6 1065.02 1247.87C1039.02 1254 1015.95 1255.07 928.886 1254.27C858.352 1253.6 826.219 1252.13 813.952 1249.47C807.952 1248.13 805.686 1248.67 808.886 1250.67C814.886 1254.4 846.886 1258.27 879.286 1259.33C911.952 1260.4 913.819 1260.67 918.352 1265.73C921.686 1269.47 923.152 1270 931.019 1270.4C942.486 1271.2 989.952 1268.53 1012.22 1265.87C1021.82 1264.67 1037.29 1262.27 1046.75 1260.53C1056.09 1258.67 1065.42 1257.33 1067.42 1257.6C1070.89 1258 1070.89 1258.13 1070.89 1268.93C1070.89 1283.33 1069.15 1285.73 1053.95 1291.6C1046.75 1294.4 1040.22 1298.13 1035.69 1302C1027.82 1308.67 1019.55 1311.73 998.886 1315.33C979.419 1318.8 979.152 1320.13 998.219 1319.2C1011.95 1318.53 1015.29 1318.8 1017.55 1320.4C1021.42 1323.33 1019.15 1325.07 1006.89 1328.13C1001.15 1329.47 993.686 1332.27 990.352 1334.27C978.619 1341.07 974.752 1342.67 964.219 1345.2C950.619 1348.53 918.486 1353.47 877.552 1358.53C803.952 1367.6 784.352 1368.53 751.286 1364.13C701.686 1357.47 663.152 1344.53 637.552 1326C631.686 1321.73 615.152 1310.13 600.886 1300.27C567.419 1277.07 559.552 1270.67 546.486 1256.4C522.752 1230.53 484.886 1183.07 484.886 1179.2C484.886 1174.4 488.619 1177.07 525.286 1208C572.086 1247.6 603.019 1263.6 675.686 1285.87C685.286 1288.8 693.952 1292.4 698.219 1295.33L705.019 1300L708.886 1297.07C711.952 1294.93 715.286 1294.13 723.552 1293.6C729.419 1293.33 734.219 1292.53 734.219 1291.87C734.219 1288.93 725.952 1286.67 715.286 1286.67C702.486 1286.67 688.752 1283.33 662.752 1273.87C600.219 1251.33 555.819 1225.33 517.286 1188.67C510.352 1182.13 507.286 1178.4 508.219 1177.6C509.819 1175.87 534.619 1179.07 548.886 1182.67C564.086 1186.53 576.886 1188.27 583.286 1187.33C590.086 1186.27 590.219 1183.47 583.419 1182.93C572.886 1182.13 570.219 1180.27 575.952 1177.73C578.352 1176.53 577.419 1176.13 569.552 1175.33C556.352 1174 544.619 1171.07 532.219 1165.73C520.486 1160.67 518.219 1159.2 518.219 1156.53C518.219 1153.2 519.152 1152.93 669.552 1126.8C702.752 1120.93 731.819 1116.93 754.886 1114.67C788.352 1111.6 798.352 1110.27 797.286 1109.2C795.152 1107.07 721.686 1112.13 678.886 1117.47C667.152 1118.93 644.086 1122.4 627.552 1125.33C559.819 1137.2 508.886 1142.93 508.886 1138.8C508.886 1137.73 534.352 1128.53 569.952 1116.8C578.086 1114 584.886 1111.2 584.886 1110.53C584.886 1109.87 582.219 1109.33 578.886 1109.33C575.552 1109.33 572.886 1108.93 572.886 1108.27C572.886 1107.73 575.686 1105.73 579.019 1103.73C583.286 1101.07 585.152 1098.93 585.686 1096C586.752 1090.8 588.486 1089.87 591.552 1092.67C594.086 1094.93 594.219 1094.93 595.019 1092.53C598.086 1082.8 600.486 1081.47 656.886 1055.87C712.619 1030.67 726.752 1024.67 736.486 1021.87C740.619 1020.67 745.686 1018.53 747.552 1017.2C749.419 1015.87 756.886 1013.47 764.219 1011.87C771.552 1010.4 782.619 1007.07 788.886 1004.67C795.152 1002.13 809.286 998 820.219 995.333C843.152 989.867 866.752 982.8 865.819 981.733C865.419 981.333 858.352 982.667 849.952 984.533C841.686 986.4 827.419 989.2 818.219 990.8C768.752 999.333 718.352 1018.53 614.352 1068.27C552.486 1097.87 537.286 1104.67 519.686 1110.8C511.419 1113.6 504.086 1116 503.419 1116C500.886 1116 502.352 1112.4 505.952 1109.73C513.952 1103.87 529.819 1093.47 535.286 1090.8C538.352 1089.2 540.886 1087.33 540.886 1086.67C540.886 1083.87 534.352 1085.6 521.686 1092C508.752 1098.53 504.886 1099.73 504.886 1097.6C504.886 1096.53 577.152 1032.93 594.619 1018.67C600.219 1014.13 604.886 1010 604.886 1009.6C604.886 1008.93 598.886 1013.33 587.286 1022.67C572.752 1034.27 562.219 1039.33 562.219 1034.67C562.219 1031.73 577.152 1017.07 614.752 983.067C637.286 962.667 663.819 938.8 673.552 930C686.219 918.533 694.352 912.267 702.352 908.133C708.486 904.8 715.552 900.133 718.086 897.733C720.619 895.333 723.419 893.333 724.352 893.333C725.552 893.333 725.819 892 725.286 888.933C724.752 885.2 725.286 883.867 729.819 879.6C732.619 876.8 744.219 868.267 755.552 860.4C766.886 852.667 776.886 845.733 777.552 845.067C780.219 842.4 756.086 855.067 738.352 865.6C714.886 879.6 684.486 899.867 675.552 907.467C671.686 910.8 665.819 915.333 662.352 917.6C659.019 920 649.286 928.267 640.886 936.133C619.686 955.867 596.886 975.6 555.552 1010.13C536.086 1026.4 509.819 1049.07 497.019 1060.53C484.352 1072 473.419 1081.33 472.752 1081.33C469.952 1081.33 475.286 1074.93 492.352 1057.33C502.219 1047.2 510.219 1038.53 510.219 1038.13C510.219 1035.33 501.286 1043.33 478.219 1066.53C448.886 1095.87 434.886 1112.53 433.552 1119.6C432.486 1125.47 430.086 1124.67 427.552 1117.6C425.819 1112.67 425.952 1111.6 427.819 1107.6C434.619 1093.2 499.286 1032.13 547.952 994.133C557.952 986.267 566.219 979.6 566.219 979.2C566.219 977.2 514.219 1015.87 474.486 1047.47C463.152 1056.53 453.286 1064 452.619 1064C449.952 1064 457.152 1055.2 490.219 1018.4C501.952 1005.33 498.352 1008.13 475.552 1030C466.352 1038.8 454.486 1049.6 449.152 1054C443.552 1058.67 436.752 1066 432.752 1071.6C419.819 1090.4 407.552 1100 407.552 1091.47C407.552 1087.07 422.886 1064.27 440.886 1042C475.686 998.8 516.752 952.4 583.552 880.667C622.752 838.533 649.019 809.867 651.419 806.4C656.486 798.933 639.419 814.667 606.886 847.333C570.619 883.467 551.286 904 520.752 938.667C510.619 950 495.152 967.067 486.219 976.667C477.152 986.133 463.819 1000.8 456.619 1008.93C443.019 1024.27 439.552 1026.4 436.886 1021.33C435.686 1019.07 436.086 1018.13 438.619 1015.6C440.486 1014 442.752 1010.53 443.819 1008C444.886 1005.47 450.352 997.6 455.819 990.667C469.686 972.8 469.552 972.133 455.286 986.933C441.152 1001.6 437.686 1004 434.619 1000.93C433.152 999.467 432.752 997.6 433.419 994.133C434.219 990.267 442.619 980.267 477.019 942.4C539.819 873.467 570.886 837.6 591.286 810.667C600.352 798.8 602.752 794.667 599.552 796.667C598.752 797.2 577.552 821.067 552.352 849.733C527.286 878.533 497.952 911.467 487.419 923.067C476.886 934.667 464.086 948.8 458.886 954.667C448.752 966.133 439.019 974.667 436.086 974.667C435.019 974.667 434.219 974.4 434.219 974.133C434.219 973.867 437.019 968.8 440.352 963.067C446.486 952.8 454.886 933.6 453.819 932.533C453.552 932.133 448.086 940.533 441.819 950.933C427.552 974.667 412.752 996.267 410.352 997.067C407.419 998 409.286 988.133 415.952 967.867C424.619 941.733 433.419 925.067 459.686 885.733C491.419 838.267 522.086 796.4 562.752 745.333C612.752 682.533 633.286 658.933 687.686 601.333C780.752 502.667 794.352 486.533 816.886 447.333C833.819 418 845.019 391.467 851.419 365.333C855.552 348.4 861.286 316 860.352 314.933C860.086 314.667 858.886 318 857.686 322.267C853.019 339.333 835.019 392.4 828.486 408.667C820.352 428.8 811.819 443.333 795.152 465.867C770.486 499.067 754.219 517.467 680.219 596C628.619 650.667 609.286 671.733 600.886 682.667C598.352 686 582.619 705.867 566.086 726.8C500.619 809.333 451.419 877.2 425.552 920.133C420.486 928.533 413.819 938 410.752 941.333C407.686 944.667 403.686 950.533 401.686 954.267C396.219 965.067 395.019 963.6 396.086 947.6C397.286 927.733 399.952 914.133 410.219 874C425.552 813.867 433.286 788.533 459.419 714.133C466.752 692.933 472.886 674.933 472.886 674.133C472.486 664.667 430.752 773.333 419.552 812.933C417.419 820.267 414.752 828.267 413.552 830.533C408.619 840.133 394.752 905.2 386.886 956C379.952 1000.67 376.752 1013.6 373.419 1010.4C372.886 1009.87 373.152 1001.47 374.086 991.733C376.086 968.133 377.286 916.4 375.686 922.667C373.819 929.733 370.352 972.4 369.419 1000C368.619 1025.6 367.152 1035.2 364.486 1034.27C361.952 1033.47 361.286 1025.73 360.352 990C359.152 944.133 361.419 863.067 364.886 831.867C367.819 804 369.552 769.733 367.686 777.333C367.019 779.867 364.352 798.533 361.686 818.667C356.352 859.333 354.352 896 354.219 950.133C354.219 967.867 353.819 984.267 353.419 986.533C351.686 995.333 349.552 989.6 347.819 971.333C346.485 956.533 345.285 950.8 341.819 942.133C336.885 929.467 335.552 931.333 339.552 945.467C342.485 956.133 343.019 964.667 340.885 966C337.419 968.133 332.219 942.267 325.552 890.667C319.685 843.467 318.885 832.533 319.019 788.667C319.019 740.133 320.219 726.4 329.552 667.333C332.752 646.8 337.019 618.533 338.885 604.667C342.752 576.933 355.286 521.867 365.286 488.667C368.619 477.6 375.019 455.2 379.552 438.667C389.152 403.867 403.152 360.533 408.086 350.933C409.952 347.333 412.086 340.533 412.752 336C413.552 331.333 415.152 326.533 416.219 325.333C417.419 324 419.152 320 420.086 316.4C422.752 306.133 431.819 286.4 451.552 247.333C480.086 191.067 502.352 151.2 511.552 140C514.219 136.667 517.552 131.6 519.019 128.667C521.686 122.933 564.486 78.4 580.752 64.4C591.952 54.8 595.019 53.8667 593.686 60C592.752 65.0667 592.219 65.3333 609.819 49.8667C628.619 33.3333 644.486 22.5333 650.352 22.2667C658.219 21.8667 657.019 26.1333 646.086 38.1333C640.086 44.5333 638.886 46.2667 643.019 42.4C650.486 35.2 654.752 33.3333 662.886 33.3333C670.619 33.3333 686.352 36.4 696.086 39.8667C704.352 42.6667 716.886 50.1333 716.886 52.1333C716.886 52.8 713.686 57.0667 709.819 61.6C696.486 77.6 692.486 82.8 693.152 83.4667C693.552 83.8667 700.086 78.4 707.552 71.3333C727.019 53.2 728.619 52.8 726.886 65.4667C725.286 76.6667 717.952 89.2 704.752 103.6C690.086 119.467 670.886 142.267 660.086 156.667C650.486 169.467 649.419 171.2 651.286 170.533C653.952 169.6 671.686 148.933 677.686 139.867C687.552 124.933 714.219 104.4 726.086 102.533C729.819 102 735.819 100 739.552 98.2667C745.419 95.4667 747.152 95.0667 750.619 96.4C756.619 98.4 776.886 118.8 776.886 122.667C776.886 124.533 773.552 129.2 767.819 135.2C758.619 144.933 742.219 165.6 742.219 167.6C742.219 168.133 747.819 163.067 754.752 156.133C764.619 146.267 767.819 143.867 769.952 144.533C776.086 146.533 783.552 153.733 790.486 164.267C794.619 170.533 799.552 176.8 801.419 178.133C803.552 179.6 806.486 184.667 808.886 190.533C811.152 195.867 814.752 202.4 816.886 204.933C820.886 209.333 820.886 209.467 818.752 214.4C816.086 220.8 811.019 229.6 805.152 238C801.152 243.6 802.619 242.667 814.619 230.933C827.952 218 831.686 215.6 833.552 218.667C834.752 220.533 832.486 224.133 823.019 235.733C813.152 248 809.019 254 811.286 253.2C812.086 252.933 818.752 247.067 826.086 240.267C833.419 233.6 839.819 228 840.486 228C841.686 228 845.286 233.2 855.952 251.333C860.352 258.533 866.352 267.733 869.419 271.467C872.352 275.2 878.619 283.6 883.152 290.133C892.886 304.133 906.619 318.667 921.952 331.2C927.952 336.133 932.886 340.8 932.886 341.6C932.886 342.267 925.952 350.4 917.552 359.6C897.686 381.333 897.286 383.067 915.019 369.733C920.219 365.867 924.886 362.667 925.286 362.667C927.819 362.667 925.152 366.267 914.219 378.133C907.552 385.2 902.486 391.333 902.886 391.733C903.552 392.533 903.019 392.933 919.152 380.267C936.619 366.4 945.552 361.333 952.219 361.333C955.286 361.333 958.352 362 959.286 362.933C960.219 363.867 960.886 364 960.886 363.333C960.886 362.667 951.419 352.8 939.819 341.467C917.952 320 900.752 299.867 885.419 277.867C875.686 264 866.219 246.533 866.219 242.8C866.219 239.467 864.752 238.4 862.752 240.133C859.819 242.533 856.086 240.267 853.419 234.267C849.952 226.4 841.419 216.133 826.219 201.333C814.486 190 813.019 187.867 811.419 181.467C809.952 175.6 808.752 173.733 804.886 171.333C802.219 169.733 796.352 164 791.686 158.8C787.019 153.467 780.486 147.333 777.286 145.067C771.686 141.2 771.419 140.933 773.686 138.533C777.019 134.8 780.219 134.267 784.886 136.667C788.486 138.533 788.886 138.533 788.886 136.533C788.886 132 784.619 120.267 781.419 115.867C776.886 109.733 758.219 93.4667 754.486 92.5333C751.286 91.6 747.019 92.1333 735.819 94.8C727.286 96.9333 724.086 95.2 728.352 90.5333C730.352 88.2667 730.886 86 730.486 78.9333C730.352 73.8667 731.152 66.9333 732.352 62.5333C733.686 57.8667 734.219 52.9333 733.686 50.2667C732.619 44.9333 727.019 39.2 721.552 38C719.419 37.4667 716.486 36.8 715.152 36.4C711.552 35.4667 707.552 25.7333 707.552 18C707.552 10.8 704.886 5.33333 701.286 5.33333C700.086 5.33333 693.286 7.99999 686.086 11.3333C678.886 14.6667 671.019 17.3333 668.619 17.3333C659.819 17.3333 649.952 8.13333 652.886 2.79999C654.086 0.399993 653.952 -6.99103e-06 651.286 -6.99103e-06C649.552 -6.99103e-06 644.752 1.86666 640.619 4.13333ZM408.886 975.867C408.886 981.867 398.619 1005.33 396.086 1005.33C391.686 1005.33 395.552 990.533 403.152 978.267C406.486 972.933 408.886 971.867 408.886 975.867ZM428.886 1008C428.886 1013.73 422.886 1025.47 414.352 1036.13C409.419 1042.4 403.552 1050.4 401.419 1053.87C397.819 1059.6 394.219 1061.87 394.219 1058.4C394.219 1054.4 417.552 1013.87 423.952 1007.07C426.886 1003.73 428.886 1004.13 428.886 1008Z",
                            }),
                          }),
                          C("path", {
                            d: "M640.619 4.13333C636.486 6.39999 626.086 14.2667 617.419 21.6C608.886 28.9333 593.019 42 582.352 50.5333C543.152 82.1333 509.819 115.6 502.752 130.533C500.886 134.533 494.486 145.2 488.752 154.133C463.286 193.733 433.819 253.467 409.552 314.667C389.819 364.267 354.086 482.8 339.019 548.667C323.952 614.667 310.485 702.8 307.285 757.067C304.352 805.2 310.085 881.467 320.885 940C322.352 947.733 324.752 960.933 326.219 969.333C327.685 977.733 329.819 987.867 330.885 991.733C332.085 995.6 332.752 999.2 332.352 999.867C331.952 1000.53 329.285 1000.27 326.619 999.2C318.619 996.4 308.619 996.933 298.752 1000.67C292.085 1003.2 289.419 1003.6 287.419 1002.67C286.085 1001.87 284.885 1000.8 284.885 1000.13C284.885 999.467 281.019 994.8 276.352 989.467C271.685 984.267 267.152 978.133 266.219 975.733C265.419 973.333 262.885 967.467 260.885 962.667C258.752 957.867 256.352 951.2 255.685 947.733C254.085 940.933 240.885 910.533 229.952 888.667C218.485 865.867 200.085 836.667 182.085 812.533C171.685 798.667 119.685 748.133 111.419 743.867C103.685 740 101.152 740.533 94.0855 747.867C85.1522 757.2 83.8188 766.933 90.6188 774.267C92.8855 776.8 94.7522 777.333 102.085 777.333C107.819 777.333 112.885 778.267 116.485 780C137.419 789.467 186.885 833.867 201.552 856.4C213.019 874.133 238.752 928.4 247.152 952.667C251.819 966.133 252.885 972.8 250.885 975.6C249.419 977.6 247.019 976.533 227.419 964.667C215.419 957.467 185.152 941.467 160.219 929.2C92.3522 895.867 69.0188 885.733 45.9522 879.333C39.1522 877.333 29.4188 873.733 24.4855 871.2C19.4188 868.667 14.3522 866.667 13.0188 866.667C10.4855 866.667 3.41882 873.6 0.885482 878.533C-0.447851 881.067 -0.314518 882.933 1.55215 888.8C4.88548 899.333 6.61882 900.133 24.2188 899.2C40.6188 898.267 59.5522 900.4 84.2188 906C99.9522 909.6 111.285 914.4 130.619 925.867C149.019 936.533 165.285 944.4 186.485 952.8C208.885 961.6 221.152 968 235.285 978.533C258.085 995.467 270.085 1015.47 265.019 1027.73C264.085 1029.87 262.885 1034.53 262.485 1038.13C261.419 1044.67 261.419 1044.67 256.752 1044.4C254.085 1044.27 247.152 1042 241.419 1039.47C227.419 1033.33 221.419 1032.13 206.219 1032C190.352 1032 184.752 1033.6 179.019 1039.47C169.419 1049.47 159.552 1073.87 159.552 1087.87C159.552 1102.27 169.152 1115.2 182.752 1118.8C197.019 1122.67 219.552 1109.73 219.552 1097.6C219.552 1090.67 209.419 1082.67 200.619 1082.67C195.819 1082.67 188.752 1088 189.152 1091.2C189.552 1093.73 190.485 1094 198.619 1094.13C203.685 1094.27 208.485 1095.07 209.285 1095.87C212.085 1098.67 208.619 1104.4 202.219 1107.73C197.285 1110.4 194.752 1110.8 187.552 1110.27C170.885 1109.07 166.752 1104.4 167.819 1087.07C168.885 1069.33 179.019 1051.07 191.019 1045.2C196.485 1042.67 198.485 1042.4 209.419 1043.07C229.685 1044.4 260.352 1054.4 267.552 1062C269.152 1063.73 270.752 1068 271.419 1072.27C272.219 1076.4 275.285 1084.67 279.019 1091.6C285.685 1104.4 288.085 1115.47 285.019 1119.2C284.085 1120.27 279.419 1122.4 274.619 1124C269.952 1125.47 258.752 1129.73 249.819 1133.2C225.419 1142.93 209.419 1147.6 196.219 1149.07C181.019 1150.8 178.619 1153.07 174.352 1169.87C172.752 1176.4 167.685 1191.33 163.019 1203.2C154.485 1224.67 144.219 1260 146.352 1260C147.019 1260 149.552 1256.8 151.952 1252.93C165.685 1231.47 176.085 1207.2 178.219 1192.13C180.085 1178.53 186.752 1166.27 194.885 1161.47C197.019 1160.13 202.485 1158.67 206.885 1158.27C212.219 1157.87 220.619 1155.33 231.685 1150.8C248.485 1144 254.885 1142.53 253.952 1145.6C253.285 1147.47 249.285 1149.73 233.552 1156.67C216.752 1164.27 218.085 1160.27 218.485 1201.2L218.885 1236.67L214.485 1250.4C212.085 1258 210.219 1264.8 210.485 1265.6C211.285 1267.73 220.085 1250 223.285 1240C227.152 1228.13 228.485 1218.53 229.552 1197.33C231.019 1167.2 231.819 1165.2 244.619 1160.53C266.485 1152.53 272.219 1150 276.219 1146.53C278.619 1144.4 281.285 1142.67 281.952 1142.67C284.219 1142.67 286.219 1147.33 286.219 1152.53C286.219 1155.07 286.752 1157.47 287.552 1158C289.019 1158.93 291.019 1151.73 292.885 1138.13C294.619 1125.73 296.352 1120.93 298.619 1121.73C300.219 1122.27 300.219 1122.93 299.552 1151.33C299.152 1163.87 299.419 1165.6 304.085 1178.53C312.752 1202.8 322.219 1219.87 336.619 1237.33C340.485 1242.13 346.885 1252.53 350.886 1260.67C362.752 1284.93 368.619 1306.8 369.819 1331.73C370.219 1340 371.019 1346.27 371.552 1345.73C374.752 1342.13 378.886 1306 377.552 1293.33C376.219 1281.47 372.752 1268.13 368.086 1256.8C365.686 1251.07 363.952 1245.73 364.352 1245.2C365.552 1243.07 370.352 1244 379.286 1247.87C394.619 1254.53 403.152 1256.53 417.552 1256.53C428.619 1256.67 431.952 1256.13 437.419 1253.6C452.486 1246.67 453.552 1247.73 480.086 1298.53C495.019 1326.93 504.352 1341.07 519.952 1358.67C531.419 1371.6 544.486 1383.47 545.686 1382.27C547.019 1381.07 543.419 1376 534.886 1366.53C519.686 1350 502.219 1321.6 502.219 1313.33C502.219 1311.07 499.019 1303.2 494.752 1294.93C486.219 1278.4 482.086 1262.67 481.952 1246C481.819 1232.93 484.352 1226.53 491.686 1221.73C495.552 1219.2 497.286 1218.8 499.286 1219.87C500.619 1220.53 507.552 1228.13 514.619 1236.4C539.019 1265.33 561.552 1284.93 602.886 1313.33C623.152 1327.2 632.886 1334.4 646.219 1345.2C650.219 1348.4 657.152 1352.8 661.552 1354.8C676.886 1362 733.019 1373.47 763.819 1375.73C786.352 1377.33 815.152 1374.93 873.552 1366.53C906.352 1361.87 993.019 1346.27 1003.55 1343.2C1015.55 1339.73 1022.89 1335.2 1031.02 1326.13C1039.29 1317.07 1050.75 1307.33 1062.49 1299.47C1075.29 1291.07 1091.55 1272.93 1091.55 1267.2C1091.55 1265.47 1091.15 1265.33 1089.55 1266.67C1087.69 1268.27 1084.89 1267.47 1084.89 1265.33C1084.89 1264.67 1087.29 1261.33 1090.22 1258C1093.15 1254.67 1095.55 1251.07 1095.69 1250.27C1096.49 1233.73 1098.35 1217.73 1100.22 1211.87C1102.49 1204.8 1102.49 1203.87 1100.35 1198.8C1097.82 1192.4 1097.55 1176.8 1099.69 1168.67C1100.49 1165.73 1103.55 1157.87 1106.49 1151.33C1115.82 1130.67 1113.95 1123.07 1094.75 1101.33C1081.15 1086.13 1080.22 1084.27 1080.22 1071.33C1080.22 1062.67 1080.75 1059.73 1083.29 1055.6C1086.89 1049.47 1087.15 1041.33 1084.22 1024.93C1081.29 1008.27 1075.42 993.467 1062.75 970.533C1045.69 939.867 1038.09 928.933 1022.09 912.533C1006.09 896 1005.15 893.733 1010.89 886.933C1016.22 880.533 1014.49 871.2 1006.09 861.733C1002.89 858 1002.22 856.267 1002.89 853.6C1004.62 846.667 1008.89 842.933 1022.89 835.867C1043.95 825.467 1047.15 822.133 1059.42 797.333C1065.15 785.867 1070.89 772.267 1072.09 767.2C1073.29 762.133 1075.55 754.4 1077.02 750C1083.69 730.4 1083.82 729.733 1083.02 706.667C1081.82 670.267 1075.55 628.133 1069.95 618.933C1067.02 614.133 1067.02 613.733 1069.69 581.2C1070.75 568.533 1067.95 556.667 1058.22 533.333C1051.69 517.6 1045.15 499.733 1041.95 489.333C1039.95 482.8 1026.49 460.4 1015.55 445.333C996.486 419.2 991.552 412 982.352 396.667C977.286 388 972.619 379.333 972.219 377.333C971.819 375.333 969.552 372 967.419 369.867L963.286 366L965.019 369.6C967.686 375.6 964.486 380.133 941.952 403.733C930.352 415.867 921.152 426 921.552 426.4C922.352 427.2 925.419 424.4 948.886 401.867C956.619 394.4 964.352 387.867 966.086 387.333C973.019 385.2 974.486 394.4 968.886 405.333C965.952 411.2 949.686 426.8 932.619 440.533C925.419 446.267 919.552 451.2 919.552 451.6C919.552 452.267 927.686 446.4 951.952 428.667C971.819 414 974.486 413.2 980.352 420.933C982.352 423.733 989.819 432 996.886 439.333C1015.95 459.067 1023.15 471.2 1028.22 491.333C1031.02 502.533 1034.22 509.067 1040.09 515.733C1046.22 522.533 1048.89 528.133 1050.35 537.6C1051.02 542 1053.69 549.867 1056.22 555.2C1061.42 565.733 1061.82 568.933 1058.89 574.667C1056.09 580.133 1049.29 584.4 1019.82 599.333C1005.69 606.4 994.352 612.533 994.486 612.8C994.752 612.933 1000.09 611.2 1006.22 608.8C1032.35 598.667 1050.22 592 1051.42 592C1052.22 592 1052.89 592.933 1052.89 594C1052.89 596.8 1042.62 603.067 1019.95 614.4C1003.69 622.667 997.152 626.667 1000.22 626.667C1000.62 626.667 1010.75 623.333 1022.75 619.333C1034.62 615.333 1046.62 612 1049.42 612C1054.22 612 1054.49 612.267 1057.69 619.6C1061.15 627.6 1064.62 634.667 1068.89 642.667C1071.29 647.333 1074.22 665.067 1074.22 675.6C1074.22 680.267 1073.55 681.733 1069.95 684.533L1065.69 687.867L1069.55 689.333C1071.69 690.133 1073.95 691.6 1074.49 692.4C1076.22 695.067 1075.69 701.867 1073.55 704.933C1071.82 707.333 1071.82 707.867 1073.55 709.333C1076.49 711.733 1075.95 720 1072.49 725.2C1066.89 733.733 1066.22 735.333 1066.22 740C1066.22 750 1063.15 762.4 1057.42 776.533C1045.29 806.133 1037.69 816.933 1026.62 819.867C1016.35 822.667 994.752 824.267 979.552 823.467C954.219 822 940.086 817.6 932.086 808.4C928.486 804.4 926.752 803.467 921.952 803.2C918.752 802.933 911.286 800.933 905.419 798.533C893.952 794 875.419 791.6 873.686 794.533C873.019 795.6 875.152 796 880.619 796C889.952 796 897.419 798.4 907.552 804.667C911.686 807.067 916.752 809.6 918.886 810C926.886 811.733 927.819 812.267 934.352 818.133C942.752 825.6 946.752 827.6 955.552 828.8C959.952 829.333 963.686 830.8 965.419 832.533C967.152 834.267 969.952 835.333 973.819 835.333C977.952 835.6 980.619 836.533 983.019 838.8C989.952 845.2 991.286 851.2 988.219 860.933C987.419 863.467 988.219 864.267 995.952 867.733C1008.75 873.6 1010.35 877.733 1003.02 886.533C996.352 894.533 995.819 897.2 1000.09 900.667C1007.15 906.267 1003.42 908.667 980.752 913.2C973.019 914.667 963.152 917.067 958.752 918.533L950.886 921.067L970.219 921.2C981.552 921.333 988.886 921.867 988.219 922.533C987.419 923.2 978.219 925.6 967.552 928C956.886 930.4 947.952 932.533 947.686 932.8C946.619 933.867 967.019 933.333 992.619 931.733L1018.35 930.267L1025.29 937.067C1034.09 945.733 1040.22 955.867 1045.02 969.467C1050.22 983.867 1053.29 989.467 1060.22 997.333C1070.09 1008.4 1081.02 1033.33 1078.89 1039.87C1077.82 1043.47 1070.09 1046.13 1049.82 1050.13C1004.89 1058.67 1004.89 1058.67 1006.35 1061.73C1007.82 1064.27 1008.75 1064.4 1023.42 1063.6C1031.95 1063.2 1044.49 1061.6 1051.42 1060C1058.35 1058.53 1064.75 1057.47 1065.82 1057.87C1071.15 1060 1063.15 1071.47 1050.89 1079.47C1047.15 1081.73 1039.82 1085.07 1034.49 1086.53C1029.15 1088.13 1024.89 1090 1024.89 1090.67C1024.89 1092.53 1026.75 1092.4 1039.29 1089.33C1057.95 1084.8 1068.22 1086.67 1071.55 1094.8C1072.75 1097.47 1074.09 1098.67 1076.22 1098.67C1082.62 1098.67 1095.95 1111.6 1102.22 1123.87C1106.89 1133.2 1105.69 1140.27 1095.82 1160.8C1087.69 1177.6 1086.22 1182.93 1088.89 1184.67C1091.42 1186.27 1090.22 1190.4 1086.22 1193.73C1081.82 1197.6 1069.55 1201.87 1043.69 1208.67C1025.82 1213.33 1017.02 1216.67 1026.22 1215.2C1053.82 1210.8 1077.82 1204.93 1086.35 1200.53C1089.95 1198.8 1093.42 1197.33 1094.22 1197.33C1096.75 1197.33 1095.55 1202.67 1091.42 1210.13C1088.09 1215.87 1087.02 1220 1086.09 1228.93C1085.42 1235.2 1084.22 1241.2 1083.42 1242.13C1082.62 1243.07 1074.35 1245.6 1065.02 1247.87C1039.02 1254 1015.95 1255.07 928.886 1254.27C858.352 1253.6 826.219 1252.13 813.952 1249.47C807.952 1248.13 805.686 1248.67 808.886 1250.67C814.886 1254.4 846.886 1258.27 879.286 1259.33C911.952 1260.4 913.819 1260.67 918.352 1265.73C921.686 1269.47 923.152 1270 931.019 1270.4C942.486 1271.2 989.952 1268.53 1012.22 1265.87C1021.82 1264.67 1037.29 1262.27 1046.75 1260.53C1056.09 1258.67 1065.42 1257.33 1067.42 1257.6C1070.89 1258 1070.89 1258.13 1070.89 1268.93C1070.89 1283.33 1069.15 1285.73 1053.95 1291.6C1046.75 1294.4 1040.22 1298.13 1035.69 1302C1027.82 1308.67 1019.55 1311.73 998.886 1315.33C979.419 1318.8 979.152 1320.13 998.219 1319.2C1011.95 1318.53 1015.29 1318.8 1017.55 1320.4C1021.42 1323.33 1019.15 1325.07 1006.89 1328.13C1001.15 1329.47 993.686 1332.27 990.352 1334.27C978.619 1341.07 974.752 1342.67 964.219 1345.2C950.619 1348.53 918.486 1353.47 877.552 1358.53C803.952 1367.6 784.352 1368.53 751.286 1364.13C701.686 1357.47 663.152 1344.53 637.552 1326C631.686 1321.73 615.152 1310.13 600.886 1300.27C567.419 1277.07 559.552 1270.67 546.486 1256.4C522.752 1230.53 484.886 1183.07 484.886 1179.2C484.886 1174.4 488.619 1177.07 525.286 1208C572.086 1247.6 603.019 1263.6 675.686 1285.87C685.286 1288.8 693.952 1292.4 698.219 1295.33L705.019 1300L708.886 1297.07C711.952 1294.93 715.286 1294.13 723.552 1293.6C729.419 1293.33 734.219 1292.53 734.219 1291.87C734.219 1288.93 725.952 1286.67 715.286 1286.67C702.486 1286.67 688.752 1283.33 662.752 1273.87C600.219 1251.33 555.819 1225.33 517.286 1188.67C510.352 1182.13 507.286 1178.4 508.219 1177.6C509.819 1175.87 534.619 1179.07 548.886 1182.67C564.086 1186.53 576.886 1188.27 583.286 1187.33C590.086 1186.27 590.219 1183.47 583.419 1182.93C572.886 1182.13 570.219 1180.27 575.952 1177.73C578.352 1176.53 577.419 1176.13 569.552 1175.33C556.352 1174 544.619 1171.07 532.219 1165.73C520.486 1160.67 518.219 1159.2 518.219 1156.53C518.219 1153.2 519.152 1152.93 669.552 1126.8C702.752 1120.93 731.819 1116.93 754.886 1114.67C788.352 1111.6 798.352 1110.27 797.286 1109.2C795.152 1107.07 721.686 1112.13 678.886 1117.47C667.152 1118.93 644.086 1122.4 627.552 1125.33C559.819 1137.2 508.886 1142.93 508.886 1138.8C508.886 1137.73 534.352 1128.53 569.952 1116.8C578.086 1114 584.886 1111.2 584.886 1110.53C584.886 1109.87 582.219 1109.33 578.886 1109.33C575.552 1109.33 572.886 1108.93 572.886 1108.27C572.886 1107.73 575.686 1105.73 579.019 1103.73C583.286 1101.07 585.152 1098.93 585.686 1096C586.752 1090.8 588.486 1089.87 591.552 1092.67C594.086 1094.93 594.219 1094.93 595.019 1092.53C598.086 1082.8 600.486 1081.47 656.886 1055.87C712.619 1030.67 726.752 1024.67 736.486 1021.87C740.619 1020.67 745.686 1018.53 747.552 1017.2C749.419 1015.87 756.886 1013.47 764.219 1011.87C771.552 1010.4 782.619 1007.07 788.886 1004.67C795.152 1002.13 809.286 998 820.219 995.333C843.152 989.867 866.752 982.8 865.819 981.733C865.419 981.333 858.352 982.667 849.952 984.533C841.686 986.4 827.419 989.2 818.219 990.8C768.752 999.333 718.352 1018.53 614.352 1068.27C552.486 1097.87 537.286 1104.67 519.686 1110.8C511.419 1113.6 504.086 1116 503.419 1116C500.886 1116 502.352 1112.4 505.952 1109.73C513.952 1103.87 529.819 1093.47 535.286 1090.8C538.352 1089.2 540.886 1087.33 540.886 1086.67C540.886 1083.87 534.352 1085.6 521.686 1092C508.752 1098.53 504.886 1099.73 504.886 1097.6C504.886 1096.53 577.152 1032.93 594.619 1018.67C600.219 1014.13 604.886 1010 604.886 1009.6C604.886 1008.93 598.886 1013.33 587.286 1022.67C572.752 1034.27 562.219 1039.33 562.219 1034.67C562.219 1031.73 577.152 1017.07 614.752 983.067C637.286 962.667 663.819 938.8 673.552 930C686.219 918.533 694.352 912.267 702.352 908.133C708.486 904.8 715.552 900.133 718.086 897.733C720.619 895.333 723.419 893.333 724.352 893.333C725.552 893.333 725.819 892 725.286 888.933C724.752 885.2 725.286 883.867 729.819 879.6C732.619 876.8 744.219 868.267 755.552 860.4C766.886 852.667 776.886 845.733 777.552 845.067C780.219 842.4 756.086 855.067 738.352 865.6C714.886 879.6 684.486 899.867 675.552 907.467C671.686 910.8 665.819 915.333 662.352 917.6C659.019 920 649.286 928.267 640.886 936.133C619.686 955.867 596.886 975.6 555.552 1010.13C536.086 1026.4 509.819 1049.07 497.019 1060.53C484.352 1072 473.419 1081.33 472.752 1081.33C469.952 1081.33 475.286 1074.93 492.352 1057.33C502.219 1047.2 510.219 1038.53 510.219 1038.13C510.219 1035.33 501.286 1043.33 478.219 1066.53C448.886 1095.87 434.886 1112.53 433.552 1119.6C432.486 1125.47 430.086 1124.67 427.552 1117.6C425.819 1112.67 425.952 1111.6 427.819 1107.6C434.619 1093.2 499.286 1032.13 547.952 994.133C557.952 986.267 566.219 979.6 566.219 979.2C566.219 977.2 514.219 1015.87 474.486 1047.47C463.152 1056.53 453.286 1064 452.619 1064C449.952 1064 457.152 1055.2 490.219 1018.4C501.952 1005.33 498.352 1008.13 475.552 1030C466.352 1038.8 454.486 1049.6 449.152 1054C443.552 1058.67 436.752 1066 432.752 1071.6C419.819 1090.4 407.552 1100 407.552 1091.47C407.552 1087.07 422.886 1064.27 440.886 1042C475.686 998.8 516.752 952.4 583.552 880.667C622.752 838.533 649.019 809.867 651.419 806.4C656.486 798.933 639.419 814.667 606.886 847.333C570.619 883.467 551.286 904 520.752 938.667C510.619 950 495.152 967.067 486.219 976.667C477.152 986.133 463.819 1000.8 456.619 1008.93C443.019 1024.27 439.552 1026.4 436.886 1021.33C435.686 1019.07 436.086 1018.13 438.619 1015.6C440.486 1014 442.752 1010.53 443.819 1008C444.886 1005.47 450.352 997.6 455.819 990.667C469.686 972.8 469.552 972.133 455.286 986.933C441.152 1001.6 437.686 1004 434.619 1000.93C433.152 999.467 432.752 997.6 433.419 994.133C434.219 990.267 442.619 980.267 477.019 942.4C539.819 873.467 570.886 837.6 591.286 810.667C600.352 798.8 602.752 794.667 599.552 796.667C598.752 797.2 577.552 821.067 552.352 849.733C527.286 878.533 497.952 911.467 487.419 923.067C476.886 934.667 464.086 948.8 458.886 954.667C448.752 966.133 439.019 974.667 436.086 974.667C435.019 974.667 434.219 974.4 434.219 974.133C434.219 973.867 437.019 968.8 440.352 963.067C446.486 952.8 454.886 933.6 453.819 932.533C453.552 932.133 448.086 940.533 441.819 950.933C427.552 974.667 412.752 996.267 410.352 997.067C407.419 998 409.286 988.133 415.952 967.867C424.619 941.733 433.419 925.067 459.686 885.733C491.419 838.267 522.086 796.4 562.752 745.333C612.752 682.533 633.286 658.933 687.686 601.333C780.752 502.667 794.352 486.533 816.886 447.333C833.819 418 845.019 391.467 851.419 365.333C855.552 348.4 861.286 316 860.352 314.933C860.086 314.667 858.886 318 857.686 322.267C853.019 339.333 835.019 392.4 828.486 408.667C820.352 428.8 811.819 443.333 795.152 465.867C770.486 499.067 754.219 517.467 680.219 596C628.619 650.667 609.286 671.733 600.886 682.667C598.352 686 582.619 705.867 566.086 726.8C500.619 809.333 451.419 877.2 425.552 920.133C420.486 928.533 413.819 938 410.752 941.333C407.686 944.667 403.686 950.533 401.686 954.267C396.219 965.067 395.019 963.6 396.086 947.6C397.286 927.733 399.952 914.133 410.219 874C425.552 813.867 433.286 788.533 459.419 714.133C466.752 692.933 472.886 674.933 472.886 674.133C472.486 664.667 430.752 773.333 419.552 812.933C417.419 820.267 414.752 828.267 413.552 830.533C408.619 840.133 394.752 905.2 386.886 956C379.952 1000.67 376.752 1013.6 373.419 1010.4C372.886 1009.87 373.152 1001.47 374.086 991.733C376.086 968.133 377.286 916.4 375.686 922.667C373.819 929.733 370.352 972.4 369.419 1000C368.619 1025.6 367.152 1035.2 364.486 1034.27C361.952 1033.47 361.286 1025.73 360.352 990C359.152 944.133 361.419 863.067 364.886 831.867C367.819 804 369.552 769.733 367.686 777.333C367.019 779.867 364.352 798.533 361.686 818.667C356.352 859.333 354.352 896 354.219 950.133C354.219 967.867 353.819 984.267 353.419 986.533C351.686 995.333 349.552 989.6 347.819 971.333C346.485 956.533 345.285 950.8 341.819 942.133C336.885 929.467 335.552 931.333 339.552 945.467C342.485 956.133 343.019 964.667 340.885 966C337.419 968.133 332.219 942.267 325.552 890.667C319.685 843.467 318.885 832.533 319.019 788.667C319.019 740.133 320.219 726.4 329.552 667.333C332.752 646.8 337.019 618.533 338.885 604.667C342.752 576.933 355.286 521.867 365.286 488.667C368.619 477.6 375.019 455.2 379.552 438.667C389.152 403.867 403.152 360.533 408.086 350.933C409.952 347.333 412.086 340.533 412.752 336C413.552 331.333 415.152 326.533 416.219 325.333C417.419 324 419.152 320 420.086 316.4C422.752 306.133 431.819 286.4 451.552 247.333C480.086 191.067 502.352 151.2 511.552 140C514.219 136.667 517.552 131.6 519.019 128.667C521.686 122.933 564.486 78.4 580.752 64.4C591.952 54.8 595.019 53.8667 593.686 60C592.752 65.0667 592.219 65.3333 609.819 49.8667C628.619 33.3333 644.486 22.5333 650.352 22.2667C658.219 21.8667 657.019 26.1333 646.086 38.1333C640.086 44.5333 638.886 46.2667 643.019 42.4C650.486 35.2 654.752 33.3333 662.886 33.3333C670.619 33.3333 686.352 36.4 696.086 39.8667C704.352 42.6667 716.886 50.1333 716.886 52.1333C716.886 52.8 713.686 57.0667 709.819 61.6C696.486 77.6 692.486 82.8 693.152 83.4667C693.552 83.8667 700.086 78.4 707.552 71.3333C727.019 53.2 728.619 52.8 726.886 65.4667C725.286 76.6667 717.952 89.2 704.752 103.6C690.086 119.467 670.886 142.267 660.086 156.667C650.486 169.467 649.419 171.2 651.286 170.533C653.952 169.6 671.686 148.933 677.686 139.867C687.552 124.933 714.219 104.4 726.086 102.533C729.819 102 735.819 100 739.552 98.2667C745.419 95.4667 747.152 95.0667 750.619 96.4C756.619 98.4 776.886 118.8 776.886 122.667C776.886 124.533 773.552 129.2 767.819 135.2C758.619 144.933 742.219 165.6 742.219 167.6C742.219 168.133 747.819 163.067 754.752 156.133C764.619 146.267 767.819 143.867 769.952 144.533C776.086 146.533 783.552 153.733 790.486 164.267C794.619 170.533 799.552 176.8 801.419 178.133C803.552 179.6 806.486 184.667 808.886 190.533C811.152 195.867 814.752 202.4 816.886 204.933C820.886 209.333 820.886 209.467 818.752 214.4C816.086 220.8 811.019 229.6 805.152 238C801.152 243.6 802.619 242.667 814.619 230.933C827.952 218 831.686 215.6 833.552 218.667C834.752 220.533 832.486 224.133 823.019 235.733C813.152 248 809.019 254 811.286 253.2C812.086 252.933 818.752 247.067 826.086 240.267C833.419 233.6 839.819 228 840.486 228C841.686 228 845.286 233.2 855.952 251.333C860.352 258.533 866.352 267.733 869.419 271.467C872.352 275.2 878.619 283.6 883.152 290.133C892.886 304.133 906.619 318.667 921.952 331.2C927.952 336.133 932.886 340.8 932.886 341.6C932.886 342.267 925.952 350.4 917.552 359.6C897.686 381.333 897.286 383.067 915.019 369.733C920.219 365.867 924.886 362.667 925.286 362.667C927.819 362.667 925.152 366.267 914.219 378.133C907.552 385.2 902.486 391.333 902.886 391.733C903.552 392.533 903.019 392.933 919.152 380.267C936.619 366.4 945.552 361.333 952.219 361.333C955.286 361.333 958.352 362 959.286 362.933C960.219 363.867 960.886 364 960.886 363.333C960.886 362.667 951.419 352.8 939.819 341.467C917.952 320 900.752 299.867 885.419 277.867C875.686 264 866.219 246.533 866.219 242.8C866.219 239.467 864.752 238.4 862.752 240.133C859.819 242.533 856.086 240.267 853.419 234.267C849.952 226.4 841.419 216.133 826.219 201.333C814.486 190 813.019 187.867 811.419 181.467C809.952 175.6 808.752 173.733 804.886 171.333C802.219 169.733 796.352 164 791.686 158.8C787.019 153.467 780.486 147.333 777.286 145.067C771.686 141.2 771.419 140.933 773.686 138.533C777.019 134.8 780.219 134.267 784.886 136.667C788.486 138.533 788.886 138.533 788.886 136.533C788.886 132 784.619 120.267 781.419 115.867C776.886 109.733 758.219 93.4667 754.486 92.5333C751.286 91.6 747.019 92.1333 735.819 94.8C727.286 96.9333 724.086 95.2 728.352 90.5333C730.352 88.2667 730.886 86 730.486 78.9333C730.352 73.8667 731.152 66.9333 732.352 62.5333C733.686 57.8667 734.219 52.9333 733.686 50.2667C732.619 44.9333 727.019 39.2 721.552 38C719.419 37.4667 716.486 36.8 715.152 36.4C711.552 35.4667 707.552 25.7333 707.552 18C707.552 10.8 704.886 5.33333 701.286 5.33333C700.086 5.33333 693.286 7.99999 686.086 11.3333C678.886 14.6667 671.019 17.3333 668.619 17.3333C659.819 17.3333 649.952 8.13333 652.886 2.79999C654.086 0.399993 653.952 -6.99103e-06 651.286 -6.99103e-06C649.552 -6.99103e-06 644.752 1.86666 640.619 4.13333ZM408.886 975.867C408.886 981.867 398.619 1005.33 396.086 1005.33C391.686 1005.33 395.552 990.533 403.152 978.267C406.486 972.933 408.886 971.867 408.886 975.867ZM428.886 1008C428.886 1013.73 422.886 1025.47 414.352 1036.13C409.419 1042.4 403.552 1050.4 401.419 1053.87C397.819 1059.6 394.219 1061.87 394.219 1058.4C394.219 1054.4 417.552 1013.87 423.952 1007.07C426.886 1003.73 428.886 1004.13 428.886 1008Z",
                            stroke: "#ff007f",
                            strokeWidth: "12",
                            mask: "url(#path-1-inside-1_277_3)",
                          }),
                          C("path", {
                            d: "M377.698 714.669C377.685 714.753 377.673 714.833 377.661 714.91C378.103 713.453 378.693 711.167 379.449 707.952C381.43 699.528 384.529 684.835 389.062 662.302L389.062 662.3C393.663 639.699 396.56 624.709 397.808 616.905C398.111 615.014 398.315 613.553 398.423 612.51C398.198 613.117 397.932 613.887 397.628 614.82C397.204 616.159 395.728 622.969 393.746 632.535C391.767 642.083 389.292 654.332 386.876 666.498C384.459 678.663 382.101 690.745 380.356 699.96C379.483 704.568 378.764 708.457 378.267 711.281C378.018 712.693 377.826 713.836 377.698 714.669Z",
                            stroke: "#ff007f",
                          }),
                          C("path", {
                            d: "M386.974 808.772L386.974 808.772L386.972 808.782C385.38 815.547 383.916 826.553 383.117 835.594C382.717 840.114 382.485 844.126 382.485 846.861C382.485 847.903 382.519 848.739 382.586 849.341C382.651 849.035 382.724 848.665 382.802 848.236C383.038 846.945 383.325 845.144 383.643 842.998C384.277 838.707 385.031 833.053 385.739 827.372C386.447 821.691 387.109 815.986 387.561 811.595C387.787 809.399 387.96 807.535 388.059 806.168C388.103 805.57 388.132 805.071 388.146 804.683C387.786 805.526 387.366 806.942 386.974 808.772ZM382.347 850.246C382.345 850.249 382.344 850.251 382.344 850.251C382.344 850.251 382.345 850.249 382.347 850.246Z",
                            stroke: "#ff007f",
                          }),
                        ],
                      }),
                    }),
                  }),
                  R("div", {
                    className: "",
                    children: [
                      C("div", {
                        className: "about-text-heading heading-font",
                        children: "Featured",
                      }),
                      R("div", {
                        className: "subheading",
                        children: [
                          "Featured Work and Project Showcase",
                          C("div", {
                            className: "text-border ",
                            children: " ",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            C("div", { className: "panel " }),
            C("div", {
              className: "panel mid",
              children: C("div", { id: "section_0", className: "section1" }),
            }),
            C("section", {
              className: "panel  layer",
              children: C("div", {
                id: "section_1",
                className: "section1 section_1",
                style: { "--i": 1 },
                ref: r,
                children: R("div", {
                  className: "container",
                  children: [
                    C("div", {
                      className: "section__image one box-1",
                      ref: l,
                      children: C("img", {
                        src: E4,
                        width: "100%",
                        height: "100%",
                      }),
                    }),
                    C("div", {
                      className: "section__image two box-1-small",
                      ref: u,
                      children: C("img", {
                        src: E4,
                        width: "100%",
                        height: "100%",
                      }),
                    }),
                    C("div", {
                      className: "section__heading",
                      children: R("div", {
                        className: "text",
                        children: [
                          !Ln &&
                          R(V6, {
                            children: [
                              C("h1", {
                                children: C("span", {
                                  className: "hidden-text hidden-text1",
                                  children: "E-STORE",
                                }),
                              }),
                              C("h1", {
                                children: C("span", {
                                  className: "hidden-text hidden-text1",
                                  children: "SHOP",
                                }),
                              }),
                            ],
                          }),
                          Ln &&
                          C(V6, {
                            children: C("h1", {
                              children: C("span", {
                                className: "",
                                children: "E-STORE",
                              }),
                            }),
                          }),
                          Ln &&
                          C("p", {
                            className: "desc",
                            children:
                              "E-STORE is an educational project and a virtual clothing website...",
                          }),
                          C("div", {
                            className: "hidden-text1",
                            children: R("div", {
                              className: "all-cta",
                              onClick: () => t(Vm),
                              children: [
                                C("div", { className: "back-cta" }),
                                "View ",
                                C("svg", {
                                  viewBox: "0 0 70 70",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: C("path", {
                                    d: "M17.5 55.4167L55.4167 17.5M55.4167 17.5V53.9M55.4167 17.5H19.0167",
                                    strokeWidth: "4.375",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            C("section", {
              className: "panel layer",
              children: C("div", {
                id: "section_2",
                className: "section1",
                style: { "--i": 0 },
                ref: i,
                children: R("div", {
                  className: "container",
                  children: [
                    C("div", {
                      className: "section__image one box-2",
                      ref: a,
                      children: C("img", {
                        src: T4,
                        width: "100%",
                        height: "100%",
                      }),
                    }),
                    C("div", {
                      className: "section__image two box-2-small",
                      ref: c,
                      children: C("img", {
                        src: T4,
                        width: "100%",
                        height: "100%",
                      }),
                    }),
                    C("div", {
                      className: "section__heading",
                      children: R("div", {
                        className: "text",
                        children: [
                          !Ln &&
                          R(V6, {
                            children: [
                              C("h1", {
                                children: C("span", {
                                  className: "hidden-text hidden-text2",
                                  children: "KART",
                                }),
                              }),
                              C("h1", {
                                children: C("span", {
                                  className: "hidden-text hidden-text2",
                                  children: "RACING",
                                }),
                              }),
                            ],
                          }),
                          Ln &&
                          C(V6, {
                            children: C("h1", {
                              children: C("span", {
                                className: "",
                                children: "KRL",
                              }),
                            }),
                          }),
                          Ln &&
                          C("p", {
                            className: "desc",
                            children:
                              "Exciting world of the game to life on the digital forefront...",
                          }),
                          C("div", {
                            className: "hidden-text2",
                            children: R("div", {
                              className: "all-cta",
                              onClick: () => t(Rm),
                              children: [
                                C("div", { className: "back-cta" }),
                                "View ",
                                C("svg", {
                                  viewBox: "0 0 70 70",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: C("path", {
                                    d: "M17.5 55.4167L55.4167 17.5M55.4167 17.5V53.9M55.4167 17.5H19.0167",
                                    strokeWidth: "4.375",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      })
    );
  };
const Dm = () =>
  C("div", {
    className: "footer-wrapper",
    children: R("div", {
      className: "footer-row",
      children: [
        // C("div", { className: "title", children: "Designed and Developed by" }),
        // C("div", { className: "title", children: "Aditya Jadhav" }),
        // C("div", { className: "copywright", children: "Copyright © 2023" }),
      ],
    }),
  });
const Im = ({ scrollContainer: t }) => {
  const e = P.useRef(null),
    n = P.useRef(null),
    r = P.useRef(null);
  P.useRef(null);
  const i = P.useRef(null);
  P.useRef(null);
  const o = P.useRef([]);
  return (
    P.useEffect(() => { }, []),
    P.useEffect(() => {
      qC(e);
    }, []),
    P.useEffect(() => {
      HC(e, i);
    }, []),
    P.useEffect(() => {
      const s = document.querySelectorAll(".circles-container svg path");
      KC(s, o);
    }, []),
    C("div", {
      ref: r,
      children: C("div", {
        className: "circles-container",
        ref: e,
        children: C("div", {
          className: "circle-row",
          ref: n,
          children: C("div", {
            className: "circle-wrapper ref4",
            children: C("div", {
              className: "text-line textRef4 heading-font",
              ref: i,
              children: "Shaping style, one pixel at a time",
            }),
          }),
        }),
      }),
    })
  );
};
ts.createContext({ scroll: null });
function zm() {
  P.useState(0);
  const t = P.useRef(null),
    e = P.useRef(null),
    n = P.useRef(null),
    r = P.useRef(null),
    i = P.useRef(null),
    o = P.useRef(null);
  P.useRef(null);
  const [s, l] = P.useState(window.innerWidth <= 768),
    [a, u] = P.useState(!1),
    [c, f] = P.useState(!1),
    d = P.useRef(null);
  P.useRef(null);
  const h = P.useRef(null),
    [v, m] = P.useState(!1),
    k = P.useRef(null);
  P.useRef(null), P.useRef(null);
  const g = P.useRef(null),
    [p, _] = P.useState(!1),
    [y, x] = P.useState(null);
  P.useEffect(() => { }, [o]);
  const T = () => {
    scrollInstance.current && (scrollInstance.current.update(), G.refresh());
  };
  P.useLayoutEffect(() => {
    const N = window.matchMedia("(max-width: 767px)").matches;
    if (o.current) {
      const S = new ih({
        el: o.current,
        scrollbarContainer: !1,
        smooth: !0,
        firefoxMultiplier: 1,
        lerp: N ? 0.2 : 0.04,
        smartphone: { smooth: !1 },
        tablet: { smooth: !0 },
      });
      if (
        (new ResizeObserver(() => {
          S.update(), G.refresh();
        }).observe(document.querySelector("[data-scroll-container]")),
          x(S),
          S.on("scroll", G.update),
          G.scrollerProxy("[data-scroll-container]", {
            scrollTop(F) {
              return arguments.length
                ? S.scrollTo(F, 0, 0)
                : S.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
              return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
              };
            },
            pinType: "transform",
          }),
          G.defaults({ scroller: "[data-scroll-container]" }),
          G.refresh(),
          G.addEventListener("refresh", () => S.update()),
          !c)
      ) {
        let F = function (Ce) {
          const re = Ce.scroll.y / (Ce.limit.y + window.innerHeight),
            ve = 0 + re * (Q ? 90 : 30),
            i1 = ee * (re + ve / 1e3);
          Y.style.strokeDashoffset = ee - i1;
        };
        const Y = i.current,
          ee = Y.getTotalLength();
        (Y.style.strokeDasharray = ee), (Y.style.strokeDashoffset = ee);
        const Q = window.matchMedia("(max-width: 821px)").matches;
        S.on("scroll", F);
      }
      if (k) {
        let F = function (Q) {
          Y.style.transform = `rotate(${Q.scroll.y * 0.15}deg)`;
        };
        const Y = k.current;
        new DC(Y).radius(65).forceWidth(!0), S.on("scroll", F);
      }
      if (m) {
        let F = function (Y) {
          Y.scroll.y > 400 ? m(!0) : m(!1), Y.scroll.y > 100 ? _(!0) : _(!1);
        };
        S.on("scroll", F);
      }
      return () => {
        S.destroy(), x(null);
      };
    }
  }, [o]);
  const w = P.useRef([]);
  P.useEffect(() => {
    const N = document.querySelectorAll(".loader svg path");
    (w.current = Array.from(N)),
      w.current.forEach((S, F) => {
        const Y = S.getTotalLength(),
          ee = S.getAttribute("stroke");
        j.set(S, {
          strokeDasharray: Y,
          strokeDashoffset: Y,
          fill: "transparent",
        }),
          j
            .timeline({ delay: F * 0.1 })
            .to(S, { strokeDashoffset: 0, duration: 2, ease: "power2.inOut" })
            .to(S, { fill: ee });
      });
  }, []),
    P.useEffect(() => {
      window.onload = () => {
        window.scrollTo(0, 0),
          G.refresh(),
          (window.history.scrollRestoration = "manual");
      };
    }, []),
    P.useEffect(() => {
      const N = j.timeline();
      setTimeout(() => {
        f(!1);
      }, 4e3),
        c ||
        N.to(d.current, {
          duration: 2.3,
          innerHTML: 100,
          roundProps: "innerHTML",
          ease: "none",
        }).fromTo(
          h.current,
          { opacity: 1 },
          { x: "100%", duration: 1, display: "none" },
          3
        );
    }, []),
    P.useEffect(() => {
      if (!c) {
        const N = (ee) => {
          const Q = ee.clientX,
            Ce = ee.clientY;
          S(Q, Ce);
        },
          S = (ee, Q) => {
            j.to(t.current, { x: ee, y: Q, duration: 0.1 }),
              j.to(e.current, { x: ee, y: Q, duration: 0.2 }),
              j.to(n.current, { x: ee, y: Q, duration: 0.3 });
          };
        let F;
        const Y = () => {
          S(t.current.x, t.current.y), (F = requestAnimationFrame(Y));
        };
        return (
          Y(),
          document.addEventListener("mousemove", N),
          () => {
            document.removeEventListener("mousemove", N),
              cancelAnimationFrame(F);
          }
        );
      }
    }, []),
    P.useEffect(() => {
      if (!c) {
        let N = function (F) {
          const Y = F.matches;
          Y !== s && (l(Y), window.location.reload());
        };
        const S = window.matchMedia("(max-width: 768px)");
        return (
          S.addEventListener("change", N),
          () => {
            S.removeEventListener("change", N);
          }
        );
      }
    }, [s, a]),
    P.useEffect(() => {
      const N = document.querySelector(".menu-button"),
        S = document.querySelector(".menu-bar");
      N.addEventListener("click", function () {
        S.classList.toggle("open");
      });
    }, []);
  const [L, M] = P.useState(!1),
    [O, W] = P.useState(null),
    I = (N) => {
      W(N),
        document.body.classList.add("modal-open"),
        setTimeout(() => {
          M(!0);
        }, 0);
    },
    $ = () => {
      document.body.classList.remove("modal-open"),
        M(!1),
        setTimeout(() => {
          W(null);
        }, 300);
    },
    D = () => {
      y !== null &&
        y.scroll.y !== 0 &&
        y.scrollTo(0, 0, 1e3, { easing: [0.7, 0, 0.3, 1] });
    },
    A = (N) => {
      if (
        (E(!H),
          document.querySelector(".menu-bar").classList.toggle("open"),
          y !== null)
      ) {
        const F = document.getElementById(N);
        F &&
          y.scrollTo(F, {
            offset: -100,
            duration: 1e3,
            easing: [0.7, 0, 0.3, 1],
          });
      }
    },
    [H, E] = P.useState(!1),
    b = () => {
      E(!H);
    };
  return R("div", {
    className: "app-container",
    children: [
      O &&
      C("div", {
        className: "modal-backdrop show",
        onClick: $,
        children: R("div", {
          className: `modal ${L ? "show" : "hide"}`,
          onClick: (N) => N.stopPropagation(),
          children: [
            C("button", {
              type: "button",
              className: "close",
              onClick: $,
              children: C("span", { "aria-hidden": "true", children: "×" }),
            }),
            R("div", {
              className: "modal-body",
              children: [
                C("h3", { children: O.title }),
                R("div", {
                  className: "project-info",
                  children: [
                    R("div", {
                      className: "project-description",
                      children: [
                        R("ul", {
                          children: [
                            C("li", {
                              children: C("strong", {
                                children: " Live site ",
                              }),
                            }),
                            C("li", {
                              children: C("a", {
                                target: "_blank",
                                href: O.link,
                                children: "Visit link →",
                              }),
                            }),
                          ],
                        }),
                        R("ul", {
                          children: [
                            C("li", {
                              children: C("strong", { children: "My Role" }),
                            }),
                            C("li", { children: "Web Developer" }),
                          ],
                        }),
                        R("ul", {
                          children: [
                            C("li", {
                              children: C("strong", {
                                children: " Technology used ",
                              }),
                            }),
                            C("li", { children: O.technology }),
                          ],
                        }),
                      ],
                    }),
                    R("div", {
                      className: "project-overview",
                      children: [
                        R("ul", {
                          children: [
                            C("li", {
                              children: C("strong", { children: "Type" }),
                            }),
                            C("li", {
                              children: C("p", { children: O.type }),
                            }),
                          ],
                        }),
                        R("ul", {
                          children: [
                            C("li", {
                              children: C("strong", { children: "Overview" }),
                            }),
                            C("li", {
                              children: C("p", { children: O.description }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      C("div", {
        className: "logo",
        onClick: D,
        children: R("svg", {
          version: "1.0",
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 595 727",
          preserveAspectRatio: "xMidYMid meet",
          fill: "none",
          children: [
            C("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M1763 2888 c-265 -458 -716 -1240 -1003 -1737 -286 -497 -519 -905 -517 -907 2 -2 603 -3 1336 -2 l1331 3 -164 285 -164 285 -670 5 -670 5 496 860 c274 473 501 860 506 860 5 0 25 -29 45 -65 21 -36 139 -242 264 -457 125 -216 329 -570 453 -785 125 -216 247 -422 272 -458 197 -278 523 -474 873 -526 481 -71 980 153 1253 563 99 149 155 282 199 475 20 91 21 115 24 1261 l4 1167 -1359 0 -1360 0 167 -289 166 -290 900 -3 900 -3 0 -845 c0 -949 3 -905 -75 -1065 -74 -151 -187 -261 -345 -336 -228 -107 -480 -87 -695 56 -123 82 -166 140 -394 537 -115 199 -366 633 -556 963 -191 330 -434 751 -540 935 -106 184 -194 336 -195 338 -1 1 -218 -372 -482 -830z",

              fill: "#eee9db",
              transform: "translate(0.000000,571.000000) scale(0.100000,-0.100000)",
              stroke: "#eee9db",
              strokeWidth: "0.944882",
              strokeLinecap: "round",
            }),

            // C("path", {
            //   fillRule: "evenodd",
            //   clipRule: "evenodd",
            //   d: "M0 0 C23.1 0 46.2 0 70 0 C70 1.32 70 2.64 70 4 C69.25234375 4.04898437 68.5046875 4.09796875 67.734375 4.1484375 C66.74953125 4.22320313 65.7646875 4.29796875 64.75 4.375 C63.77546875 4.44460937 62.8009375 4.51421875 61.796875 4.5859375 C58.9947101 5.00078314 57.29217098 5.34679703 55 7 C52.70359603 11.3261755 52.7129459 15.53404878 52.72875977 20.31591797 C52.72091965 21.55371254 52.72091965 21.55371254 52.71292114 22.81651306 C52.70269897 24.60506164 52.69690385 26.39363982 52.69503975 28.18221664 C52.69136189 31.02649359 52.67459142 33.87042621 52.65428162 36.71463013 C52.59904006 44.80057312 52.56836922 52.88656843 52.54370117 60.97265625 C52.52768359 65.92579244 52.49730829 70.87868869 52.45893669 75.83169937 C52.44739936 77.70605006 52.44135734 79.58044397 52.44125557 81.45483017 C52.43896448 112.45064546 52.43896448 112.45064546 41.625 124.6875 C30.49625508 134.49139434 18.59797494 136.85927868 3.97119141 136.17919922 C-5.03701135 135.3602717 -13.99753368 130.32597394 -20.078125 123.75390625 C-25.76761069 116.71143311 -26.94471689 111.05353685 -26 102 C-23.8642148 97.57022329 -21.60987286 94.80386329 -17 93 C-11.98585513 92.31968889 -8.17125329 92.44631662 -3.5625 94.625 C0.47846514 98.37028477 1.78560491 101.36523741 2.5 106.8125 C2.36572017 111.19337934 0.46125043 114.22693338 -1.90625 117.82421875 C-3.22551535 120.44861446 -3.37700949 122.09845861 -3 125 C0.28519599 128.1167244 3.12025114 129.29507365 7.5625 129.5625 C11.06955085 129.39128035 11.95659652 129.03139826 14.9375 126.875 C19.32650808 120.75698873 19.30143132 114.83014341 19.30639648 107.57592773 C19.31472 106.53945099 19.32304352 105.50297424 19.33161926 104.43508911 C19.35566461 101.01788554 19.36448299 97.60087287 19.37109375 94.18359375 C19.38006129 91.80518029 19.38918316 89.42676741 19.39845276 87.0483551 C19.41492836 82.06778594 19.4226408 77.08728391 19.42553711 72.10668945 C19.43093212 65.72185276 19.46866521 59.33764534 19.51428127 52.95298672 C19.54399933 48.0433775 19.55125947 43.13392117 19.55226326 38.22422981 C19.55647275 35.86986458 19.56893605 33.51549918 19.58978081 31.16122246 C19.61659663 27.87189949 19.61189909 24.58405369 19.59936523 21.29467773 C19.61419952 20.32155136 19.62903381 19.34842499 19.64431763 18.34580994 C19.59384757 13.70121124 19.53077434 11.67784404 16.58753967 7.91908264 C12.81284016 5.11952738 10.53976847 4.78487638 5.875 4.4375 C4.23144531 4.31181641 4.23144531 4.31181641 2.5546875 4.18359375 C1.71164063 4.12300781 0.86859375 4.06242188 0 4 C0 2.68 0 1.36 0 0 Z",
            //   fill: "#eee9db",
            //   stroke: "#eee9db",
            //   strokeWidth: "0.944882",
            //   strokeLinecap: "round",
            // }),
          ],
        }),
      }),
      C("ul", {
        className: "menu",
        onClick: b,
        children: C("li", {
          title: "home",
          children: C("span", {
            href: "#",
            className: "menu-button",
            children: H
              ? C("svg", {
                width: "100%",
                height: "100%",
                viewBox: "0 0 42 42",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: C("path", {
                  d: "M4.66683 41.4167L0.583496 37.3333L16.9168 21L0.583496 4.66668L4.66683 0.583344L21.0002 16.9167L37.3335 0.583344L41.4168 4.66668L25.0835 21L41.4168 37.3333L37.3335 41.4167L21.0002 25.0833L4.66683 41.4167Z",
                  fill: "#3f3b37",
                }),
              })
              : C("svg", {
                width: "100%",
                height: "100%",
                viewBox: "0 0 48 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: C("path", {
                  d: "M0.666504 0.5H47.3332V6.33333H0.666504V0.5ZM0.666504 15.0833H47.3332V20.9167H0.666504V15.0833ZM47.3332 29.6667H0.666504V35.5H47.3332V29.6667Z",
                  fill: "#3f3b37",
                }),
              }),
          }),
        }),
      }),
      C("div", { className: "back-menu" }),
      R("ul", {
        className: `menu-bar ${H ? "open" : ""}`,
        children: [
          C("li", {
            onClick: () => A("hero-section"),
            children: C("a", { children: "Home" }),
          }),
          C("li", {
            onClick: () => A("about-section"),
            children: C("a", { children: "About" }),
          }),
          C("li", {
            onClick: () => A("skill-section"),
            children: C("a", { children: "Skills" }),
          }),
          C("li", {
            onClick: () => A("featured-section"),
            children: C("a", { children: "Featured" }),
          }),
          C("li", {
            onClick: () => A("journey-section"),
            children: C("a", { children: "Journey" }),
          }),
          C("li", {
            onClick: () => A("project-section"),
            children: C("a", { children: "Projects" }),
          }),
          C("li", {
            onClick: () => A("contact-section"),
            children: C("a", { children: "Contact" }),
          }),
          C("div", {
            className: "logo-sidebar",
            children: R("svg", {
              viewBox: "0 0 124 76",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                C("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M36.4008 1.00005C43.4675 1.00005 49.6508 2.43338 54.9508 5.30005C60.2508 8.16671 64.3675 12.2834 67.3008 17.65C68.9577 20.7327 70.1364 24.0492 70.7968 27.486C71.3608 30.2974 71.6608 33.3157 71.6968 36.541C71.6994 36.7607 71.7007 36.9804 71.7008 37.2C71.7189 40.5203 71.3874 43.8332 70.7118 47.084C70.0062 50.4723 68.8241 53.7434 67.2008 56.8C64.2008 62.4 60.0175 66.7667 54.6508 69.9C50.1929 72.4763 45.2163 74.0253 40.0838 74.434C38.8259 74.5455 37.5637 74.6009 36.3008 74.6C29.2342 74.6 23.0508 73.1667 17.7508 70.3C12.4508 67.4334 8.33415 63.3 5.40082 57.9C3.69959 54.7175 2.49948 51.2915 1.84282 47.743C1.28149 44.839 1.00082 41.7247 1.00082 38.4C0.980483 34.9735 1.33832 31.5551 2.06782 28.207C2.7877 24.9252 3.9599 21.7593 5.55082 18.8C8.58415 13.2 12.7508 8.83338 18.0508 5.70005C22.2181 3.26497 26.8584 1.75036 31.6598 1.25805C33.2341 1.08384 34.8169 0.997703 36.4008 1.00005ZM36.0008 2.80005C32.6734 2.78872 29.4768 4.09443 27.1088 6.43205C26.8126 6.71114 26.5265 7.00066 26.2508 7.30005C23.4842 10.3 21.3508 14.4334 19.8508 19.7C19.0814 22.4474 18.5231 25.2496 18.1808 28.082C17.8422 30.7867 17.6518 33.6557 17.6098 36.689C17.6038 37.126 17.6008 37.563 17.6008 38C17.5913 40.9231 17.7542 43.8442 18.0888 46.748C18.4415 49.7214 18.9858 52.4884 19.7218 55.049C19.8568 55.5185 19.9998 55.9855 20.1508 56.45C20.7404 58.2938 21.464 60.0919 22.3158 61.83C23.2185 63.65 24.2272 65.2584 25.3418 66.655C25.8719 67.3213 26.4427 67.9542 27.0508 68.55C28.1245 69.6179 29.3419 70.5307 30.6678 71.262C32.5169 72.2753 34.5923 72.8044 36.7008 72.8C40.0283 72.8111 43.225 71.505 45.5928 69.167C45.889 68.8883 46.1752 68.5991 46.4508 68.3C47.804 66.8097 48.9622 65.1534 49.8978 63.371C51.0638 61.193 52.0482 58.686 52.8508 55.85C54.3035 50.7154 55.0528 44.8457 55.0988 38.241C55.1002 38.0274 55.1009 37.8137 55.1008 37.6C55.1097 34.7564 54.9582 31.9146 54.6468 29.088C54.2322 25.4354 53.5335 22.106 52.5508 19.1C51.9603 17.2659 51.2364 15.4775 50.3848 13.749C49.4662 11.9064 48.4382 10.2797 47.3008 8.86905C46.7872 8.23069 46.2362 7.6233 45.6508 7.05005C44.5772 5.9822 43.3598 5.0694 42.0338 4.33805C40.1847 3.32475 38.1094 2.79568 36.0008 2.80005Z",
                  fill: "#eee9db",
                  stroke: "#eee9db",
                  strokeWidth: "0.944882",
                  strokeLinecap: "round",
                }),
                C("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M115.5 2.40022H117.8C117.747 3.45219 117.701 4.50455 117.664 5.55722C117.596 7.43988 117.541 9.53755 117.5 11.8502C117.482 12.8512 117.467 13.8522 117.456 14.8532C117.424 17.6305 117.406 20.9129 117.401 24.7002C117.4 25.3335 117.4 25.9669 117.4 26.6002H115.1C114.91 24.9404 114.657 23.2882 114.344 21.6472C113.958 19.6512 113.493 17.8189 112.95 16.1502C112.056 13.4336 110.454 11.004 108.31 9.11122C108.078 8.90192 107.842 8.6982 107.6 8.50022C106.432 7.39212 105.102 6.46821 103.656 5.76022C103.004 5.43673 102.334 5.14962 101.65 4.90022C99.2833 4.03355 96.9 3.60022 94.5 3.60022C92.8838 3.58768 91.2735 3.79662 89.714 4.22122C88.0541 4.67973 86.4909 5.4349 85.1 6.45022C83.1869 7.8639 81.5377 9.60347 80.228 11.5892C79.6673 12.4285 79.1571 13.3003 78.7 14.2002C77.5719 16.4312 76.6604 18.7652 75.978 21.1702C75.5926 22.5153 75.2663 23.8766 75 25.2502C74.2 29.3502 73.8 33.6002 73.8 38.0002C73.7901 41.0438 73.9136 44.0864 74.17 47.1192C74.7007 53.1372 75.8023 58.0369 77.475 61.8182C77.8495 62.6706 78.2752 63.4994 78.75 64.3002C79.8264 66.1597 81.2205 67.8161 82.869 69.1942C85.477 71.3229 88.608 72.4539 92.262 72.5872C92.5079 72.596 92.7539 72.6004 93 72.6002C93.6634 72.6023 94.3263 72.5639 94.985 72.4852C95.6863 72.3992 96.3393 72.2649 96.944 72.0822C97.0297 72.0561 97.1151 72.0287 97.2 72.0002C98.1187 71.6942 98.9007 71.3489 99.546 70.9642C99.7361 70.8514 99.921 70.7299 100.1 70.6002C100.415 70.3775 100.713 70.1307 100.99 69.8622C101.449 69.4122 101.786 68.9415 102 68.4502C102.133 68.1382 102.234 67.814 102.304 67.4822C102.377 67.1469 102.43 66.7806 102.462 66.3832C102.488 66.0562 102.501 65.7283 102.5 65.4002V55.6002C102.5 53.0502 102.327 51.0419 101.981 49.5752C101.916 49.2969 101.839 49.0216 101.75 48.7502C101.542 48.0988 101.202 47.4976 100.75 46.9842C100.241 46.4156 99.5907 45.9876 98.8 45.7002C98.2874 45.5188 97.7624 45.3747 97.229 45.2692C95.9343 45.0026 94.3247 44.8462 92.4 44.8002V42.8002C93.3627 42.8462 94.459 42.8842 95.689 42.9142C96.276 42.9284 96.863 42.9404 97.45 42.9502C99.4167 42.9836 101.467 43.0169 103.6 43.0502C105.733 43.0836 107.7 43.1002 109.5 43.1002C112.3 43.1002 114.867 43.0669 117.2 43.0002C119.287 42.9409 121.028 42.8812 122.421 42.8212C122.581 42.8144 122.74 42.8074 122.9 42.8002V44.8002C122.55 44.8175 122.201 44.8522 121.855 44.9042C121.097 45.0202 120.495 45.2189 120.05 45.5002C119.417 45.9002 118.983 46.7002 118.75 47.9002C118.677 48.2854 118.621 48.6734 118.581 49.0632C118.498 49.8326 118.443 50.7562 118.417 51.8342C118.405 52.3561 118.399 52.8782 118.4 53.4002V73.2002H116.4C116.335 72.1022 116.099 70.9105 115.69 69.6252C115.677 69.5835 115.663 69.5418 115.65 69.5002C115.427 68.8129 115.128 68.3029 114.754 67.9702C114.411 67.6601 113.962 67.4921 113.5 67.5002C113.339 67.5012 113.178 67.5125 113.018 67.5342C112.633 67.5849 112.177 67.6902 111.65 67.8502C111.072 68.0262 110.257 68.4012 109.205 68.9752C108.834 69.1783 108.465 69.3866 108.1 69.6002C105.633 71.0002 103.033 72.1835 100.3 73.1502C97.5667 74.1169 94.7 74.6002 91.7 74.6002C83.9667 74.6002 77.4333 73.1669 72.1 70.3002C66.7667 67.4336 62.75 63.3169 60.05 57.9502C58.5668 54.9536 57.5035 51.767 56.89 48.4802C56.3427 45.6636 56.0477 42.6449 56.005 39.4242C56.0015 39.1496 55.9999 38.8749 56 38.6002C56 31.0002 57.55 24.4002 60.65 18.8002C63.75 13.2002 68.0167 8.83355 73.45 5.70022C77.6344 3.31458 82.2646 1.81486 87.053 1.29422C88.7615 1.09577 90.4801 0.997606 92.2 1.00022C93.6627 0.995421 95.1245 1.07053 96.579 1.22522C98.041 1.38588 99.3897 1.63288 100.625 1.96622C101.539 2.20915 102.433 2.52139 103.3 2.90022C105.38 3.81145 107.371 4.91631 109.244 6.20022C109.844 6.6137 110.429 7.04728 111 7.50022C111.673 8.00555 112.252 8.29822 112.737 8.37822C112.824 8.3927 112.912 8.40006 113 8.40022C114.111 8.40022 114.888 6.86222 115.332 3.78622C115.398 3.32549 115.454 2.86338 115.5 2.40022Z",
                  fill: "#eee9db",
                  stroke: "#eee9db",
                  strokeWidth: "0.944882",
                  strokeLinecap: "round",
                }),
              ],
            }),
          }),
        ],
      }),
      C("div", {
        className: "loader ",
        ref: h,
        children: R("div", {
          children: [
            C("div", {
              className: "loader-svg",
              children: R("svg", {
                version: "1.0",
                xmlns: "http://www.w3.org/2000/svg",
                width: "100%",
                height: "340",
                viewBox: "0 0 500 700",
                // preserveAspectRatio: "xMidYMid meet",
                fill: "none",
                children: [
                  C("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: `M1763 2888 c-265 -458 -716 -1240 -1003 -1737 -286 -497 -519 -905
                    -517 -907 2 -2 603 -3 1336 -2 l1331 3 -164 285 -164 285 -670 5 -670 5 496
                    860 c274 473 501 860 506 860 5 0 25 -29 45 -65 21 -36 139 -242 264 -457 125
                    -216 329 -570 453 -785 125 -216 247 -422 272 -458 197 -278 523 -474 873
                    -526 481 -71 980 153 1253 563 99 149 155 282 199 475 20 91 21 115 24 1261
                    l4 1167 -1359 0 -1360 0 167 -289 166 -290 900 -3 900 -3 0 -845 c0 -949 3
                    -905 -75 -1065 -74 -151 -187 -261 -345 -336 -228 -107 -480 -87 -695 56 -123
                    82 -166 140 -394 537 -115 199 -366 633 -556 963 -191 330 -434 751 -540 935
                    -106 184 -194 336 -195 338 -1 1 -218 -372 -482 -830z`,
                    fill: "#eee9db",
                    transform: "translate(0.000000,650.000000) scale(0.100000,-0.100000)",
                    stroke: "#eee9db",
                    strokeWidth: "25",
                    strokeLinecap: "round",
                  }),
                ],
              }),
            }),
            C("span", { className: "loader-percent", ref: d, children: "0" }),
            C("span", { className: "loader-percent-sign", children: "%" }),
          ],
        }),
      }),
      C("div", { className: "bg1" }),
      C("div", { className: "bg2" }),
      R("div", {
        ref: g,
        className: `sidebar ${p ? "sidebar-bg" : ""}`,
        children: [
          R("div", {
            className: "contact-wrapper",
            children: [
              R("div", {
                className: "contact-links",
                onClick: () => A("project-section"),
                children: [
                  "PROJECTS",
                  C("svg", {
                    width: "141",
                    height: "57",
                    viewBox: "0 0 141 57",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: C("path", {
                      d: "M1.49988 38.5C33.5 78 102 32 113 48.4999",
                      stroke: "black",
                      strokeWidth: "3",
                    }),
                  }),
                ],
              }),
              C("div", {
                className: "contact-links",
                onClick: () => A("contact-section"),
                children: R("a", {
                  href: "#",
                  className: "animated-button",
                  children: [
                    C("span", {}),
                    C("span", {}),
                    C("span", {}),
                    C("span", {}),
                    "CONTACT",
                  ],
                }),
              }),
              C("div", {
                className: "contact-links",
                onClick: () => A("contact-section"),
                children: R("a", {
                  href: "#",
                  className: "animated-button",
                  children: [
                    C("span", {}),
                    C("span", {}),
                    C("span", {}),
                    C("span", {}),
                    "CONTACT",
                  ],
                }),
              }),
            ],
          }),
          C("div", {
            className: "link",
            children: R("div", {
              className: "link-icon",
              onClick: () => {
                D();
              },
              children: [
                C("span", { className: "color-p", children: "O" }),
                "G",
              ],
            }),
          }),
        ],
      }),
      R("div", {
        className: "circular-text",
        children: [
          C("p", {
            className: "text",
            ref: k,
            children: "•••Discover•••Explore•••Connect•••Transform",
          }),
          C("div", {
            className: "arrow",
            children: R("svg", {
              viewBox: "0 0 76 76",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              onClick: () => {
                D();
              },
              className: `${v ? "show-button" : ""}`,
              children: [
                C("rect", { width: "76", height: "76", fill: "#3F3B37" }),
                C("path", {
                  d: "M37.9999 21.7988L36.4271 23.3016L14.5521 45.1766L10.8618 48.937H65.1381L61.4478 45.1766L39.5728 23.3016L37.9999 21.7988Z",
                  fill: "#f0eee8",
                }),
              ],
            }),
          }),
        ],
      }),
      C("div", {
        className: "cursor",
        ref: n,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          backgroundColor: "rgba(0, 0, 0)",
          pointerEvents: "none",
          zIndex: -2,
          transition: "transform 0.3s ease, opacity 0.3s ease",
          opacity: 0.1,
          transform: "translate(-50%, -50%) scale(0.8)",
        },
      }),
      C("div", {
        className: "cursor",
        ref: e,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "rgba(0, 0, 0)",
          pointerEvents: "none",
          zIndex: -1,
          transition: "transform 0.18s ease, opacity 0.2s ease",
          opacity: 0.3,
          transform: "translate(-50%, -50%) scale(0.6)",
        },
      }),
      C("div", {
        className: "cursor",
        ref: t,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "rgb(255 0 127)",
          pointerEvents: "none",
          transition: "transform  0.1s ease, opacity 0.1s ease",
          opacity: 1,
          transform: "translate(-50%, -50%)",
        },
      }),
      C("div", {
        className: "scroll-wrap",
        ref: o,
        "data-scroll-container": !0,
        children: R("div", {
          className: "main",
          ref: r,
          "data-scroll": !0,
          children: [
            C("svg", {
              id: "stroke-svg",
              width: "741",
              height: "24236",
              viewBox: "0 0 741 24236",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: C("path", {
                id: "svgPath",
                ref: i,
                d: "M318.12 1C294.469 86.6044 292.853 201.562 361.499 265C433.999 332 325.999 399.5 349.999 502C393.605 688.232 271.909 720.122 287.499 805C305.499 903 345.556 1008.02 363.592 1090.36C400.235 1257.65 496.208 1550.95 586.95 1385.89C700.378 1179.56 162.719 1293.75 263.155 1449.6C343.504 1574.28 363.592 1823.71 363.592 1932.84C371.254 2023.84 367.089 2204.55 289.139 2199.46C191.7 2193.09 165.717 2104.38 237.172 2066.15C308.626 2027.92 490.012 1961.27 496.508 2234.74C501.704 2453.53 340.106 2548.9 275.647 2598.4C153.391 2685.15 -94.5186 2857.37 45.7923 2946.37C221.181 3057.63 612.934 3032.14 451.036 3343.84C289.139 3655.55 -119.102 3512.93 237.172 3792.29C593.445 4071.65 666.499 3956.5 588.499 3901C477.607 3822.1 389.075 4183.23 334.11 4364.24C279.145 4545.25 362.257 4569.82 215.5 4666.14C123.618 4726.44 69.9907 4491 274.536 4659C479.082 4827 298.499 4900 294.499 4903.5C93.3376 5012.7 788.049 5369.29 550.999 5463C254.687 5580.13 -27.1608 5440.5 168.216 5733.58C363.592 6026.66 829.796 5498.82 533.484 6169.77C296.434 6706.53 215.308 6722.99 177.499 6673C114.872 6542.96 24.117 6340.45 209.999 6496.5C283.286 6578.51 398.469 6764.56 440.043 6855.91C492.01 6970.11 444.534 7197.51 379.581 7322L352.092 7382.28C328.441 7467.89 330.906 7580.77 424.047 7588.62C540.473 7598.42 613.427 7659.19 490.505 7805.73C367.583 7952.27 44.7869 7994.42 323.61 8121.36C546.668 8222.91 406.011 8336.02 424.047 8418.36C460.69 8585.65 556.663 8878.95 647.405 8713.89C760.833 8507.56 223.174 8621.75 323.61 8777.6C403.959 8902.28 424.047 9151.71 424.047 9260.84C431.708 9351.84 427.544 9532.56 349.593 9527.46C252.155 9521.09 226.172 9432.38 297.626 9394.15C369.081 9355.92 550.466 9289.27 556.962 9562.75C562.159 9781.53 400.561 9876.9 336.102 9926.4C213.846 10013.1 47.1881 10184.5 187.499 10273.5C362.888 10384.8 673.389 10360.1 511.491 10671.8C349.594 10983.5 -58.6475 10840.9 297.626 11120.3C653.9 11399.6 837.898 11278.8 678.999 11218C551.88 11169.4 449.53 11511.2 394.565 11692.2C339.6 11873.2 220.575 12215 184.198 12133.8C138.727 12032.4 255.5 11946.5 339.6 11994.1C523.15 12141.7 830.988 12460.1 593.938 12553.8C297.626 12671 33.2938 12768.5 228.67 13061.6C424.047 13354.7 890.25 12826.8 593.938 13497.8C356.889 14034.5 255.308 14054 217.499 14004C154.872 13874 299.499 13851 328.499 13875C401.786 13957 458.924 14092.6 500.498 14183.9C552.465 14298.1 579.491 14670 440.036 14650C300.581 14630 533.459 14545 420.491 14686C307.523 14827 303.148 14942.5 396.289 14950.3C512.715 14960.1 585.669 15020.9 462.747 15167.4C339.825 15314 17.0289 15356.1 295.852 15483.1C518.91 15584.6 378.253 15697.7 396.289 15780.1C432.932 15947.4 528.905 16240.7 619.647 16075.6C733.075 15869.3 195.416 15983.5 295.852 16139.3C376.201 16264 396.289 16513.4 396.289 16622.6C403.951 16713.6 399.786 16894.3 321.836 16889.2C224.397 16882.8 198.414 16794.1 269.868 16755.9C341.323 16717.6 522.709 16651 529.205 16924.5C534.401 17143.2 471.311 17252.5 406.852 17302C284.597 17388.8 36.6881 17543.5 176.999 17632.5C352.388 17743.8 645.631 17704.4 483.733 18016.1C321.836 18327.8 176.259 18455.3 404.328 18501C571.5 18534.5 629.29 18792.8 447.707 18765C219.5 18730 -105.496 18702.7 276.5 18943.5C539 19109 395.346 19197.3 311 19215.5C36 19275 409.241 19487 492 19471C673.158 19436 582.415 20051 673.158 19885.9C786.586 19679.6 248.926 19793.7 349.363 19949.6C429.712 20074.3 449.8 20323.7 449.8 20432.8C457.461 20523.8 453.297 20704.6 375.346 20699.5C277.908 20693.1 251.925 20604.4 323.379 20566.2C394.834 20527.9 576.219 20461.3 582.715 20734.7C587.912 20953.5 426.314 21048.9 361.855 21098.4C239.599 21185.1 -8.31094 21357.4 132 21446.4C307.389 21557.6 699.141 21532.1 537.244 21843.8C375.347 22155.6 -32.8946 22012.9 323.379 22292.3C679.653 22571.6 752.707 22456.5 674.707 22401C563.814 22322.1 475.283 22683.2 420.318 22864.2C365.353 23045.2 448.464 23069.8 301.708 23166.1C209.826 23226.4 156.198 22991 360.744 23159C565.29 23327 384.707 23400 380.707 23403.5C179.545 23512.7 874.256 23869.3 637.207 23963C340.895 24080.1 59.0469 23940.5 254.423 24233.6",
                stroke: "#FF007F",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }),
            C("div", {
              className: "hero-section",
              id: "hero-section",
              children: C(np, {}),
            }),
            C("div", {
              className: "about-section",
              id: "about-section",
              children: C(ip, { scrollToTopInstance: y }),
            }),
            C("div", {
              className: "about-section",
              id: "skill-section",
              children: C(cp, {}),
            }),
            C(Im, { scrollContainer: o }),
            C("div", {
              className: "featured-section",
              id: "featured-section",
              children: C(Am, { handleShowModal: I }),
            }),
            C("div", {
              className: "journey-section",
              id: "journey-section",
              children: C(fp, {}),
            }),
            C(Tm, {}),
            C(Nm, {}),
            C("div", {
              className: "project-section",
              id: "project-section",
              children: C(up, {
                scrollContainer: o,
                handleShowModal: I,
                handleCloseModal: $,
              }),
            }),
            C(Pm, { scrollContainer: o }),
            C("div", {
              className: "contact-section",
              id: "contact-section",
              children: C(Lm, {}),
            }),
            C(Dm, {}),
          ],
        }),
      }),
    ],
  });
}
e5.createRoot(document.getElementById("root")).render(
  C(ts.StrictMode, { children: C(zm, {}) })
);
