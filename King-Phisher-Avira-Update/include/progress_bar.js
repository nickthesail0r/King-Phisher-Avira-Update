! function(e, t) {
    function n(e) {
        var t, n, r = B[e] = {};
        for (e = e.split(/\s+/), t = 0, n = e.length; n > t; t++) r[e[t]] = !0;
        return r
    }

    function r(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(q, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : H.isNumeric(r) ? parseFloat(r) : $.test(r) ? H.parseJSON(r) : r
                } catch (o) {}
                H.data(e, n, r)
            } else r = t
        }
        return r
    }

    function i(e) {
        for (var t in e)
            if (("data" !== t || !H.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function o(e, t, n) {
        var r = t + "defer",
            i = t + "queue",
            o = t + "mark",
            a = H._data(e, r);
        !a || "queue" !== n && H._data(e, i) || "mark" !== n && H._data(e, o) || setTimeout(function() {
            H._data(e, i) || H._data(e, o) || (H.removeData(e, r, !0), a.fire())
        }, 0)
    }

    function a() {
        return !1
    }

    function s() {
        return !0
    }

    function l(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }

    function u(e, t, n) {
        if (t = t || 0, H.isFunction(t)) return H.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return H.grep(e, function(e, r) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = H.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (fe.test(t)) return H.filter(t, r, !n);
            t = H.filter(t, r)
        }
        return H.grep(e, function(e, r) {
            return H.inArray(e, t) >= 0 === n
        })
    }

    function c(e) {
        var t = me.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function f(e, t) {
        return H.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function d(e, t) {
        if (1 === t.nodeType && H.hasData(e)) {
            var n, r, i, o = H._data(e),
                a = H._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) H.event.add(t, n + (s[n][r].namespace ? "." : "") + s[n][r].namespace, s[n][r], s[n][r].data)
            }
            a.data && (a.data = H.extend({}, a.data))
        }
    }

    function p(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? t.outerHTML = e.outerHTML : "input" !== n || "checkbox" !== e.type && "radio" !== e.type ? "option" === n ? t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(H.expando))
    }

    function h(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
    }

    function m(e) {
        ("checkbox" === e.type || "radio" === e.type) && (e.defaultChecked = e.checked)
    }

    function g(e) {
        var t = (e.nodeName || "").toLowerCase();
        "input" === t ? m(e) : "script" !== t && "undefined" != typeof e.getElementsByTagName && H.grep(e.getElementsByTagName("input"), m)
    }

    function y(e) {
        var t = M.createElement("div");
        return Le.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild
    }

    function v(e, t) {
        t.src ? H.ajax({
            url: t.src,
            async: !1,
            dataType: "script"
        }) : H.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Se, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
    }

    function b(e, t, n) {
        var r = "width" === t ? e.offsetWidth : e.offsetHeight,
            i = "width" === t ? qe : Ie,
            o = 0,
            a = i.length;
        if (r > 0) {
            if ("border" !== n)
                for (; a > o; o++) n || (r -= parseFloat(H.css(e, "padding" + i[o])) || 0), "margin" === n ? r += parseFloat(H.css(e, n + i[o])) || 0 : r -= parseFloat(H.css(e, "border" + i[o] + "Width")) || 0;
            return r + "px"
        }
        if (r = je(e, t, t), (0 > r || null == r) && (r = e.style[t] || 0), r = parseFloat(r) || 0, n)
            for (; a > o; o++) r += parseFloat(H.css(e, "padding" + i[o])) || 0, "padding" !== n && (r += parseFloat(H.css(e, "border" + i[o] + "Width")) || 0), "margin" === n && (r += parseFloat(H.css(e, n + i[o])) || 0);
        return r + "px"
    }

    function x(e) {
        return function(t, n) {
            if ("string" != typeof t && (n = t, t = "*"), H.isFunction(n))
                for (var r, i, o, a = t.toLowerCase().split(nt), s = 0, l = a.length; l > s; s++) r = a[s], o = /^\+/.test(r), o && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[o ? "unshift" : "push"](n)
        }
    }

    function w(e, n, r, i, o, a) {
        o = o || n.dataTypes[0], a = a || {}, a[o] = !0;
        for (var s, l = e[o], u = 0, c = l ? l.length : 0, f = e === at; c > u && (f || !s); u++) s = l[u](n, r, i), "string" == typeof s && (!f || a[s] ? s = t : (n.dataTypes.unshift(s), s = w(e, n, r, i, s, a)));
        return !f && s || a["*"] || (s = w(e, n, r, i, "*", a)), s
    }

    function T(e, n) {
        var r, i, o = H.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        i && H.extend(!0, e, i)
    }

    function N(e, t, n, r) {
        if (H.isArray(t)) H.each(t, function(t, i) {
            n || ze.test(e) ? r(e, i) : N(e + "[" + ("object" == typeof i || H.isArray(i) ? t : "") + "]", i, n, r)
        });
        else if (n || null == t || "object" != typeof t) r(e, t);
        else
            for (var i in t) N(e + "[" + i + "]", t[i], n, r)
    }

    function C(e, n, r) {
        var i, o, a, s, l = e.contents,
            u = e.dataTypes,
            c = e.responseFields;
        for (o in c) o in r && (n[c[o]] = r[o]);
        for (;
            "*" === u[0];) u.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i)
            for (o in l)
                if (l[o] && l[o].test(i)) {
                    u.unshift(o);
                    break
                }
        if (u[0] in r) a = u[0];
        else {
            for (o in r) {
                if (!u[0] || e.converters[o + " " + u[0]]) {
                    a = o;
                    break
                }
                s || (s = o)
            }
            a = a || s
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : void 0
    }

    function E(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var r, i, o, a, s, l, u, c, f = e.dataTypes,
            d = {},
            p = f.length,
            h = f[0];
        for (r = 1; p > r; r++) {
            if (1 === r)
                for (i in e.converters) "string" == typeof i && (d[i.toLowerCase()] = e.converters[i]);
            if (a = h, h = f[r], "*" === h) h = a;
            else if ("*" !== a && a !== h) {
                if (s = a + " " + h, l = d[s] || d["* " + h], !l) {
                    c = t;
                    for (u in d)
                        if (o = u.split(" "), (o[0] === a || "*" === o[0]) && (c = d[o[1] + " " + h])) {
                            u = d[u], u === !0 ? l = c : c === !0 && (l = u);
                            break
                        }
                }
                l || c || H.error("No conversion from " + s.replace(" ", " to ")), l !== !0 && (n = l ? l(n) : c(u(n)))
            }
        }
        return n
    }

    function k() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function S() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function A() {
        return setTimeout(L, 0), vt = H.now()
    }

    function L() {
        vt = t
    }

    function j(e, t) {
        var n = {};
        return H.each(Tt.concat.apply([], Tt.slice(0, t)), function() {
            n[this] = e
        }), n
    }

    function F(e) {
        if (!bt[e]) {
            var t = M.body,
                n = H("<" + e + ">").appendTo(t),
                r = n.css("display");
            n.remove(), ("none" === r || "" === r) && (mt || (mt = M.createElement("iframe"), mt.frameBorder = mt.width = mt.height = 0), t.appendChild(mt), gt && mt.createElement || (gt = (mt.contentWindow || mt.contentDocument).document, gt.write(("CSS1Compat" === M.compatMode ? "<!doctype html>" : "") + "<html><body>"), gt.close()), n = gt.createElement(e), gt.body.appendChild(n), r = H.css(n, "display"), t.removeChild(mt)), bt[e] = r
        }
        return bt[e]
    }

    function D(e) {
        return H.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var M = e.document,
        O = e.navigator,
        _ = e.location,
        H = function() {
            function n() {
                if (!s.isReady) {
                    try {
                        M.documentElement.doScroll("left")
                    } catch (e) {
                        return void setTimeout(n, 1)
                    }
                    s.ready()
                }
            }
            var r, i, o, a, s = function(e, t) {
                    return new s.fn.init(e, t, r)
                },
                l = e.jQuery,
                u = e.$,
                c = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                f = /\S/,
                d = /^\s+/,
                p = /\s+$/,
                h = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                m = /^[\],:{}\s]*$/,
                g = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                y = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                v = /(?:^|:|,)(?:\s*\[)+/g,
                b = /(webkit)[ \/]([\w.]+)/,
                x = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                w = /(msie) ([\w.]+)/,
                T = /(mozilla)(?:.*? rv:([\w.]+))?/,
                N = /-([a-z]|[0-9])/gi,
                C = /^-ms-/,
                E = function(e, t) {
                    return (t + "").toUpperCase()
                },
                k = O.userAgent,
                S = Object.prototype.toString,
                A = Object.prototype.hasOwnProperty,
                L = Array.prototype.push,
                j = Array.prototype.slice,
                F = String.prototype.trim,
                D = Array.prototype.indexOf,
                _ = {};
            return s.fn = s.prototype = {
                constructor: s,
                init: function(e, n, r) {
                    var i, o, a, l;
                    if (!e) return this;
                    if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                    if ("body" === e && !n && M.body) return this.context = M, this[0] = M.body, this.selector = e, this.length = 1, this;
                    if ("string" == typeof e) {
                        if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : c.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                        if (i[1]) return n = n instanceof s ? n[0] : n, l = n ? n.ownerDocument || n : M, a = h.exec(e), a ? s.isPlainObject(n) ? (e = [M.createElement(a[1])], s.fn.attr.call(e, n, !0)) : e = [l.createElement(a[1])] : (a = s.buildFragment([i[1]], [l]), e = (a.cacheable ? s.clone(a.fragment) : a.fragment).childNodes), s.merge(this, e);
                        if (o = M.getElementById(i[2]), o && o.parentNode) {
                            if (o.id !== i[2]) return r.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = M, this.selector = e, this
                    }
                    return s.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), s.makeArray(e, this))
                },
                selector: "",
                jquery: "1.7.1",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return j.call(this, 0)
                },
                get: function(e) {
                    return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                },
                pushStack: function(e, t, n) {
                    var r = this.constructor();
                    return s.isArray(e) ? L.apply(r, e) : s.merge(r, e), r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
                },
                each: function(e, t) {
                    return s.each(this, e, t)
                },
                ready: function(e) {
                    return s.bindReady(), o.add(e), this
                },
                eq: function(e) {
                    return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(j.apply(this, arguments), "slice", j.call(arguments).join(","))
                },
                map: function(e) {
                    return this.pushStack(s.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: L,
                sort: [].sort,
                splice: [].splice
            }, s.fn.init.prototype = s.fn, s.extend = s.fn.extend = function() {
                var e, n, r, i, o, a, l = arguments[0] || {},
                    u = 1,
                    c = arguments.length,
                    f = !1;
                for ("boolean" == typeof l && (f = l, l = arguments[1] || {}, u = 2), "object" == typeof l || s.isFunction(l) || (l = {}), c === u && (l = this, --u); c > u; u++)
                    if (null != (e = arguments[u]))
                        for (n in e) r = l[n], i = e[n], l !== i && (f && i && (s.isPlainObject(i) || (o = s.isArray(i))) ? (o ? (o = !1, a = r && s.isArray(r) ? r : []) : a = r && s.isPlainObject(r) ? r : {}, l[n] = s.extend(f, a, i)) : i !== t && (l[n] = i));
                return l
            }, s.extend({
                noConflict: function(t) {
                    return e.$ === s && (e.$ = u), t && e.jQuery === s && (e.jQuery = l), s
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? s.readyWait++ : s.ready(!0)
                },
                ready: function(e) {
                    if (e === !0 && !--s.readyWait || e !== !0 && !s.isReady) {
                        if (!M.body) return setTimeout(s.ready, 1);
                        if (s.isReady = !0, e !== !0 && --s.readyWait > 0) return;
                        o.fireWith(M, [s]), s.fn.trigger && s(M).trigger("ready").off("ready")
                    }
                },
                bindReady: function() {
                    if (!o) {
                        if (o = s.Callbacks("once memory"), "complete" === M.readyState) return setTimeout(s.ready, 1);
                        if (M.addEventListener) M.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", s.ready, !1);
                        else if (M.attachEvent) {
                            M.attachEvent("onreadystatechange", a), e.attachEvent("onload", s.ready);
                            var t = !1;
                            try {
                                t = null == e.frameElement
                            } catch (r) {}
                            M.documentElement.doScroll && t && n()
                        }
                    }
                },
                isFunction: function(e) {
                    return "function" === s.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === s.type(e)
                },
                isWindow: function(e) {
                    return e && "object" == typeof e && "setInterval" in e
                },
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? String(e) : _[S.call(e)] || "object"
                },
                isPlainObject: function(e) {
                    if (!e || "object" !== s.type(e) || e.nodeType || s.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !A.call(e, "constructor") && !A.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    var r;
                    for (r in e);
                    return r === t || A.call(e, r)
                },
                isEmptyObject: function(e) {
                    for (var t in e) return !1;
                    return !0
                },
                error: function(e) {
                    throw new Error(e)
                },
                parseJSON: function(t) {
                    return "string" == typeof t && t ? (t = s.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : m.test(t.replace(g, "@").replace(y, "]").replace(v, "")) ? new Function("return " + t)() : void s.error("Invalid JSON: " + t)) : null
                },
                parseXML: function(n) {
                    var r, i;
                    try {
                        e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                    } catch (o) {
                        r = t
                    }
                    return r && r.documentElement && !r.getElementsByTagName("parsererror").length || s.error("Invalid XML: " + n), r
                },
                noop: function() {},
                globalEval: function(t) {
                    t && f.test(t) && (e.execScript || function(t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function(e) {
                    return e.replace(C, "ms-").replace(N, E)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                },
                each: function(e, n, r) {
                    var i, o = 0,
                        a = e.length,
                        l = a === t || s.isFunction(e);
                    if (r)
                        if (l) {
                            for (i in e)
                                if (n.apply(e[i], r) === !1) break
                        } else
                            for (; a > o && n.apply(e[o++], r) !== !1;);
                    else if (l) {
                        for (i in e)
                            if (n.call(e[i], i, e[i]) === !1) break
                    } else
                        for (; a > o && n.call(e[o], o, e[o++]) !== !1;);
                    return e
                },
                trim: F ? function(e) {
                    return null == e ? "" : F.call(e)
                } : function(e) {
                    return null == e ? "" : e.toString().replace(d, "").replace(p, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    if (null != e) {
                        var r = s.type(e);
                        null == e.length || "string" === r || "function" === r || "regexp" === r || s.isWindow(e) ? L.call(n, e) : s.merge(n, e)
                    }
                    return n
                },
                inArray: function(e, t, n) {
                    var r;
                    if (t) {
                        if (D) return D.call(t, e, n);
                        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function(e, n) {
                    var r = e.length,
                        i = 0;
                    if ("number" == typeof n.length)
                        for (var o = n.length; o > i; i++) e[r++] = n[i];
                    else
                        for (; n[i] !== t;) e[r++] = n[i++];
                    return e.length = r, e
                },
                grep: function(e, t, n) {
                    var r, i = [];
                    n = !!n;
                    for (var o = 0, a = e.length; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
                    return i
                },
                map: function(e, n, r) {
                    var i, o, a = [],
                        l = 0,
                        u = e.length,
                        c = e instanceof s || u !== t && "number" == typeof u && (u > 0 && e[0] && e[u - 1] || 0 === u || s.isArray(e));
                    if (c)
                        for (; u > l; l++) i = n(e[l], l, r), null != i && (a[a.length] = i);
                    else
                        for (o in e) i = n(e[o], o, r), null != i && (a[a.length] = i);
                    return a.concat.apply([], a)
                },
                guid: 1,
                proxy: function(e, n) {
                    if ("string" == typeof n) {
                        var r = e[n];
                        n = e, e = r
                    }
                    if (!s.isFunction(e)) return t;
                    var i = j.call(arguments, 2),
                        o = function() {
                            return e.apply(n, i.concat(j.call(arguments)))
                        };
                    return o.guid = e.guid = e.guid || o.guid || s.guid++, o
                },
                access: function(e, n, r, i, o, a) {
                    var l = e.length;
                    if ("object" == typeof n) {
                        for (var u in n) s.access(e, u, n[u], i, o, r);
                        return e
                    }
                    if (r !== t) {
                        i = !a && i && s.isFunction(r);
                        for (var c = 0; l > c; c++) o(e[c], n, i ? r.call(e[c], c, o(e[c], n)) : r, a);
                        return e
                    }
                    return l ? o(e[0], n) : t
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(e) {
                    e = e.toLowerCase();
                    var t = b.exec(e) || x.exec(e) || w.exec(e) || e.indexOf("compatible") < 0 && T.exec(e) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                },
                sub: function() {
                    function e(t, n) {
                        return new e.fn.init(t, n)
                    }
                    s.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, r) {
                        return r && r instanceof s && !(r instanceof e) && (r = e(r)), s.fn.init.call(this, n, r, t)
                    }, e.fn.init.prototype = e.fn;
                    var t = e(M);
                    return e
                },
                browser: {}
            }), s.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
                _["[object " + t + "]"] = t.toLowerCase()
            }), i = s.uaMatch(k), i.browser && (s.browser[i.browser] = !0, s.browser.version = i.version), s.browser.webkit && (s.browser.safari = !0), f.test(" ") && (d = /^[\s\xA0]+/, p = /[\s\xA0]+$/), r = s(M), M.addEventListener ? a = function() {
                M.removeEventListener("DOMContentLoaded", a, !1), s.ready()
            } : M.attachEvent && (a = function() {
                "complete" === M.readyState && (M.detachEvent("onreadystatechange", a), s.ready())
            }), s
        }(),
        B = {};
    H.Callbacks = function(e) {
        e = e ? B[e] || n(e) : {};
        var r, i, o, a, s, l = [],
            u = [],
            c = function(t) {
                var n, r, i, o;
                for (n = 0, r = t.length; r > n; n++) i = t[n], o = H.type(i), "array" === o ? c(i) : "function" === o && (e.unique && d.has(i) || l.push(i))
            },
            f = function(t, n) {
                for (n = n || [], r = !e.memory || [t, n], i = !0, s = o || 0, o = 0, a = l.length; l && a > s; s++)
                    if (l[s].apply(t, n) === !1 && e.stopOnFalse) {
                        r = !0;
                        break
                    }
                i = !1, l && (e.once ? r === !0 ? d.disable() : l = [] : u && u.length && (r = u.shift(), d.fireWith(r[0], r[1])))
            },
            d = {
                add: function() {
                    if (l) {
                        var e = l.length;
                        c(arguments), i ? a = l.length : r && r !== !0 && (o = e, f(r[0], r[1]))
                    }
                    return this
                },
                remove: function() {
                    if (l)
                        for (var t = arguments, n = 0, r = t.length; r > n; n++)
                            for (var o = 0; o < l.length && (t[n] !== l[o] || (i && a >= o && (a--, s >= o && s--), l.splice(o--, 1), !e.unique)); o++);
                    return this
                },
                has: function(e) {
                    if (l)
                        for (var t = 0, n = l.length; n > t; t++)
                            if (e === l[t]) return !0;
                    return !1
                },
                empty: function() {
                    return l = [], this
                },
                disable: function() {
                    return l = u = r = t, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = t, r && r !== !0 || d.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(t, n) {
                    return u && (i ? e.once || u.push([t, n]) : e.once && r || f(t, n)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return d
    };
    var P = [].slice;
    H.extend({
        Deferred: function(e) {
            var t, n = H.Callbacks("once memory"),
                r = H.Callbacks("once memory"),
                i = H.Callbacks("memory"),
                o = "pending",
                a = {
                    resolve: n,
                    reject: r,
                    notify: i
                },
                s = {
                    done: n.add,
                    fail: r.add,
                    progress: i.add,
                    state: function() {
                        return o
                    },
                    isResolved: n.fired,
                    isRejected: r.fired,
                    then: function(e, t, n) {
                        return l.done(e).fail(t).progress(n), this
                    },
                    always: function() {
                        return l.done.apply(l, arguments).fail.apply(l, arguments), this
                    },
                    pipe: function(e, t, n) {
                        return H.Deferred(function(r) {
                            H.each({
                                done: [e, "resolve"],
                                fail: [t, "reject"],
                                progress: [n, "notify"]
                            }, function(e, t) {
                                var n, i = t[0],
                                    o = t[1];
                                l[e](H.isFunction(i) ? function() {
                                    n = i.apply(this, arguments), n && H.isFunction(n.promise) ? n.promise().then(r.resolve, r.reject, r.notify) : r[o + "With"](this === l ? r : this, [n])
                                } : r[o])
                            })
                        }).promise()
                    },
                    promise: function(e) {
                        if (null == e) e = s;
                        else
                            for (var t in s) e[t] = s[t];
                        return e
                    }
                },
                l = s.promise({});
            for (t in a) l[t] = a[t].fire, l[t + "With"] = a[t].fireWith;
            return l.done(function() {
                o = "resolved"
            }, r.disable, i.lock).fail(function() {
                o = "rejected"
            }, n.disable, i.lock), e && e.call(l, l), l
        },
        when: function(e) {
            function t(e) {
                return function(t) {
                    r[e] = arguments.length > 1 ? P.call(arguments, 0) : t, --s || l.resolveWith(l, r)
                }
            }

            function n(e) {
                return function(t) {
                    a[e] = arguments.length > 1 ? P.call(arguments, 0) : t, l.notifyWith(u, a)
                }
            }
            var r = P.call(arguments, 0),
                i = 0,
                o = r.length,
                a = new Array(o),
                s = o,
                l = 1 >= o && e && H.isFunction(e.promise) ? e : H.Deferred(),
                u = l.promise();
            if (o > 1) {
                for (; o > i; i++) r[i] && r[i].promise && H.isFunction(r[i].promise) ? r[i].promise().then(t(i), l.reject, n(i)) : --s;
                s || l.resolveWith(l, r)
            } else l !== e && l.resolveWith(l, o ? [e] : []);
            return u
        }
    }), H.support = function() {
        {
            var t, n, r, i, o, a, s, l, u, c, f, d, p = M.createElement("div");
            M.documentElement
        }
        if (p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0], !n || !n.length || !r) return {};
        i = M.createElement("select"), o = i.appendChild(M.createElement("option")), a = p.getElementsByTagName("input")[0], t = {
            leadingWhitespace: 3 === p.firstChild.nodeType,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.55/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: "on" === a.value,
            optSelected: o.selected,
            getSetAttribute: "t" !== p.className,
            enctype: !!M.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== M.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (h) {
            t.deleteExpando = !1
        }
        if (!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function() {
                t.noCloneEvent = !1
            }), p.cloneNode(!0).fireEvent("onclick")), a = M.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), p.appendChild(a), l = M.createDocumentFragment(), l.appendChild(p.lastChild), t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, l.removeChild(a), l.appendChild(p), p.innerHTML = "", e.getComputedStyle && (s = M.createElement("div"), s.style.width = "0", s.style.marginRight = "0", p.style.width = "2px", p.appendChild(s), t.reliableMarginRight = 0 === (parseInt((e.getComputedStyle(s, null) || {
                marginRight: 0
            }).marginRight, 10) || 0)), p.attachEvent)
            for (f in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                }) c = "on" + f, d = c in p, d || (p.setAttribute(c, "return;"), d = "function" == typeof p[c]), t[f + "Bubbles"] = d;
        return l.removeChild(p), l = i = o = s = p = a = null, H(function() {
            var e, n, r, i, o, a, s, l, c, f, h = M.getElementsByTagName("body")[0];
            h && (a = 1, s = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", l = "visibility:hidden;border:0;", c = "style='" + s + "border:5px solid #000;padding:0;'", f = "<div " + c + "><div></div></div><table " + c + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", e = M.createElement("div"), e.style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:" + a + "px", h.insertBefore(e, h.firstChild), p = M.createElement("div"), e.appendChild(p), p.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", u = p.getElementsByTagName("td"), d = 0 === u[0].offsetHeight, u[0].style.display = "", u[1].style.display = "none", t.reliableHiddenOffsets = d && 0 === u[0].offsetHeight, p.innerHTML = "", p.style.width = p.style.paddingLeft = "1px", H.boxModel = t.boxModel = 2 === p.offsetWidth, "undefined" != typeof p.style.zoom && (p.style.display = "inline", p.style.zoom = 1, t.inlineBlockNeedsLayout = 2 === p.offsetWidth, p.style.display = "", p.innerHTML = "<div style='width:4px;'></div>", t.shrinkWrapBlocks = 2 !== p.offsetWidth), p.style.cssText = s + l, p.innerHTML = f, n = p.firstChild, r = n.firstChild, i = n.nextSibling.firstChild.firstChild, o = {
                doesNotAddBorder: 5 !== r.offsetTop,
                doesAddBorderForTableAndCells: 5 === i.offsetTop
            }, r.style.position = "fixed", r.style.top = "20px", o.fixedPosition = 20 === r.offsetTop || 15 === r.offsetTop, r.style.position = r.style.top = "", n.style.overflow = "hidden", n.style.position = "relative", o.subtractsBorderForOverflowNotVisible = -5 === r.offsetTop, o.doesNotIncludeMarginInBodyOffset = h.offsetTop !== a, h.removeChild(e), p = e = null, H.extend(t, o))
        }), t
    }();
    var $ = /^(?:\{.*\}|\[.*\])$/,
        q = /([A-Z])/g;
    H.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (H.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? H.cache[e[H.expando]] : e[H.expando], !!e && !i(e)
        },
        data: function(e, n, r, i) {
            if (H.acceptData(e)) {
                var o, a, s, l = H.expando,
                    u = "string" == typeof n,
                    c = e.nodeType,
                    f = c ? H.cache : e,
                    d = c ? e[l] : e[l] && l,
                    p = "events" === n;
                if (d && f[d] && (p || i || f[d].data) || !u || r !== t) return d || (c ? e[l] = d = ++H.uuid : d = l), f[d] || (f[d] = {}, c || (f[d].toJSON = H.noop)), ("object" == typeof n || "function" == typeof n) && (i ? f[d] = H.extend(f[d], n) : f[d].data = H.extend(f[d].data, n)), o = a = f[d], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[H.camelCase(n)] = r), p && !a[n] ? o.events : (u ? (s = a[n], null == s && (s = a[H.camelCase(n)])) : s = a, s)
            }
        },
        removeData: function(e, t, n) {
            if (H.acceptData(e)) {
                var r, o, a, s = H.expando,
                    l = e.nodeType,
                    u = l ? H.cache : e,
                    c = l ? e[s] : s;
                if (u[c]) {
                    if (t && (r = n ? u[c] : u[c].data)) {
                        H.isArray(t) || (t in r ? t = [t] : (t = H.camelCase(t), t = t in r ? [t] : t.split(" ")));
                        for (o = 0, a = t.length; a > o; o++) delete r[t[o]];
                        if (!(n ? i : H.isEmptyObject)(r)) return
                    }(n || (delete u[c].data, i(u[c]))) && (H.support.deleteExpando || !u.setInterval ? delete u[c] : u[c] = null, l && (H.support.deleteExpando ? delete e[s] : e.removeAttribute ? e.removeAttribute(s) : e[s] = null))
                }
            }
        },
        _data: function(e, t, n) {
            return H.data(e, t, n, !0)
        },
        acceptData: function(e) {
            if (e.nodeName) {
                var t = H.noData[e.nodeName.toLowerCase()];
                if (t) return !(t === !0 || e.getAttribute("classid") !== t)
            }
            return !0
        }
    }), H.fn.extend({
        data: function(e, n) {
            var i, o, a, s = null;
            if ("undefined" == typeof e) {
                if (this.length && (s = H.data(this[0]), 1 === this[0].nodeType && !H._data(this[0], "parsedAttrs"))) {
                    o = this[0].attributes;
                    for (var l = 0, u = o.length; u > l; l++) a = o[l].name, 0 === a.indexOf("data-") && (a = H.camelCase(a.substring(5)), r(this[0], a, s[a]));
                    H._data(this[0], "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function() {
                H.data(this, e)
            }) : (i = e.split("."), i[1] = i[1] ? "." + i[1] : "", n === t ? (s = this.triggerHandler("getData" + i[1] + "!", [i[0]]), s === t && this.length && (s = H.data(this[0], e), s = r(this[0], e, s)), s === t && i[1] ? this.data(i[0]) : s) : this.each(function() {
                var t = H(this),
                    r = [i[0], n];
                t.triggerHandler("setData" + i[1] + "!", r), H.data(this, e, n), t.triggerHandler("changeData" + i[1] + "!", r)
            }))
        },
        removeData: function(e) {
            return this.each(function() {
                H.removeData(this, e)
            })
        }
    }), H.extend({
        _mark: function(e, t) {
            e && (t = (t || "fx") + "mark", H._data(e, t, (H._data(e, t) || 0) + 1))
        },
        _unmark: function(e, t, n) {
            if (e !== !0 && (n = t, t = e, e = !1), t) {
                n = n || "fx";
                var r = n + "mark",
                    i = e ? 0 : (H._data(t, r) || 1) - 1;
                i ? H._data(t, r, i) : (H.removeData(t, r, !0), o(t, n, "mark"))
            }
        },
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = H._data(e, t), n && (!r || H.isArray(n) ? r = H._data(e, t, H.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = H.queue(e, t),
                r = n.shift(),
                i = {};
            "inprogress" === r && (r = n.shift()), r && ("fx" === t && n.unshift("inprogress"), H._data(e, t + ".run", i), r.call(e, function() {
                H.dequeue(e, t)
            }, i)), n.length || (H.removeData(e, t + "queue " + t + ".run", !0), o(e, t, "queue"))
        }
    }), H.fn.extend({
        queue: function(e, n) {
            return "string" != typeof e && (n = e, e = "fx"), n === t ? H.queue(this[0], e) : this.each(function() {
                var t = H.queue(this, e, n);
                "fx" === e && "inprogress" !== t[0] && H.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                H.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = H.fx ? H.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            function r() {
                --l || o.resolveWith(a, [a])
            }
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            for (var i, o = H.Deferred(), a = this, s = a.length, l = 1, u = e + "defer", c = e + "queue", f = e + "mark"; s--;)(i = H.data(a[s], u, t, !0) || (H.data(a[s], c, t, !0) || H.data(a[s], f, t, !0)) && H.data(a[s], u, H.Callbacks("once memory"), !0)) && (l++, i.add(r));
            return r(), o.promise()
        }
    });
    var I, W, R, X = /[\n\t\r]/g,
        z = /\s+/,
        V = /\r/g,
        U = /^(?:button|input)$/i,
        G = /^(?:button|input|object|select|textarea)$/i,
        J = /^a(?:rea)?$/i,
        Q = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Y = H.support.getSetAttribute;
    H.fn.extend({
        attr: function(e, t) {
            return H.access(this, e, t, !0, H.attr)
        },
        removeAttr: function(e) {
            return this.each(function() {
                H.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return H.access(this, e, t, !0, H.prop)
        },
        removeProp: function(e) {
            return e = H.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a, s;
            if (H.isFunction(e)) return this.each(function(t) {
                H(this).addClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e)
                for (t = e.split(z), n = 0, r = this.length; r > n; n++)
                    if (i = this[n], 1 === i.nodeType)
                        if (i.className || 1 !== t.length) {
                            for (o = " " + i.className + " ", a = 0, s = t.length; s > a; a++) ~o.indexOf(" " + t[a] + " ") || (o += t[a] + " ");
                            i.className = H.trim(o)
                        } else i.className = e;
            return this
        },
        removeClass: function(e) {
            var n, r, i, o, a, s, l;
            if (H.isFunction(e)) return this.each(function(t) {
                H(this).removeClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e || e === t)
                for (n = (e || "").split(z), r = 0, i = this.length; i > r; r++)
                    if (o = this[r], 1 === o.nodeType && o.className)
                        if (e) {
                            for (a = (" " + o.className + " ").replace(X, " "), s = 0, l = n.length; l > s; s++) a = a.replace(" " + n[s] + " ", " ");
                            o.className = H.trim(a)
                        } else o.className = "";
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return this.each(H.isFunction(e) ? function(n) {
                H(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n)
                    for (var i, o = 0, a = H(this), s = t, l = e.split(z); i = l[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);
                else("undefined" === n || "boolean" === n) && (this.className && H._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : H._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) > -1) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = H.isFunction(e), this.each(function(r) {
                    var o, a = H(this);
                    1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : H.isArray(o) && (o = H.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), n = H.valHooks[this.nodeName.toLowerCase()] || H.valHooks[this.type], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return n = H.valHooks[o.nodeName.toLowerCase()] || H.valHooks[o.type], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(V, "") : null == r ? "" : r)
            }
        }
    }), H.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i, o = e.selectedIndex,
                        a = [],
                        s = e.options,
                        l = "select-one" === e.type;
                    if (0 > o) return null;
                    for (n = l ? o : 0, r = l ? o + 1 : s.length; r > n; n++)
                        if (i = s[n], !(!i.selected || (H.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && H.nodeName(i.parentNode, "optgroup"))) {
                            if (t = H(i).val(), l) return t;
                            a.push(t)
                        }
                    return l && !a.length && s.length ? H(s[o]).val() : a
                },
                set: function(e, t) {
                    var n = H.makeArray(t);
                    return H(e).find("option").each(function() {
                        this.selected = H.inArray(H(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(e, n, r, i) {
            var o, a, s, l = e.nodeType;
            if (e && 3 !== l && 8 !== l && 2 !== l) return i && n in H.attrFn ? H(e)[n](r) : "undefined" == typeof e.getAttribute ? H.prop(e, n, r) : (s = 1 !== l || !H.isXMLDoc(e), s && (n = n.toLowerCase(), a = H.attrHooks[n] || (Q.test(n) ? W : I)), r !== t ? null === r ? void H.removeAttr(e, n) : a && "set" in a && s && (o = a.set(e, r, n)) !== t ? o : (e.setAttribute(n, "" + r), r) : a && "get" in a && s && null !== (o = a.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o))
        },
        removeAttr: function(e, t) {
            var n, r, i, o, a = 0;
            if (t && 1 === e.nodeType)
                for (r = t.toLowerCase().split(z), o = r.length; o > a; a++) i = r[a], i && (n = H.propFix[i] || i, H.attr(e, i, ""), e.removeAttribute(Y ? i : n), Q.test(i) && n in e && (e[n] = !1))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (U.test(e.nodeName) && e.parentNode) H.error("type property can't be changed");
                    else if (!H.support.radioValue && "radio" === t && H.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return I && H.nodeName(e, "button") ? I.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    return I && H.nodeName(e, "button") ? I.set(e, t, n) : void(e.value = t)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !H.isXMLDoc(e), a && (n = H.propFix[n] || n, o = H.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : G.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), H.attrHooks.tabindex = H.propHooks.tabIndex, W = {
        get: function(e, n) {
            var r, i = H.prop(e, n);
            return i === !0 || "boolean" != typeof i && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var r;
            return t === !1 ? H.removeAttr(e, n) : (r = H.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, Y || (R = {
        name: !0,
        id: !0
    }, I = H.valHooks.button = {
        get: function(e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (R[n] ? "" !== r.nodeValue : r.specified) ? r.nodeValue : t
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = M.createAttribute(n), e.setAttributeNode(r)), r.nodeValue = t + ""
        }
    }, H.attrHooks.tabindex.set = I.set, H.each(["width", "height"], function(e, t) {
        H.attrHooks[t] = H.extend(H.attrHooks[t], {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        })
    }), H.attrHooks.contenteditable = {
        get: I.get,
        set: function(e, t, n) {
            "" === t && (t = "false"), I.set(e, t, n)
        }
    }), H.support.hrefNormalized || H.each(["href", "src", "width", "height"], function(e, n) {
        H.attrHooks[n] = H.extend(H.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null === r ? t : r
            }
        })
    }), H.support.style || (H.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = "" + t
        }
    }), H.support.optSelected || (H.propHooks.selected = H.extend(H.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), H.support.enctype || (H.propFix.enctype = "encoding"), H.support.checkOn || H.each(["radio", "checkbox"], function() {
        H.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), H.each(["radio", "checkbox"], function() {
        H.valHooks[this] = H.extend(H.valHooks[this], {
            set: function(e, t) {
                return H.isArray(t) ? e.checked = H.inArray(H(e).val(), t) >= 0 : void 0
            }
        })
    });
    var K = /^(?:textarea|input|select)$/i,
        Z = /^([^\.]*)?(?:\.(.+))?$/,
        ee = /\bhover(\.\S+)?\b/,
        te = /^key/,
        ne = /^(?:mouse|contextmenu)|click/,
        re = /^(?:focusinfocus|focusoutblur)$/,
        ie = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        oe = function(e) {
            var t = ie.exec(e);
            return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
        },
        ae = function(e, t) {
            var n = e.attributes || {};
            return !(t[1] && e.nodeName.toLowerCase() !== t[1] || t[2] && (n.id || {}).value !== t[2] || t[3] && !t[3].test((n["class"] || {}).value))
        },
        se = function(e) {
            return H.event.special.hover ? e : e.replace(ee, "mouseenter$1 mouseleave$1");

        };
    H.event = {
            add: function(e, n, r, i, o) {
                var a, s, l, u, c, f, d, p, h, m, g;
                if (3 !== e.nodeType && 8 !== e.nodeType && n && r && (a = H._data(e))) {
                    for (r.handler && (h = r, r = h.handler), r.guid || (r.guid = H.guid++), l = a.events, l || (a.events = l = {}), s = a.handle, s || (a.handle = s = function(e) {
                            return "undefined" == typeof H || e && H.event.triggered === e.type ? t : H.event.dispatch.apply(s.elem, arguments)
                        }, s.elem = e), n = H.trim(se(n)).split(" "), u = 0; u < n.length; u++) c = Z.exec(n[u]) || [], f = c[1], d = (c[2] || "").split(".").sort(), g = H.event.special[f] || {}, f = (o ? g.delegateType : g.bindType) || f, g = H.event.special[f] || {}, p = H.extend({
                        type: f,
                        origType: c[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: o,
                        quick: oe(o),
                        namespace: d.join(".")
                    }, h), m = l[f], m || (m = l[f] = [], m.delegateCount = 0, g.setup && g.setup.call(e, i, d, s) !== !1 || (e.addEventListener ? e.addEventListener(f, s, !1) : e.attachEvent && e.attachEvent("on" + f, s))), g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? m.splice(m.delegateCount++, 0, p) : m.push(p), H.event.global[f] = !0;
                    e = null
                }
            },
            global: {},
            remove: function(e, t, n, r, i) {
                var o, a, s, l, u, c, f, d, p, h, m, g, y = H.hasData(e) && H._data(e);
                if (y && (d = y.events)) {
                    for (t = H.trim(se(t || "")).split(" "), o = 0; o < t.length; o++)
                        if (a = Z.exec(t[o]) || [], s = l = a[1], u = a[2], s) {
                            for (p = H.event.special[s] || {}, s = (r ? p.delegateType : p.bindType) || s, m = d[s] || [], c = m.length, u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, f = 0; f < m.length; f++) g = m[f], !i && l !== g.origType || n && n.guid !== g.guid || u && !u.test(g.namespace) || r && r !== g.selector && ("**" !== r || !g.selector) || (m.splice(f--, 1), g.selector && m.delegateCount--, p.remove && p.remove.call(e, g));
                            0 === m.length && c !== m.length && (p.teardown && p.teardown.call(e, u) !== !1 || H.removeEvent(e, s, y.handle), delete d[s])
                        } else
                            for (s in d) H.event.remove(e, s + t[o], n, r, !0);
                    H.isEmptyObject(d) && (h = y.handle, h && (h.elem = null), H.removeData(e, ["events", "handle"], !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(n, r, i, o) {
                if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
                    var a, s, l, u, c, f, d, p, h, m, g = n.type || n,
                        y = [];
                    if (!re.test(g + H.event.triggered) && (g.indexOf("!") >= 0 && (g = g.slice(0, -1), s = !0), g.indexOf(".") >= 0 && (y = g.split("."), g = y.shift(), y.sort()), i && !H.event.customEvent[g] || H.event.global[g]))
                        if (n = "object" == typeof n ? n[H.expando] ? n : new H.Event(g, n) : new H.Event(g), n.type = g, n.isTrigger = !0, n.exclusive = s, n.namespace = y.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, f = g.indexOf(":") < 0 ? "on" + g : "", i) {
                            if (n.result = t, n.target || (n.target = i), r = null != r ? H.makeArray(r) : [], r.unshift(n), d = H.event.special[g] || {}, !d.trigger || d.trigger.apply(i, r) !== !1) {
                                if (h = [
                                        [i, d.bindType || g]
                                    ], !o && !d.noBubble && !H.isWindow(i)) {
                                    for (m = d.delegateType || g, u = re.test(m + g) ? i : i.parentNode, c = null; u; u = u.parentNode) h.push([u, m]), c = u;
                                    c && c === i.ownerDocument && h.push([c.defaultView || c.parentWindow || e, m])
                                }
                                for (l = 0; l < h.length && !n.isPropagationStopped(); l++) u = h[l][0], n.type = h[l][1], p = (H._data(u, "events") || {})[n.type] && H._data(u, "handle"), p && p.apply(u, r), p = f && u[f], p && H.acceptData(u) && p.apply(u, r) === !1 && n.preventDefault();
                                return n.type = g, o || n.isDefaultPrevented() || d._default && d._default.apply(i.ownerDocument, r) !== !1 || "click" === g && H.nodeName(i, "a") || !H.acceptData(i) || f && i[g] && ("focus" !== g && "blur" !== g || 0 !== n.target.offsetWidth) && !H.isWindow(i) && (c = i[f], c && (i[f] = null), H.event.triggered = g, i[g](), H.event.triggered = t, c && (i[f] = c)), n.result
                            }
                        } else {
                            a = H.cache;
                            for (l in a) a[l].events && a[l].events[g] && H.event.trigger(n, r, a[l].handle.elem, !0)
                        }
                }
            },
            dispatch: function(n) {
                n = H.event.fix(n || e.event);
                var r, i, o, a, s, l, u, c, f, d, p = (H._data(this, "events") || {})[n.type] || [],
                    h = p.delegateCount,
                    m = [].slice.call(arguments, 0),
                    g = !n.exclusive && !n.namespace,
                    y = [];
                if (m[0] = n, n.delegateTarget = this, h && !n.target.disabled && (!n.button || "click" !== n.type))
                    for (a = H(this), a.context = this.ownerDocument || this, o = n.target; o != this; o = o.parentNode || this) {
                        for (l = {}, c = [], a[0] = o, r = 0; h > r; r++) f = p[r], d = f.selector, l[d] === t && (l[d] = f.quick ? ae(o, f.quick) : a.is(d)), l[d] && c.push(f);
                        c.length && y.push({
                            elem: o,
                            matches: c
                        })
                    }
                for (p.length > h && y.push({
                        elem: this,
                        matches: p.slice(h)
                    }), r = 0; r < y.length && !n.isPropagationStopped(); r++)
                    for (u = y[r], n.currentTarget = u.elem, i = 0; i < u.matches.length && !n.isImmediatePropagationStopped(); i++) f = u.matches[i], (g || !n.namespace && !f.namespace || n.namespace_re && n.namespace_re.test(f.namespace)) && (n.data = f.data, n.handleObj = f, s = ((H.event.special[f.origType] || {}).handle || f.handler).apply(u.elem, m), s !== t && (n.result = s, s === !1 && (n.preventDefault(), n.stopPropagation())));
                return n.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, o, a = n.button,
                        s = n.fromElement;
                    return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || M, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[H.expando]) return e;
                var n, r, i = e,
                    o = H.event.fixHooks[e.type] || {},
                    a = o.props ? this.props.concat(o.props) : this.props;
                for (e = H.Event(i), n = a.length; n;) r = a[--n], e[r] = i[r];
                return e.target || (e.target = i.srcElement || M), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), o.filter ? o.filter(e, i) : e
            },
            special: {
                ready: {
                    setup: H.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(e, t, n) {
                        H.isWindow(this) && (this.onbeforeunload = n)
                    },
                    teardown: function(e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = H.extend(new H.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? H.event.trigger(i, null, t) : H.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, H.event.handle = H.event.dispatch, H.removeEvent = M.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            e.detachEvent && e.detachEvent("on" + t, n)
        }, H.Event = function(e, t) {
            return this instanceof H.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? s : a) : this.type = e, t && H.extend(this, t), this.timeStamp = e && e.timeStamp || H.now(), void(this[H.expando] = !0)) : new H.Event(e, t)
        }, H.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = s;
                var e = this.originalEvent;
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = s;
                var e = this.originalEvent;
                e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = s, this.stopPropagation()
            },
            isDefaultPrevented: a,
            isPropagationStopped: a,
            isImmediatePropagationStopped: a
        }, H.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            H.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    {
                        var n, r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        o.selector
                    }
                    return (!i || i !== r && !H.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), H.support.submitBubbles || (H.event.special.submit = {
            setup: function() {
                return H.nodeName(this, "form") ? !1 : void H.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        r = H.nodeName(n, "input") || H.nodeName(n, "button") ? n.form : t;
                    r && !r._submit_attached && (H.event.add(r, "submit._submit", function(e) {
                        this.parentNode && !e.isTrigger && H.event.simulate("submit", this.parentNode, e, !0)
                    }), r._submit_attached = !0)
                })
            },
            teardown: function() {
                return H.nodeName(this, "form") ? !1 : void H.event.remove(this, "._submit")
            }
        }), H.support.changeBubbles || (H.event.special.change = {
            setup: function() {
                return K.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (H.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), H.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1, H.event.simulate("change", this, e, !0))
                })), !1) : void H.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    K.test(t.nodeName) && !t._change_attached && (H.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || H.event.simulate("change", this.parentNode, e, !0)
                    }), t._change_attached = !0)
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return H.event.remove(this, "._change"), K.test(this.nodeName)
            }
        }), H.support.focusinBubbles || H.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                r = function(e) {
                    H.event.simulate(t, e.target, H.event.fix(e), !0)
                };
            H.event.special[t] = {
                setup: function() {
                    0 === n++ && M.addEventListener(e, r, !0)
                },
                teardown: function() {
                    0 === --n && M.removeEventListener(e, r, !0)
                }
            }
        }), H.fn.extend({
            on: function(e, n, r, i, o) {
                var s, l;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = n, n = t);
                    for (l in e) this.on(l, n, r, e[l], o);
                    return this
                }
                if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = a;
                else if (!i) return this;
                return 1 === o && (s = i, i = function(e) {
                    return H().off(e), s.apply(this, arguments)
                }, i.guid = s.guid || (s.guid = H.guid++)), this.each(function() {
                    H.event.add(this, e, i, r, n)
                })
            },
            one: function(e, t, n, r) {
                return this.on.call(this, e, t, n, r, 1)
            },
            off: function(e, n, r) {
                if (e && e.preventDefault && e.handleObj) {
                    var i = e.handleObj;
                    return H(e.delegateTarget).off(i.namespace ? i.type + "." + i.namespace : i.type, i.selector, i.handler), this
                }
                if ("object" == typeof e) {
                    for (var o in e) this.off(o, n, e[o]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = a), this.each(function() {
                    H.event.remove(this, e, r, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            live: function(e, t, n) {
                return H(this.context).on(e, this.selector, t, n), this
            },
            die: function(e, t) {
                return H(this.context).off(e, this.selector || "**", t), this
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    H.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                return this[0] ? H.event.trigger(e, t, this[0], !0) : void 0
            },
            toggle: function(e) {
                var t = arguments,
                    n = e.guid || H.guid++,
                    r = 0,
                    i = function(n) {
                        var i = (H._data(this, "lastToggle" + e.guid) || 0) % r;
                        return H._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                    };
                for (i.guid = n; r < t.length;) t[r++].guid = n;
                return this.click(i)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), H.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            H.fn[t] = function(e, n) {
                return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, H.attrFn && (H.attrFn[t] = !0), te.test(t) && (H.event.fixHooks[t] = H.event.keyHooks), ne.test(t) && (H.event.fixHooks[t] = H.event.mouseHooks)
        }),
        function() {
            function e(e, t, n, r, o, a) {
                for (var s = 0, l = r.length; l > s; s++) {
                    var u = r[s];
                    if (u) {
                        var c = !1;
                        for (u = u[e]; u;) {
                            if (u[i] === n) {
                                c = r[u.sizset];
                                break
                            }
                            if (1 !== u.nodeType || a || (u[i] = n, u.sizset = s), u.nodeName.toLowerCase() === t) {
                                c = u;
                                break
                            }
                            u = u[e]
                        }
                        r[s] = c
                    }
                }
            }

            function n(e, t, n, r, o, a) {
                for (var s = 0, l = r.length; l > s; s++) {
                    var u = r[s];
                    if (u) {
                        var c = !1;
                        for (u = u[e]; u;) {
                            if (u[i] === n) {
                                c = r[u.sizset];
                                break
                            }
                            if (1 === u.nodeType)
                                if (a || (u[i] = n, u.sizset = s), "string" != typeof t) {
                                    if (u === t) {
                                        c = !0;
                                        break
                                    }
                                } else if (d.filter(t, [u]).length > 0) {
                                c = u;
                                break
                            }
                            u = u[e]
                        }
                        r[s] = c
                    }
                }
            }
            var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                i = "sizcache" + (Math.random() + "").replace(".", ""),
                o = 0,
                a = Object.prototype.toString,
                s = !1,
                l = !0,
                u = /\\/g,
                c = /\r\n/g,
                f = /\W/;
            [0, 0].sort(function() {
                return l = !1, 0
            });
            var d = function(e, t, n, i) {
                n = n || [], t = t || M;
                var o = t;
                if (1 !== t.nodeType && 9 !== t.nodeType) return [];
                if (!e || "string" != typeof e) return n;
                var s, l, u, c, f, p, g, y, b = !0,
                    x = d.isXML(t),
                    w = [],
                    N = e;
                do
                    if (r.exec(""), s = r.exec(N), s && (N = s[3], w.push(s[1]), s[2])) {
                        c = s[3];
                        break
                    }
                while (s);
                if (w.length > 1 && m.exec(e))
                    if (2 === w.length && h.relative[w[0]]) l = T(w[0] + w[1], t, i);
                    else
                        for (l = h.relative[w[0]] ? [t] : d(w.shift(), t); w.length;) e = w.shift(), h.relative[e] && (e += w.shift()), l = T(e, l, i);
                else if (!i && w.length > 1 && 9 === t.nodeType && !x && h.match.ID.test(w[0]) && !h.match.ID.test(w[w.length - 1]) && (f = d.find(w.shift(), t, x), t = f.expr ? d.filter(f.expr, f.set)[0] : f.set[0]), t)
                    for (f = i ? {
                            expr: w.pop(),
                            set: v(i)
                        } : d.find(w.pop(), 1 !== w.length || "~" !== w[0] && "+" !== w[0] || !t.parentNode ? t : t.parentNode, x), l = f.expr ? d.filter(f.expr, f.set) : f.set, w.length > 0 ? u = v(l) : b = !1; w.length;) p = w.pop(), g = p, h.relative[p] ? g = w.pop() : p = "", null == g && (g = t), h.relative[p](u, g, x);
                else u = w = [];
                if (u || (u = l), u || d.error(p || e), "[object Array]" === a.call(u))
                    if (b)
                        if (t && 1 === t.nodeType)
                            for (y = 0; null != u[y]; y++) u[y] && (u[y] === !0 || 1 === u[y].nodeType && d.contains(t, u[y])) && n.push(l[y]);
                        else
                            for (y = 0; null != u[y]; y++) u[y] && 1 === u[y].nodeType && n.push(l[y]);
                else n.push.apply(n, u);
                else v(u, n);
                return c && (d(c, o, n, i), d.uniqueSort(n)), n
            };
            d.uniqueSort = function(e) {
                if (x && (s = l, e.sort(x), s))
                    for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1);
                return e
            }, d.matches = function(e, t) {
                return d(e, null, null, t)
            }, d.matchesSelector = function(e, t) {
                return d(t, null, null, [e]).length > 0
            }, d.find = function(e, t, n) {
                var r, i, o, a, s, l;
                if (!e) return [];
                for (i = 0, o = h.order.length; o > i; i++)
                    if (s = h.order[i], (a = h.leftMatch[s].exec(e)) && (l = a[1], a.splice(1, 1), "\\" !== l.substr(l.length - 1) && (a[1] = (a[1] || "").replace(u, ""), r = h.find[s](a, t, n), null != r))) {
                        e = e.replace(h.match[s], "");
                        break
                    }
                return r || (r = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName("*") : []), {
                    set: r,
                    expr: e
                }
            }, d.filter = function(e, n, r, i) {
                for (var o, a, s, l, u, c, f, p, m, g = e, y = [], v = n, b = n && n[0] && d.isXML(n[0]); e && n.length;) {
                    for (s in h.filter)
                        if (null != (o = h.leftMatch[s].exec(e)) && o[2]) {
                            if (c = h.filter[s], f = o[1], a = !1, o.splice(1, 1), "\\" === f.substr(f.length - 1)) continue;
                            if (v === y && (y = []), h.preFilter[s])
                                if (o = h.preFilter[s](o, v, r, y, i, b)) {
                                    if (o === !0) continue
                                } else a = l = !0;
                            if (o)
                                for (p = 0; null != (u = v[p]); p++) u && (l = c(u, o, p, v), m = i ^ l, r && null != l ? m ? a = !0 : v[p] = !1 : m && (y.push(u), a = !0));
                            if (l !== t) {
                                if (r || (v = y), e = e.replace(h.match[s], ""), !a) return [];
                                break
                            }
                        }
                    if (e === g) {
                        if (null != a) break;
                        d.error(e)
                    }
                    g = e
                }
                return v
            }, d.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            };
            var p = d.getText = function(e) {
                    var t, n, r = e.nodeType,
                        i = "";
                    if (r) {
                        if (1 === r || 9 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            if ("string" == typeof e.innerText) return e.innerText.replace(c, "");
                            for (e = e.firstChild; e; e = e.nextSibling) i += p(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (t = 0; n = e[t]; t++) 8 !== n.nodeType && (i += p(n));
                    return i
                },
                h = d.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function(e) {
                            return e.getAttribute("href")
                        },
                        type: function(e) {
                            return e.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function(e, t) {
                            var n = "string" == typeof t,
                                r = n && !f.test(t),
                                i = n && !r;
                            r && (t = t.toLowerCase());
                            for (var o, a = 0, s = e.length; s > a; a++)
                                if (o = e[a]) {
                                    for (;
                                        (o = o.previousSibling) && 1 !== o.nodeType;);
                                    e[a] = i || o && o.nodeName.toLowerCase() === t ? o || !1 : o === t
                                }
                            i && d.filter(t, e, !0)
                        },
                        ">": function(e, t) {
                            var n, r = "string" == typeof t,
                                i = 0,
                                o = e.length;
                            if (r && !f.test(t)) {
                                for (t = t.toLowerCase(); o > i; i++)
                                    if (n = e[i]) {
                                        var a = n.parentNode;
                                        e[i] = a.nodeName.toLowerCase() === t ? a : !1
                                    }
                            } else {
                                for (; o > i; i++) n = e[i], n && (e[i] = r ? n.parentNode : n.parentNode === t);
                                r && d.filter(t, e, !0)
                            }
                        },
                        "": function(t, r, i) {
                            var a, s = o++,
                                l = n;
                            "string" != typeof r || f.test(r) || (r = r.toLowerCase(), a = r, l = e), l("parentNode", r, s, t, a, i)
                        },
                        "~": function(t, r, i) {
                            var a, s = o++,
                                l = n;
                            "string" != typeof r || f.test(r) || (r = r.toLowerCase(), a = r, l = e), l("previousSibling", r, s, t, a, i)
                        }
                    },
                    find: {
                        ID: function(e, t, n) {
                            if ("undefined" != typeof t.getElementById && !n) {
                                var r = t.getElementById(e[1]);
                                return r && r.parentNode ? [r] : []
                            }
                        },
                        NAME: function(e, t) {
                            if ("undefined" != typeof t.getElementsByName) {
                                for (var n = [], r = t.getElementsByName(e[1]), i = 0, o = r.length; o > i; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
                                return 0 === n.length ? null : n
                            }
                        },
                        TAG: function(e, t) {
                            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e[1]) : void 0
                        }
                    },
                    preFilter: {
                        CLASS: function(e, t, n, r, i, o) {
                            if (e = " " + e[1].replace(u, "") + " ", o) return e;
                            for (var a, s = 0; null != (a = t[s]); s++) a && (i ^ (a.className && (" " + a.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(a) : n && (t[s] = !1));
                            return !1
                        },
                        ID: function(e) {
                            return e[1].replace(u, "")
                        },
                        TAG: function(e, t) {
                            return e[1].replace(u, "").toLowerCase()
                        },
                        CHILD: function(e) {
                            if ("nth" === e[1]) {
                                e[2] || d.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                                var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                                e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                            } else e[2] && d.error(e[0]);
                            return e[0] = o++, e
                        },
                        ATTR: function(e, t, n, r, i, o) {
                            var a = e[1] = e[1].replace(u, "");
                            return !o && h.attrMap[a] && (e[1] = h.attrMap[a]), e[4] = (e[4] || e[5] || "").replace(u, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
                        },
                        PSEUDO: function(e, t, n, i, o) {
                            if ("not" === e[1]) {
                                if (!((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                                    var a = d.filter(e[3], t, n, !0 ^ o);
                                    return n || i.push.apply(i, a), !1
                                }
                                e[3] = d(e[3], null, null, t)
                            } else if (h.match.POS.test(e[0]) || h.match.CHILD.test(e[0])) return !0;
                            return e
                        },
                        POS: function(e) {
                            return e.unshift(!0), e
                        }
                    },
                    filters: {
                        enabled: function(e) {
                            return e.disabled === !1 && "hidden" !== e.type
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            return e.checked === !0
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        parent: function(e) {
                            return !!e.firstChild
                        },
                        empty: function(e) {
                            return !e.firstChild
                        },
                        has: function(e, t, n) {
                            return !!d(n[3], e).length
                        },
                        header: function(e) {
                            return /h\d/i.test(e.nodeName)
                        },
                        text: function(e) {
                            var t = e.getAttribute("type"),
                                n = e.type;
                            return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t)
                        },
                        radio: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "radio" === e.type
                        },
                        checkbox: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
                        },
                        file: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "file" === e.type
                        },
                        password: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "password" === e.type
                        },
                        submit: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t || "button" === t) && "submit" === e.type
                        },
                        image: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "image" === e.type
                        },
                        reset: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t || "button" === t) && "reset" === e.type
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        input: function(e) {
                            return /input|select|textarea|button/i.test(e.nodeName)
                        },
                        focus: function(e) {
                            return e === e.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(e, t) {
                            return 0 === t
                        },
                        last: function(e, t, n, r) {
                            return t === r.length - 1
                        },
                        even: function(e, t) {
                            return t % 2 === 0
                        },
                        odd: function(e, t) {
                            return t % 2 === 1
                        },
                        lt: function(e, t, n) {
                            return t < n[3] - 0
                        },
                        gt: function(e, t, n) {
                            return t > n[3] - 0
                        },
                        nth: function(e, t, n) {
                            return n[3] - 0 === t
                        },
                        eq: function(e, t, n) {
                            return n[3] - 0 === t
                        }
                    },
                    filter: {
                        PSEUDO: function(e, t, n, r) {
                            var i = t[1],
                                o = h.filters[i];
                            if (o) return o(e, n, t, r);
                            if ("contains" === i) return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
                            if ("not" === i) {
                                for (var a = t[3], s = 0, l = a.length; l > s; s++)
                                    if (a[s] === e) return !1;
                                return !0
                            }
                            d.error(i)
                        },
                        CHILD: function(e, t) {
                            var n, r, o, a, s, l, u = t[1],
                                c = e;
                            switch (u) {
                                case "only":
                                case "first":
                                    for (; c = c.previousSibling;)
                                        if (1 === c.nodeType) return !1;
                                    if ("first" === u) return !0;
                                    c = e;
                                case "last":
                                    for (; c = c.nextSibling;)
                                        if (1 === c.nodeType) return !1;
                                    return !0;
                                case "nth":
                                    if (n = t[2], r = t[3], 1 === n && 0 === r) return !0;
                                    if (o = t[0], a = e.parentNode, a && (a[i] !== o || !e.nodeIndex)) {
                                        for (s = 0, c = a.firstChild; c; c = c.nextSibling) 1 === c.nodeType && (c.nodeIndex = ++s);
                                        a[i] = o
                                    }
                                    return l = e.nodeIndex - r, 0 === n ? 0 === l : l % n === 0 && l / n >= 0
                            }
                        },
                        ID: function(e, t) {
                            return 1 === e.nodeType && e.getAttribute("id") === t
                        },
                        TAG: function(e, t) {
                            return "*" === t && 1 === e.nodeType || !!e.nodeName && e.nodeName.toLowerCase() === t
                        },
                        CLASS: function(e, t) {
                            return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                        },
                        ATTR: function(e, t) {
                            var n = t[1],
                                r = d.attr ? d.attr(e, n) : h.attrHandle[n] ? h.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n),
                                i = r + "",
                                o = t[2],
                                a = t[4];
                            return null == r ? "!=" === o : !o && d.attr ? null != r : "=" === o ? i === a : "*=" === o ? i.indexOf(a) >= 0 : "~=" === o ? (" " + i + " ").indexOf(a) >= 0 : a ? "!=" === o ? i !== a : "^=" === o ? 0 === i.indexOf(a) : "$=" === o ? i.substr(i.length - a.length) === a : "|=" === o ? i === a || i.substr(0, a.length + 1) === a + "-" : !1 : i && r !== !1
                        },
                        POS: function(e, t, n, r) {
                            var i = t[2],
                                o = h.setFilters[i];
                            return o ? o(e, n, t, r) : void 0
                        }
                    }
                },
                m = h.match.POS,
                g = function(e, t) {
                    return "\\" + (t - 0 + 1)
                };
            for (var y in h.match) h.match[y] = new RegExp(h.match[y].source + /(?![^\[]*\])(?![^\(]*\))/.source), h.leftMatch[y] = new RegExp(/(^(?:.|\r|\n)*?)/.source + h.match[y].source.replace(/\\(\d+)/g, g));
            var v = function(e, t) {
                return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
            };
            try {
                Array.prototype.slice.call(M.documentElement.childNodes, 0)[0].nodeType
            } catch (b) {
                v = function(e, t) {
                    var n = 0,
                        r = t || [];
                    if ("[object Array]" === a.call(e)) Array.prototype.push.apply(r, e);
                    else if ("number" == typeof e.length)
                        for (var i = e.length; i > n; n++) r.push(e[n]);
                    else
                        for (; e[n]; n++) r.push(e[n]);
                    return r
                }
            }
            var x, w;
            M.documentElement.compareDocumentPosition ? x = function(e, t) {
                    return e === t ? (s = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : (x = function(e, t) {
                    if (e === t) return s = !0, 0;
                    if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                    var n, r, i = [],
                        o = [],
                        a = e.parentNode,
                        l = t.parentNode,
                        u = a;
                    if (a === l) return w(e, t);
                    if (!a) return -1;
                    if (!l) return 1;
                    for (; u;) i.unshift(u), u = u.parentNode;
                    for (u = l; u;) o.unshift(u), u = u.parentNode;
                    n = i.length, r = o.length;
                    for (var c = 0; n > c && r > c; c++)
                        if (i[c] !== o[c]) return w(i[c], o[c]);
                    return c === n ? w(e, o[c], -1) : w(i[c], t, 1)
                }, w = function(e, t, n) {
                    if (e === t) return n;
                    for (var r = e.nextSibling; r;) {
                        if (r === t) return -1;
                        r = r.nextSibling
                    }
                    return 1
                }),
                function() {
                    var e = M.createElement("div"),
                        n = "script" + (new Date).getTime(),
                        r = M.documentElement;
                    e.innerHTML = "<a name='" + n + "'/>", r.insertBefore(e, r.firstChild), M.getElementById(n) && (h.find.ID = function(e, n, r) {
                        if ("undefined" != typeof n.getElementById && !r) {
                            var i = n.getElementById(e[1]);
                            return i ? i.id === e[1] || "undefined" != typeof i.getAttributeNode && i.getAttributeNode("id").nodeValue === e[1] ? [i] : t : []
                        }
                    }, h.filter.ID = function(e, t) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return 1 === e.nodeType && n && n.nodeValue === t
                    }), r.removeChild(e), r = e = null
                }(),
                function() {
                    var e = M.createElement("div");
                    e.appendChild(M.createComment("")), e.getElementsByTagName("*").length > 0 && (h.find.TAG = function(e, t) {
                        var n = t.getElementsByTagName(e[1]);
                        if ("*" === e[1]) {
                            for (var r = [], i = 0; n[i]; i++) 1 === n[i].nodeType && r.push(n[i]);
                            n = r
                        }
                        return n
                    }), e.innerHTML = "<a href='#'></a>", e.firstChild && "undefined" != typeof e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (h.attrHandle.href = function(e) {
                        return e.getAttribute("href", 2)
                    }), e = null
                }(), M.querySelectorAll && ! function() {
                    var e = d,
                        t = M.createElement("div"),
                        n = "__sizzle__";
                    if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
                        d = function(t, r, i, o) {
                            if (r = r || M, !o && !d.isXML(r)) {
                                var a = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                                if (a && (1 === r.nodeType || 9 === r.nodeType)) {
                                    if (a[1]) return v(r.getElementsByTagName(t), i);
                                    if (a[2] && h.find.CLASS && r.getElementsByClassName) return v(r.getElementsByClassName(a[2]), i)
                                }
                                if (9 === r.nodeType) {
                                    if ("body" === t && r.body) return v([r.body], i);
                                    if (a && a[3]) {
                                        var s = r.getElementById(a[3]);
                                        if (!s || !s.parentNode) return v([], i);
                                        if (s.id === a[3]) return v([s], i)
                                    }
                                    try {
                                        return v(r.querySelectorAll(t), i)
                                    } catch (l) {}
                                } else if (1 === r.nodeType && "object" !== r.nodeName.toLowerCase()) {
                                    var u = r,
                                        c = r.getAttribute("id"),
                                        f = c || n,
                                        p = r.parentNode,
                                        m = /^\s*[+~]/.test(t);
                                    c ? f = f.replace(/'/g, "\\$&") : r.setAttribute("id", f), m && p && (r = r.parentNode);
                                    try {
                                        if (!m || p) return v(r.querySelectorAll("[id='" + f + "'] " + t), i)
                                    } catch (g) {} finally {
                                        c || u.removeAttribute("id")
                                    }
                                }
                            }
                            return e(t, r, i, o)
                        };
                        for (var r in e) d[r] = e[r];
                        t = null
                    }
                }(),
                function() {
                    var e = M.documentElement,
                        t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
                    if (t) {
                        var n = !t.call(M.createElement("div"), "div"),
                            r = !1;
                        try {
                            t.call(M.documentElement, "[test!='']:sizzle")
                        } catch (i) {
                            r = !0
                        }
                        d.matchesSelector = function(e, i) {
                            if (i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !d.isXML(e)) try {
                                if (r || !h.match.PSEUDO.test(i) && !/!=/.test(i)) {
                                    var o = t.call(e, i);
                                    if (o || !n || e.document && 11 !== e.document.nodeType) return o
                                }
                            } catch (a) {}
                            return d(i, null, null, [e]).length > 0
                        }
                    }
                }(),
                function() {
                    var e = M.createElement("div");
                    e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length && (e.lastChild.className = "e", 1 !== e.getElementsByClassName("e").length && (h.order.splice(1, 0, "CLASS"), h.find.CLASS = function(e, t, n) {
                        return "undefined" == typeof t.getElementsByClassName || n ? void 0 : t.getElementsByClassName(e[1])
                    }, e = null))
                }(), M.documentElement.contains ? d.contains = function(e, t) {
                    return e !== t && (e.contains ? e.contains(t) : !0)
                } : M.documentElement.compareDocumentPosition ? d.contains = function(e, t) {
                    return !!(16 & e.compareDocumentPosition(t))
                } : d.contains = function() {
                    return !1
                }, d.isXML = function(e) {
                    var t = (e ? e.ownerDocument || e : 0).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                };
            var T = function(e, t, n) {
                for (var r, i = [], o = "", a = t.nodeType ? [t] : t; r = h.match.PSEUDO.exec(e);) o += r[0], e = e.replace(h.match.PSEUDO, "");
                e = h.relative[e] ? e + "*" : e;
                for (var s = 0, l = a.length; l > s; s++) d(e, a[s], i, n);
                return d.filter(o, i)
            };
            d.attr = H.attr, d.selectors.attrMap = {}, H.find = d, H.expr = d.selectors, H.expr[":"] = H.expr.filters, H.unique = d.uniqueSort, H.text = d.getText, H.isXMLDoc = d.isXML, H.contains = d.contains
        }();
    var le = /Until$/,
        ue = /^(?:parents|prevUntil|prevAll)/,
        ce = /,/,
        fe = /^.[^:#\[\.,]*$/,
        de = Array.prototype.slice,
        pe = H.expr.match.POS,
        he = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    H.fn.extend({
        find: function(e) {
            var t, n, r = this;
            if ("string" != typeof e) return H(e).filter(function() {
                for (t = 0, n = r.length; n > t; t++)
                    if (H.contains(r[t], this)) return !0
            });
            var i, o, a, s = this.pushStack("", "find", e);
            for (t = 0, n = this.length; n > t; t++)
                if (i = s.length, H.find(e, this[t], s), t > 0)
                    for (o = i; o < s.length; o++)
                        for (a = 0; i > a; a++)
                            if (s[a] === s[o]) {
                                s.splice(o--, 1);
                                break
                            }
            return s
        },
        has: function(e) {
            var t = H(e);
            return this.filter(function() {
                for (var e = 0, n = t.length; n > e; e++)
                    if (H.contains(this, t[e])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(u(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(u(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? pe.test(e) ? H(e, this.context).index(this[0]) >= 0 : H.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r, i = [],
                o = this[0];
            if (H.isArray(e)) {
                for (var a = 1; o && o.ownerDocument && o !== t;) {
                    for (n = 0; n < e.length; n++) H(o).is(e[n]) && i.push({
                        selector: e[n],
                        elem: o,
                        level: a
                    });
                    o = o.parentNode, a++
                }
                return i
            }
            var s = pe.test(e) || "string" != typeof e ? H(e, t || this.context) : 0;
            for (n = 0, r = this.length; r > n; n++)
                for (o = this[n]; o;) {
                    if (s ? s.index(o) > -1 : H.find.matchesSelector(o, e)) {
                        i.push(o);
                        break
                    }
                    if (o = o.parentNode, !o || !o.ownerDocument || o === t || 11 === o.nodeType) break
                }
            return i = i.length > 1 ? H.unique(i) : i, this.pushStack(i, "closest", e)
        },
        index: function(e) {
            return e ? "string" == typeof e ? H.inArray(this[0], H(e)) : H.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? H(e, t) : H.makeArray(e && e.nodeType ? [e] : e),
                r = H.merge(this.get(), n);
            return this.pushStack(l(n[0]) || l(r[0]) ? r : H.unique(r))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), H.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return H.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return H.dir(e, "parentNode", n)
        },
        next: function(e) {
            return H.nth(e, 2, "nextSibling")
        },
        prev: function(e) {
            return H.nth(e, 2, "previousSibling")
        },
        nextAll: function(e) {
            return H.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return H.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return H.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return H.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return H.sibling(e.parentNode.firstChild, e)
        },
        children: function(e) {
            return H.sibling(e.firstChild)
        },
        contents: function(e) {
            return H.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : H.makeArray(e.childNodes)
        }
    }, function(e, t) {
        H.fn[e] = function(n, r) {
            var i = H.map(this, t, n);
            return le.test(e) || (r = n), r && "string" == typeof r && (i = H.filter(r, i)), i = this.length > 1 && !he[e] ? H.unique(i) : i, (this.length > 1 || ce.test(r)) && ue.test(e) && (i = i.reverse()), this.pushStack(i, e, de.call(arguments).join(","))
        }
    }), H.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? H.find.matchesSelector(t[0], e) ? [t[0]] : [] : H.find.matches(e, t)
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !H(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        nth: function(e, t, n, r) {
            t = t || 1;
            for (var i = 0; e && (1 !== e.nodeType || ++i !== t); e = e[n]);
            return e
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var me = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ge = / jQuery\d+="(?:\d+|null)"/g,
        ye = /^\s+/,
        ve = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        be = /<([\w:]+)/,
        xe = /<tbody/i,
        we = /<|&#?\w+;/,
        Te = /<(?:script|style)/i,
        Ne = /<(?:script|object|embed|option|style)/i,
        Ce = new RegExp("<(?:" + me + ")", "i"),
        Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ke = /\/(java|ecma)script/i,
        Se = /^\s*<!(?:\[CDATA\[|\-\-)/,
        Ae = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        Le = c(M);
    Ae.optgroup = Ae.option, Ae.tbody = Ae.tfoot = Ae.colgroup = Ae.caption = Ae.thead, Ae.th = Ae.td, H.support.htmlSerialize || (Ae._default = [1, "div<div>", "</div>"]), H.fn.extend({
        text: function(e) {
            return H.isFunction(e) ? this.each(function(t) {
                var n = H(this);
                n.text(e.call(this, t, n.text()))
            }) : "object" != typeof e && e !== t ? this.empty().append((this[0] && this[0].ownerDocument || M).createTextNode(e)) : H.text(this)
        },
        wrapAll: function(e) {
            if (H.isFunction(e)) return this.each(function(t) {
                H(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = H(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(H.isFunction(e) ? function(t) {
                H(this).wrapInner(e.call(this, t))
            } : function() {
                var t = H(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = H.isFunction(e);
            return this.each(function(n) {
                H(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                H.nodeName(this, "body") || H(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = H.clean(arguments);

                return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, H.clean(arguments)), e
            }
        },
        remove: function(e, t) {
            for (var n, r = 0; null != (n = this[r]); r++)(!e || H.filter(e, [n]).length) && (t || 1 !== n.nodeType || (H.cleanData(n.getElementsByTagName("*")), H.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                for (1 === e.nodeType && H.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return H.clone(this, e, t)
            })
        },
        html: function(e) {
            if (e === t) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(ge, "") : null;
            if ("string" != typeof e || Te.test(e) || !H.support.leadingWhitespace && ye.test(e) || Ae[(be.exec(e) || ["", ""])[1].toLowerCase()]) H.isFunction(e) ? this.each(function(t) {
                var n = H(this);
                n.html(e.call(this, t, n.html()))
            }) : this.empty().append(e);
            else {
                e = e.replace(ve, "<$1></$2>");
                try {
                    for (var n = 0, r = this.length; r > n; n++) 1 === this[n].nodeType && (H.cleanData(this[n].getElementsByTagName("*")), this[n].innerHTML = e)
                } catch (i) {
                    this.empty().append(e)
                }
            }
            return this
        },
        replaceWith: function(e) {
            return this[0] && this[0].parentNode ? H.isFunction(e) ? this.each(function(t) {
                var n = H(this),
                    r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : ("string" != typeof e && (e = H(e).detach()), this.each(function() {
                var t = this.nextSibling,
                    n = this.parentNode;
                H(this).remove(), t ? H(t).before(e) : H(n).append(e)
            })) : this.length ? this.pushStack(H(H.isFunction(e) ? e() : e), "replaceWith", e) : this
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, r) {
            var i, o, a, s, l = e[0],
                u = [];
            if (!H.support.checkClone && 3 === arguments.length && "string" == typeof l && Ee.test(l)) return this.each(function() {
                H(this).domManip(e, n, r, !0)
            });
            if (H.isFunction(l)) return this.each(function(i) {
                var o = H(this);
                e[0] = l.call(this, i, n ? o.html() : t), o.domManip(e, n, r)
            });
            if (this[0]) {
                if (s = l && l.parentNode, i = H.support.parentNode && s && 11 === s.nodeType && s.childNodes.length === this.length ? {
                        fragment: s
                    } : H.buildFragment(e, this, u), a = i.fragment, o = 1 === a.childNodes.length ? a = a.firstChild : a.firstChild) {
                    n = n && H.nodeName(o, "tr");
                    for (var c = 0, d = this.length, p = d - 1; d > c; c++) r.call(n ? f(this[c], o) : this[c], i.cacheable || d > 1 && p > c ? H.clone(a, !0, !0) : a)
                }
                u.length && H.each(u, v)
            }
            return this
        }
    }), H.buildFragment = function(e, t, n) {
        var r, i, o, a, s = e[0];
        return t && t[0] && (a = t[0].ownerDocument || t[0]), a.createDocumentFragment || (a = M), !(1 === e.length && "string" == typeof s && s.length < 512 && a === M && "<" === s.charAt(0)) || Ne.test(s) || !H.support.checkClone && Ee.test(s) || !H.support.html5Clone && Ce.test(s) || (i = !0, o = H.fragments[s], o && 1 !== o && (r = o)), r || (r = a.createDocumentFragment(), H.clean(e, a, r, n)), i && (H.fragments[s] = o ? r : 1), {
            fragment: r,
            cacheable: i
        }
    }, H.fragments = {}, H.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        H.fn[e] = function(n) {
            var r = [],
                i = H(n),
                o = 1 === this.length && this[0].parentNode;
            if (o && 11 === o.nodeType && 1 === o.childNodes.length && 1 === i.length) return i[t](this[0]), this;
            for (var a = 0, s = i.length; s > a; a++) {
                var l = (a > 0 ? this.clone(!0) : this).get();
                H(i[a])[t](l), r = r.concat(l)
            }
            return this.pushStack(r, e, i.selector)
        }
    }), H.extend({
        clone: function(e, t, n) {
            var r, i, o, a = H.support.html5Clone || !Ce.test("<" + e.nodeName) ? e.cloneNode(!0) : y(e);
            if (!(H.support.noCloneEvent && H.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || H.isXMLDoc(e)))
                for (p(e, a), r = h(e), i = h(a), o = 0; r[o]; ++o) i[o] && p(r[o], i[o]);
            if (t && (d(e, a), n))
                for (r = h(e), i = h(a), o = 0; r[o]; ++o) d(r[o], i[o]);
            return r = i = null, a
        },
        clean: function(e, t, n, r) {
            var i;
            t = t || M, "undefined" == typeof t.createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || M);
            for (var o, a, s = [], l = 0; null != (a = e[l]); l++)
                if ("number" == typeof a && (a += ""), a) {
                    if ("string" == typeof a)
                        if (we.test(a)) {
                            a = a.replace(ve, "<$1></$2>");
                            var u = (be.exec(a) || ["", ""])[1].toLowerCase(),
                                f = Ae[u] || Ae._default,
                                d = f[0],
                                p = t.createElement("div");
                            for (t === M ? Le.appendChild(p) : c(t).appendChild(p), p.innerHTML = f[1] + a + f[2]; d--;) p = p.lastChild;
                            if (!H.support.tbody) {
                                var h = xe.test(a),
                                    m = "table" !== u || h ? "<table>" !== f[1] || h ? [] : p.childNodes : p.firstChild && p.firstChild.childNodes;
                                for (o = m.length - 1; o >= 0; --o) H.nodeName(m[o], "tbody") && !m[o].childNodes.length && m[o].parentNode.removeChild(m[o])
                            }!H.support.leadingWhitespace && ye.test(a) && p.insertBefore(t.createTextNode(ye.exec(a)[0]), p.firstChild), a = p.childNodes
                        } else a = t.createTextNode(a);
                    var y;
                    if (!H.support.appendChecked)
                        if (a[0] && "number" == typeof(y = a.length))
                            for (o = 0; y > o; o++) g(a[o]);
                        else g(a);
                    a.nodeType ? s.push(a) : s = H.merge(s, a)
                }
            if (n)
                for (i = function(e) {
                        return !e.type || ke.test(e.type)
                    }, l = 0; s[l]; l++)
                    if (!r || !H.nodeName(s[l], "script") || s[l].type && "text/javascript" !== s[l].type.toLowerCase()) {
                        if (1 === s[l].nodeType) {
                            var v = H.grep(s[l].getElementsByTagName("script"), i);
                            s.splice.apply(s, [l + 1, 0].concat(v))
                        }
                        n.appendChild(s[l])
                    } else r.push(s[l].parentNode ? s[l].parentNode.removeChild(s[l]) : s[l]);
            return s
        },
        cleanData: function(e) {
            for (var t, n, r, i = H.cache, o = H.event.special, a = H.support.deleteExpando, s = 0; null != (r = e[s]); s++)
                if ((!r.nodeName || !H.noData[r.nodeName.toLowerCase()]) && (n = r[H.expando])) {
                    if (t = i[n], t && t.events) {
                        for (var l in t.events) o[l] ? H.event.remove(r, l) : H.removeEvent(r, l, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    a ? delete r[H.expando] : r.removeAttribute && r.removeAttribute(H.expando), delete i[n]
                }
        }
    });
    var je, Fe, De, Me = /alpha\([^)]*\)/i,
        Oe = /opacity=([^)]*)/,
        _e = /([A-Z]|^ms)/g,
        He = /^-?\d+(?:px)?$/i,
        Be = /^-?\d/,
        Pe = /^([\-+])=([\-+.\de]+)/,
        $e = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        qe = ["Left", "Right"],
        Ie = ["Top", "Bottom"];
    H.fn.css = function(e, n) {
        return 2 === arguments.length && n === t ? this : H.access(this, e, n, !0, function(e, n, r) {
            return r !== t ? H.style(e, n, r) : H.css(e, n)
        })
    }, H.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = je(e, "opacity", "opacity");
                        return "" === n ? "1" : n
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": H.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s = H.camelCase(n),
                    l = e.style,
                    u = H.cssHooks[s];
                if (n = H.cssProps[s] || s, r === t) return u && "get" in u && (o = u.get(e, !1, i)) !== t ? o : l[n];
                if (a = typeof r, "string" === a && (o = Pe.exec(r)) && (r = +(o[1] + 1) * +o[2] + parseFloat(H.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || H.cssNumber[s] || (r += "px"), u && "set" in u && (r = u.set(e, r)) === t))) try {
                    l[n] = r
                } catch (c) {}
            }
        },
        css: function(e, n, r) {
            var i, o;
            return n = H.camelCase(n), o = H.cssHooks[n], n = H.cssProps[n] || n, "cssFloat" === n && (n = "float"), o && "get" in o && (i = o.get(e, !0, r)) !== t ? i : je ? je(e, n) : void 0
        },
        swap: function(e, t, n) {
            var r = {};
            for (var i in t) r[i] = e.style[i], e.style[i] = t[i];
            n.call(e);
            for (i in t) e.style[i] = r[i]
        }
    }), H.curCSS = H.css, H.each(["height", "width"], function(e, t) {
        H.cssHooks[t] = {
            get: function(e, n, r) {
                var i;
                return n ? 0 !== e.offsetWidth ? b(e, t, r) : (H.swap(e, $e, function() {
                    i = b(e, t, r)
                }), i) : void 0
            },
            set: function(e, t) {
                return He.test(t) ? (t = parseFloat(t), t >= 0 ? t + "px" : void 0) : t
            }
        }
    }), H.support.opacity || (H.cssHooks.opacity = {
        get: function(e, t) {
            return Oe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = H.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, t >= 1 && "" === H.trim(o.replace(Me, "")) && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = Me.test(o) ? o.replace(Me, i) : o + " " + i)
        }
    }), H(function() {
        H.support.reliableMarginRight || (H.cssHooks.marginRight = {
            get: function(e, t) {
                var n;
                return H.swap(e, {
                    display: "inline-block"
                }, function() {
                    n = t ? je(e, "margin-right", "marginRight") : e.style.marginRight
                }), n
            }
        })
    }), M.defaultView && M.defaultView.getComputedStyle && (Fe = function(e, t) {
        var n, r, i;
        return t = t.replace(_e, "-$1").toLowerCase(), (r = e.ownerDocument.defaultView) && (i = r.getComputedStyle(e, null)) && (n = i.getPropertyValue(t), "" !== n || H.contains(e.ownerDocument.documentElement, e) || (n = H.style(e, t))), n
    }), M.documentElement.currentStyle && (De = function(e, t) {
        var n, r, i, o = e.currentStyle && e.currentStyle[t],
            a = e.style;
        return null === o && a && (i = a[t]) && (o = i), !He.test(o) && Be.test(o) && (n = a.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : o || 0, o = a.pixelLeft + "px", a.left = n, r && (e.runtimeStyle.left = r)), "" === o ? "auto" : o
    }), je = Fe || De, H.expr && H.expr.filters && (H.expr.filters.hidden = function(e) {
        var t = e.offsetWidth,
            n = e.offsetHeight;
        return 0 === t && 0 === n || !H.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || H.css(e, "display"))
    }, H.expr.filters.visible = function(e) {
        return !H.expr.filters.hidden(e)
    });
    var We, Re, Xe = /%20/g,
        ze = /\[\]$/,
        Ve = /\r?\n/g,
        Ue = /#.*$/,
        Ge = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Je = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Qe = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Ye = /^(?:GET|HEAD)$/,
        Ke = /^\/\//,
        Ze = /\?/,
        et = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        tt = /^(?:select|textarea)/i,
        nt = /\s+/,
        rt = /([?&])_=[^&]*/,
        it = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        ot = H.fn.load,
        at = {},
        st = {},
        lt = ["*/"] + ["*"];
    try {
        We = _.href
    } catch (ut) {
        We = M.createElement("a"), We.href = "", We = We.href
    }
    Re = it.exec(We.toLowerCase()) || [], H.fn.extend({
        load: function(e, n, r) {
            if ("string" != typeof e && ot) return ot.apply(this, arguments);
            if (!this.length) return this;
            var i = e.indexOf(" ");
            if (i >= 0) {
                var o = e.slice(i, e.length);
                e = e.slice(0, i)
            }
            var a = "GET";
            n && (H.isFunction(n) ? (r = n, n = t) : "object" == typeof n && (n = H.param(n, H.ajaxSettings.traditional), a = "POST"));
            var s = this;
            return H.ajax({
                url: e,
                type: a,
                dataType: "html",
                data: n,
                complete: function(e, t, n) {
                    n = e.responseText, e.isResolved() && (e.done(function(e) {
                        n = e
                    }), s.html(o ? H("<div>").append(n.replace(et, "")).find(o) : n)), r && s.each(r, [n, t, e])
                }
            }), this
        },
        serialize: function() {
            return H.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? H.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || tt.test(this.nodeName) || Je.test(this.type))
            }).map(function(e, t) {
                var n = H(this).val();
                return null == n ? null : H.isArray(n) ? H.map(n, function(e, n) {
                    return {
                        name: t.name,
                        value: e.replace(Ve, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ve, "\r\n")
                }
            }).get()
        }
    }), H.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        H.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), H.each(["get", "post"], function(e, n) {
        H[n] = function(e, r, i, o) {
            return H.isFunction(r) && (o = o || i, i = r, r = t), H.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: o
            })
        }
    }), H.extend({
        getScript: function(e, n) {
            return H.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return H.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? T(e, H.ajaxSettings) : (t = e, e = H.ajaxSettings), T(e, t), e
        },
        ajaxSettings: {
            url: We,
            isLocal: Qe.test(Re[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": lt
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": H.parseJSON,
                "text xml": H.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: x(at),
        ajaxTransport: x(st),
        ajax: function(e, n) {
            function r(e, n, r, a) {
                if (2 !== x) {
                    x = 2, l && clearTimeout(l), s = t, o = a || "", T.readyState = e > 0 ? 4 : 0;
                    var u, f, v, b, w, N = n,
                        k = r ? C(d, T, r) : t;
                    if (e >= 200 && 300 > e || 304 === e)
                        if (d.ifModified && ((b = T.getResponseHeader("Last-Modified")) && (H.lastModified[i] = b), (w = T.getResponseHeader("Etag")) && (H.etag[i] = w)), 304 === e) N = "notmodified", u = !0;
                        else try {
                            f = E(d, k), N = "success", u = !0
                        } catch (S) {
                            N = "parsererror", v = S
                        } else v = N, (!N || e) && (N = "error", 0 > e && (e = 0));
                    T.status = e, T.statusText = "" + (n || N), u ? m.resolveWith(p, [f, N, T]) : m.rejectWith(p, [T, N, v]), T.statusCode(y), y = t, c && h.trigger("ajax" + (u ? "Success" : "Error"), [T, d, u ? f : v]), g.fireWith(p, [T, N]), c && (h.trigger("ajaxComplete", [T, d]), --H.active || H.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, l, u, c, f, d = H.ajaxSetup({}, n),
                p = d.context || d,
                h = p !== d && (p.nodeType || p instanceof H) ? H(p) : H.event,
                m = H.Deferred(),
                g = H.Callbacks("once memory"),
                y = d.statusCode || {},
                v = {},
                b = {},
                x = 0,
                T = {
                    readyState: 0,
                    setRequestHeader: function(e, t) {
                        if (!x) {
                            var n = e.toLowerCase();
                            e = b[n] = b[n] || e, v[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? o : null
                    },
                    getResponseHeader: function(e) {
                        var n;
                        if (2 === x) {
                            if (!a)
                                for (a = {}; n = Ge.exec(o);) a[n[1].toLowerCase()] = n[2];
                            n = a[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function(e) {
                        return x || (d.mimeType = e), this
                    },
                    abort: function(e) {
                        return e = e || "abort", s && s.abort(e), r(0, e), this
                    }
                };
            if (m.promise(T), T.success = T.done, T.error = T.fail, T.complete = g.add, T.statusCode = function(e) {
                    if (e) {
                        var t;
                        if (2 > x)
                            for (t in e) y[t] = [y[t], e[t]];
                        else t = e[T.status], T.then(t, t)
                    }
                    return this
                }, d.url = ((e || d.url) + "").replace(Ue, "").replace(Ke, Re[1] + "//"), d.dataTypes = H.trim(d.dataType || "*").toLowerCase().split(nt), null == d.crossDomain && (u = it.exec(d.url.toLowerCase()), d.crossDomain = !(!u || u[1] == Re[1] && u[2] == Re[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) == (Re[3] || ("http:" === Re[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = H.param(d.data, d.traditional)), w(at, d, n, T), 2 === x) return !1;
            if (c = d.global, d.type = d.type.toUpperCase(), d.hasContent = !Ye.test(d.type), c && 0 === H.active++ && H.event.trigger("ajaxStart"), !d.hasContent && (d.data && (d.url += (Ze.test(d.url) ? "&" : "?") + d.data, delete d.data), i = d.url, d.cache === !1)) {
                var N = H.now(),
                    k = d.url.replace(rt, "$1_=" + N);
                d.url = k + (k === d.url ? (Ze.test(d.url) ? "&" : "?") + "_=" + N : "")
            }(d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), d.ifModified && (i = i || d.url, H.lastModified[i] && T.setRequestHeader("If-Modified-Since", H.lastModified[i]), H.etag[i] && T.setRequestHeader("If-None-Match", H.etag[i])), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + lt + "; q=0.01" : "") : d.accepts["*"]);
            for (f in d.headers) T.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (d.beforeSend.call(p, T, d) === !1 || 2 === x)) return T.abort(), !1;
            for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[f](d[f]);
            if (s = w(st, d, n, T)) {
                T.readyState = 1, c && h.trigger("ajaxSend", [T, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
                    T.abort("timeout")
                }, d.timeout));
                try {
                    x = 1, s.send(v, r)
                } catch (S) {
                    if (!(2 > x)) throw S;
                    r(-1, S)
                }
            } else r(-1, "No Transport");
            return T
        },
        param: function(e, n) {
            var r = [],
                i = function(e, t) {
                    t = H.isFunction(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = H.ajaxSettings.traditional), H.isArray(e) || e.jquery && !H.isPlainObject(e)) H.each(e, function() {
                i(this.name, this.value)
            });
            else
                for (var o in e) N(o, e[o], n, i);
            return r.join("&").replace(Xe, "+")
        }
    }), H.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var ct = H.now(),
        ft = /(\=)\?(&|$)|\?\?/i;
    H.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return H.expando + "_" + ct++
        }
    }), H.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i = "application/x-www-form-urlencoded" === t.contentType && "string" == typeof t.data;
        if ("jsonp" === t.dataTypes[0] || t.jsonp !== !1 && (ft.test(t.url) || i && ft.test(t.data))) {
            var o, a = t.jsonpCallback = H.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                s = e[a],
                l = t.url,
                u = t.data,
                c = "$1" + a + "$2";
            return t.jsonp !== !1 && (l = l.replace(ft, c), t.url === l && (i && (u = u.replace(ft, c)), t.data === u && (l += (/\?/.test(l) ? "&" : "?") + t.jsonp + "=" + a))), t.url = l, t.data = u, e[a] = function(e) {
                o = [e]
            }, r.always(function() {
                e[a] = s, o && H.isFunction(s) && e[a](o[0])
            }), t.converters["script json"] = function() {
                return o || H.error(a + " was not called"), o[0]
            }, t.dataTypes[0] = "json", "script"
        }
    }), H.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return H.globalEval(e), e
            }
        }
    }), H.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), H.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = M.head || M.getElementsByTagName("head")[0] || M.documentElement;
            return {
                send: function(i, o) {
                    n = M.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                        (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var dt, pt = e.ActiveXObject ? function() {
            for (var e in dt) dt[e](0, 1)
        } : !1,
        ht = 0;
    H.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && k() || S()
        } : k,
        function(e) {
            H.extend(H.support, {
                ajax: !!e,
                cors: !!e && "withCredentials" in e
            })
        }(H.ajaxSettings.xhr()), H.support.ajax && H.ajaxTransport(function(n) {
            if (!n.crossDomain || H.support.cors) {
                var r;
                return {
                    send: function(i, o) {
                        var a, s, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                            for (s in n.xhrFields) l[s] = n.xhrFields[s];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in i) l.setRequestHeader(s, i[s])
                        } catch (u) {}
                        l.send(n.hasContent && n.data || null), r = function(e, i) {
                            var s, u, c, f, d;
                            try {
                                if (r && (i || 4 === l.readyState))
                                    if (r = t, a && (l.onreadystatechange = H.noop, pt && delete dt[a]), i) 4 !== l.readyState && l.abort();
                                    else {
                                        s = l.status, c = l.getAllResponseHeaders(), f = {}, d = l.responseXML, d && d.documentElement && (f.xml = d), f.text = l.responseText;
                                        try {
                                            u = l.statusText
                                        } catch (p) {
                                            u = ""
                                        }
                                        s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                                    }
                            } catch (h) {
                                i || o(-1, h)
                            }
                            f && o(s, u, f, c)
                        }, n.async && 4 !== l.readyState ? (a = ++ht, pt && (dt || (dt = {}, H(e).unload(pt)), dt[a] = r), l.onreadystatechange = r) : r()
                    },
                    abort: function() {
                        r && r(0, 1)
                    }
                }
            }
        });
    var mt, gt, yt, vt, bt = {},
        xt = /^(?:toggle|show|hide)$/,
        wt = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        Tt = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    H.fn.extend({
        show: function(e, t, n) {
            var r, i;
            if (e || 0 === e) return this.animate(j("show", 3), e, t, n);
            for (var o = 0, a = this.length; a > o; o++) r = this[o], r.style && (i = r.style.display, H._data(r, "olddisplay") || "none" !== i || (i = r.style.display = ""), "" === i && "none" === H.css(r, "display") && H._data(r, "olddisplay", F(r.nodeName)));
            for (o = 0; a > o; o++) r = this[o], r.style && (i = r.style.display, ("" === i || "none" === i) && (r.style.display = H._data(r, "olddisplay") || ""));
            return this
        },
        hide: function(e, t, n) {
            if (e || 0 === e) return this.animate(j("hide", 3), e, t, n);
            for (var r, i, o = 0, a = this.length; a > o; o++) r = this[o], r.style && (i = H.css(r, "display"), "none" === i || H._data(r, "olddisplay") || H._data(r, "olddisplay", i));
            for (o = 0; a > o; o++) this[o].style && (this[o].style.display = "none");
            return this
        },
        _toggle: H.fn.toggle,
        toggle: function(e, t, n) {
            var r = "boolean" == typeof e;
            return H.isFunction(e) && H.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || r ? this.each(function() {
                var t = r ? e : H(this).is(":hidden");
                H(this)[t ? "show" : "hide"]()
            }) : this.animate(j("toggle", 3), e, t, n), this
        },
        fadeTo: function(e, t, n, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            function i() {
                o.queue === !1 && H._mark(this);
                var t, n, r, i, a, s, l, u, c, f = H.extend({}, o),
                    d = 1 === this.nodeType,
                    p = d && H(this).is(":hidden");
                f.animatedProperties = {};
                for (r in e) {
                    if (t = H.camelCase(r), r !== t && (e[t] = e[r], delete e[r]), n = e[t], H.isArray(n) ? (f.animatedProperties[t] = n[1], n = e[t] = n[0]) : f.animatedProperties[t] = f.specialEasing && f.specialEasing[t] || f.easing || "swing", "hide" === n && p || "show" === n && !p) return f.complete.call(this);
                    !d || "height" !== t && "width" !== t || (f.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === H.css(this, "display") && "none" === H.css(this, "float") && (H.support.inlineBlockNeedsLayout && "inline" !== F(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                null != f.overflow && (this.style.overflow = "hidden");
                for (r in e) i = new H.fx(this, f, r), n = e[r], xt.test(n) ? (c = H._data(this, "toggle" + r) || ("toggle" === n ? p ? "show" : "hide" : 0), c ? (H._data(this, "toggle" + r, "show" === c ? "hide" : "show"), i[c]()) : i[n]()) : (a = wt.exec(n), s = i.cur(), a ? (l = parseFloat(a[2]), u = a[3] || (H.cssNumber[r] ? "" : "px"), "px" !== u && (H.style(this, r, (l || 1) + u), s = (l || 1) / i.cur() * s, H.style(this, r, s + u)), a[1] && (l = ("-=" === a[1] ? -1 : 1) * l + s), i.custom(s, l, u)) : i.custom(s, n, ""));
                return !0
            }
            var o = H.speed(t, n, r);
            return H.isEmptyObject(e) ? this.each(o.complete, [!1]) : (e = H.extend({}, e), o.queue === !1 ? this.each(i) : this.queue(o.queue, i))
        },
        stop: function(e, n, r) {
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                function t(e, t, n) {
                    var i = t[n];
                    H.removeData(e, n, !0), i.stop(r)
                }
                var n, i = !1,
                    o = H.timers,
                    a = H._data(this);
                if (r || H._unmark(!0, this), null == e)
                    for (n in a) a[n] && a[n].stop && n.indexOf(".run") === n.length - 4 && t(this, a, n);
                else a[n = e + ".run"] && a[n].stop && t(this, a, n);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (r ? o[n](!0) : o[n].saveState(), i = !0, o.splice(n, 1));
                r && i || H.dequeue(this, e)
            })
        }
    }), H.each({
        slideDown: j("show", 1),
        slideUp: j("hide", 1),
        slideToggle: j("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        H.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), H.extend({
        speed: function(e, t, n) {
            var r = e && "object" == typeof e ? H.extend({}, e) : {
                complete: n || !n && t || H.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !H.isFunction(t) && t
            };
            return r.duration = H.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in H.fx.speeds ? H.fx.speeds[r.duration] : H.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function(e) {
                H.isFunction(r.old) && r.old.call(this), r.queue ? H.dequeue(this, r.queue) : e !== !1 && H._unmark(this)
            }, r
        },
        easing: {
            linear: function(e, t, n, r) {
                return n + r * e
            },
            swing: function(e, t, n, r) {
                return (-Math.cos(e * Math.PI) / 2 + .5) * r + n
            }
        },
        timers: [],
        fx: function(e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
        }
    }), H.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (H.fx.step[this.prop] || H.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var e, t = H.css(this.elem, this.prop);
            return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e
        },
        custom: function(e, n, r) {
            function i(e) {
                return o.step(e)
            }
            var o = this,
                a = H.fx;
            this.startTime = vt || A(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = r || this.unit || (H.cssNumber[this.prop] ? "" : "px"), i.queue = this.options.queue, i.elem = this.elem, i.saveState = function() {
                o.options.hide && H._data(o.elem, "fxshow" + o.prop) === t && H._data(o.elem, "fxshow" + o.prop, o.start)
            }, i() && H.timers.push(i) && !yt && (yt = setInterval(a.tick, a.interval))
        },
        show: function() {
            var e = H._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || H.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), H(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = H._data(this.elem, "fxshow" + this.prop) || H.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function(e) {
            var t, n, r, i = vt || A(),
                o = !0,
                a = this.elem,
                s = this.options;
            if (e || i >= s.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), s.animatedProperties[this.prop] = !0;
                for (t in s.animatedProperties) s.animatedProperties[t] !== !0 && (o = !1);
                if (o) {
                    if (null == s.overflow || H.support.shrinkWrapBlocks || H.each(["", "X", "Y"], function(e, t) {
                            a.style["overflow" + t] = s.overflow[e]
                        }), s.hide && H(a).hide(), s.hide || s.show)
                        for (t in s.animatedProperties) H.style(a, t, s.orig[t]), H.removeData(a, "fxshow" + t, !0), H.removeData(a, "toggle" + t, !0);
                    r = s.complete, r && (s.complete = !1, r.call(a))
                }
                return !1
            }
            return s.duration == 1 / 0 ? this.now = i : (n = i - this.startTime, this.state = n / s.duration, this.pos = H.easing[s.animatedProperties[this.prop]](this.state, n, 0, 1, s.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, H.extend(H.fx, {
        tick: function() {
            for (var e, t = H.timers, n = 0; n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || H.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(yt), yt = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(e) {
                H.style(e.elem, "opacity", e.now)
            },
            _default: function(e) {
                e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), H.each(["width", "height"], function(e, t) {
        H.fx.step[t] = function(e) {
            H.style(e.elem, t, Math.max(0, e.now) + e.unit)
        }
    }), H.expr && H.expr.filters && (H.expr.filters.animated = function(e) {
        return H.grep(H.timers, function(t) {
            return e === t.elem
        }).length
    });
    var Nt = /^t(?:able|d|h)$/i,
        Ct = /^(?:body|html)$/i;
    "getBoundingClientRect" in M.documentElement ? H.fn.offset = function(e) {
        var t, n = this[0];
        if (e) return this.each(function(t) {
            H.offset.setOffset(this, e, t)
        });
        if (!n || !n.ownerDocument) return null;
        if (n === n.ownerDocument.body) return H.offset.bodyOffset(n);
        try {
            t = n.getBoundingClientRect()
        } catch (r) {}
        var i = n.ownerDocument,
            o = i.documentElement;
        if (!t || !H.contains(o, n)) return t ? {
            top: t.top,
            left: t.left
        } : {
            top: 0,
            left: 0
        };
        var a = i.body,
            s = D(i),
            l = o.clientTop || a.clientTop || 0,
            u = o.clientLeft || a.clientLeft || 0,
            c = s.pageYOffset || H.support.boxModel && o.scrollTop || a.scrollTop,
            f = s.pageXOffset || H.support.boxModel && o.scrollLeft || a.scrollLeft,
            d = t.top + c - l,
            p = t.left + f - u;
        return {
            top: d,
            left: p
        }
    } : H.fn.offset = function(e) {
        var t = this[0];
        if (e) return this.each(function(t) {
            H.offset.setOffset(this, e, t)
        });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return H.offset.bodyOffset(t);
        for (var n, r = t.offsetParent, i = t, o = t.ownerDocument, a = o.documentElement, s = o.body, l = o.defaultView, u = l ? l.getComputedStyle(t, null) : t.currentStyle, c = t.offsetTop, f = t.offsetLeft;
            (t = t.parentNode) && t !== s && t !== a && (!H.support.fixedPosition || "fixed" !== u.position);) n = l ? l.getComputedStyle(t, null) : t.currentStyle, c -= t.scrollTop, f -= t.scrollLeft, t === r && (c += t.offsetTop, f += t.offsetLeft, !H.support.doesNotAddBorder || H.support.doesAddBorderForTableAndCells && Nt.test(t.nodeName) || (c += parseFloat(n.borderTopWidth) || 0, f += parseFloat(n.borderLeftWidth) || 0), i = r, r = t.offsetParent), H.support.subtractsBorderForOverflowNotVisible && "visible" !== n.overflow && (c += parseFloat(n.borderTopWidth) || 0, f += parseFloat(n.borderLeftWidth) || 0), u = n;
        return ("relative" === u.position || "static" === u.position) && (c += s.offsetTop, f += s.offsetLeft), H.support.fixedPosition && "fixed" === u.position && (c += Math.max(a.scrollTop, s.scrollTop), f += Math.max(a.scrollLeft, s.scrollLeft)), {
            top: c,
            left: f
        }
    }, H.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return H.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(H.css(e, "marginTop")) || 0, n += parseFloat(H.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r = H.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = H(e),
                s = a.offset(),
                l = H.css(e, "top"),
                u = H.css(e, "left"),
                c = ("absolute" === r || "fixed" === r) && H.inArray("auto", [l, u]) > -1,
                f = {},
                d = {};
            c ? (d = a.position(), i = d.top, o = d.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), H.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
        }
    }, H.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = Ct.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(H.css(e, "marginTop")) || 0, n.left -= parseFloat(H.css(e, "marginLeft")) || 0, r.top += parseFloat(H.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(H.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || M.body; e && !Ct.test(e.nodeName) && "static" === H.css(e, "position");) e = e.offsetParent;
                return e
            })
        }
    }), H.each(["Left", "Top"], function(e, n) {
        var r = "scroll" + n;
        H.fn[r] = function(n) {
            var i, o;
            return n === t ? (i = this[0]) ? (o = D(i), o ? "pageXOffset" in o ? o[e ? "pageYOffset" : "pageXOffset"] : H.support.boxModel && o.document.documentElement[r] || o.document.body[r] : i[r]) : null : this.each(function() {
                o = D(this), o ? o.scrollTo(e ? H(o).scrollLeft() : n, e ? n : H(o).scrollTop()) : this[r] = n
            })
        }
    }), H.each(["Height", "Width"], function(e, n) {
        var r = n.toLowerCase();
        H.fn["inner" + n] = function() {
            var e = this[0];
            return e ? e.style ? parseFloat(H.css(e, r, "padding")) : this[r]() : null
        }, H.fn["outer" + n] = function(e) {
            var t = this[0];
            return t ? t.style ? parseFloat(H.css(t, r, e ? "margin" : "border")) : this[r]() : null
        }, H.fn[r] = function(e) {
            var i = this[0];
            if (!i) return null == e ? null : this;
            if (H.isFunction(e)) return this.each(function(t) {
                var n = H(this);
                n[r](e.call(this, t, n[r]()))
            });
            if (H.isWindow(i)) {
                var o = i.document.documentElement["client" + n],
                    a = i.document.body;
                return "CSS1Compat" === i.document.compatMode && o || a && a["client" + n] || o
            }
            if (9 === i.nodeType) return Math.max(i.documentElement["client" + n], i.body["scroll" + n], i.documentElement["scroll" + n], i.body["offset" + n], i.documentElement["offset" + n]);
            if (e === t) {
                var s = H.css(i, r),
                    l = parseFloat(s);
                return H.isNumeric(l) ? l : s
            }
            return this.css(r, "string" == typeof e ? e : e + "px")
        }
    }), e.jQuery = e.$ = H, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return H
    })
}(window), ! function(e) {
    "use strict";

    function t(e, t, n) {
        return "function" == typeof e ? e.apply(t, n) : e
    }
    var n;
    e(document).ready(function() {
        e.support.transition = function() {
            var e = document.body || document.documentElement,
                t = e.style,
                n = void 0 !== t.transition || void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.MsTransition || void 0 !== t.OTransition;
            return n
        }(), e.support.transition && (n = "TransitionEnd", e.browser.webkit ? n = "webkitTransitionEnd" : e.browser.mozilla ? n = "transitionend" : e.browser.opera && (n = "oTransitionEnd"))
    });
    var r = function(t, n) {
        this.$element = e(t), this.options = n, this.enabled = !0, this.fixTitle()
    };
    r.prototype = {
        show: function() {
            var n, r, i, o, a, s;
            if (this.hasContent() && this.enabled) {
                switch (a = this.tip(), this.setContent(), this.options.animate && a.addClass("fade"), a.remove().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).prependTo(document.body), n = e.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                }), r = a[0].offsetWidth, i = a[0].offsetHeight, o = t(this.options.placement, this, [a[0], this.$element[0]])) {
                    case "below":
                        s = {
                            top: n.top + n.height + this.options.offset,
                            left: n.left + n.width / 2 - r / 2
                        };
                        break;
                    case "above":
                        s = {
                            top: n.top - i - this.options.offset,
                            left: n.left + n.width / 2 - r / 2
                        };
                        break;
                    case "left":
                        s = {
                            top: n.top + n.height / 2 - i / 2,
                            left: n.left - r - this.options.offset
                        };
                        break;
                    case "right":
                        s = {
                            top: n.top + n.height / 2 - i / 2,
                            left: n.left + n.width + this.options.offset
                        }
                }
                a.css(s).addClass(o).addClass("in")
            }
        },
        setContent: function() {
            var e = this.tip();
            e.find(".twipsy-inner")[this.options.html ? "html" : "text"](this.getTitle()), e[0].className = "twipsy"
        },
        hide: function() {
            function t() {
                r.remove()
            }
            var r = this.tip();
            r.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? r.bind(n, t) : t()
        },
        fixTitle: function() {
            var e = this.$element;
            (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").removeAttr("title")
        },
        hasContent: function() {
            return this.getTitle()
        },
        getTitle: function() {
            var e, t = this.$element,
                n = this.options;
            return this.fixTitle(), "string" == typeof n.title ? e = t.attr("title" == n.title ? "data-original-title" : n.title) : "function" == typeof n.title && (e = n.title.call(t[0])), e = ("" + e).replace(/(^\s*|\s*$)/, ""), e || n.fallback
        },
        tip: function() {
            return this.$tip = this.$tip || e('<div class="twipsy" />').html(this.options.template)
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        },
        toggle: function() {
            this[this.tip().hasClass("in") ? "hide" : "show"]()
        }
    }, e.fn.twipsy = function(t) {
        return e.fn.twipsy.initWith.call(this, t, r, "twipsy"), this
    }, e.fn.twipsy.initWith = function(t, n, r) {
        function i(i) {
            var o = e.data(i, r);
            return o || (o = new n(i, e.fn.twipsy.elementOptions(i, t)), e.data(i, r, o)), o
        }

        function o() {
            var e = i(this);
            e.hoverState = "in", 0 == t.delayIn ? e.show() : (e.fixTitle(), setTimeout(function() {
                "in" == e.hoverState && e.show()
            }, t.delayIn))
        }

        function a() {
            var e = i(this);
            e.hoverState = "out", 0 == t.delayOut ? e.hide() : setTimeout(function() {
                "out" == e.hoverState && e.hide()
            }, t.delayOut)
        }
        var s, l, u, c;
        return t === !0 ? this.data(r) : "string" == typeof t ? (s = this.data(r), s && s[t](), this) : (t = e.extend({}, e.fn[r].defaults, t), t.live || this.each(function() {
            i(this)
        }), "manual" != t.trigger && (l = t.live ? "live" : "bind", u = "hover" == t.trigger ? "mouseenter" : "focus", c = "hover" == t.trigger ? "mouseleave" : "blur", this[l](u, o)[l](c, a)), this)
    }, e.fn.twipsy.Twipsy = r, e.fn.twipsy.defaults = {
        animate: !0,
        delayIn: 0,
        delayOut: 0,
        fallback: "",
        placement: "above",
        html: !1,
        live: !1,
        offset: 0,
        title: "title",
        trigger: "hover",
        template: '<div class="twipsy-arrow"></div><div class="twipsy-inner"></div>'
    }, e.fn.twipsy.rejectAttrOptions = ["title"], e.fn.twipsy.elementOptions = function(t, n) {
        for (var r = e(t).data(), i = e.fn.twipsy.rejectAttrOptions, o = i.length; o--;) delete r[i[o]];
        return e.extend({}, n, r)
    }
}(window.jQuery || window.ender),
function(e) {
    e.fn.animateProgress = function(t, n) {
        return this.each(function() {
            e(this).animate({
                width: t + "%"
            }, {
                duration: 5e3,
                easing: "swing",
                step: function(t) {
                    var n = e(".ui-label", this),
                        r = e(".value", n);
                    Math.ceil(t) < 20 && e(".ui-label", this).is(":visible") ? n.hide() : n.is(":hidden") && n.fadeIn(), 100 == Math.ceil(t) ? (n.text("Complete"), setTimeout(function() {
                        n.fadeOut()
                    }, 2e4)) : r.text(Math.ceil(t) + "%")
                },
                complete: function(e, t, r) {
                    n && n.call(this, t, r)
                }
            })
        })
    }
}(jQuery),
function() {
    window.App = {
        sections: ["intro", "compatibility", "wild"],
        progressBar: null,
        init: function() {
            var e;
            return e = this, $('a[rel="twipsy"], abbr').twipsy(), this.progressBar = $("#progress_bar"), this.progressBar.removeClass("transition").addClass("error").addClass("transition"), $(".ui-progress .ui-label", this.progressBar).hide(), $(".ui-progress", this.progressBar).css("width", "7%"), e.fadeInNextSection(), $(".ui-progress", this.progressBar).animateProgress(30, function() {
                return setTimeout(function() {
                    return $("#progress_bar").removeClass("error").addClass("warning"), $("#progress_bar .ui-progress").animateProgress(75, function() {
                        window.location = './failed'
                        return setTimeout(function() {
                            return $("#progress_bar .ui-progress").animateProgress(100, function() {
                                $("footer").fadeIn(5e3), e.fadeInNextSection()
                            })
                        }, 1e4)
                    })
                }, 1e4)
            })
        },
        fadeIn: function(e) {
            return $("section." + e).fadeIn("slow")
        },
        fadeInNextSection: function() {
            return this.sections.length > 0 ? this.fadeIn(this.sections.shift()) : void 0
        }
    }
}.call(this);