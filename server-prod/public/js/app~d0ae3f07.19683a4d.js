(function (t) {
  function e(e) {
    for (var r, s, i = e[0], u = e[1], l = e[2], c = 0, p = []; c < i.length; c++) s = i[c], a[s] && p.push(a[s][0]), a[s] = 0;for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (t[r] = u[r]);f && f(e);while (p.length) p.shift()();return o.push.apply(o, l || []), n();
  }function n() {
    for (var t, e = 0; e < o.length; e++) {
      for (var n = o[e], r = !0, s = 1; s < n.length; s++) {
        var u = n[s];0 !== a[u] && (r = !1);
      }r && (o.splice(e--, 1), t = i(i.s = n[0]));
    }return t;
  }var r = {},
      a = { "app~d0ae3f07": 0 },
      o = [];function s(t) {
    return i.p + "js/" + ({ "about~6a3582c1": "about~6a3582c1" }[t] || t) + "." + { "about~6a3582c1": "37a86432" }[t] + ".js";
  }function i(e) {
    if (r[e]) return r[e].exports;var n = r[e] = { i: e, l: !1, exports: {} };return t[e].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
  }i.e = function (t) {
    var e = [],
        n = a[t];if (0 !== n) if (n) e.push(n[2]);else {
      var r = new Promise(function (e, r) {
        n = a[t] = [e, r];
      });e.push(n[2] = r);var o,
          u = document.createElement("script");u.charset = "utf-8", u.timeout = 120, i.nc && u.setAttribute("nonce", i.nc), u.src = s(t), o = function (e) {
        u.onerror = u.onload = null, clearTimeout(l);var n = a[t];if (0 !== n) {
          if (n) {
            var r = e && ("load" === e.type ? "missing" : e.type),
                o = e && e.target && e.target.src,
                s = new Error("Loading chunk " + t + " failed.\n(" + r + ": " + o + ")");s.type = r, s.request = o, n[1](s);
          }a[t] = void 0;
        }
      };var l = setTimeout(function () {
        o({ type: "timeout", target: u });
      }, 12e4);u.onerror = u.onload = o, document.head.appendChild(u);
    }return Promise.all(e);
  }, i.m = t, i.c = r, i.d = function (t, e, n) {
    i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
  }, i.r = function (t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;if (4 & e && "object" === typeof t && t && t.__esModule) return t;var n = Object.create(null);if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var r in t) i.d(n, r, function (e) {
      return t[e];
    }.bind(null, r));return n;
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };return i.d(e, "a", e), e;
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, i.p = "/", i.oe = function (t) {
    throw console.error(t), t;
  };var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
      l = u.push.bind(u);u.push = e, u = u.slice();for (var c = 0; c < u.length; c++) e(u[c]);var f = l;o.push([0, "chunk-vendors~253ae210", "chunk-vendors~1c3a2c3f", "chunk-vendors~fdc6512a"]), n();
})({ 0: function (t, e, n) {
    t.exports = n("cd49");
  }, "9b19": function (t, e, n) {
    t.exports = n.p + "img/logo.63a7d78d.svg";
  }, cd49: function (t, e, n) {
    "use strict";
    n.r(e);n("cadf"), n("551c"), n("f751"), n("097d");var r = n("2b0e"),
        a = n("bb71");n("da64");r["a"].use(a["a"], { iconfont: "md" });var o = function () {
      var t = this,
          e = t.$createElement,
          n = t._self._c || e;return n("v-app", [n("v-toolbar", { attrs: { app: "" } }, [n("v-toolbar-title", { staticClass: "headline text-uppercase" }, [n("span", [t._v("Vuetify")]), n("span", { staticClass: "font-weight-light" }, [t._v("MATERIAL DESIGN")])]), n("v-spacer"), n("v-btn", { attrs: { flat: "", href: "https://github.com/vuetifyjs/vuetify/releases/latest", target: "_blank" } }, [n("span", { staticClass: "mr-2" }, [t._v("Latest Release")])])], 1), n("v-content", [n("HelloWorld")], 1)], 1);
    },
        s = [],
        i = function () {
      var t = this,
          e = t.$createElement,
          r = t._self._c || e;return r("v-container", [r("v-layout", { attrs: { "text-xs-center": "", wrap: "" } }, [r("v-flex", { attrs: { xs12: "" } }, [r("v-img", { staticClass: "my-3", attrs: { src: n("9b19"), contain: "", height: "200" } })], 1), r("v-flex", { attrs: { "mb-4": "" } }, [r("h1", { staticClass: "display-2 font-weight-bold mb-3" }, [t._v("\n        Welcome to Vuetify\n      ")]), r("p", { staticClass: "subheading font-weight-regular" }, [t._v("\n        For help and collaboration with other Vuetify developers,\n        "), r("br"), t._v("please join our online\n        "), r("a", { attrs: { href: "https://community.vuetifyjs.com", target: "_blank" } }, [t._v("Discord Community")])])]), r("v-flex", { attrs: { "mb-5": "", xs12: "" } }, [r("h2", { staticClass: "headline font-weight-bold mb-3" }, [t._v("What's next?")]), r("v-layout", { attrs: { "justify-center": "" } }, t._l(t.whatsNext, function (e, n) {
        return r("a", { key: n, staticClass: "subheading mx-3", attrs: { href: e.href, target: "_blank" } }, [t._v("\n          " + t._s(e.text) + "\n        ")]);
      }), 0)], 1), r("v-flex", { attrs: { xs12: "", "mb-5": "" } }, [r("h2", { staticClass: "headline font-weight-bold mb-3" }, [t._v("Important Links")]), r("v-layout", { attrs: { "justify-center": "" } }, t._l(t.importantLinks, function (e, n) {
        return r("a", { key: n, staticClass: "subheading mx-3", attrs: { href: e.href, target: "_blank" } }, [t._v("\n          " + t._s(e.text) + "\n        ")]);
      }), 0)], 1), r("v-flex", { attrs: { xs12: "", "mb-5": "" } }, [r("h2", { staticClass: "headline font-weight-bold mb-3" }, [t._v("Ecosystem")]), r("v-layout", { attrs: { "justify-center": "" } }, t._l(t.ecosystem, function (e, n) {
        return r("a", { key: n, staticClass: "subheading mx-3", attrs: { href: e.href, target: "_blank" } }, [t._v("\n          " + t._s(e.text) + "\n        ")]);
      }), 0)], 1)], 1)], 1);
    },
        u = [],
        l = { data: function () {
        return { ecosystem: [{ text: "vuetify-loader", href: "https://github.com/vuetifyjs/vuetify-loader" }, { text: "github", href: "https://github.com/vuetifyjs/vuetify" }, { text: "awesome-vuetify", href: "https://github.com/vuetifyjs/awesome-vuetify" }], importantLinks: [{ text: "Documentation", href: "https://vuetifyjs.com" }, { text: "Chat", href: "https://community.vuetifyjs.com" }, { text: "Made with Vuetify", href: "https://madewithvuetifyjs.com" }, { text: "Twitter", href: "https://twitter.com/vuetifyjs" }, { text: "Articles", href: "https://medium.com/vuetify" }], whatsNext: [{ text: "Explore components", href: "https://vuetifyjs.com/components/api-explorer" }, { text: "Select a layout", href: "https://vuetifyjs.com/layout/pre-defined" }, { text: "Frequently Asked Questions", href: "https://vuetifyjs.com/getting-started/frequently-asked-questions" }] };
      } },
        c = l,
        f = n("2877"),
        p = n("6544"),
        h = n.n(p),
        v = n("a523"),
        d = n("0e8f"),
        m = n("adda"),
        b = n("a722"),
        y = Object(f["a"])(c, i, u, !1, null, null, null),
        g = y.exports;h()(y, { VContainer: v["a"], VFlex: d["a"], VImg: m["a"], VLayout: b["a"] });var x = { name: "App", components: { HelloWorld: g }, data: function () {
        return {};
      } },
        _ = x,
        j = n("7496"),
        w = n("8336"),
        k = n("549c"),
        C = n("9910"),
        O = n("71d9"),
        V = n("2a7f"),
        T = Object(f["a"])(_, o, s, !1, null, null, null),
        E = T.exports;h()(T, { VApp: j["a"], VBtn: w["a"], VContent: k["a"], VSpacer: C["a"], VToolbar: O["a"], VToolbarTitle: V["a"] });var S = n("8c4f"),
        A = function () {
      var t = this,
          e = t.$createElement,
          r = t._self._c || e;return r("div", { staticClass: "home" }, [r("img", { attrs: { alt: "Vue logo", src: n("cf05") } }), r("HelloWorld", { attrs: { msg: "Welcome to Your Vue.js + TypeScript App" } })], 1);
    },
        P = [],
        L = n("d225"),
        W = n("308d"),
        M = n("6bb5"),
        q = n("4e2b"),
        H = n("9ab4"),
        I = n("60a3"),
        $ = function (t) {
      function e() {
        return Object(L["a"])(this, e), Object(W["a"])(this, Object(M["a"])(e).apply(this, arguments));
      }return Object(q["a"])(e, t), e;
    }(I["b"]);$ = H["a"]([Object(I["a"])({ components: { HelloWorld: g } })], $);var D = $,
        F = D,
        N = Object(f["a"])(F, A, P, !1, null, null, null),
        J = N.exports;r["a"].use(S["a"]);var R = new S["a"]({ mode: "history", base: "/", routes: [{ path: "/", name: "home", component: J }, { path: "/about", name: "about", component: function () {
          return n.e("about~6a3582c1").then(n.bind(null, "f820"));
        } }] });r["a"].config.productionTip = !1, new r["a"]({ router: R, render: function (t) {
        return t(E);
      } }).$mount("#app");
  }, cf05: function (t, e, n) {
    t.exports = n.p + "img/logo.82b9c7a5.png";
  } });
//# sourceMappingURL=app~d0ae3f07.19683a4d.js.map